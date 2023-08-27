/**
 * id: rPeE
 * path: ./vibrate/vibrate_task
 */

function(require,module,exports) {
"use strict";var t,e,i,a,n,s,r,o,c,p=this&&this.__classPrivateFieldSet||function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},h=this&&this.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.VibrateTask=void 0;var u=require("@bilibili-live/web-player-common"),l=require("./haptic"),m=!0,f=function(){function f(f,d){var b=this;this.dmBiz=d,t.set(this,[]),e.set(this,new l.WebHaptic),i.set(this,void 0),a.set(this,0),n.set(this,null),s.set(this,-1),r.set(this,{shiftLimit:2,curLocation:0,speed:.4,direction:"top"}),this.clear=function(){h(b,t).splice(0,h(b,t).length)},this.input=function(t,e){var i=u.uint8ArrayToString(e),a=JSON.parse(i);b.addVibrateData({timestamp:t,vibrate:a})},this.output=function(e){if(0!==h(b,t).length){for(var i=0,a=e-h(b,t)[0].timestamp,n=Math.abs(a),s=1;s<h(b,t).length;++s){var r=Math.abs(e-h(b,t)[s].timestamp),o=Math.abs(r);if(!(o<=n))break;i=s,a=r,n=o}var c=h(b,t)[i];return h(b,t).splice(0,i),c}},this.addVibrateData=function(e){if(0===h(b,t).length)h(b,t).push(e);else{for(var i=h(b,t).length-1;i>=0;--i){if(h(b,t)[i].timestamp<e.timestamp){i+=1;break}}h(b,t).splice(i,0,e)}},this.onUpdateVibrate=function(){var t=h(b,i).currentTime,e=b.output(t);if(null!=h(b,a)&&t-h(b,a)>1&&m&&b.webXInputSetState(0,0),null!=e&&null!=e.vibrate&&e.vibrate!==h(b,n)){var s=e.timestamp-t;if(Math.abs(s)<=1){if(m){var r=Math.max(0,s);setTimeout(function(){b.webXInputSetState(e.vibrate.l,e.vibrate.r)},1e3*r)}p(b,n,e.vibrate),p(b,a,e.timestamp)}}},this.onFrameCallback=function(t){t>performance.now()-5&&b.onUpdateVibrate(),p(b,s,window.requestAnimationFrame(b.onFrameCallback))},this.destroy=function(){cancelAnimationFrame(h(b,s)),p(b,t,[]),b.webXInputSetState(0,0),h(b,e).dispose()},o.set(this,function(t){0===t?(h(b,r).shiftLimit=0,h(b,r).curLocation=0):t<.075?h(b,r).shiftLimit=2:t<=.88?h(b,r).shiftLimit=5:t>.88&&(h(b,r).shiftLimit=7),h(b,r).speed=4*t,h(b,c).call(b)}),c.set(this,function(){"top"===h(b,r).direction?(h(b,r).curLocation+=h(b,r).speed,h(b,r).curLocation+=h(b,r).speed):(h(b,r).curLocation-=h(b,r).speed,h(b,r).curLocation-=h(b,r).speed),Math.abs(h(b,r).curLocation)>h(b,r).shiftLimit&&("top"===h(b,r).direction?(h(b,r).direction="bottom",h(b,r).curLocation=h(b,r).shiftLimit):(h(b,r).direction="top",h(b,r).curLocation=h(b,r).shiftLimit)),null!=b.dmBiz&&b.dmBiz.offsetDM(h(b,r).curLocation)}),p(this,t,[]),p(this,i,f),this.onFrameCallback(0)}return f.prototype.webXInputSetState=function(t,i){h(this,e).setState(t,i),h(this,o).call(this,h(this,e).getMotorPercent())},f}();exports.VibrateTask=f,t=new WeakMap,e=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakMap,s=new WeakMap,r=new WeakMap,o=new WeakMap,c=new WeakMap;
}