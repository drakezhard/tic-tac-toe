// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___25935 = schema.utils.use_fn_validation;
var output_schema25929_25936 = schema.core.Any;
var input_schema25930_25937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker25931_25938 = schema.core.checker.call(null,input_schema25930_25937);
var output_checker25932_25939 = schema.core.checker.call(null,output_schema25929_25936);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___25935,output_schema25929_25936,input_schema25930_25937,input_checker25931_25938,output_checker25932_25939){
return (function om_bootstrap$button$render_anchor(G__25933,G__25934){
var validate__19644__auto__ = ufv___25935.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___25940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25933,G__25934], null);
var temp__4425__auto___25941 = input_checker25931_25938.call(null,args__19645__auto___25940);
if(cljs.core.truth_(temp__4425__auto___25941)){
var error__19646__auto___25942 = temp__4425__auto___25941;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___25942)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25930_25937,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___25940,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25942], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__25933;
var children = G__25934;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___25943 = output_checker25932_25939.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___25943)){
var error__19646__auto___25944 = temp__4425__auto___25943;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___25944)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25929_25936,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25944], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___25935,output_schema25929_25936,input_schema25930_25937,input_checker25931_25938,output_checker25932_25939))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema25929_25936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25930_25937], null)));
var ufv___25954 = schema.utils.use_fn_validation;
var output_schema25945_25955 = om_bootstrap.types.Component;
var input_schema25946_25956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker25947_25957 = schema.core.checker.call(null,input_schema25946_25956);
var output_checker25948_25958 = schema.core.checker.call(null,output_schema25945_25955);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958){
return (function om_bootstrap$button$button(var_args){
var args__16615__auto__ = [];
var len__16608__auto___25959 = arguments.length;
var i__16609__auto___25960 = (0);
while(true){
if((i__16609__auto___25960 < len__16608__auto___25959)){
args__16615__auto__.push((arguments[i__16609__auto___25960]));

var G__25961 = (i__16609__auto___25960 + (1));
i__16609__auto___25960 = G__25961;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958){
return (function (G__25949,rest25950){
var validate__19644__auto__ = ufv___25954.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___25962 = cljs.core.list_STAR_.call(null,G__25949,rest25950);
var temp__4425__auto___25963 = input_checker25947_25957.call(null,args__19645__auto___25962);
if(cljs.core.truth_(temp__4425__auto___25963)){
var error__19646__auto___25964 = temp__4425__auto___25963;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__19646__auto___25964)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25946_25956,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___25962,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25964], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var props = G__25949;
var children = rest25950;
while(true){
var vec__25953 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__25953,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__25953,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__15550__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___25965 = output_checker25948_25958.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___25965)){
var error__19646__auto___25966 = temp__4425__auto___25965;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__19646__auto___25966)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25945_25955,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25966], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958){
return (function (seq25951){
var G__25952 = cljs.core.first.call(null,seq25951);
var seq25951__$1 = cljs.core.next.call(null,seq25951);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__25952,seq25951__$1);
});})(ufv___25954,output_schema25945_25955,input_schema25946_25956,input_checker25947_25957,output_checker25948_25958))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema25945_25955,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25946_25956], null)));
var ufv___25976 = schema.utils.use_fn_validation;
var output_schema25967_25977 = om_bootstrap.types.Component;
var input_schema25968_25978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker25969_25979 = schema.core.checker.call(null,input_schema25968_25978);
var output_checker25970_25980 = schema.core.checker.call(null,output_schema25967_25977);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980){
return (function om_bootstrap$button$toolbar(var_args){
var args__16615__auto__ = [];
var len__16608__auto___25981 = arguments.length;
var i__16609__auto___25982 = (0);
while(true){
if((i__16609__auto___25982 < len__16608__auto___25981)){
args__16615__auto__.push((arguments[i__16609__auto___25982]));

var G__25983 = (i__16609__auto___25982 + (1));
i__16609__auto___25982 = G__25983;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980){
return (function (G__25971,rest25972){
var validate__19644__auto__ = ufv___25976.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___25984 = cljs.core.list_STAR_.call(null,G__25971,rest25972);
var temp__4425__auto___25985 = input_checker25969_25979.call(null,args__19645__auto___25984);
if(cljs.core.truth_(temp__4425__auto___25985)){
var error__19646__auto___25986 = temp__4425__auto___25985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__19646__auto___25986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25968_25978,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___25984,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25986], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__25971;
var children = rest25972;
while(true){
var vec__25975 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__25975,(0),null);
var props = cljs.core.nth.call(null,vec__25975,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___25987 = output_checker25970_25980.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___25987)){
var error__19646__auto___25988 = temp__4425__auto___25987;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__19646__auto___25988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25967_25977,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___25988], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980){
return (function (seq25973){
var G__25974 = cljs.core.first.call(null,seq25973);
var seq25973__$1 = cljs.core.next.call(null,seq25973);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__25974,seq25973__$1);
});})(ufv___25976,output_schema25967_25977,input_schema25968_25978,input_checker25969_25979,output_checker25970_25980))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema25967_25977,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25968_25978], null)));
var ufv___25998 = schema.utils.use_fn_validation;
var output_schema25989_25999 = om_bootstrap.types.Component;
var input_schema25990_26000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker25991_26001 = schema.core.checker.call(null,input_schema25990_26000);
var output_checker25992_26002 = schema.core.checker.call(null,output_schema25989_25999);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002){
return (function om_bootstrap$button$button_group(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26003 = arguments.length;
var i__16609__auto___26004 = (0);
while(true){
if((i__16609__auto___26004 < len__16608__auto___26003)){
args__16615__auto__.push((arguments[i__16609__auto___26004]));

var G__26005 = (i__16609__auto___26004 + (1));
i__16609__auto___26004 = G__26005;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002){
return (function (G__25993,rest25994){
var validate__19644__auto__ = ufv___25998.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26006 = cljs.core.list_STAR_.call(null,G__25993,rest25994);
var temp__4425__auto___26007 = input_checker25991_26001.call(null,args__19645__auto___26006);
if(cljs.core.truth_(temp__4425__auto___26007)){
var error__19646__auto___26008 = temp__4425__auto___26007;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__19646__auto___26008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25990_26000,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26006,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26008], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__25993;
var children = rest25994;
while(true){
var vec__25997 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__25997,(0),null);
var props = cljs.core.nth.call(null,vec__25997,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26009 = output_checker25992_26002.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26009)){
var error__19646__auto___26010 = temp__4425__auto___26009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__19646__auto___26010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25989_25999,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26010], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002){
return (function (seq25995){
var G__25996 = cljs.core.first.call(null,seq25995);
var seq25995__$1 = cljs.core.next.call(null,seq25995);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__25996,seq25995__$1);
});})(ufv___25998,output_schema25989_25999,input_schema25990_26000,input_checker25991_26001,output_checker25992_26002))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema25989_25999,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25990_26000], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__25479__auto___26040 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26015 = schema.core.Any;
var input_schema26016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map26014","map26014",1589484905,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker26017 = schema.core.checker.call(null,input_schema26016);
var output_checker26018 = schema.core.checker.call(null,output_schema26015);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function om_bootstrap$button$constructor26012(G__26019){
var validate__19644__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26019], null);
var temp__4425__auto___26042 = input_checker26017.call(null,args__19645__auto___26041);
if(cljs.core.truth_(temp__4425__auto___26042)){
var error__19646__auto___26043 = temp__4425__auto___26042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26012","constructor26012",1086370806,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26016,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26041,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26043], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var map26014 = G__26019;
while(true){
if(cljs.core.map_QMARK_.call(null,map26014)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26014)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26014,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button26026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button26026 = (function (input_schema26016,owner,output_checker26018,map26014,G__26019,output_schema26015,input_checker26017,constructor26012,validate__19644__auto__,ufv__,meta26027){
this.input_schema26016 = input_schema26016;
this.owner = owner;
this.output_checker26018 = output_checker26018;
this.map26014 = map26014;
this.G__26019 = G__26019;
this.output_schema26015 = output_schema26015;
this.input_checker26017 = input_checker26017;
this.constructor26012 = constructor26012;
this.validate__19644__auto__ = validate__19644__auto__;
this.ufv__ = ufv__;
this.meta26027 = meta26027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button26026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (_26028,meta26027__$1){
var self__ = this;
var _26028__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button26026(self__.input_schema26016,self__.owner,self__.output_checker26018,self__.map26014,self__.G__26019,self__.output_schema26015,self__.input_checker26017,self__.constructor26012,self__.validate__19644__auto__,self__.ufv__,meta26027__$1));
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.t_om_bootstrap$button26026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (_26028){
var self__ = this;
var _26028__$1 = this;
return self__.meta26027;
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.t_om_bootstrap$button26026.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button26026.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.t_om_bootstrap$button26026.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button26026.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__26029 = om.core.get_props.call(null,self__.owner);
var map__26029__$1 = ((((!((map__26029 == null)))?((((map__26029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26029):map__26029);
var opts = cljs.core.get.call(null,map__26029__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26030 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26030,(0),null);
var props = cljs.core.nth.call(null,vec__26030,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__26029,map__26029__$1,opts,children,vec__26030,bs,props,classes,___$1,owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__26029,map__26029__$1,opts,children,vec__26030,bs,props,classes,___$1,owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.t_om_bootstrap$button26026.getBasis = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema26016","input-schema26016",-1757446751,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker26018","output-checker26018",1243179113,null),new cljs.core.Symbol(null,"map26014","map26014",1589484905,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__26019","G__26019",214199338,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema26015","output-schema26015",1952398442,null),new cljs.core.Symbol(null,"input-checker26017","input-checker26017",-1175829903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26012","constructor26012",1086370806,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__19644__auto__","validate__19644__auto__",-1544088615,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26027","meta26027",1234717515,null)], null);
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.t_om_bootstrap$button26026.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button26026.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button26026";

om_bootstrap.button.t_om_bootstrap$button26026.cljs$lang$ctorPrWriter = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"om-bootstrap.button/t_om_bootstrap$button26026");
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

om_bootstrap.button.__GT_t_om_bootstrap$button26026 = ((function (owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018){
return (function om_bootstrap$button$constructor26012_$___GT_t_om_bootstrap$button26026(input_schema26016__$1,owner__$1,output_checker26018__$1,map26014__$1,G__26019__$1,output_schema26015__$1,input_checker26017__$1,constructor26012__$1,validate__19644__auto____$1,ufv____$1,meta26027){
return (new om_bootstrap.button.t_om_bootstrap$button26026(input_schema26016__$1,owner__$1,output_checker26018__$1,map26014__$1,G__26019__$1,output_schema26015__$1,input_checker26017__$1,constructor26012__$1,validate__19644__auto____$1,ufv____$1,meta26027));
});})(owner,validate__19644__auto__,ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button26026(input_schema26016,owner,output_checker26018,map26014,G__26019,output_schema26015,input_checker26017,om_bootstrap$button$constructor26012,validate__19644__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26044 = output_checker26018.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26044)){
var error__19646__auto___26045 = temp__4425__auto___26044;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26012","constructor26012",1086370806,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26045)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26015,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26045], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv__,output_schema26015,input_schema26016,input_checker26017,output_checker26018))
,schema.core.make_fn_schema.call(null,output_schema26015,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26016], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__25479__auto___26040){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26046 = arguments.length;
var i__16609__auto___26047 = (0);
while(true){
if((i__16609__auto___26047 < len__16608__auto___26046)){
args__16615__auto__.push((arguments[i__16609__auto___26047]));

var G__26048 = (i__16609__auto___26047 + (1));
i__16609__auto___26047 = G__26048;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((2) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16616__auto__);
});})(component_fnk__25479__auto___26040))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__25479__auto___26040){
return (function (data__25480__auto__,owner26011,p__26035){
var vec__26036 = p__26035;
var opts__25481__auto__ = cljs.core.nth.call(null,vec__26036,(0),null);
return component_fnk__25479__auto___26040.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__25481__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26011,new cljs.core.Keyword(null,"data","data",-232669377),data__25480__auto__], null));
});})(component_fnk__25479__auto___26040))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__25479__auto___26040){
return (function (seq26032){
var G__26033 = cljs.core.first.call(null,seq26032);
var seq26032__$1 = cljs.core.next.call(null,seq26032);
var G__26034 = cljs.core.first.call(null,seq26032__$1);
var seq26032__$2 = cljs.core.next.call(null,seq26032__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26033,G__26034,seq26032__$2);
});})(component_fnk__25479__auto___26040))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args26037 = [];
var len__16608__auto___26049 = arguments.length;
var i__16609__auto___26050 = (0);
while(true){
if((i__16609__auto___26050 < len__16608__auto___26049)){
args26037.push((arguments[i__16609__auto___26050]));

var G__26051 = (i__16609__auto___26050 + (1));
i__16609__auto___26050 = G__26051;
continue;
} else {
}
break;
}

