// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___22894 = schema.utils.use_fn_validation;
var output_schema22887_22895 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema22888_22896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker22889_22897 = schema.core.checker.call(null,input_schema22888_22896);
var output_checker22890_22898 = schema.core.checker.call(null,output_schema22887_22895);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898){
return (function om_bootstrap$mixins$event_listener(G__22891,G__22892,G__22893){
var validate__15084__auto__ = ufv___22894.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___22899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22891,G__22892,G__22893], null);
var temp__4425__auto___22900 = input_checker22889_22897.call(null,args__15085__auto___22899);
if(cljs.core.truth_(temp__4425__auto___22900)){
var error__15086__auto___22901 = temp__4425__auto___22900;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__15086__auto___22901)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22888_22896,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___22899,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___22901], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var target = G__22891;
var event_type = G__22892;
var callback = G__22893;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898))
} else {
return ((function (validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898){
return (function (){
return null;
});
;})(validate__15084__auto__,ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898))

}
}
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___22902 = output_checker22890_22898.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___22902)){
var error__15086__auto___22903 = temp__4425__auto___22902;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__15086__auto___22903)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22887_22895,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___22903], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___22894,output_schema22887_22895,input_schema22888_22896,input_checker22889_22897,output_checker22890_22898))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema22887_22895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22888_22896], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this22904 = this;
return ((function (this22904){
return (function (owner){
return owner.listeners = [];
});})(this22904))
.call(null,this22904);
}), "componentWillUnmount": (function (){
var this22905 = this;
return ((function (this22905){
return (function (owner){
var seq__22910 = cljs.core.seq.call(null,owner.listeners);
var chunk__22911 = null;
var count__22912 = (0);
var i__22913 = (0);
while(true){
if((i__22913 < count__22912)){
var l = cljs.core._nth.call(null,chunk__22911,i__22913);
l.call(null);

var G__22914 = seq__22910;
var G__22915 = chunk__22911;
var G__22916 = count__22912;
var G__22917 = (i__22913 + (1));
seq__22910 = G__22914;
chunk__22911 = G__22915;
count__22912 = G__22916;
i__22913 = G__22917;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22910);
if(temp__4425__auto__){
var seq__22910__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22910__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__22910__$1);
var G__22918 = cljs.core.chunk_rest.call(null,seq__22910__$1);
var G__22919 = c__5971__auto__;
var G__22920 = cljs.core.count.call(null,c__5971__auto__);
var G__22921 = (0);
seq__22910 = G__22918;
chunk__22911 = G__22919;
count__22912 = G__22920;
i__22913 = G__22921;
continue;
} else {
var l = cljs.core.first.call(null,seq__22910__$1);
l.call(null);

var G__22922 = cljs.core.next.call(null,seq__22910__$1);
var G__22923 = null;
var G__22924 = (0);
var G__22925 = (0);
seq__22910 = G__22922;
chunk__22911 = G__22923;
count__22912 = G__22924;
i__22913 = G__22925;
continue;
}
} else {
return null;
}
}
break;
}
});})(this22905))
.call(null,this22905);
}), "set_listener": (function (target22907,event_type22908,callback22909){
var this22906 = this;
return ((function (this22906){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this22906))
.call(null,this22906,target22907,event_type22908,callback22909);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this22927 = this;
return ((function (this22927){
return (function (owner){
return owner.timeouts = [];
});})(this22927))
.call(null,this22927);
}), "componentWillUnmount": (function (){
var this22928 = this;
return ((function (this22928){
return (function (owner){
return owner.timeouts.map(((function (this22928){
return (function (p1__22926_SHARP_){
return clearTimeout(p1__22926_SHARP_);
});})(this22928))
);
});})(this22928))
.call(null,this22928);
}), "set_timeout": (function (f22930,timeout22931){
var this22929 = this;
return ((function (this22929){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this22929))
.call(null,this22929,f22930,timeout22931);
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
var G__22932 = node__$1.parentNode;
node__$1 = G__22932;
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
var seq__22937_22941 = cljs.core.seq.call(null,listeners);
var chunk__22938_22942 = null;
var count__22939_22943 = (0);
var i__22940_22944 = (0);
while(true){
if((i__22940_22944 < count__22939_22943)){
var l_22945 = cljs.core._nth.call(null,chunk__22938_22942,i__22940_22944);
l_22945.call(null);

var G__22946 = seq__22937_22941;
var G__22947 = chunk__22938_22942;
var G__22948 = count__22939_22943;
var G__22949 = (i__22940_22944 + (1));
seq__22937_22941 = G__22946;
chunk__22938_22942 = G__22947;
count__22939_22943 = G__22948;
i__22940_22944 = G__22949;
continue;
} else {
var temp__4425__auto___22950__$1 = cljs.core.seq.call(null,seq__22937_22941);
if(temp__4425__auto___22950__$1){
var seq__22937_22951__$1 = temp__4425__auto___22950__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22937_22951__$1)){
var c__5971__auto___22952 = cljs.core.chunk_first.call(null,seq__22937_22951__$1);
var G__22953 = cljs.core.chunk_rest.call(null,seq__22937_22951__$1);
var G__22954 = c__5971__auto___22952;
var G__22955 = cljs.core.count.call(null,c__5971__auto___22952);
var G__22956 = (0);
seq__22937_22941 = G__22953;
chunk__22938_22942 = G__22954;
count__22939_22943 = G__22955;
i__22940_22944 = G__22956;
continue;
} else {
var l_22957 = cljs.core.first.call(null,seq__22937_22951__$1);
l_22957.call(null);

var G__22958 = cljs.core.next.call(null,seq__22937_22951__$1);
var G__22959 = null;
var G__22960 = (0);
var G__22961 = (0);
seq__22937_22941 = G__22958;
chunk__22938_22942 = G__22959;
count__22939_22943 = G__22960;
i__22940_22944 = G__22961;
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
var this22962 = this;
return ((function (this22962){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this22962))
.call(null,this22962);
}), "componentWillUnmount": (function (){
var this22963 = this;
return ((function (this22963){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this22963))
.call(null,this22963);
}), "isDropdownOpen": (function (){
var this22964 = this;
return ((function (this22964){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this22964))
.call(null,this22964);
}), "setDropdownState": (function (open_QMARK_22966){
var this22965 = this;
return ((function (this22965){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this22965))
.call(null,this22965,open_QMARK_22966);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this22967 = this;
return ((function (this22967){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this22967))
.call(null,this22967);
}), "isPanelCollapsed": (function (){
var this22968 = this;
return ((function (this22968){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this22968))
.call(null,this22968);
}), "toggleCollapsed": (function (){
var this22969 = this;
return ((function (this22969){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this22969))
.call(null,this22969);
})};
