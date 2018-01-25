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

;;Todo
;;サーブとサーブレシーブを正しく描画する
;;predictの仕組み導入（そもそもいるのか？）
;;きちんと止まるように考える
;;ミスを描画できるようにする

(.addEventListener js/window "DOMContentLoaded"
                   (fn []
                     (g/init-context! (g/random-mode))
                     (g/record-service!)
                     (g/decide-stroke! :npc nil true)))

(def target-radius 15)
(def shuttle-radius 15)
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

(defn draw []
  (q/stroke 0)
  (q/fill 255)
  (draw-court)
  
  (q/stroke 240 179 37)
  (let [targets (if (= :pc (d/next-stroker ((g/get-context) :rallies)))
                  pc-targets npc-targets)
        target  (touched-target (q/mouse-x) (q/mouse-y) targets)]
    (draw-targets targets)
    (when-not (empty? target)
      (q/fill 240 179 37)
      (draw-targets target)
      (g/play!)))

  (q/fill 240 179 37)
  (let [{rallies :rallies} (g/get-context)
        rally (d/last-undecided-rally rallies)
        stroke (d/last-stroke rally)
        {from :start-pos to :end-pos} stroke
        stroker (d/next-stroker rallies)
        from-pos (find-target from
                              (if (= stroker :pc) pc-targets npc-targets))
        to-pos (find-target to
                            (if (= stroker :pc) npc-targets pc-targets))]
    (if @shuttle-pos
      (q/ellipse (@shuttle-pos :x)
                 (@shuttle-pos :y)
                 shuttle-radius
                 shuttle-radius)
      (reset! shuttle-pos {:x (from-pos :x)
                           :y (from-pos :y)}))
    (reset! shuttle-pos (m/move to-pos @shuttle-pos target-radius shuttle-speed)))
  
  )

(defn setup []
  (q/frame-rate 5))

(q/defsketch court
  :setup setup
  :draw draw
  :host "court"
  :size [300 300])
