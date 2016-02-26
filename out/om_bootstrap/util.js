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
var temp__4423__auto__ = (function (){var and__15539__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__15539__auto__){
return k__GT_fn.call(null,k);
} else {
return and__15539__auto__;
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__15551__auto__ = m1;
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___21752 = schema.utils.use_fn_validation;
var output_schema21747_21753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema21748_21754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker21749_21755 = schema.core.checker.call(null,input_schema21748_21754);
var output_checker21750_21756 = schema.core.checker.call(null,output_schema21747_21753);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___21752,output_schema21747_21753,input_schema21748_21754,input_checker21749_21755,output_checker21750_21756){
return (function om_bootstrap$util$collectify(G__21751){
var validate__19666__auto__ = ufv___21752.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21751], null);
var temp__4425__auto___21758 = input_checker21749_21755.call(null,args__19667__auto___21757);
if(cljs.core.truth_(temp__4425__auto___21758)){
var error__19668__auto___21759 = temp__4425__auto___21758;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__19668__auto___21759)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21748_21754,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21757,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21759], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var x = G__21751;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21760 = output_checker21750_21756.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21760)){
var error__19668__auto___21761 = temp__4425__auto___21760;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__19668__auto___21761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21747_21753,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21761], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21752,output_schema21747_21753,input_schema21748_21754,input_checker21749_21755,output_checker21750_21756))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema21747_21753,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21748_21754], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___21767 = schema.utils.use_fn_validation;
var output_schema21762_21768 = schema.core.Bool;
var input_schema21763_21769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21764_21770 = schema.core.checker.call(null,input_schema21763_21769);
var output_checker21765_21771 = schema.core.checker.call(null,output_schema21762_21768);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___21767,output_schema21762_21768,input_schema21763_21769,input_checker21764_21770,output_checker21765_21771){
return (function om_bootstrap$util$om_component_QMARK_(G__21766){
var validate__19666__auto__ = ufv___21767.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21766], null);
var temp__4425__auto___21773 = input_checker21764_21770.call(null,args__19667__auto___21772);
if(cljs.core.truth_(temp__4425__auto___21773)){
var error__19668__auto___21774 = temp__4425__auto___21773;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__19668__auto___21774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21763_21769,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21772,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21774], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var x = G__21766;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21775 = output_checker21765_21771.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21775)){
var error__19668__auto___21776 = temp__4425__auto___21775;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__19668__auto___21776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21762_21768,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21776], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21767,output_schema21762_21768,input_schema21763_21769,input_checker21764_21770,output_checker21765_21771))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21762_21768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21763_21769], null)));
var ufv___21782 = schema.utils.use_fn_validation;
var output_schema21777_21783 = schema.core.Bool;
var input_schema21778_21784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21779_21785 = schema.core.checker.call(null,input_schema21778_21784);
var output_checker21780_21786 = schema.core.checker.call(null,output_schema21777_21783);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___21782,output_schema21777_21783,input_schema21778_21784,input_checker21779_21785,output_checker21780_21786){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__21781){
var validate__19666__auto__ = ufv___21782.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21781], null);
var temp__4425__auto___21788 = input_checker21779_21785.call(null,args__19667__auto___21787);
if(cljs.core.truth_(temp__4425__auto___21788)){
var error__19668__auto___21789 = temp__4425__auto___21788;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__19668__auto___21789)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21778_21784,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21787,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21789], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var child = G__21781;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21790 = output_checker21780_21786.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21790)){
var error__19668__auto___21791 = temp__4425__auto___21790;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__19668__auto___21791)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21777_21783,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21791], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21782,output_schema21777_21783,input_schema21778_21784,input_checker21779_21785,output_checker21780_21786))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21777_21783,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21778_21784], null)));
var ufv___21797 = schema.utils.use_fn_validation;
var output_schema21792_21798 = schema.core.Bool;
var input_schema21793_21799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21794_21800 = schema.core.checker.call(null,input_schema21793_21799);
var output_checker21795_21801 = schema.core.checker.call(null,output_schema21792_21798);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___21797,output_schema21792_21798,input_schema21793_21799,input_checker21794_21800,output_checker21795_21801){
return (function om_bootstrap$util$valid_component_QMARK_(G__21796){
var validate__19666__auto__ = ufv___21797.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21796], null);
var temp__4425__auto___21803 = input_checker21794_21800.call(null,args__19667__auto___21802);
if(cljs.core.truth_(temp__4425__auto___21803)){
var error__19668__auto___21804 = temp__4425__auto___21803;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__19668__auto___21804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21793_21799,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21802,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21804], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var child = G__21796;
while(true){
var or__15551__auto__ = typeof child === 'string';
if(or__15551__auto__){
return or__15551__auto__;
} else {
var or__15551__auto____$1 = typeof child === 'number';
if(or__15551__auto____$1){
return or__15551__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21805 = output_checker21795_21801.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21805)){
var error__19668__auto___21806 = temp__4425__auto___21805;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__19668__auto___21806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21792_21798,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21806], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21797,output_schema21792_21798,input_schema21793_21799,input_checker21794_21800,output_checker21795_21801))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21792_21798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21793_21799], null)));
var ufv___21812 = schema.utils.use_fn_validation;
var output_schema21807_21813 = schema.core.Bool;
var input_schema21808_21814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21809_21815 = schema.core.checker.call(null,input_schema21808_21814);
var output_checker21810_21816 = schema.core.checker.call(null,output_schema21807_21813);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___21812,output_schema21807_21813,input_schema21808_21814,input_checker21809_21815,output_checker21810_21816){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__21811){
var validate__19666__auto__ = ufv___21812.get_cell();
if(cljs.core.truth_(validate__19666__auto__)){
var args__19667__auto___21817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21811], null);
var temp__4425__auto___21818 = input_checker21809_21815.call(null,args__19667__auto___21817);
if(cljs.core.truth_(temp__4425__auto___21818)){
var error__19668__auto___21819 = temp__4425__auto___21818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__19668__auto___21819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21808_21814,new cljs.core.Keyword(null,"value","value",305978217),args__19667__auto___21817,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21819], null));
} else {
}
} else {
}

