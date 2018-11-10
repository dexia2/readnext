// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__7251__auto__,writer__7252__auto__,opt__7253__auto__){
return cljs.core._write.call(null,writer__7252__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8508 = arguments.length;
var i__7766__auto___8509 = (0);
while(true){
if((i__7766__auto___8509 < len__7765__auto___8508)){
args__7772__auto__.push((arguments[i__7766__auto___8509]));

var G__8510 = (i__7766__auto___8509 + (1));
i__7766__auto___8509 = G__8510;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq8507){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8507));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8512 = arguments.length;
var i__7766__auto___8513 = (0);
while(true){
if((i__7766__auto___8513 < len__7765__auto___8512)){
args__7772__auto__.push((arguments[i__7766__auto___8513]));

var G__8514 = (i__7766__auto___8513 + (1));
i__7766__auto___8513 = G__8514;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq8511){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8511));
});

var g_QMARK__8515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_8516 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8515){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8515))
,null));
var mkg_8517 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8515,g_8516){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8515,g_8516))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__8515,g_8516,mkg_8517){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8515).call(null,x);
});})(g_QMARK__8515,g_8516,mkg_8517))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__8515,g_8516,mkg_8517){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_8517).call(null,gfn);
});})(g_QMARK__8515,g_8516,mkg_8517))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__8515,g_8516,mkg_8517){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_8516).call(null,generator);
});})(g_QMARK__8515,g_8516,mkg_8517))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7916__auto___8537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__7916__auto___8537){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8538 = arguments.length;
var i__7766__auto___8539 = (0);
while(true){
if((i__7766__auto___8539 < len__7765__auto___8538)){
args__7772__auto__.push((arguments[i__7766__auto___8539]));

var G__8540 = (i__7766__auto___8539 + (1));
i__7766__auto___8539 = G__8540;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8537))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8537),args);
});})(g__7916__auto___8537))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__7916__auto___8537){
return (function (seq8518){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8518));
});})(g__7916__auto___8537))
;


var g__7916__auto___8541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__7916__auto___8541){
return (function cljs$spec$gen$alpha$list(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8542 = arguments.length;
var i__7766__auto___8543 = (0);
while(true){
if((i__7766__auto___8543 < len__7765__auto___8542)){
args__7772__auto__.push((arguments[i__7766__auto___8543]));

var G__8544 = (i__7766__auto___8543 + (1));
i__7766__auto___8543 = G__8544;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8541))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8541),args);
});})(g__7916__auto___8541))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__7916__auto___8541){
return (function (seq8519){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8519));
});})(g__7916__auto___8541))
;


var g__7916__auto___8545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__7916__auto___8545){
return (function cljs$spec$gen$alpha$map(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8546 = arguments.length;
var i__7766__auto___8547 = (0);
while(true){
if((i__7766__auto___8547 < len__7765__auto___8546)){
args__7772__auto__.push((arguments[i__7766__auto___8547]));

var G__8548 = (i__7766__auto___8547 + (1));
i__7766__auto___8547 = G__8548;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8545))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8545),args);
});})(g__7916__auto___8545))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__7916__auto___8545){
return (function (seq8520){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8520));
});})(g__7916__auto___8545))
;


var g__7916__auto___8549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__7916__auto___8549){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8550 = arguments.length;
var i__7766__auto___8551 = (0);
while(true){
if((i__7766__auto___8551 < len__7765__auto___8550)){
args__7772__auto__.push((arguments[i__7766__auto___8551]));

var G__8552 = (i__7766__auto___8551 + (1));
i__7766__auto___8551 = G__8552;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8549))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8549),args);
});})(g__7916__auto___8549))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__7916__auto___8549){
return (function (seq8521){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8521));
});})(g__7916__auto___8549))
;


var g__7916__auto___8553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__7916__auto___8553){
return (function cljs$spec$gen$alpha$set(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8554 = arguments.length;
var i__7766__auto___8555 = (0);
while(true){
if((i__7766__auto___8555 < len__7765__auto___8554)){
args__7772__auto__.push((arguments[i__7766__auto___8555]));

var G__8556 = (i__7766__auto___8555 + (1));
i__7766__auto___8555 = G__8556;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8553))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8553),args);
});})(g__7916__auto___8553))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__7916__auto___8553){
return (function (seq8522){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8522));
});})(g__7916__auto___8553))
;


