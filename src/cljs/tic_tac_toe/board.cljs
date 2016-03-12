(ns tic-tac-toe.board
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [tic-tac-toe.player :refer [player-view Player player]]
            [tic-tac-toe.tile :refer [Tile tile]]))

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
         s (if (<= height width)
                height
                width)
         size (* s 0.80)
         [player1 player2] players
         w1 (:winner player1)
         w2 (:winner player2)
         winner (or w1 w2)]
     (g/grid {}
             (g/col {:xs 16 :sm 12 :class "text-center"}
                    (if (and (nil? (:idx active-player)) (nil? winner))
                      (dom/svg {:width size :height size
                                :onClick (fn [] (om/transact! this `[(tic-tac-toe/start ~env) :players]))}
                               (dom/circle {:cx "50%" :cy "50%"
                                            :r (/ size 2)
                                            :fill "red"})
                               (dom/text {:x "10%" :y "50%"
                                          :font-size (/ size 9)
                                          :fill "black"
                                          :stroke "yellow"} "Click me to start!"))
                      (dom/svg {:width size :height size}
                               (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "32%" :y "0%"})
                               (dom/rect {:width "1%" :height "98%" :fill "black" :transform nil :x "65%" :y "0%"})
                               (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "32%"})
                               (dom/rect {:width "98%" :height "1%" :fill "black" :transform nil :x "0%" :y "65%"})
                               (map tile board)
                               (when winner
                                 (line winner))))
                    (g/row {}
                           (when winner
                             (b/button {:onClick
                                        (fn [] (om/transact! this
                                                  `[(tic-tac-toe/restart ~env) :players :board :active-player]))}
                                       "New Game")))
                    (g/row {}
                           (g/col {:xs 6 :sm 5 :xs-offset 1 :class "text-right"} (player player1))
                           (g/col {:xs 6 :sm 5 :class "text-left"} (player player2))))))))
