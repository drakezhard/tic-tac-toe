// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20080 = [];
var len__6226__auto___20086 = arguments.length;
var i__6227__auto___20087 = (0);
while(true){
if((i__6227__auto___20087 < len__6226__auto___20086)){
args20080.push((arguments[i__6227__auto___20087]));

var G__20088 = (i__6227__auto___20087 + (1));
i__6227__auto___20087 = G__20088;
continue;
} else {
}
break;
}

var G__20082 = args20080.length;
switch (G__20082) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20080.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20083 = (function (f,blockable,meta20084){
this.f = f;
this.blockable = blockable;
this.meta20084 = meta20084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20085,meta20084__$1){
var self__ = this;
var _20085__$1 = this;
return (new cljs.core.async.t_cljs$core$async20083(self__.f,self__.blockable,meta20084__$1));
});

cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20085){
var self__ = this;
var _20085__$1 = this;
return self__.meta20084;
});

cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20084","meta20084",-1806473789,null)], null);
});

cljs.core.async.t_cljs$core$async20083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20083";

cljs.core.async.t_cljs$core$async20083.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async20083");
});

cljs.core.async.__GT_t_cljs$core$async20083 = (function cljs$core$async$__GT_t_cljs$core$async20083(f__$1,blockable__$1,meta20084){
return (new cljs.core.async.t_cljs$core$async20083(f__$1,blockable__$1,meta20084));
});

}