var g__7916__auto___8557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__7916__auto___8557){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8558 = arguments.length;
var i__7766__auto___8559 = (0);
while(true){
if((i__7766__auto___8559 < len__7765__auto___8558)){
args__7772__auto__.push((arguments[i__7766__auto___8559]));

var G__8560 = (i__7766__auto___8559 + (1));
i__7766__auto___8559 = G__8560;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8557))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8557),args);
});})(g__7916__auto___8557))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__7916__auto___8557){
return (function (seq8523){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8523));
});})(g__7916__auto___8557))
;


var g__7916__auto___8561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__7916__auto___8561){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8562 = arguments.length;
var i__7766__auto___8563 = (0);
while(true){
if((i__7766__auto___8563 < len__7765__auto___8562)){
args__7772__auto__.push((arguments[i__7766__auto___8563]));

var G__8564 = (i__7766__auto___8563 + (1));
i__7766__auto___8563 = G__8564;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8561))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8561),args);
});})(g__7916__auto___8561))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__7916__auto___8561){
return (function (seq8524){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8524));
});})(g__7916__auto___8561))
;


var g__7916__auto___8565 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__7916__auto___8565){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8566 = arguments.length;
var i__7766__auto___8567 = (0);
while(true){
if((i__7766__auto___8567 < len__7765__auto___8566)){
args__7772__auto__.push((arguments[i__7766__auto___8567]));

var G__8568 = (i__7766__auto___8567 + (1));
i__7766__auto___8567 = G__8568;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8565))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8565),args);
});})(g__7916__auto___8565))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__7916__auto___8565){
return (function (seq8525){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8525));
});})(g__7916__auto___8565))
;


var g__7916__auto___8569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__7916__auto___8569){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8570 = arguments.length;
var i__7766__auto___8571 = (0);
while(true){
if((i__7766__auto___8571 < len__7765__auto___8570)){
args__7772__auto__.push((arguments[i__7766__auto___8571]));

var G__8572 = (i__7766__auto___8571 + (1));
i__7766__auto___8571 = G__8572;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8569))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8569),args);
});})(g__7916__auto___8569))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__7916__auto___8569){
return (function (seq8526){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8526));
});})(g__7916__auto___8569))
;


var g__7916__auto___8573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__7916__auto___8573){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8574 = arguments.length;
var i__7766__auto___8575 = (0);
while(true){
if((i__7766__auto___8575 < len__7765__auto___8574)){
args__7772__auto__.push((arguments[i__7766__auto___8575]));

var G__8576 = (i__7766__auto___8575 + (1));
i__7766__auto___8575 = G__8576;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8573))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8573),args);
});})(g__7916__auto___8573))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__7916__auto___8573){
return (function (seq8527){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8527));
});})(g__7916__auto___8573))
;


var g__7916__auto___8577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__7916__auto___8577){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8578 = arguments.length;
var i__7766__auto___8579 = (0);
while(true){
if((i__7766__auto___8579 < len__7765__auto___8578)){
args__7772__auto__.push((arguments[i__7766__auto___8579]));

var G__8580 = (i__7766__auto___8579 + (1));
i__7766__auto___8579 = G__8580;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8577))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8577),args);
});})(g__7916__auto___8577))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__7916__auto___8577){
return (function (seq8528){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8528));
});})(g__7916__auto___8577))
;


var g__7916__auto___8581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__7916__auto___8581){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8582 = arguments.length;
var i__7766__auto___8583 = (0);
while(true){
if((i__7766__auto___8583 < len__7765__auto___8582)){
args__7772__auto__.push((arguments[i__7766__auto___8583]));

var G__8584 = (i__7766__auto___8583 + (1));
i__7766__auto___8583 = G__8584;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8581))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8581),args);
});})(g__7916__auto___8581))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__7916__auto___8581){
return (function (seq8529){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8529));
});})(g__7916__auto___8581))
;


