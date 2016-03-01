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
var ufv___23054 = schema.utils.use_fn_validation;
var output_schema23048_23055 = schema.core.Any;
var input_schema23049_23056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23050_23057 = schema.core.checker.call(null,input_schema23049_23056);
var output_checker23051_23058 = schema.core.checker.call(null,output_schema23048_23055);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___23054,output_schema23048_23055,input_schema23049_23056,input_checker23050_23057,output_checker23051_23058){
return (function om_bootstrap$button$render_anchor(G__23052,G__23053){
var validate__15084__auto__ = ufv___23054.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23052,G__23053], null);
var temp__4425__auto___23060 = input_checker23050_23057.call(null,args__15085__auto___23059);
if(cljs.core.truth_(temp__4425__auto___23060)){
var error__15086__auto___23061 = temp__4425__auto___23060;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23061)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23049_23056,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23059,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23061], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23052;
var children = G__23053;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23062 = output_checker23051_23058.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23062)){
var error__15086__auto___23063 = temp__4425__auto___23062;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23063)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23048_23055,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23063], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23054,output_schema23048_23055,input_schema23049_23056,input_checker23050_23057,output_checker23051_23058))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema23048_23055,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23049_23056], null)));
var ufv___23073 = schema.utils.use_fn_validation;
var output_schema23064_23074 = om_bootstrap.types.Component;
var input_schema23065_23075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker23066_23076 = schema.core.checker.call(null,input_schema23065_23075);
var output_checker23067_23077 = schema.core.checker.call(null,output_schema23064_23074);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077){
return (function om_bootstrap$button$button(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23078 = arguments.length;
var i__6227__auto___23079 = (0);
while(true){
if((i__6227__auto___23079 < len__6226__auto___23078)){
args__6233__auto__.push((arguments[i__6227__auto___23079]));

var G__23080 = (i__6227__auto___23079 + (1));
i__6227__auto___23079 = G__23080;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077){
return (function (G__23068,rest23069){
var validate__15084__auto__ = ufv___23073.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23081 = cljs.core.list_STAR_.call(null,G__23068,rest23069);
var temp__4425__auto___23082 = input_checker23066_23076.call(null,args__15085__auto___23081);
if(cljs.core.truth_(temp__4425__auto___23082)){
var error__15086__auto___23083 = temp__4425__auto___23082;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__15086__auto___23083)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23065_23075,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23081,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23083], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var props = G__23068;
var children = rest23069;
while(true){
var vec__23072 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__23072,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__23072,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__5168__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
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
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23084 = output_checker23067_23077.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23084)){
var error__15086__auto___23085 = temp__4425__auto___23084;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__15086__auto___23085)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23064_23074,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23085], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077){
return (function (seq23070){
var G__23071 = cljs.core.first.call(null,seq23070);
var seq23070__$1 = cljs.core.next.call(null,seq23070);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__23071,seq23070__$1);
});})(ufv___23073,output_schema23064_23074,input_schema23065_23075,input_checker23066_23076,output_checker23067_23077))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema23064_23074,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23065_23075], null)));
var ufv___23095 = schema.utils.use_fn_validation;
var output_schema23086_23096 = om_bootstrap.types.Component;
var input_schema23087_23097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker23088_23098 = schema.core.checker.call(null,input_schema23087_23097);
var output_checker23089_23099 = schema.core.checker.call(null,output_schema23086_23096);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099){
return (function om_bootstrap$button$toolbar(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23100 = arguments.length;
var i__6227__auto___23101 = (0);
while(true){
if((i__6227__auto___23101 < len__6226__auto___23100)){
args__6233__auto__.push((arguments[i__6227__auto___23101]));

var G__23102 = (i__6227__auto___23101 + (1));
i__6227__auto___23101 = G__23102;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099){
return (function (G__23090,rest23091){
var validate__15084__auto__ = ufv___23095.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23103 = cljs.core.list_STAR_.call(null,G__23090,rest23091);
var temp__4425__auto___23104 = input_checker23088_23098.call(null,args__15085__auto___23103);
if(cljs.core.truth_(temp__4425__auto___23104)){
var error__15086__auto___23105 = temp__4425__auto___23104;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__15086__auto___23105)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23087_23097,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23103,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23105], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23090;
var children = rest23091;
while(true){
var vec__23094 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__23094,(0),null);
var props = cljs.core.nth.call(null,vec__23094,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23106 = output_checker23089_23099.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23106)){
var error__15086__auto___23107 = temp__4425__auto___23106;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__15086__auto___23107)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23086_23096,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23107], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099){
return (function (seq23092){
var G__23093 = cljs.core.first.call(null,seq23092);
var seq23092__$1 = cljs.core.next.call(null,seq23092);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__23093,seq23092__$1);
});})(ufv___23095,output_schema23086_23096,input_schema23087_23097,input_checker23088_23098,output_checker23089_23099))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema23086_23096,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23087_23097], null)));
var ufv___23117 = schema.utils.use_fn_validation;
var output_schema23108_23118 = om_bootstrap.types.Component;
var input_schema23109_23119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker23110_23120 = schema.core.checker.call(null,input_schema23109_23119);
var output_checker23111_23121 = schema.core.checker.call(null,output_schema23108_23118);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121){
return (function om_bootstrap$button$button_group(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23122 = arguments.length;
var i__6227__auto___23123 = (0);
while(true){
if((i__6227__auto___23123 < len__6226__auto___23122)){
args__6233__auto__.push((arguments[i__6227__auto___23123]));

var G__23124 = (i__6227__auto___23123 + (1));
i__6227__auto___23123 = G__23124;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121){
return (function (G__23112,rest23113){
var validate__15084__auto__ = ufv___23117.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23125 = cljs.core.list_STAR_.call(null,G__23112,rest23113);
var temp__4425__auto___23126 = input_checker23110_23120.call(null,args__15085__auto___23125);
if(cljs.core.truth_(temp__4425__auto___23126)){
var error__15086__auto___23127 = temp__4425__auto___23126;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__15086__auto___23127)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23109_23119,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23125,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23127], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23112;
var children = rest23113;
while(true){
var vec__23116 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__23116,(0),null);
var props = cljs.core.nth.call(null,vec__23116,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23128 = output_checker23111_23121.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23128)){
var error__15086__auto___23129 = temp__4425__auto___23128;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__15086__auto___23129)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23108_23118,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23129], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121){
return (function (seq23114){
var G__23115 = cljs.core.first.call(null,seq23114);
var seq23114__$1 = cljs.core.next.call(null,seq23114);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__23115,seq23114__$1);
});})(ufv___23117,output_schema23108_23118,input_schema23109_23119,input_checker23110_23120,output_checker23111_23121))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema23108_23118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23109_23119], null)));
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

