// Compiled by ClojureScript 1.9.671 {}
goog.provide('readnext.motion');
goog.require('cljs.core');
readnext.motion.in_ellipse = (function readnext$motion$in_ellipse(p__10040,p__10041,radius){
var map__10042 = p__10040;
var map__10042__$1 = ((((!((map__10042 == null)))?((((map__10042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10042):map__10042);
var ellipse_x = cljs.core.get.call(null,map__10042__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ellipse_y = cljs.core.get.call(null,map__10042__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__10043 = p__10041;
var map__10043__$1 = ((((!((map__10043 == null)))?((((map__10043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10043):map__10043);
var cur_x = cljs.core.get.call(null,map__10043__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cur_y = cljs.core.get.call(null,map__10043__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((((ellipse_x - radius) <= cur_x)) && ((cur_x <= (ellipse_x + radius)))) && ((((ellipse_y - radius) <= cur_y)) && ((cur_y <= (ellipse_y + radius))));
});
readnext.motion.move = (function readnext$motion$move(p__10046,p__10047,radius,speed){
var map__10048 = p__10046;
var map__10048__$1 = ((((!((map__10048 == null)))?((((map__10048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10048):map__10048);
var ellipse_pos = map__10048__$1;
var ellipse_x = cljs.core.get.call(null,map__10048__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ellipse_y = cljs.core.get.call(null,map__10048__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__10049 = p__10047;
var map__10049__$1 = ((((!((map__10049 == null)))?((((map__10049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10049):map__10049);
var current_pos = map__10049__$1;
var cur_x = cljs.core.get.call(null,map__10049__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cur_y = cljs.core.get.call(null,map__10049__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.truth_(readnext.motion.in_ellipse.call(null,ellipse_pos,current_pos,radius))){
return current_pos;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cur_x + ((ellipse_x - cur_x) / speed)),new cljs.core.Keyword(null,"y","y",-1757859776),(cur_y + ((ellipse_y - cur_y) / speed))], null);
}
});

//# sourceMappingURL=motion.js.map