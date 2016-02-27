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
var args26313 = [];
var len__16608__auto___26319 = arguments.length;
var i__16609__auto___26320 = (0);
while(true){
if((i__16609__auto___26320 < len__16608__auto___26319)){
args26313.push((arguments[i__16609__auto___26320]));

var G__26321 = (i__16609__auto___26320 + (1));
i__16609__auto___26320 = G__26321;
continue;
} else {
}
break;
}

var G__26315 = args26313.length;
switch (G__26315) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26313.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26316 = (function (f,blockable,meta26317){
this.f = f;
this.blockable = blockable;
this.meta26317 = meta26317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26318,meta26317__$1){
var self__ = this;
var _26318__$1 = this;
return (new cljs.core.async.t_cljs$core$async26316(self__.f,self__.blockable,meta26317__$1));
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26318){
var self__ = this;
var _26318__$1 = this;
return self__.meta26317;
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26317","meta26317",-2019281054,null)], null);
});

cljs.core.async.t_cljs$core$async26316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26316";

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorPrWriter = (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async26316");
});

cljs.core.async.__GT_t_cljs$core$async26316 = (function cljs$core$async$__GT_t_cljs$core$async26316(f__$1,blockable__$1,meta26317){
return (new cljs.core.async.t_cljs$core$async26316(f__$1,blockable__$1,meta26317));
});

}

return (new cljs.core.async.t_cljs$core$async26316(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26325 = [];
var len__16608__auto___26328 = arguments.length;
var i__16609__auto___26329 = (0);
while(true){
if((i__16609__auto___26329 < len__16608__auto___26328)){
args26325.push((arguments[i__16609__auto___26329]));

var G__26330 = (i__16609__auto___26329 + (1));
i__16609__auto___26329 = G__26330;
continue;
} else {
}
break;
}

var G__26327 = args26325.length;
switch (G__26327) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26325.length)].join('')));

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
var args26332 = [];
var len__16608__auto___26335 = arguments.length;
var i__16609__auto___26336 = (0);
while(true){
if((i__16609__auto___26336 < len__16608__auto___26335)){
args26332.push((arguments[i__16609__auto___26336]));

var G__26337 = (i__16609__auto___26336 + (1));
i__16609__auto___26336 = G__26337;
continue;
} else {
}
break;
}

var G__26334 = args26332.length;
switch (G__26334) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26332.length)].join('')));

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
var args26339 = [];
var len__16608__auto___26342 = arguments.length;
var i__16609__auto___26343 = (0);
while(true){
if((i__16609__auto___26343 < len__16608__auto___26342)){
args26339.push((arguments[i__16609__auto___26343]));

var G__26344 = (i__16609__auto___26343 + (1));
i__16609__auto___26343 = G__26344;
continue;
} else {
}
break;
}

var G__26341 = args26339.length;
switch (G__26341) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26339.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26346 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26346);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26346,ret){
return (function (){
return fn1.call(null,val_26346);
});})(val_26346,ret))
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
var args26347 = [];
var len__16608__auto___26350 = arguments.length;
var i__16609__auto___26351 = (0);
while(true){
if((i__16609__auto___26351 < len__16608__auto___26350)){
args26347.push((arguments[i__16609__auto___26351]));

var G__26352 = (i__16609__auto___26351 + (1));
i__16609__auto___26351 = G__26352;
continue;
} else {
}
break;
}

