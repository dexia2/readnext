(ns readnext.domain
  (:require [readnext.util :as u]
            ))

(def directions #{:front-left :front-right :middle-left :middle-right :back-left :back-right })

(def players #{:pc :npc :doubt})

(defn init-context
  [{first-server :first-server
    score-limit :score-limit
    deuce-limit :deuce-limit}]
  {:first-server first-server
   :score-limit score-limit
   :deuce-limit deuce-limit
   :rallies (list)
   })

(defn game-end?
  [{rallies :rallies
    score-limit :score-limit
    deuce-limit :deuce-limit
    }]
  (let [{npc :npc pc :pc} (group-by :won-by rallies )
        scores (list (count pc) (count npc))]
    (or (some (fn [s] (>= s deuce-limit)) scores)
        (and (some (fn [s] (= s score-limit)) scores)
             (>= (js/Math.abs (- (first scores) (second scores)))
                 2)))))

(defn rally-end?
  [rally]
  (not= (rally :won-by) :doubt))

(defn rival
  [player]
  (case player
    :npc :pc
    :pc :npc
    :doubt :doubt))

(defn next-server
  [{rallies :rallies
    first-server :first-server}]
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

(defn last-rally
  [rallies]
  (first rallies))

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
  [context]
  (let [server (next-server context)
        pos (next-serve-pos rallies server)]
    (serve-rally server pos)))

(defn record-service
  [context serve]
  (update-in context [:rallies] conj serve ))

(defn next-stroke
  [rallies player direction]
  (let [last-pos (-> (last-undecided-rally rallies)
                     (last-stroke)
                     (get :end-pos))]
    {:starter player
     :start-pos last-pos
     :end-pos direction
     }))

(defn record-stroke-to-rally
  [rallies next]
  (let [new-last-rally (update-in
                        (last-undecided-rally rallies)
                        [:strokes] conj next)]
    (u/replace-last rallies new-last-rally)))

(defn record-stroke-to-context
  [context player direction]
  (let [{rallies :rallies} context]
    (->>
     (next-stroke rallies player direction prediction)
     (record-stroke-to-rally rallies)
     ((fn [r] (assoc-in context [:rallies] r))))))

(defn fail-stroke
  [context player]
  (update-in context [:rallies]
             (fn [[first & rest :as rallies] r]
               (u/replace-last
                rallies
                (assoc-in first [:won-by] (rival player))))))

