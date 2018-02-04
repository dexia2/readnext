(ns readnext.game
  (:require [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.npc.util :as nu]
            [readnext.npc.offence :as o]
            [readnext.npc.defence :as de]
            [readnext.npc.defence :as n]
            ))

(def first-server :pc)
(def play-context (atom {}))
(def play-mode (atom {}))
(def modes #{:offensive :defensive :net})
(def normal-score-limit 21)
(def max-score-limit 30)

(defn get-context []
  @play-context)

(defn get-mode []
  @play-mode)

(defn random-mode []
  (u/random-elm (seq modes)))

(defn combination-pattern []
  (case @play-mode
    :offensive o/combination-pattern
    :defensive de/combination-pattern
    :net n/combination-pattern))

(defn next-direction [context]
  (nu/decide context (combination-pattern)))

(defn next-prediction []
  (nth (seq d/directions)
       (rand-int (count d/directions))))

(defn success?
  [context direction prediction]
  (let [rate (if (= direction prediction) 60 90)]
    (>= rate (rand-int 100))))

(defn init-context! []
  (reset! play-context
          (d/init-context
           {:first-server first-server
            :score-limit normal-score-limit
            :deuce-limit max-score-limit
            })))

(defn init-mode! [mode]
  (reset! play-mode mode))

(defn record-stroke!
  [player direction prediction]
  (reset! play-context
          (d/record-stroke-to-context @play-context player direction)))

(defn fail-stroke! [player]
  (reset! play-context
          (d/fail-stroke @play-context player)))

(defn record-service! []
  (reset! play-context
          (d/record-service
           @play-context
           (d/next-serve @play-context))))

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
