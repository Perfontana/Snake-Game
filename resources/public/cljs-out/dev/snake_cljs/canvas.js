// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('snake_cljs.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
snake_cljs.canvas.canvas = goog.dom.getElement("game");
snake_cljs.canvas.get_window_size = (function snake_cljs$canvas$get_window_size(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,window.innerWidth,cljs.core.cst$kw$height,window.innerHeight], null);
});
snake_cljs.canvas.set_canvas_size = (function snake_cljs$canvas$set_canvas_size(cnvs,p__10973){
var map__10974 = p__10973;
var map__10974__$1 = (((((!((map__10974 == null))))?(((((map__10974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10974):map__10974);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10974__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10974__$1,cljs.core.cst$kw$height);
(cnvs.width = width);

return (cnvs.height = height);
});
snake_cljs.canvas.fullscreen = (function snake_cljs$canvas$fullscreen(cnvs){
return snake_cljs.canvas.set_canvas_size(cnvs,snake_cljs.canvas.get_window_size());
});
