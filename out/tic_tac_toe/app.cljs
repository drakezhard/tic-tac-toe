(ns tic-tac-toe.app
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.grid :as g]))

(enable-console-print!)

(def app-state {:active-player {:idx 1}
                :players [{:idx 1
                           :name "player1"
                           :type :human
                           :won? nil
                           :piece "black"}
                          {:idx 2
                           :name "player2"
                           :type :computer
                           :won? nil
                           :piece "white"}]
                :board [{:index [0 0] :value nil}
                        {:index [0 1] :value nil}
                        {:index [0 2] :value nil}
                        {:index [1 0] :value nil}
                        {:index [1 1] :value nil}
                        {:index [1 2] :value nil}
                        {:index [2 0] :value nil}
                        {:index [2 1] :value nil}
                        {:index [2 2] :value nil}]})

(defn getter [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defn read [{:keys [state] :as env} key params]
  {:value (getter state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'tic-tac-toe/play
  [{:keys [state]} _ {:keys [index]}]
  {:action
   (fn []
     (swap! state update-in
            [:tile/by-index index :value]
            (fn []
              (let [active (get-in @state [:active-player :idx])]
                (get-in @state [:player/by-index active :piece]))))
     (swap! state update-in
            [:active-player :idx]
            {1 2
             2 1}))})

(defui Player
  static om/Ident
  (ident
   [this {:keys [idx]}]
   [:player/by-index idx])
  static om/IQuery
  (query
   [this]
   '[:idx :name :type :won? :piece])
  Object
  (render
   [this]
   (let [{:keys [idx name type won?] :as props} (om/props this)]
     (dom/div nil
              (dom/h1 nil name)
              (dom/p nil (clojure.core/name type))
              (if won? (dom/h1 nil (str won?)))))))

(defn square
  ([[x y]]
   (dom/rect {:width "32%"
              :height "32%"
              :fill "red"
              :transform nil
              :x (str (* 33 x)"%")
              :y (str (* 33 y)"%")}))
  ([[x y] this props]
   (dom/rect {:width "32%"
              :height "32%"
              :fill "red"
              :transform nil
              :x (str (* 33 x)"%")
              :y (str (* 33 y)"%")
              :onClick (fn [e] (om/transact! this `[(tic-tac-toe/play ~props)]))})))

(defn piece [[x y] color]
  (dom/circle {:r "8%"
               :cx (str (+ 16 (* 33 x)) "%")
               :cy (str (+ 16 (* 33 y)) "%")
               :fill color}))

(defui Tile
  static om/Ident
  (ident
   [this {:keys [index]}]
   [:tile/by-index index])
  static om/IQuery
  (query
   [this]
   '[:index :value])
  Object
  (render
   [this]
   (let [{:keys [index value] :as props} (om/props this)]
     (if-not value
       (square index this props)
       (dom/svg {}
           (square index)
           (piece index value))))))

(def tile (om/factory Tile {:keyfn :index}))
(def player (om/factory Player {:keyfn :idx}))

(defn compare-3 [i j k]
  (let [x (:value i)
        y (:value j)
        z (:value k)]
   (and (not= x nil)
        (= x y z))))

(defn won? [board]
  (let [[a b c
         d e f
         g h i] board]
    (cond
      (compare-3 a b c) [(:index a) (:index c) (:value a)]
      (compare-3 d e f) [(:index d) (:index f) (:value d)]
      (compare-3 g h i) [(:index g) (:index i) (:value g)]
      (compare-3 a d g) [(:index a) (:index g) (:value a)]
      (compare-3 b e h) [(:index b) (:index h) (:value b)]
      (compare-3 c f i) [(:index c) (:index i) (:value c)]
      (compare-3 a e i) [(:index a) (:index i) (:value a)]
      (compare-3 g e c) [(:index g) (:index c) (:value g)]
      :else false)))

(defui TicTacToe
  static om/IQuery
  (query
   [this]
   (let [player-query (om/get-query Player)
         tile-query (om/get-query Tile)]
     `[:active-player {:players ~player-query}{:board ~tile-query}]))
  Object
  (render
   [this]
   (let [{:keys [active-player board players] :as env} (om/props this)
         width (.-innerWidth js/window)
         height (.-innerHeight js/window)
         size (if (<= height width)
                height
                width)
         winner (won? board)]
     (g/grid {}
             (dom/svg {:width size :height size}        
                      (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "32%" :y "0%"})           
                      (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "65%" :y "0%"})
                      (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "32%"})
                      (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "65%"})
                      (map tile board)
                      (when winner
                        (let [[[x1 y1] [x2 y2] value] winner]
                         (dom/line {:x1 (str (* 33 x1) "%")
                                    :y1 (str (* 33 y1) "%")
                                    :x2 (str (* 33 x2) "%")
                                    :y2 (str (* 33 y2) "%")
                                    :stroke-width "10"
                                    :stroke value}))))
             (g/col {:xs 9 :md 2}
                    (g/row {} (player (first players)))
                    (g/row {} (player (last players))))))))

(def parser (om/parser {:read read :mutate mutate }))
(def reconciler (om/reconciler {:state app-state
                                :parser parser}))
(defn init []
  (om/add-root! reconciler
                TicTacToe (gdom/getElement "app")))
