(ns readnext.game
  (:require [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.npc.util :as nu]
            [readnext.npc.offence :as o]))

(def first-server :pc)
(def play-context (atom {}))
(def modes #{:offensive :defensive :net :all-round})
(def normal-score-limit 21)o
(def max-score-limit 30)

(defn get-context []
  @play-context)

(defn random-mode []
  (u/random-elm (seq modes)))

(defn next-direction
  [context]
  (nu/decide context o/combination-pattern))

(defn next-prediction []
  (nth (seq d/directions)
       (rand-int (count d/directions))))

(defn success?
  [context direction prediction]
  (let [rate (if (= direction prediction) 60 90)]
    (>= rate (rand-int 100))))

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

(defn play! [player direction]
  (if (= player :pc)
    (decide-stroke! player direction (next-prediction))
    (decide-stroke! player (next-direction @play-context) direction)))
