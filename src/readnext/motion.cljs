(ns readnext.motion)
(defn in-ellipse [{ellipse-x :x ellipse-y :y}
                  {cur-x :x cur-y :y}
                  radius]
  (and (<= (- ellipse-x radius)
           cur-x
           (+ ellipse-x radius))
       (<= (- ellipse-y radius)
           cur-y
           (+ ellipse-y radius))))

(defn move [{ellipse-x :x ellipse-y :y :as ellipse-pos}
            {cur-x :x cur-y :y :as current-pos }
            radius
            speed]
  (if (in-ellipse ellipse-pos current-pos radius)
    current-pos
    {
     :x (+ cur-x
           (/ (- ellipse-x cur-x) speed))
     :y (+ cur-y
           (/ (- ellipse-y cur-y) speed))
     }))
