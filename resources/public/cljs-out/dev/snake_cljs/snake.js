// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('snake_cljs.snake');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('snake_cljs.canvas');
snake_cljs.snake.point_size = (10);
snake_cljs.snake.width = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(snake_cljs.canvas.get_window_size()) / snake_cljs.snake.point_size);
snake_cljs.snake.height = (cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(snake_cljs.canvas.get_window_size()) / snake_cljs.snake.point_size);
snake_cljs.snake.turn_millis = (75);
snake_cljs.snake.win_length = (20);
snake_cljs.snake.directions = new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),"ArrowDown",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"ArrowRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"ArrowLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
snake_cljs.snake.add_points = (function snake_cljs$snake$add_points(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10979 = arguments.length;
var i__4737__auto___10980 = (0);
while(true){
if((i__4737__auto___10980 < len__4736__auto___10979)){
args__4742__auto__.push((arguments[i__4737__auto___10980]));

var G__10981 = (i__4737__auto___10980 + (1));
i__4737__auto___10980 = G__10981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return snake_cljs.snake.add_points.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(snake_cljs.snake.add_points.cljs$core$IFn$_invoke$arity$variadic = (function (pts){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,pts));
}));

(snake_cljs.snake.add_points.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(snake_cljs.snake.add_points.cljs$lang$applyTo = (function (seq10978){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10978));
}));

snake_cljs.snake.point_to_screen_rect = (function snake_cljs$snake$point_to_screen_rect(pt){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10982_SHARP_){
return (snake_cljs.snake.point_size * p1__10982_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt.cljs$core$IFn$_invoke$arity$1 ? pt.cljs$core$IFn$_invoke$arity$1((0)) : pt.call(null,(0))),(pt.cljs$core$IFn$_invoke$arity$1 ? pt.cljs$core$IFn$_invoke$arity$1((1)) : pt.call(null,(1))),(1),(1)], null));
});
snake_cljs.snake.create_apple = (function snake_cljs$snake$create_apple(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(snake_cljs.snake.width),cljs.core.rand_int(snake_cljs.snake.height)], null),cljs.core.cst$kw$color,"#ff4140",cljs.core.cst$kw$type,cljs.core.cst$kw$apple], null);
});
snake_cljs.snake.create_snake = (function snake_cljs$snake$create_snake(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$body,(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),null,(1),null)),cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$snake,cljs.core.cst$kw$color,"#aaee50"], null);
});
snake_cljs.snake.move = (function snake_cljs$snake$move(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10988 = arguments.length;
var i__4737__auto___10989 = (0);
while(true){
if((i__4737__auto___10989 < len__4736__auto___10988)){
args__4742__auto__.push((arguments[i__4737__auto___10989]));

var G__10990 = (i__4737__auto___10989 + (1));
i__4737__auto___10989 = G__10990;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return snake_cljs.snake.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(snake_cljs.snake.move.cljs$core$IFn$_invoke$arity$variadic = (function (p__10985,grow){
var map__10986 = p__10985;
var map__10986__$1 = (((((!((map__10986 == null))))?(((((map__10986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10986):map__10986);
var snake = map__10986__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10986__$1,cljs.core.cst$kw$body);
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10986__$1,cljs.core.cst$kw$dir);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(snake,cljs.core.cst$kw$body,cljs.core.cons(snake_cljs.snake.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),dir], 0)),(cljs.core.truth_(grow)?body:cljs.core.butlast(body))));
}));

(snake_cljs.snake.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(snake_cljs.snake.move.cljs$lang$applyTo = (function (seq10983){
var G__10984 = cljs.core.first(seq10983);
var seq10983__$1 = cljs.core.next(seq10983);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10984,seq10983__$1);
}));

snake_cljs.snake.win_QMARK_ = (function snake_cljs$snake$win_QMARK_(p__10991){
var map__10992 = p__10991;
var map__10992__$1 = (((((!((map__10992 == null))))?(((((map__10992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10992):map__10992);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10992__$1,cljs.core.cst$kw$body);
return (cljs.core.count(body) >= snake_cljs.snake.win_length);
});
snake_cljs.snake.head_overlaps_body_QMARK_ = (function snake_cljs$snake$head_overlaps_body_QMARK_(p__10994){
var map__10995 = p__10994;
var map__10995__$1 = (((((!((map__10995 == null))))?(((((map__10995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10995):map__10995);
var vec__10996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10995__$1,cljs.core.cst$kw$body);
var seq__10997 = cljs.core.seq(vec__10996);
var first__10998 = cljs.core.first(seq__10997);
var seq__10997__$1 = cljs.core.next(seq__10997);
var head = first__10998;
var body = seq__10997__$1;
return cljs.core.contains_QMARK_(cljs.core.set(body),head);
});
snake_cljs.snake.lose_QMARK_ = snake_cljs.snake.head_overlaps_body_QMARK_;
snake_cljs.snake.eats_QMARK_ = (function snake_cljs$snake$eats_QMARK_(p__11000,p__11001){
var map__11002 = p__11000;
var map__11002__$1 = (((((!((map__11002 == null))))?(((((map__11002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11002):map__11002);
var vec__11003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11002__$1,cljs.core.cst$kw$body);
var snake_head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(0),null);
var map__11006 = p__11001;
var map__11006__$1 = (((((!((map__11006 == null))))?(((((map__11006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11006):map__11006);
var apple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11006__$1,cljs.core.cst$kw$location);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(snake_head,apple);
});
snake_cljs.snake.turn = (function snake_cljs$snake$turn(snake,dir){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(snake,cljs.core.cst$kw$dir,dir);
});
snake_cljs.snake.reset_game = (function snake_cljs$snake$reset_game(snake,apple){
cljs.core.reset_BANG_(snake,snake_cljs.snake.create_snake());

return cljs.core.reset_BANG_(apple,snake_cljs.snake.create_apple());
});
snake_cljs.snake.update_direction = (function snake_cljs$snake$update_direction(snake,dir){
var head = cljs.core.first(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake)));
var tail = cljs.core.first(cljs.core.rest(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake))));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(snake_cljs.snake.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head,dir], 0)),tail)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(snake,snake_cljs.snake.turn,dir);
} else {
return null;
}
});
snake_cljs.snake.update_positions = (function snake_cljs$snake$update_positions(snake,apple){
if(snake_cljs.snake.eats_QMARK_(cljs.core.deref(snake),cljs.core.deref(apple))){
cljs.core.reset_BANG_(apple,snake_cljs.snake.create_apple());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(snake,snake_cljs.snake.move,cljs.core.cst$kw$grow);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake,snake_cljs.snake.move);
}
});
snake_cljs.snake.fill_point = (function snake_cljs$snake$fill_point(ctx,pt,color){
var vec__11009 = snake_cljs.snake.point_to_screen_rect(pt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11009,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11009,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11009,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11009,(3),null);
(ctx.fillStyle = color);

return ctx.fillRect(x,y,width,height);
});
snake_cljs.snake.clear = (function snake_cljs$snake$clear(var_args){
var G__11013 = arguments.length;
switch (G__11013) {
case 1:
return snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$2(ctx,"#fff");
}));

(snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$2 = (function (ctx,color){
var map__11014 = snake_cljs.canvas.get_window_size();
var map__11014__$1 = (((((!((map__11014 == null))))?(((((map__11014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11014):map__11014);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11014__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11014__$1,cljs.core.cst$kw$height);
(ctx.fillStyle = color);

return ctx.fillRect((0),(0),width,height);
}));

(snake_cljs.snake.clear.cljs$lang$maxFixedArity = 2);

if((typeof snake_cljs !== 'undefined') && (typeof snake_cljs.snake !== 'undefined') && (typeof snake_cljs.snake.paint !== 'undefined')){
} else {
snake_cljs.snake.paint = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11017 = cljs.core.get_global_hierarchy;
return (fexpr__11017.cljs$core$IFn$_invoke$arity$0 ? fexpr__11017.cljs$core$IFn$_invoke$arity$0() : fexpr__11017.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("snake-cljs.snake","paint"),(function() { 
var G__11018__delegate = function (ctx,object,_){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(object);
};
var G__11018 = function (ctx,object,var_args){
var _ = null;
if (arguments.length > 2) {
var G__11019__i = 0, G__11019__a = new Array(arguments.length -  2);
while (G__11019__i < G__11019__a.length) {G__11019__a[G__11019__i] = arguments[G__11019__i + 2]; ++G__11019__i;}
  _ = new cljs.core.IndexedSeq(G__11019__a,0,null);
} 
return G__11018__delegate.call(this,ctx,object,_);};
G__11018.cljs$lang$maxFixedArity = 2;
G__11018.cljs$lang$applyTo = (function (arglist__11020){
var ctx = cljs.core.first(arglist__11020);
arglist__11020 = cljs.core.next(arglist__11020);
var object = cljs.core.first(arglist__11020);
var _ = cljs.core.rest(arglist__11020);
return G__11018__delegate(ctx,object,_);
});
G__11018.cljs$core$IFn$_invoke$arity$variadic = G__11018__delegate;
return G__11018;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
snake_cljs.snake.paint.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$apple,(function (ctx,p__11021){
var map__11022 = p__11021;
var map__11022__$1 = (((((!((map__11022 == null))))?(((((map__11022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11022):map__11022);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11022__$1,cljs.core.cst$kw$location);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11022__$1,cljs.core.cst$kw$color);
return snake_cljs.snake.fill_point(ctx,location,color);
}));
snake_cljs.snake.paint.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$snake,(function (ctx,p__11024){
var map__11025 = p__11024;
var map__11025__$1 = (((((!((map__11025 == null))))?(((((map__11025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11025):map__11025);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11025__$1,cljs.core.cst$kw$body);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11025__$1,cljs.core.cst$kw$color);
var seq__11027 = cljs.core.seq(body);
var chunk__11028 = null;
var count__11029 = (0);
var i__11030 = (0);
while(true){
if((i__11030 < count__11029)){
var point = chunk__11028.cljs$core$IIndexed$_nth$arity$2(null,i__11030);
snake_cljs.snake.fill_point(ctx,point,color);


var G__11031 = seq__11027;
var G__11032 = chunk__11028;
var G__11033 = count__11029;
var G__11034 = (i__11030 + (1));
seq__11027 = G__11031;
chunk__11028 = G__11032;
count__11029 = G__11033;
i__11030 = G__11034;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__11027);
if(temp__5720__auto__){
var seq__11027__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11027__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__11027__$1);
var G__11035 = cljs.core.chunk_rest(seq__11027__$1);
var G__11036 = c__4556__auto__;
var G__11037 = cljs.core.count(c__4556__auto__);
var G__11038 = (0);
seq__11027 = G__11035;
chunk__11028 = G__11036;
count__11029 = G__11037;
i__11030 = G__11038;
continue;
} else {
var point = cljs.core.first(seq__11027__$1);
snake_cljs.snake.fill_point(ctx,point,color);


var G__11039 = cljs.core.next(seq__11027__$1);
var G__11040 = null;
var G__11041 = (0);
var G__11042 = (0);
seq__11027 = G__11039;
chunk__11028 = G__11040;
count__11029 = G__11041;
i__11030 = G__11042;
continue;
}
} else {
return null;
}
}
break;
}
}));
snake_cljs.snake.game = (function snake_cljs$snake$game(){
var ctx = snake_cljs.canvas.canvas.getContext("2d");
var snake = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(snake_cljs.snake.create_snake());
var apple = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(snake_cljs.snake.create_apple());
snake_cljs.canvas.fullscreen(snake_cljs.canvas.canvas);

addEventListener("keydown",(function (e){
var dir = (function (){var G__11043 = e.code;
return (snake_cljs.snake.directions.cljs$core$IFn$_invoke$arity$1 ? snake_cljs.snake.directions.cljs$core$IFn$_invoke$arity$1(G__11043) : snake_cljs.snake.directions.call(null,G__11043));
})();
if(cljs.core.truth_(dir)){
return snake_cljs.snake.update_direction(snake,dir);
} else {
return null;
}
}));

return setInterval((function (){
if(cljs.core.truth_((function (){var G__11044 = cljs.core.deref(snake);
return (snake_cljs.snake.lose_QMARK_.cljs$core$IFn$_invoke$arity$1 ? snake_cljs.snake.lose_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11044) : snake_cljs.snake.lose_QMARK_.call(null,G__11044));
})())){
alert("You lose :(");

return snake_cljs.snake.reset_game(snake,apple);
} else {
if(snake_cljs.snake.win_QMARK_(cljs.core.deref(snake))){
alert("You win! :)");

return snake_cljs.snake.reset_game(snake,apple);
} else {
snake_cljs.snake.update_positions(snake,apple);

snake_cljs.snake.clear.cljs$core$IFn$_invoke$arity$1(ctx);

var G__11045_11049 = ctx;
var G__11046_11050 = cljs.core.deref(snake);
(snake_cljs.snake.paint.cljs$core$IFn$_invoke$arity$2 ? snake_cljs.snake.paint.cljs$core$IFn$_invoke$arity$2(G__11045_11049,G__11046_11050) : snake_cljs.snake.paint.call(null,G__11045_11049,G__11046_11050));

var G__11047 = ctx;
var G__11048 = cljs.core.deref(apple);
return (snake_cljs.snake.paint.cljs$core$IFn$_invoke$arity$2 ? snake_cljs.snake.paint.cljs$core$IFn$_invoke$arity$2(G__11047,G__11048) : snake_cljs.snake.paint.call(null,G__11047,G__11048));
}
}
}),snake_cljs.snake.turn_millis);
});
