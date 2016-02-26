// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___21656 = schema.utils.use_fn_validation;
var output_schema21651_21657 = schema.core.Any;
var input_schema21652_21658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker21653_21659 = schema.core.checker.call(null,input_schema21652_21658);
var output_checker21654_21660 = schema.core.checker.call(null,output_schema21651_21657);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660){
return (function om_bootstrap$types$schema_keys(G__21655){
var validate__19666__auto__ = ufv___21656.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21655], null);
var temp__4425__auto___21662 = input_checker21653_21659.call(null,args__19667__auto___21661);
if(cljs.core.truth_(temp__4425__auto___21662)){
var error__19668__auto___21663 = temp__4425__auto___21662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__19668__auto___21663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21652_21658,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21661,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21663], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var schema__$1 = G__21655;
while(true){
return cljs.core.map.call(null,((function (validate__19666__auto__,ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__19666__auto__,ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21664 = output_checker21654_21660.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21664)){
var error__19668__auto___21665 = temp__4425__auto___21664;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__19668__auto___21665)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21651_21657,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21665], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema21651_21657,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21652_21658], null)));
var ufv___21671 = schema.utils.use_fn_validation;
var output_schema21666_21672 = schema.core.Any;
var input_schema21667_21673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21668_21674 = schema.core.checker.call(null,input_schema21667_21673);
var output_checker21669_21675 = schema.core.checker.call(null,output_schema21666_21672);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___21671,output_schema21666_21672,input_schema21667_21673,input_checker21668_21674,output_checker21669_21675){
return (function om_bootstrap$types$at_least(G__21670){
var validate__19666__auto__ = ufv___21671.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21670], null);
var temp__4425__auto___21677 = input_checker21668_21674.call(null,args__19667__auto___21676);
if(cljs.core.truth_(temp__4425__auto___21677)){
var error__19668__auto___21678 = temp__4425__auto___21677;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__19668__auto___21678)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21667_21673,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21676,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21678], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var schema__$1 = G__21670;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21679 = output_checker21669_21675.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21679)){
var error__19668__auto___21680 = temp__4425__auto___21679;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__19668__auto___21680)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21666_21672,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21680], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21671,output_schema21666_21672,input_schema21667_21673,input_checker21668_21674,output_checker21669_21675))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema21666_21672,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21667_21673], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 *   the incoming schema has one of the the keys from BootstrapClass,
 *   that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___21696 = schema.utils.use_fn_validation;
var output_schema21681_21697 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema21682_21698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema21687_21699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21683_21700 = schema.core.checker.call(null,input_schema21682_21698);
var output_checker21684_21701 = schema.core.checker.call(null,output_schema21681_21697);
var input_checker21688_21702 = schema.core.checker.call(null,input_schema21687_21699);
var output_checker21689_21703 = schema.core.checker.call(null,output_schema21681_21697);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703){
return (function om_bootstrap$types$separate(var_args){
var args21693 = [];
var len__16609__auto___21704 = arguments.length;
var i__16610__auto___21705 = (0);
while(true){
if((i__16610__auto___21705 < len__16609__auto___21704)){
args21693.push((arguments[i__16610__auto___21705]));

var G__21706 = (i__16610__auto___21705 + (1));
i__16610__auto___21705 = G__21706;
continue;
} else {
}
break;
}

var G__21695 = args21693.length;
switch (G__21695) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21693.length)].join('')));

}
});})(ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703){
return (function (G__21685,G__21686){
var validate__19666__auto__ = ufv___21696.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21685,G__21686], null);
var temp__4425__auto___21709 = input_checker21683_21700.call(null,args__19667__auto___21708);
if(cljs.core.truth_(temp__4425__auto___21709)){
var error__19668__auto___21710 = temp__4425__auto___21709;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__19668__auto___21710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21682_21698,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21708,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21710], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var schema__$1 = G__21685;
var opts = G__21686;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21711 = output_checker21684_21701.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21711)){
var error__19668__auto___21712 = temp__4425__auto___21711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__19668__auto___21712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21681_21697,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21712], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703){
return (function (G__21690,G__21691,G__21692){
var validate__19666__auto__ = ufv___21696.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21690,G__21691,G__21692], null);
var temp__4425__auto___21714 = input_checker21688_21702.call(null,args__19667__auto___21713);
if(cljs.core.truth_(temp__4425__auto___21714)){
var error__19668__auto___21715 = temp__4425__auto___21714;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__19668__auto___21715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21687_21699,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21713,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21715], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var schema__$1 = G__21690;
var opts = G__21691;
var defaults = G__21692;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21716 = output_checker21689_21703.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21716)){
var error__19668__auto___21717 = temp__4425__auto___21716;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__19668__auto___21717)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21681_21697,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21717], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21696,output_schema21681_21697,input_schema21682_21698,input_schema21687_21699,input_checker21683_21700,output_checker21684_21701,input_checker21688_21702,output_checker21689_21703))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema21681_21697,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21682_21698,input_schema21687_21699], null)));
var ufv___21735 = schema.utils.use_fn_validation;
var output_schema21718_21736 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema21719_21737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker21720_21738 = schema.core.checker.call(null,input_schema21719_21737);
var output_checker21721_21739 = schema.core.checker.call(null,output_schema21718_21736);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___21735,output_schema21718_21736,input_schema21719_21737,input_checker21720_21738,output_checker21721_21739){
return (function om_bootstrap$types$bs_class_set(G__21722){
var validate__19666__auto__ = ufv___21735.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21722], null);
var temp__4425__auto___21741 = input_checker21720_21738.call(null,args__19667__auto___21740);
if(cljs.core.truth_(temp__4425__auto___21741)){
var error__19668__auto___21742 = temp__4425__auto___21741;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__19668__auto___21742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21719_21737,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21740,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21742], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var G__21730 = G__21722;
var map__21731 = G__21730;
var map__21731__$1 = ((((!((map__21731 == null)))?((((map__21731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21731):map__21731);
var bs_class = cljs.core.get.call(null,map__21731__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__21731__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__21731__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__21730__$1 = G__21730;
while(true){
var map__21733 = G__21730__$1;
var map__21733__$1 = ((((!((map__21733 == null)))?((((map__21733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21733):map__21733);
var bs_class__$1 = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4423__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var klass = temp__4423__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4425__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var size = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var style = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21743 = output_checker21721_21739.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21743)){
var error__19668__auto___21744 = temp__4425__auto___21743;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__19668__auto___21744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21718_21736,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21744], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21735,output_schema21718_21736,input_schema21719_21737,input_checker21720_21738,output_checker21721_21739))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema21718_21736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21719_21737], null)));

//# sourceMappingURL=types.js.map