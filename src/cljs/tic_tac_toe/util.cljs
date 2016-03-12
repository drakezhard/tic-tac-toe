(ns tic-tac-toe.util)

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
                      coll))]
      (cond
        (empty? invalid) [1 1]
        iwin (get-valid iwin valid)
        iblock (get-valid iblock valid)
        :else (:index (rand-nth valid))))))
