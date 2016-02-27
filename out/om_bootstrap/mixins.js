// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___26235 = schema.utils.use_fn_validation;
var output_schema26228_26236 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema26229_26237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker26230_26238 = schema.core.checker.call(null,input_schema26229_26237);
var output_checker26231_26239 = schema.core.checker.call(null,output_schema26228_26236);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239){
return (function om_bootstrap$mixins$event_listener(G__26232,G__26233,G__26234){
var validate__19644__auto__ = ufv___26235.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26240 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26232,G__26233,G__26234], null);
var temp__4425__auto___26241 = input_checker26230_26238.call(null,args__19645__auto___26240);
if(cljs.core.truth_(temp__4425__auto___26241)){
var error__19646__auto___26242 = temp__4425__auto___26241;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__19646__auto___26242)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26229_26237,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26240,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26242], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var target = G__26232;
var event_type = G__26233;
var callback = G__26234;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239))
} else {
return ((function (validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239){
return (function (){
return null;
});
;})(validate__19644__auto__,ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239))

}
}
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26243 = output_checker26231_26239.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26243)){
var error__19646__auto___26244 = temp__4425__auto___26243;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__19646__auto___26244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26228_26236,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26244], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___26235,output_schema26228_26236,input_schema26229_26237,input_checker26230_26238,output_checker26231_26239))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema26228_26236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26229_26237], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this26245 = this;
return ((function (this26245){
return (function (owner){
return owner.listeners = [];
});})(this26245))
.call(null,this26245);
}), "componentWillUnmount": (function (){
var this26246 = this;
return ((function (this26246){
return (function (owner){
var seq__26251 = cljs.core.seq.call(null,owner.listeners);
var chunk__26252 = null;
var count__26253 = (0);
var i__26254 = (0);
while(true){
if((i__26254 < count__26253)){
var l = cljs.core._nth.call(null,chunk__26252,i__26254);
l.call(null);

var G__26255 = seq__26251;
var G__26256 = chunk__26252;
var G__26257 = count__26253;
var G__26258 = (i__26254 + (1));
seq__26251 = G__26255;
chunk__26252 = G__26256;
count__26253 = G__26257;
i__26254 = G__26258;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26251);
if(temp__4425__auto__){
var seq__26251__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26251__$1)){
var c__16353__auto__ = cljs.core.chunk_first.call(null,seq__26251__$1);
var G__26259 = cljs.core.chunk_rest.call(null,seq__26251__$1);
var G__26260 = c__16353__auto__;
var G__26261 = cljs.core.count.call(null,c__16353__auto__);
var G__26262 = (0);
seq__26251 = G__26259;
chunk__26252 = G__26260;
count__26253 = G__26261;
i__26254 = G__26262;
continue;
} else {
var l = cljs.core.first.call(null,seq__26251__$1);
l.call(null);

var G__26263 = cljs.core.next.call(null,seq__26251__$1);
var G__26264 = null;
var G__26265 = (0);
var G__26266 = (0);
seq__26251 = G__26263;
chunk__26252 = G__26264;
count__26253 = G__26265;
i__26254 = G__26266;
continue;
}
} else {
return null;
}
}
break;
}
});})(this26246))
.call(null,this26246);
}), "set_listener": (function (target26248,event_type26249,callback26250){
var this26247 = this;
return ((function (this26247){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this26247))
.call(null,this26247,target26248,event_type26249,callback26250);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this26268 = this;
return ((function (this26268){
return (function (owner){
return owner.timeouts = [];
});})(this26268))
.call(null,this26268);
}), "componentWillUnmount": (function (){
var this26269 = this;
return ((function (this26269){
return (function (owner){
return owner.timeouts.map(((function (this26269){
return (function (p1__26267_SHARP_){
return clearTimeout(p1__26267_SHARP_);
});})(this26269))
);
});})(this26269))
.call(null,this26269);
}), "set_timeout": (function (f26271,timeout26272){
var this26270 = this;
return ((function (this26270){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this26270))
.call(null,this26270,f26271,timeout26272);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 *   nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__26273 = node__$1.parentNode;
node__$1 = G__26273;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 *   `:open?` state to false if the user clicks outside the owning
 *   component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 *   registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
var seq__26278_26282 = cljs.core.seq.call(null,listeners);
var chunk__26279_26283 = null;
var count__26280_26284 = (0);
var i__26281_26285 = (0);
while(true){
if((i__26281_26285 < count__26280_26284)){
var l_26286 = cljs.core._nth.call(null,chunk__26279_26283,i__26281_26285);
l_26286.call(null);

var G__26287 = seq__26278_26282;
var G__26288 = chunk__26279_26283;
var G__26289 = count__26280_26284;
var G__26290 = (i__26281_26285 + (1));
seq__26278_26282 = G__26287;
chunk__26279_26283 = G__26288;
count__26280_26284 = G__26289;
i__26281_26285 = G__26290;
continue;
} else {
var temp__4425__auto___26291__$1 = cljs.core.seq.call(null,seq__26278_26282);
if(temp__4425__auto___26291__$1){
var seq__26278_26292__$1 = temp__4425__auto___26291__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278_26292__$1)){
var c__16353__auto___26293 = cljs.core.chunk_first.call(null,seq__26278_26292__$1);
var G__26294 = cljs.core.chunk_rest.call(null,seq__26278_26292__$1);
var G__26295 = c__16353__auto___26293;
var G__26296 = cljs.core.count.call(null,c__16353__auto___26293);
var G__26297 = (0);
seq__26278_26282 = G__26294;
chunk__26279_26283 = G__26295;
count__26280_26284 = G__26296;
i__26281_26285 = G__26297;
continue;
} else {
var l_26298 = cljs.core.first.call(null,seq__26278_26292__$1);
l_26298.call(null);

var G__26299 = cljs.core.next.call(null,seq__26278_26292__$1);
var G__26300 = null;
var G__26301 = (0);
var G__26302 = (0);
seq__26278_26282 = G__26299;
chunk__26279_26283 = G__26300;
count__26280_26284 = G__26301;
i__26281_26285 = G__26302;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 *   clicks outside the component's owning dom element OR hits the escape
 *   key, the state will jump back to false.
 * 
 *   Down the road this may need to register a callback when the state
 *   changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this26303 = this;
return ((function (this26303){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this26303))
.call(null,this26303);
}), "componentWillUnmount": (function (){
var this26304 = this;
return ((function (this26304){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this26304))
.call(null,this26304);
}), "isDropdownOpen": (function (){
var this26305 = this;
return ((function (this26305){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this26305))
.call(null,this26305);
}), "setDropdownState": (function (open_QMARK_26307){
var this26306 = this;
return ((function (this26306){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this26306))
.call(null,this26306,open_QMARK_26307);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this26308 = this;
return ((function (this26308){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this26308))
.call(null,this26308);
}), "isPanelCollapsed": (function (){
var this26309 = this;
return ((function (this26309){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this26309))
.call(null,this26309);
}), "toggleCollapsed": (function (){
var this26310 = this;
return ((function (this26310){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this26310))
.call(null,this26310);
})};

//# sourceMappingURL=mixins.js.map