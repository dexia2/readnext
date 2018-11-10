// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.cst$kw$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__11726 = cljs.core.cst$kw$no_DASH_safe_DASH_draw;
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__11726) : features__$1.call(null,G__11726));
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.cst$kw$no_DASH_safe_DASH_draw);
});
/**
 * Checks if options map contains deprected options and removes them.
 *   Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__7429__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__11727(s__11728){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__11728__$1 = s__11728;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__11728__$1);
if(temp__4657__auto__){
var s__11728__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11728__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__11728__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__11730 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__11729 = (0);
while(true){
if((i__11729 < size__7428__auto__)){
var vec__11731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__11729);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11731,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11731,(1),null);
cljs.core.chunk_append(b__11730,(function (){var temp__4655__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__11734 = temp__4655__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11734,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11734,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__11743 = (i__11729 + (1));
i__11729 = G__11743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11730),quil$middlewares$deprecated_options$deprecated_options_$_iter__11727(cljs.core.chunk_rest(s__11728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11730),null);
}
} else {
var vec__11737 = cljs.core.first(s__11728__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11737,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11737,(1),null);
return cljs.core.cons((function (){var temp__4655__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__11740 = temp__4655__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11740,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11740,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__11727(cljs.core.rest(s__11728__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__7429__auto__(options__$1);
})()));
});
