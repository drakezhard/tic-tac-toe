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
var args29499 = [];
var len__16608__auto___29508 = arguments.length;
var i__16609__auto___29509 = (0);
while(true){
if((i__16609__auto___29509 < len__16608__auto___29508)){
args29499.push((arguments[i__16609__auto___29509]));

var G__29510 = (i__16609__auto___29509 + (1));
i__16609__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var G__29507 = args29499.length;
switch (G__29507) {
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
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args29499.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__16627__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq29500){
var G__29501 = cljs.core.first.call(null,seq29500);
var seq29500__$1 = cljs.core.next.call(null,seq29500);
var G__29502 = cljs.core.first.call(null,seq29500__$1);
var seq29500__$2 = cljs.core.next.call(null,seq29500__$1);
var G__29503 = cljs.core.first.call(null,seq29500__$2);
var seq29500__$3 = cljs.core.next.call(null,seq29500__$2);
var G__29504 = cljs.core.first.call(null,seq29500__$3);
var seq29500__$4 = cljs.core.next.call(null,seq29500__$3);
var G__29505 = cljs.core.first.call(null,seq29500__$4);
var seq29500__$5 = cljs.core.next.call(null,seq29500__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__29501,G__29502,G__29503,G__29504,G__29505,seq29500__$5);
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
var m_atom__21345__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29520_29526 = cljs.core.seq.call(null,m);
var chunk__29521_29527 = null;
var count__29522_29528 = (0);
var i__29523_29529 = (0);
while(true){
if((i__29523_29529 < count__29522_29528)){
var vec__29524_29530 = cljs.core._nth.call(null,chunk__29521_29527,i__29523_29529);
var k_29531 = cljs.core.nth.call(null,vec__29524_29530,(0),null);
var v_29532 = cljs.core.nth.call(null,vec__29524_29530,(1),null);
var m29519_29533 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29519_29533,k_29531,f.call(null,v_29532)));

var G__29534 = seq__29520_29526;
var G__29535 = chunk__29521_29527;
var G__29536 = count__29522_29528;
var G__29537 = (i__29523_29529 + (1));
seq__29520_29526 = G__29534;
chunk__29521_29527 = G__29535;
count__29522_29528 = G__29536;
i__29523_29529 = G__29537;
continue;
} else {
var temp__4425__auto___29538 = cljs.core.seq.call(null,seq__29520_29526);
if(temp__4425__auto___29538){
var seq__29520_29539__$1 = temp__4425__auto___29538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29520_29539__$1)){
var c__16353__auto___29540 = cljs.core.chunk_first.call(null,seq__29520_29539__$1);
var G__29541 = cljs.core.chunk_rest.call(null,seq__29520_29539__$1);
var G__29542 = c__16353__auto___29540;
var G__29543 = cljs.core.count.call(null,c__16353__auto___29540);
var G__29544 = (0);
seq__29520_29526 = G__29541;
chunk__29521_29527 = G__29542;
count__29522_29528 = G__29543;
i__29523_29529 = G__29544;
continue;
} else {
var vec__29525_29545 = cljs.core.first.call(null,seq__29520_29539__$1);
var k_29546 = cljs.core.nth.call(null,vec__29525_29545,(0),null);
var v_29547 = cljs.core.nth.call(null,vec__29525_29545,(1),null);
var m29519_29548 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29519_29548,k_29546,f.call(null,v_29547)));

var G__29549 = cljs.core.next.call(null,seq__29520_29539__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29520_29526 = G__29549;
chunk__29521_29527 = G__29550;
count__29522_29528 = G__29551;
i__29523_29529 = G__29552;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21345__auto__));

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
var m_atom__21345__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29561_29567 = cljs.core.seq.call(null,m);
var chunk__29562_29568 = null;
var count__29563_29569 = (0);
var i__29564_29570 = (0);
while(true){
if((i__29564_29570 < count__29563_29569)){
var vec__29565_29571 = cljs.core._nth.call(null,chunk__29562_29568,i__29564_29570);
var k_29572 = cljs.core.nth.call(null,vec__29565_29571,(0),null);
var v_29573 = cljs.core.nth.call(null,vec__29565_29571,(1),null);
var m29560_29574 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29560_29574,f.call(null,k_29572),v_29573));