var component_fnk__23024__auto___23159 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23134 = schema.core.Any;
var input_schema23135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map23133","map23133",1947313598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker23136 = schema.core.checker.call(null,input_schema23135);
var output_checker23137 = schema.core.checker.call(null,output_schema23134);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function om_bootstrap$button$constructor23131(G__23138){
var validate__15084__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23138], null);
var temp__4425__auto___23161 = input_checker23136.call(null,args__15085__auto___23160);
if(cljs.core.truth_(temp__4425__auto___23161)){
var error__15086__auto___23162 = temp__4425__auto___23161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23131","constructor23131",-1581067919,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23135,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23160,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23162], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var map23133 = G__23138;
while(true){
if(cljs.core.map_QMARK_.call(null,map23133)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23133)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23133,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button23145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button23145 = (function (owner,input_checker23136,output_schema23134,constructor23131,validate__15084__auto__,input_schema23135,G__23138,output_checker23137,ufv__,map23133,meta23146){
this.owner = owner;
this.input_checker23136 = input_checker23136;
this.output_schema23134 = output_schema23134;
this.constructor23131 = constructor23131;
this.validate__15084__auto__ = validate__15084__auto__;
this.input_schema23135 = input_schema23135;
this.G__23138 = G__23138;
this.output_checker23137 = output_checker23137;
this.ufv__ = ufv__;
this.map23133 = map23133;
this.meta23146 = meta23146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button23145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (_23147,meta23146__$1){
var self__ = this;
var _23147__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button23145(self__.owner,self__.input_checker23136,self__.output_schema23134,self__.constructor23131,self__.validate__15084__auto__,self__.input_schema23135,self__.G__23138,self__.output_checker23137,self__.ufv__,self__.map23133,meta23146__$1));
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.t_om_bootstrap$button23145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (_23147){
var self__ = this;
var _23147__$1 = this;
return self__.meta23146;
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.t_om_bootstrap$button23145.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button23145.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.t_om_bootstrap$button23145.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button23145.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23148 = om.core.get_props.call(null,self__.owner);
var map__23148__$1 = ((((!((map__23148 == null)))?((((map__23148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23148):map__23148);
var opts = cljs.core.get.call(null,map__23148__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__23148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__23149 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__23149,(0),null);
var props = cljs.core.nth.call(null,vec__23149,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__23148,map__23148__$1,opts,children,vec__23149,bs,props,classes,___$1,owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__23148,map__23148__$1,opts,children,vec__23149,bs,props,classes,___$1,owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
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
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.t_om_bootstrap$button23145.getBasis = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker23136","input-checker23136",2038519279,null),new cljs.core.Symbol(null,"output-schema23134","output-schema23134",-504212752,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23131","constructor23131",-1581067919,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__15084__auto__","validate__15084__auto__",-322945487,null),new cljs.core.Symbol(null,"input-schema23135","input-schema23135",305596051,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__23138","G__23138",-1571094020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-checker23137","output-checker23137",487949180,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"map23133","map23133",1947313598,null),new cljs.core.Symbol(null,"meta23146","meta23146",-1754457469,null)], null);
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.t_om_bootstrap$button23145.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button23145.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button23145";

om_bootstrap.button.t_om_bootstrap$button23145.cljs$lang$ctorPrWriter = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om-bootstrap.button/t_om_bootstrap$button23145");
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

om_bootstrap.button.__GT_t_om_bootstrap$button23145 = ((function (owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137){
return (function om_bootstrap$button$constructor23131_$___GT_t_om_bootstrap$button23145(owner__$1,input_checker23136__$1,output_schema23134__$1,constructor23131__$1,validate__15084__auto____$1,input_schema23135__$1,G__23138__$1,output_checker23137__$1,ufv____$1,map23133__$1,meta23146){
return (new om_bootstrap.button.t_om_bootstrap$button23145(owner__$1,input_checker23136__$1,output_schema23134__$1,constructor23131__$1,validate__15084__auto____$1,input_schema23135__$1,G__23138__$1,output_checker23137__$1,ufv____$1,map23133__$1,meta23146));
});})(owner,validate__15084__auto__,ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button23145(owner,input_checker23136,output_schema23134,om_bootstrap$button$constructor23131,validate__15084__auto__,input_schema23135,G__23138,output_checker23137,ufv__,map23133,null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23163 = output_checker23137.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23163)){
var error__15086__auto___23164 = temp__4425__auto___23163;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23131","constructor23131",-1581067919,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23164)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23134,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23164], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv__,output_schema23134,input_schema23135,input_checker23136,output_checker23137))
,schema.core.make_fn_schema.call(null,output_schema23134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23135], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__23024__auto___23159){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23165 = arguments.length;
var i__6227__auto___23166 = (0);
while(true){
if((i__6227__auto___23166 < len__6226__auto___23165)){
args__6233__auto__.push((arguments[i__6227__auto___23166]));

var G__23167 = (i__6227__auto___23166 + (1));
i__6227__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});})(component_fnk__23024__auto___23159))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__23024__auto___23159){
return (function (data__23025__auto__,owner23130,p__23154){
var vec__23155 = p__23154;
var opts__23026__auto__ = cljs.core.nth.call(null,vec__23155,(0),null);
return component_fnk__23024__auto___23159.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__23026__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23130,new cljs.core.Keyword(null,"data","data",-232669377),data__23025__auto__], null));
});})(component_fnk__23024__auto___23159))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__23024__auto___23159){
return (function (seq23151){
var G__23152 = cljs.core.first.call(null,seq23151);
var seq23151__$1 = cljs.core.next.call(null,seq23151);
var G__23153 = cljs.core.first.call(null,seq23151__$1);
var seq23151__$2 = cljs.core.next.call(null,seq23151__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23152,G__23153,seq23151__$2);
});})(component_fnk__23024__auto___23159))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args23156 = [];
var len__6226__auto___23168 = arguments.length;
var i__6227__auto___23169 = (0);
while(true){
if((i__6227__auto___23169 < len__6226__auto___23168)){
args23156.push((arguments[i__6227__auto___23169]));

var G__23170 = (i__6227__auto___23169 + (1));
i__6227__auto___23169 = G__23170;
continue;
} else {
}
break;
}

var G__23158 = args23156.length;
switch (G__23158) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23156.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22993__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22993__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22993__auto__,m23132){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22993__auto__,m23132);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23180 = schema.utils.use_fn_validation;
var output_schema23172_23181 = om_bootstrap.types.Component;
var input_schema23173_23182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker23174_23183 = schema.core.checker.call(null,input_schema23173_23182);
var output_checker23175_23184 = schema.core.checker.call(null,output_schema23172_23181);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184){
return (function om_bootstrap$button$menu_item(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23185 = arguments.length;
var i__6227__auto___23186 = (0);
while(true){
if((i__6227__auto___23186 < len__6226__auto___23185)){
args__6233__auto__.push((arguments[i__6227__auto___23186]));

var G__23187 = (i__6227__auto___23186 + (1));
i__6227__auto___23186 = G__23187;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184){
return (function (G__23176,rest23177){
var validate__15084__auto__ = ufv___23180.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23188 = cljs.core.list_STAR_.call(null,G__23176,rest23177);
var temp__4425__auto___23189 = input_checker23174_23183.call(null,args__15085__auto___23188);
if(cljs.core.truth_(temp__4425__auto___23189)){
var error__15086__auto___23190 = temp__4425__auto___23189;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23190)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23173_23182,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23188,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23190], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23176;
var children = rest23177;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23191 = output_checker23175_23184.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23191)){
var error__15086__auto___23192 = temp__4425__auto___23191;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23192)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23172_23181,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23192], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184){
return (function (seq23178){
var G__23179 = cljs.core.first.call(null,seq23178);
var seq23178__$1 = cljs.core.next.call(null,seq23178);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__23179,seq23178__$1);
});})(ufv___23180,output_schema23172_23181,input_schema23173_23182,input_checker23174_23183,output_checker23175_23184))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema23172_23181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23173_23182], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___23203 = schema.utils.use_fn_validation;
var output_schema23194_23204 = om_bootstrap.types.Component;
var input_schema23195_23205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker23196_23206 = schema.core.checker.call(null,input_schema23195_23205);
var output_checker23197_23207 = schema.core.checker.call(null,output_schema23194_23204);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23208 = arguments.length;
var i__6227__auto___23209 = (0);
while(true){
if((i__6227__auto___23209 < len__6226__auto___23208)){
args__6233__auto__.push((arguments[i__6227__auto___23209]));

var G__23210 = (i__6227__auto___23209 + (1));
i__6227__auto___23209 = G__23210;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207){
return (function (G__23198,rest23199){
var validate__15084__auto__ = ufv___23203.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23211 = cljs.core.list_STAR_.call(null,G__23198,rest23199);
var temp__4425__auto___23212 = input_checker23196_23206.call(null,args__15085__auto___23211);
if(cljs.core.truth_(temp__4425__auto___23212)){
var error__15086__auto___23213 = temp__4425__auto___23212;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23213)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23195_23205,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23211,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23213], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23198;
var children = rest23199;
while(true){
var vec__23202 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__23202,(0),null);
var props = cljs.core.nth.call(null,vec__23202,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__23202,bs,props,classes,ul_attrs,validate__15084__auto__,ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207){
return (function (p1__23193_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__23193_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__23202,bs,props,classes,ul_attrs,validate__15084__auto__,ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23214 = output_checker23197_23207.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23214)){
var error__15086__auto___23215 = temp__4425__auto___23214;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23194_23204,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23215], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207){
return (function (seq23200){
var G__23201 = cljs.core.first.call(null,seq23200);
var seq23200__$1 = cljs.core.next.call(null,seq23200);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__23201,seq23200__$1);
});})(ufv___23203,output_schema23194_23204,input_schema23195_23205,input_checker23196_23206,output_checker23197_23207))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema23194_23204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23195_23205], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__22995__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22995__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22995__auto__;
})();