var G__26039 = args26037.length;
switch (G__26039) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26037.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__25448__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__25448__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__25448__auto__,m26013){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__25448__auto__,m26013);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26061 = schema.utils.use_fn_validation;
var output_schema26053_26062 = om_bootstrap.types.Component;
var input_schema26054_26063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker26055_26064 = schema.core.checker.call(null,input_schema26054_26063);
var output_checker26056_26065 = schema.core.checker.call(null,output_schema26053_26062);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065){
return (function om_bootstrap$button$menu_item(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26066 = arguments.length;
var i__16609__auto___26067 = (0);
while(true){
if((i__16609__auto___26067 < len__16608__auto___26066)){
args__16615__auto__.push((arguments[i__16609__auto___26067]));

var G__26068 = (i__16609__auto___26067 + (1));
i__16609__auto___26067 = G__26068;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065){
return (function (G__26057,rest26058){
var validate__19644__auto__ = ufv___26061.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26069 = cljs.core.list_STAR_.call(null,G__26057,rest26058);
var temp__4425__auto___26070 = input_checker26055_26064.call(null,args__19645__auto___26069);
if(cljs.core.truth_(temp__4425__auto___26070)){
var error__19646__auto___26071 = temp__4425__auto___26070;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26071)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26054_26063,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26069,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26071], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__26057;
var children = rest26058;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26072 = output_checker26056_26065.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26072)){
var error__19646__auto___26073 = temp__4425__auto___26072;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26073)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26053_26062,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26073], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065){
return (function (seq26059){
var G__26060 = cljs.core.first.call(null,seq26059);
var seq26059__$1 = cljs.core.next.call(null,seq26059);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__26060,seq26059__$1);
});})(ufv___26061,output_schema26053_26062,input_schema26054_26063,input_checker26055_26064,output_checker26056_26065))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema26053_26062,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26054_26063], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___26084 = schema.utils.use_fn_validation;
var output_schema26075_26085 = om_bootstrap.types.Component;
var input_schema26076_26086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker26077_26087 = schema.core.checker.call(null,input_schema26076_26086);
var output_checker26078_26088 = schema.core.checker.call(null,output_schema26075_26085);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26089 = arguments.length;
var i__16609__auto___26090 = (0);
while(true){
if((i__16609__auto___26090 < len__16608__auto___26089)){
args__16615__auto__.push((arguments[i__16609__auto___26090]));

var G__26091 = (i__16609__auto___26090 + (1));
i__16609__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088){
return (function (G__26079,rest26080){
var validate__19644__auto__ = ufv___26084.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26092 = cljs.core.list_STAR_.call(null,G__26079,rest26080);
var temp__4425__auto___26093 = input_checker26077_26087.call(null,args__19645__auto___26092);
if(cljs.core.truth_(temp__4425__auto___26093)){
var error__19646__auto___26094 = temp__4425__auto___26093;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26094)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26076_26086,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26092,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26094], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__26079;
var children = rest26080;
while(true){
var vec__26083 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__26083,(0),null);
var props = cljs.core.nth.call(null,vec__26083,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__26083,bs,props,classes,ul_attrs,validate__19644__auto__,ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088){
return (function (p1__26074_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26074_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__26083,bs,props,classes,ul_attrs,validate__19644__auto__,ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26095 = output_checker26078_26088.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26095)){
var error__19646__auto___26096 = temp__4425__auto___26095;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26075_26085,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26096], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088){
return (function (seq26081){
var G__26082 = cljs.core.first.call(null,seq26081);
var seq26081__$1 = cljs.core.next.call(null,seq26081);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__26082,seq26081__$1);
});})(ufv___26084,output_schema26075_26085,input_schema26076_26086,input_checker26077_26087,output_checker26078_26088))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema26075_26085,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26076_26086], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__25450__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__25450__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__25450__auto__;
})();

