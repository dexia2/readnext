(ns readnext.npc.decision.util
  (:require [readnext.util :as u]
            [readnext.domain :as d]
            [readnext.npc.decision.offence :as o]
            [readnext.npc.decision.defence :as de]
            [readnext.npc.decision.defence :as n]
            ))

(def vertical-type {
                    :front #{:front-left :front-right}
                    :middle #{:middle-left :middle-right}
                    :back #{:back-left :back-right}
                    })

(def horizontal-type {
                      :left #{:front-left :middle-left :back-left}
                      :right #{:front-right :middle-right :back-right}
                      })

;; 暫定対応
;; ないということがありえないようにしたい
(defn decide-direction [patterns]
  (let [rnd (rand-int 100)]
    (loop [coll patterns
           acc 0]
      (let [elm (first coll)]
        (if (not elm)
          (key (u/random-elm (seq patterns)))
          (if (>= acc rnd)
            (key elm)
            (recur (rest coll)
                   (+ acc (val elm)))))))))

(defn categorized-by [direction categories]
  (key (first
        (filter
         (fn [type] (some (fn [d] (= d direction))
                          (seq (val type))))
         (seq categories)))))

(defn categorized-by-vertical [direction]
  (categorized-by direction vertical-type))

(defn categorized-by-horizontal [direction]
  (categorized-by direction horizontal-type))

(defn combination-pattern [mode]
  (case mode
    :offensive o/combination-pattern
    :defensive de/combination-pattern
    :net n/combination-pattern))

(defn decide [context mode]
  (->
   (d/next-stroke-pos (context :rallies))
   (categorized-by-vertical pos)
   ((combination-pattern mode))
   (decide-direction)))
