(ns tic-tac-toe.tile
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom :include-macros true]
            [tic-tac-toe.colors :as color]))

(defn click-handler [this props]
  (when (and this props)
   (fn [e] (om/transact! this `[(tic-tac-toe/play ~props) :players :active-player :board]))))

(defn square
  ([[x y]]
   (square [x y] nil nil))
  ([[x y] this props]
   (dom/rect {:width "32%"
              :height "32%"
              :fill color/tiles
              :transform nil
              :x (str (* 33 x)"%")
              :y (str (* 33 y)"%")
              :onClick (click-handler this props)})))

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