var component_fnk__23024__auto___23246 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23221 = schema.core.Any;
var input_schema23222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map23220","map23220",666950273,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker23223 = schema.core.checker.call(null,input_schema23222);
var output_checker23224 = schema.core.checker.call(null,output_schema23221);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function om_bootstrap$button$constructor23218(G__23225){
var validate__15084__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23225], null);
var temp__4425__auto___23248 = input_checker23223.call(null,args__15085__auto___23247);
if(cljs.core.truth_(temp__4425__auto___23248)){
var error__15086__auto___23249 = temp__4425__auto___23248;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23218","constructor23218",-1235329077,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23249)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23222,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23247,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23249], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var map23220 = G__23225;
while(true){
if(cljs.core.map_QMARK_.call(null,map23220)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23220)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23220,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map23220,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button23232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button23232 = (function (map23220,owner,input_checker23223,constructor23218,output_schema23221,validate__15084__auto__,output_checker23224,state,input_schema23222,ufv__,G__23225,meta23233){
this.map23220 = map23220;
this.owner = owner;
this.input_checker23223 = input_checker23223;
this.constructor23218 = constructor23218;
this.output_schema23221 = output_schema23221;
this.validate__15084__auto__ = validate__15084__auto__;
this.output_checker23224 = output_checker23224;
this.state = state;
this.input_schema23222 = input_schema23222;
this.ufv__ = ufv__;
this.G__23225 = G__23225;
this.meta23233 = meta23233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button23232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (_23234,meta23233__$1){
var self__ = this;
var _23234__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button23232(self__.map23220,self__.owner,self__.input_checker23223,self__.constructor23218,self__.output_schema23221,self__.validate__15084__auto__,self__.output_checker23224,self__.state,self__.input_schema23222,self__.ufv__,self__.G__23225,meta23233__$1));
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.t_om_bootstrap$button23232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (_23234){
var self__ = this;
var _23234__$1 = this;
return self__.meta23233;
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.t_om_bootstrap$button23232.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button23232.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.t_om_bootstrap$button23232.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button23232.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__23235 = om.core.get_props.call(null,self__.owner);
var map__23235__$1 = ((((!((map__23235 == null)))?((((map__23235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23235):map__23235);
var opts = cljs.core.get.call(null,map__23235__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__23235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__23236 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__23236,(0),null);
var props = cljs.core.nth.call(null,vec__23236,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
], null);
var update_child_props = ((function (open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__5168__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (p1__23216_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__23216_SHARP_,update_child_props);
});})(open_QMARK_,map__23235,map__23235__$1,opts,children,vec__23236,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
,children))], null));
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.t_om_bootstrap$button23232.getBasis = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map23220","map23220",666950273,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker23223","input-checker23223",-1777799765,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23218","constructor23218",-1235329077,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema23221","output-schema23221",-2062733492,null),new cljs.core.Symbol(null,"validate__15084__auto__","validate__15084__auto__",-322945487,null),new cljs.core.Symbol(null,"output-checker23224","output-checker23224",-35179404,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema23222","input-schema23222",1690692857,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__23225","G__23225",-1612398242,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"meta23233","meta23233",-1459492537,null)], null);
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.t_om_bootstrap$button23232.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button23232.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button23232";

om_bootstrap.button.t_om_bootstrap$button23232.cljs$lang$ctorPrWriter = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om-bootstrap.button/t_om_bootstrap$button23232");
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

om_bootstrap.button.__GT_t_om_bootstrap$button23232 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224){
return (function om_bootstrap$button$constructor23218_$___GT_t_om_bootstrap$button23232(map23220__$1,owner__$1,input_checker23223__$1,constructor23218__$1,output_schema23221__$1,validate__15084__auto____$1,output_checker23224__$1,state__$1,input_schema23222__$1,ufv____$1,G__23225__$1,meta23233){
return (new om_bootstrap.button.t_om_bootstrap$button23232(map23220__$1,owner__$1,input_checker23223__$1,constructor23218__$1,output_schema23221__$1,validate__15084__auto____$1,output_checker23224__$1,state__$1,input_schema23222__$1,ufv____$1,G__23225__$1,meta23233));
});})(state,owner,validate__15084__auto__,ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button23232(map23220,owner,input_checker23223,om_bootstrap$button$constructor23218,output_schema23221,validate__15084__auto__,output_checker23224,state,input_schema23222,ufv__,G__23225,null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23250 = output_checker23224.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23250)){
var error__15086__auto___23251 = temp__4425__auto___23250;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23218","constructor23218",-1235329077,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23251)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23221,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23251], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv__,output_schema23221,input_schema23222,input_checker23223,output_checker23224))
,schema.core.make_fn_schema.call(null,output_schema23221,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23222], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__23024__auto___23246){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23252 = arguments.length;
var i__6227__auto___23253 = (0);
while(true){
if((i__6227__auto___23253 < len__6226__auto___23252)){
args__6233__auto__.push((arguments[i__6227__auto___23253]));

var G__23254 = (i__6227__auto___23253 + (1));
i__6227__auto___23253 = G__23254;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});})(component_fnk__23024__auto___23246))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__23024__auto___23246){
return (function (data__23025__auto__,owner23217,p__23241){
var vec__23242 = p__23241;
var opts__23026__auto__ = cljs.core.nth.call(null,vec__23242,(0),null);
return component_fnk__23024__auto___23246.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner23217),new cljs.core.Keyword(null,"opts","opts",155075701),opts__23026__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23217,new cljs.core.Keyword(null,"data","data",-232669377),data__23025__auto__], null));
});})(component_fnk__23024__auto___23246))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__23024__auto___23246){
return (function (seq23238){
var G__23239 = cljs.core.first.call(null,seq23238);
var seq23238__$1 = cljs.core.next.call(null,seq23238);
var G__23240 = cljs.core.first.call(null,seq23238__$1);
var seq23238__$2 = cljs.core.next.call(null,seq23238__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23239,G__23240,seq23238__$2);
});})(component_fnk__23024__auto___23246))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args23243 = [];
var len__6226__auto___23255 = arguments.length;
var i__6227__auto___23256 = (0);
while(true){
if((i__6227__auto___23256 < len__6226__auto___23255)){
args23243.push((arguments[i__6227__auto___23256]));

var G__23257 = (i__6227__auto___23256 + (1));
i__6227__auto___23256 = G__23257;
continue;
} else {
}
break;
}

