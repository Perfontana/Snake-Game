(ns snake-cljs.snake
  (:require [snake-cljs.canvas :as cnv]))
(def point-size 10)
(def width (/ (:width (cnv/get-window-size)) point-size))
(def height (/ (:height (cnv/get-window-size)) point-size))
(def turn-millis 75)
(def win-length 20)
(def directions {"ArrowUp"    [0 -1]
                 "ArrowDown"  [0 1]
                 "ArrowRight" [1 0]
                 "ArrowLeft"  [-1 0]})

(defn add-points [& pts]
  (vec (apply map + pts)))

(defn point-to-screen-rect [pt]
  (map #(* point-size %)
       [(pt 0) (pt 1) 1 1]))

(defn create-apple []
  {:location [(rand-int width) (rand-int height)]
   :color "#ff4140"
   :type :apple})

(defn create-snake []
  {:body (list [1 1])
   :dir [1 0]
   :type :snake
   :color "#aaee50"})

(defn move [{:keys [body dir] :as snake} & grow]
  (assoc snake :body (cons (add-points (first body) dir)
                           (if grow body (butlast body)))))

(defn win? [{body :body}]
  (>= (count body) win-length))

(defn head-overlaps-body? [{[head & body] :body}]
  (contains? (set body) head))

(def lose? head-overlaps-body?)

(defn eats? [{[snake-head] :body} {apple :location}]
  (= snake-head apple))

(defn turn [snake dir]
  (assoc snake :dir dir))

(defn reset-game [snake apple]
  (reset! snake (create-snake))
  (reset! apple (create-apple)))

(defn update-direction [snake dir]
  (let [head (first (:body @snake))
        tail (first (rest (:body @snake)))]
    (when (not= (add-points head dir) tail)
      (swap! snake turn dir))))

(defn update-positions [snake apple]
  (if (eats? @snake @apple)
    (do
      (reset! apple (create-apple))
      (swap! snake move :grow))
    (swap! snake move)))

(defn fill-point [ctx pt color]
  (let [[x y width height] (point-to-screen-rect pt)]
    (set! (.-fillStyle ctx) color)
    (.fillRect ctx x y width height)))

(defn clear
  ([ctx] (clear ctx "#fff"))
  ([ctx color] (let [{:keys [width height]} (cnv/get-window-size)]
                 (set! (.-fillStyle ctx) color)
                 (.fillRect ctx 0 0 width height))))

(defmulti paint (fn [ctx object & _] (:type object)))

(defmethod paint :apple [ctx {:keys [location color]}]
  (fill-point ctx location color))

(defmethod paint :snake [ctx {:keys [body color]}]
  (doseq [point body]
    (fill-point ctx point color)))

(defn game []
  (let [ctx (.getContext cnv/canvas "2d")
        snake (atom (create-snake))
        apple (atom (create-apple))]
    (cnv/fullscreen cnv/canvas)
    (js/addEventListener "keydown" (fn [e]
                                     (let [dir  (directions (.-code e))]
                                       (when dir
                                         (update-direction snake dir)))))
    (js/setInterval (fn []
                      (if (lose? @snake)
                        (do (js/alert "You lose :(")
                            (reset-game snake apple))
                        (if (win? @snake)
                          (do (js/alert "You win! :)")
                              (reset-game snake apple))
                          (do (update-positions snake apple)
                              (clear ctx)
                              (paint ctx @snake)
                              (paint ctx @apple))))) turn-millis)))