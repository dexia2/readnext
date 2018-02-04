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

(defn next-direction [context]
  (nu/decide context (get-mode)))

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

(defn try-stroke!
  [player direction prediction]
  (cond
    (d/game-end? @play-context) nil
    (not (success?
          @play-context
          direction
          prediction)) (do
                         (record-stroke! player direction prediction)
                         (fail-stroke! player)
                         nil)
    :else (record-stroke! player direction prediction)))

(defn play! [player direction]
  (if (= player :pc)
    (try-stroke! player direction (next-prediction))
    (try-stroke! player (next-direction @play-context) direction)))
