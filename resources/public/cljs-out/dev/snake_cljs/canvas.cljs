(ns snake-cljs.canvas
  (:require [goog.dom :as gdom]))

(def canvas
  (gdom/getElement "game"))

(defn get-window-size []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})

(defn set-canvas-size [cnvs {:keys [width height]}]
  (set! (.-width cnvs) width)
  (set! (.-height cnvs) height))

(defn fullscreen [cnvs]
  (set-canvas-size cnvs (get-window-size)))