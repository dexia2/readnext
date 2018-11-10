(ns readnext.game
  (:require [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.npc.decision.util :as nu]
            ))

(def first-server :pc)
(def play-context (atom {}))
(def play-mode (atom {}))
(def events (atom (list)))
(def normal-score-limit 21)
(def max-score-limit 30)
(def last-phase-start (- normal-score-limit 5))

(defn get-context []
  @play-context)

(defn get-mode []
  @play-mode)

(defn random-mode []
  (u/random-elm (seq nu/modes)))

(defn next-direction
  ([] (u/random-elm (seq d/directions)))
  ([context] (nu/decide context (get-mode))))

(defn success?
  [player direction prediction]
  (let [rate (if (= player :pc)
               70
               (if (= direction prediction) 50 90))]
    (>= rate (rand-int 100))))

(defn reset-game! []
  (init-context!)
  (init-mode!)
  (reset! events (list))
  (record-service!))

(defn init-context! []
  (reset! play-context
          (d/init-context
           {:first-server first-server
            :score-limit normal-score-limit
            :deuce-limit max-score-limit
            })))

(defn init-mode! []
  (reset! play-mode (random-mode)))

(defn event-done? [event]
  (not (empty? (filter
                (fn [e] (= e event))
                @events))))

(defn change-mode! [event]
  (swap! events conj event)
  (init-mode!))

(defn record-stroke!
  [player direction prediction]
  (let [{:keys [rallies] :as context} @play-context
        new-stroke (assoc
                    (d/next-stroke rallies player direction)
                    :prediction prediction)]
    (reset! play-context
            (d/record-stroke-to-context
             @play-context
             new-stroke
             player
             direction))))

(defn fail-stroke! [player]
  (reset! play-context
          (d/fail-stroke @play-context player)))

(defn record-service! []
  (reset! play-context
          (d/record-service
           @play-context
           (d/next-serve @play-context))))

(defn try-stroke!
  [player direction prediction]
  (cond
    (d/game-end? @play-context) nil
    (not (success?
          player
          direction
          prediction)) (do
                         (record-stroke! player direction prediction)
                         (fail-stroke! player)
                         nil)
    :else (record-stroke! player direction prediction)))

(defn last-phase?
  [{:keys [rallies score-limit]}]
  (let [{:keys [pc npc]} (group-by :won-by rallies )
        scores (list (count pc) (count npc))]
    (some (fn [s] (= s last-phase-start))
          scores)))

(defn play!
  ([] (try-stroke! :pc (next-direction) direction nil))
  ([direction]
   (when (and (not (event-done? :intervel))
              (d/interval? @play-context))
     (change-mode! :intervel))
   (when (and (not (event-done? :last-phase))
              (last-phase? @play-context))
     (change-mode! :last-phase))
   (try-stroke! :npc (next-direction @play-context) direction)))

(defn all-predictable-strokes
  [rallies]
  (filter (fn [{:keys [starter serve?]}]
            (and (= starter :npc)
                 (not serve?)))
          (mapcat (fn [{:keys [strokes]}] strokes)
                  rallies)))

(defn prediction-hit-strokes
  [rallies]
  (filter
   (fn [{:keys [end-pos prediction]}] (= end-pos prediction))
   (all-predictable-strokes rallies)))

(defn longest-strokes-count
  [rallies]
  (apply max
         (map (fn [{:keys [strokes]}]
                (count strokes))
              rallies)))

(defn strokes-count-average
  [rallies]
  (average
   (map (fn [{:keys [strokes]}]
          (count strokes))
        rallies)))

(defn average
  [numbers]
  (let [devider (count numbers)]
    (if (= devider 0)
      0
      (/ (reduce + numbers) devider))))
