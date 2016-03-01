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
return (function (p1__23390_SHARP_){
return cljs.core.get_in.call(null,st,p1__23390_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
if(typeof tic_tac_toe.app.read !== 'undefined'){
} else {
tic_tac_toe.app.read = (function (){var method_table__16463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16467__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16467__auto__,method_table__16463__auto__,prefer_table__16464__auto__,method_cache__16465__auto__,cached_hierarchy__16466__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"players","players",-1361554569),(function (p__23391,key,params){
var map__23392 = p__23391;
var map__23392__$1 = ((((!((map__23392 == null)))?((((map__23392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);
var env = map__23392__$1;
var state = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"board","board",-1907017633),(function (p__23394,key,params){
var map__23395 = p__23394;
var map__23395__$1 = ((((!((map__23395 == null)))?((((map__23395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23395):map__23395);
var env = map__23395__$1;
var state = cljs.core.get.call(null,map__23395__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"active-player","active-player",23744659),(function (p__23397,key,params){
var map__23398 = p__23397;
var map__23398__$1 = ((((!((map__23398 == null)))?((((map__23398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23398):map__23398);
var env = map__23398__$1;
var state = cljs.core.get.call(null,map__23398__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key.call(null,cljs.core.deref.call(null,state))], null);
}));
if(typeof tic_tac_toe.app.mutate !== 'undefined'){
} else {
tic_tac_toe.app.mutate = (function (){var method_table__16463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16467__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16467__auto__,method_table__16463__auto__,prefer_table__16464__auto__,method_cache__16465__auto__,cached_hierarchy__16466__auto__));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,d,e,f))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),d], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,h,i))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),g], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,d,g))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,b,e,h))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),b], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,c,f,i))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),c], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,e,i))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),a], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,e,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),g], null);
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
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null),(function (p__23400,_,p__23401){
var map__23402 = p__23400;
var map__23402__$1 = ((((!((map__23402 == null)))?((((map__23402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23402):map__23402);
var state = cljs.core.get.call(null,map__23402__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23403 = p__23401;
var map__23403__$1 = ((((!((map__23403 == null)))?((((map__23403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23403):map__23403);
var index = cljs.core.get.call(null,map__23403__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23402,map__23402__$1,state,map__23403,map__23403__$1,index){
return (function (){
var temp__4425__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var active = temp__4425__auto__;
tic_tac_toe.app.next_move.call(null,state,active,index);

return tic_tac_toe.app.next_state.call(null,state,active);
} else {
return null;
}
});})(map__23402,map__23402__$1,state,map__23403,map__23403__$1,index))
], null);
}));
tic_tac_toe.app.corners = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], true);
tic_tac_toe.app.edges = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], true);
tic_tac_toe.app.corner_endpoint = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], true, false);
tic_tac_toe.app.invalid_valid = (function tic_tac_toe$app$invalid_valid(board){
return cljs.core.juxt.call(null,cljs.core.remove,cljs.core.filter).call(null,(function (p__23409){
var map__23410 = p__23409;
var map__23410__$1 = ((((!((map__23410 == null)))?((((map__23410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23410):map__23410);
var index = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (value == null);
}),board);
});
tic_tac_toe.app.generate_moves = (function tic_tac_toe$app$generate_moves(board,color){
var vec__23414 = tic_tac_toe.app.invalid_valid.call(null,board);
var _ = cljs.core.nth.call(null,vec__23414,(0),null);
var valid = cljs.core.nth.call(null,vec__23414,(1),null);
return cljs.core.map.call(null,((function (vec__23414,_,valid){
return (function (m){
return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__23414,_,valid){
return (function (p1__23412_SHARP_){
return cljs.core._EQ_.call(null,p1__23412_SHARP_,m);
});})(vec__23414,_,valid))
,board),cljs.core.update.call(null,m,new cljs.core.Keyword(null,"value","value",305978217),((function (vec__23414,_,valid){
return (function (){
return color;
});})(vec__23414,_,valid))
));
});})(vec__23414,_,valid))
,valid);
});
tic_tac_toe.app.opposite_player = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null);
tic_tac_toe.app.get_valid = (function tic_tac_toe$app$get_valid(winner,valid_moves){
var vec__23419 = winner;
var a = cljs.core.nth.call(null,vec__23419,(0),null);
var b = cljs.core.nth.call(null,vec__23419,(1),null);
var c = cljs.core.nth.call(null,vec__23419,(2),null);
var _ = cljs.core.nth.call(null,vec__23419,(3),null);
var valids = cljs.core.map.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),valid_moves);
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.filter.call(null,((function (vec__23419,a,b,c,_,valids){
return (function (p1__23415_SHARP_){
return cljs.core._EQ_.call(null,p1__23415_SHARP_,a);
});})(vec__23419,a,b,c,_,valids))
,valids)))){
return a;
} else {
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.filter.call(null,((function (vec__23419,a,b,c,_,valids){
return (function (p1__23416_SHARP_){
return cljs.core._EQ_.call(null,p1__23416_SHARP_,b);
});})(vec__23419,a,b,c,_,valids))
,valids)))){
return b;
} else {
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.filter.call(null,((function (vec__23419,a,b,c,_,valids){
return (function (p1__23417_SHARP_){
return cljs.core._EQ_.call(null,p1__23417_SHARP_,c);
});})(vec__23419,a,b,c,_,valids))
,valids)))){
return c;
} else {
return null;
}
}
}
});
tic_tac_toe.app.choose_move = (function tic_tac_toe$app$choose_move(state,board,active){
var human_moves = (function tic_tac_toe$app$choose_move_$_human_moves(coll){
return cljs.core.remove.call(null,(function (p__23442){
var map__23443 = p__23442;
var map__23443__$1 = ((((!((map__23443 == null)))?((((map__23443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23443):map__23443);
var index = cljs.core.get.call(null,map__23443__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23443__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core._EQ_.call(null,"white",value);
}),coll);
});
var corner_QMARK_ = (function tic_tac_toe$app$choose_move_$_corner_QMARK_(idx){
return tic_tac_toe.app.corners.call(null,idx);
});
var vec__23445 = tic_tac_toe.app.invalid_valid.call(null,board);
var invalid = cljs.core.nth.call(null,vec__23445,(0),null);
var valid = cljs.core.nth.call(null,vec__23445,(1),null);
var color = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"color","color",1011675173)], null));
var opposite_color = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),tic_tac_toe.app.opposite_player.call(null,active),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var iwin = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,tic_tac_toe.app.won_QMARK_,tic_tac_toe.app.generate_moves.call(null,board,color))));
var iblock = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,tic_tac_toe.app.won_QMARK_,tic_tac_toe.app.generate_moves.call(null,board,opposite_color))));
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
if(cljs.core.truth_(iwin)){
return tic_tac_toe.app.get_valid.call(null,iwin,valid);
} else {
if(cljs.core.truth_(iblock)){
return tic_tac_toe.app.get_valid.call(null,iwin,valid);
} else {
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth.call(null,valid));

}
}
}
}
});
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null),(function (p__23446,_,p__23447){
var map__23448 = p__23446;
var map__23448__$1 = ((((!((map__23448 == null)))?((((map__23448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23448):map__23448);
var state = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23449 = p__23447;
var map__23449__$1 = ((((!((map__23449 == null)))?((((map__23449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23449):map__23449);
var idx = cljs.core.get.call(null,map__23449__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23448,map__23448__$1,state,map__23449,map__23449__$1,idx){
return (function (){
var temp__4425__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var active = temp__4425__auto__;
if(cljs.core._EQ_.call(null,active,idx)){
var board = tic_tac_toe.app.get_board.call(null,state);
var move = tic_tac_toe.app.choose_move.call(null,state,board,active);
tic_tac_toe.app.next_move.call(null,state,active,move);

return tic_tac_toe.app.next_state.call(null,state,active);
} else {
return null;
}
} else {
return null;
}
});})(map__23448,map__23448__$1,state,map__23449,map__23449__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null),(function (p__23452,_,p__23453){
var map__23454 = p__23452;
var map__23454__$1 = ((((!((map__23454 == null)))?((((map__23454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23454):map__23454);
var state = cljs.core.get.call(null,map__23454__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23455 = p__23453;
var map__23455__$1 = ((((!((map__23455 == null)))?((((map__23455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);
var idx = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),((function (map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx){
return (function (){
return (1);
});})(map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(1),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx){
return (function (){
return true;
});})(map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(2),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx){
return (function (){
return false;
});})(map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx))
);
});})(map__23454,map__23454__$1,state,map__23455,map__23455__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null),(function (p__23460,_,___$1){
var map__23461 = p__23460;
var map__23461__$1 = ((((!((map__23461 == null)))?((((map__23461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23461):map__23461);
var state = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23461,map__23461__$1,state){
return (function (){
cljs.core.mapv.call(null,((function (map__23461,map__23461__$1,state){
return (function (p1__23458_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),p1__23458_SHARP_,new cljs.core.Keyword(null,"winner","winner",714604679)], null),((function (map__23461,map__23461__$1,state){
return (function (){
return null;
});})(map__23461,map__23461__$1,state))
);
});})(map__23461,map__23461__$1,state))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));

return cljs.core.mapv.call(null,((function (map__23461,map__23461__$1,state){
return (function (p1__23459_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),p1__23459_SHARP_,new cljs.core.Keyword(null,"value","value",305978217)], null),((function (map__23461,map__23461__$1,state){
return (function (){
return null;
});})(map__23461,map__23461__$1,state))
);
});})(map__23461,map__23461__$1,state))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
});})(map__23461,map__23461__$1,state))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null),(function (p__23463,_,p__23464){
var map__23465 = p__23463;
var map__23465__$1 = ((((!((map__23465 == null)))?((((map__23465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23465):map__23465);
var state = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23466 = p__23464;
var map__23466__$1 = ((((!((map__23466 == null)))?((((map__23466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23466):map__23466);
var idx = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23465,map__23465__$1,state,map__23466,map__23466__$1,idx){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx,new cljs.core.Keyword(null,"type","type",1174270348)], null),((function (map__23465,map__23465__$1,state,map__23466,map__23466__$1,idx){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"computer","computer",-1035300443))){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
return new cljs.core.Keyword(null,"computer","computer",-1035300443);
}
});})(map__23465,map__23465__$1,state,map__23466,map__23466__$1,idx))
);
});})(map__23465,map__23465__$1,state,map__23466,map__23466__$1,idx))
], null);
}));
/**
 * @constructor
 */
tic_tac_toe.app.Player = (function tic_tac_toe$app$Player(){
var this__22955__auto__ = this;
React.Component.apply(this__22955__auto__,arguments);

if(!((this__22955__auto__.initLocalState == null))){
this__22955__auto__.state = this__22955__auto__.initLocalState();
} else {
this__22955__auto__.state = {};
}

return this__22955__auto__;
});

tic_tac_toe.app.Player.prototype = goog.object.clone(React.Component.prototype);

var x23473_23490 = tic_tac_toe.app.Player.prototype;
x23473_23490.componentWillUpdate = ((function (x23473_23490){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22895__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22895__auto__);
});})(x23473_23490))
;

x23473_23490.shouldComponentUpdate = ((function (x23473_23490){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
var next_props__22896__auto____$1 = goog.object.get(next_props__22896__auto__,"omcljs$value");
var next_props__22896__auto____$2 = (function (){var G__23474 = next_props__22896__auto____$1;
var G__23474__$1 = (((next_props__22896__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23474):G__23474);
return G__23474__$1;
})();
var or__15550__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22895__auto__),next_props__22896__auto____$2);
if(or__15550__auto__){
return or__15550__auto__;
} else {
var and__15538__auto__ = this__22895__auto__.state;
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22895__auto__.state,"omcljs$state"),goog.object.get(next_state__22897__auto__,"omcljs$state"));
} else {
return and__15538__auto__;
}
}
});})(x23473_23490))
;

