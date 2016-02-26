// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__15550__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__15550__auto__){
return or__15550__auto__;
} else {
var G__20307 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__20307) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__20310 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__20310) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
om_tools.dom.format_opts;
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20314){
var vec__20315 = p__20314;
var k = cljs.core.nth.call(null,vec__20315,(0),null);
var v = cljs.core.nth.call(null,vec__20315,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__15550__auto__ = React.isValidElement;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__20317 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__20317,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__20317,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args20318 = [];
var len__16608__auto___20968 = arguments.length;
var i__16609__auto___20969 = (0);
while(true){
if((i__16609__auto___20969 < len__16608__auto___20968)){
args20318.push((arguments[i__16609__auto___20969]));

var G__20970 = (i__16609__auto___20969 + (1));
i__16609__auto___20969 = G__20970;
continue;
} else {
}
break;
}

var G__20322 = args20318.length;
switch (G__20322) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20318.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq20319){
var G__20320 = cljs.core.first.call(null,seq20319);
var seq20319__$1 = cljs.core.next.call(null,seq20319);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__20320,seq20319__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args20323 = [];
var len__16608__auto___20972 = arguments.length;
var i__16609__auto___20973 = (0);
while(true){
if((i__16609__auto___20973 < len__16608__auto___20972)){
args20323.push((arguments[i__16609__auto___20973]));

var G__20974 = (i__16609__auto___20973 + (1));
i__16609__auto___20973 = G__20974;
continue;
} else {
}
break;
}

var G__20327 = args20323.length;
switch (G__20327) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20323.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq20324){
var G__20325 = cljs.core.first.call(null,seq20324);
var seq20324__$1 = cljs.core.next.call(null,seq20324);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__20325,seq20324__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args20328 = [];
var len__16608__auto___20976 = arguments.length;
var i__16609__auto___20977 = (0);
while(true){
if((i__16609__auto___20977 < len__16608__auto___20976)){
args20328.push((arguments[i__16609__auto___20977]));

var G__20978 = (i__16609__auto___20977 + (1));
i__16609__auto___20977 = G__20978;
continue;
} else {
}
break;
}

var G__20332 = args20328.length;
switch (G__20332) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20328.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq20329){
var G__20330 = cljs.core.first.call(null,seq20329);
var seq20329__$1 = cljs.core.next.call(null,seq20329);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__20330,seq20329__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args20333 = [];
var len__16608__auto___20980 = arguments.length;
var i__16609__auto___20981 = (0);
while(true){
if((i__16609__auto___20981 < len__16608__auto___20980)){
args20333.push((arguments[i__16609__auto___20981]));

var G__20982 = (i__16609__auto___20981 + (1));
i__16609__auto___20981 = G__20982;
continue;
} else {
}
break;
}

var G__20337 = args20333.length;
switch (G__20337) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20333.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq20334){
var G__20335 = cljs.core.first.call(null,seq20334);
var seq20334__$1 = cljs.core.next.call(null,seq20334);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__20335,seq20334__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args20338 = [];
var len__16608__auto___20984 = arguments.length;
var i__16609__auto___20985 = (0);
while(true){
if((i__16609__auto___20985 < len__16608__auto___20984)){
args20338.push((arguments[i__16609__auto___20985]));

var G__20986 = (i__16609__auto___20985 + (1));
i__16609__auto___20985 = G__20986;
continue;
} else {
}
break;
}

var G__20342 = args20338.length;
switch (G__20342) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20338.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq20339){
var G__20340 = cljs.core.first.call(null,seq20339);
var seq20339__$1 = cljs.core.next.call(null,seq20339);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__20340,seq20339__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args20343 = [];
var len__16608__auto___20988 = arguments.length;
var i__16609__auto___20989 = (0);
while(true){
if((i__16609__auto___20989 < len__16608__auto___20988)){
args20343.push((arguments[i__16609__auto___20989]));

var G__20990 = (i__16609__auto___20989 + (1));
i__16609__auto___20989 = G__20990;
continue;
} else {
}
break;
}

var G__20347 = args20343.length;
switch (G__20347) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20343.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq20344){
var G__20345 = cljs.core.first.call(null,seq20344);
var seq20344__$1 = cljs.core.next.call(null,seq20344);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__20345,seq20344__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args20348 = [];
var len__16608__auto___20992 = arguments.length;
var i__16609__auto___20993 = (0);
while(true){
if((i__16609__auto___20993 < len__16608__auto___20992)){
args20348.push((arguments[i__16609__auto___20993]));

var G__20994 = (i__16609__auto___20993 + (1));
i__16609__auto___20993 = G__20994;
continue;
} else {
}
break;
}

var G__20352 = args20348.length;
switch (G__20352) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20348.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__20350,seq20349__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args20353 = [];
var len__16608__auto___20996 = arguments.length;
var i__16609__auto___20997 = (0);
while(true){
if((i__16609__auto___20997 < len__16608__auto___20996)){
args20353.push((arguments[i__16609__auto___20997]));

var G__20998 = (i__16609__auto___20997 + (1));
i__16609__auto___20997 = G__20998;
continue;
} else {
}
break;
}

var G__20357 = args20353.length;
switch (G__20357) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20353.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq20354){
var G__20355 = cljs.core.first.call(null,seq20354);
var seq20354__$1 = cljs.core.next.call(null,seq20354);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__20355,seq20354__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args20358 = [];
var len__16608__auto___21000 = arguments.length;
var i__16609__auto___21001 = (0);
while(true){
if((i__16609__auto___21001 < len__16608__auto___21000)){
args20358.push((arguments[i__16609__auto___21001]));

var G__21002 = (i__16609__auto___21001 + (1));
i__16609__auto___21001 = G__21002;
continue;
} else {
}
break;
}

var G__20362 = args20358.length;
switch (G__20362) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20358.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq20359){
var G__20360 = cljs.core.first.call(null,seq20359);
var seq20359__$1 = cljs.core.next.call(null,seq20359);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__20360,seq20359__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args20363 = [];
var len__16608__auto___21004 = arguments.length;
var i__16609__auto___21005 = (0);
while(true){
if((i__16609__auto___21005 < len__16608__auto___21004)){
args20363.push((arguments[i__16609__auto___21005]));

var G__21006 = (i__16609__auto___21005 + (1));
i__16609__auto___21005 = G__21006;
continue;
} else {
}
break;
}

var G__20367 = args20363.length;
switch (G__20367) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20363.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq20364){
var G__20365 = cljs.core.first.call(null,seq20364);
var seq20364__$1 = cljs.core.next.call(null,seq20364);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__20365,seq20364__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args20368 = [];
var len__16608__auto___21008 = arguments.length;
var i__16609__auto___21009 = (0);
while(true){
if((i__16609__auto___21009 < len__16608__auto___21008)){
args20368.push((arguments[i__16609__auto___21009]));

var G__21010 = (i__16609__auto___21009 + (1));
i__16609__auto___21009 = G__21010;
continue;
} else {
}
break;
}

var G__20372 = args20368.length;
switch (G__20372) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20368.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq20369){
var G__20370 = cljs.core.first.call(null,seq20369);
var seq20369__$1 = cljs.core.next.call(null,seq20369);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__20370,seq20369__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args20373 = [];
var len__16608__auto___21012 = arguments.length;
var i__16609__auto___21013 = (0);
while(true){
if((i__16609__auto___21013 < len__16608__auto___21012)){
args20373.push((arguments[i__16609__auto___21013]));

var G__21014 = (i__16609__auto___21013 + (1));
i__16609__auto___21013 = G__21014;
continue;
} else {
}
break;
}

var G__20377 = args20373.length;
switch (G__20377) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20373.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq20374){
var G__20375 = cljs.core.first.call(null,seq20374);
var seq20374__$1 = cljs.core.next.call(null,seq20374);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__20375,seq20374__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args20378 = [];
var len__16608__auto___21016 = arguments.length;
var i__16609__auto___21017 = (0);
while(true){
if((i__16609__auto___21017 < len__16608__auto___21016)){
args20378.push((arguments[i__16609__auto___21017]));

var G__21018 = (i__16609__auto___21017 + (1));
i__16609__auto___21017 = G__21018;
continue;
} else {
}
break;
}

var G__20382 = args20378.length;
switch (G__20382) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20378.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq20379){
var G__20380 = cljs.core.first.call(null,seq20379);
var seq20379__$1 = cljs.core.next.call(null,seq20379);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__20380,seq20379__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args20383 = [];
var len__16608__auto___21020 = arguments.length;
var i__16609__auto___21021 = (0);
while(true){
if((i__16609__auto___21021 < len__16608__auto___21020)){
args20383.push((arguments[i__16609__auto___21021]));

var G__21022 = (i__16609__auto___21021 + (1));
i__16609__auto___21021 = G__21022;
continue;
} else {
}
break;
}

var G__20387 = args20383.length;
switch (G__20387) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20383.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq20384){
var G__20385 = cljs.core.first.call(null,seq20384);
var seq20384__$1 = cljs.core.next.call(null,seq20384);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__20385,seq20384__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args20388 = [];
var len__16608__auto___21024 = arguments.length;
var i__16609__auto___21025 = (0);
while(true){
if((i__16609__auto___21025 < len__16608__auto___21024)){
args20388.push((arguments[i__16609__auto___21025]));

var G__21026 = (i__16609__auto___21025 + (1));
i__16609__auto___21025 = G__21026;
continue;
} else {
}
break;
}

var G__20392 = args20388.length;
switch (G__20392) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20388.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq20389){
var G__20390 = cljs.core.first.call(null,seq20389);
var seq20389__$1 = cljs.core.next.call(null,seq20389);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__20390,seq20389__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args20393 = [];
var len__16608__auto___21028 = arguments.length;
var i__16609__auto___21029 = (0);
while(true){
if((i__16609__auto___21029 < len__16608__auto___21028)){
args20393.push((arguments[i__16609__auto___21029]));

var G__21030 = (i__16609__auto___21029 + (1));
i__16609__auto___21029 = G__21030;
continue;
} else {
}
break;
}

var G__20397 = args20393.length;
switch (G__20397) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20393.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq20394){
var G__20395 = cljs.core.first.call(null,seq20394);
var seq20394__$1 = cljs.core.next.call(null,seq20394);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__20395,seq20394__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args20398 = [];
var len__16608__auto___21032 = arguments.length;
var i__16609__auto___21033 = (0);
while(true){
if((i__16609__auto___21033 < len__16608__auto___21032)){
args20398.push((arguments[i__16609__auto___21033]));

var G__21034 = (i__16609__auto___21033 + (1));
i__16609__auto___21033 = G__21034;
continue;
} else {
}
break;
}

var G__20402 = args20398.length;
switch (G__20402) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20398.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq20399){
var G__20400 = cljs.core.first.call(null,seq20399);
var seq20399__$1 = cljs.core.next.call(null,seq20399);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__20400,seq20399__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args20403 = [];
var len__16608__auto___21036 = arguments.length;
var i__16609__auto___21037 = (0);
while(true){
if((i__16609__auto___21037 < len__16608__auto___21036)){
args20403.push((arguments[i__16609__auto___21037]));

var G__21038 = (i__16609__auto___21037 + (1));
i__16609__auto___21037 = G__21038;
continue;
} else {
}
break;
}

var G__20407 = args20403.length;
switch (G__20407) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20403.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq20404){
var G__20405 = cljs.core.first.call(null,seq20404);
var seq20404__$1 = cljs.core.next.call(null,seq20404);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__20405,seq20404__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args20408 = [];
var len__16608__auto___21040 = arguments.length;
var i__16609__auto___21041 = (0);
while(true){
if((i__16609__auto___21041 < len__16608__auto___21040)){
args20408.push((arguments[i__16609__auto___21041]));

var G__21042 = (i__16609__auto___21041 + (1));
i__16609__auto___21041 = G__21042;
continue;
} else {
}
break;
}

var G__20412 = args20408.length;
switch (G__20412) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20408.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq20409){
var G__20410 = cljs.core.first.call(null,seq20409);
var seq20409__$1 = cljs.core.next.call(null,seq20409);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__20410,seq20409__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args20413 = [];
var len__16608__auto___21044 = arguments.length;
var i__16609__auto___21045 = (0);
while(true){
if((i__16609__auto___21045 < len__16608__auto___21044)){
args20413.push((arguments[i__16609__auto___21045]));

var G__21046 = (i__16609__auto___21045 + (1));
i__16609__auto___21045 = G__21046;
continue;
} else {
}
break;
}

var G__20417 = args20413.length;
switch (G__20417) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20413.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq20414){
var G__20415 = cljs.core.first.call(null,seq20414);
var seq20414__$1 = cljs.core.next.call(null,seq20414);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__20415,seq20414__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args20418 = [];
var len__16608__auto___21048 = arguments.length;
var i__16609__auto___21049 = (0);
while(true){
if((i__16609__auto___21049 < len__16608__auto___21048)){
args20418.push((arguments[i__16609__auto___21049]));

var G__21050 = (i__16609__auto___21049 + (1));
i__16609__auto___21049 = G__21050;
continue;
} else {
}
break;
}

var G__20422 = args20418.length;
switch (G__20422) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20418.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq20419){
var G__20420 = cljs.core.first.call(null,seq20419);
var seq20419__$1 = cljs.core.next.call(null,seq20419);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__20420,seq20419__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args20423 = [];
var len__16608__auto___21052 = arguments.length;
var i__16609__auto___21053 = (0);
while(true){
if((i__16609__auto___21053 < len__16608__auto___21052)){
args20423.push((arguments[i__16609__auto___21053]));

var G__21054 = (i__16609__auto___21053 + (1));
i__16609__auto___21053 = G__21054;
continue;
} else {
}
break;
}

var G__20427 = args20423.length;
switch (G__20427) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20423.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq20424){
var G__20425 = cljs.core.first.call(null,seq20424);
var seq20424__$1 = cljs.core.next.call(null,seq20424);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__20425,seq20424__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args20428 = [];
var len__16608__auto___21056 = arguments.length;
var i__16609__auto___21057 = (0);
while(true){
if((i__16609__auto___21057 < len__16608__auto___21056)){
args20428.push((arguments[i__16609__auto___21057]));

var G__21058 = (i__16609__auto___21057 + (1));
i__16609__auto___21057 = G__21058;
continue;
} else {
}
break;
}

var G__20432 = args20428.length;
switch (G__20432) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20428.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq20429){
var G__20430 = cljs.core.first.call(null,seq20429);
var seq20429__$1 = cljs.core.next.call(null,seq20429);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__20430,seq20429__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args20433 = [];
var len__16608__auto___21060 = arguments.length;
var i__16609__auto___21061 = (0);
while(true){
if((i__16609__auto___21061 < len__16608__auto___21060)){
args20433.push((arguments[i__16609__auto___21061]));

var G__21062 = (i__16609__auto___21061 + (1));
i__16609__auto___21061 = G__21062;
continue;
} else {
}
break;
}

var G__20437 = args20433.length;
switch (G__20437) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20433.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq20434){
var G__20435 = cljs.core.first.call(null,seq20434);
var seq20434__$1 = cljs.core.next.call(null,seq20434);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__20435,seq20434__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args20438 = [];
var len__16608__auto___21064 = arguments.length;
var i__16609__auto___21065 = (0);
while(true){
if((i__16609__auto___21065 < len__16608__auto___21064)){
args20438.push((arguments[i__16609__auto___21065]));

var G__21066 = (i__16609__auto___21065 + (1));
i__16609__auto___21065 = G__21066;
continue;
} else {
}
break;
}

var G__20442 = args20438.length;
switch (G__20442) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20438.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq20439){
var G__20440 = cljs.core.first.call(null,seq20439);
var seq20439__$1 = cljs.core.next.call(null,seq20439);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__20440,seq20439__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args20443 = [];
var len__16608__auto___21068 = arguments.length;
var i__16609__auto___21069 = (0);
while(true){
if((i__16609__auto___21069 < len__16608__auto___21068)){
args20443.push((arguments[i__16609__auto___21069]));

var G__21070 = (i__16609__auto___21069 + (1));
i__16609__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var G__20447 = args20443.length;
switch (G__20447) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20443.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq20444){
var G__20445 = cljs.core.first.call(null,seq20444);
var seq20444__$1 = cljs.core.next.call(null,seq20444);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__20445,seq20444__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.details = (function om_tools$dom$details(var_args){
var args20448 = [];
var len__16608__auto___21072 = arguments.length;
var i__16609__auto___21073 = (0);
while(true){
if((i__16609__auto___21073 < len__16608__auto___21072)){
args20448.push((arguments[i__16609__auto___21073]));

var G__21074 = (i__16609__auto___21073 + (1));
i__16609__auto___21073 = G__21074;
continue;
} else {
}
break;
}

var G__20452 = args20448.length;
switch (G__20452) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20448.slice((1)),(0)));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq20449){
var G__20450 = cljs.core.first.call(null,seq20449);
var seq20449__$1 = cljs.core.next.call(null,seq20449);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__20450,seq20449__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args20453 = [];
var len__16608__auto___21076 = arguments.length;
var i__16609__auto___21077 = (0);
while(true){
if((i__16609__auto___21077 < len__16608__auto___21076)){
args20453.push((arguments[i__16609__auto___21077]));

var G__21078 = (i__16609__auto___21077 + (1));
i__16609__auto___21077 = G__21078;
continue;
} else {
}
break;
}

var G__20457 = args20453.length;
switch (G__20457) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20453.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq20454){
var G__20455 = cljs.core.first.call(null,seq20454);
var seq20454__$1 = cljs.core.next.call(null,seq20454);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__20455,seq20454__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args20458 = [];
var len__16608__auto___21080 = arguments.length;
var i__16609__auto___21081 = (0);
while(true){
if((i__16609__auto___21081 < len__16608__auto___21080)){
args20458.push((arguments[i__16609__auto___21081]));

var G__21082 = (i__16609__auto___21081 + (1));
i__16609__auto___21081 = G__21082;
continue;
} else {
}
break;
}

var G__20462 = args20458.length;
switch (G__20462) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20458.slice((1)),(0)));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq20459){
var G__20460 = cljs.core.first.call(null,seq20459);
var seq20459__$1 = cljs.core.next.call(null,seq20459);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__20460,seq20459__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args20463 = [];
var len__16608__auto___21084 = arguments.length;
var i__16609__auto___21085 = (0);
while(true){
if((i__16609__auto___21085 < len__16608__auto___21084)){
args20463.push((arguments[i__16609__auto___21085]));

var G__21086 = (i__16609__auto___21085 + (1));
i__16609__auto___21085 = G__21086;
continue;
} else {
}
break;
}

var G__20467 = args20463.length;
switch (G__20467) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20463.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq20464){
var G__20465 = cljs.core.first.call(null,seq20464);
var seq20464__$1 = cljs.core.next.call(null,seq20464);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__20465,seq20464__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args20468 = [];
var len__16608__auto___21088 = arguments.length;
var i__16609__auto___21089 = (0);
while(true){
if((i__16609__auto___21089 < len__16608__auto___21088)){
args20468.push((arguments[i__16609__auto___21089]));

var G__21090 = (i__16609__auto___21089 + (1));
i__16609__auto___21089 = G__21090;
continue;
} else {
}
break;
}

var G__20472 = args20468.length;
switch (G__20472) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20468.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq20469){
var G__20470 = cljs.core.first.call(null,seq20469);
var seq20469__$1 = cljs.core.next.call(null,seq20469);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__20470,seq20469__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args20473 = [];
var len__16608__auto___21092 = arguments.length;
var i__16609__auto___21093 = (0);
while(true){
if((i__16609__auto___21093 < len__16608__auto___21092)){
args20473.push((arguments[i__16609__auto___21093]));

var G__21094 = (i__16609__auto___21093 + (1));
i__16609__auto___21093 = G__21094;
continue;
} else {
}
break;
}

var G__20477 = args20473.length;
switch (G__20477) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20473.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq20474){
var G__20475 = cljs.core.first.call(null,seq20474);
var seq20474__$1 = cljs.core.next.call(null,seq20474);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__20475,seq20474__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args20483 = [];
var len__16608__auto___21096 = arguments.length;
var i__16609__auto___21097 = (0);
while(true){
if((i__16609__auto___21097 < len__16608__auto___21096)){
args20483.push((arguments[i__16609__auto___21097]));

var G__21098 = (i__16609__auto___21097 + (1));
i__16609__auto___21097 = G__21098;
continue;
} else {
}
break;
}

var G__20487 = args20483.length;
switch (G__20487) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20483.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq20484){
var G__20485 = cljs.core.first.call(null,seq20484);
var seq20484__$1 = cljs.core.next.call(null,seq20484);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__20485,seq20484__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args20488 = [];
var len__16608__auto___21100 = arguments.length;
var i__16609__auto___21101 = (0);
while(true){
if((i__16609__auto___21101 < len__16608__auto___21100)){
args20488.push((arguments[i__16609__auto___21101]));

var G__21102 = (i__16609__auto___21101 + (1));
i__16609__auto___21101 = G__21102;
continue;
} else {
}
break;
}

var G__20492 = args20488.length;
switch (G__20492) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20488.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq20489){
var G__20490 = cljs.core.first.call(null,seq20489);
var seq20489__$1 = cljs.core.next.call(null,seq20489);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__20490,seq20489__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args20493 = [];
var len__16608__auto___21104 = arguments.length;
var i__16609__auto___21105 = (0);
while(true){
if((i__16609__auto___21105 < len__16608__auto___21104)){
args20493.push((arguments[i__16609__auto___21105]));

var G__21106 = (i__16609__auto___21105 + (1));
i__16609__auto___21105 = G__21106;
continue;
} else {
}
break;
}

var G__20497 = args20493.length;
switch (G__20497) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20493.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq20494){
var G__20495 = cljs.core.first.call(null,seq20494);
var seq20494__$1 = cljs.core.next.call(null,seq20494);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__20495,seq20494__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args20498 = [];
var len__16608__auto___21108 = arguments.length;
var i__16609__auto___21109 = (0);
while(true){
if((i__16609__auto___21109 < len__16608__auto___21108)){
args20498.push((arguments[i__16609__auto___21109]));

var G__21110 = (i__16609__auto___21109 + (1));
i__16609__auto___21109 = G__21110;
continue;
} else {
}
break;
}

var G__20502 = args20498.length;
switch (G__20502) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20498.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq20499){
var G__20500 = cljs.core.first.call(null,seq20499);
var seq20499__$1 = cljs.core.next.call(null,seq20499);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__20500,seq20499__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args20503 = [];
var len__16608__auto___21112 = arguments.length;
var i__16609__auto___21113 = (0);
while(true){
if((i__16609__auto___21113 < len__16608__auto___21112)){
args20503.push((arguments[i__16609__auto___21113]));

var G__21114 = (i__16609__auto___21113 + (1));
i__16609__auto___21113 = G__21114;
continue;
} else {
}
break;
}

var G__20507 = args20503.length;
switch (G__20507) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20503.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq20504){
var G__20505 = cljs.core.first.call(null,seq20504);
var seq20504__$1 = cljs.core.next.call(null,seq20504);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__20505,seq20504__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args20508 = [];
var len__16608__auto___21116 = arguments.length;
var i__16609__auto___21117 = (0);
while(true){
if((i__16609__auto___21117 < len__16608__auto___21116)){
args20508.push((arguments[i__16609__auto___21117]));

var G__21118 = (i__16609__auto___21117 + (1));
i__16609__auto___21117 = G__21118;
continue;
} else {
}
break;
}

var G__20512 = args20508.length;
switch (G__20512) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20508.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq20509){
var G__20510 = cljs.core.first.call(null,seq20509);
var seq20509__$1 = cljs.core.next.call(null,seq20509);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__20510,seq20509__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args20513 = [];
var len__16608__auto___21120 = arguments.length;
var i__16609__auto___21121 = (0);
while(true){
if((i__16609__auto___21121 < len__16608__auto___21120)){
args20513.push((arguments[i__16609__auto___21121]));

var G__21122 = (i__16609__auto___21121 + (1));
i__16609__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var G__20517 = args20513.length;
switch (G__20517) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20513.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq20514){
var G__20515 = cljs.core.first.call(null,seq20514);
var seq20514__$1 = cljs.core.next.call(null,seq20514);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__20515,seq20514__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args20518 = [];
var len__16608__auto___21124 = arguments.length;
var i__16609__auto___21125 = (0);
while(true){
if((i__16609__auto___21125 < len__16608__auto___21124)){
args20518.push((arguments[i__16609__auto___21125]));

var G__21126 = (i__16609__auto___21125 + (1));
i__16609__auto___21125 = G__21126;
continue;
} else {
}
break;
}

var G__20522 = args20518.length;
switch (G__20522) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20518.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq20519){
var G__20520 = cljs.core.first.call(null,seq20519);
var seq20519__$1 = cljs.core.next.call(null,seq20519);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__20520,seq20519__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args20523 = [];
var len__16608__auto___21128 = arguments.length;
var i__16609__auto___21129 = (0);
while(true){
if((i__16609__auto___21129 < len__16608__auto___21128)){
args20523.push((arguments[i__16609__auto___21129]));

var G__21130 = (i__16609__auto___21129 + (1));
i__16609__auto___21129 = G__21130;
continue;
} else {
}
break;
}

var G__20527 = args20523.length;
switch (G__20527) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20523.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq20524){
var G__20525 = cljs.core.first.call(null,seq20524);
var seq20524__$1 = cljs.core.next.call(null,seq20524);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__20525,seq20524__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args20528 = [];
var len__16608__auto___21132 = arguments.length;
var i__16609__auto___21133 = (0);
while(true){
if((i__16609__auto___21133 < len__16608__auto___21132)){
args20528.push((arguments[i__16609__auto___21133]));

var G__21134 = (i__16609__auto___21133 + (1));
i__16609__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var G__20532 = args20528.length;
switch (G__20532) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20528.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq20529){
var G__20530 = cljs.core.first.call(null,seq20529);
var seq20529__$1 = cljs.core.next.call(null,seq20529);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__20530,seq20529__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args20533 = [];
var len__16608__auto___21136 = arguments.length;
var i__16609__auto___21137 = (0);
while(true){
if((i__16609__auto___21137 < len__16608__auto___21136)){
args20533.push((arguments[i__16609__auto___21137]));

var G__21138 = (i__16609__auto___21137 + (1));
i__16609__auto___21137 = G__21138;
continue;
} else {
}
break;
}

var G__20537 = args20533.length;
switch (G__20537) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20533.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq20534){
var G__20535 = cljs.core.first.call(null,seq20534);
var seq20534__$1 = cljs.core.next.call(null,seq20534);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__20535,seq20534__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args20538 = [];
var len__16608__auto___21140 = arguments.length;
var i__16609__auto___21141 = (0);
while(true){
if((i__16609__auto___21141 < len__16608__auto___21140)){
args20538.push((arguments[i__16609__auto___21141]));

var G__21142 = (i__16609__auto___21141 + (1));
i__16609__auto___21141 = G__21142;
continue;
} else {
}
break;
}

var G__20542 = args20538.length;
switch (G__20542) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20538.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq20539){
var G__20540 = cljs.core.first.call(null,seq20539);
var seq20539__$1 = cljs.core.next.call(null,seq20539);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__20540,seq20539__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args20543 = [];
var len__16608__auto___21144 = arguments.length;
var i__16609__auto___21145 = (0);
while(true){
if((i__16609__auto___21145 < len__16608__auto___21144)){
args20543.push((arguments[i__16609__auto___21145]));

var G__21146 = (i__16609__auto___21145 + (1));
i__16609__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var G__20547 = args20543.length;
switch (G__20547) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20543.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq20544){
var G__20545 = cljs.core.first.call(null,seq20544);
var seq20544__$1 = cljs.core.next.call(null,seq20544);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__20545,seq20544__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args20548 = [];
var len__16608__auto___21148 = arguments.length;
var i__16609__auto___21149 = (0);
while(true){
if((i__16609__auto___21149 < len__16608__auto___21148)){
args20548.push((arguments[i__16609__auto___21149]));

var G__21150 = (i__16609__auto___21149 + (1));
i__16609__auto___21149 = G__21150;
continue;
} else {
}
break;
}

var G__20552 = args20548.length;
switch (G__20552) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20548.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq20549){
var G__20550 = cljs.core.first.call(null,seq20549);
var seq20549__$1 = cljs.core.next.call(null,seq20549);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__20550,seq20549__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args20553 = [];
var len__16608__auto___21152 = arguments.length;
var i__16609__auto___21153 = (0);
while(true){
if((i__16609__auto___21153 < len__16608__auto___21152)){
args20553.push((arguments[i__16609__auto___21153]));

var G__21154 = (i__16609__auto___21153 + (1));
i__16609__auto___21153 = G__21154;
continue;
} else {
}
break;
}

var G__20557 = args20553.length;
switch (G__20557) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20553.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq20554){
var G__20555 = cljs.core.first.call(null,seq20554);
var seq20554__$1 = cljs.core.next.call(null,seq20554);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__20555,seq20554__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args20558 = [];
var len__16608__auto___21156 = arguments.length;
var i__16609__auto___21157 = (0);
while(true){
if((i__16609__auto___21157 < len__16608__auto___21156)){
args20558.push((arguments[i__16609__auto___21157]));

var G__21158 = (i__16609__auto___21157 + (1));
i__16609__auto___21157 = G__21158;
continue;
} else {
}
break;
}

var G__20562 = args20558.length;
switch (G__20562) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20558.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq20559){
var G__20560 = cljs.core.first.call(null,seq20559);
var seq20559__$1 = cljs.core.next.call(null,seq20559);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__20560,seq20559__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args20563 = [];
var len__16608__auto___21160 = arguments.length;
var i__16609__auto___21161 = (0);
while(true){
if((i__16609__auto___21161 < len__16608__auto___21160)){
args20563.push((arguments[i__16609__auto___21161]));

var G__21162 = (i__16609__auto___21161 + (1));
i__16609__auto___21161 = G__21162;
continue;
} else {
}
break;
}

var G__20567 = args20563.length;
switch (G__20567) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20563.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq20564){
var G__20565 = cljs.core.first.call(null,seq20564);
var seq20564__$1 = cljs.core.next.call(null,seq20564);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__20565,seq20564__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args20568 = [];
var len__16608__auto___21164 = arguments.length;
var i__16609__auto___21165 = (0);
while(true){
if((i__16609__auto___21165 < len__16608__auto___21164)){
args20568.push((arguments[i__16609__auto___21165]));

var G__21166 = (i__16609__auto___21165 + (1));
i__16609__auto___21165 = G__21166;
continue;
} else {
}
break;
}

var G__20572 = args20568.length;
switch (G__20572) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20568.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq20569){
var G__20570 = cljs.core.first.call(null,seq20569);
var seq20569__$1 = cljs.core.next.call(null,seq20569);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__20570,seq20569__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args20573 = [];
var len__16608__auto___21168 = arguments.length;
var i__16609__auto___21169 = (0);
while(true){
if((i__16609__auto___21169 < len__16608__auto___21168)){
args20573.push((arguments[i__16609__auto___21169]));

var G__21170 = (i__16609__auto___21169 + (1));
i__16609__auto___21169 = G__21170;
continue;
} else {
}
break;
}

var G__20577 = args20573.length;
switch (G__20577) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20573.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq20574){
var G__20575 = cljs.core.first.call(null,seq20574);
var seq20574__$1 = cljs.core.next.call(null,seq20574);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__20575,seq20574__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args20578 = [];
var len__16608__auto___21172 = arguments.length;
var i__16609__auto___21173 = (0);
while(true){
if((i__16609__auto___21173 < len__16608__auto___21172)){
args20578.push((arguments[i__16609__auto___21173]));

var G__21174 = (i__16609__auto___21173 + (1));
i__16609__auto___21173 = G__21174;
continue;
} else {
}
break;
}

var G__20582 = args20578.length;
switch (G__20582) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20578.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq20579){
var G__20580 = cljs.core.first.call(null,seq20579);
var seq20579__$1 = cljs.core.next.call(null,seq20579);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__20580,seq20579__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args20583 = [];
var len__16608__auto___21176 = arguments.length;
var i__16609__auto___21177 = (0);
while(true){
if((i__16609__auto___21177 < len__16608__auto___21176)){
args20583.push((arguments[i__16609__auto___21177]));

var G__21178 = (i__16609__auto___21177 + (1));
i__16609__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var G__20587 = args20583.length;
switch (G__20587) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20583.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq20584){
var G__20585 = cljs.core.first.call(null,seq20584);
var seq20584__$1 = cljs.core.next.call(null,seq20584);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__20585,seq20584__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args20588 = [];
var len__16608__auto___21180 = arguments.length;
var i__16609__auto___21181 = (0);
while(true){
if((i__16609__auto___21181 < len__16608__auto___21180)){
args20588.push((arguments[i__16609__auto___21181]));

var G__21182 = (i__16609__auto___21181 + (1));
i__16609__auto___21181 = G__21182;
continue;
} else {
}
break;
}

var G__20592 = args20588.length;
switch (G__20592) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20588.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq20589){
var G__20590 = cljs.core.first.call(null,seq20589);
var seq20589__$1 = cljs.core.next.call(null,seq20589);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__20590,seq20589__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args20593 = [];
var len__16608__auto___21184 = arguments.length;
var i__16609__auto___21185 = (0);
while(true){
if((i__16609__auto___21185 < len__16608__auto___21184)){
args20593.push((arguments[i__16609__auto___21185]));

var G__21186 = (i__16609__auto___21185 + (1));
i__16609__auto___21185 = G__21186;
continue;
} else {
}
break;
}

var G__20597 = args20593.length;
switch (G__20597) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20593.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq20594){
var G__20595 = cljs.core.first.call(null,seq20594);
var seq20594__$1 = cljs.core.next.call(null,seq20594);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__20595,seq20594__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args20598 = [];
var len__16608__auto___21188 = arguments.length;
var i__16609__auto___21189 = (0);
while(true){
if((i__16609__auto___21189 < len__16608__auto___21188)){
args20598.push((arguments[i__16609__auto___21189]));

var G__21190 = (i__16609__auto___21189 + (1));
i__16609__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var G__20602 = args20598.length;
switch (G__20602) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20598.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq20599){
var G__20600 = cljs.core.first.call(null,seq20599);
var seq20599__$1 = cljs.core.next.call(null,seq20599);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__20600,seq20599__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args20603 = [];
var len__16608__auto___21192 = arguments.length;
var i__16609__auto___21193 = (0);
while(true){
if((i__16609__auto___21193 < len__16608__auto___21192)){
args20603.push((arguments[i__16609__auto___21193]));

var G__21194 = (i__16609__auto___21193 + (1));
i__16609__auto___21193 = G__21194;
continue;
} else {
}
break;
}

var G__20607 = args20603.length;
switch (G__20607) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20603.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq20604){
var G__20605 = cljs.core.first.call(null,seq20604);
var seq20604__$1 = cljs.core.next.call(null,seq20604);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__20605,seq20604__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args20608 = [];
var len__16608__auto___21196 = arguments.length;
var i__16609__auto___21197 = (0);
while(true){
if((i__16609__auto___21197 < len__16608__auto___21196)){
args20608.push((arguments[i__16609__auto___21197]));

var G__21198 = (i__16609__auto___21197 + (1));
i__16609__auto___21197 = G__21198;
continue;
} else {
}
break;
}

var G__20612 = args20608.length;
switch (G__20612) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20608.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq20609){
var G__20610 = cljs.core.first.call(null,seq20609);
var seq20609__$1 = cljs.core.next.call(null,seq20609);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__20610,seq20609__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args20613 = [];
var len__16608__auto___21200 = arguments.length;
var i__16609__auto___21201 = (0);
while(true){
if((i__16609__auto___21201 < len__16608__auto___21200)){
args20613.push((arguments[i__16609__auto___21201]));

var G__21202 = (i__16609__auto___21201 + (1));
i__16609__auto___21201 = G__21202;
continue;
} else {
}
break;
}

var G__20617 = args20613.length;
switch (G__20617) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20613.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq20614){
var G__20615 = cljs.core.first.call(null,seq20614);
var seq20614__$1 = cljs.core.next.call(null,seq20614);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__20615,seq20614__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args20618 = [];
var len__16608__auto___21204 = arguments.length;
var i__16609__auto___21205 = (0);
while(true){
if((i__16609__auto___21205 < len__16608__auto___21204)){
args20618.push((arguments[i__16609__auto___21205]));

var G__21206 = (i__16609__auto___21205 + (1));
i__16609__auto___21205 = G__21206;
continue;
} else {
}
break;
}

var G__20622 = args20618.length;
switch (G__20622) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20618.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq20619){
var G__20620 = cljs.core.first.call(null,seq20619);
var seq20619__$1 = cljs.core.next.call(null,seq20619);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__20620,seq20619__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args20623 = [];
var len__16608__auto___21208 = arguments.length;
var i__16609__auto___21209 = (0);
while(true){
if((i__16609__auto___21209 < len__16608__auto___21208)){
args20623.push((arguments[i__16609__auto___21209]));

var G__21210 = (i__16609__auto___21209 + (1));
i__16609__auto___21209 = G__21210;
continue;
} else {
}
break;
}

var G__20627 = args20623.length;
switch (G__20627) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20623.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq20624){
var G__20625 = cljs.core.first.call(null,seq20624);
var seq20624__$1 = cljs.core.next.call(null,seq20624);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__20625,seq20624__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args20628 = [];
var len__16608__auto___21212 = arguments.length;
var i__16609__auto___21213 = (0);
while(true){
if((i__16609__auto___21213 < len__16608__auto___21212)){
args20628.push((arguments[i__16609__auto___21213]));

var G__21214 = (i__16609__auto___21213 + (1));
i__16609__auto___21213 = G__21214;
continue;
} else {
}
break;
}

var G__20632 = args20628.length;
switch (G__20632) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20628.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq20629){
var G__20630 = cljs.core.first.call(null,seq20629);
var seq20629__$1 = cljs.core.next.call(null,seq20629);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__20630,seq20629__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args20633 = [];
var len__16608__auto___21216 = arguments.length;
var i__16609__auto___21217 = (0);
while(true){
if((i__16609__auto___21217 < len__16608__auto___21216)){
args20633.push((arguments[i__16609__auto___21217]));

var G__21218 = (i__16609__auto___21217 + (1));
i__16609__auto___21217 = G__21218;
continue;
} else {
}
break;
}

var G__20637 = args20633.length;
switch (G__20637) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20633.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq20634){
var G__20635 = cljs.core.first.call(null,seq20634);
var seq20634__$1 = cljs.core.next.call(null,seq20634);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__20635,seq20634__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args20638 = [];
var len__16608__auto___21220 = arguments.length;
var i__16609__auto___21221 = (0);
while(true){
if((i__16609__auto___21221 < len__16608__auto___21220)){
args20638.push((arguments[i__16609__auto___21221]));

var G__21222 = (i__16609__auto___21221 + (1));
i__16609__auto___21221 = G__21222;
continue;
} else {
}
break;
}

var G__20642 = args20638.length;
switch (G__20642) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20638.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq20639){
var G__20640 = cljs.core.first.call(null,seq20639);
var seq20639__$1 = cljs.core.next.call(null,seq20639);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__20640,seq20639__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args20643 = [];
var len__16608__auto___21224 = arguments.length;
var i__16609__auto___21225 = (0);
while(true){
if((i__16609__auto___21225 < len__16608__auto___21224)){
args20643.push((arguments[i__16609__auto___21225]));

var G__21226 = (i__16609__auto___21225 + (1));
i__16609__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var G__20647 = args20643.length;
switch (G__20647) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20643.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq20644){
var G__20645 = cljs.core.first.call(null,seq20644);
var seq20644__$1 = cljs.core.next.call(null,seq20644);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__20645,seq20644__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args20648 = [];
var len__16608__auto___21228 = arguments.length;
var i__16609__auto___21229 = (0);
while(true){
if((i__16609__auto___21229 < len__16608__auto___21228)){
args20648.push((arguments[i__16609__auto___21229]));

var G__21230 = (i__16609__auto___21229 + (1));
i__16609__auto___21229 = G__21230;
continue;
} else {
}
break;
}

var G__20652 = args20648.length;
switch (G__20652) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20648.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq20649){
var G__20650 = cljs.core.first.call(null,seq20649);
var seq20649__$1 = cljs.core.next.call(null,seq20649);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__20650,seq20649__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args20653 = [];
var len__16608__auto___21232 = arguments.length;
var i__16609__auto___21233 = (0);
while(true){
if((i__16609__auto___21233 < len__16608__auto___21232)){
args20653.push((arguments[i__16609__auto___21233]));

var G__21234 = (i__16609__auto___21233 + (1));
i__16609__auto___21233 = G__21234;
continue;
} else {
}
break;
}

var G__20657 = args20653.length;
switch (G__20657) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20653.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq20654){
var G__20655 = cljs.core.first.call(null,seq20654);
var seq20654__$1 = cljs.core.next.call(null,seq20654);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__20655,seq20654__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args20658 = [];
var len__16608__auto___21236 = arguments.length;
var i__16609__auto___21237 = (0);
while(true){
if((i__16609__auto___21237 < len__16608__auto___21236)){
args20658.push((arguments[i__16609__auto___21237]));

var G__21238 = (i__16609__auto___21237 + (1));
i__16609__auto___21237 = G__21238;
continue;
} else {
}
break;
}

var G__20662 = args20658.length;
switch (G__20662) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20658.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq20659){
var G__20660 = cljs.core.first.call(null,seq20659);
var seq20659__$1 = cljs.core.next.call(null,seq20659);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__20660,seq20659__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args20663 = [];
var len__16608__auto___21240 = arguments.length;
var i__16609__auto___21241 = (0);
while(true){
if((i__16609__auto___21241 < len__16608__auto___21240)){
args20663.push((arguments[i__16609__auto___21241]));

var G__21242 = (i__16609__auto___21241 + (1));
i__16609__auto___21241 = G__21242;
continue;
} else {
}
break;
}

var G__20667 = args20663.length;
switch (G__20667) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20663.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq20664){
var G__20665 = cljs.core.first.call(null,seq20664);
var seq20664__$1 = cljs.core.next.call(null,seq20664);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__20665,seq20664__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args20668 = [];
var len__16608__auto___21244 = arguments.length;
var i__16609__auto___21245 = (0);
while(true){
if((i__16609__auto___21245 < len__16608__auto___21244)){
args20668.push((arguments[i__16609__auto___21245]));

var G__21246 = (i__16609__auto___21245 + (1));
i__16609__auto___21245 = G__21246;
continue;
} else {
}
break;
}

var G__20672 = args20668.length;
switch (G__20672) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20668.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq20669){
var G__20670 = cljs.core.first.call(null,seq20669);
var seq20669__$1 = cljs.core.next.call(null,seq20669);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__20670,seq20669__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args20673 = [];
var len__16608__auto___21248 = arguments.length;
var i__16609__auto___21249 = (0);
while(true){
if((i__16609__auto___21249 < len__16608__auto___21248)){
args20673.push((arguments[i__16609__auto___21249]));

var G__21250 = (i__16609__auto___21249 + (1));
i__16609__auto___21249 = G__21250;
continue;
} else {
}
break;
}

var G__20677 = args20673.length;
switch (G__20677) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20673.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq20674){
var G__20675 = cljs.core.first.call(null,seq20674);
var seq20674__$1 = cljs.core.next.call(null,seq20674);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__20675,seq20674__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args20678 = [];
var len__16608__auto___21252 = arguments.length;
var i__16609__auto___21253 = (0);
while(true){
if((i__16609__auto___21253 < len__16608__auto___21252)){
args20678.push((arguments[i__16609__auto___21253]));

var G__21254 = (i__16609__auto___21253 + (1));
i__16609__auto___21253 = G__21254;
continue;
} else {
}
break;
}

var G__20682 = args20678.length;
switch (G__20682) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20678.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq20679){
var G__20680 = cljs.core.first.call(null,seq20679);
var seq20679__$1 = cljs.core.next.call(null,seq20679);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__20680,seq20679__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args20683 = [];
var len__16608__auto___21256 = arguments.length;
var i__16609__auto___21257 = (0);
while(true){
if((i__16609__auto___21257 < len__16608__auto___21256)){
args20683.push((arguments[i__16609__auto___21257]));

var G__21258 = (i__16609__auto___21257 + (1));
i__16609__auto___21257 = G__21258;
continue;
} else {
}
break;
}

var G__20687 = args20683.length;
switch (G__20687) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20683.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq20684){
var G__20685 = cljs.core.first.call(null,seq20684);
var seq20684__$1 = cljs.core.next.call(null,seq20684);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__20685,seq20684__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args20688 = [];
var len__16608__auto___21260 = arguments.length;
var i__16609__auto___21261 = (0);
while(true){
if((i__16609__auto___21261 < len__16608__auto___21260)){
args20688.push((arguments[i__16609__auto___21261]));

var G__21262 = (i__16609__auto___21261 + (1));
i__16609__auto___21261 = G__21262;
continue;
} else {
}
break;
}

var G__20692 = args20688.length;
switch (G__20692) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20688.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq20689){
var G__20690 = cljs.core.first.call(null,seq20689);
var seq20689__$1 = cljs.core.next.call(null,seq20689);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__20690,seq20689__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args20693 = [];
var len__16608__auto___21264 = arguments.length;
var i__16609__auto___21265 = (0);
while(true){
if((i__16609__auto___21265 < len__16608__auto___21264)){
args20693.push((arguments[i__16609__auto___21265]));

var G__21266 = (i__16609__auto___21265 + (1));
i__16609__auto___21265 = G__21266;
continue;
} else {
}
break;
}

var G__20697 = args20693.length;
switch (G__20697) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20693.slice((1)),(0)));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq20694){
var G__20695 = cljs.core.first.call(null,seq20694);
var seq20694__$1 = cljs.core.next.call(null,seq20694);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__20695,seq20694__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args20698 = [];
var len__16608__auto___21268 = arguments.length;
var i__16609__auto___21269 = (0);
while(true){
if((i__16609__auto___21269 < len__16608__auto___21268)){
args20698.push((arguments[i__16609__auto___21269]));

var G__21270 = (i__16609__auto___21269 + (1));
i__16609__auto___21269 = G__21270;
continue;
} else {
}
break;
}

var G__20702 = args20698.length;
switch (G__20702) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20698.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq20699){
var G__20700 = cljs.core.first.call(null,seq20699);
var seq20699__$1 = cljs.core.next.call(null,seq20699);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__20700,seq20699__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args20703 = [];
var len__16608__auto___21272 = arguments.length;
var i__16609__auto___21273 = (0);
while(true){
if((i__16609__auto___21273 < len__16608__auto___21272)){
args20703.push((arguments[i__16609__auto___21273]));

var G__21274 = (i__16609__auto___21273 + (1));
i__16609__auto___21273 = G__21274;
continue;
} else {
}
break;
}

var G__20707 = args20703.length;
switch (G__20707) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20703.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq20704){
var G__20705 = cljs.core.first.call(null,seq20704);
var seq20704__$1 = cljs.core.next.call(null,seq20704);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__20705,seq20704__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args20708 = [];
var len__16608__auto___21276 = arguments.length;
var i__16609__auto___21277 = (0);
while(true){
if((i__16609__auto___21277 < len__16608__auto___21276)){
args20708.push((arguments[i__16609__auto___21277]));

var G__21278 = (i__16609__auto___21277 + (1));
i__16609__auto___21277 = G__21278;
continue;
} else {
}
break;
}

var G__20712 = args20708.length;
switch (G__20712) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20708.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq20709){
var G__20710 = cljs.core.first.call(null,seq20709);
var seq20709__$1 = cljs.core.next.call(null,seq20709);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__20710,seq20709__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args20713 = [];
var len__16608__auto___21280 = arguments.length;
var i__16609__auto___21281 = (0);
while(true){
if((i__16609__auto___21281 < len__16608__auto___21280)){
args20713.push((arguments[i__16609__auto___21281]));

var G__21282 = (i__16609__auto___21281 + (1));
i__16609__auto___21281 = G__21282;
continue;
} else {
}
break;
}

var G__20717 = args20713.length;
switch (G__20717) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20713.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq20714){
var G__20715 = cljs.core.first.call(null,seq20714);
var seq20714__$1 = cljs.core.next.call(null,seq20714);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__20715,seq20714__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args20718 = [];
var len__16608__auto___21284 = arguments.length;
var i__16609__auto___21285 = (0);
while(true){
if((i__16609__auto___21285 < len__16608__auto___21284)){
args20718.push((arguments[i__16609__auto___21285]));

var G__21286 = (i__16609__auto___21285 + (1));
i__16609__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var G__20722 = args20718.length;
switch (G__20722) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20718.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq20719){
var G__20720 = cljs.core.first.call(null,seq20719);
var seq20719__$1 = cljs.core.next.call(null,seq20719);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__20720,seq20719__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args20723 = [];
var len__16608__auto___21288 = arguments.length;
var i__16609__auto___21289 = (0);
while(true){
if((i__16609__auto___21289 < len__16608__auto___21288)){
args20723.push((arguments[i__16609__auto___21289]));

var G__21290 = (i__16609__auto___21289 + (1));
i__16609__auto___21289 = G__21290;
continue;
} else {
}
break;
}

var G__20727 = args20723.length;
switch (G__20727) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20723.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq20724){
var G__20725 = cljs.core.first.call(null,seq20724);
var seq20724__$1 = cljs.core.next.call(null,seq20724);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__20725,seq20724__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args20728 = [];
var len__16608__auto___21292 = arguments.length;
var i__16609__auto___21293 = (0);
while(true){
if((i__16609__auto___21293 < len__16608__auto___21292)){
args20728.push((arguments[i__16609__auto___21293]));

var G__21294 = (i__16609__auto___21293 + (1));
i__16609__auto___21293 = G__21294;
continue;
} else {
}
break;
}

var G__20732 = args20728.length;
switch (G__20732) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20728.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq20729){
var G__20730 = cljs.core.first.call(null,seq20729);
var seq20729__$1 = cljs.core.next.call(null,seq20729);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__20730,seq20729__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args20733 = [];
var len__16608__auto___21296 = arguments.length;
var i__16609__auto___21297 = (0);
while(true){
if((i__16609__auto___21297 < len__16608__auto___21296)){
args20733.push((arguments[i__16609__auto___21297]));

var G__21298 = (i__16609__auto___21297 + (1));
i__16609__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var G__20737 = args20733.length;
switch (G__20737) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20733.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq20734){
var G__20735 = cljs.core.first.call(null,seq20734);
var seq20734__$1 = cljs.core.next.call(null,seq20734);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__20735,seq20734__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args20738 = [];
var len__16608__auto___21300 = arguments.length;
var i__16609__auto___21301 = (0);
while(true){
if((i__16609__auto___21301 < len__16608__auto___21300)){
args20738.push((arguments[i__16609__auto___21301]));

var G__21302 = (i__16609__auto___21301 + (1));
i__16609__auto___21301 = G__21302;
continue;
} else {
}
break;
}

var G__20742 = args20738.length;
switch (G__20742) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20738.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq20739){
var G__20740 = cljs.core.first.call(null,seq20739);
var seq20739__$1 = cljs.core.next.call(null,seq20739);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__20740,seq20739__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args20743 = [];
var len__16608__auto___21304 = arguments.length;
var i__16609__auto___21305 = (0);
while(true){
if((i__16609__auto___21305 < len__16608__auto___21304)){
args20743.push((arguments[i__16609__auto___21305]));

var G__21306 = (i__16609__auto___21305 + (1));
i__16609__auto___21305 = G__21306;
continue;
} else {
}
break;
}

var G__20747 = args20743.length;
switch (G__20747) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20743.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq20744){
var G__20745 = cljs.core.first.call(null,seq20744);
var seq20744__$1 = cljs.core.next.call(null,seq20744);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__20745,seq20744__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args20748 = [];
var len__16608__auto___21308 = arguments.length;
var i__16609__auto___21309 = (0);
while(true){
if((i__16609__auto___21309 < len__16608__auto___21308)){
args20748.push((arguments[i__16609__auto___21309]));

var G__21310 = (i__16609__auto___21309 + (1));
i__16609__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var G__20752 = args20748.length;
switch (G__20752) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20748.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq20749){
var G__20750 = cljs.core.first.call(null,seq20749);
var seq20749__$1 = cljs.core.next.call(null,seq20749);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__20750,seq20749__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args20753 = [];
var len__16608__auto___21312 = arguments.length;
var i__16609__auto___21313 = (0);
while(true){
if((i__16609__auto___21313 < len__16608__auto___21312)){
args20753.push((arguments[i__16609__auto___21313]));

var G__21314 = (i__16609__auto___21313 + (1));
i__16609__auto___21313 = G__21314;
continue;
} else {
}
break;
}

var G__20757 = args20753.length;
switch (G__20757) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20753.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq20754){
var G__20755 = cljs.core.first.call(null,seq20754);
var seq20754__$1 = cljs.core.next.call(null,seq20754);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__20755,seq20754__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args20758 = [];
var len__16608__auto___21316 = arguments.length;
var i__16609__auto___21317 = (0);
while(true){
if((i__16609__auto___21317 < len__16608__auto___21316)){
args20758.push((arguments[i__16609__auto___21317]));

var G__21318 = (i__16609__auto___21317 + (1));
i__16609__auto___21317 = G__21318;
continue;
} else {
}
break;
}

var G__20762 = args20758.length;
switch (G__20762) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20758.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq20759){
var G__20760 = cljs.core.first.call(null,seq20759);
var seq20759__$1 = cljs.core.next.call(null,seq20759);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__20760,seq20759__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args20763 = [];
var len__16608__auto___21320 = arguments.length;
var i__16609__auto___21321 = (0);
while(true){
if((i__16609__auto___21321 < len__16608__auto___21320)){
args20763.push((arguments[i__16609__auto___21321]));

var G__21322 = (i__16609__auto___21321 + (1));
i__16609__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var G__20767 = args20763.length;
switch (G__20767) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20763.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq20764){
var G__20765 = cljs.core.first.call(null,seq20764);
var seq20764__$1 = cljs.core.next.call(null,seq20764);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__20765,seq20764__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args20768 = [];
var len__16608__auto___21324 = arguments.length;
var i__16609__auto___21325 = (0);
while(true){
if((i__16609__auto___21325 < len__16608__auto___21324)){
args20768.push((arguments[i__16609__auto___21325]));

var G__21326 = (i__16609__auto___21325 + (1));
i__16609__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var G__20772 = args20768.length;
switch (G__20772) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20768.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq20769){
var G__20770 = cljs.core.first.call(null,seq20769);
var seq20769__$1 = cljs.core.next.call(null,seq20769);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__20770,seq20769__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args20773 = [];
var len__16608__auto___21328 = arguments.length;
var i__16609__auto___21329 = (0);
while(true){
if((i__16609__auto___21329 < len__16608__auto___21328)){
args20773.push((arguments[i__16609__auto___21329]));

var G__21330 = (i__16609__auto___21329 + (1));
i__16609__auto___21329 = G__21330;
continue;
} else {
}
break;
}

var G__20777 = args20773.length;
switch (G__20777) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20773.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq20774){
var G__20775 = cljs.core.first.call(null,seq20774);
var seq20774__$1 = cljs.core.next.call(null,seq20774);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__20775,seq20774__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args20778 = [];
var len__16608__auto___21332 = arguments.length;
var i__16609__auto___21333 = (0);
while(true){
if((i__16609__auto___21333 < len__16608__auto___21332)){
args20778.push((arguments[i__16609__auto___21333]));

var G__21334 = (i__16609__auto___21333 + (1));
i__16609__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var G__20782 = args20778.length;
switch (G__20782) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20778.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq20779){
var G__20780 = cljs.core.first.call(null,seq20779);
var seq20779__$1 = cljs.core.next.call(null,seq20779);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__20780,seq20779__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args20783 = [];
var len__16608__auto___21336 = arguments.length;
var i__16609__auto___21337 = (0);
while(true){
if((i__16609__auto___21337 < len__16608__auto___21336)){
args20783.push((arguments[i__16609__auto___21337]));

var G__21338 = (i__16609__auto___21337 + (1));
i__16609__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var G__20787 = args20783.length;
switch (G__20787) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20783.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq20784){
var G__20785 = cljs.core.first.call(null,seq20784);
var seq20784__$1 = cljs.core.next.call(null,seq20784);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__20785,seq20784__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args20788 = [];
var len__16608__auto___21340 = arguments.length;
var i__16609__auto___21341 = (0);
while(true){
if((i__16609__auto___21341 < len__16608__auto___21340)){
args20788.push((arguments[i__16609__auto___21341]));

var G__21342 = (i__16609__auto___21341 + (1));
i__16609__auto___21341 = G__21342;
continue;
} else {
}
break;
}

var G__20792 = args20788.length;
switch (G__20792) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20788.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq20789){
var G__20790 = cljs.core.first.call(null,seq20789);
var seq20789__$1 = cljs.core.next.call(null,seq20789);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__20790,seq20789__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args20793 = [];
var len__16608__auto___21344 = arguments.length;
var i__16609__auto___21345 = (0);
while(true){
if((i__16609__auto___21345 < len__16608__auto___21344)){
args20793.push((arguments[i__16609__auto___21345]));

var G__21346 = (i__16609__auto___21345 + (1));
i__16609__auto___21345 = G__21346;
continue;
} else {
}
break;
}

var G__20797 = args20793.length;
switch (G__20797) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20793.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq20794){
var G__20795 = cljs.core.first.call(null,seq20794);
var seq20794__$1 = cljs.core.next.call(null,seq20794);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__20795,seq20794__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args20798 = [];
var len__16608__auto___21348 = arguments.length;
var i__16609__auto___21349 = (0);
while(true){
if((i__16609__auto___21349 < len__16608__auto___21348)){
args20798.push((arguments[i__16609__auto___21349]));

var G__21350 = (i__16609__auto___21349 + (1));
i__16609__auto___21349 = G__21350;
continue;
} else {
}
break;
}

var G__20802 = args20798.length;
switch (G__20802) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20798.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq20799){
var G__20800 = cljs.core.first.call(null,seq20799);
var seq20799__$1 = cljs.core.next.call(null,seq20799);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__20800,seq20799__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args20803 = [];
var len__16608__auto___21352 = arguments.length;
var i__16609__auto___21353 = (0);
while(true){
if((i__16609__auto___21353 < len__16608__auto___21352)){
args20803.push((arguments[i__16609__auto___21353]));

var G__21354 = (i__16609__auto___21353 + (1));
i__16609__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var G__20807 = args20803.length;
switch (G__20807) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20803.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq20804){
var G__20805 = cljs.core.first.call(null,seq20804);
var seq20804__$1 = cljs.core.next.call(null,seq20804);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__20805,seq20804__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args20808 = [];
var len__16608__auto___21356 = arguments.length;
var i__16609__auto___21357 = (0);
while(true){
if((i__16609__auto___21357 < len__16608__auto___21356)){
args20808.push((arguments[i__16609__auto___21357]));

var G__21358 = (i__16609__auto___21357 + (1));
i__16609__auto___21357 = G__21358;
continue;
} else {
}
break;
}

var G__20812 = args20808.length;
switch (G__20812) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20808.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq20809){
var G__20810 = cljs.core.first.call(null,seq20809);
var seq20809__$1 = cljs.core.next.call(null,seq20809);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__20810,seq20809__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args20813 = [];
var len__16608__auto___21360 = arguments.length;
var i__16609__auto___21361 = (0);
while(true){
if((i__16609__auto___21361 < len__16608__auto___21360)){
args20813.push((arguments[i__16609__auto___21361]));

var G__21362 = (i__16609__auto___21361 + (1));
i__16609__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__20817 = args20813.length;
switch (G__20817) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20813.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq20814){
var G__20815 = cljs.core.first.call(null,seq20814);
var seq20814__$1 = cljs.core.next.call(null,seq20814);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__20815,seq20814__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args20818 = [];
var len__16608__auto___21364 = arguments.length;
var i__16609__auto___21365 = (0);
while(true){
if((i__16609__auto___21365 < len__16608__auto___21364)){
args20818.push((arguments[i__16609__auto___21365]));

var G__21366 = (i__16609__auto___21365 + (1));
i__16609__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var G__20822 = args20818.length;
switch (G__20822) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20818.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq20819){
var G__20820 = cljs.core.first.call(null,seq20819);
var seq20819__$1 = cljs.core.next.call(null,seq20819);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__20820,seq20819__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args20823 = [];
var len__16608__auto___21368 = arguments.length;
var i__16609__auto___21369 = (0);
while(true){
if((i__16609__auto___21369 < len__16608__auto___21368)){
args20823.push((arguments[i__16609__auto___21369]));

var G__21370 = (i__16609__auto___21369 + (1));
i__16609__auto___21369 = G__21370;
continue;
} else {
}
break;
}

var G__20827 = args20823.length;
switch (G__20827) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20823.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq20824){
var G__20825 = cljs.core.first.call(null,seq20824);
var seq20824__$1 = cljs.core.next.call(null,seq20824);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__20825,seq20824__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args20828 = [];
var len__16608__auto___21372 = arguments.length;
var i__16609__auto___21373 = (0);
while(true){
if((i__16609__auto___21373 < len__16608__auto___21372)){
args20828.push((arguments[i__16609__auto___21373]));

var G__21374 = (i__16609__auto___21373 + (1));
i__16609__auto___21373 = G__21374;
continue;
} else {
}
break;
}

var G__20832 = args20828.length;
switch (G__20832) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20828.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq20829){
var G__20830 = cljs.core.first.call(null,seq20829);
var seq20829__$1 = cljs.core.next.call(null,seq20829);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__20830,seq20829__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args20833 = [];
var len__16608__auto___21376 = arguments.length;
var i__16609__auto___21377 = (0);
while(true){
if((i__16609__auto___21377 < len__16608__auto___21376)){
args20833.push((arguments[i__16609__auto___21377]));

var G__21378 = (i__16609__auto___21377 + (1));
i__16609__auto___21377 = G__21378;
continue;
} else {
}
break;
}

var G__20837 = args20833.length;
switch (G__20837) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20833.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq20834){
var G__20835 = cljs.core.first.call(null,seq20834);
var seq20834__$1 = cljs.core.next.call(null,seq20834);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__20835,seq20834__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args20838 = [];
var len__16608__auto___21380 = arguments.length;
var i__16609__auto___21381 = (0);
while(true){
if((i__16609__auto___21381 < len__16608__auto___21380)){
args20838.push((arguments[i__16609__auto___21381]));

var G__21382 = (i__16609__auto___21381 + (1));
i__16609__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var G__20842 = args20838.length;
switch (G__20842) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20838.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq20839){
var G__20840 = cljs.core.first.call(null,seq20839);
var seq20839__$1 = cljs.core.next.call(null,seq20839);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__20840,seq20839__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args20843 = [];
var len__16608__auto___21384 = arguments.length;
var i__16609__auto___21385 = (0);
while(true){
if((i__16609__auto___21385 < len__16608__auto___21384)){
args20843.push((arguments[i__16609__auto___21385]));

var G__21386 = (i__16609__auto___21385 + (1));
i__16609__auto___21385 = G__21386;
continue;
} else {
}
break;
}

var G__20847 = args20843.length;
switch (G__20847) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20843.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq20844){
var G__20845 = cljs.core.first.call(null,seq20844);
var seq20844__$1 = cljs.core.next.call(null,seq20844);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__20845,seq20844__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args20848 = [];
var len__16608__auto___21388 = arguments.length;
var i__16609__auto___21389 = (0);
while(true){
if((i__16609__auto___21389 < len__16608__auto___21388)){
args20848.push((arguments[i__16609__auto___21389]));

var G__21390 = (i__16609__auto___21389 + (1));
i__16609__auto___21389 = G__21390;
continue;
} else {
}
break;
}

var G__20852 = args20848.length;
switch (G__20852) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20848.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq20849){
var G__20850 = cljs.core.first.call(null,seq20849);
var seq20849__$1 = cljs.core.next.call(null,seq20849);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__20850,seq20849__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args20853 = [];
var len__16608__auto___21392 = arguments.length;
var i__16609__auto___21393 = (0);
while(true){
if((i__16609__auto___21393 < len__16608__auto___21392)){
args20853.push((arguments[i__16609__auto___21393]));

var G__21394 = (i__16609__auto___21393 + (1));
i__16609__auto___21393 = G__21394;
continue;
} else {
}
break;
}

var G__20857 = args20853.length;
switch (G__20857) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20853.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq20854){
var G__20855 = cljs.core.first.call(null,seq20854);
var seq20854__$1 = cljs.core.next.call(null,seq20854);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__20855,seq20854__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args20858 = [];
var len__16608__auto___21396 = arguments.length;
var i__16609__auto___21397 = (0);
while(true){
if((i__16609__auto___21397 < len__16608__auto___21396)){
args20858.push((arguments[i__16609__auto___21397]));

var G__21398 = (i__16609__auto___21397 + (1));
i__16609__auto___21397 = G__21398;
continue;
} else {
}
break;
}

var G__20862 = args20858.length;
switch (G__20862) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20858.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq20859){
var G__20860 = cljs.core.first.call(null,seq20859);
var seq20859__$1 = cljs.core.next.call(null,seq20859);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__20860,seq20859__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args20863 = [];
var len__16608__auto___21400 = arguments.length;
var i__16609__auto___21401 = (0);
while(true){
if((i__16609__auto___21401 < len__16608__auto___21400)){
args20863.push((arguments[i__16609__auto___21401]));

var G__21402 = (i__16609__auto___21401 + (1));
i__16609__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var G__20867 = args20863.length;
switch (G__20867) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20863.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq20864){
var G__20865 = cljs.core.first.call(null,seq20864);
var seq20864__$1 = cljs.core.next.call(null,seq20864);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__20865,seq20864__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args20868 = [];
var len__16608__auto___21404 = arguments.length;
var i__16609__auto___21405 = (0);
while(true){
if((i__16609__auto___21405 < len__16608__auto___21404)){
args20868.push((arguments[i__16609__auto___21405]));

var G__21406 = (i__16609__auto___21405 + (1));
i__16609__auto___21405 = G__21406;
continue;
} else {
}
break;
}

var G__20872 = args20868.length;
switch (G__20872) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20868.slice((1)),(0)));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq20869){
var G__20870 = cljs.core.first.call(null,seq20869);
var seq20869__$1 = cljs.core.next.call(null,seq20869);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__20870,seq20869__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args20873 = [];
var len__16608__auto___21408 = arguments.length;
var i__16609__auto___21409 = (0);
while(true){
if((i__16609__auto___21409 < len__16608__auto___21408)){
args20873.push((arguments[i__16609__auto___21409]));

var G__21410 = (i__16609__auto___21409 + (1));
i__16609__auto___21409 = G__21410;
continue;
} else {
}
break;
}

var G__20877 = args20873.length;
switch (G__20877) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20873.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq20874){
var G__20875 = cljs.core.first.call(null,seq20874);
var seq20874__$1 = cljs.core.next.call(null,seq20874);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__20875,seq20874__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args20878 = [];
var len__16608__auto___21412 = arguments.length;
var i__16609__auto___21413 = (0);
while(true){
if((i__16609__auto___21413 < len__16608__auto___21412)){
args20878.push((arguments[i__16609__auto___21413]));

var G__21414 = (i__16609__auto___21413 + (1));
i__16609__auto___21413 = G__21414;
continue;
} else {
}
break;
}

var G__20882 = args20878.length;
switch (G__20882) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20878.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq20879){
var G__20880 = cljs.core.first.call(null,seq20879);
var seq20879__$1 = cljs.core.next.call(null,seq20879);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__20880,seq20879__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args20883 = [];
var len__16608__auto___21416 = arguments.length;
var i__16609__auto___21417 = (0);
while(true){
if((i__16609__auto___21417 < len__16608__auto___21416)){
args20883.push((arguments[i__16609__auto___21417]));

var G__21418 = (i__16609__auto___21417 + (1));
i__16609__auto___21417 = G__21418;
continue;
} else {
}
break;
}

var G__20887 = args20883.length;
switch (G__20887) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20883.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq20884){
var G__20885 = cljs.core.first.call(null,seq20884);
var seq20884__$1 = cljs.core.next.call(null,seq20884);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__20885,seq20884__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args20888 = [];
var len__16608__auto___21420 = arguments.length;
var i__16609__auto___21421 = (0);
while(true){
if((i__16609__auto___21421 < len__16608__auto___21420)){
args20888.push((arguments[i__16609__auto___21421]));

var G__21422 = (i__16609__auto___21421 + (1));
i__16609__auto___21421 = G__21422;
continue;
} else {
}
break;
}

var G__20892 = args20888.length;
switch (G__20892) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20888.slice((1)),(0)));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq20889){
var G__20890 = cljs.core.first.call(null,seq20889);
var seq20889__$1 = cljs.core.next.call(null,seq20889);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__20890,seq20889__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args20893 = [];
var len__16608__auto___21424 = arguments.length;
var i__16609__auto___21425 = (0);
while(true){
if((i__16609__auto___21425 < len__16608__auto___21424)){
args20893.push((arguments[i__16609__auto___21425]));

var G__21426 = (i__16609__auto___21425 + (1));
i__16609__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var G__20897 = args20893.length;
switch (G__20897) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20893.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq20894){
var G__20895 = cljs.core.first.call(null,seq20894);
var seq20894__$1 = cljs.core.next.call(null,seq20894);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__20895,seq20894__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args20898 = [];
var len__16608__auto___21428 = arguments.length;
var i__16609__auto___21429 = (0);
while(true){
if((i__16609__auto___21429 < len__16608__auto___21428)){
args20898.push((arguments[i__16609__auto___21429]));

var G__21430 = (i__16609__auto___21429 + (1));
i__16609__auto___21429 = G__21430;
continue;
} else {
}
break;
}

var G__20902 = args20898.length;
switch (G__20902) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20898.slice((1)),(0)));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq20899){
var G__20900 = cljs.core.first.call(null,seq20899);
var seq20899__$1 = cljs.core.next.call(null,seq20899);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__20900,seq20899__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args20903 = [];
var len__16608__auto___21432 = arguments.length;
var i__16609__auto___21433 = (0);
while(true){
if((i__16609__auto___21433 < len__16608__auto___21432)){
args20903.push((arguments[i__16609__auto___21433]));

var G__21434 = (i__16609__auto___21433 + (1));
i__16609__auto___21433 = G__21434;
continue;
} else {
}
break;
}

var G__20907 = args20903.length;
switch (G__20907) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20903.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq20904){
var G__20905 = cljs.core.first.call(null,seq20904);
var seq20904__$1 = cljs.core.next.call(null,seq20904);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__20905,seq20904__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args20908 = [];
var len__16608__auto___21436 = arguments.length;
var i__16609__auto___21437 = (0);
while(true){
if((i__16609__auto___21437 < len__16608__auto___21436)){
args20908.push((arguments[i__16609__auto___21437]));

var G__21438 = (i__16609__auto___21437 + (1));
i__16609__auto___21437 = G__21438;
continue;
} else {
}
break;
}

var G__20912 = args20908.length;
switch (G__20912) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20908.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq20909){
var G__20910 = cljs.core.first.call(null,seq20909);
var seq20909__$1 = cljs.core.next.call(null,seq20909);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__20910,seq20909__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args20913 = [];
var len__16608__auto___21440 = arguments.length;
var i__16609__auto___21441 = (0);
while(true){
if((i__16609__auto___21441 < len__16608__auto___21440)){
args20913.push((arguments[i__16609__auto___21441]));

var G__21442 = (i__16609__auto___21441 + (1));
i__16609__auto___21441 = G__21442;
continue;
} else {
}
break;
}

var G__20917 = args20913.length;
switch (G__20917) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20913.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq20914){
var G__20915 = cljs.core.first.call(null,seq20914);
var seq20914__$1 = cljs.core.next.call(null,seq20914);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__20915,seq20914__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args20918 = [];
var len__16608__auto___21444 = arguments.length;
var i__16609__auto___21445 = (0);
while(true){
if((i__16609__auto___21445 < len__16608__auto___21444)){
args20918.push((arguments[i__16609__auto___21445]));

var G__21446 = (i__16609__auto___21445 + (1));
i__16609__auto___21445 = G__21446;
continue;
} else {
}
break;
}

var G__20922 = args20918.length;
switch (G__20922) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20918.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq20919){
var G__20920 = cljs.core.first.call(null,seq20919);
var seq20919__$1 = cljs.core.next.call(null,seq20919);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__20920,seq20919__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args20923 = [];
var len__16608__auto___21448 = arguments.length;
var i__16609__auto___21449 = (0);
while(true){
if((i__16609__auto___21449 < len__16608__auto___21448)){
args20923.push((arguments[i__16609__auto___21449]));

var G__21450 = (i__16609__auto___21449 + (1));
i__16609__auto___21449 = G__21450;
continue;
} else {
}
break;
}

var G__20927 = args20923.length;
switch (G__20927) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20923.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq20924){
var G__20925 = cljs.core.first.call(null,seq20924);
var seq20924__$1 = cljs.core.next.call(null,seq20924);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__20925,seq20924__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args20928 = [];
var len__16608__auto___21452 = arguments.length;
var i__16609__auto___21453 = (0);
while(true){
if((i__16609__auto___21453 < len__16608__auto___21452)){
args20928.push((arguments[i__16609__auto___21453]));

var G__21454 = (i__16609__auto___21453 + (1));
i__16609__auto___21453 = G__21454;
continue;
} else {
}
break;
}

var G__20932 = args20928.length;
switch (G__20932) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20928.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq20929){
var G__20930 = cljs.core.first.call(null,seq20929);
var seq20929__$1 = cljs.core.next.call(null,seq20929);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__20930,seq20929__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args20933 = [];
var len__16608__auto___21456 = arguments.length;
var i__16609__auto___21457 = (0);
while(true){
if((i__16609__auto___21457 < len__16608__auto___21456)){
args20933.push((arguments[i__16609__auto___21457]));

var G__21458 = (i__16609__auto___21457 + (1));
i__16609__auto___21457 = G__21458;
continue;
} else {
}
break;
}

var G__20937 = args20933.length;
switch (G__20937) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20933.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq20934){
var G__20935 = cljs.core.first.call(null,seq20934);
var seq20934__$1 = cljs.core.next.call(null,seq20934);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__20935,seq20934__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args20938 = [];
var len__16608__auto___21460 = arguments.length;
var i__16609__auto___21461 = (0);
while(true){
if((i__16609__auto___21461 < len__16608__auto___21460)){
args20938.push((arguments[i__16609__auto___21461]));

var G__21462 = (i__16609__auto___21461 + (1));
i__16609__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var G__20942 = args20938.length;
switch (G__20942) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20938.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq20939){
var G__20940 = cljs.core.first.call(null,seq20939);
var seq20939__$1 = cljs.core.next.call(null,seq20939);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__20940,seq20939__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args20943 = [];
var len__16608__auto___21464 = arguments.length;
var i__16609__auto___21465 = (0);
while(true){
if((i__16609__auto___21465 < len__16608__auto___21464)){
args20943.push((arguments[i__16609__auto___21465]));

var G__21466 = (i__16609__auto___21465 + (1));
i__16609__auto___21465 = G__21466;
continue;
} else {
}
break;
}

var G__20947 = args20943.length;
switch (G__20947) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20943.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq20944){
var G__20945 = cljs.core.first.call(null,seq20944);
var seq20944__$1 = cljs.core.next.call(null,seq20944);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__20945,seq20944__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args20948 = [];
var len__16608__auto___21468 = arguments.length;
var i__16609__auto___21469 = (0);
while(true){
if((i__16609__auto___21469 < len__16608__auto___21468)){
args20948.push((arguments[i__16609__auto___21469]));

var G__21470 = (i__16609__auto___21469 + (1));
i__16609__auto___21469 = G__21470;
continue;
} else {
}
break;
}

var G__20952 = args20948.length;
switch (G__20952) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20948.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq20949){
var G__20950 = cljs.core.first.call(null,seq20949);
var seq20949__$1 = cljs.core.next.call(null,seq20949);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__20950,seq20949__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.use = (function om_tools$dom$use(var_args){
var args20953 = [];
var len__16608__auto___21472 = arguments.length;
var i__16609__auto___21473 = (0);
while(true){
if((i__16609__auto___21473 < len__16608__auto___21472)){
args20953.push((arguments[i__16609__auto___21473]));

var G__21474 = (i__16609__auto___21473 + (1));
i__16609__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var G__20957 = args20953.length;
switch (G__20957) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20953.slice((1)),(0)));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq20954){
var G__20955 = cljs.core.first.call(null,seq20954);
var seq20954__$1 = cljs.core.next.call(null,seq20954);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__20955,seq20954__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args20958 = [];
var len__16608__auto___21476 = arguments.length;
var i__16609__auto___21477 = (0);
while(true){
if((i__16609__auto___21477 < len__16608__auto___21476)){
args20958.push((arguments[i__16609__auto___21477]));

var G__21478 = (i__16609__auto___21477 + (1));
i__16609__auto___21477 = G__21478;
continue;
} else {
}
break;
}

var G__20962 = args20958.length;
switch (G__20962) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20958.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq20959){
var G__20960 = cljs.core.first.call(null,seq20959);
var seq20959__$1 = cljs.core.next.call(null,seq20959);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__20960,seq20959__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args20963 = [];
var len__16608__auto___21480 = arguments.length;
var i__16609__auto___21481 = (0);
while(true){
if((i__16609__auto___21481 < len__16608__auto___21480)){
args20963.push((arguments[i__16609__auto___21481]));

var G__21482 = (i__16609__auto___21481 + (1));
i__16609__auto___21481 = G__21482;
continue;
} else {
}
break;
}

var G__20967 = args20963.length;
switch (G__20967) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20963.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq20964){
var G__20965 = cljs.core.first.call(null,seq20964);
var seq20964__$1 = cljs.core.next.call(null,seq20964);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__20965,seq20964__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args20478 = [];
var len__16608__auto___21484 = arguments.length;
var i__16609__auto___21485 = (0);
while(true){
if((i__16609__auto___21485 < len__16608__auto___21484)){
args20478.push((arguments[i__16609__auto___21485]));

var G__21486 = (i__16609__auto___21485 + (1));
i__16609__auto___21485 = G__21486;
continue;
} else {
}
break;
}

var G__20482 = args20478.length;
switch (G__20482) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args20478.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16627__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19475__auto__,children__19476__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__19475__auto__,children__19476__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq20479){
var G__20480 = cljs.core.first.call(null,seq20479);
var seq20479__$1 = cljs.core.next.call(null,seq20479);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__20480,seq20479__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map