var G__26349 = args26347.length;
switch (G__26349) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26347.length)].join('')));

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
var n__16453__auto___26354 = n;
var x_26355 = (0);
while(true){
if((x_26355 < n__16453__auto___26354)){
(a[x_26355] = (0));

var G__26356 = (x_26355 + (1));
x_26355 = G__26356;
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

var G__26357 = (i + (1));
i = G__26357;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26361 = (function (alt_flag,flag,meta26362){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26362 = meta26362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26363,meta26362__$1){
var self__ = this;
var _26363__$1 = this;
return (new cljs.core.async.t_cljs$core$async26361(self__.alt_flag,self__.flag,meta26362__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26363){
var self__ = this;
var _26363__$1 = this;
return self__.meta26362;
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26362","meta26362",1820502249,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26361";

cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async26361");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26361 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26361(alt_flag__$1,flag__$1,meta26362){
return (new cljs.core.async.t_cljs$core$async26361(alt_flag__$1,flag__$1,meta26362));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26361(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26367 = (function (alt_handler,flag,cb,meta26368){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26368 = meta26368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26369,meta26368__$1){
var self__ = this;
var _26369__$1 = this;
return (new cljs.core.async.t_cljs$core$async26367(self__.alt_handler,self__.flag,self__.cb,meta26368__$1));
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26369){
var self__ = this;
var _26369__$1 = this;
return self__.meta26368;
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26368","meta26368",1208182307,null)], null);
});

cljs.core.async.t_cljs$core$async26367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26367";

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorPrWriter = (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async26367");
});

cljs.core.async.__GT_t_cljs$core$async26367 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26367(alt_handler__$1,flag__$1,cb__$1,meta26368){
return (new cljs.core.async.t_cljs$core$async26367(alt_handler__$1,flag__$1,cb__$1,meta26368));
});

}

return (new cljs.core.async.t_cljs$core$async26367(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26370_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26371_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26371_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15550__auto__ = wport;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26372 = (i + (1));
i = G__26372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15550__auto__ = ret;
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__15538__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15538__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15538__auto__;
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
var args__16615__auto__ = [];
var len__16608__auto___26378 = arguments.length;
var i__16609__auto___26379 = (0);
while(true){
if((i__16609__auto___26379 < len__16608__auto___26378)){
args__16615__auto__.push((arguments[i__16609__auto___26379]));

var G__26380 = (i__16609__auto___26379 + (1));
i__16609__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((1) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26375){
var map__26376 = p__26375;
var map__26376__$1 = ((((!((map__26376 == null)))?((((map__26376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26376):map__26376);
var opts = map__26376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26373){
var G__26374 = cljs.core.first.call(null,seq26373);
var seq26373__$1 = cljs.core.next.call(null,seq26373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26374,seq26373__$1);
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
var args26381 = [];
var len__16608__auto___26431 = arguments.length;
var i__16609__auto___26432 = (0);
while(true){
if((i__16609__auto___26432 < len__16608__auto___26431)){
args26381.push((arguments[i__16609__auto___26432]));

var G__26433 = (i__16609__auto___26432 + (1));
i__16609__auto___26432 = G__26433;
continue;
} else {
}
break;
}

var G__26383 = args26381.length;
switch (G__26383) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26381.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23039__auto___26435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___26435){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___26435){
return (function (state_26407){
var state_val_26408 = (state_26407[(1)]);
if((state_val_26408 === (7))){
var inst_26403 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26409_26436 = state_26407__$1;
(statearr_26409_26436[(2)] = inst_26403);

(statearr_26409_26436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (1))){
var state_26407__$1 = state_26407;
var statearr_26410_26437 = state_26407__$1;
(statearr_26410_26437[(2)] = null);

(statearr_26410_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (4))){
var inst_26386 = (state_26407[(7)]);
var inst_26386__$1 = (state_26407[(2)]);
var inst_26387 = (inst_26386__$1 == null);
var state_26407__$1 = (function (){var statearr_26411 = state_26407;
(statearr_26411[(7)] = inst_26386__$1);

return statearr_26411;
})();
if(cljs.core.truth_(inst_26387)){
var statearr_26412_26438 = state_26407__$1;
(statearr_26412_26438[(1)] = (5));

} else {
var statearr_26413_26439 = state_26407__$1;
(statearr_26413_26439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (13))){
var state_26407__$1 = state_26407;
var statearr_26414_26440 = state_26407__$1;
(statearr_26414_26440[(2)] = null);

(statearr_26414_26440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (6))){
var inst_26386 = (state_26407[(7)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26407__$1,(11),to,inst_26386);
} else {
if((state_val_26408 === (3))){
var inst_26405 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26407__$1,inst_26405);
} else {
if((state_val_26408 === (12))){
var state_26407__$1 = state_26407;
var statearr_26415_26441 = state_26407__$1;
(statearr_26415_26441[(2)] = null);

(statearr_26415_26441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (2))){
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(4),from);
} else {
if((state_val_26408 === (11))){
var inst_26396 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26396)){
var statearr_26416_26442 = state_26407__$1;
(statearr_26416_26442[(1)] = (12));

} else {
var statearr_26417_26443 = state_26407__$1;
(statearr_26417_26443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (9))){
var state_26407__$1 = state_26407;
var statearr_26418_26444 = state_26407__$1;
(statearr_26418_26444[(2)] = null);

(statearr_26418_26444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (5))){
var state_26407__$1 = state_26407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26419_26445 = state_26407__$1;
(statearr_26419_26445[(1)] = (8));

} else {
var statearr_26420_26446 = state_26407__$1;
(statearr_26420_26446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (14))){
var inst_26401 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26421_26447 = state_26407__$1;
(statearr_26421_26447[(2)] = inst_26401);

(statearr_26421_26447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (10))){
var inst_26393 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26422_26448 = state_26407__$1;
(statearr_26422_26448[(2)] = inst_26393);

(statearr_26422_26448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (8))){
var inst_26390 = cljs.core.async.close_BANG_.call(null,to);
var state_26407__$1 = state_26407;
var statearr_26423_26449 = state_26407__$1;
(statearr_26423_26449[(2)] = inst_26390);

(statearr_26423_26449[(1)] = (10));


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
});})(c__23039__auto___26435))
;
return ((function (switch__22974__auto__,c__23039__auto___26435){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_26427 = [null,null,null,null,null,null,null,null];
(statearr_26427[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_26427[(1)] = (1));

return statearr_26427;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_26407){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26428){if((e26428 instanceof Object)){
var ex__22978__auto__ = e26428;
var statearr_26429_26450 = state_26407;
(statearr_26429_26450[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26451 = state_26407;
state_26407 = G__26451;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_26407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_26407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___26435))
})();
var state__23041__auto__ = (function (){var statearr_26430 = f__23040__auto__.call(null);
(statearr_26430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26435);

return statearr_26430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___26435))
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
return (function (p__26635){
var vec__26636 = p__26635;
var v = cljs.core.nth.call(null,vec__26636,(0),null);
var p = cljs.core.nth.call(null,vec__26636,(1),null);
var job = vec__26636;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23039__auto___26818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results){
return (function (state_26641){
var state_val_26642 = (state_26641[(1)]);
if((state_val_26642 === (1))){
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26641__$1,(2),res,v);
} else {
if((state_val_26642 === (2))){
var inst_26638 = (state_26641[(2)]);
var inst_26639 = cljs.core.async.close_BANG_.call(null,res);
var state_26641__$1 = (function (){var statearr_26643 = state_26641;
(statearr_26643[(7)] = inst_26638);

return statearr_26643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26641__$1,inst_26639);
} else {
return null;
}
}
});})(c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results))
;
return ((function (switch__22974__auto__,c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_26647 = [null,null,null,null,null,null,null,null];
(statearr_26647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__);

(statearr_26647[(1)] = (1));

return statearr_26647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1 = (function (state_26641){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26648){if((e26648 instanceof Object)){
var ex__22978__auto__ = e26648;
var statearr_26649_26819 = state_26641;
(statearr_26649_26819[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26820 = state_26641;
state_26641 = G__26820;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = function(state_26641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1.call(this,state_26641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results))
})();
var state__23041__auto__ = (function (){var statearr_26650 = f__23040__auto__.call(null);
(statearr_26650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26818);

return statearr_26650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___26818,res,vec__26636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26651){
var vec__26652 = p__26651;
var v = cljs.core.nth.call(null,vec__26652,(0),null);
var p = cljs.core.nth.call(null,vec__26652,(1),null);
var job = vec__26652;
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
var n__16453__auto___26821 = n;
var __26822 = (0);
while(true){
if((__26822 < n__16453__auto___26821)){
var G__26653_26823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26653_26823) {
case "compute":
var c__23039__auto___26825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26822,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (__26822,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function (state_26666){
var state_val_26667 = (state_26666[(1)]);
if((state_val_26667 === (1))){
var state_26666__$1 = state_26666;
var statearr_26668_26826 = state_26666__$1;
(statearr_26668_26826[(2)] = null);

(statearr_26668_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26667 === (2))){
var state_26666__$1 = state_26666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26666__$1,(4),jobs);
} else {
if((state_val_26667 === (3))){
var inst_26664 = (state_26666[(2)]);
var state_26666__$1 = state_26666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26666__$1,inst_26664);
} else {
if((state_val_26667 === (4))){
var inst_26656 = (state_26666[(2)]);
var inst_26657 = process.call(null,inst_26656);
var state_26666__$1 = state_26666;
if(cljs.core.truth_(inst_26657)){
var statearr_26669_26827 = state_26666__$1;
(statearr_26669_26827[(1)] = (5));

} else {
var statearr_26670_26828 = state_26666__$1;
(statearr_26670_26828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26667 === (5))){
var state_26666__$1 = state_26666;
var statearr_26671_26829 = state_26666__$1;
(statearr_26671_26829[(2)] = null);

(statearr_26671_26829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26667 === (6))){
var state_26666__$1 = state_26666;
var statearr_26672_26830 = state_26666__$1;
(statearr_26672_26830[(2)] = null);

(statearr_26672_26830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26667 === (7))){
var inst_26662 = (state_26666[(2)]);
var state_26666__$1 = state_26666;
var statearr_26673_26831 = state_26666__$1;
(statearr_26673_26831[(2)] = inst_26662);

(statearr_26673_26831[(1)] = (3));


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
});})(__26822,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
;
return ((function (__26822,switch__22974__auto__,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_26677 = [null,null,null,null,null,null,null];
(statearr_26677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__);

(statearr_26677[(1)] = (1));

return statearr_26677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1 = (function (state_26666){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26678){if((e26678 instanceof Object)){
var ex__22978__auto__ = e26678;
var statearr_26679_26832 = state_26666;
(statearr_26679_26832[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26833 = state_26666;
state_26666 = G__26833;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = function(state_26666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1.call(this,state_26666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__;
})()
;})(__26822,switch__22974__auto__,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
})();
var state__23041__auto__ = (function (){var statearr_26680 = f__23040__auto__.call(null);
(statearr_26680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26825);

return statearr_26680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(__26822,c__23039__auto___26825,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
);


break;
case "async":
var c__23039__auto___26834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26822,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (__26822,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function (state_26693){
var state_val_26694 = (state_26693[(1)]);
if((state_val_26694 === (1))){
var state_26693__$1 = state_26693;
var statearr_26695_26835 = state_26693__$1;
(statearr_26695_26835[(2)] = null);

(statearr_26695_26835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (2))){
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26693__$1,(4),jobs);
} else {
if((state_val_26694 === (3))){
var inst_26691 = (state_26693[(2)]);
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26693__$1,inst_26691);
} else {
if((state_val_26694 === (4))){
var inst_26683 = (state_26693[(2)]);
var inst_26684 = async.call(null,inst_26683);
var state_26693__$1 = state_26693;
if(cljs.core.truth_(inst_26684)){
var statearr_26696_26836 = state_26693__$1;
(statearr_26696_26836[(1)] = (5));

} else {
var statearr_26697_26837 = state_26693__$1;
(statearr_26697_26837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (5))){
var state_26693__$1 = state_26693;
var statearr_26698_26838 = state_26693__$1;
(statearr_26698_26838[(2)] = null);

(statearr_26698_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (6))){
var state_26693__$1 = state_26693;
var statearr_26699_26839 = state_26693__$1;
(statearr_26699_26839[(2)] = null);

(statearr_26699_26839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (7))){
var inst_26689 = (state_26693[(2)]);
var state_26693__$1 = state_26693;
var statearr_26700_26840 = state_26693__$1;
(statearr_26700_26840[(2)] = inst_26689);

(statearr_26700_26840[(1)] = (3));


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
});})(__26822,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
;
return ((function (__26822,switch__22974__auto__,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_26704 = [null,null,null,null,null,null,null];
(statearr_26704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__);

(statearr_26704[(1)] = (1));

return statearr_26704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1 = (function (state_26693){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26705){if((e26705 instanceof Object)){
var ex__22978__auto__ = e26705;
var statearr_26706_26841 = state_26693;
(statearr_26706_26841[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26842 = state_26693;
state_26693 = G__26842;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = function(state_26693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1.call(this,state_26693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__;
})()
;})(__26822,switch__22974__auto__,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
})();
var state__23041__auto__ = (function (){var statearr_26707 = f__23040__auto__.call(null);
(statearr_26707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26834);

return statearr_26707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(__26822,c__23039__auto___26834,G__26653_26823,n__16453__auto___26821,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26843 = (__26822 + (1));
__26822 = G__26843;
continue;
} else {
}
break;
}

var c__23039__auto___26844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___26844,jobs,results,process,async){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___26844,jobs,results,process,async){
return (function (state_26729){
var state_val_26730 = (state_26729[(1)]);
if((state_val_26730 === (1))){
var state_26729__$1 = state_26729;
var statearr_26731_26845 = state_26729__$1;
(statearr_26731_26845[(2)] = null);

(statearr_26731_26845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (2))){
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26729__$1,(4),from);
} else {
if((state_val_26730 === (3))){
var inst_26727 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26729__$1,inst_26727);
} else {
if((state_val_26730 === (4))){
var inst_26710 = (state_26729[(7)]);
var inst_26710__$1 = (state_26729[(2)]);
var inst_26711 = (inst_26710__$1 == null);
var state_26729__$1 = (function (){var statearr_26732 = state_26729;
(statearr_26732[(7)] = inst_26710__$1);

return statearr_26732;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26733_26846 = state_26729__$1;
(statearr_26733_26846[(1)] = (5));

} else {
var statearr_26734_26847 = state_26729__$1;
(statearr_26734_26847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (5))){
var inst_26713 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26729__$1 = state_26729;
var statearr_26735_26848 = state_26729__$1;
(statearr_26735_26848[(2)] = inst_26713);

(statearr_26735_26848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (6))){
var inst_26715 = (state_26729[(8)]);
var inst_26710 = (state_26729[(7)]);
var inst_26715__$1 = cljs.core.async.chan.call(null,(1));
var inst_26716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26717 = [inst_26710,inst_26715__$1];
var inst_26718 = (new cljs.core.PersistentVector(null,2,(5),inst_26716,inst_26717,null));
var state_26729__$1 = (function (){var statearr_26736 = state_26729;
(statearr_26736[(8)] = inst_26715__$1);

return statearr_26736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26729__$1,(8),jobs,inst_26718);
} else {
if((state_val_26730 === (7))){
var inst_26725 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26737_26849 = state_26729__$1;
(statearr_26737_26849[(2)] = inst_26725);

(statearr_26737_26849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (8))){
var inst_26715 = (state_26729[(8)]);
var inst_26720 = (state_26729[(2)]);
var state_26729__$1 = (function (){var statearr_26738 = state_26729;
(statearr_26738[(9)] = inst_26720);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26729__$1,(9),results,inst_26715);
} else {
if((state_val_26730 === (9))){
var inst_26722 = (state_26729[(2)]);
var state_26729__$1 = (function (){var statearr_26739 = state_26729;
(statearr_26739[(10)] = inst_26722);

return statearr_26739;
})();
var statearr_26740_26850 = state_26729__$1;
(statearr_26740_26850[(2)] = null);

(statearr_26740_26850[(1)] = (2));


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
});})(c__23039__auto___26844,jobs,results,process,async))
;
return ((function (switch__22974__auto__,c__23039__auto___26844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1 = (function (state_26729){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__22978__auto__ = e26745;
var statearr_26746_26851 = state_26729;
(statearr_26746_26851[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26852 = state_26729;
state_26729 = G__26852;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___26844,jobs,results,process,async))
})();
var state__23041__auto__ = (function (){var statearr_26747 = f__23040__auto__.call(null);
(statearr_26747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26844);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___26844,jobs,results,process,async))
);


var c__23039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto__,jobs,results,process,async){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto__,jobs,results,process,async){
return (function (state_26785){
var state_val_26786 = (state_26785[(1)]);
if((state_val_26786 === (7))){
var inst_26781 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26787_26853 = state_26785__$1;
(statearr_26787_26853[(2)] = inst_26781);

(statearr_26787_26853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (20))){
var state_26785__$1 = state_26785;
var statearr_26788_26854 = state_26785__$1;
(statearr_26788_26854[(2)] = null);

(statearr_26788_26854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (1))){
var state_26785__$1 = state_26785;
var statearr_26789_26855 = state_26785__$1;
(statearr_26789_26855[(2)] = null);

(statearr_26789_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (4))){
var inst_26750 = (state_26785[(7)]);
var inst_26750__$1 = (state_26785[(2)]);
var inst_26751 = (inst_26750__$1 == null);
var state_26785__$1 = (function (){var statearr_26790 = state_26785;
(statearr_26790[(7)] = inst_26750__$1);

return statearr_26790;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26791_26856 = state_26785__$1;
(statearr_26791_26856[(1)] = (5));

} else {
var statearr_26792_26857 = state_26785__$1;
(statearr_26792_26857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (15))){
var inst_26763 = (state_26785[(8)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26785__$1,(18),to,inst_26763);
} else {
if((state_val_26786 === (21))){
var inst_26776 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26793_26858 = state_26785__$1;
(statearr_26793_26858[(2)] = inst_26776);

(statearr_26793_26858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (13))){
var inst_26778 = (state_26785[(2)]);
var state_26785__$1 = (function (){var statearr_26794 = state_26785;
(statearr_26794[(9)] = inst_26778);

return statearr_26794;
})();
var statearr_26795_26859 = state_26785__$1;
(statearr_26795_26859[(2)] = null);

(statearr_26795_26859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (6))){
var inst_26750 = (state_26785[(7)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26785__$1,(11),inst_26750);
} else {
if((state_val_26786 === (17))){
var inst_26771 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
if(cljs.core.truth_(inst_26771)){
var statearr_26796_26860 = state_26785__$1;
(statearr_26796_26860[(1)] = (19));

} else {
var statearr_26797_26861 = state_26785__$1;
(statearr_26797_26861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (3))){
var inst_26783 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26785__$1,inst_26783);
} else {
if((state_val_26786 === (12))){
var inst_26760 = (state_26785[(10)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26785__$1,(14),inst_26760);
} else {
if((state_val_26786 === (2))){
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26785__$1,(4),results);
} else {
if((state_val_26786 === (19))){
var state_26785__$1 = state_26785;
var statearr_26798_26862 = state_26785__$1;
(statearr_26798_26862[(2)] = null);

(statearr_26798_26862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (11))){
var inst_26760 = (state_26785[(2)]);
var state_26785__$1 = (function (){var statearr_26799 = state_26785;
(statearr_26799[(10)] = inst_26760);

return statearr_26799;
})();
var statearr_26800_26863 = state_26785__$1;
(statearr_26800_26863[(2)] = null);

(statearr_26800_26863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (9))){
var state_26785__$1 = state_26785;
var statearr_26801_26864 = state_26785__$1;
(statearr_26801_26864[(2)] = null);

(statearr_26801_26864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (5))){
var state_26785__$1 = state_26785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26802_26865 = state_26785__$1;
(statearr_26802_26865[(1)] = (8));

} else {
var statearr_26803_26866 = state_26785__$1;
(statearr_26803_26866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (14))){
var inst_26763 = (state_26785[(8)]);
var inst_26765 = (state_26785[(11)]);
var inst_26763__$1 = (state_26785[(2)]);
var inst_26764 = (inst_26763__$1 == null);
var inst_26765__$1 = cljs.core.not.call(null,inst_26764);
var state_26785__$1 = (function (){var statearr_26804 = state_26785;
(statearr_26804[(8)] = inst_26763__$1);

(statearr_26804[(11)] = inst_26765__$1);

return statearr_26804;
})();
if(inst_26765__$1){
var statearr_26805_26867 = state_26785__$1;
(statearr_26805_26867[(1)] = (15));

} else {
var statearr_26806_26868 = state_26785__$1;
(statearr_26806_26868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (16))){
var inst_26765 = (state_26785[(11)]);
var state_26785__$1 = state_26785;
var statearr_26807_26869 = state_26785__$1;
(statearr_26807_26869[(2)] = inst_26765);

(statearr_26807_26869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (10))){
var inst_26757 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26808_26870 = state_26785__$1;
(statearr_26808_26870[(2)] = inst_26757);

(statearr_26808_26870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (18))){
var inst_26768 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26809_26871 = state_26785__$1;
(statearr_26809_26871[(2)] = inst_26768);

(statearr_26809_26871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (8))){
var inst_26754 = cljs.core.async.close_BANG_.call(null,to);
var state_26785__$1 = state_26785;
var statearr_26810_26872 = state_26785__$1;
(statearr_26810_26872[(2)] = inst_26754);

(statearr_26810_26872[(1)] = (10));


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
});})(c__23039__auto__,jobs,results,process,async))
;
return ((function (switch__22974__auto__,c__23039__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_26814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__);

(statearr_26814[(1)] = (1));

return statearr_26814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1 = (function (state_26785){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26815){if((e26815 instanceof Object)){
var ex__22978__auto__ = e26815;
var statearr_26816_26873 = state_26785;
(statearr_26816_26873[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26874 = state_26785;
state_26785 = G__26874;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__ = function(state_26785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1.call(this,state_26785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto__,jobs,results,process,async))
})();
var state__23041__auto__ = (function (){var statearr_26817 = f__23040__auto__.call(null);
(statearr_26817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto__);

return statearr_26817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto__,jobs,results,process,async))
);

return c__23039__auto__;
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
var args26875 = [];
var len__16608__auto___26878 = arguments.length;
var i__16609__auto___26879 = (0);
while(true){
if((i__16609__auto___26879 < len__16608__auto___26878)){
args26875.push((arguments[i__16609__auto___26879]));

var G__26880 = (i__16609__auto___26879 + (1));
i__16609__auto___26879 = G__26880;
continue;
} else {
}
break;
}

var G__26877 = args26875.length;
switch (G__26877) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26875.length)].join('')));

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
var args26882 = [];
var len__16608__auto___26885 = arguments.length;
var i__16609__auto___26886 = (0);
while(true){
if((i__16609__auto___26886 < len__16608__auto___26885)){
args26882.push((arguments[i__16609__auto___26886]));

var G__26887 = (i__16609__auto___26886 + (1));
i__16609__auto___26886 = G__26887;
continue;
} else {
}
break;
}

var G__26884 = args26882.length;
switch (G__26884) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26882.length)].join('')));

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
var args26889 = [];
var len__16608__auto___26942 = arguments.length;
var i__16609__auto___26943 = (0);
while(true){
if((i__16609__auto___26943 < len__16608__auto___26942)){
args26889.push((arguments[i__16609__auto___26943]));

var G__26944 = (i__16609__auto___26943 + (1));
i__16609__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var G__26891 = args26889.length;
switch (G__26891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26889.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23039__auto___26946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___26946,tc,fc){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___26946,tc,fc){
return (function (state_26917){
var state_val_26918 = (state_26917[(1)]);
if((state_val_26918 === (7))){
var inst_26913 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26919_26947 = state_26917__$1;
(statearr_26919_26947[(2)] = inst_26913);

(statearr_26919_26947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (1))){
var state_26917__$1 = state_26917;
var statearr_26920_26948 = state_26917__$1;
(statearr_26920_26948[(2)] = null);

(statearr_26920_26948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (4))){
var inst_26894 = (state_26917[(7)]);
var inst_26894__$1 = (state_26917[(2)]);
var inst_26895 = (inst_26894__$1 == null);
var state_26917__$1 = (function (){var statearr_26921 = state_26917;
(statearr_26921[(7)] = inst_26894__$1);

return statearr_26921;
})();
if(cljs.core.truth_(inst_26895)){
var statearr_26922_26949 = state_26917__$1;
(statearr_26922_26949[(1)] = (5));

} else {
var statearr_26923_26950 = state_26917__$1;
(statearr_26923_26950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (13))){
var state_26917__$1 = state_26917;
var statearr_26924_26951 = state_26917__$1;
(statearr_26924_26951[(2)] = null);

(statearr_26924_26951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (6))){
var inst_26894 = (state_26917[(7)]);
var inst_26900 = p.call(null,inst_26894);
var state_26917__$1 = state_26917;
if(cljs.core.truth_(inst_26900)){
var statearr_26925_26952 = state_26917__$1;
(statearr_26925_26952[(1)] = (9));

} else {
var statearr_26926_26953 = state_26917__$1;
(statearr_26926_26953[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (3))){
var inst_26915 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26917__$1,inst_26915);
} else {
if((state_val_26918 === (12))){
var state_26917__$1 = state_26917;
var statearr_26927_26954 = state_26917__$1;
(statearr_26927_26954[(2)] = null);

(statearr_26927_26954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (2))){
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(4),ch);
} else {
if((state_val_26918 === (11))){
var inst_26894 = (state_26917[(7)]);
var inst_26904 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26917__$1,(8),inst_26904,inst_26894);
} else {
if((state_val_26918 === (9))){
var state_26917__$1 = state_26917;
var statearr_26928_26955 = state_26917__$1;
(statearr_26928_26955[(2)] = tc);

(statearr_26928_26955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (5))){
var inst_26897 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26898 = cljs.core.async.close_BANG_.call(null,fc);
var state_26917__$1 = (function (){var statearr_26929 = state_26917;
(statearr_26929[(8)] = inst_26897);

return statearr_26929;
})();
var statearr_26930_26956 = state_26917__$1;
(statearr_26930_26956[(2)] = inst_26898);

(statearr_26930_26956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (14))){
var inst_26911 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26931_26957 = state_26917__$1;
(statearr_26931_26957[(2)] = inst_26911);

(statearr_26931_26957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (10))){
var state_26917__$1 = state_26917;
var statearr_26932_26958 = state_26917__$1;
(statearr_26932_26958[(2)] = fc);

(statearr_26932_26958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (8))){
var inst_26906 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
if(cljs.core.truth_(inst_26906)){
var statearr_26933_26959 = state_26917__$1;
(statearr_26933_26959[(1)] = (12));

} else {
var statearr_26934_26960 = state_26917__$1;
(statearr_26934_26960[(1)] = (13));

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
});})(c__23039__auto___26946,tc,fc))
;
return ((function (switch__22974__auto__,c__23039__auto___26946,tc,fc){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_26938 = [null,null,null,null,null,null,null,null,null];
(statearr_26938[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_26938[(1)] = (1));

return statearr_26938;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_26917){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_26917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e26939){if((e26939 instanceof Object)){
var ex__22978__auto__ = e26939;
var statearr_26940_26961 = state_26917;
(statearr_26940_26961[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26962 = state_26917;
state_26917 = G__26962;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_26917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_26917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___26946,tc,fc))
})();
var state__23041__auto__ = (function (){var statearr_26941 = f__23040__auto__.call(null);
(statearr_26941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___26946);

return statearr_26941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___26946,tc,fc))
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
var c__23039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto__){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto__){
return (function (state_27026){
var state_val_27027 = (state_27026[(1)]);
if((state_val_27027 === (7))){
var inst_27022 = (state_27026[(2)]);
var state_27026__$1 = state_27026;
var statearr_27028_27049 = state_27026__$1;
(statearr_27028_27049[(2)] = inst_27022);

(statearr_27028_27049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (1))){
var inst_27006 = init;
var state_27026__$1 = (function (){var statearr_27029 = state_27026;
(statearr_27029[(7)] = inst_27006);

return statearr_27029;
})();
var statearr_27030_27050 = state_27026__$1;
(statearr_27030_27050[(2)] = null);

(statearr_27030_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (4))){
var inst_27009 = (state_27026[(8)]);
var inst_27009__$1 = (state_27026[(2)]);
var inst_27010 = (inst_27009__$1 == null);
var state_27026__$1 = (function (){var statearr_27031 = state_27026;
(statearr_27031[(8)] = inst_27009__$1);

return statearr_27031;
})();
if(cljs.core.truth_(inst_27010)){
var statearr_27032_27051 = state_27026__$1;
(statearr_27032_27051[(1)] = (5));

} else {
var statearr_27033_27052 = state_27026__$1;
(statearr_27033_27052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (6))){
var inst_27006 = (state_27026[(7)]);
var inst_27013 = (state_27026[(9)]);
var inst_27009 = (state_27026[(8)]);
var inst_27013__$1 = f.call(null,inst_27006,inst_27009);
var inst_27014 = cljs.core.reduced_QMARK_.call(null,inst_27013__$1);
var state_27026__$1 = (function (){var statearr_27034 = state_27026;
(statearr_27034[(9)] = inst_27013__$1);

return statearr_27034;
})();
if(inst_27014){
var statearr_27035_27053 = state_27026__$1;
(statearr_27035_27053[(1)] = (8));

} else {
var statearr_27036_27054 = state_27026__$1;
(statearr_27036_27054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (3))){
var inst_27024 = (state_27026[(2)]);
var state_27026__$1 = state_27026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27026__$1,inst_27024);
} else {
if((state_val_27027 === (2))){
var state_27026__$1 = state_27026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27026__$1,(4),ch);
} else {
if((state_val_27027 === (9))){
var inst_27013 = (state_27026[(9)]);
var inst_27006 = inst_27013;
var state_27026__$1 = (function (){var statearr_27037 = state_27026;
(statearr_27037[(7)] = inst_27006);

return statearr_27037;
})();
var statearr_27038_27055 = state_27026__$1;
(statearr_27038_27055[(2)] = null);

(statearr_27038_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (5))){
var inst_27006 = (state_27026[(7)]);
var state_27026__$1 = state_27026;
var statearr_27039_27056 = state_27026__$1;
(statearr_27039_27056[(2)] = inst_27006);

(statearr_27039_27056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (10))){
var inst_27020 = (state_27026[(2)]);
var state_27026__$1 = state_27026;
var statearr_27040_27057 = state_27026__$1;
(statearr_27040_27057[(2)] = inst_27020);

(statearr_27040_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27027 === (8))){
var inst_27013 = (state_27026[(9)]);
var inst_27016 = cljs.core.deref.call(null,inst_27013);
var state_27026__$1 = state_27026;
var statearr_27041_27058 = state_27026__$1;
(statearr_27041_27058[(2)] = inst_27016);

(statearr_27041_27058[(1)] = (10));


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
});})(c__23039__auto__))
;
return ((function (switch__22974__auto__,c__23039__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22975__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22975__auto____0 = (function (){
var statearr_27045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27045[(0)] = cljs$core$async$reduce_$_state_machine__22975__auto__);

(statearr_27045[(1)] = (1));

return statearr_27045;
});
var cljs$core$async$reduce_$_state_machine__22975__auto____1 = (function (state_27026){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_27026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object)){
var ex__22978__auto__ = e27046;
var statearr_27047_27059 = state_27026;
(statearr_27047_27059[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27060 = state_27026;
state_27026 = G__27060;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22975__auto__ = function(state_27026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22975__auto____1.call(this,state_27026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22975__auto____0;
cljs$core$async$reduce_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22975__auto____1;
return cljs$core$async$reduce_$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto__))
})();
var state__23041__auto__ = (function (){var statearr_27048 = f__23040__auto__.call(null);
(statearr_27048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto__);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto__))
);

return c__23039__auto__;
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
var args27061 = [];
var len__16608__auto___27113 = arguments.length;
var i__16609__auto___27114 = (0);
while(true){
if((i__16609__auto___27114 < len__16608__auto___27113)){
args27061.push((arguments[i__16609__auto___27114]));

var G__27115 = (i__16609__auto___27114 + (1));
i__16609__auto___27114 = G__27115;
continue;
} else {
}
break;
}

var G__27063 = args27061.length;
switch (G__27063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto__){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto__){
return (function (state_27088){
var state_val_27089 = (state_27088[(1)]);
if((state_val_27089 === (7))){
var inst_27070 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27090_27117 = state_27088__$1;
(statearr_27090_27117[(2)] = inst_27070);

(statearr_27090_27117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (1))){
var inst_27064 = cljs.core.seq.call(null,coll);
var inst_27065 = inst_27064;
var state_27088__$1 = (function (){var statearr_27091 = state_27088;
(statearr_27091[(7)] = inst_27065);

return statearr_27091;
})();
var statearr_27092_27118 = state_27088__$1;
(statearr_27092_27118[(2)] = null);

(statearr_27092_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (4))){
var inst_27065 = (state_27088[(7)]);
var inst_27068 = cljs.core.first.call(null,inst_27065);
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27088__$1,(7),ch,inst_27068);
} else {
if((state_val_27089 === (13))){
var inst_27082 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27093_27119 = state_27088__$1;
(statearr_27093_27119[(2)] = inst_27082);

(statearr_27093_27119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (6))){
var inst_27073 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
if(cljs.core.truth_(inst_27073)){
var statearr_27094_27120 = state_27088__$1;
(statearr_27094_27120[(1)] = (8));

} else {
var statearr_27095_27121 = state_27088__$1;
(statearr_27095_27121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (3))){
var inst_27086 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27088__$1,inst_27086);
} else {
if((state_val_27089 === (12))){
var state_27088__$1 = state_27088;
var statearr_27096_27122 = state_27088__$1;
(statearr_27096_27122[(2)] = null);

(statearr_27096_27122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (2))){
var inst_27065 = (state_27088[(7)]);
var state_27088__$1 = state_27088;
if(cljs.core.truth_(inst_27065)){
var statearr_27097_27123 = state_27088__$1;
(statearr_27097_27123[(1)] = (4));

} else {
var statearr_27098_27124 = state_27088__$1;
(statearr_27098_27124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (11))){
var inst_27079 = cljs.core.async.close_BANG_.call(null,ch);
var state_27088__$1 = state_27088;
var statearr_27099_27125 = state_27088__$1;
(statearr_27099_27125[(2)] = inst_27079);

(statearr_27099_27125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (9))){
var state_27088__$1 = state_27088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27100_27126 = state_27088__$1;
(statearr_27100_27126[(1)] = (11));

} else {
var statearr_27101_27127 = state_27088__$1;
(statearr_27101_27127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (5))){
var inst_27065 = (state_27088[(7)]);
var state_27088__$1 = state_27088;
var statearr_27102_27128 = state_27088__$1;
(statearr_27102_27128[(2)] = inst_27065);

(statearr_27102_27128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (10))){
var inst_27084 = (state_27088[(2)]);
var state_27088__$1 = state_27088;
var statearr_27103_27129 = state_27088__$1;
(statearr_27103_27129[(2)] = inst_27084);

(statearr_27103_27129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27089 === (8))){
var inst_27065 = (state_27088[(7)]);
var inst_27075 = cljs.core.next.call(null,inst_27065);
var inst_27065__$1 = inst_27075;
var state_27088__$1 = (function (){var statearr_27104 = state_27088;
(statearr_27104[(7)] = inst_27065__$1);

return statearr_27104;
})();
var statearr_27105_27130 = state_27088__$1;
(statearr_27105_27130[(2)] = null);

(statearr_27105_27130[(1)] = (2));


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
});})(c__23039__auto__))
;
return ((function (switch__22974__auto__,c__23039__auto__){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_27109 = [null,null,null,null,null,null,null,null];
(statearr_27109[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_27109[(1)] = (1));

return statearr_27109;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_27088){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_27088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e27110){if((e27110 instanceof Object)){
var ex__22978__auto__ = e27110;
var statearr_27111_27131 = state_27088;
(statearr_27111_27131[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27132 = state_27088;
state_27088 = G__27132;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_27088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_27088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto__))
})();
var state__23041__auto__ = (function (){var statearr_27112 = f__23040__auto__.call(null);
(statearr_27112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto__);

return statearr_27112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto__))
);

return c__23039__auto__;
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
var x__16205__auto__ = (((_ == null))?null:_);
var m__16206__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,_);
} else {
var m__16206__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,_);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16206__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,ch);
} else {
var m__16206__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,ch);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m);
} else {
var m__16206__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27354 = (function (mult,ch,cs,meta27355){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27355 = meta27355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27356,meta27355__$1){
var self__ = this;
var _27356__$1 = this;
return (new cljs.core.async.t_cljs$core$async27354(self__.mult,self__.ch,self__.cs,meta27355__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27356){
var self__ = this;
var _27356__$1 = this;
return self__.meta27355;
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27355","meta27355",-773844843,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27354";

cljs.core.async.t_cljs$core$async27354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async27354");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27354 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27354(mult__$1,ch__$1,cs__$1,meta27355){
return (new cljs.core.async.t_cljs$core$async27354(mult__$1,ch__$1,cs__$1,meta27355));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27354(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23039__auto___27575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___27575,cs,m,dchan,dctr,done){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___27575,cs,m,dchan,dctr,done){
return (function (state_27487){
var state_val_27488 = (state_27487[(1)]);
if((state_val_27488 === (7))){
var inst_27483 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27489_27576 = state_27487__$1;
(statearr_27489_27576[(2)] = inst_27483);

(statearr_27489_27576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (20))){
var inst_27388 = (state_27487[(7)]);
var inst_27398 = cljs.core.first.call(null,inst_27388);
var inst_27399 = cljs.core.nth.call(null,inst_27398,(0),null);
var inst_27400 = cljs.core.nth.call(null,inst_27398,(1),null);
var state_27487__$1 = (function (){var statearr_27490 = state_27487;
(statearr_27490[(8)] = inst_27399);

return statearr_27490;
})();
if(cljs.core.truth_(inst_27400)){
var statearr_27491_27577 = state_27487__$1;
(statearr_27491_27577[(1)] = (22));

} else {
var statearr_27492_27578 = state_27487__$1;
(statearr_27492_27578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (27))){
var inst_27428 = (state_27487[(9)]);
var inst_27430 = (state_27487[(10)]);
var inst_27359 = (state_27487[(11)]);
var inst_27435 = (state_27487[(12)]);
var inst_27435__$1 = cljs.core._nth.call(null,inst_27428,inst_27430);
var inst_27436 = cljs.core.async.put_BANG_.call(null,inst_27435__$1,inst_27359,done);
var state_27487__$1 = (function (){var statearr_27493 = state_27487;
(statearr_27493[(12)] = inst_27435__$1);

return statearr_27493;
})();
if(cljs.core.truth_(inst_27436)){
var statearr_27494_27579 = state_27487__$1;
(statearr_27494_27579[(1)] = (30));

} else {
var statearr_27495_27580 = state_27487__$1;
(statearr_27495_27580[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (1))){
var state_27487__$1 = state_27487;
var statearr_27496_27581 = state_27487__$1;
(statearr_27496_27581[(2)] = null);

(statearr_27496_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (24))){
var inst_27388 = (state_27487[(7)]);
var inst_27405 = (state_27487[(2)]);
var inst_27406 = cljs.core.next.call(null,inst_27388);
var inst_27368 = inst_27406;
var inst_27369 = null;
var inst_27370 = (0);
var inst_27371 = (0);
var state_27487__$1 = (function (){var statearr_27497 = state_27487;
(statearr_27497[(13)] = inst_27371);

(statearr_27497[(14)] = inst_27368);

(statearr_27497[(15)] = inst_27370);

(statearr_27497[(16)] = inst_27405);

(statearr_27497[(17)] = inst_27369);

return statearr_27497;
})();
var statearr_27498_27582 = state_27487__$1;
(statearr_27498_27582[(2)] = null);

(statearr_27498_27582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (39))){
var state_27487__$1 = state_27487;
var statearr_27502_27583 = state_27487__$1;
(statearr_27502_27583[(2)] = null);

(statearr_27502_27583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (4))){
var inst_27359 = (state_27487[(11)]);
var inst_27359__$1 = (state_27487[(2)]);
var inst_27360 = (inst_27359__$1 == null);
var state_27487__$1 = (function (){var statearr_27503 = state_27487;
(statearr_27503[(11)] = inst_27359__$1);

return statearr_27503;
})();
if(cljs.core.truth_(inst_27360)){
var statearr_27504_27584 = state_27487__$1;
(statearr_27504_27584[(1)] = (5));

} else {
var statearr_27505_27585 = state_27487__$1;
(statearr_27505_27585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (15))){
var inst_27371 = (state_27487[(13)]);
var inst_27368 = (state_27487[(14)]);
var inst_27370 = (state_27487[(15)]);
var inst_27369 = (state_27487[(17)]);
var inst_27384 = (state_27487[(2)]);
var inst_27385 = (inst_27371 + (1));
var tmp27499 = inst_27368;
var tmp27500 = inst_27370;
var tmp27501 = inst_27369;
var inst_27368__$1 = tmp27499;
var inst_27369__$1 = tmp27501;
var inst_27370__$1 = tmp27500;
var inst_27371__$1 = inst_27385;
var state_27487__$1 = (function (){var statearr_27506 = state_27487;
(statearr_27506[(18)] = inst_27384);

(statearr_27506[(13)] = inst_27371__$1);

(statearr_27506[(14)] = inst_27368__$1);

(statearr_27506[(15)] = inst_27370__$1);

(statearr_27506[(17)] = inst_27369__$1);

return statearr_27506;
})();
var statearr_27507_27586 = state_27487__$1;
(statearr_27507_27586[(2)] = null);

(statearr_27507_27586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (21))){
var inst_27409 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27511_27587 = state_27487__$1;
(statearr_27511_27587[(2)] = inst_27409);

(statearr_27511_27587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (31))){
var inst_27435 = (state_27487[(12)]);
var inst_27439 = done.call(null,null);
var inst_27440 = cljs.core.async.untap_STAR_.call(null,m,inst_27435);
var state_27487__$1 = (function (){var statearr_27512 = state_27487;
(statearr_27512[(19)] = inst_27439);

return statearr_27512;
})();
var statearr_27513_27588 = state_27487__$1;
(statearr_27513_27588[(2)] = inst_27440);

(statearr_27513_27588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (32))){
var inst_27428 = (state_27487[(9)]);
var inst_27427 = (state_27487[(20)]);
var inst_27430 = (state_27487[(10)]);
var inst_27429 = (state_27487[(21)]);
var inst_27442 = (state_27487[(2)]);
var inst_27443 = (inst_27430 + (1));
var tmp27508 = inst_27428;
var tmp27509 = inst_27427;
var tmp27510 = inst_27429;
var inst_27427__$1 = tmp27509;
var inst_27428__$1 = tmp27508;
var inst_27429__$1 = tmp27510;
var inst_27430__$1 = inst_27443;
var state_27487__$1 = (function (){var statearr_27514 = state_27487;
(statearr_27514[(9)] = inst_27428__$1);

(statearr_27514[(20)] = inst_27427__$1);

(statearr_27514[(10)] = inst_27430__$1);

(statearr_27514[(21)] = inst_27429__$1);

(statearr_27514[(22)] = inst_27442);

return statearr_27514;
})();
var statearr_27515_27589 = state_27487__$1;
(statearr_27515_27589[(2)] = null);

(statearr_27515_27589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (40))){
var inst_27455 = (state_27487[(23)]);
var inst_27459 = done.call(null,null);
var inst_27460 = cljs.core.async.untap_STAR_.call(null,m,inst_27455);
var state_27487__$1 = (function (){var statearr_27516 = state_27487;
(statearr_27516[(24)] = inst_27459);

return statearr_27516;
})();
var statearr_27517_27590 = state_27487__$1;
(statearr_27517_27590[(2)] = inst_27460);

(statearr_27517_27590[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (33))){
var inst_27446 = (state_27487[(25)]);
var inst_27448 = cljs.core.chunked_seq_QMARK_.call(null,inst_27446);
var state_27487__$1 = state_27487;
if(inst_27448){
var statearr_27518_27591 = state_27487__$1;
(statearr_27518_27591[(1)] = (36));

} else {
var statearr_27519_27592 = state_27487__$1;
(statearr_27519_27592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (13))){
var inst_27378 = (state_27487[(26)]);
var inst_27381 = cljs.core.async.close_BANG_.call(null,inst_27378);
var state_27487__$1 = state_27487;
var statearr_27520_27593 = state_27487__$1;
(statearr_27520_27593[(2)] = inst_27381);

(statearr_27520_27593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (22))){
var inst_27399 = (state_27487[(8)]);
var inst_27402 = cljs.core.async.close_BANG_.call(null,inst_27399);
var state_27487__$1 = state_27487;
var statearr_27521_27594 = state_27487__$1;
(statearr_27521_27594[(2)] = inst_27402);

(statearr_27521_27594[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (36))){
var inst_27446 = (state_27487[(25)]);
var inst_27450 = cljs.core.chunk_first.call(null,inst_27446);
var inst_27451 = cljs.core.chunk_rest.call(null,inst_27446);
var inst_27452 = cljs.core.count.call(null,inst_27450);
var inst_27427 = inst_27451;
var inst_27428 = inst_27450;
var inst_27429 = inst_27452;
var inst_27430 = (0);
var state_27487__$1 = (function (){var statearr_27522 = state_27487;
(statearr_27522[(9)] = inst_27428);

(statearr_27522[(20)] = inst_27427);

(statearr_27522[(10)] = inst_27430);

(statearr_27522[(21)] = inst_27429);

return statearr_27522;
})();
var statearr_27523_27595 = state_27487__$1;
(statearr_27523_27595[(2)] = null);

(statearr_27523_27595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (41))){
var inst_27446 = (state_27487[(25)]);
var inst_27462 = (state_27487[(2)]);
var inst_27463 = cljs.core.next.call(null,inst_27446);
var inst_27427 = inst_27463;
var inst_27428 = null;
var inst_27429 = (0);
var inst_27430 = (0);
var state_27487__$1 = (function (){var statearr_27524 = state_27487;
(statearr_27524[(9)] = inst_27428);

(statearr_27524[(20)] = inst_27427);

(statearr_27524[(10)] = inst_27430);

(statearr_27524[(27)] = inst_27462);

(statearr_27524[(21)] = inst_27429);

return statearr_27524;
})();
var statearr_27525_27596 = state_27487__$1;
(statearr_27525_27596[(2)] = null);

(statearr_27525_27596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (43))){
var state_27487__$1 = state_27487;
var statearr_27526_27597 = state_27487__$1;
(statearr_27526_27597[(2)] = null);

(statearr_27526_27597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (29))){
var inst_27471 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27527_27598 = state_27487__$1;
(statearr_27527_27598[(2)] = inst_27471);

(statearr_27527_27598[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (44))){
var inst_27480 = (state_27487[(2)]);
var state_27487__$1 = (function (){var statearr_27528 = state_27487;
(statearr_27528[(28)] = inst_27480);

return statearr_27528;
})();
var statearr_27529_27599 = state_27487__$1;
(statearr_27529_27599[(2)] = null);

(statearr_27529_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (6))){
var inst_27419 = (state_27487[(29)]);
var inst_27418 = cljs.core.deref.call(null,cs);
var inst_27419__$1 = cljs.core.keys.call(null,inst_27418);
var inst_27420 = cljs.core.count.call(null,inst_27419__$1);
var inst_27421 = cljs.core.reset_BANG_.call(null,dctr,inst_27420);
var inst_27426 = cljs.core.seq.call(null,inst_27419__$1);
var inst_27427 = inst_27426;
var inst_27428 = null;
var inst_27429 = (0);
var inst_27430 = (0);
var state_27487__$1 = (function (){var statearr_27530 = state_27487;
(statearr_27530[(9)] = inst_27428);

(statearr_27530[(20)] = inst_27427);

(statearr_27530[(10)] = inst_27430);

(statearr_27530[(21)] = inst_27429);

(statearr_27530[(30)] = inst_27421);

(statearr_27530[(29)] = inst_27419__$1);

return statearr_27530;
})();
var statearr_27531_27600 = state_27487__$1;
(statearr_27531_27600[(2)] = null);

(statearr_27531_27600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (28))){
var inst_27446 = (state_27487[(25)]);
var inst_27427 = (state_27487[(20)]);
var inst_27446__$1 = cljs.core.seq.call(null,inst_27427);
var state_27487__$1 = (function (){var statearr_27532 = state_27487;
(statearr_27532[(25)] = inst_27446__$1);

return statearr_27532;
})();
if(inst_27446__$1){
var statearr_27533_27601 = state_27487__$1;
(statearr_27533_27601[(1)] = (33));

} else {
var statearr_27534_27602 = state_27487__$1;
(statearr_27534_27602[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (25))){
var inst_27430 = (state_27487[(10)]);
var inst_27429 = (state_27487[(21)]);
var inst_27432 = (inst_27430 < inst_27429);
var inst_27433 = inst_27432;
var state_27487__$1 = state_27487;
if(cljs.core.truth_(inst_27433)){
var statearr_27535_27603 = state_27487__$1;
(statearr_27535_27603[(1)] = (27));

} else {
var statearr_27536_27604 = state_27487__$1;
(statearr_27536_27604[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (34))){
var state_27487__$1 = state_27487;
var statearr_27537_27605 = state_27487__$1;
(statearr_27537_27605[(2)] = null);

(statearr_27537_27605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (17))){
var state_27487__$1 = state_27487;
var statearr_27538_27606 = state_27487__$1;
(statearr_27538_27606[(2)] = null);

(statearr_27538_27606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (3))){
var inst_27485 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27487__$1,inst_27485);
} else {
if((state_val_27488 === (12))){
var inst_27414 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27539_27607 = state_27487__$1;
(statearr_27539_27607[(2)] = inst_27414);

(statearr_27539_27607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (2))){
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(4),ch);
} else {
if((state_val_27488 === (23))){
var state_27487__$1 = state_27487;
var statearr_27540_27608 = state_27487__$1;
(statearr_27540_27608[(2)] = null);

(statearr_27540_27608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (35))){
var inst_27469 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27541_27609 = state_27487__$1;
(statearr_27541_27609[(2)] = inst_27469);

(statearr_27541_27609[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (19))){
var inst_27388 = (state_27487[(7)]);
var inst_27392 = cljs.core.chunk_first.call(null,inst_27388);
var inst_27393 = cljs.core.chunk_rest.call(null,inst_27388);
var inst_27394 = cljs.core.count.call(null,inst_27392);
var inst_27368 = inst_27393;
var inst_27369 = inst_27392;
var inst_27370 = inst_27394;
var inst_27371 = (0);
var state_27487__$1 = (function (){var statearr_27542 = state_27487;
(statearr_27542[(13)] = inst_27371);

(statearr_27542[(14)] = inst_27368);

(statearr_27542[(15)] = inst_27370);

(statearr_27542[(17)] = inst_27369);

return statearr_27542;
})();
var statearr_27543_27610 = state_27487__$1;
(statearr_27543_27610[(2)] = null);

(statearr_27543_27610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (11))){
var inst_27368 = (state_27487[(14)]);
var inst_27388 = (state_27487[(7)]);
var inst_27388__$1 = cljs.core.seq.call(null,inst_27368);
var state_27487__$1 = (function (){var statearr_27544 = state_27487;
(statearr_27544[(7)] = inst_27388__$1);

return statearr_27544;
})();
if(inst_27388__$1){
var statearr_27545_27611 = state_27487__$1;
(statearr_27545_27611[(1)] = (16));

} else {
var statearr_27546_27612 = state_27487__$1;
(statearr_27546_27612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (9))){
var inst_27416 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27547_27613 = state_27487__$1;
(statearr_27547_27613[(2)] = inst_27416);

(statearr_27547_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (5))){
var inst_27366 = cljs.core.deref.call(null,cs);
var inst_27367 = cljs.core.seq.call(null,inst_27366);
var inst_27368 = inst_27367;
var inst_27369 = null;
var inst_27370 = (0);
var inst_27371 = (0);
var state_27487__$1 = (function (){var statearr_27548 = state_27487;
(statearr_27548[(13)] = inst_27371);

(statearr_27548[(14)] = inst_27368);

(statearr_27548[(15)] = inst_27370);

(statearr_27548[(17)] = inst_27369);

return statearr_27548;
})();
var statearr_27549_27614 = state_27487__$1;
(statearr_27549_27614[(2)] = null);

(statearr_27549_27614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (14))){
var state_27487__$1 = state_27487;
var statearr_27550_27615 = state_27487__$1;
(statearr_27550_27615[(2)] = null);

(statearr_27550_27615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (45))){
var inst_27477 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27551_27616 = state_27487__$1;
(statearr_27551_27616[(2)] = inst_27477);

(statearr_27551_27616[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (26))){
var inst_27419 = (state_27487[(29)]);
var inst_27473 = (state_27487[(2)]);
var inst_27474 = cljs.core.seq.call(null,inst_27419);
var state_27487__$1 = (function (){var statearr_27552 = state_27487;
(statearr_27552[(31)] = inst_27473);

return statearr_27552;
})();
if(inst_27474){
var statearr_27553_27617 = state_27487__$1;
(statearr_27553_27617[(1)] = (42));

} else {
var statearr_27554_27618 = state_27487__$1;
(statearr_27554_27618[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (16))){
var inst_27388 = (state_27487[(7)]);
var inst_27390 = cljs.core.chunked_seq_QMARK_.call(null,inst_27388);
var state_27487__$1 = state_27487;
if(inst_27390){
var statearr_27555_27619 = state_27487__$1;
(statearr_27555_27619[(1)] = (19));

} else {
var statearr_27556_27620 = state_27487__$1;
(statearr_27556_27620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (38))){
var inst_27466 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27557_27621 = state_27487__$1;
(statearr_27557_27621[(2)] = inst_27466);

(statearr_27557_27621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (30))){
var state_27487__$1 = state_27487;
var statearr_27558_27622 = state_27487__$1;
(statearr_27558_27622[(2)] = null);

(statearr_27558_27622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (10))){
var inst_27371 = (state_27487[(13)]);
var inst_27369 = (state_27487[(17)]);
var inst_27377 = cljs.core._nth.call(null,inst_27369,inst_27371);
var inst_27378 = cljs.core.nth.call(null,inst_27377,(0),null);
var inst_27379 = cljs.core.nth.call(null,inst_27377,(1),null);
var state_27487__$1 = (function (){var statearr_27559 = state_27487;
(statearr_27559[(26)] = inst_27378);

return statearr_27559;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27560_27623 = state_27487__$1;
(statearr_27560_27623[(1)] = (13));

} else {
var statearr_27561_27624 = state_27487__$1;
(statearr_27561_27624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (18))){
var inst_27412 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27562_27625 = state_27487__$1;
(statearr_27562_27625[(2)] = inst_27412);

(statearr_27562_27625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (42))){
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(45),dchan);
} else {
if((state_val_27488 === (37))){
var inst_27446 = (state_27487[(25)]);
var inst_27455 = (state_27487[(23)]);
var inst_27359 = (state_27487[(11)]);
var inst_27455__$1 = cljs.core.first.call(null,inst_27446);
var inst_27456 = cljs.core.async.put_BANG_.call(null,inst_27455__$1,inst_27359,done);
var state_27487__$1 = (function (){var statearr_27563 = state_27487;
(statearr_27563[(23)] = inst_27455__$1);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27456)){
var statearr_27564_27626 = state_27487__$1;
(statearr_27564_27626[(1)] = (39));

} else {
var statearr_27565_27627 = state_27487__$1;
(statearr_27565_27627[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (8))){
var inst_27371 = (state_27487[(13)]);
var inst_27370 = (state_27487[(15)]);
var inst_27373 = (inst_27371 < inst_27370);
var inst_27374 = inst_27373;
var state_27487__$1 = state_27487;
if(cljs.core.truth_(inst_27374)){
var statearr_27566_27628 = state_27487__$1;
(statearr_27566_27628[(1)] = (10));

} else {
var statearr_27567_27629 = state_27487__$1;
(statearr_27567_27629[(1)] = (11));

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
});})(c__23039__auto___27575,cs,m,dchan,dctr,done))
;
return ((function (switch__22974__auto__,c__23039__auto___27575,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22975__auto__ = null;
var cljs$core$async$mult_$_state_machine__22975__auto____0 = (function (){
var statearr_27571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27571[(0)] = cljs$core$async$mult_$_state_machine__22975__auto__);

(statearr_27571[(1)] = (1));

return statearr_27571;
});
var cljs$core$async$mult_$_state_machine__22975__auto____1 = (function (state_27487){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_27487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e27572){if((e27572 instanceof Object)){
var ex__22978__auto__ = e27572;
var statearr_27573_27630 = state_27487;
(statearr_27573_27630[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27487;
state_27487 = G__27631;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22975__auto__ = function(state_27487){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22975__auto____1.call(this,state_27487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22975__auto____0;
cljs$core$async$mult_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22975__auto____1;
return cljs$core$async$mult_$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___27575,cs,m,dchan,dctr,done))
})();
var state__23041__auto__ = (function (){var statearr_27574 = f__23040__auto__.call(null);
(statearr_27574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___27575);

return statearr_27574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___27575,cs,m,dchan,dctr,done))
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
var args27632 = [];
var len__16608__auto___27635 = arguments.length;
var i__16609__auto___27636 = (0);
while(true){
if((i__16609__auto___27636 < len__16608__auto___27635)){
args27632.push((arguments[i__16609__auto___27636]));

var G__27637 = (i__16609__auto___27636 + (1));
i__16609__auto___27636 = G__27637;
continue;
} else {
}
break;
}

var G__27634 = args27632.length;
switch (G__27634) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27632.length)].join('')));

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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,ch);
} else {
var m__16206__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,ch);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,ch);
} else {
var m__16206__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,ch);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m);
} else {
var m__16206__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,state_map);
} else {
var m__16206__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,state_map);
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
var x__16205__auto__ = (((m == null))?null:m);
var m__16206__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,m,mode);
} else {
var m__16206__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__16615__auto__ = [];
var len__16608__auto___27649 = arguments.length;
var i__16609__auto___27650 = (0);
while(true){
if((i__16609__auto___27650 < len__16608__auto___27649)){
args__16615__auto__.push((arguments[i__16609__auto___27650]));

var G__27651 = (i__16609__auto___27650 + (1));
i__16609__auto___27650 = G__27651;
continue;
} else {
}
break;
}

var argseq__16616__auto__ = ((((3) < args__16615__auto__.length))?(new cljs.core.IndexedSeq(args__16615__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27643){
var map__27644 = p__27643;
var map__27644__$1 = ((((!((map__27644 == null)))?((((map__27644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var opts = map__27644__$1;
var statearr_27646_27652 = state;
(statearr_27646_27652[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27644,map__27644__$1,opts){
return (function (val){
var statearr_27647_27653 = state;
(statearr_27647_27653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27644,map__27644__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27648_27654 = state;
(statearr_27648_27654[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27639){
var G__27640 = cljs.core.first.call(null,seq27639);
var seq27639__$1 = cljs.core.next.call(null,seq27639);
var G__27641 = cljs.core.first.call(null,seq27639__$1);
var seq27639__$2 = cljs.core.next.call(null,seq27639__$1);
var G__27642 = cljs.core.first.call(null,seq27639__$2);
var seq27639__$3 = cljs.core.next.call(null,seq27639__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27640,G__27641,G__27642,seq27639__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27818 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27819){
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
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27820,meta27819__$1){
var self__ = this;
var _27820__$1 = this;
return (new cljs.core.async.t_cljs$core$async27818(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27820){
var self__ = this;
var _27820__$1 = this;
return self__.meta27819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27819","meta27819",2053433592,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27818";

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async27818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27819){
return (new cljs.core.async.t_cljs$core$async27818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27818(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23039__auto___27981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (7))){
var inst_27836 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27920_27982 = state_27918__$1;
(statearr_27920_27982[(2)] = inst_27836);

(statearr_27920_27982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (20))){
var inst_27848 = (state_27918[(7)]);
var state_27918__$1 = state_27918;
var statearr_27921_27983 = state_27918__$1;
(statearr_27921_27983[(2)] = inst_27848);

(statearr_27921_27983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (27))){
var state_27918__$1 = state_27918;
var statearr_27922_27984 = state_27918__$1;
(statearr_27922_27984[(2)] = null);

(statearr_27922_27984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (1))){
var inst_27824 = (state_27918[(8)]);
var inst_27824__$1 = calc_state.call(null);
var inst_27826 = (inst_27824__$1 == null);
var inst_27827 = cljs.core.not.call(null,inst_27826);
var state_27918__$1 = (function (){var statearr_27923 = state_27918;
(statearr_27923[(8)] = inst_27824__$1);

return statearr_27923;
})();
if(inst_27827){
var statearr_27924_27985 = state_27918__$1;
(statearr_27924_27985[(1)] = (2));

} else {
var statearr_27925_27986 = state_27918__$1;
(statearr_27925_27986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (24))){
var inst_27892 = (state_27918[(9)]);
var inst_27871 = (state_27918[(10)]);
var inst_27878 = (state_27918[(11)]);
var inst_27892__$1 = inst_27871.call(null,inst_27878);
var state_27918__$1 = (function (){var statearr_27926 = state_27918;
(statearr_27926[(9)] = inst_27892__$1);

return statearr_27926;
})();
if(cljs.core.truth_(inst_27892__$1)){
var statearr_27927_27987 = state_27918__$1;
(statearr_27927_27987[(1)] = (29));

} else {
var statearr_27928_27988 = state_27918__$1;
(statearr_27928_27988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (4))){
var inst_27839 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27839)){
var statearr_27929_27989 = state_27918__$1;
(statearr_27929_27989[(1)] = (8));

} else {
var statearr_27930_27990 = state_27918__$1;
(statearr_27930_27990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (15))){
var inst_27865 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27865)){
var statearr_27931_27991 = state_27918__$1;
(statearr_27931_27991[(1)] = (19));

} else {
var statearr_27932_27992 = state_27918__$1;
(statearr_27932_27992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (21))){
var inst_27870 = (state_27918[(12)]);
var inst_27870__$1 = (state_27918[(2)]);
var inst_27871 = cljs.core.get.call(null,inst_27870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27872 = cljs.core.get.call(null,inst_27870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27873 = cljs.core.get.call(null,inst_27870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27918__$1 = (function (){var statearr_27933 = state_27918;
(statearr_27933[(12)] = inst_27870__$1);

(statearr_27933[(10)] = inst_27871);

(statearr_27933[(13)] = inst_27872);

return statearr_27933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27918__$1,(22),inst_27873);
} else {
if((state_val_27919 === (31))){
var inst_27900 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27900)){
var statearr_27934_27993 = state_27918__$1;
(statearr_27934_27993[(1)] = (32));

} else {
var statearr_27935_27994 = state_27918__$1;
(statearr_27935_27994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (32))){
var inst_27877 = (state_27918[(14)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27918__$1,(35),out,inst_27877);
} else {
if((state_val_27919 === (33))){
var inst_27870 = (state_27918[(12)]);
var inst_27848 = inst_27870;
var state_27918__$1 = (function (){var statearr_27936 = state_27918;
(statearr_27936[(7)] = inst_27848);

return statearr_27936;
})();
var statearr_27937_27995 = state_27918__$1;
(statearr_27937_27995[(2)] = null);

(statearr_27937_27995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (13))){
var inst_27848 = (state_27918[(7)]);
var inst_27855 = inst_27848.cljs$lang$protocol_mask$partition0$;
var inst_27856 = (inst_27855 & (64));
var inst_27857 = inst_27848.cljs$core$ISeq$;
var inst_27858 = (inst_27856) || (inst_27857);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27858)){
var statearr_27938_27996 = state_27918__$1;
(statearr_27938_27996[(1)] = (16));

} else {
var statearr_27939_27997 = state_27918__$1;
(statearr_27939_27997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (22))){
var inst_27877 = (state_27918[(14)]);
var inst_27878 = (state_27918[(11)]);
var inst_27876 = (state_27918[(2)]);
var inst_27877__$1 = cljs.core.nth.call(null,inst_27876,(0),null);
var inst_27878__$1 = cljs.core.nth.call(null,inst_27876,(1),null);
var inst_27879 = (inst_27877__$1 == null);
var inst_27880 = cljs.core._EQ_.call(null,inst_27878__$1,change);
var inst_27881 = (inst_27879) || (inst_27880);
var state_27918__$1 = (function (){var statearr_27940 = state_27918;
(statearr_27940[(14)] = inst_27877__$1);

(statearr_27940[(11)] = inst_27878__$1);

return statearr_27940;
})();
if(cljs.core.truth_(inst_27881)){
var statearr_27941_27998 = state_27918__$1;
(statearr_27941_27998[(1)] = (23));

} else {
var statearr_27942_27999 = state_27918__$1;
(statearr_27942_27999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (36))){
var inst_27870 = (state_27918[(12)]);
var inst_27848 = inst_27870;
var state_27918__$1 = (function (){var statearr_27943 = state_27918;
(statearr_27943[(7)] = inst_27848);

return statearr_27943;
})();
var statearr_27944_28000 = state_27918__$1;
(statearr_27944_28000[(2)] = null);

(statearr_27944_28000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (29))){
var inst_27892 = (state_27918[(9)]);
var state_27918__$1 = state_27918;
var statearr_27945_28001 = state_27918__$1;
(statearr_27945_28001[(2)] = inst_27892);

(statearr_27945_28001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (6))){
var state_27918__$1 = state_27918;
var statearr_27946_28002 = state_27918__$1;
(statearr_27946_28002[(2)] = false);

(statearr_27946_28002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (28))){
var inst_27888 = (state_27918[(2)]);
var inst_27889 = calc_state.call(null);
var inst_27848 = inst_27889;
var state_27918__$1 = (function (){var statearr_27947 = state_27918;
(statearr_27947[(7)] = inst_27848);

(statearr_27947[(15)] = inst_27888);

return statearr_27947;
})();
var statearr_27948_28003 = state_27918__$1;
(statearr_27948_28003[(2)] = null);

(statearr_27948_28003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (25))){
var inst_27914 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27949_28004 = state_27918__$1;
(statearr_27949_28004[(2)] = inst_27914);

(statearr_27949_28004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (34))){
var inst_27912 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27950_28005 = state_27918__$1;
(statearr_27950_28005[(2)] = inst_27912);

(statearr_27950_28005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (17))){
var state_27918__$1 = state_27918;
var statearr_27951_28006 = state_27918__$1;
(statearr_27951_28006[(2)] = false);

(statearr_27951_28006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (3))){
var state_27918__$1 = state_27918;
var statearr_27952_28007 = state_27918__$1;
(statearr_27952_28007[(2)] = false);

(statearr_27952_28007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (12))){
var inst_27916 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
if((state_val_27919 === (2))){
var inst_27824 = (state_27918[(8)]);
var inst_27829 = inst_27824.cljs$lang$protocol_mask$partition0$;
var inst_27830 = (inst_27829 & (64));
var inst_27831 = inst_27824.cljs$core$ISeq$;
var inst_27832 = (inst_27830) || (inst_27831);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27832)){
var statearr_27953_28008 = state_27918__$1;
(statearr_27953_28008[(1)] = (5));

} else {
var statearr_27954_28009 = state_27918__$1;
(statearr_27954_28009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (23))){
var inst_27877 = (state_27918[(14)]);
var inst_27883 = (inst_27877 == null);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27883)){
var statearr_27955_28010 = state_27918__$1;
(statearr_27955_28010[(1)] = (26));

} else {
var statearr_27956_28011 = state_27918__$1;
(statearr_27956_28011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (35))){
var inst_27903 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27903)){
var statearr_27957_28012 = state_27918__$1;
(statearr_27957_28012[(1)] = (36));

} else {
var statearr_27958_28013 = state_27918__$1;
(statearr_27958_28013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (19))){
var inst_27848 = (state_27918[(7)]);
var inst_27867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27848);
var state_27918__$1 = state_27918;
var statearr_27959_28014 = state_27918__$1;
(statearr_27959_28014[(2)] = inst_27867);

(statearr_27959_28014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (11))){
var inst_27848 = (state_27918[(7)]);
var inst_27852 = (inst_27848 == null);
var inst_27853 = cljs.core.not.call(null,inst_27852);
var state_27918__$1 = state_27918;
if(inst_27853){
var statearr_27960_28015 = state_27918__$1;
(statearr_27960_28015[(1)] = (13));

} else {
var statearr_27961_28016 = state_27918__$1;
(statearr_27961_28016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (9))){
var inst_27824 = (state_27918[(8)]);
var state_27918__$1 = state_27918;
var statearr_27962_28017 = state_27918__$1;
(statearr_27962_28017[(2)] = inst_27824);

(statearr_27962_28017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (5))){
var state_27918__$1 = state_27918;
var statearr_27963_28018 = state_27918__$1;
(statearr_27963_28018[(2)] = true);

(statearr_27963_28018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (14))){
var state_27918__$1 = state_27918;
var statearr_27964_28019 = state_27918__$1;
(statearr_27964_28019[(2)] = false);

(statearr_27964_28019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (26))){
var inst_27878 = (state_27918[(11)]);
var inst_27885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27878);
var state_27918__$1 = state_27918;
var statearr_27965_28020 = state_27918__$1;
(statearr_27965_28020[(2)] = inst_27885);

(statearr_27965_28020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (16))){
var state_27918__$1 = state_27918;
var statearr_27966_28021 = state_27918__$1;
(statearr_27966_28021[(2)] = true);

(statearr_27966_28021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (38))){
var inst_27908 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27967_28022 = state_27918__$1;
(statearr_27967_28022[(2)] = inst_27908);

(statearr_27967_28022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (30))){
var inst_27871 = (state_27918[(10)]);
var inst_27872 = (state_27918[(13)]);
var inst_27878 = (state_27918[(11)]);
var inst_27895 = cljs.core.empty_QMARK_.call(null,inst_27871);
var inst_27896 = inst_27872.call(null,inst_27878);
var inst_27897 = cljs.core.not.call(null,inst_27896);
var inst_27898 = (inst_27895) && (inst_27897);
var state_27918__$1 = state_27918;
var statearr_27968_28023 = state_27918__$1;
(statearr_27968_28023[(2)] = inst_27898);

(statearr_27968_28023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (10))){
var inst_27824 = (state_27918[(8)]);
var inst_27844 = (state_27918[(2)]);
var inst_27845 = cljs.core.get.call(null,inst_27844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27846 = cljs.core.get.call(null,inst_27844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27847 = cljs.core.get.call(null,inst_27844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27848 = inst_27824;
var state_27918__$1 = (function (){var statearr_27969 = state_27918;
(statearr_27969[(16)] = inst_27847);

(statearr_27969[(17)] = inst_27846);

(statearr_27969[(7)] = inst_27848);

(statearr_27969[(18)] = inst_27845);

return statearr_27969;
})();
var statearr_27970_28024 = state_27918__$1;
(statearr_27970_28024[(2)] = null);

(statearr_27970_28024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (18))){
var inst_27862 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27971_28025 = state_27918__$1;
(statearr_27971_28025[(2)] = inst_27862);

(statearr_27971_28025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (37))){
var state_27918__$1 = state_27918;
var statearr_27972_28026 = state_27918__$1;
(statearr_27972_28026[(2)] = null);

(statearr_27972_28026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (8))){
var inst_27824 = (state_27918[(8)]);
var inst_27841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27824);
var state_27918__$1 = state_27918;
var statearr_27973_28027 = state_27918__$1;
(statearr_27973_28027[(2)] = inst_27841);

(statearr_27973_28027[(1)] = (10));


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
});})(c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22974__auto__,c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22975__auto__ = null;
var cljs$core$async$mix_$_state_machine__22975__auto____0 = (function (){
var statearr_27977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27977[(0)] = cljs$core$async$mix_$_state_machine__22975__auto__);

(statearr_27977[(1)] = (1));

return statearr_27977;
});
var cljs$core$async$mix_$_state_machine__22975__auto____1 = (function (state_27918){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e27978){if((e27978 instanceof Object)){
var ex__22978__auto__ = e27978;
var statearr_27979_28028 = state_27918;
(statearr_27979_28028[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28029 = state_27918;
state_27918 = G__28029;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22975__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22975__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22975__auto____0;
cljs$core$async$mix_$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22975__auto____1;
return cljs$core$async$mix_$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23041__auto__ = (function (){var statearr_27980 = f__23040__auto__.call(null);
(statearr_27980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___27981);

return statearr_27980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___27981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16205__auto__ = (((p == null))?null:p);
var m__16206__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16206__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16205__auto__ = (((p == null))?null:p);
var m__16206__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,p,v,ch);
} else {
var m__16206__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28030 = [];
var len__16608__auto___28033 = arguments.length;
var i__16609__auto___28034 = (0);
while(true){
if((i__16609__auto___28034 < len__16608__auto___28033)){
args28030.push((arguments[i__16609__auto___28034]));

var G__28035 = (i__16609__auto___28034 + (1));
i__16609__auto___28034 = G__28035;
continue;
} else {
}
break;
}

var G__28032 = args28030.length;
switch (G__28032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28030.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16205__auto__ = (((p == null))?null:p);
var m__16206__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,p);
} else {
var m__16206__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,p);
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
var x__16205__auto__ = (((p == null))?null:p);
var m__16206__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16205__auto__)]);
if(!((m__16206__auto__ == null))){
return m__16206__auto__.call(null,p,v);
} else {
var m__16206__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16206__auto____$1 == null))){
return m__16206__auto____$1.call(null,p,v);
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
var args28038 = [];
var len__16608__auto___28163 = arguments.length;
var i__16609__auto___28164 = (0);
while(true){
if((i__16609__auto___28164 < len__16608__auto___28163)){
args28038.push((arguments[i__16609__auto___28164]));

var G__28165 = (i__16609__auto___28164 + (1));
i__16609__auto___28164 = G__28165;
continue;
} else {
}
break;
}

var G__28040 = args28038.length;
switch (G__28040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28038.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__15550__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15550__auto__)){
return or__15550__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15550__auto__,mults){
return (function (p1__28037_SHARP_){
if(cljs.core.truth_(p1__28037_SHARP_.call(null,topic))){
return p1__28037_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15550__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28042 = meta28042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28043,meta28042__$1){
var self__ = this;
var _28043__$1 = this;
return (new cljs.core.async.t_cljs$core$async28041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28043){
var self__ = this;
var _28043__$1 = this;
return self__.meta28042;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28042","meta28042",1619838771,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28041";

cljs.core.async.t_cljs$core$async28041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async28041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28041 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28042){
return (new cljs.core.async.t_cljs$core$async28041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23039__auto___28167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28167,mults,ensure_mult,p){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28167,mults,ensure_mult,p){
return (function (state_28115){
var state_val_28116 = (state_28115[(1)]);
if((state_val_28116 === (7))){
var inst_28111 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28117_28168 = state_28115__$1;
(statearr_28117_28168[(2)] = inst_28111);

(statearr_28117_28168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (20))){
var state_28115__$1 = state_28115;
var statearr_28118_28169 = state_28115__$1;
(statearr_28118_28169[(2)] = null);

(statearr_28118_28169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (1))){
var state_28115__$1 = state_28115;
var statearr_28119_28170 = state_28115__$1;
(statearr_28119_28170[(2)] = null);

(statearr_28119_28170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (24))){
var inst_28094 = (state_28115[(7)]);
var inst_28103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28094);
var state_28115__$1 = state_28115;
var statearr_28120_28171 = state_28115__$1;
(statearr_28120_28171[(2)] = inst_28103);

(statearr_28120_28171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (4))){
var inst_28046 = (state_28115[(8)]);
var inst_28046__$1 = (state_28115[(2)]);
var inst_28047 = (inst_28046__$1 == null);
var state_28115__$1 = (function (){var statearr_28121 = state_28115;
(statearr_28121[(8)] = inst_28046__$1);

return statearr_28121;
})();
if(cljs.core.truth_(inst_28047)){
var statearr_28122_28172 = state_28115__$1;
(statearr_28122_28172[(1)] = (5));

} else {
var statearr_28123_28173 = state_28115__$1;
(statearr_28123_28173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (15))){
var inst_28088 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28124_28174 = state_28115__$1;
(statearr_28124_28174[(2)] = inst_28088);

(statearr_28124_28174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (21))){
var inst_28108 = (state_28115[(2)]);
var state_28115__$1 = (function (){var statearr_28125 = state_28115;
(statearr_28125[(9)] = inst_28108);

return statearr_28125;
})();
var statearr_28126_28175 = state_28115__$1;
(statearr_28126_28175[(2)] = null);

(statearr_28126_28175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (13))){
var inst_28070 = (state_28115[(10)]);
var inst_28072 = cljs.core.chunked_seq_QMARK_.call(null,inst_28070);
var state_28115__$1 = state_28115;
if(inst_28072){
var statearr_28127_28176 = state_28115__$1;
(statearr_28127_28176[(1)] = (16));

} else {
var statearr_28128_28177 = state_28115__$1;
(statearr_28128_28177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (22))){
var inst_28100 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
if(cljs.core.truth_(inst_28100)){
var statearr_28129_28178 = state_28115__$1;
(statearr_28129_28178[(1)] = (23));

} else {
var statearr_28130_28179 = state_28115__$1;
(statearr_28130_28179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (6))){
var inst_28094 = (state_28115[(7)]);
var inst_28046 = (state_28115[(8)]);
var inst_28096 = (state_28115[(11)]);
var inst_28094__$1 = topic_fn.call(null,inst_28046);
var inst_28095 = cljs.core.deref.call(null,mults);
var inst_28096__$1 = cljs.core.get.call(null,inst_28095,inst_28094__$1);
var state_28115__$1 = (function (){var statearr_28131 = state_28115;
(statearr_28131[(7)] = inst_28094__$1);

(statearr_28131[(11)] = inst_28096__$1);

return statearr_28131;
})();
if(cljs.core.truth_(inst_28096__$1)){
var statearr_28132_28180 = state_28115__$1;
(statearr_28132_28180[(1)] = (19));

} else {
var statearr_28133_28181 = state_28115__$1;
(statearr_28133_28181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (25))){
var inst_28105 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28134_28182 = state_28115__$1;
(statearr_28134_28182[(2)] = inst_28105);

(statearr_28134_28182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (17))){
var inst_28070 = (state_28115[(10)]);
var inst_28079 = cljs.core.first.call(null,inst_28070);
var inst_28080 = cljs.core.async.muxch_STAR_.call(null,inst_28079);
var inst_28081 = cljs.core.async.close_BANG_.call(null,inst_28080);
var inst_28082 = cljs.core.next.call(null,inst_28070);
var inst_28056 = inst_28082;
var inst_28057 = null;
var inst_28058 = (0);
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28135 = state_28115;
(statearr_28135[(12)] = inst_28057);

(statearr_28135[(13)] = inst_28059);

(statearr_28135[(14)] = inst_28081);

(statearr_28135[(15)] = inst_28056);

(statearr_28135[(16)] = inst_28058);

return statearr_28135;
})();
var statearr_28136_28183 = state_28115__$1;
(statearr_28136_28183[(2)] = null);

(statearr_28136_28183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (3))){
var inst_28113 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28115__$1,inst_28113);
} else {
if((state_val_28116 === (12))){
var inst_28090 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28137_28184 = state_28115__$1;
(statearr_28137_28184[(2)] = inst_28090);

(statearr_28137_28184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (2))){
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(4),ch);
} else {
if((state_val_28116 === (23))){
var state_28115__$1 = state_28115;
var statearr_28138_28185 = state_28115__$1;
(statearr_28138_28185[(2)] = null);

(statearr_28138_28185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (19))){
var inst_28046 = (state_28115[(8)]);
var inst_28096 = (state_28115[(11)]);
var inst_28098 = cljs.core.async.muxch_STAR_.call(null,inst_28096);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28115__$1,(22),inst_28098,inst_28046);
} else {
if((state_val_28116 === (11))){
var inst_28056 = (state_28115[(15)]);
var inst_28070 = (state_28115[(10)]);
var inst_28070__$1 = cljs.core.seq.call(null,inst_28056);
var state_28115__$1 = (function (){var statearr_28139 = state_28115;
(statearr_28139[(10)] = inst_28070__$1);

return statearr_28139;
})();
if(inst_28070__$1){
var statearr_28140_28186 = state_28115__$1;
(statearr_28140_28186[(1)] = (13));

} else {
var statearr_28141_28187 = state_28115__$1;
(statearr_28141_28187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (9))){
var inst_28092 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28142_28188 = state_28115__$1;
(statearr_28142_28188[(2)] = inst_28092);

(statearr_28142_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (5))){
var inst_28053 = cljs.core.deref.call(null,mults);
var inst_28054 = cljs.core.vals.call(null,inst_28053);
var inst_28055 = cljs.core.seq.call(null,inst_28054);
var inst_28056 = inst_28055;
var inst_28057 = null;
var inst_28058 = (0);
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28143 = state_28115;
(statearr_28143[(12)] = inst_28057);

(statearr_28143[(13)] = inst_28059);

(statearr_28143[(15)] = inst_28056);

(statearr_28143[(16)] = inst_28058);

return statearr_28143;
})();
var statearr_28144_28189 = state_28115__$1;
(statearr_28144_28189[(2)] = null);

(statearr_28144_28189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (14))){
var state_28115__$1 = state_28115;
var statearr_28148_28190 = state_28115__$1;
(statearr_28148_28190[(2)] = null);

(statearr_28148_28190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (16))){
var inst_28070 = (state_28115[(10)]);
var inst_28074 = cljs.core.chunk_first.call(null,inst_28070);
var inst_28075 = cljs.core.chunk_rest.call(null,inst_28070);
var inst_28076 = cljs.core.count.call(null,inst_28074);
var inst_28056 = inst_28075;
var inst_28057 = inst_28074;
var inst_28058 = inst_28076;
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28149 = state_28115;
(statearr_28149[(12)] = inst_28057);

(statearr_28149[(13)] = inst_28059);

(statearr_28149[(15)] = inst_28056);

(statearr_28149[(16)] = inst_28058);

return statearr_28149;
})();
var statearr_28150_28191 = state_28115__$1;
(statearr_28150_28191[(2)] = null);

(statearr_28150_28191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (10))){
var inst_28057 = (state_28115[(12)]);
var inst_28059 = (state_28115[(13)]);
var inst_28056 = (state_28115[(15)]);
var inst_28058 = (state_28115[(16)]);
var inst_28064 = cljs.core._nth.call(null,inst_28057,inst_28059);
var inst_28065 = cljs.core.async.muxch_STAR_.call(null,inst_28064);
var inst_28066 = cljs.core.async.close_BANG_.call(null,inst_28065);
var inst_28067 = (inst_28059 + (1));
var tmp28145 = inst_28057;
var tmp28146 = inst_28056;
var tmp28147 = inst_28058;
var inst_28056__$1 = tmp28146;
var inst_28057__$1 = tmp28145;
var inst_28058__$1 = tmp28147;
var inst_28059__$1 = inst_28067;
var state_28115__$1 = (function (){var statearr_28151 = state_28115;
(statearr_28151[(12)] = inst_28057__$1);

(statearr_28151[(13)] = inst_28059__$1);

(statearr_28151[(17)] = inst_28066);

(statearr_28151[(15)] = inst_28056__$1);

(statearr_28151[(16)] = inst_28058__$1);

return statearr_28151;
})();
var statearr_28152_28192 = state_28115__$1;
(statearr_28152_28192[(2)] = null);

(statearr_28152_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (18))){
var inst_28085 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28153_28193 = state_28115__$1;
(statearr_28153_28193[(2)] = inst_28085);

(statearr_28153_28193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (8))){
var inst_28059 = (state_28115[(13)]);
var inst_28058 = (state_28115[(16)]);
var inst_28061 = (inst_28059 < inst_28058);
var inst_28062 = inst_28061;
var state_28115__$1 = state_28115;
if(cljs.core.truth_(inst_28062)){
var statearr_28154_28194 = state_28115__$1;
(statearr_28154_28194[(1)] = (10));

} else {
var statearr_28155_28195 = state_28115__$1;
(statearr_28155_28195[(1)] = (11));

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
});})(c__23039__auto___28167,mults,ensure_mult,p))
;
return ((function (switch__22974__auto__,c__23039__auto___28167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28159[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28159[(1)] = (1));

return statearr_28159;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28115){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28160){if((e28160 instanceof Object)){
var ex__22978__auto__ = e28160;
var statearr_28161_28196 = state_28115;
(statearr_28161_28196[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28197 = state_28115;
state_28115 = G__28197;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28167,mults,ensure_mult,p))
})();
var state__23041__auto__ = (function (){var statearr_28162 = f__23040__auto__.call(null);
(statearr_28162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28167);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28167,mults,ensure_mult,p))
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
var args28198 = [];
var len__16608__auto___28201 = arguments.length;
var i__16609__auto___28202 = (0);
while(true){
if((i__16609__auto___28202 < len__16608__auto___28201)){
args28198.push((arguments[i__16609__auto___28202]));

var G__28203 = (i__16609__auto___28202 + (1));
i__16609__auto___28202 = G__28203;
continue;
} else {
}
break;
}

var G__28200 = args28198.length;
switch (G__28200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28198.length)].join('')));

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
var args28205 = [];
var len__16608__auto___28208 = arguments.length;
var i__16609__auto___28209 = (0);
while(true){
if((i__16609__auto___28209 < len__16608__auto___28208)){
args28205.push((arguments[i__16609__auto___28209]));

var G__28210 = (i__16609__auto___28209 + (1));
i__16609__auto___28209 = G__28210;
continue;
} else {
}
break;
}

var G__28207 = args28205.length;
switch (G__28207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28205.length)].join('')));

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
var args28212 = [];
var len__16608__auto___28283 = arguments.length;
var i__16609__auto___28284 = (0);
while(true){
if((i__16609__auto___28284 < len__16608__auto___28283)){
args28212.push((arguments[i__16609__auto___28284]));

var G__28285 = (i__16609__auto___28284 + (1));
i__16609__auto___28284 = G__28285;
continue;
} else {
}
break;
}

var G__28214 = args28212.length;
switch (G__28214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28212.length)].join('')));

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
var c__23039__auto___28287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28253){
var state_val_28254 = (state_28253[(1)]);
if((state_val_28254 === (7))){
var state_28253__$1 = state_28253;
var statearr_28255_28288 = state_28253__$1;
(statearr_28255_28288[(2)] = null);

(statearr_28255_28288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (1))){
var state_28253__$1 = state_28253;
var statearr_28256_28289 = state_28253__$1;
(statearr_28256_28289[(2)] = null);

(statearr_28256_28289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (4))){
var inst_28217 = (state_28253[(7)]);
var inst_28219 = (inst_28217 < cnt);
var state_28253__$1 = state_28253;
if(cljs.core.truth_(inst_28219)){
var statearr_28257_28290 = state_28253__$1;
(statearr_28257_28290[(1)] = (6));

} else {
var statearr_28258_28291 = state_28253__$1;
(statearr_28258_28291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (15))){
var inst_28249 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28259_28292 = state_28253__$1;
(statearr_28259_28292[(2)] = inst_28249);

(statearr_28259_28292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (13))){
var inst_28242 = cljs.core.async.close_BANG_.call(null,out);
var state_28253__$1 = state_28253;
var statearr_28260_28293 = state_28253__$1;
(statearr_28260_28293[(2)] = inst_28242);

(statearr_28260_28293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (6))){
var state_28253__$1 = state_28253;
var statearr_28261_28294 = state_28253__$1;
(statearr_28261_28294[(2)] = null);

(statearr_28261_28294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (3))){
var inst_28251 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28253__$1,inst_28251);
} else {
if((state_val_28254 === (12))){
var inst_28239 = (state_28253[(8)]);
var inst_28239__$1 = (state_28253[(2)]);
var inst_28240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28239__$1);
var state_28253__$1 = (function (){var statearr_28262 = state_28253;
(statearr_28262[(8)] = inst_28239__$1);

return statearr_28262;
})();
if(cljs.core.truth_(inst_28240)){
var statearr_28263_28295 = state_28253__$1;
(statearr_28263_28295[(1)] = (13));

} else {
var statearr_28264_28296 = state_28253__$1;
(statearr_28264_28296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (2))){
var inst_28216 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28217 = (0);
var state_28253__$1 = (function (){var statearr_28265 = state_28253;
(statearr_28265[(7)] = inst_28217);

(statearr_28265[(9)] = inst_28216);

return statearr_28265;
})();
var statearr_28266_28297 = state_28253__$1;
(statearr_28266_28297[(2)] = null);

(statearr_28266_28297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (11))){
var inst_28217 = (state_28253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28253,(10),Object,null,(9));
var inst_28226 = chs__$1.call(null,inst_28217);
var inst_28227 = done.call(null,inst_28217);
var inst_28228 = cljs.core.async.take_BANG_.call(null,inst_28226,inst_28227);
var state_28253__$1 = state_28253;
var statearr_28267_28298 = state_28253__$1;
(statearr_28267_28298[(2)] = inst_28228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (9))){
var inst_28217 = (state_28253[(7)]);
var inst_28230 = (state_28253[(2)]);
var inst_28231 = (inst_28217 + (1));
var inst_28217__$1 = inst_28231;
var state_28253__$1 = (function (){var statearr_28268 = state_28253;
(statearr_28268[(7)] = inst_28217__$1);

(statearr_28268[(10)] = inst_28230);

return statearr_28268;
})();
var statearr_28269_28299 = state_28253__$1;
(statearr_28269_28299[(2)] = null);

(statearr_28269_28299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (5))){
var inst_28237 = (state_28253[(2)]);
var state_28253__$1 = (function (){var statearr_28270 = state_28253;
(statearr_28270[(11)] = inst_28237);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28253__$1,(12),dchan);
} else {
if((state_val_28254 === (14))){
var inst_28239 = (state_28253[(8)]);
var inst_28244 = cljs.core.apply.call(null,f,inst_28239);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28253__$1,(16),out,inst_28244);
} else {
if((state_val_28254 === (16))){
var inst_28246 = (state_28253[(2)]);
var state_28253__$1 = (function (){var statearr_28271 = state_28253;
(statearr_28271[(12)] = inst_28246);

return statearr_28271;
})();
var statearr_28272_28300 = state_28253__$1;
(statearr_28272_28300[(2)] = null);

(statearr_28272_28300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (10))){
var inst_28221 = (state_28253[(2)]);
var inst_28222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28253__$1 = (function (){var statearr_28273 = state_28253;
(statearr_28273[(13)] = inst_28221);

return statearr_28273;
})();
var statearr_28274_28301 = state_28253__$1;
(statearr_28274_28301[(2)] = inst_28222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (8))){
var inst_28235 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28275_28302 = state_28253__$1;
(statearr_28275_28302[(2)] = inst_28235);

(statearr_28275_28302[(1)] = (5));


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
});})(c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22974__auto__,c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28279[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28279[(1)] = (1));

return statearr_28279;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28253){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28280){if((e28280 instanceof Object)){
var ex__22978__auto__ = e28280;
var statearr_28281_28303 = state_28253;
(statearr_28281_28303[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28304 = state_28253;
state_28253 = G__28304;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23041__auto__ = (function (){var statearr_28282 = f__23040__auto__.call(null);
(statearr_28282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28287);

return statearr_28282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28287,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28306 = [];
var len__16608__auto___28362 = arguments.length;
var i__16609__auto___28363 = (0);
while(true){
if((i__16609__auto___28363 < len__16608__auto___28362)){
args28306.push((arguments[i__16609__auto___28363]));

var G__28364 = (i__16609__auto___28363 + (1));
i__16609__auto___28363 = G__28364;
continue;
} else {
}
break;
}

var G__28308 = args28306.length;
switch (G__28308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___28366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28366,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28366,out){
return (function (state_28338){
var state_val_28339 = (state_28338[(1)]);
if((state_val_28339 === (7))){
var inst_28317 = (state_28338[(7)]);
var inst_28318 = (state_28338[(8)]);
var inst_28317__$1 = (state_28338[(2)]);
var inst_28318__$1 = cljs.core.nth.call(null,inst_28317__$1,(0),null);
var inst_28319 = cljs.core.nth.call(null,inst_28317__$1,(1),null);
var inst_28320 = (inst_28318__$1 == null);
var state_28338__$1 = (function (){var statearr_28340 = state_28338;
(statearr_28340[(7)] = inst_28317__$1);

(statearr_28340[(8)] = inst_28318__$1);

(statearr_28340[(9)] = inst_28319);

return statearr_28340;
})();
if(cljs.core.truth_(inst_28320)){
var statearr_28341_28367 = state_28338__$1;
(statearr_28341_28367[(1)] = (8));

} else {
var statearr_28342_28368 = state_28338__$1;
(statearr_28342_28368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (1))){
var inst_28309 = cljs.core.vec.call(null,chs);
var inst_28310 = inst_28309;
var state_28338__$1 = (function (){var statearr_28343 = state_28338;
(statearr_28343[(10)] = inst_28310);

return statearr_28343;
})();
var statearr_28344_28369 = state_28338__$1;
(statearr_28344_28369[(2)] = null);

(statearr_28344_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (4))){
var inst_28310 = (state_28338[(10)]);
var state_28338__$1 = state_28338;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28338__$1,(7),inst_28310);
} else {
if((state_val_28339 === (6))){
var inst_28334 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28345_28370 = state_28338__$1;
(statearr_28345_28370[(2)] = inst_28334);

(statearr_28345_28370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (3))){
var inst_28336 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28338__$1,inst_28336);
} else {
if((state_val_28339 === (2))){
var inst_28310 = (state_28338[(10)]);
var inst_28312 = cljs.core.count.call(null,inst_28310);
var inst_28313 = (inst_28312 > (0));
var state_28338__$1 = state_28338;
if(cljs.core.truth_(inst_28313)){
var statearr_28347_28371 = state_28338__$1;
(statearr_28347_28371[(1)] = (4));

} else {
var statearr_28348_28372 = state_28338__$1;
(statearr_28348_28372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (11))){
var inst_28310 = (state_28338[(10)]);
var inst_28327 = (state_28338[(2)]);
var tmp28346 = inst_28310;
var inst_28310__$1 = tmp28346;
var state_28338__$1 = (function (){var statearr_28349 = state_28338;
(statearr_28349[(11)] = inst_28327);

(statearr_28349[(10)] = inst_28310__$1);

return statearr_28349;
})();
var statearr_28350_28373 = state_28338__$1;
(statearr_28350_28373[(2)] = null);

(statearr_28350_28373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (9))){
var inst_28318 = (state_28338[(8)]);
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28338__$1,(11),out,inst_28318);
} else {
if((state_val_28339 === (5))){
var inst_28332 = cljs.core.async.close_BANG_.call(null,out);
var state_28338__$1 = state_28338;
var statearr_28351_28374 = state_28338__$1;
(statearr_28351_28374[(2)] = inst_28332);

(statearr_28351_28374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (10))){
var inst_28330 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28352_28375 = state_28338__$1;
(statearr_28352_28375[(2)] = inst_28330);

(statearr_28352_28375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (8))){
var inst_28317 = (state_28338[(7)]);
var inst_28318 = (state_28338[(8)]);
var inst_28319 = (state_28338[(9)]);
var inst_28310 = (state_28338[(10)]);
var inst_28322 = (function (){var cs = inst_28310;
var vec__28315 = inst_28317;
var v = inst_28318;
var c = inst_28319;
return ((function (cs,vec__28315,v,c,inst_28317,inst_28318,inst_28319,inst_28310,state_val_28339,c__23039__auto___28366,out){
return (function (p1__28305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28305_SHARP_);
});
;})(cs,vec__28315,v,c,inst_28317,inst_28318,inst_28319,inst_28310,state_val_28339,c__23039__auto___28366,out))
})();
var inst_28323 = cljs.core.filterv.call(null,inst_28322,inst_28310);
var inst_28310__$1 = inst_28323;
var state_28338__$1 = (function (){var statearr_28353 = state_28338;
(statearr_28353[(10)] = inst_28310__$1);

return statearr_28353;
})();
var statearr_28354_28376 = state_28338__$1;
(statearr_28354_28376[(2)] = null);

(statearr_28354_28376[(1)] = (2));


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
});})(c__23039__auto___28366,out))
;
return ((function (switch__22974__auto__,c__23039__auto___28366,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28358[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28358[(1)] = (1));

return statearr_28358;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28338){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28359){if((e28359 instanceof Object)){
var ex__22978__auto__ = e28359;
var statearr_28360_28377 = state_28338;
(statearr_28360_28377[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28378 = state_28338;
state_28338 = G__28378;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28366,out))
})();
var state__23041__auto__ = (function (){var statearr_28361 = f__23040__auto__.call(null);
(statearr_28361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28366);

return statearr_28361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28366,out))
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
var args28379 = [];
var len__16608__auto___28428 = arguments.length;
var i__16609__auto___28429 = (0);
while(true){
if((i__16609__auto___28429 < len__16608__auto___28428)){
args28379.push((arguments[i__16609__auto___28429]));

var G__28430 = (i__16609__auto___28429 + (1));
i__16609__auto___28429 = G__28430;
continue;
} else {
}
break;
}

var G__28381 = args28379.length;
switch (G__28381) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28379.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___28432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28432,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28432,out){
return (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (7))){
var inst_28387 = (state_28405[(7)]);
var inst_28387__$1 = (state_28405[(2)]);
var inst_28388 = (inst_28387__$1 == null);
var inst_28389 = cljs.core.not.call(null,inst_28388);
var state_28405__$1 = (function (){var statearr_28407 = state_28405;
(statearr_28407[(7)] = inst_28387__$1);

return statearr_28407;
})();
if(inst_28389){
var statearr_28408_28433 = state_28405__$1;
(statearr_28408_28433[(1)] = (8));

} else {
var statearr_28409_28434 = state_28405__$1;
(statearr_28409_28434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (1))){
var inst_28382 = (0);
var state_28405__$1 = (function (){var statearr_28410 = state_28405;
(statearr_28410[(8)] = inst_28382);

return statearr_28410;
})();
var statearr_28411_28435 = state_28405__$1;
(statearr_28411_28435[(2)] = null);

(statearr_28411_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (4))){
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(7),ch);
} else {
if((state_val_28406 === (6))){
var inst_28400 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28412_28436 = state_28405__$1;
(statearr_28412_28436[(2)] = inst_28400);

(statearr_28412_28436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (3))){
var inst_28402 = (state_28405[(2)]);
var inst_28403 = cljs.core.async.close_BANG_.call(null,out);
var state_28405__$1 = (function (){var statearr_28413 = state_28405;
(statearr_28413[(9)] = inst_28402);

return statearr_28413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (2))){
var inst_28382 = (state_28405[(8)]);
var inst_28384 = (inst_28382 < n);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28384)){
var statearr_28414_28437 = state_28405__$1;
(statearr_28414_28437[(1)] = (4));

} else {
var statearr_28415_28438 = state_28405__$1;
(statearr_28415_28438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (11))){
var inst_28382 = (state_28405[(8)]);
var inst_28392 = (state_28405[(2)]);
var inst_28393 = (inst_28382 + (1));
var inst_28382__$1 = inst_28393;
var state_28405__$1 = (function (){var statearr_28416 = state_28405;
(statearr_28416[(8)] = inst_28382__$1);

(statearr_28416[(10)] = inst_28392);

return statearr_28416;
})();
var statearr_28417_28439 = state_28405__$1;
(statearr_28417_28439[(2)] = null);

(statearr_28417_28439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (9))){
var state_28405__$1 = state_28405;
var statearr_28418_28440 = state_28405__$1;
(statearr_28418_28440[(2)] = null);

(statearr_28418_28440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (5))){
var state_28405__$1 = state_28405;
var statearr_28419_28441 = state_28405__$1;
(statearr_28419_28441[(2)] = null);

(statearr_28419_28441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (10))){
var inst_28397 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28420_28442 = state_28405__$1;
(statearr_28420_28442[(2)] = inst_28397);

(statearr_28420_28442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (8))){
var inst_28387 = (state_28405[(7)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28405__$1,(11),out,inst_28387);
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
});})(c__23039__auto___28432,out))
;
return ((function (switch__22974__auto__,c__23039__auto___28432,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28424[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28424[(1)] = (1));

return statearr_28424;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28405){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28425){if((e28425 instanceof Object)){
var ex__22978__auto__ = e28425;
var statearr_28426_28443 = state_28405;
(statearr_28426_28443[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28444 = state_28405;
state_28405 = G__28444;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28432,out))
})();
var state__23041__auto__ = (function (){var statearr_28427 = f__23040__auto__.call(null);
(statearr_28427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28432);

return statearr_28427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28432,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28452 = (function (map_LT_,f,ch,meta28453){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28453 = meta28453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28454,meta28453__$1){
var self__ = this;
var _28454__$1 = this;
return (new cljs.core.async.t_cljs$core$async28452(self__.map_LT_,self__.f,self__.ch,meta28453__$1));
});

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28454){
var self__ = this;
var _28454__$1 = this;
return self__.meta28453;
});

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28455 = (function (map_LT_,f,ch,meta28453,_,fn1,meta28456){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28453 = meta28453;
this._ = _;
this.fn1 = fn1;
this.meta28456 = meta28456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28457,meta28456__$1){
var self__ = this;
var _28457__$1 = this;
return (new cljs.core.async.t_cljs$core$async28455(self__.map_LT_,self__.f,self__.ch,self__.meta28453,self__._,self__.fn1,meta28456__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28457){
var self__ = this;
var _28457__$1 = this;
return self__.meta28456;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28445_SHARP_){
return f1.call(null,(((p1__28445_SHARP_ == null))?null:self__.f.call(null,p1__28445_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28453","meta28453",-1461276531,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28452","cljs.core.async/t_cljs$core$async28452",290157336,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28456","meta28456",-455703268,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28455";

cljs.core.async.t_cljs$core$async28455.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async28455");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28455 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28455(map_LT___$1,f__$1,ch__$1,meta28453__$1,___$2,fn1__$1,meta28456){
return (new cljs.core.async.t_cljs$core$async28455(map_LT___$1,f__$1,ch__$1,meta28453__$1,___$2,fn1__$1,meta28456));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28455(self__.map_LT_,self__.f,self__.ch,self__.meta28453,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15538__auto__ = ret;
if(cljs.core.truth_(and__15538__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15538__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28453","meta28453",-1461276531,null)], null);
});

cljs.core.async.t_cljs$core$async28452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28452";

cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorPrWriter = (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async28452");
});

cljs.core.async.__GT_t_cljs$core$async28452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28452(map_LT___$1,f__$1,ch__$1,meta28453){
return (new cljs.core.async.t_cljs$core$async28452(map_LT___$1,f__$1,ch__$1,meta28453));
});

}

return (new cljs.core.async.t_cljs$core$async28452(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28461 = (function (map_GT_,f,ch,meta28462){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28462 = meta28462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28463,meta28462__$1){
var self__ = this;
var _28463__$1 = this;
return (new cljs.core.async.t_cljs$core$async28461(self__.map_GT_,self__.f,self__.ch,meta28462__$1));
});

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28463){
var self__ = this;
var _28463__$1 = this;
return self__.meta28462;
});

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28462","meta28462",721189358,null)], null);
});

cljs.core.async.t_cljs$core$async28461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28461";

cljs.core.async.t_cljs$core$async28461.cljs$lang$ctorPrWriter = (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async28461");
});

cljs.core.async.__GT_t_cljs$core$async28461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28461(map_GT___$1,f__$1,ch__$1,meta28462){
return (new cljs.core.async.t_cljs$core$async28461(map_GT___$1,f__$1,ch__$1,meta28462));
});

}

return (new cljs.core.async.t_cljs$core$async28461(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28467 = (function (filter_GT_,p,ch,meta28468){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28468 = meta28468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28469,meta28468__$1){
var self__ = this;
var _28469__$1 = this;
return (new cljs.core.async.t_cljs$core$async28467(self__.filter_GT_,self__.p,self__.ch,meta28468__$1));
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28469){
var self__ = this;
var _28469__$1 = this;
return self__.meta28468;
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28468","meta28468",-626638101,null)], null);
});

cljs.core.async.t_cljs$core$async28467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28467";

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorPrWriter = (function (this__16148__auto__,writer__16149__auto__,opt__16150__auto__){
return cljs.core._write.call(null,writer__16149__auto__,"cljs.core.async/t_cljs$core$async28467");
});

cljs.core.async.__GT_t_cljs$core$async28467 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28467(filter_GT___$1,p__$1,ch__$1,meta28468){
return (new cljs.core.async.t_cljs$core$async28467(filter_GT___$1,p__$1,ch__$1,meta28468));
});

}

return (new cljs.core.async.t_cljs$core$async28467(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28470 = [];
var len__16608__auto___28514 = arguments.length;
var i__16609__auto___28515 = (0);
while(true){
if((i__16609__auto___28515 < len__16608__auto___28514)){
args28470.push((arguments[i__16609__auto___28515]));

var G__28516 = (i__16609__auto___28515 + (1));
i__16609__auto___28515 = G__28516;
continue;
} else {
}
break;
}

var G__28472 = args28470.length;
switch (G__28472) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28470.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___28518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28518,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28518,out){
return (function (state_28493){
var state_val_28494 = (state_28493[(1)]);
if((state_val_28494 === (7))){
var inst_28489 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28495_28519 = state_28493__$1;
(statearr_28495_28519[(2)] = inst_28489);

(statearr_28495_28519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (1))){
var state_28493__$1 = state_28493;
var statearr_28496_28520 = state_28493__$1;
(statearr_28496_28520[(2)] = null);

(statearr_28496_28520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (4))){
var inst_28475 = (state_28493[(7)]);
var inst_28475__$1 = (state_28493[(2)]);
var inst_28476 = (inst_28475__$1 == null);
var state_28493__$1 = (function (){var statearr_28497 = state_28493;
(statearr_28497[(7)] = inst_28475__$1);

return statearr_28497;
})();
if(cljs.core.truth_(inst_28476)){
var statearr_28498_28521 = state_28493__$1;
(statearr_28498_28521[(1)] = (5));

} else {
var statearr_28499_28522 = state_28493__$1;
(statearr_28499_28522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (6))){
var inst_28475 = (state_28493[(7)]);
var inst_28480 = p.call(null,inst_28475);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28480)){
var statearr_28500_28523 = state_28493__$1;
(statearr_28500_28523[(1)] = (8));

} else {
var statearr_28501_28524 = state_28493__$1;
(statearr_28501_28524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (3))){
var inst_28491 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28493__$1,inst_28491);
} else {
if((state_val_28494 === (2))){
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(4),ch);
} else {
if((state_val_28494 === (11))){
var inst_28483 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28502_28525 = state_28493__$1;
(statearr_28502_28525[(2)] = inst_28483);

(statearr_28502_28525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (9))){
var state_28493__$1 = state_28493;
var statearr_28503_28526 = state_28493__$1;
(statearr_28503_28526[(2)] = null);

(statearr_28503_28526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (5))){
var inst_28478 = cljs.core.async.close_BANG_.call(null,out);
var state_28493__$1 = state_28493;
var statearr_28504_28527 = state_28493__$1;
(statearr_28504_28527[(2)] = inst_28478);

(statearr_28504_28527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (10))){
var inst_28486 = (state_28493[(2)]);
var state_28493__$1 = (function (){var statearr_28505 = state_28493;
(statearr_28505[(8)] = inst_28486);

return statearr_28505;
})();
var statearr_28506_28528 = state_28493__$1;
(statearr_28506_28528[(2)] = null);

(statearr_28506_28528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (8))){
var inst_28475 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28493__$1,(11),out,inst_28475);
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
});})(c__23039__auto___28518,out))
;
return ((function (switch__22974__auto__,c__23039__auto___28518,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28510 = [null,null,null,null,null,null,null,null,null];
(statearr_28510[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28510[(1)] = (1));

return statearr_28510;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28493){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object)){
var ex__22978__auto__ = e28511;
var statearr_28512_28529 = state_28493;
(statearr_28512_28529[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28493;
state_28493 = G__28530;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28518,out))
})();
var state__23041__auto__ = (function (){var statearr_28513 = f__23040__auto__.call(null);
(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28518);

return statearr_28513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28518,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28531 = [];
var len__16608__auto___28534 = arguments.length;
var i__16609__auto___28535 = (0);
while(true){
if((i__16609__auto___28535 < len__16608__auto___28534)){
args28531.push((arguments[i__16609__auto___28535]));

var G__28536 = (i__16609__auto___28535 + (1));
i__16609__auto___28535 = G__28536;
continue;
} else {
}
break;
}

var G__28533 = args28531.length;
switch (G__28533) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28531.length)].join('')));

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
var c__23039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto__){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto__){
return (function (state_28703){
var state_val_28704 = (state_28703[(1)]);
if((state_val_28704 === (7))){
var inst_28699 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28705_28746 = state_28703__$1;
(statearr_28705_28746[(2)] = inst_28699);

(statearr_28705_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (20))){
var inst_28669 = (state_28703[(7)]);
var inst_28680 = (state_28703[(2)]);
var inst_28681 = cljs.core.next.call(null,inst_28669);
var inst_28655 = inst_28681;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28706 = state_28703;
(statearr_28706[(8)] = inst_28680);

(statearr_28706[(9)] = inst_28656);

(statearr_28706[(10)] = inst_28655);

(statearr_28706[(11)] = inst_28658);

(statearr_28706[(12)] = inst_28657);

return statearr_28706;
})();
var statearr_28707_28747 = state_28703__$1;
(statearr_28707_28747[(2)] = null);

(statearr_28707_28747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (1))){
var state_28703__$1 = state_28703;
var statearr_28708_28748 = state_28703__$1;
(statearr_28708_28748[(2)] = null);

(statearr_28708_28748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (4))){
var inst_28644 = (state_28703[(13)]);
var inst_28644__$1 = (state_28703[(2)]);
var inst_28645 = (inst_28644__$1 == null);
var state_28703__$1 = (function (){var statearr_28709 = state_28703;
(statearr_28709[(13)] = inst_28644__$1);

return statearr_28709;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28710_28749 = state_28703__$1;
(statearr_28710_28749[(1)] = (5));

} else {
var statearr_28711_28750 = state_28703__$1;
(statearr_28711_28750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (15))){
var state_28703__$1 = state_28703;
var statearr_28715_28751 = state_28703__$1;
(statearr_28715_28751[(2)] = null);

(statearr_28715_28751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (21))){
var state_28703__$1 = state_28703;
var statearr_28716_28752 = state_28703__$1;
(statearr_28716_28752[(2)] = null);

(statearr_28716_28752[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (13))){
var inst_28656 = (state_28703[(9)]);
var inst_28655 = (state_28703[(10)]);
var inst_28658 = (state_28703[(11)]);
var inst_28657 = (state_28703[(12)]);
var inst_28665 = (state_28703[(2)]);
var inst_28666 = (inst_28658 + (1));
var tmp28712 = inst_28656;
var tmp28713 = inst_28655;
var tmp28714 = inst_28657;
var inst_28655__$1 = tmp28713;
var inst_28656__$1 = tmp28712;
var inst_28657__$1 = tmp28714;
var inst_28658__$1 = inst_28666;
var state_28703__$1 = (function (){var statearr_28717 = state_28703;
(statearr_28717[(14)] = inst_28665);

(statearr_28717[(9)] = inst_28656__$1);

(statearr_28717[(10)] = inst_28655__$1);

(statearr_28717[(11)] = inst_28658__$1);

(statearr_28717[(12)] = inst_28657__$1);

return statearr_28717;
})();
var statearr_28718_28753 = state_28703__$1;
(statearr_28718_28753[(2)] = null);

(statearr_28718_28753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (22))){
var state_28703__$1 = state_28703;
var statearr_28719_28754 = state_28703__$1;
(statearr_28719_28754[(2)] = null);

(statearr_28719_28754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (6))){
var inst_28644 = (state_28703[(13)]);
var inst_28653 = f.call(null,inst_28644);
var inst_28654 = cljs.core.seq.call(null,inst_28653);
var inst_28655 = inst_28654;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28720 = state_28703;
(statearr_28720[(9)] = inst_28656);

(statearr_28720[(10)] = inst_28655);

(statearr_28720[(11)] = inst_28658);

(statearr_28720[(12)] = inst_28657);

return statearr_28720;
})();
var statearr_28721_28755 = state_28703__$1;
(statearr_28721_28755[(2)] = null);

(statearr_28721_28755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (17))){
var inst_28669 = (state_28703[(7)]);
var inst_28673 = cljs.core.chunk_first.call(null,inst_28669);
var inst_28674 = cljs.core.chunk_rest.call(null,inst_28669);
var inst_28675 = cljs.core.count.call(null,inst_28673);
var inst_28655 = inst_28674;
var inst_28656 = inst_28673;
var inst_28657 = inst_28675;
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28722 = state_28703;
(statearr_28722[(9)] = inst_28656);

(statearr_28722[(10)] = inst_28655);

(statearr_28722[(11)] = inst_28658);

(statearr_28722[(12)] = inst_28657);

return statearr_28722;
})();
var statearr_28723_28756 = state_28703__$1;
(statearr_28723_28756[(2)] = null);

(statearr_28723_28756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (3))){
var inst_28701 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28703__$1,inst_28701);
} else {
if((state_val_28704 === (12))){
var inst_28689 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28724_28757 = state_28703__$1;
(statearr_28724_28757[(2)] = inst_28689);

(statearr_28724_28757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (2))){
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28703__$1,(4),in$);
} else {
if((state_val_28704 === (23))){
var inst_28697 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28725_28758 = state_28703__$1;
(statearr_28725_28758[(2)] = inst_28697);

(statearr_28725_28758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (19))){
var inst_28684 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28726_28759 = state_28703__$1;
(statearr_28726_28759[(2)] = inst_28684);

(statearr_28726_28759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (11))){
var inst_28655 = (state_28703[(10)]);
var inst_28669 = (state_28703[(7)]);
var inst_28669__$1 = cljs.core.seq.call(null,inst_28655);
var state_28703__$1 = (function (){var statearr_28727 = state_28703;
(statearr_28727[(7)] = inst_28669__$1);

return statearr_28727;
})();
if(inst_28669__$1){
var statearr_28728_28760 = state_28703__$1;
(statearr_28728_28760[(1)] = (14));

} else {
var statearr_28729_28761 = state_28703__$1;
(statearr_28729_28761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (9))){
var inst_28691 = (state_28703[(2)]);
var inst_28692 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28703__$1 = (function (){var statearr_28730 = state_28703;
(statearr_28730[(15)] = inst_28691);

return statearr_28730;
})();
if(cljs.core.truth_(inst_28692)){
var statearr_28731_28762 = state_28703__$1;
(statearr_28731_28762[(1)] = (21));

} else {
var statearr_28732_28763 = state_28703__$1;
(statearr_28732_28763[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (5))){
var inst_28647 = cljs.core.async.close_BANG_.call(null,out);
var state_28703__$1 = state_28703;
var statearr_28733_28764 = state_28703__$1;
(statearr_28733_28764[(2)] = inst_28647);

(statearr_28733_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (14))){
var inst_28669 = (state_28703[(7)]);
var inst_28671 = cljs.core.chunked_seq_QMARK_.call(null,inst_28669);
var state_28703__$1 = state_28703;
if(inst_28671){
var statearr_28734_28765 = state_28703__$1;
(statearr_28734_28765[(1)] = (17));

} else {
var statearr_28735_28766 = state_28703__$1;
(statearr_28735_28766[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (16))){
var inst_28687 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28736_28767 = state_28703__$1;
(statearr_28736_28767[(2)] = inst_28687);

(statearr_28736_28767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (10))){
var inst_28656 = (state_28703[(9)]);
var inst_28658 = (state_28703[(11)]);
var inst_28663 = cljs.core._nth.call(null,inst_28656,inst_28658);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(13),out,inst_28663);
} else {
if((state_val_28704 === (18))){
var inst_28669 = (state_28703[(7)]);
var inst_28678 = cljs.core.first.call(null,inst_28669);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(20),out,inst_28678);
} else {
if((state_val_28704 === (8))){
var inst_28658 = (state_28703[(11)]);
var inst_28657 = (state_28703[(12)]);
var inst_28660 = (inst_28658 < inst_28657);
var inst_28661 = inst_28660;
var state_28703__$1 = state_28703;
if(cljs.core.truth_(inst_28661)){
var statearr_28737_28768 = state_28703__$1;
(statearr_28737_28768[(1)] = (10));

} else {
var statearr_28738_28769 = state_28703__$1;
(statearr_28738_28769[(1)] = (11));

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
});})(c__23039__auto__))
;
return ((function (switch__22974__auto__,c__23039__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____0 = (function (){
var statearr_28742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28742[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__);

(statearr_28742[(1)] = (1));

return statearr_28742;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____1 = (function (state_28703){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28743){if((e28743 instanceof Object)){
var ex__22978__auto__ = e28743;
var statearr_28744_28770 = state_28703;
(statearr_28744_28770[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28771 = state_28703;
state_28703 = G__28771;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__ = function(state_28703){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____1.call(this,state_28703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22975__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto__))
})();
var state__23041__auto__ = (function (){var statearr_28745 = f__23040__auto__.call(null);
(statearr_28745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto__);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto__))
);

return c__23039__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28772 = [];
var len__16608__auto___28775 = arguments.length;
var i__16609__auto___28776 = (0);
while(true){
if((i__16609__auto___28776 < len__16608__auto___28775)){
args28772.push((arguments[i__16609__auto___28776]));

var G__28777 = (i__16609__auto___28776 + (1));
i__16609__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var G__28774 = args28772.length;
switch (G__28774) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28772.length)].join('')));

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
var args28779 = [];
var len__16608__auto___28782 = arguments.length;
var i__16609__auto___28783 = (0);
while(true){
if((i__16609__auto___28783 < len__16608__auto___28782)){
args28779.push((arguments[i__16609__auto___28783]));

var G__28784 = (i__16609__auto___28783 + (1));
i__16609__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var G__28781 = args28779.length;
switch (G__28781) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28779.length)].join('')));

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
var args28786 = [];
var len__16608__auto___28837 = arguments.length;
var i__16609__auto___28838 = (0);
while(true){
if((i__16609__auto___28838 < len__16608__auto___28837)){
args28786.push((arguments[i__16609__auto___28838]));

var G__28839 = (i__16609__auto___28838 + (1));
i__16609__auto___28838 = G__28839;
continue;
} else {
}
break;
}

var G__28788 = args28786.length;
switch (G__28788) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28786.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___28841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28841,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28841,out){
return (function (state_28812){
var state_val_28813 = (state_28812[(1)]);
if((state_val_28813 === (7))){
var inst_28807 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28814_28842 = state_28812__$1;
(statearr_28814_28842[(2)] = inst_28807);

(statearr_28814_28842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (1))){
var inst_28789 = null;
var state_28812__$1 = (function (){var statearr_28815 = state_28812;
(statearr_28815[(7)] = inst_28789);

return statearr_28815;
})();
var statearr_28816_28843 = state_28812__$1;
(statearr_28816_28843[(2)] = null);

(statearr_28816_28843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (4))){
var inst_28792 = (state_28812[(8)]);
var inst_28792__$1 = (state_28812[(2)]);
var inst_28793 = (inst_28792__$1 == null);
var inst_28794 = cljs.core.not.call(null,inst_28793);
var state_28812__$1 = (function (){var statearr_28817 = state_28812;
(statearr_28817[(8)] = inst_28792__$1);

return statearr_28817;
})();
if(inst_28794){
var statearr_28818_28844 = state_28812__$1;
(statearr_28818_28844[(1)] = (5));

} else {
var statearr_28819_28845 = state_28812__$1;
(statearr_28819_28845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (6))){
var state_28812__$1 = state_28812;
var statearr_28820_28846 = state_28812__$1;
(statearr_28820_28846[(2)] = null);

(statearr_28820_28846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (3))){
var inst_28809 = (state_28812[(2)]);
var inst_28810 = cljs.core.async.close_BANG_.call(null,out);
var state_28812__$1 = (function (){var statearr_28821 = state_28812;
(statearr_28821[(9)] = inst_28809);

return statearr_28821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28812__$1,inst_28810);
} else {
if((state_val_28813 === (2))){
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28812__$1,(4),ch);
} else {
if((state_val_28813 === (11))){
var inst_28792 = (state_28812[(8)]);
var inst_28801 = (state_28812[(2)]);
var inst_28789 = inst_28792;
var state_28812__$1 = (function (){var statearr_28822 = state_28812;
(statearr_28822[(10)] = inst_28801);

(statearr_28822[(7)] = inst_28789);

return statearr_28822;
})();
var statearr_28823_28847 = state_28812__$1;
(statearr_28823_28847[(2)] = null);

(statearr_28823_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (9))){
var inst_28792 = (state_28812[(8)]);
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28812__$1,(11),out,inst_28792);
} else {
if((state_val_28813 === (5))){
var inst_28789 = (state_28812[(7)]);
var inst_28792 = (state_28812[(8)]);
var inst_28796 = cljs.core._EQ_.call(null,inst_28792,inst_28789);
var state_28812__$1 = state_28812;
if(inst_28796){
var statearr_28825_28848 = state_28812__$1;
(statearr_28825_28848[(1)] = (8));

} else {
var statearr_28826_28849 = state_28812__$1;
(statearr_28826_28849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (10))){
var inst_28804 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28827_28850 = state_28812__$1;
(statearr_28827_28850[(2)] = inst_28804);

(statearr_28827_28850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (8))){
var inst_28789 = (state_28812[(7)]);
var tmp28824 = inst_28789;
var inst_28789__$1 = tmp28824;
var state_28812__$1 = (function (){var statearr_28828 = state_28812;
(statearr_28828[(7)] = inst_28789__$1);

return statearr_28828;
})();
var statearr_28829_28851 = state_28812__$1;
(statearr_28829_28851[(2)] = null);

(statearr_28829_28851[(1)] = (2));


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
});})(c__23039__auto___28841,out))
;
return ((function (switch__22974__auto__,c__23039__auto___28841,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28833[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28833[(1)] = (1));

return statearr_28833;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28812){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28834){if((e28834 instanceof Object)){
var ex__22978__auto__ = e28834;
var statearr_28835_28852 = state_28812;
(statearr_28835_28852[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28853 = state_28812;
state_28812 = G__28853;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28841,out))
})();
var state__23041__auto__ = (function (){var statearr_28836 = f__23040__auto__.call(null);
(statearr_28836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28841);

return statearr_28836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28841,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28854 = [];
var len__16608__auto___28924 = arguments.length;
var i__16609__auto___28925 = (0);
while(true){
if((i__16609__auto___28925 < len__16608__auto___28924)){
args28854.push((arguments[i__16609__auto___28925]));

var G__28926 = (i__16609__auto___28925 + (1));
i__16609__auto___28925 = G__28926;
continue;
} else {
}
break;
}

var G__28856 = args28854.length;
switch (G__28856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28854.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___28928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___28928,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___28928,out){
return (function (state_28894){
var state_val_28895 = (state_28894[(1)]);
if((state_val_28895 === (7))){
var inst_28890 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28896_28929 = state_28894__$1;
(statearr_28896_28929[(2)] = inst_28890);

(statearr_28896_28929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (1))){
var inst_28857 = (new Array(n));
var inst_28858 = inst_28857;
var inst_28859 = (0);
var state_28894__$1 = (function (){var statearr_28897 = state_28894;
(statearr_28897[(7)] = inst_28859);

(statearr_28897[(8)] = inst_28858);

return statearr_28897;
})();
var statearr_28898_28930 = state_28894__$1;
(statearr_28898_28930[(2)] = null);

(statearr_28898_28930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (4))){
var inst_28862 = (state_28894[(9)]);
var inst_28862__$1 = (state_28894[(2)]);
var inst_28863 = (inst_28862__$1 == null);
var inst_28864 = cljs.core.not.call(null,inst_28863);
var state_28894__$1 = (function (){var statearr_28899 = state_28894;
(statearr_28899[(9)] = inst_28862__$1);

return statearr_28899;
})();
if(inst_28864){
var statearr_28900_28931 = state_28894__$1;
(statearr_28900_28931[(1)] = (5));

} else {
var statearr_28901_28932 = state_28894__$1;
(statearr_28901_28932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (15))){
var inst_28884 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28902_28933 = state_28894__$1;
(statearr_28902_28933[(2)] = inst_28884);

(statearr_28902_28933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (13))){
var state_28894__$1 = state_28894;
var statearr_28903_28934 = state_28894__$1;
(statearr_28903_28934[(2)] = null);

(statearr_28903_28934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (6))){
var inst_28859 = (state_28894[(7)]);
var inst_28880 = (inst_28859 > (0));
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28880)){
var statearr_28904_28935 = state_28894__$1;
(statearr_28904_28935[(1)] = (12));

} else {
var statearr_28905_28936 = state_28894__$1;
(statearr_28905_28936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (3))){
var inst_28892 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28894__$1,inst_28892);
} else {
if((state_val_28895 === (12))){
var inst_28858 = (state_28894[(8)]);
var inst_28882 = cljs.core.vec.call(null,inst_28858);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28894__$1,(15),out,inst_28882);
} else {
if((state_val_28895 === (2))){
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(4),ch);
} else {
if((state_val_28895 === (11))){
var inst_28874 = (state_28894[(2)]);
var inst_28875 = (new Array(n));
var inst_28858 = inst_28875;
var inst_28859 = (0);
var state_28894__$1 = (function (){var statearr_28906 = state_28894;
(statearr_28906[(7)] = inst_28859);

(statearr_28906[(10)] = inst_28874);

(statearr_28906[(8)] = inst_28858);

return statearr_28906;
})();
var statearr_28907_28937 = state_28894__$1;
(statearr_28907_28937[(2)] = null);

(statearr_28907_28937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (9))){
var inst_28858 = (state_28894[(8)]);
var inst_28872 = cljs.core.vec.call(null,inst_28858);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28894__$1,(11),out,inst_28872);
} else {
if((state_val_28895 === (5))){
var inst_28867 = (state_28894[(11)]);
var inst_28862 = (state_28894[(9)]);
var inst_28859 = (state_28894[(7)]);
var inst_28858 = (state_28894[(8)]);
var inst_28866 = (inst_28858[inst_28859] = inst_28862);
var inst_28867__$1 = (inst_28859 + (1));
var inst_28868 = (inst_28867__$1 < n);
var state_28894__$1 = (function (){var statearr_28908 = state_28894;
(statearr_28908[(11)] = inst_28867__$1);

(statearr_28908[(12)] = inst_28866);

return statearr_28908;
})();
if(cljs.core.truth_(inst_28868)){
var statearr_28909_28938 = state_28894__$1;
(statearr_28909_28938[(1)] = (8));

} else {
var statearr_28910_28939 = state_28894__$1;
(statearr_28910_28939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (14))){
var inst_28887 = (state_28894[(2)]);
var inst_28888 = cljs.core.async.close_BANG_.call(null,out);
var state_28894__$1 = (function (){var statearr_28912 = state_28894;
(statearr_28912[(13)] = inst_28887);

return statearr_28912;
})();
var statearr_28913_28940 = state_28894__$1;
(statearr_28913_28940[(2)] = inst_28888);

(statearr_28913_28940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (10))){
var inst_28878 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28914_28941 = state_28894__$1;
(statearr_28914_28941[(2)] = inst_28878);

(statearr_28914_28941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (8))){
var inst_28867 = (state_28894[(11)]);
var inst_28858 = (state_28894[(8)]);
var tmp28911 = inst_28858;
var inst_28858__$1 = tmp28911;
var inst_28859 = inst_28867;
var state_28894__$1 = (function (){var statearr_28915 = state_28894;
(statearr_28915[(7)] = inst_28859);

(statearr_28915[(8)] = inst_28858__$1);

return statearr_28915;
})();
var statearr_28916_28942 = state_28894__$1;
(statearr_28916_28942[(2)] = null);

(statearr_28916_28942[(1)] = (2));


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
});})(c__23039__auto___28928,out))
;
return ((function (switch__22974__auto__,c__23039__auto___28928,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_28920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28920[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_28920[(1)] = (1));

return statearr_28920;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28894){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e28921){if((e28921 instanceof Object)){
var ex__22978__auto__ = e28921;
var statearr_28922_28943 = state_28894;
(statearr_28922_28943[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28944 = state_28894;
state_28894 = G__28944;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___28928,out))
})();
var state__23041__auto__ = (function (){var statearr_28923 = f__23040__auto__.call(null);
(statearr_28923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___28928);

return statearr_28923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___28928,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28945 = [];
var len__16608__auto___29019 = arguments.length;
var i__16609__auto___29020 = (0);
while(true){
if((i__16609__auto___29020 < len__16608__auto___29019)){
args28945.push((arguments[i__16609__auto___29020]));

var G__29021 = (i__16609__auto___29020 + (1));
i__16609__auto___29020 = G__29021;
continue;
} else {
}
break;
}

var G__28947 = args28945.length;
switch (G__28947) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28945.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23039__auto___29023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23039__auto___29023,out){
return (function (){
var f__23040__auto__ = (function (){var switch__22974__auto__ = ((function (c__23039__auto___29023,out){
return (function (state_28989){
var state_val_28990 = (state_28989[(1)]);
if((state_val_28990 === (7))){
var inst_28985 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_28991_29024 = state_28989__$1;
(statearr_28991_29024[(2)] = inst_28985);

(statearr_28991_29024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (1))){
var inst_28948 = [];
var inst_28949 = inst_28948;
var inst_28950 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28989__$1 = (function (){var statearr_28992 = state_28989;
(statearr_28992[(7)] = inst_28949);

(statearr_28992[(8)] = inst_28950);

return statearr_28992;
})();
var statearr_28993_29025 = state_28989__$1;
(statearr_28993_29025[(2)] = null);

(statearr_28993_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (4))){
var inst_28953 = (state_28989[(9)]);
var inst_28953__$1 = (state_28989[(2)]);
var inst_28954 = (inst_28953__$1 == null);
var inst_28955 = cljs.core.not.call(null,inst_28954);
var state_28989__$1 = (function (){var statearr_28994 = state_28989;
(statearr_28994[(9)] = inst_28953__$1);

return statearr_28994;
})();
if(inst_28955){
var statearr_28995_29026 = state_28989__$1;
(statearr_28995_29026[(1)] = (5));

} else {
var statearr_28996_29027 = state_28989__$1;
(statearr_28996_29027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (15))){
var inst_28979 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_28997_29028 = state_28989__$1;
(statearr_28997_29028[(2)] = inst_28979);

(statearr_28997_29028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (13))){
var state_28989__$1 = state_28989;
var statearr_28998_29029 = state_28989__$1;
(statearr_28998_29029[(2)] = null);

(statearr_28998_29029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (6))){
var inst_28949 = (state_28989[(7)]);
var inst_28974 = inst_28949.length;
var inst_28975 = (inst_28974 > (0));
var state_28989__$1 = state_28989;
if(cljs.core.truth_(inst_28975)){
var statearr_28999_29030 = state_28989__$1;
(statearr_28999_29030[(1)] = (12));

} else {
var statearr_29000_29031 = state_28989__$1;
(statearr_29000_29031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (3))){
var inst_28987 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28989__$1,inst_28987);
} else {
if((state_val_28990 === (12))){
var inst_28949 = (state_28989[(7)]);
var inst_28977 = cljs.core.vec.call(null,inst_28949);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28989__$1,(15),out,inst_28977);
} else {
if((state_val_28990 === (2))){
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28989__$1,(4),ch);
} else {
if((state_val_28990 === (11))){
var inst_28957 = (state_28989[(10)]);
var inst_28953 = (state_28989[(9)]);
var inst_28967 = (state_28989[(2)]);
var inst_28968 = [];
var inst_28969 = inst_28968.push(inst_28953);
var inst_28949 = inst_28968;
var inst_28950 = inst_28957;
var state_28989__$1 = (function (){var statearr_29001 = state_28989;
(statearr_29001[(7)] = inst_28949);

(statearr_29001[(11)] = inst_28967);

(statearr_29001[(12)] = inst_28969);

(statearr_29001[(8)] = inst_28950);

return statearr_29001;
})();
var statearr_29002_29032 = state_28989__$1;
(statearr_29002_29032[(2)] = null);

(statearr_29002_29032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (9))){
var inst_28949 = (state_28989[(7)]);
var inst_28965 = cljs.core.vec.call(null,inst_28949);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28989__$1,(11),out,inst_28965);
} else {
if((state_val_28990 === (5))){
var inst_28957 = (state_28989[(10)]);
var inst_28950 = (state_28989[(8)]);
var inst_28953 = (state_28989[(9)]);
var inst_28957__$1 = f.call(null,inst_28953);
var inst_28958 = cljs.core._EQ_.call(null,inst_28957__$1,inst_28950);
var inst_28959 = cljs.core.keyword_identical_QMARK_.call(null,inst_28950,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28960 = (inst_28958) || (inst_28959);
var state_28989__$1 = (function (){var statearr_29003 = state_28989;
(statearr_29003[(10)] = inst_28957__$1);

return statearr_29003;
})();
if(cljs.core.truth_(inst_28960)){
var statearr_29004_29033 = state_28989__$1;
(statearr_29004_29033[(1)] = (8));

} else {
var statearr_29005_29034 = state_28989__$1;
(statearr_29005_29034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (14))){
var inst_28982 = (state_28989[(2)]);
var inst_28983 = cljs.core.async.close_BANG_.call(null,out);
var state_28989__$1 = (function (){var statearr_29007 = state_28989;
(statearr_29007[(13)] = inst_28982);

return statearr_29007;
})();
var statearr_29008_29035 = state_28989__$1;
(statearr_29008_29035[(2)] = inst_28983);

(statearr_29008_29035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (10))){
var inst_28972 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_29009_29036 = state_28989__$1;
(statearr_29009_29036[(2)] = inst_28972);

(statearr_29009_29036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (8))){
var inst_28949 = (state_28989[(7)]);
var inst_28957 = (state_28989[(10)]);
var inst_28953 = (state_28989[(9)]);
var inst_28962 = inst_28949.push(inst_28953);
var tmp29006 = inst_28949;
var inst_28949__$1 = tmp29006;
var inst_28950 = inst_28957;
var state_28989__$1 = (function (){var statearr_29010 = state_28989;
(statearr_29010[(7)] = inst_28949__$1);

(statearr_29010[(8)] = inst_28950);

(statearr_29010[(14)] = inst_28962);

return statearr_29010;
})();
var statearr_29011_29037 = state_28989__$1;
(statearr_29011_29037[(2)] = null);

(statearr_29011_29037[(1)] = (2));


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
});})(c__23039__auto___29023,out))
;
return ((function (switch__22974__auto__,c__23039__auto___29023,out){
return (function() {
var cljs$core$async$state_machine__22975__auto__ = null;
var cljs$core$async$state_machine__22975__auto____0 = (function (){
var statearr_29015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29015[(0)] = cljs$core$async$state_machine__22975__auto__);

(statearr_29015[(1)] = (1));

return statearr_29015;
});
var cljs$core$async$state_machine__22975__auto____1 = (function (state_28989){
while(true){
var ret_value__22976__auto__ = (function (){try{while(true){
var result__22977__auto__ = switch__22974__auto__.call(null,state_28989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22977__auto__;
}
break;
}
}catch (e29016){if((e29016 instanceof Object)){
var ex__22978__auto__ = e29016;
var statearr_29017_29038 = state_28989;
(statearr_29017_29038[(5)] = ex__22978__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29039 = state_28989;
state_28989 = G__29039;
continue;
} else {
return ret_value__22976__auto__;
}
break;
}
});
cljs$core$async$state_machine__22975__auto__ = function(state_28989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22975__auto____1.call(this,state_28989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22975__auto____0;
cljs$core$async$state_machine__22975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22975__auto____1;
return cljs$core$async$state_machine__22975__auto__;
})()
;})(switch__22974__auto__,c__23039__auto___29023,out))
})();
var state__23041__auto__ = (function (){var statearr_29018 = f__23040__auto__.call(null);
(statearr_29018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23039__auto___29023);

return statearr_29018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23041__auto__);
});})(c__23039__auto___29023,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map