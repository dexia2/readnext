(ns readnext.util)

(defn replace-last
  [lst elm]
  (let [[first & rest] lst]
    (if rest
      (conj rest elm)
      (list elm))))

(defn random-elm
  [coll]
  (nth coll (rand-int (count coll))))

(def vertical-type {
                    :front #{:front-left :front-right}
                    :middle #{:middle-left :middle-right}
                    :back #{:back-left :back-right}
                    })


(def horizontal-type {
                      :left #{:front-left :middle-left :back-left}
                      :right #{:front-right :middle-right :back-right}
                      })

(defn categorized-by [direction categories]/
  (key (first
        (filter
         (fn [type] (some (fn [d] (= d direction))
                          (seq (val type))))
         (seq categories)))))

(defn categorized-by-vertical [direction]
  (categorized-by direction vertical-type))

(defn categorized-by-horizontal [direction]
  (categorized-by direction horizontal-type))

