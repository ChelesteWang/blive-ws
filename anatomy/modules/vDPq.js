/**
 * id: vDPq
 * path: ./ui-components/end-recommend-panel
 */

function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))(function(o,r){function a(e){try{s(i.next(e))}catch(n){r(n)}}function l(e){try{s(i.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(a,l)}s((i=i.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(e,a)}catch(l){r=[6,l],i=0}finally{t=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},i=this&&this.__spreadArray||function(e,n){for(var t=0,i=n.length,o=e.length;t<i;t++,o++)e[o]=n[t];return e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.endRecommendPanel=void 0;var o,r,a=require("@bilibili-live/web-player-common");function l(e,n,t,i,o){n.classList.add("web-player-ending-panel"),n.style.cssText="\n    z-index: 3;\n    color: #fff;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #000;\n  ",n.appendChild(s(t,i,o))}function s(e,n,t){var i=document.createElement("div"),a=document.createElement("div");return i.style.cssText="\n    width: 606px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -moz-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    -o-transform: translate3d(-50%, -50%, 0);\n    transform: translate3d(-50%, -50%, 0);\n  ",e.style.cssText="\n    font-size: 28px;\n    color: #aaa;\n    text-align: center;\n    line-height: 50px;\n    height: 50px;\n    margin-bottom: 20px;\n  ",i.appendChild(e),n.classList.add("web-player-ending-panel-recommendList"),t.forEach(function(e,t){t<6&&r("info",{type:o.recommendListShow,data:e}),n.appendChild(d(e))}),n.style.cssText="\n    display: "+(t.length>0?"block":"none")+";\n    height: 236px;\n    overflow: hidden;\n  ",a.innerText="闲置中",a.style.cssText="display: none;",i.appendChild(n),i.appendChild(a),i}function d(e){var n,t,i=document.createElement("a"),l=document.createElement("div"),s=document.createElement("div");l.style.cssText="\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  ",s.style.cssText="\n    width: 100%;\n    position: absolute;\n    height: 50px;\n    bottom: -20px;\n    z-index: 3;\n    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\n    color: #fffff;\n    -webkit-transition: bottom 0.3s ease-in-out;\n    -moz-transition: bottom 0.3s ease-in-out;\n    -ms-transition: bottom 0.3s ease-in-out;\n    -o-transition: bottom 0.3s ease-in-out;\n    transition: bottom 0.3s ease-in-out;\n  ";var d=document.createElement("div");d.style.cssText="\n    margin-top: 8px;\n    height: 16px;\n    position: relative;\n    line-height: 16px;\n    color: '#fff\n  ";var c=document.createElement("div");c.innerText=e.title,c.style.cssText="\n    padding: 0 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: #fff;\n  ";var p=document.createElement("div");p.style.cssText="\n    padding: 6px 8px;\n    color: #969696;\n    height: 16px;\n    position: relative;\n    line-height: 16px;\n  ";var u=document.createElement("div");u.style.cssText="\n    width: 60%;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    float: left;\n  ",u.innerText=e.uname;var h=document.createElement("span");h.style.cssText="\n    float: right;\n  ","online"in e&&(e.online>1e4?h.innerHTML=Math.floor(e.online/1e4).toString()+"万":h.innerText=e.online.toString()),!0===(null===(n=e.watched_show)||void 0===n?void 0:n.switch)&&null!=(null===(t=e.watched_show)||void 0===t?void 0:t.text_small)&&(h.innerText=e.watched_show.text_small),p.appendChild(u),p.appendChild(h),d.appendChild(c),s.appendChild(d),s.appendChild(p);var m=document.createElement("img");if(m.alt=e.title,m.src=e.cover+(a.isWebPSupported()?"@384w_240h.webp":"@384w_240h.jpg"),m.style.cssText="\n    width: 100%;\n    height: 100%;\n    border: none;\n  ",l.appendChild(m),i.appendChild(l),i.appendChild(s),i.style.cssText="\n    width: 192px;\n    height: 108px;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    float: left;\n    overflow: hidden;\n    display: inline-block;\n    position: relative;\n    margin: 5px;\n    text-decoration: none;\n    outline: none;\n    color: #444;\n    font-size: 12px;\n    cursor: pointer;\n  ",i.href="javascript:void(0);",i.addEventListener("mouseover",function(){s.style.bottom="0px"}),i.addEventListener("mouseout",function(){s.style.bottom="-20px"}),i.onclick=function(){var n="text"in e?"//www.bilibili.com/video/"+e.bvid:"//live.bilibili.com/"+e.roomid;n+="?live_from=75001",window.open(n),r("info",{type:o.recommendListClick,data:e}),r("redirect",{type:o.recommendListClick,data:n})},i.onmouseenter=function(){r("info",{type:o.recommendListMoveEnter,data:e})},"text"in e){var f=document.createElement("div");f.innerText=e.text,f.style.cssText="\n      background: #4fc1e9;\n      position: absolute;\n      top: 4px;\n      right: 5px;\n      height: 16px;\n      line-height: 16px;\n      width: 48px;\n      padding: 1px 4px;\n      color: #fff;\n      border-radius: 2px;\n    ",l.appendChild(f)}return i}function c(e,n,t,i,o){var s=t.roomId,d=t.rnd,c=t.showRecommend;void 0===o&&(o=""),r=i;var u=document.createElement("div"),h=document.createElement("div"),m=c;if(c){var f=a.loading(e);p(s,d).then(function(t){if(f(),m){var i=t.tips,r=void 0===i?"主播已关播":i,a=t.recommend,s=void 0===a?[]:a;h.innerText=r,""!==o&&(h.innerText=o),l(e,n,h,u,s)}else h.innerText="主播已关播",l(e,n,h,u,[])}).catch(function(e){a.logger.error(e),f()})}else h.innerText="主播已关播",l(e,n,h,u,[]);return function(){m=!1,h.innerText="主播已关播",u.style.display="none"}}function p(l,s){return n(this,void 0,Promise,function(){var n,d;return t(this,function(t){switch(t.label){case 0:return[4,a.ajax("/xlive/web-room/v1/index/getOffLiveList?room_id="+l+"&count=8&rnd="+s.toFixed(0))];case 1:return null!=(n=t.sent())&&Array.isArray(n.recommend)||r("info",{type:o.recommendListNull}),d=n.record_list.map(function(n){return e(e({},n),{roomid:n.rid,text:"主播推荐"})}),n.recommend=i(i([],d),n.recommend).sort(function(e,n){return e.global_order-n.global_order}),[2,n]}})})}!function(e){e.recommendListNull="nolive",e.recommendListClick="click",e.recommendListMoveEnter="move",e.recommendListShow="show"}(o||(o={})),exports.endRecommendPanel=c;
}