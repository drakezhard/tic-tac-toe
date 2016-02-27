// Compiled by ClojureScript 1.7.170 {}
goog.provide('tic_tac_toe.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('om.next');
goog.require('om_bootstrap.button');
cljs.core.enable_console_print_BANG_.call(null);
tic_tac_toe.app.app_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Player 1",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"active?","active?",459499776),null,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"black"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Player 2",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"active?","active?",459499776),null,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"white"], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)], null);
tic_tac_toe.app.getter = (function tic_tac_toe$app$getter(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__23200_SHARP_){
return cljs.core.get_in.call(null,st,p1__23200_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
if(typeof tic_tac_toe.app.read !== 'undefined'){
} else {
tic_tac_toe.app.read = (function (){var method_table__16485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16489__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16489__auto__,method_table__16485__auto__,prefer_table__16486__auto__,method_cache__16487__auto__,cached_hierarchy__16488__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"players","players",-1361554569),(function (p__23201,key,params){
var map__23202 = p__23201;
var map__23202__$1 = ((((!((map__23202 == null)))?((((map__23202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23202):map__23202);
var env = map__23202__$1;
var state = cljs.core.get.call(null,map__23202__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"board","board",-1907017633),(function (p__23204,key,params){
var map__23205 = p__23204;
var map__23205__$1 = ((((!((map__23205 == null)))?((((map__23205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23205):map__23205);
var env = map__23205__$1;
var state = cljs.core.get.call(null,map__23205__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"active-player","active-player",23744659),(function (p__23207,key,params){
var map__23208 = p__23207;
var map__23208__$1 = ((((!((map__23208 == null)))?((((map__23208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23208):map__23208);
var env = map__23208__$1;
var state = cljs.core.get.call(null,map__23208__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key.call(null,cljs.core.deref.call(null,state))], null);
}));
if(typeof tic_tac_toe.app.mutate !== 'undefined'){
} else {
tic_tac_toe.app.mutate = (function (){var method_table__16485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16489__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16489__auto__,method_table__16485__auto__,prefer_table__16486__auto__,method_cache__16487__auto__,cached_hierarchy__16488__auto__));
})();
}
tic_tac_toe.app.compare_3 = (function tic_tac_toe$app$compare_3(x,y,z){
return (cljs.core.not_EQ_.call(null,x,null)) && (cljs.core._EQ_.call(null,x,y,z));
});
tic_tac_toe.app.won_QMARK_ = (function tic_tac_toe$app$won_QMARK_(board){
var value_board = cljs.core.map.call(null,cljs.core.vals,board);
var tile_map = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,value_board),cljs.core.map.call(null,cljs.core.second,value_board));
var a = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var b = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var c = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
var d = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
var e = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
var f = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null));
var g = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
var h = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
var i = tile_map.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,b,c))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,d,e,f))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),d], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,h,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),g], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,d,g))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,b,e,h))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),b], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,c,f,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),c], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,e,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,e,c))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),g], null);
} else {
return false;

}
}
}
}
}
}
}
}
});
tic_tac_toe.app.next_player = (function tic_tac_toe$app$next_player(state,active){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(1),new cljs.core.Keyword(null,"active?","active?",459499776)], null),cljs.core.not);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(2),new cljs.core.Keyword(null,"active?","active?",459499776)], null),cljs.core.not);
});
tic_tac_toe.app.stop = (function tic_tac_toe$app$stop(state,active,winner){
if((winner instanceof cljs.core.Keyword)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(1),new cljs.core.Keyword(null,"winner","winner",714604679)], null),(function (){
return winner;
}));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(2),new cljs.core.Keyword(null,"winner","winner",714604679)], null),(function (){
return winner;
}));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"winner","winner",714604679)], null),(function (){
return winner;
}));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(function (){
return null;
}));

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"active?","active?",459499776)], null),cljs.core.not);
});
tic_tac_toe.app.get_board = (function tic_tac_toe$app$get_board(state){
return cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801)));
});
tic_tac_toe.app.full_QMARK_ = (function tic_tac_toe$app$full_QMARK_(board){
return cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),board));
});
tic_tac_toe.app.next_move = (function tic_tac_toe$app$next_move(state,active,move){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),move,new cljs.core.Keyword(null,"value","value",305978217)], null),(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"piece","piece",1396691784)], null));
}));
});
tic_tac_toe.app.next_state = (function tic_tac_toe$app$next_state(state,active){
var board = tic_tac_toe.app.get_board.call(null,state);
var winner = tic_tac_toe.app.won_QMARK_.call(null,board);
if(cljs.core.truth_(winner)){
return tic_tac_toe.app.stop.call(null,state,active,winner);
} else {
if(cljs.core.truth_(tic_tac_toe.app.full_QMARK_.call(null,board))){
return tic_tac_toe.app.stop.call(null,state,active,new cljs.core.Keyword(null,"tie","tie",-487201694));
} else {
return tic_tac_toe.app.next_player.call(null,state,active);
}
}
});
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null),(function (p__23210,_,p__23211){
var map__23212 = p__23210;
var map__23212__$1 = ((((!((map__23212 == null)))?((((map__23212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23212):map__23212);
var state = cljs.core.get.call(null,map__23212__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23213 = p__23211;
var map__23213__$1 = ((((!((map__23213 == null)))?((((map__23213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23213):map__23213);
var index = cljs.core.get.call(null,map__23213__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23212,map__23212__$1,state,map__23213,map__23213__$1,index){
return (function (){
var temp__4425__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var active = temp__4425__auto__;
tic_tac_toe.app.next_move.call(null,state,active,index);

return tic_tac_toe.app.next_state.call(null,state,active);
} else {
return null;
}
});})(map__23212,map__23212__$1,state,map__23213,map__23213__$1,index))
], null);
}));
tic_tac_toe.app.corners = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], true);
tic_tac_toe.app.edges = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], true);
tic_tac_toe.app.corner_endpoint = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], true, false);
tic_tac_toe.app.next_move_v1 = (function tic_tac_toe$app$next_move_v1(invalid_moves,valid_moves){
var human_moves = (function tic_tac_toe$app$next_move_v1_$_human_moves(coll){
return cljs.core.remove.call(null,(function (p__23237){
var map__23238 = p__23237;
var map__23238__$1 = ((((!((map__23238 == null)))?((((map__23238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23238):map__23238);
var index = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core._EQ_.call(null,"white",value);
}),coll);
});
var corner_QMARK_ = (function tic_tac_toe$app$next_move_v1_$_corner_QMARK_(idx){
return tic_tac_toe.app.corners.call(null,idx);
});
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,invalid_moves))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,invalid_moves))){
var hm = human_moves.call(null,invalid_moves);
var idx = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,hm));
if(cljs.core.truth_(corner_QMARK_.call(null,idx))){
return tic_tac_toe.app.corner_endpoint.call(null,idx);
} else {
return cljs.core.rand_nth.call(null,cljs.core.vec.call(null,tic_tac_toe.app.corners));
}
} else {
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth.call(null,valid_moves));
}
}
});
tic_tac_toe.app.invalid_valid = (function tic_tac_toe$app$invalid_valid(board){
return cljs.core.juxt.call(null,cljs.core.remove,cljs.core.filter).call(null,(function (p__23243){
var map__23244 = p__23243;
var map__23244__$1 = ((((!((map__23244 == null)))?((((map__23244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23244):map__23244);
var index = cljs.core.get.call(null,map__23244__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23244__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (value == null);
}),board);
});
tic_tac_toe.app.generate_moves = (function tic_tac_toe$app$generate_moves(board,color){
var vec__23248 = tic_tac_toe.app.invalid_valid.call(null,board);
var invalid = cljs.core.nth.call(null,vec__23248,(0),null);
var valid = cljs.core.nth.call(null,vec__23248,(1),null);
return cljs.core.map.call(null,valid,((function (vec__23248,invalid,valid){
return (function (m){
return cljs.core.conj.call(null,cljs.core.into.call(null,invalid,cljs.core.remove.call(null,((function (vec__23248,invalid,valid){
return (function (p1__23246_SHARP_){
return cljs.core._EQ_.call(null,p1__23246_SHARP_,m);
});})(vec__23248,invalid,valid))
,valid)),cljs.core.update.call(null,m,new cljs.core.Keyword(null,"value","value",305978217),((function (vec__23248,invalid,valid){
return (function (){
return color;
});})(vec__23248,invalid,valid))
));
});})(vec__23248,invalid,valid))
);
});
tic_tac_toe.app.opposite_player = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null);
tic_tac_toe.app.choose_move = (function tic_tac_toe$app$choose_move(state,board,active){
var human_moves = (function tic_tac_toe$app$choose_move_$_human_moves(coll){
return cljs.core.remove.call(null,(function (p__23271){
var map__23272 = p__23271;
var map__23272__$1 = ((((!((map__23272 == null)))?((((map__23272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23272):map__23272);
var index = cljs.core.get.call(null,map__23272__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23272__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core._EQ_.call(null,"white",value);
}),coll);
});
var corner_QMARK_ = (function tic_tac_toe$app$choose_move_$_corner_QMARK_(idx){
return tic_tac_toe.app.corners.call(null,idx);
});
var vec__23274 = tic_tac_toe.app.invalid_valid.call(null,board);
var invalid = cljs.core.nth.call(null,vec__23274,(0),null);
var valid = cljs.core.nth.call(null,vec__23274,(1),null);
var color = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"color","color",1011675173)], null));
var opposite_color = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),tic_tac_toe.app.opposite_player.call(null,active),new cljs.core.Keyword(null,"color","color",1011675173)], null));
if(cljs.core.empty_QMARK_.call(null,invalid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,invalid))){
var second_move = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,human_moves.call(null,invalid)));
if(cljs.core.truth_(corner_QMARK_.call(null,second_move))){
return tic_tac_toe.app.corner_endpoint.call(null,second_move);
} else {
return cljs.core.rand_nth.call(null,cljs.core.vec.call(null,tic_tac_toe.app.corners));
}
} else {
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth.call(null,valid));
}
}
});
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null),(function (p__23275,_,p__23276){
var map__23277 = p__23275;
var map__23277__$1 = ((((!((map__23277 == null)))?((((map__23277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23277):map__23277);
var state = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23278 = p__23276;
var map__23278__$1 = ((((!((map__23278 == null)))?((((map__23278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23278):map__23278);
var idx = cljs.core.get.call(null,map__23278__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23277,map__23277__$1,state,map__23278,map__23278__$1,idx){
return (function (){
var temp__4425__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var active = temp__4425__auto__;
if(cljs.core._EQ_.call(null,active,idx)){
var board = tic_tac_toe.app.get_board.call(null,state);
var move = cljs.core.apply.call(null,tic_tac_toe.app.next_move_v1,tic_tac_toe.app.invalid_valid.call(null,board));
tic_tac_toe.app.next_move.call(null,state,active,move);

return tic_tac_toe.app.next_state.call(null,state,active);
} else {
return null;
}
} else {
return null;
}
});})(map__23277,map__23277__$1,state,map__23278,map__23278__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null),(function (p__23281,_,p__23282){
var map__23283 = p__23281;
var map__23283__$1 = ((((!((map__23283 == null)))?((((map__23283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23283):map__23283);
var state = cljs.core.get.call(null,map__23283__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23284 = p__23282;
var map__23284__$1 = ((((!((map__23284 == null)))?((((map__23284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23284):map__23284);
var idx = cljs.core.get.call(null,map__23284__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),((function (map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx){
return (function (){
return (1);
});})(map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(1),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx){
return (function (){
return true;
});})(map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(2),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx){
return (function (){
return false;
});})(map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx))
);
});})(map__23283,map__23283__$1,state,map__23284,map__23284__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null),(function (p__23289,_,___$1){
var map__23290 = p__23289;
var map__23290__$1 = ((((!((map__23290 == null)))?((((map__23290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23290):map__23290);
var state = cljs.core.get.call(null,map__23290__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23290,map__23290__$1,state){
return (function (){
cljs.core.mapv.call(null,((function (map__23290,map__23290__$1,state){
return (function (p1__23287_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),p1__23287_SHARP_,new cljs.core.Keyword(null,"winner","winner",714604679)], null),((function (map__23290,map__23290__$1,state){
return (function (){
return null;
});})(map__23290,map__23290__$1,state))
);
});})(map__23290,map__23290__$1,state))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));

return cljs.core.mapv.call(null,((function (map__23290,map__23290__$1,state){
return (function (p1__23288_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),p1__23288_SHARP_,new cljs.core.Keyword(null,"value","value",305978217)], null),((function (map__23290,map__23290__$1,state){
return (function (){
return null;
});})(map__23290,map__23290__$1,state))
);
});})(map__23290,map__23290__$1,state))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
});})(map__23290,map__23290__$1,state))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null),(function (p__23292,_,p__23293){
var map__23294 = p__23292;
var map__23294__$1 = ((((!((map__23294 == null)))?((((map__23294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23294):map__23294);
var state = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23295 = p__23293;
var map__23295__$1 = ((((!((map__23295 == null)))?((((map__23295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23295):map__23295);
var idx = cljs.core.get.call(null,map__23295__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23294,map__23294__$1,state,map__23295,map__23295__$1,idx){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx,new cljs.core.Keyword(null,"type","type",1174270348)], null),((function (map__23294,map__23294__$1,state,map__23295,map__23295__$1,idx){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"computer","computer",-1035300443))){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
return new cljs.core.Keyword(null,"computer","computer",-1035300443);
}
});})(map__23294,map__23294__$1,state,map__23295,map__23295__$1,idx))
);
});})(map__23294,map__23294__$1,state,map__23295,map__23295__$1,idx))
], null);
}));
/**
 * @constructor
 */
tic_tac_toe.app.Player = (function tic_tac_toe$app$Player(){
var this__22985__auto__ = this;
React.Component.apply(this__22985__auto__,arguments);

if(!((this__22985__auto__.initLocalState == null))){
this__22985__auto__.state = this__22985__auto__.initLocalState();
} else {
this__22985__auto__.state = {};
}

return this__22985__auto__;
});

tic_tac_toe.app.Player.prototype = goog.object.clone(React.Component.prototype);

var x23302_23319 = tic_tac_toe.app.Player.prototype;
x23302_23319.componentWillUpdate = ((function (x23302_23319){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22925__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22925__auto__);
});})(x23302_23319))
;

x23302_23319.shouldComponentUpdate = ((function (x23302_23319){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
var next_props__22926__auto____$1 = goog.object.get(next_props__22926__auto__,"omcljs$value");
var next_props__22926__auto____$2 = (function (){var G__23303 = next_props__22926__auto____$1;
var G__23303__$1 = (((next_props__22926__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23303):G__23303);
return G__23303__$1;
})();
var or__15572__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22925__auto__),next_props__22926__auto____$2);
if(or__15572__auto__){
return or__15572__auto__;
} else {
var and__15560__auto__ = this__22925__auto__.state;
if(cljs.core.truth_(and__15560__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22925__auto__.state,"omcljs$state"),goog.object.get(next_state__22927__auto__,"omcljs$state"));
} else {
return and__15560__auto__;
}
}
});})(x23302_23319))
;

