// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13842){
var map__13843 = p__13842;
var map__13843__$1 = ((((!((map__13843 == null)))?((((map__13843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13843):map__13843);
var m = map__13843__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13843__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13843__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__13845_13867 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__13846_13868 = null;
var count__13847_13869 = (0);
var i__13848_13870 = (0);
while(true){
if((i__13848_13870 < count__13847_13869)){
var f_13871 = chunk__13846_13868.cljs$core$IIndexed$_nth$arity$2(null,i__13848_13870);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13871], 0));

var G__13872 = seq__13845_13867;
var G__13873 = chunk__13846_13868;
var G__13874 = count__13847_13869;
var G__13875 = (i__13848_13870 + (1));
seq__13845_13867 = G__13872;
chunk__13846_13868 = G__13873;
count__13847_13869 = G__13874;
i__13848_13870 = G__13875;
continue;
} else {
var temp__4657__auto___13876 = cljs.core.seq(seq__13845_13867);
if(temp__4657__auto___13876){
var seq__13845_13877__$1 = temp__4657__auto___13876;
if(cljs.core.chunked_seq_QMARK_(seq__13845_13877__$1)){
var c__7460__auto___13878 = cljs.core.chunk_first(seq__13845_13877__$1);
var G__13879 = cljs.core.chunk_rest(seq__13845_13877__$1);
var G__13880 = c__7460__auto___13878;
var G__13881 = cljs.core.count(c__7460__auto___13878);
var G__13882 = (0);
seq__13845_13867 = G__13879;
chunk__13846_13868 = G__13880;
count__13847_13869 = G__13881;
i__13848_13870 = G__13882;
continue;
} else {
var f_13883 = cljs.core.first(seq__13845_13877__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13883], 0));

var G__13884 = cljs.core.next(seq__13845_13877__$1);
var G__13885 = null;
var G__13886 = (0);
var G__13887 = (0);
seq__13845_13867 = G__13884;
chunk__13846_13868 = G__13885;
count__13847_13869 = G__13886;
i__13848_13870 = G__13887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13888 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_13888], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_13888)))?cljs.core.second(arglists_13888):arglists_13888)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__13849_13889 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__13850_13890 = null;
var count__13851_13891 = (0);
var i__13852_13892 = (0);
while(true){
if((i__13852_13892 < count__13851_13891)){
var vec__13853_13893 = chunk__13850_13890.cljs$core$IIndexed$_nth$arity$2(null,i__13852_13892);
var name_13894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13853_13893,(0),null);
var map__13856_13895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13853_13893,(1),null);
var map__13856_13896__$1 = ((((!((map__13856_13895 == null)))?((((map__13856_13895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13856_13895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13856_13895):map__13856_13895);
var doc_13897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856_13896__$1,cljs.core.cst$kw$doc);
var arglists_13898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856_13896__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13894], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13898], 0));

if(cljs.core.truth_(doc_13897)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13897], 0));
} else {
}

var G__13899 = seq__13849_13889;
var G__13900 = chunk__13850_13890;
var G__13901 = count__13851_13891;
var G__13902 = (i__13852_13892 + (1));
seq__13849_13889 = G__13899;
chunk__13850_13890 = G__13900;
count__13851_13891 = G__13901;
i__13852_13892 = G__13902;
continue;
} else {
var temp__4657__auto___13903 = cljs.core.seq(seq__13849_13889);
if(temp__4657__auto___13903){
var seq__13849_13904__$1 = temp__4657__auto___13903;
if(cljs.core.chunked_seq_QMARK_(seq__13849_13904__$1)){
var c__7460__auto___13905 = cljs.core.chunk_first(seq__13849_13904__$1);
var G__13906 = cljs.core.chunk_rest(seq__13849_13904__$1);
var G__13907 = c__7460__auto___13905;
var G__13908 = cljs.core.count(c__7460__auto___13905);
var G__13909 = (0);
seq__13849_13889 = G__13906;
chunk__13850_13890 = G__13907;
count__13851_13891 = G__13908;
i__13852_13892 = G__13909;
continue;
} else {
var vec__13858_13910 = cljs.core.first(seq__13849_13904__$1);
var name_13911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858_13910,(0),null);
var map__13861_13912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858_13910,(1),null);
var map__13861_13913__$1 = ((((!((map__13861_13912 == null)))?((((map__13861_13912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13861_13912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13861_13912):map__13861_13912);
var doc_13914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861_13913__$1,cljs.core.cst$kw$doc);
var arglists_13915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861_13913__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13911], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13915], 0));

if(cljs.core.truth_(doc_13914)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13914], 0));
} else {
}

var G__13916 = cljs.core.next(seq__13849_13904__$1);
var G__13917 = null;
var G__13918 = (0);
var G__13919 = (0);
seq__13849_13889 = G__13916;
chunk__13850_13890 = G__13917;
count__13851_13891 = G__13918;
i__13852_13892 = G__13919;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__13863 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__13864 = null;
var count__13865 = (0);
var i__13866 = (0);
while(true){
if((i__13866 < count__13865)){
var role = chunk__13864.cljs$core$IIndexed$_nth$arity$2(null,i__13866);
var temp__4657__auto___13920__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13920__$1)){
var spec_13921 = temp__4657__auto___13920__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_13921)], 0));
} else {
}

var G__13922 = seq__13863;
var G__13923 = chunk__13864;
var G__13924 = count__13865;
var G__13925 = (i__13866 + (1));
seq__13863 = G__13922;
chunk__13864 = G__13923;
count__13865 = G__13924;
i__13866 = G__13925;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__13863);
if(temp__4657__auto____$1){
var seq__13863__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13863__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__13863__$1);
var G__13926 = cljs.core.chunk_rest(seq__13863__$1);
var G__13927 = c__7460__auto__;
var G__13928 = cljs.core.count(c__7460__auto__);
var G__13929 = (0);
seq__13863 = G__13926;
chunk__13864 = G__13927;
count__13865 = G__13928;
i__13866 = G__13929;
continue;
} else {
var role = cljs.core.first(seq__13863__$1);
var temp__4657__auto___13930__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13930__$2)){
var spec_13931 = temp__4657__auto___13930__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_13931)], 0));
} else {
}

var G__13932 = cljs.core.next(seq__13863__$1);
var G__13933 = null;
var G__13934 = (0);
var G__13935 = (0);
seq__13863 = G__13932;
chunk__13864 = G__13933;
count__13865 = G__13934;
i__13866 = G__13935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
