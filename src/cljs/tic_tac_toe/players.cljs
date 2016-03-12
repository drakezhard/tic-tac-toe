(ns tic-tac-toe.player
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]))

(defn player-view [winner name type this props]
  (dom/div {:class (when winner "winner")}
           (if winner
             (dom/h1 name)
             (dom/h2 name))
           (b/button {:onClick
                      (fn [e]
                        (om/transact! this `[(tic-tac-toe/change-type ~props) :players]))}
                     (clojure.core/name type))))

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
     (if (and active? (= type :computer))
       (do (om/transact! this `[(tic-tac-toe/computer-move ~props) :active-player :players :board])
           (player-view winner name type this props))
       (player-view winner name type this props)))))

(def player (om/factory Player {:keyfn :idx}))
