// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args18344 = [];
var len__6226__auto___18353 = arguments.length;
var i__6227__auto___18354 = (0);
while(true){
if((i__6227__auto___18354 < len__6226__auto___18353)){
args18344.push((arguments[i__6227__auto___18354]));

var G__18355 = (i__6227__auto___18354 + (1));
i__6227__auto___18354 = G__18355;
continue;
} else {
}
break;
}

var G__18352 = args18344.length;
switch (G__18352) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args18344.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__6245__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq18345){
var G__18346 = cljs.core.first.call(null,seq18345);
var seq18345__$1 = cljs.core.next.call(null,seq18345);
var G__18347 = cljs.core.first.call(null,seq18345__$1);
var seq18345__$2 = cljs.core.next.call(null,seq18345__$1);
var G__18348 = cljs.core.first.call(null,seq18345__$2);
var seq18345__$3 = cljs.core.next.call(null,seq18345__$2);
var G__18349 = cljs.core.first.call(null,seq18345__$3);
var seq18345__$4 = cljs.core.next.call(null,seq18345__$3);
var G__18350 = cljs.core.first.call(null,seq18345__$4);
var seq18345__$5 = cljs.core.next.call(null,seq18345__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__18346,G__18347,G__18348,G__18349,G__18350,seq18345__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__18082__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18365_18371 = cljs.core.seq.call(null,m);
var chunk__18366_18372 = null;
var count__18367_18373 = (0);
var i__18368_18374 = (0);
while(true){
if((i__18368_18374 < count__18367_18373)){
var vec__18369_18375 = cljs.core._nth.call(null,chunk__18366_18372,i__18368_18374);
var k_18376 = cljs.core.nth.call(null,vec__18369_18375,(0),null);
var v_18377 = cljs.core.nth.call(null,vec__18369_18375,(1),null);
var m18364_18378 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18364_18378,k_18376,f.call(null,v_18377)));

var G__18379 = seq__18365_18371;
var G__18380 = chunk__18366_18372;
var G__18381 = count__18367_18373;
var G__18382 = (i__18368_18374 + (1));
seq__18365_18371 = G__18379;
chunk__18366_18372 = G__18380;
count__18367_18373 = G__18381;
i__18368_18374 = G__18382;
continue;
} else {
var temp__4425__auto___18383 = cljs.core.seq.call(null,seq__18365_18371);
if(temp__4425__auto___18383){
var seq__18365_18384__$1 = temp__4425__auto___18383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18365_18384__$1)){
var c__5971__auto___18385 = cljs.core.chunk_first.call(null,seq__18365_18384__$1);
var G__18386 = cljs.core.chunk_rest.call(null,seq__18365_18384__$1);
var G__18387 = c__5971__auto___18385;
var G__18388 = cljs.core.count.call(null,c__5971__auto___18385);
var G__18389 = (0);
seq__18365_18371 = G__18386;
chunk__18366_18372 = G__18387;
count__18367_18373 = G__18388;
i__18368_18374 = G__18389;
continue;
} else {
var vec__18370_18390 = cljs.core.first.call(null,seq__18365_18384__$1);
var k_18391 = cljs.core.nth.call(null,vec__18370_18390,(0),null);
var v_18392 = cljs.core.nth.call(null,vec__18370_18390,(1),null);
var m18364_18393 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18364_18393,k_18391,f.call(null,v_18392)));

var G__18394 = cljs.core.next.call(null,seq__18365_18384__$1);
var G__18395 = null;
var G__18396 = (0);
var G__18397 = (0);
seq__18365_18371 = G__18394;
chunk__18366_18372 = G__18395;
count__18367_18373 = G__18396;
i__18368_18374 = G__18397;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18082__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__18082__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18406_18412 = cljs.core.seq.call(null,m);
var chunk__18407_18413 = null;
var count__18408_18414 = (0);
var i__18409_18415 = (0);
while(true){
if((i__18409_18415 < count__18408_18414)){
var vec__18410_18416 = cljs.core._nth.call(null,chunk__18407_18413,i__18409_18415);
var k_18417 = cljs.core.nth.call(null,vec__18410_18416,(0),null);
var v_18418 = cljs.core.nth.call(null,vec__18410_18416,(1),null);
var m18405_18419 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18405_18419,f.call(null,k_18417),v_18418));

