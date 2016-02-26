// Compiled by ClojureScript 1.7.170 {}
goog.provide('tic_tac_toe.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
cljs.core.enable_console_print_BANG_.call(null);
tic_tac_toe.app.app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"name","name",1843675177),"player1",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"won?","won?",-794748996),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"black"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"name","name",1843675177),"player2",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"won?","won?",-794748996),null,new cljs.core.Keyword(null,"piece","piece",1396691784),"white"], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)], null);
tic_tac_toe.app.getter = (function tic_tac_toe$app$getter(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__21502_SHARP_){
return cljs.core.get_in.call(null,st,p1__21502_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
tic_tac_toe.app.read = (function tic_tac_toe$app$read(p__21503,key,params){
var map__21506 = p__21503;
var map__21506__$1 = ((((!((map__21506 == null)))?((((map__21506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21506):map__21506);
var env = map__21506__$1;
var state = cljs.core.get.call(null,map__21506__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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

var x21512_21529 = tic_tac_toe.app.Player.prototype;
x21512_21529.componentWillUpdate = ((function (x21512_21529){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x21512_21529))
;

x21512_21529.shouldComponentUpdate = ((function (x21512_21529){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__21513 = next_props__21410__auto____$1;
var G__21513__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21513):G__21513);
return G__21513__$1;
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
});})(x21512_21529))
;

x21512_21529.componentWillUnmount = ((function (x21512_21529){
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
});})(x21512_21529))
;

x21512_21529.componentDidUpdate = ((function (x21512_21529){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x21512_21529))
;

x21512_21529.isMounted = ((function (x21512_21529){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21512_21529))
;

x21512_21529.componentWillMount = ((function (x21512_21529){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x21512_21529))
;

x21512_21529.render = ((function (x21512_21529){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_21514 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21515 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21516 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21517 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21518 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__21519 = om.next.props.call(null,this$);
var map__21519__$1 = ((((!((map__21519 == null)))?((((map__21519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21519):map__21519);
var props = map__21519__$1;
var idx = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var active_QMARK_ = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var won_QMARK_ = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"won?","won?",-794748996));
return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[name],null)))),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,type)],null)))),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(active_QMARK_)].join('')],null)))),(cljs.core.truth_(won_QMARK_)?cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(won_QMARK_)].join('')],null)))):null)],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21518;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21517;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21516;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21515;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21514;
}});})(x21512_21529))
;


tic_tac_toe.app.Player.prototype.constructor = tic_tac_toe.app.Player;

tic_tac_toe.app.Player.prototype.constructor.displayName = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.prototype.om$isComponent = true;

var x21521_21530 = tic_tac_toe.app.Player;
x21521_21530.om$next$Ident$ = true;

