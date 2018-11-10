// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.domain');
goog.require('cljs.core');
goog.require('readnext.util');
readnext.domain.directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"front-left","front-left",-1987538679),null,new cljs.core.Keyword(null,"front-right","front-right",385073770),null,new cljs.core.Keyword(null,"back-left","back-left",1043766863),null,new cljs.core.Keyword(null,"back-right","back-right",-1417102192),null,new cljs.core.Keyword(null,"middle-left","middle-left",-452766155),null,new cljs.core.Keyword(null,"middle-right","middle-right",-1562674657),null], null), null);
readnext.domain.players = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc","pc",512913453),null,new cljs.core.Keyword(null,"doubt","doubt",348980947),null,new cljs.core.Keyword(null,"npc","npc",2026900089),null], null), null);
readnext.domain.init_context = (function readnext$domain$init_context(p__8201){
var map__8202 = p__8201;
var map__8202__$1 = ((((!((map__8202 == null)))?((((map__8202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8202):map__8202);
var first_server = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"first-server","first-server",1062935897));
var score_limit = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524));
var deuce_limit = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"deuce-limit","deuce-limit",1245621172));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-server","first-server",1062935897),first_server,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524),score_limit,new cljs.core.Keyword(null,"deuce-limit","deuce-limit",1245621172),deuce_limit,new cljs.core.Keyword(null,"rallies","rallies",1721171861),cljs.core.List.EMPTY], null);
});
readnext.domain.game_end_QMARK_ = (function readnext$domain$game_end_QMARK_(p__8204){
var map__8205 = p__8204;
var map__8205__$1 = ((((!((map__8205 == null)))?((((map__8205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8205):map__8205);
var rallies = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var score_limit = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524));
var deuce_limit = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"deuce-limit","deuce-limit",1245621172));
var map__8207 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"won-by","won-by",642043710),rallies);
var map__8207__$1 = ((((!((map__8207 == null)))?((((map__8207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8207):map__8207);
var pc = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"pc","pc",512913453));
var npc = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"npc","npc",2026900089));
var scores = (function (){var x__7483__auto__ = cljs.core.count.call(null,pc);
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = cljs.core.count.call(null,npc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
var or__6640__auto__ = cljs.core.some.call(null,((function (map__8207,map__8207__$1,pc,npc,scores,map__8205,map__8205__$1,rallies,score_limit,deuce_limit){
return (function (s){
return (s >= deuce_limit);
});})(map__8207,map__8207__$1,pc,npc,scores,map__8205,map__8205__$1,rallies,score_limit,deuce_limit))
,scores);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var and__6628__auto__ = cljs.core.some.call(null,((function (or__6640__auto__,map__8207,map__8207__$1,pc,npc,scores,map__8205,map__8205__$1,rallies,score_limit,deuce_limit){
return (function (s){
return cljs.core._EQ_.call(null,s,score_limit);
});})(or__6640__auto__,map__8207,map__8207__$1,pc,npc,scores,map__8205,map__8205__$1,rallies,score_limit,deuce_limit))
,scores);
if(cljs.core.truth_(and__6628__auto__)){
return (Math.abs((cljs.core.first.call(null,scores) - cljs.core.second.call(null,scores))) >= (2));
} else {
return and__6628__auto__;
}
}
});
readnext.domain.interval_QMARK_ = (function readnext$domain$interval_QMARK_(p__8209){
var map__8210 = p__8209;
var map__8210__$1 = ((((!((map__8210 == null)))?((((map__8210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8210):map__8210);
var rallies = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var score_limit = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524));
var map__8212 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"won-by","won-by",642043710),rallies);
var map__8212__$1 = ((((!((map__8212 == null)))?((((map__8212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8212):map__8212);
var pc = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"pc","pc",512913453));
var npc = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"npc","npc",2026900089));
var scores = (function (){var x__7483__auto__ = cljs.core.count.call(null,pc);
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = cljs.core.count.call(null,npc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
return cljs.core.some.call(null,((function (map__8212,map__8212__$1,pc,npc,scores,map__8210,map__8210__$1,rallies,score_limit){
return (function (s){
return cljs.core._EQ_.call(null,s,(cljs.core.quot.call(null,score_limit,(2)) + (1)));
});})(map__8212,map__8212__$1,pc,npc,scores,map__8210,map__8210__$1,rallies,score_limit))
,scores);
});
readnext.domain.score_of = (function readnext$domain$score_of(player,rallies){
var map__8214 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"won-by","won-by",642043710),rallies);
var map__8214__$1 = ((((!((map__8214 == null)))?((((map__8214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8214):map__8214);
var point_rallies = cljs.core.get.call(null,map__8214__$1,player);
var scores = cljs.core.count.call(null,point_rallies);
return scores;
});
readnext.domain.rally_end_QMARK_ = (function readnext$domain$rally_end_QMARK_(p__8216){
var map__8217 = p__8216;
var map__8217__$1 = ((((!((map__8217 == null)))?((((map__8217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8217):map__8217);
var won_by = cljs.core.get.call(null,map__8217__$1,new cljs.core.Keyword(null,"won-by","won-by",642043710));
return cljs.core.not_EQ_.call(null,won_by,new cljs.core.Keyword(null,"doubt","doubt",348980947));
});
readnext.domain.last_rally_end_QMARK_ = (function readnext$domain$last_rally_end_QMARK_(p__8219){
var map__8220 = p__8219;
var map__8220__$1 = ((((!((map__8220 == null)))?((((map__8220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8220):map__8220);
var rallies = cljs.core.get.call(null,map__8220__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
return readnext.domain.rally_end_QMARK_.call(null,readnext.domain.last_rally.call(null,rallies));
});
readnext.domain.rival = (function readnext$domain$rival(player){
var G__8222 = player;
var G__8222__$1 = (((G__8222 instanceof cljs.core.Keyword))?G__8222.fqn:null);
switch (G__8222__$1) {
case "npc":
return new cljs.core.Keyword(null,"pc","pc",512913453);

break;
case "pc":
return new cljs.core.Keyword(null,"npc","npc",2026900089);

break;
case "doubt":
return new cljs.core.Keyword(null,"doubt","doubt",348980947);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8222__$1)].join('')));

}
});
readnext.domain.next_server = (function readnext$domain$next_server(p__8224){
var map__8225 = p__8224;
var map__8225__$1 = ((((!((map__8225 == null)))?((((map__8225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8225):map__8225);
var rallies = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var first_server = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"first-server","first-server",1062935897));
return cljs.core.get.call(null,readnext.domain.last_scored_rally.call(null,rallies),new cljs.core.Keyword(null,"won-by","won-by",642043710),first_server);
});
readnext.domain.next_serve_pos = (function readnext$domain$next_serve_pos(rallies,server){
var points = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p__8227){
var map__8228 = p__8227;
var map__8228__$1 = ((((!((map__8228 == null)))?((((map__8228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8228):map__8228);
var won_by = cljs.core.get.call(null,map__8228__$1,new cljs.core.Keyword(null,"won-by","won-by",642043710));
return cljs.core._EQ_.call(null,won_by,server);
}),rallies));
if(cljs.core.even_QMARK_.call(null,points)){
return new cljs.core.Keyword(null,"front-right","front-right",385073770);
} else {
return new cljs.core.Keyword(null,"front-left","front-left",-1987538679);
}
});
readnext.domain.next_stroker = (function readnext$domain$next_stroker(rallies){
return readnext.domain.rival.call(null,cljs.core.first.call(null,readnext.domain.last_unscored_rally.call(null,rallies).call(null,new cljs.core.Keyword(null,"strokes","strokes",-1645650952))).call(null,new cljs.core.Keyword(null,"starter","starter",1015679147)));
});
readnext.domain.next_hitter = (function readnext$domain$next_hitter(rallies){
var last_rally = readnext.domain.last_rally.call(null,rallies);
if(cljs.core.truth_(readnext.domain.rally_end_QMARK_.call(null,last_rally))){
return last_rally.call(null,new cljs.core.Keyword(null,"won-by","won-by",642043710));
} else {
return readnext.domain.next_stroker.call(null,rallies);
}
});
readnext.domain.last_rally = (function readnext$domain$last_rally(rallies){
return cljs.core.first.call(null,rallies);
});
readnext.domain.last_unscored_rally = (function readnext$domain$last_unscored_rally(rallies){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__8230){
var map__8231 = p__8230;
var map__8231__$1 = ((((!((map__8231 == null)))?((((map__8231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8231):map__8231);
var won_by = cljs.core.get.call(null,map__8231__$1,new cljs.core.Keyword(null,"won-by","won-by",642043710));
return cljs.core._EQ_.call(null,won_by,new cljs.core.Keyword(null,"doubt","doubt",348980947));
}),rallies));
});
readnext.domain.last_scored_rally = (function readnext$domain$last_scored_rally(rallies){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__8233){
var map__8234 = p__8233;
var map__8234__$1 = ((((!((map__8234 == null)))?((((map__8234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8234):map__8234);
var won_by = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"won-by","won-by",642043710));
return cljs.core.not_EQ_.call(null,won_by,new cljs.core.Keyword(null,"doubt","doubt",348980947));
}),rallies));
});
readnext.domain.last_stroke = (function readnext$domain$last_stroke(p__8236){
var map__8237 = p__8236;
var map__8237__$1 = ((((!((map__8237 == null)))?((((map__8237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8237):map__8237);
var strokes = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return cljs.core.first.call(null,strokes);
});
readnext.domain.latest_stroke = (function readnext$domain$latest_stroke(rallies){
return readnext.domain.last_stroke.call(null,readnext.domain.last_rally.call(null,rallies));
});
readnext.domain.serve_rally = (function readnext$domain$serve_rally(player,start_pos){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(function (){var x__7483__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"starter","starter",1015679147),player,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),start_pos,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),start_pos,new cljs.core.Keyword(null,"serve?","serve?",-2080690265),true], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),new cljs.core.Keyword(null,"won-by","won-by",642043710),new cljs.core.Keyword(null,"doubt","doubt",348980947)], null);
});
readnext.domain.next_serve = (function readnext$domain$next_serve(p__8239){
var map__8240 = p__8239;
var map__8240__$1 = ((((!((map__8240 == null)))?((((map__8240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8240):map__8240);
var context = map__8240__$1;
var rallies = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var server = readnext.domain.next_server.call(null,context);
var pos = readnext.domain.next_serve_pos.call(null,rallies,server);
return readnext.domain.serve_rally.call(null,server,pos);
});
readnext.domain.record_service = (function readnext$domain$record_service(context,serve){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rallies","rallies",1721171861)], null),cljs.core.conj,serve);
});
readnext.domain.next_stroke_pos = (function readnext$domain$next_stroke_pos(rallies){
return cljs.core.get.call(null,readnext.domain.last_stroke.call(null,readnext.domain.last_unscored_rally.call(null,rallies)),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
});
readnext.domain.next_stroke = (function readnext$domain$next_stroke(rallies,player,direction){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"starter","starter",1015679147),player,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),readnext.domain.next_stroke_pos.call(null,rallies),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),direction,new cljs.core.Keyword(null,"serve?","serve?",-2080690265),null], null);
});
readnext.domain.record_stroke_to_rally = (function readnext$domain$record_stroke_to_rally(rallies,next){
var new_last_rally = cljs.core.update_in.call(null,readnext.domain.last_unscored_rally.call(null,rallies),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null),cljs.core.conj,next);
return readnext.util.replace_last.call(null,rallies,new_last_rally);
});
readnext.domain.record_stroke_to_context = (function readnext$domain$record_stroke_to_context(p__8242,stroke,player,direction){
var map__8243 = p__8242;
var map__8243__$1 = ((((!((map__8243 == null)))?((((map__8243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8243):map__8243);
var context = map__8243__$1;
var rallies = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
return ((function (map__8243,map__8243__$1,context,rallies){
return (function (r){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rallies","rallies",1721171861)], null),r);
});})(map__8243,map__8243__$1,context,rallies))
.call(null,readnext.domain.record_stroke_to_rally.call(null,rallies,stroke));
});
readnext.domain.fail_stroke = (function readnext$domain$fail_stroke(context,player){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rallies","rallies",1721171861)], null),(function (p__8245,r){
var vec__8246 = p__8245;
var seq__8247 = cljs.core.seq.call(null,vec__8246);
var first__8248 = cljs.core.first.call(null,seq__8247);
var seq__8247__$1 = cljs.core.next.call(null,seq__8247);
var first = first__8248;
var rest = seq__8247__$1;
var rallies = vec__8246;
return readnext.util.replace_last.call(null,rallies,cljs.core.assoc_in.call(null,first,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"won-by","won-by",642043710)], null),readnext.domain.rival.call(null,player)));
}));
});
readnext.domain.all_strokes_by = (function readnext$domain$all_strokes_by(p__8249,player){
var map__8250 = p__8249;
var map__8250__$1 = ((((!((map__8250 == null)))?((((map__8250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8250):map__8250);
var rallies = cljs.core.get.call(null,map__8250__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
return cljs.core.filter.call(null,((function (map__8250,map__8250__$1,rallies){
return (function (p__8252){
var map__8253 = p__8252;
var map__8253__$1 = ((((!((map__8253 == null)))?((((map__8253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8253):map__8253);
var starter = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"starter","starter",1015679147));
return cljs.core._EQ_.call(null,starter,player);
});})(map__8250,map__8250__$1,rallies))
,cljs.core.mapcat.call(null,((function (map__8250,map__8250__$1,rallies){
return (function (p__8255){
var map__8256 = p__8255;
var map__8256__$1 = ((((!((map__8256 == null)))?((((map__8256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8256):map__8256);
var strokes = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return strokes;
});})(map__8250,map__8250__$1,rallies))
,rallies));
});

//# sourceMappingURL=domain.js.map