x23302_23319.componentWillUnmount = ((function (x23302_23319){
return (function (){
var this__22925__auto__ = this;
var r__22931__auto__ = om.next.get_reconciler.call(null,this__22925__auto__);
var cfg__22932__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22931__auto__);
var st__22933__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
var indexer__22930__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
if((st__22933__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22933__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22925__auto__);
}

if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23302_23319))
;

x23302_23319.componentDidUpdate = ((function (x23302_23319){
return (function (prev_props__22928__auto__,prev_state__22929__auto__){
var this__22925__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22925__auto__);
});})(x23302_23319))
;

x23302_23319.isMounted = ((function (x23302_23319){
return (function (){
var this__22925__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22925__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23302_23319))
;

x23302_23319.componentWillMount = ((function (x23302_23319){
return (function (){
var this__22925__auto__ = this;
var indexer__22930__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22925__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23302_23319))
;

x23302_23319.render = ((function (x23302_23319){
return (function (){
var this__22924__auto__ = this;
var this$ = this__22924__auto__;
var _STAR_reconciler_STAR_23304 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23305 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23306 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23307 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23308 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22924__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22924__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22924__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22924__auto__);

om.next._STAR_parent_STAR_ = this__22924__auto__;

try{var map__23309 = om.next.props.call(null,this$);
var map__23309__$1 = ((((!((map__23309 == null)))?((((map__23309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23309):map__23309);
var props = map__23309__$1;
var idx = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var active_QMARK_ = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var winner = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var piece = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(winner)?"winner":null))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(winner)?om_tools.dom.element.call(null,React.DOM.h1,name,cljs.core.PersistentVector.EMPTY):om_tools.dom.element.call(null,React.DOM.h2,name,cljs.core.PersistentVector.EMPTY)),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23309,map__23309__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_23304,_STAR_depth_STAR_23305,_STAR_shared_STAR_23306,_STAR_instrument_STAR_23307,_STAR_parent_STAR_23308,this$,this__22924__auto__,x23302_23319){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__23309,map__23309__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_23304,_STAR_depth_STAR_23305,_STAR_shared_STAR_23306,_STAR_instrument_STAR_23307,_STAR_parent_STAR_23308,this$,this__22924__auto__,x23302_23319))
], null),cljs.core.name.call(null,type)),(cljs.core.truth_((function (){var and__15560__auto__ = active_QMARK_;
if(cljs.core.truth_(and__15560__auto__)){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"computer","computer",-1035300443));
} else {
return and__15560__auto__;
}
})())?om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569))))))):null)],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23308;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23307;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23306;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23305;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23304;
}});})(x23302_23319))
;


