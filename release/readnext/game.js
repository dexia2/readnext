// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.npc.decision.util');
readnext.game.first_server = cljs.core.cst$kw$pc;
readnext.game.play_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
readnext.game.play_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
readnext.game.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
readnext.game.normal_score_limit = (21);
readnext.game.max_score_limit = (30);
readnext.game.last_phase_start = (readnext.game.normal_score_limit - (5));
readnext.game.get_context = (function readnext$game$get_context(){
return cljs.core.deref(readnext.game.play_context);
});
readnext.game.get_mode = (function readnext$game$get_mode(){
return cljs.core.deref(readnext.game.play_mode);
});
readnext.game.random_mode = (function readnext$game$random_mode(){
return readnext.util.random_elm(cljs.core.seq(readnext.npc.decision.util.modes));
});
readnext.game.next_direction = (function readnext$game$next_direction(var_args){
var G__14344 = arguments.length;
switch (G__14344) {
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
return readnext.util.random_elm(cljs.core.seq(readnext.domain.directions));
});

readnext.game.next_direction.cljs$core$IFn$_invoke$arity$1 = (function (context){
return readnext.npc.decision.util.decide(context,readnext.game.get_mode());
});

readnext.game.next_direction.cljs$lang$maxFixedArity = 1;

readnext.game.success_QMARK_ = (function readnext$game$success_QMARK_(player,direction,prediction){
var rate = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$pc))?(70):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,prediction))?(50):(90)));
return (rate >= cljs.core.rand_int((100)));
});
readnext.game.reset_game_BANG_ = (function readnext$game$reset_game_BANG_(){
(readnext.game.init_context_BANG_.cljs$core$IFn$_invoke$arity$0 ? readnext.game.init_context_BANG_.cljs$core$IFn$_invoke$arity$0() : readnext.game.init_context_BANG_.call(null));

(readnext.game.init_mode_BANG_.cljs$core$IFn$_invoke$arity$0 ? readnext.game.init_mode_BANG_.cljs$core$IFn$_invoke$arity$0() : readnext.game.init_mode_BANG_.call(null));

cljs.core.reset_BANG_(readnext.game.events,cljs.core.List.EMPTY);

return (readnext.game.record_service_BANG_.cljs$core$IFn$_invoke$arity$0 ? readnext.game.record_service_BANG_.cljs$core$IFn$_invoke$arity$0() : readnext.game.record_service_BANG_.call(null));
});
readnext.game.init_context_BANG_ = (function readnext$game$init_context_BANG_(){
return cljs.core.reset_BANG_(readnext.game.play_context,readnext.domain.init_context(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$first_DASH_server,readnext.game.first_server,cljs.core.cst$kw$score_DASH_limit,readnext.game.normal_score_limit,cljs.core.cst$kw$deuce_DASH_limit,readnext.game.max_score_limit], null)));
});
readnext.game.init_mode_BANG_ = (function readnext$game$init_mode_BANG_(){
return cljs.core.reset_BANG_(readnext.game.play_mode,readnext.game.random_mode());
});
readnext.game.event_done_QMARK_ = (function readnext$game$event_done_QMARK_(event){
return !(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,event);
}),cljs.core.deref(readnext.game.events))));
});
readnext.game.change_mode_BANG_ = (function readnext$game$change_mode_BANG_(event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(readnext.game.events,cljs.core.conj,event);

return readnext.game.init_mode_BANG_();
});
readnext.game.record_stroke_BANG_ = (function readnext$game$record_stroke_BANG_(player,direction,prediction){
var map__14346 = cljs.core.deref(readnext.game.play_context);
var map__14346__$1 = ((((!((map__14346 == null)))?((((map__14346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14346):map__14346);
var context = map__14346__$1;
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14346__$1,cljs.core.cst$kw$rallies);
var new_stroke = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(readnext.domain.next_stroke(rallies,player,direction),cljs.core.cst$kw$prediction,prediction);
return cljs.core.reset_BANG_(readnext.game.play_context,readnext.domain.record_stroke_to_context(cljs.core.deref(readnext.game.play_context),new_stroke,player,direction));
});
readnext.game.fail_stroke_BANG_ = (function readnext$game$fail_stroke_BANG_(player){
return cljs.core.reset_BANG_(readnext.game.play_context,readnext.domain.fail_stroke(cljs.core.deref(readnext.game.play_context),player));
});
readnext.game.record_service_BANG_ = (function readnext$game$record_service_BANG_(){
return cljs.core.reset_BANG_(readnext.game.play_context,readnext.domain.record_service(cljs.core.deref(readnext.game.play_context),readnext.domain.next_serve(cljs.core.deref(readnext.game.play_context))));
});
readnext.game.try_stroke_BANG_ = (function readnext$game$try_stroke_BANG_(player,direction,prediction){
if(cljs.core.truth_(readnext.domain.game_end_QMARK_(cljs.core.deref(readnext.game.play_context)))){
return null;
} else {
if(cljs.core.not(readnext.game.success_QMARK_(player,direction,prediction))){
readnext.game.record_stroke_BANG_(player,direction,prediction);

readnext.game.fail_stroke_BANG_(player);

return null;
} else {
return readnext.game.record_stroke_BANG_(player,direction,prediction);

}
}
});
readnext.game.last_phase_QMARK_ = (function readnext$game$last_phase_QMARK_(p__14348){
var map__14349 = p__14348;
var map__14349__$1 = ((((!((map__14349 == null)))?((((map__14349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14349):map__14349);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14349__$1,cljs.core.cst$kw$rallies);
var score_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14349__$1,cljs.core.cst$kw$score_DASH_limit);
var map__14351 = cljs.core.group_by(cljs.core.cst$kw$won_DASH_by,rallies);
var map__14351__$1 = ((((!((map__14351 == null)))?((((map__14351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14351):map__14351);
var pc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14351__$1,cljs.core.cst$kw$pc);
var npc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14351__$1,cljs.core.cst$kw$npc);
var scores = (function (){var x__7483__auto__ = cljs.core.count(pc);
return cljs.core._conj((function (){var x__7483__auto____$1 = cljs.core.count(npc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})();
return cljs.core.some(((function (map__14351,map__14351__$1,pc,npc,scores,map__14349,map__14349__$1,rallies,score_limit){
return (function (s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,readnext.game.last_phase_start);
});})(map__14351,map__14351__$1,pc,npc,scores,map__14349,map__14349__$1,rallies,score_limit))
,scores);
});
readnext.game.play_BANG_ = (function readnext$game$play_BANG_(var_args){
var G__14354 = arguments.length;
switch (G__14354) {
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
return readnext.game.try_stroke_BANG_(cljs.core.cst$kw$pc,readnext.game.next_direction.cljs$core$IFn$_invoke$arity$0(),readnext.game.direction,null);
});

readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (direction){
if(cljs.core.truth_((function (){var and__6628__auto__ = cljs.core.not(readnext.game.event_done_QMARK_(cljs.core.cst$kw$intervel));
if(and__6628__auto__){
return readnext.domain.interval_QMARK_(cljs.core.deref(readnext.game.play_context));
} else {
return and__6628__auto__;
}
})())){
readnext.game.change_mode_BANG_(cljs.core.cst$kw$intervel);
} else {
}

if(cljs.core.truth_((function (){var and__6628__auto__ = cljs.core.not(readnext.game.event_done_QMARK_(cljs.core.cst$kw$last_DASH_phase));
if(and__6628__auto__){
return readnext.game.last_phase_QMARK_(cljs.core.deref(readnext.game.play_context));
} else {
return and__6628__auto__;
}
})())){
readnext.game.change_mode_BANG_(cljs.core.cst$kw$last_DASH_phase);
} else {
}

return readnext.game.try_stroke_BANG_(cljs.core.cst$kw$npc,readnext.game.next_direction.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(readnext.game.play_context)),direction);
});

readnext.game.play_BANG_.cljs$lang$maxFixedArity = 1;

readnext.game.all_predictable_strokes = (function readnext$game$all_predictable_strokes(rallies){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14356){
var map__14357 = p__14356;
var map__14357__$1 = ((((!((map__14357 == null)))?((((map__14357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14357):map__14357);
var starter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,cljs.core.cst$kw$starter);
var serve_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,cljs.core.cst$kw$serve_QMARK_);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(starter,cljs.core.cst$kw$npc)) && (cljs.core.not(serve_QMARK_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14359){
var map__14360 = p__14359;
var map__14360__$1 = ((((!((map__14360 == null)))?((((map__14360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14360):map__14360);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14360__$1,cljs.core.cst$kw$strokes);
return strokes;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rallies], 0)));
});
readnext.game.prediction_hit_strokes = (function readnext$game$prediction_hit_strokes(rallies){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14362){
var map__14363 = p__14362;
var map__14363__$1 = ((((!((map__14363 == null)))?((((map__14363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14363):map__14363);
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14363__$1,cljs.core.cst$kw$end_DASH_pos);
var prediction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14363__$1,cljs.core.cst$kw$prediction);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_pos,prediction);
}),readnext.game.all_predictable_strokes(rallies));
});
readnext.game.longest_strokes_count = (function readnext$game$longest_strokes_count(rallies){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14365){
var map__14366 = p__14365;
var map__14366__$1 = ((((!((map__14366 == null)))?((((map__14366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14366):map__14366);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$strokes);
return cljs.core.count(strokes);
}),rallies));
});
readnext.game.strokes_count_average = (function readnext$game$strokes_count_average(rallies){
var G__14368 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14369){
var map__14370 = p__14369;
var map__14370__$1 = ((((!((map__14370 == null)))?((((map__14370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14370):map__14370);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,cljs.core.cst$kw$strokes);
return cljs.core.count(strokes);
}),rallies);
return (readnext.game.average.cljs$core$IFn$_invoke$arity$1 ? readnext.game.average.cljs$core$IFn$_invoke$arity$1(G__14368) : readnext.game.average.call(null,G__14368));
});
readnext.game.average = (function readnext$game$average(numbers){
var devider = cljs.core.count(numbers);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devider,(0))){
return (0);
} else {
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,numbers) / devider);
}
});
