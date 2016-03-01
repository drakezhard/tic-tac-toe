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
var ufv___17260 = schema.utils.use_fn_validation;
var output_schema17251_17261 = om_bootstrap.types.Component;
var input_schema17252_17262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker17253_17263 = schema.core.checker.call(null,input_schema17252_17262);
var output_checker17254_17264 = schema.core.checker.call(null,output_schema17251_17261);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264){
return (function om_bootstrap$grid$grid(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17265 = arguments.length;
var i__6227__auto___17266 = (0);
while(true){
if((i__6227__auto___17266 < len__6226__auto___17265)){
args__6233__auto__.push((arguments[i__6227__auto___17266]));

var G__17267 = (i__6227__auto___17266 + (1));
i__6227__auto___17266 = G__17267;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264){
return (function (G__17255,rest17256){
var validate__15084__auto__ = ufv___17260.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17268 = cljs.core.list_STAR_.call(null,G__17255,rest17256);
var temp__4425__auto___17269 = input_checker17253_17263.call(null,args__15085__auto___17268);
if(cljs.core.truth_(temp__4425__auto___17269)){
var error__15086__auto___17270 = temp__4425__auto___17269;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__15086__auto___17270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17252_17262,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17268,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17270], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__17255;
var children = rest17256;
while(true){
var vec__17259 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__17259,(0),null);
var props = cljs.core.nth.call(null,vec__17259,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17271 = output_checker17254_17264.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17271)){
var error__15086__auto___17272 = temp__4425__auto___17271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__15086__auto___17272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17251_17261,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17272], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264){
return (function (seq17257){
var G__17258 = cljs.core.first.call(null,seq17257);
var seq17257__$1 = cljs.core.next.call(null,seq17257);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__17258,seq17257__$1);
});})(ufv___17260,output_schema17251_17261,input_schema17252_17262,input_checker17253_17263,output_checker17254_17264))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema17251_17261,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17252_17262], null)));
var ufv___17281 = schema.utils.use_fn_validation;
var output_schema17273_17282 = om_bootstrap.types.Component;
var input_schema17274_17283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker17275_17284 = schema.core.checker.call(null,input_schema17274_17283);
var output_checker17276_17285 = schema.core.checker.call(null,output_schema17273_17282);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285){
return (function om_bootstrap$grid$row(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17286 = arguments.length;
var i__6227__auto___17287 = (0);
while(true){
if((i__6227__auto___17287 < len__6226__auto___17286)){
args__6233__auto__.push((arguments[i__6227__auto___17287]));

var G__17288 = (i__6227__auto___17287 + (1));
i__6227__auto___17287 = G__17288;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285){
return (function (G__17277,rest17278){
var validate__15084__auto__ = ufv___17281.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17289 = cljs.core.list_STAR_.call(null,G__17277,rest17278);
var temp__4425__auto___17290 = input_checker17275_17284.call(null,args__15085__auto___17289);
if(cljs.core.truth_(temp__4425__auto___17290)){
var error__15086__auto___17291 = temp__4425__auto___17290;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__15086__auto___17291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17274_17283,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17289,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17291], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__17277;
var children = rest17278;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17292 = output_checker17276_17285.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17292)){
var error__15086__auto___17293 = temp__4425__auto___17292;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__15086__auto___17293)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17273_17282,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17293], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285){
return (function (seq17279){
var G__17280 = cljs.core.first.call(null,seq17279);
var seq17279__$1 = cljs.core.next.call(null,seq17279);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__17280,seq17279__$1);
});})(ufv___17281,output_schema17273_17282,input_schema17274_17283,input_checker17275_17284,output_checker17276_17285))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema17273_17282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17274_17283], null)));
var ufv___17305 = schema.utils.use_fn_validation;
var output_schema17294_17306 = om_bootstrap.types.Component;
var input_schema17295_17307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker17296_17308 = schema.core.checker.call(null,input_schema17295_17307);
var output_checker17297_17309 = schema.core.checker.call(null,output_schema17294_17306);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309){
return (function om_bootstrap$grid$col(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17310 = arguments.length;
var i__6227__auto___17311 = (0);
while(true){
if((i__6227__auto___17311 < len__6226__auto___17310)){
args__6233__auto__.push((arguments[i__6227__auto___17311]));

var G__17312 = (i__6227__auto___17311 + (1));
i__6227__auto___17311 = G__17312;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});})(ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309){
return (function (G__17298,rest17299){
var validate__15084__auto__ = ufv___17305.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17313 = cljs.core.list_STAR_.call(null,G__17298,rest17299);
var temp__4425__auto___17314 = input_checker17296_17308.call(null,args__15085__auto___17313);
if(cljs.core.truth_(temp__4425__auto___17314)){
var error__15086__auto___17315 = temp__4425__auto___17314;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__15086__auto___17315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17295_17307,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17313,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17315], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var opts = G__17298;
var children = rest17299;
while(true){
var vec__17302 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__17302,(0),null);
var props = cljs.core.nth.call(null,vec__17302,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__17302,bs,props,validate__15084__auto__,ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309){
return (function (p__17303){
var vec__17304 = p__17303;
var k = cljs.core.nth.call(null,vec__17304,(0),null);
var v = cljs.core.nth.call(null,vec__17304,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__17302,bs,props,validate__15084__auto__,ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17316 = output_checker17297_17309.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17316)){
var error__15086__auto___17317 = temp__4425__auto___17316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__15086__auto___17317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17294_17306,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17317], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309){
return (function (seq17300){
var G__17301 = cljs.core.first.call(null,seq17300);
var seq17300__$1 = cljs.core.next.call(null,seq17300);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__17301,seq17300__$1);
});})(ufv___17305,output_schema17294_17306,input_schema17295_17307,input_checker17296_17308,output_checker17297_17309))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema17294_17306,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17295_17307], null)));