x23473_23490.componentWillUnmount = ((function (x23473_23490){
return (function (){
var this__22895__auto__ = this;
var r__22901__auto__ = om.next.get_reconciler.call(null,this__22895__auto__);
var cfg__22902__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22901__auto__);
var st__22903__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
var indexer__22900__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
if((st__22903__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22903__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22895__auto__);
}

if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23473_23490))
;

x23473_23490.componentDidUpdate = ((function (x23473_23490){
return (function (prev_props__22898__auto__,prev_state__22899__auto__){
var this__22895__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22895__auto__);
});})(x23473_23490))
;

x23473_23490.isMounted = ((function (x23473_23490){
return (function (){
var this__22895__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22895__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23473_23490))
;

x23473_23490.componentWillMount = ((function (x23473_23490){
return (function (){
var this__22895__auto__ = this;
var indexer__22900__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22895__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23473_23490))
;

x23473_23490.render = ((function (x23473_23490){
return (function (){
var this__22894__auto__ = this;
var this$ = this__22894__auto__;
var _STAR_reconciler_STAR_23475 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23476 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23477 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23478 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23479 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22894__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22894__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22894__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22894__auto__);

om.next._STAR_parent_STAR_ = this__22894__auto__;

try{var map__23480 = om.next.props.call(null,this$);
var map__23480__$1 = ((((!((map__23480 == null)))?((((map__23480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23480):map__23480);
var props = map__23480__$1;
var idx = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var active_QMARK_ = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var winner = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var piece = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(winner)?"winner":null))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(winner)?om_tools.dom.element.call(null,React.DOM.h1,name,cljs.core.PersistentVector.EMPTY):om_tools.dom.element.call(null,React.DOM.h2,name,cljs.core.PersistentVector.EMPTY)),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23480,map__23480__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_23475,_STAR_depth_STAR_23476,_STAR_shared_STAR_23477,_STAR_instrument_STAR_23478,_STAR_parent_STAR_23479,this$,this__22894__auto__,x23473_23490){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__23480,map__23480__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_23475,_STAR_depth_STAR_23476,_STAR_shared_STAR_23477,_STAR_instrument_STAR_23478,_STAR_parent_STAR_23479,this$,this__22894__auto__,x23473_23490))
], null),cljs.core.name.call(null,type)),(cljs.core.truth_((function (){var and__15538__auto__ = active_QMARK_;
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"computer","computer",-1035300443));
} else {
return and__15538__auto__;
}
})())?om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569))))))):null)],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23479;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23478;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23477;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23476;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23475;
}});})(x23473_23490))
;


