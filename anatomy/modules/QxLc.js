/**
 * id: QxLc
 * path: ./mask-decoder
 */

function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=10;function e(t,e){for(var i=0,n=0,r=0,o=0,u=0,f=0,l=0,h="",v=0,m=0,c=0,b=0,g=0,p=0,k=new DataView(t.buffer,0,e);i<e;){var d=s(t,i,e);switch(i=d.bufPos,d.value){case 1:i=(d=s(t,i,e)).bufPos;break;case 2:i=(d=a(k,i,e)).bufPos,n=d.value,i=(d=a(k,i,e)).bufPos,r=d.value,i=(d=a(k,i,e)).bufPos,o=d.value,i=(d=a(k,i,e)).bufPos,u=d.value,i=(d=a(k,i,e)).bufPos,f=d.value,i=(d=a(k,i,e)).bufPos,l=d.value;break;case 3:h+="z ";break;case 4:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,h+="M"+v.toString()+" "+m.toString()+" ";break;case 5:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,h+="m"+v.toString()+" "+m.toString()+" ";break;case 6:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,h+="L"+v.toString()+" "+m.toString()+" ";break;case 7:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,h+="l"+v.toString()+" "+m.toString()+" ";break;case 8:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,i=(d=s(t,i,e)).bufPos,c=d.value,i=(d=s(t,i,e)).bufPos,b=d.value,i=(d=s(t,i,e)).bufPos,g=d.value,i=(d=s(t,i,e)).bufPos,p=d.value,h+="C"+v.toString()+" "+m.toString()+" "+c.toString()+" "+b.toString()+" "+g.toString()+" "+p.toString()+" ";break;case 9:i=(d=s(t,i,e)).bufPos,v=d.value,i=(d=s(t,i,e)).bufPos,m=d.value,i=(d=s(t,i,e)).bufPos,c=d.value,i=(d=s(t,i,e)).bufPos,b=d.value,i=(d=s(t,i,e)).bufPos,g=d.value,i=(d=s(t,i,e)).bufPos,p=d.value,h+="c"+v.toString()+" "+m.toString()+" "+c.toString()+" "+b.toString()+" "+g.toString()+" "+p.toString()+" "}}return 0===h.length?"":'<?xml version="1.0" standalone="no"?>\n  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n      width="'+n+'px" height="'+r+'px" viewBox="0 0 '+n+" "+r+'"\n      preserveAspectRatio="xMidYMid meet">\n      <g transform="translate('+o+", "+u+") scale("+f+", "+l+')"\n      fill="#000000" stroke="none" shape-rendering="optimizeSpeed">\n      <path d="'+h+'"></path>\n      </g>\n  </svg>'}function s(e,s,a){for(var n=0,r=0;s<a&&n<t;){var o=e[s],u=127&o;if(r+=u<<=7*n,n++,s++,0==(128&o))return{bufPos:s,value:i(r)}}return{bufPos:-1,value:-1}}function i(t){return t>>1^1+~(1&t)}function a(t,e,s){return e+4>s?{bufPos:-1,value:-1}:{bufPos:e+4,value:t.getFloat32(e)}}var n=function(){function t(){this.currentTime=0,this.currentMask="",this.hasVideoInfo=!1,this.videoInfo={direction:"",padding:0},this._masks=[]}return t.prototype.clear=function(){this._masks.splice(0,this._masks.length)},t.prototype.input=function(t,s){var i=e(s,s.length);""!==i&&this._addMask({timestamp:t,mask:i})},t.prototype.output=function(t){if(0===this._masks.length)return null;for(var e=0,s=t-this._masks[0].timestamp,i=Math.abs(s),a=1;a<this._masks.length;++a){var n=Math.abs(t-this._masks[a].timestamp),r=Math.abs(n);if(!(r<=i))break;e=a,s=n,i=r}var o=this._masks[e];return this._masks.splice(0,e),o},t.prototype._addMask=function(t){if(0===this._masks.length)this._masks.push(t);else{for(var e=this._masks.length-1;e>=0;--e){if(this._masks[e].timestamp<t.timestamp){e+=1;break}}this._masks.splice(e,0,t),e>0&&this._masks[e].timestamp<this._masks[e-1].timestamp&&this._masks.splice(0,e)}},t.equalsUuid=function(t,e){if(16!==t.length||16!==e.length)return!1;for(var s=0;s<16;++s)if(t[s]!==e[s])return!1;return!0},t.prototype.onUpdateMask=function(t,e){var s=t.currentTime;this.getVideoInfo(t);var i=this.output(s);if(null!=this.currentTime&&this.currentTime-s>1&&e.style.removeProperty("-webkit-mask-image"),null==i||null==i.mask||i.mask===this.currentMask)return this.currentMask="",void(this.currentTime=0);var a=i.mask;if(null===a||a===this.currentMask)return this.currentMask="",void(this.currentTime=0);if(i.timestamp-s<=1&&this.hasVideoInfo){var n="data:image/svg+xml;base64,"+btoa(a),r="linear-gradient(\n        to "+this.videoInfo.direction+",\n        rgb(0,0,0,1),\n        rgb(0,0,0,1) "+this.videoInfo.padding+"%,\n        rgb(0,0,0,0) "+this.videoInfo.padding+"%,\n        rgba(0,0,0,0) "+(100-this.videoInfo.padding)+"%,\n        rgba(0,0,0,1) "+(100-this.videoInfo.padding)+"%,\n        rgba(0,0,0,1)),\n        url("+n+")";e.style.cssText+="\n        -webkit-mask-image: "+r+";\n        -webkit-mask-size: contain;\n        mask-size: contain;\n        -webkit-mask-repeat: no-repeat;\n        mask-repeat: no-repeat;\n        -webkit-mask-position: center center;\n        mask-position: center center;\n      ",this.currentMask=a,this.currentTime=i.timestamp}},t.prototype.destroy=function(){this._masks=[]},t.prototype.getVideoInfo=function(t){var e,s,i=t.videoHeight,a=t.videoWidth,n=t.clientHeight,r=t.clientWidth,o=t.clientHeight,u=t.clientWidth;if(0===i||0===a)return!1;a/i>r/n?(s="bottom",e=Math.ceil((n-i*r/a)/(2*o)*100*100)/100):(s="right",e=Math.ceil((r-a*n/i)/(2*u)*100*100)/100),this.hasVideoInfo=!0,this.videoInfo={direction:s,padding:e}},t}();exports.default=n;
}