var g__7916__auto___8585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__7916__auto___8585){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8586 = arguments.length;
var i__7766__auto___8587 = (0);
while(true){
if((i__7766__auto___8587 < len__7765__auto___8586)){
args__7772__auto__.push((arguments[i__7766__auto___8587]));

var G__8588 = (i__7766__auto___8587 + (1));
i__7766__auto___8587 = G__8588;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8585))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8585),args);
});})(g__7916__auto___8585))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__7916__auto___8585){
return (function (seq8530){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8530));
});})(g__7916__auto___8585))
;


var g__7916__auto___8589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__7916__auto___8589){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8590 = arguments.length;
var i__7766__auto___8591 = (0);
while(true){
if((i__7766__auto___8591 < len__7765__auto___8590)){
args__7772__auto__.push((arguments[i__7766__auto___8591]));

var G__8592 = (i__7766__auto___8591 + (1));
i__7766__auto___8591 = G__8592;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8589))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8589),args);
});})(g__7916__auto___8589))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__7916__auto___8589){
return (function (seq8531){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8531));
});})(g__7916__auto___8589))
;


var g__7916__auto___8593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__7916__auto___8593){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8594 = arguments.length;
var i__7766__auto___8595 = (0);
while(true){
if((i__7766__auto___8595 < len__7765__auto___8594)){
args__7772__auto__.push((arguments[i__7766__auto___8595]));

var G__8596 = (i__7766__auto___8595 + (1));
i__7766__auto___8595 = G__8596;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8593))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8593),args);
});})(g__7916__auto___8593))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__7916__auto___8593){
return (function (seq8532){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8532));
});})(g__7916__auto___8593))
;


var g__7916__auto___8597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__7916__auto___8597){
return (function cljs$spec$gen$alpha$return(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8598 = arguments.length;
var i__7766__auto___8599 = (0);
while(true){
if((i__7766__auto___8599 < len__7765__auto___8598)){
args__7772__auto__.push((arguments[i__7766__auto___8599]));

var G__8600 = (i__7766__auto___8599 + (1));
i__7766__auto___8599 = G__8600;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8597))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8597),args);
});})(g__7916__auto___8597))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__7916__auto___8597){
return (function (seq8533){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8533));
});})(g__7916__auto___8597))
;


var g__7916__auto___8601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__7916__auto___8601){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8602 = arguments.length;
var i__7766__auto___8603 = (0);
while(true){
if((i__7766__auto___8603 < len__7765__auto___8602)){
args__7772__auto__.push((arguments[i__7766__auto___8603]));

var G__8604 = (i__7766__auto___8603 + (1));
i__7766__auto___8603 = G__8604;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8601))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8601),args);
});})(g__7916__auto___8601))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7916__auto___8601){
return (function (seq8534){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8534));
});})(g__7916__auto___8601))
;


var g__7916__auto___8605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__7916__auto___8605){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8606 = arguments.length;
var i__7766__auto___8607 = (0);
while(true){
if((i__7766__auto___8607 < len__7765__auto___8606)){
args__7772__auto__.push((arguments[i__7766__auto___8607]));

var G__8608 = (i__7766__auto___8607 + (1));
i__7766__auto___8607 = G__8608;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8605))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8605),args);
});})(g__7916__auto___8605))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__7916__auto___8605){
return (function (seq8535){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8535));
});})(g__7916__auto___8605))
;


var g__7916__auto___8609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__7916__auto___8609){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8610 = arguments.length;
var i__7766__auto___8611 = (0);
while(true){
if((i__7766__auto___8611 < len__7765__auto___8610)){
args__7772__auto__.push((arguments[i__7766__auto___8611]));

var G__8612 = (i__7766__auto___8611 + (1));
i__7766__auto___8611 = G__8612;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7916__auto___8609))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7916__auto___8609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7916__auto___8609),args);
});})(g__7916__auto___8609))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__7916__auto___8609){
return (function (seq8536){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8536));
});})(g__7916__auto___8609))
;