tic_tac_toe.app.Player.prototype.constructor = tic_tac_toe.app.Player;

tic_tac_toe.app.Player.prototype.constructor.displayName = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.prototype.om$isComponent = true;

var x23482_23491 = tic_tac_toe.app.Player;
x23482_23491.om$next$Ident$ = true;

x23482_23491.om$next$Ident$ident$arity$2 = ((function (x23482_23491){
return (function (this$,p__23483){
var map__23484 = p__23483;
var map__23484__$1 = ((((!((map__23484 == null)))?((((map__23484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23484):map__23484);
var idx = cljs.core.get.call(null,map__23484__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x23482_23491))
;

x23482_23491.om$next$IQuery$ = true;

x23482_23491.om$next$IQuery$query$arity$1 = ((function (x23482_23491){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x23482_23491))
;


var x23486_23492 = tic_tac_toe.app.Player.prototype;
x23486_23492.om$next$Ident$ = true;

x23486_23492.om$next$Ident$ident$arity$2 = ((function (x23486_23492){
return (function (this$,p__23487){
var map__23488 = p__23487;
var map__23488__$1 = ((((!((map__23488 == null)))?((((map__23488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23488):map__23488);
var idx = cljs.core.get.call(null,map__23488__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x23486_23492))
;

x23486_23492.om$next$IQuery$ = true;

x23486_23492.om$next$IQuery$query$arity$1 = ((function (x23486_23492){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x23486_23492))
;


tic_tac_toe.app.Player.cljs$lang$type = true;

tic_tac_toe.app.Player.cljs$lang$ctorStr = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.cljs$lang$ctorPrWriter = (function (this__22957__auto__,writer__22958__auto__,opt__22959__auto__){
return cljs.core._write.call(null,writer__22958__auto__,"tic-tac-toe.app/Player");
});
tic_tac_toe.app.square = (function tic_tac_toe$app$square(var_args){
var args23493 = [];
var len__16608__auto___23500 = arguments.length;
var i__16609__auto___23501 = (0);
while(true){
if((i__16609__auto___23501 < len__16608__auto___23500)){
args23493.push((arguments[i__16609__auto___23501]));

var G__23502 = (i__16609__auto___23501 + (1));
i__16609__auto___23501 = G__23502;
continue;
} else {
}
break;
}

var G__23495 = args23493.length;
switch (G__23495) {
case 1:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23493.length)].join('')));

}
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1 = (function (p__23496){
var vec__23497 = p__23496;
var x = cljs.core.nth.call(null,vec__23497,(0),null);
var y = cljs.core.nth.call(null,vec__23497,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join(''))});
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3 = (function (p__23498,this$,props){
var vec__23499 = p__23498;
var x = cljs.core.nth.call(null,vec__23499,(0),null);
var y = cljs.core.nth.call(null,vec__23499,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join('')), "onClick": om_tools.dom.format_opts.call(null,((function (vec__23499,x,y){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)))))));
});})(vec__23499,x,y))
)});
});

tic_tac_toe.app.square.cljs$lang$maxFixedArity = 3;
tic_tac_toe.app.piece = (function tic_tac_toe$app$piece(p__23504,color){
var vec__23506 = p__23504;
var x = cljs.core.nth.call(null,vec__23506,(0),null);
var y = cljs.core.nth.call(null,vec__23506,(1),null);
return React.DOM.circle({"r": "8%", "cx": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * x))),cljs.core.str("%")].join('')), "cy": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * y))),cljs.core.str("%")].join('')), "fill": om_tools.dom.format_opts.call(null,color)});
});
/**
 * @constructor
 */
