(ns tic-tac-toe.board
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [tic-tac-toe.colors :as color]
            [tic-tac-toe.player :refer [Player player]]
            [tic-tac-toe.tile :refer [Tile tile]]))

(defn start-button [this env size]
  (dom/svg {:width size :height size
            :onClick (fn [] (om/transact! this `[(tic-tac-toe/start ~env) :players]))}
           (dom/circle {:cx "50%" :cy "50%"
                        :r (/ size 2)
                        :fill color/tiles})
           (dom/text {:x "10%" :y "50%"
                      :font-size (/ size 9)
                      :fill color/base} "Click me to start!")))

(defn frame []
  (dom/svg
    (dom/rect {:width "1%" :height "98%" :fill color/base :transform nil :x "32%" :y "0%"})
    (dom/rect {:width "1%" :height "98%" :fill color/base :transform nil :x "65%" :y "0%"})
    (dom/rect {:width "98%" :height "1%" :fill color/base :transform nil :x "0%" :y "32%"})
    (dom/rect {:width "98%" :height "1%" :fill color/base :transform nil :x "0%" :y "65%"})))

(defn line [winner]
  (when-not (keyword? winner)
    (let [[[x1 y1] _ [x2 y2] value] winner]
      (dom/line {:x1 (str (+ 15 (* 33 x1)) "%")
                 :y1 (str (+ 15 (* 33 y1)) "%")
                 :x2 (str (+ 15 (* 33 x2)) "%")
                 :y2 (str (+ 15 (* 33 y2)) "%")
                 :stroke-width "10"
                 :stroke value}))))

(defn draw-board [board size winner]
  (dom/svg {:width size :height size
            :style {:margin-top "25px"}}
           (frame)
           (map tile board)
           (when winner
             (line winner))))


(defn reset [this env label]
  (b/button {:class "btn btn-success"
             :style {:color color/base}
             :onClick
             (fn [] (om/transact! this
                                  `[(tic-tac-toe/restart ~env) :players :board :active-player]))}
            label))

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
         scaling-factor 0.77
         zize (* scaling-factor
                 (if (<= height width)
                   height
                   width))
         [player1 player2] players
         winner (or (:winner player1) (:winner player2))]
     (g/grid {}
             (g/col {:xs 16 :sm 12 :class "text-center"}
                    (if (and (nil? (:idx active-player)) (nil? winner))
                      (start-button this env zize)
                      (draw-board board zize winner))
                    (g/row {}
                           (g/col {:xs 6 :sm 5 :class "text-center"} (player player1))
                           (g/col {:xs 2 :sm 2 :class "text-center"}
                                  (if winner
                                    (reset this env "New Game")
                                    (when-not (nil? (:idx active-player))
                                      (reset this env "Restart"))))
                           (g/col {:xs 6 :sm 5 :class "text-center"} (player player2))))))))
