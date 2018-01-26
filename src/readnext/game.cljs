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
  ([player direction] (decide-stroke! player direction nil))
  ([player direction prediction]
   (cond
     (d/game-end? @play-context) nil
     (not (success?
           @play-context
           direction
           prediction)) (do
                          (record-stroke! player direction prediction)
                          (fail-stroke! player)
                          nil)
     :else (record-stroke! player direction prediction))))

(defn predict!
  [player direction]
  (when-not (d/game-end? @play-context)
    (decide-stroke! :npc (next-direction @play-context) direction)))

(defn play! []
  (let [player (d/next-stroker (@play-context :rallies))]
    (decide-stroke! player (next-direction @play-context)(next-prediction))))
