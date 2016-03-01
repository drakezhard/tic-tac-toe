(ns tic-tac-toe.app
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]))

(enable-console-print!)

(def app-state {:active-player {:idx nil}
                :players [{:idx 1
                           :name "Player 1"
                           :type :human
                           :active? nil
                           :winner nil
                           :piece "black"}
                          {:idx 2
                           :name "Player 2"
                           :type :computer
                           :active? nil
                           :winner nil
                           :piece "white"}]
                :board [{:index [0 0] :value nil} {:index [1 0] :value nil} {:index [2 0] :value nil}
                        {:index [0 1] :value nil} {:index [1 1] :value nil} {:index [2 1] :value nil}
                        {:index [0 2] :value nil} {:index [1 2] :value nil} {:index [2 2] :value nil}]})

(defn getter [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmulti read om/dispatch)

(defmethod read :players
  [{:keys [state] :as env} key params]
  {:value (getter state key)})

(defmethod read :board
  [{:keys [state] :as env} key params]
  {:value (getter state key)})

(defmethod read :active-player
  [{:keys [state] :as env} key params]
  {:value (key @state)})

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
      (compare-3 a b c) [[0 0] [1 0] [2 0] a]
      (compare-3 d e f) [[0 1] [1 1] [2 1] d]
      (compare-3 g h i) [[0 2] [1 2] [2 2] g]
      (compare-3 a d g) [[0 0] [0 1] [0 2] a]
      (compare-3 b e h) [[1 0] [1 1] [1 2] b]
      (compare-3 c f i) [[2 0] [2 1] [2 2] c]
      (compare-3 a e i) [[0 0] [1 1] [2 2] a]
      (compare-3 g e c) [[0 2] [1 1] [2 0] g]
      :else false)))

