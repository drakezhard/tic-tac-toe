// Compiled by ClojureScript 1.7.170 {}
goog.provide('tic_tac_toe.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
cljs.core.enable_console_print_BANG_.call(null);
tic_tac_toe.app.app_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"name","name",1843675177),"player1",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"won?","won?",-794748996),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"black"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"name","name",1843675177),"player2",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"won?","won?",-794748996),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"white"], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)], null);
tic_tac_toe.app.getter = (function tic_tac_toe$app$getter(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__22824_SHARP_){
return cljs.core.get_in.call(null,st,p1__22824_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
tic_tac_toe.app.read = (function tic_tac_toe$app$read(p__22825,key,params){
var map__22828 = p__22825;
var map__22828__$1 = ((((!((map__22828 == null)))?((((map__22828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var env = map__22828__$1;
var state = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),tic_tac_toe.app.getter.call(null,state,key)], null);
});
if(typeof tic_tac_toe.app.mutate !== 'undefined'){
} else {
tic_tac_toe.app.mutate = (function (){var method_table__16464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16468__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16468__auto__,method_table__16464__auto__,prefer_table__16465__auto__,method_cache__16466__auto__,cached_hierarchy__16467__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.app.mutate,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null),(function (p__22830,_,p__22831){
var map__22832 = p__22830;
var map__22832__$1 = ((((!((map__22832 == null)))?((((map__22832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22832):map__22832);
var state = cljs.core.get.call(null,map__22832__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22833 = p__22831;
var map__22833__$1 = ((((!((map__22833 == null)))?((((map__22833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22833):map__22833);
var index = cljs.core.get.call(null,map__22833__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22832,map__22832__$1,state,map__22833,map__22833__$1,index){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index,new cljs.core.Keyword(null,"value","value",305978217)], null),((function (map__22832,map__22832__$1,state,map__22833,map__22833__$1,index){
return (function (){
var active = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),active,new cljs.core.Keyword(null,"piece","piece",1396691784)], null));
});})(map__22832,map__22832__$1,state,map__22833,map__22833__$1,index))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null));
});})(map__22832,map__22832__$1,state,map__22833,map__22833__$1,index))
], null);
}));
/**
 * @constructor
 */
tic_tac_toe.app.Player = (function tic_tac_toe$app$Player(){
var this__21469__auto__ = this;
React.Component.apply(this__21469__auto__,arguments);

if(!((this__21469__auto__.initLocalState == null))){
this__21469__auto__.state = this__21469__auto__.initLocalState();
} else {
this__21469__auto__.state = {};
}

return this__21469__auto__;
});

tic_tac_toe.app.Player.prototype = goog.object.clone(React.Component.prototype);

var x22840_22857 = tic_tac_toe.app.Player.prototype;
x22840_22857.componentWillUpdate = ((function (x22840_22857){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x22840_22857))
;

x22840_22857.shouldComponentUpdate = ((function (x22840_22857){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__22841 = next_props__21410__auto____$1;
var G__22841__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__22841):G__22841);
return G__22841__$1;
})();
var or__15551__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21409__auto__),next_props__21410__auto____$2);
if(or__15551__auto__){
return or__15551__auto__;
} else {
var and__15539__auto__ = this__21409__auto__.state;
if(cljs.core.truth_(and__15539__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21409__auto__.state,"omcljs$state"),goog.object.get(next_state__21411__auto__,"omcljs$state"));
} else {
return and__15539__auto__;
}
}
});})(x22840_22857))
;