var G__29575 = seq__29561_29567;
var G__29576 = chunk__29562_29568;
var G__29577 = count__29563_29569;
var G__29578 = (i__29564_29570 + (1));
seq__29561_29567 = G__29575;
chunk__29562_29568 = G__29576;
count__29563_29569 = G__29577;
i__29564_29570 = G__29578;
continue;
} else {
var temp__4425__auto___29579 = cljs.core.seq.call(null,seq__29561_29567);
if(temp__4425__auto___29579){
var seq__29561_29580__$1 = temp__4425__auto___29579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29561_29580__$1)){
var c__16353__auto___29581 = cljs.core.chunk_first.call(null,seq__29561_29580__$1);
var G__29582 = cljs.core.chunk_rest.call(null,seq__29561_29580__$1);
var G__29583 = c__16353__auto___29581;
var G__29584 = cljs.core.count.call(null,c__16353__auto___29581);
var G__29585 = (0);
seq__29561_29567 = G__29582;
chunk__29562_29568 = G__29583;
count__29563_29569 = G__29584;
i__29564_29570 = G__29585;
continue;
} else {
var vec__29566_29586 = cljs.core.first.call(null,seq__29561_29580__$1);
var k_29587 = cljs.core.nth.call(null,vec__29566_29586,(0),null);
var v_29588 = cljs.core.nth.call(null,vec__29566_29586,(1),null);
var m29560_29589 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29560_29589,f.call(null,k_29587),v_29588));

var G__29590 = cljs.core.next.call(null,seq__29561_29580__$1);
var G__29591 = null;
var G__29592 = (0);
var G__29593 = (0);
seq__29561_29567 = G__29590;
chunk__29562_29568 = G__29591;
count__29563_29569 = G__29592;
i__29564_29570 = G__29593;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21345__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__21345__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29600_29604 = cljs.core.seq.call(null,ks);
var chunk__29601_29605 = null;
var count__29602_29606 = (0);
var i__29603_29607 = (0);
while(true){
if((i__29603_29607 < count__29602_29606)){
var k_29608 = cljs.core._nth.call(null,chunk__29601_29605,i__29603_29607);
var m29599_29609 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29599_29609,k_29608,f.call(null,k_29608)));

var G__29610 = seq__29600_29604;
var G__29611 = chunk__29601_29605;
var G__29612 = count__29602_29606;
var G__29613 = (i__29603_29607 + (1));
seq__29600_29604 = G__29610;
chunk__29601_29605 = G__29611;
count__29602_29606 = G__29612;
i__29603_29607 = G__29613;
continue;
} else {
var temp__4425__auto___29614 = cljs.core.seq.call(null,seq__29600_29604);
if(temp__4425__auto___29614){
var seq__29600_29615__$1 = temp__4425__auto___29614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29600_29615__$1)){
var c__16353__auto___29616 = cljs.core.chunk_first.call(null,seq__29600_29615__$1);
var G__29617 = cljs.core.chunk_rest.call(null,seq__29600_29615__$1);
var G__29618 = c__16353__auto___29616;
var G__29619 = cljs.core.count.call(null,c__16353__auto___29616);
var G__29620 = (0);
seq__29600_29604 = G__29617;
chunk__29601_29605 = G__29618;
count__29602_29606 = G__29619;
i__29603_29607 = G__29620;
continue;
} else {
var k_29621 = cljs.core.first.call(null,seq__29600_29615__$1);
var m29599_29622 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29599_29622,k_29621,f.call(null,k_29621)));

