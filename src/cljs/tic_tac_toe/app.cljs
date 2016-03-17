(ns tic-tac-toe.app
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [tic-tac-toe.board :refer [TicTacToe]]
            [tic-tac-toe.player :refer [player-view Player player]]
            [tic-tac-toe.tile :refer [Tile tile]]
            [tic-tac-toe.readers :as r]
            [tic-tac-toe.mutations :as m]))

(enable-console-print!)

(def app-state
  {:active-player {:idx nil}
   :players [{:idx 1
              :name "1st Player"
              :type :human
              :active? nil
              :winner nil
              :piece "black"}
             {:idx 2
              :name "2nd Player"
              :type :computer
              :active? nil
              :winner nil
              :piece "white"}]
   :board [{:index [0 0] :value nil} {:index [1 0] :value nil} {:index [2 0] :value nil}
           {:index [0 1] :value nil} {:index [1 1] :value nil} {:index [2 1] :value nil}
           {:index [0 2] :value nil} {:index [1 2] :value nil} {:index [2 2] :value nil}]})

(def reconciler (om/reconciler {:state app-state
                                :parser (om/parser {:read r/read :mutate m/mutate })}))

(defn init []
  (om/add-root! reconciler
                TicTacToe (gdom/getElement "app")))
