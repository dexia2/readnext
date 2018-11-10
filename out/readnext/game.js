// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.game');
goog.require('cljs.core');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.npc.decision.util');
readnext.game.first_server = new cljs.core.Keyword(null,"pc","pc",512913453);
readnext.game.play_context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
readnext.game.play_mode = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
readnext.game.events = cljs.core.atom.call(null,cljs.core.List.EMPTY);
readnext.game.normal_score_limit = (21);
readnext.game.max_score_limit = (30);
readnext.game.last_phase_start = (readnext.game.normal_score_limit - (5));
readnext.game.get_context = (function readnext$game$get_context(){
return cljs.core.deref.call(null,readnext.game.play_context);
});
readnext.game.get_mode = (function readnext$game$get_mode(){
return cljs.core.deref.call(null,readnext.game.play_mode);
});
readnext.game.random_mode = (function readnext$game$random_mode(){
return readnext.util.random_elm.call(null,cljs.core.seq.call(null,readnext.npc.decision.util.modes));
});
readnext.game.next_direction = (function readnext$game$next_direction(var_args){
var G__10393 = arguments.length;
switch (G__10393) {
case 0:
return readnext.game.next_direction.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return readnext.game.next_direction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

readnext.game.next_direction.cljs$core$IFn$_invoke$arity$0 = (function (){
return readnext.util.random_elm.call(null,cljs.core.seq.call(null,readnext.domain.directions));
});

readnext.game.next_direction.cljs$core$IFn$_invoke$arity$1 = (function (context){
return readnext.npc.decision.util.decide.call(null,context,readnext.game.get_mode.call(null));
});

readnext.game.next_direction.cljs$lang$maxFixedArity = 1;

readnext.game.success_QMARK_ = (function readnext$game$success_QMARK_(player,direction,prediction){
var rate = ((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"pc","pc",512913453)))?(70):((cljs.core._EQ_.call(null,direction,prediction))?(50):(90)));
return (rate >= cljs.core.rand_int.call(null,(100)));
});
readnext.game.reset_game_BANG_ = (function readnext$game$reset_game_BANG_(){
readnext.game.init_context_BANG_.call(null);

readnext.game.init_mode_BANG_.call(null);

cljs.core.reset_BANG_.call(null,readnext.game.events,cljs.core.List.EMPTY);

return readnext.game.record_service_BANG_.call(null);
});
readnext.game.init_context_BANG_ = (function readnext$game$init_context_BANG_(){
return cljs.core.reset_BANG_.call(null,readnext.game.play_context,readnext.domain.init_context.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-server","first-server",1062935897),readnext.game.first_server,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524),readnext.game.normal_score_limit,new cljs.core.Keyword(null,"deuce-limit","deuce-limit",1245621172),readnext.game.max_score_limit], null)));
});
readnext.game.init_mode_BANG_ = (function readnext$game$init_mode_BANG_(){
return cljs.core.reset_BANG_.call(null,readnext.game.play_mode,readnext.game.random_mode.call(null));
});
readnext.game.event_done_QMARK_ = (function readnext$game$event_done_QMARK_(event){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (e){
return cljs.core._EQ_.call(null,e,event);
}),cljs.core.deref.call(null,readnext.game.events))));
});
readnext.game.change_mode_BANG_ = (function readnext$game$change_mode_BANG_(event){
cljs.core.swap_BANG_.call(null,readnext.game.events,cljs.core.conj,event);

return readnext.game.init_mode_BANG_.call(null);
});
readnext.game.record_stroke_BANG_ = (function readnext$game$record_stroke_BANG_(player,direction,prediction){
var map__10395 = cljs.core.deref.call(null,readnext.game.play_context);
var map__10395__$1 = ((((!((map__10395 == null)))?((((map__10395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10395):map__10395);
var context = map__10395__$1;
var rallies = cljs.core.get.call(null,map__10395__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var new_stroke = cljs.core.assoc.call(null,readnext.domain.next_stroke.call(null,rallies,player,direction),new cljs.core.Keyword(null,"prediction","prediction",109482855),prediction);
return cljs.core.reset_BANG_.call(null,readnext.game.play_context,readnext.domain.record_stroke_to_context.call(null,cljs.core.deref.call(null,readnext.game.play_context),new_stroke,player,direction));
});
readnext.game.fail_stroke_BANG_ = (function readnext$game$fail_stroke_BANG_(player){
return cljs.core.reset_BANG_.call(null,readnext.game.play_context,readnext.domain.fail_stroke.call(null,cljs.core.deref.call(null,readnext.game.play_context),player));
});
readnext.game.record_service_BANG_ = (function readnext$game$record_service_BANG_(){
return cljs.core.reset_BANG_.call(null,readnext.game.play_context,readnext.domain.record_service.call(null,cljs.core.deref.call(null,readnext.game.play_context),readnext.domain.next_serve.call(null,cljs.core.deref.call(null,readnext.game.play_context))));
});
readnext.game.try_stroke_BANG_ = (function readnext$game$try_stroke_BANG_(player,direction,prediction){
if(cljs.core.truth_(readnext.domain.game_end_QMARK_.call(null,cljs.core.deref.call(null,readnext.game.play_context)))){
return null;
} else {
if(cljs.core.not.call(null,readnext.game.success_QMARK_.call(null,player,direction,prediction))){
readnext.game.record_stroke_BANG_.call(null,player,direction,prediction);

readnext.game.fail_stroke_BANG_.call(null,player);

return null;
} else {
return readnext.game.record_stroke_BANG_.call(null,player,direction,prediction);

}
}
});
readnext.game.last_phase_QMARK_ = (function readnext$game$last_phase_QMARK_(p__10397){
var map__10398 = p__10397;
var map__10398__$1 = ((((!((map__10398 == null)))?((((map__10398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10398):map__10398);
var rallies = cljs.core.get.call(null,map__10398__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var score_limit = cljs.core.get.call(null,map__10398__$1,new cljs.core.Keyword(null,"score-limit","score-limit",-40480524));
var map__10400 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"won-by","won-by",642043710),rallies);
var map__10400__$1 = ((((!((map__10400 == null)))?((((map__10400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10400):map__10400);
var pc = cljs.core.get.call(null,map__10400__$1,new cljs.core.Keyword(null,"pc","pc",512913453));
var npc = cljs.core.get.call(null,map__10400__$1,new cljs.core.Keyword(null,"npc","npc",2026900089));
var scores = (function (){var x__7483__auto__ = cljs.core.count.call(null,pc);
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = cljs.core.count.call(null,npc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
return cljs.core.some.call(null,((function (map__10400,map__10400__$1,pc,npc,scores,map__10398,map__10398__$1,rallies,score_limit){
return (function (s){
return cljs.core._EQ_.call(null,s,readnext.game.last_phase_start);
});})(map__10400,map__10400__$1,pc,npc,scores,map__10398,map__10398__$1,rallies,score_limit))
,scores);
});
readnext.game.play_BANG_ = (function readnext$game$play_BANG_(var_args){
var G__10403 = arguments.length;
switch (G__10403) {
case 0:
return readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return readnext.game.try_stroke_BANG_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),readnext.game.next_direction.call(null),readnext.game.direction,null);
});

readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (direction){
if(cljs.core.truth_((function (){var and__6628__auto__ = cljs.core.not.call(null,readnext.game.event_done_QMARK_.call(null,new cljs.core.Keyword(null,"intervel","intervel",1201759043)));
if(and__6628__auto__){
return readnext.domain.interval_QMARK_.call(null,cljs.core.deref.call(null,readnext.game.play_context));
} else {
return and__6628__auto__;
}
})())){
readnext.game.change_mode_BANG_.call(null,new cljs.core.Keyword(null,"intervel","intervel",1201759043));
} else {
}

if(cljs.core.truth_((function (){var and__6628__auto__ = cljs.core.not.call(null,readnext.game.event_done_QMARK_.call(null,new cljs.core.Keyword(null,"last-phase","last-phase",-57996299)));
if(and__6628__auto__){
return readnext.game.last_phase_QMARK_.call(null,cljs.core.deref.call(null,readnext.game.play_context));
} else {
return and__6628__auto__;
}
})())){
readnext.game.change_mode_BANG_.call(null,new cljs.core.Keyword(null,"last-phase","last-phase",-57996299));
} else {
}

return readnext.game.try_stroke_BANG_.call(null,new cljs.core.Keyword(null,"npc","npc",2026900089),readnext.game.next_direction.call(null,cljs.core.deref.call(null,readnext.game.play_context)),direction);
});

readnext.game.play_BANG_.cljs$lang$maxFixedArity = 1;

readnext.game.all_predictable_strokes = (function readnext$game$all_predictable_strokes(rallies){
return cljs.core.filter.call(null,(function (p__10405){
var map__10406 = p__10405;
var map__10406__$1 = ((((!((map__10406 == null)))?((((map__10406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10406):map__10406);
var starter = cljs.core.get.call(null,map__10406__$1,new cljs.core.Keyword(null,"starter","starter",1015679147));
var serve_QMARK_ = cljs.core.get.call(null,map__10406__$1,new cljs.core.Keyword(null,"serve?","serve?",-2080690265));
return (cljs.core._EQ_.call(null,starter,new cljs.core.Keyword(null,"npc","npc",2026900089))) && (cljs.core.not.call(null,serve_QMARK_));
}),cljs.core.mapcat.call(null,(function (p__10408){
var map__10409 = p__10408;
var map__10409__$1 = ((((!((map__10409 == null)))?((((map__10409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10409):map__10409);
var strokes = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return strokes;
}),rallies));
});
readnext.game.prediction_hit_strokes = (function readnext$game$prediction_hit_strokes(rallies){
return cljs.core.filter.call(null,(function (p__10411){
var map__10412 = p__10411;
var map__10412__$1 = ((((!((map__10412 == null)))?((((map__10412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10412):map__10412);
var end_pos = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
var prediction = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"prediction","prediction",109482855));
return cljs.core._EQ_.call(null,end_pos,prediction);
}),readnext.game.all_predictable_strokes.call(null,rallies));
});
readnext.game.longest_strokes_count = (function readnext$game$longest_strokes_count(rallies){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p__10414){
var map__10415 = p__10414;
var map__10415__$1 = ((((!((map__10415 == null)))?((((map__10415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10415):map__10415);
var strokes = cljs.core.get.call(null,map__10415__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return cljs.core.count.call(null,strokes);
}),rallies));
});
readnext.game.strokes_count_average = (function readnext$game$strokes_count_average(rallies){
return readnext.game.average.call(null,cljs.core.map.call(null,(function (p__10417){
var map__10418 = p__10417;
var map__10418__$1 = ((((!((map__10418 == null)))?((((map__10418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10418):map__10418);
var strokes = cljs.core.get.call(null,map__10418__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
return cljs.core.count.call(null,strokes);
}),rallies));
});
readnext.game.average = (function readnext$game$average(numbers){
var devider = cljs.core.count.call(null,numbers);
if(cljs.core._EQ_.call(null,devider,(0))){
return (0);
} else {
return (cljs.core.reduce.call(null,cljs.core._PLUS_,numbers) / devider);
}
});

//# sourceMappingURL=game.js.map