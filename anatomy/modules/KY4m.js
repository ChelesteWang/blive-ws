/**
 * id: KY4m
 * path: ../common/utils
 */

function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,n,t){return new(n||(n=Promise))(function(o,i){function u(e){try{a(t.next(e))}catch(r){i(r)}}function c(e){try{a(t.throw(e))}catch(r){i(r)}}function a(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(u,c)}a((t=t.apply(e,r||[])).next())})},r=this&&this.__generator||function(e,r){var n,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,t=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(e,u)}catch(c){i=[6,c],t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.maxRetryChecker=exports.blockStream=exports.loadingOrCoverImg=exports.backoffById=exports.retry=void 0;var n=require("@bilibili-live/web-player-common"),t=require("@bilibili-live/web-player-video");function o(t,o){var i=this,u=-1;return function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];return e(i,void 0,void 0,function(){return r(this,function(i){switch(i.label){case 0:return[4,new Promise(function(i,a){(function t(i){return e(this,void 0,Promise,function(){var e,c,a;return r(this,function(r){switch(r.label){case 0:return-1!==u?[3,1]:(u+=1,[3,3]);case 1:return e=o[u],n.logger.error("retry times: "+u+", delay: "+e),u+=1,[4,n.sleep(e)];case 2:r.sent(),r.label=3;case 3:return r.trys.push([3,5,,9]),[4,i()];case 4:return c=r.sent(),u=-1,[2,c];case 5:return a=r.sent(),n.logger.error(a),u<o.length?[4,t(i)]:[3,7];case 6:return[2,r.sent()];case 7:throw n.logger.error("retry failed"),a;case 8:return[3,9];case 9:return[2]}})})})(function(){return t.apply(void 0,c)}).then(function(e){i(e)}).catch(function(e){a(e)})})];case 1:return[2,i.sent()]}})})}}function i(e,r){var t;return null==r||""===r?(t=n.loading(e),n.coverImg(null,e)):n.coverImg(r,e),function(){null==t||t()}}function u(e,r){null==e||e.destroy(!0);var n=null==e?void 0:e.getVideoEl();if(null!=n){n.addEventListener("play",function e(){n.removeEventListener("play",e),r()})}}exports.retry=o,exports.backoffById=function(){var t=[[0,0],[.5,2],[2,4],[4,6]].map(function(e){return e.map(function(e){return 1e3*e})}),o=new Map;return function(i,u){return e(void 0,void 0,void 0,function(){var e,c,a,l,s,f;return r(this,function(r){switch(r.label){case 0:if(u=u>4?4:u,null==(e=o.get(i))&&(e={count:0,removeTimer:0},o.set(i,e)),clearTimeout(e.removeTimer),(c=e.count)>=u)throw o.delete(i),new Error("backoff failed");return e.removeTimer=window.setTimeout(function(){o.delete(i)},2*t[t.length-1][1]),e.count+=1,a=t[c],l=a[0],s=a[1],f=Math.round(Math.random()*(s-l)+l),n.logger.warn("backoff delay: sleepTime: "+f+", count: "+e.count),[4,n.sleep(f)];case 1:return r.sent(),[2,e.count]}})})}}(),exports.loadingOrCoverImg=i,exports.blockStream=u,exports.maxRetryChecker=function(){var e=0,r=function(){e>0||(e=performance.now())};return function(n){return n.once(t.EventType.FirstFrame,function(){e=0}),n.once(t.EventType.Error,r),n.once(t.EventType.Ended,r),function(){return!(e>0&&performance.now()-e>6e4)}}}();
}