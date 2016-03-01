// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__15492__15493__auto__){
if(!((p1__15492__15493__auto__ == null))){
if((false) || (p1__15492__15493__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__15492__15493__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__15492__15493__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__15492__15493__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__17629_SHARP_){
return (cljs.core.val.call(null,p1__17629_SHARP_) > (1));
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

var vec__17631 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__17631,(0),null);
var v = cljs.core.nth.call(null,vec__17631,(1),null);
var p = vec__17631;
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
var ufv___17637 = schema.utils.use_fn_validation;
var output_schema17632_17638 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema17633_17639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17634_17640 = schema.core.checker.call(null,input_schema17633_17639);
var output_checker17635_17641 = schema.core.checker.call(null,output_schema17632_17638);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___17637,output_schema17632_17638,input_schema17633_17639,input_checker17634_17640,output_checker17635_17641){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__17636){
var validate__15084__auto__ = ufv___17637.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17636], null);
var temp__4425__auto___17643 = input_checker17634_17640.call(null,args__15085__auto___17642);
if(cljs.core.truth_(temp__4425__auto___17643)){
var error__15086__auto___17644 = temp__4425__auto___17643;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__15086__auto___17644)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17633_17639,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17642,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17644], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var k = G__17636;
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
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17645 = output_checker17635_17641.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17645)){
var error__15086__auto___17646 = temp__4425__auto___17645;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__15086__auto___17646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17632_17638,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17646], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17637,output_schema17632_17638,input_schema17633_17639,input_checker17634_17640,output_checker17635_17641))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema17632_17638,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17633_17639], null)));
var ufv___17652 = schema.utils.use_fn_validation;
var output_schema17647_17653 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema17648_17654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17649_17655 = schema.core.checker.call(null,input_schema17648_17654);
var output_checker17650_17656 = schema.core.checker.call(null,output_schema17647_17653);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___17652,output_schema17647_17653,input_schema17648_17654,input_checker17649_17655,output_checker17650_17656){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__17651){
var validate__15084__auto__ = ufv___17652.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17651], null);
var temp__4425__auto___17658 = input_checker17649_17655.call(null,args__15085__auto___17657);
if(cljs.core.truth_(temp__4425__auto___17658)){
var error__15086__auto___17659 = temp__4425__auto___17658;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__15086__auto___17659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17648_17654,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17657,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17659], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var s = G__17651;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17660 = output_checker17650_17656.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17660)){
var error__15086__auto___17661 = temp__4425__auto___17660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__15086__auto___17661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17647_17653,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17661], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17652,output_schema17647_17653,input_schema17648_17654,input_checker17649_17655,output_checker17650_17656))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema17647_17653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17648_17654], null)));
var ufv___17667 = schema.utils.use_fn_validation;
var output_schema17662_17668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema17663_17669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker17664_17670 = schema.core.checker.call(null,input_schema17663_17669);
var output_checker17665_17671 = schema.core.checker.call(null,output_schema17662_17668);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___17667,output_schema17662_17668,input_schema17663_17669,input_checker17664_17670,output_checker17665_17671){
return (function plumbing$fnk$schema$split_schema_keys(G__17666){
var validate__15084__auto__ = ufv___17667.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17666], null);
var temp__4425__auto___17673 = input_checker17664_17670.call(null,args__15085__auto___17672);
if(cljs.core.truth_(temp__4425__auto___17673)){
var error__15086__auto___17674 = temp__4425__auto___17673;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__15086__auto___17674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17663_17669,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17672,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17674], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var s = G__17666;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17675 = output_checker17665_17671.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17675)){
var error__15086__auto___17676 = temp__4425__auto___17675;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__15086__auto___17676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17662_17668,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17676], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17667,output_schema17662_17668,input_schema17663_17669,input_checker17664_17670,output_checker17665_17671))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema17662_17668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17663_17669], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17684 = arguments.length;
var i__6227__auto___17685 = (0);
while(true){
if((i__6227__auto___17685 < len__6226__auto___17684)){
args__6233__auto__.push((arguments[i__6227__auto___17685]));

var G__17686 = (i__6227__auto___17685 + (1));
i__6227__auto___17685 = G__17686;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__17681){
var vec__17682 = p__17681;
var k = cljs.core.nth.call(null,vec__17682,(0),null);
var v = cljs.core.nth.call(null,vec__17682,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__17683 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__17683,(0),null);
var ov = cljs.core.nth.call(null,vec__17683,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq17677){
var G__17678 = cljs.core.first.call(null,seq17677);
var seq17677__$1 = cljs.core.next.call(null,seq17677);
var G__17679 = cljs.core.first.call(null,seq17677__$1);
var seq17677__$2 = cljs.core.next.call(null,seq17677__$1);
var G__17680 = cljs.core.first.call(null,seq17677__$2);
var seq17677__$3 = cljs.core.next.call(null,seq17677__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__17678,G__17679,G__17680,seq17677__$3);
});
var ufv___17694 = schema.utils.use_fn_validation;
var output_schema17688_17695 = plumbing.fnk.schema.InputSchema;
var input_schema17689_17696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker17690_17697 = schema.core.checker.call(null,input_schema17689_17696);
var output_checker17691_17698 = schema.core.checker.call(null,output_schema17688_17695);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698){
return (function plumbing$fnk$schema$union_input_schemata(G__17692,G__17693){
var validate__15084__auto__ = ufv___17694.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17692,G__17693], null);
var temp__4425__auto___17700 = input_checker17690_17697.call(null,args__15085__auto___17699);
if(cljs.core.truth_(temp__4425__auto___17700)){
var error__15086__auto___17701 = temp__4425__auto___17700;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__15086__auto___17701)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17689_17696,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17699,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17701], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var i1 = G__17692;
var i2 = G__17693;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698){
return (function (p1__17687_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__17687_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__17687_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698))
,((function (validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698){
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
});})(validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698))
,((function (validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__5156__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__5156__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__5156__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__15084__auto__,ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17702 = output_checker17691_17698.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17702)){
var error__15086__auto___17703 = temp__4425__auto___17702;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__15086__auto___17703)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17688_17695,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17703], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17694,output_schema17688_17695,input_schema17689_17696,input_checker17690_17697,output_checker17691_17698))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema17688_17695,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17689_17696], null)));
var ufv___17709 = schema.utils.use_fn_validation;
var output_schema17704_17710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema17705_17711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker17706_17712 = schema.core.checker.call(null,input_schema17705_17711);
var output_checker17707_17713 = schema.core.checker.call(null,output_schema17704_17710);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___17709,output_schema17704_17710,input_schema17705_17711,input_checker17706_17712,output_checker17707_17713){
return (function plumbing$fnk$schema$required_toplevel_keys(G__17708){
var validate__15084__auto__ = ufv___17709.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17708], null);
var temp__4425__auto___17715 = input_checker17706_17712.call(null,args__15085__auto___17714);
if(cljs.core.truth_(temp__4425__auto___17715)){
var error__15086__auto___17716 = temp__4425__auto___17715;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__15086__auto___17716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17705_17711,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17714,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17716], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var input_schema = G__17708;
while(true){
return cljs.core.keep.call(null,((function (validate__15084__auto__,ufv___17709,output_schema17704_17710,input_schema17705_17711,input_checker17706_17712,output_checker17707_17713){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__15084__auto__,ufv___17709,output_schema17704_17710,input_schema17705_17711,input_checker17706_17712,output_checker17707_17713))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17717 = output_checker17707_17713.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17717)){
var error__15086__auto___17718 = temp__4425__auto___17717;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__15086__auto___17718)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17704_17710,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17718], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17709,output_schema17704_17710,input_schema17705_17711,input_checker17706_17712,output_checker17707_17713))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema17704_17710,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17705_17711], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5940__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__17727(s__17728){
return (new cljs.core.LazySeq(null,(function (){
var s__17728__$1 = s__17728;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17728__$1);
if(temp__4425__auto__){
var s__17728__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17728__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17728__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17730 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17729 = (0);
while(true){
if((i__17729 < size__5939__auto__)){
var vec__17733 = cljs.core._nth.call(null,c__5938__auto__,i__17729);
var k = cljs.core.nth.call(null,vec__17733,(0),null);
var v = cljs.core.nth.call(null,vec__17733,(1),null);
cljs.core.chunk_append.call(null,b__17730,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__17735 = (i__17729 + (1));
i__17729 = G__17735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17730),plumbing$fnk$schema$guess_expr_output_schema_$_iter__17727.call(null,cljs.core.chunk_rest.call(null,s__17728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17730),null);
}
} else {
var vec__17734 = cljs.core.first.call(null,s__17728__$2);
var k = cljs.core.nth.call(null,vec__17734,(0),null);
var v = cljs.core.nth.call(null,vec__17734,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__17727.call(null,cljs.core.rest.call(null,s__17728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,expr);
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5940__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__17744(s__17745){
return (new cljs.core.LazySeq(null,(function (){
var s__17745__$1 = s__17745;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17745__$1);
if(temp__4425__auto__){
var s__17745__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17745__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17745__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17747 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17746 = (0);
while(true){
if((i__17746 < size__5939__auto__)){
var vec__17750 = cljs.core._nth.call(null,c__5938__auto__,i__17746);
var k = cljs.core.nth.call(null,vec__17750,(0),null);
var v = cljs.core.nth.call(null,vec__17750,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__5168__auto__ = required_QMARK_;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__17747,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__17752 = (i__17746 + (1));
i__17746 = G__17752;
continue;
} else {
var G__17753 = (i__17746 + (1));
i__17746 = G__17753;
continue;
}
} else {
var G__17754 = (i__17746 + (1));
i__17746 = G__17754;
continue;
}
} else {
var G__17755 = (i__17746 + (1));
i__17746 = G__17755;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17747),plumbing$fnk$schema$schema_diff_$_iter__17744.call(null,cljs.core.chunk_rest.call(null,s__17745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17747),null);
}
} else {
var vec__17751 = cljs.core.first.call(null,s__17745__$2);
var k = cljs.core.nth.call(null,vec__17751,(0),null);
var v = cljs.core.nth.call(null,vec__17751,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__5168__auto__ = required_QMARK_;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__17744.call(null,cljs.core.rest.call(null,s__17745__$2)));
} else {
var G__17756 = cljs.core.rest.call(null,s__17745__$2);
s__17745__$1 = G__17756;
continue;
}
} else {
var G__17757 = cljs.core.rest.call(null,s__17745__$2);
s__17745__$1 = G__17757;
continue;
}
} else {
var G__17758 = cljs.core.rest.call(null,s__17745__$2);
s__17745__$1 = G__17758;
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
return iter__5940__auto__.call(null,input_schema);
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
var ufv___17781 = schema.utils.use_fn_validation;
var output_schema17759_17782 = schema.core.Any;
var input_schema17760_17783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker17761_17784 = schema.core.checker.call(null,input_schema17760_17783);
var output_checker17762_17785 = schema.core.checker.call(null,output_schema17759_17782);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___17781,output_schema17759_17782,input_schema17760_17783,input_checker17761_17784,output_checker17762_17785){
return (function plumbing$fnk$schema$compose_schemata(G__17763,G__17764){
var validate__15084__auto__ = true;
if(validate__15084__auto__){
var args__15085__auto___17786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17763,G__17764], null);
var temp__4425__auto___17787 = input_checker17761_17784.call(null,args__15085__auto___17786);
if(cljs.core.truth_(temp__4425__auto___17787)){
var error__15086__auto___17788 = temp__4425__auto___17787;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__15086__auto___17788)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17760_17783,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17786,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17788], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var G__17775 = G__17763;
var vec__17777 = G__17775;
var i2 = cljs.core.nth.call(null,vec__17777,(0),null);
var o2 = cljs.core.nth.call(null,vec__17777,(1),null);
var G__17776 = G__17764;
var vec__17778 = G__17776;
var i1 = cljs.core.nth.call(null,vec__17778,(0),null);
var o1 = cljs.core.nth.call(null,vec__17778,(1),null);
var G__17775__$1 = G__17775;
var G__17776__$1 = G__17776;
while(true){
var vec__17779 = G__17775__$1;
var i2__$1 = cljs.core.nth.call(null,vec__17779,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__17779,(1),null);
var vec__17780 = G__17776__$1;
var i1__$1 = cljs.core.nth.call(null,vec__17780,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__17780,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__15084__auto__){
var temp__4425__auto___17789 = output_checker17762_17785.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17789)){
var error__15086__auto___17790 = temp__4425__auto___17789;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__15086__auto___17790)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17759_17782,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17790], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17781,output_schema17759_17782,input_schema17760_17783,input_checker17761_17784,output_checker17762_17785))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema17759_17782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17760_17783], null)));
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
var ufv___17869 = schema.utils.use_fn_validation;
var output_schema17791_17870 = schema.core.Any;
var input_schema17792_17871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker17793_17872 = schema.core.checker.call(null,input_schema17792_17871);
var output_checker17794_17873 = schema.core.checker.call(null,output_schema17791_17870);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function plumbing$fnk$schema$split_schema(G__17795,G__17796){
var validate__15084__auto__ = ufv___17869.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17795,G__17796], null);
var temp__4425__auto___17875 = input_checker17793_17872.call(null,args__15085__auto___17874);
if(cljs.core.truth_(temp__4425__auto___17875)){
var error__15086__auto___17876 = temp__4425__auto___17875;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__15086__auto___17876)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17792_17871,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17874,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17876], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var s = G__17795;
var ks = G__17796;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__5940__auto__ = ((function (ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function plumbing$fnk$schema$split_schema_$_iter__17833(s__17834){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function (){
var s__17834__$1 = s__17834;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17834__$1);
if(temp__4425__auto__){
var s__17834__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17834__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17834__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17836 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17835 = (0);
while(true){
if((i__17835 < size__5939__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__5938__auto__,i__17835);
cljs.core.chunk_append.call(null,b__17836,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5940__auto__ = ((function (i__17835,in_QMARK_,c__5938__auto__,size__5939__auto__,b__17836,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17853(s__17854){
return (new cljs.core.LazySeq(null,((function (i__17835,in_QMARK_,c__5938__auto__,size__5939__auto__,b__17836,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function (){
var s__17854__$1 = s__17854;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__17854__$1);
if(temp__4425__auto____$1){
var s__17854__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17854__$2)){
var c__5938__auto____$1 = cljs.core.chunk_first.call(null,s__17854__$2);
var size__5939__auto____$1 = cljs.core.count.call(null,c__5938__auto____$1);
var b__17856 = cljs.core.chunk_buffer.call(null,size__5939__auto____$1);
if((function (){var i__17855 = (0);
while(true){
if((i__17855 < size__5939__auto____$1)){
var vec__17859 = cljs.core._nth.call(null,c__5938__auto____$1,i__17855);
var k = cljs.core.nth.call(null,vec__17859,(0),null);
var v = cljs.core.nth.call(null,vec__17859,(1),null);
if(cljs.core.truth_((function (){var and__5156__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__5156__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__17856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17877 = (i__17855 + (1));
i__17855 = G__17877;
continue;
} else {
var G__17878 = (i__17855 + (1));
i__17855 = G__17878;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17856),plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17853.call(null,cljs.core.chunk_rest.call(null,s__17854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17856),null);
}
} else {
var vec__17860 = cljs.core.first.call(null,s__17854__$2);
var k = cljs.core.nth.call(null,vec__17860,(0),null);
var v = cljs.core.nth.call(null,vec__17860,(1),null);
if(cljs.core.truth_((function (){var and__5156__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17853.call(null,cljs.core.rest.call(null,s__17854__$2)));
} else {
var G__17879 = cljs.core.rest.call(null,s__17854__$2);
s__17854__$1 = G__17879;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__17835,in_QMARK_,c__5938__auto__,size__5939__auto__,b__17836,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
,null,null));
});})(i__17835,in_QMARK_,c__5938__auto__,size__5939__auto__,b__17836,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
;
return iter__5940__auto__.call(null,s);
})()));

var G__17880 = (i__17835 + (1));
i__17835 = G__17880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17836),plumbing$fnk$schema$split_schema_$_iter__17833.call(null,cljs.core.chunk_rest.call(null,s__17834__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17836),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__17834__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5940__auto__ = ((function (in_QMARK_,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17861(s__17862){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873){
return (function (){
var s__17862__$1 = s__17862;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__17862__$1);
if(temp__4425__auto____$1){
var s__17862__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17862__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17862__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17864 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17863 = (0);
while(true){
if((i__17863 < size__5939__auto__)){
var vec__17867 = cljs.core._nth.call(null,c__5938__auto__,i__17863);
var k = cljs.core.nth.call(null,vec__17867,(0),null);
var v = cljs.core.nth.call(null,vec__17867,(1),null);
if(cljs.core.truth_((function (){var and__5156__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__5156__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__17864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17881 = (i__17863 + (1));
i__17863 = G__17881;
continue;
} else {
var G__17882 = (i__17863 + (1));
i__17863 = G__17882;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17864),plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17861.call(null,cljs.core.chunk_rest.call(null,s__17862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17864),null);
}
} else {
var vec__17868 = cljs.core.first.call(null,s__17862__$2);
var k = cljs.core.nth.call(null,vec__17868,(0),null);
var v = cljs.core.nth.call(null,vec__17868,(1),null);
if(cljs.core.truth_((function (){var and__5156__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__17833_$_iter__17861.call(null,cljs.core.rest.call(null,s__17862__$2)));
} else {
var G__17883 = cljs.core.rest.call(null,s__17862__$2);
s__17862__$1 = G__17883;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
,null,null));
});})(in_QMARK_,s__17834__$2,temp__4425__auto__,ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
;
return iter__5940__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__17833.call(null,cljs.core.rest.call(null,s__17834__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
,null,null));
});})(ks__$1,validate__15084__auto__,ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
;
return iter__5940__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17884 = output_checker17794_17873.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17884)){
var error__15086__auto___17885 = temp__4425__auto___17884;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__15086__auto___17885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17791_17870,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17885], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17869,output_schema17791_17870,input_schema17792_17871,input_checker17793_17872,output_checker17794_17873))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema17791_17870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17792_17871], null)));
var ufv___17916 = schema.utils.use_fn_validation;
var output_schema17886_17917 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema17887_17918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker17888_17919 = schema.core.checker.call(null,input_schema17887_17918);
var output_checker17889_17920 = schema.core.checker.call(null,output_schema17886_17917);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___17916,output_schema17886_17917,input_schema17887_17918,input_checker17888_17919,output_checker17889_17920){
return (function plumbing$fnk$schema$sequence_schemata(G__17890,G__17891){
var validate__15084__auto__ = ufv___17916.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17890,G__17891], null);
var temp__4425__auto___17922 = input_checker17888_17919.call(null,args__15085__auto___17921);
if(cljs.core.truth_(temp__4425__auto___17922)){
var error__15086__auto___17923 = temp__4425__auto___17922;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__15086__auto___17923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17887_17918,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17921,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17923], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var G__17907 = G__17890;
var vec__17909 = G__17907;
var i1 = cljs.core.nth.call(null,vec__17909,(0),null);
var o1 = cljs.core.nth.call(null,vec__17909,(1),null);
var G__17908 = G__17891;
var vec__17910 = G__17908;
var k = cljs.core.nth.call(null,vec__17910,(0),null);
var vec__17911 = cljs.core.nth.call(null,vec__17910,(1),null);
var i2 = cljs.core.nth.call(null,vec__17911,(0),null);
var o2 = cljs.core.nth.call(null,vec__17911,(1),null);
var G__17907__$1 = G__17907;
var G__17908__$1 = G__17908;
while(true){
var vec__17912 = G__17907__$1;
var i1__$1 = cljs.core.nth.call(null,vec__17912,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__17912,(1),null);
var vec__17913 = G__17908__$1;
var k__$1 = cljs.core.nth.call(null,vec__17913,(0),null);
var vec__17914 = cljs.core.nth.call(null,vec__17913,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__17914,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__17914,(1),null);
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

var vec__17915 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__17915,(0),null);
var unused = cljs.core.nth.call(null,vec__17915,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17924 = output_checker17889_17920.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17924)){
var error__15086__auto___17925 = temp__4425__auto___17924;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__15086__auto___17925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17886_17917,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17925], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17916,output_schema17886_17917,input_schema17887_17918,input_checker17888_17919,output_checker17889_17920))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema17886_17917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17887_17918], null)));
