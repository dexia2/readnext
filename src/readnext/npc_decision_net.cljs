(ns readnext.npc.decision.net)

(def combination-pattern
  {
   :back {
          :front-left 30
          :front-right 40
          :middle-left 10
          :middle-right 10
          :back-left 5
          :back-right 5
          }
   :middle {
            :front-left 40
            :front-right 30
            :middle-left 10
            :middle-right 5
            :back-left 10
            :back-right 5
            }
   :front {
           :front-left 40
           :front-right 40
           :middle-left 0
           :middle-right 5
           :back-left 10
           :back-right 5
           }
   })