x21521_21530.om$next$Ident$ident$arity$2 = ((function (x21521_21530){
return (function (this$,p__21522){
var map__21523 = p__21522;
var map__21523__$1 = ((((!((map__21523 == null)))?((((map__21523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21523):map__21523);
var idx = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x21521_21530))
;

x21521_21530.om$next$IQuery$ = true;

x21521_21530.om$next$IQuery$query$arity$1 = ((function (x21521_21530){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"won?","won?",-794748996),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x21521_21530))
;


var x21525_21531 = tic_tac_toe.app.Player.prototype;
x21525_21531.om$next$Ident$ = true;

x21525_21531.om$next$Ident$ident$arity$2 = ((function (x21525_21531){
return (function (this$,p__21526){
var map__21527 = p__21526;
var map__21527__$1 = ((((!((map__21527 == null)))?((((map__21527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21527):map__21527);
var idx = cljs.core.get.call(null,map__21527__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","by-index","player/by-index",-7642772),idx], null);
});})(x21525_21531))
;

x21525_21531.om$next$IQuery$ = true;

x21525_21531.om$next$IQuery$query$arity$1 = ((function (x21525_21531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"won?","won?",-794748996),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
});})(x21525_21531))
;


tic_tac_toe.app.Player.cljs$lang$type = true;

tic_tac_toe.app.Player.cljs$lang$ctorStr = "tic-tac-toe.app/Player";

tic_tac_toe.app.Player.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/Player");
});
tic_tac_toe.app.square = (function tic_tac_toe$app$square(p__21532){
var vec__21534 = p__21532;
var x = cljs.core.nth.call(null,vec__21534,(0),null);
var y = cljs.core.nth.call(null,vec__21534,(1),null);
return React.DOM.rect({"width": "32%", "height": "32%", "fill": "red", "transform": null, "x": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * x)),cljs.core.str("%")].join('')), "y": om_tools.dom.format_opts.call(null,[cljs.core.str(((33) * y)),cljs.core.str("%")].join('')), "onClick": om_tools.dom.format_opts.call(null,((function (vec__21534,x,y){
return (function (e){
return cljs.core.println.call(null,"did",e);
});})(vec__21534,x,y))
)});
});
tic_tac_toe.app.piece = (function tic_tac_toe$app$piece(p__21535,color){
var vec__21537 = p__21535;
var x = cljs.core.nth.call(null,vec__21537,(0),null);
var y = cljs.core.nth.call(null,vec__21537,(1),null);
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

var x21542_21559 = tic_tac_toe.app.Tile.prototype;
x21542_21559.componentWillUpdate = ((function (x21542_21559){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x21542_21559))
;

x21542_21559.shouldComponentUpdate = ((function (x21542_21559){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__21543 = next_props__21410__auto____$1;
var G__21543__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21543):G__21543);
return G__21543__$1;
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
});})(x21542_21559))
;

x21542_21559.componentWillUnmount = ((function (x21542_21559){
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
});})(x21542_21559))
;

x21542_21559.componentDidUpdate = ((function (x21542_21559){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x21542_21559))
;

x21542_21559.isMounted = ((function (x21542_21559){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21542_21559))
;

x21542_21559.componentWillMount = ((function (x21542_21559){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x21542_21559))
;

x21542_21559.render = ((function (x21542_21559){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_21544 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21545 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21546 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21547 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21548 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__21549 = om.next.props.call(null,this$);
var map__21549__$1 = ((((!((map__21549 == null)))?((((map__21549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21549):map__21549);
var props = map__21549__$1;
var index = cljs.core.get.call(null,map__21549__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.call(null,map__21549__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,value)){
return tic_tac_toe.app.square.call(null,index);
} else {
return cljs.core.apply.call(null,React.DOM.svg,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.app.square.call(null,index),tic_tac_toe.app.piece.call(null,index,value)],null))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21548;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21547;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21546;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21545;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21544;
}});})(x21542_21559))
;


tic_tac_toe.app.Tile.prototype.constructor = tic_tac_toe.app.Tile;

tic_tac_toe.app.Tile.prototype.constructor.displayName = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.prototype.om$isComponent = true;

var x21551_21560 = tic_tac_toe.app.Tile;
x21551_21560.om$next$Ident$ = true;

x21551_21560.om$next$Ident$ident$arity$2 = ((function (x21551_21560){
return (function (this$,p__21552){
var map__21553 = p__21552;
var map__21553__$1 = ((((!((map__21553 == null)))?((((map__21553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21553):map__21553);
var index = cljs.core.get.call(null,map__21553__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x21551_21560))
;

x21551_21560.om$next$IQuery$ = true;

x21551_21560.om$next$IQuery$query$arity$1 = ((function (x21551_21560){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x21551_21560))
;


var x21555_21561 = tic_tac_toe.app.Tile.prototype;
x21555_21561.om$next$Ident$ = true;

x21555_21561.om$next$Ident$ident$arity$2 = ((function (x21555_21561){
return (function (this$,p__21556){
var map__21557 = p__21556;
var map__21557__$1 = ((((!((map__21557 == null)))?((((map__21557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21557):map__21557);
var index = cljs.core.get.call(null,map__21557__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tile","by-index","tile/by-index",-1031587801),index], null);
});})(x21555_21561))
;

x21555_21561.om$next$IQuery$ = true;

x21555_21561.om$next$IQuery$query$arity$1 = ((function (x21555_21561){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x21555_21561))
;


tic_tac_toe.app.Tile.cljs$lang$type = true;

tic_tac_toe.app.Tile.cljs$lang$ctorStr = "tic-tac-toe.app/Tile";

tic_tac_toe.app.Tile.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/Tile");
});
tic_tac_toe.app.tile = om.next.factory.call(null,tic_tac_toe.app.Tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"index","index",-1531685915)], null));
tic_tac_toe.app.player = om.next.factory.call(null,tic_tac_toe.app.Player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
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

var x21566_21577 = tic_tac_toe.app.TicTacToe.prototype;
x21566_21577.componentWillUpdate = ((function (x21566_21577){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21409__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21409__auto__);
});})(x21566_21577))
;

x21566_21577.shouldComponentUpdate = ((function (x21566_21577){
return (function (next_props__21410__auto__,next_state__21411__auto__){
var this__21409__auto__ = this;
var next_props__21410__auto____$1 = goog.object.get(next_props__21410__auto__,"omcljs$value");
var next_props__21410__auto____$2 = (function (){var G__21567 = next_props__21410__auto____$1;
var G__21567__$1 = (((next_props__21410__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21567):G__21567);
return G__21567__$1;
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
});})(x21566_21577))
;

x21566_21577.componentWillUnmount = ((function (x21566_21577){
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
});})(x21566_21577))
;

x21566_21577.componentDidUpdate = ((function (x21566_21577){
return (function (prev_props__21412__auto__,prev_state__21413__auto__){
var this__21409__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21409__auto__);
});})(x21566_21577))
;

x21566_21577.isMounted = ((function (x21566_21577){
return (function (){
var this__21409__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21409__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21566_21577))
;

x21566_21577.componentWillMount = ((function (x21566_21577){
return (function (){
var this__21409__auto__ = this;
var indexer__21414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21409__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21414__auto__,this__21409__auto__);
}
});})(x21566_21577))
;

x21566_21577.render = ((function (x21566_21577){
return (function (){
var this__21408__auto__ = this;
var this$ = this__21408__auto__;
var _STAR_reconciler_STAR_21568 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21569 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21570 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21571 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21572 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21408__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21408__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21408__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21408__auto__);

om.next._STAR_parent_STAR_ = this__21408__auto__;

try{var map__21573 = om.next.props.call(null,this$);
var map__21573__$1 = ((((!((map__21573 == null)))?((((map__21573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21573):map__21573);
var env = map__21573__$1;
var board = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var width = window.innerWidth;
var height = window.innerHeight;
var size = (((height <= width))?height:width);
cljs.core.println.call(null,[cljs.core.str(env)].join(''));

return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,React.DOM.svg,{"width": om_tools.dom.format_opts.call(null,size), "height": om_tools.dom.format_opts.call(null,size)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "32%", "y": "0%"}),React.DOM.rect({"width": "1%", "height": "98%", "fill": "black", "transform": null, "x": "65%", "y": "0%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "32%"}),React.DOM.rect({"width": "98%", "height": "1%", "fill": "black", "transform": null, "x": "0%", "y": "65%"}),cljs.core.map.call(null,tic_tac_toe.app.tile,board)],null)))),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(9),new cljs.core.Keyword(null,"md","md",707286655),(2)], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,tic_tac_toe.app.player.call(null,cljs.core.first.call(null,players))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,tic_tac_toe.app.player.call(null,cljs.core.last.call(null,players)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21572;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21571;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21570;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21569;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21568;
}});})(x21566_21577))
;


tic_tac_toe.app.TicTacToe.prototype.constructor = tic_tac_toe.app.TicTacToe;

tic_tac_toe.app.TicTacToe.prototype.constructor.displayName = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.prototype.om$isComponent = true;

var x21575_21578 = tic_tac_toe.app.TicTacToe;
x21575_21578.om$next$IQuery$ = true;

x21575_21578.om$next$IQuery$query$arity$1 = ((function (x21575_21578){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x21575_21578))
;


var x21576_21579 = tic_tac_toe.app.TicTacToe.prototype;
x21576_21579.om$next$IQuery$ = true;

x21576_21579.om$next$IQuery$query$arity$1 = ((function (x21576_21579){
return (function (this$){
var this$__$1 = this;
var player_query = om.next.get_query.call(null,tic_tac_toe.app.Player);
var tile_query = om.next.get_query.call(null,tic_tac_toe.app.Tile);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core._conj.call(null,cljs.core.List.EMPTY,player_query)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,tile_query))))))))));
});})(x21576_21579))
;


tic_tac_toe.app.TicTacToe.cljs$lang$type = true;

tic_tac_toe.app.TicTacToe.cljs$lang$ctorStr = "tic-tac-toe.app/TicTacToe";

tic_tac_toe.app.TicTacToe.cljs$lang$ctorPrWriter = (function (this__21471__auto__,writer__21472__auto__,opt__21473__auto__){
return cljs.core._write.call(null,writer__21472__auto__,"tic-tac-toe.app/TicTacToe");
});
tic_tac_toe.app.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),tic_tac_toe.app.read], null));
tic_tac_toe.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),tic_tac_toe.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),tic_tac_toe.app.parser], null));
tic_tac_toe.app.init = (function tic_tac_toe$app$init(){
return om.next.add_root_BANG_.call(null,tic_tac_toe.app.reconciler,tic_tac_toe.app.TicTacToe,goog.dom.getElement("app"));
});

//# sourceMappingURL=app.js.map