var g__7929__auto___8634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__7929__auto___8634){
return (function cljs$spec$gen$alpha$any(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8635 = arguments.length;
var i__7766__auto___8636 = (0);
while(true){
if((i__7766__auto___8636 < len__7765__auto___8635)){
args__7772__auto__.push((arguments[i__7766__auto___8636]));

var G__8637 = (i__7766__auto___8636 + (1));
i__7766__auto___8636 = G__8637;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8634))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8634){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8634);
});})(g__7929__auto___8634))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__7929__auto___8634){
return (function (seq8613){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8613));
});})(g__7929__auto___8634))
;


var g__7929__auto___8638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__7929__auto___8638){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8639 = arguments.length;
var i__7766__auto___8640 = (0);
while(true){
if((i__7766__auto___8640 < len__7765__auto___8639)){
args__7772__auto__.push((arguments[i__7766__auto___8640]));

var G__8641 = (i__7766__auto___8640 + (1));
i__7766__auto___8640 = G__8641;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8638))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8638){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8638);
});})(g__7929__auto___8638))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__7929__auto___8638){
return (function (seq8614){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8614));
});})(g__7929__auto___8638))
;


var g__7929__auto___8642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__7929__auto___8642){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8643 = arguments.length;
var i__7766__auto___8644 = (0);
while(true){
if((i__7766__auto___8644 < len__7765__auto___8643)){
args__7772__auto__.push((arguments[i__7766__auto___8644]));

var G__8645 = (i__7766__auto___8644 + (1));
i__7766__auto___8644 = G__8645;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8642))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8642){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8642);
});})(g__7929__auto___8642))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__7929__auto___8642){
return (function (seq8615){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8615));
});})(g__7929__auto___8642))
;


var g__7929__auto___8646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__7929__auto___8646){
return (function cljs$spec$gen$alpha$char(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8647 = arguments.length;
var i__7766__auto___8648 = (0);
while(true){
if((i__7766__auto___8648 < len__7765__auto___8647)){
args__7772__auto__.push((arguments[i__7766__auto___8648]));

var G__8649 = (i__7766__auto___8648 + (1));
i__7766__auto___8648 = G__8649;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8646))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8646){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8646);
});})(g__7929__auto___8646))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__7929__auto___8646){
return (function (seq8616){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8616));
});})(g__7929__auto___8646))
;


var g__7929__auto___8650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__7929__auto___8650){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8651 = arguments.length;
var i__7766__auto___8652 = (0);
while(true){
if((i__7766__auto___8652 < len__7765__auto___8651)){
args__7772__auto__.push((arguments[i__7766__auto___8652]));

var G__8653 = (i__7766__auto___8652 + (1));
i__7766__auto___8652 = G__8653;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8650))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8650){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8650);
});})(g__7929__auto___8650))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__7929__auto___8650){
return (function (seq8617){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8617));
});})(g__7929__auto___8650))
;


var g__7929__auto___8654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__7929__auto___8654){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8655 = arguments.length;
var i__7766__auto___8656 = (0);
while(true){
if((i__7766__auto___8656 < len__7765__auto___8655)){
args__7772__auto__.push((arguments[i__7766__auto___8656]));

var G__8657 = (i__7766__auto___8656 + (1));
i__7766__auto___8656 = G__8657;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8654))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8654){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8654);
});})(g__7929__auto___8654))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__7929__auto___8654){
return (function (seq8618){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8618));
});})(g__7929__auto___8654))
;


var g__7929__auto___8658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__7929__auto___8658){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8659 = arguments.length;
var i__7766__auto___8660 = (0);
while(true){
if((i__7766__auto___8660 < len__7765__auto___8659)){
args__7772__auto__.push((arguments[i__7766__auto___8660]));

var G__8661 = (i__7766__auto___8660 + (1));
i__7766__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8658))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8658){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8658);
});})(g__7929__auto___8658))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__7929__auto___8658){
return (function (seq8619){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8619));
});})(g__7929__auto___8658))
;


