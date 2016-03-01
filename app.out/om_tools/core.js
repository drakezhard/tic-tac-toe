// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.core');
goog.require('schema.core');
/**
 * Returns an atom-like object for reading and writing Om component
 * state.
 * 
 * Note: Behavior may exactly not match atoms when deref'ing
 * immediately following a reset!/swap! because Om processes state
 * changes asynchronously in separate render phases.
 */
om_tools.core.state_proxy = (function om_tools$core$state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.call(null,owner);
});
if(typeof om_tools.core.t_om_tools$core18635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
om_tools.core.t_om_tools$core18635 = (function (state_proxy,owner,get_state,meta18636){
this.state_proxy = state_proxy;
this.owner = owner;
this.get_state = get_state;
this.meta18636 = meta18636;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 98304;
})
om_tools.core.t_om_tools$core18635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_18637,meta18636__$1){
var self__ = this;
var _18637__$1 = this;
return (new om_tools.core.t_om_tools$core18635(self__.state_proxy,self__.owner,self__.get_state,meta18636__$1));
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_18637){
var self__ = this;
var _18637__$1 = this;
return self__.meta18636;
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.get_state.call(null);
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,v);
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null)));
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x));
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x,y));
});})(get_state))
;

om_tools.core.t_om_tools$core18635.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.get_state.call(null),x,y,more));
});})(get_state))
;

om_tools.core.t_om_tools$core18635.getBasis = ((function (get_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state-proxy","state-proxy",1999831324,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an atom-like object for reading and writing Om component\n   state.\n\n   Note: Behavior may exactly not match atoms when deref'ing\n   immediately following a reset!/swap! because Om processes state\n   changes asynchronously in separate render phases."], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Symbol(null,"meta18636","meta18636",79527092,null)], null);
});})(get_state))
;

om_tools.core.t_om_tools$core18635.cljs$lang$type = true;

om_tools.core.t_om_tools$core18635.cljs$lang$ctorStr = "om-tools.core/t_om_tools$core18635";

om_tools.core.t_om_tools$core18635.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om-tools.core/t_om_tools$core18635");
});})(get_state))
;

om_tools.core.__GT_t_om_tools$core18635 = ((function (get_state){
return (function om_tools$core$state_proxy_$___GT_t_om_tools$core18635(state_proxy__$1,owner__$1,get_state__$1,meta18636){
return (new om_tools.core.t_om_tools$core18635(state_proxy__$1,owner__$1,get_state__$1,meta18636));
});})(get_state))
;

}

return (new om_tools.core.t_om_tools$core18635(om_tools$core$state_proxy,owner,get_state,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
/**
 * Calls om.core/set-state! when current value not= to v and returns
 * updated owner, otherwise nil.
 * Used to prevent no-op updates from entering render queue
 */
om_tools.core.set_state_QMARK__BANG_ = (function om_tools$core$set_state_QMARK__BANG_(var_args){
var args18638 = [];
var len__6226__auto___18641 = arguments.length;
var i__6227__auto___18642 = (0);
while(true){
if((i__6227__auto___18642 < len__6226__auto___18641)){
args18638.push((arguments[i__6227__auto___18642]));

var G__18643 = (i__6227__auto___18642 + (1));
i__6227__auto___18642 = G__18643;
continue;
} else {
}
break;
}

var G__18640 = args18638.length;
switch (G__18640) {
case 2:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18638.length)].join('')));

}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,korks,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$lang$maxFixedArity = 3;
