// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.domain');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('readnext.util');
readnext.domain.directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$front_DASH_left,null,cljs.core.cst$kw$front_DASH_right,null,cljs.core.cst$kw$back_DASH_left,null,cljs.core.cst$kw$back_DASH_right,null,cljs.core.cst$kw$middle_DASH_left,null,cljs.core.cst$kw$middle_DASH_right,null], null), null);
readnext.domain.players = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pc,null,cljs.core.cst$kw$doubt,null,cljs.core.cst$kw$npc,null], null), null);
readnext.domain.init_context = (function readnext$domain$init_context(p__11653){
var map__11654 = p__11653;
var map__11654__$1 = ((((!((map__11654 == null)))?((((map__11654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11654):map__11654);
var first_server = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11654__$1,cljs.core.cst$kw$first_DASH_server);
var score_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11654__$1,cljs.core.cst$kw$score_DASH_limit);
var deuce_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11654__$1,cljs.core.cst$kw$deuce_DASH_limit);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first_DASH_server,first_server,cljs.core.cst$kw$score_DASH_limit,score_limit,cljs.core.cst$kw$deuce_DASH_limit,deuce_limit,cljs.core.cst$kw$rallies,cljs.core.List.EMPTY], null);
});
readnext.domain.game_end_QMARK_ = (function readnext$domain$game_end_QMARK_(p__11656){
var map__11657 = p__11656;
var map__11657__$1 = ((((!((map__11657 == null)))?((((map__11657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11657):map__11657);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$rallies);
var score_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$score_DASH_limit);
var deuce_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$deuce_DASH_limit);
var map__11659 = cljs.core.group_by(cljs.core.cst$kw$won_DASH_by,rallies);
var map__11659__$1 = ((((!((map__11659 == null)))?((((map__11659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11659):map__11659);
var pc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11659__$1,cljs.core.cst$kw$pc);
var npc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11659__$1,cljs.core.cst$kw$npc);
var scores = (function (){var x__7483__auto__ = cljs.core.count(pc);
return cljs.core._conj((function (){var x__7483__auto____$1 = cljs.core.count(npc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
var or__6640__auto__ = cljs.core.some(((function (map__11659,map__11659__$1,pc,npc,scores,map__11657,map__11657__$1,rallies,score_limit,deuce_limit){
return (function (s){
return (s >= deuce_limit);
});})(map__11659,map__11659__$1,pc,npc,scores,map__11657,map__11657__$1,rallies,score_limit,deuce_limit))
,scores);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var and__6628__auto__ = cljs.core.some(((function (or__6640__auto__,map__11659,map__11659__$1,pc,npc,scores,map__11657,map__11657__$1,rallies,score_limit,deuce_limit){
return (function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,score_limit);
});})(or__6640__auto__,map__11659,map__11659__$1,pc,npc,scores,map__11657,map__11657__$1,rallies,score_limit,deuce_limit))
,scores);
if(cljs.core.truth_(and__6628__auto__)){
return ((function (){var G__11661 = (cljs.core.first(scores) - cljs.core.second(scores));
return Math.abs(G__11661);
})() >= (2));
} else {
return and__6628__auto__;
}
}
});
readnext.domain.interval_QMARK_ = (function readnext$domain$interval_QMARK_(p__11662){
var map__11663 = p__11662;
var map__11663__$1 = ((((!((map__11663 == null)))?((((map__11663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11663):map__11663);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11663__$1,cljs.core.cst$kw$rallies);
var score_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11663__$1,cljs.core.cst$kw$score_DASH_limit);
var map__11665 = cljs.core.group_by(cljs.core.cst$kw$won_DASH_by,rallies);
var map__11665__$1 = ((((!((map__11665 == null)))?((((map__11665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11665):map__11665);
var pc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11665__$1,cljs.core.cst$kw$pc);
var npc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11665__$1,cljs.core.cst$kw$npc);
var scores = (function (){var x__7483__auto__ = cljs.core.count(pc);
return cljs.core._conj((function (){var x__7483__auto____$1 = cljs.core.count(npc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
return cljs.core.some(((function (map__11665,map__11665__$1,pc,npc,scores,map__11663,map__11663__$1,rallies,score_limit){
return (function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.quot(score_limit,(2)) + (1)));
});})(map__11665,map__11665__$1,pc,npc,scores,map__11663,map__11663__$1,rallies,score_limit))
,scores);
});
readnext.domain.score_of = (function readnext$domain$score_of(player,rallies){
var map__11667 = cljs.core.group_by(cljs.core.cst$kw$won_DASH_by,rallies);
var map__11667__$1 = ((((!((map__11667 == null)))?((((map__11667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11667):map__11667);
var point_rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11667__$1,player);
var scores = cljs.core.count(point_rallies);
return scores;
});
readnext.domain.rally_end_QMARK_ = (function readnext$domain$rally_end_QMARK_(p__11669){
var map__11670 = p__11669;
var map__11670__$1 = ((((!((map__11670 == null)))?((((map__11670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11670):map__11670);
var won_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11670__$1,cljs.core.cst$kw$won_DASH_by);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(won_by,cljs.core.cst$kw$doubt);
});
readnext.domain.last_rally_end_QMARK_ = (function readnext$domain$last_rally_end_QMARK_(p__11672){
var map__11673 = p__11672;
var map__11673__$1 = ((((!((map__11673 == null)))?((((map__11673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11673):map__11673);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11673__$1,cljs.core.cst$kw$rallies);
return readnext.domain.rally_end_QMARK_((readnext.domain.last_rally.cljs$core$IFn$_invoke$arity$1 ? readnext.domain.last_rally.cljs$core$IFn$_invoke$arity$1(rallies) : readnext.domain.last_rally.call(null,rallies)));
});
readnext.domain.rival = (function readnext$domain$rival(player){
var G__11675 = player;
var G__11675__$1 = (((G__11675 instanceof cljs.core.Keyword))?G__11675.fqn:null);
switch (G__11675__$1) {
case "npc":
return cljs.core.cst$kw$pc;

break;
case "pc":
return cljs.core.cst$kw$npc;

break;
case "doubt":
return cljs.core.cst$kw$doubt;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11675__$1)].join('')));

}
});
readnext.domain.next_server = (function readnext$domain$next_server(p__11677){
var map__11678 = p__11677;
var map__11678__$1 = ((((!((map__11678 == null)))?((((map__11678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11678):map__11678);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11678__$1,cljs.core.cst$kw$rallies);
var first_server = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11678__$1,cljs.core.cst$kw$first_DASH_server);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((readnext.domain.last_scored_rally.cljs$core$IFn$_invoke$arity$1 ? readnext.domain.last_scored_rally.cljs$core$IFn$_invoke$arity$1(rallies) : readnext.domain.last_scored_rally.call(null,rallies)),cljs.core.cst$kw$won_DASH_by,first_server);
});
readnext.domain.next_serve_pos = (function readnext$domain$next_serve_pos(rallies,server){
var points = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__11680){
var map__11681 = p__11680;
var map__11681__$1 = ((((!((map__11681 == null)))?((((map__11681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11681):map__11681);
var won_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11681__$1,cljs.core.cst$kw$won_DASH_by);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(won_by,server);
}),rallies));
if(cljs.core.even_QMARK_(points)){
return cljs.core.cst$kw$front_DASH_right;
} else {
return cljs.core.cst$kw$front_DASH_left;
}
});
readnext.domain.next_stroker = (function readnext$domain$next_stroker(rallies){
return readnext.domain.rival((function (){var G__11686 = cljs.core.cst$kw$starter;
var fexpr__11685 = cljs.core.first((function (){var G__11688 = cljs.core.cst$kw$strokes;
var fexpr__11687 = (readnext.domain.last_unscored_rally.cljs$core$IFn$_invoke$arity$1 ? readnext.domain.last_unscored_rally.cljs$core$IFn$_invoke$arity$1(rallies) : readnext.domain.last_unscored_rally.call(null,rallies));
return (fexpr__11687.cljs$core$IFn$_invoke$arity$1 ? fexpr__11687.cljs$core$IFn$_invoke$arity$1(G__11688) : fexpr__11687.call(null,G__11688));
})());
return (fexpr__11685.cljs$core$IFn$_invoke$arity$1 ? fexpr__11685.cljs$core$IFn$_invoke$arity$1(G__11686) : fexpr__11685.call(null,G__11686));
})());
});
readnext.domain.next_hitter = (function readnext$domain$next_hitter(rallies){
var last_rally = (readnext.domain.last_rally.cljs$core$IFn$_invoke$arity$1 ? readnext.domain.last_rally.cljs$core$IFn$_invoke$arity$1(rallies) : readnext.domain.last_rally.call(null,rallies));
if(cljs.core.truth_(readnext.domain.rally_end_QMARK_(last_rally))){
var G__11689 = cljs.core.cst$kw$won_DASH_by;
return (last_rally.cljs$core$IFn$_invoke$arity$1 ? last_rally.cljs$core$IFn$_invoke$arity$1(G__11689) : last_rally.call(null,G__11689));
} else {
return readnext.domain.next_stroker(rallies);
}
});
readnext.domain.last_rally = (function readnext$domain$last_rally(rallies){
return cljs.core.first(rallies);
});
readnext.domain.last_unscored_rally = (function readnext$domain$last_unscored_rally(rallies){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__11690){
var map__11691 = p__11690;
var map__11691__$1 = ((((!((map__11691 == null)))?((((map__11691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11691):map__11691);
var won_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11691__$1,cljs.core.cst$kw$won_DASH_by);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(won_by,cljs.core.cst$kw$doubt);
}),rallies));
});
readnext.domain.last_scored_rally = (function readnext$domain$last_scored_rally(rallies){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__11693){
var map__11694 = p__11693;
var map__11694__$1 = ((((!((map__11694 == null)))?((((map__11694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11694):map__11694);
var won_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11694__$1,cljs.core.cst$kw$won_DASH_by);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(won_by,cljs.core.cst$kw$doubt);
}),rallies));
});
readnext.domain.last_stroke = (function readnext$domain$last_stroke(p__11696){
var map__11697 = p__11696;
var map__11697__$1 = ((((!((map__11697 == null)))?((((map__11697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11697):map__11697);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11697__$1,cljs.core.cst$kw$strokes);
return cljs.core.first(strokes);
});
readnext.domain.latest_stroke = (function readnext$domain$latest_stroke(rallies){
return readnext.domain.last_stroke(readnext.domain.last_rally(rallies));
});
readnext.domain.serve_rally = (function readnext$domain$serve_rally(player,start_pos){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$strokes,(function (){var x__7483__auto__ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$starter,player,cljs.core.cst$kw$start_DASH_pos,start_pos,cljs.core.cst$kw$end_DASH_pos,start_pos,cljs.core.cst$kw$serve_QMARK_,true], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.cst$kw$won_DASH_by,cljs.core.cst$kw$doubt], null);
});
readnext.domain.next_serve = (function readnext$domain$next_serve(p__11699){
var map__11700 = p__11699;
var map__11700__$1 = ((((!((map__11700 == null)))?((((map__11700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11700):map__11700);
var context = map__11700__$1;
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11700__$1,cljs.core.cst$kw$rallies);
var server = readnext.domain.next_server(context);
var pos = readnext.domain.next_serve_pos(rallies,server);
return readnext.domain.serve_rally(server,pos);
});
readnext.domain.record_service = (function readnext$domain$record_service(context,serve){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rallies], null),cljs.core.conj,serve);
});
readnext.domain.next_stroke_pos = (function readnext$domain$next_stroke_pos(rallies){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(readnext.domain.last_stroke(readnext.domain.last_unscored_rally(rallies)),cljs.core.cst$kw$end_DASH_pos);
});
readnext.domain.next_stroke = (function readnext$domain$next_stroke(rallies,player,direction){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$starter,player,cljs.core.cst$kw$start_DASH_pos,readnext.domain.next_stroke_pos(rallies),cljs.core.cst$kw$end_DASH_pos,direction,cljs.core.cst$kw$serve_QMARK_,null], null);
});
readnext.domain.record_stroke_to_rally = (function readnext$domain$record_stroke_to_rally(rallies,next){
var new_last_rally = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(readnext.domain.last_unscored_rally(rallies),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strokes], null),cljs.core.conj,next);
return readnext.util.replace_last(rallies,new_last_rally);
});
readnext.domain.record_stroke_to_context = (function readnext$domain$record_stroke_to_context(p__11702,stroke,player,direction){
var map__11703 = p__11702;
var map__11703__$1 = ((((!((map__11703 == null)))?((((map__11703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11703):map__11703);
var context = map__11703__$1;
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11703__$1,cljs.core.cst$kw$rallies);
var G__11706 = readnext.domain.record_stroke_to_rally(rallies,stroke);
var fexpr__11705 = ((function (G__11706,map__11703,map__11703__$1,context,rallies){
return (function (r){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rallies], null),r);
});})(G__11706,map__11703,map__11703__$1,context,rallies))
;
return fexpr__11705(G__11706);
});
readnext.domain.fail_stroke = (function readnext$domain$fail_stroke(context,player){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rallies], null),(function (p__11707,r){
var vec__11708 = p__11707;
var seq__11709 = cljs.core.seq(vec__11708);
var first__11710 = cljs.core.first(seq__11709);
var seq__11709__$1 = cljs.core.next(seq__11709);
var first = first__11710;
var rest = seq__11709__$1;
var rallies = vec__11708;
return readnext.util.replace_last(rallies,cljs.core.assoc_in(first,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$won_DASH_by], null),readnext.domain.rival(player)));
}));
});
readnext.domain.all_strokes_by = (function readnext$domain$all_strokes_by(p__11711,player){
var map__11712 = p__11711;
var map__11712__$1 = ((((!((map__11712 == null)))?((((map__11712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11712):map__11712);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11712__$1,cljs.core.cst$kw$rallies);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__11712,map__11712__$1,rallies){
return (function (p__11714){
var map__11715 = p__11714;
var map__11715__$1 = ((((!((map__11715 == null)))?((((map__11715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11715):map__11715);
var starter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11715__$1,cljs.core.cst$kw$starter);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(starter,player);
});})(map__11712,map__11712__$1,rallies))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__11712,map__11712__$1,rallies){
return (function (p__11717){
var map__11718 = p__11717;
var map__11718__$1 = ((((!((map__11718 == null)))?((((map__11718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11718):map__11718);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11718__$1,cljs.core.cst$kw$strokes);
return strokes;
});})(map__11712,map__11712__$1,rallies))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rallies], 0)));
});
