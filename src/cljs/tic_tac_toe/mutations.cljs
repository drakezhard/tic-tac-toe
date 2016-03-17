(ns tic-tac-toe.mutations
  (:require [om.next :as om]
            [tic-tac-toe.util :as u]))

(defmulti mutate om/dispatch)

(defmethod mutate 'tic-tac-toe/play
  [{:keys [state]} _ {:keys [index]}]
  {:action
   (fn []
     (when-let [active (get-in @state [:active-player :idx])]
       (u/next-move state active index)
       (u/next-state state active)))})

(defmethod mutate 'tic-tac-toe/computer-move
  [{:keys [state]} _ {:keys [idx]}]
  {:value {:keys [:idx :name :type :active? :winner :piece]}
   :action
   (fn []
     (when-let [active (get-in @state [:active-player :idx])]
       (when (= active idx)
        (let [board (u/get-board state)
              move (u/choose-move state board idx)]
          (u/next-move state idx move)
          (u/next-state state idx)))))})

(defmethod mutate 'tic-tac-toe/start
  [{:keys [state]} _ _]
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
