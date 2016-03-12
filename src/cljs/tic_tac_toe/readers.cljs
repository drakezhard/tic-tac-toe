(ns tic-tac-toe.readers
  (:require [om.next :as om]))

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