tic_tac_toe.app.Player.prototype.constructor = tic_tac_toe.app.Player;

tic_tac_toe.app.Player.prototype.constructor.displayName = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.prototype.om$isComponent = true;

var x23311_23320 = tic_tac_toe.app.Player;
x23311_23320.om$next$Ident$ = true;

x23311_23320.om$next$Ident$ident$arity$2 = ((function (x23311_23320){
return (function (this$,p__23312){
var map__23313 = p__23312;
var map__23313__$1 = ((((!((map__23313 == null)))?((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23313):map__23313);
var idx = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x23311_23320))
;

x23311_23320.om$next$IQuery$ = true;

x23311_23320.om$next$IQuery$query$arity$1 = ((function (x23311_23320){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x23311_23320))
;


var x23315_23321 = tic_tac_toe.app.Player.prototype;
x23315_23321.om$next$Ident$ = true;

x23315_23321.om$next$Ident$ident$arity$2 = ((function (x23315_23321){
return (function (this$,p__23316){
var map__23317 = p__23316;
var map__23317__$1 = ((((!((map__23317 == null)))?((((map__23317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23317):map__23317);
var idx = cljs.core.get.call(null,map__23317__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x23315_23321))
;

x23315_23321.om$next$IQuery$ = true;

x23315_23321.om$next$IQuery$query$arity$1 = ((function (x23315_23321){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x23315_23321))
;


tic_tac_toe.app.Player.cljs$lang$type = true;

tic_tac_toe.app.Player.cljs$lang$ctorStr = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.cljs$lang$ctorPrWriter = (function (this__22987__auto__,writer__22988__auto__,opt__22989__auto__){
return cljs.core._write.call(null,writer__22988__auto__,"tic-tac-toe.app/Player");
});
tic_tac_toe.app.square = (function tic_tac_toe$app$square(var_args){
var args23322 = [];
var len__16630__auto___23329 = arguments.length;
var i__16631__auto___23330 = (0);
while(true){
if((i__16631__auto___23330 < len__16630__auto___23329)){
args23322.push((arguments[i__16631__auto___23330]));

var G__23331 = (i__16631__auto___23330 + (1));
i__16631__auto___23330 = G__23331;
continue;
} else {
}
break;
}

var G__23324 = args23322.length;
switch (G__23324) {
case 1:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23322.length)].join('')));

}
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1 = (function (p__23325){
var vec__23326 = p__23325;
var x = cljs.core.nth.call(null,vec__23326,(0),null);
var y = cljs.core.nth.call(null,vec__23326,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join(''))});
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3 = (function (p__23327,this$,props){
var vec__23328 = p__23327;
var x = cljs.core.nth.call(null,vec__23328,(0),null);
var y = cljs.core.nth.call(null,vec__23328,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join('')), "onClick": om_tools.dom.format_opts.call(null,((function (vec__23328,x,y){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)))))));
});})(vec__23328,x,y))
)});
});

tic_tac_toe.app.square.cljs$lang$maxFixedArity = 3;
tic_tac_toe.app.piece = (function tic_tac_toe$app$piece(p__23333,color){
var vec__23335 = p__23333;
var x = cljs.core.nth.call(null,vec__23335,(0),null);
var y = cljs.core.nth.call(null,vec__23335,(1),null);
return React.DOM.circle({"r": "8%", "cx": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * x))),cljs.core.str("%")].join('')), "cy": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * y))),cljs.core.str("%")].join('')), "fill": om_tools.dom.format_opts.call(null,color)});
});
/**
 * @constructor
 */