var G__23245 = args23243.length;
switch (G__23245) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23243.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22993__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22993__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22993__auto__,m23219){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22993__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m23219));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23267 = schema.utils.use_fn_validation;
var output_schema23259_23268 = om_bootstrap.types.Component;
var input_schema23260_23269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker23261_23270 = schema.core.checker.call(null,input_schema23260_23269);
var output_checker23262_23271 = schema.core.checker.call(null,output_schema23259_23268);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271){
return (function om_bootstrap$button$dropdown(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23272 = arguments.length;
var i__6227__auto___23273 = (0);
while(true){
if((i__6227__auto___23273 < len__6226__auto___23272)){
args__6233__auto__.push((arguments[i__6227__auto___23273]));

var G__23274 = (i__6227__auto___23273 + (1));
i__6227__auto___23273 = G__23274;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271){
return (function (G__23263,rest23264){
var validate__15084__auto__ = ufv___23267.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23275 = cljs.core.list_STAR_.call(null,G__23263,rest23264);
var temp__4425__auto___23276 = input_checker23261_23270.call(null,args__15085__auto___23275);
if(cljs.core.truth_(temp__4425__auto___23276)){
var error__15086__auto___23277 = temp__4425__auto___23276;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__15086__auto___23277)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23260_23269,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23275,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23277], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23263;
var children = rest23264;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23278 = output_checker23262_23271.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23278)){
var error__15086__auto___23279 = temp__4425__auto___23278;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__15086__auto___23279)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23259_23268,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23279], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271){
return (function (seq23265){
var G__23266 = cljs.core.first.call(null,seq23265);
var seq23265__$1 = cljs.core.next.call(null,seq23265);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__23266,seq23265__$1);
});})(ufv___23267,output_schema23259_23268,input_schema23260_23269,input_checker23261_23270,output_checker23262_23271))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema23259_23268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23260_23269], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__22995__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22995__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22995__auto__;
})();

