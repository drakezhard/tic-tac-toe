// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__5156__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__5156__auto__){
return k__GT_fn.call(null,k);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__5168__auto__ = m1;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___17029 = schema.utils.use_fn_validation;
var output_schema17024_17030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema17025_17031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker17026_17032 = schema.core.checker.call(null,input_schema17025_17031);
var output_checker17027_17033 = schema.core.checker.call(null,output_schema17024_17030);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___17029,output_schema17024_17030,input_schema17025_17031,input_checker17026_17032,output_checker17027_17033){
return (function om_bootstrap$util$collectify(G__17028){
var validate__15084__auto__ = ufv___17029.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17028], null);
var temp__4425__auto___17035 = input_checker17026_17032.call(null,args__15085__auto___17034);
if(cljs.core.truth_(temp__4425__auto___17035)){
var error__15086__auto___17036 = temp__4425__auto___17035;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__15086__auto___17036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17025_17031,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17034,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17036], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var x = G__17028;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17037 = output_checker17027_17033.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17037)){
var error__15086__auto___17038 = temp__4425__auto___17037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__15086__auto___17038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17024_17030,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17038], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17029,output_schema17024_17030,input_schema17025_17031,input_checker17026_17032,output_checker17027_17033))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema17024_17030,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17025_17031], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___17044 = schema.utils.use_fn_validation;
var output_schema17039_17045 = schema.core.Bool;
var input_schema17040_17046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17041_17047 = schema.core.checker.call(null,input_schema17040_17046);
var output_checker17042_17048 = schema.core.checker.call(null,output_schema17039_17045);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___17044,output_schema17039_17045,input_schema17040_17046,input_checker17041_17047,output_checker17042_17048){
return (function om_bootstrap$util$om_component_QMARK_(G__17043){
var validate__15084__auto__ = ufv___17044.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17043], null);
var temp__4425__auto___17050 = input_checker17041_17047.call(null,args__15085__auto___17049);
if(cljs.core.truth_(temp__4425__auto___17050)){
var error__15086__auto___17051 = temp__4425__auto___17050;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___17051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17040_17046,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17049,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17051], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var x = G__17043;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17052 = output_checker17042_17048.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17052)){
var error__15086__auto___17053 = temp__4425__auto___17052;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__15086__auto___17053)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17039_17045,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17053], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17044,output_schema17039_17045,input_schema17040_17046,input_checker17041_17047,output_checker17042_17048))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17039_17045,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17040_17046], null)));
var ufv___17059 = schema.utils.use_fn_validation;
var output_schema17054_17060 = schema.core.Bool;
var input_schema17055_17061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17056_17062 = schema.core.checker.call(null,input_schema17055_17061);
var output_checker17057_17063 = schema.core.checker.call(null,output_schema17054_17060);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___17059,output_schema17054_17060,input_schema17055_17061,input_checker17056_17062,output_checker17057_17063){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__17058){
var validate__15084__auto__ = ufv___17059.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17058], null);
var temp__4425__auto___17065 = input_checker17056_17062.call(null,args__15085__auto___17064);
if(cljs.core.truth_(temp__4425__auto___17065)){
var error__15086__auto___17066 = temp__4425__auto___17065;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__15086__auto___17066)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17055_17061,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17064,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17066], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var child = G__17058;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17067 = output_checker17057_17063.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17067)){
var error__15086__auto___17068 = temp__4425__auto___17067;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__15086__auto___17068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17054_17060,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17068], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17059,output_schema17054_17060,input_schema17055_17061,input_checker17056_17062,output_checker17057_17063))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17054_17060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17055_17061], null)));
var ufv___17074 = schema.utils.use_fn_validation;
var output_schema17069_17075 = schema.core.Bool;
var input_schema17070_17076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17071_17077 = schema.core.checker.call(null,input_schema17070_17076);
var output_checker17072_17078 = schema.core.checker.call(null,output_schema17069_17075);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___17074,output_schema17069_17075,input_schema17070_17076,input_checker17071_17077,output_checker17072_17078){
return (function om_bootstrap$util$valid_component_QMARK_(G__17073){
var validate__15084__auto__ = ufv___17074.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17073], null);
var temp__4425__auto___17080 = input_checker17071_17077.call(null,args__15085__auto___17079);
if(cljs.core.truth_(temp__4425__auto___17080)){
var error__15086__auto___17081 = temp__4425__auto___17080;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__15086__auto___17081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17070_17076,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17079,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17081], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var child = G__17073;
while(true){
var or__5168__auto__ = typeof child === 'string';
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = typeof child === 'number';
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17082 = output_checker17072_17078.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17082)){
var error__15086__auto___17083 = temp__4425__auto___17082;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__15086__auto___17083)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17069_17075,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17083], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17074,output_schema17069_17075,input_schema17070_17076,input_checker17071_17077,output_checker17072_17078))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17069_17075,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17070_17076], null)));
var ufv___17089 = schema.utils.use_fn_validation;
var output_schema17084_17090 = schema.core.Bool;
var input_schema17085_17091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker17086_17092 = schema.core.checker.call(null,input_schema17085_17091);
var output_checker17087_17093 = schema.core.checker.call(null,output_schema17084_17090);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___17089,output_schema17084_17090,input_schema17085_17091,input_checker17086_17092,output_checker17087_17093){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__17088){
var validate__15084__auto__ = ufv___17089.get_cell();
if(cljs.core.truth_(validate__15084__auto__)){
var args__15085__auto___17094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17088], null);
var temp__4425__auto___17095 = input_checker17086_17092.call(null,args__15085__auto___17094);
if(cljs.core.truth_(temp__4425__auto___17095)){
var error__15086__auto___17096 = temp__4425__auto___17095;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__15086__auto___17096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17085_17091,new cljs.core.Keyword(null,"value","value",305978217),args__15085__auto___17094,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17096], null));
} else {
}
} else {
}