tic_tac_toe.app.Tile = (function tic_tac_toe$app$Tile(){
var this__22985__auto__ = this;
React.Component.apply(this__22985__auto__,arguments);

if(!((this__22985__auto__.initLocalState == null))){
this__22985__auto__.state = this__22985__auto__.initLocalState();
} else {
this__22985__auto__.state = {};
}

return this__22985__auto__;
});

tic_tac_toe.app.Tile.prototype = goog.object.clone(React.Component.prototype);

var x23340_23357 = tic_tac_toe.app.Tile.prototype;
x23340_23357.componentWillUpdate = ((function (x23340_23357){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22925__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22925__auto__);
});})(x23340_23357))
;

x23340_23357.shouldComponentUpdate = ((function (x23340_23357){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
var next_props__22926__auto____$1 = goog.object.get(next_props__22926__auto__,"omcljs$value");
var next_props__22926__auto____$2 = (function (){var G__23341 = next_props__22926__auto____$1;
var G__23341__$1 = (((next_props__22926__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23341):G__23341);
return G__23341__$1;
})();
var or__15572__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22925__auto__),next_props__22926__auto____$2);
if(or__15572__auto__){
return or__15572__auto__;
} else {
var and__15560__auto__ = this__22925__auto__.state;
if(cljs.core.truth_(and__15560__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22925__auto__.state,"omcljs$state"),goog.object.get(next_state__22927__auto__,"omcljs$state"));
} else {
return and__15560__auto__;
}
}
});})(x23340_23357))
;

