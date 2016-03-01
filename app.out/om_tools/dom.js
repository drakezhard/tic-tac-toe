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
if(cljs.core.truth_((function (){var or__5168__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var G__13673 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__13673) {
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
var G__13676 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__13676) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13680){
var vec__13681 = p__13680;
var k = cljs.core.nth.call(null,vec__13681,(0),null);
var v = cljs.core.nth.call(null,vec__13681,(1),null);
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
return (function (){var or__5168__auto__ = React.isValidElement;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
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
var vec__13683 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__13683,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__13683,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args13684 = [];
var len__6226__auto___14334 = arguments.length;
var i__6227__auto___14335 = (0);
while(true){
if((i__6227__auto___14335 < len__6226__auto___14334)){
args13684.push((arguments[i__6227__auto___14335]));

var G__14336 = (i__6227__auto___14335 + (1));
i__6227__auto___14335 = G__14336;
continue;
} else {
}
break;
}

var G__13688 = args13684.length;
switch (G__13688) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13684.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq13685){
var G__13686 = cljs.core.first.call(null,seq13685);
var seq13685__$1 = cljs.core.next.call(null,seq13685);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__13686,seq13685__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args13689 = [];
var len__6226__auto___14338 = arguments.length;
var i__6227__auto___14339 = (0);
while(true){
if((i__6227__auto___14339 < len__6226__auto___14338)){
args13689.push((arguments[i__6227__auto___14339]));

var G__14340 = (i__6227__auto___14339 + (1));
i__6227__auto___14339 = G__14340;
continue;
} else {
}
break;
}

var G__13693 = args13689.length;
switch (G__13693) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13689.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq13690){
var G__13691 = cljs.core.first.call(null,seq13690);
var seq13690__$1 = cljs.core.next.call(null,seq13690);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__13691,seq13690__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args13694 = [];
var len__6226__auto___14342 = arguments.length;
var i__6227__auto___14343 = (0);
while(true){
if((i__6227__auto___14343 < len__6226__auto___14342)){
args13694.push((arguments[i__6227__auto___14343]));

var G__14344 = (i__6227__auto___14343 + (1));
i__6227__auto___14343 = G__14344;
continue;
} else {
}
break;
}

var G__13698 = args13694.length;
switch (G__13698) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13694.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq13695){
var G__13696 = cljs.core.first.call(null,seq13695);
var seq13695__$1 = cljs.core.next.call(null,seq13695);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__13696,seq13695__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args13699 = [];
var len__6226__auto___14346 = arguments.length;
var i__6227__auto___14347 = (0);
while(true){
if((i__6227__auto___14347 < len__6226__auto___14346)){
args13699.push((arguments[i__6227__auto___14347]));

var G__14348 = (i__6227__auto___14347 + (1));
i__6227__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var G__13703 = args13699.length;
switch (G__13703) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13699.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq13700){
var G__13701 = cljs.core.first.call(null,seq13700);
var seq13700__$1 = cljs.core.next.call(null,seq13700);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__13701,seq13700__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args13704 = [];
var len__6226__auto___14350 = arguments.length;
var i__6227__auto___14351 = (0);
while(true){
if((i__6227__auto___14351 < len__6226__auto___14350)){
args13704.push((arguments[i__6227__auto___14351]));

var G__14352 = (i__6227__auto___14351 + (1));
i__6227__auto___14351 = G__14352;
continue;
} else {
}
break;
}

var G__13708 = args13704.length;
switch (G__13708) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13704.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq13705){
var G__13706 = cljs.core.first.call(null,seq13705);
var seq13705__$1 = cljs.core.next.call(null,seq13705);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__13706,seq13705__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args13709 = [];
var len__6226__auto___14354 = arguments.length;
var i__6227__auto___14355 = (0);
while(true){
if((i__6227__auto___14355 < len__6226__auto___14354)){
args13709.push((arguments[i__6227__auto___14355]));

var G__14356 = (i__6227__auto___14355 + (1));
i__6227__auto___14355 = G__14356;
continue;
} else {
}
break;
}

var G__13713 = args13709.length;
switch (G__13713) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13709.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq13710){
var G__13711 = cljs.core.first.call(null,seq13710);
var seq13710__$1 = cljs.core.next.call(null,seq13710);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__13711,seq13710__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args13714 = [];
var len__6226__auto___14358 = arguments.length;
var i__6227__auto___14359 = (0);
while(true){
if((i__6227__auto___14359 < len__6226__auto___14358)){
args13714.push((arguments[i__6227__auto___14359]));

var G__14360 = (i__6227__auto___14359 + (1));
i__6227__auto___14359 = G__14360;
continue;
} else {
}
break;
}

var G__13718 = args13714.length;
switch (G__13718) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13714.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq13715){
var G__13716 = cljs.core.first.call(null,seq13715);
var seq13715__$1 = cljs.core.next.call(null,seq13715);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__13716,seq13715__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args13719 = [];
var len__6226__auto___14362 = arguments.length;
var i__6227__auto___14363 = (0);
while(true){
if((i__6227__auto___14363 < len__6226__auto___14362)){
args13719.push((arguments[i__6227__auto___14363]));

var G__14364 = (i__6227__auto___14363 + (1));
i__6227__auto___14363 = G__14364;
continue;
} else {
}
break;
}

var G__13723 = args13719.length;
switch (G__13723) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13719.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq13720){
var G__13721 = cljs.core.first.call(null,seq13720);
var seq13720__$1 = cljs.core.next.call(null,seq13720);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__13721,seq13720__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args13724 = [];
var len__6226__auto___14366 = arguments.length;
var i__6227__auto___14367 = (0);
while(true){
if((i__6227__auto___14367 < len__6226__auto___14366)){
args13724.push((arguments[i__6227__auto___14367]));

var G__14368 = (i__6227__auto___14367 + (1));
i__6227__auto___14367 = G__14368;
continue;
} else {
}
break;
}

var G__13728 = args13724.length;
switch (G__13728) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13724.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq13725){
var G__13726 = cljs.core.first.call(null,seq13725);
var seq13725__$1 = cljs.core.next.call(null,seq13725);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__13726,seq13725__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args13729 = [];
var len__6226__auto___14370 = arguments.length;
var i__6227__auto___14371 = (0);
while(true){
if((i__6227__auto___14371 < len__6226__auto___14370)){
args13729.push((arguments[i__6227__auto___14371]));

var G__14372 = (i__6227__auto___14371 + (1));
i__6227__auto___14371 = G__14372;
continue;
} else {
}
break;
}

var G__13733 = args13729.length;
switch (G__13733) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13729.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq13730){
var G__13731 = cljs.core.first.call(null,seq13730);
var seq13730__$1 = cljs.core.next.call(null,seq13730);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__13731,seq13730__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args13734 = [];
var len__6226__auto___14374 = arguments.length;
var i__6227__auto___14375 = (0);
while(true){
if((i__6227__auto___14375 < len__6226__auto___14374)){
args13734.push((arguments[i__6227__auto___14375]));

var G__14376 = (i__6227__auto___14375 + (1));
i__6227__auto___14375 = G__14376;
continue;
} else {
}
break;
}

var G__13738 = args13734.length;
switch (G__13738) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13734.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq13735){
var G__13736 = cljs.core.first.call(null,seq13735);
var seq13735__$1 = cljs.core.next.call(null,seq13735);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__13736,seq13735__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args13739 = [];
var len__6226__auto___14378 = arguments.length;
var i__6227__auto___14379 = (0);
while(true){
if((i__6227__auto___14379 < len__6226__auto___14378)){
args13739.push((arguments[i__6227__auto___14379]));

var G__14380 = (i__6227__auto___14379 + (1));
i__6227__auto___14379 = G__14380;
continue;
} else {
}
break;
}

var G__13743 = args13739.length;
switch (G__13743) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13739.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq13740){
var G__13741 = cljs.core.first.call(null,seq13740);
var seq13740__$1 = cljs.core.next.call(null,seq13740);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__13741,seq13740__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args13744 = [];
var len__6226__auto___14382 = arguments.length;
var i__6227__auto___14383 = (0);
while(true){
if((i__6227__auto___14383 < len__6226__auto___14382)){
args13744.push((arguments[i__6227__auto___14383]));

var G__14384 = (i__6227__auto___14383 + (1));
i__6227__auto___14383 = G__14384;
continue;
} else {
}
break;
}

var G__13748 = args13744.length;
switch (G__13748) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13744.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq13745){
var G__13746 = cljs.core.first.call(null,seq13745);
var seq13745__$1 = cljs.core.next.call(null,seq13745);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__13746,seq13745__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args13749 = [];
var len__6226__auto___14386 = arguments.length;
var i__6227__auto___14387 = (0);
while(true){
if((i__6227__auto___14387 < len__6226__auto___14386)){
args13749.push((arguments[i__6227__auto___14387]));

var G__14388 = (i__6227__auto___14387 + (1));
i__6227__auto___14387 = G__14388;
continue;
} else {
}
break;
}

var G__13753 = args13749.length;
switch (G__13753) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13749.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq13750){
var G__13751 = cljs.core.first.call(null,seq13750);
var seq13750__$1 = cljs.core.next.call(null,seq13750);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__13751,seq13750__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args13754 = [];
var len__6226__auto___14390 = arguments.length;
var i__6227__auto___14391 = (0);
while(true){
if((i__6227__auto___14391 < len__6226__auto___14390)){
args13754.push((arguments[i__6227__auto___14391]));

var G__14392 = (i__6227__auto___14391 + (1));
i__6227__auto___14391 = G__14392;
continue;
} else {
}
break;
}

var G__13758 = args13754.length;
switch (G__13758) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13754.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq13755){
var G__13756 = cljs.core.first.call(null,seq13755);
var seq13755__$1 = cljs.core.next.call(null,seq13755);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__13756,seq13755__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args13759 = [];
var len__6226__auto___14394 = arguments.length;
var i__6227__auto___14395 = (0);
while(true){
if((i__6227__auto___14395 < len__6226__auto___14394)){
args13759.push((arguments[i__6227__auto___14395]));

var G__14396 = (i__6227__auto___14395 + (1));
i__6227__auto___14395 = G__14396;
continue;
} else {
}
break;
}

var G__13763 = args13759.length;
switch (G__13763) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13759.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq13760){
var G__13761 = cljs.core.first.call(null,seq13760);
var seq13760__$1 = cljs.core.next.call(null,seq13760);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__13761,seq13760__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args13764 = [];
var len__6226__auto___14398 = arguments.length;
var i__6227__auto___14399 = (0);
while(true){
if((i__6227__auto___14399 < len__6226__auto___14398)){
args13764.push((arguments[i__6227__auto___14399]));

var G__14400 = (i__6227__auto___14399 + (1));
i__6227__auto___14399 = G__14400;
continue;
} else {
}
break;
}

var G__13768 = args13764.length;
switch (G__13768) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13764.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq13765){
var G__13766 = cljs.core.first.call(null,seq13765);
var seq13765__$1 = cljs.core.next.call(null,seq13765);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__13766,seq13765__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args13769 = [];
var len__6226__auto___14402 = arguments.length;
var i__6227__auto___14403 = (0);
while(true){
if((i__6227__auto___14403 < len__6226__auto___14402)){
args13769.push((arguments[i__6227__auto___14403]));

var G__14404 = (i__6227__auto___14403 + (1));
i__6227__auto___14403 = G__14404;
continue;
} else {
}
break;
}

var G__13773 = args13769.length;
switch (G__13773) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13769.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq13770){
var G__13771 = cljs.core.first.call(null,seq13770);
var seq13770__$1 = cljs.core.next.call(null,seq13770);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__13771,seq13770__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args13774 = [];
var len__6226__auto___14406 = arguments.length;
var i__6227__auto___14407 = (0);
while(true){
if((i__6227__auto___14407 < len__6226__auto___14406)){
args13774.push((arguments[i__6227__auto___14407]));

var G__14408 = (i__6227__auto___14407 + (1));
i__6227__auto___14407 = G__14408;
continue;
} else {
}
break;
}

var G__13778 = args13774.length;
switch (G__13778) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13774.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq13775){
var G__13776 = cljs.core.first.call(null,seq13775);
var seq13775__$1 = cljs.core.next.call(null,seq13775);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__13776,seq13775__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args13779 = [];
var len__6226__auto___14410 = arguments.length;
var i__6227__auto___14411 = (0);
while(true){
if((i__6227__auto___14411 < len__6226__auto___14410)){
args13779.push((arguments[i__6227__auto___14411]));

var G__14412 = (i__6227__auto___14411 + (1));
i__6227__auto___14411 = G__14412;
continue;
} else {
}
break;
}

var G__13783 = args13779.length;
switch (G__13783) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13779.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq13780){
var G__13781 = cljs.core.first.call(null,seq13780);
var seq13780__$1 = cljs.core.next.call(null,seq13780);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__13781,seq13780__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args13784 = [];
var len__6226__auto___14414 = arguments.length;
var i__6227__auto___14415 = (0);
while(true){
if((i__6227__auto___14415 < len__6226__auto___14414)){
args13784.push((arguments[i__6227__auto___14415]));

var G__14416 = (i__6227__auto___14415 + (1));
i__6227__auto___14415 = G__14416;
continue;
} else {
}
break;
}

var G__13788 = args13784.length;
switch (G__13788) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13784.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq13785){
var G__13786 = cljs.core.first.call(null,seq13785);
var seq13785__$1 = cljs.core.next.call(null,seq13785);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__13786,seq13785__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args13789 = [];
var len__6226__auto___14418 = arguments.length;
var i__6227__auto___14419 = (0);
while(true){
if((i__6227__auto___14419 < len__6226__auto___14418)){
args13789.push((arguments[i__6227__auto___14419]));

var G__14420 = (i__6227__auto___14419 + (1));
i__6227__auto___14419 = G__14420;
continue;
} else {
}
break;
}

var G__13793 = args13789.length;
switch (G__13793) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13789.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq13790){
var G__13791 = cljs.core.first.call(null,seq13790);
var seq13790__$1 = cljs.core.next.call(null,seq13790);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__13791,seq13790__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args13794 = [];
var len__6226__auto___14422 = arguments.length;
var i__6227__auto___14423 = (0);
while(true){
if((i__6227__auto___14423 < len__6226__auto___14422)){
args13794.push((arguments[i__6227__auto___14423]));

var G__14424 = (i__6227__auto___14423 + (1));
i__6227__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var G__13798 = args13794.length;
switch (G__13798) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13794.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq13795){
var G__13796 = cljs.core.first.call(null,seq13795);
var seq13795__$1 = cljs.core.next.call(null,seq13795);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__13796,seq13795__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args13799 = [];
var len__6226__auto___14426 = arguments.length;
var i__6227__auto___14427 = (0);
while(true){
if((i__6227__auto___14427 < len__6226__auto___14426)){
args13799.push((arguments[i__6227__auto___14427]));

var G__14428 = (i__6227__auto___14427 + (1));
i__6227__auto___14427 = G__14428;
continue;
} else {
}
break;
}

var G__13803 = args13799.length;
switch (G__13803) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13799.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq13800){
var G__13801 = cljs.core.first.call(null,seq13800);
var seq13800__$1 = cljs.core.next.call(null,seq13800);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__13801,seq13800__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args13804 = [];
var len__6226__auto___14430 = arguments.length;
var i__6227__auto___14431 = (0);
while(true){
if((i__6227__auto___14431 < len__6226__auto___14430)){
args13804.push((arguments[i__6227__auto___14431]));

var G__14432 = (i__6227__auto___14431 + (1));
i__6227__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var G__13808 = args13804.length;
switch (G__13808) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13804.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq13805){
var G__13806 = cljs.core.first.call(null,seq13805);
var seq13805__$1 = cljs.core.next.call(null,seq13805);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__13806,seq13805__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args13809 = [];
var len__6226__auto___14434 = arguments.length;
var i__6227__auto___14435 = (0);
while(true){
if((i__6227__auto___14435 < len__6226__auto___14434)){
args13809.push((arguments[i__6227__auto___14435]));

var G__14436 = (i__6227__auto___14435 + (1));
i__6227__auto___14435 = G__14436;
continue;
} else {
}
break;
}

var G__13813 = args13809.length;
switch (G__13813) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13809.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq13810){
var G__13811 = cljs.core.first.call(null,seq13810);
var seq13810__$1 = cljs.core.next.call(null,seq13810);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__13811,seq13810__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.details = (function om_tools$dom$details(var_args){
var args13814 = [];
var len__6226__auto___14438 = arguments.length;
var i__6227__auto___14439 = (0);
while(true){
if((i__6227__auto___14439 < len__6226__auto___14438)){
args13814.push((arguments[i__6227__auto___14439]));

var G__14440 = (i__6227__auto___14439 + (1));
i__6227__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var G__13818 = args13814.length;
switch (G__13818) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13814.slice((1)),(0)));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq13815){
var G__13816 = cljs.core.first.call(null,seq13815);
var seq13815__$1 = cljs.core.next.call(null,seq13815);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__13816,seq13815__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args13819 = [];
var len__6226__auto___14442 = arguments.length;
var i__6227__auto___14443 = (0);
while(true){
if((i__6227__auto___14443 < len__6226__auto___14442)){
args13819.push((arguments[i__6227__auto___14443]));

var G__14444 = (i__6227__auto___14443 + (1));
i__6227__auto___14443 = G__14444;
continue;
} else {
}
break;
}

var G__13823 = args13819.length;
switch (G__13823) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13819.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq13820){
var G__13821 = cljs.core.first.call(null,seq13820);
var seq13820__$1 = cljs.core.next.call(null,seq13820);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__13821,seq13820__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args13824 = [];
var len__6226__auto___14446 = arguments.length;
var i__6227__auto___14447 = (0);
while(true){
if((i__6227__auto___14447 < len__6226__auto___14446)){
args13824.push((arguments[i__6227__auto___14447]));

var G__14448 = (i__6227__auto___14447 + (1));
i__6227__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var G__13828 = args13824.length;
switch (G__13828) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13824.slice((1)),(0)));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq13825){
var G__13826 = cljs.core.first.call(null,seq13825);
var seq13825__$1 = cljs.core.next.call(null,seq13825);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__13826,seq13825__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args13829 = [];
var len__6226__auto___14450 = arguments.length;
var i__6227__auto___14451 = (0);
while(true){
if((i__6227__auto___14451 < len__6226__auto___14450)){
args13829.push((arguments[i__6227__auto___14451]));

var G__14452 = (i__6227__auto___14451 + (1));
i__6227__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__13833 = args13829.length;
switch (G__13833) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13829.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq13830){
var G__13831 = cljs.core.first.call(null,seq13830);
var seq13830__$1 = cljs.core.next.call(null,seq13830);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__13831,seq13830__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args13834 = [];
var len__6226__auto___14454 = arguments.length;
var i__6227__auto___14455 = (0);
while(true){
if((i__6227__auto___14455 < len__6226__auto___14454)){
args13834.push((arguments[i__6227__auto___14455]));

var G__14456 = (i__6227__auto___14455 + (1));
i__6227__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var G__13838 = args13834.length;
switch (G__13838) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13834.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq13835){
var G__13836 = cljs.core.first.call(null,seq13835);
var seq13835__$1 = cljs.core.next.call(null,seq13835);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__13836,seq13835__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args13839 = [];
var len__6226__auto___14458 = arguments.length;
var i__6227__auto___14459 = (0);
while(true){
if((i__6227__auto___14459 < len__6226__auto___14458)){
args13839.push((arguments[i__6227__auto___14459]));

var G__14460 = (i__6227__auto___14459 + (1));
i__6227__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var G__13843 = args13839.length;
switch (G__13843) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13839.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq13840){
var G__13841 = cljs.core.first.call(null,seq13840);
var seq13840__$1 = cljs.core.next.call(null,seq13840);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__13841,seq13840__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args13849 = [];
var len__6226__auto___14462 = arguments.length;
var i__6227__auto___14463 = (0);
while(true){
if((i__6227__auto___14463 < len__6226__auto___14462)){
args13849.push((arguments[i__6227__auto___14463]));

var G__14464 = (i__6227__auto___14463 + (1));
i__6227__auto___14463 = G__14464;
continue;
} else {
}
break;
}

var G__13853 = args13849.length;
switch (G__13853) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13849.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq13850){
var G__13851 = cljs.core.first.call(null,seq13850);
var seq13850__$1 = cljs.core.next.call(null,seq13850);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__13851,seq13850__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args13854 = [];
var len__6226__auto___14466 = arguments.length;
var i__6227__auto___14467 = (0);
while(true){
if((i__6227__auto___14467 < len__6226__auto___14466)){
args13854.push((arguments[i__6227__auto___14467]));

var G__14468 = (i__6227__auto___14467 + (1));
i__6227__auto___14467 = G__14468;
continue;
} else {
}
break;
}

var G__13858 = args13854.length;
switch (G__13858) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13854.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq13855){
var G__13856 = cljs.core.first.call(null,seq13855);
var seq13855__$1 = cljs.core.next.call(null,seq13855);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__13856,seq13855__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args13859 = [];
var len__6226__auto___14470 = arguments.length;
var i__6227__auto___14471 = (0);
while(true){
if((i__6227__auto___14471 < len__6226__auto___14470)){
args13859.push((arguments[i__6227__auto___14471]));

var G__14472 = (i__6227__auto___14471 + (1));
i__6227__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var G__13863 = args13859.length;
switch (G__13863) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13859.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq13860){
var G__13861 = cljs.core.first.call(null,seq13860);
var seq13860__$1 = cljs.core.next.call(null,seq13860);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__13861,seq13860__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args13864 = [];
var len__6226__auto___14474 = arguments.length;
var i__6227__auto___14475 = (0);
while(true){
if((i__6227__auto___14475 < len__6226__auto___14474)){
args13864.push((arguments[i__6227__auto___14475]));

var G__14476 = (i__6227__auto___14475 + (1));
i__6227__auto___14475 = G__14476;
continue;
} else {
}
break;
}

var G__13868 = args13864.length;
switch (G__13868) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13864.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq13865){
var G__13866 = cljs.core.first.call(null,seq13865);
var seq13865__$1 = cljs.core.next.call(null,seq13865);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__13866,seq13865__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args13869 = [];
var len__6226__auto___14478 = arguments.length;
var i__6227__auto___14479 = (0);
while(true){
if((i__6227__auto___14479 < len__6226__auto___14478)){
args13869.push((arguments[i__6227__auto___14479]));

var G__14480 = (i__6227__auto___14479 + (1));
i__6227__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var G__13873 = args13869.length;
switch (G__13873) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13869.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq13870){
var G__13871 = cljs.core.first.call(null,seq13870);
var seq13870__$1 = cljs.core.next.call(null,seq13870);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__13871,seq13870__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args13874 = [];
var len__6226__auto___14482 = arguments.length;
var i__6227__auto___14483 = (0);
while(true){
if((i__6227__auto___14483 < len__6226__auto___14482)){
args13874.push((arguments[i__6227__auto___14483]));

var G__14484 = (i__6227__auto___14483 + (1));
i__6227__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var G__13878 = args13874.length;
switch (G__13878) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13874.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq13875){
var G__13876 = cljs.core.first.call(null,seq13875);
var seq13875__$1 = cljs.core.next.call(null,seq13875);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__13876,seq13875__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args13879 = [];
var len__6226__auto___14486 = arguments.length;
var i__6227__auto___14487 = (0);
while(true){
if((i__6227__auto___14487 < len__6226__auto___14486)){
args13879.push((arguments[i__6227__auto___14487]));

var G__14488 = (i__6227__auto___14487 + (1));
i__6227__auto___14487 = G__14488;
continue;
} else {
}
break;
}

var G__13883 = args13879.length;
switch (G__13883) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13879.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq13880){
var G__13881 = cljs.core.first.call(null,seq13880);
var seq13880__$1 = cljs.core.next.call(null,seq13880);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__13881,seq13880__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args13884 = [];
var len__6226__auto___14490 = arguments.length;
var i__6227__auto___14491 = (0);
while(true){
if((i__6227__auto___14491 < len__6226__auto___14490)){
args13884.push((arguments[i__6227__auto___14491]));

var G__14492 = (i__6227__auto___14491 + (1));
i__6227__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var G__13888 = args13884.length;
switch (G__13888) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13884.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq13885){
var G__13886 = cljs.core.first.call(null,seq13885);
var seq13885__$1 = cljs.core.next.call(null,seq13885);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__13886,seq13885__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args13889 = [];
var len__6226__auto___14494 = arguments.length;
var i__6227__auto___14495 = (0);
while(true){
if((i__6227__auto___14495 < len__6226__auto___14494)){
args13889.push((arguments[i__6227__auto___14495]));

var G__14496 = (i__6227__auto___14495 + (1));
i__6227__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var G__13893 = args13889.length;
switch (G__13893) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13889.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq13890){
var G__13891 = cljs.core.first.call(null,seq13890);
var seq13890__$1 = cljs.core.next.call(null,seq13890);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__13891,seq13890__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args13894 = [];
var len__6226__auto___14498 = arguments.length;
var i__6227__auto___14499 = (0);
while(true){
if((i__6227__auto___14499 < len__6226__auto___14498)){
args13894.push((arguments[i__6227__auto___14499]));

var G__14500 = (i__6227__auto___14499 + (1));
i__6227__auto___14499 = G__14500;
continue;
} else {
}
break;
}

var G__13898 = args13894.length;
switch (G__13898) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13894.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq13895){
var G__13896 = cljs.core.first.call(null,seq13895);
var seq13895__$1 = cljs.core.next.call(null,seq13895);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__13896,seq13895__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args13899 = [];
var len__6226__auto___14502 = arguments.length;
var i__6227__auto___14503 = (0);
while(true){
if((i__6227__auto___14503 < len__6226__auto___14502)){
args13899.push((arguments[i__6227__auto___14503]));

var G__14504 = (i__6227__auto___14503 + (1));
i__6227__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var G__13903 = args13899.length;
switch (G__13903) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13899.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq13900){
var G__13901 = cljs.core.first.call(null,seq13900);
var seq13900__$1 = cljs.core.next.call(null,seq13900);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__13901,seq13900__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args13904 = [];
var len__6226__auto___14506 = arguments.length;
var i__6227__auto___14507 = (0);
while(true){
if((i__6227__auto___14507 < len__6226__auto___14506)){
args13904.push((arguments[i__6227__auto___14507]));

var G__14508 = (i__6227__auto___14507 + (1));
i__6227__auto___14507 = G__14508;
continue;
} else {
}
break;
}

var G__13908 = args13904.length;
switch (G__13908) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13904.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq13905){
var G__13906 = cljs.core.first.call(null,seq13905);
var seq13905__$1 = cljs.core.next.call(null,seq13905);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__13906,seq13905__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args13909 = [];
var len__6226__auto___14510 = arguments.length;
var i__6227__auto___14511 = (0);
while(true){
if((i__6227__auto___14511 < len__6226__auto___14510)){
args13909.push((arguments[i__6227__auto___14511]));

var G__14512 = (i__6227__auto___14511 + (1));
i__6227__auto___14511 = G__14512;
continue;
} else {
}
break;
}

var G__13913 = args13909.length;
switch (G__13913) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13909.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq13910){
var G__13911 = cljs.core.first.call(null,seq13910);
var seq13910__$1 = cljs.core.next.call(null,seq13910);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__13911,seq13910__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args13914 = [];
var len__6226__auto___14514 = arguments.length;
var i__6227__auto___14515 = (0);
while(true){
if((i__6227__auto___14515 < len__6226__auto___14514)){
args13914.push((arguments[i__6227__auto___14515]));

var G__14516 = (i__6227__auto___14515 + (1));
i__6227__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var G__13918 = args13914.length;
switch (G__13918) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13914.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq13915){
var G__13916 = cljs.core.first.call(null,seq13915);
var seq13915__$1 = cljs.core.next.call(null,seq13915);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__13916,seq13915__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args13919 = [];
var len__6226__auto___14518 = arguments.length;
var i__6227__auto___14519 = (0);
while(true){
if((i__6227__auto___14519 < len__6226__auto___14518)){
args13919.push((arguments[i__6227__auto___14519]));

var G__14520 = (i__6227__auto___14519 + (1));
i__6227__auto___14519 = G__14520;
continue;
} else {
}
break;
}

var G__13923 = args13919.length;
switch (G__13923) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13919.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq13920){
var G__13921 = cljs.core.first.call(null,seq13920);
var seq13920__$1 = cljs.core.next.call(null,seq13920);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__13921,seq13920__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args13924 = [];
var len__6226__auto___14522 = arguments.length;
var i__6227__auto___14523 = (0);
while(true){
if((i__6227__auto___14523 < len__6226__auto___14522)){
args13924.push((arguments[i__6227__auto___14523]));

var G__14524 = (i__6227__auto___14523 + (1));
i__6227__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var G__13928 = args13924.length;
switch (G__13928) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13924.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq13925){
var G__13926 = cljs.core.first.call(null,seq13925);
var seq13925__$1 = cljs.core.next.call(null,seq13925);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__13926,seq13925__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args13929 = [];
var len__6226__auto___14526 = arguments.length;
var i__6227__auto___14527 = (0);
while(true){
if((i__6227__auto___14527 < len__6226__auto___14526)){
args13929.push((arguments[i__6227__auto___14527]));

var G__14528 = (i__6227__auto___14527 + (1));
i__6227__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var G__13933 = args13929.length;
switch (G__13933) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13929.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq13930){
var G__13931 = cljs.core.first.call(null,seq13930);
var seq13930__$1 = cljs.core.next.call(null,seq13930);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__13931,seq13930__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args13934 = [];
var len__6226__auto___14530 = arguments.length;
var i__6227__auto___14531 = (0);
while(true){
if((i__6227__auto___14531 < len__6226__auto___14530)){
args13934.push((arguments[i__6227__auto___14531]));

var G__14532 = (i__6227__auto___14531 + (1));
i__6227__auto___14531 = G__14532;
continue;
} else {
}
break;
}

var G__13938 = args13934.length;
switch (G__13938) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13934.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq13935){
var G__13936 = cljs.core.first.call(null,seq13935);
var seq13935__$1 = cljs.core.next.call(null,seq13935);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__13936,seq13935__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args13939 = [];
var len__6226__auto___14534 = arguments.length;
var i__6227__auto___14535 = (0);
while(true){
if((i__6227__auto___14535 < len__6226__auto___14534)){
args13939.push((arguments[i__6227__auto___14535]));

var G__14536 = (i__6227__auto___14535 + (1));
i__6227__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var G__13943 = args13939.length;
switch (G__13943) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13939.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq13940){
var G__13941 = cljs.core.first.call(null,seq13940);
var seq13940__$1 = cljs.core.next.call(null,seq13940);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__13941,seq13940__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args13944 = [];
var len__6226__auto___14538 = arguments.length;
var i__6227__auto___14539 = (0);
while(true){
if((i__6227__auto___14539 < len__6226__auto___14538)){
args13944.push((arguments[i__6227__auto___14539]));

var G__14540 = (i__6227__auto___14539 + (1));
i__6227__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var G__13948 = args13944.length;
switch (G__13948) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13944.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq13945){
var G__13946 = cljs.core.first.call(null,seq13945);
var seq13945__$1 = cljs.core.next.call(null,seq13945);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__13946,seq13945__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args13949 = [];
var len__6226__auto___14542 = arguments.length;
var i__6227__auto___14543 = (0);
while(true){
if((i__6227__auto___14543 < len__6226__auto___14542)){
args13949.push((arguments[i__6227__auto___14543]));

var G__14544 = (i__6227__auto___14543 + (1));
i__6227__auto___14543 = G__14544;
continue;
} else {
}
break;
}

var G__13953 = args13949.length;
switch (G__13953) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13949.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq13950){
var G__13951 = cljs.core.first.call(null,seq13950);
var seq13950__$1 = cljs.core.next.call(null,seq13950);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__13951,seq13950__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args13954 = [];
var len__6226__auto___14546 = arguments.length;
var i__6227__auto___14547 = (0);
while(true){
if((i__6227__auto___14547 < len__6226__auto___14546)){
args13954.push((arguments[i__6227__auto___14547]));

var G__14548 = (i__6227__auto___14547 + (1));
i__6227__auto___14547 = G__14548;
continue;
} else {
}
break;
}

var G__13958 = args13954.length;
switch (G__13958) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13954.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq13955){
var G__13956 = cljs.core.first.call(null,seq13955);
var seq13955__$1 = cljs.core.next.call(null,seq13955);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__13956,seq13955__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args13959 = [];
var len__6226__auto___14550 = arguments.length;
var i__6227__auto___14551 = (0);
while(true){
if((i__6227__auto___14551 < len__6226__auto___14550)){
args13959.push((arguments[i__6227__auto___14551]));

var G__14552 = (i__6227__auto___14551 + (1));
i__6227__auto___14551 = G__14552;
continue;
} else {
}
break;
}

var G__13963 = args13959.length;
switch (G__13963) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13959.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq13960){
var G__13961 = cljs.core.first.call(null,seq13960);
var seq13960__$1 = cljs.core.next.call(null,seq13960);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__13961,seq13960__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args13964 = [];
var len__6226__auto___14554 = arguments.length;
var i__6227__auto___14555 = (0);
while(true){
if((i__6227__auto___14555 < len__6226__auto___14554)){
args13964.push((arguments[i__6227__auto___14555]));

var G__14556 = (i__6227__auto___14555 + (1));
i__6227__auto___14555 = G__14556;
continue;
} else {
}
break;
}

var G__13968 = args13964.length;
switch (G__13968) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13964.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq13965){
var G__13966 = cljs.core.first.call(null,seq13965);
var seq13965__$1 = cljs.core.next.call(null,seq13965);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__13966,seq13965__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args13969 = [];
var len__6226__auto___14558 = arguments.length;
var i__6227__auto___14559 = (0);
while(true){
if((i__6227__auto___14559 < len__6226__auto___14558)){
args13969.push((arguments[i__6227__auto___14559]));

var G__14560 = (i__6227__auto___14559 + (1));
i__6227__auto___14559 = G__14560;
continue;
} else {
}
break;
}

var G__13973 = args13969.length;
switch (G__13973) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13969.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq13970){
var G__13971 = cljs.core.first.call(null,seq13970);
var seq13970__$1 = cljs.core.next.call(null,seq13970);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__13971,seq13970__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args13974 = [];
var len__6226__auto___14562 = arguments.length;
var i__6227__auto___14563 = (0);
while(true){
if((i__6227__auto___14563 < len__6226__auto___14562)){
args13974.push((arguments[i__6227__auto___14563]));

var G__14564 = (i__6227__auto___14563 + (1));
i__6227__auto___14563 = G__14564;
continue;
} else {
}
break;
}

var G__13978 = args13974.length;
switch (G__13978) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13974.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq13975){
var G__13976 = cljs.core.first.call(null,seq13975);
var seq13975__$1 = cljs.core.next.call(null,seq13975);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__13976,seq13975__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args13979 = [];
var len__6226__auto___14566 = arguments.length;
var i__6227__auto___14567 = (0);
while(true){
if((i__6227__auto___14567 < len__6226__auto___14566)){
args13979.push((arguments[i__6227__auto___14567]));

var G__14568 = (i__6227__auto___14567 + (1));
i__6227__auto___14567 = G__14568;
continue;
} else {
}
break;
}

var G__13983 = args13979.length;
switch (G__13983) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13979.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq13980){
var G__13981 = cljs.core.first.call(null,seq13980);
var seq13980__$1 = cljs.core.next.call(null,seq13980);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__13981,seq13980__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args13984 = [];
var len__6226__auto___14570 = arguments.length;
var i__6227__auto___14571 = (0);
while(true){
if((i__6227__auto___14571 < len__6226__auto___14570)){
args13984.push((arguments[i__6227__auto___14571]));

var G__14572 = (i__6227__auto___14571 + (1));
i__6227__auto___14571 = G__14572;
continue;
} else {
}
break;
}

var G__13988 = args13984.length;
switch (G__13988) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13984.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq13985){
var G__13986 = cljs.core.first.call(null,seq13985);
var seq13985__$1 = cljs.core.next.call(null,seq13985);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__13986,seq13985__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args13989 = [];
var len__6226__auto___14574 = arguments.length;
var i__6227__auto___14575 = (0);
while(true){
if((i__6227__auto___14575 < len__6226__auto___14574)){
args13989.push((arguments[i__6227__auto___14575]));

var G__14576 = (i__6227__auto___14575 + (1));
i__6227__auto___14575 = G__14576;
continue;
} else {
}
break;
}

var G__13993 = args13989.length;
switch (G__13993) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13989.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq13990){
var G__13991 = cljs.core.first.call(null,seq13990);
var seq13990__$1 = cljs.core.next.call(null,seq13990);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__13991,seq13990__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args13994 = [];
var len__6226__auto___14578 = arguments.length;
var i__6227__auto___14579 = (0);
while(true){
if((i__6227__auto___14579 < len__6226__auto___14578)){
args13994.push((arguments[i__6227__auto___14579]));

var G__14580 = (i__6227__auto___14579 + (1));
i__6227__auto___14579 = G__14580;
continue;
} else {
}
break;
}

var G__13998 = args13994.length;
switch (G__13998) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13994.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq13995){
var G__13996 = cljs.core.first.call(null,seq13995);
var seq13995__$1 = cljs.core.next.call(null,seq13995);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__13996,seq13995__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args13999 = [];
var len__6226__auto___14582 = arguments.length;
var i__6227__auto___14583 = (0);
while(true){
if((i__6227__auto___14583 < len__6226__auto___14582)){
args13999.push((arguments[i__6227__auto___14583]));

var G__14584 = (i__6227__auto___14583 + (1));
i__6227__auto___14583 = G__14584;
continue;
} else {
}
break;
}

var G__14003 = args13999.length;
switch (G__14003) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13999.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq14000){
var G__14001 = cljs.core.first.call(null,seq14000);
var seq14000__$1 = cljs.core.next.call(null,seq14000);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__14001,seq14000__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args14004 = [];
var len__6226__auto___14586 = arguments.length;
var i__6227__auto___14587 = (0);
while(true){
if((i__6227__auto___14587 < len__6226__auto___14586)){
args14004.push((arguments[i__6227__auto___14587]));

var G__14588 = (i__6227__auto___14587 + (1));
i__6227__auto___14587 = G__14588;
continue;
} else {
}
break;
}

var G__14008 = args14004.length;
switch (G__14008) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14004.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq14005){
var G__14006 = cljs.core.first.call(null,seq14005);
var seq14005__$1 = cljs.core.next.call(null,seq14005);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__14006,seq14005__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args14009 = [];
var len__6226__auto___14590 = arguments.length;
var i__6227__auto___14591 = (0);
while(true){
if((i__6227__auto___14591 < len__6226__auto___14590)){
args14009.push((arguments[i__6227__auto___14591]));

var G__14592 = (i__6227__auto___14591 + (1));
i__6227__auto___14591 = G__14592;
continue;
} else {
}
break;
}

var G__14013 = args14009.length;
switch (G__14013) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14009.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq14010){
var G__14011 = cljs.core.first.call(null,seq14010);
var seq14010__$1 = cljs.core.next.call(null,seq14010);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__14011,seq14010__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args14014 = [];
var len__6226__auto___14594 = arguments.length;
var i__6227__auto___14595 = (0);
while(true){
if((i__6227__auto___14595 < len__6226__auto___14594)){
args14014.push((arguments[i__6227__auto___14595]));

var G__14596 = (i__6227__auto___14595 + (1));
i__6227__auto___14595 = G__14596;
continue;
} else {
}
break;
}

var G__14018 = args14014.length;
switch (G__14018) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14014.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq14015){
var G__14016 = cljs.core.first.call(null,seq14015);
var seq14015__$1 = cljs.core.next.call(null,seq14015);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__14016,seq14015__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args14019 = [];
var len__6226__auto___14598 = arguments.length;
var i__6227__auto___14599 = (0);
while(true){
if((i__6227__auto___14599 < len__6226__auto___14598)){
args14019.push((arguments[i__6227__auto___14599]));

var G__14600 = (i__6227__auto___14599 + (1));
i__6227__auto___14599 = G__14600;
continue;
} else {
}
break;
}

var G__14023 = args14019.length;
switch (G__14023) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14019.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq14020){
var G__14021 = cljs.core.first.call(null,seq14020);
var seq14020__$1 = cljs.core.next.call(null,seq14020);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__14021,seq14020__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args14024 = [];
var len__6226__auto___14602 = arguments.length;
var i__6227__auto___14603 = (0);
while(true){
if((i__6227__auto___14603 < len__6226__auto___14602)){
args14024.push((arguments[i__6227__auto___14603]));

var G__14604 = (i__6227__auto___14603 + (1));
i__6227__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var G__14028 = args14024.length;
switch (G__14028) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14024.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq14025){
var G__14026 = cljs.core.first.call(null,seq14025);
var seq14025__$1 = cljs.core.next.call(null,seq14025);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__14026,seq14025__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args14029 = [];
var len__6226__auto___14606 = arguments.length;
var i__6227__auto___14607 = (0);
while(true){
if((i__6227__auto___14607 < len__6226__auto___14606)){
args14029.push((arguments[i__6227__auto___14607]));

var G__14608 = (i__6227__auto___14607 + (1));
i__6227__auto___14607 = G__14608;
continue;
} else {
}
break;
}

var G__14033 = args14029.length;
switch (G__14033) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14029.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq14030){
var G__14031 = cljs.core.first.call(null,seq14030);
var seq14030__$1 = cljs.core.next.call(null,seq14030);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__14031,seq14030__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args14034 = [];
var len__6226__auto___14610 = arguments.length;
var i__6227__auto___14611 = (0);
while(true){
if((i__6227__auto___14611 < len__6226__auto___14610)){
args14034.push((arguments[i__6227__auto___14611]));

var G__14612 = (i__6227__auto___14611 + (1));
i__6227__auto___14611 = G__14612;
continue;
} else {
}
break;
}

var G__14038 = args14034.length;
switch (G__14038) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14034.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq14035){
var G__14036 = cljs.core.first.call(null,seq14035);
var seq14035__$1 = cljs.core.next.call(null,seq14035);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__14036,seq14035__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args14039 = [];
var len__6226__auto___14614 = arguments.length;
var i__6227__auto___14615 = (0);
while(true){
if((i__6227__auto___14615 < len__6226__auto___14614)){
args14039.push((arguments[i__6227__auto___14615]));

var G__14616 = (i__6227__auto___14615 + (1));
i__6227__auto___14615 = G__14616;
continue;
} else {
}
break;
}

var G__14043 = args14039.length;
switch (G__14043) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14039.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq14040){
var G__14041 = cljs.core.first.call(null,seq14040);
var seq14040__$1 = cljs.core.next.call(null,seq14040);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__14041,seq14040__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args14044 = [];
var len__6226__auto___14618 = arguments.length;
var i__6227__auto___14619 = (0);
while(true){
if((i__6227__auto___14619 < len__6226__auto___14618)){
args14044.push((arguments[i__6227__auto___14619]));

var G__14620 = (i__6227__auto___14619 + (1));
i__6227__auto___14619 = G__14620;
continue;
} else {
}
break;
}

var G__14048 = args14044.length;
switch (G__14048) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14044.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq14045){
var G__14046 = cljs.core.first.call(null,seq14045);
var seq14045__$1 = cljs.core.next.call(null,seq14045);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__14046,seq14045__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args14049 = [];
var len__6226__auto___14622 = arguments.length;
var i__6227__auto___14623 = (0);
while(true){
if((i__6227__auto___14623 < len__6226__auto___14622)){
args14049.push((arguments[i__6227__auto___14623]));

var G__14624 = (i__6227__auto___14623 + (1));
i__6227__auto___14623 = G__14624;
continue;
} else {
}
break;
}

var G__14053 = args14049.length;
switch (G__14053) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14049.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq14050){
var G__14051 = cljs.core.first.call(null,seq14050);
var seq14050__$1 = cljs.core.next.call(null,seq14050);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__14051,seq14050__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args14054 = [];
var len__6226__auto___14626 = arguments.length;
var i__6227__auto___14627 = (0);
while(true){
if((i__6227__auto___14627 < len__6226__auto___14626)){
args14054.push((arguments[i__6227__auto___14627]));

var G__14628 = (i__6227__auto___14627 + (1));
i__6227__auto___14627 = G__14628;
continue;
} else {
}
break;
}

var G__14058 = args14054.length;
switch (G__14058) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14054.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq14055){
var G__14056 = cljs.core.first.call(null,seq14055);
var seq14055__$1 = cljs.core.next.call(null,seq14055);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__14056,seq14055__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args14059 = [];
var len__6226__auto___14630 = arguments.length;
var i__6227__auto___14631 = (0);
while(true){
if((i__6227__auto___14631 < len__6226__auto___14630)){
args14059.push((arguments[i__6227__auto___14631]));

var G__14632 = (i__6227__auto___14631 + (1));
i__6227__auto___14631 = G__14632;
continue;
} else {
}
break;
}

var G__14063 = args14059.length;
switch (G__14063) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14059.slice((1)),(0)));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq14060){
var G__14061 = cljs.core.first.call(null,seq14060);
var seq14060__$1 = cljs.core.next.call(null,seq14060);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__14061,seq14060__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args14064 = [];
var len__6226__auto___14634 = arguments.length;
var i__6227__auto___14635 = (0);
while(true){
if((i__6227__auto___14635 < len__6226__auto___14634)){
args14064.push((arguments[i__6227__auto___14635]));

var G__14636 = (i__6227__auto___14635 + (1));
i__6227__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var G__14068 = args14064.length;
switch (G__14068) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14064.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq14065){
var G__14066 = cljs.core.first.call(null,seq14065);
var seq14065__$1 = cljs.core.next.call(null,seq14065);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__14066,seq14065__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args14069 = [];
var len__6226__auto___14638 = arguments.length;
var i__6227__auto___14639 = (0);
while(true){
if((i__6227__auto___14639 < len__6226__auto___14638)){
args14069.push((arguments[i__6227__auto___14639]));

var G__14640 = (i__6227__auto___14639 + (1));
i__6227__auto___14639 = G__14640;
continue;
} else {
}
break;
}

var G__14073 = args14069.length;
switch (G__14073) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14069.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq14070){
var G__14071 = cljs.core.first.call(null,seq14070);
var seq14070__$1 = cljs.core.next.call(null,seq14070);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__14071,seq14070__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args14074 = [];
var len__6226__auto___14642 = arguments.length;
var i__6227__auto___14643 = (0);
while(true){
if((i__6227__auto___14643 < len__6226__auto___14642)){
args14074.push((arguments[i__6227__auto___14643]));

var G__14644 = (i__6227__auto___14643 + (1));
i__6227__auto___14643 = G__14644;
continue;
} else {
}
break;
}

var G__14078 = args14074.length;
switch (G__14078) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14074.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq14075){
var G__14076 = cljs.core.first.call(null,seq14075);
var seq14075__$1 = cljs.core.next.call(null,seq14075);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__14076,seq14075__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args14079 = [];
var len__6226__auto___14646 = arguments.length;
var i__6227__auto___14647 = (0);
while(true){
if((i__6227__auto___14647 < len__6226__auto___14646)){
args14079.push((arguments[i__6227__auto___14647]));

var G__14648 = (i__6227__auto___14647 + (1));
i__6227__auto___14647 = G__14648;
continue;
} else {
}
break;
}

var G__14083 = args14079.length;
switch (G__14083) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14079.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq14080){
var G__14081 = cljs.core.first.call(null,seq14080);
var seq14080__$1 = cljs.core.next.call(null,seq14080);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__14081,seq14080__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args14084 = [];
var len__6226__auto___14650 = arguments.length;
var i__6227__auto___14651 = (0);
while(true){
if((i__6227__auto___14651 < len__6226__auto___14650)){
args14084.push((arguments[i__6227__auto___14651]));

var G__14652 = (i__6227__auto___14651 + (1));
i__6227__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var G__14088 = args14084.length;
switch (G__14088) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14084.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq14085){
var G__14086 = cljs.core.first.call(null,seq14085);
var seq14085__$1 = cljs.core.next.call(null,seq14085);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__14086,seq14085__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args14089 = [];
var len__6226__auto___14654 = arguments.length;
var i__6227__auto___14655 = (0);
while(true){
if((i__6227__auto___14655 < len__6226__auto___14654)){
args14089.push((arguments[i__6227__auto___14655]));

var G__14656 = (i__6227__auto___14655 + (1));
i__6227__auto___14655 = G__14656;
continue;
} else {
}
break;
}

var G__14093 = args14089.length;
switch (G__14093) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14089.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq14090){
var G__14091 = cljs.core.first.call(null,seq14090);
var seq14090__$1 = cljs.core.next.call(null,seq14090);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__14091,seq14090__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args14094 = [];
var len__6226__auto___14658 = arguments.length;
var i__6227__auto___14659 = (0);
while(true){
if((i__6227__auto___14659 < len__6226__auto___14658)){
args14094.push((arguments[i__6227__auto___14659]));

var G__14660 = (i__6227__auto___14659 + (1));
i__6227__auto___14659 = G__14660;
continue;
} else {
}
break;
}

var G__14098 = args14094.length;
switch (G__14098) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14094.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq14095){
var G__14096 = cljs.core.first.call(null,seq14095);
var seq14095__$1 = cljs.core.next.call(null,seq14095);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__14096,seq14095__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args14099 = [];
var len__6226__auto___14662 = arguments.length;
var i__6227__auto___14663 = (0);
while(true){
if((i__6227__auto___14663 < len__6226__auto___14662)){
args14099.push((arguments[i__6227__auto___14663]));

var G__14664 = (i__6227__auto___14663 + (1));
i__6227__auto___14663 = G__14664;
continue;
} else {
}
break;
}

var G__14103 = args14099.length;
switch (G__14103) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14099.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq14100){
var G__14101 = cljs.core.first.call(null,seq14100);
var seq14100__$1 = cljs.core.next.call(null,seq14100);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__14101,seq14100__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args14104 = [];
var len__6226__auto___14666 = arguments.length;
var i__6227__auto___14667 = (0);
while(true){
if((i__6227__auto___14667 < len__6226__auto___14666)){
args14104.push((arguments[i__6227__auto___14667]));

var G__14668 = (i__6227__auto___14667 + (1));
i__6227__auto___14667 = G__14668;
continue;
} else {
}
break;
}

var G__14108 = args14104.length;
switch (G__14108) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14104.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq14105){
var G__14106 = cljs.core.first.call(null,seq14105);
var seq14105__$1 = cljs.core.next.call(null,seq14105);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__14106,seq14105__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args14109 = [];
var len__6226__auto___14670 = arguments.length;
var i__6227__auto___14671 = (0);
while(true){
if((i__6227__auto___14671 < len__6226__auto___14670)){
args14109.push((arguments[i__6227__auto___14671]));

var G__14672 = (i__6227__auto___14671 + (1));
i__6227__auto___14671 = G__14672;
continue;
} else {
}
break;
}

var G__14113 = args14109.length;
switch (G__14113) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14109.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq14110){
var G__14111 = cljs.core.first.call(null,seq14110);
var seq14110__$1 = cljs.core.next.call(null,seq14110);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__14111,seq14110__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args14114 = [];
var len__6226__auto___14674 = arguments.length;
var i__6227__auto___14675 = (0);
while(true){
if((i__6227__auto___14675 < len__6226__auto___14674)){
args14114.push((arguments[i__6227__auto___14675]));

var G__14676 = (i__6227__auto___14675 + (1));
i__6227__auto___14675 = G__14676;
continue;
} else {
}
break;
}

var G__14118 = args14114.length;
switch (G__14118) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14114.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq14115){
var G__14116 = cljs.core.first.call(null,seq14115);
var seq14115__$1 = cljs.core.next.call(null,seq14115);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__14116,seq14115__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args14119 = [];
var len__6226__auto___14678 = arguments.length;
var i__6227__auto___14679 = (0);
while(true){
if((i__6227__auto___14679 < len__6226__auto___14678)){
args14119.push((arguments[i__6227__auto___14679]));

var G__14680 = (i__6227__auto___14679 + (1));
i__6227__auto___14679 = G__14680;
continue;
} else {
}
break;
}

var G__14123 = args14119.length;
switch (G__14123) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14119.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq14120){
var G__14121 = cljs.core.first.call(null,seq14120);
var seq14120__$1 = cljs.core.next.call(null,seq14120);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__14121,seq14120__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args14124 = [];
var len__6226__auto___14682 = arguments.length;
var i__6227__auto___14683 = (0);
while(true){
if((i__6227__auto___14683 < len__6226__auto___14682)){
args14124.push((arguments[i__6227__auto___14683]));

var G__14684 = (i__6227__auto___14683 + (1));
i__6227__auto___14683 = G__14684;
continue;
} else {
}
break;
}

var G__14128 = args14124.length;
switch (G__14128) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14124.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq14125){
var G__14126 = cljs.core.first.call(null,seq14125);
var seq14125__$1 = cljs.core.next.call(null,seq14125);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__14126,seq14125__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args14129 = [];
var len__6226__auto___14686 = arguments.length;
var i__6227__auto___14687 = (0);
while(true){
if((i__6227__auto___14687 < len__6226__auto___14686)){
args14129.push((arguments[i__6227__auto___14687]));

var G__14688 = (i__6227__auto___14687 + (1));
i__6227__auto___14687 = G__14688;
continue;
} else {
}
break;
}

var G__14133 = args14129.length;
switch (G__14133) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14129.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq14130){
var G__14131 = cljs.core.first.call(null,seq14130);
var seq14130__$1 = cljs.core.next.call(null,seq14130);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__14131,seq14130__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args14134 = [];
var len__6226__auto___14690 = arguments.length;
var i__6227__auto___14691 = (0);
while(true){
if((i__6227__auto___14691 < len__6226__auto___14690)){
args14134.push((arguments[i__6227__auto___14691]));

var G__14692 = (i__6227__auto___14691 + (1));
i__6227__auto___14691 = G__14692;
continue;
} else {
}
break;
}

var G__14138 = args14134.length;
switch (G__14138) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14134.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq14135){
var G__14136 = cljs.core.first.call(null,seq14135);
var seq14135__$1 = cljs.core.next.call(null,seq14135);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__14136,seq14135__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args14139 = [];
var len__6226__auto___14694 = arguments.length;
var i__6227__auto___14695 = (0);
while(true){
if((i__6227__auto___14695 < len__6226__auto___14694)){
args14139.push((arguments[i__6227__auto___14695]));

var G__14696 = (i__6227__auto___14695 + (1));
i__6227__auto___14695 = G__14696;
continue;
} else {
}
break;
}

var G__14143 = args14139.length;
switch (G__14143) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14139.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq14140){
var G__14141 = cljs.core.first.call(null,seq14140);
var seq14140__$1 = cljs.core.next.call(null,seq14140);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__14141,seq14140__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args14144 = [];
var len__6226__auto___14698 = arguments.length;
var i__6227__auto___14699 = (0);
while(true){
if((i__6227__auto___14699 < len__6226__auto___14698)){
args14144.push((arguments[i__6227__auto___14699]));

var G__14700 = (i__6227__auto___14699 + (1));
i__6227__auto___14699 = G__14700;
continue;
} else {
}
break;
}

var G__14148 = args14144.length;
switch (G__14148) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14144.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq14145){
var G__14146 = cljs.core.first.call(null,seq14145);
var seq14145__$1 = cljs.core.next.call(null,seq14145);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__14146,seq14145__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args14149 = [];
var len__6226__auto___14702 = arguments.length;
var i__6227__auto___14703 = (0);
while(true){
if((i__6227__auto___14703 < len__6226__auto___14702)){
args14149.push((arguments[i__6227__auto___14703]));

var G__14704 = (i__6227__auto___14703 + (1));
i__6227__auto___14703 = G__14704;
continue;
} else {
}
break;
}

var G__14153 = args14149.length;
switch (G__14153) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14149.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq14150){
var G__14151 = cljs.core.first.call(null,seq14150);
var seq14150__$1 = cljs.core.next.call(null,seq14150);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__14151,seq14150__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args14154 = [];
var len__6226__auto___14706 = arguments.length;
var i__6227__auto___14707 = (0);
while(true){
if((i__6227__auto___14707 < len__6226__auto___14706)){
args14154.push((arguments[i__6227__auto___14707]));

var G__14708 = (i__6227__auto___14707 + (1));
i__6227__auto___14707 = G__14708;
continue;
} else {
}
break;
}

var G__14158 = args14154.length;
switch (G__14158) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14154.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq14155){
var G__14156 = cljs.core.first.call(null,seq14155);
var seq14155__$1 = cljs.core.next.call(null,seq14155);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__14156,seq14155__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args14159 = [];
var len__6226__auto___14710 = arguments.length;
var i__6227__auto___14711 = (0);
while(true){
if((i__6227__auto___14711 < len__6226__auto___14710)){
args14159.push((arguments[i__6227__auto___14711]));

var G__14712 = (i__6227__auto___14711 + (1));
i__6227__auto___14711 = G__14712;
continue;
} else {
}
break;
}

var G__14163 = args14159.length;
switch (G__14163) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14159.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq14160){
var G__14161 = cljs.core.first.call(null,seq14160);
var seq14160__$1 = cljs.core.next.call(null,seq14160);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__14161,seq14160__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args14164 = [];
var len__6226__auto___14714 = arguments.length;
var i__6227__auto___14715 = (0);
while(true){
if((i__6227__auto___14715 < len__6226__auto___14714)){
args14164.push((arguments[i__6227__auto___14715]));

var G__14716 = (i__6227__auto___14715 + (1));
i__6227__auto___14715 = G__14716;
continue;
} else {
}
break;
}

var G__14168 = args14164.length;
switch (G__14168) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14164.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq14165){
var G__14166 = cljs.core.first.call(null,seq14165);
var seq14165__$1 = cljs.core.next.call(null,seq14165);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__14166,seq14165__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args14169 = [];
var len__6226__auto___14718 = arguments.length;
var i__6227__auto___14719 = (0);
while(true){
if((i__6227__auto___14719 < len__6226__auto___14718)){
args14169.push((arguments[i__6227__auto___14719]));

var G__14720 = (i__6227__auto___14719 + (1));
i__6227__auto___14719 = G__14720;
continue;
} else {
}
break;
}

var G__14173 = args14169.length;
switch (G__14173) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14169.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq14170){
var G__14171 = cljs.core.first.call(null,seq14170);
var seq14170__$1 = cljs.core.next.call(null,seq14170);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__14171,seq14170__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args14174 = [];
var len__6226__auto___14722 = arguments.length;
var i__6227__auto___14723 = (0);
while(true){
if((i__6227__auto___14723 < len__6226__auto___14722)){
args14174.push((arguments[i__6227__auto___14723]));

var G__14724 = (i__6227__auto___14723 + (1));
i__6227__auto___14723 = G__14724;
continue;
} else {
}
break;
}

var G__14178 = args14174.length;
switch (G__14178) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14174.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq14175){
var G__14176 = cljs.core.first.call(null,seq14175);
var seq14175__$1 = cljs.core.next.call(null,seq14175);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__14176,seq14175__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args14179 = [];
var len__6226__auto___14726 = arguments.length;
var i__6227__auto___14727 = (0);
while(true){
if((i__6227__auto___14727 < len__6226__auto___14726)){
args14179.push((arguments[i__6227__auto___14727]));

var G__14728 = (i__6227__auto___14727 + (1));
i__6227__auto___14727 = G__14728;
continue;
} else {
}
break;
}

var G__14183 = args14179.length;
switch (G__14183) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14179.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq14180){
var G__14181 = cljs.core.first.call(null,seq14180);
var seq14180__$1 = cljs.core.next.call(null,seq14180);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__14181,seq14180__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args14184 = [];
var len__6226__auto___14730 = arguments.length;
var i__6227__auto___14731 = (0);
while(true){
if((i__6227__auto___14731 < len__6226__auto___14730)){
args14184.push((arguments[i__6227__auto___14731]));

var G__14732 = (i__6227__auto___14731 + (1));
i__6227__auto___14731 = G__14732;
continue;
} else {
}
break;
}

var G__14188 = args14184.length;
switch (G__14188) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14184.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq14185){
var G__14186 = cljs.core.first.call(null,seq14185);
var seq14185__$1 = cljs.core.next.call(null,seq14185);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__14186,seq14185__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args14189 = [];
var len__6226__auto___14734 = arguments.length;
var i__6227__auto___14735 = (0);
while(true){
if((i__6227__auto___14735 < len__6226__auto___14734)){
args14189.push((arguments[i__6227__auto___14735]));

var G__14736 = (i__6227__auto___14735 + (1));
i__6227__auto___14735 = G__14736;
continue;
} else {
}
break;
}

var G__14193 = args14189.length;
switch (G__14193) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14189.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq14190){
var G__14191 = cljs.core.first.call(null,seq14190);
var seq14190__$1 = cljs.core.next.call(null,seq14190);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__14191,seq14190__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args14194 = [];
var len__6226__auto___14738 = arguments.length;
var i__6227__auto___14739 = (0);
while(true){
if((i__6227__auto___14739 < len__6226__auto___14738)){
args14194.push((arguments[i__6227__auto___14739]));

var G__14740 = (i__6227__auto___14739 + (1));
i__6227__auto___14739 = G__14740;
continue;
} else {
}
break;
}

var G__14198 = args14194.length;
switch (G__14198) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14194.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq14195){
var G__14196 = cljs.core.first.call(null,seq14195);
var seq14195__$1 = cljs.core.next.call(null,seq14195);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__14196,seq14195__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args14199 = [];
var len__6226__auto___14742 = arguments.length;
var i__6227__auto___14743 = (0);
while(true){
if((i__6227__auto___14743 < len__6226__auto___14742)){
args14199.push((arguments[i__6227__auto___14743]));

var G__14744 = (i__6227__auto___14743 + (1));
i__6227__auto___14743 = G__14744;
continue;
} else {
}
break;
}

var G__14203 = args14199.length;
switch (G__14203) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14199.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq14200){
var G__14201 = cljs.core.first.call(null,seq14200);
var seq14200__$1 = cljs.core.next.call(null,seq14200);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__14201,seq14200__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args14204 = [];
var len__6226__auto___14746 = arguments.length;
var i__6227__auto___14747 = (0);
while(true){
if((i__6227__auto___14747 < len__6226__auto___14746)){
args14204.push((arguments[i__6227__auto___14747]));

var G__14748 = (i__6227__auto___14747 + (1));
i__6227__auto___14747 = G__14748;
continue;
} else {
}
break;
}

var G__14208 = args14204.length;
switch (G__14208) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14204.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq14205){
var G__14206 = cljs.core.first.call(null,seq14205);
var seq14205__$1 = cljs.core.next.call(null,seq14205);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__14206,seq14205__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args14209 = [];
var len__6226__auto___14750 = arguments.length;
var i__6227__auto___14751 = (0);
while(true){
if((i__6227__auto___14751 < len__6226__auto___14750)){
args14209.push((arguments[i__6227__auto___14751]));

var G__14752 = (i__6227__auto___14751 + (1));
i__6227__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var G__14213 = args14209.length;
switch (G__14213) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14209.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq14210){
var G__14211 = cljs.core.first.call(null,seq14210);
var seq14210__$1 = cljs.core.next.call(null,seq14210);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__14211,seq14210__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args14214 = [];
var len__6226__auto___14754 = arguments.length;
var i__6227__auto___14755 = (0);
while(true){
if((i__6227__auto___14755 < len__6226__auto___14754)){
args14214.push((arguments[i__6227__auto___14755]));

var G__14756 = (i__6227__auto___14755 + (1));
i__6227__auto___14755 = G__14756;
continue;
} else {
}
break;
}

var G__14218 = args14214.length;
switch (G__14218) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14214.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq14215){
var G__14216 = cljs.core.first.call(null,seq14215);
var seq14215__$1 = cljs.core.next.call(null,seq14215);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__14216,seq14215__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args14219 = [];
var len__6226__auto___14758 = arguments.length;
var i__6227__auto___14759 = (0);
while(true){
if((i__6227__auto___14759 < len__6226__auto___14758)){
args14219.push((arguments[i__6227__auto___14759]));

var G__14760 = (i__6227__auto___14759 + (1));
i__6227__auto___14759 = G__14760;
continue;
} else {
}
break;
}

var G__14223 = args14219.length;
switch (G__14223) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14219.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq14220){
var G__14221 = cljs.core.first.call(null,seq14220);
var seq14220__$1 = cljs.core.next.call(null,seq14220);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__14221,seq14220__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args14224 = [];
var len__6226__auto___14762 = arguments.length;
var i__6227__auto___14763 = (0);
while(true){
if((i__6227__auto___14763 < len__6226__auto___14762)){
args14224.push((arguments[i__6227__auto___14763]));

var G__14764 = (i__6227__auto___14763 + (1));
i__6227__auto___14763 = G__14764;
continue;
} else {
}
break;
}

var G__14228 = args14224.length;
switch (G__14228) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14224.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq14225){
var G__14226 = cljs.core.first.call(null,seq14225);
var seq14225__$1 = cljs.core.next.call(null,seq14225);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__14226,seq14225__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args14229 = [];
var len__6226__auto___14766 = arguments.length;
var i__6227__auto___14767 = (0);
while(true){
if((i__6227__auto___14767 < len__6226__auto___14766)){
args14229.push((arguments[i__6227__auto___14767]));

var G__14768 = (i__6227__auto___14767 + (1));
i__6227__auto___14767 = G__14768;
continue;
} else {
}
break;
}

var G__14233 = args14229.length;
switch (G__14233) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14229.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq14230){
var G__14231 = cljs.core.first.call(null,seq14230);
var seq14230__$1 = cljs.core.next.call(null,seq14230);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__14231,seq14230__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args14234 = [];
var len__6226__auto___14770 = arguments.length;
var i__6227__auto___14771 = (0);
while(true){
if((i__6227__auto___14771 < len__6226__auto___14770)){
args14234.push((arguments[i__6227__auto___14771]));

var G__14772 = (i__6227__auto___14771 + (1));
i__6227__auto___14771 = G__14772;
continue;
} else {
}
break;
}

var G__14238 = args14234.length;
switch (G__14238) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14234.slice((1)),(0)));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq14235){
var G__14236 = cljs.core.first.call(null,seq14235);
var seq14235__$1 = cljs.core.next.call(null,seq14235);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__14236,seq14235__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args14239 = [];
var len__6226__auto___14774 = arguments.length;
var i__6227__auto___14775 = (0);
while(true){
if((i__6227__auto___14775 < len__6226__auto___14774)){
args14239.push((arguments[i__6227__auto___14775]));

var G__14776 = (i__6227__auto___14775 + (1));
i__6227__auto___14775 = G__14776;
continue;
} else {
}
break;
}

var G__14243 = args14239.length;
switch (G__14243) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14239.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq14240){
var G__14241 = cljs.core.first.call(null,seq14240);
var seq14240__$1 = cljs.core.next.call(null,seq14240);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__14241,seq14240__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args14244 = [];
var len__6226__auto___14778 = arguments.length;
var i__6227__auto___14779 = (0);
while(true){
if((i__6227__auto___14779 < len__6226__auto___14778)){
args14244.push((arguments[i__6227__auto___14779]));

var G__14780 = (i__6227__auto___14779 + (1));
i__6227__auto___14779 = G__14780;
continue;
} else {
}
break;
}

var G__14248 = args14244.length;
switch (G__14248) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14244.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq14245){
var G__14246 = cljs.core.first.call(null,seq14245);
var seq14245__$1 = cljs.core.next.call(null,seq14245);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__14246,seq14245__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args14249 = [];
var len__6226__auto___14782 = arguments.length;
var i__6227__auto___14783 = (0);
while(true){
if((i__6227__auto___14783 < len__6226__auto___14782)){
args14249.push((arguments[i__6227__auto___14783]));

var G__14784 = (i__6227__auto___14783 + (1));
i__6227__auto___14783 = G__14784;
continue;
} else {
}
break;
}

var G__14253 = args14249.length;
switch (G__14253) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14249.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq14250){
var G__14251 = cljs.core.first.call(null,seq14250);
var seq14250__$1 = cljs.core.next.call(null,seq14250);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__14251,seq14250__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args14254 = [];
var len__6226__auto___14786 = arguments.length;
var i__6227__auto___14787 = (0);
while(true){
if((i__6227__auto___14787 < len__6226__auto___14786)){
args14254.push((arguments[i__6227__auto___14787]));

var G__14788 = (i__6227__auto___14787 + (1));
i__6227__auto___14787 = G__14788;
continue;
} else {
}
break;
}

var G__14258 = args14254.length;
switch (G__14258) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14254.slice((1)),(0)));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq14255){
var G__14256 = cljs.core.first.call(null,seq14255);
var seq14255__$1 = cljs.core.next.call(null,seq14255);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__14256,seq14255__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args14259 = [];
var len__6226__auto___14790 = arguments.length;
var i__6227__auto___14791 = (0);
while(true){
if((i__6227__auto___14791 < len__6226__auto___14790)){
args14259.push((arguments[i__6227__auto___14791]));

var G__14792 = (i__6227__auto___14791 + (1));
i__6227__auto___14791 = G__14792;
continue;
} else {
}
break;
}

var G__14263 = args14259.length;
switch (G__14263) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14259.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq14260){
var G__14261 = cljs.core.first.call(null,seq14260);
var seq14260__$1 = cljs.core.next.call(null,seq14260);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__14261,seq14260__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args14264 = [];
var len__6226__auto___14794 = arguments.length;
var i__6227__auto___14795 = (0);
while(true){
if((i__6227__auto___14795 < len__6226__auto___14794)){
args14264.push((arguments[i__6227__auto___14795]));

var G__14796 = (i__6227__auto___14795 + (1));
i__6227__auto___14795 = G__14796;
continue;
} else {
}
break;
}

var G__14268 = args14264.length;
switch (G__14268) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14264.slice((1)),(0)));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq14265){
var G__14266 = cljs.core.first.call(null,seq14265);
var seq14265__$1 = cljs.core.next.call(null,seq14265);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__14266,seq14265__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args14269 = [];
var len__6226__auto___14798 = arguments.length;
var i__6227__auto___14799 = (0);
while(true){
if((i__6227__auto___14799 < len__6226__auto___14798)){
args14269.push((arguments[i__6227__auto___14799]));

var G__14800 = (i__6227__auto___14799 + (1));
i__6227__auto___14799 = G__14800;
continue;
} else {
}
break;
}

var G__14273 = args14269.length;
switch (G__14273) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14269.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq14270){
var G__14271 = cljs.core.first.call(null,seq14270);
var seq14270__$1 = cljs.core.next.call(null,seq14270);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__14271,seq14270__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args14274 = [];
var len__6226__auto___14802 = arguments.length;
var i__6227__auto___14803 = (0);
while(true){
if((i__6227__auto___14803 < len__6226__auto___14802)){
args14274.push((arguments[i__6227__auto___14803]));

var G__14804 = (i__6227__auto___14803 + (1));
i__6227__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var G__14278 = args14274.length;
switch (G__14278) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14274.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq14275){
var G__14276 = cljs.core.first.call(null,seq14275);
var seq14275__$1 = cljs.core.next.call(null,seq14275);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__14276,seq14275__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args14279 = [];
var len__6226__auto___14806 = arguments.length;
var i__6227__auto___14807 = (0);
while(true){
if((i__6227__auto___14807 < len__6226__auto___14806)){
args14279.push((arguments[i__6227__auto___14807]));

var G__14808 = (i__6227__auto___14807 + (1));
i__6227__auto___14807 = G__14808;
continue;
} else {
}
break;
}

var G__14283 = args14279.length;
switch (G__14283) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14279.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq14280){
var G__14281 = cljs.core.first.call(null,seq14280);
var seq14280__$1 = cljs.core.next.call(null,seq14280);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__14281,seq14280__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args14284 = [];
var len__6226__auto___14810 = arguments.length;
var i__6227__auto___14811 = (0);
while(true){
if((i__6227__auto___14811 < len__6226__auto___14810)){
args14284.push((arguments[i__6227__auto___14811]));

var G__14812 = (i__6227__auto___14811 + (1));
i__6227__auto___14811 = G__14812;
continue;
} else {
}
break;
}

var G__14288 = args14284.length;
switch (G__14288) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14284.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq14285){
var G__14286 = cljs.core.first.call(null,seq14285);
var seq14285__$1 = cljs.core.next.call(null,seq14285);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__14286,seq14285__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args14289 = [];
var len__6226__auto___14814 = arguments.length;
var i__6227__auto___14815 = (0);
while(true){
if((i__6227__auto___14815 < len__6226__auto___14814)){
args14289.push((arguments[i__6227__auto___14815]));

var G__14816 = (i__6227__auto___14815 + (1));
i__6227__auto___14815 = G__14816;
continue;
} else {
}
break;
}

var G__14293 = args14289.length;
switch (G__14293) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14289.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq14290){
var G__14291 = cljs.core.first.call(null,seq14290);
var seq14290__$1 = cljs.core.next.call(null,seq14290);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__14291,seq14290__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args14294 = [];
var len__6226__auto___14818 = arguments.length;
var i__6227__auto___14819 = (0);
while(true){
if((i__6227__auto___14819 < len__6226__auto___14818)){
args14294.push((arguments[i__6227__auto___14819]));

var G__14820 = (i__6227__auto___14819 + (1));
i__6227__auto___14819 = G__14820;
continue;
} else {
}
break;
}

var G__14298 = args14294.length;
switch (G__14298) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14294.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq14295){
var G__14296 = cljs.core.first.call(null,seq14295);
var seq14295__$1 = cljs.core.next.call(null,seq14295);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__14296,seq14295__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args14299 = [];
var len__6226__auto___14822 = arguments.length;
var i__6227__auto___14823 = (0);
while(true){
if((i__6227__auto___14823 < len__6226__auto___14822)){
args14299.push((arguments[i__6227__auto___14823]));

var G__14824 = (i__6227__auto___14823 + (1));
i__6227__auto___14823 = G__14824;
continue;
} else {
}
break;
}

var G__14303 = args14299.length;
switch (G__14303) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14299.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq14300){
var G__14301 = cljs.core.first.call(null,seq14300);
var seq14300__$1 = cljs.core.next.call(null,seq14300);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__14301,seq14300__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args14304 = [];
var len__6226__auto___14826 = arguments.length;
var i__6227__auto___14827 = (0);
while(true){
if((i__6227__auto___14827 < len__6226__auto___14826)){
args14304.push((arguments[i__6227__auto___14827]));

var G__14828 = (i__6227__auto___14827 + (1));
i__6227__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var G__14308 = args14304.length;
switch (G__14308) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14304.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq14305){
var G__14306 = cljs.core.first.call(null,seq14305);
var seq14305__$1 = cljs.core.next.call(null,seq14305);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__14306,seq14305__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args14309 = [];
var len__6226__auto___14830 = arguments.length;
var i__6227__auto___14831 = (0);
while(true){
if((i__6227__auto___14831 < len__6226__auto___14830)){
args14309.push((arguments[i__6227__auto___14831]));

var G__14832 = (i__6227__auto___14831 + (1));
i__6227__auto___14831 = G__14832;
continue;
} else {
}
break;
}

var G__14313 = args14309.length;
switch (G__14313) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14309.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq14310){
var G__14311 = cljs.core.first.call(null,seq14310);
var seq14310__$1 = cljs.core.next.call(null,seq14310);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__14311,seq14310__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args14314 = [];
var len__6226__auto___14834 = arguments.length;
var i__6227__auto___14835 = (0);
while(true){
if((i__6227__auto___14835 < len__6226__auto___14834)){
args14314.push((arguments[i__6227__auto___14835]));

var G__14836 = (i__6227__auto___14835 + (1));
i__6227__auto___14835 = G__14836;
continue;
} else {
}
break;
}

var G__14318 = args14314.length;
switch (G__14318) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14314.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq14315){
var G__14316 = cljs.core.first.call(null,seq14315);
var seq14315__$1 = cljs.core.next.call(null,seq14315);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__14316,seq14315__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.use = (function om_tools$dom$use(var_args){
var args14319 = [];
var len__6226__auto___14838 = arguments.length;
var i__6227__auto___14839 = (0);
while(true){
if((i__6227__auto___14839 < len__6226__auto___14838)){
args14319.push((arguments[i__6227__auto___14839]));

var G__14840 = (i__6227__auto___14839 + (1));
i__6227__auto___14839 = G__14840;
continue;
} else {
}
break;
}

var G__14323 = args14319.length;
switch (G__14323) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14319.slice((1)),(0)));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq14320){
var G__14321 = cljs.core.first.call(null,seq14320);
var seq14320__$1 = cljs.core.next.call(null,seq14320);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__14321,seq14320__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args14324 = [];
var len__6226__auto___14842 = arguments.length;
var i__6227__auto___14843 = (0);
while(true){
if((i__6227__auto___14843 < len__6226__auto___14842)){
args14324.push((arguments[i__6227__auto___14843]));

var G__14844 = (i__6227__auto___14843 + (1));
i__6227__auto___14843 = G__14844;
continue;
} else {
}
break;
}

var G__14328 = args14324.length;
switch (G__14328) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14324.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq14325){
var G__14326 = cljs.core.first.call(null,seq14325);
var seq14325__$1 = cljs.core.next.call(null,seq14325);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__14326,seq14325__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args14329 = [];
var len__6226__auto___14846 = arguments.length;
var i__6227__auto___14847 = (0);
while(true){
if((i__6227__auto___14847 < len__6226__auto___14846)){
args14329.push((arguments[i__6227__auto___14847]));

var G__14848 = (i__6227__auto___14847 + (1));
i__6227__auto___14847 = G__14848;
continue;
} else {
}
break;
}

var G__14333 = args14329.length;
switch (G__14333) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args14329.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq14330){
var G__14331 = cljs.core.first.call(null,seq14330);
var seq14330__$1 = cljs.core.next.call(null,seq14330);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__14331,seq14330__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args13844 = [];
var len__6226__auto___14850 = arguments.length;
var i__6227__auto___14851 = (0);
while(true){
if((i__6227__auto___14851 < len__6226__auto___14850)){
args13844.push((arguments[i__6227__auto___14851]));

var G__14852 = (i__6227__auto___14851 + (1));
i__6227__auto___14851 = G__14852;
continue;
} else {
}
break;
}

var G__13848 = args13844.length;
switch (G__13848) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args13844.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6245__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13660__auto__,children__13661__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__13660__auto__,children__13661__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq13845){
var G__13846 = cljs.core.first.call(null,seq13845);
var seq13845__$1 = cljs.core.next.call(null,seq13845);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__13846,seq13845__$1);
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
