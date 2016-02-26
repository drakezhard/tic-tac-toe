// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__20399){
var vec__20401 = p__20399;
var k = cljs.core.nth.call(null,vec__20401,(0),null);
var v = cljs.core.nth.call(null,vec__20401,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__20402){
var vec__20405 = p__20402;
var f = cljs.core.nth.call(null,vec__20405,(0),null);
var args = cljs.core.nth.call(null,vec__20405,(1),null);
var call = vec__20405;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__15546__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__15546__auto__)){
return or__15546__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__15546__auto__ = args;
if(cljs.core.truth_(or__15546__auto__)){
return or__15546__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__20406 = ast;
var G__20406__$1 = (((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__20406,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866)):G__20406);
return G__20406__$1;
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__20408 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__20408,(0),null);
var v = cljs.core.nth.call(null,vec__20408,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"query","query",-1288509510),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(((typeof v === 'number') || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),v)))?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
))));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__20409){
var vec__20411 = p__20409;
var k = cljs.core.nth.call(null,vec__20411,(0),null);
var id = cljs.core.nth.call(null,vec__20411,(1),null);
var ref = vec__20411;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__20413 = expr;
var G__20413__$1 = (((expr instanceof cljs.core.Keyword))?cljs.core._conj.call(null,cljs.core.List.EMPTY,G__20413):G__20413);
return G__20413__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args20417 = [];
var len__16604__auto___20433 = arguments.length;
var i__16605__auto___20434 = (0);
while(true){
if((i__16605__auto___20434 < len__16604__auto___20433)){
args20417.push((arguments[i__16605__auto___20434]));

var G__20435 = (i__16605__auto___20434 + (1));
i__16605__auto___20434 = G__20435;
continue;
} else {
}
break;
}

var G__20419 = args20417.length;
switch (G__20419) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20417.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.call(null,ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__20420,unparse_QMARK_){
var map__20421 = p__20420;
var map__20421__$1 = ((((!((map__20421 == null)))?((((map__20421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20421):map__20421);
var ast = map__20421__$1;
var type = cljs.core.get.call(null,map__20421__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__20421__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__20423 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__20421,map__20421__$1,ast,type,component){
return (function (p1__20414_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__20414_SHARP_,unparse_QMARK_);
});})(map__20421,map__20421__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var G__20423__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__20423,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)):G__20423);
return G__20423__$1;
} else {
var map__20424 = ast;
var map__20424__$1 = ((((!((map__20424 == null)))?((((map__20424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20424):map__20424);
var key = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"params","params",710516235));
return om.next.impl.parser.wrap_expr.call(null,query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type))?(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__20426 = ast;
var map__20426__$1 = ((((!((map__20426 == null)))?((((map__20426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20426):map__20426);
var children = cljs.core.get.call(null,map__20426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component){
return (function (p__20428){
var map__20429 = p__20428;
var map__20429__$1 = ((((!((map__20429 == null)))?((((map__20429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20429):map__20429);
var union_key = cljs.core.get.call(null,map__20429__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.call(null,map__20429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.call(null,map__20429__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__20431 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__20429,map__20429__$1,union_key,children__$1,component__$1,map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component){
return (function (p1__20415_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__20415_SHARP_,unparse_QMARK_);
});})(map__20429,map__20429__$1,union_key,children__$1,component__$1,map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component))
),children__$1);
var G__20431__$1 = ((!((component__$1 == null)))?cljs.core.with_meta.call(null,G__20431,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1], null)):G__20431);
return G__20431__$1;
})()], null);
});})(map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__20432 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component){
return (function (p1__20416_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__20416_SHARP_,unparse_QMARK_);
});})(map__20426,map__20426__$1,children,map__20424,map__20424__$1,key,query,query_root,params,map__20421,map__20421__$1,ast,type,component))
),children);
var G__20432__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__20432,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)):G__20432);
return G__20432__$1;
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args20439 = [];
var len__16604__auto___20447 = arguments.length;
var i__16605__auto___20448 = (0);
while(true){
if((i__16605__auto___20448 < len__16604__auto___20447)){
args20439.push((arguments[i__16605__auto___20448]));

var G__20449 = (i__16605__auto___20448 + (1));
i__16605__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var G__20441 = args20439.length;
switch (G__20441) {
case 2:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20439.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$2 = (function (x,path){
return om.next.impl.parser.path_meta.call(null,x,path,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,path,query){
var x_SINGLEQUOTE_ = (function (){var G__20442 = x;
var G__20442__$1 = ((cljs.core.map_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__20442){
return (function (p__20443){
var vec__20444 = p__20443;
var k = cljs.core.nth.call(null,vec__20444,(0),null);
var v = cljs.core.nth.call(null,vec__20444,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,k))], null);
});})(G__20442))
),G__20442):G__20442);
var G__20442__$2 = ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,((function (G__20442,G__20442__$1){
return (function (p1__20438_SHARP_,p2__20437_SHARP_){
return om.next.impl.parser.path_meta.call(null,p2__20437_SHARP_,cljs.core.conj.call(null,path,p1__20438_SHARP_));
});})(G__20442,G__20442__$1))
),G__20442__$1):G__20442__$1);
return G__20442__$2;
})();
var G__20445 = x_SINGLEQUOTE_;
var G__20445__$1 = ((((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_)))?cljs.core.vary_meta.call(null,G__20445,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path):G__20445);
return G__20445__$1;
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 3;
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("om.next","abort","om.next/abort",-897542671),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__20451){
var map__20518 = p__20451;
var map__20518__$1 = ((((!((map__20518 == null)))?((((map__20518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20518):map__20518);
var config = map__20518__$1;
var read = cljs.core.get.call(null,map__20518__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__20518__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__20518,map__20518__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.call(null,env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__20552 = (function (){var G__20553 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
var G__20553__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168))))?cljs.core.assoc.call(null,G__20553,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY):G__20553);
return G__20553__$1;
})();
var map__20552__$1 = ((((!((map__20552 == null)))?((((map__20552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20552):map__20552);
var env__$1 = map__20552__$1;
var path = cljs.core.get.call(null,map__20552__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__20552,map__20552__$1,env__$1,path,map__20518,map__20518__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__20576 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__20576__$1 = ((((!((map__20576 == null)))?((((map__20576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20576):map__20576);
var ast = map__20576__$1;
var query_SINGLEQUOTE_ = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__20578 = cljs.core.merge.call(null,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null));
var G__20578__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.call(null,G__20578,new cljs.core.Keyword(null,"query","query",-1288509510)):G__20578);
var G__20578__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__20578__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__20578__$1);
var G__20578__$3 = ((cljs.core.vector_QMARK_.call(null,key))?cljs.core.assoc.call(null,G__20578__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key):G__20578__$2);
return G__20578__$3;
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__20579 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20579) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)))].join('')));
}

return mutate.call(null,env__$2,dispatch_key,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__20580 = ret;
var G__20580__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__20580,expr):G__20580);
var G__20580__$2 = ((cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_))?cljs.core.conj.call(null,G__20580__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_)):G__20580__$1);
return G__20580__$2;
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
var mut_ret = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_.call(null,mut_ret,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null));
}catch (e20581){var e_20585 = e20581;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_.call(null,e_20585))){
throw e_20585;
} else {
cljs.core.reset_BANG_.call(null,error,e_20585);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_.call(null,value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))))].join('')));
}
} else {
}

var G__20582 = ret;
var G__20582__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__20582,key,value):G__20582);
var G__20582__$2 = (cljs.core.truth_(cljs.core.deref.call(null,mut_ret))?cljs.core.assoc_in.call(null,G__20582__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.deref.call(null,mut_ret)):G__20582__$1);
var G__20582__$3 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__20582__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205),cljs.core.deref.call(null,error)], null)):G__20582__$2);
return G__20582__$3;
}
}
});})(elide_paths_QMARK_,map__20552,map__20552__$1,env__$1,path,map__20518,map__20518__$1,config,read,mutate))
;
var G__20583 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
var G__20583__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta.call(null,G__20583,path,query):G__20583);
return G__20583__$1;
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__20518,map__20518__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map