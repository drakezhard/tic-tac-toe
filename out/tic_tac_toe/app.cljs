(ns tic-tac-toe.app
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.grid :as g]))

(enable-console-print!)

(def app-state {:players [{:idx 1
                           :name "player1"
                           :type :human
                           :active? true
                           :won? nil
                           :piece "black"}
                          {:idx 2
                           :name "player2"
                           :type :computer
                           :active false
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

#_(defmethod mutate 'play
  [{:keys [state]} _ {:keys [index idx]}]
  {:action
   (fn []
     (swap! state update-in
            [:tile/by-index index :value]
            (fn [] (get-in state [:player/by-index idx :piece]))))})

(defui Player
  static om/Ident
  (ident
   [this {:keys [idx]}]
   [:player/by-index idx])
  static om/IQuery
  (query
   [this]
   '[:idx :name :type :active? :won? :piece])
  Object
  (render
   [this]
   (let [{:keys [idx name type active? won?] :as props} (om/props this)]
     (dom/div nil
              (dom/h1 nil name)
              (dom/p nil (clojure.core/name type))
              (dom/p nil (str active?))
              (if won? (dom/h1 nil (str won?)))))))

(defn square [[x y]]
  (dom/rect {:width "32%"
             :height "32%"
             :fill "red"
             :transform nil
             :x (str (* 33 x)"%")
             :y (str (* 33 y)"%")
             :onClick (fn [e] (println "did" e))}))

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
       (square index)
       (dom/svg {}
           (square index)
           (piece index value))))))

(def tile (om/factory Tile {:keyfn :index}))
(def player (om/factory Player {:keyfn :name}))

(defui TicTacToe
  static om/IQuery
  (query
   [this]
   (let [player-query (om/get-query Player)
         tile-query (om/get-query Tile)]
     `[{:players ~player-query}{:board ~tile-query}]))
  Object
  (render
   [this]
   (let [{:keys [board players] :as env} (om/props this)
         width (.-innerWidth js/window)
         height (.-innerHeight js/window)
         size (if (<= height width)
                height
                width)]
     (println (str env))
     (g/grid {}
             #_(g/col {:xs 18 :md 6 :md-offset 2})
             (dom/svg {:width size :height size}        
                      (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "32%" :y "0%"})           
                      (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "65%" :y "0%"})
                      (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "32%"})
                      (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "65%"})
                      (map tile board))
             (g/col {:xs 9 :md 2}
                    (g/row {} (player (first players)))
                    (g/row {} (player (last players))))))))

(def parser (om/parser {:read read}))
(def reconciler (om/reconciler {:state app-state
                                :parser parser}))
(defn init []
  (om/add-root! reconciler
                TicTacToe (gdom/getElement "app")))