x22840_22857.componentWillUnmount = ((function (x22840_22857){
return (function (){
var this__21409__auto__ = this;
var r__21415__auto__ = om.next.get_reconciler.call(null,this__21409__auto__);
var cfg__21416__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21415__auto__);
var st__21417__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
var indexer__21414__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
if((st__21417__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21417__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21409__auto__);
}

if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22840_22857))
;

x22840_22857.componentDidUpdate = ((function (x22840_22857){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x22840_22857))
;

x22840_22857.isMounted = ((function (x22840_22857){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22840_22857))
;

x22840_22857.componentWillMount = ((function (x22840_22857){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22840_22857))
;

x22840_22857.render = ((function (x22840_22857){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_22842 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22843 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22844 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22845 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22846 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__22847 = om.next.props.call(null,this$);
var map__22847__$1 = ((((!((map__22847 == null)))?((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);
var props = map__22847__$1;
var idx = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var won_QMARK_ = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"won?","won?",-794748996));
return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[name],null)))),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,type)],null)))),(cljs.core.truth_(won_QMARK_)?cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(won_QMARK_)].join('')],null)))):null)],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22846;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22845;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22844;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22843;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22842;
}});})(x22840_22857))
;


tic_tac_toe.app.Player.prototype.constructor = tic_tac_toe.app.Player;

tic_tac_toe.app.Player.prototype.constructor.displayName = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.prototype.om$isComponent = true;

var x22849_22858 = tic_tac_toe.app.Player;
x22849_22858.om$next$Ident$ = true;

x22849_22858.om$next$Ident$ident$arity$2 = ((function (x22849_22858){
return (function (this$,p__22850){
var map__22851 = p__22850;
var map__22851__$1 = ((((!((map__22851 == null)))?((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var idx = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x22849_22858))
;

x22849_22858.om$next$IQuery$ = true;

x22849_22858.om$next$IQuery$query$arity$1 = ((function (x22849_22858){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"won?","won?",-794748996),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x22849_22858))
;


var x22853_22859 = tic_tac_toe.app.Player.prototype;
x22853_22859.om$next$Ident$ = true;

x22853_22859.om$next$Ident$ident$arity$2 = ((function (x22853_22859){
return (function (this$,p__22854){
var map__22855 = p__22854;
var map__22855__$1 = ((((!((map__22855 == null)))?((((map__22855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22855):map__22855);
var idx = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x22853_22859))
;

x22853_22859.om$next$IQuery$ = true;

x22853_22859.om$next$IQuery$query$arity$1 = ((function (x22853_22859){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"won?","won?",-794748996),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x22853_22859))
;


tic_tac_toe.app.Player.cljs$lang$type = true;

tic_tac_toe.app.Player.cljs$lang$ctorStr = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/Player");
});
tic_tac_toe.app.square = (function tic_tac_toe$app$square(var_args){
var args22860 = [];
var len__16609__auto___22867 = arguments.length;
var i__16610__auto___22868 = (0);
while(true){
if((i__16610__auto___22868 < len__16609__auto___22867)){
args22860.push((arguments[i__16610__auto___22868]));

var G__22869 = (i__16610__auto___22868 + (1));
i__16610__auto___22868 = G__22869;
continue;
} else {
}
break;
}

var G__22862 = args22860.length;
switch (G__22862) {
case 1:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22860.length)].join('')));

}
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$1 = (function (p__22863){
var vec__22864 = p__22863;
var x = cljs.core.nth.call(null,vec__22864,(0),null);
var y = cljs.core.nth.call(null,vec__22864,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join(''))});
});

tic_tac_toe.app.square.cljs$core$IFn$_invoke$arity$3 = (function (p__22865,this$,props){
var vec__22866 = p__22865;
var x = cljs.core.nth.call(null,vec__22866,(0),null);
var y = cljs.core.nth.call(null,vec__22866,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join('')), "onClick": om_tools.dom.format_opts.call(null,((function (vec__22866,x,y){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tic-tac-toe","play","tic-tac-toe/play",622763061,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(vec__22866,x,y))
)});
});

tic_tac_toe.app.square.cljs$lang$maxFixedArity = 3;
tic_tac_toe.app.piece = (function tic_tac_toe$app$piece(p__22871,color){
var vec__22873 = p__22871;
var x = cljs.core.nth.call(null,vec__22873,(0),null);
var y = cljs.core.nth.call(null,vec__22873,(1),null);
return React.DOM.circle({"r": "8%", "cx": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * x))),cljs.core.str("%")].join('')), "cy": om_tools.dom.format_opts.call(null,[cljs.core.str(((16) + ((33) * y))),cljs.core.str("%")].join('')), "fill": om_tools.dom.format_opts.call(null,color)});
});
/**
 * @constructor
 */
tic_tac_toe.app.Tile = (function tic_tac_toe$app$Tile(){
var this__21469__auto__ = this;
React.Component.apply(this__21469__auto__,arguments);

if(!((this__21469__auto__.initLocalState == null))){
this__21469__auto__.state = this__21469__auto__.initLocalState();
} else {
this__21469__auto__.state = {};
}

return this__21469__auto__;
});

tic_tac_toe.app.Tile.prototype = goog.object.clone(React.Component.prototype);

var x22878_22895 = tic_tac_toe.app.Tile.prototype;
x22878_22895.componentWillUpdate = ((function (x22878_22895){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x22878_22895))
;

x22878_22895.shouldComponentUpdate = ((function (x22878_22895){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__22879 = next_props__21410__auto____$1;
var G__22879__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__22879):G__22879);
return G__22879__$1;
})();
var or__15551__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21409__auto__),next_props__21410__auto____$2);
if(or__15551__auto__){
return or__15551__auto__;
} else {
var and__15539__auto__ = this__21409__auto__.state;
if(cljs.core.truth_(and__15539__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21409__auto__.state,"omcljs$state"),goog.object.get(next_state__21411__auto__,"omcljs$state"));
} else {
return and__15539__auto__;
}
}
});})(x22878_22895))
;