var g__7929__auto___8662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__7929__auto___8662){
return (function cljs$spec$gen$alpha$double(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8663 = arguments.length;
var i__7766__auto___8664 = (0);
while(true){
if((i__7766__auto___8664 < len__7765__auto___8663)){
args__7772__auto__.push((arguments[i__7766__auto___8664]));

var G__8665 = (i__7766__auto___8664 + (1));
i__7766__auto___8664 = G__8665;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8662))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8662){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8662);
});})(g__7929__auto___8662))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__7929__auto___8662){
return (function (seq8620){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8620));
});})(g__7929__auto___8662))
;


var g__7929__auto___8666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__7929__auto___8666){
return (function cljs$spec$gen$alpha$int(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8667 = arguments.length;
var i__7766__auto___8668 = (0);
while(true){
if((i__7766__auto___8668 < len__7765__auto___8667)){
args__7772__auto__.push((arguments[i__7766__auto___8668]));

var G__8669 = (i__7766__auto___8668 + (1));
i__7766__auto___8668 = G__8669;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8666))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8666){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8666);
});})(g__7929__auto___8666))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__7929__auto___8666){
return (function (seq8621){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8621));
});})(g__7929__auto___8666))
;


var g__7929__auto___8670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__7929__auto___8670){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8671 = arguments.length;
var i__7766__auto___8672 = (0);
while(true){
if((i__7766__auto___8672 < len__7765__auto___8671)){
args__7772__auto__.push((arguments[i__7766__auto___8672]));

var G__8673 = (i__7766__auto___8672 + (1));
i__7766__auto___8672 = G__8673;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8670))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8670){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8670);
});})(g__7929__auto___8670))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__7929__auto___8670){
return (function (seq8622){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8622));
});})(g__7929__auto___8670))
;


var g__7929__auto___8674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__7929__auto___8674){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8675 = arguments.length;
var i__7766__auto___8676 = (0);
while(true){
if((i__7766__auto___8676 < len__7765__auto___8675)){
args__7772__auto__.push((arguments[i__7766__auto___8676]));

var G__8677 = (i__7766__auto___8676 + (1));
i__7766__auto___8676 = G__8677;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8674))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8674){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8674);
});})(g__7929__auto___8674))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__7929__auto___8674){
return (function (seq8623){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8623));
});})(g__7929__auto___8674))
;


var g__7929__auto___8678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__7929__auto___8678){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8679 = arguments.length;
var i__7766__auto___8680 = (0);
while(true){
if((i__7766__auto___8680 < len__7765__auto___8679)){
args__7772__auto__.push((arguments[i__7766__auto___8680]));

var G__8681 = (i__7766__auto___8680 + (1));
i__7766__auto___8680 = G__8681;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8678))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8678){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8678);
});})(g__7929__auto___8678))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__7929__auto___8678){
return (function (seq8624){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8624));
});})(g__7929__auto___8678))
;


var g__7929__auto___8682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__7929__auto___8682){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8683 = arguments.length;
var i__7766__auto___8684 = (0);
while(true){
if((i__7766__auto___8684 < len__7765__auto___8683)){
args__7772__auto__.push((arguments[i__7766__auto___8684]));

var G__8685 = (i__7766__auto___8684 + (1));
i__7766__auto___8684 = G__8685;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8682))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8682){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8682);
});})(g__7929__auto___8682))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__7929__auto___8682){
return (function (seq8625){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8625));
});})(g__7929__auto___8682))
;


var g__7929__auto___8686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__7929__auto___8686){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8687 = arguments.length;
var i__7766__auto___8688 = (0);
while(true){
if((i__7766__auto___8688 < len__7765__auto___8687)){
args__7772__auto__.push((arguments[i__7766__auto___8688]));

var G__8689 = (i__7766__auto___8688 + (1));
i__7766__auto___8688 = G__8689;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8686))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8686){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8686);
});})(g__7929__auto___8686))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__7929__auto___8686){
return (function (seq8626){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8626));
});})(g__7929__auto___8686))
;


var g__7929__auto___8690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__7929__auto___8690){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8691 = arguments.length;
var i__7766__auto___8692 = (0);
while(true){
if((i__7766__auto___8692 < len__7765__auto___8691)){
args__7772__auto__.push((arguments[i__7766__auto___8692]));

var G__8693 = (i__7766__auto___8692 + (1));
i__7766__auto___8692 = G__8693;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8690))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8690){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8690);
});})(g__7929__auto___8690))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__7929__auto___8690){
return (function (seq8627){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8627));
});})(g__7929__auto___8690))
;


