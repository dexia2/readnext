// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9901){
var map__9902 = p__9901;
var map__9902__$1 = ((((!((map__9902 == null)))?((((map__9902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9902):map__9902);
var m = map__9902__$1;
var n = cljs.core.get.call(null,map__9902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9904_9926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9905_9927 = null;
var count__9906_9928 = (0);
var i__9907_9929 = (0);
while(true){
if((i__9907_9929 < count__9906_9928)){
var f_9930 = cljs.core._nth.call(null,chunk__9905_9927,i__9907_9929);
cljs.core.println.call(null,"  ",f_9930);

var G__9931 = seq__9904_9926;
var G__9932 = chunk__9905_9927;
var G__9933 = count__9906_9928;
var G__9934 = (i__9907_9929 + (1));
seq__9904_9926 = G__9931;
chunk__9905_9927 = G__9932;
count__9906_9928 = G__9933;
i__9907_9929 = G__9934;
continue;
} else {
var temp__4657__auto___9935 = cljs.core.seq.call(null,seq__9904_9926);
if(temp__4657__auto___9935){
var seq__9904_9936__$1 = temp__4657__auto___9935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9904_9936__$1)){
var c__7460__auto___9937 = cljs.core.chunk_first.call(null,seq__9904_9936__$1);
var G__9938 = cljs.core.chunk_rest.call(null,seq__9904_9936__$1);
var G__9939 = c__7460__auto___9937;
var G__9940 = cljs.core.count.call(null,c__7460__auto___9937);
var G__9941 = (0);
seq__9904_9926 = G__9938;
chunk__9905_9927 = G__9939;
count__9906_9928 = G__9940;
i__9907_9929 = G__9941;
continue;
} else {
var f_9942 = cljs.core.first.call(null,seq__9904_9936__$1);
cljs.core.println.call(null,"  ",f_9942);

var G__9943 = cljs.core.next.call(null,seq__9904_9936__$1);
var G__9944 = null;
var G__9945 = (0);
var G__9946 = (0);
seq__9904_9926 = G__9943;
chunk__9905_9927 = G__9944;
count__9906_9928 = G__9945;
i__9907_9929 = G__9946;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9947 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6640__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9947);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9947)))?cljs.core.second.call(null,arglists_9947):arglists_9947));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9908_9948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9909_9949 = null;
var count__9910_9950 = (0);
var i__9911_9951 = (0);
while(true){
if((i__9911_9951 < count__9910_9950)){
var vec__9912_9952 = cljs.core._nth.call(null,chunk__9909_9949,i__9911_9951);
var name_9953 = cljs.core.nth.call(null,vec__9912_9952,(0),null);
var map__9915_9954 = cljs.core.nth.call(null,vec__9912_9952,(1),null);
var map__9915_9955__$1 = ((((!((map__9915_9954 == null)))?((((map__9915_9954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9915_9954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9915_9954):map__9915_9954);
var doc_9956 = cljs.core.get.call(null,map__9915_9955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9957 = cljs.core.get.call(null,map__9915_9955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9953);

cljs.core.println.call(null," ",arglists_9957);

if(cljs.core.truth_(doc_9956)){
cljs.core.println.call(null," ",doc_9956);
} else {
}

var G__9958 = seq__9908_9948;
var G__9959 = chunk__9909_9949;
var G__9960 = count__9910_9950;
var G__9961 = (i__9911_9951 + (1));
seq__9908_9948 = G__9958;
chunk__9909_9949 = G__9959;
count__9910_9950 = G__9960;
i__9911_9951 = G__9961;
continue;
} else {
var temp__4657__auto___9962 = cljs.core.seq.call(null,seq__9908_9948);
if(temp__4657__auto___9962){
var seq__9908_9963__$1 = temp__4657__auto___9962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9908_9963__$1)){
var c__7460__auto___9964 = cljs.core.chunk_first.call(null,seq__9908_9963__$1);
var G__9965 = cljs.core.chunk_rest.call(null,seq__9908_9963__$1);
var G__9966 = c__7460__auto___9964;
var G__9967 = cljs.core.count.call(null,c__7460__auto___9964);
var G__9968 = (0);
seq__9908_9948 = G__9965;
chunk__9909_9949 = G__9966;
count__9910_9950 = G__9967;
i__9911_9951 = G__9968;
continue;
} else {
var vec__9917_9969 = cljs.core.first.call(null,seq__9908_9963__$1);
var name_9970 = cljs.core.nth.call(null,vec__9917_9969,(0),null);
var map__9920_9971 = cljs.core.nth.call(null,vec__9917_9969,(1),null);
var map__9920_9972__$1 = ((((!((map__9920_9971 == null)))?((((map__9920_9971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9920_9971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9920_9971):map__9920_9971);
var doc_9973 = cljs.core.get.call(null,map__9920_9972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9974 = cljs.core.get.call(null,map__9920_9972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9970);

cljs.core.println.call(null," ",arglists_9974);

if(cljs.core.truth_(doc_9973)){
cljs.core.println.call(null," ",doc_9973);
} else {
}

var G__9975 = cljs.core.next.call(null,seq__9908_9963__$1);
var G__9976 = null;
var G__9977 = (0);
var G__9978 = (0);
seq__9908_9948 = G__9975;
chunk__9909_9949 = G__9976;
count__9910_9950 = G__9977;
i__9911_9951 = G__9978;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9922 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9923 = null;
var count__9924 = (0);
var i__9925 = (0);
while(true){
if((i__9925 < count__9924)){
var role = cljs.core._nth.call(null,chunk__9923,i__9925);
var temp__4657__auto___9979__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9979__$1)){
var spec_9980 = temp__4657__auto___9979__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_9980));
} else {
}

var G__9981 = seq__9922;
var G__9982 = chunk__9923;
var G__9983 = count__9924;
var G__9984 = (i__9925 + (1));
seq__9922 = G__9981;
chunk__9923 = G__9982;
count__9924 = G__9983;
i__9925 = G__9984;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9922);
if(temp__4657__auto____$1){
var seq__9922__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9922__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__9922__$1);
var G__9985 = cljs.core.chunk_rest.call(null,seq__9922__$1);
var G__9986 = c__7460__auto__;
var G__9987 = cljs.core.count.call(null,c__7460__auto__);
var G__9988 = (0);
seq__9922 = G__9985;
chunk__9923 = G__9986;
count__9924 = G__9987;
i__9925 = G__9988;
continue;
} else {
var role = cljs.core.first.call(null,seq__9922__$1);
var temp__4657__auto___9989__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9989__$2)){
var spec_9990 = temp__4657__auto___9989__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_9990));
} else {
}

var G__9991 = cljs.core.next.call(null,seq__9922__$1);
var G__9992 = null;
var G__9993 = (0);
var G__9994 = (0);
seq__9922 = G__9991;
chunk__9923 = G__9992;
count__9924 = G__9993;
i__9925 = G__9994;
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

//# sourceMappingURL=repl.js.map