x22878_22895.componentWillUnmount = ((function (x22878_22895){
return (function (){
var this__21409__auto__ = this;
var r__21415__auto__ = om.next.get_reconciler.call(null,this__21409__auto__);
var cfg__21416__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21415__auto__);
var st__21417__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
var indexer__21414__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
if((st__21417__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21417__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21409__auto__);
}

if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22878_22895))
;

x22878_22895.componentDidUpdate = ((function (x22878_22895){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x22878_22895))
;

x22878_22895.isMounted = ((function (x22878_22895){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22878_22895))
;

x22878_22895.componentWillMount = ((function (x22878_22895){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22878_22895))
;

x22878_22895.render = ((function (x22878_22895){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_22880 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22881 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22882 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22883 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22884 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__22885 = om.next.props.call(null,this$);
var map__22885__$1 = ((((!((map__22885 == null)))?((((map__22885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22885):map__22885);
var props = map__22885__$1;
var index = cljs.core.get.call(null,map__22885__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__22885__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,value)){
return tic_tac_toe.app.square.call(null,index,this$,props);
} else {
return cljs.core.apply.call(null,React.DOM.svg,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.app.square.call(null,index),tic_tac_toe.app.piece.call(null,index,value)],null))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22884;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22883;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22882;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22881;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22880;
}});})(x22878_22895))
;


tic_tac_toe.app.Tile.prototype.constructor = tic_tac_toe.app.Tile;

tic_tac_toe.app.Tile.prototype.constructor.displayName = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.prototype.om$isComponent = true;

var x22887_22896 = tic_tac_toe.app.Tile;
x22887_22896.om$next$Ident$ = true;

x22887_22896.om$next$Ident$ident$arity$2 = ((function (x22887_22896){
return (function (this$,p__22888){
var map__22889 = p__22888;
var map__22889__$1 = ((((!((map__22889 == null)))?((((map__22889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22889):map__22889);
var index = cljs.core.get.call(null,map__22889__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x22887_22896))
;

x22887_22896.om$next$IQuery$ = true;

x22887_22896.om$next$IQuery$query$arity$1 = ((function (x22887_22896){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x22887_22896))
;


var x22891_22897 = tic_tac_toe.app.Tile.prototype;
x22891_22897.om$next$Ident$ = true;

x22891_22897.om$next$Ident$ident$arity$2 = ((function (x22891_22897){
return (function (this$,p__22892){
var map__22893 = p__22892;
var map__22893__$1 = ((((!((map__22893 == null)))?((((map__22893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22893):map__22893);
var index = cljs.core.get.call(null,map__22893__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x22891_22897))
;

x22891_22897.om$next$IQuery$ = true;

x22891_22897.om$next$IQuery$query$arity$1 = ((function (x22891_22897){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x22891_22897))
;


tic_tac_toe.app.Tile.cljs$lang$type = true;

tic_tac_toe.app.Tile.cljs$lang$ctorStr = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/Tile");
});
tic_tac_toe.app.tile = om.next.factory.call(null,tic_tac_toe.app.Tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
tic_tac_toe.app.player = om.next.factory.call(null,tic_tac_toe.app.Player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
tic_tac_toe.app.compare_3 = (function tic_tac_toe$app$compare_3(i,j,k){
var x = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(i);
var y = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(j);
var z = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(k);
return (cljs.core.not_EQ_.call(null,x,null)) && (cljs.core._EQ_.call(null,x,y,z));
});
tic_tac_toe.app.won_QMARK_ = (function tic_tac_toe$app$won_QMARK_(board){
var vec__22899 = board;
var a = cljs.core.nth.call(null,vec__22899,(0),null);
var b = cljs.core.nth.call(null,vec__22899,(1),null);
var c = cljs.core.nth.call(null,vec__22899,(2),null);
var d = cljs.core.nth.call(null,vec__22899,(3),null);
var e = cljs.core.nth.call(null,vec__22899,(4),null);
var f = cljs.core.nth.call(null,vec__22899,(5),null);
var g = cljs.core.nth.call(null,vec__22899,(6),null);
var h = cljs.core.nth.call(null,vec__22899,(7),null);
var i = cljs.core.nth.call(null,vec__22899,(8),null);
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,b,c))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(a)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,d,e,f))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(d)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,h,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(g)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,d,g))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(a)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,b,e,h))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(b)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,c,f,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,a,e,i))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(a)], null);
} else {
if(cljs.core.truth_(tic_tac_toe.app.compare_3.call(null,g,e,c))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(g)], null);
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
/**
 * @constructor
 */
tic_tac_toe.app.TicTacToe = (function tic_tac_toe$app$TicTacToe(){
var this__21469__auto__ = this;
React.Component.apply(this__21469__auto__,arguments);

if(!((this__21469__auto__.initLocalState == null))){
this__21469__auto__.state = this__21469__auto__.initLocalState();
} else {
this__21469__auto__.state = {};
}

return this__21469__auto__;
});

tic_tac_toe.app.TicTacToe.prototype = goog.object.clone(React.Component.prototype);

var x22904_22918 = tic_tac_toe.app.TicTacToe.prototype;
x22904_22918.componentWillUpdate = ((function (x22904_22918){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x22904_22918))
;

x22904_22918.shouldComponentUpdate = ((function (x22904_22918){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__22905 = next_props__21410__auto____$1;
var G__22905__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__22905):G__22905);
return G__22905__$1;
})();
var or__15551__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21409__auto__),next_props__21410__auto____$2);
if(or__15551__auto__){
return or__15551__auto__;
} else {
var and__15539__auto__ = this__21409__auto__.state;
if(cljs.core.truth_(and__15539__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21409__auto__.state,"omcljs$state"),goog.object.get(next_state__21411__auto__,"omcljs$state"));
} else {
return and__15539__auto__;
}
}
});})(x22904_22918))
;

x22904_22918.componentWillUnmount = ((function (x22904_22918){
return (function (){
var this__21409__auto__ = this;
var r__21415__auto__ = om.next.get_reconciler.call(null,this__21409__auto__);
var cfg__21416__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21415__auto__);
var st__21417__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
var indexer__21414__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21416__auto__);
if((st__21417__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21417__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21409__auto__);
}

if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22904_22918))
;

x22904_22918.componentDidUpdate = ((function (x22904_22918){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x22904_22918))
;

x22904_22918.isMounted = ((function (x22904_22918){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22904_22918))
;

x22904_22918.componentWillMount = ((function (x22904_22918){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x22904_22918))
;

x22904_22918.render = ((function (x22904_22918){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_22906 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22907 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22908 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22909 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22910 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__22911 = om.next.props.call(null,this$);
var map__22911__$1 = ((((!((map__22911 == null)))?((((map__22911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22911):map__22911);
var env = map__22911__$1;
var active_player = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"active-player","active-player",23744659));
var board = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var width = window.innerWidth;
var height = window.innerHeight;
var size = (((height <= width))?height:width);
var winner = tic_tac_toe.app.won_QMARK_.call(null,board);
return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,React.DOM.svg,{"width": om_tools.dom.format_opts.call(null,size), "height": om_tools.dom.format_opts.call(null,size)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "32%", "y": "0%"}),React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "65%", "y": "0%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "32%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "65%"}),cljs.core.map.call(null,tic_tac_toe.app.tile,board),(cljs.core.truth_(winner)?(function (){var vec__22913 = winner;
var vec__22914 = cljs.core.nth.call(null,vec__22913,(0),null);
var x1 = cljs.core.nth.call(null,vec__22914,(0),null);
var y1 = cljs.core.nth.call(null,vec__22914,(1),null);
var vec__22915 = cljs.core.nth.call(null,vec__22913,(1),null);
var x2 = cljs.core.nth.call(null,vec__22915,(0),null);
var y2 = cljs.core.nth.call(null,vec__22915,(1),null);
var value = cljs.core.nth.call(null,vec__22913,(2),null);
return React.DOM.line({"x1": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x1)),cljs.core.str("%")].join('')), "y1": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y1)),cljs.core.str("%")].join('')), "x2": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x2)),cljs.core.str("%")].join('')), "y2": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y2)),cljs.core.str("%")].join('')), "strokeWidth": "10", "stroke": om_tools.dom.format_opts.call(null,value)});
})():null)],null)))),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(9),new cljs.core.Keyword(null,"md","md",707286655),(2)], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,tic_tac_toe.app.player.call(null,cljs.core.first.call(null,players))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,tic_tac_toe.app.player.call(null,cljs.core.last.call(null,players)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22910;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22909;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22908;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22907;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22906;
}});})(x22904_22918))
;


