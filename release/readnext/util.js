// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
readnext.util.replace_last = (function readnext$util$replace_last(lst,elm){
var vec__11648 = lst;
var seq__11649 = cljs.core.seq(vec__11648);
var first__11650 = cljs.core.first(seq__11649);
var seq__11649__$1 = cljs.core.next(seq__11649);
var first = first__11650;
var rest = seq__11649__$1;
if(rest){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest,elm);
} else {
var x__7483__auto__ = elm;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
}
});
readnext.util.random_elm = (function readnext$util$random_elm(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
readnext.util.vertical_type = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$front,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$front_DASH_left,null,cljs.core.cst$kw$front_DASH_right,null], null), null),cljs.core.cst$kw$middle,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$middle_DASH_left,null,cljs.core.cst$kw$middle_DASH_right,null], null), null),cljs.core.cst$kw$back,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$back_DASH_left,null,cljs.core.cst$kw$back_DASH_right,null], null), null)], null);
readnext.util.horizontal_type = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$front_DASH_left,null,cljs.core.cst$kw$back_DASH_left,null,cljs.core.cst$kw$middle_DASH_left,null], null), null),cljs.core.cst$kw$right,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$front_DASH_right,null,cljs.core.cst$kw$back_DASH_right,null,cljs.core.cst$kw$middle_DASH_right,null], null), null)], null);
readnext.util.categorized_by = (function readnext$util$categorized_by(direction,categories){

return cljs.core.key(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (type){
return cljs.core.some((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,direction);
}),cljs.core.seq(cljs.core.val(type)));
}),cljs.core.seq(categories))));
});
readnext.util.categorized_by_vertical = (function readnext$util$categorized_by_vertical(direction){
return readnext.util.categorized_by(direction,readnext.util.vertical_type);
});
readnext.util.categorized_by_horizontal = (function readnext$util$categorized_by_horizontal(direction){
return readnext.util.categorized_by(direction,readnext.util.horizontal_type);
});