var o__19669__auto__ = (function (){var children = G__21811;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__19666__auto__)){
var temp__4425__auto___21820 = output_checker21810_21816.call(null,o__19669__auto__);
if(cljs.core.truth_(temp__4425__auto___21820)){
var error__19668__auto___21821 = temp__4425__auto___21820;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__19668__auto___21821)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21807_21813,new cljs.core.Keyword(null,"value","value",305978217),o__19669__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19668__auto___21821], null));
} else {
}
} else {
}

return o__19669__auto__;
});})(ufv___21812,output_schema21807_21813,input_schema21808_21814,input_checker21809_21815,output_checker21810_21816))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21807_21813,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21808_21814], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__15539__auto__ = l;
if(cljs.core.truth_(and__15539__auto__)){
return r;
} else {
return and__15539__auto__;
}
})())){
return (function() { 
var G__21822__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__21822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21823__i = 0, G__21823__a = new Array(arguments.length -  0);
while (G__21823__i < G__21823__a.length) {G__21823__a[G__21823__i] = arguments[G__21823__i + 0]; ++G__21823__i;}
  args = new cljs.core.IndexedSeq(G__21823__a,0);
} 
return G__21822__delegate.call(this,args);};
G__21822.cljs$lang$maxFixedArity = 0;
G__21822.cljs$lang$applyTo = (function (arglist__21824){
var args = cljs.core.seq(arglist__21824);
return G__21822__delegate(args);
});
G__21822.cljs$core$IFn$_invoke$arity$variadic = G__21822__delegate;
return G__21822;
})()
;
} else {
var or__15551__auto__ = l;
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
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
var or__15551__auto__ = l;
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
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
var args__16616__auto__ = [];
var len__16609__auto___21826 = arguments.length;
var i__16610__auto___21827 = (0);
while(true){
if((i__16610__auto___21827 < len__16609__auto___21826)){
args__16616__auto__.push((arguments[i__16610__auto___21827]));

var G__21828 = (i__16610__auto___21827 + (1));
i__16610__auto___21827 = G__21828;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((0) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__16617__auto__);
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq21825){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21825));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__21837_21841 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__21838_21842 = null;
var count__21839_21843 = (0);
var i__21840_21844 = (0);
while(true){
if((i__21840_21844 < count__21839_21843)){
var k_21845 = cljs.core._nth.call(null,chunk__21838_21842,i__21840_21844);
if(cljs.core.truth_(arr.hasOwnProperty(k_21845))){
(ret[k_21845] = (arr[k_21845]));
} else {
}

var G__21846 = seq__21837_21841;
var G__21847 = chunk__21838_21842;
var G__21848 = count__21839_21843;
var G__21849 = (i__21840_21844 + (1));
seq__21837_21841 = G__21846;
chunk__21838_21842 = G__21847;
count__21839_21843 = G__21848;
i__21840_21844 = G__21849;
continue;
} else {
var temp__4425__auto___21850 = cljs.core.seq.call(null,seq__21837_21841);
if(temp__4425__auto___21850){
var seq__21837_21851__$1 = temp__4425__auto___21850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21837_21851__$1)){
var c__16354__auto___21852 = cljs.core.chunk_first.call(null,seq__21837_21851__$1);
var G__21853 = cljs.core.chunk_rest.call(null,seq__21837_21851__$1);
var G__21854 = c__16354__auto___21852;
var G__21855 = cljs.core.count.call(null,c__16354__auto___21852);
var G__21856 = (0);
seq__21837_21841 = G__21853;
chunk__21838_21842 = G__21854;
count__21839_21843 = G__21855;
i__21840_21844 = G__21856;
continue;
} else {
var k_21857 = cljs.core.first.call(null,seq__21837_21851__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_21857))){
(ret[k_21857] = (arr[k_21857]));
} else {
}

var G__21858 = cljs.core.next.call(null,seq__21837_21851__$1);
var G__21859 = null;
var G__21860 = (0);
var G__21861 = (0);
seq__21837_21841 = G__21858;
chunk__21838_21842 = G__21859;
count__21839_21843 = G__21860;
i__21840_21844 = G__21861;
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
var args21862 = [];
var len__16609__auto___21865 = arguments.length;
var i__16610__auto___21866 = (0);
while(true){
if((i__16610__auto___21866 < len__16609__auto___21865)){
args21862.push((arguments[i__16610__auto___21866]));

var G__21867 = (i__16610__auto___21866 + (1));
i__16610__auto___21866 = G__21867;
continue;
} else {
}
break;
}

var G__21864 = args21862.length;
switch (G__21864) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21862.length)].join('')));

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
var args21869 = [];
var len__16609__auto___21872 = arguments.length;
var i__16610__auto___21873 = (0);
while(true){
if((i__16610__auto___21873 < len__16609__auto___21872)){
args21869.push((arguments[i__16610__auto___21873]));

var G__21874 = (i__16610__auto___21873 + (1));
i__16610__auto___21873 = G__21874;
continue;
} else {
}
break;
}

var G__21871 = args21869.length;
switch (G__21871) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21869.length)].join('')));

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

//# sourceMappingURL=util.js.map