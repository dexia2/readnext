(ns readnext.game
  (:require [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.npc.decision.util :as nu]
            ))

(def first-server :pc)
(def play-context (atom {}))
(def play-mode (atom {}))
(def normal-score-limit 21)
(def max-score-limit 30)

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
               75
               (if (= direction prediction) 50 90))]
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

(defn play!
  ([] (try-stroke! :pc (next-direction) direction nil))
  ([direction] (try-stroke! :npc (next-direction @play-context) direction)))