return (new cljs.core.async.t_cljs$core$async20083(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20092 = [];
var len__6226__auto___20095 = arguments.length;
var i__6227__auto___20096 = (0);
while(true){
if((i__6227__auto___20096 < len__6226__auto___20095)){
args20092.push((arguments[i__6227__auto___20096]));

var G__20097 = (i__6227__auto___20096 + (1));
i__6227__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var G__20094 = args20092.length;
switch (G__20094) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20092.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20099 = [];
var len__6226__auto___20102 = arguments.length;
var i__6227__auto___20103 = (0);
while(true){
if((i__6227__auto___20103 < len__6226__auto___20102)){
args20099.push((arguments[i__6227__auto___20103]));

var G__20104 = (i__6227__auto___20103 + (1));
i__6227__auto___20103 = G__20104;
continue;
} else {
}
break;
}

var G__20101 = args20099.length;
switch (G__20101) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20099.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20106 = [];
var len__6226__auto___20109 = arguments.length;
var i__6227__auto___20110 = (0);
while(true){
if((i__6227__auto___20110 < len__6226__auto___20109)){
args20106.push((arguments[i__6227__auto___20110]));

var G__20111 = (i__6227__auto___20110 + (1));
i__6227__auto___20110 = G__20111;
continue;
} else {
}
break;
}

var G__20108 = args20106.length;
switch (G__20108) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20106.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20113 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20113);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20113,ret){
return (function (){
return fn1.call(null,val_20113);
});})(val_20113,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20114 = [];
var len__6226__auto___20117 = arguments.length;
var i__6227__auto___20118 = (0);
while(true){
if((i__6227__auto___20118 < len__6226__auto___20117)){
args20114.push((arguments[i__6227__auto___20118]));

var G__20119 = (i__6227__auto___20118 + (1));
i__6227__auto___20118 = G__20119;
continue;
} else {
}
break;
}

var G__20116 = args20114.length;
switch (G__20116) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20114.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6071__auto___20121 = n;
var x_20122 = (0);
while(true){
if((x_20122 < n__6071__auto___20121)){
(a[x_20122] = (0));

var G__20123 = (x_20122 + (1));
x_20122 = G__20123;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20124 = (i + (1));
i = G__20124;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20128 = (function (alt_flag,flag,meta20129){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20129 = meta20129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20130,meta20129__$1){
var self__ = this;
var _20130__$1 = this;
return (new cljs.core.async.t_cljs$core$async20128(self__.alt_flag,self__.flag,meta20129__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20130){
var self__ = this;
var _20130__$1 = this;
return self__.meta20129;
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20129","meta20129",-877342509,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20128";

cljs.core.async.t_cljs$core$async20128.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async20128");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20128 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20128(alt_flag__$1,flag__$1,meta20129){
return (new cljs.core.async.t_cljs$core$async20128(alt_flag__$1,flag__$1,meta20129));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20128(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20134 = (function (alt_handler,flag,cb,meta20135){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20135 = meta20135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20136,meta20135__$1){
var self__ = this;
var _20136__$1 = this;
return (new cljs.core.async.t_cljs$core$async20134(self__.alt_handler,self__.flag,self__.cb,meta20135__$1));
});

cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20136){
var self__ = this;
var _20136__$1 = this;
return self__.meta20135;
});

cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20135","meta20135",-1050985152,null)], null);
});

cljs.core.async.t_cljs$core$async20134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20134";

cljs.core.async.t_cljs$core$async20134.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async20134");
});

cljs.core.async.__GT_t_cljs$core$async20134 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20134(alt_handler__$1,flag__$1,cb__$1,meta20135){
return (new cljs.core.async.t_cljs$core$async20134(alt_handler__$1,flag__$1,cb__$1,meta20135));
});

}

return (new cljs.core.async.t_cljs$core$async20134(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20137_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20137_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20138_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20138_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20139 = (i + (1));
i = G__20139;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5168__auto__ = ret;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___20145 = arguments.length;
var i__6227__auto___20146 = (0);
while(true){
if((i__6227__auto___20146 < len__6226__auto___20145)){
args__6233__auto__.push((arguments[i__6227__auto___20146]));

var G__20147 = (i__6227__auto___20146 + (1));
i__6227__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20142){
var map__20143 = p__20142;
var map__20143__$1 = ((((!((map__20143 == null)))?((((map__20143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20143):map__20143);
var opts = map__20143__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20140){
var G__20141 = cljs.core.first.call(null,seq20140);
var seq20140__$1 = cljs.core.next.call(null,seq20140);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20141,seq20140__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20148 = [];
var len__6226__auto___20198 = arguments.length;
var i__6227__auto___20199 = (0);
while(true){
if((i__6227__auto___20199 < len__6226__auto___20198)){
args20148.push((arguments[i__6227__auto___20199]));

var G__20200 = (i__6227__auto___20199 + (1));
i__6227__auto___20199 = G__20200;
continue;
} else {
}
break;
}

var G__20150 = args20148.length;
switch (G__20150) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20148.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20035__auto___20202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___20202){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___20202){
return (function (state_20174){
var state_val_20175 = (state_20174[(1)]);
if((state_val_20175 === (7))){
var inst_20170 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
var statearr_20176_20203 = state_20174__$1;
(statearr_20176_20203[(2)] = inst_20170);

(statearr_20176_20203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (1))){
var state_20174__$1 = state_20174;
var statearr_20177_20204 = state_20174__$1;
(statearr_20177_20204[(2)] = null);

(statearr_20177_20204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (4))){
var inst_20153 = (state_20174[(7)]);
var inst_20153__$1 = (state_20174[(2)]);
var inst_20154 = (inst_20153__$1 == null);
var state_20174__$1 = (function (){var statearr_20178 = state_20174;
(statearr_20178[(7)] = inst_20153__$1);

return statearr_20178;
})();
if(cljs.core.truth_(inst_20154)){
var statearr_20179_20205 = state_20174__$1;
(statearr_20179_20205[(1)] = (5));

} else {
var statearr_20180_20206 = state_20174__$1;
(statearr_20180_20206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (13))){
var state_20174__$1 = state_20174;
var statearr_20181_20207 = state_20174__$1;
(statearr_20181_20207[(2)] = null);

(statearr_20181_20207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (6))){
var inst_20153 = (state_20174[(7)]);
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20174__$1,(11),to,inst_20153);
} else {
if((state_val_20175 === (3))){
var inst_20172 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20174__$1,inst_20172);
} else {
if((state_val_20175 === (12))){
var state_20174__$1 = state_20174;
var statearr_20182_20208 = state_20174__$1;
(statearr_20182_20208[(2)] = null);

(statearr_20182_20208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (2))){
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20174__$1,(4),from);
} else {
if((state_val_20175 === (11))){
var inst_20163 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
if(cljs.core.truth_(inst_20163)){
var statearr_20183_20209 = state_20174__$1;
(statearr_20183_20209[(1)] = (12));

} else {
var statearr_20184_20210 = state_20174__$1;
(statearr_20184_20210[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (9))){
var state_20174__$1 = state_20174;
var statearr_20185_20211 = state_20174__$1;
(statearr_20185_20211[(2)] = null);

(statearr_20185_20211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (5))){
var state_20174__$1 = state_20174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20186_20212 = state_20174__$1;
(statearr_20186_20212[(1)] = (8));

} else {
var statearr_20187_20213 = state_20174__$1;
(statearr_20187_20213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (14))){
var inst_20168 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
var statearr_20188_20214 = state_20174__$1;
(statearr_20188_20214[(2)] = inst_20168);

(statearr_20188_20214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (10))){
var inst_20160 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
var statearr_20189_20215 = state_20174__$1;
(statearr_20189_20215[(2)] = inst_20160);

(statearr_20189_20215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (8))){
var inst_20157 = cljs.core.async.close_BANG_.call(null,to);
var state_20174__$1 = state_20174;
var statearr_20190_20216 = state_20174__$1;
(statearr_20190_20216[(2)] = inst_20157);

(statearr_20190_20216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___20202))
;
return ((function (switch__19923__auto__,c__20035__auto___20202){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_20194 = [null,null,null,null,null,null,null,null];
(statearr_20194[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_20194[(1)] = (1));

return statearr_20194;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_20174){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20195){if((e20195 instanceof Object)){
var ex__19927__auto__ = e20195;
var statearr_20196_20217 = state_20174;
(statearr_20196_20217[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20218 = state_20174;
state_20174 = G__20218;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_20174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_20174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___20202))
})();
var state__20037__auto__ = (function (){var statearr_20197 = f__20036__auto__.call(null);
(statearr_20197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20202);

return statearr_20197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___20202))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20402){
var vec__20403 = p__20402;
var v = cljs.core.nth.call(null,vec__20403,(0),null);
var p = cljs.core.nth.call(null,vec__20403,(1),null);
var job = vec__20403;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20035__auto___20585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results){
return (function (state_20408){
var state_val_20409 = (state_20408[(1)]);
if((state_val_20409 === (1))){
var state_20408__$1 = state_20408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20408__$1,(2),res,v);
} else {
if((state_val_20409 === (2))){
var inst_20405 = (state_20408[(2)]);
var inst_20406 = cljs.core.async.close_BANG_.call(null,res);
var state_20408__$1 = (function (){var statearr_20410 = state_20408;
(statearr_20410[(7)] = inst_20405);

return statearr_20410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20408__$1,inst_20406);
} else {
return null;
}
}
});})(c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results))
;
return ((function (switch__19923__auto__,c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_20414 = [null,null,null,null,null,null,null,null];
(statearr_20414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__);

(statearr_20414[(1)] = (1));

return statearr_20414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1 = (function (state_20408){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20415){if((e20415 instanceof Object)){
var ex__19927__auto__ = e20415;
var statearr_20416_20586 = state_20408;
(statearr_20416_20586[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20587 = state_20408;
state_20408 = G__20587;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = function(state_20408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1.call(this,state_20408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results))
})();
var state__20037__auto__ = (function (){var statearr_20417 = f__20036__auto__.call(null);
(statearr_20417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20585);

return statearr_20417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___20585,res,vec__20403,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20418){
var vec__20419 = p__20418;
var v = cljs.core.nth.call(null,vec__20419,(0),null);
var p = cljs.core.nth.call(null,vec__20419,(1),null);
var job = vec__20419;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__6071__auto___20588 = n;
var __20589 = (0);
while(true){
if((__20589 < n__6071__auto___20588)){
var G__20420_20590 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20420_20590) {
case "compute":
var c__20035__auto___20592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20589,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (__20589,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function (state_20433){
var state_val_20434 = (state_20433[(1)]);
if((state_val_20434 === (1))){
var state_20433__$1 = state_20433;
var statearr_20435_20593 = state_20433__$1;
(statearr_20435_20593[(2)] = null);

(statearr_20435_20593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20434 === (2))){
var state_20433__$1 = state_20433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20433__$1,(4),jobs);
} else {
if((state_val_20434 === (3))){
var inst_20431 = (state_20433[(2)]);
var state_20433__$1 = state_20433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20433__$1,inst_20431);
} else {
if((state_val_20434 === (4))){
var inst_20423 = (state_20433[(2)]);
var inst_20424 = process.call(null,inst_20423);
var state_20433__$1 = state_20433;
if(cljs.core.truth_(inst_20424)){
var statearr_20436_20594 = state_20433__$1;
(statearr_20436_20594[(1)] = (5));

} else {
var statearr_20437_20595 = state_20433__$1;
(statearr_20437_20595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20434 === (5))){
var state_20433__$1 = state_20433;
var statearr_20438_20596 = state_20433__$1;
(statearr_20438_20596[(2)] = null);

(statearr_20438_20596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20434 === (6))){
var state_20433__$1 = state_20433;
var statearr_20439_20597 = state_20433__$1;
(statearr_20439_20597[(2)] = null);

(statearr_20439_20597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20434 === (7))){
var inst_20429 = (state_20433[(2)]);
var state_20433__$1 = state_20433;
var statearr_20440_20598 = state_20433__$1;
(statearr_20440_20598[(2)] = inst_20429);

(statearr_20440_20598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20589,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
;
return ((function (__20589,switch__19923__auto__,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_20444 = [null,null,null,null,null,null,null];
(statearr_20444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__);

(statearr_20444[(1)] = (1));

return statearr_20444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1 = (function (state_20433){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20445){if((e20445 instanceof Object)){
var ex__19927__auto__ = e20445;
var statearr_20446_20599 = state_20433;
(statearr_20446_20599[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20600 = state_20433;
state_20433 = G__20600;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = function(state_20433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1.call(this,state_20433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__;
})()
;})(__20589,switch__19923__auto__,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
})();
var state__20037__auto__ = (function (){var statearr_20447 = f__20036__auto__.call(null);
(statearr_20447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20592);

return statearr_20447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(__20589,c__20035__auto___20592,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
);


break;
case "async":
var c__20035__auto___20601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20589,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (__20589,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function (state_20460){
var state_val_20461 = (state_20460[(1)]);
if((state_val_20461 === (1))){
var state_20460__$1 = state_20460;
var statearr_20462_20602 = state_20460__$1;
(statearr_20462_20602[(2)] = null);

(statearr_20462_20602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20461 === (2))){
var state_20460__$1 = state_20460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20460__$1,(4),jobs);
} else {
if((state_val_20461 === (3))){
var inst_20458 = (state_20460[(2)]);
var state_20460__$1 = state_20460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20460__$1,inst_20458);
} else {
if((state_val_20461 === (4))){
var inst_20450 = (state_20460[(2)]);
var inst_20451 = async.call(null,inst_20450);
var state_20460__$1 = state_20460;
if(cljs.core.truth_(inst_20451)){
var statearr_20463_20603 = state_20460__$1;
(statearr_20463_20603[(1)] = (5));

} else {
var statearr_20464_20604 = state_20460__$1;
(statearr_20464_20604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20461 === (5))){
var state_20460__$1 = state_20460;
var statearr_20465_20605 = state_20460__$1;
(statearr_20465_20605[(2)] = null);

(statearr_20465_20605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20461 === (6))){
var state_20460__$1 = state_20460;
var statearr_20466_20606 = state_20460__$1;
(statearr_20466_20606[(2)] = null);

(statearr_20466_20606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20461 === (7))){
var inst_20456 = (state_20460[(2)]);
var state_20460__$1 = state_20460;
var statearr_20467_20607 = state_20460__$1;
(statearr_20467_20607[(2)] = inst_20456);

(statearr_20467_20607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20589,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
;
return ((function (__20589,switch__19923__auto__,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_20471 = [null,null,null,null,null,null,null];
(statearr_20471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__);

(statearr_20471[(1)] = (1));

return statearr_20471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1 = (function (state_20460){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20472){if((e20472 instanceof Object)){
var ex__19927__auto__ = e20472;
var statearr_20473_20608 = state_20460;
(statearr_20473_20608[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20609 = state_20460;
state_20460 = G__20609;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = function(state_20460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1.call(this,state_20460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__;
})()
;})(__20589,switch__19923__auto__,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
})();
var state__20037__auto__ = (function (){var statearr_20474 = f__20036__auto__.call(null);
(statearr_20474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20601);

return statearr_20474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(__20589,c__20035__auto___20601,G__20420_20590,n__6071__auto___20588,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20610 = (__20589 + (1));
__20589 = G__20610;
continue;
} else {
}
break;
}

var c__20035__auto___20611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___20611,jobs,results,process,async){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___20611,jobs,results,process,async){
return (function (state_20496){
var state_val_20497 = (state_20496[(1)]);
if((state_val_20497 === (1))){
var state_20496__$1 = state_20496;
var statearr_20498_20612 = state_20496__$1;
(statearr_20498_20612[(2)] = null);

(statearr_20498_20612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (2))){
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20496__$1,(4),from);
} else {
if((state_val_20497 === (3))){
var inst_20494 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20496__$1,inst_20494);
} else {
if((state_val_20497 === (4))){
var inst_20477 = (state_20496[(7)]);
var inst_20477__$1 = (state_20496[(2)]);
var inst_20478 = (inst_20477__$1 == null);
var state_20496__$1 = (function (){var statearr_20499 = state_20496;
(statearr_20499[(7)] = inst_20477__$1);

return statearr_20499;
})();
if(cljs.core.truth_(inst_20478)){
var statearr_20500_20613 = state_20496__$1;
(statearr_20500_20613[(1)] = (5));

} else {
var statearr_20501_20614 = state_20496__$1;
(statearr_20501_20614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (5))){
var inst_20480 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20496__$1 = state_20496;
var statearr_20502_20615 = state_20496__$1;
(statearr_20502_20615[(2)] = inst_20480);

(statearr_20502_20615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (6))){
var inst_20482 = (state_20496[(8)]);
var inst_20477 = (state_20496[(7)]);
var inst_20482__$1 = cljs.core.async.chan.call(null,(1));
var inst_20483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20484 = [inst_20477,inst_20482__$1];
var inst_20485 = (new cljs.core.PersistentVector(null,2,(5),inst_20483,inst_20484,null));
var state_20496__$1 = (function (){var statearr_20503 = state_20496;
(statearr_20503[(8)] = inst_20482__$1);

return statearr_20503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20496__$1,(8),jobs,inst_20485);
} else {
if((state_val_20497 === (7))){
var inst_20492 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20504_20616 = state_20496__$1;
(statearr_20504_20616[(2)] = inst_20492);

(statearr_20504_20616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (8))){
var inst_20482 = (state_20496[(8)]);
var inst_20487 = (state_20496[(2)]);
var state_20496__$1 = (function (){var statearr_20505 = state_20496;
(statearr_20505[(9)] = inst_20487);

return statearr_20505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20496__$1,(9),results,inst_20482);
} else {
if((state_val_20497 === (9))){
var inst_20489 = (state_20496[(2)]);
var state_20496__$1 = (function (){var statearr_20506 = state_20496;
(statearr_20506[(10)] = inst_20489);

return statearr_20506;
})();
var statearr_20507_20617 = state_20496__$1;
(statearr_20507_20617[(2)] = null);

(statearr_20507_20617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___20611,jobs,results,process,async))
;
return ((function (switch__19923__auto__,c__20035__auto___20611,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_20511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__);

(statearr_20511[(1)] = (1));

return statearr_20511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1 = (function (state_20496){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20512){if((e20512 instanceof Object)){
var ex__19927__auto__ = e20512;
var statearr_20513_20618 = state_20496;
(statearr_20513_20618[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20619 = state_20496;
state_20496 = G__20619;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = function(state_20496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1.call(this,state_20496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___20611,jobs,results,process,async))
})();
var state__20037__auto__ = (function (){var statearr_20514 = f__20036__auto__.call(null);
(statearr_20514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20611);

return statearr_20514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___20611,jobs,results,process,async))
);


var c__20035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto__,jobs,results,process,async){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto__,jobs,results,process,async){
return (function (state_20552){
var state_val_20553 = (state_20552[(1)]);
if((state_val_20553 === (7))){
var inst_20548 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
var statearr_20554_20620 = state_20552__$1;
(statearr_20554_20620[(2)] = inst_20548);

(statearr_20554_20620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (20))){
var state_20552__$1 = state_20552;
var statearr_20555_20621 = state_20552__$1;
(statearr_20555_20621[(2)] = null);

(statearr_20555_20621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (1))){
var state_20552__$1 = state_20552;
var statearr_20556_20622 = state_20552__$1;
(statearr_20556_20622[(2)] = null);

(statearr_20556_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (4))){
var inst_20517 = (state_20552[(7)]);
var inst_20517__$1 = (state_20552[(2)]);
var inst_20518 = (inst_20517__$1 == null);
var state_20552__$1 = (function (){var statearr_20557 = state_20552;
(statearr_20557[(7)] = inst_20517__$1);

return statearr_20557;
})();
if(cljs.core.truth_(inst_20518)){
var statearr_20558_20623 = state_20552__$1;
(statearr_20558_20623[(1)] = (5));

} else {
var statearr_20559_20624 = state_20552__$1;
(statearr_20559_20624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (15))){
var inst_20530 = (state_20552[(8)]);
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20552__$1,(18),to,inst_20530);
} else {
if((state_val_20553 === (21))){
var inst_20543 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
var statearr_20560_20625 = state_20552__$1;
(statearr_20560_20625[(2)] = inst_20543);

(statearr_20560_20625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (13))){
var inst_20545 = (state_20552[(2)]);
var state_20552__$1 = (function (){var statearr_20561 = state_20552;
(statearr_20561[(9)] = inst_20545);

return statearr_20561;
})();
var statearr_20562_20626 = state_20552__$1;
(statearr_20562_20626[(2)] = null);

(statearr_20562_20626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (6))){
var inst_20517 = (state_20552[(7)]);
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20552__$1,(11),inst_20517);
} else {
if((state_val_20553 === (17))){
var inst_20538 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
if(cljs.core.truth_(inst_20538)){
var statearr_20563_20627 = state_20552__$1;
(statearr_20563_20627[(1)] = (19));

} else {
var statearr_20564_20628 = state_20552__$1;
(statearr_20564_20628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (3))){
var inst_20550 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20552__$1,inst_20550);
} else {
if((state_val_20553 === (12))){
var inst_20527 = (state_20552[(10)]);
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20552__$1,(14),inst_20527);
} else {
if((state_val_20553 === (2))){
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20552__$1,(4),results);
} else {
if((state_val_20553 === (19))){
var state_20552__$1 = state_20552;
var statearr_20565_20629 = state_20552__$1;
(statearr_20565_20629[(2)] = null);

(statearr_20565_20629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (11))){
var inst_20527 = (state_20552[(2)]);
var state_20552__$1 = (function (){var statearr_20566 = state_20552;
(statearr_20566[(10)] = inst_20527);

return statearr_20566;
})();
var statearr_20567_20630 = state_20552__$1;
(statearr_20567_20630[(2)] = null);

(statearr_20567_20630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (9))){
var state_20552__$1 = state_20552;
var statearr_20568_20631 = state_20552__$1;
(statearr_20568_20631[(2)] = null);

(statearr_20568_20631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (5))){
var state_20552__$1 = state_20552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20569_20632 = state_20552__$1;
(statearr_20569_20632[(1)] = (8));

} else {
var statearr_20570_20633 = state_20552__$1;
(statearr_20570_20633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (14))){
var inst_20530 = (state_20552[(8)]);
var inst_20532 = (state_20552[(11)]);
var inst_20530__$1 = (state_20552[(2)]);
var inst_20531 = (inst_20530__$1 == null);
var inst_20532__$1 = cljs.core.not.call(null,inst_20531);
var state_20552__$1 = (function (){var statearr_20571 = state_20552;
(statearr_20571[(8)] = inst_20530__$1);

(statearr_20571[(11)] = inst_20532__$1);

return statearr_20571;
})();
if(inst_20532__$1){
var statearr_20572_20634 = state_20552__$1;
(statearr_20572_20634[(1)] = (15));

} else {
var statearr_20573_20635 = state_20552__$1;
(statearr_20573_20635[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (16))){
var inst_20532 = (state_20552[(11)]);
var state_20552__$1 = state_20552;
var statearr_20574_20636 = state_20552__$1;
(statearr_20574_20636[(2)] = inst_20532);

(statearr_20574_20636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (10))){
var inst_20524 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
var statearr_20575_20637 = state_20552__$1;
(statearr_20575_20637[(2)] = inst_20524);

(statearr_20575_20637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (18))){
var inst_20535 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
var statearr_20576_20638 = state_20552__$1;
(statearr_20576_20638[(2)] = inst_20535);

(statearr_20576_20638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (8))){
var inst_20521 = cljs.core.async.close_BANG_.call(null,to);
var state_20552__$1 = state_20552;
var statearr_20577_20639 = state_20552__$1;
(statearr_20577_20639[(2)] = inst_20521);

(statearr_20577_20639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto__,jobs,results,process,async))
;
return ((function (switch__19923__auto__,c__20035__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_20581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__);

(statearr_20581[(1)] = (1));

return statearr_20581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1 = (function (state_20552){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20582){if((e20582 instanceof Object)){
var ex__19927__auto__ = e20582;
var statearr_20583_20640 = state_20552;
(statearr_20583_20640[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20641 = state_20552;
state_20552 = G__20641;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__ = function(state_20552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1.call(this,state_20552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto__,jobs,results,process,async))
})();
var state__20037__auto__ = (function (){var statearr_20584 = f__20036__auto__.call(null);
(statearr_20584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto__);

return statearr_20584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto__,jobs,results,process,async))
);

return c__20035__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20642 = [];
var len__6226__auto___20645 = arguments.length;
var i__6227__auto___20646 = (0);
while(true){
if((i__6227__auto___20646 < len__6226__auto___20645)){
args20642.push((arguments[i__6227__auto___20646]));

var G__20647 = (i__6227__auto___20646 + (1));
i__6227__auto___20646 = G__20647;
continue;
} else {
}
break;
}

var G__20644 = args20642.length;
switch (G__20644) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20642.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20649 = [];
var len__6226__auto___20652 = arguments.length;
var i__6227__auto___20653 = (0);
while(true){
if((i__6227__auto___20653 < len__6226__auto___20652)){
args20649.push((arguments[i__6227__auto___20653]));

var G__20654 = (i__6227__auto___20653 + (1));
i__6227__auto___20653 = G__20654;
continue;
} else {
}
break;
}

var G__20651 = args20649.length;
switch (G__20651) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20649.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20656 = [];
var len__6226__auto___20709 = arguments.length;
var i__6227__auto___20710 = (0);
while(true){
if((i__6227__auto___20710 < len__6226__auto___20709)){
args20656.push((arguments[i__6227__auto___20710]));

var G__20711 = (i__6227__auto___20710 + (1));
i__6227__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var G__20658 = args20656.length;
switch (G__20658) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20656.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20035__auto___20713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___20713,tc,fc){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___20713,tc,fc){
return (function (state_20684){
var state_val_20685 = (state_20684[(1)]);
if((state_val_20685 === (7))){
var inst_20680 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20686_20714 = state_20684__$1;
(statearr_20686_20714[(2)] = inst_20680);

(statearr_20686_20714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (1))){
var state_20684__$1 = state_20684;
var statearr_20687_20715 = state_20684__$1;
(statearr_20687_20715[(2)] = null);

(statearr_20687_20715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (4))){
var inst_20661 = (state_20684[(7)]);
var inst_20661__$1 = (state_20684[(2)]);
var inst_20662 = (inst_20661__$1 == null);
var state_20684__$1 = (function (){var statearr_20688 = state_20684;
(statearr_20688[(7)] = inst_20661__$1);

return statearr_20688;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20689_20716 = state_20684__$1;
(statearr_20689_20716[(1)] = (5));

} else {
var statearr_20690_20717 = state_20684__$1;
(statearr_20690_20717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (13))){
var state_20684__$1 = state_20684;
var statearr_20691_20718 = state_20684__$1;
(statearr_20691_20718[(2)] = null);

(statearr_20691_20718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (6))){
var inst_20661 = (state_20684[(7)]);
var inst_20667 = p.call(null,inst_20661);
var state_20684__$1 = state_20684;
if(cljs.core.truth_(inst_20667)){
var statearr_20692_20719 = state_20684__$1;
(statearr_20692_20719[(1)] = (9));

} else {
var statearr_20693_20720 = state_20684__$1;
(statearr_20693_20720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (3))){
var inst_20682 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20684__$1,inst_20682);
} else {
if((state_val_20685 === (12))){
var state_20684__$1 = state_20684;
var statearr_20694_20721 = state_20684__$1;
(statearr_20694_20721[(2)] = null);

(statearr_20694_20721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (2))){
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20684__$1,(4),ch);
} else {
if((state_val_20685 === (11))){
var inst_20661 = (state_20684[(7)]);
var inst_20671 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20684__$1,(8),inst_20671,inst_20661);
} else {
if((state_val_20685 === (9))){
var state_20684__$1 = state_20684;
var statearr_20695_20722 = state_20684__$1;
(statearr_20695_20722[(2)] = tc);

(statearr_20695_20722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (5))){
var inst_20664 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20665 = cljs.core.async.close_BANG_.call(null,fc);
var state_20684__$1 = (function (){var statearr_20696 = state_20684;
(statearr_20696[(8)] = inst_20664);

return statearr_20696;
})();
var statearr_20697_20723 = state_20684__$1;
(statearr_20697_20723[(2)] = inst_20665);

(statearr_20697_20723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (14))){
var inst_20678 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20698_20724 = state_20684__$1;
(statearr_20698_20724[(2)] = inst_20678);

(statearr_20698_20724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (10))){
var state_20684__$1 = state_20684;
var statearr_20699_20725 = state_20684__$1;
(statearr_20699_20725[(2)] = fc);

(statearr_20699_20725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (8))){
var inst_20673 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
if(cljs.core.truth_(inst_20673)){
var statearr_20700_20726 = state_20684__$1;
(statearr_20700_20726[(1)] = (12));

} else {
var statearr_20701_20727 = state_20684__$1;
(statearr_20701_20727[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___20713,tc,fc))
;
return ((function (switch__19923__auto__,c__20035__auto___20713,tc,fc){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_20705 = [null,null,null,null,null,null,null,null,null];
(statearr_20705[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_20705[(1)] = (1));

return statearr_20705;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_20684){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20706){if((e20706 instanceof Object)){
var ex__19927__auto__ = e20706;
var statearr_20707_20728 = state_20684;
(statearr_20707_20728[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20729 = state_20684;
state_20684 = G__20729;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_20684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_20684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___20713,tc,fc))
})();
var state__20037__auto__ = (function (){var statearr_20708 = f__20036__auto__.call(null);
(statearr_20708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___20713);

return statearr_20708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___20713,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto__){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto__){
return (function (state_20793){
var state_val_20794 = (state_20793[(1)]);
if((state_val_20794 === (7))){
var inst_20789 = (state_20793[(2)]);
var state_20793__$1 = state_20793;
var statearr_20795_20816 = state_20793__$1;
(statearr_20795_20816[(2)] = inst_20789);

(statearr_20795_20816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (1))){
var inst_20773 = init;
var state_20793__$1 = (function (){var statearr_20796 = state_20793;
(statearr_20796[(7)] = inst_20773);

return statearr_20796;
})();
var statearr_20797_20817 = state_20793__$1;
(statearr_20797_20817[(2)] = null);

(statearr_20797_20817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (4))){
var inst_20776 = (state_20793[(8)]);
var inst_20776__$1 = (state_20793[(2)]);
var inst_20777 = (inst_20776__$1 == null);
var state_20793__$1 = (function (){var statearr_20798 = state_20793;
(statearr_20798[(8)] = inst_20776__$1);

return statearr_20798;
})();
if(cljs.core.truth_(inst_20777)){
var statearr_20799_20818 = state_20793__$1;
(statearr_20799_20818[(1)] = (5));

} else {
var statearr_20800_20819 = state_20793__$1;
(statearr_20800_20819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (6))){
var inst_20773 = (state_20793[(7)]);
var inst_20776 = (state_20793[(8)]);
var inst_20780 = (state_20793[(9)]);
var inst_20780__$1 = f.call(null,inst_20773,inst_20776);
var inst_20781 = cljs.core.reduced_QMARK_.call(null,inst_20780__$1);
var state_20793__$1 = (function (){var statearr_20801 = state_20793;
(statearr_20801[(9)] = inst_20780__$1);

return statearr_20801;
})();
if(inst_20781){
var statearr_20802_20820 = state_20793__$1;
(statearr_20802_20820[(1)] = (8));

} else {
var statearr_20803_20821 = state_20793__$1;
(statearr_20803_20821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (3))){
var inst_20791 = (state_20793[(2)]);
var state_20793__$1 = state_20793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20793__$1,inst_20791);
} else {
if((state_val_20794 === (2))){
var state_20793__$1 = state_20793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20793__$1,(4),ch);
} else {
if((state_val_20794 === (9))){
var inst_20780 = (state_20793[(9)]);
var inst_20773 = inst_20780;
var state_20793__$1 = (function (){var statearr_20804 = state_20793;
(statearr_20804[(7)] = inst_20773);

return statearr_20804;
})();
var statearr_20805_20822 = state_20793__$1;
(statearr_20805_20822[(2)] = null);

(statearr_20805_20822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (5))){
var inst_20773 = (state_20793[(7)]);
var state_20793__$1 = state_20793;
var statearr_20806_20823 = state_20793__$1;
(statearr_20806_20823[(2)] = inst_20773);

(statearr_20806_20823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (10))){
var inst_20787 = (state_20793[(2)]);
var state_20793__$1 = state_20793;
var statearr_20807_20824 = state_20793__$1;
(statearr_20807_20824[(2)] = inst_20787);

(statearr_20807_20824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20794 === (8))){
var inst_20780 = (state_20793[(9)]);
var inst_20783 = cljs.core.deref.call(null,inst_20780);
var state_20793__$1 = state_20793;
var statearr_20808_20825 = state_20793__$1;
(statearr_20808_20825[(2)] = inst_20783);

(statearr_20808_20825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto__))
;
return ((function (switch__19923__auto__,c__20035__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19924__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19924__auto____0 = (function (){
var statearr_20812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20812[(0)] = cljs$core$async$reduce_$_state_machine__19924__auto__);

(statearr_20812[(1)] = (1));

return statearr_20812;
});
var cljs$core$async$reduce_$_state_machine__19924__auto____1 = (function (state_20793){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20813){if((e20813 instanceof Object)){
var ex__19927__auto__ = e20813;
var statearr_20814_20826 = state_20793;
(statearr_20814_20826[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20793;
state_20793 = G__20827;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19924__auto__ = function(state_20793){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19924__auto____1.call(this,state_20793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19924__auto____0;
cljs$core$async$reduce_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19924__auto____1;
return cljs$core$async$reduce_$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto__))
})();
var state__20037__auto__ = (function (){var statearr_20815 = f__20036__auto__.call(null);
(statearr_20815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto__);

return statearr_20815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto__))
);

return c__20035__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20828 = [];
var len__6226__auto___20880 = arguments.length;
var i__6227__auto___20881 = (0);
while(true){
if((i__6227__auto___20881 < len__6226__auto___20880)){
args20828.push((arguments[i__6227__auto___20881]));

var G__20882 = (i__6227__auto___20881 + (1));
i__6227__auto___20881 = G__20882;
continue;
} else {
}
break;
}

var G__20830 = args20828.length;
switch (G__20830) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20828.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto__){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto__){
return (function (state_20855){
var state_val_20856 = (state_20855[(1)]);
if((state_val_20856 === (7))){
var inst_20837 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
var statearr_20857_20884 = state_20855__$1;
(statearr_20857_20884[(2)] = inst_20837);

(statearr_20857_20884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (1))){
var inst_20831 = cljs.core.seq.call(null,coll);
var inst_20832 = inst_20831;
var state_20855__$1 = (function (){var statearr_20858 = state_20855;
(statearr_20858[(7)] = inst_20832);

return statearr_20858;
})();
var statearr_20859_20885 = state_20855__$1;
(statearr_20859_20885[(2)] = null);

(statearr_20859_20885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (4))){
var inst_20832 = (state_20855[(7)]);
var inst_20835 = cljs.core.first.call(null,inst_20832);
var state_20855__$1 = state_20855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20855__$1,(7),ch,inst_20835);
} else {
if((state_val_20856 === (13))){
var inst_20849 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
var statearr_20860_20886 = state_20855__$1;
(statearr_20860_20886[(2)] = inst_20849);

(statearr_20860_20886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (6))){
var inst_20840 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
if(cljs.core.truth_(inst_20840)){
var statearr_20861_20887 = state_20855__$1;
(statearr_20861_20887[(1)] = (8));

} else {
var statearr_20862_20888 = state_20855__$1;
(statearr_20862_20888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (3))){
var inst_20853 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20855__$1,inst_20853);
} else {
if((state_val_20856 === (12))){
var state_20855__$1 = state_20855;
var statearr_20863_20889 = state_20855__$1;
(statearr_20863_20889[(2)] = null);

(statearr_20863_20889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (2))){
var inst_20832 = (state_20855[(7)]);
var state_20855__$1 = state_20855;
if(cljs.core.truth_(inst_20832)){
var statearr_20864_20890 = state_20855__$1;
(statearr_20864_20890[(1)] = (4));

} else {
var statearr_20865_20891 = state_20855__$1;
(statearr_20865_20891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (11))){
var inst_20846 = cljs.core.async.close_BANG_.call(null,ch);
var state_20855__$1 = state_20855;
var statearr_20866_20892 = state_20855__$1;
(statearr_20866_20892[(2)] = inst_20846);

(statearr_20866_20892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (9))){
var state_20855__$1 = state_20855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20867_20893 = state_20855__$1;
(statearr_20867_20893[(1)] = (11));

} else {
var statearr_20868_20894 = state_20855__$1;
(statearr_20868_20894[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (5))){
var inst_20832 = (state_20855[(7)]);
var state_20855__$1 = state_20855;
var statearr_20869_20895 = state_20855__$1;
(statearr_20869_20895[(2)] = inst_20832);

(statearr_20869_20895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (10))){
var inst_20851 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
var statearr_20870_20896 = state_20855__$1;
(statearr_20870_20896[(2)] = inst_20851);

(statearr_20870_20896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (8))){
var inst_20832 = (state_20855[(7)]);
var inst_20842 = cljs.core.next.call(null,inst_20832);
var inst_20832__$1 = inst_20842;
var state_20855__$1 = (function (){var statearr_20871 = state_20855;
(statearr_20871[(7)] = inst_20832__$1);

return statearr_20871;
})();
var statearr_20872_20897 = state_20855__$1;
(statearr_20872_20897[(2)] = null);

(statearr_20872_20897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto__))
;
return ((function (switch__19923__auto__,c__20035__auto__){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_20876 = [null,null,null,null,null,null,null,null];
(statearr_20876[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_20876[(1)] = (1));

return statearr_20876;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_20855){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_20855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e20877){if((e20877 instanceof Object)){
var ex__19927__auto__ = e20877;
var statearr_20878_20898 = state_20855;
(statearr_20878_20898[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20899 = state_20855;
state_20855 = G__20899;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_20855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_20855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto__))
})();
var state__20037__auto__ = (function (){var statearr_20879 = f__20036__auto__.call(null);
(statearr_20879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto__);

return statearr_20879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto__))
);

return c__20035__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,_);
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21121 = (function (mult,ch,cs,meta21122){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21122 = meta21122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21123,meta21122__$1){
var self__ = this;
var _21123__$1 = this;
return (new cljs.core.async.t_cljs$core$async21121(self__.mult,self__.ch,self__.cs,meta21122__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21123){
var self__ = this;
var _21123__$1 = this;
return self__.meta21122;
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21122","meta21122",530865012,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21121";

cljs.core.async.t_cljs$core$async21121.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async21121");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21121 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21121(mult__$1,ch__$1,cs__$1,meta21122){
return (new cljs.core.async.t_cljs$core$async21121(mult__$1,ch__$1,cs__$1,meta21122));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21121(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20035__auto___21342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___21342,cs,m,dchan,dctr,done){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___21342,cs,m,dchan,dctr,done){
return (function (state_21254){
var state_val_21255 = (state_21254[(1)]);
if((state_val_21255 === (7))){
var inst_21250 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21256_21343 = state_21254__$1;
(statearr_21256_21343[(2)] = inst_21250);

(statearr_21256_21343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (20))){
var inst_21155 = (state_21254[(7)]);
var inst_21165 = cljs.core.first.call(null,inst_21155);
var inst_21166 = cljs.core.nth.call(null,inst_21165,(0),null);
var inst_21167 = cljs.core.nth.call(null,inst_21165,(1),null);
var state_21254__$1 = (function (){var statearr_21257 = state_21254;
(statearr_21257[(8)] = inst_21166);

return statearr_21257;
})();
if(cljs.core.truth_(inst_21167)){
var statearr_21258_21344 = state_21254__$1;
(statearr_21258_21344[(1)] = (22));

} else {
var statearr_21259_21345 = state_21254__$1;
(statearr_21259_21345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (27))){
var inst_21195 = (state_21254[(9)]);
var inst_21126 = (state_21254[(10)]);
var inst_21197 = (state_21254[(11)]);
var inst_21202 = (state_21254[(12)]);
var inst_21202__$1 = cljs.core._nth.call(null,inst_21195,inst_21197);
var inst_21203 = cljs.core.async.put_BANG_.call(null,inst_21202__$1,inst_21126,done);
var state_21254__$1 = (function (){var statearr_21260 = state_21254;
(statearr_21260[(12)] = inst_21202__$1);

return statearr_21260;
})();
if(cljs.core.truth_(inst_21203)){
var statearr_21261_21346 = state_21254__$1;
(statearr_21261_21346[(1)] = (30));

} else {
var statearr_21262_21347 = state_21254__$1;
(statearr_21262_21347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (1))){
var state_21254__$1 = state_21254;
var statearr_21263_21348 = state_21254__$1;
(statearr_21263_21348[(2)] = null);

(statearr_21263_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (24))){
var inst_21155 = (state_21254[(7)]);
var inst_21172 = (state_21254[(2)]);
var inst_21173 = cljs.core.next.call(null,inst_21155);
var inst_21135 = inst_21173;
var inst_21136 = null;
var inst_21137 = (0);
var inst_21138 = (0);
var state_21254__$1 = (function (){var statearr_21264 = state_21254;
(statearr_21264[(13)] = inst_21138);

(statearr_21264[(14)] = inst_21172);

(statearr_21264[(15)] = inst_21137);

(statearr_21264[(16)] = inst_21135);

(statearr_21264[(17)] = inst_21136);

return statearr_21264;
})();
var statearr_21265_21349 = state_21254__$1;
(statearr_21265_21349[(2)] = null);

(statearr_21265_21349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (39))){
var state_21254__$1 = state_21254;
var statearr_21269_21350 = state_21254__$1;
(statearr_21269_21350[(2)] = null);

(statearr_21269_21350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (4))){
var inst_21126 = (state_21254[(10)]);
var inst_21126__$1 = (state_21254[(2)]);
var inst_21127 = (inst_21126__$1 == null);
var state_21254__$1 = (function (){var statearr_21270 = state_21254;
(statearr_21270[(10)] = inst_21126__$1);

return statearr_21270;
})();
if(cljs.core.truth_(inst_21127)){
var statearr_21271_21351 = state_21254__$1;
(statearr_21271_21351[(1)] = (5));

} else {
var statearr_21272_21352 = state_21254__$1;
(statearr_21272_21352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (15))){
var inst_21138 = (state_21254[(13)]);
var inst_21137 = (state_21254[(15)]);
var inst_21135 = (state_21254[(16)]);
var inst_21136 = (state_21254[(17)]);
var inst_21151 = (state_21254[(2)]);
var inst_21152 = (inst_21138 + (1));
var tmp21266 = inst_21137;
var tmp21267 = inst_21135;
var tmp21268 = inst_21136;
var inst_21135__$1 = tmp21267;
var inst_21136__$1 = tmp21268;
var inst_21137__$1 = tmp21266;
var inst_21138__$1 = inst_21152;
var state_21254__$1 = (function (){var statearr_21273 = state_21254;
(statearr_21273[(13)] = inst_21138__$1);

(statearr_21273[(15)] = inst_21137__$1);

(statearr_21273[(18)] = inst_21151);

(statearr_21273[(16)] = inst_21135__$1);

(statearr_21273[(17)] = inst_21136__$1);

return statearr_21273;
})();
var statearr_21274_21353 = state_21254__$1;
(statearr_21274_21353[(2)] = null);

(statearr_21274_21353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (21))){
var inst_21176 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21278_21354 = state_21254__$1;
(statearr_21278_21354[(2)] = inst_21176);

(statearr_21278_21354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (31))){
var inst_21202 = (state_21254[(12)]);
var inst_21206 = done.call(null,null);
var inst_21207 = cljs.core.async.untap_STAR_.call(null,m,inst_21202);
var state_21254__$1 = (function (){var statearr_21279 = state_21254;
(statearr_21279[(19)] = inst_21206);

return statearr_21279;
})();
var statearr_21280_21355 = state_21254__$1;
(statearr_21280_21355[(2)] = inst_21207);

(statearr_21280_21355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (32))){
var inst_21196 = (state_21254[(20)]);
var inst_21195 = (state_21254[(9)]);
var inst_21197 = (state_21254[(11)]);
var inst_21194 = (state_21254[(21)]);
var inst_21209 = (state_21254[(2)]);
var inst_21210 = (inst_21197 + (1));
var tmp21275 = inst_21196;
var tmp21276 = inst_21195;
var tmp21277 = inst_21194;
var inst_21194__$1 = tmp21277;
var inst_21195__$1 = tmp21276;
var inst_21196__$1 = tmp21275;
var inst_21197__$1 = inst_21210;
var state_21254__$1 = (function (){var statearr_21281 = state_21254;
(statearr_21281[(20)] = inst_21196__$1);

(statearr_21281[(9)] = inst_21195__$1);

(statearr_21281[(22)] = inst_21209);

(statearr_21281[(11)] = inst_21197__$1);

(statearr_21281[(21)] = inst_21194__$1);

return statearr_21281;
})();
var statearr_21282_21356 = state_21254__$1;
(statearr_21282_21356[(2)] = null);

(statearr_21282_21356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (40))){
var inst_21222 = (state_21254[(23)]);
var inst_21226 = done.call(null,null);
var inst_21227 = cljs.core.async.untap_STAR_.call(null,m,inst_21222);
var state_21254__$1 = (function (){var statearr_21283 = state_21254;
(statearr_21283[(24)] = inst_21226);

return statearr_21283;
})();
var statearr_21284_21357 = state_21254__$1;
(statearr_21284_21357[(2)] = inst_21227);

(statearr_21284_21357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (33))){
var inst_21213 = (state_21254[(25)]);
var inst_21215 = cljs.core.chunked_seq_QMARK_.call(null,inst_21213);
var state_21254__$1 = state_21254;
if(inst_21215){
var statearr_21285_21358 = state_21254__$1;
(statearr_21285_21358[(1)] = (36));

} else {
var statearr_21286_21359 = state_21254__$1;
(statearr_21286_21359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (13))){
var inst_21145 = (state_21254[(26)]);
var inst_21148 = cljs.core.async.close_BANG_.call(null,inst_21145);
var state_21254__$1 = state_21254;
var statearr_21287_21360 = state_21254__$1;
(statearr_21287_21360[(2)] = inst_21148);

(statearr_21287_21360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (22))){
var inst_21166 = (state_21254[(8)]);
var inst_21169 = cljs.core.async.close_BANG_.call(null,inst_21166);
var state_21254__$1 = state_21254;
var statearr_21288_21361 = state_21254__$1;
(statearr_21288_21361[(2)] = inst_21169);

(statearr_21288_21361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (36))){
var inst_21213 = (state_21254[(25)]);
var inst_21217 = cljs.core.chunk_first.call(null,inst_21213);
var inst_21218 = cljs.core.chunk_rest.call(null,inst_21213);
var inst_21219 = cljs.core.count.call(null,inst_21217);
var inst_21194 = inst_21218;
var inst_21195 = inst_21217;
var inst_21196 = inst_21219;
var inst_21197 = (0);
var state_21254__$1 = (function (){var statearr_21289 = state_21254;
(statearr_21289[(20)] = inst_21196);

(statearr_21289[(9)] = inst_21195);

(statearr_21289[(11)] = inst_21197);

(statearr_21289[(21)] = inst_21194);

return statearr_21289;
})();
var statearr_21290_21362 = state_21254__$1;
(statearr_21290_21362[(2)] = null);

(statearr_21290_21362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (41))){
var inst_21213 = (state_21254[(25)]);
var inst_21229 = (state_21254[(2)]);
var inst_21230 = cljs.core.next.call(null,inst_21213);
var inst_21194 = inst_21230;
var inst_21195 = null;
var inst_21196 = (0);
var inst_21197 = (0);
var state_21254__$1 = (function (){var statearr_21291 = state_21254;
(statearr_21291[(20)] = inst_21196);

(statearr_21291[(9)] = inst_21195);

(statearr_21291[(27)] = inst_21229);

(statearr_21291[(11)] = inst_21197);

(statearr_21291[(21)] = inst_21194);

return statearr_21291;
})();
var statearr_21292_21363 = state_21254__$1;
(statearr_21292_21363[(2)] = null);

(statearr_21292_21363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (43))){
var state_21254__$1 = state_21254;
var statearr_21293_21364 = state_21254__$1;
(statearr_21293_21364[(2)] = null);

(statearr_21293_21364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (29))){
var inst_21238 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21294_21365 = state_21254__$1;
(statearr_21294_21365[(2)] = inst_21238);

(statearr_21294_21365[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (44))){
var inst_21247 = (state_21254[(2)]);
var state_21254__$1 = (function (){var statearr_21295 = state_21254;
(statearr_21295[(28)] = inst_21247);

return statearr_21295;
})();
var statearr_21296_21366 = state_21254__$1;
(statearr_21296_21366[(2)] = null);

(statearr_21296_21366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (6))){
var inst_21186 = (state_21254[(29)]);
var inst_21185 = cljs.core.deref.call(null,cs);
var inst_21186__$1 = cljs.core.keys.call(null,inst_21185);
var inst_21187 = cljs.core.count.call(null,inst_21186__$1);
var inst_21188 = cljs.core.reset_BANG_.call(null,dctr,inst_21187);
var inst_21193 = cljs.core.seq.call(null,inst_21186__$1);
var inst_21194 = inst_21193;
var inst_21195 = null;
var inst_21196 = (0);
var inst_21197 = (0);
var state_21254__$1 = (function (){var statearr_21297 = state_21254;
(statearr_21297[(20)] = inst_21196);

(statearr_21297[(9)] = inst_21195);

(statearr_21297[(11)] = inst_21197);

(statearr_21297[(29)] = inst_21186__$1);

(statearr_21297[(30)] = inst_21188);

(statearr_21297[(21)] = inst_21194);

return statearr_21297;
})();
var statearr_21298_21367 = state_21254__$1;
(statearr_21298_21367[(2)] = null);

(statearr_21298_21367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (28))){
var inst_21213 = (state_21254[(25)]);
var inst_21194 = (state_21254[(21)]);
var inst_21213__$1 = cljs.core.seq.call(null,inst_21194);
var state_21254__$1 = (function (){var statearr_21299 = state_21254;
(statearr_21299[(25)] = inst_21213__$1);

return statearr_21299;
})();
if(inst_21213__$1){
var statearr_21300_21368 = state_21254__$1;
(statearr_21300_21368[(1)] = (33));

} else {
var statearr_21301_21369 = state_21254__$1;
(statearr_21301_21369[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (25))){
var inst_21196 = (state_21254[(20)]);
var inst_21197 = (state_21254[(11)]);
var inst_21199 = (inst_21197 < inst_21196);
var inst_21200 = inst_21199;
var state_21254__$1 = state_21254;
if(cljs.core.truth_(inst_21200)){
var statearr_21302_21370 = state_21254__$1;
(statearr_21302_21370[(1)] = (27));

} else {
var statearr_21303_21371 = state_21254__$1;
(statearr_21303_21371[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (34))){
var state_21254__$1 = state_21254;
var statearr_21304_21372 = state_21254__$1;
(statearr_21304_21372[(2)] = null);

(statearr_21304_21372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (17))){
var state_21254__$1 = state_21254;
var statearr_21305_21373 = state_21254__$1;
(statearr_21305_21373[(2)] = null);

(statearr_21305_21373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (3))){
var inst_21252 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21254__$1,inst_21252);
} else {
if((state_val_21255 === (12))){
var inst_21181 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21306_21374 = state_21254__$1;
(statearr_21306_21374[(2)] = inst_21181);

(statearr_21306_21374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (2))){
var state_21254__$1 = state_21254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21254__$1,(4),ch);
} else {
if((state_val_21255 === (23))){
var state_21254__$1 = state_21254;
var statearr_21307_21375 = state_21254__$1;
(statearr_21307_21375[(2)] = null);

(statearr_21307_21375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (35))){
var inst_21236 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21308_21376 = state_21254__$1;
(statearr_21308_21376[(2)] = inst_21236);

(statearr_21308_21376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (19))){
var inst_21155 = (state_21254[(7)]);
var inst_21159 = cljs.core.chunk_first.call(null,inst_21155);
var inst_21160 = cljs.core.chunk_rest.call(null,inst_21155);
var inst_21161 = cljs.core.count.call(null,inst_21159);
var inst_21135 = inst_21160;
var inst_21136 = inst_21159;
var inst_21137 = inst_21161;
var inst_21138 = (0);
var state_21254__$1 = (function (){var statearr_21309 = state_21254;
(statearr_21309[(13)] = inst_21138);

(statearr_21309[(15)] = inst_21137);

(statearr_21309[(16)] = inst_21135);

(statearr_21309[(17)] = inst_21136);

return statearr_21309;
})();
var statearr_21310_21377 = state_21254__$1;
(statearr_21310_21377[(2)] = null);

(statearr_21310_21377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (11))){
var inst_21155 = (state_21254[(7)]);
var inst_21135 = (state_21254[(16)]);
var inst_21155__$1 = cljs.core.seq.call(null,inst_21135);
var state_21254__$1 = (function (){var statearr_21311 = state_21254;
(statearr_21311[(7)] = inst_21155__$1);

return statearr_21311;
})();
if(inst_21155__$1){
var statearr_21312_21378 = state_21254__$1;
(statearr_21312_21378[(1)] = (16));

} else {
var statearr_21313_21379 = state_21254__$1;
(statearr_21313_21379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (9))){
var inst_21183 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21314_21380 = state_21254__$1;
(statearr_21314_21380[(2)] = inst_21183);

(statearr_21314_21380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (5))){
var inst_21133 = cljs.core.deref.call(null,cs);
var inst_21134 = cljs.core.seq.call(null,inst_21133);
var inst_21135 = inst_21134;
var inst_21136 = null;
var inst_21137 = (0);
var inst_21138 = (0);
var state_21254__$1 = (function (){var statearr_21315 = state_21254;
(statearr_21315[(13)] = inst_21138);

(statearr_21315[(15)] = inst_21137);

(statearr_21315[(16)] = inst_21135);

(statearr_21315[(17)] = inst_21136);

return statearr_21315;
})();
var statearr_21316_21381 = state_21254__$1;
(statearr_21316_21381[(2)] = null);

(statearr_21316_21381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (14))){
var state_21254__$1 = state_21254;
var statearr_21317_21382 = state_21254__$1;
(statearr_21317_21382[(2)] = null);

(statearr_21317_21382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (45))){
var inst_21244 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21318_21383 = state_21254__$1;
(statearr_21318_21383[(2)] = inst_21244);

(statearr_21318_21383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (26))){
var inst_21186 = (state_21254[(29)]);
var inst_21240 = (state_21254[(2)]);
var inst_21241 = cljs.core.seq.call(null,inst_21186);
var state_21254__$1 = (function (){var statearr_21319 = state_21254;
(statearr_21319[(31)] = inst_21240);

return statearr_21319;
})();
if(inst_21241){
var statearr_21320_21384 = state_21254__$1;
(statearr_21320_21384[(1)] = (42));

} else {
var statearr_21321_21385 = state_21254__$1;
(statearr_21321_21385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (16))){
var inst_21155 = (state_21254[(7)]);
var inst_21157 = cljs.core.chunked_seq_QMARK_.call(null,inst_21155);
var state_21254__$1 = state_21254;
if(inst_21157){
var statearr_21322_21386 = state_21254__$1;
(statearr_21322_21386[(1)] = (19));

} else {
var statearr_21323_21387 = state_21254__$1;
(statearr_21323_21387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (38))){
var inst_21233 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21324_21388 = state_21254__$1;
(statearr_21324_21388[(2)] = inst_21233);

(statearr_21324_21388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (30))){
var state_21254__$1 = state_21254;
var statearr_21325_21389 = state_21254__$1;
(statearr_21325_21389[(2)] = null);

(statearr_21325_21389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (10))){
var inst_21138 = (state_21254[(13)]);
var inst_21136 = (state_21254[(17)]);
var inst_21144 = cljs.core._nth.call(null,inst_21136,inst_21138);
var inst_21145 = cljs.core.nth.call(null,inst_21144,(0),null);
var inst_21146 = cljs.core.nth.call(null,inst_21144,(1),null);
var state_21254__$1 = (function (){var statearr_21326 = state_21254;
(statearr_21326[(26)] = inst_21145);

return statearr_21326;
})();
if(cljs.core.truth_(inst_21146)){
var statearr_21327_21390 = state_21254__$1;
(statearr_21327_21390[(1)] = (13));

} else {
var statearr_21328_21391 = state_21254__$1;
(statearr_21328_21391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (18))){
var inst_21179 = (state_21254[(2)]);
var state_21254__$1 = state_21254;
var statearr_21329_21392 = state_21254__$1;
(statearr_21329_21392[(2)] = inst_21179);

(statearr_21329_21392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (42))){
var state_21254__$1 = state_21254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21254__$1,(45),dchan);
} else {
if((state_val_21255 === (37))){
var inst_21213 = (state_21254[(25)]);
var inst_21126 = (state_21254[(10)]);
var inst_21222 = (state_21254[(23)]);
var inst_21222__$1 = cljs.core.first.call(null,inst_21213);
var inst_21223 = cljs.core.async.put_BANG_.call(null,inst_21222__$1,inst_21126,done);
var state_21254__$1 = (function (){var statearr_21330 = state_21254;
(statearr_21330[(23)] = inst_21222__$1);

return statearr_21330;
})();
if(cljs.core.truth_(inst_21223)){
var statearr_21331_21393 = state_21254__$1;
(statearr_21331_21393[(1)] = (39));

} else {
var statearr_21332_21394 = state_21254__$1;
(statearr_21332_21394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21255 === (8))){
var inst_21138 = (state_21254[(13)]);
var inst_21137 = (state_21254[(15)]);
var inst_21140 = (inst_21138 < inst_21137);
var inst_21141 = inst_21140;
var state_21254__$1 = state_21254;
if(cljs.core.truth_(inst_21141)){
var statearr_21333_21395 = state_21254__$1;
(statearr_21333_21395[(1)] = (10));

} else {
var statearr_21334_21396 = state_21254__$1;
(statearr_21334_21396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___21342,cs,m,dchan,dctr,done))
;
return ((function (switch__19923__auto__,c__20035__auto___21342,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19924__auto__ = null;
var cljs$core$async$mult_$_state_machine__19924__auto____0 = (function (){
var statearr_21338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21338[(0)] = cljs$core$async$mult_$_state_machine__19924__auto__);

(statearr_21338[(1)] = (1));

return statearr_21338;
});
var cljs$core$async$mult_$_state_machine__19924__auto____1 = (function (state_21254){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_21254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e21339){if((e21339 instanceof Object)){
var ex__19927__auto__ = e21339;
var statearr_21340_21397 = state_21254;
(statearr_21340_21397[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21398 = state_21254;
state_21254 = G__21398;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19924__auto__ = function(state_21254){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19924__auto____1.call(this,state_21254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19924__auto____0;
cljs$core$async$mult_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19924__auto____1;
return cljs$core$async$mult_$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___21342,cs,m,dchan,dctr,done))
})();
var state__20037__auto__ = (function (){var statearr_21341 = f__20036__auto__.call(null);
(statearr_21341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___21342);

return statearr_21341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___21342,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21399 = [];
var len__6226__auto___21402 = arguments.length;
var i__6227__auto___21403 = (0);
while(true){
if((i__6227__auto___21403 < len__6226__auto___21402)){
args21399.push((arguments[i__6227__auto___21403]));

var G__21404 = (i__6227__auto___21403 + (1));
i__6227__auto___21403 = G__21404;
continue;
} else {
}
break;
}

var G__21401 = args21399.length;
switch (G__21401) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21399.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,state_map);
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,mode);
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___21416 = arguments.length;
var i__6227__auto___21417 = (0);
while(true){
if((i__6227__auto___21417 < len__6226__auto___21416)){
args__6233__auto__.push((arguments[i__6227__auto___21417]));

var G__21418 = (i__6227__auto___21417 + (1));
i__6227__auto___21417 = G__21418;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21410){
var map__21411 = p__21410;
var map__21411__$1 = ((((!((map__21411 == null)))?((((map__21411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21411):map__21411);
var opts = map__21411__$1;
var statearr_21413_21419 = state;
(statearr_21413_21419[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21411,map__21411__$1,opts){
return (function (val){
var statearr_21414_21420 = state;
(statearr_21414_21420[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21411,map__21411__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21415_21421 = state;
(statearr_21415_21421[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21406){
var G__21407 = cljs.core.first.call(null,seq21406);
var seq21406__$1 = cljs.core.next.call(null,seq21406);
var G__21408 = cljs.core.first.call(null,seq21406__$1);
var seq21406__$2 = cljs.core.next.call(null,seq21406__$1);
var G__21409 = cljs.core.first.call(null,seq21406__$2);
var seq21406__$3 = cljs.core.next.call(null,seq21406__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21407,G__21408,G__21409,seq21406__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21585 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21586){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21586 = meta21586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21587,meta21586__$1){
var self__ = this;
var _21587__$1 = this;
return (new cljs.core.async.t_cljs$core$async21585(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21586__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21587){
var self__ = this;
var _21587__$1 = this;
return self__.meta21586;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21586","meta21586",873556319,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21585";

cljs.core.async.t_cljs$core$async21585.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async21585");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21585 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21585(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21586){
return (new cljs.core.async.t_cljs$core$async21585(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21586));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21585(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20035__auto___21748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21685){
var state_val_21686 = (state_21685[(1)]);
if((state_val_21686 === (7))){
var inst_21603 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21687_21749 = state_21685__$1;
(statearr_21687_21749[(2)] = inst_21603);

(statearr_21687_21749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (20))){
var inst_21615 = (state_21685[(7)]);
var state_21685__$1 = state_21685;
var statearr_21688_21750 = state_21685__$1;
(statearr_21688_21750[(2)] = inst_21615);

(statearr_21688_21750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (27))){
var state_21685__$1 = state_21685;
var statearr_21689_21751 = state_21685__$1;
(statearr_21689_21751[(2)] = null);

(statearr_21689_21751[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (1))){
var inst_21591 = (state_21685[(8)]);
var inst_21591__$1 = calc_state.call(null);
var inst_21593 = (inst_21591__$1 == null);
var inst_21594 = cljs.core.not.call(null,inst_21593);
var state_21685__$1 = (function (){var statearr_21690 = state_21685;
(statearr_21690[(8)] = inst_21591__$1);

return statearr_21690;
})();
if(inst_21594){
var statearr_21691_21752 = state_21685__$1;
(statearr_21691_21752[(1)] = (2));

} else {
var statearr_21692_21753 = state_21685__$1;
(statearr_21692_21753[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (24))){
var inst_21659 = (state_21685[(9)]);
var inst_21645 = (state_21685[(10)]);
var inst_21638 = (state_21685[(11)]);
var inst_21659__$1 = inst_21638.call(null,inst_21645);
var state_21685__$1 = (function (){var statearr_21693 = state_21685;
(statearr_21693[(9)] = inst_21659__$1);

return statearr_21693;
})();
if(cljs.core.truth_(inst_21659__$1)){
var statearr_21694_21754 = state_21685__$1;
(statearr_21694_21754[(1)] = (29));

} else {
var statearr_21695_21755 = state_21685__$1;
(statearr_21695_21755[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (4))){
var inst_21606 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21606)){
var statearr_21696_21756 = state_21685__$1;
(statearr_21696_21756[(1)] = (8));

} else {
var statearr_21697_21757 = state_21685__$1;
(statearr_21697_21757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (15))){
var inst_21632 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21632)){
var statearr_21698_21758 = state_21685__$1;
(statearr_21698_21758[(1)] = (19));

} else {
var statearr_21699_21759 = state_21685__$1;
(statearr_21699_21759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (21))){
var inst_21637 = (state_21685[(12)]);
var inst_21637__$1 = (state_21685[(2)]);
var inst_21638 = cljs.core.get.call(null,inst_21637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21639 = cljs.core.get.call(null,inst_21637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21640 = cljs.core.get.call(null,inst_21637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21685__$1 = (function (){var statearr_21700 = state_21685;
(statearr_21700[(11)] = inst_21638);

(statearr_21700[(13)] = inst_21639);

(statearr_21700[(12)] = inst_21637__$1);

return statearr_21700;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21685__$1,(22),inst_21640);
} else {
if((state_val_21686 === (31))){
var inst_21667 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21667)){
var statearr_21701_21760 = state_21685__$1;
(statearr_21701_21760[(1)] = (32));

} else {
var statearr_21702_21761 = state_21685__$1;
(statearr_21702_21761[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (32))){
var inst_21644 = (state_21685[(14)]);
var state_21685__$1 = state_21685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21685__$1,(35),out,inst_21644);
} else {
if((state_val_21686 === (33))){
var inst_21637 = (state_21685[(12)]);
var inst_21615 = inst_21637;
var state_21685__$1 = (function (){var statearr_21703 = state_21685;
(statearr_21703[(7)] = inst_21615);

return statearr_21703;
})();
var statearr_21704_21762 = state_21685__$1;
(statearr_21704_21762[(2)] = null);

(statearr_21704_21762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (13))){
var inst_21615 = (state_21685[(7)]);
var inst_21622 = inst_21615.cljs$lang$protocol_mask$partition0$;
var inst_21623 = (inst_21622 & (64));
var inst_21624 = inst_21615.cljs$core$ISeq$;
var inst_21625 = (inst_21623) || (inst_21624);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21625)){
var statearr_21705_21763 = state_21685__$1;
(statearr_21705_21763[(1)] = (16));

} else {
var statearr_21706_21764 = state_21685__$1;
(statearr_21706_21764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (22))){
var inst_21645 = (state_21685[(10)]);
var inst_21644 = (state_21685[(14)]);
var inst_21643 = (state_21685[(2)]);
var inst_21644__$1 = cljs.core.nth.call(null,inst_21643,(0),null);
var inst_21645__$1 = cljs.core.nth.call(null,inst_21643,(1),null);
var inst_21646 = (inst_21644__$1 == null);
var inst_21647 = cljs.core._EQ_.call(null,inst_21645__$1,change);
var inst_21648 = (inst_21646) || (inst_21647);
var state_21685__$1 = (function (){var statearr_21707 = state_21685;
(statearr_21707[(10)] = inst_21645__$1);

(statearr_21707[(14)] = inst_21644__$1);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21648)){
var statearr_21708_21765 = state_21685__$1;
(statearr_21708_21765[(1)] = (23));

} else {
var statearr_21709_21766 = state_21685__$1;
(statearr_21709_21766[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (36))){
var inst_21637 = (state_21685[(12)]);
var inst_21615 = inst_21637;
var state_21685__$1 = (function (){var statearr_21710 = state_21685;
(statearr_21710[(7)] = inst_21615);

return statearr_21710;
})();
var statearr_21711_21767 = state_21685__$1;
(statearr_21711_21767[(2)] = null);

(statearr_21711_21767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (29))){
var inst_21659 = (state_21685[(9)]);
var state_21685__$1 = state_21685;
var statearr_21712_21768 = state_21685__$1;
(statearr_21712_21768[(2)] = inst_21659);

(statearr_21712_21768[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (6))){
var state_21685__$1 = state_21685;
var statearr_21713_21769 = state_21685__$1;
(statearr_21713_21769[(2)] = false);

(statearr_21713_21769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (28))){
var inst_21655 = (state_21685[(2)]);
var inst_21656 = calc_state.call(null);
var inst_21615 = inst_21656;
var state_21685__$1 = (function (){var statearr_21714 = state_21685;
(statearr_21714[(15)] = inst_21655);

(statearr_21714[(7)] = inst_21615);

return statearr_21714;
})();
var statearr_21715_21770 = state_21685__$1;
(statearr_21715_21770[(2)] = null);

(statearr_21715_21770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (25))){
var inst_21681 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21716_21771 = state_21685__$1;
(statearr_21716_21771[(2)] = inst_21681);

(statearr_21716_21771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (34))){
var inst_21679 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21717_21772 = state_21685__$1;
(statearr_21717_21772[(2)] = inst_21679);

(statearr_21717_21772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (17))){
var state_21685__$1 = state_21685;
var statearr_21718_21773 = state_21685__$1;
(statearr_21718_21773[(2)] = false);

(statearr_21718_21773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (3))){
var state_21685__$1 = state_21685;
var statearr_21719_21774 = state_21685__$1;
(statearr_21719_21774[(2)] = false);

(statearr_21719_21774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (12))){
var inst_21683 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21685__$1,inst_21683);
} else {
if((state_val_21686 === (2))){
var inst_21591 = (state_21685[(8)]);
var inst_21596 = inst_21591.cljs$lang$protocol_mask$partition0$;
var inst_21597 = (inst_21596 & (64));
var inst_21598 = inst_21591.cljs$core$ISeq$;
var inst_21599 = (inst_21597) || (inst_21598);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21599)){
var statearr_21720_21775 = state_21685__$1;
(statearr_21720_21775[(1)] = (5));

} else {
var statearr_21721_21776 = state_21685__$1;
(statearr_21721_21776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (23))){
var inst_21644 = (state_21685[(14)]);
var inst_21650 = (inst_21644 == null);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21650)){
var statearr_21722_21777 = state_21685__$1;
(statearr_21722_21777[(1)] = (26));

} else {
var statearr_21723_21778 = state_21685__$1;
(statearr_21723_21778[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (35))){
var inst_21670 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21670)){
var statearr_21724_21779 = state_21685__$1;
(statearr_21724_21779[(1)] = (36));

} else {
var statearr_21725_21780 = state_21685__$1;
(statearr_21725_21780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (19))){
var inst_21615 = (state_21685[(7)]);
var inst_21634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21615);
var state_21685__$1 = state_21685;
var statearr_21726_21781 = state_21685__$1;
(statearr_21726_21781[(2)] = inst_21634);

(statearr_21726_21781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (11))){
var inst_21615 = (state_21685[(7)]);
var inst_21619 = (inst_21615 == null);
var inst_21620 = cljs.core.not.call(null,inst_21619);
var state_21685__$1 = state_21685;
if(inst_21620){
var statearr_21727_21782 = state_21685__$1;
(statearr_21727_21782[(1)] = (13));

} else {
var statearr_21728_21783 = state_21685__$1;
(statearr_21728_21783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (9))){
var inst_21591 = (state_21685[(8)]);
var state_21685__$1 = state_21685;
var statearr_21729_21784 = state_21685__$1;
(statearr_21729_21784[(2)] = inst_21591);

(statearr_21729_21784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (5))){
var state_21685__$1 = state_21685;
var statearr_21730_21785 = state_21685__$1;
(statearr_21730_21785[(2)] = true);

(statearr_21730_21785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (14))){
var state_21685__$1 = state_21685;
var statearr_21731_21786 = state_21685__$1;
(statearr_21731_21786[(2)] = false);

(statearr_21731_21786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (26))){
var inst_21645 = (state_21685[(10)]);
var inst_21652 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21645);
var state_21685__$1 = state_21685;
var statearr_21732_21787 = state_21685__$1;
(statearr_21732_21787[(2)] = inst_21652);

(statearr_21732_21787[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (16))){
var state_21685__$1 = state_21685;
var statearr_21733_21788 = state_21685__$1;
(statearr_21733_21788[(2)] = true);

(statearr_21733_21788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (38))){
var inst_21675 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21734_21789 = state_21685__$1;
(statearr_21734_21789[(2)] = inst_21675);

(statearr_21734_21789[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (30))){
var inst_21645 = (state_21685[(10)]);
var inst_21638 = (state_21685[(11)]);
var inst_21639 = (state_21685[(13)]);
var inst_21662 = cljs.core.empty_QMARK_.call(null,inst_21638);
var inst_21663 = inst_21639.call(null,inst_21645);
var inst_21664 = cljs.core.not.call(null,inst_21663);
var inst_21665 = (inst_21662) && (inst_21664);
var state_21685__$1 = state_21685;
var statearr_21735_21790 = state_21685__$1;
(statearr_21735_21790[(2)] = inst_21665);

(statearr_21735_21790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (10))){
var inst_21591 = (state_21685[(8)]);
var inst_21611 = (state_21685[(2)]);
var inst_21612 = cljs.core.get.call(null,inst_21611,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21613 = cljs.core.get.call(null,inst_21611,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21614 = cljs.core.get.call(null,inst_21611,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21615 = inst_21591;
var state_21685__$1 = (function (){var statearr_21736 = state_21685;
(statearr_21736[(16)] = inst_21612);

(statearr_21736[(17)] = inst_21613);

(statearr_21736[(7)] = inst_21615);

(statearr_21736[(18)] = inst_21614);

return statearr_21736;
})();
var statearr_21737_21791 = state_21685__$1;
(statearr_21737_21791[(2)] = null);

(statearr_21737_21791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (18))){
var inst_21629 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21738_21792 = state_21685__$1;
(statearr_21738_21792[(2)] = inst_21629);

(statearr_21738_21792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (37))){
var state_21685__$1 = state_21685;
var statearr_21739_21793 = state_21685__$1;
(statearr_21739_21793[(2)] = null);

(statearr_21739_21793[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (8))){
var inst_21591 = (state_21685[(8)]);
var inst_21608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21591);
var state_21685__$1 = state_21685;
var statearr_21740_21794 = state_21685__$1;
(statearr_21740_21794[(2)] = inst_21608);

(statearr_21740_21794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19923__auto__,c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19924__auto__ = null;
var cljs$core$async$mix_$_state_machine__19924__auto____0 = (function (){
var statearr_21744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21744[(0)] = cljs$core$async$mix_$_state_machine__19924__auto__);

(statearr_21744[(1)] = (1));

return statearr_21744;
});
var cljs$core$async$mix_$_state_machine__19924__auto____1 = (function (state_21685){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_21685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e21745){if((e21745 instanceof Object)){
var ex__19927__auto__ = e21745;
var statearr_21746_21795 = state_21685;
(statearr_21746_21795[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21796 = state_21685;
state_21685 = G__21796;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19924__auto__ = function(state_21685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19924__auto____1.call(this,state_21685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19924__auto____0;
cljs$core$async$mix_$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19924__auto____1;
return cljs$core$async$mix_$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20037__auto__ = (function (){var statearr_21747 = f__20036__auto__.call(null);
(statearr_21747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___21748);

return statearr_21747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___21748,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21797 = [];
var len__6226__auto___21800 = arguments.length;
var i__6227__auto___21801 = (0);
while(true){
if((i__6227__auto___21801 < len__6226__auto___21800)){
args21797.push((arguments[i__6227__auto___21801]));

var G__21802 = (i__6227__auto___21801 + (1));
i__6227__auto___21801 = G__21802;
continue;
} else {
}
break;
}

var G__21799 = args21797.length;
switch (G__21799) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21797.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21805 = [];
var len__6226__auto___21930 = arguments.length;
var i__6227__auto___21931 = (0);
while(true){
if((i__6227__auto___21931 < len__6226__auto___21930)){
args21805.push((arguments[i__6227__auto___21931]));

var G__21932 = (i__6227__auto___21931 + (1));
i__6227__auto___21931 = G__21932;
continue;
} else {
}
break;
}

var G__21807 = args21805.length;
switch (G__21807) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21805.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5168__auto__,mults){
return (function (p1__21804_SHARP_){
if(cljs.core.truth_(p1__21804_SHARP_.call(null,topic))){
return p1__21804_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21804_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21808 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21809){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21809 = meta21809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21810,meta21809__$1){
var self__ = this;
var _21810__$1 = this;
return (new cljs.core.async.t_cljs$core$async21808(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21809__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21810){
var self__ = this;
var _21810__$1 = this;
return self__.meta21809;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21809","meta21809",683103796,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21808";

cljs.core.async.t_cljs$core$async21808.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async21808");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21808 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21808(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21809){
return (new cljs.core.async.t_cljs$core$async21808(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21809));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21808(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20035__auto___21934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___21934,mults,ensure_mult,p){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___21934,mults,ensure_mult,p){
return (function (state_21882){
var state_val_21883 = (state_21882[(1)]);
if((state_val_21883 === (7))){
var inst_21878 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21884_21935 = state_21882__$1;
(statearr_21884_21935[(2)] = inst_21878);

(statearr_21884_21935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (20))){
var state_21882__$1 = state_21882;
var statearr_21885_21936 = state_21882__$1;
(statearr_21885_21936[(2)] = null);

(statearr_21885_21936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (1))){
var state_21882__$1 = state_21882;
var statearr_21886_21937 = state_21882__$1;
(statearr_21886_21937[(2)] = null);

(statearr_21886_21937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (24))){
var inst_21861 = (state_21882[(7)]);
var inst_21870 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21861);
var state_21882__$1 = state_21882;
var statearr_21887_21938 = state_21882__$1;
(statearr_21887_21938[(2)] = inst_21870);

(statearr_21887_21938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (4))){
var inst_21813 = (state_21882[(8)]);
var inst_21813__$1 = (state_21882[(2)]);
var inst_21814 = (inst_21813__$1 == null);
var state_21882__$1 = (function (){var statearr_21888 = state_21882;
(statearr_21888[(8)] = inst_21813__$1);

return statearr_21888;
})();
if(cljs.core.truth_(inst_21814)){
var statearr_21889_21939 = state_21882__$1;
(statearr_21889_21939[(1)] = (5));

} else {
var statearr_21890_21940 = state_21882__$1;
(statearr_21890_21940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (15))){
var inst_21855 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21891_21941 = state_21882__$1;
(statearr_21891_21941[(2)] = inst_21855);

(statearr_21891_21941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (21))){
var inst_21875 = (state_21882[(2)]);
var state_21882__$1 = (function (){var statearr_21892 = state_21882;
(statearr_21892[(9)] = inst_21875);

return statearr_21892;
})();
var statearr_21893_21942 = state_21882__$1;
(statearr_21893_21942[(2)] = null);

(statearr_21893_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (13))){
var inst_21837 = (state_21882[(10)]);
var inst_21839 = cljs.core.chunked_seq_QMARK_.call(null,inst_21837);
var state_21882__$1 = state_21882;
if(inst_21839){
var statearr_21894_21943 = state_21882__$1;
(statearr_21894_21943[(1)] = (16));

} else {
var statearr_21895_21944 = state_21882__$1;
(statearr_21895_21944[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (22))){
var inst_21867 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
if(cljs.core.truth_(inst_21867)){
var statearr_21896_21945 = state_21882__$1;
(statearr_21896_21945[(1)] = (23));

} else {
var statearr_21897_21946 = state_21882__$1;
(statearr_21897_21946[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (6))){
var inst_21813 = (state_21882[(8)]);
var inst_21861 = (state_21882[(7)]);
var inst_21863 = (state_21882[(11)]);
var inst_21861__$1 = topic_fn.call(null,inst_21813);
var inst_21862 = cljs.core.deref.call(null,mults);
var inst_21863__$1 = cljs.core.get.call(null,inst_21862,inst_21861__$1);
var state_21882__$1 = (function (){var statearr_21898 = state_21882;
(statearr_21898[(7)] = inst_21861__$1);

(statearr_21898[(11)] = inst_21863__$1);

return statearr_21898;
})();
if(cljs.core.truth_(inst_21863__$1)){
var statearr_21899_21947 = state_21882__$1;
(statearr_21899_21947[(1)] = (19));

} else {
var statearr_21900_21948 = state_21882__$1;
(statearr_21900_21948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (25))){
var inst_21872 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21901_21949 = state_21882__$1;
(statearr_21901_21949[(2)] = inst_21872);

(statearr_21901_21949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (17))){
var inst_21837 = (state_21882[(10)]);
var inst_21846 = cljs.core.first.call(null,inst_21837);
var inst_21847 = cljs.core.async.muxch_STAR_.call(null,inst_21846);
var inst_21848 = cljs.core.async.close_BANG_.call(null,inst_21847);
var inst_21849 = cljs.core.next.call(null,inst_21837);
var inst_21823 = inst_21849;
var inst_21824 = null;
var inst_21825 = (0);
var inst_21826 = (0);
var state_21882__$1 = (function (){var statearr_21902 = state_21882;
(statearr_21902[(12)] = inst_21825);

(statearr_21902[(13)] = inst_21826);

(statearr_21902[(14)] = inst_21824);

(statearr_21902[(15)] = inst_21848);

(statearr_21902[(16)] = inst_21823);

return statearr_21902;
})();
var statearr_21903_21950 = state_21882__$1;
(statearr_21903_21950[(2)] = null);

(statearr_21903_21950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (3))){
var inst_21880 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21882__$1,inst_21880);
} else {
if((state_val_21883 === (12))){
var inst_21857 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21904_21951 = state_21882__$1;
(statearr_21904_21951[(2)] = inst_21857);

(statearr_21904_21951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (2))){
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21882__$1,(4),ch);
} else {
if((state_val_21883 === (23))){
var state_21882__$1 = state_21882;
var statearr_21905_21952 = state_21882__$1;
(statearr_21905_21952[(2)] = null);

(statearr_21905_21952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (19))){
var inst_21813 = (state_21882[(8)]);
var inst_21863 = (state_21882[(11)]);
var inst_21865 = cljs.core.async.muxch_STAR_.call(null,inst_21863);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21882__$1,(22),inst_21865,inst_21813);
} else {
if((state_val_21883 === (11))){
var inst_21837 = (state_21882[(10)]);
var inst_21823 = (state_21882[(16)]);
var inst_21837__$1 = cljs.core.seq.call(null,inst_21823);
var state_21882__$1 = (function (){var statearr_21906 = state_21882;
(statearr_21906[(10)] = inst_21837__$1);

return statearr_21906;
})();
if(inst_21837__$1){
var statearr_21907_21953 = state_21882__$1;
(statearr_21907_21953[(1)] = (13));

} else {
var statearr_21908_21954 = state_21882__$1;
(statearr_21908_21954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (9))){
var inst_21859 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21909_21955 = state_21882__$1;
(statearr_21909_21955[(2)] = inst_21859);

(statearr_21909_21955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (5))){
var inst_21820 = cljs.core.deref.call(null,mults);
var inst_21821 = cljs.core.vals.call(null,inst_21820);
var inst_21822 = cljs.core.seq.call(null,inst_21821);
var inst_21823 = inst_21822;
var inst_21824 = null;
var inst_21825 = (0);
var inst_21826 = (0);
var state_21882__$1 = (function (){var statearr_21910 = state_21882;
(statearr_21910[(12)] = inst_21825);

(statearr_21910[(13)] = inst_21826);

(statearr_21910[(14)] = inst_21824);

(statearr_21910[(16)] = inst_21823);

return statearr_21910;
})();
var statearr_21911_21956 = state_21882__$1;
(statearr_21911_21956[(2)] = null);

(statearr_21911_21956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (14))){
var state_21882__$1 = state_21882;
var statearr_21915_21957 = state_21882__$1;
(statearr_21915_21957[(2)] = null);

(statearr_21915_21957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (16))){
var inst_21837 = (state_21882[(10)]);
var inst_21841 = cljs.core.chunk_first.call(null,inst_21837);
var inst_21842 = cljs.core.chunk_rest.call(null,inst_21837);
var inst_21843 = cljs.core.count.call(null,inst_21841);
var inst_21823 = inst_21842;
var inst_21824 = inst_21841;
var inst_21825 = inst_21843;
var inst_21826 = (0);
var state_21882__$1 = (function (){var statearr_21916 = state_21882;
(statearr_21916[(12)] = inst_21825);

(statearr_21916[(13)] = inst_21826);

(statearr_21916[(14)] = inst_21824);

(statearr_21916[(16)] = inst_21823);

return statearr_21916;
})();
var statearr_21917_21958 = state_21882__$1;
(statearr_21917_21958[(2)] = null);

(statearr_21917_21958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (10))){
var inst_21825 = (state_21882[(12)]);
var inst_21826 = (state_21882[(13)]);
var inst_21824 = (state_21882[(14)]);
var inst_21823 = (state_21882[(16)]);
var inst_21831 = cljs.core._nth.call(null,inst_21824,inst_21826);
var inst_21832 = cljs.core.async.muxch_STAR_.call(null,inst_21831);
var inst_21833 = cljs.core.async.close_BANG_.call(null,inst_21832);
var inst_21834 = (inst_21826 + (1));
var tmp21912 = inst_21825;
var tmp21913 = inst_21824;
var tmp21914 = inst_21823;
var inst_21823__$1 = tmp21914;
var inst_21824__$1 = tmp21913;
var inst_21825__$1 = tmp21912;
var inst_21826__$1 = inst_21834;
var state_21882__$1 = (function (){var statearr_21918 = state_21882;
(statearr_21918[(12)] = inst_21825__$1);

(statearr_21918[(13)] = inst_21826__$1);

(statearr_21918[(14)] = inst_21824__$1);

(statearr_21918[(17)] = inst_21833);

(statearr_21918[(16)] = inst_21823__$1);

return statearr_21918;
})();
var statearr_21919_21959 = state_21882__$1;
(statearr_21919_21959[(2)] = null);

(statearr_21919_21959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (18))){
var inst_21852 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21920_21960 = state_21882__$1;
(statearr_21920_21960[(2)] = inst_21852);

(statearr_21920_21960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (8))){
var inst_21825 = (state_21882[(12)]);
var inst_21826 = (state_21882[(13)]);
var inst_21828 = (inst_21826 < inst_21825);
var inst_21829 = inst_21828;
var state_21882__$1 = state_21882;
if(cljs.core.truth_(inst_21829)){
var statearr_21921_21961 = state_21882__$1;
(statearr_21921_21961[(1)] = (10));

} else {
var statearr_21922_21962 = state_21882__$1;
(statearr_21922_21962[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___21934,mults,ensure_mult,p))
;
return ((function (switch__19923__auto__,c__20035__auto___21934,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_21926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21926[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_21926[(1)] = (1));

return statearr_21926;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_21882){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_21882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e21927){if((e21927 instanceof Object)){
var ex__19927__auto__ = e21927;
var statearr_21928_21963 = state_21882;
(statearr_21928_21963[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21964 = state_21882;
state_21882 = G__21964;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_21882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_21882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___21934,mults,ensure_mult,p))
})();
var state__20037__auto__ = (function (){var statearr_21929 = f__20036__auto__.call(null);
(statearr_21929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___21934);

return statearr_21929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___21934,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21965 = [];
var len__6226__auto___21968 = arguments.length;
var i__6227__auto___21969 = (0);
while(true){
if((i__6227__auto___21969 < len__6226__auto___21968)){
args21965.push((arguments[i__6227__auto___21969]));

var G__21970 = (i__6227__auto___21969 + (1));
i__6227__auto___21969 = G__21970;
continue;
} else {
}
break;
}

var G__21967 = args21965.length;
switch (G__21967) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21965.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21972 = [];
var len__6226__auto___21975 = arguments.length;
var i__6227__auto___21976 = (0);
while(true){
if((i__6227__auto___21976 < len__6226__auto___21975)){
args21972.push((arguments[i__6227__auto___21976]));

var G__21977 = (i__6227__auto___21976 + (1));
i__6227__auto___21976 = G__21977;
continue;
} else {
}
break;
}

var G__21974 = args21972.length;
switch (G__21974) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21972.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21979 = [];
var len__6226__auto___22050 = arguments.length;
var i__6227__auto___22051 = (0);
while(true){
if((i__6227__auto___22051 < len__6226__auto___22050)){
args21979.push((arguments[i__6227__auto___22051]));

var G__22052 = (i__6227__auto___22051 + (1));
i__6227__auto___22051 = G__22052;
continue;
} else {
}
break;
}

var G__21981 = args21979.length;
switch (G__21981) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21979.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20035__auto___22054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22020){
var state_val_22021 = (state_22020[(1)]);
if((state_val_22021 === (7))){
var state_22020__$1 = state_22020;
var statearr_22022_22055 = state_22020__$1;
(statearr_22022_22055[(2)] = null);

(statearr_22022_22055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (1))){
var state_22020__$1 = state_22020;
var statearr_22023_22056 = state_22020__$1;
(statearr_22023_22056[(2)] = null);

(statearr_22023_22056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (4))){
var inst_21984 = (state_22020[(7)]);
var inst_21986 = (inst_21984 < cnt);
var state_22020__$1 = state_22020;
if(cljs.core.truth_(inst_21986)){
var statearr_22024_22057 = state_22020__$1;
(statearr_22024_22057[(1)] = (6));

} else {
var statearr_22025_22058 = state_22020__$1;
(statearr_22025_22058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (15))){
var inst_22016 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
var statearr_22026_22059 = state_22020__$1;
(statearr_22026_22059[(2)] = inst_22016);

(statearr_22026_22059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (13))){
var inst_22009 = cljs.core.async.close_BANG_.call(null,out);
var state_22020__$1 = state_22020;
var statearr_22027_22060 = state_22020__$1;
(statearr_22027_22060[(2)] = inst_22009);

(statearr_22027_22060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (6))){
var state_22020__$1 = state_22020;
var statearr_22028_22061 = state_22020__$1;
(statearr_22028_22061[(2)] = null);

(statearr_22028_22061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (3))){
var inst_22018 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22020__$1,inst_22018);
} else {
if((state_val_22021 === (12))){
var inst_22006 = (state_22020[(8)]);
var inst_22006__$1 = (state_22020[(2)]);
var inst_22007 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22006__$1);
var state_22020__$1 = (function (){var statearr_22029 = state_22020;
(statearr_22029[(8)] = inst_22006__$1);

return statearr_22029;
})();
if(cljs.core.truth_(inst_22007)){
var statearr_22030_22062 = state_22020__$1;
(statearr_22030_22062[(1)] = (13));

} else {
var statearr_22031_22063 = state_22020__$1;
(statearr_22031_22063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (2))){
var inst_21983 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21984 = (0);
var state_22020__$1 = (function (){var statearr_22032 = state_22020;
(statearr_22032[(7)] = inst_21984);

(statearr_22032[(9)] = inst_21983);

return statearr_22032;
})();
var statearr_22033_22064 = state_22020__$1;
(statearr_22033_22064[(2)] = null);

(statearr_22033_22064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (11))){
var inst_21984 = (state_22020[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22020,(10),Object,null,(9));
var inst_21993 = chs__$1.call(null,inst_21984);
var inst_21994 = done.call(null,inst_21984);
var inst_21995 = cljs.core.async.take_BANG_.call(null,inst_21993,inst_21994);
var state_22020__$1 = state_22020;
var statearr_22034_22065 = state_22020__$1;
(statearr_22034_22065[(2)] = inst_21995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (9))){
var inst_21984 = (state_22020[(7)]);
var inst_21997 = (state_22020[(2)]);
var inst_21998 = (inst_21984 + (1));
var inst_21984__$1 = inst_21998;
var state_22020__$1 = (function (){var statearr_22035 = state_22020;
(statearr_22035[(7)] = inst_21984__$1);

(statearr_22035[(10)] = inst_21997);

return statearr_22035;
})();
var statearr_22036_22066 = state_22020__$1;
(statearr_22036_22066[(2)] = null);

(statearr_22036_22066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (5))){
var inst_22004 = (state_22020[(2)]);
var state_22020__$1 = (function (){var statearr_22037 = state_22020;
(statearr_22037[(11)] = inst_22004);

return statearr_22037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22020__$1,(12),dchan);
} else {
if((state_val_22021 === (14))){
var inst_22006 = (state_22020[(8)]);
var inst_22011 = cljs.core.apply.call(null,f,inst_22006);
var state_22020__$1 = state_22020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22020__$1,(16),out,inst_22011);
} else {
if((state_val_22021 === (16))){
var inst_22013 = (state_22020[(2)]);
var state_22020__$1 = (function (){var statearr_22038 = state_22020;
(statearr_22038[(12)] = inst_22013);

return statearr_22038;
})();
var statearr_22039_22067 = state_22020__$1;
(statearr_22039_22067[(2)] = null);

(statearr_22039_22067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (10))){
var inst_21988 = (state_22020[(2)]);
var inst_21989 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22020__$1 = (function (){var statearr_22040 = state_22020;
(statearr_22040[(13)] = inst_21988);

return statearr_22040;
})();
var statearr_22041_22068 = state_22020__$1;
(statearr_22041_22068[(2)] = inst_21989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (8))){
var inst_22002 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
var statearr_22042_22069 = state_22020__$1;
(statearr_22042_22069[(2)] = inst_22002);

(statearr_22042_22069[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19923__auto__,c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22046[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22046[(1)] = (1));

return statearr_22046;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22020){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22047){if((e22047 instanceof Object)){
var ex__19927__auto__ = e22047;
var statearr_22048_22070 = state_22020;
(statearr_22048_22070[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22071 = state_22020;
state_22020 = G__22071;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20037__auto__ = (function (){var statearr_22049 = f__20036__auto__.call(null);
(statearr_22049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22054);

return statearr_22049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22054,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22073 = [];
var len__6226__auto___22129 = arguments.length;
var i__6227__auto___22130 = (0);
while(true){
if((i__6227__auto___22130 < len__6226__auto___22129)){
args22073.push((arguments[i__6227__auto___22130]));

var G__22131 = (i__6227__auto___22130 + (1));
i__6227__auto___22130 = G__22131;
continue;
} else {
}
break;
}

var G__22075 = args22073.length;
switch (G__22075) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22073.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22133,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22133,out){
return (function (state_22105){
var state_val_22106 = (state_22105[(1)]);
if((state_val_22106 === (7))){
var inst_22085 = (state_22105[(7)]);
var inst_22084 = (state_22105[(8)]);
var inst_22084__$1 = (state_22105[(2)]);
var inst_22085__$1 = cljs.core.nth.call(null,inst_22084__$1,(0),null);
var inst_22086 = cljs.core.nth.call(null,inst_22084__$1,(1),null);
var inst_22087 = (inst_22085__$1 == null);
var state_22105__$1 = (function (){var statearr_22107 = state_22105;
(statearr_22107[(9)] = inst_22086);

(statearr_22107[(7)] = inst_22085__$1);

(statearr_22107[(8)] = inst_22084__$1);

return statearr_22107;
})();
if(cljs.core.truth_(inst_22087)){
var statearr_22108_22134 = state_22105__$1;
(statearr_22108_22134[(1)] = (8));

} else {
var statearr_22109_22135 = state_22105__$1;
(statearr_22109_22135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (1))){
var inst_22076 = cljs.core.vec.call(null,chs);
var inst_22077 = inst_22076;
var state_22105__$1 = (function (){var statearr_22110 = state_22105;
(statearr_22110[(10)] = inst_22077);

return statearr_22110;
})();
var statearr_22111_22136 = state_22105__$1;
(statearr_22111_22136[(2)] = null);

(statearr_22111_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (4))){
var inst_22077 = (state_22105[(10)]);
var state_22105__$1 = state_22105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22105__$1,(7),inst_22077);
} else {
if((state_val_22106 === (6))){
var inst_22101 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22112_22137 = state_22105__$1;
(statearr_22112_22137[(2)] = inst_22101);

(statearr_22112_22137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (3))){
var inst_22103 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22105__$1,inst_22103);
} else {
if((state_val_22106 === (2))){
var inst_22077 = (state_22105[(10)]);
var inst_22079 = cljs.core.count.call(null,inst_22077);
var inst_22080 = (inst_22079 > (0));
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22080)){
var statearr_22114_22138 = state_22105__$1;
(statearr_22114_22138[(1)] = (4));

} else {
var statearr_22115_22139 = state_22105__$1;
(statearr_22115_22139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (11))){
var inst_22077 = (state_22105[(10)]);
var inst_22094 = (state_22105[(2)]);
var tmp22113 = inst_22077;
var inst_22077__$1 = tmp22113;
var state_22105__$1 = (function (){var statearr_22116 = state_22105;
(statearr_22116[(10)] = inst_22077__$1);

(statearr_22116[(11)] = inst_22094);

return statearr_22116;
})();
var statearr_22117_22140 = state_22105__$1;
(statearr_22117_22140[(2)] = null);

(statearr_22117_22140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (9))){
var inst_22085 = (state_22105[(7)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22105__$1,(11),out,inst_22085);
} else {
if((state_val_22106 === (5))){
var inst_22099 = cljs.core.async.close_BANG_.call(null,out);
var state_22105__$1 = state_22105;
var statearr_22118_22141 = state_22105__$1;
(statearr_22118_22141[(2)] = inst_22099);

(statearr_22118_22141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (10))){
var inst_22097 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22119_22142 = state_22105__$1;
(statearr_22119_22142[(2)] = inst_22097);

(statearr_22119_22142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (8))){
var inst_22086 = (state_22105[(9)]);
var inst_22077 = (state_22105[(10)]);
var inst_22085 = (state_22105[(7)]);
var inst_22084 = (state_22105[(8)]);
var inst_22089 = (function (){var cs = inst_22077;
var vec__22082 = inst_22084;
var v = inst_22085;
var c = inst_22086;
return ((function (cs,vec__22082,v,c,inst_22086,inst_22077,inst_22085,inst_22084,state_val_22106,c__20035__auto___22133,out){
return (function (p1__22072_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22072_SHARP_);
});
;})(cs,vec__22082,v,c,inst_22086,inst_22077,inst_22085,inst_22084,state_val_22106,c__20035__auto___22133,out))
})();
var inst_22090 = cljs.core.filterv.call(null,inst_22089,inst_22077);
var inst_22077__$1 = inst_22090;
var state_22105__$1 = (function (){var statearr_22120 = state_22105;
(statearr_22120[(10)] = inst_22077__$1);

return statearr_22120;
})();
var statearr_22121_22143 = state_22105__$1;
(statearr_22121_22143[(2)] = null);

(statearr_22121_22143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22133,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22133,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22125[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22125[(1)] = (1));

return statearr_22125;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22105){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22126){if((e22126 instanceof Object)){
var ex__19927__auto__ = e22126;
var statearr_22127_22144 = state_22105;
(statearr_22127_22144[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22145 = state_22105;
state_22105 = G__22145;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22133,out))
})();
var state__20037__auto__ = (function (){var statearr_22128 = f__20036__auto__.call(null);
(statearr_22128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22133);

return statearr_22128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22133,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22146 = [];
var len__6226__auto___22195 = arguments.length;
var i__6227__auto___22196 = (0);
while(true){
if((i__6227__auto___22196 < len__6226__auto___22195)){
args22146.push((arguments[i__6227__auto___22196]));

var G__22197 = (i__6227__auto___22196 + (1));
i__6227__auto___22196 = G__22197;
continue;
} else {
}
break;
}

var G__22148 = args22146.length;
switch (G__22148) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22146.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22199,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22199,out){
return (function (state_22172){
var state_val_22173 = (state_22172[(1)]);
if((state_val_22173 === (7))){
var inst_22154 = (state_22172[(7)]);
var inst_22154__$1 = (state_22172[(2)]);
var inst_22155 = (inst_22154__$1 == null);
var inst_22156 = cljs.core.not.call(null,inst_22155);
var state_22172__$1 = (function (){var statearr_22174 = state_22172;
(statearr_22174[(7)] = inst_22154__$1);

return statearr_22174;
})();
if(inst_22156){
var statearr_22175_22200 = state_22172__$1;
(statearr_22175_22200[(1)] = (8));

} else {
var statearr_22176_22201 = state_22172__$1;
(statearr_22176_22201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (1))){
var inst_22149 = (0);
var state_22172__$1 = (function (){var statearr_22177 = state_22172;
(statearr_22177[(8)] = inst_22149);

return statearr_22177;
})();
var statearr_22178_22202 = state_22172__$1;
(statearr_22178_22202[(2)] = null);

(statearr_22178_22202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (4))){
var state_22172__$1 = state_22172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22172__$1,(7),ch);
} else {
if((state_val_22173 === (6))){
var inst_22167 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22179_22203 = state_22172__$1;
(statearr_22179_22203[(2)] = inst_22167);

(statearr_22179_22203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (3))){
var inst_22169 = (state_22172[(2)]);
var inst_22170 = cljs.core.async.close_BANG_.call(null,out);
var state_22172__$1 = (function (){var statearr_22180 = state_22172;
(statearr_22180[(9)] = inst_22169);

return statearr_22180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22172__$1,inst_22170);
} else {
if((state_val_22173 === (2))){
var inst_22149 = (state_22172[(8)]);
var inst_22151 = (inst_22149 < n);
var state_22172__$1 = state_22172;
if(cljs.core.truth_(inst_22151)){
var statearr_22181_22204 = state_22172__$1;
(statearr_22181_22204[(1)] = (4));

} else {
var statearr_22182_22205 = state_22172__$1;
(statearr_22182_22205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (11))){
var inst_22149 = (state_22172[(8)]);
var inst_22159 = (state_22172[(2)]);
var inst_22160 = (inst_22149 + (1));
var inst_22149__$1 = inst_22160;
var state_22172__$1 = (function (){var statearr_22183 = state_22172;
(statearr_22183[(8)] = inst_22149__$1);

(statearr_22183[(10)] = inst_22159);

return statearr_22183;
})();
var statearr_22184_22206 = state_22172__$1;
(statearr_22184_22206[(2)] = null);

(statearr_22184_22206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (9))){
var state_22172__$1 = state_22172;
var statearr_22185_22207 = state_22172__$1;
(statearr_22185_22207[(2)] = null);

(statearr_22185_22207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (5))){
var state_22172__$1 = state_22172;
var statearr_22186_22208 = state_22172__$1;
(statearr_22186_22208[(2)] = null);

(statearr_22186_22208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (10))){
var inst_22164 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22187_22209 = state_22172__$1;
(statearr_22187_22209[(2)] = inst_22164);

(statearr_22187_22209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (8))){
var inst_22154 = (state_22172[(7)]);
var state_22172__$1 = state_22172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22172__$1,(11),out,inst_22154);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22199,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22199,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22191[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22191[(1)] = (1));

return statearr_22191;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22172){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22192){if((e22192 instanceof Object)){
var ex__19927__auto__ = e22192;
var statearr_22193_22210 = state_22172;
(statearr_22193_22210[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22211 = state_22172;
state_22172 = G__22211;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22199,out))
})();
var state__20037__auto__ = (function (){var statearr_22194 = f__20036__auto__.call(null);
(statearr_22194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22199);

return statearr_22194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22199,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22219 = (function (map_LT_,f,ch,meta22220){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22220 = meta22220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22221,meta22220__$1){
var self__ = this;
var _22221__$1 = this;
return (new cljs.core.async.t_cljs$core$async22219(self__.map_LT_,self__.f,self__.ch,meta22220__$1));
});

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22221){
var self__ = this;
var _22221__$1 = this;
return self__.meta22220;
});

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22222 = (function (map_LT_,f,ch,meta22220,_,fn1,meta22223){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22220 = meta22220;
this._ = _;
this.fn1 = fn1;
this.meta22223 = meta22223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22224,meta22223__$1){
var self__ = this;
var _22224__$1 = this;
return (new cljs.core.async.t_cljs$core$async22222(self__.map_LT_,self__.f,self__.ch,self__.meta22220,self__._,self__.fn1,meta22223__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22224){
var self__ = this;
var _22224__$1 = this;
return self__.meta22223;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22212_SHARP_){
return f1.call(null,(((p1__22212_SHARP_ == null))?null:self__.f.call(null,p1__22212_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22220","meta22220",-530111522,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22219","cljs.core.async/t_cljs$core$async22219",2029657848,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22223","meta22223",1645101748,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22222";

cljs.core.async.t_cljs$core$async22222.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async22222");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22222 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22222(map_LT___$1,f__$1,ch__$1,meta22220__$1,___$2,fn1__$1,meta22223){
return (new cljs.core.async.t_cljs$core$async22222(map_LT___$1,f__$1,ch__$1,meta22220__$1,___$2,fn1__$1,meta22223));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22222(self__.map_LT_,self__.f,self__.ch,self__.meta22220,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22220","meta22220",-530111522,null)], null);
});

cljs.core.async.t_cljs$core$async22219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22219";

cljs.core.async.t_cljs$core$async22219.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async22219");
});

cljs.core.async.__GT_t_cljs$core$async22219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22219(map_LT___$1,f__$1,ch__$1,meta22220){
return (new cljs.core.async.t_cljs$core$async22219(map_LT___$1,f__$1,ch__$1,meta22220));
});

}

return (new cljs.core.async.t_cljs$core$async22219(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22228 = (function (map_GT_,f,ch,meta22229){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22229 = meta22229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22230,meta22229__$1){
var self__ = this;
var _22230__$1 = this;
return (new cljs.core.async.t_cljs$core$async22228(self__.map_GT_,self__.f,self__.ch,meta22229__$1));
});

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22230){
var self__ = this;
var _22230__$1 = this;
return self__.meta22229;
});

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22229","meta22229",486951897,null)], null);
});

cljs.core.async.t_cljs$core$async22228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22228";

cljs.core.async.t_cljs$core$async22228.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async22228");
});

cljs.core.async.__GT_t_cljs$core$async22228 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22228(map_GT___$1,f__$1,ch__$1,meta22229){
return (new cljs.core.async.t_cljs$core$async22228(map_GT___$1,f__$1,ch__$1,meta22229));
});

}

return (new cljs.core.async.t_cljs$core$async22228(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22234 = (function (filter_GT_,p,ch,meta22235){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22235 = meta22235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22236,meta22235__$1){
var self__ = this;
var _22236__$1 = this;
return (new cljs.core.async.t_cljs$core$async22234(self__.filter_GT_,self__.p,self__.ch,meta22235__$1));
});

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22236){
var self__ = this;
var _22236__$1 = this;
return self__.meta22235;
});

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22235","meta22235",938466769,null)], null);
});

cljs.core.async.t_cljs$core$async22234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22234";

cljs.core.async.t_cljs$core$async22234.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async22234");
});

cljs.core.async.__GT_t_cljs$core$async22234 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22234(filter_GT___$1,p__$1,ch__$1,meta22235){
return (new cljs.core.async.t_cljs$core$async22234(filter_GT___$1,p__$1,ch__$1,meta22235));
});

}

return (new cljs.core.async.t_cljs$core$async22234(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22237 = [];
var len__6226__auto___22281 = arguments.length;
var i__6227__auto___22282 = (0);
while(true){
if((i__6227__auto___22282 < len__6226__auto___22281)){
args22237.push((arguments[i__6227__auto___22282]));

var G__22283 = (i__6227__auto___22282 + (1));
i__6227__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var G__22239 = args22237.length;
switch (G__22239) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22237.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22285,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22285,out){
return (function (state_22260){
var state_val_22261 = (state_22260[(1)]);
if((state_val_22261 === (7))){
var inst_22256 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22262_22286 = state_22260__$1;
(statearr_22262_22286[(2)] = inst_22256);

(statearr_22262_22286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (1))){
var state_22260__$1 = state_22260;
var statearr_22263_22287 = state_22260__$1;
(statearr_22263_22287[(2)] = null);

(statearr_22263_22287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (4))){
var inst_22242 = (state_22260[(7)]);
var inst_22242__$1 = (state_22260[(2)]);
var inst_22243 = (inst_22242__$1 == null);
var state_22260__$1 = (function (){var statearr_22264 = state_22260;
(statearr_22264[(7)] = inst_22242__$1);

return statearr_22264;
})();
if(cljs.core.truth_(inst_22243)){
var statearr_22265_22288 = state_22260__$1;
(statearr_22265_22288[(1)] = (5));

} else {
var statearr_22266_22289 = state_22260__$1;
(statearr_22266_22289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (6))){
var inst_22242 = (state_22260[(7)]);
var inst_22247 = p.call(null,inst_22242);
var state_22260__$1 = state_22260;
if(cljs.core.truth_(inst_22247)){
var statearr_22267_22290 = state_22260__$1;
(statearr_22267_22290[(1)] = (8));

} else {
var statearr_22268_22291 = state_22260__$1;
(statearr_22268_22291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (3))){
var inst_22258 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22260__$1,inst_22258);
} else {
if((state_val_22261 === (2))){
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22260__$1,(4),ch);
} else {
if((state_val_22261 === (11))){
var inst_22250 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22269_22292 = state_22260__$1;
(statearr_22269_22292[(2)] = inst_22250);

(statearr_22269_22292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (9))){
var state_22260__$1 = state_22260;
var statearr_22270_22293 = state_22260__$1;
(statearr_22270_22293[(2)] = null);

(statearr_22270_22293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (5))){
var inst_22245 = cljs.core.async.close_BANG_.call(null,out);
var state_22260__$1 = state_22260;
var statearr_22271_22294 = state_22260__$1;
(statearr_22271_22294[(2)] = inst_22245);

(statearr_22271_22294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (10))){
var inst_22253 = (state_22260[(2)]);
var state_22260__$1 = (function (){var statearr_22272 = state_22260;
(statearr_22272[(8)] = inst_22253);

return statearr_22272;
})();
var statearr_22273_22295 = state_22260__$1;
(statearr_22273_22295[(2)] = null);

(statearr_22273_22295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (8))){
var inst_22242 = (state_22260[(7)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22260__$1,(11),out,inst_22242);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22285,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22285,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22277 = [null,null,null,null,null,null,null,null,null];
(statearr_22277[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22277[(1)] = (1));

return statearr_22277;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22260){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22278){if((e22278 instanceof Object)){
var ex__19927__auto__ = e22278;
var statearr_22279_22296 = state_22260;
(statearr_22279_22296[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22297 = state_22260;
state_22260 = G__22297;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22285,out))
})();
var state__20037__auto__ = (function (){var statearr_22280 = f__20036__auto__.call(null);
(statearr_22280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22285);

return statearr_22280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22285,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22298 = [];
var len__6226__auto___22301 = arguments.length;
var i__6227__auto___22302 = (0);
while(true){
if((i__6227__auto___22302 < len__6226__auto___22301)){
args22298.push((arguments[i__6227__auto___22302]));

var G__22303 = (i__6227__auto___22302 + (1));
i__6227__auto___22302 = G__22303;
continue;
} else {
}
break;
}

var G__22300 = args22298.length;
switch (G__22300) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22298.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto__){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto__){
return (function (state_22470){
var state_val_22471 = (state_22470[(1)]);
if((state_val_22471 === (7))){
var inst_22466 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22472_22513 = state_22470__$1;
(statearr_22472_22513[(2)] = inst_22466);

(statearr_22472_22513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (20))){
var inst_22436 = (state_22470[(7)]);
var inst_22447 = (state_22470[(2)]);
var inst_22448 = cljs.core.next.call(null,inst_22436);
var inst_22422 = inst_22448;
var inst_22423 = null;
var inst_22424 = (0);
var inst_22425 = (0);
var state_22470__$1 = (function (){var statearr_22473 = state_22470;
(statearr_22473[(8)] = inst_22422);

(statearr_22473[(9)] = inst_22423);

(statearr_22473[(10)] = inst_22447);

(statearr_22473[(11)] = inst_22424);

(statearr_22473[(12)] = inst_22425);

return statearr_22473;
})();
var statearr_22474_22514 = state_22470__$1;
(statearr_22474_22514[(2)] = null);

(statearr_22474_22514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (1))){
var state_22470__$1 = state_22470;
var statearr_22475_22515 = state_22470__$1;
(statearr_22475_22515[(2)] = null);

(statearr_22475_22515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (4))){
var inst_22411 = (state_22470[(13)]);
var inst_22411__$1 = (state_22470[(2)]);
var inst_22412 = (inst_22411__$1 == null);
var state_22470__$1 = (function (){var statearr_22476 = state_22470;
(statearr_22476[(13)] = inst_22411__$1);

return statearr_22476;
})();
if(cljs.core.truth_(inst_22412)){
var statearr_22477_22516 = state_22470__$1;
(statearr_22477_22516[(1)] = (5));

} else {
var statearr_22478_22517 = state_22470__$1;
(statearr_22478_22517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (15))){
var state_22470__$1 = state_22470;
var statearr_22482_22518 = state_22470__$1;
(statearr_22482_22518[(2)] = null);

(statearr_22482_22518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (21))){
var state_22470__$1 = state_22470;
var statearr_22483_22519 = state_22470__$1;
(statearr_22483_22519[(2)] = null);

(statearr_22483_22519[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (13))){
var inst_22422 = (state_22470[(8)]);
var inst_22423 = (state_22470[(9)]);
var inst_22424 = (state_22470[(11)]);
var inst_22425 = (state_22470[(12)]);
var inst_22432 = (state_22470[(2)]);
var inst_22433 = (inst_22425 + (1));
var tmp22479 = inst_22422;
var tmp22480 = inst_22423;
var tmp22481 = inst_22424;
var inst_22422__$1 = tmp22479;
var inst_22423__$1 = tmp22480;
var inst_22424__$1 = tmp22481;
var inst_22425__$1 = inst_22433;
var state_22470__$1 = (function (){var statearr_22484 = state_22470;
(statearr_22484[(8)] = inst_22422__$1);

(statearr_22484[(9)] = inst_22423__$1);

(statearr_22484[(11)] = inst_22424__$1);

(statearr_22484[(12)] = inst_22425__$1);

(statearr_22484[(14)] = inst_22432);

return statearr_22484;
})();
var statearr_22485_22520 = state_22470__$1;
(statearr_22485_22520[(2)] = null);

(statearr_22485_22520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (22))){
var state_22470__$1 = state_22470;
var statearr_22486_22521 = state_22470__$1;
(statearr_22486_22521[(2)] = null);

(statearr_22486_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (6))){
var inst_22411 = (state_22470[(13)]);
var inst_22420 = f.call(null,inst_22411);
var inst_22421 = cljs.core.seq.call(null,inst_22420);
var inst_22422 = inst_22421;
var inst_22423 = null;
var inst_22424 = (0);
var inst_22425 = (0);
var state_22470__$1 = (function (){var statearr_22487 = state_22470;
(statearr_22487[(8)] = inst_22422);

(statearr_22487[(9)] = inst_22423);

(statearr_22487[(11)] = inst_22424);

(statearr_22487[(12)] = inst_22425);

return statearr_22487;
})();
var statearr_22488_22522 = state_22470__$1;
(statearr_22488_22522[(2)] = null);

(statearr_22488_22522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (17))){
var inst_22436 = (state_22470[(7)]);
var inst_22440 = cljs.core.chunk_first.call(null,inst_22436);
var inst_22441 = cljs.core.chunk_rest.call(null,inst_22436);
var inst_22442 = cljs.core.count.call(null,inst_22440);
var inst_22422 = inst_22441;
var inst_22423 = inst_22440;
var inst_22424 = inst_22442;
var inst_22425 = (0);
var state_22470__$1 = (function (){var statearr_22489 = state_22470;
(statearr_22489[(8)] = inst_22422);

(statearr_22489[(9)] = inst_22423);

(statearr_22489[(11)] = inst_22424);

(statearr_22489[(12)] = inst_22425);

return statearr_22489;
})();
var statearr_22490_22523 = state_22470__$1;
(statearr_22490_22523[(2)] = null);

(statearr_22490_22523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (3))){
var inst_22468 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22470__$1,inst_22468);
} else {
if((state_val_22471 === (12))){
var inst_22456 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22491_22524 = state_22470__$1;
(statearr_22491_22524[(2)] = inst_22456);

(statearr_22491_22524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (2))){
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22470__$1,(4),in$);
} else {
if((state_val_22471 === (23))){
var inst_22464 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22492_22525 = state_22470__$1;
(statearr_22492_22525[(2)] = inst_22464);

(statearr_22492_22525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (19))){
var inst_22451 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22493_22526 = state_22470__$1;
(statearr_22493_22526[(2)] = inst_22451);

(statearr_22493_22526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (11))){
var inst_22422 = (state_22470[(8)]);
var inst_22436 = (state_22470[(7)]);
var inst_22436__$1 = cljs.core.seq.call(null,inst_22422);
var state_22470__$1 = (function (){var statearr_22494 = state_22470;
(statearr_22494[(7)] = inst_22436__$1);

return statearr_22494;
})();
if(inst_22436__$1){
var statearr_22495_22527 = state_22470__$1;
(statearr_22495_22527[(1)] = (14));

} else {
var statearr_22496_22528 = state_22470__$1;
(statearr_22496_22528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (9))){
var inst_22458 = (state_22470[(2)]);
var inst_22459 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22470__$1 = (function (){var statearr_22497 = state_22470;
(statearr_22497[(15)] = inst_22458);

return statearr_22497;
})();
if(cljs.core.truth_(inst_22459)){
var statearr_22498_22529 = state_22470__$1;
(statearr_22498_22529[(1)] = (21));

} else {
var statearr_22499_22530 = state_22470__$1;
(statearr_22499_22530[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (5))){
var inst_22414 = cljs.core.async.close_BANG_.call(null,out);
var state_22470__$1 = state_22470;
var statearr_22500_22531 = state_22470__$1;
(statearr_22500_22531[(2)] = inst_22414);

(statearr_22500_22531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (14))){
var inst_22436 = (state_22470[(7)]);
var inst_22438 = cljs.core.chunked_seq_QMARK_.call(null,inst_22436);
var state_22470__$1 = state_22470;
if(inst_22438){
var statearr_22501_22532 = state_22470__$1;
(statearr_22501_22532[(1)] = (17));

} else {
var statearr_22502_22533 = state_22470__$1;
(statearr_22502_22533[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (16))){
var inst_22454 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22503_22534 = state_22470__$1;
(statearr_22503_22534[(2)] = inst_22454);

(statearr_22503_22534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (10))){
var inst_22423 = (state_22470[(9)]);
var inst_22425 = (state_22470[(12)]);
var inst_22430 = cljs.core._nth.call(null,inst_22423,inst_22425);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22470__$1,(13),out,inst_22430);
} else {
if((state_val_22471 === (18))){
var inst_22436 = (state_22470[(7)]);
var inst_22445 = cljs.core.first.call(null,inst_22436);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22470__$1,(20),out,inst_22445);
} else {
if((state_val_22471 === (8))){
var inst_22424 = (state_22470[(11)]);
var inst_22425 = (state_22470[(12)]);
var inst_22427 = (inst_22425 < inst_22424);
var inst_22428 = inst_22427;
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22428)){
var statearr_22504_22535 = state_22470__$1;
(statearr_22504_22535[(1)] = (10));

} else {
var statearr_22505_22536 = state_22470__$1;
(statearr_22505_22536[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto__))
;
return ((function (switch__19923__auto__,c__20035__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____0 = (function (){
var statearr_22509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22509[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__);

(statearr_22509[(1)] = (1));

return statearr_22509;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____1 = (function (state_22470){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22510){if((e22510 instanceof Object)){
var ex__19927__auto__ = e22510;
var statearr_22511_22537 = state_22470;
(statearr_22511_22537[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22538 = state_22470;
state_22470 = G__22538;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__ = function(state_22470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____1.call(this,state_22470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19924__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto__))
})();
var state__20037__auto__ = (function (){var statearr_22512 = f__20036__auto__.call(null);
(statearr_22512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto__);

return statearr_22512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto__))
);

return c__20035__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22539 = [];
var len__6226__auto___22542 = arguments.length;
var i__6227__auto___22543 = (0);
while(true){
if((i__6227__auto___22543 < len__6226__auto___22542)){
args22539.push((arguments[i__6227__auto___22543]));

var G__22544 = (i__6227__auto___22543 + (1));
i__6227__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var G__22541 = args22539.length;
switch (G__22541) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22539.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22546 = [];
var len__6226__auto___22549 = arguments.length;
var i__6227__auto___22550 = (0);
while(true){
if((i__6227__auto___22550 < len__6226__auto___22549)){
args22546.push((arguments[i__6227__auto___22550]));

var G__22551 = (i__6227__auto___22550 + (1));
i__6227__auto___22550 = G__22551;
continue;
} else {
}
break;
}

var G__22548 = args22546.length;
switch (G__22548) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22546.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22553 = [];
var len__6226__auto___22604 = arguments.length;
var i__6227__auto___22605 = (0);
while(true){
if((i__6227__auto___22605 < len__6226__auto___22604)){
args22553.push((arguments[i__6227__auto___22605]));

var G__22606 = (i__6227__auto___22605 + (1));
i__6227__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var G__22555 = args22553.length;
switch (G__22555) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22553.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22608,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22608,out){
return (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (7))){
var inst_22574 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22581_22609 = state_22579__$1;
(statearr_22581_22609[(2)] = inst_22574);

(statearr_22581_22609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (1))){
var inst_22556 = null;
var state_22579__$1 = (function (){var statearr_22582 = state_22579;
(statearr_22582[(7)] = inst_22556);

return statearr_22582;
})();
var statearr_22583_22610 = state_22579__$1;
(statearr_22583_22610[(2)] = null);

(statearr_22583_22610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (4))){
var inst_22559 = (state_22579[(8)]);
var inst_22559__$1 = (state_22579[(2)]);
var inst_22560 = (inst_22559__$1 == null);
var inst_22561 = cljs.core.not.call(null,inst_22560);
var state_22579__$1 = (function (){var statearr_22584 = state_22579;
(statearr_22584[(8)] = inst_22559__$1);

return statearr_22584;
})();
if(inst_22561){
var statearr_22585_22611 = state_22579__$1;
(statearr_22585_22611[(1)] = (5));

} else {
var statearr_22586_22612 = state_22579__$1;
(statearr_22586_22612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (6))){
var state_22579__$1 = state_22579;
var statearr_22587_22613 = state_22579__$1;
(statearr_22587_22613[(2)] = null);

(statearr_22587_22613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (3))){
var inst_22576 = (state_22579[(2)]);
var inst_22577 = cljs.core.async.close_BANG_.call(null,out);
var state_22579__$1 = (function (){var statearr_22588 = state_22579;
(statearr_22588[(9)] = inst_22576);

return statearr_22588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (2))){
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22579__$1,(4),ch);
} else {
if((state_val_22580 === (11))){
var inst_22559 = (state_22579[(8)]);
var inst_22568 = (state_22579[(2)]);
var inst_22556 = inst_22559;
var state_22579__$1 = (function (){var statearr_22589 = state_22579;
(statearr_22589[(7)] = inst_22556);

(statearr_22589[(10)] = inst_22568);

return statearr_22589;
})();
var statearr_22590_22614 = state_22579__$1;
(statearr_22590_22614[(2)] = null);

(statearr_22590_22614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (9))){
var inst_22559 = (state_22579[(8)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22579__$1,(11),out,inst_22559);
} else {
if((state_val_22580 === (5))){
var inst_22559 = (state_22579[(8)]);
var inst_22556 = (state_22579[(7)]);
var inst_22563 = cljs.core._EQ_.call(null,inst_22559,inst_22556);
var state_22579__$1 = state_22579;
if(inst_22563){
var statearr_22592_22615 = state_22579__$1;
(statearr_22592_22615[(1)] = (8));

} else {
var statearr_22593_22616 = state_22579__$1;
(statearr_22593_22616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (10))){
var inst_22571 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22594_22617 = state_22579__$1;
(statearr_22594_22617[(2)] = inst_22571);

(statearr_22594_22617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (8))){
var inst_22556 = (state_22579[(7)]);
var tmp22591 = inst_22556;
var inst_22556__$1 = tmp22591;
var state_22579__$1 = (function (){var statearr_22595 = state_22579;
(statearr_22595[(7)] = inst_22556__$1);

return statearr_22595;
})();
var statearr_22596_22618 = state_22579__$1;
(statearr_22596_22618[(2)] = null);

(statearr_22596_22618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22608,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22608,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22600[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22600[(1)] = (1));

return statearr_22600;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22579){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22601){if((e22601 instanceof Object)){
var ex__19927__auto__ = e22601;
var statearr_22602_22619 = state_22579;
(statearr_22602_22619[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22620 = state_22579;
state_22579 = G__22620;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22608,out))
})();
var state__20037__auto__ = (function (){var statearr_22603 = f__20036__auto__.call(null);
(statearr_22603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22608);

return statearr_22603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22608,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22621 = [];
var len__6226__auto___22691 = arguments.length;
var i__6227__auto___22692 = (0);
while(true){
if((i__6227__auto___22692 < len__6226__auto___22691)){
args22621.push((arguments[i__6227__auto___22692]));

var G__22693 = (i__6227__auto___22692 + (1));
i__6227__auto___22692 = G__22693;
continue;
} else {
}
break;
}

var G__22623 = args22621.length;
switch (G__22623) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22621.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22695,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22695,out){
return (function (state_22661){
var state_val_22662 = (state_22661[(1)]);
if((state_val_22662 === (7))){
var inst_22657 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
var statearr_22663_22696 = state_22661__$1;
(statearr_22663_22696[(2)] = inst_22657);

(statearr_22663_22696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (1))){
var inst_22624 = (new Array(n));
var inst_22625 = inst_22624;
var inst_22626 = (0);
var state_22661__$1 = (function (){var statearr_22664 = state_22661;
(statearr_22664[(7)] = inst_22626);

(statearr_22664[(8)] = inst_22625);

return statearr_22664;
})();
var statearr_22665_22697 = state_22661__$1;
(statearr_22665_22697[(2)] = null);

(statearr_22665_22697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (4))){
var inst_22629 = (state_22661[(9)]);
var inst_22629__$1 = (state_22661[(2)]);
var inst_22630 = (inst_22629__$1 == null);
var inst_22631 = cljs.core.not.call(null,inst_22630);
var state_22661__$1 = (function (){var statearr_22666 = state_22661;
(statearr_22666[(9)] = inst_22629__$1);

return statearr_22666;
})();
if(inst_22631){
var statearr_22667_22698 = state_22661__$1;
(statearr_22667_22698[(1)] = (5));

} else {
var statearr_22668_22699 = state_22661__$1;
(statearr_22668_22699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (15))){
var inst_22651 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
var statearr_22669_22700 = state_22661__$1;
(statearr_22669_22700[(2)] = inst_22651);

(statearr_22669_22700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (13))){
var state_22661__$1 = state_22661;
var statearr_22670_22701 = state_22661__$1;
(statearr_22670_22701[(2)] = null);

(statearr_22670_22701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (6))){
var inst_22626 = (state_22661[(7)]);
var inst_22647 = (inst_22626 > (0));
var state_22661__$1 = state_22661;
if(cljs.core.truth_(inst_22647)){
var statearr_22671_22702 = state_22661__$1;
(statearr_22671_22702[(1)] = (12));

} else {
var statearr_22672_22703 = state_22661__$1;
(statearr_22672_22703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (3))){
var inst_22659 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22661__$1,inst_22659);
} else {
if((state_val_22662 === (12))){
var inst_22625 = (state_22661[(8)]);
var inst_22649 = cljs.core.vec.call(null,inst_22625);
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22661__$1,(15),out,inst_22649);
} else {
if((state_val_22662 === (2))){
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22661__$1,(4),ch);
} else {
if((state_val_22662 === (11))){
var inst_22641 = (state_22661[(2)]);
var inst_22642 = (new Array(n));
var inst_22625 = inst_22642;
var inst_22626 = (0);
var state_22661__$1 = (function (){var statearr_22673 = state_22661;
(statearr_22673[(7)] = inst_22626);

(statearr_22673[(8)] = inst_22625);

(statearr_22673[(10)] = inst_22641);

return statearr_22673;
})();
var statearr_22674_22704 = state_22661__$1;
(statearr_22674_22704[(2)] = null);

(statearr_22674_22704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (9))){
var inst_22625 = (state_22661[(8)]);
var inst_22639 = cljs.core.vec.call(null,inst_22625);
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22661__$1,(11),out,inst_22639);
} else {
if((state_val_22662 === (5))){
var inst_22629 = (state_22661[(9)]);
var inst_22634 = (state_22661[(11)]);
var inst_22626 = (state_22661[(7)]);
var inst_22625 = (state_22661[(8)]);
var inst_22633 = (inst_22625[inst_22626] = inst_22629);
var inst_22634__$1 = (inst_22626 + (1));
var inst_22635 = (inst_22634__$1 < n);
var state_22661__$1 = (function (){var statearr_22675 = state_22661;
(statearr_22675[(11)] = inst_22634__$1);

(statearr_22675[(12)] = inst_22633);

return statearr_22675;
})();
if(cljs.core.truth_(inst_22635)){
var statearr_22676_22705 = state_22661__$1;
(statearr_22676_22705[(1)] = (8));

} else {
var statearr_22677_22706 = state_22661__$1;
(statearr_22677_22706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (14))){
var inst_22654 = (state_22661[(2)]);
var inst_22655 = cljs.core.async.close_BANG_.call(null,out);
var state_22661__$1 = (function (){var statearr_22679 = state_22661;
(statearr_22679[(13)] = inst_22654);

return statearr_22679;
})();
var statearr_22680_22707 = state_22661__$1;
(statearr_22680_22707[(2)] = inst_22655);

(statearr_22680_22707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (10))){
var inst_22645 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
var statearr_22681_22708 = state_22661__$1;
(statearr_22681_22708[(2)] = inst_22645);

(statearr_22681_22708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22662 === (8))){
var inst_22634 = (state_22661[(11)]);
var inst_22625 = (state_22661[(8)]);
var tmp22678 = inst_22625;
var inst_22625__$1 = tmp22678;
var inst_22626 = inst_22634;
var state_22661__$1 = (function (){var statearr_22682 = state_22661;
(statearr_22682[(7)] = inst_22626);

(statearr_22682[(8)] = inst_22625__$1);

return statearr_22682;
})();
var statearr_22683_22709 = state_22661__$1;
(statearr_22683_22709[(2)] = null);

(statearr_22683_22709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22695,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22695,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22687[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22687[(1)] = (1));

return statearr_22687;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22661){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object)){
var ex__19927__auto__ = e22688;
var statearr_22689_22710 = state_22661;
(statearr_22689_22710[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22711 = state_22661;
state_22661 = G__22711;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22695,out))
})();
var state__20037__auto__ = (function (){var statearr_22690 = f__20036__auto__.call(null);
(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22695);

return statearr_22690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22695,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22712 = [];
var len__6226__auto___22786 = arguments.length;
var i__6227__auto___22787 = (0);
while(true){
if((i__6227__auto___22787 < len__6226__auto___22786)){
args22712.push((arguments[i__6227__auto___22787]));

var G__22788 = (i__6227__auto___22787 + (1));
i__6227__auto___22787 = G__22788;
continue;
} else {
}
break;
}

var G__22714 = args22712.length;
switch (G__22714) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22712.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20035__auto___22790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20035__auto___22790,out){
return (function (){
var f__20036__auto__ = (function (){var switch__19923__auto__ = ((function (c__20035__auto___22790,out){
return (function (state_22756){
var state_val_22757 = (state_22756[(1)]);
if((state_val_22757 === (7))){
var inst_22752 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22758_22791 = state_22756__$1;
(statearr_22758_22791[(2)] = inst_22752);

(statearr_22758_22791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (1))){
var inst_22715 = [];
var inst_22716 = inst_22715;
var inst_22717 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22756__$1 = (function (){var statearr_22759 = state_22756;
(statearr_22759[(7)] = inst_22717);

(statearr_22759[(8)] = inst_22716);

return statearr_22759;
})();
var statearr_22760_22792 = state_22756__$1;
(statearr_22760_22792[(2)] = null);

(statearr_22760_22792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (4))){
var inst_22720 = (state_22756[(9)]);
var inst_22720__$1 = (state_22756[(2)]);
var inst_22721 = (inst_22720__$1 == null);
var inst_22722 = cljs.core.not.call(null,inst_22721);
var state_22756__$1 = (function (){var statearr_22761 = state_22756;
(statearr_22761[(9)] = inst_22720__$1);

return statearr_22761;
})();
if(inst_22722){
var statearr_22762_22793 = state_22756__$1;
(statearr_22762_22793[(1)] = (5));

} else {
var statearr_22763_22794 = state_22756__$1;
(statearr_22763_22794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (15))){
var inst_22746 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22764_22795 = state_22756__$1;
(statearr_22764_22795[(2)] = inst_22746);

(statearr_22764_22795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (13))){
var state_22756__$1 = state_22756;
var statearr_22765_22796 = state_22756__$1;
(statearr_22765_22796[(2)] = null);

(statearr_22765_22796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (6))){
var inst_22716 = (state_22756[(8)]);
var inst_22741 = inst_22716.length;
var inst_22742 = (inst_22741 > (0));
var state_22756__$1 = state_22756;
if(cljs.core.truth_(inst_22742)){
var statearr_22766_22797 = state_22756__$1;
(statearr_22766_22797[(1)] = (12));

} else {
var statearr_22767_22798 = state_22756__$1;
(statearr_22767_22798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (3))){
var inst_22754 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22756__$1,inst_22754);
} else {
if((state_val_22757 === (12))){
var inst_22716 = (state_22756[(8)]);
var inst_22744 = cljs.core.vec.call(null,inst_22716);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22756__$1,(15),out,inst_22744);
} else {
if((state_val_22757 === (2))){
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22756__$1,(4),ch);
} else {
if((state_val_22757 === (11))){
var inst_22720 = (state_22756[(9)]);
var inst_22724 = (state_22756[(10)]);
var inst_22734 = (state_22756[(2)]);
var inst_22735 = [];
var inst_22736 = inst_22735.push(inst_22720);
var inst_22716 = inst_22735;
var inst_22717 = inst_22724;
var state_22756__$1 = (function (){var statearr_22768 = state_22756;
(statearr_22768[(11)] = inst_22734);

(statearr_22768[(7)] = inst_22717);

(statearr_22768[(8)] = inst_22716);

(statearr_22768[(12)] = inst_22736);

return statearr_22768;
})();
var statearr_22769_22799 = state_22756__$1;
(statearr_22769_22799[(2)] = null);

(statearr_22769_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (9))){
var inst_22716 = (state_22756[(8)]);
var inst_22732 = cljs.core.vec.call(null,inst_22716);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22756__$1,(11),out,inst_22732);
} else {
if((state_val_22757 === (5))){
var inst_22720 = (state_22756[(9)]);
var inst_22717 = (state_22756[(7)]);
var inst_22724 = (state_22756[(10)]);
var inst_22724__$1 = f.call(null,inst_22720);
var inst_22725 = cljs.core._EQ_.call(null,inst_22724__$1,inst_22717);
var inst_22726 = cljs.core.keyword_identical_QMARK_.call(null,inst_22717,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22727 = (inst_22725) || (inst_22726);
var state_22756__$1 = (function (){var statearr_22770 = state_22756;
(statearr_22770[(10)] = inst_22724__$1);

return statearr_22770;
})();
if(cljs.core.truth_(inst_22727)){
var statearr_22771_22800 = state_22756__$1;
(statearr_22771_22800[(1)] = (8));

} else {
var statearr_22772_22801 = state_22756__$1;
(statearr_22772_22801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (14))){
var inst_22749 = (state_22756[(2)]);
var inst_22750 = cljs.core.async.close_BANG_.call(null,out);
var state_22756__$1 = (function (){var statearr_22774 = state_22756;
(statearr_22774[(13)] = inst_22749);

return statearr_22774;
})();
var statearr_22775_22802 = state_22756__$1;
(statearr_22775_22802[(2)] = inst_22750);

(statearr_22775_22802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (10))){
var inst_22739 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22776_22803 = state_22756__$1;
(statearr_22776_22803[(2)] = inst_22739);

(statearr_22776_22803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (8))){
var inst_22720 = (state_22756[(9)]);
var inst_22724 = (state_22756[(10)]);
var inst_22716 = (state_22756[(8)]);
var inst_22729 = inst_22716.push(inst_22720);
var tmp22773 = inst_22716;
var inst_22716__$1 = tmp22773;
var inst_22717 = inst_22724;
var state_22756__$1 = (function (){var statearr_22777 = state_22756;
(statearr_22777[(7)] = inst_22717);

(statearr_22777[(8)] = inst_22716__$1);

(statearr_22777[(14)] = inst_22729);

return statearr_22777;
})();
var statearr_22778_22804 = state_22756__$1;
(statearr_22778_22804[(2)] = null);

(statearr_22778_22804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20035__auto___22790,out))
;
return ((function (switch__19923__auto__,c__20035__auto___22790,out){
return (function() {
var cljs$core$async$state_machine__19924__auto__ = null;
var cljs$core$async$state_machine__19924__auto____0 = (function (){
var statearr_22782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22782[(0)] = cljs$core$async$state_machine__19924__auto__);

(statearr_22782[(1)] = (1));

return statearr_22782;
});
var cljs$core$async$state_machine__19924__auto____1 = (function (state_22756){
while(true){
var ret_value__19925__auto__ = (function (){try{while(true){
var result__19926__auto__ = switch__19923__auto__.call(null,state_22756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19926__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object)){
var ex__19927__auto__ = e22783;
var statearr_22784_22805 = state_22756;
(statearr_22784_22805[(5)] = ex__19927__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22806 = state_22756;
state_22756 = G__22806;
continue;
} else {
return ret_value__19925__auto__;
}
break;
}
});
cljs$core$async$state_machine__19924__auto__ = function(state_22756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19924__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19924__auto____1.call(this,state_22756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19924__auto____0;
cljs$core$async$state_machine__19924__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19924__auto____1;
return cljs$core$async$state_machine__19924__auto__;
})()
;})(switch__19923__auto__,c__20035__auto___22790,out))
})();
var state__20037__auto__ = (function (){var statearr_22785 = f__20036__auto__.call(null);
(statearr_22785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20035__auto___22790);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20037__auto__);
});})(c__20035__auto___22790,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
