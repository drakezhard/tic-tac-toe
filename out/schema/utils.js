// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__16616__auto__ = [];
var len__16609__auto___22787 = arguments.length;
var i__16610__auto___22788 = (0);
while(true){
if((i__16610__auto___22788 < len__16609__auto___22787)){
args__16616__auto__.push((arguments[i__16610__auto___22788]));

var G__22789 = (i__16610__auto___22788 + (1));
i__16610__auto___22788 = G__22789;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((1) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16617__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__15551__auto__ = m;
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__16323__auto__ = (function schema$utils$iter__22779(s__22780){
return (new cljs.core.LazySeq(null,(function (){
var s__22780__$1 = s__22780;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22780__$1);
if(temp__4425__auto__){
var s__22780__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22780__$2)){
var c__16321__auto__ = cljs.core.chunk_first.call(null,s__22780__$2);
var size__16322__auto__ = cljs.core.count.call(null,c__16321__auto__);
var b__22782 = cljs.core.chunk_buffer.call(null,size__16322__auto__);
if((function (){var i__22781 = (0);
while(true){
if((i__22781 < size__16322__auto__)){
var vec__22785 = cljs.core._nth.call(null,c__16321__auto__,i__22781);
var k = cljs.core.nth.call(null,vec__22785,(0),null);
var v = cljs.core.nth.call(null,vec__22785,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__22782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22790 = (i__22781 + (1));
i__22781 = G__22790;
continue;
} else {
var G__22791 = (i__22781 + (1));
i__22781 = G__22791;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),schema$utils$iter__22779.call(null,cljs.core.chunk_rest.call(null,s__22780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),null);
}
} else {
var vec__22786 = cljs.core.first.call(null,s__22780__$2);
var k = cljs.core.nth.call(null,vec__22786,(0),null);
var v = cljs.core.nth.call(null,vec__22786,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__22779.call(null,cljs.core.rest.call(null,s__22780__$2)));
} else {
var G__22792 = cljs.core.rest.call(null,s__22780__$2);
s__22780__$1 = G__22792;
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
return iter__16323__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq22777){
var G__22778 = cljs.core.first.call(null,seq22777);
var seq22777__$1 = cljs.core.next.call(null,seq22777);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__22778,seq22777__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__16616__auto__ = [];
var len__16609__auto___22795 = arguments.length;
var i__16610__auto___22796 = (0);
while(true){
if((i__16610__auto___22796 < len__16609__auto___22795)){
args__16616__auto__.push((arguments[i__16610__auto___22796]));

var G__22797 = (i__16610__auto___22796 + (1));
i__16610__auto___22796 = G__22797;
continue;
} else {
}
break;
}

var argseq__16617__auto__ = ((((1) < args__16616__auto__.length))?(new cljs.core.IndexedSeq(args__16616__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16617__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq22793){
var G__22794 = cljs.core.first.call(null,seq22793);
var seq22793__$1 = cljs.core.next.call(null,seq22793);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22794,seq22793__$1);
});
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize.call(null,f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});
schema.utils.validation_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__16149__auto__,writer__16150__auto__,opt__16151__auto__){
return cljs.core._write.call(null,writer__16150__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__15551__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.named_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__16149__auto__,writer__16150__auto__,opt__16151__auto__){
return cljs.core._write.call(null,writer__16150__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16165__auto__,k__16166__auto__){
var self__ = this;
var this__16165__auto____$1 = this;
return cljs.core._lookup.call(null,this__16165__auto____$1,k__16166__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16167__auto__,k22801,else__16168__auto__){
var self__ = this;
var this__16167__auto____$1 = this;
var G__22803 = (((k22801 instanceof cljs.core.Keyword))?k22801.fqn:null);
switch (G__22803) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22801,else__16168__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16179__auto__,writer__16180__auto__,opts__16181__auto__){
var self__ = this;
var this__16179__auto____$1 = this;
var pr_pair__16182__auto__ = ((function (this__16179__auto____$1){
return (function (keyval__16183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16180__auto__,cljs.core.pr_writer,""," ","",opts__16181__auto__,keyval__16183__auto__);
});})(this__16179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16180__auto__,pr_pair__16182__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__16181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22800){
var self__ = this;
var G__22800__$1 = this;
return (new cljs.core.RecordIter((0),G__22800__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16163__auto__){
var self__ = this;
var this__16163__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16159__auto__){
var self__ = this;
var this__16159__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16169__auto__){
var self__ = this;
var this__16169__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16160__auto__){
var self__ = this;
var this__16160__auto____$1 = this;
var h__15986__auto__ = self__.__hash;
if(!((h__15986__auto__ == null))){
return h__15986__auto__;
} else {
var h__15986__auto____$1 = cljs.core.hash_imap.call(null,this__16160__auto____$1);
self__.__hash = h__15986__auto____$1;

return h__15986__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16161__auto__,other__16162__auto__){
var self__ = this;
var this__16161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__15539__auto__ = other__16162__auto__;
if(cljs.core.truth_(and__15539__auto__)){
var and__15539__auto____$1 = (this__16161__auto____$1.constructor === other__16162__auto__.constructor);
if(and__15539__auto____$1){
return cljs.core.equiv_map.call(null,this__16161__auto____$1,other__16162__auto__);
} else {
return and__15539__auto____$1;
}
} else {
return and__15539__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16174__auto__,k__16175__auto__){
var self__ = this;
var this__16174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__16175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16174__auto____$1),self__.__meta),k__16175__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16175__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16172__auto__,k__16173__auto__,G__22800){
var self__ = this;
var this__16172__auto____$1 = this;
var pred__22804 = cljs.core.keyword_identical_QMARK_;
var expr__22805 = k__16173__auto__;
if(cljs.core.truth_(pred__22804.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__22805))){
return (new schema.utils.ErrorContainer(G__22800,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16173__auto__,G__22800),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16177__auto__){
var self__ = this;
var this__16177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16164__auto__,G__22800){
var self__ = this;
var this__16164__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__22800,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16170__auto__,entry__16171__auto__){
var self__ = this;
var this__16170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16171__auto__)){
return cljs.core._assoc.call(null,this__16170__auto____$1,cljs.core._nth.call(null,entry__16171__auto__,(0)),cljs.core._nth.call(null,entry__16171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16170__auto____$1,entry__16171__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__16199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__16199__auto__,writer__16200__auto__){
return cljs.core._write.call(null,writer__16200__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__22802){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__22802),null,cljs.core.dissoc.call(null,G__22802,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x))){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4423__auto__ = schema.utils.error_val.call(null,maybe_error);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return schema.utils.error.call(null,(new schema.utils.NamedError(name,e)));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4423__auto__ = schema.utils.error_val.call(null,e);
if(cljs.core.truth_(temp__4423__auto__)){
var err = temp__4423__auto__;
return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__15551__auto__ = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(or__15551__auto__)){
return or__15551__auto__;
} else {
return lift_to_error.call(null,m);
}
})(),err));
} else {
var temp__4423__auto____$1 = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(temp__4423__auto____$1)){
var merr = temp__4423__auto____$1;
return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else {
return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__16206__auto__ = (((this$ == null))?null:this$);
var m__16207__auto__ = (schema.utils.get_cell[goog.typeOf(x__16206__auto__)]);
if(!((m__16207__auto__ == null))){
return m__16207__auto__.call(null,this$);
} else {
var m__16207__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__16207__auto____$1 == null))){
return m__16207__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__16206__auto__ = (((this$ == null))?null:this$);
var m__16207__auto__ = (schema.utils.set_cell[goog.typeOf(x__16206__auto__)]);
if(!((m__16207__auto__ == null))){
return m__16207__auto__.call(null,this$,x);
} else {
var m__16207__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__16207__auto____$1 == null))){
return m__16207__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__16149__auto__,writer__16150__auto__,opt__16151__auto__){
return cljs.core._write.call(null,writer__16150__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map