var o__15087__auto__ = (function (){var children = G__17088;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__15084__auto__)){
var temp__4425__auto___17097 = output_checker17087_17093.call(null,o__15087__auto__);
if(cljs.core.truth_(temp__4425__auto___17097)){
var error__15086__auto___17098 = temp__4425__auto___17097;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__15086__auto___17098)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17084_17090,new cljs.core.Keyword(null,"value","value",305978217),o__15087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15086__auto___17098], null));
} else {
}
} else {
}

return o__15087__auto__;
});})(ufv___17089,output_schema17084_17090,input_schema17085_17091,input_checker17086_17092,output_checker17087_17093))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema17084_17090,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17085_17091], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__5156__auto__ = l;
if(cljs.core.truth_(and__5156__auto__)){
return r;
} else {
return and__5156__auto__;
}
})())){
return (function() { 
var G__17099__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__17099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17100__i = 0, G__17100__a = new Array(arguments.length -  0);
while (G__17100__i < G__17100__a.length) {G__17100__a[G__17100__i] = arguments[G__17100__i + 0]; ++G__17100__i;}
  args = new cljs.core.IndexedSeq(G__17100__a,0);
} 
return G__17099__delegate.call(this,args);};
G__17099.cljs$lang$maxFixedArity = 0;
G__17099.cljs$lang$applyTo = (function (arglist__17101){
var args = cljs.core.seq(arglist__17101);
return G__17099__delegate(args);
});
G__17099.cljs$core$IFn$_invoke$arity$variadic = G__17099__delegate;
return G__17099;
})()
;
} else {
var or__5168__auto__ = l;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__5168__auto__ = l;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17103 = arguments.length;
var i__6227__auto___17104 = (0);
while(true){
if((i__6227__auto___17104 < len__6226__auto___17103)){
args__6233__auto__.push((arguments[i__6227__auto___17104]));

var G__17105 = (i__6227__auto___17104 + (1));
i__6227__auto___17104 = G__17105;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq17102){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17102));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__17114_17118 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__17115_17119 = null;
var count__17116_17120 = (0);
var i__17117_17121 = (0);
while(true){
if((i__17117_17121 < count__17116_17120)){
var k_17122 = cljs.core._nth.call(null,chunk__17115_17119,i__17117_17121);
if(cljs.core.truth_(arr.hasOwnProperty(k_17122))){
(ret[k_17122] = (arr[k_17122]));
} else {
}

var G__17123 = seq__17114_17118;
var G__17124 = chunk__17115_17119;
var G__17125 = count__17116_17120;
var G__17126 = (i__17117_17121 + (1));
seq__17114_17118 = G__17123;
chunk__17115_17119 = G__17124;
count__17116_17120 = G__17125;
i__17117_17121 = G__17126;
continue;
} else {
var temp__4425__auto___17127 = cljs.core.seq.call(null,seq__17114_17118);
if(temp__4425__auto___17127){
var seq__17114_17128__$1 = temp__4425__auto___17127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17114_17128__$1)){
var c__5971__auto___17129 = cljs.core.chunk_first.call(null,seq__17114_17128__$1);
var G__17130 = cljs.core.chunk_rest.call(null,seq__17114_17128__$1);
var G__17131 = c__5971__auto___17129;
var G__17132 = cljs.core.count.call(null,c__5971__auto___17129);
var G__17133 = (0);
seq__17114_17118 = G__17130;
chunk__17115_17119 = G__17131;
count__17116_17120 = G__17132;
i__17117_17121 = G__17133;
continue;
} else {
var k_17134 = cljs.core.first.call(null,seq__17114_17128__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_17134))){
(ret[k_17134] = (arr[k_17134]));
} else {
}

var G__17135 = cljs.core.next.call(null,seq__17114_17128__$1);
var G__17136 = null;
var G__17137 = (0);
var G__17138 = (0);
seq__17114_17118 = G__17135;
chunk__17115_17119 = G__17136;
count__17116_17120 = G__17137;
i__17117_17121 = G__17138;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args17139 = [];
var len__6226__auto___17142 = arguments.length;
var i__6227__auto___17143 = (0);
while(true){
if((i__6227__auto___17143 < len__6226__auto___17142)){
args17139.push((arguments[i__6227__auto___17143]));

var G__17144 = (i__6227__auto___17143 + (1));
i__6227__auto___17143 = G__17144;
continue;
} else {
}
break;
}

var G__17141 = args17139.length;
switch (G__17141) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17139.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args17146 = [];
var len__6226__auto___17149 = arguments.length;
var i__6227__auto___17150 = (0);
while(true){
if((i__6227__auto___17150 < len__6226__auto___17149)){
args17146.push((arguments[i__6227__auto___17150]));

var G__17151 = (i__6227__auto___17150 + (1));
i__6227__auto___17150 = G__17151;
continue;
} else {
}
break;
}

var G__17148 = args17146.length;
switch (G__17148) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17146.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;
