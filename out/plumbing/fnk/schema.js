// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__20052__20053__auto__){
if(!((p1__20052__20053__auto__ == null))){
if((false) || (p1__20052__20053__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__20052__20053__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__20052__20053__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__20052__20053__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__29200_SHARP_){
return (cljs.core.val.call(null,p1__29200_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__29202 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__29202,(0),null);
var v = cljs.core.nth.call(null,vec__29202,(1),null);
var p = vec__29202;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___29208 = schema.utils.use_fn_validation;
var output_schema29203_29209 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema29204_29210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker29205_29211 = schema.core.checker.call(null,input_schema29204_29210);
var output_checker29206_29212 = schema.core.checker.call(null,output_schema29203_29209);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___29208,output_schema29203_29209,input_schema29204_29210,input_checker29205_29211,output_checker29206_29212){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__29207){
var validate__19644__auto__ = ufv___29208.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29207], null);
var temp__4425__auto___29214 = input_checker29205_29211.call(null,args__19645__auto___29213);
if(cljs.core.truth_(temp__4425__auto___29214)){
var error__19646__auto___29215 = temp__4425__auto___29214;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__19646__auto___29215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29204_29210,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29213,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29215], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var k = G__29207;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29216 = output_checker29206_29212.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29216)){
var error__19646__auto___29217 = temp__4425__auto___29216;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__19646__auto___29217)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29203_29209,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29217], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29208,output_schema29203_29209,input_schema29204_29210,input_checker29205_29211,output_checker29206_29212))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema29203_29209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29204_29210], null)));
var ufv___29223 = schema.utils.use_fn_validation;
var output_schema29218_29224 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema29219_29225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker29220_29226 = schema.core.checker.call(null,input_schema29219_29225);
var output_checker29221_29227 = schema.core.checker.call(null,output_schema29218_29224);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___29223,output_schema29218_29224,input_schema29219_29225,input_checker29220_29226,output_checker29221_29227){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__29222){
var validate__19644__auto__ = ufv___29223.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29222], null);
var temp__4425__auto___29229 = input_checker29220_29226.call(null,args__19645__auto___29228);
if(cljs.core.truth_(temp__4425__auto___29229)){
var error__19646__auto___29230 = temp__4425__auto___29229;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__19646__auto___29230)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29219_29225,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29228,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29230], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var s = G__29222;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29231 = output_checker29221_29227.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29231)){
var error__19646__auto___29232 = temp__4425__auto___29231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__19646__auto___29232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29218_29224,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29232], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29223,output_schema29218_29224,input_schema29219_29225,input_checker29220_29226,output_checker29221_29227))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema29218_29224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29219_29225], null)));
var ufv___29238 = schema.utils.use_fn_validation;
var output_schema29233_29239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema29234_29240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker29235_29241 = schema.core.checker.call(null,input_schema29234_29240);
var output_checker29236_29242 = schema.core.checker.call(null,output_schema29233_29239);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___29238,output_schema29233_29239,input_schema29234_29240,input_checker29235_29241,output_checker29236_29242){
return (function plumbing$fnk$schema$split_schema_keys(G__29237){
var validate__19644__auto__ = ufv___29238.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29237], null);
var temp__4425__auto___29244 = input_checker29235_29241.call(null,args__19645__auto___29243);
if(cljs.core.truth_(temp__4425__auto___29244)){
var error__19646__auto___29245 = temp__4425__auto___29244;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__19646__auto___29245)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29234_29240,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29243,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29245], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var s = G__29237;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29246 = output_checker29236_29242.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29246)){
var error__19646__auto___29247 = temp__4425__auto___29246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__19646__auto___29247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29233_29239,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29247], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29238,output_schema29233_29239,input_schema29234_29240,input_checker29235_29241,output_checker29236_29242))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema29233_29239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29234_29240], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__16615__auto__ = [];
var len__16608__auto___29255 = arguments.length;
var i__16609__auto___29256 = (0);
while(true){
if((i__16609__auto___29256 < len__16608__auto___29255)){
args__16615__auto__.push((arguments[i__16609__auto___29256]));

var G__29257 = (i__16609__auto___29256 + (1));
i__16609__auto___29256 = G__29257;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((3) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16616__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__29252){
var vec__29253 = p__29252;
var k = cljs.core.nth.call(null,vec__29253,(0),null);
var v = cljs.core.nth.call(null,vec__29253,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29254 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__29254,(0),null);
var ov = cljs.core.nth.call(null,vec__29254,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq29248){
var G__29249 = cljs.core.first.call(null,seq29248);
var seq29248__$1 = cljs.core.next.call(null,seq29248);
var G__29250 = cljs.core.first.call(null,seq29248__$1);
var seq29248__$2 = cljs.core.next.call(null,seq29248__$1);
var G__29251 = cljs.core.first.call(null,seq29248__$2);
var seq29248__$3 = cljs.core.next.call(null,seq29248__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__29249,G__29250,G__29251,seq29248__$3);
});
var ufv___29265 = schema.utils.use_fn_validation;
var output_schema29259_29266 = plumbing.fnk.schema.InputSchema;
var input_schema29260_29267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker29261_29268 = schema.core.checker.call(null,input_schema29260_29267);
var output_checker29262_29269 = schema.core.checker.call(null,output_schema29259_29266);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269){
return (function plumbing$fnk$schema$union_input_schemata(G__29263,G__29264){
var validate__19644__auto__ = ufv___29265.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29263,G__29264], null);
var temp__4425__auto___29271 = input_checker29261_29268.call(null,args__19645__auto___29270);
if(cljs.core.truth_(temp__4425__auto___29271)){
var error__19646__auto___29272 = temp__4425__auto___29271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__19646__auto___29272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29260_29267,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29270,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29272], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var i1 = G__29263;
var i2 = G__29264;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269){
return (function (p1__29258_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__29258_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__29258_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269))
,((function (validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269))
,((function (validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__15538__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__15538__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__15538__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__19644__auto__,ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29273 = output_checker29262_29269.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29273)){
var error__19646__auto___29274 = temp__4425__auto___29273;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__19646__auto___29274)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29259_29266,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29274], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29265,output_schema29259_29266,input_schema29260_29267,input_checker29261_29268,output_checker29262_29269))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema29259_29266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29260_29267], null)));
var ufv___29280 = schema.utils.use_fn_validation;
var output_schema29275_29281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema29276_29282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker29277_29283 = schema.core.checker.call(null,input_schema29276_29282);
var output_checker29278_29284 = schema.core.checker.call(null,output_schema29275_29281);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___29280,output_schema29275_29281,input_schema29276_29282,input_checker29277_29283,output_checker29278_29284){
return (function plumbing$fnk$schema$required_toplevel_keys(G__29279){
var validate__19644__auto__ = ufv___29280.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29279], null);
var temp__4425__auto___29286 = input_checker29277_29283.call(null,args__19645__auto___29285);
if(cljs.core.truth_(temp__4425__auto___29286)){
var error__19646__auto___29287 = temp__4425__auto___29286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__19646__auto___29287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29276_29282,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29285,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29287], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var input_schema = G__29279;
while(true){
return cljs.core.keep.call(null,((function (validate__19644__auto__,ufv___29280,output_schema29275_29281,input_schema29276_29282,input_checker29277_29283,output_checker29278_29284){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__19644__auto__,ufv___29280,output_schema29275_29281,input_schema29276_29282,input_checker29277_29283,output_checker29278_29284))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29288 = output_checker29278_29284.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29288)){
var error__19646__auto___29289 = temp__4425__auto___29288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__19646__auto___29289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29275_29281,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29289], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29280,output_schema29275_29281,input_schema29276_29282,input_checker29277_29283,output_checker29278_29284))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema29275_29281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29276_29282], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16322__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__29298(s__29299){
return (new cljs.core.LazySeq(null,(function (){
var s__29299__$1 = s__29299;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29299__$1);
if(temp__4425__auto__){
var s__29299__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29299__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29299__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29301 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29300 = (0);
while(true){
if((i__29300 < size__16321__auto__)){
var vec__29304 = cljs.core._nth.call(null,c__16320__auto__,i__29300);
var k = cljs.core.nth.call(null,vec__29304,(0),null);
var v = cljs.core.nth.call(null,vec__29304,(1),null);
cljs.core.chunk_append.call(null,b__29301,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__29306 = (i__29300 + (1));
i__29300 = G__29306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29301),plumbing$fnk$schema$guess_expr_output_schema_$_iter__29298.call(null,cljs.core.chunk_rest.call(null,s__29299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29301),null);
}
} else {
var vec__29305 = cljs.core.first.call(null,s__29299__$2);
var k = cljs.core.nth.call(null,vec__29305,(0),null);
var v = cljs.core.nth.call(null,vec__29305,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__29298.call(null,cljs.core.rest.call(null,s__29299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16322__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16322__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__29315(s__29316){
return (new cljs.core.LazySeq(null,(function (){
var s__29316__$1 = s__29316;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29316__$1);
if(temp__4425__auto__){
var s__29316__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29316__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29316__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29318 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29317 = (0);
while(true){
if((i__29317 < size__16321__auto__)){
var vec__29321 = cljs.core._nth.call(null,c__16320__auto__,i__29317);
var k = cljs.core.nth.call(null,vec__29321,(0),null);
var v = cljs.core.nth.call(null,vec__29321,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__15550__auto__ = required_QMARK_;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__29318,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__29323 = (i__29317 + (1));
i__29317 = G__29323;
continue;
} else {
var G__29324 = (i__29317 + (1));
i__29317 = G__29324;
continue;
}
} else {
var G__29325 = (i__29317 + (1));
i__29317 = G__29325;
continue;
}
} else {
var G__29326 = (i__29317 + (1));
i__29317 = G__29326;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29318),plumbing$fnk$schema$schema_diff_$_iter__29315.call(null,cljs.core.chunk_rest.call(null,s__29316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29318),null);
}
} else {
var vec__29322 = cljs.core.first.call(null,s__29316__$2);
var k = cljs.core.nth.call(null,vec__29322,(0),null);
var v = cljs.core.nth.call(null,vec__29322,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__15550__auto__ = required_QMARK_;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__29315.call(null,cljs.core.rest.call(null,s__29316__$2)));
} else {
var G__29327 = cljs.core.rest.call(null,s__29316__$2);
s__29316__$1 = G__29327;
continue;
}
} else {
var G__29328 = cljs.core.rest.call(null,s__29316__$2);
s__29316__$1 = G__29328;
continue;
}
} else {
var G__29329 = cljs.core.rest.call(null,s__29316__$2);
s__29316__$1 = G__29329;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16322__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___29352 = schema.utils.use_fn_validation;
var output_schema29330_29353 = schema.core.Any;
var input_schema29331_29354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker29332_29355 = schema.core.checker.call(null,input_schema29331_29354);
var output_checker29333_29356 = schema.core.checker.call(null,output_schema29330_29353);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___29352,output_schema29330_29353,input_schema29331_29354,input_checker29332_29355,output_checker29333_29356){
return (function plumbing$fnk$schema$compose_schemata(G__29334,G__29335){
var validate__19644__auto__ = true;
if(validate__19644__auto__){
var args__19645__auto___29357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29334,G__29335], null);
var temp__4425__auto___29358 = input_checker29332_29355.call(null,args__19645__auto___29357);
if(cljs.core.truth_(temp__4425__auto___29358)){
var error__19646__auto___29359 = temp__4425__auto___29358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__19646__auto___29359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29331_29354,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29357,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29359], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var G__29346 = G__29334;
var vec__29348 = G__29346;
var i2 = cljs.core.nth.call(null,vec__29348,(0),null);
var o2 = cljs.core.nth.call(null,vec__29348,(1),null);
var G__29347 = G__29335;
var vec__29349 = G__29347;
var i1 = cljs.core.nth.call(null,vec__29349,(0),null);
var o1 = cljs.core.nth.call(null,vec__29349,(1),null);
var G__29346__$1 = G__29346;
var G__29347__$1 = G__29347;
while(true){
var vec__29350 = G__29346__$1;
var i2__$1 = cljs.core.nth.call(null,vec__29350,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__29350,(1),null);
var vec__29351 = G__29347__$1;
var i1__$1 = cljs.core.nth.call(null,vec__29351,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__29351,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__19644__auto__){
var temp__4425__auto___29360 = output_checker29333_29356.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29360)){
var error__19646__auto___29361 = temp__4425__auto___29360;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__19646__auto___29361)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29330_29353,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29361], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29352,output_schema29330_29353,input_schema29331_29354,input_checker29332_29355,output_checker29333_29356))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema29330_29353,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29331_29354], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___29440 = schema.utils.use_fn_validation;
var output_schema29362_29441 = schema.core.Any;
var input_schema29363_29442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker29364_29443 = schema.core.checker.call(null,input_schema29363_29442);
var output_checker29365_29444 = schema.core.checker.call(null,output_schema29362_29441);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function plumbing$fnk$schema$split_schema(G__29366,G__29367){
var validate__19644__auto__ = ufv___29440.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29366,G__29367], null);
var temp__4425__auto___29446 = input_checker29364_29443.call(null,args__19645__auto___29445);
if(cljs.core.truth_(temp__4425__auto___29446)){
var error__19646__auto___29447 = temp__4425__auto___29446;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__19646__auto___29447)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29363_29442,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29445,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29447], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var s = G__29366;
var ks = G__29367;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__16322__auto__ = ((function (ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function plumbing$fnk$schema$split_schema_$_iter__29404(s__29405){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function (){
var s__29405__$1 = s__29405;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29405__$1);
if(temp__4425__auto__){
var s__29405__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29405__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29405__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29407 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29406 = (0);
while(true){
if((i__29406 < size__16321__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__16320__auto__,i__29406);
cljs.core.chunk_append.call(null,b__29407,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16322__auto__ = ((function (i__29406,in_QMARK_,c__16320__auto__,size__16321__auto__,b__29407,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29424(s__29425){
return (new cljs.core.LazySeq(null,((function (i__29406,in_QMARK_,c__16320__auto__,size__16321__auto__,b__29407,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function (){
var s__29425__$1 = s__29425;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29425__$1);
if(temp__4425__auto____$1){
var s__29425__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29425__$2)){
var c__16320__auto____$1 = cljs.core.chunk_first.call(null,s__29425__$2);
var size__16321__auto____$1 = cljs.core.count.call(null,c__16320__auto____$1);
var b__29427 = cljs.core.chunk_buffer.call(null,size__16321__auto____$1);
if((function (){var i__29426 = (0);
while(true){
if((i__29426 < size__16321__auto____$1)){
var vec__29430 = cljs.core._nth.call(null,c__16320__auto____$1,i__29426);
var k = cljs.core.nth.call(null,vec__29430,(0),null);
var v = cljs.core.nth.call(null,vec__29430,(1),null);
if(cljs.core.truth_((function (){var and__15538__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__15538__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__29427,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__29448 = (i__29426 + (1));
i__29426 = G__29448;
continue;
} else {
var G__29449 = (i__29426 + (1));
i__29426 = G__29449;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29427),plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29424.call(null,cljs.core.chunk_rest.call(null,s__29425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29427),null);
}
} else {
var vec__29431 = cljs.core.first.call(null,s__29425__$2);
var k = cljs.core.nth.call(null,vec__29431,(0),null);
var v = cljs.core.nth.call(null,vec__29431,(1),null);
if(cljs.core.truth_((function (){var and__15538__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__15538__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29424.call(null,cljs.core.rest.call(null,s__29425__$2)));
} else {
var G__29450 = cljs.core.rest.call(null,s__29425__$2);
s__29425__$1 = G__29450;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__29406,in_QMARK_,c__16320__auto__,size__16321__auto__,b__29407,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
,null,null));
});})(i__29406,in_QMARK_,c__16320__auto__,size__16321__auto__,b__29407,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
;
return iter__16322__auto__.call(null,s);
})()));

var G__29451 = (i__29406 + (1));
i__29406 = G__29451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29407),plumbing$fnk$schema$split_schema_$_iter__29404.call(null,cljs.core.chunk_rest.call(null,s__29405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29407),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__29405__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16322__auto__ = ((function (in_QMARK_,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29432(s__29433){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444){
return (function (){
var s__29433__$1 = s__29433;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29433__$1);
if(temp__4425__auto____$1){
var s__29433__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29433__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29433__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29435 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29434 = (0);
while(true){
if((i__29434 < size__16321__auto__)){
var vec__29438 = cljs.core._nth.call(null,c__16320__auto__,i__29434);
var k = cljs.core.nth.call(null,vec__29438,(0),null);
var v = cljs.core.nth.call(null,vec__29438,(1),null);
if(cljs.core.truth_((function (){var and__15538__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__15538__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__29435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__29452 = (i__29434 + (1));
i__29434 = G__29452;
continue;
} else {
var G__29453 = (i__29434 + (1));
i__29434 = G__29453;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29435),plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29432.call(null,cljs.core.chunk_rest.call(null,s__29433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29435),null);
}
} else {
var vec__29439 = cljs.core.first.call(null,s__29433__$2);
var k = cljs.core.nth.call(null,vec__29439,(0),null);
var v = cljs.core.nth.call(null,vec__29439,(1),null);
if(cljs.core.truth_((function (){var and__15538__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__15538__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__29404_$_iter__29432.call(null,cljs.core.rest.call(null,s__29433__$2)));
} else {
var G__29454 = cljs.core.rest.call(null,s__29433__$2);
s__29433__$1 = G__29454;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
,null,null));
});})(in_QMARK_,s__29405__$2,temp__4425__auto__,ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
;
return iter__16322__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__29404.call(null,cljs.core.rest.call(null,s__29405__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
,null,null));
});})(ks__$1,validate__19644__auto__,ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
;
return iter__16322__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29455 = output_checker29365_29444.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29455)){
var error__19646__auto___29456 = temp__4425__auto___29455;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__19646__auto___29456)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29362_29441,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29456], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29440,output_schema29362_29441,input_schema29363_29442,input_checker29364_29443,output_checker29365_29444))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema29362_29441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29363_29442], null)));
var ufv___29487 = schema.utils.use_fn_validation;
var output_schema29457_29488 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema29458_29489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker29459_29490 = schema.core.checker.call(null,input_schema29458_29489);
var output_checker29460_29491 = schema.core.checker.call(null,output_schema29457_29488);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___29487,output_schema29457_29488,input_schema29458_29489,input_checker29459_29490,output_checker29460_29491){
return (function plumbing$fnk$schema$sequence_schemata(G__29461,G__29462){
var validate__19644__auto__ = ufv___29487.get_cell();
if(cljs.core.truth_(validate__19644__auto__)){
var args__19645__auto___29492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29461,G__29462], null);
var temp__4425__auto___29493 = input_checker29459_29490.call(null,args__19645__auto___29492);
if(cljs.core.truth_(temp__4425__auto___29493)){
var error__19646__auto___29494 = temp__4425__auto___29493;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__19646__auto___29494)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29458_29489,new cljs.core.Keyword(null,"value","value",305978217),args__19645__auto___29492,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29494], null));
} else {
}
} else {
}

var o__19647__auto__ = (function (){var G__29478 = G__29461;
var vec__29480 = G__29478;
var i1 = cljs.core.nth.call(null,vec__29480,(0),null);
var o1 = cljs.core.nth.call(null,vec__29480,(1),null);
var G__29479 = G__29462;
var vec__29481 = G__29479;
var k = cljs.core.nth.call(null,vec__29481,(0),null);
var vec__29482 = cljs.core.nth.call(null,vec__29481,(1),null);
var i2 = cljs.core.nth.call(null,vec__29482,(0),null);
var o2 = cljs.core.nth.call(null,vec__29482,(1),null);
var G__29478__$1 = G__29478;
var G__29479__$1 = G__29479;
while(true){
var vec__29483 = G__29478__$1;
var i1__$1 = cljs.core.nth.call(null,vec__29483,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__29483,(1),null);
var vec__29484 = G__29479__$1;
var k__$1 = cljs.core.nth.call(null,vec__29484,(0),null);
var vec__29485 = cljs.core.nth.call(null,vec__29484,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__29485,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__29485,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__29486 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__29486,(0),null);
var unused = cljs.core.nth.call(null,vec__29486,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__19644__auto__)){
var temp__4425__auto___29495 = output_checker29460_29491.call(null,o__19647__auto__);
if(cljs.core.truth_(temp__4425__auto___29495)){
var error__19646__auto___29496 = temp__4425__auto___29495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__19646__auto___29496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29457_29488,new cljs.core.Keyword(null,"value","value",305978217),o__19647__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19646__auto___29496], null));
} else {
}
} else {
}

return o__19647__auto__;
});})(ufv___29487,output_schema29457_29488,input_schema29458_29489,input_checker29459_29490,output_checker29460_29491))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema29457_29488,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29458_29489], null)));

//# sourceMappingURL=schema.js.map