// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20228_20232 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20229_20233 = null;
var count__20230_20234 = (0);
var i__20231_20235 = (0);
while(true){
if((i__20231_20235 < count__20230_20234)){
var k_20236 = cljs.core._nth.call(null,chunk__20229_20233,i__20231_20235);
var v_20237 = (b[k_20236]);
(a[k_20236] = v_20237);

var G__20238 = seq__20228_20232;
var G__20239 = chunk__20229_20233;
var G__20240 = count__20230_20234;
var G__20241 = (i__20231_20235 + (1));
seq__20228_20232 = G__20238;
chunk__20229_20233 = G__20239;
count__20230_20234 = G__20240;
i__20231_20235 = G__20241;
continue;
} else {
var temp__4425__auto___20242 = cljs.core.seq.call(null,seq__20228_20232);
if(temp__4425__auto___20242){
var seq__20228_20243__$1 = temp__4425__auto___20242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20228_20243__$1)){
var c__16349__auto___20244 = cljs.core.chunk_first.call(null,seq__20228_20243__$1);
var G__20245 = cljs.core.chunk_rest.call(null,seq__20228_20243__$1);
var G__20246 = c__16349__auto___20244;
var G__20247 = cljs.core.count.call(null,c__16349__auto___20244);
var G__20248 = (0);
seq__20228_20232 = G__20245;
chunk__20229_20233 = G__20246;
count__20230_20234 = G__20247;
i__20231_20235 = G__20248;
continue;
} else {
var k_20249 = cljs.core.first.call(null,seq__20228_20243__$1);
var v_20250 = (b[k_20249]);
(a[k_20249] = v_20250);

var G__20251 = cljs.core.next.call(null,seq__20228_20243__$1);
var G__20252 = null;
var G__20253 = (0);
var G__20254 = (0);
seq__20228_20232 = G__20251;
chunk__20229_20233 = G__20252;
count__20230_20234 = G__20253;
i__20231_20235 = G__20254;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20255 = [];
var len__16604__auto___20258 = arguments.length;
var i__16605__auto___20259 = (0);
while(true){
if((i__16605__auto___20259 < len__16604__auto___20258)){
args20255.push((arguments[i__16605__auto___20259]));

var G__20260 = (i__16605__auto___20259 + (1));
i__16605__auto___20259 = G__20260;
continue;
} else {
}
break;
}

var G__20257 = args20255.length;
switch (G__20257) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20255.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20262 = (i + (2));
var G__20263 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20262;
ret = G__20263;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20264_20268 = cljs.core.seq.call(null,v);
var chunk__20265_20269 = null;
var count__20266_20270 = (0);
var i__20267_20271 = (0);
while(true){
if((i__20267_20271 < count__20266_20270)){
var x_20272 = cljs.core._nth.call(null,chunk__20265_20269,i__20267_20271);
ret.push(x_20272);

var G__20273 = seq__20264_20268;
var G__20274 = chunk__20265_20269;
var G__20275 = count__20266_20270;
var G__20276 = (i__20267_20271 + (1));
seq__20264_20268 = G__20273;
chunk__20265_20269 = G__20274;
count__20266_20270 = G__20275;
i__20267_20271 = G__20276;
continue;
} else {
var temp__4425__auto___20277 = cljs.core.seq.call(null,seq__20264_20268);
if(temp__4425__auto___20277){
var seq__20264_20278__$1 = temp__4425__auto___20277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20264_20278__$1)){
var c__16349__auto___20279 = cljs.core.chunk_first.call(null,seq__20264_20278__$1);
var G__20280 = cljs.core.chunk_rest.call(null,seq__20264_20278__$1);
var G__20281 = c__16349__auto___20279;
var G__20282 = cljs.core.count.call(null,c__16349__auto___20279);
var G__20283 = (0);
seq__20264_20268 = G__20280;
chunk__20265_20269 = G__20281;
count__20266_20270 = G__20282;
i__20267_20271 = G__20283;
continue;
} else {
var x_20284 = cljs.core.first.call(null,seq__20264_20278__$1);
ret.push(x_20284);

var G__20285 = cljs.core.next.call(null,seq__20264_20278__$1);
var G__20286 = null;
var G__20287 = (0);
var G__20288 = (0);
seq__20264_20268 = G__20285;
chunk__20265_20269 = G__20286;
count__20266_20270 = G__20287;
i__20267_20271 = G__20288;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20289_20293 = cljs.core.seq.call(null,v);
var chunk__20290_20294 = null;
var count__20291_20295 = (0);
var i__20292_20296 = (0);
while(true){
if((i__20292_20296 < count__20291_20295)){
var x_20297 = cljs.core._nth.call(null,chunk__20290_20294,i__20292_20296);
ret.push(x_20297);

var G__20298 = seq__20289_20293;
var G__20299 = chunk__20290_20294;
var G__20300 = count__20291_20295;
var G__20301 = (i__20292_20296 + (1));
seq__20289_20293 = G__20298;
chunk__20290_20294 = G__20299;
count__20291_20295 = G__20300;
i__20292_20296 = G__20301;
continue;
} else {
var temp__4425__auto___20302 = cljs.core.seq.call(null,seq__20289_20293);
if(temp__4425__auto___20302){
var seq__20289_20303__$1 = temp__4425__auto___20302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20289_20303__$1)){
var c__16349__auto___20304 = cljs.core.chunk_first.call(null,seq__20289_20303__$1);
var G__20305 = cljs.core.chunk_rest.call(null,seq__20289_20303__$1);
var G__20306 = c__16349__auto___20304;
var G__20307 = cljs.core.count.call(null,c__16349__auto___20304);
var G__20308 = (0);
seq__20289_20293 = G__20305;
chunk__20290_20294 = G__20306;
count__20291_20295 = G__20307;
i__20292_20296 = G__20308;
continue;
} else {
var x_20309 = cljs.core.first.call(null,seq__20289_20303__$1);
ret.push(x_20309);

var G__20310 = cljs.core.next.call(null,seq__20289_20303__$1);
var G__20311 = null;
var G__20312 = (0);
var G__20313 = (0);
seq__20289_20293 = G__20310;
chunk__20290_20294 = G__20311;
count__20291_20295 = G__20312;
i__20292_20296 = G__20313;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20314_20318 = cljs.core.seq.call(null,v);
var chunk__20315_20319 = null;
var count__20316_20320 = (0);
var i__20317_20321 = (0);
while(true){
if((i__20317_20321 < count__20316_20320)){
var x_20322 = cljs.core._nth.call(null,chunk__20315_20319,i__20317_20321);
ret.push(x_20322);

var G__20323 = seq__20314_20318;
var G__20324 = chunk__20315_20319;
var G__20325 = count__20316_20320;
var G__20326 = (i__20317_20321 + (1));
seq__20314_20318 = G__20323;
chunk__20315_20319 = G__20324;
count__20316_20320 = G__20325;
i__20317_20321 = G__20326;
continue;
} else {
var temp__4425__auto___20327 = cljs.core.seq.call(null,seq__20314_20318);
if(temp__4425__auto___20327){
var seq__20314_20328__$1 = temp__4425__auto___20327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20314_20328__$1)){
var c__16349__auto___20329 = cljs.core.chunk_first.call(null,seq__20314_20328__$1);
var G__20330 = cljs.core.chunk_rest.call(null,seq__20314_20328__$1);
var G__20331 = c__16349__auto___20329;
var G__20332 = cljs.core.count.call(null,c__16349__auto___20329);
var G__20333 = (0);
seq__20314_20318 = G__20330;
chunk__20315_20319 = G__20331;
count__20316_20320 = G__20332;
i__20317_20321 = G__20333;
continue;
} else {
var x_20334 = cljs.core.first.call(null,seq__20314_20328__$1);
ret.push(x_20334);

var G__20335 = cljs.core.next.call(null,seq__20314_20328__$1);
var G__20336 = null;
var G__20337 = (0);
var G__20338 = (0);
seq__20314_20318 = G__20335;
chunk__20315_20319 = G__20336;
count__20316_20320 = G__20337;
i__20317_20321 = G__20338;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20339 = [];
var len__16604__auto___20350 = arguments.length;
var i__16605__auto___20351 = (0);
while(true){
if((i__16605__auto___20351 < len__16604__auto___20350)){
args20339.push((arguments[i__16605__auto___20351]));

var G__20352 = (i__16605__auto___20351 + (1));
i__16605__auto___20351 = G__20352;
continue;
} else {
}
break;
}

var G__20341 = args20339.length;
switch (G__20341) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20339.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20342 = obj;
G__20342.push(kfn.call(null,k),vfn.call(null,v));

return G__20342;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20343 = cljs.core.clone.call(null,handlers);
x20343.forEach = ((function (x20343,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20344 = cljs.core.seq.call(null,coll);
var chunk__20345 = null;
var count__20346 = (0);
var i__20347 = (0);
while(true){
if((i__20347 < count__20346)){
var vec__20348 = cljs.core._nth.call(null,chunk__20345,i__20347);
var k = cljs.core.nth.call(null,vec__20348,(0),null);
var v = cljs.core.nth.call(null,vec__20348,(1),null);
f.call(null,v,k);

var G__20354 = seq__20344;
var G__20355 = chunk__20345;
var G__20356 = count__20346;
var G__20357 = (i__20347 + (1));
seq__20344 = G__20354;
chunk__20345 = G__20355;
count__20346 = G__20356;
i__20347 = G__20357;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20344);
if(temp__4425__auto__){
var seq__20344__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20344__$1)){
var c__16349__auto__ = cljs.core.chunk_first.call(null,seq__20344__$1);
var G__20358 = cljs.core.chunk_rest.call(null,seq__20344__$1);
var G__20359 = c__16349__auto__;
var G__20360 = cljs.core.count.call(null,c__16349__auto__);
var G__20361 = (0);
seq__20344 = G__20358;
chunk__20345 = G__20359;
count__20346 = G__20360;
i__20347 = G__20361;
continue;
} else {
var vec__20349 = cljs.core.first.call(null,seq__20344__$1);
var k = cljs.core.nth.call(null,vec__20349,(0),null);
var v = cljs.core.nth.call(null,vec__20349,(1),null);
f.call(null,v,k);

var G__20362 = cljs.core.next.call(null,seq__20344__$1);
var G__20363 = null;
var G__20364 = (0);
var G__20365 = (0);
seq__20344 = G__20362;
chunk__20345 = G__20363;
count__20346 = G__20364;
i__20347 = G__20365;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20343,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20343;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20366 = [];
var len__16604__auto___20372 = arguments.length;
var i__16605__auto___20373 = (0);
while(true){
if((i__16605__auto___20373 < len__16604__auto___20372)){
args20366.push((arguments[i__16605__auto___20373]));

var G__20374 = (i__16605__auto___20373 + (1));
i__16605__auto___20373 = G__20374;
continue;
} else {
}
break;
}

var G__20368 = args20366.length;
switch (G__20368) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20366.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20369 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20370){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20370 = meta20370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20371,meta20370__$1){
var self__ = this;
var _20371__$1 = this;
return (new cognitect.transit.t_cognitect$transit20369(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20370__$1));
});

cognitect.transit.t_cognitect$transit20369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20371){
var self__ = this;
var _20371__$1 = this;
return self__.meta20370;
});

cognitect.transit.t_cognitect$transit20369.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20369.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20369.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20369.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20370","meta20370",-1304742241,null)], null);
});

cognitect.transit.t_cognitect$transit20369.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20369.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20369";

cognitect.transit.t_cognitect$transit20369.cljs$lang$ctorPrWriter = (function (this__16144__auto__,writer__16145__auto__,opt__16146__auto__){
return cljs.core._write.call(null,writer__16145__auto__,"cognitect.transit/t_cognitect$transit20369");
});

cognitect.transit.__GT_t_cognitect$transit20369 = (function cognitect$transit$__GT_t_cognitect$transit20369(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20370){
return (new cognitect.transit.t_cognitect$transit20369(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20370));
});

}

return (new cognitect.transit.t_cognitect$transit20369(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__15546__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__15546__auto__)){
return or__15546__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map