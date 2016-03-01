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
return (function (p1__24638_SHARP_){
return cljs.core.get_in.call(null,st,p1__24638_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
if(typeof tic_tac_toe.app.read !== 'undefined'){
} else {
tic_tac_toe.app.read = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"players","players",-1361554569),(function (p__24639,key,params){
var map__24640 = p__24639;
var map__24640__$1 = ((((!((map__24640 == null)))?((((map__24640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24640):map__24640);
var env = map__24640__$1;
var state = cljs.core.get.call(null,map__24640__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"board","board",-1907017633),(function (p__24642,key,params){
var map__24643 = p__24642;
var map__24643__$1 = ((((!((map__24643 == null)))?((((map__24643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24643):map__24643);
var env = map__24643__$1;
var state = cljs.core.get.call(null,map__24643__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.read,new cljs.core.Keyword(null,"active-player","active-player",23744659),(function (p__24645,key,params){
var map__24646 = p__24645;
var map__24646__$1 = ((((!((map__24646 == null)))?((((map__24646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24646):map__24646);
var env = map__24646__$1;
var state = cljs.core.get.call(null,map__24646__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key.call(null,cljs.core.deref.call(null,state))], null);
}));
if(typeof tic_tac_toe.app.mutate !== 'undefined'){
} else {
tic_tac_toe.app.mutate = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
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
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null),(function (p__24648,_,p__24649){
var map__24650 = p__24648;
var map__24650__$1 = ((((!((map__24650 == null)))?((((map__24650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24650):map__24650);
var state = cljs.core.get.call(null,map__24650__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24651 = p__24649;
var map__24651__$1 = ((((!((map__24651 == null)))?((((map__24651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24651):map__24651);
var index = cljs.core.get.call(null,map__24651__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24650,map__24650__$1,state,map__24651,map__24651__$1,index){
return (function (){
var temp__4425__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var active = temp__4425__auto__;
tic_tac_toe.app.next_move.call(null,state,active,index);

return tic_tac_toe.app.next_state.call(null,state,active);
} else {
return null;
}
});})(map__24650,map__24650__$1,state,map__24651,map__24651__$1,index))
], null);
}));
tic_tac_toe.app.corners = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], true);
tic_tac_toe.app.edges = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], true);
tic_tac_toe.app.corner_endpoint = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], true, false);
tic_tac_toe.app.invalid_valid = (function tic_tac_toe$app$invalid_valid(board){
return cljs.core.juxt.call(null,cljs.core.remove,cljs.core.filter).call(null,(function (p__24657){
var map__24658 = p__24657;
var map__24658__$1 = ((((!((map__24658 == null)))?((((map__24658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24658):map__24658);
var index = cljs.core.get.call(null,map__24658__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__24658__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (value == null);
}),board);
});
tic_tac_toe.app.generate_moves = (function tic_tac_toe$app$generate_moves(board,color){
var vec__24662 = tic_tac_toe.app.invalid_valid.call(null,board);
var _ = cljs.core.nth.call(null,vec__24662,(0),null);
var valid = cljs.core.nth.call(null,vec__24662,(1),null);
return cljs.core.map.call(null,((function (vec__24662,_,valid){
return (function (m){
return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__24662,_,valid){
return (function (p1__24660_SHARP_){
return cljs.core._EQ_.call(null,p1__24660_SHARP_,m);
});})(vec__24662,_,valid))
,board),cljs.core.update.call(null,m,new cljs.core.Keyword(null,"value","value",305978217),((function (vec__24662,_,valid){
return (function (){
return color;
});})(vec__24662,_,valid))
));
});})(vec__24662,_,valid))
,valid);
});
tic_tac_toe.app.opposite_player = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null);
tic_tac_toe.app.choose_move = (function tic_tac_toe$app$choose_move(state,board,active){
var human_moves = (function tic_tac_toe$app$choose_move_$_human_moves(coll){
return cljs.core.remove.call(null,(function (p__24687){
var map__24688 = p__24687;
var map__24688__$1 = ((((!((map__24688 == null)))?((((map__24688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24688):map__24688);
var index = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core._EQ_.call(null,"white",value);
}),coll);
});
var corner_QMARK_ = (function tic_tac_toe$app$choose_move_$_corner_QMARK_(idx){
return tic_tac_toe.app.corners.call(null,idx);
});
var vec__24690 = tic_tac_toe.app.invalid_valid.call(null,board);
var invalid = cljs.core.nth.call(null,vec__24690,(0),null);
var valid = cljs.core.nth.call(null,vec__24690,(1),null);
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
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null),(function (p__24691,_,p__24692){
var map__24693 = p__24691;
var map__24693__$1 = ((((!((map__24693 == null)))?((((map__24693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24693):map__24693);
var state = cljs.core.get.call(null,map__24693__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24694 = p__24692;
var map__24694__$1 = ((((!((map__24694 == null)))?((((map__24694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24694):map__24694);
var idx = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24693,map__24693__$1,state,map__24694,map__24694__$1,idx){
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
});})(map__24693,map__24693__$1,state,map__24694,map__24694__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null),(function (p__24697,_,p__24698){
var map__24699 = p__24697;
var map__24699__$1 = ((((!((map__24699 == null)))?((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24699):map__24699);
var state = cljs.core.get.call(null,map__24699__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24700 = p__24698;
var map__24700__$1 = ((((!((map__24700 == null)))?((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24700):map__24700);
var idx = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),((function (map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx){
return (function (){
return (1);
});})(map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(1),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx){
return (function (){
return true;
});})(map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),(2),new cljs.core.Keyword(null,"active?","active?",459499776)], null),((function (map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx){
return (function (){
return false;
});})(map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx))
);
});})(map__24699,map__24699__$1,state,map__24700,map__24700__$1,idx))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null),(function (p__24705,_,___$1){
var map__24706 = p__24705;
var map__24706__$1 = ((((!((map__24706 == null)))?((((map__24706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24706):map__24706);
var state = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24706,map__24706__$1,state){
return (function (){
cljs.core.mapv.call(null,((function (map__24706,map__24706__$1,state){
return (function (p1__24703_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),p1__24703_SHARP_,new cljs.core.Keyword(null,"winner","winner",714604679)], null),((function (map__24706,map__24706__$1,state){
return (function (){
return null;
});})(map__24706,map__24706__$1,state))
);
});})(map__24706,map__24706__$1,state))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));

return cljs.core.mapv.call(null,((function (map__24706,map__24706__$1,state){
return (function (p1__24704_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),p1__24704_SHARP_,new cljs.core.Keyword(null,"value","value",305978217)], null),((function (map__24706,map__24706__$1,state){
return (function (){
return null;
});})(map__24706,map__24706__$1,state))
);
});})(map__24706,map__24706__$1,state))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
});})(map__24706,map__24706__$1,state))
], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null),(function (p__24708,_,p__24709){
var map__24710 = p__24708;
var map__24710__$1 = ((((!((map__24710 == null)))?((((map__24710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24710):map__24710);
var state = cljs.core.get.call(null,map__24710__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24711 = p__24709;
var map__24711__$1 = ((((!((map__24711 == null)))?((((map__24711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24711):map__24711);
var idx = cljs.core.get.call(null,map__24711__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24710,map__24710__$1,state,map__24711,map__24711__$1,idx){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx,new cljs.core.Keyword(null,"type","type",1174270348)], null),((function (map__24710,map__24710__$1,state,map__24711,map__24711__$1,idx){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"computer","computer",-1035300443))){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
return new cljs.core.Keyword(null,"computer","computer",-1035300443);
}
});})(map__24710,map__24710__$1,state,map__24711,map__24711__$1,idx))
);
});})(map__24710,map__24710__$1,state,map__24711,map__24711__$1,idx))
], null);
}));
/**
 * @constructor
 */
tic_tac_toe.app.Player = (function tic_tac_toe$app$Player(){
var this__23902__auto__ = this;
React.Component.apply(this__23902__auto__,arguments);

if(!((this__23902__auto__.initLocalState == null))){
this__23902__auto__.state = this__23902__auto__.initLocalState();
} else {
this__23902__auto__.state = {};
}

return this__23902__auto__;
});

tic_tac_toe.app.Player.prototype = goog.object.clone(React.Component.prototype);

var x24718_24735 = tic_tac_toe.app.Player.prototype;
x24718_24735.componentWillUpdate = ((function (x24718_24735){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__23842__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23842__auto__);
});})(x24718_24735))
;

x24718_24735.shouldComponentUpdate = ((function (x24718_24735){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
var next_props__23843__auto____$1 = goog.object.get(next_props__23843__auto__,"omcljs$value");
var next_props__23843__auto____$2 = (function (){var G__24719 = next_props__23843__auto____$1;
var G__24719__$1 = (((next_props__23843__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__24719):G__24719);
return G__24719__$1;
})();
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23842__auto__),next_props__23843__auto____$2);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__23842__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23842__auto__.state,"omcljs$state"),goog.object.get(next_state__23844__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24718_24735))
;

x24718_24735.componentWillUnmount = ((function (x24718_24735){
return (function (){
var this__23842__auto__ = this;
var r__23848__auto__ = om.next.get_reconciler.call(null,this__23842__auto__);
var cfg__23849__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23848__auto__);
var st__23850__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
var indexer__23847__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
if((st__23850__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__23850__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23842__auto__);
}

if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24718_24735))
;

x24718_24735.componentDidUpdate = ((function (x24718_24735){
return (function (prev_props__23845__auto__,prev_state__23846__auto__){
var this__23842__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23842__auto__);
});})(x24718_24735))
;

x24718_24735.isMounted = ((function (x24718_24735){
return (function (){
var this__23842__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23842__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24718_24735))
;

x24718_24735.componentWillMount = ((function (x24718_24735){
return (function (){
var this__23842__auto__ = this;
var indexer__23847__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23842__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24718_24735))
;

x24718_24735.render = ((function (x24718_24735){
return (function (){
var this__23841__auto__ = this;
var this$ = this__23841__auto__;
var _STAR_reconciler_STAR_24720 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24721 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24722 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24723 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24724 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23841__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23841__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23841__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23841__auto__);

om.next._STAR_parent_STAR_ = this__23841__auto__;

try{var map__24725 = om.next.props.call(null,this$);
var map__24725__$1 = ((((!((map__24725 == null)))?((((map__24725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24725):map__24725);
var props = map__24725__$1;
var idx = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var active_QMARK_ = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var winner = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var piece = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(winner)?"winner":null))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(winner)?om_tools.dom.element.call(null,React.DOM.h1,name,cljs.core.PersistentVector.EMPTY):om_tools.dom.element.call(null,React.DOM.h2,name,cljs.core.PersistentVector.EMPTY)),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24725,map__24725__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_24720,_STAR_depth_STAR_24721,_STAR_shared_STAR_24722,_STAR_instrument_STAR_24723,_STAR_parent_STAR_24724,this$,this__23841__auto__,x24718_24735){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","change-type","tic-tac-toe/change-type",1534801404,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__24725,map__24725__$1,props,idx,name,type,active_QMARK_,winner,piece,_STAR_reconciler_STAR_24720,_STAR_depth_STAR_24721,_STAR_shared_STAR_24722,_STAR_instrument_STAR_24723,_STAR_parent_STAR_24724,this$,this__23841__auto__,x24718_24735))
], null),cljs.core.name.call(null,type)),(cljs.core.truth_((function (){var and__5156__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"computer","computer",-1035300443));
} else {
return and__5156__auto__;
}
})())?om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","computer-move","tic-tac-toe/computer-move",-1942260206,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569))))))):null)],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24724;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24723;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24722;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24721;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24720;
}});})(x24718_24735))
;


tic_tac_toe.app.Player.prototype.constructor = tic_tac_toe.app.Player;

tic_tac_toe.app.Player.prototype.constructor.displayName = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.prototype.om$isComponent = true;

var x24727_24736 = tic_tac_toe.app.Player;
x24727_24736.om$next$Ident$ = true;

x24727_24736.om$next$Ident$ident$arity$2 = ((function (x24727_24736){
return (function (this$,p__24728){
var map__24729 = p__24728;
var map__24729__$1 = ((((!((map__24729 == null)))?((((map__24729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24729):map__24729);
var idx = cljs.core.get.call(null,map__24729__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x24727_24736))
;

x24727_24736.om$next$IQuery$ = true;

x24727_24736.om$next$IQuery$query$arity$1 = ((function (x24727_24736){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x24727_24736))
;


var x24731_24737 = tic_tac_toe.app.Player.prototype;
x24731_24737.om$next$Ident$ = true;

x24731_24737.om$next$Ident$ident$arity$2 = ((function (x24731_24737){
return (function (this$,p__24732){
var map__24733 = p__24732;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var idx = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x24731_24737))
;

x24731_24737.om$next$IQuery$ = true;

x24731_24737.om$next$IQuery$query$arity$1 = ((function (x24731_24737){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x24731_24737))
;


tic_tac_toe.app.Player.cljs$lang$type = true;

tic_tac_toe.app.Player.cljs$lang$ctorStr = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.cljs$lang$ctorPrWriter = (function (this__23904__auto__,writer__23905__auto__,opt__23906__auto__){
return cljs.core._write.call(null,writer__23905__auto__,"tic-tac-toe.app/Player");
});
tic_tac_toe.app.square = (function tic_tac_toe$app$square(var_args){
var args24738 = [];
var len__6226__auto___24745 = arguments.length;
var i__6227__auto___24746 = (0);
while(true){
if((i__6227__auto___24746 < len__6226__auto___24745)){
args24738.push((arguments[i__6227__auto___24746]));

var G__24747 = (i__6227__auto___24746 + (1));
i__6227__auto___24746 = G__24747;
continue;
} else {
}
break;
}

var G__24740 = args24738.length;
switch (G__24740) {
case 1:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24738.length)].join('')));

}
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1 = (function (p__24741){
var vec__24742 = p__24741;
var x = cljs.core.nth.call(null,vec__24742,(0),null);
var y = cljs.core.nth.call(null,vec__24742,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join(''))});
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3 = (function (p__24743,this$,props){
var vec__24744 = p__24743;
var x = cljs.core.nth.call(null,vec__24744,(0),null);
var y = cljs.core.nth.call(null,vec__24744,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join('')), "onClick": om_tools.dom.format_opts.call(null,((function (vec__24744,x,y){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)))))));
});})(vec__24744,x,y))
)});
});

tic_tac_toe.app.square.cljs$lang$maxFixedArity = 3;
tic_tac_toe.app.piece = (function tic_tac_toe$app$piece(p__24749,color){
var vec__24751 = p__24749;
var x = cljs.core.nth.call(null,vec__24751,(0),null);
var y = cljs.core.nth.call(null,vec__24751,(1),null);
return React.DOM.circle({"r": "8%", "cx": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * x))),cljs.core.str("%")].join('')), "cy": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * y))),cljs.core.str("%")].join('')), "fill": om_tools.dom.format_opts.call(null,color)});
});
/**
 * @constructor
 */
tic_tac_toe.app.Tile = (function tic_tac_toe$app$Tile(){
var this__23902__auto__ = this;
React.Component.apply(this__23902__auto__,arguments);

if(!((this__23902__auto__.initLocalState == null))){
this__23902__auto__.state = this__23902__auto__.initLocalState();
} else {
this__23902__auto__.state = {};
}

return this__23902__auto__;
});

tic_tac_toe.app.Tile.prototype = goog.object.clone(React.Component.prototype);

var x24756_24773 = tic_tac_toe.app.Tile.prototype;
x24756_24773.componentWillUpdate = ((function (x24756_24773){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__23842__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23842__auto__);
});})(x24756_24773))
;

x24756_24773.shouldComponentUpdate = ((function (x24756_24773){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
var next_props__23843__auto____$1 = goog.object.get(next_props__23843__auto__,"omcljs$value");
var next_props__23843__auto____$2 = (function (){var G__24757 = next_props__23843__auto____$1;
var G__24757__$1 = (((next_props__23843__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__24757):G__24757);
return G__24757__$1;
})();
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23842__auto__),next_props__23843__auto____$2);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__23842__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23842__auto__.state,"omcljs$state"),goog.object.get(next_state__23844__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24756_24773))
;

x24756_24773.componentWillUnmount = ((function (x24756_24773){
return (function (){
var this__23842__auto__ = this;
var r__23848__auto__ = om.next.get_reconciler.call(null,this__23842__auto__);
var cfg__23849__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23848__auto__);
var st__23850__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
var indexer__23847__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
if((st__23850__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__23850__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23842__auto__);
}

if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24756_24773))
;

x24756_24773.componentDidUpdate = ((function (x24756_24773){
return (function (prev_props__23845__auto__,prev_state__23846__auto__){
var this__23842__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23842__auto__);
});})(x24756_24773))
;

x24756_24773.isMounted = ((function (x24756_24773){
return (function (){
var this__23842__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23842__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24756_24773))
;

x24756_24773.componentWillMount = ((function (x24756_24773){
return (function (){
var this__23842__auto__ = this;
var indexer__23847__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23842__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24756_24773))
;

x24756_24773.render = ((function (x24756_24773){
return (function (){
var this__23841__auto__ = this;
var this$ = this__23841__auto__;
var _STAR_reconciler_STAR_24758 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24759 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24760 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24761 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24762 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23841__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23841__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23841__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23841__auto__);

om.next._STAR_parent_STAR_ = this__23841__auto__;

try{var map__24763 = om.next.props.call(null,this$);
var map__24763__$1 = ((((!((map__24763 == null)))?((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24763):map__24763);
var props = map__24763__$1;
var index = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,value)){
return tic_tac_toe.app.square.call(null,index,this$,props);
} else {
return cljs.core.apply.call(null,React.DOM.svg,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.app.square.call(null,index),tic_tac_toe.app.piece.call(null,index,value)],null))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24762;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24761;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24760;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24759;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24758;
}});})(x24756_24773))
;


tic_tac_toe.app.Tile.prototype.constructor = tic_tac_toe.app.Tile;

tic_tac_toe.app.Tile.prototype.constructor.displayName = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.prototype.om$isComponent = true;

var x24765_24774 = tic_tac_toe.app.Tile;
x24765_24774.om$next$Ident$ = true;

x24765_24774.om$next$Ident$ident$arity$2 = ((function (x24765_24774){
return (function (this$,p__24766){
var map__24767 = p__24766;
var map__24767__$1 = ((((!((map__24767 == null)))?((((map__24767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24767):map__24767);
var index = cljs.core.get.call(null,map__24767__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x24765_24774))
;

x24765_24774.om$next$IQuery$ = true;

x24765_24774.om$next$IQuery$query$arity$1 = ((function (x24765_24774){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x24765_24774))
;


var x24769_24775 = tic_tac_toe.app.Tile.prototype;
x24769_24775.om$next$Ident$ = true;

x24769_24775.om$next$Ident$ident$arity$2 = ((function (x24769_24775){
return (function (this$,p__24770){
var map__24771 = p__24770;
var map__24771__$1 = ((((!((map__24771 == null)))?((((map__24771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24771):map__24771);
var index = cljs.core.get.call(null,map__24771__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x24769_24775))
;

x24769_24775.om$next$IQuery$ = true;

x24769_24775.om$next$IQuery$query$arity$1 = ((function (x24769_24775){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x24769_24775))
;


tic_tac_toe.app.Tile.cljs$lang$type = true;

tic_tac_toe.app.Tile.cljs$lang$ctorStr = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.cljs$lang$ctorPrWriter = (function (this__23904__auto__,writer__23905__auto__,opt__23906__auto__){
return cljs.core._write.call(null,writer__23905__auto__,"tic-tac-toe.app/Tile");
});
tic_tac_toe.app.tile = om.next.factory.call(null,tic_tac_toe.app.Tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
tic_tac_toe.app.player = om.next.factory.call(null,tic_tac_toe.app.Player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
tic_tac_toe.app.line = (function tic_tac_toe$app$line(winner){
if((winner instanceof cljs.core.Keyword)){
return null;
} else {
var vec__24779 = winner;
var vec__24780 = cljs.core.nth.call(null,vec__24779,(0),null);
var x1 = cljs.core.nth.call(null,vec__24780,(0),null);
var y1 = cljs.core.nth.call(null,vec__24780,(1),null);
var _ = cljs.core.nth.call(null,vec__24779,(1),null);
var vec__24781 = cljs.core.nth.call(null,vec__24779,(2),null);
var x2 = cljs.core.nth.call(null,vec__24781,(0),null);
var y2 = cljs.core.nth.call(null,vec__24781,(1),null);
var value = cljs.core.nth.call(null,vec__24779,(3),null);
return React.DOM.line({"x1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x1))),cljs.core.str("%")].join('')), "y1": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y1))),cljs.core.str("%")].join('')), "x2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * x2))),cljs.core.str("%")].join('')), "y2": om_tools.dom.format_opts.call(null,[cljs.core.str(((15) + ((33) * y2))),cljs.core.str("%")].join('')), "strokeWidth": "10", "stroke": om_tools.dom.format_opts.call(null,value)});
}
});
/**
 * @constructor
 */
tic_tac_toe.app.TicTacToe = (function tic_tac_toe$app$TicTacToe(){
var this__23902__auto__ = this;
React.Component.apply(this__23902__auto__,arguments);

if(!((this__23902__auto__.initLocalState == null))){
this__23902__auto__.state = this__23902__auto__.initLocalState();
} else {
this__23902__auto__.state = {};
}

return this__23902__auto__;
});

tic_tac_toe.app.TicTacToe.prototype = goog.object.clone(React.Component.prototype);

var x24786_24798 = tic_tac_toe.app.TicTacToe.prototype;
x24786_24798.componentWillUpdate = ((function (x24786_24798){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__23842__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23842__auto__);
});})(x24786_24798))
;

x24786_24798.shouldComponentUpdate = ((function (x24786_24798){
return (function (next_props__23843__auto__,next_state__23844__auto__){
var this__23842__auto__ = this;
var next_props__23843__auto____$1 = goog.object.get(next_props__23843__auto__,"omcljs$value");
var next_props__23843__auto____$2 = (function (){var G__24787 = next_props__23843__auto____$1;
var G__24787__$1 = (((next_props__23843__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__24787):G__24787);
return G__24787__$1;
})();
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23842__auto__),next_props__23843__auto____$2);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__23842__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23842__auto__.state,"omcljs$state"),goog.object.get(next_state__23844__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24786_24798))
;

x24786_24798.componentWillUnmount = ((function (x24786_24798){
return (function (){
var this__23842__auto__ = this;
var r__23848__auto__ = om.next.get_reconciler.call(null,this__23842__auto__);
var cfg__23849__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23848__auto__);
var st__23850__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
var indexer__23847__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23849__auto__);
if((st__23850__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__23850__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23842__auto__);
}

if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24786_24798))
;

x24786_24798.componentDidUpdate = ((function (x24786_24798){
return (function (prev_props__23845__auto__,prev_state__23846__auto__){
var this__23842__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23842__auto__);
});})(x24786_24798))
;

x24786_24798.isMounted = ((function (x24786_24798){
return (function (){
var this__23842__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23842__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24786_24798))
;

x24786_24798.componentWillMount = ((function (x24786_24798){
return (function (){
var this__23842__auto__ = this;
var indexer__23847__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23842__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23847__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23847__auto__,this__23842__auto__);
}
});})(x24786_24798))
;

x24786_24798.render = ((function (x24786_24798){
return (function (){
var this__23841__auto__ = this;
var this$ = this__23841__auto__;
var _STAR_reconciler_STAR_24788 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24789 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24790 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24791 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24792 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23841__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23841__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23841__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23841__auto__);

om.next._STAR_parent_STAR_ = this__23841__auto__;

try{var map__24793 = om.next.props.call(null,this$);
var map__24793__$1 = ((((!((map__24793 == null)))?((((map__24793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24793):map__24793);
var env = map__24793__$1;
var active_player = cljs.core.get.call(null,map__24793__$1,new cljs.core.Keyword(null,"active-player","active-player",23744659));
var board = cljs.core.get.call(null,map__24793__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__24793__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var width = window.innerWidth;
var height = window.innerHeight;
var size = (((height <= width))?height:width);
var vec__24794 = players;
var player1 = cljs.core.nth.call(null,vec__24794,(0),null);
var player2 = cljs.core.nth.call(null,vec__24794,(1),null);
var w1 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player1);
var w2 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(player2);
var winner = (function (){var or__5168__auto__ = w1;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return w2;
}
})();
return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(16),new cljs.core.Keyword(null,"sm","sm",-1402575065),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),cljs.core.apply.call(null,React.DOM.svg,{"width": om_tools.dom.format_opts.call(null,(size * 0.8)), "height": om_tools.dom.format_opts.call(null,(size * 0.8))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "32%", "y": "0%"}),React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "65%", "y": "0%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "32%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "65%"}),cljs.core.println.call(null,[cljs.core.str(board)].join('')),cljs.core.map.call(null,tic_tac_toe.app.tile,board),(cljs.core.truth_(winner)?tic_tac_toe.app.line.call(null,winner):null)],null)))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,((((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(active_player) == null)) && ((winner == null)))?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24793,map__24793__$1,env,active_player,board,players,width,height,size,vec__24794,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_24788,_STAR_depth_STAR_24789,_STAR_shared_STAR_24790,_STAR_instrument_STAR_24791,_STAR_parent_STAR_24792,this$,this__23841__auto__,x24786_24798){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","start","tic-tac-toe/start",1389291398,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)))))));
});})(map__24793,map__24793__$1,env,active_player,board,players,width,height,size,vec__24794,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_24788,_STAR_depth_STAR_24789,_STAR_shared_STAR_24790,_STAR_instrument_STAR_24791,_STAR_parent_STAR_24792,this$,this__23841__auto__,x24786_24798))
], null),"Start"):null),(cljs.core.truth_(winner)?om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24793,map__24793__$1,env,active_player,board,players,width,height,size,vec__24794,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_24788,_STAR_depth_STAR_24789,_STAR_shared_STAR_24790,_STAR_instrument_STAR_24791,_STAR_parent_STAR_24792,this$,this__23841__auto__,x24786_24798){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","restart","tic-tac-toe/restart",224540215,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)))))));
});})(map__24793,map__24793__$1,env,active_player,board,players,width,height,size,vec__24794,player1,player2,w1,w2,winner,_STAR_reconciler_STAR_24788,_STAR_depth_STAR_24789,_STAR_shared_STAR_24790,_STAR_instrument_STAR_24791,_STAR_parent_STAR_24792,this$,this__23841__auto__,x24786_24798))
], null),"New Game"):null)),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"text-right"], null),tic_tac_toe.app.player.call(null,player1)),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),(6),new cljs.core.Keyword(null,"sm","sm",-1402575065),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"text-left"], null),tic_tac_toe.app.player.call(null,player2)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24792;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24791;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24790;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24789;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24788;
}});})(x24786_24798))
;


tic_tac_toe.app.TicTacToe.prototype.constructor = tic_tac_toe.app.TicTacToe;

tic_tac_toe.app.TicTacToe.prototype.constructor.displayName = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.prototype.om$isComponent = true;

var x24796_24799 = tic_tac_toe.app.TicTacToe;
x24796_24799.om$next$IQuery$ = true;

x24796_24799.om$next$IQuery$query$arity$1 = ((function (x24796_24799){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x24796_24799))
;


var x24797_24800 = tic_tac_toe.app.TicTacToe.prototype;
x24797_24800.om$next$IQuery$ = true;

x24797_24800.om$next$IQuery$query$arity$1 = ((function (x24797_24800){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x24797_24800))
;


tic_tac_toe.app.TicTacToe.cljs$lang$type = true;

tic_tac_toe.app.TicTacToe.cljs$lang$ctorStr = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.cljs$lang$ctorPrWriter = (function (this__23904__auto__,writer__23905__auto__,opt__23906__auto__){
return cljs.core._write.call(null,writer__23905__auto__,"tic-tac-toe.app/TicTacToe");
});
tic_tac_toe.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),tic_tac_toe.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),tic_tac_toe.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),tic_tac_toe.app.mutate], null))], null));
tic_tac_toe.app.init = (function tic_tac_toe$app$init(){
return om.next.add_root_BANG_.call(null,tic_tac_toe.app.reconciler,tic_tac_toe.app.TicTacToe,goog.dom.getElement("app"));
});
