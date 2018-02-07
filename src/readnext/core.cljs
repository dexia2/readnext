(ns readnext.core
  (:require [clojure.browser.repl :as repl]
            [quil.core :as q :include-macros true]
            [readnext.motion :as m]
            [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.game :as g]
            [goog.string :as gstring]
            [goog.string.format]
            ))

;; (defonce conncore
;;   (repl/connect "http://localhost:9000/repl"))
(enable-console-print!)

(.addEventListener js/window "DOMContentLoaded"
                   (fn []
                     (g/init-context!)
                     (g/init-mode!)
                     (g/record-service!)))

(def court-height 300)
(def court-width 300)
(def net-y (/ court-height 2))
(def target-radius 15)
(def shuttle-radius 15)
(def shuttle-speed 8)
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

(defn find-target
  [direction targets]
  (first
   (filter (fn [{d :direction}] (= d direction))
           (seq targets))))

(defn touched-target
  [{mouse-x :x mouse-y :y} targets]
  (filter (fn [target] (m/in-ellipse target
                                     {:x mouse-x :y mouse-y}
                                     target-radius))
          targets))

(defn draw-targets [targets]
  (doseq [{:keys [x y]} (seq targets)]
    (q/ellipse x y  (* target-radius 2) (* target-radius 2))))

(defn draw-colored-targets []
  (let [stroker (d/next-hitter ((g/get-context) :rallies))
        targets (if (= :pc stroker) npc-targets pc-targets)
        target  (touched-target {:x (q/mouse-x) :y (q/mouse-y)}
                                targets)]
    (q/stroke 0)
    (q/fill 255)
    (draw-targets targets)
    (when-not (empty? target)
      (q/fill 240 179 37)
      (q/stroke 240 179 37)
      (draw-targets target)
      (g/play! ((first target) :direction)))))

(defn draw-shuttle []
  (when @shuttle-pos
    (q/stroke 240 179 37)
    (q/fill 240 179 37)
    (q/ellipse (@shuttle-pos :x)
               (@shuttle-pos :y)
               shuttle-radius
               shuttle-radius)))

(defn stroking-from []
  (let [{:keys [rallies]} (g/get-context)
        stroker (d/next-hitter rallies)
        {from :start-pos} (d/latest-stroke rallies)
        from-pos (find-target from
                              (if (= stroker :pc) npc-targets pc-targets))]
    from-pos))

(defn to-net [to-pos]
  {:x (to-pos :x) :y net-y})

(defn stroking-to [rally-end?]
  (let [{:keys [rallies]} (g/get-context)
        stroker (d/next-hitter rallies)
        {to :end-pos} (d/latest-stroke rallies)
        to-pos (find-target to
                            (if (= stroker :pc) pc-targets npc-targets))]
    (if rally-end? (to-net to-pos) to-pos)))

(defn move-shuttle!
  [rally-end?]
  (let [{:keys [x y]} (stroking-from)
        to-pos (stroking-to rally-end?)]
    (when-not @shuttle-pos
      (reset! shuttle-pos {:x x :y y}))
    (reset! shuttle-pos
            (m/move to-pos @shuttle-pos target-radius shuttle-speed))))

(defn draw-service! []
  (g/record-service!)
  (let [{:keys [x y]} (stroking-from)]
    (reset! shuttle-pos {:x x :y y })))

(defn draw-shuttle-and-targets []
  (let [rally-end? (d/last-rally-end? (g/get-context))
        stroker (d/next-hitter ((g/get-context) :rallies))
        to-pos (stroking-to rally-end?)]
    (draw-shuttle)
    (cond
      (d/game-end? (g/get-context)) nil
      (m/in-ellipse
       to-pos @shuttle-pos target-radius) (if rally-end?
                                            (draw-service!)
                                            (if (= stroker :npc)
                                              (draw-colored-targets)
                                              (g/play!)))
      :else (move-shuttle! rally-end?))))

(defn player-string [player]
  (case player
    :npc "NPC"
    :pc "PC"
    :doubt ""))

(defn mode-string [mode]
  (case mode
    :offensive "攻撃的"
    :defensive "守備的"
    :net "ネット中心"))

(defn draw-context []
  (let [{:keys [rallies]} (g/get-context)
        stroker (d/next-hitter rallies)
        server (d/next-server (g/get-context))
        pc-points (d/score-of :pc rallies)
        npc-points (d/score-of :npc rallies)]
    (q/fill 0)
    (q/text-size 20)
    (q/text (gstring/format "PC %s - %s NPC" pc-points npc-points) 20 340)
    (q/text (gstring/format "サービス権 %s"　(player-string server)) 20 370)
    (q/text (gstring/format "ストローカー %s"　(player-string stroker)) 20 400)
    (q/text (gstring/format "モード %s"　(mode-string (g/get-mode))) 20 430)
    ))

(defn draw []
  ;; clear
  (q/background 255)
  (draw-court)
  (draw-shuttle-and-targets)
  (draw-context)
  )

(defn setup []
  (q/frame-rate 5))

(q/defsketch court
  :setup setup
  :draw draw
  :host "court"
  :size [300 500])
