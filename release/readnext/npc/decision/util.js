// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.npc.decision.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.npc.decision.offence');
goog.require('readnext.npc.decision.defence');
readnext.npc.decision.util.modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$net,null,cljs.core.cst$kw$offensive,null,cljs.core.cst$kw$defensive,null], null), null);
readnext.npc.decision.util.decide_direction = (function readnext$npc$decision$util$decide_direction(patterns){
var rnd = cljs.core.rand_int((100));
var coll = patterns;
var acc = (0);
while(true){
var elm = cljs.core.first(coll);
var sum = (acc + cljs.core.val(elm));
if((sum >= rnd)){
return cljs.core.key(elm);
} else {
var G__13981 = cljs.core.rest(coll);
var G__13982 = sum;
coll = G__13981;
acc = G__13982;
continue;
}
break;
}
});
readnext.npc.decision.util.combination_pattern = (function readnext$npc$decision$util$combination_pattern(mode){
var G__13983 = mode;
var G__13983__$1 = (((G__13983 instanceof cljs.core.Keyword))?G__13983.fqn:null);
switch (G__13983__$1) {
case "offensive":
return readnext.npc.decision.offence.combination_pattern;

break;
case "defensive":
return readnext.npc.decision.defence.combination_pattern;

break;
case "net":
return readnext.npc.decision.defence.combination_pattern;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13983__$1)].join('')));

}
});
readnext.npc.decision.util.decide = (function readnext$npc$decision$util$decide(context,mode){
return readnext.npc.decision.util.decide_direction((function (){var G__13986 = readnext.util.categorized_by_vertical(readnext.domain.next_stroke_pos((function (){var G__13987 = cljs.core.cst$kw$rallies;
return (context.cljs$core$IFn$_invoke$arity$1 ? context.cljs$core$IFn$_invoke$arity$1(G__13987) : context.call(null,G__13987));
})()),readnext.npc.decision.util.pos);
var fexpr__13985 = readnext.npc.decision.util.combination_pattern(mode);
return (fexpr__13985.cljs$core$IFn$_invoke$arity$1 ? fexpr__13985.cljs$core$IFn$_invoke$arity$1(G__13986) : fexpr__13985.call(null,G__13986));
})());
});