var component_fnk__25479__auto___26127 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26102 = schema.core.Any;
var input_schema26103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map26101","map26101",-1343033481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker26104 = schema.core.checker.call(null,input_schema26103);
var output_checker26105 = schema.core.checker.call(null,output_schema26102);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function om_bootstrap$button$constructor26099(G__26106){
var validate__19644__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26106], null);
var temp__4425__auto___26129 = input_checker26104.call(null,args__19645__auto___26128);
if(cljs.core.truth_(temp__4425__auto___26129)){
var error__19646__auto___26130 = temp__4425__auto___26129;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26099","constructor26099",1463160243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26130)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26103,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26128,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26130], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var map26101 = G__26106;
while(true){
if(cljs.core.map_QMARK_.call(null,map26101)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26101)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26101,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26101,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button26113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button26113 = (function (owner,input_checker26104,output_checker26105,input_schema26103,output_schema26102,G__26106,constructor26099,state,map26101,validate__19644__auto__,ufv__,meta26114){
this.owner = owner;
this.input_checker26104 = input_checker26104;
this.output_checker26105 = output_checker26105;
this.input_schema26103 = input_schema26103;
this.output_schema26102 = output_schema26102;
this.G__26106 = G__26106;
this.constructor26099 = constructor26099;
this.state = state;
this.map26101 = map26101;
this.validate__19644__auto__ = validate__19644__auto__;
this.ufv__ = ufv__;
this.meta26114 = meta26114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button26113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (_26115,meta26114__$1){
var self__ = this;
var _26115__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button26113(self__.owner,self__.input_checker26104,self__.output_checker26105,self__.input_schema26103,self__.output_schema26102,self__.G__26106,self__.constructor26099,self__.state,self__.map26101,self__.validate__19644__auto__,self__.ufv__,meta26114__$1));
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.t_om_bootstrap$button26113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (_26115){
var self__ = this;
var _26115__$1 = this;
return self__.meta26114;
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.t_om_bootstrap$button26113.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button26113.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.t_om_bootstrap$button26113.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button26113.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26116 = om.core.get_props.call(null,self__.owner);
var map__26116__$1 = ((((!((map__26116 == null)))?((((map__26116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26116):map__26116);
var opts = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26117 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26117,(0),null);
var props = cljs.core.nth.call(null,vec__26117,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
], null);
var update_child_props = ((function (open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__15550__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (p1__26097_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26097_SHARP_,update_child_props);
});})(open_QMARK_,map__26116,map__26116__$1,opts,children,vec__26117,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
,children))], null));
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.t_om_bootstrap$button26113.getBasis = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker26104","input-checker26104",2052662948,null),new cljs.core.Symbol(null,"output-checker26105","output-checker26105",-1132463866,null),new cljs.core.Symbol(null,"input-schema26103","input-schema26103",-1053499320,null),new cljs.core.Symbol(null,"output-schema26102","output-schema26102",-884655895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__26106","G__26106",1292480429,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26099","constructor26099",1463160243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map26101","map26101",-1343033481,null),new cljs.core.Symbol(null,"validate__19644__auto__","validate__19644__auto__",-1544088615,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26114","meta26114",1949493374,null)], null);
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.t_om_bootstrap$button26113.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button26113.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button26113";

om_bootstrap.button.t_om_bootstrap$button26113.cljs$lang$ctorPrWriter = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"om-bootstrap.button/t_om_bootstrap$button26113");
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

om_bootstrap.button.__GT_t_om_bootstrap$button26113 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105){
return (function om_bootstrap$button$constructor26099_$___GT_t_om_bootstrap$button26113(owner__$1,input_checker26104__$1,output_checker26105__$1,input_schema26103__$1,output_schema26102__$1,G__26106__$1,constructor26099__$1,state__$1,map26101__$1,validate__19644__auto____$1,ufv____$1,meta26114){
return (new om_bootstrap.button.t_om_bootstrap$button26113(owner__$1,input_checker26104__$1,output_checker26105__$1,input_schema26103__$1,output_schema26102__$1,G__26106__$1,constructor26099__$1,state__$1,map26101__$1,validate__19644__auto____$1,ufv____$1,meta26114));
});})(state,owner,validate__19644__auto__,ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button26113(owner,input_checker26104,output_checker26105,input_schema26103,output_schema26102,G__26106,om_bootstrap$button$constructor26099,state,map26101,validate__19644__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26131 = output_checker26105.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26131)){
var error__19646__auto___26132 = temp__4425__auto___26131;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26099","constructor26099",1463160243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26102,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26132], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv__,output_schema26102,input_schema26103,input_checker26104,output_checker26105))
,schema.core.make_fn_schema.call(null,output_schema26102,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26103], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__25479__auto___26127){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26133 = arguments.length;
var i__16609__auto___26134 = (0);
while(true){
if((i__16609__auto___26134 < len__16608__auto___26133)){
args__16615__auto__.push((arguments[i__16609__auto___26134]));

var G__26135 = (i__16609__auto___26134 + (1));
i__16609__auto___26134 = G__26135;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((2) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16616__auto__);
});})(component_fnk__25479__auto___26127))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__25479__auto___26127){
return (function (data__25480__auto__,owner26098,p__26122){
var vec__26123 = p__26122;
var opts__25481__auto__ = cljs.core.nth.call(null,vec__26123,(0),null);
return component_fnk__25479__auto___26127.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26098),new cljs.core.Keyword(null,"opts","opts",155075701),opts__25481__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26098,new cljs.core.Keyword(null,"data","data",-232669377),data__25480__auto__], null));
});})(component_fnk__25479__auto___26127))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__25479__auto___26127){
return (function (seq26119){
var G__26120 = cljs.core.first.call(null,seq26119);
var seq26119__$1 = cljs.core.next.call(null,seq26119);
var G__26121 = cljs.core.first.call(null,seq26119__$1);
var seq26119__$2 = cljs.core.next.call(null,seq26119__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26120,G__26121,seq26119__$2);
});})(component_fnk__25479__auto___26127))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args26124 = [];
var len__16608__auto___26136 = arguments.length;
var i__16609__auto___26137 = (0);
while(true){
if((i__16609__auto___26137 < len__16608__auto___26136)){
args26124.push((arguments[i__16609__auto___26137]));

var G__26138 = (i__16609__auto___26137 + (1));
i__16609__auto___26137 = G__26138;
continue;
} else {
}
break;
}

