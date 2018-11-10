// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.npc.decision.util');
goog.require('cljs.core');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.npc.decision.offence');
goog.require('readnext.npc.decision.defence');
readnext.npc.decision.util.modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"net","net",344042539),null,new cljs.core.Keyword(null,"offensive","offensive",521821100),null,new cljs.core.Keyword(null,"defensive","defensive",301824446),null], null), null);
readnext.npc.decision.util.decide_direction = (function readnext$npc$decision$util$decide_direction(patterns){
var rnd = cljs.core.rand_int.call(null,(100));
var coll = patterns;
var acc = (0);
while(true){
var elm = cljs.core.first.call(null,coll);
var sum = (acc + cljs.core.val.call(null,elm));
if((sum >= rnd)){
return cljs.core.key.call(null,elm);
} else {
var G__10034 = cljs.core.rest.call(null,coll);
var G__10035 = sum;
coll = G__10034;
acc = G__10035;
continue;
}
break;
}
});
readnext.npc.decision.util.combination_pattern = (function readnext$npc$decision$util$combination_pattern(mode){
var G__10036 = mode;
var G__10036__$1 = (((G__10036 instanceof cljs.core.Keyword))?G__10036.fqn:null);
switch (G__10036__$1) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10036__$1)].join('')));

}
});
readnext.npc.decision.util.decide = (function readnext$npc$decision$util$decide(context,mode){
return readnext.npc.decision.util.decide_direction.call(null,readnext.npc.decision.util.combination_pattern.call(null,mode).call(null,readnext.util.categorized_by_vertical.call(null,readnext.domain.next_stroke_pos.call(null,context.call(null,new cljs.core.Keyword(null,"rallies","rallies",1721171861))),readnext.npc.decision.util.pos)));
});

//# sourceMappingURL=util.js.map