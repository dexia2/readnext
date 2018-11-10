// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.repl');
goog.require('quil.core');
goog.require('readnext.motion');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.game');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.core.enable_console_print_BANG_();
window.addEventListener("DOMContentLoaded",(function (){
return readnext.game.reset_game_BANG_();
}));
document.getElementById("reset").addEventListener("click",(function (){
readnext.game.reset_game_BANG_();

return cljs.core.reset_BANG_(readnext.core.shuttle_pos,null);
}));
readnext.core.court_height = (300);
readnext.core.court_width = (300);
readnext.core.net_y = (readnext.core.court_height / (2));
readnext.core.target_radius = (15);
readnext.core.shuttle_radius = (15);
readnext.core.shuttle_speed = (8);
readnext.core.shuttle_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
readnext.core.npc_targets = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$middle_DASH_left,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(70)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$back_DASH_left,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(30)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$middle_DASH_right,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(70)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$back_DASH_right,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(30)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$front_DASH_right,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(110)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$front_DASH_left,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(110)], null)]);
readnext.core.pc_targets = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$middle_DASH_right,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(220)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$front_DASH_left,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(180)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$back_DASH_left,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(260)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$front_DASH_right,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(180)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$back_DASH_right,cljs.core.cst$kw$x,(240),cljs.core.cst$kw$y,(260)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$direction,cljs.core.cst$kw$middle_DASH_left,cljs.core.cst$kw$x,(40),cljs.core.cst$kw$y,(220)], null)]);
readnext.core.draw_court = (function readnext$core$draw_court(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(290),(290));

quil.core.line.cljs$core$IFn$_invoke$arity$4((20),(0),(20),(290));

quil.core.line.cljs$core$IFn$_invoke$arity$4((145),(0),(145),(290));

quil.core.line.cljs$core$IFn$_invoke$arity$4((270),(0),(270),(290));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(50),(290),(50));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(145),(290),(145));