var G__26126 = args26124.length;
switch (G__26126) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26124.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__25448__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__25448__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__25448__auto__,m26100){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__25448__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m26100));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26148 = schema.utils.use_fn_validation;
var output_schema26140_26149 = om_bootstrap.types.Component;
var input_schema26141_26150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker26142_26151 = schema.core.checker.call(null,input_schema26141_26150);
var output_checker26143_26152 = schema.core.checker.call(null,output_schema26140_26149);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152){
return (function om_bootstrap$button$dropdown(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26153 = arguments.length;
var i__16609__auto___26154 = (0);
while(true){
if((i__16609__auto___26154 < len__16608__auto___26153)){
args__16615__auto__.push((arguments[i__16609__auto___26154]));

var G__26155 = (i__16609__auto___26154 + (1));
i__16609__auto___26154 = G__26155;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152){
return (function (G__26144,rest26145){
var validate__19644__auto__ = ufv___26148.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26156 = cljs.core.list_STAR_.call(null,G__26144,rest26145);
var temp__4425__auto___26157 = input_checker26142_26151.call(null,args__19645__auto___26156);
if(cljs.core.truth_(temp__4425__auto___26157)){
var error__19646__auto___26158 = temp__4425__auto___26157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__19646__auto___26158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26141_26150,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26156,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26158], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__26144;
var children = rest26145;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26159 = output_checker26143_26152.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26159)){
var error__19646__auto___26160 = temp__4425__auto___26159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__19646__auto___26160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26140_26149,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26160], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152){
return (function (seq26146){
var G__26147 = cljs.core.first.call(null,seq26146);
var seq26146__$1 = cljs.core.next.call(null,seq26146);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__26147,seq26146__$1);
});})(ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema26140_26149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26141_26150], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__25450__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__25450__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__25450__auto__;
})();

