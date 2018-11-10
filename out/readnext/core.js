// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('quil.core');
goog.require('readnext.motion');
goog.require('readnext.domain');
goog.require('readnext.util');
goog.require('readnext.game');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.core.enable_console_print_BANG_.call(null);
window.addEventListener("DOMContentLoaded",(function (){
return readnext.game.reset_game_BANG_.call(null);
}));
document.getElementById("reset").addEventListener("click",(function (){
readnext.game.reset_game_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,readnext.core.shuttle_pos,null);
}));
readnext.core.court_height = (300);
readnext.core.court_width = (300);
readnext.core.net_y = (readnext.core.court_height / (2));
readnext.core.target_radius = (15);
readnext.core.shuttle_radius = (15);
readnext.core.shuttle_speed = (8);
readnext.core.shuttle_pos = cljs.core.atom.call(null,null);
readnext.core.npc_targets = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"middle-left","middle-left",-452766155),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(70)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"back-left","back-left",1043766863),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"middle-right","middle-right",-1562674657),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(70)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"back-right","back-right",-1417102192),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"front-right","front-right",385073770),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(110)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"front-left","front-left",-1987538679),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(110)], null)]);
readnext.core.pc_targets = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"middle-right","middle-right",-1562674657),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(220)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"front-left","front-left",-1987538679),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(180)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"back-left","back-left",1043766863),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(260)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"front-right","front-right",385073770),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(180)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"back-right","back-right",-1417102192),new cljs.core.Keyword(null,"x","x",2099068185),(240),new cljs.core.Keyword(null,"y","y",-1757859776),(260)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"middle-left","middle-left",-452766155),new cljs.core.Keyword(null,"x","x",2099068185),(40),new cljs.core.Keyword(null,"y","y",-1757859776),(220)], null)]);
readnext.core.draw_court = (function readnext$core$draw_court(){
quil.core.stroke.call(null,(0));

quil.core.fill.call(null,(255));

quil.core.rect.call(null,(0),(0),(290),(290));

quil.core.line.call(null,(20),(0),(20),(290));

quil.core.line.call(null,(145),(0),(145),(290));

quil.core.line.call(null,(270),(0),(270),(290));

quil.core.line.call(null,(0),(50),(290),(50));

quil.core.line.call(null,(0),(145),(290),(145));

return quil.core.line.call(null,(0),(240),(290),(240));
});
readnext.core.find_target = (function readnext$core$find_target(direction,targets){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__10877){
var map__10878 = p__10877;
var map__10878__$1 = ((((!((map__10878 == null)))?((((map__10878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10878):map__10878);
var d = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return cljs.core._EQ_.call(null,d,direction);
}),cljs.core.seq.call(null,targets)));
});
readnext.core.touched_target = (function readnext$core$touched_target(p__10880,targets){
var map__10881 = p__10880;
var map__10881__$1 = ((((!((map__10881 == null)))?((((map__10881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10881):map__10881);
var mouse_x = cljs.core.get.call(null,map__10881__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var mouse_y = cljs.core.get.call(null,map__10881__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.filter.call(null,((function (map__10881,map__10881__$1,mouse_x,mouse_y){
return (function (target){
return readnext.motion.in_ellipse.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mouse_x,new cljs.core.Keyword(null,"y","y",-1757859776),mouse_y], null),readnext.core.target_radius);
});})(map__10881,map__10881__$1,mouse_x,mouse_y))
,targets);
});
readnext.core.draw_targets = (function readnext$core$draw_targets(targets){
var seq__10883 = cljs.core.seq.call(null,cljs.core.seq.call(null,targets));
var chunk__10884 = null;
var count__10885 = (0);
var i__10886 = (0);
while(true){
if((i__10886 < count__10885)){
var map__10887 = cljs.core._nth.call(null,chunk__10884,i__10886);
var map__10887__$1 = ((((!((map__10887 == null)))?((((map__10887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10887):map__10887);
var x = cljs.core.get.call(null,map__10887__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10887__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.ellipse.call(null,x,y,(readnext.core.target_radius * (2)),(readnext.core.target_radius * (2)));

var G__10891 = seq__10883;
var G__10892 = chunk__10884;
var G__10893 = count__10885;
var G__10894 = (i__10886 + (1));
seq__10883 = G__10891;
chunk__10884 = G__10892;
count__10885 = G__10893;
i__10886 = G__10894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10883);
if(temp__4657__auto__){
var seq__10883__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10883__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__10883__$1);
var G__10895 = cljs.core.chunk_rest.call(null,seq__10883__$1);
var G__10896 = c__7460__auto__;
var G__10897 = cljs.core.count.call(null,c__7460__auto__);
var G__10898 = (0);
seq__10883 = G__10895;
chunk__10884 = G__10896;
count__10885 = G__10897;
i__10886 = G__10898;
continue;
} else {
var map__10889 = cljs.core.first.call(null,seq__10883__$1);
var map__10889__$1 = ((((!((map__10889 == null)))?((((map__10889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10889):map__10889);
var x = cljs.core.get.call(null,map__10889__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10889__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.ellipse.call(null,x,y,(readnext.core.target_radius * (2)),(readnext.core.target_radius * (2)));

var G__10899 = cljs.core.next.call(null,seq__10883__$1);
var G__10900 = null;
var G__10901 = (0);
var G__10902 = (0);
seq__10883 = G__10899;
chunk__10884 = G__10900;
count__10885 = G__10901;
i__10886 = G__10902;
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
var stroker = readnext.domain.next_hitter.call(null,readnext.game.get_context.call(null).call(null,new cljs.core.Keyword(null,"rallies","rallies",1721171861)));
var targets = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),stroker))?readnext.core.npc_targets:readnext.core.pc_targets);
var target = readnext.core.touched_target.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null)], null),targets);
quil.core.stroke.call(null,(0));

quil.core.fill.call(null,(255));

readnext.core.draw_targets.call(null,targets);

if(cljs.core.empty_QMARK_.call(null,target)){
return null;
} else {
quil.core.fill.call(null,(240),(179),(37));

quil.core.stroke.call(null,(240),(179),(37));

readnext.core.draw_targets.call(null,target);

return readnext.game.play_BANG_.call(null,cljs.core.first.call(null,target).call(null,new cljs.core.Keyword(null,"direction","direction",-633359395)));
}
});
readnext.core.draw_shuttle = (function readnext$core$draw_shuttle(){
if(cljs.core.truth_(cljs.core.deref.call(null,readnext.core.shuttle_pos))){
quil.core.stroke.call(null,(240),(179),(37));

quil.core.fill.call(null,(240),(179),(37));

return quil.core.ellipse.call(null,cljs.core.deref.call(null,readnext.core.shuttle_pos).call(null,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.deref.call(null,readnext.core.shuttle_pos).call(null,new cljs.core.Keyword(null,"y","y",-1757859776)),readnext.core.shuttle_radius,readnext.core.shuttle_radius);
} else {
return null;
}
});
readnext.core.stroking_from = (function readnext$core$stroking_from(){
var map__10903 = readnext.game.get_context.call(null);
var map__10903__$1 = ((((!((map__10903 == null)))?((((map__10903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10903):map__10903);
var rallies = cljs.core.get.call(null,map__10903__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var stroker = readnext.domain.next_hitter.call(null,rallies);
var map__10904 = readnext.domain.latest_stroke.call(null,rallies);
var map__10904__$1 = ((((!((map__10904 == null)))?((((map__10904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10904):map__10904);
var from = cljs.core.get.call(null,map__10904__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
var from_pos = readnext.core.find_target.call(null,from,((cljs.core._EQ_.call(null,stroker,new cljs.core.Keyword(null,"pc","pc",512913453)))?readnext.core.npc_targets:readnext.core.pc_targets));
return from_pos;
});
readnext.core.to_net = (function readnext$core$to_net(to_pos){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),to_pos.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),readnext.core.net_y], null);
});
readnext.core.stroking_to = (function readnext$core$stroking_to(rally_end_QMARK_){
var map__10907 = readnext.game.get_context.call(null);
var map__10907__$1 = ((((!((map__10907 == null)))?((((map__10907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10907):map__10907);
var rallies = cljs.core.get.call(null,map__10907__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var stroker = readnext.domain.next_hitter.call(null,rallies);
var map__10908 = readnext.domain.latest_stroke.call(null,rallies);
var map__10908__$1 = ((((!((map__10908 == null)))?((((map__10908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10908):map__10908);
var to = cljs.core.get.call(null,map__10908__$1,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
var to_pos = readnext.core.find_target.call(null,to,((cljs.core._EQ_.call(null,stroker,new cljs.core.Keyword(null,"pc","pc",512913453)))?readnext.core.pc_targets:readnext.core.npc_targets));
if(cljs.core.truth_(rally_end_QMARK_)){
return readnext.core.to_net.call(null,to_pos);
} else {
return to_pos;
}
});
readnext.core.move_shuttle_BANG_ = (function readnext$core$move_shuttle_BANG_(rally_end_QMARK_){
var map__10911 = readnext.core.stroking_from.call(null);
var map__10911__$1 = ((((!((map__10911 == null)))?((((map__10911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10911):map__10911);
var x = cljs.core.get.call(null,map__10911__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10911__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var to_pos = readnext.core.stroking_to.call(null,rally_end_QMARK_);
if(cljs.core.truth_(cljs.core.deref.call(null,readnext.core.shuttle_pos))){
} else {
cljs.core.reset_BANG_.call(null,readnext.core.shuttle_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}

return cljs.core.reset_BANG_.call(null,readnext.core.shuttle_pos,readnext.motion.move.call(null,to_pos,cljs.core.deref.call(null,readnext.core.shuttle_pos),readnext.core.target_radius,readnext.core.shuttle_speed));
});
readnext.core.draw_service_BANG_ = (function readnext$core$draw_service_BANG_(){
readnext.game.record_service_BANG_.call(null);

var map__10913 = readnext.core.stroking_from.call(null);
var map__10913__$1 = ((((!((map__10913 == null)))?((((map__10913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10913):map__10913);
var x = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,readnext.core.shuttle_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
readnext.core.draw_shuttle_and_targets = (function readnext$core$draw_shuttle_and_targets(){
var rally_end_QMARK_ = readnext.domain.last_rally_end_QMARK_.call(null,readnext.game.get_context.call(null));
var stroker = readnext.domain.next_hitter.call(null,readnext.game.get_context.call(null).call(null,new cljs.core.Keyword(null,"rallies","rallies",1721171861)));
var to_pos = readnext.core.stroking_to.call(null,rally_end_QMARK_);
readnext.core.draw_shuttle.call(null);

if(cljs.core.truth_(readnext.domain.game_end_QMARK_.call(null,readnext.game.get_context.call(null)))){
return null;
} else {
if(cljs.core.truth_(readnext.motion.in_ellipse.call(null,to_pos,cljs.core.deref.call(null,readnext.core.shuttle_pos),readnext.core.target_radius))){
if(cljs.core.truth_(rally_end_QMARK_)){
return readnext.core.draw_service_BANG_.call(null);
} else {
if(cljs.core._EQ_.call(null,stroker,new cljs.core.Keyword(null,"npc","npc",2026900089))){
return readnext.core.draw_colored_targets.call(null);
} else {
return readnext.game.play_BANG_.call(null);
}
}
} else {
return readnext.core.move_shuttle_BANG_.call(null,rally_end_QMARK_);

}
}
});
readnext.core.draw_context = (function readnext$core$draw_context(){
var map__10915 = readnext.game.get_context.call(null);
var map__10915__$1 = ((((!((map__10915 == null)))?((((map__10915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10915):map__10915);
var rallies = cljs.core.get.call(null,map__10915__$1,new cljs.core.Keyword(null,"rallies","rallies",1721171861));
var pc_points = readnext.domain.score_of.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),rallies);
var npc_points = readnext.domain.score_of.call(null,new cljs.core.Keyword(null,"npc","npc",2026900089),rallies);
var all_predictable = cljs.core.count.call(null,readnext.game.all_predictable_strokes.call(null,rallies));
var all_prediction_hits = cljs.core.count.call(null,readnext.game.prediction_hit_strokes.call(null,rallies));
var average_strokes_count = readnext.game.strokes_count_average.call(null,rallies);
var longest_rally = readnext.game.longest_strokes_count.call(null,rallies);
quil.core.fill.call(null,(0));

quil.core.text_size.call(null,(20));

quil.core.text.call(null,goog.string.format("PC %s - %s NPC",pc_points,npc_points),(20),(340));

quil.core.text.call(null,goog.string.format("\u4E88\u6E2C %s/%s",all_prediction_hits,all_predictable),(20),(370));

quil.core.text.call(null,goog.string.format("\u5E73\u5747\u30E9\u30EA\u30FC\u6570 %.1f",average_strokes_count),(20),(400));

return quil.core.text.call(null,goog.string.format("\u6700\u9577\u30E9\u30EA\u30FC\u6570 %s",longest_rally),(20),(430));
});
readnext.core.draw = (function readnext$core$draw(){
quil.core.background.call(null,(255));

readnext.core.draw_court.call(null);

readnext.core.draw_shuttle_and_targets.call(null);

return readnext.core.draw_context.call(null);
});
readnext.core.setup = (function readnext$core$setup(){
return quil.core.frame_rate.call(null,(5));
});
readnext.core.court = (function readnext$core$court(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"court",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(470)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,readnext.core.setup))?(function() { 
var G__10917__delegate = function (args){
return cljs.core.apply.call(null,readnext.core.setup,args);
};
var G__10917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10918__i = 0, G__10918__a = new Array(arguments.length -  0);
while (G__10918__i < G__10918__a.length) {G__10918__a[G__10918__i] = arguments[G__10918__i + 0]; ++G__10918__i;}
  args = new cljs.core.IndexedSeq(G__10918__a,0,null);
} 
return G__10917__delegate.call(this,args);};
G__10917.cljs$lang$maxFixedArity = 0;
G__10917.cljs$lang$applyTo = (function (arglist__10919){
var args = cljs.core.seq(arglist__10919);
return G__10917__delegate(args);
});
G__10917.cljs$core$IFn$_invoke$arity$variadic = G__10917__delegate;
return G__10917;
})()
:readnext.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,readnext.core.draw))?(function() { 
var G__10920__delegate = function (args){
return cljs.core.apply.call(null,readnext.core.draw,args);
};
var G__10920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10921__i = 0, G__10921__a = new Array(arguments.length -  0);
while (G__10921__i < G__10921__a.length) {G__10921__a[G__10921__i] = arguments[G__10921__i + 0]; ++G__10921__i;}
  args = new cljs.core.IndexedSeq(G__10921__a,0,null);
} 
return G__10920__delegate.call(this,args);};
G__10920.cljs$lang$maxFixedArity = 0;
G__10920.cljs$lang$applyTo = (function (arglist__10922){
var args = cljs.core.seq(arglist__10922);
return G__10920__delegate(args);
});
G__10920.cljs$core$IFn$_invoke$arity$variadic = G__10920__delegate;
return G__10920;
})()
:readnext.core.draw));
});
goog.exportSymbol('readnext.core.court', readnext.core.court);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8365__8366__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8365__8366__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),readnext.core.court,new cljs.core.Keyword(null,"host-id","host-id",742376279),"court"], null));
}

//# sourceMappingURL=core.js.map