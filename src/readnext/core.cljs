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
;; ミスの理由を計算する
;; 配球を合理的にする
;; 点数の描画を遅くする

(.addEventListener js/window "DOMContentLoaded"
                   (fn []
                     (g/init-context! :offensive)
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
      (g/play! player ((first target) :direction)))))

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

(defn draw-service []
  (g/record-service!)
  (let [{rallies :rallies} (g/get-context)
        rally (d/last-rally rallies)
        rally-end? (d/rally-end? rally)
        stroke (d/last-stroke rally)
        {from :start-pos to :end-pos} stroke
        stroker (if rally-end? (rally :won-by) (d/next-stroker rallies))
        from-pos (find-target from
                              (if (= stroker :pc) npc-targets pc-targets))
        {x :x y :y }  from-pos]
    (reset! shuttle-pos {:x x :y y })))

(defn to-pos-or-net [to-pos rally-end?]
  (let [to-pos (if rally-end?
                 {:x (to-pos :x) :y net-y}
                 to-pos)]
    to-pos))

(defn draw-shuttle-and-targets []
  ;;もっとletを短くできないのか
  ;;関数に分ければいいかも
  (let [{rallies :rallies} (g/get-context)
        rally (d/last-rally rallies)
        rally-end? (d/rally-end? rally)
        stroke (d/last-stroke rally)
        {from :start-pos to :end-pos} stroke
        stroker (if rally-end? (rally :won-by) (d/next-stroker rallies))
        from-pos (find-target from
                              (if (= stroker :pc) npc-targets pc-targets))
        to-pos (find-target to
                            (if (= stroker :pc) pc-targets npc-targets))
        to-pos2 (to-pos-or-net to-pos rally-end?)
        ]
    (draw-shuttle)
    (cond
      (d/game-end? (g/get-context)) nil
      (m/in-ellipse to-pos2 @shuttle-pos target-radius) (if rally-end?
                                                          (draw-service)
                                                          (draw-colored-targets))
      :else (move-shuttle! from-pos to-pos2 rally-end?))))

(defn player-string [player]
  (case player
    :npc "NPC"
    :pc "PC"
    :doubt ""))

(defn draw-context []
  (let [{rallies :rallies} (g/get-context)
        rally (d/last-rally rallies)
        stroker (if (d/rally-end? rally)
                  (rally :won-by)
                  (d/next-stroker rallies))
        server (d/next-server (g/get-context))
        pc-points (d/score-of :pc rallies)
        npc-points (d/score-of :npc rallies)]
    (q/fill 0)
    (q/text-size 20)
    ;; あとでフォーマットを入れる
    (q/text (str "PC " pc-points " - " npc-points " NPC" ) 20 340)
    (q/text (str "サービス権 " (player-string server))  20 370)
    (q/text (str "ストローカー " (player-string stroker))  20 400)))

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
  :size [300 450])