var component_fnk__25479__auto___26190 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26165 = schema.core.Any;
var input_schema26166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map26164","map26164",1715656584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker26167 = schema.core.checker.call(null,input_schema26166);
var output_checker26168 = schema.core.checker.call(null,output_schema26165);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function om_bootstrap$button$constructor26162(G__26169){
var validate__19644__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26169], null);
var temp__4425__auto___26192 = input_checker26167.call(null,args__19645__auto___26191);
if(cljs.core.truth_(temp__4425__auto___26192)){
var error__19646__auto___26193 = temp__4425__auto___26192;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26162","constructor26162",763421271,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26166,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26191,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26193], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var map26164 = G__26169;
while(true){
if(cljs.core.map_QMARK_.call(null,map26164)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26164)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26164,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26164,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button26176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button26176 = (function (output_schema26165,owner,map26164,input_checker26167,G__26169,output_checker26168,state,constructor26162,validate__19644__auto__,input_schema26166,ufv__,meta26177){
this.output_schema26165 = output_schema26165;
this.owner = owner;
this.map26164 = map26164;
this.input_checker26167 = input_checker26167;
this.G__26169 = G__26169;
this.output_checker26168 = output_checker26168;
this.state = state;
this.constructor26162 = constructor26162;
this.validate__19644__auto__ = validate__19644__auto__;
this.input_schema26166 = input_schema26166;
this.ufv__ = ufv__;
this.meta26177 = meta26177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button26176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (_26178,meta26177__$1){
var self__ = this;
var _26178__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button26176(self__.output_schema26165,self__.owner,self__.map26164,self__.input_checker26167,self__.G__26169,self__.output_checker26168,self__.state,self__.constructor26162,self__.validate__19644__auto__,self__.input_schema26166,self__.ufv__,meta26177__$1));
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.t_om_bootstrap$button26176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (_26178){
var self__ = this;
var _26178__$1 = this;
return self__.meta26177;
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.t_om_bootstrap$button26176.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button26176.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.t_om_bootstrap$button26176.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button26176.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26179 = om.core.get_props.call(null,self__.owner);
var map__26179__$1 = ((((!((map__26179 == null)))?((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26179):map__26179);
var opts = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26180 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__26180,(0),null);
var props = cljs.core.nth.call(null,vec__26180,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (k){
var temp__4425__auto___26194 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___26194)){
var f_26195 = temp__4425__auto___26194;
f_26195.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__26179,map__26179__$1,opts,children,vec__26180,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.t_om_bootstrap$button26176.getBasis = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema26165","output-schema26165",-907497469,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map26164","map26164",1715656584,null),new cljs.core.Symbol(null,"input-checker26167","input-checker26167",1513214889,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__26169","G__26169",1191917546,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-checker26168","output-checker26168",1268183668,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26162","constructor26162",763421271,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__19644__auto__","validate__19644__auto__",-1544088615,null),new cljs.core.Symbol(null,"input-schema26166","input-schema26166",225251642,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26177","meta26177",-1645935127,null)], null);
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.t_om_bootstrap$button26176.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button26176.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button26176";

om_bootstrap.button.t_om_bootstrap$button26176.cljs$lang$ctorPrWriter = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"om-bootstrap.button/t_om_bootstrap$button26176");
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

om_bootstrap.button.__GT_t_om_bootstrap$button26176 = ((function (state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168){
return (function om_bootstrap$button$constructor26162_$___GT_t_om_bootstrap$button26176(output_schema26165__$1,owner__$1,map26164__$1,input_checker26167__$1,G__26169__$1,output_checker26168__$1,state__$1,constructor26162__$1,validate__19644__auto____$1,input_schema26166__$1,ufv____$1,meta26177){
return (new om_bootstrap.button.t_om_bootstrap$button26176(output_schema26165__$1,owner__$1,map26164__$1,input_checker26167__$1,G__26169__$1,output_checker26168__$1,state__$1,constructor26162__$1,validate__19644__auto____$1,input_schema26166__$1,ufv____$1,meta26177));
});})(state,owner,validate__19644__auto__,ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button26176(output_schema26165,owner,map26164,input_checker26167,G__26169,output_checker26168,state,om_bootstrap$button$constructor26162,validate__19644__auto__,input_schema26166,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26196 = output_checker26168.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26196)){
var error__19646__auto___26197 = temp__4425__auto___26196;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor26162","constructor26162",763421271,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26165,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26197], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv__,output_schema26165,input_schema26166,input_checker26167,output_checker26168))
,schema.core.make_fn_schema.call(null,output_schema26165,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26166], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__25479__auto___26190){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26198 = arguments.length;
var i__16609__auto___26199 = (0);
while(true){
if((i__16609__auto___26199 < len__16608__auto___26198)){
args__16615__auto__.push((arguments[i__16609__auto___26199]));

var G__26200 = (i__16609__auto___26199 + (1));
i__16609__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((2) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16616__auto__);
});})(component_fnk__25479__auto___26190))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__25479__auto___26190){
return (function (data__25480__auto__,owner26161,p__26185){
var vec__26186 = p__26185;
var opts__25481__auto__ = cljs.core.nth.call(null,vec__26186,(0),null);
return component_fnk__25479__auto___26190.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26161),new cljs.core.Keyword(null,"opts","opts",155075701),opts__25481__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26161,new cljs.core.Keyword(null,"data","data",-232669377),data__25480__auto__], null));
});})(component_fnk__25479__auto___26190))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__25479__auto___26190){
return (function (seq26182){
var G__26183 = cljs.core.first.call(null,seq26182);
var seq26182__$1 = cljs.core.next.call(null,seq26182);
var G__26184 = cljs.core.first.call(null,seq26182__$1);
var seq26182__$2 = cljs.core.next.call(null,seq26182__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26183,G__26184,seq26182__$2);
});})(component_fnk__25479__auto___26190))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args26187 = [];
var len__16608__auto___26201 = arguments.length;
var i__16609__auto___26202 = (0);
while(true){
if((i__16609__auto___26202 < len__16608__auto___26201)){
args26187.push((arguments[i__16609__auto___26202]));

var G__26203 = (i__16609__auto___26202 + (1));
i__16609__auto___26202 = G__26203;
continue;
} else {
}
break;
}

