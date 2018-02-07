(ns readnext.npc.decision.util
  (:require [readnext.domain :as d]
            [readnext.util :as u]
            [readnext.npc.decision.offence :as o]
            [readnext.npc.decision.defence :as de]
            [readnext.npc.decision.defence :as n]
            ))

(def modes #{:offensive :defensive :net})

(defn decide-direction [patterns]
  (let [rnd (rand-int 100)]
    (loop [coll patterns
           acc 0]
      (let [elm (first coll)
            sum (+ acc (val elm))]
        (if (>= sum rnd)
          (key elm)
          (recur (rest coll) sum))))))

(defn combination-pattern [mode]
  (case mode
    :offensive o/combination-pattern
    :defensive de/combination-pattern
    :net n/combination-pattern))

(defn decide [context mode]
  (->
   (d/next-stroke-pos (context :rallies))
   (u/categorized-by-vertical pos)
   ((combination-pattern mode))
   (decide-direction)))
