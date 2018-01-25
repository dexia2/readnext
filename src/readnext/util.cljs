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
