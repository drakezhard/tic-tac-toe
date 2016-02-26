(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "1.7.48-6"   :scope "test"]
                 [adzerk/boot-cljs-repl     "0.2.0"      :scope "test"]
                 [adzerk/boot-reload        "0.4.1"      :scope "test"]
                 [pandeiro/boot-http        "0.6.3"      :scope "test"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha31-SNAPSHOT"]
                 [prismatic/om-tools "0.3.12"]
                 [racehub/om-bootstrap "0.6.1"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(require 'boot.repl)
(swap! boot.repl/*default-dependencies*
       concat '[[cider/cider-nrepl "0.11.0-SNAPSHOT"]])

(swap! boot.repl/*default-middleware*
       conj 'cider.nrepl/cider-middleware)

(deftask build []
  (comp (speak)
        
        (cljs)
        ))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'tic-tac-toe.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))


