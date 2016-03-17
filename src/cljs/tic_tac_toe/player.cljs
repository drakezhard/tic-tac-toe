(ns tic-tac-toe.player
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]))

(def opposite-color {"black" "white"
                     "white" "black"})

(defn player-view [this props]
  (let [{:keys [name type winner piece]} props]
    (dom/div {:style {:background-color piece
                      :color (if-not winner
                               (opposite-color piece)
                               "orangered")
                      :border-radius "25px"}}
             (dom/h1 name)
             (b/button {:style {:margin-bottom "10px"}
                        :onClick
                        (fn [e]
                          (om/transact! this `[(tic-tac-toe/change-type ~props) :players]))}
                       (clojure.core/name type)))))

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
  (shouldComponentUpdate [this] true)
  (render
   [this]
   (let [{:keys [idx name type active? winner piece] :as props} (om/props this)]
     (when (and active? (= type :computer))
       (om/transact! this `[(tic-tac-toe/computer-move ~props) :players :board]))
     (player-view this props))))

(def player (om/factory Player {:keyfn :idx}))
