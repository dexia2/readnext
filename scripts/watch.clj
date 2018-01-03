(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'readnext.core
   :output-to "out/readnext.js"
   :output-dir "out"})
