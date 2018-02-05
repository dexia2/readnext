(ns readnext.domain
  (:require [readnext.util :as u]))

(def directions #{:front-left :front-right :middle-left :middle-right :back-left :back-right })

(def players #{:pc :npc :doubt})

(defn init-context
  [{:keys [first-server
           score-limit
           deuce-limit]}]
  {:first-server first-server
   :score-limit score-limit
   :deuce-limit deuce-limit
   :rallies (list)
   })

(defn game-end?
  [{:keys [rallies score-limit deuce-limit]}]
  (let [{:keys [pc npc]} (group-by :won-by rallies )
        scores (list (count pc) (count npc))]
    (or (some (fn [s] (>= s deuce-limit)) scores)
        (and (some (fn [s] (= s score-limit)) scores)
             (>= (js/Math.abs (- (first scores) (second scores)))
                 2)))))

(defn score-of
  [player rallies]
  (let [{point-rallies player} (group-by :won-by rallies )
        scores (count point-rallies)]
    scores))

(defn rally-end? [{:keys [won-by]}]
  (not= won-by :doubt))

(defn last-rally-end?
  [{:keys [rallies]}]
  (-> rallies
      (last-rally)
      (rally-end?)))

(defn rival [player]
  (case player
    :npc :pc
    :pc :npc
    :doubt :doubt))

(defn next-server
  [{:keys [rallies first-server]}]
  (get (last-scored-rally rallies) :won-by first-server))

(defn next-serve-pos
  [rallies server]
  (let [points (count
                (filter (fn [{:keys [won-by]}] (= won-by server))
                        rallies))]
    (if (even? points)
      :front-right
      :front-left)))

(defn next-stroker [rallies]
  (rival ((first ((last-unscored-rally rallies) :strokes))
          :starter)))

(defn next-hitter [rallies]
  (let [last-rally (last-rally rallies)]
    (if (rally-end? last-rally)
      (last-rally :won-by)
      (next-stroker rallies))))

(defn last-rally [rallies]
  (first rallies))

(defn last-unscored-rally
  [rallies]
  (first
   (filter (fn [{:keys [won-by]}] (= won-by :doubt))
           rallies)))

(defn last-scored-rally [rallies]
  (first
   (filter (fn [{:keys [won-by]}] (not= won-by :doubt) )
           rallies)))

(defn last-stroke
  [{:keys [strokes]}]
  (first strokes))

(defn latest-stroke [rallies]
  (last-stroke (last-rally rallies)))

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

(defn next-serve
  [{:keys [rallies] :as context}]
  (let [server (next-server context)
        pos (next-serve-pos rallies server)]
    (serve-rally server pos)))

(defn record-service
  [context serve]
  (update-in context [:rallies] conj serve ))

(defn next-stroke-pos [rallies]
  (-> (last-unscored-rally rallies)
      (last-stroke)
      (get :end-pos)))

(defn next-stroke
  [rallies player direction]
  {:starter player
   :start-pos (next-stroke-pos rallies)
   :end-pos direction
   })

(defn record-stroke-to-rally
  [rallies next]
  (let [new-last-rally (update-in
                        (last-unscored-rally rallies)
                        [:strokes] conj next)]
    (u/replace-last rallies new-last-rally)))

(defn record-stroke-to-context
  [{:keys [rallies] :as context} player direction]
  (->>
   (next-stroke rallies player direction prediction)
   (record-stroke-to-rally rallies)
   ((fn [r] (assoc-in context [:rallies] r)))))

(defn fail-stroke
  [context player]
  (update-in context [:rallies]
             (fn [[first & rest :as rallies] r]
               (u/replace-last
                rallies
                (assoc-in first [:won-by] (rival player))))))

(defn all-strokes-by
  [{:keys [rallies]}
   player]
  (->> rallies
       (mapcat (fn [{:keys [strokes]}] strokes))
       (filter (fn [{:keys [starter]}] (= starter player)))))