var component_fnk__23024__auto___23309 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema23284 = schema.core.Any;
var input_schema23285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map23283","map23283",647058222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker23286 = schema.core.checker.call(null,input_schema23285);
var output_checker23287 = schema.core.checker.call(null,output_schema23284);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function om_bootstrap$button$constructor23281(G__23288){
var validate__15084__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23288], null);
var temp__4425__auto___23311 = input_checker23286.call(null,args__15085__auto___23310);
if(cljs.core.truth_(temp__4425__auto___23311)){
var error__15086__auto___23312 = temp__4425__auto___23311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23281","constructor23281",1652841876,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23285,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23310,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23312], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var map23283 = G__23288;
while(true){
if(cljs.core.map_QMARK_.call(null,map23283)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23283)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map23283,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map23283,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button23295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button23295 = (function (G__23288,owner,input_checker23286,map23283,validate__15084__auto__,output_checker23287,constructor23281,output_schema23284,state,input_schema23285,ufv__,meta23296){
this.G__23288 = G__23288;
this.owner = owner;
this.input_checker23286 = input_checker23286;
this.map23283 = map23283;
this.validate__15084__auto__ = validate__15084__auto__;
this.output_checker23287 = output_checker23287;
this.constructor23281 = constructor23281;
this.output_schema23284 = output_schema23284;
this.state = state;
this.input_schema23285 = input_schema23285;
this.ufv__ = ufv__;
this.meta23296 = meta23296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button23295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (_23297,meta23296__$1){
var self__ = this;
var _23297__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button23295(self__.G__23288,self__.owner,self__.input_checker23286,self__.map23283,self__.validate__15084__auto__,self__.output_checker23287,self__.constructor23281,self__.output_schema23284,self__.state,self__.input_schema23285,self__.ufv__,meta23296__$1));
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.t_om_bootstrap$button23295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (_23297){
var self__ = this;
var _23297__$1 = this;
return self__.meta23296;
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.t_om_bootstrap$button23295.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button23295.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.t_om_bootstrap$button23295.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button23295.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__23298 = om.core.get_props.call(null,self__.owner);
var map__23298__$1 = ((((!((map__23298 == null)))?((((map__23298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23298):map__23298);
var opts = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__23299 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__23299,(0),null);
var props = cljs.core.nth.call(null,vec__23299,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
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
});})(open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (k){
var temp__4425__auto___23313 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___23313)){
var f_23314 = temp__4425__auto___23313;
f_23314.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__23298,map__23298__$1,opts,children,vec__23299,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.t_om_bootstrap$button23295.getBasis = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__23288","G__23288",-1250858943,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker23286","input-checker23286",1524211335,null),new cljs.core.Symbol(null,"map23283","map23283",647058222,null),new cljs.core.Symbol(null,"validate__15084__auto__","validate__15084__auto__",-322945487,null),new cljs.core.Symbol(null,"output-checker23287","output-checker23287",1057213460,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23281","constructor23281",1652841876,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema23284","output-schema23284",-1191748172,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema23285","input-schema23285",1815651482,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta23296","meta23296",-1620032014,null)], null);
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.t_om_bootstrap$button23295.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button23295.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button23295";

om_bootstrap.button.t_om_bootstrap$button23295.cljs$lang$ctorPrWriter = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"om-bootstrap.button/t_om_bootstrap$button23295");
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

om_bootstrap.button.__GT_t_om_bootstrap$button23295 = ((function (state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287){
return (function om_bootstrap$button$constructor23281_$___GT_t_om_bootstrap$button23295(G__23288__$1,owner__$1,input_checker23286__$1,map23283__$1,validate__15084__auto____$1,output_checker23287__$1,constructor23281__$1,output_schema23284__$1,state__$1,input_schema23285__$1,ufv____$1,meta23296){
return (new om_bootstrap.button.t_om_bootstrap$button23295(G__23288__$1,owner__$1,input_checker23286__$1,map23283__$1,validate__15084__auto____$1,output_checker23287__$1,constructor23281__$1,output_schema23284__$1,state__$1,input_schema23285__$1,ufv____$1,meta23296));
});})(state,owner,validate__15084__auto__,ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button23295(G__23288,owner,input_checker23286,map23283,validate__15084__auto__,output_checker23287,om_bootstrap$button$constructor23281,output_schema23284,state,input_schema23285,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23315 = output_checker23287.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23315)){
var error__15086__auto___23316 = temp__4425__auto___23315;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor23281","constructor23281",1652841876,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23316)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23284,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23316], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv__,output_schema23284,input_schema23285,input_checker23286,output_checker23287))
,schema.core.make_fn_schema.call(null,output_schema23284,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23285], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__23024__auto___23309){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23317 = arguments.length;
var i__6227__auto___23318 = (0);
while(true){
if((i__6227__auto___23318 < len__6226__auto___23317)){
args__6233__auto__.push((arguments[i__6227__auto___23318]));

var G__23319 = (i__6227__auto___23318 + (1));
i__6227__auto___23318 = G__23319;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});})(component_fnk__23024__auto___23309))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__23024__auto___23309){
return (function (data__23025__auto__,owner23280,p__23304){
var vec__23305 = p__23304;
var opts__23026__auto__ = cljs.core.nth.call(null,vec__23305,(0),null);
return component_fnk__23024__auto___23309.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner23280),new cljs.core.Keyword(null,"opts","opts",155075701),opts__23026__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23280,new cljs.core.Keyword(null,"data","data",-232669377),data__23025__auto__], null));
});})(component_fnk__23024__auto___23309))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__23024__auto___23309){
return (function (seq23301){
var G__23302 = cljs.core.first.call(null,seq23301);
var seq23301__$1 = cljs.core.next.call(null,seq23301);
var G__23303 = cljs.core.first.call(null,seq23301__$1);
var seq23301__$2 = cljs.core.next.call(null,seq23301__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23302,G__23303,seq23301__$2);
});})(component_fnk__23024__auto___23309))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args23306 = [];
var len__6226__auto___23320 = arguments.length;
var i__6227__auto___23321 = (0);
while(true){
if((i__6227__auto___23321 < len__6226__auto___23320)){
args23306.push((arguments[i__6227__auto___23321]));

var G__23322 = (i__6227__auto___23321 + (1));
i__6227__auto___23321 = G__23322;
continue;
} else {
}
break;
}

