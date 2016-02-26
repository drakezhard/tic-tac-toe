// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16702_16716 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16703_16717 = null;
var count__16704_16718 = (0);
var i__16705_16719 = (0);
while(true){
if((i__16705_16719 < count__16704_16718)){
var f_16720 = cljs.core._nth.call(null,chunk__16703_16717,i__16705_16719);
cljs.core.println.call(null,"  ",f_16720);

var G__16721 = seq__16702_16716;
var G__16722 = chunk__16703_16717;
var G__16723 = count__16704_16718;
var G__16724 = (i__16705_16719 + (1));
seq__16702_16716 = G__16721;
chunk__16703_16717 = G__16722;
count__16704_16718 = G__16723;
i__16705_16719 = G__16724;
continue;
} else {
var temp__4425__auto___16725 = cljs.core.seq.call(null,seq__16702_16716);
if(temp__4425__auto___16725){
var seq__16702_16726__$1 = temp__4425__auto___16725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16702_16726__$1)){
var c__16349__auto___16727 = cljs.core.chunk_first.call(null,seq__16702_16726__$1);
var G__16728 = cljs.core.chunk_rest.call(null,seq__16702_16726__$1);
var G__16729 = c__16349__auto___16727;
var G__16730 = cljs.core.count.call(null,c__16349__auto___16727);
var G__16731 = (0);
seq__16702_16716 = G__16728;
chunk__16703_16717 = G__16729;
count__16704_16718 = G__16730;
i__16705_16719 = G__16731;
continue;
} else {
var f_16732 = cljs.core.first.call(null,seq__16702_16726__$1);
cljs.core.println.call(null,"  ",f_16732);

var G__16733 = cljs.core.next.call(null,seq__16702_16726__$1);
var G__16734 = null;
var G__16735 = (0);
var G__16736 = (0);
seq__16702_16716 = G__16733;
chunk__16703_16717 = G__16734;
count__16704_16718 = G__16735;
i__16705_16719 = G__16736;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16737 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__15546__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__15546__auto__)){
return or__15546__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16737);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16737)))?cljs.core.second.call(null,arglists_16737):arglists_16737));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16706 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16707 = null;
var count__16708 = (0);
var i__16709 = (0);
while(true){
if((i__16709 < count__16708)){
var vec__16710 = cljs.core._nth.call(null,chunk__16707,i__16709);
var name = cljs.core.nth.call(null,vec__16710,(0),null);
var map__16711 = cljs.core.nth.call(null,vec__16710,(1),null);
var map__16711__$1 = ((((!((map__16711 == null)))?((((map__16711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16711):map__16711);
var doc = cljs.core.get.call(null,map__16711__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__16711__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16738 = seq__16706;
var G__16739 = chunk__16707;
var G__16740 = count__16708;
var G__16741 = (i__16709 + (1));
seq__16706 = G__16738;
chunk__16707 = G__16739;
count__16708 = G__16740;
i__16709 = G__16741;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16706);
if(temp__4425__auto__){
var seq__16706__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16706__$1)){
var c__16349__auto__ = cljs.core.chunk_first.call(null,seq__16706__$1);
var G__16742 = cljs.core.chunk_rest.call(null,seq__16706__$1);
var G__16743 = c__16349__auto__;
var G__16744 = cljs.core.count.call(null,c__16349__auto__);
var G__16745 = (0);
seq__16706 = G__16742;
chunk__16707 = G__16743;
count__16708 = G__16744;
i__16709 = G__16745;
continue;
} else {
var vec__16713 = cljs.core.first.call(null,seq__16706__$1);
var name = cljs.core.nth.call(null,vec__16713,(0),null);
var map__16714 = cljs.core.nth.call(null,vec__16713,(1),null);
var map__16714__$1 = ((((!((map__16714 == null)))?((((map__16714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16714):map__16714);
var doc = cljs.core.get.call(null,map__16714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__16714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16746 = cljs.core.next.call(null,seq__16706__$1);
var G__16747 = null;
var G__16748 = (0);
var G__16749 = (0);
seq__16706 = G__16746;
chunk__16707 = G__16747;
count__16708 = G__16748;
i__16709 = G__16749;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map