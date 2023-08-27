/**
 * id: Rvqf
 * path: ./haptic
 */

function(require,module,exports) {
"use strict";var t=this&&this.__classPrivateFieldSet||function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},e=this&&this.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebHaptic=void 0;var n=!1,i=function t(){n=!0,window.removeEventListener("touchstart",t),window.removeEventListener("click",t)};window.addEventListener("touchstart",i),window.addEventListener("click",i);var a=function(){function i(k){var b=this;void 0===k&&(k=!0),a.set(this,!1),o.set(this,0),s.set(this,0),r.set(this,!1),c.set(this,!0),d.set(this,[]),l.set(this,void 0),p.set(this,void 0),u.set(this,1e3),w.set(this,-1),this.enableControllerHaptic=function(){t(b,c,!0)},this.disableControllerHaptic=function(){t(b,c,!1)},this.dispose=function(){b.setState(0,0),e(b,r)&&(window.removeEventListener("gamepadconnected",e(b,l)),window.removeEventListener("gamepaddisconnected",e(b,p)))},this.setState=function(n,i){clearTimeout(e(b,w)),e(b,v).call(b,n,i),e(b,h).call(b,n,i),(n>0||i>0)&&t(b,w,window.setTimeout(function(){t(b,w,-1),b.setState(0,0)},e(b,u)))},v.set(this,function(r,c){if(i.IsSupportWebHaptic()){var d=Math.max(r,.5*c);if(d!==e(b,o)){if(t(b,o,d),t(b,s,d/65535),!n)return;d>0?e(b,a)||(t(b,a,!0),e(b,m).call(b,b)):(t(b,a,!1),window.navigator.vibrate(0))}}}),h.set(this,function(t,n){var i,a;if(e(b,r))for(var o=t/65535,s=n/65535,c=0,l=Object.entries(e(b,d));c<l.length;c++){var p=l[c],u=(p[0],p[1]);null!=u&&(null===(a=null===(i=u)||void 0===i?void 0:i.vibrationActuator)||void 0===a||a.playEffect("dual-rumble",{duration:1e3,strongMagnitude:o,weakMagnitude:s}))}}),this.getMotorPercent=function(){return e(b,s)},f.set(this,function(){t(b,d,navigator.getGamepads())}),m.set(this,function(t){n&&e(t,o)>0&&e(t,a)&&(e(t,s)<.075?e(t,W).call(t,t,e(t,s)):e(b,s)<.88?e(t,M).call(t,t,e(t,s)):e(t,g).call(t,t,e(t,s)))}),g.set(this,function(t,n){var i=100*n;window.navigator.vibrate(i),setTimeout(function(){e(t,m).call(t,t)},i)}),M.set(this,function(t,n){var i=50*n;window.navigator.vibrate(i),setTimeout(function(){e(t,m).call(t,t)},i)}),W.set(this,function(t,n){var i=100-n/.025*100;window.navigator.vibrate(2),setTimeout(function(){e(t,m).call(t,t)},i)}),t(this,c,k),e(this,c)&&t(this,r,i.IsSupportControllerHaptic()),t(this,l,function(t){console.log("A gamepad was connected:"+t.gamepad.id),e(b,f).call(b)}),t(this,p,function(t){console.log("A gamepad was disconnected:"+t.gamepad.id),e(b,f).call(b)}),e(this,r)&&(window.addEventListener("gamepadconnected",e(this,l)),window.addEventListener("gamepaddisconnected",e(this,p)),e(this,f).call(this))}var a,o,s,r,c,d,l,p,u,w,v,h,f,m,g,M,W;return a=new WeakMap,o=new WeakMap,s=new WeakMap,r=new WeakMap,c=new WeakMap,d=new WeakMap,l=new WeakMap,p=new WeakMap,u=new WeakMap,w=new WeakMap,v=new WeakMap,h=new WeakMap,f=new WeakMap,m=new WeakMap,g=new WeakMap,M=new WeakMap,W=new WeakMap,i.IsSupportControllerHaptic=function(){var t,e;return!(null==window.Gamepad||null==window.GamepadHapticActuator||null===(e=null===(t=window.GamepadHapticActuator)||void 0===t?void 0:t.prototype)||void 0===e||!e.hasOwnProperty("playEffect"))},i.IsSupportWebHaptic=function(){return null!=window.navigator.vibrate},i.IsSupport=function(){return i.IsSupportControllerHaptic()||i.IsSupportWebHaptic()},i}();exports.WebHaptic=a;
}