tic_tac_toe.app.Tile = (function tic_tac_toe$app$Tile(){
var this__22955__auto__ = this;
React.Component.apply(this__22955__auto__,arguments);

if(!((this__22955__auto__.initLocalState == null))){
this__22955__auto__.state = this__22955__auto__.initLocalState();
} else {
this__22955__auto__.state = {};
}

return this__22955__auto__;
});

tic_tac_toe.app.Tile.prototype = goog.object.clone(React.Component.prototype);

var x23511_23528 = tic_tac_toe.app.Tile.prototype;
x23511_23528.componentWillUpdate = ((function (x23511_23528){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22895__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22895__auto__);
});})(x23511_23528))
;

x23511_23528.shouldComponentUpdate = ((function (x23511_23528){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
var next_props__22896__auto____$1 = goog.object.get(next_props__22896__auto__,"omcljs$value");
var next_props__22896__auto____$2 = (function (){var G__23512 = next_props__22896__auto____$1;
var G__23512__$1 = (((next_props__22896__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23512):G__23512);
return G__23512__$1;
})();
var or__15550__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22895__auto__),next_props__22896__auto____$2);
if(or__15550__auto__){
return or__15550__auto__;
} else {
var and__15538__auto__ = this__22895__auto__.state;
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22895__auto__.state,"omcljs$state"),goog.object.get(next_state__22897__auto__,"omcljs$state"));
} else {
return and__15538__auto__;
}
}
});})(x23511_23528))
;