var G__29623 = cljs.core.next.call(null,seq__29600_29615__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__29600_29604 = G__29623;
chunk__29601_29605 = G__29624;
count__29602_29606 = G__29625;
i__29603_29607 = G__29626;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21345__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__21345__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29633_29637 = cljs.core.seq.call(null,vs);
var chunk__29634_29638 = null;
var count__29635_29639 = (0);
var i__29636_29640 = (0);
while(true){
if((i__29636_29640 < count__29635_29639)){
var v_29641 = cljs.core._nth.call(null,chunk__29634_29638,i__29636_29640);
var m29632_29642 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29632_29642,f.call(null,v_29641),v_29641));

var G__29643 = seq__29633_29637;
var G__29644 = chunk__29634_29638;
var G__29645 = count__29635_29639;
var G__29646 = (i__29636_29640 + (1));
seq__29633_29637 = G__29643;
chunk__29634_29638 = G__29644;
count__29635_29639 = G__29645;
i__29636_29640 = G__29646;
continue;
} else {
var temp__4425__auto___29647 = cljs.core.seq.call(null,seq__29633_29637);
if(temp__4425__auto___29647){
var seq__29633_29648__$1 = temp__4425__auto___29647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29633_29648__$1)){
var c__16353__auto___29649 = cljs.core.chunk_first.call(null,seq__29633_29648__$1);
var G__29650 = cljs.core.chunk_rest.call(null,seq__29633_29648__$1);
var G__29651 = c__16353__auto___29649;
var G__29652 = cljs.core.count.call(null,c__16353__auto___29649);
var G__29653 = (0);
seq__29633_29637 = G__29650;
chunk__29634_29638 = G__29651;
count__29635_29639 = G__29652;
i__29636_29640 = G__29653;
continue;
} else {
var v_29654 = cljs.core.first.call(null,seq__29633_29648__$1);
var m29632_29655 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29632_29655,f.call(null,v_29654),v_29654));

