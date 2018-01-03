(ns readnext.core
  (:require [clojure.browser.repl :as repl]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;TODO
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
  [rallies player direction]
  (let [last-pos (-> (last-undecided-rally rallies)
                     (last-stroke)
                     (get :end-pos))]
    {:starter player
     :start-pos last-pos
     :end-pos direction
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

(defn success?
  [context direction]
  (<= 50 (rand-int 100)))

(defn init-context!
  []
  (reset! play-context
          { :rallies (list) }))

(defn continue-stroke!
  [context player direction]
  (let [{rallies :rallies} context]
    (->>
      (next-stroke rallies player direction)
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
  (->>
    (next-server rallies)
    (next-serve-pos rallies)
    (serve-rally server)))

(defn decide-stroke!
  ([player direction] (decide-stroke! player direction nil))
  ([player direction serve?]
   (let [context @play-context
         rallies (context :rallies)]
     (cond
       (game-end? rallies) nil
       serve? (when (= player :npc)
                (continue-stroke! context player (next-direction)))
       (not (success? context direction)) (do
                                            (fail-stroke! context player)
                                            (when (not (game-end? rallies))
                                              (start-new-rally! (next-serve rallies))
                                              (decide-stroke! (rival player) nil true)))
       :else (do
               (continue-stroke! context player direction)
               (when (= player :pc) (decide-stroke! :npc (next-direction))))))))

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
        (decide-stroke! :pc (next-direction))
        (println @play-context)))))