x23340_23357.componentWillUnmount = ((function (x23340_23357){
return (function (){
var this__22925__auto__ = this;
var r__22931__auto__ = om.next.get_reconciler.call(null,this__22925__auto__);
var cfg__22932__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22931__auto__);
var st__22933__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
var indexer__22930__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
if((st__22933__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22933__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22925__auto__);
}

if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23340_23357))
;

x23340_23357.componentDidUpdate = ((function (x23340_23357){
return (function (prev_props__22928__auto__,prev_state__22929__auto__){
var this__22925__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22925__auto__);
});})(x23340_23357))
;

x23340_23357.isMounted = ((function (x23340_23357){
return (function (){
var this__22925__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22925__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23340_23357))
;

x23340_23357.componentWillMount = ((function (x23340_23357){
return (function (){
var this__22925__auto__ = this;
var indexer__22930__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22925__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23340_23357))
;

x23340_23357.render = ((function (x23340_23357){
return (function (){
var this__22924__auto__ = this;
var this$ = this__22924__auto__;
var _STAR_reconciler_STAR_23342 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23343 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23344 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23345 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23346 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22924__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22924__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22924__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22924__auto__);

om.next._STAR_parent_STAR_ = this__22924__auto__;

try{var map__23347 = om.next.props.call(null,this$);
var map__23347__$1 = ((((!((map__23347 == null)))?((((map__23347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347):map__23347);
var props = map__23347__$1;
var index = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,value)){
return tic_tac_toe.app.square.call(null,index,this$,props);
} else {
return cljs.core.apply.call(null,React.DOM.svg,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.app.square.call(null,index),tic_tac_toe.app.piece.call(null,index,value)],null))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23346;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23345;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23344;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23343;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23342;
}});})(x23340_23357))
;


tic_tac_toe.app.Tile.prototype.constructor = tic_tac_toe.app.Tile;

tic_tac_toe.app.Tile.prototype.constructor.displayName = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.prototype.om$isComponent = true;

var x23349_23358 = tic_tac_toe.app.Tile;
x23349_23358.om$next$Ident$ = true;

x23349_23358.om$next$Ident$ident$arity$2 = ((function (x23349_23358){
return (function (this$,p__23350){
var map__23351 = p__23350;
var map__23351__$1 = ((((!((map__23351 == null)))?((((map__23351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23351):map__23351);
var index = cljs.core.get.call(null,map__23351__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x23349_23358))
;

x23349_23358.om$next$IQuery$ = true;

x23349_23358.om$next$IQuery$query$arity$1 = ((function (x23349_23358){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x23349_23358))
;


var x23353_23359 = tic_tac_toe.app.Tile.prototype;
x23353_23359.om$next$Ident$ = true;

x23353_23359.om$next$Ident$ident$arity$2 = ((function (x23353_23359){
return (function (this$,p__23354){
var map__23355 = p__23354;
var map__23355__$1 = ((((!((map__23355 == null)))?((((map__23355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23355):map__23355);
var index = cljs.core.get.call(null,map__23355__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x23353_23359))
;

x23353_23359.om$next$IQuery$ = true;

x23353_23359.om$next$IQuery$query$arity$1 = ((function (x23353_23359){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x23353_23359))
;


tic_tac_toe.app.Tile.cljs$lang$type = true;

tic_tac_toe.app.Tile.cljs$lang$ctorStr = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.cljs$lang$ctorPrWriter = (function (this__22987__auto__,writer__22988__auto__,opt__22989__auto__){
return cljs.core._write.call(null,writer__22988__auto__,"tic-tac-toe.app/Tile");
});
tic_tac_toe.app.tile = om.next.factory.call(null,tic_tac_toe.app.Tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
tic_tac_toe.app.player = om.next.factory.call(null,tic_tac_toe.app.Player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
tic_tac_toe.app.line = (function tic_tac_toe$app$line(winner){
if((winner instanceof cljs.core.Keyword)){
return null;
} else {
var vec__23363 = winner;
var vec__23364 = cljs.core.nth.call(null,vec__23363,(0),null);
var x1 = cljs.core.nth.call(null,vec__23364,(0),null);
var y1 = cljs.core.nth.call(null,vec__23364,(1),null);
var vec__23365 = cljs.core.nth.call(null,vec__23363,(1),null);
var x2 = cljs.core.nth.call(null,vec__23365,(0),null);
var y2 = cljs.core.nth.call(null,vec__23365,(1),null);
var value = cljs.core.nth.call(null,vec__23363,(2),null);
return React.DOM.line({"x1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x1))),cljs.core.str("%")].join('')), "y1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y1))),cljs.core.str("%")].join('')), "x2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x2))),cljs.core.str("%")].join('')), "y2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y2))),cljs.core.str("%")].join('')), "strokeWidth": "10", "stroke": om_tools.dom.format_opts.call(null,value)});
}
});
/**
 * @constructor
 */
tic_tac_toe.app.TicTacToe = (function tic_tac_toe$app$TicTacToe(){
var this__22985__auto__ = this;
React.Component.apply(this__22985__auto__,arguments);

if(!((this__22985__auto__.initLocalState == null))){
this__22985__auto__.state = this__22985__auto__.initLocalState();
} else {
this__22985__auto__.state = {};
}

return this__22985__auto__;
});

tic_tac_toe.app.TicTacToe.prototype = goog.object.clone(React.Component.prototype);

var x23370_23382 = tic_tac_toe.app.TicTacToe.prototype;
x23370_23382.componentWillUpdate = ((function (x23370_23382){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22925__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22925__auto__);
});})(x23370_23382))
;

x23370_23382.shouldComponentUpdate = ((function (x23370_23382){
return (function (next_props__22926__auto__,next_state__22927__auto__){
var this__22925__auto__ = this;
var next_props__22926__auto____$1 = goog.object.get(next_props__22926__auto__,"omcljs$value");
var next_props__22926__auto____$2 = (function (){var G__23371 = next_props__22926__auto____$1;
var G__23371__$1 = (((next_props__22926__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23371):G__23371);
return G__23371__$1;
})();
var or__15572__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22925__auto__),next_props__22926__auto____$2);
if(or__15572__auto__){
return or__15572__auto__;
} else {
var and__15560__auto__ = this__22925__auto__.state;
if(cljs.core.truth_(and__15560__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22925__auto__.state,"omcljs$state"),goog.object.get(next_state__22927__auto__,"omcljs$state"));
} else {
return and__15560__auto__;
}
}
});})(x23370_23382))
;

x23370_23382.componentWillUnmount = ((function (x23370_23382){
return (function (){
var this__22925__auto__ = this;
var r__22931__auto__ = om.next.get_reconciler.call(null,this__22925__auto__);
var cfg__22932__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22931__auto__);
var st__22933__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
var indexer__22930__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22932__auto__);
if((st__22933__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22933__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22925__auto__);
}

if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23370_23382))
;

x23370_23382.componentDidUpdate = ((function (x23370_23382){
return (function (prev_props__22928__auto__,prev_state__22929__auto__){
var this__22925__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22925__auto__);
});})(x23370_23382))
;

x23370_23382.isMounted = ((function (x23370_23382){
return (function (){
var this__22925__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22925__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23370_23382))
;

x23370_23382.componentWillMount = ((function (x23370_23382){
return (function (){
var this__22925__auto__ = this;
var indexer__22930__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22925__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22930__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22930__auto__,this__22925__auto__);
}
});})(x23370_23382))
;

x23370_23382.render = ((function (x23370_23382){
return (function (){
var this__22924__auto__ = this;
var this$ = this__22924__auto__;
var _STAR_reconciler_STAR_23372 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23373 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23374 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23375 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23376 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22924__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22924__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22924__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22924__auto__);

om.next._STAR_parent_STAR_ = this__22924__auto__;

try{var map__23377 = om.next.props.call(null,this$);
var map__23377__$1 = ((((!((map__23377 == null)))?((((map__23377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23377):map__23377);
var env = map__23377__$1;
var active_player = cljs.core.get.call(null,map__23377__$1,new cljs.core.Keyword(null,"active-player","active-player",23744659));
var board = cljs.core.get.call(null,map__23377__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__23377__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var width = window.innerWidth;
var height = window.innerHeight;
var size = (((height <= width))?height:width);
var vec__23378 = players;
var player1 = cljs.core.nth.call(null,vec__23378,(0),null);
var player2 = cljs.core.nth.call(null,vec__23378,(1),null);
var w1 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player1);
var w2 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player2);
var winner = (function (){var or__15572__auto__ = w1;
if(cljs.core.truth_(or__15572__auto__)){
return or__15572__auto__;
} else {
return w2;
}
})();
return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(16),new cljs.core.Keyword(null,"sm","sm",-1402575065),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),cljs.core.apply.call(null,React.DOM.svg,{"width": om_tools.dom.format_opts.call(null,(size * 0.8)), "height": om_tools.dom.format_opts.call(null,(size * 0.8))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "32%", "y": "0%"}),React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "65%", "y": "0%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "32%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "65%"}),cljs.core.println.call(null,[cljs.core.str(board)].join('')),cljs.core.map.call(null,tic_tac_toe.app.tile,board),(cljs.core.truth_(winner)?tic_tac_toe.app.line.call(null,winner):null)],null)))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,((((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(active_player) == null)) && ((winner == null)))?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23377,map__23377__$1,env,active_player,board,players,width,height,size,vec__23378,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23372,_STAR_depth_STAR_23373,_STAR_shared_STAR_23374,_STAR_instrument_STAR_23375,_STAR_parent_STAR_23376,this$,this__22924__auto__,x23370_23382){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__23377,map__23377__$1,env,active_player,board,players,width,height,size,vec__23378,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23372,_STAR_depth_STAR_23373,_STAR_shared_STAR_23374,_STAR_instrument_STAR_23375,_STAR_parent_STAR_23376,this$,this__22924__auto__,x23370_23382))
], null),"Start"):null),(cljs.core.truth_(winner)?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23377,map__23377__$1,env,active_player,board,players,width,height,size,vec__23378,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23372,_STAR_depth_STAR_23373,_STAR_shared_STAR_23374,_STAR_instrument_STAR_23375,_STAR_parent_STAR_23376,this$,this__22924__auto__,x23370_23382){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)))))));
});})(map__23377,map__23377__$1,env,active_player,board,players,width,height,size,vec__23378,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23372,_STAR_depth_STAR_23373,_STAR_shared_STAR_23374,_STAR_instrument_STAR_23375,_STAR_parent_STAR_23376,this$,this__22924__auto__,x23370_23382))
], null),"New Game"):null)),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"text-right"], null),tic_tac_toe.app.player.call(null,player1)),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"text-left"], null),tic_tac_toe.app.player.call(null,player2)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23376;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23375;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23374;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23373;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23372;
}});})(x23370_23382))
;