tic_tac_toe.app.TicTacToe.prototype.constructor = tic_tac_toe.app.TicTacToe;

tic_tac_toe.app.TicTacToe.prototype.constructor.displayName = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.prototype.om$isComponent = true;

var x22916_22919 = tic_tac_toe.app.TicTacToe;
x22916_22919.om$next$IQuery$ = true;

x22916_22919.om$next$IQuery$query$arity$1 = ((function (x22916_22919){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x22916_22919))
;


var x22917_22920 = tic_tac_toe.app.TicTacToe.prototype;
x22917_22920.om$next$IQuery$ = true;

x22917_22920.om$next$IQuery$query$arity$1 = ((function (x22917_22920){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"active-player","active-player",23744659)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x22917_22920))
;


tic_tac_toe.app.TicTacToe.cljs$lang$type = true;

tic_tac_toe.app.TicTacToe.cljs$lang$ctorStr = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/TicTacToe");
});
tic_tac_toe.app.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),tic_tac_toe.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),tic_tac_toe.app.mutate], null));
tic_tac_toe.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),tic_tac_toe.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),tic_tac_toe.app.parser], null));
tic_tac_toe.app.init = (function tic_tac_toe$app$init(){
return om.next.add_root_BANG_.call(null,tic_tac_toe.app.reconciler,tic_tac_toe.app.TicTacToe,goog.dom.getElement("app"));
});

//# sourceMappingURL=app.js.map