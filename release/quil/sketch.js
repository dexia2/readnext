// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__11840 = arguments.length;
switch (G__11840) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__11842 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__11843 = null;
var count__11844 = (0);
var i__11845 = (0);
while(true){
if((i__11845 < count__11844)){
var vec__11846 = chunk__11843.cljs$core$IIndexed$_nth$arity$2(null,i__11845);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
var temp__4657__auto___11854 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___11854)){
var handler_11855 = temp__4657__auto___11854;
(prc[cljs.core.name(processing_name)] = ((function (seq__11842,chunk__11843,count__11844,i__11845,handler_11855,temp__4657__auto___11854,vec__11846,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_11849 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_11855.cljs$core$IFn$_invoke$arity$0 ? handler_11855.cljs$core$IFn$_invoke$arity$0() : handler_11855.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11849;
}});})(seq__11842,chunk__11843,count__11844,i__11845,handler_11855,temp__4657__auto___11854,vec__11846,processing_name,quil_name))
);
} else {
}

var G__11856 = seq__11842;
var G__11857 = chunk__11843;
var G__11858 = count__11844;
var G__11859 = (i__11845 + (1));
seq__11842 = G__11856;
chunk__11843 = G__11857;
count__11844 = G__11858;
i__11845 = G__11859;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11842);
if(temp__4657__auto__){
var seq__11842__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11842__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__11842__$1);
var G__11860 = cljs.core.chunk_rest(seq__11842__$1);
var G__11861 = c__7460__auto__;
var G__11862 = cljs.core.count(c__7460__auto__);
var G__11863 = (0);
seq__11842 = G__11860;
chunk__11843 = G__11861;
count__11844 = G__11862;
i__11845 = G__11863;
continue;
} else {
var vec__11850 = cljs.core.first(seq__11842__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
var temp__4657__auto___11864__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___11864__$1)){
var handler_11865 = temp__4657__auto___11864__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__11842,chunk__11843,count__11844,i__11845,handler_11865,temp__4657__auto___11864__$1,vec__11850,processing_name,quil_name,seq__11842__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_11853 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_11865.cljs$core$IFn$_invoke$arity$0 ? handler_11865.cljs$core$IFn$_invoke$arity$0() : handler_11865.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11853;
}});})(seq__11842,chunk__11843,count__11844,i__11845,handler_11865,temp__4657__auto___11864__$1,vec__11850,processing_name,quil_name,seq__11842__$1,temp__4657__auto__))
);
} else {
}

var G__11866 = cljs.core.next(seq__11842__$1);
var G__11867 = null;
var G__11868 = (0);
var G__11869 = (0);
seq__11842 = G__11866;
chunk__11843 = G__11867;
count__11844 = G__11868;
i__11845 = G__11869;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__11872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__11871 = ((function (G__11872){
return (function (p1__11870_SHARP_){
return (p1__11870_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11870_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__11870_SHARP_.call(null,options));
});})(G__11872))
;
return fexpr__11871(G__11872);
})()], 0));
var sketch_size = (function (){var or__6640__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__11873_11877 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__11873_11877.cljs$core$IFn$_invoke$arity$0 ? fexpr__11873_11877.cljs$core$IFn$_invoke$arity$0() : fexpr__11873_11877.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__11874 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__11874.cljs$core$IFn$_invoke$arity$0 ? fexpr__11874.cljs$core$IFn$_invoke$arity$0() : fexpr__11874.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__11876 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__11875 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__11875.cljs$core$IFn$_invoke$arity$1 ? fexpr__11875.cljs$core$IFn$_invoke$arity$1(G__11876) : fexpr__11875.call(null,G__11876));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11880 = arguments.length;
var i__7766__auto___11881 = (0);
while(true){
if((i__7766__auto___11881 < len__7765__auto___11880)){
args__7772__auto__.push((arguments[i__7766__auto___11881]));

var G__11882 = (i__7766__auto___11881 + (1));
i__7766__auto___11881 = G__11882;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__11879 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__11879);
})();
var renderer = (function (){var or__6640__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq11878){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11878));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__11889 = quil.sketch.empty_body_QMARK_();
var seq__11883_11890 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__11884_11891 = null;
var count__11885_11892 = (0);
var i__11886_11893 = (0);
while(true){
if((i__11886_11893 < count__11885_11892)){
var sk_11894 = chunk__11884_11891.cljs$core$IIndexed$_nth$arity$2(null,i__11886_11893);
if(cljs.core.truth_(add_elem_QMARK__11889)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_11894));
} else {
}

var fexpr__11887_11895 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_11894);
(fexpr__11887_11895.cljs$core$IFn$_invoke$arity$0 ? fexpr__11887_11895.cljs$core$IFn$_invoke$arity$0() : fexpr__11887_11895.call(null));

var G__11896 = seq__11883_11890;
var G__11897 = chunk__11884_11891;
var G__11898 = count__11885_11892;
var G__11899 = (i__11886_11893 + (1));
seq__11883_11890 = G__11896;
chunk__11884_11891 = G__11897;
count__11885_11892 = G__11898;
i__11886_11893 = G__11899;
continue;
} else {
var temp__4657__auto___11900 = cljs.core.seq(seq__11883_11890);
if(temp__4657__auto___11900){
var seq__11883_11901__$1 = temp__4657__auto___11900;
if(cljs.core.chunked_seq_QMARK_(seq__11883_11901__$1)){
var c__7460__auto___11902 = cljs.core.chunk_first(seq__11883_11901__$1);
var G__11903 = cljs.core.chunk_rest(seq__11883_11901__$1);
var G__11904 = c__7460__auto___11902;
var G__11905 = cljs.core.count(c__7460__auto___11902);
var G__11906 = (0);
seq__11883_11890 = G__11903;
chunk__11884_11891 = G__11904;
count__11885_11892 = G__11905;
i__11886_11893 = G__11906;
continue;
} else {
var sk_11907 = cljs.core.first(seq__11883_11901__$1);
if(cljs.core.truth_(add_elem_QMARK__11889)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_11907));
} else {
}

var fexpr__11888_11908 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_11907);
(fexpr__11888_11908.cljs$core$IFn$_invoke$arity$0 ? fexpr__11888_11908.cljs$core$IFn$_invoke$arity$0() : fexpr__11888_11908.call(null));

var G__11909 = cljs.core.next(seq__11883_11901__$1);
var G__11910 = null;
var G__11911 = (0);
var G__11912 = (0);
seq__11883_11890 = G__11909;
chunk__11884_11891 = G__11910;
count__11885_11892 = G__11911;
i__11886_11893 = G__11912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
