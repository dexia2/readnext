(ns readnext.npc.decision.defence)

(def combination-pattern
  {
   :back {
          :front-left 10
          :front-right 10
          :middle-left 10
          :middle-right 10
          :back-left 30
          :back-right 30
          }
   :middle {
            :front-left 30
            :front-right 30
            :middle-left 5
            :middle-right 5
            :back-left 15
            :back-right 15
            }
   :front {
           :front-left 10
           :front-right 10
           :middle-left 10
           :middle-right 5
           :back-left 45
           :back-right 20
           }
   })
