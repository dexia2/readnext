(ns readnext.core
  (:require [clojure.browser.repl :as repl]
            [quil.core :as q :include-macros true]
            [readnext.motion :as m]
            [readnext.domain :as d]
            [readnext.util :as u]
            ))

;; (defonce conncore
;;   (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(def first-server :pc)
(def play-context (atom {}))
(def modes #{:offensive :defensive :net :all-round})
(def normal-score-limit 21)
(def max-score-limit 30)

(defn random-mode
  []
  (u/random-elm (seq modes)))

(defn next-direction
  [context]
  (u/random-elm (seq d/directions)))

(defn next-prediction
  []
  (nth (seq d/directions)
       (rand-int (count d/directions))))

(defn success?
  [context direction prediction]
  (<= 50 (rand-int 100)))

(defn init-context!
  [mode]
  (reset! play-context
          (d/init-context
           {:first-server first-server
            :score-limit normal-score-limit
            :deuce-limit max-score-limit
            })))

(defn record-stroke!
  [player direction prediction]
  (reset! play-context
          (d/record-stroke-to-context @play-context player direction)))

(defn fail-stroke!
  [player]
  (reset! play-context
          (d/fail-stroke @play-context player)))

(defn record-service!
  []
  (let [serve (d/next-serve @play-context)]
    (reset! play-context
            (d/record-service @play-context serve))))

(defn decide-stroke!
  ([player direction] (decide-stroke! player direction nil nil))
  ([player direction serve?] (decide-stroke! player direction serve? nil))
  ([player direction serve? prediction]
   (cond
     (d/game-end? @play-context) nil
     serve? (when (= player :npc)
              (record-stroke! player direction nil))
     (not (success?
           @play-context
           direction
           prediction)) (do
                          (record-stroke! player direction prediction)
                          (fail-stroke! player)
                          (when (not (d/game-end? @play-context))
                            (record-service!)
                            (when (= :npc (d/rival player))
                              (decide-stroke! (d/rival player) (next-direction @play-context) true))))
     :else (record-stroke! player direction prediction))))

(defn predict!
  [player direction]
  (when-not (d/game-end? @play-context)
    (if (= player :pc)
      (decide-stroke! :npc (next-direction @play-context) nil direction))))

(defn play!
  []
  (if (= (d/next-stroker (@play-context :rallies))
         :pc)
    (decide-stroke! :pc (next-direction @play-context) nil (next-prediction))
    (do
      (predict! :pc (next-prediction))
      (decide-stroke! :npc (next-direction @play-context) nil (next-prediction)))))

(.addEventListener js/window "DOMContentLoaded"
                   (fn []
                     (init-context! (random-mode))
                     (record-service!)
                     (decide-stroke! :npc nil true)))

(defn setup []
  (q/frame-rate 5))

(def target-radius 15)
(def shuttle-radius 15)
(def sideline-width 20)
(def court-width 300)
(def court-height 300)
(def target-padding 15)
(def shuttle-speed 15)
(def shuttle-pos (atom nil))
(def npc-targets #{
                   {:direction :front-left :x 40 :y 110 }
                   {:direction :front-right :x 240 :y 110 }
                   {:direction :middle-left :x 40 :y 70 }
                   {:direction :middle-right :x 240 :y 70 }
                   {:direction :back-left :x 40 :y 30 }
                   {:direction :back-right :x 240 :y 30 }
                   })

;;計算で出したいが、関係性を記述するのがしんどい
(def pc-targets #{
                  {:direction :front-left :x 40 :y 180 }
                  {:direction :front-right :x 240 :y 180 }
                  {:direction :middle-left :x 40 :y 220 }
                  {:direction :middle-right :x 240 :y 220 }
                  {:direction :back-left :x 40 :y 260 }
                  {:direction :back-right :x 240 :y 260 }
                  })

(defn draw-court []
  (q/rect 0 0 290 290)                                      ;コート全体
  (q/line 20 0 20 290)                                      ;サイドライン（左)
  (q/line 145 0 145 290)                                    ;センターライン（縦）
  (q/line 270 0 270 290)                                    ;サイドライン（右）
  (q/line 0 50 290 50)                                      ;サービスライン（ダブルス）
  (q/line 0 145 290 145)                                    ;ネット
  (q/line 0 240 290 240)                                    ;サービスライン（ダブルス）
  )

(defn draw-targets [targets]
  (doseq [{x :x y :y} (seq targets)]
    (q/ellipse x y  (* target-radius 2) (* target-radius 2))))

(defn in-target [mouse-x mouse-y targets]
  (filter (fn [target] (m/in-ellipse target
                                     {:x mouse-x :y mouse-y}
                                     shuttle-radius))
          targets))

(defn target-of [direction targets]
  (first
    (filter (fn [target] (= (target :direction) direction))
            (seq targets))))

(defn draw []
  (q/stroke 0)
  (q/fill 255)
  (draw-court)
  (q/stroke 240 179 37)

  (let [targets (if (= :pc (d/next-stroker (@play-context :rallies)))
                  pc-targets npc-targets)
        target  (in-target (q/mouse-x) (q/mouse-y) targets)]
    (draw-targets targets)
    (when-not (empty? target)
      (q/fill 240 179 37)
      (draw-targets target)
      (play!)))

  (q/fill 240 179 37)
  (let [rally (d/last-undecided-rally (@play-context :rallies))
        stroke (d/last-stroke rally)
        {from :start-pos to :end-pos} stroke
        stroker (d/next-stroker (@play-context :rallies))
        from-pos (target-of from
                            (if (= stroker :pc) pc-targets npc-targets))
        to-pos (target-of to
                          (if (= stroker :pc) npc-targets pc-targets))]
    (if @shuttle-pos
      (q/ellipse (@shuttle-pos :x)
                 (@shuttle-pos :y)
                 shuttle-radius
                 shuttle-radius)
      (reset! shuttle-pos {:x (from-pos :x)
                           :y (from-pos :y)}))

    (reset! shuttle-pos (m/move to-pos @shuttle-pos target-radius shuttle-speed))
    )
  )

(q/defsketch court
             :setup setup
             :draw draw
             :host "court"
             :size [300 300])
