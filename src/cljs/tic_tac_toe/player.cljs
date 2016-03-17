(ns tic-tac-toe.player
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [tic-tac-toe.colors :as color]))

(def opposite-color {color/player1 color/player2
                     color/player2 color/player1})

(defn player-view [this props]
  (let [{:keys [name type winner piece]} props]
    (dom/div {:style {:color color/base
                      :background-color (if-not winner
                                          piece
                                          color/winner)
                      :border-radius "25px"}}
             (dom/h1 name)
             (b/button {:class "btn btn-success"
                        :style {:margin-bottom "10px"
                                :color color/base}
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