var G__18420 = seq__18406_18412;
var G__18421 = chunk__18407_18413;
var G__18422 = count__18408_18414;
var G__18423 = (i__18409_18415 + (1));
seq__18406_18412 = G__18420;
chunk__18407_18413 = G__18421;
count__18408_18414 = G__18422;
i__18409_18415 = G__18423;
continue;
} else {
var temp__4425__auto___18424 = cljs.core.seq.call(null,seq__18406_18412);
if(temp__4425__auto___18424){
var seq__18406_18425__$1 = temp__4425__auto___18424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18406_18425__$1)){
var c__5971__auto___18426 = cljs.core.chunk_first.call(null,seq__18406_18425__$1);
var G__18427 = cljs.core.chunk_rest.call(null,seq__18406_18425__$1);
var G__18428 = c__5971__auto___18426;
var G__18429 = cljs.core.count.call(null,c__5971__auto___18426);
var G__18430 = (0);
seq__18406_18412 = G__18427;
chunk__18407_18413 = G__18428;
count__18408_18414 = G__18429;
i__18409_18415 = G__18430;
continue;
} else {
var vec__18411_18431 = cljs.core.first.call(null,seq__18406_18425__$1);
var k_18432 = cljs.core.nth.call(null,vec__18411_18431,(0),null);
var v_18433 = cljs.core.nth.call(null,vec__18411_18431,(1),null);
var m18405_18434 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18405_18434,f.call(null,k_18432),v_18433));

var G__18435 = cljs.core.next.call(null,seq__18406_18425__$1);
var G__18436 = null;
var G__18437 = (0);
var G__18438 = (0);
seq__18406_18412 = G__18435;
chunk__18407_18413 = G__18436;
count__18408_18414 = G__18437;
i__18409_18415 = G__18438;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18082__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__18082__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18445_18449 = cljs.core.seq.call(null,ks);
var chunk__18446_18450 = null;
var count__18447_18451 = (0);
var i__18448_18452 = (0);
while(true){
if((i__18448_18452 < count__18447_18451)){
var k_18453 = cljs.core._nth.call(null,chunk__18446_18450,i__18448_18452);
var m18444_18454 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18444_18454,k_18453,f.call(null,k_18453)));

var G__18455 = seq__18445_18449;
var G__18456 = chunk__18446_18450;
var G__18457 = count__18447_18451;
var G__18458 = (i__18448_18452 + (1));
seq__18445_18449 = G__18455;
chunk__18446_18450 = G__18456;
count__18447_18451 = G__18457;
i__18448_18452 = G__18458;
continue;
} else {
var temp__4425__auto___18459 = cljs.core.seq.call(null,seq__18445_18449);
if(temp__4425__auto___18459){
var seq__18445_18460__$1 = temp__4425__auto___18459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18445_18460__$1)){
var c__5971__auto___18461 = cljs.core.chunk_first.call(null,seq__18445_18460__$1);
var G__18462 = cljs.core.chunk_rest.call(null,seq__18445_18460__$1);
var G__18463 = c__5971__auto___18461;
var G__18464 = cljs.core.count.call(null,c__5971__auto___18461);
var G__18465 = (0);
seq__18445_18449 = G__18462;
chunk__18446_18450 = G__18463;
count__18447_18451 = G__18464;
i__18448_18452 = G__18465;
continue;
} else {
var k_18466 = cljs.core.first.call(null,seq__18445_18460__$1);
var m18444_18467 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18444_18467,k_18466,f.call(null,k_18466)));

var G__18468 = cljs.core.next.call(null,seq__18445_18460__$1);
var G__18469 = null;
var G__18470 = (0);
var G__18471 = (0);
seq__18445_18449 = G__18468;
chunk__18446_18450 = G__18469;
count__18447_18451 = G__18470;
i__18448_18452 = G__18471;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18082__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__18082__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18478_18482 = cljs.core.seq.call(null,vs);
var chunk__18479_18483 = null;
var count__18480_18484 = (0);
var i__18481_18485 = (0);
while(true){
if((i__18481_18485 < count__18480_18484)){
var v_18486 = cljs.core._nth.call(null,chunk__18479_18483,i__18481_18485);
var m18477_18487 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18477_18487,f.call(null,v_18486),v_18486));