(defn next-player [state active]
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

(defn stop [state active winner]
  (do
    (if (keyword? winner)
      (do (swap! state update-in
                 [:player/by-index 1 :winner]
                 (fn []
                   winner))
          (swap! state update-in
                 [:player/by-index 2 :winner]
                 (fn []
                   winner)))
      (swap! state update-in
             [:player/by-index active :winner]
             (fn []
               winner)))
    (swap! state update-in
           [:active-player :idx]
           (fn [] nil))
    (swap! state update-in
           [:player/by-index active :active?]
           not)))

(defn get-board [state]
  (vals (get @state :tile/by-index)))

(defn full? [board]
  (->> board
       (map :value)
       (every? (complement nil?))))

(defn next-move [state active move]
  (swap! state update-in
         [:tile/by-index move :value]
         (fn []
           (get-in @state
                   [:player/by-index active :piece]))))

(defn next-state [state active]
  (let [board (get-board state)
        winner (won? board)]
    (if winner
      (stop state active winner)
      (if (full? board)
        (stop state active :tie)
        (next-player state active)))))

(defmethod mutate 'tic-tac-toe/play
  [{:keys [state]} _ {:keys [index]}]
  {:action
   (fn []
     (when-let [active (get-in @state [:active-player :idx])]
       (next-move state active index)
       (next-state state active)))})

(def corners #{[0 0] [2 0] [0 2] [2 2]})
(def edges #{[1 0] [0 1] [1 2] [2 1]})
(def corner-endpoint {[0 0] [2 2]
                      [0 2] [2 0]
                      [2 2] [0 0]
                      [2 0] [0 2]})

(defn invalid-valid [board]
  ((juxt remove filter)
   (fn [{:keys [index value]}] (nil? value)) board))

(defn generate-moves [board color]
  (let [[_ valid](invalid-valid board)]
    (->> valid
        (map (fn [m]
               (conj (remove #(= % m) board) (update m :value (fn [] color))))))))

(def opposite-player {1 2
                      2 1})

(defn get-valid [winner valid-moves]
  (let [[a b c _] winner
        valids (map :index valid-moves)]
    (cond
      ((complement empty?) (filter #(= % a)  valids)) a
      ((complement empty?) (filter #(= % b)  valids)) b
      ((complement empty?) (filter #(= % c)  valids)) c)))

(defn choose-move [state board active]
  (let [[invalid valid] (invalid-valid board)
        color (get-in @state [:player/by-index active :piece])
        opposite-color (get-in @state [:player/by-index (opposite-player active) :piece])
        iwin (first (remove false? (map won? (generate-moves board color))))
        iblock (first (remove false? (map won? (generate-moves board opposite-color))))]
    (letfn [(opposite-moves [coll]
              (remove (fn [{:keys [index value]}]
                        (= opposite-color value))
                      coll))
            (corner? [idx]
              (corners idx))]
      (cond
        (empty? invalid) [1 1]
        (= 2 (count invalid)) (let [second-move (:index (first (opposite-moves invalid)))]
                                (if (corner? second-move)
                                  (corner-endpoint second-move)
                                  (rand-nth (vec corners))))
        iwin (get-valid iwin valid)
        iblock (get-valid iblock valid)
        :else (:index (rand-nth valid))))))

(defmethod mutate 'tic-tac-toe/computer-move
  [{:keys [state]} _ {:keys [idx]}]
  {:action
   (fn []
     (when-let [active (get-in @state [:active-player :idx])]
       (when (= active idx)
         (let [board (get-board state)
               move (choose-move state board active)]
           (next-move state active move)
           (next-state state active)))))})

(defmethod mutate 'tic-tac-toe/start
  [{:keys [state]} _ {:keys [idx]}]
  {:action (fn []
             (swap! state update-in
                    [:active-player :idx]
                    (fn [] 1))
             (swap! state update-in
                    [:player/by-index 1 :active?]
                    (fn [] true))
             (swap! state update-in
                    [:player/by-index 2 :active?]
                    (fn [] false)))})

(defmethod mutate 'tic-tac-toe/restart
  [{:keys [state]} _ _]
  {:action (fn []
             (mapv #(swap! state update-in
                       [:player/by-index % :winner]
                       (fn [] nil))
                   [1 2])
             (mapv #(swap! state update-in
                           [:tile/by-index % :value]
                           (fn [] nil))
                   [[1 0] [0 1] [1 2] [2 1] [0 0] [2 0] [0 2] [2 2] [1 1]]))})

(defmethod mutate 'tic-tac-toe/change-type
  [{:keys [state]} _ {:keys [idx]}]
  {:action (fn []
             (swap! state update-in
                    [:player/by-index idx :type]
                    (fn [x]
                      (if (= x :computer)
                        :human
                        :computer))))})

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
     (dom/div {:class (when winner "winner")}
              (if winner
                (dom/h1 name)
                (dom/h2 name))
              (b/button {:onClick
                         (fn [e]
                           (om/transact! this `[(tic-tac-toe/change-type ~props) :players]))}
                        (clojure.core/name type))
              (when (and active? (= type :computer))
                (om/transact! this `[(tic-tac-toe/computer-move ~props) :players]))))))

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
              :onClick (fn [e] (om/transact! this `[(tic-tac-toe/play ~props) :players :active-player :board]))})))

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
  (when-not (keyword? winner)
   (let [[[x1 y1] _ [x2 y2] value] winner]
     (dom/line {:x1 (str (+ 15 (* 33 x1)) "%")
                :y1 (str (+ 15 (* 33 y1)) "%")
                :x2 (str (+ 15 (* 33 x2)) "%")
                :y2 (str (+ 15 (* 33 y2)) "%")
                :stroke-width "10"
                :stroke value}))))

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
         [player1 player2] players
         w1 (:winner player1)
         w2 (:winner player2)
         winner (or w1 w2)]
     (g/grid {}
             (g/col {:xs 16 :sm 12 :class "text-center"}
                    (dom/svg {:width (* size 0.80) :height (* size 0.80)}
                             (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "32%" :y "0%"})
                             (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "65%" :y "0%"})
                             (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "32%"})
                             (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "65%"})
                             (println (str board))
                             (map tile board)
                             (when winner
                               (line winner)))
                    (g/row {}
                           (when (and (nil? (:idx active-player)) (nil? winner))
                             (b/button {:onClick (fn [] (om/transact! this `[(tic-tac-toe/start ~env) :players]))}
                                       "Start"))
                           (when winner
                             (b/button {:onClick
                                        (fn [] (om/transact! this
                                                  `[(tic-tac-toe/restart ~env) :players :board :active-player]))}
                                       "New Game")))
                    (g/row {}
                           (g/col {:xs 6 :sm 5 :xs-offset 1 :class "text-right"} (player player1))
                           (g/col {:xs 6 :sm 5 :class "text-left"} (player player2))))))))


(def reconciler (om/reconciler {:state app-state
                                :parser (om/parser {:read read :mutate mutate })}))
(defn init []
  (om/add-root! reconciler
                TicTacToe (gdom/getElement "app")))
