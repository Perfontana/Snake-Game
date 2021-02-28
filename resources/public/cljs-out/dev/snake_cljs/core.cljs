(ns ^:figwheel-always snake-cljs.core)

(require '[snake-cljs.snake :as snake])
(defn multiply [a b] (* a b))

(snake/game)