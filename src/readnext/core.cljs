(ns readnext.core
  (:require [clojure.browser.repl :as repl]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;TODO
;予測を追加
;testを書く
;得点を計算する
;ある時点での得点も計算する
;次のストロークを計算
;AI周りを頑張る
;描画まわり
;リセット

(defn replace-last
  [lst elm]
  (let [[first & rest] lst]
    (if rest
      (conj rest elm)
      (list elm))))

(def first-server :pc)
(def play-context (atom {}))
(def directions #{:front-left :front-right :middle-left :middle-right :back-left :back-right })
(def normal-score-limit 21)
(def max-score-limit 30)

(defn rival
  [player]
  (case player
    :npc :pc
    :pc :npc
    :doubt :doubt))

(defn next-server
  [rallies]
  (or (get (last-decided-rally rallies) :won-by)
      first-server))

(defn next-serve-pos
  [rallies server]
  (let [points (count
                 (filter (fn [rally] (= (rally :won-by) server))
                         rallies))]
    (if (even? points)
      :front-right
      :front-left)))

(defn next-stroker
  [rallies]
  (rival ((first
            ((last-undecided-rally rallies)
              :strokes))
           :starter)))

(defn game-end?
  [rallies]
  (let [{npc :npc pc :pc} (group-by :won-by rallies )
        scores (list (count pc) (count npc))]
    (or (some (fn [s] (>= s max-score-limit)) scores)
        (and (some (fn [s] (= s normal-score-limit)) scores)
             (>= (js/Math.abs (- (first scores) (second scores)))
                 2)))))

(defn serve-rally
  [player start-pos]
  {
   :strokes (list {
                   :starter player
                   :start-pos start-pos
                   :end-pos start-pos
                   :predict nil
                   })
   :won-by :doubt
   })

(defn last-undecided-rally
  [rallies]
  (first
    (filter (fn [rally] (= (rally :won-by) :doubt) )
            rallies)))

(defn last-decided-rally
  [rallies]
  (first
    (filter (fn [rally] (not= (rally :won-by) :doubt) )
            rallies)))

(defn last-stroke
  [rally]
  (first (:strokes rally)))

(defn next-stroke
  [rallies player direction prediction]
  (let [last-pos (-> (last-undecided-rally rallies)
                     (last-stroke)
                     (get :end-pos))]
    {:starter player
     :start-pos last-pos
     :end-pos direction
     :predict prediction
     }))

(defn update-stroke
  [rallies next]
  (let [new-last-rally (update-in
                         (last-undecided-rally rallies)
                         [:strokes] conj next)]
    (replace-last rallies new-last-rally)))

(defn next-direction
  []
  (nth (seq directions)
       (rand-int (count directions))))

(defn next-prediction
  []
  (nth (seq directions)
       (rand-int (count directions))))

(defn success?
  [context direction prediction]
  (<= 50 (rand-int 100)))

(defn init-context!
  []
  (reset! play-context
          { :rallies (list) }))

(defn record-stroke!
  [context player direction prediction]
  (let [{rallies :rallies} context]
    (->>
      (next-stroke rallies player direction prediction)
      (update-stroke rallies)
      ((fn [r] (assoc-in context [:rallies] r)))
      (reset! play-context))))

(defn fail-stroke!
  [context player]
  (reset! play-context
          (update-in context [:rallies]
                     (fn [[first & rest :as rallies] r]
                         (replace-last
                           rallies
                           (assoc-in first [:won-by] (rival player)))))))

(defn start-new-rally!
  [serve]
  (swap! play-context
         update-in [:rallies] conj serve))

(defn next-serve
  [rallies]
  (let [server (next-server rallies)
         pos (next-serve-pos rallies server)]
    (serve-rally server pos)))

(defn decide-stroke!
  ([player direction] (decide-stroke! player direction nil nil))
  ([player direction serve?] (decide-stroke! player direction serve? nil))
  ([player direction serve? prediction]
     (cond
       (game-end? (@play-context :rallies)) nil
       serve? (when (= player :npc)
                (record-stroke! @play-context player direction nil))
       (not (success?
              @play-context
              direction
              prediction)) (do
                             (record-stroke! @play-context player direction prediction)
                             (fail-stroke! @play-context player)
                             (when (not (game-end? (@play-context :rallies)))
                               (start-new-rally! (next-serve (@play-context :rallies)))
                               (decide-stroke! (rival player) (next-direction) true)))
       :else (record-stroke! @play-context player direction prediction))))

(defn predict!
  [player direction]
  (when-not (game-end? (@play-context :rallies))
    (if (= player :pc)
      (decide-stroke! :npc (next-direction) nil direction))))

(defn play!
  []
  (if (= (next-stroker (@play-context :rallies))
               :pc)
          (decide-stroke! :pc (next-direction) nil (next-prediction))
          (do
            (predict! :pc (next-prediction))
            (decide-stroke! :npc (next-direction) nil (next-prediction)))))

(defn dom-ready
  [handler]
  (.addEventListener js/window "DOMContentLoaded" handler))

(defn submit
  [handler]
  (->
    (.getElementById js/document "submit")
    (.addEventListener "click" handler)))

(dom-ready
  (fn []
    (init-context!)
    (start-new-rally! (next-serve (@play-context :rallies)))
    (decide-stroke! :npc nil true)
    (submit
      (fn []
        (play!)
        (println @play-context)))))