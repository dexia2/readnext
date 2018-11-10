// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('readnext.motion');
goog.require('cljs.core');
goog.require('cljs.core.constants');
readnext.motion.in_ellipse = (function readnext$motion$in_ellipse(p__13990,p__13991,radius){
var map__13992 = p__13990;
var map__13992__$1 = ((((!((map__13992 == null)))?((((map__13992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13992):map__13992);
var ellipse_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13992__$1,cljs.core.cst$kw$x);
var ellipse_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13992__$1,cljs.core.cst$kw$y);
var map__13993 = p__13991;
var map__13993__$1 = ((((!((map__13993 == null)))?((((map__13993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13993):map__13993);
var cur_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$x);
var cur_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$y);
return ((((ellipse_x - radius) <= cur_x)) && ((cur_x <= (ellipse_x + radius)))) && ((((ellipse_y - radius) <= cur_y)) && ((cur_y <= (ellipse_y + radius))));
});
readnext.motion.move = (function readnext$motion$move(p__13996,p__13997,radius,speed){
var map__13998 = p__13996;
var map__13998__$1 = ((((!((map__13998 == null)))?((((map__13998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13998):map__13998);
var ellipse_pos = map__13998__$1;
var ellipse_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$x);
var ellipse_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$y);
var map__13999 = p__13997;
var map__13999__$1 = ((((!((map__13999 == null)))?((((map__13999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13999):map__13999);
var current_pos = map__13999__$1;
var cur_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,cljs.core.cst$kw$x);
var cur_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,cljs.core.cst$kw$y);
if(cljs.core.truth_(readnext.motion.in_ellipse(ellipse_pos,current_pos,radius))){
return current_pos;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cur_x + ((ellipse_x - cur_x) / speed)),cljs.core.cst$kw$y,(cur_y + ((ellipse_y - cur_y) / speed))], null);
}
});
