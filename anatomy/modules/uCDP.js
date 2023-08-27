/**
 * id: uCDP
 * path: @bilibili-live/web-player-playurl-parser
 */

function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},e=this&&this.__classPrivateFieldSet||function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},n=this&&this.__classPrivateFieldGet||function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@bilibili-live/web-player-common"),o=1800,i=function(){function i(b){var W=this;this.source=b,a.set(this,{report_interval_sec:30}),l.set(this,r.P2PType.NONE),c.set(this,void 0),u.set(this,"0"),s.set(this,[]),p.set(this,i.Support_HEVC_No_Err?r.CodecType.HEVC:r.CodecType.AVC),h.set(this,""),d.set(this,[]),f.set(this,void 0),y.set(this,null),v.set(this,0),T.set(this,0),P.set(this,performance.now()),_.set(this,o),C.set(this,new r.EventBus),m.set(this,""),this.on=n(this,C).on,this.once=n(this,C).once,w.set(this,n(this,C).emit),S.set(this,function(t){if(0!==n(W,T))return n(W,l);var e=null!=t?t:W.source.playurl.p2p_data.p2p_type;return null!=r.wpd.P2PType&&(e=r.wpd.P2PType),null==window.MediaSource&&(e=r.P2PType.NONE),e!==r.P2PType.HLS_BILI&&e!==r.P2PType.HLS_NOT_P2P||W.hasHLSPlayerSupportStream()||(e=r.P2PType.NONE),e in r.P2PType||(e=r.P2PType.NONE),e}),g.set(this,function(t){return navigator.userAgent.includes("PlayStation")?[r.FormatType.TS]:t===r.ProtocolType.HTTP_STREAM?[r.FormatType.FLV]:null!=window.MediaSource||r.ua.isIOS()?[r.FormatType.FMP4,r.FormatType.TS]:[r.FormatType.TS]}),E.set(this,function(t){for(var e,o,i=n(W,g).call(W,t),a=null,l=0,c=i;l<c.length;l++){var u=c[l];if(null!=(a=n(W,M).call(W,{protocol:t,format:u,codec:r.CodecType.AVC})))break}for(var s=null,p=0,h=i;p<h.length;p++){u=h[p];if(null!=(s=n(W,M).call(W,{protocol:t,format:u,codec:r.CodecType.HEVC})))break}var d=n(W,L).call(W,null!==(e=null==a?void 0:a.accept_qn)&&void 0!==e?e:[],null!==(o=null==s?void 0:s.accept_qn)&&void 0!==o?o:[]),f=d.hevcAcceptQn,y=d.avcAcceptQn;return null!=s&&(s.accept_qn=f),null!=a&&(a.accept_qn=y),{avcCodec:a,hevcCodec:s}}),H.set(this,function(t,e){if(t===r.ProtocolType.HTTP_HLS){if(![r.P2PType.HLS_BILI,r.P2PType.HLS_NOT_P2P,r.P2PType.NONE].includes(n(W,l)))return!0}else if(t===r.ProtocolType.HTTP_STREAM&&[r.P2PType.HLS_BILI,r.P2PType.HLS_NOT_P2P].includes(n(W,l)))return!0;return!1}),M.set(this,function(e){var n,r,o,i=e.protocol,a=e.format,l=e.codec,c=null===(o=null===(r=null===(n=W.source.playurl.stream.find(function(t){return t.protocol_name===i}))||void 0===n?void 0:n.format)||void 0===r?void 0:r.find(function(t){return t.format_name===a}))||void 0===o?void 0:o.codec.find(function(t){var e=t.codec_name;return l===e});return null!=c?t(t({},c),{protocol:i,format:a}):null}),k.set(this,function(t,e){void 0===e&&(e=[]);var o=t.map(function(t){return{code:t,value:String(t),label:(i=n(W,c).find(function(e){return e.qn===t}),a="",l=null===(e=null==i?void 0:i.attr_desc)||void 0===e?void 0:e.find(function(t){return"panorama"===t.attr_name}),null!=l&&(a=l.desc),(null!==(o=null==i?void 0:i.desc)&&void 0!==o?o:"")+a),codec:r.CodecType.AVC};var e,o,i,a,l}).filter(function(t){var e=t.label;return Boolean(e)}),a=(null!=e?e:[]).map(function(t){return{code:t,value:String(t),label:(o=n(W,c).find(function(e){return e.qn===t}),i="",a=null===(e=null==o?void 0:o.attr_desc)||void 0===e?void 0:e.find(function(t){return"panorama"===t.attr_name}),null!=a&&(i=a.desc),(null!==(r=null==o?void 0:o.desc)&&void 0!==r?r:"")+i)};var e,r,o,i,a}).filter(function(t){var e=t.label;return Boolean(e)}).map(function(t){var e=t.code,n=t.value,o=t.label;return{code:e,value:n+"_"+r.CodecType.HEVC,label:(null!=o?o:"")+"PRO",codec:r.CodecType.HEVC}});return i.Support_HEVC_No_Err&&[r.EQuality.Origin,r.EQuality.K4].forEach(function(t){if(a.some(function(e){return e.code===t})){var e=a.find(function(e){return e.code===t});null!=e&&(e.label=e.label.replace(/PRO$/,""),o=o.filter(function(e){return e.code!==t}))}}),o.concat(a).sort(function(t,e){return e.code+(e.codec===r.CodecType.HEVC?1:0)-(t.code+(t.codec===r.CodecType.HEVC?1:0))})}),L.set(this,function(t,e){var n=W.source.playurl.dolby_qn;return null!=n&&(t=t.filter(function(t){return t!==n[0]})),null!=n&&r.isSupportDolby()?{hevcAcceptQn:e,avcAcceptQn:t=t.concat(n)}:{hevcAcceptQn:e,avcAcceptQn:t}});try{e(this,a,JSON.parse(b.conf_json))}catch(V){r.logger.error(V)}e(this,c,b.playurl.g_qn_desc),e(this,l,n(this,S).call(this)),null!=window.MediaSource?e(this,f,[r.P2PType.HLS_BILI,r.P2PType.HLS_NOT_P2P].includes(n(this,l))?r.ProtocolType.HTTP_HLS:r.ProtocolType.HTTP_STREAM):e(this,f,r.ProtocolType.HTTP_HLS),this.useStream()}var a,l,c,u,s,p,h,d,f,y,v,T,P,_,C,m,w,S,g,E,H,M,k,L;return i.prototype.getCurPlayUrl=function(){if(performance.now()>n(this,P)+1e3*n(this,_))throw new Error("source data is expired");return n(this,h)},i.prototype.getCurStreamInfo=function(){var t,e,r=new URL(n(this,h)),o=null!==(e=null===(t=/\/live-bvc\/\d+\/(live_.+?)[/.]/.exec(n(this,h)))||void 0===t?void 0:t[1])&&void 0!==e?e:"";return{host:r.host,query:r.search,name:o,protocol:n(this,f),format:n(this,y),codec:n(this,p),p2pType:n(this,l),quality:n(this,u),timeshift:n(this,T),curAttrName:n(this,m),qualityDesc:n(this,c)}},i.prototype.getCurQuality=function(){return n(this,u)},i.prototype.getQualityDesc=function(t){var e,r=null!=t?t:n(this,u);return null!==(e=n(this,s).find(function(t){return t.value===r}))&&void 0!==e?e:null},i.prototype.getCurLine=function(){return n(this,v)},i.prototype.getCurLineDesc=function(){var t=this;return this.getLineCandidates().find(function(e){return e.value===n(t,v)})},i.prototype.setTimeShift=function(t){e(this,T,t)},i.prototype.setCurLine=function(t){if(0===n(this,d).length)throw new Error("play url candidates is empty");e(this,v,t%this.getLineCandidates().length);var r=n(this,d)[n(this,v)%n(this,d).length];e(this,h,r.url),e(this,_,r.ttl>1?r.ttl:o)},i.prototype.getPlayUrlCandates=function(){return n(this,d)},i.prototype.getCurCodecType=function(){return n(this,p)},i.prototype.getCurP2PType=function(){return n(this,l)},i.prototype.getDynamicConfig=function(){return n(this,a)},i.prototype.getQnCandidates=function(){return n(this,s)},i.prototype.getAVCQnCandidates=function(){return this.getQnCandidates().filter(function(t){return t.codec===r.CodecType.AVC})},i.prototype.getLineCandidates=function(){return[{value:0,label:"主线"},{value:1,label:"备线1"},{value:2,label:"备线2"},{value:3,label:"备线3"}]},i.prototype.setCurP2PType=function(t){e(this,l,t)},i.prototype.hasHLSPlayerSupportStream=function(){return Boolean(n(this,M).call(this,{protocol:r.ProtocolType.HTTP_HLS,format:r.FormatType.FMP4,codec:r.CodecType.AVC}))},i.prototype.useStream=function(t){var i,a,c;void 0===t&&(t={});var P,C,w=null!==(i=t.protocol)&&void 0!==i?i:n(this,f),g=null!==(a=t.codec)&&void 0!==a?a:n(this,p),M=n(this,E).call(this,w),L=M.avcCodec,b=M.hevcCodec;if(null==L||0===(null!==(c=L.url_info)&&void 0!==c?c:[]).length)throw new Error("can't find stream by protocol: "+w+", codec: "+(null!=g?g:""));null!=(null==b?void 0:b.url_info)&&g===r.CodecType.HEVC?(P=b,C=r.CodecType.HEVC):(P=L,C=r.CodecType.AVC);var W=P.url_info.map(function(t){var e,n=t.host,r=t.extra,o=t.stream_ttl;return{url:""+n+P.base_url+r,ttl:o,attr_name:null!==(e=P.attr_name)&&void 0!==e?e:""}});if(0===W.length)throw new Error("play url codec.hosts is empty");var V=n(this,v)%W.length;e(this,m,W[V].attr_name),e(this,h,W[V].url),e(this,_,W[V].ttl>1?W[V].ttl:o),0!==n(this,T)&&e(this,h,n(this,h)+"&tmshift="+n(this,T)),e(this,y,P.format),e(this,p,C),e(this,f,w),e(this,l,n(this,S).call(this,t.expectP2PType)),e(this,s,n(this,k).call(this,L.accept_qn,null==b?void 0:b.accept_qn)),e(this,u,P.current_qn+(C===r.CodecType.HEVC?"_"+r.CodecType.HEVC:"")),e(this,d,W),n(this,H).call(this,w,n(this,l))&&e(this,l,r.P2PType.NONE)},a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,s=new WeakMap,p=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,y=new WeakMap,v=new WeakMap,T=new WeakMap,P=new WeakMap,_=new WeakMap,C=new WeakMap,m=new WeakMap,w=new WeakMap,S=new WeakMap,g=new WeakMap,E=new WeakMap,H=new WeakMap,M=new WeakMap,k=new WeakMap,L=new WeakMap,i.Support_HEVC_No_Err=r.isHardSupportHEVC(),i}();exports.default=i;
}