tic_tac_toe.app.TicTacToe.prototype.constructor = tic_tac_toe.app.TicTacToe;

tic_tac_toe.app.TicTacToe.prototype.constructor.displayName = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.prototype.om$isComponent = true;

var x23380_23383 = tic_tac_toe.app.TicTacToe;
x23380_23383.om$next$IQuery$ = true;

x23380_23383.om$next$IQuery$query$arity$1 = ((function (x23380_23383){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x23380_23383))
;


var x23381_23384 = tic_tac_toe.app.TicTacToe.prototype;
x23381_23384.om$next$IQuery$ = true;

x23381_23384.om$next$IQuery$query$arity$1 = ((function (x23381_23384){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x23381_23384))
;


tic_tac_toe.app.TicTacToe.cljs$lang$type = true;

tic_tac_toe.app.TicTacToe.cljs$lang$ctorStr = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.cljs$lang$ctorPrWriter = (function (this__22987__auto__,writer__22988__auto__,opt__22989__auto__){
return cljs.core._write.call(null,writer__22988__auto__,"tic-tac-toe.app/TicTacToe");
});
tic_tac_toe.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),tic_tac_toe.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),tic_tac_toe.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),tic_tac_toe.app.mutate], null))], null));
tic_tac_toe.app.init = (function tic_tac_toe$app$init(){
return om.next.add_root_BANG_.call(null,tic_tac_toe.app.reconciler,tic_tac_toe.app.TicTacToe,goog.dom.getElement("app"));
});

//# sourceMappingURL=app.js.map