var G__23308 = args23306.length;
switch (G__23308) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23306.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22993__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22993__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22993__auto__,m23282){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22993__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m23282));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___23332 = schema.utils.use_fn_validation;
var output_schema23324_23333 = schema.core.Any;
var input_schema23325_23334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker23326_23335 = schema.core.checker.call(null,input_schema23325_23334);
var output_checker23327_23336 = schema.core.checker.call(null,output_schema23324_23333);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336){
return (function om_bootstrap$button$split(var_args){
var args__6233__auto__ = [];
var len__6226__auto___23337 = arguments.length;
var i__6227__auto___23338 = (0);
while(true){
if((i__6227__auto___23338 < len__6226__auto___23337)){
args__6233__auto__.push((arguments[i__6227__auto___23338]));

var G__23339 = (i__6227__auto___23338 + (1));
i__6227__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336){
return (function (G__23328,rest23329){
var validate__15084__auto__ = ufv___23332.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___23340 = cljs.core.list_STAR_.call(null,G__23328,rest23329);
var temp__4425__auto___23341 = input_checker23326_23335.call(null,args__15085__auto___23340);
if(cljs.core.truth_(temp__4425__auto___23341)){
var error__15086__auto___23342 = temp__4425__auto___23341;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23342)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23325_23334,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___23340,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23342], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__23328;
var children = rest23329;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___23343 = output_checker23327_23336.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___23343)){
var error__15086__auto___23344 = temp__4425__auto___23343;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___23344)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23324_23333,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___23344], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336){
return (function (seq23330){
var G__23331 = cljs.core.first.call(null,seq23330);
var seq23330__$1 = cljs.core.next.call(null,seq23330);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__23331,seq23330__$1);
});})(ufv___23332,output_schema23324_23333,input_schema23325_23334,input_checker23326_23335,output_checker23327_23336))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema23324_23333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23325_23334], null)));
