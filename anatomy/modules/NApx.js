/**
 * id: NApx
 * path: @bilibili-live/live-danmaku-engine-v2
 */

function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==typeof exports?exports.DanmakuBridge=n():e.DanmakuBridge=n()}(self,function(){return function(){"use strict";var t={};!function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}(t);var e=function(t,e,n){if(n||2===arguments.length)for(var o,a=0,r=e.length;a<r;a++)!o&&a in e||(o||(o=Array.prototype.slice.call(e,0,a)),o[a]=e[a]);return t.concat(o||Array.prototype.slice.call(e))},n="//uat-s1.hdslb.com/bfs/live-pkg/danmaku/danmaku-".concat("v1",".js"),o="//s1.hdslb.com/bfs/live-pkg/danmaku/danmaku-".concat("v1",".js"),a=function(){function t(t,e){this.cacheConfig=t,this.tasks=[],this.errorTimes=0,this.initDanmaku(e)}return Object.defineProperty(t.prototype,"config",{get:function(){var t;return(null===(t=this.Danmaku)||void 0===t?void 0:t.config)||this.cacheConfig},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"container",{get:function(){var t;return null===(t=this.Danmaku)||void 0===t?void 0:t.container},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"manager",{get:function(){var t;return null===(t=this.Danmaku)||void 0===t?void 0:t.manager},enumerable:!1,configurable:!0}),t.prototype.initDanmaku=function(t){if(!this.Danmaku){var e=new URL(window.location.href).searchParams.get("danmakuEnv"),a={dev:n,prod:o}[e]||t||o;this.loadDanmaku(a)}},t.prototype.asyncCallMethod=function(t){for(var n,o=this,a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return this.Danmaku?(n=this.Danmaku[t]).call.apply(n,e([this.Danmaku],a,!1)):new Promise(function(n){var r=setTimeout(function(){n(null)},15e3);o.tasks.push(function(){var i;clearTimeout(r),r=null,n((i=o.Danmaku[t]).call.apply(i,e([o.Danmaku],a,!1)))})})},t.prototype.callMethod=function(t){for(var n,o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(this.Danmaku)return(n=this.Danmaku[t]).call.apply(n,e([this.Danmaku],o,!1))},t.prototype.callTasks=function(){this.tasks.length>0&&(this.tasks.forEach(function(t){t&&t()}),this.tasks.length=0)},t.prototype.play=function(){this.asyncCallMethod("play")},t.prototype.add=function(t,e){this.callMethod("add",t,e)},t.prototype.searchAreaDanmaku=function(t,e){return this.asyncCallMethod("searchAreaDanmaku",t,e)},t.prototype.option=function(t,e){return this.asyncCallMethod("option",t,e)},t.prototype.visible=function(t){return this.asyncCallMethod("visible",t)},t.prototype.resize=function(){this.asyncCallMethod("resize")},t.prototype.clear=function(){this.asyncCallMethod("clear")},t.prototype.destroy=function(){this.asyncCallMethod("destroy")},t.prototype.loadDanmaku=function(t){var e=this,n=document.createElement("script");n.type="text/javascript",n.onload=function(){e.Danmaku=new window.LiveDanmakuEngine.default(e.config),e.callTasks()},n.onerror=function(){e.errorTimes>=2||(e.errorTimes++,console.error("[Danmaku Core Error]","Times: ".concat(e.errorTimes),"Url: ".concat(t)),e.loadDanmaku(t))},n.src=t,document.getElementsByTagName("body")[0].appendChild(n)},t}();return t.default=a,t}()});
}