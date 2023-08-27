/**
 * id: cPXi
 * path: ./interface
 */

function(require,module,exports) {
"use strict";var e,a,t,r,o,n,i,l,s;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SEIType=exports.CorePlayerType=exports.ExternalEventType=exports.ApiErrorCode=exports.P2PType=exports.EQuality=exports.CodecType=exports.FormatType=exports.ProtocolType=void 0,function(e){e.HTTP_HLS="http_hls",e.HTTP_STREAM="http_stream"}(e=exports.ProtocolType||(exports.ProtocolType={})),function(e){e.FLV="flv",e.TS="ts",e.FMP4="fmp4"}(a=exports.FormatType||(exports.FormatType={})),function(e){e.AVC="avc",e.HEVC="hevc"}(t=exports.CodecType||(exports.CodecType={})),function(e){e[e.Origin=1e4]="Origin",e[e.K4=2e4]="K4",e[e.Dolby=3e4]="Dolby"}(r=exports.EQuality||(exports.EQuality={})),function(e){e[e.HLS_NOT_P2P=-1]="HLS_NOT_P2P",e[e.NONE=0]="NONE",e[e.HLS_BILI=1]="HLS_BILI",e[e.FLV_QVB=8]="FLV_QVB"}(o=exports.P2PType||(exports.P2PType={})),function(e){e[e.AreaBlock=6005]="AreaBlock"}(n=exports.ApiErrorCode||(exports.ApiErrorCode={})),function(e){e.Initialized="initialized",e.LiveStateChange="liveStateChange",e.StartPlayRound="startPlayRound",e.VideoStateChange="videoStateChange",e.FullscreenChange="fullscreenChange",e.Playing="playing",e.Paused="paused",e.SwitchLine="switchLine",e.SwitchQuality="switchQuality",e.WebFullscreen="webFullscreen",e.FeedBackClick="feedBackClick",e.BlockSettingClick="blockSettingClick",e.Set="set",e.Reload="reload",e.GuidChange="guidChange",e.InitDanmaku="initDanmaku",e.AddDanmaku="addDanmaku",e.SendDanmaku="sendDanmaku",e.ReceiveOnlineCount="receiveOnlineCount",e.ReceiveMessage="receiveMessage",e.UserLogin="userLogin",e.SendGift="sendGift",e.FirstLoadedAPIPlayer="firstLoadedAPIPlayer",e.FirstLoadedAPIPlayurl="firstLoadedAPIPlayurl",e.FirstLoadStart="firstLoadStart",e.FirstLoadedMetaData="firstLoadedMetaData",e.FirstPlaying="firstPlaying",e.EnterTheRoom="enterTheRoom",e.OperableElementsChange="operableElementsChange",e.AutoPlay="autoPlay",e.SwitchQualityNotLogin="switchQualityNotLogin",e.Recommend="recommend",e.DanmakuMaskChange="danmakuMaskChange",e.DanmakuMaskStatusChange="danmakuMaskStatusChange",e.CtrlVisibleChange="ctrlVisibleChange",e.WebPlayerCreated="webPlayerCreated",e.FirstFrame="FirstFrame",e.SEIData="SEIData",e.VolumeChange="VolumeChange",e.VideoDirectionChange="VideoDirectionChange",e.UserClickPlayIcon="UserClickPlayIcon",e.MergeStream="MergeStream",e.SEIParseData="SEIParseData",e.OrientationChange="OrientationChange",e.UserRedirect="UserRedirect",e.MutePlay="MutePlay",e.NotAutoPlay="NotAutoPlay",e.WaitStart="WaitStart",e.WaitEnd="WaitEnd",e.VideoError="VideoError",e.MetaDataChange="MetaDataChange",e.PlayFaild="PlayFailed",e.ScreenStateChange="ScreenStateChange"}(i=exports.ExternalEventType||(exports.ExternalEventType={})),function(e){e.fMp4Player="fMp4Player",e.Hls7Player="Hls7Player",e.NativePlayer="NativePlayer"}(l=exports.CorePlayerType||(exports.CorePlayerType={})),function(e){e.LIVE_SEI_CHANNEL="LIVE_SEI_CHANNEL",e.BILIMASK__SVGBIN="BILIMASK__SVGBIN",e.B_LIVE_VIBRATION="B_LIVE_VIBRATION",e.LIVE_SEI_PC_LINK="LIVE_SEI_PC_LINK",e.BVC_KUAWAN____TS="BVC_KUAWAN____TS",e.BVCLIVESTREAMHOP="BVCLIVESTREAMHOP"}(s=exports.SEIType||(exports.SEIType={}));
}