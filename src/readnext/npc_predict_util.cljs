(ns readnext.npc.predict.util
  (:require [readnext.domain :as d]
            [readnext.util :as u]))

(defn predict [context]
  (println context)
  (let [all-strokes (d/all-strokes-by context :pc)
        pc-pos ((d/latest-stroke (context :rallies))
                :end-pos)
        strokes-from (filter (fn [{:keys [start-pos]}]
                               (=  start-pos  pc-pos))
                             all-strokes)]
    (println pc-pos)
    (println strokes-from)
    :front-left
    ))