var G__26189 = args26187.length;
switch (G__26189) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26187.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__25448__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__25448__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__25448__auto__,m26163){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__25448__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m26163));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26213 = schema.utils.use_fn_validation;
var output_schema26205_26214 = schema.core.Any;
var input_schema26206_26215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker26207_26216 = schema.core.checker.call(null,input_schema26206_26215);
var output_checker26208_26217 = schema.core.checker.call(null,output_schema26205_26214);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217){
return (function om_bootstrap$button$split(var_args){
var args__16615__auto__ = [];
var len__16608__auto___26218 = arguments.length;
var i__16609__auto___26219 = (0);
while(true){
if((i__16609__auto___26219 < len__16608__auto___26218)){
args__16615__auto__.push((arguments[i__16609__auto___26219]));

var G__26220 = (i__16609__auto___26219 + (1));
i__16609__auto___26219 = G__26220;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});})(ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217){
return (function (G__26209,rest26210){
var validate__19644__auto__ = ufv___26213.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___26221 = cljs.core.list_STAR_.call(null,G__26209,rest26210);
var temp__4425__auto___26222 = input_checker26207_26216.call(null,args__19645__auto___26221);
if(cljs.core.truth_(temp__4425__auto___26222)){
var error__19646__auto___26223 = temp__4425__auto___26222;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26206_26215,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___26221,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26223], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var opts = G__26209;
var children = rest26210;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___26224 = output_checker26208_26217.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___26224)){
var error__19646__auto___26225 = temp__4425__auto___26224;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19646__auto___26225)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26205_26214,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___26225], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217){
return (function (seq26211){
var G__26212 = cljs.core.first.call(null,seq26211);
var seq26211__$1 = cljs.core.next.call(null,seq26211);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__26212,seq26211__$1);
});})(ufv___26213,output_schema26205_26214,input_schema26206_26215,input_checker26207_26216,output_checker26208_26217))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema26205_26214,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26206_26215], null)));

//# sourceMappingURL=button.js.map