var g__7929__auto___8694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__7929__auto___8694){
return (function cljs$spec$gen$alpha$string(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8695 = arguments.length;
var i__7766__auto___8696 = (0);
while(true){
if((i__7766__auto___8696 < len__7765__auto___8695)){
args__7772__auto__.push((arguments[i__7766__auto___8696]));

var G__8697 = (i__7766__auto___8696 + (1));
i__7766__auto___8696 = G__8697;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8694))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8694){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8694);
});})(g__7929__auto___8694))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__7929__auto___8694){
return (function (seq8628){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8628));
});})(g__7929__auto___8694))
;


var g__7929__auto___8698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__7929__auto___8698){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8699 = arguments.length;
var i__7766__auto___8700 = (0);
while(true){
if((i__7766__auto___8700 < len__7765__auto___8699)){
args__7772__auto__.push((arguments[i__7766__auto___8700]));

var G__8701 = (i__7766__auto___8700 + (1));
i__7766__auto___8700 = G__8701;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8698))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8698){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8698);
});})(g__7929__auto___8698))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__7929__auto___8698){
return (function (seq8629){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8629));
});})(g__7929__auto___8698))
;


var g__7929__auto___8702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__7929__auto___8702){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8703 = arguments.length;
var i__7766__auto___8704 = (0);
while(true){
if((i__7766__auto___8704 < len__7765__auto___8703)){
args__7772__auto__.push((arguments[i__7766__auto___8704]));

var G__8705 = (i__7766__auto___8704 + (1));
i__7766__auto___8704 = G__8705;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8702))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8702){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8702);
});})(g__7929__auto___8702))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__7929__auto___8702){
return (function (seq8630){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8630));
});})(g__7929__auto___8702))
;


var g__7929__auto___8706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__7929__auto___8706){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8707 = arguments.length;
var i__7766__auto___8708 = (0);
while(true){
if((i__7766__auto___8708 < len__7765__auto___8707)){
args__7772__auto__.push((arguments[i__7766__auto___8708]));

var G__8709 = (i__7766__auto___8708 + (1));
i__7766__auto___8708 = G__8709;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8706))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8706){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8706);
});})(g__7929__auto___8706))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__7929__auto___8706){
return (function (seq8631){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8631));
});})(g__7929__auto___8706))
;


var g__7929__auto___8710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__7929__auto___8710){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8711 = arguments.length;
var i__7766__auto___8712 = (0);
while(true){
if((i__7766__auto___8712 < len__7765__auto___8711)){
args__7772__auto__.push((arguments[i__7766__auto___8712]));

var G__8713 = (i__7766__auto___8712 + (1));
i__7766__auto___8712 = G__8713;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8710))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8710){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8710);
});})(g__7929__auto___8710))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__7929__auto___8710){
return (function (seq8632){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8632));
});})(g__7929__auto___8710))
;


var g__7929__auto___8714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__7929__auto___8714){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8715 = arguments.length;
var i__7766__auto___8716 = (0);
while(true){
if((i__7766__auto___8716 < len__7765__auto___8715)){
args__7772__auto__.push((arguments[i__7766__auto___8716]));

var G__8717 = (i__7766__auto___8716 + (1));
i__7766__auto___8716 = G__8717;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});})(g__7929__auto___8714))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7929__auto___8714){
return (function (args){
return cljs.core.deref.call(null,g__7929__auto___8714);
});})(g__7929__auto___8714))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__7929__auto___8714){
return (function (seq8633){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8633));
});})(g__7929__auto___8714))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8720 = arguments.length;
var i__7766__auto___8721 = (0);
while(true){
if((i__7766__auto___8721 < len__7765__auto___8720)){
args__7772__auto__.push((arguments[i__7766__auto___8721]));

var G__8722 = (i__7766__auto___8721 + (1));
i__7766__auto___8721 = G__8722;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__8718_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8718_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq8719){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8719));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__8723_SHARP_){
return (new Date(p1__8723_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map