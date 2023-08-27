/**
 * id: lCVI
 * path: ./hevc-adapter
 */

function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{l(n.next(e))}catch(t){i(t)}}function a(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(u,a)}l((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadWASMDecoder=exports.isWASMSupportHEVC=exports.destroy=exports.once=exports.on=exports.isBwpSupported=void 0;var n=require("@bilibili-live/web-player-common"),o=r(require("@bilibili/wasmplayer-loader")),i=require("@bilibili/wasmplayer-loader");Object.defineProperty(exports,"isBwpSupported",{enumerable:!0,get:function(){return i.isBwpSupported}});var u=new n.EventBus;exports.on=u.on,exports.once=u.once,exports.destroy=u.destroy;var a=!1;function l(){return a}function s(){return e(this,void 0,Promise,function(){return t(this,function(e){switch(e.label){case 0:return[4,o.default.loadWasmPlayer().then(function(){a=!0})];case 1:return[2,e.sent()]}})})}exports.isWASMSupportHEVC=l,exports.loadWASMDecoder=s,n.wpd.SupportHEVC&&s().catch(function(e){n.logger.error(e)});
}