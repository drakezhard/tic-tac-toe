(ns tic-tac-toe.app
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]))

(enable-console-print!)

(def app-state {:active-player {:idx 1}
                :players [{:idx 1
                           :name "player1"
                           :type :computer
                           :active? true
                           :winner nil
                           :piece "black"}
                          {:idx 2
                           :name "player2"
                           :type :human
                           :active? false
                           :winner nil
                           :piece "white"}]
                :board [{:index [0 0] :value nil}
                        {:index [1 0] :value nil}
                        {:index [2 0] :value nil}

                        {:index [0 1] :value nil}
                        {:index [1 1] :value nil}
                        {:index [2 1] :value nil}

                        {:index [0 2] :value nil}
                        {:index [1 2] :value nil}
                        {:index [2 2] :value nil}]})

(defn getter [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defn read [{:keys [state] :as env} key params]
  {:value (getter state key)})

(defmulti mutate om/dispatch)

(defn compare-3 [x y z]
  (and (not= x nil)
       (= x y z)))

(defn won? [board]
  (let [value-board (map vals board)
        tile-map (zipmap (map first value-board)
                         (map second value-board))
        a (tile-map [0 0]) b (tile-map [1 0]) c (tile-map [2 0])
        d (tile-map [0 1]) e (tile-map [1 1]) f (tile-map [2 1])
        g (tile-map [0 2]) h (tile-map [1 2]) i (tile-map [2 2])]
    (cond
      (compare-3 a b c) [[0 0] [2 0] a]
      (compare-3 d e f) [[0 1] [2 1] d]
      (compare-3 g h i) [[0 2] [2 2] g]
      (compare-3 a d g) [[0 0] [0 2] a]
      (compare-3 b e h) [[1 0] [1 2] b]
      (compare-3 c f i) [[2 0] [2 2] c]
      (compare-3 a e i) [[0 0] [2 2] a]
      (compare-3 g e c) [[0 2] [2 0] g]
      :else false)))

(defn next-player [state]
  (do (swap! state update-in
             [:active-player :idx]
             {1 2
              2 1})
      (swap! state update-in
             [:player/by-index 1 :active?]
             not)
      (swap! state update-in
             [:player/by-index 2 :active?]
             not)))

(defmethod mutate 'tic-tac-toe/play
  [{:keys [state]} _ {:keys [index]}]
  {:action
   (fn []
     (let [active (get-in @state [:active-player :idx])]
       (swap! state update-in
              [:tile/by-index index :value]
              (fn []
                (get-in @state
                        [:player/by-index active :piece])))
       (let [board (vals (get @state :tile/by-index))
             winner (won? board)]
         (if-not winner
           (next-player state)
           (do
             (swap! state update-in
                    [:player/by-index active :winner]
                    (fn []
                      winner))
             (swap! state update-in
                    [:active-player :idx]
                    (fn [] nil)))))))})

(def corners #{[0 0] [2 0] [0 2] [2 2]})
(def edges #{[1 0] [0 1] [1 2] [2 1]})

(defn next-move [invalid-moves valid-moves]
  (letfn [(human-moves [coll]
            (remove (fn [{:keys [index value]}]
                      (= "white" value))
                    coll))
          (corner? [idx]
            (corners idx))]
    (if (= 0 (count invalid-moves))
      [1 1]
      (if (= 2 (count invalid-moves))
        (let [hm (human-moves invalid-moves)
              idx (:index (first hm))]
          (if (corner? idx)
            ({[0 0] [2 2]
              [0 2] [2 0]
              [2 2] [0 0]
              [2 0] [0 2]} idx)
            (rand-nth (vec corners))))
        (:index (rand-nth valid-moves))))))

(defmethod mutate 'tic-tac-toe/computer-move
  [{:keys [state]} _ {:keys [idx]}]
  {:action
   (fn []
     (let [board (vals (get @state :tile/by-index))
           [invalid-moves valid-moves]
           ((juxt remove filter)
            (fn [{:keys [index value]}] (nil? value)) board)
           random-move (next-move invalid-moves valid-moves)]
       (swap! state update-in
              [:tile/by-index random-move :value]
              (fn []
                (get-in @state
                        [:player/by-index idx :piece])))
       (let [board (vals (get @state :tile/by-index))
             winner (won? board)]
         (if-not winner
           (next-player state)
           (do
             (swap! state update-in
                    [:player/by-index idx :winner]
                    (fn []
                      winner))
             (swap! state update-in
                    [:active-player :idx]
                    (fn [] nil))
             (swap! state update-in
                    [:player/by-index idx :active?]
                    not))))))})

(defui Player
  static om/Ident
  (ident
   [this {:keys [idx]}]
   [:player/by-index idx])
  static om/IQuery
  (query
   [this]
   '[:idx :name :type :active? :winner :piece])
  Object
  (render
   [this]
   (let [{:keys [idx name type active? winner piece] :as props} (om/props this)]
     (when (and active? (= type :computer))
       (om/transact! this `[(tic-tac-toe/computer-move ~props) :board]))
     (dom/div {:class (when winner "winner")}
              (dom/h1 name)
              (dom/p (clojure.core/name type))
              (when winner
                (dom/p "winner"))))))

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
              :onClick (fn [e] (om/transact! this `[(tic-tac-toe/play ~props) :players :board]))})))

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

(defn line [winner]
  (let [[[x1 y1] [x2 y2] value] winner]
    (dom/line {:x1 (str (+ 15 (* 33 x1)) "%")
               :y1 (str (+ 15 (* 33 y1)) "%")
               :x2 (str (+ 15 (* 33 x2)) "%")
               :y2 (str (+ 15 (* 33 y2)) "%")
               :stroke-width "10"
               :stroke value})))

(defui TicTacToe
  static om/IQuery
  (query
   [this]
   (let [player-query (om/get-query Player)
         tile-query (om/get-query Tile)]
     `[[:active-player :idx] {:players ~player-query}{:board ~tile-query}]))
  Object
  (render
   [this]
   (let [{:keys [active-player board players] :as env} (om/props this)
         width (.-innerWidth js/window)
         height (.-innerHeight js/window)
         size (if (<= height width)
                height
                width)
         [player1 player2] players
         w1 (:winner player1)
         w2 (:winner player2)]
     (println (str env))
     (g/grid {}
             (g/col {:xs 9 :md 8 :class "text-center"}
              (dom/svg {:width size :height size}        
                       (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "32%" :y "0%"})           
                       (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "65%" :y "0%"})
                       (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "32%"})
                       (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "65%"})
                       (map tile board)
                       (when w1
                         (line w1))
                       (when w2
                         (line w2))))
             (g/col {:xs 9 :md 2 :class "text-center"}
                    (g/row {} (player player1))
                    (g/row {} (player player2)))))))

(def parser (om/parser {:read read :mutate mutate }))
(def reconciler (om/reconciler {:state app-state
                                :parser parser}))
(defn init []
  (om/add-root! reconciler
                TicTacToe (gdom/getElement "app")))
