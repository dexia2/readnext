(ns readnext.core
  (:require [clojure.browser.repl :as repl]
            [quil.core :as q :include-macros true]
            [readnext.motion :as m]
            [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.game :as g]
            ))

;; (defonce conncore
;;   (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

;; Todo
;; ミスを描画できるようにする
;; ミスの場合ゴールを変更しないといけないはず
;; かつ、壁にぶつかったタイミングでサーブを描画できるようにする

(.addEventListener js/window "DOMContentLoaded"
                   (fn []
                     (g/init-context! (g/random-mode))
                     (g/record-service!)))

(def target-radius 15)
(def shuttle-radius 15)
(def shuttle-speed 15)
(def shuttle-pos (atom nil))
(def npc-targets #{
                   {:direction :front-left :x 240 :y 110 }
                   {:direction :front-right :x 40 :y 110 }
                   {:direction :middle-left :x 240 :y 70 }
                   {:direction :middle-right :x 40 :y 70 }
                   {:direction :back-left :x 240 :y 30 }
                   {:direction :back-right :x 40 :y 30 }
                   })
(def pc-targets #{
                  {:direction :front-left :x 40 :y 180 }
                  {:direction :front-right :x 240 :y 180 }
                  {:direction :middle-left :x 40 :y 220 }
                  {:direction :middle-right :x 240 :y 220 }
                  {:direction :back-left :x 40 :y 260 }
                  {:direction :back-right :x 240 :y 260 }
                  })

(defn draw-court []
  (q/stroke 0)
  (q/fill 255) 
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

(defn touched-target
  [mouse-x mouse-y targets]
  (filter (fn [target] (m/in-ellipse target
                                     {:x mouse-x :y mouse-y}
                                     target-radius))
          targets))

(defn find-target
  [direction targets]
  (first
   (filter (fn [target] (= (target :direction) direction))
           (seq targets))))

(defn draw-colored-targets []
  (let [rallies ((g/get-context) :rallies)
        last-rally (d/last-rally rallies)
        player (if (d/rally-end? last-rally)
                 (last-rally :won-by)
                 (d/next-stroker rallies))
        targets (if (= :pc player)
                  npc-targets pc-targets)
        target  (touched-target (q/mouse-x) (q/mouse-y) targets)]
    (q/stroke 0)
    (q/fill 255) 
    (draw-targets targets)
    (when-not (empty? target)
      (q/fill 240 179 37)
      (q/stroke 240 179 37)       
      (draw-targets target)
      (g/play!))))

(defn draw-shuttle []
  (when @shuttle-pos
    (q/stroke 240 179 37) 
    (q/fill 240 179 37)
    (q/ellipse (@shuttle-pos :x)
               (@shuttle-pos :y)
               shuttle-radius
               shuttle-radius)))

(defn move-shuttle! [from-pos to-pos rally-end?]
  (when-not @shuttle-pos
    (reset! shuttle-pos {:x (from-pos :x)
                         :y (from-pos :y)}))
  (reset! shuttle-pos (m/move to-pos @shuttle-pos target-radius shuttle-speed)))

(defn draw []
  (draw-court)

  (println (g/get-context))
  (let [{rallies :rallies} (g/get-context)
        rally (d/last-rally rallies)
        rally-end? (d/rally-end? rally)
        stroke (d/last-stroke rally)
        {from :start-pos to :end-pos} stroke
        stroker (if rally-end? (rally :won-by) (d/next-stroker rallies))
        from-pos (find-target from
                              (if (= stroker :pc) npc-targets pc-targets))
        to-pos (find-target to
                            (if (= stroker :pc) pc-targets npc-targets))]
    (draw-shuttle)
    (cond
      (d/game-end? (g/get-context)) nil
      (and (not rally-end?)
           (m/in-ellipse to-pos @shuttle-pos target-radius)) (draw-colored-targets)
      :else (move-shuttle! from-pos to-pos rally-end?)) 
    )
  
  )

(defn setup []
  (q/frame-rate 5))

(q/defsketch court
  :setup setup
  :draw draw
  :host "court"
  :size [300 300])