return quil.core.line.cljs$core$IFn$_invoke$arity$4((0),(240),(290),(240));
});
readnext.core.find_target = (function readnext$core$find_target(direction,targets){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14829){
var map__14830 = p__14829;
var map__14830__$1 = ((((!((map__14830 == null)))?((((map__14830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14830):map__14830);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14830__$1,cljs.core.cst$kw$direction);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,direction);
}),cljs.core.seq(targets)));
});
readnext.core.touched_target = (function readnext$core$touched_target(p__14832,targets){
var map__14833 = p__14832;
var map__14833__$1 = ((((!((map__14833 == null)))?((((map__14833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14833):map__14833);
var mouse_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,cljs.core.cst$kw$x);
var mouse_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,cljs.core.cst$kw$y);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14833,map__14833__$1,mouse_x,mouse_y){
return (function (target){
return readnext.motion.in_ellipse(target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,mouse_x,cljs.core.cst$kw$y,mouse_y], null),readnext.core.target_radius);
});})(map__14833,map__14833__$1,mouse_x,mouse_y))
,targets);
});
readnext.core.draw_targets = (function readnext$core$draw_targets(targets){
var seq__14835 = cljs.core.seq(cljs.core.seq(targets));
var chunk__14836 = null;
var count__14837 = (0);
var i__14838 = (0);
while(true){
if((i__14838 < count__14837)){
var map__14839 = chunk__14836.cljs$core$IIndexed$_nth$arity$2(null,i__14838);
var map__14839__$1 = ((((!((map__14839 == null)))?((((map__14839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14839):map__14839);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14839__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14839__$1,cljs.core.cst$kw$y);
quil.core.ellipse(x,y,(readnext.core.target_radius * (2)),(readnext.core.target_radius * (2)));

var G__14843 = seq__14835;
var G__14844 = chunk__14836;
var G__14845 = count__14837;
var G__14846 = (i__14838 + (1));
seq__14835 = G__14843;
chunk__14836 = G__14844;
count__14837 = G__14845;
i__14838 = G__14846;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14835);
if(temp__4657__auto__){
var seq__14835__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14835__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__14835__$1);
var G__14847 = cljs.core.chunk_rest(seq__14835__$1);
var G__14848 = c__7460__auto__;
var G__14849 = cljs.core.count(c__7460__auto__);
var G__14850 = (0);
seq__14835 = G__14847;
chunk__14836 = G__14848;
count__14837 = G__14849;
i__14838 = G__14850;
continue;
} else {
var map__14841 = cljs.core.first(seq__14835__$1);
var map__14841__$1 = ((((!((map__14841 == null)))?((((map__14841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14841):map__14841);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,cljs.core.cst$kw$y);
quil.core.ellipse(x,y,(readnext.core.target_radius * (2)),(readnext.core.target_radius * (2)));

var G__14851 = cljs.core.next(seq__14835__$1);
var G__14852 = null;
var G__14853 = (0);
var G__14854 = (0);
seq__14835 = G__14851;
chunk__14836 = G__14852;
count__14837 = G__14853;
i__14838 = G__14854;
continue;
}
} else {
return null;
}
}
break;
}
});
readnext.core.draw_colored_targets = (function readnext$core$draw_colored_targets(){
var stroker = readnext.domain.next_hitter((function (){var G__14856 = cljs.core.cst$kw$rallies;
var fexpr__14855 = readnext.game.get_context();
return (fexpr__14855.cljs$core$IFn$_invoke$arity$1 ? fexpr__14855.cljs$core$IFn$_invoke$arity$1(G__14856) : fexpr__14855.call(null,G__14856));
})());
var targets = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pc,stroker))?readnext.core.npc_targets:readnext.core.pc_targets);
var target = readnext.core.touched_target(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y()], null),targets);
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

readnext.core.draw_targets(targets);

if(cljs.core.empty_QMARK_(target)){
return null;
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$3((240),(179),(37));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((240),(179),(37));

readnext.core.draw_targets(target);

return readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__14858 = cljs.core.cst$kw$direction;
var fexpr__14857 = cljs.core.first(target);
return (fexpr__14857.cljs$core$IFn$_invoke$arity$1 ? fexpr__14857.cljs$core$IFn$_invoke$arity$1(G__14858) : fexpr__14857.call(null,G__14858));
})());
}
});
readnext.core.draw_shuttle = (function readnext$core$draw_shuttle(){
if(cljs.core.truth_(cljs.core.deref(readnext.core.shuttle_pos))){
quil.core.stroke.cljs$core$IFn$_invoke$arity$3((240),(179),(37));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((240),(179),(37));

return quil.core.ellipse((function (){var G__14860 = cljs.core.cst$kw$x;
var fexpr__14859 = cljs.core.deref(readnext.core.shuttle_pos);
return (fexpr__14859.cljs$core$IFn$_invoke$arity$1 ? fexpr__14859.cljs$core$IFn$_invoke$arity$1(G__14860) : fexpr__14859.call(null,G__14860));
})(),(function (){var G__14862 = cljs.core.cst$kw$y;
var fexpr__14861 = cljs.core.deref(readnext.core.shuttle_pos);
return (fexpr__14861.cljs$core$IFn$_invoke$arity$1 ? fexpr__14861.cljs$core$IFn$_invoke$arity$1(G__14862) : fexpr__14861.call(null,G__14862));
})(),readnext.core.shuttle_radius,readnext.core.shuttle_radius);
} else {
return null;
}
});
readnext.core.stroking_from = (function readnext$core$stroking_from(){
var map__14863 = readnext.game.get_context();
var map__14863__$1 = ((((!((map__14863 == null)))?((((map__14863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14863):map__14863);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14863__$1,cljs.core.cst$kw$rallies);
var stroker = readnext.domain.next_hitter(rallies);
var map__14864 = readnext.domain.latest_stroke(rallies);
var map__14864__$1 = ((((!((map__14864 == null)))?((((map__14864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14864):map__14864);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14864__$1,cljs.core.cst$kw$start_DASH_pos);
var from_pos = readnext.core.find_target(from,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stroker,cljs.core.cst$kw$pc))?readnext.core.npc_targets:readnext.core.pc_targets));
return from_pos;
});
readnext.core.to_net = (function readnext$core$to_net(to_pos){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(function (){var G__14867 = cljs.core.cst$kw$x;
return (to_pos.cljs$core$IFn$_invoke$arity$1 ? to_pos.cljs$core$IFn$_invoke$arity$1(G__14867) : to_pos.call(null,G__14867));
})(),cljs.core.cst$kw$y,readnext.core.net_y], null);
});
readnext.core.stroking_to = (function readnext$core$stroking_to(rally_end_QMARK_){
var map__14868 = readnext.game.get_context();
var map__14868__$1 = ((((!((map__14868 == null)))?((((map__14868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14868):map__14868);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14868__$1,cljs.core.cst$kw$rallies);
var stroker = readnext.domain.next_hitter(rallies);
var map__14869 = readnext.domain.latest_stroke(rallies);
var map__14869__$1 = ((((!((map__14869 == null)))?((((map__14869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14869):map__14869);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14869__$1,cljs.core.cst$kw$end_DASH_pos);
var to_pos = readnext.core.find_target(to,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stroker,cljs.core.cst$kw$pc))?readnext.core.pc_targets:readnext.core.npc_targets));
if(cljs.core.truth_(rally_end_QMARK_)){
return readnext.core.to_net(to_pos);
} else {
return to_pos;
}
});
readnext.core.move_shuttle_BANG_ = (function readnext$core$move_shuttle_BANG_(rally_end_QMARK_){
var map__14872 = readnext.core.stroking_from();
var map__14872__$1 = ((((!((map__14872 == null)))?((((map__14872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14872):map__14872);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14872__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14872__$1,cljs.core.cst$kw$y);
var to_pos = readnext.core.stroking_to(rally_end_QMARK_);
if(cljs.core.truth_(cljs.core.deref(readnext.core.shuttle_pos))){
} else {
cljs.core.reset_BANG_(readnext.core.shuttle_pos,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));
}

return cljs.core.reset_BANG_(readnext.core.shuttle_pos,readnext.motion.move(to_pos,cljs.core.deref(readnext.core.shuttle_pos),readnext.core.target_radius,readnext.core.shuttle_speed));
});
readnext.core.draw_service_BANG_ = (function readnext$core$draw_service_BANG_(){
readnext.game.record_service_BANG_();

var map__14874 = readnext.core.stroking_from();
var map__14874__$1 = ((((!((map__14874 == null)))?((((map__14874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14874):map__14874);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$y);
return cljs.core.reset_BANG_(readnext.core.shuttle_pos,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));
});
readnext.core.draw_shuttle_and_targets = (function readnext$core$draw_shuttle_and_targets(){
var rally_end_QMARK_ = readnext.domain.last_rally_end_QMARK_(readnext.game.get_context());
var stroker = readnext.domain.next_hitter((function (){var G__14877 = cljs.core.cst$kw$rallies;
var fexpr__14876 = readnext.game.get_context();
return (fexpr__14876.cljs$core$IFn$_invoke$arity$1 ? fexpr__14876.cljs$core$IFn$_invoke$arity$1(G__14877) : fexpr__14876.call(null,G__14877));
})());
var to_pos = readnext.core.stroking_to(rally_end_QMARK_);
readnext.core.draw_shuttle();

if(cljs.core.truth_(readnext.domain.game_end_QMARK_(readnext.game.get_context()))){
return null;
} else {
if(cljs.core.truth_(readnext.motion.in_ellipse(to_pos,cljs.core.deref(readnext.core.shuttle_pos),readnext.core.target_radius))){
if(cljs.core.truth_(rally_end_QMARK_)){
return readnext.core.draw_service_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stroker,cljs.core.cst$kw$npc)){
return readnext.core.draw_colored_targets();
} else {
return readnext.game.play_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}
} else {
return readnext.core.move_shuttle_BANG_(rally_end_QMARK_);

}
}
});
readnext.core.draw_context = (function readnext$core$draw_context(){
var map__14878 = readnext.game.get_context();
var map__14878__$1 = ((((!((map__14878 == null)))?((((map__14878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14878):map__14878);
var rallies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14878__$1,cljs.core.cst$kw$rallies);
var pc_points = readnext.domain.score_of(cljs.core.cst$kw$pc,rallies);
var npc_points = readnext.domain.score_of(cljs.core.cst$kw$npc,rallies);
var all_predictable = cljs.core.count(readnext.game.all_predictable_strokes(rallies));
var all_prediction_hits = cljs.core.count(readnext.game.prediction_hit_strokes(rallies));
var average_strokes_count = readnext.game.strokes_count_average(rallies);
var longest_rally = readnext.game.longest_strokes_count(rallies);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.text_size((20));

quil.core.text.cljs$core$IFn$_invoke$arity$3(goog.string.format("PC %s - %s NPC",pc_points,npc_points),(20),(340));

quil.core.text.cljs$core$IFn$_invoke$arity$3(goog.string.format("\u4E88\u6E2C %s/%s",all_prediction_hits,all_predictable),(20),(370));

quil.core.text.cljs$core$IFn$_invoke$arity$3(goog.string.format("\u5E73\u5747\u30E9\u30EA\u30FC\u6570 %.1f",average_strokes_count),(20),(400));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(goog.string.format("\u6700\u9577\u30E9\u30EA\u30FC\u6570 %s",longest_rally),(20),(430));
});
readnext.core.draw = (function readnext$core$draw(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

readnext.core.draw_court();

readnext.core.draw_shuttle_and_targets();

return readnext.core.draw_context();
});
readnext.core.setup = (function readnext$core$setup(){
return quil.core.frame_rate((5));
});
readnext.core.court = (function readnext$core$court(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"court",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(470)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(readnext.core.setup))?(function() { 
var G__14880__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(readnext.core.setup,args);
};
var G__14880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14881__i = 0, G__14881__a = new Array(arguments.length -  0);
while (G__14881__i < G__14881__a.length) {G__14881__a[G__14881__i] = arguments[G__14881__i + 0]; ++G__14881__i;}
  args = new cljs.core.IndexedSeq(G__14881__a,0,null);
} 
return G__14880__delegate.call(this,args);};
G__14880.cljs$lang$maxFixedArity = 0;
G__14880.cljs$lang$applyTo = (function (arglist__14882){
var args = cljs.core.seq(arglist__14882);
return G__14880__delegate(args);
});
G__14880.cljs$core$IFn$_invoke$arity$variadic = G__14880__delegate;
return G__14880;
})()
:readnext.core.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(readnext.core.draw))?(function() { 
var G__14883__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(readnext.core.draw,args);
};
var G__14883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14884__i = 0, G__14884__a = new Array(arguments.length -  0);
while (G__14884__i < G__14884__a.length) {G__14884__a[G__14884__i] = arguments[G__14884__i + 0]; ++G__14884__i;}
  args = new cljs.core.IndexedSeq(G__14884__a,0,null);
} 
return G__14883__delegate.call(this,args);};
G__14883.cljs$lang$maxFixedArity = 0;
G__14883.cljs$lang$applyTo = (function (arglist__14885){
var args = cljs.core.seq(arglist__14885);
return G__14883__delegate(args);
});
G__14883.cljs$core$IFn$_invoke$arity$variadic = G__14883__delegate;
return G__14883;
})()
:readnext.core.draw)], 0));
});
goog.exportSymbol('readnext.core.court', readnext.core.court);

if(cljs.core.truth_(cljs.core.some((function (p1__11830__11831__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__11830__11831__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,readnext.core.court,cljs.core.cst$kw$host_DASH_id,"court"], null));
}