var G__18488 = seq__18478_18482;
var G__18489 = chunk__18479_18483;
var G__18490 = count__18480_18484;
var G__18491 = (i__18481_18485 + (1));
seq__18478_18482 = G__18488;
chunk__18479_18483 = G__18489;
count__18480_18484 = G__18490;
i__18481_18485 = G__18491;
continue;
} else {
var temp__4425__auto___18492 = cljs.core.seq.call(null,seq__18478_18482);
if(temp__4425__auto___18492){
var seq__18478_18493__$1 = temp__4425__auto___18492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18478_18493__$1)){
var c__5971__auto___18494 = cljs.core.chunk_first.call(null,seq__18478_18493__$1);
var G__18495 = cljs.core.chunk_rest.call(null,seq__18478_18493__$1);
var G__18496 = c__5971__auto___18494;
var G__18497 = cljs.core.count.call(null,c__5971__auto___18494);
var G__18498 = (0);
seq__18478_18482 = G__18495;
chunk__18479_18483 = G__18496;
count__18480_18484 = G__18497;
i__18481_18485 = G__18498;
continue;
} else {
var v_18499 = cljs.core.first.call(null,seq__18478_18493__$1);
var m18477_18500 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18477_18500,f.call(null,v_18499),v_18499));

var G__18501 = cljs.core.next.call(null,seq__18478_18493__$1);
var G__18502 = null;
var G__18503 = (0);
var G__18504 = (0);
seq__18478_18482 = G__18501;
chunk__18479_18483 = G__18502;
count__18480_18484 = G__18503;
i__18481_18485 = G__18504;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18082__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__18505){
var vec__18507 = p__18505;
var k = cljs.core.nth.call(null,vec__18507,(0),null);
var ks = cljs.core.nthnext.call(null,vec__18507,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__5156__auto__ = ks;
if(cljs.core.truth_(and__5156__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__18082__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18516_18522 = cljs.core.seq.call(null,x);
var chunk__18517_18523 = null;
var count__18518_18524 = (0);
var i__18519_18525 = (0);
while(true){
if((i__18519_18525 < count__18518_18524)){
var vec__18520_18526 = cljs.core._nth.call(null,chunk__18517_18523,i__18519_18525);
var k_18527 = cljs.core.nth.call(null,vec__18520_18526,(0),null);
var v_18528 = cljs.core.nth.call(null,vec__18520_18526,(1),null);
var m18515_18529 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18515_18529,((typeof k_18527 === 'string')?cljs.core.keyword.call(null,k_18527):k_18527),plumbing$core$keywordize_map.call(null,v_18528)));

var G__18530 = seq__18516_18522;
var G__18531 = chunk__18517_18523;
var G__18532 = count__18518_18524;
var G__18533 = (i__18519_18525 + (1));
seq__18516_18522 = G__18530;
chunk__18517_18523 = G__18531;
count__18518_18524 = G__18532;
i__18519_18525 = G__18533;
continue;
} else {
var temp__4425__auto___18534 = cljs.core.seq.call(null,seq__18516_18522);
if(temp__4425__auto___18534){
var seq__18516_18535__$1 = temp__4425__auto___18534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18516_18535__$1)){
var c__5971__auto___18536 = cljs.core.chunk_first.call(null,seq__18516_18535__$1);
var G__18537 = cljs.core.chunk_rest.call(null,seq__18516_18535__$1);
var G__18538 = c__5971__auto___18536;
var G__18539 = cljs.core.count.call(null,c__5971__auto___18536);
var G__18540 = (0);
seq__18516_18522 = G__18537;
chunk__18517_18523 = G__18538;
count__18518_18524 = G__18539;
i__18519_18525 = G__18540;
continue;
} else {
var vec__18521_18541 = cljs.core.first.call(null,seq__18516_18535__$1);
var k_18542 = cljs.core.nth.call(null,vec__18521_18541,(0),null);
var v_18543 = cljs.core.nth.call(null,vec__18521_18541,(1),null);
var m18515_18544 = cljs.core.deref.call(null,m_atom__18082__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18082__auto__,cljs.core.assoc_BANG_.call(null,m18515_18544,((typeof k_18542 === 'string')?cljs.core.keyword.call(null,k_18542):k_18542),plumbing$core$keywordize_map.call(null,v_18543)));

var G__18545 = cljs.core.next.call(null,seq__18516_18535__$1);
var G__18546 = null;
var G__18547 = (0);
var G__18548 = (0);
seq__18516_18522 = G__18545;
chunk__18517_18523 = G__18546;
count__18518_18524 = G__18547;
i__18519_18525 = G__18548;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18082__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__18158__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__18158__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__18549 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__18550 = cljs.core.next.call(null,ks);
m = G__18549;
ks = G__18550;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18561 = arguments.length;
var i__6227__auto___18562 = (0);
while(true){
if((i__6227__auto___18562 < len__6226__auto___18561)){
args__6233__auto__.push((arguments[i__6227__auto___18562]));

var G__18563 = (i__6227__auto___18562 + (1));
i__6227__auto___18562 = G__18563;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__5168__auto__ = m;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5940__auto__ = (function plumbing$core$iter__18553(s__18554){
return (new cljs.core.LazySeq(null,(function (){
var s__18554__$1 = s__18554;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18554__$1);
if(temp__4425__auto__){
var s__18554__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18554__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__18554__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__18556 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__18555 = (0);
while(true){
if((i__18555 < size__5939__auto__)){
var vec__18559 = cljs.core._nth.call(null,c__5938__auto__,i__18555);
var k = cljs.core.nth.call(null,vec__18559,(0),null);
var v = cljs.core.nth.call(null,vec__18559,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__18556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18564 = (i__18555 + (1));
i__18555 = G__18564;
continue;
} else {
var G__18565 = (i__18555 + (1));
i__18555 = G__18565;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18556),plumbing$core$iter__18553.call(null,cljs.core.chunk_rest.call(null,s__18554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18556),null);
}
} else {
var vec__18560 = cljs.core.first.call(null,s__18554__$2);
var k = cljs.core.nth.call(null,vec__18560,(0),null);
var v = cljs.core.nth.call(null,vec__18560,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__18553.call(null,cljs.core.rest.call(null,s__18554__$2)));
} else {
var G__18566 = cljs.core.rest.call(null,s__18554__$2);
s__18554__$1 = G__18566;
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
return iter__5940__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq18551){
var G__18552 = cljs.core.first.call(null,seq18551);
var seq18551__$1 = cljs.core.next.call(null,seq18551);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__18552,seq18551__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18571 = arguments.length;
var i__6227__auto___18572 = (0);
while(true){
if((i__6227__auto___18572 < len__6226__auto___18571)){
args__6233__auto__.push((arguments[i__6227__auto___18572]));

var G__18573 = (i__6227__auto___18572 + (1));
i__6227__auto___18572 = G__18573;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq18567){
var G__18568 = cljs.core.first.call(null,seq18567);
var seq18567__$1 = cljs.core.next.call(null,seq18567);
var G__18569 = cljs.core.first.call(null,seq18567__$1);
var seq18567__$2 = cljs.core.next.call(null,seq18567__$1);
var G__18570 = cljs.core.first.call(null,seq18567__$2);
var seq18567__$3 = cljs.core.next.call(null,seq18567__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__18568,G__18569,G__18570,seq18567__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args18574 = [];
var len__6226__auto___18577 = arguments.length;
var i__6227__auto___18578 = (0);
while(true){
if((i__6227__auto___18578 < len__6226__auto___18577)){
args18574.push((arguments[i__6227__auto___18578]));

var G__18579 = (i__6227__auto___18578 + (1));
i__6227__auto___18578 = G__18579;
continue;
} else {
}
break;
}

var G__18576 = args18574.length;
switch (G__18576) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18574.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__5940__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__18585(s__18586){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__18586__$1 = s__18586;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18586__$1);
if(temp__4425__auto__){
var s__18586__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18586__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__18586__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__18588 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__18587 = (0);
while(true){
if((i__18587 < size__5939__auto__)){
var x = cljs.core._nth.call(null,c__5938__auto__,i__18587);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__18588,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__18589 = (i__18587 + (1));
i__18587 = G__18589;
continue;
} else {
var G__18590 = (i__18587 + (1));
i__18587 = G__18590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18588),plumbing$core$distinct_by_$_iter__18585.call(null,cljs.core.chunk_rest.call(null,s__18586__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18588),null);
}
} else {
var x = cljs.core.first.call(null,s__18586__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__18585.call(null,cljs.core.rest.call(null,s__18586__$2)));
} else {
var G__18591 = cljs.core.rest.call(null,s__18586__$2);
s__18586__$1 = G__18591;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__5940__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18593 = arguments.length;
var i__6227__auto___18594 = (0);
while(true){
if((i__6227__auto___18594 < len__6226__auto___18593)){
args__6233__auto__.push((arguments[i__6227__auto___18594]));

var G__18595 = (i__6227__auto___18594 + (1));
i__6227__auto___18594 = G__18595;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq18592){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18592));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args18596 = [];
var len__6226__auto___18602 = arguments.length;
var i__6227__auto___18603 = (0);
while(true){
if((i__6227__auto___18603 < len__6226__auto___18602)){
args18596.push((arguments[i__6227__auto___18603]));

var G__18604 = (i__6227__auto___18603 + (1));
i__6227__auto___18603 = G__18604;
continue;
} else {
}
break;
}

var G__18601 = args18596.length;
switch (G__18601) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args18596.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6245__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__18606 = plumbing.core.conj_when.call(null,coll,x);
var G__18607 = cljs.core.first.call(null,xs);
var G__18608 = cljs.core.next.call(null,xs);
coll = G__18606;
x = G__18607;
xs = G__18608;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq18597){
var G__18598 = cljs.core.first.call(null,seq18597);
var seq18597__$1 = cljs.core.next.call(null,seq18597);
var G__18599 = cljs.core.first.call(null,seq18597__$1);
var seq18597__$2 = cljs.core.next.call(null,seq18597__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__18598,G__18599,seq18597__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args18610 = [];
var len__6226__auto___18616 = arguments.length;
var i__6227__auto___18617 = (0);
while(true){
if((i__6227__auto___18617 < len__6226__auto___18616)){
args18610.push((arguments[i__6227__auto___18617]));

var G__18618 = (i__6227__auto___18617 + (1));
i__6227__auto___18617 = G__18618;
continue;
} else {
}
break;
}

var G__18615 = args18610.length;
switch (G__18615) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args18610.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6245__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__18609_SHARP_){
return cljs.core.apply.call(null,f,p1__18609_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq18611){
var G__18612 = cljs.core.first.call(null,seq18611);
var seq18611__$1 = cljs.core.next.call(null,seq18611);
var G__18613 = cljs.core.first.call(null,seq18611__$1);
var seq18611__$2 = cljs.core.next.call(null,seq18611__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18612,G__18613,seq18611__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args18620 = [];
var len__6226__auto___18626 = arguments.length;
var i__6227__auto___18627 = (0);
while(true){
if((i__6227__auto___18627 < len__6226__auto___18626)){
args18620.push((arguments[i__6227__auto___18627]));

var G__18628 = (i__6227__auto___18627 + (1));
i__6227__auto___18627 = G__18628;
continue;
} else {
}
break;
}

var G__18625 = args18620.length;
switch (G__18625) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6245__auto__ = (new cljs.core.IndexedSeq(args18620.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6245__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq18621){
var G__18622 = cljs.core.first.call(null,seq18621);
var seq18621__$1 = cljs.core.next.call(null,seq18621);
var G__18623 = cljs.core.first.call(null,seq18621__$1);
var seq18621__$2 = cljs.core.next.call(null,seq18621__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__18622,G__18623,seq18621__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);