x23511_23528.componentWillUnmount = ((function (x23511_23528){
return (function (){
var this__22895__auto__ = this;
var r__22901__auto__ = om.next.get_reconciler.call(null,this__22895__auto__);
var cfg__22902__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22901__auto__);
var st__22903__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
var indexer__22900__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
if((st__22903__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22903__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22895__auto__);
}

if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23511_23528))
;

x23511_23528.componentDidUpdate = ((function (x23511_23528){
return (function (prev_props__22898__auto__,prev_state__22899__auto__){
var this__22895__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22895__auto__);
});})(x23511_23528))
;

x23511_23528.isMounted = ((function (x23511_23528){
return (function (){
var this__22895__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22895__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23511_23528))
;

x23511_23528.componentWillMount = ((function (x23511_23528){
return (function (){
var this__22895__auto__ = this;
var indexer__22900__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22895__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23511_23528))
;

x23511_23528.render = ((function (x23511_23528){
return (function (){
var this__22894__auto__ = this;
var this$ = this__22894__auto__;
var _STAR_reconciler_STAR_23513 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23514 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23515 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23516 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23517 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22894__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22894__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22894__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22894__auto__);

om.next._STAR_parent_STAR_ = this__22894__auto__;

try{var map__23518 = om.next.props.call(null,this$);
var map__23518__$1 = ((((!((map__23518 == null)))?((((map__23518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518):map__23518);
var props = map__23518__$1;
var index = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,value)){
return tic_tac_toe.app.square.call(null,index,this$,props);
} else {
return cljs.core.apply.call(null,React.DOM.svg,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.app.square.call(null,index),tic_tac_toe.app.piece.call(null,index,value)],null))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23517;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23516;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23515;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23514;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23513;
}});})(x23511_23528))
;


tic_tac_toe.app.Tile.prototype.constructor = tic_tac_toe.app.Tile;

tic_tac_toe.app.Tile.prototype.constructor.displayName = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.prototype.om$isComponent = true;

var x23520_23529 = tic_tac_toe.app.Tile;
x23520_23529.om$next$Ident$ = true;

x23520_23529.om$next$Ident$ident$arity$2 = ((function (x23520_23529){
return (function (this$,p__23521){
var map__23522 = p__23521;
var map__23522__$1 = ((((!((map__23522 == null)))?((((map__23522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23522):map__23522);
var index = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x23520_23529))
;

x23520_23529.om$next$IQuery$ = true;

x23520_23529.om$next$IQuery$query$arity$1 = ((function (x23520_23529){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x23520_23529))
;


var x23524_23530 = tic_tac_toe.app.Tile.prototype;
x23524_23530.om$next$Ident$ = true;

x23524_23530.om$next$Ident$ident$arity$2 = ((function (x23524_23530){
return (function (this$,p__23525){
var map__23526 = p__23525;
var map__23526__$1 = ((((!((map__23526 == null)))?((((map__23526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23526):map__23526);
var index = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x23524_23530))
;

x23524_23530.om$next$IQuery$ = true;

x23524_23530.om$next$IQuery$query$arity$1 = ((function (x23524_23530){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x23524_23530))
;


tic_tac_toe.app.Tile.cljs$lang$type = true;

tic_tac_toe.app.Tile.cljs$lang$ctorStr = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.cljs$lang$ctorPrWriter = (function (this__22957__auto__,writer__22958__auto__,opt__22959__auto__){
return cljs.core._write.call(null,writer__22958__auto__,"tic-tac-toe.app/Tile");
});
tic_tac_toe.app.tile = om.next.factory.call(null,tic_tac_toe.app.Tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
tic_tac_toe.app.player = om.next.factory.call(null,tic_tac_toe.app.Player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
tic_tac_toe.app.line = (function tic_tac_toe$app$line(winner){
if((winner instanceof cljs.core.Keyword)){
return null;
} else {
var vec__23534 = winner;
var vec__23535 = cljs.core.nth.call(null,vec__23534,(0),null);
var x1 = cljs.core.nth.call(null,vec__23535,(0),null);
var y1 = cljs.core.nth.call(null,vec__23535,(1),null);
var _ = cljs.core.nth.call(null,vec__23534,(1),null);
var vec__23536 = cljs.core.nth.call(null,vec__23534,(2),null);
var x2 = cljs.core.nth.call(null,vec__23536,(0),null);
var y2 = cljs.core.nth.call(null,vec__23536,(1),null);
var value = cljs.core.nth.call(null,vec__23534,(3),null);
return React.DOM.line({"x1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x1))),cljs.core.str("%")].join('')), "y1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y1))),cljs.core.str("%")].join('')), "x2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x2))),cljs.core.str("%")].join('')), "y2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y2))),cljs.core.str("%")].join('')), "strokeWidth": "10", "stroke": om_tools.dom.format_opts.call(null,value)});
}
});
/**
 * @constructor
 */
tic_tac_toe.app.TicTacToe = (function tic_tac_toe$app$TicTacToe(){
var this__22955__auto__ = this;
React.Component.apply(this__22955__auto__,arguments);

if(!((this__22955__auto__.initLocalState == null))){
this__22955__auto__.state = this__22955__auto__.initLocalState();
} else {
this__22955__auto__.state = {};
}

return this__22955__auto__;
});

tic_tac_toe.app.TicTacToe.prototype = goog.object.clone(React.Component.prototype);

var x23541_23553 = tic_tac_toe.app.TicTacToe.prototype;
x23541_23553.componentWillUpdate = ((function (x23541_23553){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22895__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22895__auto__);
});})(x23541_23553))
;

x23541_23553.shouldComponentUpdate = ((function (x23541_23553){
return (function (next_props__22896__auto__,next_state__22897__auto__){
var this__22895__auto__ = this;
var next_props__22896__auto____$1 = goog.object.get(next_props__22896__auto__,"omcljs$value");
var next_props__22896__auto____$2 = (function (){var G__23542 = next_props__22896__auto____$1;
var G__23542__$1 = (((next_props__22896__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23542):G__23542);
return G__23542__$1;
})();
var or__15550__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22895__auto__),next_props__22896__auto____$2);
if(or__15550__auto__){
return or__15550__auto__;
} else {
var and__15538__auto__ = this__22895__auto__.state;
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22895__auto__.state,"omcljs$state"),goog.object.get(next_state__22897__auto__,"omcljs$state"));
} else {
return and__15538__auto__;
}
}
});})(x23541_23553))
;

x23541_23553.componentWillUnmount = ((function (x23541_23553){
return (function (){
var this__22895__auto__ = this;
var r__22901__auto__ = om.next.get_reconciler.call(null,this__22895__auto__);
var cfg__22902__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22901__auto__);
var st__22903__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
var indexer__22900__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22902__auto__);
if((st__22903__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22903__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22895__auto__);
}

if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23541_23553))
;

x23541_23553.componentDidUpdate = ((function (x23541_23553){
return (function (prev_props__22898__auto__,prev_state__22899__auto__){
var this__22895__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22895__auto__);
});})(x23541_23553))
;

x23541_23553.isMounted = ((function (x23541_23553){
return (function (){
var this__22895__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22895__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23541_23553))
;

x23541_23553.componentWillMount = ((function (x23541_23553){
return (function (){
var this__22895__auto__ = this;
var indexer__22900__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22895__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22900__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22900__auto__,this__22895__auto__);
}
});})(x23541_23553))
;

x23541_23553.render = ((function (x23541_23553){
return (function (){
var this__22894__auto__ = this;
var this$ = this__22894__auto__;
var _STAR_reconciler_STAR_23543 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23544 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23545 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23546 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23547 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22894__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22894__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22894__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22894__auto__);

om.next._STAR_parent_STAR_ = this__22894__auto__;

try{var map__23548 = om.next.props.call(null,this$);
var map__23548__$1 = ((((!((map__23548 == null)))?((((map__23548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23548):map__23548);
var env = map__23548__$1;
var active_player = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"active-player","active-player",23744659));
var board = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var width = window.innerWidth;
var height = window.innerHeight;
var size = (((height <= width))?height:width);
var vec__23549 = players;
var player1 = cljs.core.nth.call(null,vec__23549,(0),null);
var player2 = cljs.core.nth.call(null,vec__23549,(1),null);
var w1 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player1);
var w2 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player2);
var winner = (function (){var or__15550__auto__ = w1;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return w2;
}
})();
return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(16),new cljs.core.Keyword(null,"sm","sm",-1402575065),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),cljs.core.apply.call(null,React.DOM.svg,{"width": om_tools.dom.format_opts.call(null,(size * 0.8)), "height": om_tools.dom.format_opts.call(null,(size * 0.8))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "32%", "y": "0%"}),React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "65%", "y": "0%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "32%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "65%"}),cljs.core.println.call(null,[cljs.core.str(board)].join('')),cljs.core.map.call(null,tic_tac_toe.app.tile,board),(cljs.core.truth_(winner)?tic_tac_toe.app.line.call(null,winner):null)],null)))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,((((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(active_player) == null)) && ((winner == null)))?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23548,map__23548__$1,env,active_player,board,players,width,height,size,vec__23549,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23543,_STAR_depth_STAR_23544,_STAR_shared_STAR_23545,_STAR_instrument_STAR_23546,_STAR_parent_STAR_23547,this$,this__22894__auto__,x23541_23553){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__23548,map__23548__$1,env,active_player,board,players,width,height,size,vec__23549,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23543,_STAR_depth_STAR_23544,_STAR_shared_STAR_23545,_STAR_instrument_STAR_23546,_STAR_parent_STAR_23547,this$,this__22894__auto__,x23541_23553))
], null),"Start"):null),(cljs.core.truth_(winner)?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23548,map__23548__$1,env,active_player,board,players,width,height,size,vec__23549,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23543,_STAR_depth_STAR_23544,_STAR_shared_STAR_23545,_STAR_instrument_STAR_23546,_STAR_parent_STAR_23547,this$,this__22894__auto__,x23541_23553){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)))))));
});})(map__23548,map__23548__$1,env,active_player,board,players,width,height,size,vec__23549,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_23543,_STAR_depth_STAR_23544,_STAR_shared_STAR_23545,_STAR_instrument_STAR_23546,_STAR_parent_STAR_23547,this$,this__22894__auto__,x23541_23553))
], null),"New Game"):null)),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"text-right"], null),tic_tac_toe.app.player.call(null,player1)),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"text-left"], null),tic_tac_toe.app.player.call(null,player2)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23547;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23546;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23545;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23544;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23543;
}});})(x23541_23553))
;


