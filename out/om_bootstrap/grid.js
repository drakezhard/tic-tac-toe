// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___21591 = schema.utils.use_fn_validation;
var output_schema21582_21592 = om_bootstrap.types.Component;
var input_schema21583_21593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker21584_21594 = schema.core.checker.call(null,input_schema21583_21593);
var output_checker21585_21595 = schema.core.checker.call(null,output_schema21582_21592);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595){
return (function om_bootstrap$grid$grid(var_args){
var args__16616__auto__ = [];
var len__16609__auto___21596 = arguments.length;
var i__16610__auto___21597 = (0);
while(true){
if((i__16610__auto___21597 < len__16609__auto___21596)){
args__16616__auto__.push((arguments[i__16610__auto___21597]));

var G__21598 = (i__16610__auto___21597 + (1));
i__16610__auto___21597 = G__21598;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((1) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16617__auto__);
});})(ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595){
return (function (G__21586,rest21587){
var validate__19666__auto__ = ufv___21591.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21599 = cljs.core.list_STAR_.call(null,G__21586,rest21587);
var temp__4425__auto___21600 = input_checker21584_21594.call(null,args__19667__auto___21599);
if(cljs.core.truth_(temp__4425__auto___21600)){
var error__19668__auto___21601 = temp__4425__auto___21600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__19668__auto___21601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21583_21593,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21599,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21601], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var opts = G__21586;
var children = rest21587;
while(true){
var vec__21590 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__21590,(0),null);
var props = cljs.core.nth.call(null,vec__21590,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21602 = output_checker21585_21595.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21602)){
var error__19668__auto___21603 = temp__4425__auto___21602;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__19668__auto___21603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21582_21592,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21603], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595){
return (function (seq21588){
var G__21589 = cljs.core.first.call(null,seq21588);
var seq21588__$1 = cljs.core.next.call(null,seq21588);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__21589,seq21588__$1);
});})(ufv___21591,output_schema21582_21592,input_schema21583_21593,input_checker21584_21594,output_checker21585_21595))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema21582_21592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21583_21593], null)));
var ufv___21612 = schema.utils.use_fn_validation;
var output_schema21604_21613 = om_bootstrap.types.Component;
var input_schema21605_21614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker21606_21615 = schema.core.checker.call(null,input_schema21605_21614);
var output_checker21607_21616 = schema.core.checker.call(null,output_schema21604_21613);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616){
return (function om_bootstrap$grid$row(var_args){
var args__16616__auto__ = [];
var len__16609__auto___21617 = arguments.length;
var i__16610__auto___21618 = (0);
while(true){
if((i__16610__auto___21618 < len__16609__auto___21617)){
args__16616__auto__.push((arguments[i__16610__auto___21618]));

var G__21619 = (i__16610__auto___21618 + (1));
i__16610__auto___21618 = G__21619;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((1) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16617__auto__);
});})(ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616){
return (function (G__21608,rest21609){
var validate__19666__auto__ = ufv___21612.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21620 = cljs.core.list_STAR_.call(null,G__21608,rest21609);
var temp__4425__auto___21621 = input_checker21606_21615.call(null,args__19667__auto___21620);
if(cljs.core.truth_(temp__4425__auto___21621)){
var error__19668__auto___21622 = temp__4425__auto___21621;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__19668__auto___21622)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21605_21614,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21620,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21622], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var opts = G__21608;
var children = rest21609;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21623 = output_checker21607_21616.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21623)){
var error__19668__auto___21624 = temp__4425__auto___21623;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__19668__auto___21624)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21604_21613,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21624], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616){
return (function (seq21610){
var G__21611 = cljs.core.first.call(null,seq21610);
var seq21610__$1 = cljs.core.next.call(null,seq21610);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__21611,seq21610__$1);
});})(ufv___21612,output_schema21604_21613,input_schema21605_21614,input_checker21606_21615,output_checker21607_21616))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema21604_21613,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21605_21614], null)));
var ufv___21636 = schema.utils.use_fn_validation;
var output_schema21625_21637 = om_bootstrap.types.Component;
var input_schema21626_21638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker21627_21639 = schema.core.checker.call(null,input_schema21626_21638);
var output_checker21628_21640 = schema.core.checker.call(null,output_schema21625_21637);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640){
return (function om_bootstrap$grid$col(var_args){
var args__16616__auto__ = [];
var len__16609__auto___21641 = arguments.length;
var i__16610__auto___21642 = (0);
while(true){
if((i__16610__auto___21642 < len__16609__auto___21641)){
args__16616__auto__.push((arguments[i__16610__auto___21642]));

var G__21643 = (i__16610__auto___21642 + (1));
i__16610__auto___21642 = G__21643;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((1) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16617__auto__);
});})(ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640){
return (function (G__21629,rest21630){
var validate__19666__auto__ = ufv___21636.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21644 = cljs.core.list_STAR_.call(null,G__21629,rest21630);
var temp__4425__auto___21645 = input_checker21627_21639.call(null,args__19667__auto___21644);
if(cljs.core.truth_(temp__4425__auto___21645)){
var error__19668__auto___21646 = temp__4425__auto___21645;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__19668__auto___21646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21626_21638,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21644,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21646], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var opts = G__21629;
var children = rest21630;
while(true){
var vec__21633 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__21633,(0),null);
var props = cljs.core.nth.call(null,vec__21633,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__21633,bs,props,validate__19666__auto__,ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640){
return (function (p__21634){
var vec__21635 = p__21634;
var k = cljs.core.nth.call(null,vec__21635,(0),null);
var v = cljs.core.nth.call(null,vec__21635,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__21633,bs,props,validate__19666__auto__,ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21647 = output_checker21628_21640.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21647)){
var error__19668__auto___21648 = temp__4425__auto___21647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__19668__auto___21648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21625_21637,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21648], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640){
return (function (seq21631){
var G__21632 = cljs.core.first.call(null,seq21631);
var seq21631__$1 = cljs.core.next.call(null,seq21631);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__21632,seq21631__$1);
});})(ufv___21636,output_schema21625_21637,input_schema21626_21638,input_checker21627_21639,output_checker21628_21640))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema21625_21637,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21626_21638], null)));

//# sourceMappingURL=grid.js.map