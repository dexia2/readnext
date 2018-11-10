// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.util');
goog.require('cljs.core');
readnext.util.replace_last = (function readnext$util$replace_last(lst,elm){
var vec__8196 = lst;
var seq__8197 = cljs.core.seq.call(null,vec__8196);
var first__8198 = cljs.core.first.call(null,seq__8197);
var seq__8197__$1 = cljs.core.next.call(null,seq__8197);
var first = first__8198;
var rest = seq__8197__$1;
if(rest){
return cljs.core.conj.call(null,rest,elm);
} else {
var x__7483__auto__ = elm;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
}
});
readnext.util.random_elm = (function readnext$util$random_elm(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
readnext.util.vertical_type = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front-left","front-left",-1987538679),null,new cljs.core.Keyword(null,"front-right","front-right",385073770),null], null), null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middle-left","middle-left",-452766155),null,new cljs.core.Keyword(null,"middle-right","middle-right",-1562674657),null], null), null),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"back-left","back-left",1043766863),null,new cljs.core.Keyword(null,"back-right","back-right",-1417102192),null], null), null)], null);
readnext.util.horizontal_type = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"front-left","front-left",-1987538679),null,new cljs.core.Keyword(null,"back-left","back-left",1043766863),null,new cljs.core.Keyword(null,"middle-left","middle-left",-452766155),null], null), null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"front-right","front-right",385073770),null,new cljs.core.Keyword(null,"back-right","back-right",-1417102192),null,new cljs.core.Keyword(null,"middle-right","middle-right",-1562674657),null], null), null)], null);
readnext.util.categorized_by = (function readnext$util$categorized_by(direction,categories){

return cljs.core.key.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (type){
return cljs.core.some.call(null,(function (d){
return cljs.core._EQ_.call(null,d,direction);
}),cljs.core.seq.call(null,cljs.core.val.call(null,type)));
}),cljs.core.seq.call(null,categories))));
});
readnext.util.categorized_by_vertical = (function readnext$util$categorized_by_vertical(direction){
return readnext.util.categorized_by.call(null,direction,readnext.util.vertical_type);
});
readnext.util.categorized_by_horizontal = (function readnext$util$categorized_by_horizontal(direction){
return readnext.util.categorized_by.call(null,direction,readnext.util.horizontal_type);
});

//# sourceMappingURL=util.js.map