tic_tac_toe.app.TicTacToe.prototype.constructor = tic_tac_toe.app.TicTacToe;

tic_tac_toe.app.TicTacToe.prototype.constructor.displayName = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.prototype.om$isComponent = true;

var x23551_23554 = tic_tac_toe.app.TicTacToe;
x23551_23554.om$next$IQuery$ = true;

x23551_23554.om$next$IQuery$query$arity$1 = ((function (x23551_23554){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x23551_23554))
;


var x23552_23555 = tic_tac_toe.app.TicTacToe.prototype;
x23552_23555.om$next$IQuery$ = true;

x23552_23555.om$next$IQuery$query$arity$1 = ((function (x23552_23555){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x23552_23555))
;


tic_tac_toe.app.TicTacToe.cljs$lang$type = true;

tic_tac_toe.app.TicTacToe.cljs$lang$ctorStr = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.cljs$lang$ctorPrWriter = (function (this__22957__auto__,writer__22958__auto__,opt__22959__auto__){
return cljs.core._write.call(null,writer__22958__auto__,"tic-tac-toe.app/TicTacToe");
});
tic_tac_toe.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),tic_tac_toe.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),tic_tac_toe.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),tic_tac_toe.app.mutate], null))], null));
tic_tac_toe.app.init = (function tic_tac_toe$app$init(){
return om.next.add_root_BANG_.call(null,tic_tac_toe.app.reconciler,tic_tac_toe.app.TicTacToe,goog.dom.getElement("app"));
});

//# sourceMappingURL=app.js.map