var G__29656 = cljs.core.next.call(null,seq__29633_29648__$1);
var G__29657 = null;
var G__29658 = (0);
var G__29659 = (0);
seq__29633_29637 = G__29656;
chunk__29634_29638 = G__29657;
count__29635_29639 = G__29658;
i__29636_29640 = G__29659;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21345__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__29660){
var vec__29662 = p__29660;
var k = cljs.core.nth.call(null,vec__29662,(0),null);
var ks = cljs.core.nthnext.call(null,vec__29662,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__15538__auto__ = ks;
if(cljs.core.truth_(and__15538__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__15538__auto__;
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
var m_atom__21345__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29671_29677 = cljs.core.seq.call(null,x);
var chunk__29672_29678 = null;
var count__29673_29679 = (0);
var i__29674_29680 = (0);
while(true){
if((i__29674_29680 < count__29673_29679)){
var vec__29675_29681 = cljs.core._nth.call(null,chunk__29672_29678,i__29674_29680);
var k_29682 = cljs.core.nth.call(null,vec__29675_29681,(0),null);
var v_29683 = cljs.core.nth.call(null,vec__29675_29681,(1),null);
var m29670_29684 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29670_29684,((typeof k_29682 === 'string')?cljs.core.keyword.call(null,k_29682):k_29682),plumbing$core$keywordize_map.call(null,v_29683)));

var G__29685 = seq__29671_29677;
var G__29686 = chunk__29672_29678;
var G__29687 = count__29673_29679;
var G__29688 = (i__29674_29680 + (1));
seq__29671_29677 = G__29685;
chunk__29672_29678 = G__29686;
count__29673_29679 = G__29687;
i__29674_29680 = G__29688;
continue;
} else {
var temp__4425__auto___29689 = cljs.core.seq.call(null,seq__29671_29677);
if(temp__4425__auto___29689){
var seq__29671_29690__$1 = temp__4425__auto___29689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29671_29690__$1)){
var c__16353__auto___29691 = cljs.core.chunk_first.call(null,seq__29671_29690__$1);
var G__29692 = cljs.core.chunk_rest.call(null,seq__29671_29690__$1);
var G__29693 = c__16353__auto___29691;
var G__29694 = cljs.core.count.call(null,c__16353__auto___29691);
var G__29695 = (0);
seq__29671_29677 = G__29692;
chunk__29672_29678 = G__29693;
count__29673_29679 = G__29694;
i__29674_29680 = G__29695;
continue;
} else {
var vec__29676_29696 = cljs.core.first.call(null,seq__29671_29690__$1);
var k_29697 = cljs.core.nth.call(null,vec__29676_29696,(0),null);
var v_29698 = cljs.core.nth.call(null,vec__29676_29696,(1),null);
var m29670_29699 = cljs.core.deref.call(null,m_atom__21345__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21345__auto__,cljs.core.assoc_BANG_.call(null,m29670_29699,((typeof k_29697 === 'string')?cljs.core.keyword.call(null,k_29697):k_29697),plumbing$core$keywordize_map.call(null,v_29698)));

var G__29700 = cljs.core.next.call(null,seq__29671_29690__$1);
var G__29701 = null;
var G__29702 = (0);
var G__29703 = (0);
seq__29671_29677 = G__29700;
chunk__29672_29678 = G__29701;
count__29673_29679 = G__29702;
i__29674_29680 = G__29703;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21345__auto__));
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
var pair__21421__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21421__auto__);
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
var G__29704 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__29705 = cljs.core.next.call(null,ks);
m = G__29704;
ks = G__29705;
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
var args__16615__auto__ = [];
var len__16608__auto___29716 = arguments.length;
var i__16609__auto___29717 = (0);
while(true){
if((i__16609__auto___29717 < len__16608__auto___29716)){
args__16615__auto__.push((arguments[i__16609__auto___29717]));

var G__29718 = (i__16609__auto___29717 + (1));
i__16609__auto___29717 = G__29718;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__15550__auto__ = m;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__16322__auto__ = (function plumbing$core$iter__29708(s__29709){
return (new cljs.core.LazySeq(null,(function (){
var s__29709__$1 = s__29709;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29709__$1);
if(temp__4425__auto__){
var s__29709__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29709__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29709__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29711 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29710 = (0);
while(true){
if((i__29710 < size__16321__auto__)){
var vec__29714 = cljs.core._nth.call(null,c__16320__auto__,i__29710);
var k = cljs.core.nth.call(null,vec__29714,(0),null);
var v = cljs.core.nth.call(null,vec__29714,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__29711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__29719 = (i__29710 + (1));
i__29710 = G__29719;
continue;
} else {
var G__29720 = (i__29710 + (1));
i__29710 = G__29720;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29711),plumbing$core$iter__29708.call(null,cljs.core.chunk_rest.call(null,s__29709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29711),null);
}
} else {
var vec__29715 = cljs.core.first.call(null,s__29709__$2);
var k = cljs.core.nth.call(null,vec__29715,(0),null);
var v = cljs.core.nth.call(null,vec__29715,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__29708.call(null,cljs.core.rest.call(null,s__29709__$2)));
} else {
var G__29721 = cljs.core.rest.call(null,s__29709__$2);
s__29709__$1 = G__29721;
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
return iter__16322__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq29706){
var G__29707 = cljs.core.first.call(null,seq29706);
var seq29706__$1 = cljs.core.next.call(null,seq29706);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__29707,seq29706__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__16615__auto__ = [];
var len__16608__auto___29726 = arguments.length;
var i__16609__auto___29727 = (0);
while(true){
if((i__16609__auto___29727 < len__16608__auto___29726)){
args__16615__auto__.push((arguments[i__16609__auto___29727]));

var G__29728 = (i__16609__auto___29727 + (1));
i__16609__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((3) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16616__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq29722){
var G__29723 = cljs.core.first.call(null,seq29722);
var seq29722__$1 = cljs.core.next.call(null,seq29722);
var G__29724 = cljs.core.first.call(null,seq29722__$1);
var seq29722__$2 = cljs.core.next.call(null,seq29722__$1);
var G__29725 = cljs.core.first.call(null,seq29722__$2);
var seq29722__$3 = cljs.core.next.call(null,seq29722__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__29723,G__29724,G__29725,seq29722__$3);
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
var args29729 = [];
var len__16608__auto___29732 = arguments.length;
var i__16609__auto___29733 = (0);
while(true){
if((i__16609__auto___29733 < len__16608__auto___29732)){
args29729.push((arguments[i__16609__auto___29733]));

var G__29734 = (i__16609__auto___29733 + (1));
i__16609__auto___29733 = G__29734;
continue;
} else {
}
break;
}

var G__29731 = args29729.length;
switch (G__29731) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29729.length)].join('')));

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
var iter__16322__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__29740(s__29741){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__29741__$1 = s__29741;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29741__$1);
if(temp__4425__auto__){
var s__29741__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29741__$2)){
var c__16320__auto__ = cljs.core.chunk_first.call(null,s__29741__$2);
var size__16321__auto__ = cljs.core.count.call(null,c__16320__auto__);
var b__29743 = cljs.core.chunk_buffer.call(null,size__16321__auto__);
if((function (){var i__29742 = (0);
while(true){
if((i__29742 < size__16321__auto__)){
var x = cljs.core._nth.call(null,c__16320__auto__,i__29742);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__29743,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__29744 = (i__29742 + (1));
i__29742 = G__29744;
continue;
} else {
var G__29745 = (i__29742 + (1));
i__29742 = G__29745;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29743),plumbing$core$distinct_by_$_iter__29740.call(null,cljs.core.chunk_rest.call(null,s__29741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29743),null);
}
} else {
var x = cljs.core.first.call(null,s__29741__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__29740.call(null,cljs.core.rest.call(null,s__29741__$2)));
} else {
var G__29746 = cljs.core.rest.call(null,s__29741__$2);
s__29741__$1 = G__29746;
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
return iter__16322__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__16615__auto__ = [];
var len__16608__auto___29748 = arguments.length;
var i__16609__auto___29749 = (0);
while(true){
if((i__16609__auto___29749 < len__16608__auto___29748)){
args__16615__auto__.push((arguments[i__16609__auto___29749]));

var G__29750 = (i__16609__auto___29749 + (1));
i__16609__auto___29749 = G__29750;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((0) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__16616__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq29747){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29747));
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
var args29751 = [];
var len__16608__auto___29757 = arguments.length;
var i__16609__auto___29758 = (0);
while(true){
if((i__16609__auto___29758 < len__16608__auto___29757)){
args29751.push((arguments[i__16609__auto___29758]));

var G__29759 = (i__16609__auto___29758 + (1));
i__16609__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var G__29756 = args29751.length;
switch (G__29756) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args29751.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16627__auto__);

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
var G__29761 = plumbing.core.conj_when.call(null,coll,x);
var G__29762 = cljs.core.first.call(null,xs);
var G__29763 = cljs.core.next.call(null,xs);
coll = G__29761;
x = G__29762;
xs = G__29763;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq29752){
var G__29753 = cljs.core.first.call(null,seq29752);
var seq29752__$1 = cljs.core.next.call(null,seq29752);
var G__29754 = cljs.core.first.call(null,seq29752__$1);
var seq29752__$2 = cljs.core.next.call(null,seq29752__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__29753,G__29754,seq29752__$2);
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
var args29765 = [];
var len__16608__auto___29771 = arguments.length;
var i__16609__auto___29772 = (0);
while(true){
if((i__16609__auto___29772 < len__16608__auto___29771)){
args29765.push((arguments[i__16609__auto___29772]));

var G__29773 = (i__16609__auto___29772 + (1));
i__16609__auto___29772 = G__29773;
continue;
} else {
}
break;
}

var G__29770 = args29765.length;
switch (G__29770) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args29765.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16627__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__29764_SHARP_){
return cljs.core.apply.call(null,f,p1__29764_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq29766){
var G__29767 = cljs.core.first.call(null,seq29766);
var seq29766__$1 = cljs.core.next.call(null,seq29766);
var G__29768 = cljs.core.first.call(null,seq29766__$1);
var seq29766__$2 = cljs.core.next.call(null,seq29766__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29767,G__29768,seq29766__$2);
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
var args29775 = [];
var len__16608__auto___29781 = arguments.length;
var i__16609__auto___29782 = (0);
while(true){
if((i__16609__auto___29782 < len__16608__auto___29781)){
args29775.push((arguments[i__16609__auto___29782]));

var G__29783 = (i__16609__auto___29782 + (1));
i__16609__auto___29782 = G__29783;
continue;
} else {
}
break;
}

var G__29780 = args29775.length;
switch (G__29780) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__16627__auto__ = (new cljs.core.IndexedSeq(args29775.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__16627__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq29776){
var G__29777 = cljs.core.first.call(null,seq29776);
var seq29776__$1 = cljs.core.next.call(null,seq29776);
var G__29778 = cljs.core.first.call(null,seq29776__$1);
var seq29776__$2 = cljs.core.next.call(null,seq29776__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__29777,G__29778,seq29776__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map