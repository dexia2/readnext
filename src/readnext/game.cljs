(ns readnext.game
  (:require [readnext.domain :as d]
            [readnext.util :as u]))

(def first-server :pc)
(def play-context (atom {}))
(def modes #{:offensive :defensive :net :all-round})
(def normal-score-limit 21)
(def max-score-limit 30)

(defn get-context []
  @play-context)

(defn random-mode []
  (u/random-elm (seq modes)))

(defn next-direction
  [context]
  (u/random-elm (seq d/directions)))

(defn next-prediction []
  (nth (seq d/directions)
       (rand-int (count d/directions))))

(defn success?
  [context direction prediction]
  (<= 50 (rand-int 100)))

(defn init-context! [mode]
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

(defn record-service! []
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

(defn play! []
  (if (= (d/next-stroker (@play-context :rallies))
         :pc)
    (decide-stroke! :pc (next-direction @play-context) nil (next-prediction))
    (do
      (predict! :pc (next-prediction))
      (decide-stroke! :npc (next-direction @play-context) nil (next-prediction)))))
