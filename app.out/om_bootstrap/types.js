// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___17160 = schema.utils.use_fn_validation;
var output_schema17155_17161 = schema.core.Any;
var input_schema17156_17162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker17157_17163 = schema.core.checker.call(null,input_schema17156_17162);
var output_checker17158_17164 = schema.core.checker.call(null,output_schema17155_17161);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___17160,output_schema17155_17161,input_schema17156_17162,input_checker17157_17163,output_checker17158_17164){
return (function om_bootstrap$types$schema_keys(G__17159){
var validate__15084__auto__ = ufv___17160.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17159], null);
var temp__4425__auto___17166 = input_checker17157_17163.call(null,args__15085__auto___17165);
if(cljs.core.truth_(temp__4425__auto___17166)){
var error__15086__auto___17167 = temp__4425__auto___17166;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__15086__auto___17167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17156_17162,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17165,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17167], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var schema__$1 = G__17159;
while(true){
return cljs.core.map.call(null,((function (validate__15084__auto__,ufv___17160,output_schema17155_17161,input_schema17156_17162,input_checker17157_17163,output_checker17158_17164){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__15084__auto__,ufv___17160,output_schema17155_17161,input_schema17156_17162,input_checker17157_17163,output_checker17158_17164))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17168 = output_checker17158_17164.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17168)){
var error__15086__auto___17169 = temp__4425__auto___17168;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__15086__auto___17169)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17155_17161,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17169], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17160,output_schema17155_17161,input_schema17156_17162,input_checker17157_17163,output_checker17158_17164))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema17155_17161,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17156_17162], null)));
var ufv___17175 = schema.utils.use_fn_validation;
var output_schema17170_17176 = schema.core.Any;
var input_schema17171_17177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17172_17178 = schema.core.checker.call(null,input_schema17171_17177);
var output_checker17173_17179 = schema.core.checker.call(null,output_schema17170_17176);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___17175,output_schema17170_17176,input_schema17171_17177,input_checker17172_17178,output_checker17173_17179){
return (function om_bootstrap$types$at_least(G__17174){
var validate__15084__auto__ = ufv___17175.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17174], null);
var temp__4425__auto___17181 = input_checker17172_17178.call(null,args__15085__auto___17180);
if(cljs.core.truth_(temp__4425__auto___17181)){
var error__15086__auto___17182 = temp__4425__auto___17181;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__15086__auto___17182)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17171_17177,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17180,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17182], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var schema__$1 = G__17174;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17183 = output_checker17173_17179.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17183)){
var error__15086__auto___17184 = temp__4425__auto___17183;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__15086__auto___17184)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17170_17176,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17184], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17175,output_schema17170_17176,input_schema17171_17177,input_checker17172_17178,output_checker17173_17179))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema17170_17176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17171_17177], null)));
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
var ufv___17200 = schema.utils.use_fn_validation;
var output_schema17185_17201 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema17186_17202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema17191_17203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17187_17204 = schema.core.checker.call(null,input_schema17186_17202);
var output_checker17188_17205 = schema.core.checker.call(null,output_schema17185_17201);
var input_checker17192_17206 = schema.core.checker.call(null,input_schema17191_17203);
var output_checker17193_17207 = schema.core.checker.call(null,output_schema17185_17201);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207){
return (function om_bootstrap$types$separate(var_args){
var args17197 = [];
var len__6226__auto___17208 = arguments.length;
var i__6227__auto___17209 = (0);
while(true){
if((i__6227__auto___17209 < len__6226__auto___17208)){
args17197.push((arguments[i__6227__auto___17209]));

var G__17210 = (i__6227__auto___17209 + (1));
i__6227__auto___17209 = G__17210;
continue;
} else {
}
break;
}

var G__17199 = args17197.length;
switch (G__17199) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17197.length)].join('')));

}
});})(ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207){
return (function (G__17189,G__17190){
var validate__15084__auto__ = ufv___17200.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17189,G__17190], null);
var temp__4425__auto___17213 = input_checker17187_17204.call(null,args__15085__auto___17212);
if(cljs.core.truth_(temp__4425__auto___17213)){
var error__15086__auto___17214 = temp__4425__auto___17213;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__15086__auto___17214)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17186_17202,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17212,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17214], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var schema__$1 = G__17189;
var opts = G__17190;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17215 = output_checker17188_17205.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17215)){
var error__15086__auto___17216 = temp__4425__auto___17215;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__15086__auto___17216)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17185_17201,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17216], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207){
return (function (G__17194,G__17195,G__17196){
var validate__15084__auto__ = ufv___17200.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17217 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17194,G__17195,G__17196], null);
var temp__4425__auto___17218 = input_checker17192_17206.call(null,args__15085__auto___17217);
if(cljs.core.truth_(temp__4425__auto___17218)){
var error__15086__auto___17219 = temp__4425__auto___17218;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__15086__auto___17219)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17191_17203,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17217,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17219], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var schema__$1 = G__17194;
var opts = G__17195;
var defaults = G__17196;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17220 = output_checker17193_17207.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17220)){
var error__15086__auto___17221 = temp__4425__auto___17220;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__15086__auto___17221)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17185_17201,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17221], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17200,output_schema17185_17201,input_schema17186_17202,input_schema17191_17203,input_checker17187_17204,output_checker17188_17205,input_checker17192_17206,output_checker17193_17207))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema17185_17201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17186_17202,input_schema17191_17203], null)));
var ufv___17239 = schema.utils.use_fn_validation;
var output_schema17222_17240 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema17223_17241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker17224_17242 = schema.core.checker.call(null,input_schema17223_17241);
var output_checker17225_17243 = schema.core.checker.call(null,output_schema17222_17240);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___17239,output_schema17222_17240,input_schema17223_17241,input_checker17224_17242,output_checker17225_17243){
return (function om_bootstrap$types$bs_class_set(G__17226){
var validate__15084__auto__ = ufv___17239.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17226], null);
var temp__4425__auto___17245 = input_checker17224_17242.call(null,args__15085__auto___17244);
if(cljs.core.truth_(temp__4425__auto___17245)){
var error__15086__auto___17246 = temp__4425__auto___17245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__15086__auto___17246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17223_17241,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17244,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17246], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var G__17234 = G__17226;
var map__17235 = G__17234;
var map__17235__$1 = ((((!((map__17235 == null)))?((((map__17235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17235):map__17235);
var bs_class = cljs.core.get.call(null,map__17235__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__17235__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__17235__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__17234__$1 = G__17234;
while(true){
var map__17237 = G__17234__$1;
var map__17237__$1 = ((((!((map__17237 == null)))?((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17237):map__17237);
var bs_class__$1 = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17247 = output_checker17225_17243.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17247)){
var error__15086__auto___17248 = temp__4425__auto___17247;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__15086__auto___17248)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17222_17240,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17248], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17239,output_schema17222_17240,input_schema17223_17241,input_checker17224_17242,output_checker17225_17243))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema17222_17240,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17223_17241], null)));
