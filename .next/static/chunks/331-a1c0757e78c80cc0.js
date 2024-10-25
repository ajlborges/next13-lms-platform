(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{67303:function(e,t,i){"use strict";i.r(t),i.d(t,{ClientClerkProvider:function(){return d}});var a=i(97431),r=i(24033),n=i(2265),o=i(85791);let s="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,l=()=>{let{push:e}=(0,r.useRouter)(),t=(0,r.usePathname)(),i=(0,r.useSearchParams)(),a=t+i.toString();return(0,n.useEffect)(()=>{window.__clerk_nav_ref=t=>t===window.location.href.replace(window.location.origin,"")?(e(t),Promise.resolve()):new Promise(i=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(i):window.__clerk_nav_resolves_ref=[i],e(t)})},[a]),(0,n.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,n.useCallback)(e=>window.__clerk_nav_ref(e),[])},d=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0}=e,i=(0,r.useRouter)(),d=l();s(()=>{window.__unstable__onBeforeSetActive=()=>{t&&(i.refresh(),i.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{i.refresh()}},[]);let u={...e,navigate:d};return n.createElement(o.f,{options:u},n.createElement(a.El,{...u}))}},85791:function(e,t,i){"use strict";i.d(t,{f:function(){return o},k:function(){return n}});var a=i(2265);let r=a.createContext(void 0);r.displayName="ClerkNextOptionsCtx";let n=()=>{let e=a.useContext(r);return e.value},o=e=>{let{children:t,options:i}=e;return a.createElement(r.Provider,{value:{value:i}},t)}},63530:function(e,t,i){"use strict";i.r(t),i.d(t,{AuthenticateWithRedirectCallback:function(){return a.vn},ClerkLoaded:function(){return a.a7},ClerkLoading:function(){return a.qI},MultisessionAppSupport:function(){return a.KM},RedirectToCreateOrganization:function(){return a.gM},RedirectToOrganizationProfile:function(){return a.yB},RedirectToSignIn:function(){return a.N1},RedirectToSignUp:function(){return a.C2},RedirectToUserProfile:function(){return a.sO},SignedIn:function(){return a.CH},SignedOut:function(){return a.tj}});var a=i(97431)},11507:function(e,t,i){"use strict";i.r(t),i.d(t,{MagicLinkErrorCode:function(){return a.X1},WithClerk:function(){return a._E},WithSession:function(){return a.CJ},WithUser:function(){return a.Gi},isClerkAPIResponseError:function(){return a.kD},isKnownError:function(){return a.sZ},isMagicLinkError:function(){return a.V9},isMetamaskError:function(){return a.ZC},useAuth:function(){return a.aC},useClerk:function(){return a.ll},useMagicLink:function(){return a.jS},useOrganization:function(){return a.o8},useOrganizationList:function(){return a.eW},useOrganizations:function(){return a.qi},useSession:function(){return a.kP},useSessionList:function(){return a.xo},useSignIn:function(){return a.zq},useSignUp:function(){return a.QS},useUser:function(){return a.aF},withClerk:function(){return a.r0},withSession:function(){return a.NA},withUser:function(){return a.ns}});var a=i(97431)},61726:function(e,t,i){"use strict";i.r(t),i.d(t,{CreateOrganization:function(){return a.Gp},OrganizationProfile:function(){return a.A},OrganizationSwitcher:function(){return a.Li},SignIn:function(){return o},SignInButton:function(){return a.$d},SignOutButton:function(){return a.AM},SignUp:function(){return s},SignUpButton:function(){return a.gX},UserButton:function(){return a.l8},UserProfile:function(){return a.Iw}});var a=i(97431),r=i(2265),n=i(85791);let o=e=>{let{signInUrl:t}=(0,n.k)();return t?r.createElement(a.cL,{routing:"path",path:t,...e}):r.createElement(a.cL,{...e})},s=e=>{let{signUpUrl:t}=(0,n.k)();return t?r.createElement(a.Mo,{routing:"path",path:t,...e}):r.createElement(a.Mo,{...e})}},87545:function(e){e.exports=function(){var e={80:function(e,t,i){e.exports=i(728).default},728:function(e,t,i){"use strict";i.d(t,{default:function(){return tx}});var a=i(48),r=i.n(a),n=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},o=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},s=function(e){return e&&void 0!==e.nodeName?(e.muxId||(e.muxId=e.id||o()),e.muxId):e},l=function(e){e&&void 0!==e.nodeName?e=s(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},d=i(640),u=i.n(d),c=u().methodFactory;u().methodFactory=function(e,t,i){var a=c(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},u().setLevel(u().getLevel());var h=u();function m(){return"1"===(r().doNotTrack||r().navigator&&r().navigator.doNotTrack)}var p={now:function(){var e=r().performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},v=function(e){return b(e)[0]},b=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},f={exists:function(){var e=r().performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=r().performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=r().performance,t=e&&e.timing;return t&&t.navigationStart}};function E(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}var g=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],_=["x-cdn","content-type"].concat(g);function y(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(_.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function A(e){if(e){var t=g.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var k=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t};function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?T(Object(i),!0).forEach(function(t){var a;a=i[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var I=function(e){if(!e)return{};var t=f.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},S=function(e){if(e&&"function"==typeof e.getAllResponseHeaders)return y(e.getAllResponseHeaders())};function R(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?R(Object(i),!0).forEach(function(t){var a;a=i[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var D=function(e,t){if(!e||"function"!=typeof e.getRequests)return{};var i=e.getRequests({state:"executed"});if(0===i.length)return{};var a,r=i[i.length-1],n=v(r.url),o=r.url,s=r.bytesLoaded,l=new Date(r.requestStartDate).getTime(),d=new Date(r.firstByteDate).getTime(),u=new Date(r.requestEndDate).getTime(),c=isNaN(r.duration)?0:r.duration,h="function"==typeof t.getMetricsFor?t.getMetricsFor(r.mediaType).HttpList:t.getDashMetrics().getHttpRequests(r.mediaType);return h.length>0&&(a=y(h[h.length-1]._responseHeaders||"")),{requestStart:l,requestResponseStart:d,requestResponseEnd:u,requestBytesLoaded:s,requestResponseHeaders:a,requestMediaDuration:c,requestHostname:n,requestUrl:o,requestId:a?A(a):void 0}},M=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},C=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]};function O(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var x=0,N=function(){var e,t;function i(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i)}return e=[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++x,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++x;var r=function r(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t)}}}],O(i.prototype,e),t&&O(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function P(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var U=function(){var e;function t(e){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("seeking",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(t,a){null!==i._playbackHeartbeatInterval&&(r().clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return P(t.prototype,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=r().setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(r().clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e&&P(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function B(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var W=(e5=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context});r?(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,i.viewErrored=!0):(delete t.data.player_error_code,delete t.data.player_error_message,delete t.data.player_error_context)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}})},e3&&B(e5.prototype,e3),e4&&B(e5,e4),Object.defineProperty(e5,"prototype",{writable:!1}),e5);function V(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var q=function(){var e,t;function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return e=[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),E(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}],V(i.prototype,e),t&&V(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function H(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var F=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=p.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a),e.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",r),e.on("seeking",r),e.on("adplaying",function(){t._isAdPlaying=!0}),e.on("adended",function(){t._isAdPlaying=!1}),e.on("adpause",function(){t._isAdPlaying=!1}),e.on("adbreakstart",function(){t._isAdPlaying=!1}),e.on("adbreakend",function(){t._isAdPlaying=!1}),e.on("adplay",function(){t._isAdPlaying=!1}),e.on("viewinit",function(){t._playbackTimeTrackerLastPlayheadPosition=-1,t._lastTime=p.now(),t._isAdPlaying=!1,t._callbackUpdatePlaybackTime=null})}return e=[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=p.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&E(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}],H(i.prototype,e),t&&H(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function j(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var $=function(){var e,t;function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e;var t=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",t),e.on("playbackheartbeatend",t),e.on("timeupdate",t),e.on("destroy",function(){e.off("timeupdate",t)})}return e=[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}],j(i.prototype,e),t&&j(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function K(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var Y=(e7=function e(t){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;E(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(E(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},e8&&K(e7.prototype,e8),e6&&K(e7,e6),Object.defineProperty(e7,"prototype",{writable:!1}),e7);function G(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var Z=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,e.disableRebufferTracking||e.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){t._cleanupRebufferTracker(null,{viewer_time:p.now()})}))}return e=[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)this._cleanupRebufferTracker(e,t);else if(null!==this._lastCheckedTime){if(this._lastPlayheadTime===this.pm.data.player_playhead_time){var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}else this._cleanupRebufferTracker(e,t,!0)}else this._prepareRebufferTrackerState(t.viewer_time)}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}],G(i.prototype,e),t&&G(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function Q(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var z=function(){var e;function t(e){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.pm=e,e.on("viewinit",function(){var t=e.data,a=t.view_id;if(!t.view_program_changed){var r=function(t,r){var n=r.viewer_time;"playing"===t.type&&void 0===e.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||p.now(),a):"adplaying"===t.type&&(void 0===e.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||p.now(),a)};e.one("playing",r),e.one("adplaying",r),e.one("viewend",function(){e.off("playing",r),e.off("adplaying",r)})}})}return Q(t.prototype,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e&&Q(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function X(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var J=(e9=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0)return void(i._lastPlayheadPosition=-1);var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),E(t.data,"view_total_content_playback_time",e),E(t.data,"view_total_upscaling",r*e),E(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},te&&X(e9.prototype,te),tt&&X(e9,tt),Object.defineProperty(e9,"prototype",{writable:!1}),e9);function ee(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var et=(ti=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.isSeeking=!1;var a=-1,r=function(){var e=p.now(),r=(t.data.viewer_time||e)-(a||e);E(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3?a=n.viewer_time:(i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,E(t.data,"view_seek_count",1),t.send("seeking"))}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},ta&&ee(ti.prototype,ta),tr&&ee(ti,tr),Object.defineProperty(ti,"prototype",{writable:!1}),ti);function ei(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ea(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ea(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ea(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function er(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var en=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eo=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],es=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,e.on("viewinit",function(){t.isAdBreak=!1,t._currentAdRequestNumber=0,t._currentAdResponseNumber=0,t._adRequests=[],t._adResponses=[],t._adHasPlayed=!1,t._wouldBeNewAdPlay=!0,t._prerollPlayTime=void 0}),eo.forEach(function(i){return e.on(i,t._updateAdData.bind(t))});var a=function(){t.isAdBreak=!1};e.on("adbreakstart",function(){t.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(i,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+t._currentAdRequestNumber++},a),en(t._adRequests,a),E(e.data,"view_ad_request_count"),t.inPrerollPosition()&&(e.data.view_preroll_requested=!0,t._adHasPlayed||E(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(i,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+t._currentAdResponseNumber++},a),en(t._adResponses,a);var r=t.findAdRequest(a.ad_request_id);r&&E(e.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),e.on("adplay",function(i,a){t._adHasPlayed=!0,t._wouldBeNewAdPlay&&(t._wouldBeNewAdPlay=!1,E(e.data,"view_ad_played_count")),t.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,t._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,a.viewer_time-t._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-e.data.view_start)),t._prerollPlayTime=a.viewer_time)}),e.on("adplaying",function(i,a){t.inPrerollPosition()&&void 0===e.data.view_preroll_load_time&&void 0!==t._prerollPlayTime&&(e.data.view_preroll_load_time=a.viewer_time-t._prerollPlayTime,e.data.view_startup_preroll_load_time=a.viewer_time-t._prerollPlayTime)}),e.on("adclicked",function(i,a){t._wouldBeNewAdPlay||E(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(i,a){t._wouldBeNewAdPlay||E(e.data,"view_ad_skipped_count")}),e.on("adended",function(){t._wouldBeNewAdPlay=!0}),e.on("aderror",function(){t._wouldBeNewAdPlay=!0})}return e=[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=ei(b(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=ei(b(t.ad_asset_url),2),o=n[0],s=n[1];this.pm.data.view_preroll_ad_asset_domain=s,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}],er(i.prototype,e),t&&er(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function el(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var ed=(tn=function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var i,a,n=function(){t.disableRebufferTracking||i&&(E(t.data,"view_waiting_rebuffer_duration",p.now()-i),i=!1,r().clearInterval(a))},o=!1,s=function(){o=!1,n()};t.on("waiting",function(){o&&(t.disableRebufferTracking||(E(t.data,"view_waiting_rebuffer_count",1),i=p.now(),a=r().setInterval(function(){if(i){var e=p.now();E(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250)))}),t.on("playing",function(){n(),o=!0}),t.on("pause",s),t.on("seeking",s)},to&&el(tn.prototype,to),ts&&el(tn,ts),Object.defineProperty(tn,"prototype",{writable:!1}),tn);function eu(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var ec=(tl=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var a=function(){i.lastWallClockTime=p.now(),t.on("before*",r)},r=function(e){var a=p.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},td&&eu(tl.prototype,td),tu&&eu(tl,tu),Object.defineProperty(tl,"prototype",{writable:!1}),tl),eh=i(375),em=i(655),ep=i.n(em),ev="muxData",eb=function(){var e;try{e=eh.parse(ep().get(ev)||"")}catch(t){e={}}return e},ef=function(e){try{ep().set(ev,eh.stringify(e),{expires:365})}catch(e){}},eE=function(){var e=eb();return e.mux_viewer_id=e.mux_viewer_id||n(),e.msn=e.msn||Math.random(),ef(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eg=function(){var e;switch(e_()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e_=function(){var e=r().navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};eg.getConnectionFromAPI=e_;var ey=ek({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eA=ek({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ep:"experiments",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function ek(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function eT(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),o=n[0],s=ey[o];s||(h.info("Data key word `"+n[0]+"` not expected in "+a),s=o+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),eA[e]?s+=eA[e]:Number(e)&&Math.floor(Number(e))===Number(e)?s+=e:(h.info("Data key word `"+e+"` not expected in "+a),s+="_"+e+"_")}),r?i[s]=e[a]:t[s]=e[a]}}),Object.assign(t,i)}var ew={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},eI=["hb","requestcompleted","requestfailed","requestcanceled"],eS=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},ew,t)};eS.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},eS.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},eS.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),r().clearTimeout(this._sendTimeout)},eS.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],eT({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);eR(this._beaconUrl,i,!0,function(){})},eS.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=p.now();eR(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,h.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=p.now()-a,e._postInFlight=!1})}},eS.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},eS.prototype._startBeaconSending=function(){var e=this;r().clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=r().setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},eS.prototype._createPayload=function(e){var t,i,a,r=this,n={transmission_timestamp:Math.round(p.now())};this._roundTripTime&&(n.rtt_ms=Math.round(this._roundTripTime));var o=function(){a=(t=JSON.stringify({metadata:n,events:i||e})).length/1024},s=function(){return a<=r._options.maxPayloadKBSize};return o(),s()||(h.info("Payload size is too big ("+a+" kb). Removing unnecessary events."),i=e.filter(function(e){return -1===eI.indexOf(e.e)}),o()),s()||(h.info("Payload size still too big ("+a+" kb). Cropping fields.."),i.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),o()),t};var eR=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))a();else if(r().fetch)r().fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});else{if(r().XMLHttpRequest){var n=new(r()).XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return a(null,200!==n.status?"error":void 0)},n.open("POST",e),n.setRequestHeader("Content-Type","text/plain"),void n.send(t)}a()}};function eL(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function eD(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function eM(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?eD(Object(i),!0).forEach(function(t){ex(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):eD(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function eC(e){return(eC="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eO(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ex(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var eN=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id"],eP=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],eU=["ad_id","ad_creative_id","ad_universal_id"],eB=["viewstart","error","ended","viewend"],eW=function(){var e,t;function i(e,t){var a,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,_,y,A,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),ex(this,"previousBeaconData",null),ex(this,"lastEventTime",0),ex(this,"rateLimited",!1),this.mux=e,this.envKey=t,this.options=k,this.eventQueue=new eS((a=this.envKey,o=(n=this.options).beaconCollectionDomain,s=n.beaconDomain,o?"https://"+o:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(l=this.options.sampleRate)&&void 0!==l?l:1,this.disableCookies=null!==(d=this.options.disableCookies)&&void 0!==d&&d,this.respectDoNotTrack=null!==(u=this.options.respectDoNotTrack)&&void 0!==u&&u,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(c=this.options.platform)||void 0===c?void 0:c.name,viewer_application_version:null===(h=this.options.platform)||void 0===h?void 0:h.version,viewer_application_engine:null===(m=this.options.platform)||void 0===m?void 0:m.layout,viewer_device_name:null===(p=this.options.platform)||void 0===p?void 0:p.product,viewer_device_category:"",viewer_device_manufacturer:null===(v=this.options.platform)||void 0===v?void 0:v.manufacturer,viewer_os_family:null===(b=this.options.platform)||void 0===b||null===(f=b.os)||void 0===f?void 0:f.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(g=E.os)||void 0===g?void 0:g.architecture,viewer_os_version:null===(_=this.options.platform)||void 0===_||null===(y=_.os)||void 0===y?void 0:y.version,viewer_connection_type:eg(),page_url:null===r()||void 0===r()||null===(A=r().location)||void 0===A?void 0:A.href},this.viewerData=this.disableCookies?{}:eE()}return e=[{key:"send",value:function(e,t){var i;if(e&&null!=t&&t.view_id){if(this.respectDoNotTrack&&m())return h.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!==eC(t))return h.error("A data object was expected in send() but was not provided");var a,r,o=this.disableCookies?{}:(a=eb(),r=p.now(),a.session_start&&(a.sst=a.session_start,delete a.session_start),a.session_id&&(a.sid=a.session_id,delete a.session_id),a.session_expires&&(a.sex=a.session_expires,delete a.session_expires),(!a.sex||a.sex<r)&&(a.sid=n(),a.sst=r),a.sex=r+15e5,ef(a),{session_id:a.sid,session_start:a.sst,session_expires:a.sex}),s=eM(eM(eM(eM(eM({},this.pageLevelData),t),o),this.viewerData),{},{event:e,env_key:this.envKey});s.user_id&&(s.viewer_user_id=s.user_id,delete s.user_id);var l=(null!==(i=s.mux_sample_number)&&void 0!==i?i:0)>=this.sampleRate,d=eT(this._deduplicateBeaconData(e,s));if(this.lastEventTime=this.mux.utils.now(),l)return h.info("Not sending event due to sample rate restriction",e,s,d);if(this.envKey||h.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,s,d),!this.rateLimited){if(h.info("Sending event",e,s,d),this.rateLimited=!this.eventQueue.queueEvent(e,d),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):eB.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return s.event="eventrateexceeded",d=eT(s),this.eventQueue.queueEvent(s.event,d),h.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eM({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=function(e){if(Array.isArray(e))return e}(t)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(t,2)||function(e,t){if(e){if("string"==typeof e)return eL(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?eL(e,t):void 0}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],s=r[1];i.previousBeaconData&&(s!==i.previousBeaconData[o]||eN.indexOf(o)>-1||i.objectHasChanged(n,o,s,i.previousBeaconData[o])||i.eventRequiresKey(e,o))&&(a[o]=s,i.previousBeaconData[o]=s)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!(!e||0!==t.indexOf("request_")||"request_response_headers"!==t&&"object"===eC(i)&&"object"===eC(a)&&Object.keys(i||{}).length===Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return"renditionchange"===e&&0===t.indexOf("video_source_")||!(!eU.includes(t)||!eP.includes(e))}}],eO(i.prototype,e),t&&eO(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function eV(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eq=(tc=function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var i=0,a=0,r=0,n=0,o=0,s=0,l=0;t.on("requestcompleted",function(e,s){var l,d,u=s.request_start,c=s.request_response_start,h=s.request_response_end,m=s.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;o++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/o)}}),t.on("requestfailed",function(e,i){n++,s++,t.data.view_request_count=n,t.data.view_request_failed_count=s}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},th&&eV(tc.prototype,th),tm&&eV(tc,tm),Object.defineProperty(tc,"prototype",{writable:!1}),tc);function eH(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eF=(tp=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("before*",function(e,a){var r=a.viewer_time,n=p.now(),o=i._lastEventTime;if(i._lastEventTime=n,o&&n-o>36e5){var s=Object.keys(t.data).reduce(function(e,i){var a,r;return 0===i.indexOf("video_")?Object.assign(e,(a={},r=t.data[i],i in a?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r,a)):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},s)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tv&&eH(tp.prototype,tv),tb&&eH(tp,tb),Object.defineProperty(tp,"prototype",{writable:!1}),tp);function ej(e){return(ej="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e$(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function eK(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function eY(e,t){return(eY=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eG(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eZ(e){return(eZ=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var eQ=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],ez=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eY(e,t)}(o,e);var t,i,a,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=eZ(o);if(t){var a=eZ(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return function(e,t){if(t&&("object"===ej(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return eG(e)}(this,e)});function o(e,t,i){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,o),(s=r.call(this)).DOM_CONTENT_LOADED_EVENT_END=f.domContentLoadedEventEnd(),s.NAVIGATION_START=f.navigationStart(),s.mux=e,s.id=t,null!==(a=i)&&void 0!==a&&a.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(i=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},i)).data=i.data||{},i.data.property_key&&(i.data.env_key=i.data.property_key,delete i.data.property_key),h.setLevel(i.debug?"debug":"warn"),s.getPlayheadTime=i.getPlayheadTime,s.getStateData=i.getStateData||function(){return{}},s.getAdData=i.getAdData||function(){},s.minimumRebufferDuration=i.minimumRebufferDuration,s.sustainedRebufferThreshold=i.sustainedRebufferThreshold,s.playbackHeartbeatTime=i.playbackHeartbeatTime,s.disableRebufferTracking=i.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=i.disablePlayheadRebufferTracking,s.errorTranslator=i.errorTranslator,s.playbackEventDispatcher=new eW(e,i.data.env_key,i),s.data={player_instance_id:n(),mux_sample_rate:i.sampleRate,beacon_domain:i.beaconCollectionDomain||i.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1,s.oldEmit=s.emit,s.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var a,s,l=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(eG(s));s.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)});var d=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(eG(s));if(s.on("videochange",function(e,t){d(t)}),s.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),d(Object.assign(t,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),s.on("destroy",s.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var u=function(){var e=void 0!==s.data.view_start;s.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var c=function(e){e.persisted||s.destroy()};window.addEventListener("pagehide",c,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",c)})}return s.on("playerready",function(e,t){Object.assign(this.data,t)}),eQ.forEach(function(e){s.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),s.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),s.on("viewend",function(e,t){Object.assign(s.data,t)}),s.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),s.longResumeTracker=new eF(eG(s)),s.errorTracker=new W(eG(s)),new ec(eG(s)),s.seekingTracker=new et(eG(s)),s.playheadTime=new $(eG(s)),s.playbackHeartbeat=new U(eG(s)),new J(eG(s)),s.watchTimeTracker=new q(eG(s)),new F(eG(s)),s.adTracker=new es(eG(s)),new Z(eG(s)),new Y(eG(s)),new z(eG(s)),new ed(eG(s)),new eq(eG(s)),i.hlsjs&&s.addHLSJS(i),i.dashjs&&s.addDashJS(i),s.emit("viewinit",i.data),s}return i=[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i,a=function(e){if(Array.isArray(e))return e}(i=b(t.video_source_url))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(i,2)||function(e,t){if(e){if("string"==typeof e)return e$(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e$(e,t):void 0}}(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=a[0],n=a[1];t.video_source_domain=n,t.video_source_hostname=r}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();0!==i.indexOf("data:")&&0!==i.indexOf("blob:")||(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(e,t){var i=this;Object.keys(this.data).forEach(function(e){0===e.indexOf("video_")&&delete i.data[e]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(e,t){delete this.data.player_error_code,delete this.data.player_error_message}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=n(),i=function(){t===e.data.view_id&&E(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this.errorTracker.viewErrored||(this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4))}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,function(e,t,i){var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,o=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(f.exists()){var s=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,o=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=I(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,b=c.responseEnd;s("requestcompleted",w(w({},k(l)),{},{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:b,request_type:"manifest",request_hostname:v(r),request_response_headers:S(o),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=I(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=o(m)+n(m.duration);s("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:v(i.url),request_response_headers:S(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=I(t.stats);s("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:v(i.url),request_response_headers:S(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,o=I(a=a||n.stats),l=o.bytesLoaded,d=o.requestStart,u=o.responseStart,c=o.responseEnd,h=r?S(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?v(r.responseURL):void 0,request_id:h?A(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,s("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;s("fragmentchange",{currentFragmentPDT:o(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,o=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?S(u):void 0;n!==a.ErrorDetails.MANIFEST_LOAD_ERROR&&n!==a.ErrorDetails.MANIFEST_LOAD_TIMEOUT&&n!==a.ErrorDetails.FRAG_LOAD_ERROR&&n!==a.ErrorDetails.FRAG_LOAD_TIMEOUT&&n!==a.ErrorDetails.LEVEL_LOAD_ERROR&&n!==a.ErrorDetails.LEVEL_LOAD_TIMEOUT&&n!==a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&n!==a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT&&n!==a.ErrorDetails.SUBTITLE_LOAD_ERROR&&n!==a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT&&n!==a.ErrorDetails.KEY_LOAD_ERROR&&n!==a.ErrorDetails.KEY_LOAD_TIMEOUT||s("requestfailed",{request_error:n,request_url:c,request_hostname:v(c),request_id:h?A(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==o?void 0:o.code,request_error_text:null==o?void 0:o.text}),l&&s("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(o&&(o.code||o.text)?"response: ".concat(o.code,", ").concat(o.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";s("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:v(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var o,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(o=d),l?s("renditionchange",{video_source_fps:o,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)}else r.warn("performance timing not supported. Not tracking HLS.js.")}(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){var e;this.hlsjs&&((e=this.hlsjs)&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor(),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,function(e,t,i){var a=e.log;if(i&&i.on){var r=function(i,a){return e.emit(t,i,a)},n=function(e){var t=e.type,i=(e.data||{}).url;r("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:v(i),request_url:i})};i.on("manifestLoaded",n);var o={},s=function(e){var t=e.type,a=e.fragmentModel,n=(e.chunk||{}).mediaInfo||{},s=n.type,l=n.bitrateList,d={};(l=l||[]).forEach(function(e,t){d[t]={},d[t].width=e.width,d[t].height=e.height,d[t].bitrate=e.bandwidth,d[t].attrs={}}),"video"===s?o.video=d:"audio"===s?o.audio=d:o.media=d;var u=D(a,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestResponseHeaders,v=u.requestMediaDuration,b=u.requestHostname,f=u.requestUrl;r("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:-1,request_type:s+"_init",request_response_headers:p,request_hostname:b,request_id:u.requestId,request_url:f,request_media_duration:v,request_rendition_lists:o})};i.on("initFragmentLoaded",s);var l=function(e){var t=e.type,a=e.fragmentModel,n=e.chunk||{},o=n.mediaInfo,s=n.start,l=(o||{}).type,d=D(a,i),u=d.requestStart,c=d.requestResponseStart,h=d.requestResponseEnd,m=d.requestBytesLoaded,p=d.requestResponseHeaders,v=d.requestMediaDuration,b=d.requestHostname,f=d.requestUrl,E=d.requestId,g=M(l,i),_=g.currentLevel,y=g.renditionWidth,A=g.renditionHeight,k=g.renditionBitrate;r("requestcompleted",{request_event_type:t,request_start:u,request_response_start:c,request_response_end:h,request_bytes_loaded:m,request_type:l,request_response_headers:p,request_hostname:b,request_id:E,request_url:f,request_media_start_time:s,request_media_duration:v,request_current_level:_,request_labeled_bitrate:k,request_video_width:y,request_video_height:A})};i.on("mediaFragmentLoaded",l);var d={video:void 0,audio:void 0,totalBitrate:void 0},u=function(){if(d.video&&"number"==typeof d.video.bitrate){if(d.video.width&&d.video.height){var e=d.video.bitrate;return d.audio&&"number"==typeof d.audio.bitrate&&(e+=d.audio.bitrate),e!==d.totalBitrate?(d.totalBitrate=e,{video_source_bitrate:e,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:C(d.video.codec)}):void 0}a.warn("have bitrate info for video but missing width/height")}},c=function(e,t,n){if("number"==typeof e.newQuality){var o=e.mediaType;if("audio"===o||"video"===o){var s=i.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality});if(s&&"number"==typeof s.bitrate){d[o]=L(L({},s),{},{codec:i.getCurrentTrackFor(o).codec});var l=u();l&&r("renditionchange",l)}else a.warn("missing bitrate info for ".concat(o))}}else a.warn("missing evt.newQuality in qualityChangeRendered event",e)};i.on("qualityChangeRendered",c);var h=function(e){var t=e.request,i=e.mediaType;r("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:v(t.url)})};i.on("fragmentLoadingAbandoned",h);var m=function(e){var t,i,a=e.error,n=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},o=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};27===(null==a?void 0:a.code)&&r("requestfailed",{request_error:n.type+"_"+n.action,request_url:n.url,request_hostname:v(n.url),request_type:n.mediaType,request_error_code:o.status,request_error_text:o.statusText});var s="".concat(null!=n&&n.url?"url: ".concat(n.url,"\n"):"")+"".concat(null!=o&&o.status||null!=o&&o.statusText?"response: ".concat(null==o?void 0:o.status,", ").concat(null==o?void 0:o.statusText,"\n"):"");r("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:s})};i.on("error",m),i._stopMuxMonitor=function(){i.off("manifestLoaded",n),i.off("initFragmentLoaded",s),i.off("mediaFragmentLoaded",l),i.off("qualityChangeRendered",c),i.off("error",m),i.off("fragmentLoadingAbandoned",h),delete i._stopMuxMonitor}}else a.warn("Invalid dash.js player reference. Monitoring blocked.")}(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){var e;this.dashjs&&((e=this.dashjs)&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor(),this.dashjs=void 0)}}],eK(o.prototype,i),a&&eK(o,a),Object.defineProperty(o,"prototype",{writable:!1}),o}(N),eX=i(153),eJ=i.n(eX);function e0(e){return(e0="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e1(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return e2(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e2(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e2(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var e5,e3,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,tn,to,ts,tl,td,tu,tc,th,tm,tp,tv,tb,tf,tE=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};r()&&r().WeakMap&&(tf=new WeakMap);var t_=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};t_.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},t_.prototype.processLine=function(e){var t=e.indexOf(":"),i=tS(e,t),a=i[0],r=2===i.length?tk(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":ty(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":ty(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":ty(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var o=k(tR(i[1]));Object.assign(this.manifest.sessionData,o)}},t_.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",o=i&&3*i,s=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=o),o&&t[r]<o&&(t[r]=o),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<s&&(t[n]=s)}};var ty=function(e,t){var i,a=tA(t[0].replace("#EXT-X-",""));tI(t[1])?(i={},i=Object.assign(tw(t[1]),i)):i=tk(t[1]),e[a]=i},tA=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tk=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tT=function(e){var t={},i=e.split("=");return i.length>1&&(t[tA(i[0])]=tk(i[1])),t},tw=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tT(t[a]),i);return i},tI=function(e){return e.indexOf("=")>-1},tS=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tR=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tL={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){h.info("safeCall error",e)}return r},safeIncrement:E,getComputedStyle:function(e,t){var i;if(e&&t&&r()&&"function"==typeof r().getComputedStyle)return tf&&tf.has(e)&&(i=tf.get(e)),i||(i=r().getComputedStyle(e,null),tf&&tf.set(e,i)),i.getPropertyValue(t)},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:y,cdnHeadersToRequestId:A,extractHostnameAndDomain:b,extractHostname:v,manifestParser:t_,generateShortID:o,generateUUID:n,now:p.now};function tD(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var tM={},tC=function e(t){var i=arguments;"string"==typeof t?e.hasOwnProperty(t)?r().setTimeout(function(){i=Array.prototype.splice.call(i,1),e[t].apply(null,i)},0):h.warn("`"+t+"` is an unknown task"):"function"==typeof t?r().setTimeout(function(){t(e)},0):h.warn("`"+t+"` is invalid.")},tO={loaded:p.now(),NAME:"mux-embed",VERSION:"4.28.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=e1(l(t),3),r=a[0],n=a[1],o=a[2],s=e.log,d=e.utils.getComputedStyle,u=e.utils.secondsToMs;if(!r)return s.error("No element was found with the `"+n+"` query selector.");if("video"!==o&&"audio"!==o)return s.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,s.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return u(r.currentTime)},i.getStateData=function(){var e,t,a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&e0("function"===this.dashjs.getSource)&&this.dashjs.getSource(),o={player_is_paused:r.paused,player_playhead_time:u(r.currentTime),player_width:parseInt(d(r,"width")),player_height:parseInt(d(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:eJ()&&!!(eJ().fullscreenElement||eJ().webkitFullscreenElement||eJ().mozFullScreenElement||eJ().msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null===(e=r)||void 0===e||null===(t=e.getVideoPlaybackQuality)||void 0===t?void 0:t.call(e).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var l=r.getStartDate();if(l&&"function"==typeof l.getTime&&l.getTime()){var c=l.getTime();if(o.player_program_time=c+s,r.seekable.length>0){var h=c+r.seekable.end(r.seekable.length-1);o.player_live_edge_program_time=h}}}return o},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var c=function(){s.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=e1(l(t),3),a=i[0],n=i[1],o=i[2];return a?"video"!==o&&"audio"!==o?e.log.error("The element of `"+n+"` was not a media element."):(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,void(r=a)):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tE.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tg[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tC,e,t)},destroyMonitor:function(e){var t,i=(function(e){if(Array.isArray(e))return e}(t=l(e))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(t,1)||function(e,t){if(e){if("string"==typeof e)return tD(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?tD(e,t):void 0}}(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];i&&i.mux&&"function"==typeof i.mux.destroy?i.mux.destroy():h.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=s(e);tM[i]?tM[i].addHLSJS(t):h.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=s(e);tM[i]?tM[i].addDashJS(t):h.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=s(e);tM[t]?tM[t].removeHLSJS():h.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=s(e);tM[t]?tM[t].removeDashJS():h.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){m()&&t&&t.respectDoNotTrack&&h.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=s(e);tM[i]=new ez(tC,i,t)},emit:function(e,t,i){var a=s(e);tM[a]?(tM[a].emit(t,i),"destroy"===t&&delete tM[a]):h.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:m,log:h,utils:tL,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tC,tO),void 0!==r()&&"function"==typeof r().addEventListener&&r().addEventListener("pagehide",function(e){e.persisted||(tC.WINDOW_UNLOADING=!0)},!1);var tx=tC},655:function(e,t,i){var a,r;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e);/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */}!function(o){var s=!1;if(void 0===(r="function"==typeof(a=o)?a.call(t,i,t,e):a)||(e.exports=r),s=!0,"object"===n(t)&&(e.exports=o(),s=!0),!s){var l=window.Cookies,d=window.Cookies=o();d.noConflict=function(){return window.Cookies=l,d}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var o;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*n.expires),n.expires=s}try{o=JSON.stringify(r),/^[\{\[]/.test(o)&&(r=o)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(o={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){o=h;break}t||(o[m]=h)}catch(e){}}return o}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})},153:function(e,t,i){var a,r=void 0!==i.g?i.g:"undefined"!=typeof window?window:{},n=i(558);"undefined"!=typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),e.exports=a},48:function(e,t,i){var a;a="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},e.exports=a},640:function(e,t,i){var a,r;void 0===(r="function"==typeof(a=function(){var e=function(){},t="undefined",i=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function s(e,i,a){return function(){typeof console!==t&&(o.call(this,i,a),this[e].apply(this,arguments))}}function l(a,o,l){var d;return"debug"===(d=a)&&(d="log"),typeof console!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||s.apply(this,arguments)}function d(e,i,r){var n,s=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(typeof window!==t&&d){try{e=window.localStorage[d]}catch(e){}if(typeof e===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:"symbol"==typeof e&&(d=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=r||l,s.getLevel=function(){return n},s.setLevel=function(i,r){if("string"==typeof i&&void 0!==s.levels[i.toUpperCase()]&&(i=s.levels[i.toUpperCase()]),!("number"==typeof i&&i>=0&&i<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+i;if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(typeof window!==t&&d){try{return void(window.localStorage[d]=i)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),o.call(s,i,e),typeof console===t&&i<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){i=e,u()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(i,!1),function(){if(typeof window!==t&&d){try{return void window.localStorage.removeItem(d)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var c=u();null==c&&(c=i),s.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return u.noConflict=function(){return typeof window!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u})?a.call(t,i,t,e):a)||(e.exports=r)},375:function(e,t){"use strict";var i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){var a,n,o=[];for(n in"string"!=typeof(t=t||"")&&(t="?"),e)if(i.call(e,n)){if((a=e[n])||null!=a&&!isNaN(a)||(a=""),n=r(n),a=r(a),null===n||null===a)continue;o.push(n+"="+a)}return o.length?t+o.join("&"):""},t.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),o=a(t[2]);null===n||null===o||n in r||(r[n]=o)}return r}},558:function(){}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,i),n.exports}return i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i(80)}()},98864:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=i(21024);i(2265);let r=a._(i(90533));function n(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let i=r.default,a={loading:e=>{let{error:t,isLoading:i,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e),Object.assign(a,t);let o=a.loader;return i({...a,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33699:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{suspense:function(){return r},NoSSR:function(){return n}}),i(21024),i(2265);let a=i(37669);function r(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e}function n(e){let{children:t}=e;return t}},90533:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=i(21024),r=a._(i(2265)),n=i(33699),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function i(e){let i=t.loading,a=r.default.createElement(i,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:n.NoSSR,s=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:a},r.default.createElement(o,null,r.default.createElement(s,e)))}return t.lazy=r.default.lazy(t.loader),i.displayName="LoadableComponent",i}},64659:function(){},358:function(e,t,i){"use strict";let a,r;i.d(t,{Z:function(){return uV}});var n=i(2265);let o={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},l={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled"},d=Object.entries(l),u=d.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),c=d.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(c).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let h=Object.entries(u).reduce((e,[t,i])=>{let a=c[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),m={SUBTITLES:"subtitles",CAPTIONS:"captions",METADATA:"metadata"},p={DISABLED:"disabled",SHOWING:"showing"},v={MOUSE:"mouse",TOUCH:"touch"},b={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},f={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},E={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},g={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function _(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function y(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function A(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function k(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function T(e,t=!1){return e.split("_").map(function(e,i){return(i||t?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}function w(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...E,...g});let I=e=>new Promise(t=>setTimeout(t,e)),S=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],R=(e,t)=>{let i=1===e?S[t].singular:S[t].plural;return`${e} ${i}`},L=e=>{if(!("number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)))return"";let t=Math.abs(e),i=new Date(0,0,0,0,0,t,0),a=[i.getHours(),i.getMinutes(),i.getSeconds()],r=a.map((e,t)=>e&&R(e,t)).filter(e=>e).join(", ");return`${r}${t!==e?" remaining":""}`};function D(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let M=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},C=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},O=(e,t)=>C(e,t)[0],x=(e,t)=>!!e&&!!t&&(!!e.contains(t)||x(e,t.getRootNode().host)),N=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||N(e.getRootNode().host,t)};function P(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(i.selectorText===t)return i}return(null==a?void 0:a.sheet)?(a.sheet.insertRule(`${t}{}`,a.sheet.cssRules.length),a.sheet.cssRules[a.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}function U(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function B(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}U(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function W(e,t){return e.hasAttribute(t)}function V(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}W(e,t)!=i&&e.toggleAttribute(t,i)}function q(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function H(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;q(e,t,void 0)!==a&&e.setAttribute(t,a)}class F{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}let j={createElement:function(){return new $.HTMLElement},addEventListener(){},removeEventListener(){}},$={ResizeObserver:class{observe(){}},document:j,HTMLElement:class extends F{},DocumentFragment:class extends F{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){}},K="undefined"==typeof window||void 0===window.customElements,Y=Object.keys($).every(e=>e in globalThis),G=K&&!Y?$:globalThis,Z=K&&!Y?j:globalThis.document;var Q=Object.defineProperty,z=(e,t,i)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,X=(e,t,i)=>(z(e,"symbol"!=typeof t?t+"":t,i),i),J=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ee=(e,t,i)=>(J(e,t,"read from private field"),i?i.call(e):t.get(e)),et=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ei=(e,t,i,a)=>(J(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ea=Z.createElement("template");ea.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class er extends G.HTMLElement{constructor(e={}){if(super(),et(this,rc,void 0),X(this,"preventClick",!1),et(this,rh,e=>{this.preventClick||this.handleClick(e)}),et(this,rm,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",ee(this,rm));return}this.preventClick||this.handleClick(e)}),et(this,rp,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",ee(this,rm));return}this.addEventListener("keyup",ee(this,rm),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=ea.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=Z.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}let{style:t}=P(this.shadowRoot,":host");t.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",ee(this,rh)),this.addEventListener("keydown",ee(this,rp)),this.tabIndex=0}disable(){this.removeEventListener("click",ee(this,rh)),this.removeEventListener("keydown",ee(this,rp)),this.removeEventListener("keyup",ee(this,rm)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ee(this,rc))?void 0:a.unassociateElement)||r.call(a,this),ei(this,rc,null)),i&&(ei(this,rc,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ee(this,rc))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(ei(this,rc,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ee(this,rc))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ee(this,rc))?void 0:e.unassociateElement)||t.call(e,this),ei(this,rc,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}rc=new WeakMap,rh=new WeakMap,rm=new WeakMap,rp=new WeakMap,G.customElements.get("media-chrome-button")||G.customElements.define("media-chrome-button",er);let en=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,eo=Z.createElement("template");eo.innerHTML=`
  <slot name="icon">${en}</slot>
`,G.customElements.get("media-airplay-button")||G.customElements.define("media-airplay-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:eo,...e})}connectedCallback(){this.setAttribute("aria-label",g.AIRPLAY()),super.connectedCallback()}get mediaAirplayUnavailable(){return q(this,u.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){H(this,u.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new G.CustomEvent(o.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}});let es=Z.createElement("template");es.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let el=e=>{let t=null!=e.getAttribute(u.MEDIA_IS_CASTING),i=t?g.EXIT_CAST():g.ENTER_CAST();e.setAttribute("aria-label",i)};G.customElements.get("media-cast-button")||G.customElements.define("media-cast-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_CASTING,u.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:es,...e})}connectedCallback(){el(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_CASTING&&el(this),super.attributeChangedCallback(e,t,i)}get mediaIsCasting(){return W(this,u.MEDIA_IS_CASTING)}set mediaIsCasting(e){V(this,u.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return q(this,u.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){H(this,u.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?o.MEDIA_EXIT_CAST_REQUEST:o.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}});var ed=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eu=(e,t,i)=>(ed(e,t,"read from private field"),i?i.call(e):t.get(e)),ec=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eh=(e,t,i,a)=>(ed(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let em=Z.createElement("template");em.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class ep extends G.HTMLElement{constructor(e={}){if(super(),ec(this,rv,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=em.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=Z.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=eu(this,rv))?void 0:a.unassociateElement)||r.call(a,this),eh(this,rv,null)),i&&(eh(this,rv,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=eu(this,rv))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eh(this,rv,function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):N(e,"media-controller")}(this)),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=eu(this,rv))?void 0:e.associateElement)||t.call(e,this)),null==(i=eu(this,rv))||i.addEventListener("pointerdown",this),null==(a=eu(this,rv))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=eu(this,rv))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=eu(this,rv))||i.removeEventListener("pointerdown",this),null==(a=eu(this,rv))||a.removeEventListener("click",this),eh(this,rv,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:o}=this.getBoundingClientRect(),s=t-a,l=i-r;if(s<0||l<0||s>n||l>o||0===n&&0===o)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===v.TOUCH){this.handleTap(e);return}if(d===v.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){V(this,u.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(t,{composed:!0,bubbles:!0}))}}rv=new WeakMap,G.customElements.get("media-gesture-receiver")||G.customElements.define("media-gesture-receiver",ep);var ev=Object.defineProperty,eb=(e,t,i)=>t in e?ev(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ef=(e,t,i)=>(eb(e,"symbol"!=typeof t?t+"":t,i),i);let eE={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},eg=Z.createElement("template");eg.innerHTML=`
  <style>
    
    :host([${u.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${eE.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${eE.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${eE.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${eE.AUDIO}])[${eE.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${eE.AUDIO}])[${eE.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${eE.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${eE.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${eE.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${eE.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([${eE.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${eE.USER_INACTIVE}]:not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${eE.AUDIO}])) ::slotted(:not([slot=media]):not([${eE.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${eE.AUDIO}])[${u.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let e_=Object.values(u);class ey extends G.HTMLElement{constructor(){super(),ef(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(eg.content.cloneNode(!0)));let e=new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e==t&&this.handleMediaUpdated(t).then(e=>this.mediaSetCallback(e))}))});e.observe(this,{childList:!0,subtree:!0});let t=!1,i=new ResizeObserver(e=>{t||(setTimeout(()=>{(function(e){for(let t of e)(function(e,t){var i;if(!e.isConnected)return;let a=null!=(i=e.getAttribute(eE.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960",r=function(e){let t=e.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}(a),n=function(e,t){return Object.keys(e).filter(i=>t>=e[i])}(r,t),o=!1;if(Object.keys(r).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(c.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}})(t.target,t.contentRect.width)})(e),t=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(c.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),t=!0)});this.resizeObserver=i,i.observe(this);let a=this.media,r=this.querySelector(":scope > slot[slot=media]");r&&r.addEventListener("slotchange",()=>{let e=r.assignedElements({flatten:!0});if(!e.length){this.mediaUnsetCallback(a);return}this.media&&(a=this.media,this.handleMediaUpdated(this.media).then(e=>this.mediaSetCallback(e)))})}static get observedAttributes(){return[eE.AUTOHIDE,eE.GESTURES_DISABLED].concat(e_).filter(e=>![u.MEDIA_RENDITION_LIST,u.MEDIA_AUDIO_TRACK_LIST].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eE.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}mediaSetCallback(e){this._mediaClickPlayToggle=()=>{let t=e.paused?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(t,{composed:!0,bubbles:!0}))}}handleMediaUpdated(e){let t=e=>Promise.resolve(e);if(!e)return console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',e),Promise.reject(e);let i=e.nodeName.toLowerCase();return i.includes("-")?G.customElements.whenDefined(i).then(()=>t(e)):t(e)}mediaUnsetCallback(e){}connectedCallback(){var e;let t=null!=this.getAttribute(eE.AUDIO),i=t?E.AUDIO_PLAYER():E.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.media&&this.handleMediaUpdated(this.media).then(e=>this.mediaSetCallback(e)),this.setAttribute(eE.USER_INACTIVE,"");let a=()=>{if(this.autohide<0||this.hasAttribute(eE.USER_INACTIVE))return;this.setAttribute(eE.USER_INACTIVE,"");let e=new G.CustomEvent(c.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},r=()=>{if(!this.hasAttribute(eE.USER_INACTIVE))return;this.removeAttribute(eE.USER_INACTIVE);let e=new G.CustomEvent(c.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},n=()=>{r(),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{a()},1e3*this.autohide))};this.addEventListener("keyup",()=>{n()}),this.addEventListener("pointerup",e=>{"touch"===e.pointerType?[this,this.media].includes(e.target)&&!this.hasAttribute(eE.USER_INACTIVE)?a():n():e.composedPath().some(e=>{var t;return["media-play-button","media-fullscreen-button"].includes(null==(t=null==e?void 0:e.nodeName)?void 0:t.toLowerCase())})&&n()}),this.addEventListener("pointermove",e=>{"mouse"===e.pointerType&&(r(),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&n())}),this.addEventListener("mouseleave",()=>{a()}),this.addEventListener("keyup",()=>{this.setAttribute(eE.KEYBOARD_CONTROL,"")}),null==(e=G.window)||e.addEventListener("mouseup",()=>{this.removeAttribute(eE.KEYBOARD_CONTROL)})}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}var eA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ek=(e,t,i)=>(eA(e,t,"read from private field"),i?i.call(e):t.get(e)),eT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ew=(e,t,i,a)=>(eA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eI{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eT(this,r_),eT(this,rb,void 0),eT(this,rf,void 0),eT(this,rE,void 0),eT(this,rg,new Set),ew(this,rb,e),ew(this,rf,t),ew(this,rE,new Set(i))}[Symbol.iterator](){return ek(this,r_,ry).values()}get length(){return ek(this,r_,ry).size}get value(){var e;return null!=(e=[...ek(this,r_,ry)].join(" "))?e:""}set value(e){var t;e!==this.value&&(ew(this,rg,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ek(this,r_,ry)][e]}values(){return ek(this,r_,ry).values()}forEach(e){ek(this,r_,ry).forEach(e)}add(...e){var t,i;e.forEach(e=>ek(this,rg).add(e)),(""!==this.value||(null==(t=ek(this,rb))?void 0:t.hasAttribute(`${ek(this,rf)}`)))&&(null==(i=ek(this,rb))||i.setAttribute(`${ek(this,rf)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ek(this,rg).delete(e)),null==(t=ek(this,rb))||t.setAttribute(`${ek(this,rf)}`,`${this.value}`)}contains(e){return ek(this,r_,ry).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}rb=new WeakMap,rf=new WeakMap,rE=new WeakMap,rg=new WeakMap,r_=new WeakSet,ry=function(){return ek(this,rg).size?ek(this,rg):ek(this,rE)};let eS=(e="")=>e.split(/\s+/),eR=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t="cc"===t?"captions":"subtitles",language:i,label:r}},eL=(e="",t={})=>eS(e).map(e=>{let i=eR(e);return{...t,...i}}),eD=e=>Array.isArray(e)?e.map(e=>"string"==typeof e?eR(e):e):"string"==typeof e?eL(e):[e],eM=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eC=(e=[])=>Array.prototype.map.call(e,eM).join(" "),eO=(e,t)=>i=>i[e]===t,ex=e=>{let t=Object.entries(e).map(([e,t])=>eO(e,t));return e=>t.every(t=>t(e))},eN=(e,t=[],i=[])=>{let a=eD(i).map(ex);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eP=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:ex(t);return Array.from(e.textTracks).filter(i)},eU=e=>{let t=!!e.getAttribute(u.MEDIA_SUBTITLES_SHOWING);return t},eB=(e,t)=>{var i,a;let r=eU(e);if(r||!1===t){let t=e.getAttribute(u.MEDIA_SUBTITLES_SHOWING);if(t){let i=new G.CustomEvent(o.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}}else if(r&&!0!==t)console.error("Attempting to enable captions or subtitles but none are available! Please verify your media content if this is unexpected.");else{let[t]=null!=(a=eS(null!=(i=e.getAttribute(u.MEDIA_SUBTITLES_LIST))?i:""))?a:[];if(t){let i=new G.CustomEvent(o.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}}},eW={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};void 0===Z.fullscreenElement&&(eW.enter="webkitRequestFullScreen",eW.exit=null!=Z.webkitExitFullscreen?"webkitExitFullscreen":"webkitCancelFullScreen",eW.rootEvents=["webkitfullscreenchange"],eW.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],eW.element="webkitFullscreenElement",eW.error="webkitfullscreenerror",eW.enabled="webkitFullscreenEnabled");let eV=()=>{var e;return a||(a=null==(e=null==Z?void 0:Z.createElement)?void 0:e.call(Z,"video"))},eq=async(e=eV())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await I(0),e.volume!==t},eH=((e=eV())=>{let t=Z[eW.enabled];return!t&&e&&(t="webkitSupportsFullscreen"in e),t})(),eF=((e=eV())=>"function"==typeof(null==e?void 0:e.requestPictureInPicture))(),ej=!!G.WebKitPlaybackTargetAvailabilityEvent,e$=!!G.chrome,eK=eq().then(e=>r=e),eY=Object.values(f),eG=e=>eP(e.media,e=>[m.SUBTITLES,m.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),eZ=e=>eP(e.media,e=>e.mode===p.SHOWING&&[m.SUBTITLES,m.CAPTIONS].includes(e.kind)),eQ={MEDIA_PAUSED:{get:function(e){let{media:t}=e;return!t||t.paused},mediaEvents:["play","playing","pause","emptied"]},MEDIA_HAS_PLAYED:{get:function(e){let{media:t}=e;return!!t&&!t.paused},mediaEvents:["playing","emptied"]},MEDIA_ENDED:{get:function(e){let{media:t}=e;return!!t&&t.ended},mediaEvents:["seeked","ended","emptied"]},MEDIA_PLAYBACK_RATE:{get:function(e){let{media:t}=e;return t&&void 0!==t.playbackRate?t.playbackRate:1},mediaEvents:["ratechange","loadstart"]},MEDIA_MUTED:{get:function(e){let{media:t}=e;return!!t&&void 0!==t.muted&&t.muted},mediaEvents:["volumechange"]},MEDIA_VOLUME:{get:function(e){let{media:t}=e;return t&&void 0!==t.volume?Number(t.volume):1},mediaEvents:["volumechange"]},MEDIA_VOLUME_LEVEL:{get:function(e){let{media:t}=e,i="high";if(!t||void 0===t.volume)return i;let{muted:a,volume:r}=t;return 0===r||a?i="off":r<.5?i="low":r<.75&&(i="medium"),i},mediaEvents:["volumechange"]},MEDIA_CURRENT_TIME:{get:function(e){let{media:t}=e;return t&&void 0!==t.currentTime?t.currentTime:0},mediaEvents:["timeupdate","loadedmetadata"]},MEDIA_DURATION:{get:function(e){let{media:t}=e;return t&&Number.isFinite(t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},MEDIA_SEEKABLE:{get:function(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress"]},MEDIA_LOADING:{get:function(e){var t;return(null==(t=e.media)?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},MEDIA_BUFFERED:{get:function(e){var t,i,a;let r=null==(t=e.media)?void 0:t.buffered;return Array.from(null!=(a=null==(i=e.media)?void 0:i.buffered)?a:[]).map((e,t)=>[Number(r.start(t)).toFixed(3),Number(r.end(t)).toFixed(3)])},mediaEvents:["progress","emptied"]},MEDIA_STREAM_TYPE:{get:function(e){let{media:t}=e;if(!t)return;let{streamType:i}=t;if(eY.includes(i)){if(i===f.UNKNOWN){let t=e.getAttribute("defaultstreamtype");return[f.LIVE,f.ON_DEMAND].includes(t)?t:void 0}return i}let a=t.duration;if(a===1/0)return f.LIVE;if(Number.isFinite(a))return f.ON_DEMAND;{let t=e.getAttribute("defaultstreamtype");if([f.LIVE,f.ON_DEMAND].includes(t))return t}},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},MEDIA_TARGET_LIVE_WINDOW:{get:function(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=eQ.MEDIA_STREAM_TYPE.get(e);return(null==i||Number.isNaN(i))&&a===f.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},MEDIA_TIME_IS_LIVE:{get:function(e){let{media:t}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;let i="live"===eQ.MEDIA_STREAM_TYPE.get(e);if(!i)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=e.hasAttribute("liveedgeoffset")?Number(e.getAttribute("liveedgeoffset")):10,n=a.end(a.length-1)-r;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},MEDIA_IS_FULLSCREEN:{get:function(e,t){var i;let a;let r=e.media;if(r&&void 0===Z[eW.element]&&"webkitDisplayingFullscreen"in r)return r.webkitDisplayingFullscreen&&"fullscreen"===r.webkitPresentationMode;if(t){let e=Z[eW.element];a=e?t.target:null}else a=null!=(i=e.getRootNode().fullscreenElement)?i:Z[eW.element];return x(e.fullscreenElement,a)},rootEvents:eW.rootEvents,mediaEvents:eW.mediaEvents},MEDIA_IS_PIP:{get:function(e,t){var i;let a=e.media;if(!a)return!1;if(t)return"enterpictureinpicture"==t.type;{let t=null!=(i=e.getRootNode().pictureInPictureElement)?i:Z.pictureInPictureElement;return x(a,t)}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},MEDIA_IS_CASTING:{get:function(e,t){var i;let{media:a}=e;if(!a)return!1;let r=null==(i=G.CastableVideoElement)?void 0:i.castElement,n=x(a,r);return(null==t?void 0:t.type)==="castchange"&&(null==t?void 0:t.detail)==="CONNECTING"&&(n="connecting"),n},mediaEvents:["entercast","leavecast","castchange"]},MEDIA_AIRPLAY_UNAVAILABLE:{get:function(e,t){if(!ej)return b.UNSUPPORTED;if(t){if("available"===t.availability)return;if("not-available"===t.availability)return b.UNAVAILABLE}},mediaEvents:["webkitplaybacktargetavailabilitychanged"]},MEDIA_CAST_UNAVAILABLE:{get:function(){var e;let t=null==(e=G.CastableVideoElement)?void 0:e.castState;return e$&&t?t.includes("CONNECT")?void 0:b.UNAVAILABLE:b.UNSUPPORTED},mediaEvents:["castchange"]},MEDIA_FULLSCREEN_UNAVAILABLE:{get:function(){return eH?void 0:b.UNAVAILABLE}},MEDIA_PIP_UNAVAILABLE:{get:function(){return eF?void 0:b.UNSUPPORTED}},MEDIA_RENDITION_UNAVAILABLE:{get:function(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:b.UNAVAILABLE:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_AUDIO_TRACK_UNAVAILABLE:{get:function(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?b.UNAVAILABLE:void 0:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_VOLUME_UNAVAILABLE:{get:function(e){if(void 0!==r&&!r)return b.UNSUPPORTED;let{media:t}=e;if(t&&void 0===t.volume)return b.UNAVAILABLE},mediaEvents:["loadstart"]},MEDIA_SUBTITLES_LIST:{get:function(e){return eG(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},MEDIA_SUBTITLES_SHOWING:{get:function(e){return!e.hasAttribute("defaultsubtitles")||e.hasAttribute(u.MEDIA_HAS_PLAYED)||e.hasAttribute(u.MEDIA_SUBTITLES_SHOWING)||eB(e,!0),eZ(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"]},MEDIA_RENDITION_LIST:{get:function(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]]},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_RENDITION_SELECTED:{get:function(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},MEDIA_AUDIO_TRACK_LIST:{get:function(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_AUDIO_TRACK_ENABLED:{get:function(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]}},ez={MEDIA_PLAY_REQUEST:(e,t,i)=>{var a;let r=eQ.MEDIA_STREAM_TYPE.get(i),n=null===i.getAttribute("noautoseektolive");r==f.LIVE&&n&&ez.MEDIA_SEEK_TO_LIVE_REQUEST(e),null==(a=e.play())||a.catch(()=>{})},MEDIA_PAUSE_REQUEST:e=>e.pause(),MEDIA_MUTE_REQUEST:e=>e.muted=!0,MEDIA_UNMUTE_REQUEST:e=>{e.muted=!1,0===e.volume&&(e.volume=.25)},MEDIA_VOLUME_REQUEST:(e,t,i)=>{let a=t.detail;if(e.volume=a,a>0&&e.muted&&(e.muted=!1),!i.hasAttribute("novolumepref"))try{G.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(e){}},MEDIA_ENTER_FULLSCREEN_REQUEST:(e,t,i)=>{if(!eH){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}Z.pictureInPictureElement&&Z.exitPictureInPicture(),i[eW.enter]?i.fullscreenElement[eW.enter]():e.webkitEnterFullscreen?e.webkitEnterFullscreen():e.requestFullscreen?e.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{Z[eW.exit]()},MEDIA_ENTER_PIP_REQUEST:e=>{if(!Z.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!e.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}Z[eW.element]&&Z[eW.exit]();let t=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};e.requestPictureInPicture().catch(i=>{if(11===i.code){if(0===e.readyState&&"none"===e.preload){let i=()=>{e.removeEventListener("loadedmetadata",a),e.preload="none"},a=()=>{e.requestPictureInPicture().catch(t),i()};e.addEventListener("loadedmetadata",a),e.preload="metadata",setTimeout(()=>{0===e.readyState&&t(),i()},1e3)}else throw i}else throw i})},MEDIA_EXIT_PIP_REQUEST:()=>{Z.pictureInPictureElement&&Z.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:e=>{var t;(null==(t=G.CastableVideoElement)?void 0:t.castEnabled)&&(Z[eW.element]&&Z[eW.exit](),e.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var e;(null==(e=G.CastableVideoElement)?void 0:e.castElement)&&G.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:(e,t)=>{let i=t.detail;(e.readyState>0||void 0===e.readyState)&&(e.currentTime=i)},MEDIA_PLAYBACK_RATE_REQUEST:(e,t)=>{e.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:(e,t,i)=>{var a;if(!e)return;let r=t.detail;null===r&&i.propagateMediaState(u.MEDIA_PREVIEW_TIME,void 0),i.propagateMediaState(u.MEDIA_PREVIEW_TIME,r);let[n]=eP(e,{kind:m.METADATA,label:"thumbnails"});if(!(n&&n.cues))return;if(null===r){i.propagateMediaState(u.MEDIA_PREVIEW_IMAGE,void 0),i.propagateMediaState(u.MEDIA_PREVIEW_COORDS,void 0);return}let o=Array.prototype.find.call(n.cues,e=>e.startTime>=r);if(!o)return;let s=/'^(?:[a-z]+:)?\/\//i.test(o.text)?void 0:null==(a=e.querySelector('track[label="thumbnails"]'))?void 0:a.src,l=new URL(o.text,s),d=new URLSearchParams(l.hash).get("#xywh");i.propagateMediaState(u.MEDIA_PREVIEW_IMAGE,l.href),i.propagateMediaState(u.MEDIA_PREVIEW_COORDS,d.split(","))},MEDIA_SHOW_SUBTITLES_REQUEST:(e,t,i)=>{let a=eG(i),{detail:r=[]}=t;eN(p.SHOWING,a,r)},MEDIA_DISABLE_SUBTITLES_REQUEST:(e,t,i)=>{let a=eG(i),{detail:r=[]}=t;eN(p.DISABLED,a,r)},MEDIA_AIRPLAY_REQUEST:e=>{if(e){if(!(e.webkitShowPlaybackTargetPicker&&G.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}e.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:e=>{let t=e.seekable;if(!t){console.warn("MediaController: Media element does not support seeking to live.");return}if(!t.length){console.warn("MediaController: Media is unable to seek to live.");return}e.currentTime=t.end(t.length-1)},MEDIA_RENDITION_REQUEST:(e,t)=>{if(!(null==e?void 0:e.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let i=t.detail,a=[...e.videoRenditions].findIndex(e=>e.id==i);e.videoRenditions.selectedIndex!=a&&(e.videoRenditions.selectedIndex=a)},MEDIA_AUDIO_TRACK_REQUEST:(e,t)=>{if(!(null==e?void 0:e.audioTracks)){console.warn("MediaController: Audio track selection not supported by this media.");return}let i=t.detail;for(let t of e.audioTracks)t.enabled=i==t.id}};var eX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eJ=(e,t,i)=>(eX(e,t,"read from private field"),i?i.call(e):t.get(e)),e0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e1=(e,t,i,a)=>(eX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),e2=(e,t,i)=>(eX(e,t,"access private method"),i);let e5=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],e3={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",NO_HOTKEYS:"nohotkeys"};class e4 extends ey{constructor(){super(),e0(this,rT),e0(this,rI),e0(this,rA,new eI(this,e3.HOTKEYS)),e0(this,rk,void 0),void 0===eQ.MEDIA_VOLUME_UNAVAILABLE.get(this)&&eK.then(()=>{this.propagateMediaState(u.MEDIA_VOLUME_UNAVAILABLE,eQ.MEDIA_VOLUME_UNAVAILABLE.get(this))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this),Object.keys(ez).forEach(e=>{let t=`_handle${T(e,!0)}`;this[t]=t=>{if(t.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}ez[e](this.media,t,this)},this.addEventListener(o[e],this[t])}),this._mediaStatePropagators={},Object.keys(eQ).forEach(e=>{this._mediaStatePropagators[e]=t=>{this.propagateMediaState(l[e],eQ[e].get(this,t))}}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(e3.NO_HOTKEYS,e3.HOTKEYS,e3.DEFAULT_STREAM_TYPE,e3.DEFAULT_SUBTITLES)}get fullscreenElement(){var e;return null!=(e=eJ(this,rk))?e:this}set fullscreenElement(e){this.hasAttribute(e3.FULLSCREEN_ELEMENT)&&this.removeAttribute(e3.FULLSCREEN_ELEMENT),e1(this,rk,e)}attributeChangedCallback(e,t,i){var a;if(e===e3.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(e3.HOTKEYS)&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===e3.HOTKEYS)eJ(this,rA).value=i;else if(e===e3.DEFAULT_SUBTITLES&&i!==t&&""===i)eB(this,!0);else if(e===e3.DEFAULT_STREAM_TYPE)this.propagateMediaState(l.MEDIA_STREAM_TYPE);else if(e===e3.FULLSCREEN_ELEMENT){let e=i?null==(a=this.getRootNode())?void 0:a.getElementById(i):void 0;e1(this,rk,e)}super.attributeChangedCallback(e,t,i)}mediaSetCallback(e){if(super.mediaSetCallback(e),e.hasAttribute("tabindex")||(e.tabIndex=-1),Object.keys(eQ).forEach(t=>{let{mediaEvents:i,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:n,audioTracksEvents:o}=eQ[t],s=this._mediaStatePropagators[t];null==i||i.forEach(t=>{e.addEventListener(t,s),s()}),null==a||a.forEach(e=>{this.getRootNode().addEventListener(e,s),s()}),null==r||r.forEach(t=>{var i;null==(i=e.textTracks)||i.addEventListener(t,s),s()}),null==n||n.forEach(t=>{var i;null==(i=e.videoRenditions)||i.addEventListener(t,s),s()}),null==o||o.forEach(t=>{var i;null==(i=e.audioTracks)||i.addEventListener(t,s),s()})}),!this.hasAttribute("novolumepref"))try{let t=G.localStorage.getItem("media-chrome-pref-volume");null!==t&&(e.volume=t)}catch(e){console.debug("Error getting volume pref",e)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(eQ).forEach(t=>{let{mediaEvents:i,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:n,audioTracksEvents:o}=eQ[t],s=this._mediaStatePropagators[t];null==i||i.forEach(t=>{e.removeEventListener(t,s)}),null==a||a.forEach(e=>{this.getRootNode().removeEventListener(e,s)}),null==r||r.forEach(t=>{var i;null==(i=e.textTracks)||i.removeEventListener(t,s)}),null==n||n.forEach(t=>{var i;null==(i=e.videoRenditions)||i.removeEventListener(t,s),s()}),null==o||o.forEach(t=>{var i;null==(i=e.audioTracks)||i.removeEventListener(t,s),s()})}),this.propagateMediaState(l.MEDIA_PAUSED,!0)}propagateMediaState(e,t){let i=ts(this.mediaStateReceivers,e);if(to(this.mediaStateReceivers,e,t),i===ts(this.mediaStateReceivers,e))return;let a=e.toLowerCase(),r=new G.CustomEvent(h[a],{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(r)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=tl(e,i,a);Object.keys(o).forEach(t=>{e.addEventListener(o[t],this[`_handle${T(t,!0)}`])}),t.set(e,r)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(!t.has(e))return;let i=t.get(e);i(),t.delete(e),Object.keys(o).forEach(t=>{e.removeEventListener(o[t],this[`_handle${T(t,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers,i=t.indexOf(e);i>-1||(t.push(e),Object.keys(eQ).forEach(t=>{let i=eQ[t];to([e],l[t],i.get(this))}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",e2(this,rI,rS))}disableHotkeys(){this.removeEventListener("keydown",e2(this,rI,rS)),this.removeEventListener("keyup",e2(this,rT,rw))}get hotkeys(){return eJ(this,rA)}keyboardShortcutHandler(e){var t,i,a,r;let n,s,l,d;let c=(null!=(r=null!=(a=null==(t=e.target.getAttribute(e3.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean);if(!c.includes(e.key)&&!eJ(this,rA).contains(`no${e.key.toLowerCase()}`)&&!(" "===e.key&&eJ(this,rA).contains("nospace")))switch(e.key){case" ":case"k":n=null!=this.getAttribute(u.MEDIA_PAUSED)?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new G.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.getAttribute(u.MEDIA_VOLUME_LEVEL)?o.MEDIA_UNMUTE_REQUEST:o.MEDIA_MUTE_REQUEST,this.dispatchEvent(new G.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=null!=this.getAttribute(u.MEDIA_IS_FULLSCREEN)?o.MEDIA_EXIT_FULLSCREEN_REQUEST:o.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new G.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":eB(this);break;case"ArrowLeft":l=Math.max(((s=this.getAttribute(u.MEDIA_CURRENT_TIME))&&!Number.isNaN(+s)?+s:0)-10,0),d=new G.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break;case"ArrowRight":l=Math.max(((s=this.getAttribute(u.MEDIA_CURRENT_TIME))&&!Number.isNaN(+s)?+s:0)+10,0),d=new G.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}rA=new WeakMap,rk=new WeakMap,rT=new WeakSet,rw=function(e){let{key:t}=e;if(!e5.includes(t)){this.removeEventListener("keyup",e2(this,rT,rw));return}this.keyboardShortcutHandler(e)},rI=new WeakSet,rS=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!e5.includes(a)){this.removeEventListener("keyup",e2(this,rT,rw));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(eJ(this,rA).contains(`no${a.toLowerCase()}`)||" "===a&&eJ(this,rA).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",e2(this,rT,rw),{once:!0})};let e7=Object.values(u),e8=Object.values(l),e6=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(G.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>e7.includes(e)):[]},e9=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&G.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof G.customElements.get(e.nodeName.toLowerCase()))&&G.customElements.upgrade(e),e8.some(t=>t in e)},te=e=>e9(e)||!!e6(e).length,tt=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},ti={[u.MEDIA_SUBTITLES_LIST]:eC,[u.MEDIA_SUBTITLES_SHOWING]:eC,[u.MEDIA_SEEKABLE]:tt,[u.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tt).join(" "),[u.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[u.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(_).join(" ")},[u.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(A).join(" ")}},ta=async(e,t,i)=>{var a,r;if(e.isConnected||await I(0),"boolean"==typeof i||null==i)return V(e,t,i);if("number"==typeof i)return B(e,t,i);if("string"==typeof i)return H(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=ti[t])?void 0:a.call(ti,i))?r:i;return e.setAttribute(t,n)},tr=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},tn=(e,t)=>{if(tr(e))return;let i=(e,t)=>{var i,a;te(e)&&t(e);let{children:r=[]}=null!=e?e:{},n=null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[],o=[...r,...n];o.forEach(e=>tn(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!te(e)){G.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},to=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=e6(e),r=t.toLowerCase();a.includes(r)&&ta(e,r,i)})},ts=(e,t)=>{for(let i of e){if(t in i)return i[t];let e=e6(i),a=t.toLowerCase();if(e.includes(a))return i.getAttribute(a)}},tl=(e,t,i)=>{tn(e,t);let a=e=>{var i;let a=null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target;t(a)},r=e=>{var t;let a=null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target;i(a)};e.addEventListener(o.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(o.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],l=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>tn(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>tn(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tn(e,t)),Array.prototype.forEach.call(r,e=>tn(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(te(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tn(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(o.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(o.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};G.customElements.get("media-controller")||G.customElements.define("media-controller",e4);var td=Object.defineProperty,tu=(e,t,i)=>t in e?td(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,tc=(e,t,i)=>(tu(e,"symbol"!=typeof t?t+"":t,i),i),th=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tm=(e,t,i)=>(th(e,t,"read from private field"),i?i.call(e):t.get(e)),tp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tv=(e,t,i,a)=>(th(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tb=Z.createElement("template"),tf=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,tE=`
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 1px);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, rgb(255 255 255 / .2)));
  backdrop-filter: var(--media-range-track-backdrop-filter);
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;tb.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      transition: background .15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${tf}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${tf}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${tE} }
    input[type=range]::-moz-range-track { ${tE} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${tE}
    }

    #background,
    #pointer {
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
    }

    #background {
      min-width: 40px;
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;class tg extends G.HTMLElement{constructor(){super(),tc(this,"thumbWidth"),tp(this,rR,void 0),tp(this,rL,()=>{if(this.range.matches(":focus-visible")){let{style:e}=P(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),tp(this,rD,()=>{let{style:e}=P(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tb.content.cloneNode(!0)));let{style:e}=P(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-block))`),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),this.thumbWidth=parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10)}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tm(this,rR))?void 0:a.unassociateElement)||r.call(a,this),tv(this,rR,null)),i&&(tv(this,rR,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tm(this,rR))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?this.range.removeAttribute(e):this.range.setAttribute(e,i))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tv(this,rR,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=tm(this,rR))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",tm(this,rL)),this.shadowRoot.addEventListener("focusout",tm(this,rD))}disconnectedCallback(){var e,t;null==(t=null==(e=tm(this,rR))?void 0:e.unassociateElement)||t.call(e,this),tv(this,rR,null),this.shadowRoot.removeEventListener("focusin",tm(this,rL)),this.shadowRoot.removeEventListener("focusout",tm(this,rD))}updatePointerBar(e){let t=this.range.getBoundingClientRect(),i=(e.clientX-t.left)/t.width;i=Math.max(0,Math.min(1,i));let{style:a}=P(this.shadowRoot,"#pointer");a.setProperty("width",`${i*t.width}px`)}updateBar(){let e=this.getBarColors(),t="linear-gradient(to right, ",i=0;e.forEach(e=>{e[1]<i||(t+=`${e[0]} ${i}%, ${e[0]} ${e[1]}%,`,i=e[1])}),t=t.slice(0,t.length-1)+")";let{style:a}=P(this.shadowRoot,"#range");a.setProperty("--media-range-track-progress-internal",t)}getRelativeValues(){let{range:e}=this;return{relativeValue:e.value-e.min,relativeMax:e.max-e.min}}getBarColors(){let e=this.range,{relativeValue:t,relativeMax:i}=this.getRelativeValues(),a=t/i*100,r=0;if(t&&t<i){let t=this.thumbWidth*(.5-a/100);r=t/e.offsetWidth*100}return[["var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)))",a+r],["var(--media-range-track-color, transparent)",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}rR=new WeakMap,rL=new WeakMap,rD=new WeakMap,G.customElements.get("media-chrome-range")||G.customElements.define("media-chrome-range",tg);var t_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ty=(e,t,i)=>(t_(e,t,"read from private field"),i?i.call(e):t.get(e)),tA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tk=(e,t,i,a)=>(t_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tT=Z.createElement("template");tT.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector),
    media-volume-range,
    ::slotted(media-volume-range) {
      height: var(--_range-auto-size, calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding)));
    }
  </style>

  <slot></slot>
`;class tw extends G.HTMLElement{constructor(){super(),tA(this,rM,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tT.content.cloneNode(!0))),this.shadowRoot.querySelector("slot").addEventListener("slotchange",({target:e})=>{let t=e.assignedElements({flatten:!0}).every(e=>["media-time-range","media-volume-range"].includes(e.nodeName.toLowerCase())),{style:i}=P(this.shadowRoot,":host");i.setProperty("--_range-auto-size",t?"unset":"initial")})}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ty(this,rM))?void 0:a.unassociateElement)||r.call(a,this),tk(this,rM,null)),i&&(tk(this,rM,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ty(this,rM))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tk(this,rM,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ty(this,rM))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ty(this,rM))?void 0:e.unassociateElement)||t.call(e,this),tk(this,rM,null)}}rM=new WeakMap,G.customElements.get("media-control-bar")||G.customElements.define("media-control-bar",tw);var tI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tS=(e,t,i)=>(tI(e,t,"read from private field"),i?i.call(e):t.get(e)),tR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tL=(e,t,i,a)=>(tI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tD=Z.createElement("template");tD.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class tM extends G.HTMLElement{constructor(){super(),tR(this,rC,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tD.content.cloneNode(!0)));let{style:e}=P(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=tS(this,rC))?void 0:a.unassociateElement)||r.call(a,this),tL(this,rC,null)),i&&(tL(this,rC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tS(this,rC))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tL(this,rC,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=tS(this,rC))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=tS(this,rC))?void 0:e.unassociateElement)||t.call(e,this),tL(this,rC,null)}}rC=new WeakMap,G.customElements.get("media-text-display")||G.customElements.define("media-text-display",tM);var tC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tO=(e,t,i)=>(tC(e,t,"read from private field"),i?i.call(e):t.get(e)),tx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tN=(e,t,i,a)=>(tC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);rO=new WeakMap,G.customElements.get("media-duration-display")||G.customElements.define("media-duration-display",class extends tM{constructor(){super(),tx(this,rO,void 0),tN(this,rO,this.shadowRoot.querySelector("slot")),tO(this,rO).textContent=D(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===u.MEDIA_DURATION&&(tO(this,rO).textContent=D(i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return U(this,u.MEDIA_DURATION)}set mediaDuration(e){B(this,u.MEDIA_DURATION,e)}});var tP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tU=(e,t,i)=>(tP(e,t,"read from private field"),i?i.call(e):t.get(e)),tB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tW=(e,t,i,a)=>(tP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tV={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},tq=[...Object.values(tV),u.MEDIA_CURRENT_TIME,u.MEDIA_DURATION,u.MEDIA_SEEKABLE],tH=["Enter"," "],tF="&nbsp;/&nbsp;",tj=(e,{timesSep:t=tF}={})=>{var i,a,r,n;let o=e.hasAttribute(tV.REMAINING),s=e.hasAttribute(tV.SHOW_DURATION),l=null!=(i=e.mediaCurrentTime)?i:0,[,d]=null!=(a=e.mediaSeekable)?a:[],u=null!=(n=null!=(r=e.mediaDuration)?r:d)?n:0,c=o?D(0-(u-l)):D(l);return s?`${c}${t}${D(u)}`:c},t$=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=e.mediaDuration||a;if(null==i||null==r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(tV.REMAINING),o=e.hasAttribute(tV.SHOW_DURATION),s=n?L(0-(r-i)):L(i);if(!o){e.setAttribute("aria-valuetext",s);return}let l=L(r),d=`${s} of ${l}`;e.setAttribute("aria-valuetext",d)};rx=new WeakMap,G.customElements.get("media-time-display")||G.customElements.define("media-time-display",class extends tM{constructor(){super(),tB(this,rx,void 0),tW(this,rx,this.shadowRoot.querySelector("slot")),tU(this,rx).innerHTML=`${tj(this)}`;let{style:e}=P(this.shadowRoot,":host:not([notoggle])");e.setProperty("cursor","pointer");let{style:t}=P(this.shadowRoot,":host(:hover:not([notoggle]))");t.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))")}static get observedAttributes(){return[...super.observedAttributes,...tq,"disabled"]}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E.PLAYBACK_TIME());let e=t=>{let{key:i}=t;if(!tH.includes(i)){this.removeEventListener("keyup",e);return}this.toggleTimeDisplay()};this.addEventListener("keydown",t=>{let{metaKey:i,altKey:a,key:r}=t;if(i||a||!tH.includes(r)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){tq.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return W(this,tV.REMAINING)}set remaining(e){V(this,tV.REMAINING,e)}get showDuration(){return W(this,tV.SHOW_DURATION)}set showDuration(e){V(this,tV.SHOW_DURATION,e)}get noToggle(){return W(this,tV.NO_TOGGLE)}set noToggle(e){V(this,tV.NO_TOGGLE,e)}get mediaDuration(){return U(this,u.MEDIA_DURATION)}set mediaDuration(e){B(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return U(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){B(this,u.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}update(){let e=tj(this);t$(this),e!==tU(this,rx).innerHTML&&(tU(this,rx).innerHTML=e)}});let tK=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tG=Z.createElement("template");tG.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tK}</slot>
    <slot name="off">${tY}</slot>
  </slot>
`;let tZ=e=>{e.setAttribute("aria-checked",eU(e))},tQ=(e,t)=>{let i=e.getAttribute(t);return i?eL(i):[]},tz=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eC(i),r=e.getAttribute(t);r!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-button")||G.customElements.define("media-captions-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:tG,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E.CLOSED_CAPTIONS()),tZ(this)}attributeChangedCallback(e,t,i){e===u.MEDIA_SUBTITLES_SHOWING&&tZ(this),super.attributeChangedCallback(e,t,i)}get mediaSubtitlesList(){return tQ(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tz(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tQ(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tz(this,u.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){eB(this)}});let tX={SEEK_OFFSET:"seekoffset"},tJ=Z.createElement("template");tJ.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`,G.customElements.get("media-seek-forward-button")||G.customElements.define("media-seek-forward-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,tX.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:tJ,...e})}connectedCallback(){this.seekOffset=U(this,tX.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===tX.SEEK_OFFSET&&(this.seekOffset=U(this,tX.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return U(this,tX.SEEK_OFFSET,30)}set seekOffset(e){B(this,tX.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),M(O(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return U(this,u.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){B(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new G.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});let t0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,t1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,t2=Z.createElement("template");t2.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${t0}</slot>
    <slot name="exit">${t1}</slot>
  </slot>
`;let t5=e=>{let t=e.mediaIsFullscreen?g.EXIT_FULLSCREEN():g.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};G.customElements.get("media-fullscreen-button")||G.customElements.define("media-fullscreen-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_FULLSCREEN,u.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:t2,...e})}connectedCallback(){t5(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_FULLSCREEN&&t5(this),super.attributeChangedCallback(e,t,i)}get mediaFullscreenUnavailable(){return q(this,u.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){H(this,u.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return W(this,u.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){V(this,u.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?o.MEDIA_EXIT_FULLSCREEN_REQUEST:o.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}});let{MEDIA_TIME_IS_LIVE:t3,MEDIA_PAUSED:t4}=u,{MEDIA_SEEK_TO_LIVE_REQUEST:t7,MEDIA_PLAY_REQUEST:t8}=o,t6=Z.createElement("template");t6.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${t3}]:not([${t4}])) slot[name=indicator] > *,
  :host([${t3}]:not([${t4}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${t3}]:not([${t4}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let t9=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?g.SEEK_LIVE():g.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};G.customElements.get("media-live-button")||G.customElements.define("media-live-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,t4,t3]}constructor(e={}){super({slotTemplate:t6,...e})}connectedCallback(){t9(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t9(this)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){V(this,u.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return W(this,u.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){V(this,u.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new G.CustomEvent(t7,{composed:!0,bubbles:!0})),this.hasAttribute(t4)&&this.dispatchEvent(new G.CustomEvent(t8,{composed:!0,bubbles:!0})))}});let{MEDIA_VOLUME_LEVEL:ie}=u,it=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,ii=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,ia=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ir=Z.createElement("template");ir.innerHTML=`
  <style>
  
  :host(:not([${ie}])) slot:not([name=high]):not([name=icon]), 
  :host([${ie}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${ie}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${ie}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${ie}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${it}</slot>
    <slot name="low">${ii}</slot>
    <slot name="medium">${ii}</slot>
    <slot name="high">${ia}</slot>
  </slot>
`;let io=e=>{let t="off"===e.mediaVolumeLevel,i=t?g.UNMUTE():g.MUTE();e.setAttribute("aria-label",i)};G.customElements.get("media-mute-button")||G.customElements.define("media-mute-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:ir,...e})}connectedCallback(){io(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_VOLUME_LEVEL&&io(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return q(this,u.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){H(this,u.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?o.MEDIA_UNMUTE_REQUEST:o.MEDIA_MUTE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}});let is=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,il=Z.createElement("template");il.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${is}</slot>
    <slot name="exit">${is}</slot>
  </slot>
`;let id=e=>{let t=e.mediaIsPip?g.EXIT_PIP():g.ENTER_PIP();e.setAttribute("aria-label",t)};G.customElements.get("media-pip-button")||G.customElements.define("media-pip-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_PIP,u.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:il,...e})}connectedCallback(){id(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_PIP&&id(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return q(this,u.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){H(this,u.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return W(this,u.MEDIA_IS_PIP)}set mediaIsPip(e){V(this,u.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?o.MEDIA_EXIT_PIP_REQUEST:o.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}});let iu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,ic=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ih=Z.createElement("template");ih.innerHTML=`
  <style>
  :host([${u.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${u.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${iu}</slot>
    <slot name="pause">${ic}</slot>
  </slot>
`;let im=e=>{let t=e.mediaPaused?g.PLAY():g.PAUSE();e.setAttribute("aria-label",t)};G.customElements.get("media-play-button")||G.customElements.define("media-play-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:ih,...e})}connectedCallback(){im(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_PAUSED&&im(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){V(this,u.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}});var ip=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iv=(e,t,i)=>(ip(e,t,"read from private field"),i?i.call(e):t.get(e)),ib=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let iE={RATES:"rates"},ig=[1,1.25,1.5,1.75,2],i_=Z.createElement("template");i_.innerHTML=`
  <span id="container"></span>
`,rN=new WeakMap,G.customElements.get("media-playback-rate-button")||G.customElements.define("media-playback-rate-button",class extends er{constructor(e={}){super({slotTemplate:i_,...e}),ib(this,rN,new eI(this,iE.RATES,{defaultValue:ig})),this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,iE.RATES]}attributeChangedCallback(e,t,i){if(e===iE.RATES&&(iv(this,rN).value=i),e===u.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",E.PLAYBACK_RATE({playbackRate:t}));return}super.attributeChangedCallback(e,t,i)}get rates(){return iv(this,rN)}set rates(e){e?Array.isArray(e)&&(iv(this,rN).value=e.join(" ")):iv(this,rN).value=""}get mediaPlaybackRate(){return U(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){B(this,u.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new G.CustomEvent(o.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}});let iy={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},iA=Z.createElement("template");iA.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let ik=e=>{e.style.removeProperty("background-image")},iT=(e,t)=>{e.style["background-image"]=`url('${t}')`};class iw extends G.HTMLElement{static get observedAttributes(){return[iy.PLACEHOLDER_SRC,iy.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iA.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===iy.SRC&&(null==i?this.image.removeAttribute(iy.SRC):this.image.setAttribute(iy.SRC,i)),e===iy.PLACEHOLDER_SRC&&(null==i?ik(this.image):iT(this.image,i))}get placeholderSrc(){return q(this,iy.PLACEHOLDER_SRC)}set placeholderSrc(e){H(this,iy.SRC,e)}get src(){return q(this,iy.SRC)}set src(e){H(this,iy.SRC,e)}}G.customElements.get("media-poster-image")||G.customElements.define("media-poster-image",iw);let iI={SEEK_OFFSET:"seekoffset"},iS=Z.createElement("template");iS.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`,G.customElements.get("media-seek-backward-button")||G.customElements.define("media-seek-backward-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,iI.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:iS,...e})}connectedCallback(){this.seekOffset=U(this,iI.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===iI.SEEK_OFFSET&&(this.seekOffset=U(this,iI.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return U(this,iI.SEEK_OFFSET,30)}set seekOffset(e){B(this,iI.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),M(O(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return U(this,u.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){B(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new G.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});var iR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iL=(e,t,i)=>(iR(e,t,"read from private field"),i?i.call(e):t.get(e)),iD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iM=(e,t,i,a)=>(iR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);rP=new WeakMap,G.customElements.get("media-preview-time-display")||G.customElements.define("media-preview-time-display",class extends tM{constructor(){super(),iD(this,rP,void 0),iM(this,rP,this.shadowRoot.querySelector("slot")),iL(this,rP).textContent=D(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){e===u.MEDIA_PREVIEW_TIME&&null!=i&&(iL(this,rP).textContent=D(i)),super.attributeChangedCallback(e,t,i)}get mediaPreviewTime(){return U(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){B(this,u.MEDIA_PREVIEW_TIME,e)}});var iC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iO=(e,t,i)=>(iC(e,t,"read from private field"),i?i.call(e):t.get(e)),ix=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iN=(e,t,i,a)=>(iC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iP=Z.createElement("template");iP.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class iU extends G.HTMLElement{constructor(){super(),ix(this,rU,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iP.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iN(this,rU,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iO(this,rU))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iO(this,rU))?void 0:e.unassociateElement)||t.call(e,this),iN(this,rU,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iO(this,rU))?void 0:a.unassociateElement)||r.call(a,this),iN(this,rU,null)),i&&(iN(this,rU,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iO(this,rU))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return q(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){H(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(u.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(u.MEDIA_PREVIEW_COORDS);return}this.setAttribute(u.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,o=t.split("#")[0],s=getComputedStyle(this),{maxWidth:l,maxHeight:d,minWidth:u,minHeight:c}=s,h=Math.min(parseInt(l)/r,parseInt(d)/n),m=Math.max(parseInt(u)/r,parseInt(c)/n),p=h<1,v=p?h:m>1?m:1,{style:b}=P(this.shadowRoot,":host"),f=P(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),g=p?"min":"max";b.setProperty(`${g}-width`,"initial","important"),b.setProperty(`${g}-height`,"initial","important"),b.width=`${r*v}px`,b.height=`${n*v}px`;let _=()=>{f.width=`${this.imgWidth*v}px`,f.height=`${this.imgHeight*v}px`,f.display="block"};E.src!==o&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,_()},E.src=o,_()),_(),f.transform=`translate(-${i*v}px, -${a*v}px)`}}rU=new WeakMap,G.customElements.get("media-preview-thumbnail")||G.customElements.define("media-preview-thumbnail",iU);var iB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iW=(e,t,i)=>(iB(e,t,"read from private field"),i?i.call(e):t.get(e)),iV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iq=(e,t,i,a)=>(iB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iH=(e,t,i)=>(iB(e,t,"access private method"),i);let iF=e=>{let t=e.range,i=L(+t.value),a=L(+t.max),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},ij=Z.createElement("template");ij.innerHTML=`
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${u.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`,rB=new WeakMap,rW=new WeakMap,rV=new WeakMap,rq=new WeakMap,rH=new WeakMap,rF=new WeakSet,rj=function(){var e;let[,t]=null!=(e=this.mediaSeekable)?e:[];return t},r$=new WeakSet,rK=function(){var e;let[t]=null!=(e=this.mediaSeekable)?e:[];return t},rY=new WeakSet,rG=function(e,t){var i;let a=`${1e4*t}%`,r=e.offsetWidth;if(!r)return a;let n=null!=(i=this.getAttribute("bounds")?N(this,`#${this.getAttribute("bounds")}`):this.parentElement)?i:this,o=this.range.getBoundingClientRect(),s=n.getBoundingClientRect(),l=(iW(this,rq)-(o.left-s.left-r/2))/o.width*100,d=(s.right-o.left-r/2-iW(this,rH))/o.width*100;return Number.isNaN(l)||(a=`max(${100*l}%, ${a})`),Number.isNaN(d)||(a=`min(${a}, ${100*d}%)`),a},rZ=new WeakMap,rQ=new WeakMap,rz=new WeakMap,rX=new WeakMap,rJ=new WeakMap,r0=new WeakMap,r1=new WeakSet,r2=function(){this.addEventListener("pointermove",iW(this,r0),!1)},r5=new WeakSet,r3=function(){var e;null==(e=G.window)||e.removeEventListener("pointermove",iW(this,rz)),this.removeEventListener("pointermove",iW(this,r0)),iq(this,rQ,!1),iW(this,rJ).call(this)},G.customElements.get("media-time-range")||G.customElements.define("media-time-range",class extends tg{constructor(){super(),iV(this,rF),iV(this,r$),iV(this,rY),iV(this,r1),iV(this,r5),iV(this,rB,void 0),iV(this,rW,void 0),iV(this,rV,void 0),iV(this,rq,void 0),iV(this,rH,void 0),iV(this,rZ,e=>{if([...iW(this,rB)].some(t=>e.composedPath().includes(t)))return;this.updatePointerBar(e);let t=this.mediaDuration;if(!t)return;let i=this.range.getBoundingClientRect(),a=(e.clientX-i.left-this.thumbWidth/2)/(i.width-this.thumbWidth);a=Math.max(0,Math.min(1,a));let r=iH(this,rY,rG).call(this,iW(this,rW),a),{style:n}=P(this.shadowRoot,"#preview-rail");n.transform=`translateX(${r})`;let s=a*t,l=new G.CustomEvent(o.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(l)}),iV(this,rQ,!1),iV(this,rz,e=>{var t;(!e.composedPath().includes(this)||[...iW(this,rB)].some(t=>e.composedPath().includes(t)))&&(null==(t=G.window)||t.removeEventListener("pointermove",iW(this,rz)),iq(this,rQ,!1),iW(this,rJ).call(this))}),iV(this,rX,()=>{var e;null==(e=G.window)||e.addEventListener("pointermove",iW(this,rZ),!1)}),iV(this,rJ,()=>{var e;null==(e=G.window)||e.removeEventListener("pointermove",iW(this,rZ));let t=new G.CustomEvent(o.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(t)}),iV(this,r0,()=>{var e;let t=this.getAttribute(u.MEDIA_DURATION);!iW(this,rQ)&&t&&(iq(this,rQ,!0),iW(this,rX).call(this),null==(e=G.window)||e.addEventListener("pointermove",iW(this,rz),!1))}),this.container.appendChild(ij.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);let e=this.range.value,t=new G.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}),this._refreshBar=()=>{let e=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+e*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},iq(this,rB,this.shadowRoot.querySelectorAll('[part~="box"]')),iq(this,rW,this.shadowRoot.querySelector('[part~="preview-box"]')),iq(this,rV,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);iq(this,rq,parseInt(e.getPropertyValue("--media-box-padding-left"))),iq(this,rH,parseInt(e.getPropertyValue("--media-box-padding-right"))),iH(this,r1,r2).call(this)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_DURATION,u.MEDIA_SEEKABLE,u.MEDIA_CURRENT_TIME,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_TIME,u.MEDIA_BUFFERED,u.MEDIA_PLAYBACK_RATE,u.MEDIA_LOADING,u.MEDIA_ENDED]}connectedCallback(){this.range.setAttribute("aria-label",E.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,t,i){var a,r,n,o,s;e!==u.MEDIA_CURRENT_TIME&&e!==u.MEDIA_PAUSED&&e!==u.MEDIA_ENDED&&e!==u.MEDIA_LOADING||(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,iF(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),this.mediaPaused||this.mediaLoading||(this._refreshId=requestAnimationFrame(this._refreshBar))),e===u.MEDIA_DURATION&&(this.range.max=null!=(r=null!=(a=iW(this,rF,rj))?a:this.mediaDuration)?r:1e3,iF(this),this.updateBar(),this.updateCurrentBox()),e===u.MEDIA_SEEKABLE&&(this.range.min=null!=(n=iW(this,r$,rK))?n:0,this.range.max=null!=(s=null!=(o=iW(this,rF,rj))?o:this.mediaDuration)?s:1e3,iF(this),this.updateBar()),e===u.MEDIA_BUFFERED&&this.updateBar(),"disabled"===e&&(null==i?iH(this,r1,r2).call(this):iH(this,r5,r3).call(this)),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){V(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return W(this,u.MEDIA_LOADING)}set mediaLoading(e){V(this,u.MEDIA_LOADING,e)}get mediaDuration(){return U(this,u.MEDIA_DURATION)}set mediaDuration(e){B(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return U(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){B(this,u.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return U(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){B(this,u.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(u.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(u.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(u.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}get mediaPreviewImage(){return q(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){H(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return U(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){B(this,u.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return W(this,u.MEDIA_ENDED)}set mediaEnded(e){V(this,u.MEDIA_ENDED,e)}getRelativeValues(){let e=super.getRelativeValues();return this.mediaEnded?{...e,relativeValue:e.relativeMax}:e}getBarColors(){var e;let t;let i=super.getBarColors(),{range:a}=this,r=a.max-a.min,n=this.mediaBuffered;if(!n.length||!Number.isFinite(r)||r<=0)return i;if(this.mediaEnded)t=r;else{let i=this.mediaCurrentTime,[,r=a.min]=null!=(e=n.find(([e,t])=>e<=i&&i<=t))?e:[];t=r-a.min}let o=t/r*100;return i.splice(1,0,["var(--media-time-range-buffered-color, rgb(255 255 255 / .4))",o]),i}updateCurrentBox(){if(!iW(this,rV).assignedElements().length)return;let e=this.range.value/(this.range.max-this.range.min),t=iH(this,rY,rG).call(this,iW(this,rV),e),{style:i}=P(this.shadowRoot,"#current-rail");i.transform=`translateX(${t})`}});var i$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iK=(e,t,i)=>(i$(e,t,"read from private field"),i?i.call(e):t.get(e)),iY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iG=(e,t,i,a)=>(i$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iZ={LOADING_DELAY:"loadingdelay"},iQ=Z.createElement("template"),iz=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;iQ.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${iz}</slot>
<div id="status" role="status" aria-live="polite">${E.MEDIA_LOADING()}</div>
`;class iX extends G.HTMLElement{constructor(){if(super(),iY(this,r4,void 0),iY(this,r7,500),iY(this,r8,void 0),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=iQ.content.cloneNode(!0);e.appendChild(t)}let{style:e}=P(this.shadowRoot,":host");iG(this,r8,e)}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PAUSED,u.MEDIA_LOADING,iZ.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===iZ.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iK(this,r4))?void 0:a.unassociateElement)||r.call(a,this),iG(this,r4,null)),i&&(iG(this,r4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iK(this,r4))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iG(this,r4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iK(this,r4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iK(this,r4))?void 0:e.unassociateElement)||t.call(e,this),iG(this,r4,null)}get loadingDelay(){return iK(this,r7)}set loadingDelay(e){iG(this,r7,e),iK(this,r8).setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){V(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return W(this,u.MEDIA_LOADING)}set mediaLoading(e){V(this,u.MEDIA_LOADING,e)}}r4=new WeakMap,r7=new WeakMap,r8=new WeakMap,G.customElements.get("media-loading-indicator")||G.customElements.define("media-loading-indicator",iX);let iJ=e=>e.mediaMuted?0:Math.round(e.mediaVolume*e.range.max),i0=({value:e,max:t})=>`${Math.round(e/t*100)}%`;G.customElements.get("media-volume-range")||G.customElements.define("media-volume-range",class extends tg{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME,u.MEDIA_MUTED,u.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=100,this.range.addEventListener("input",()=>{let e=this.range.value/this.range.max,t=new G.CustomEvent(o.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){this.range.setAttribute("aria-label",E.VOLUME()),super.connectedCallback()}attributeChangedCallback(e,t,i){if(e===u.MEDIA_VOLUME||e===u.MEDIA_MUTED){let e=iJ(this);this.range.value=e,this.range.setAttribute("aria-valuetext",i0(this.range)),this.updateBar()}super.attributeChangedCallback(e,t,i)}get mediaVolume(){return U(this,u.MEDIA_VOLUME,1)}set mediaVolume(e){B(this,u.MEDIA_VOLUME,e)}get mediaMuted(){return W(this,u.MEDIA_MUTED)}set mediaMuted(e){V(this,u.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return q(this,u.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){H(this,u.MEDIA_VOLUME_UNAVAILABLE,e)}});var i1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i2=(e,t,i)=>(i1(e,t,"read from private field"),i?i.call(e):t.get(e)),i5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i3=(e,t,i,a)=>(i1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i4=(e,t,i)=>(i1(e,t,"access private method"),i);let i7=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function i8(e,t,i){let a=Z.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=Z.createElement("span");return r.textContent=e,a.append(r),a}function i6(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let i9=Z.createElement("template");i9.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-block;
    padding-block: .5em;
  }

  ::slotted([slot="header"]) {
    padding: 0 1.4em .4em;
    margin-bottom: .5em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${i7}</slot>
`;class ae extends G.HTMLElement{constructor(e={}){super(),i5(this,na),i5(this,ns),i5(this,nd),i5(this,nc),i5(this,nm),i5(this,r6,void 0),i5(this,r9,""),i5(this,ne,null),i5(this,nt,!1),i5(this,ni,e=>{this.handleClick(e)}),i5(this,nn,e=>{let{key:t}=e;if("Escape"===t){this.removeEventListener("keyup",i2(this,nn));return}if("Meta"===t){i3(this,nt,!1);return}i4(this,na,nr).call(this,e)}),i5(this,no,e=>{let{key:t,altKey:i}=e;if(i){this.removeEventListener("keyup",i2(this,nn));return}if("Meta"===t){i3(this,nt,!0);return}if(this.keysUsed.includes(t)&&e.preventDefault(),i2(this,nt)&&this.keysUsed.includes(t)){i4(this,na,nr).call(this,e);return}this.addEventListener("keyup",i2(this,nn),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=i9.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&i4(this,nd,nu).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",i2(this,ni)),this.addEventListener("keydown",i2(this,no))}disable(){this.removeEventListener("click",i2(this,ni)),this.removeEventListener("keyup",i2(this,nn))}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=i2(this,r6))?void 0:a.unassociateElement)||r.call(a,this),i3(this,r6,null)),i&&(i3(this,r6,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=i2(this,r6))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(i3(this,r6,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=i2(this,r6))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=i2(this,r6))?void 0:e.unassociateElement)||t.call(e,this),i3(this,r6,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=i4(this,ns,nl).call(this,e);i&&i4(this,nd,nu).call(this,i,t)}handleMovement(e){let t;let{key:i}=e,a=this.options,r=i4(this,ns,nl).call(this,e);switch(r||(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=i4(this,nc,nh).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=i4(this,ns,nl).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}r6=new WeakMap,r9=new WeakMap,ne=new WeakMap,nt=new WeakMap,ni=new WeakMap,na=new WeakSet,nr=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},nn=new WeakMap,no=new WeakMap,ns=new WeakSet,nl=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},nd=new WeakSet,nu=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change"))},nc=new WeakSet,nh=function(e){i4(this,nm,np).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));i3(this,r9,i2(this,r9)+e);let a=i2(this,r9).split("").every(t=>t===e),r=t.slice(i+(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(i2(this,r9))),n=t.slice(0,i-(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(i2(this,r9))),o=[],s=[];a&&(o=t.slice(i+(a?1:0)).filter(t=>t.textContent.startsWith(e)),s=t.slice(0,i-(a?1:0)).filter(t=>t.textContent.startsWith(e)));let l=[...r,...n,...o,...s];return l[0]},nm=new WeakSet,np=function(){clearTimeout(i2(this,ne)),i3(this,ne,null),i3(this,ne,setTimeout(()=>{i3(this,r9,""),i3(this,ne,null)},500))},G.customElements.get("media-chrome-listbox")||G.customElements.define("media-chrome-listbox",ae);var at=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ai=(e,t,i)=>(at(e,t,"read from private field"),i?i.call(e):t.get(e)),aa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ar=(e,t,i,a)=>(at(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),an=(e,t,i)=>(at(e,t,"access private method"),i);let ao=Z.createElement("template");ao.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    min-height: 1.2em;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let as={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class al extends G.HTMLElement{constructor(){super(),aa(this,nf),aa(this,nv,!1),aa(this,nb,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ao.content.cloneNode(!0)))}static get observedAttributes(){return[as.DISABLED,as.SELECTED,as.VALUE]}get value(){var e;return null!=(e=this.getAttribute(as.VALUE))?e:this.text}set value(e){this.setAttribute(as.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){ar(this,nv,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==as.SELECTED||ai(this,nv)?e===as.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(as.DISABLED)||this.enable(),this.setAttribute("role","option"),ar(this,nb,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),an(this,nf,nE).call(this)}disconnectedCallback(){this.disable(),an(this,nf,nE).call(this),ar(this,nb,null)}handleClick(){}}nv=new WeakMap,nb=new WeakMap,nf=new WeakSet,nE=function(){var e;let t=null==(e=ai(this,nb))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==ai(this,nb).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},G.customElements.get("media-chrome-option")||G.customElements.define("media-chrome-option",al);var ad=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},au=(e,t,i)=>(ad(e,t,"read from private field"),i?i.call(e):t.get(e)),ac=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ah=(e,t,i,a)=>(ad(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),am=(e,t,i)=>(ad(e,t,"access private method"),i);let ap=Z.createElement("template");ap.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name="listbox"]::slotted(*),
  [part=listbox] {
    position: absolute;
    left: 0;
    bottom: 100%;
    max-height: 300px;
    overflow: hidden auto;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name="listbox"][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name="listbox"][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class av extends G.HTMLElement{constructor(){var e;super(),ac(this,nM),ac(this,nO),ac(this,nN),ac(this,nU),ac(this,nW),ac(this,ng,void 0),ac(this,n_,void 0),ac(this,ny,void 0),ac(this,nA,!0),ac(this,nk,void 0),ac(this,nT,void 0),ac(this,nw,void 0),ac(this,nI,void 0),ac(this,nS,!1),ac(this,nR,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",au(this,nR));return}let i=e.composedPath().includes(au(this,nk));i&&("Enter"===t||" "===t)?au(this,n_).call(this):"Escape"!==t||au(this,nI).hidden||am(this,nN,nP).call(this)}),ac(this,nL,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",au(this,nR));return}e.preventDefault(),this.addEventListener("keyup",au(this,nR),{once:!0})}),ac(this,nD,e=>{e.composedPath().includes(this)||au(this,nI).hidden||am(this,nN,nP).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ap.content.cloneNode(!0)));let{style:t}=P(this.shadowRoot,":host");t.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ah(this,n_,am(this,nM,nC).bind(this)),ah(this,ny,am(this,nO,nx).bind(this)),null==(e=this.init)||e.call(this),ah(this,nk,this.shadowRoot.querySelector("[part=button]")),ah(this,nw,this.shadowRoot.querySelector("[part=listbox]")),ah(this,nT,this.shadowRoot.querySelector("slot[name=button]")),au(this,nT).addEventListener("slotchange",()=>{let e=au(this,nT).assignedElements()[0];e&&(this.disable(),ah(this,nk,e),au(this,nk).preventClick=!0,au(this,nk).hasAttribute("disabled")&&ah(this,nA,!1),au(this,nA)?(this.enable(),au(this,nk).setAttribute("aria-haspopup","listbox")):this.disable())}),ah(this,nI,this.shadowRoot.querySelector("slot[name=listbox]")),au(this,nI).addEventListener("slotchange",()=>{this.disable(),ah(this,nw,au(this,nI).assignedElements()[0]||au(this,nw)),this.enable()})}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){au(this,nk).removeAttribute("disabled"),au(this,nk).addEventListener("click",au(this,n_)),au(this,nk).addEventListener("keydown",au(this,nL)),au(this,nw).addEventListener("keydown",au(this,nL)),am(this,nW,nV).call(this),au(this,nw).addEventListener("change",au(this,ny)),Z.addEventListener("click",au(this,nD))}disable(){au(this,nk).setAttribute("disabled",""),au(this,nk).removeEventListener("click",au(this,n_)),au(this,nk).removeEventListener("keydown",au(this,nL)),au(this,nk).removeEventListener("keyup",au(this,nR)),au(this,nw).removeEventListener("keydown",au(this,nL)),au(this,nw).removeEventListener("keyup",au(this,nR)),au(this,nw).addEventListener("change",au(this,ny)),Z.removeEventListener("click",au(this,nD))}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=au(this,ng))?void 0:a.unassociateElement)||r.call(a,this),ah(this,ng,null),au(this,nw).removeAttribute(s.MEDIA_CONTROLLER)),i&&(ah(this,ng,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=au(this,ng))?void 0:o.associateElement)||l.call(o,this),au(this,nw).setAttribute(s.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?(ah(this,nA,!0),this.enable()):(ah(this,nA,!1),this.disable()))}connectedCallback(){var e,t,i;this.hasAttribute("disabled")||this.enable();let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(ah(this,ng,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=au(this,ng))?void 0:t.associateElement)||i.call(t,this),au(this,nw).setAttribute(s.MEDIA_CONTROLLER,a))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=au(this,ng))?void 0:e.unassociateElement)||t.call(e,this),ah(this,ng,null),au(this,nw).removeAttribute(s.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}ng=new WeakMap,n_=new WeakMap,ny=new WeakMap,nA=new WeakMap,nk=new WeakMap,nT=new WeakMap,nw=new WeakMap,nI=new WeakMap,nS=new WeakMap,nR=new WeakMap,nL=new WeakMap,nD=new WeakMap,nM=new WeakSet,nC=function(){am(this,nN,nP).call(this)},nO=new WeakSet,nx=function(){am(this,nN,nP).call(this,!0)},nN=new WeakSet,nP=function(e){au(this,nI).hidden=!au(this,nI).hidden||e,am(this,nW,nV).call(this,e),au(this,nI).hidden?(this.shadowRoot.activeElement===au(this,nw)||au(this,nw).contains(this.shadowRoot.activeElement))&&au(this,nk).focus():(au(this,nw).focus(),am(this,nU,nB).call(this))},nU=new WeakSet,nB=function(){var e;if(0===au(this,nw).offsetWidth)return;let t=au(this,nk).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||au(this,nk).hasAttribute("mediacontroller")||au(this,nw).hasAttribute("mediacontroller")){au(this,nw).style.zIndex="1",au(this,nw).style.bottom="unset",au(this,nw).style.top=t.height+"px";return}let i=null!=(e=this.getAttribute("bounds")?N(this,`#${this.getAttribute("bounds")}`):this.parentElement)?e:this,a=au(this,nw).offsetWidth,r=i.getBoundingClientRect(),n=-Math.max(t.x+a-r.right,0);au(this,nw).style.left=`${n}px`},nW=new WeakSet,nV=function(e=!1){ah(this,nS,!au(this,nS)||e),au(this,nk).setAttribute("aria-expanded",au(this,nS))},G.customElements.get("media-chrome-selectmenu")||G.customElements.define("media-chrome-selectmenu",av);var ab=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},af=(e,t,i)=>(ab(e,t,"read from private field"),i?i.call(e):t.get(e)),aE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ag=(e,t,i,a)=>(ab(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a_=(e,t,i)=>(ab(e,t,"access private method"),i);let ay=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,aA=Z.createElement("template");aA.innerHTML=`
  <slot name="captions-indicator" hidden>${ay}</slot>
`,nq=new WeakMap,nH=new WeakSet,nF=function(){var e;if(af(this,nq)===JSON.stringify(this.mediaSubtitlesList))return;ag(this,nq,JSON.stringify(this.mediaSubtitlesList));let t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.value,a=i8(this.formatOptionText("Off"),"off",i);a.prepend(i6(this,"select-indicator")),t.append(a);let r=this.mediaSubtitlesList;for(let i of r){let a=i8(this.formatOptionText(i.label,i),eM(i),this.value==eM(i));a.prepend(i6(this,"select-indicator"));let r=null!=(e=i.kind)?e:"subs";"captions"===r&&a.append(i6(this,"captions-indicator")),t.append(a)}},nj=new WeakSet,n$=function(){if(eB(this,!1),!this.value)return;let e=new G.CustomEvent(o.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};let ak=(e,t)=>{let i=e.getAttribute(t);return i?eL(i):[]},aT=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eC(i),r=e.getAttribute(t);r!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-listbox")||G.customElements.define("media-captions-listbox",class extends ae{constructor(){super({slotTemplate:aA}),aE(this,nH),aE(this,nj),aE(this,nq,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===u.MEDIA_SUBTITLES_LIST&&t!==i?a_(this,nH,nF).call(this):e===u.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTrack API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",a_(this,nj,n$))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",a_(this,nj,n$))}get mediaSubtitlesList(){return ak(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aT(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ak(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aT(this,u.MEDIA_SUBTITLES_SHOWING,e)}}),G.customElements.get("media-captions-selectmenu")||G.customElements.define("media-captions-selectmenu",class extends av{init(){let e=Z.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=Z.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aI=(e,t,i)=>(aw(e,t,"read from private field"),i?i.call(e):t.get(e)),aS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aR=(e,t,i)=>(aw(e,t,"access private method"),i);let aL={RATES:"rates"};nK=new WeakMap,nY=new WeakSet,nG=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=i8(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(i6(this,"select-indicator")),e.append(i)}},nZ=new WeakSet,nQ=function(){if(!this.value)return;let e=new G.CustomEvent(o.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-playback-rate-listbox")||G.customElements.define("media-playback-rate-listbox",class extends ae{constructor(){super(),aS(this,nY),aS(this,nZ),aS(this,nK,new eI(this,aL.RATES,{defaultValue:ig})),aR(this,nY,nG).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",u.MEDIA_PLAYBACK_RATE,aL.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===u.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===aL.RATES&&t!=i&&(aI(this,nK).value=i,aR(this,nY,nG).call(this))}get rates(){return aI(this,nK)}set rates(e){e?Array.isArray(e)&&(aI(this,nK).value=e.join(" ")):aI(this,nK).value="",aR(this,nY,nG).call(this)}get mediaPlaybackRate(){return U(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){B(this,u.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aR(this,nZ,nQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aR(this,nZ,nQ))}}),G.customElements.get("media-playback-rate-selectmenu")||G.customElements.define("media-playback-rate-selectmenu",class extends av{init(){let e=Z.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=Z.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aM=(e,t,i)=>(aD(e,t,"read from private field"),i?i.call(e):t.get(e)),aC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aO=(e,t,i,a)=>(aD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ax=(e,t,i)=>(aD(e,t,"access private method"),i);nz=new WeakMap,nX=new WeakMap,nJ=new WeakSet,n0=function(){if(aM(this,nX)===JSON.stringify(this.mediaRenditionList))return;aO(this,nX,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),r=i8(e,`${a.id}`,a.selected&&!i);r.prepend(i6(this,"select-indicator")),t.append(r)}let a=i8(this.formatOptionText("Auto"),"auto",i);a.prepend(i6(this,"select-indicator")),t.append(a)},n1=new WeakSet,n2=function(){if(null==this.value)return;let e=new G.CustomEvent(o.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-rendition-listbox")||G.customElements.define("media-rendition-listbox",class extends ae{constructor(){super(...arguments),aC(this,nJ),aC(this,n1),aC(this,nz,[]),aC(this,nX,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_LIST,u.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===u.MEDIA_RENDITION_SELECTED&&t!==i)?this.value=null!=i?i:"auto":e===u.MEDIA_RENDITION_LIST&&t!==i&&(aO(this,nz,null==i?void 0:i.split(/\s+/).map(y)),ax(this,nJ,n0).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ax(this,n1,n2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ax(this,n1,n2))}get mediaRenditionList(){return aM(this,nz)}set mediaRenditionList(e){aO(this,nz,e),ax(this,nJ,n0).call(this)}get mediaRenditionSelected(){return q(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){H(this,u.MEDIA_RENDITION_SELECTED,e)}});let aN=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,aP=Z.createElement("template");aP.innerHTML=`
  <slot name="icon">${aN}</slot>
`,G.customElements.get("media-rendition-button")||G.customElements.define("media-rendition-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:aP})}get mediaRenditionSelected(){return q(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){H(this,u.MEDIA_RENDITION_SELECTED,e)}}),G.customElements.get("media-rendition-selectmenu")||G.customElements.define("media-rendition-selectmenu",class extends av{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=Z.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=Z.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aB=(e,t,i)=>(aU(e,t,"read from private field"),i?i.call(e):t.get(e)),aW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aV=(e,t,i,a)=>(aU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aq=(e,t,i)=>(aU(e,t,"access private method"),i);n5=new WeakMap,n3=new WeakMap,n4=new WeakSet,n7=function(){if(aB(this,n3)===JSON.stringify(this.mediaAudioTrackList))return;aV(this,n3,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=this.formatOptionText(i.label,i),a=i8(e,`${i.id}`,i.enabled);a.prepend(i6(this,"select-indicator")),t.append(a)}},n8=new WeakSet,n6=function(){if(null==this.value)return;let e=new G.CustomEvent(o.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-audio-track-listbox")||G.customElements.define("media-audio-track-listbox",class extends ae{constructor(){super(...arguments),aW(this,n4),aW(this,n8),aW(this,n5,[]),aW(this,n3,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===u.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)?this.value=i:e===u.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(aV(this,n5,null==i?void 0:i.split(/\s+/).map(k)),aq(this,n4,n7).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aq(this,n8,n6))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aq(this,n8,n6))}get mediaAudioTrackList(){return aB(this,n5)}set mediaAudioTrackList(e){aV(this,n5,e),aq(this,n4,n7).call(this)}get mediaAudioTrackEnabled(){return q(this,u.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){H(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}});let aH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,aF=Z.createElement("template");aF.innerHTML=`
  <slot name="icon">${aH}</slot>
`,G.customElements.get("media-audio-track-button")||G.customElements.define("media-audio-track-button",class extends er{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:aF})}get mediaAudioTrackEnabled(){return q(this,u.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){H(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}}),G.customElements.get("media-audio-track-selectmenu")||G.customElements.define("media-audio-track-selectmenu",class extends av{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=Z.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=Z.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aj=i(87545),a$=i(52513).Z,aK=class extends Error{constructor(e,t=aK.MEDIA_ERR_CUSTOM,i,a){var r;super(e),this.name="MediaError",this.code=t,this.context=a,this.fatal=null!=i?i:t>=aK.MEDIA_ERR_NETWORK&&t<=aK.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(r=aK.defaultMessages[this.code])?r:"")}};aK.MEDIA_ERR_ABORTED=1,aK.MEDIA_ERR_NETWORK=2,aK.MEDIA_ERR_DECODE=3,aK.MEDIA_ERR_SRC_NOT_SUPPORTED=4,aK.MEDIA_ERR_ENCRYPTED=5,aK.MEDIA_ERR_CUSTOM=100,aK.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var aY=e=>null==e,aG=(e,t)=>!aY(t)&&e in t,aZ={ANY:"any",MUTED:"muted"},aQ={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},az={MSE:"mse",NATIVE:"native"},aX={HEADER:"header",QUERY:"query",NONE:"none"},aJ=Object.values(aX),a0={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},a1={HLS:a0.M3U8};Object.keys(a1),[...Object.values(a0)];var a2=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},a5=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},a3=e=>{let t=e.type;if(t){let e=t.toUpperCase();return aG(e,a1)?a1[e]:t}let{src:i}=e;return i?a8(i):""},a4=e=>"VOD"===e?aQ.ON_DEMAND:aQ.LIVE,a7=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,a8=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return aG(a,a0)?a0[a]:""},a6=Object.values(aZ),a9=e=>"boolean"==typeof e||"string"==typeof e&&a6.includes(e),re=({autoplay:e},t,i)=>{let a=!1,r=!1,n=a9(e)?e:!!e,o=()=>{a||a2(t,"playing",()=>{a=!0},{once:!0})};if(o(),a2(t,"loadstart",()=>{a=!1,o(),rt(t,n)},{once:!0}),a2(t,"loadstart",()=>{i||(r=!Number.isFinite(t.duration)),rt(t,n)},{once:!0}),i&&i.once(a$.Events.LEVEL_LOADED,(e,t)=>{var i;r=null!=(i=t.details.live)&&i}),!n){let e=()=>{!r||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&a2(t,"play",()=>{"metadata"===t.preload?i.once(a$.Events.LEVEL_UPDATED,e):e()},{once:!0})}return e=>{a||rt(t,n=a9(e)?e:!!e)}},rt=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case aZ.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case aZ.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},ri=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,o=!1,s=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;o||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=s,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return a2(i,"play",()=>{o=!0,a.config.maxBufferLength=s,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d};function ra(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}var rr="cuepoints",rn=Object.freeze({label:rr}),ro=(e,{label:t=rr}=rn)=>{var i;return null==(i=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&"metadata"===e.track.kind))?void 0:i.track};async function rs(e,t,i=rn){let a=ro(e,i);if(!a){let{label:t=rr}=i;(a=ra(e,"metadata",t)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))}return"hidden"!==a.mode&&(a.mode="hidden"),[...t].sort(({time:e},{time:t})=>t-e).forEach(({time:t,value:i})=>{var r,n;let o=Array.prototype.findIndex.call(null==a?void 0:a.cues,e=>e.startTime>=t),s=null==(r=null==a?void 0:a.cues)?void 0:r[o],l=s?s.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,d=null==(n=null==a?void 0:a.cues)?void 0:n[o-1];d&&(d.endTime=t);let u=new VTTCue(t,l,JSON.stringify(null!=i?i:null));a.addCue(u)}),a}var rl=e=>({time:e.startTime,value:JSON.parse(e.text)});function rd(e,t={label:rr}){var i,a;let r=ro(e,t);if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;let{currentTime:n}=e;return rl(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n))}async function ru(e,t=rn){return new Promise(i=>{a2(e,"loadstart",async()=>{let a=await rs(e,[],t);a2(e,"cuechange",()=>{let t=rd(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var rc,rh,rm,rp,rv,rb,rf,rE,rg,r_,ry,rA,rk,rT,rw,rI,rS,rR,rL,rD,rM,rC,rO,rx,rN,rP,rU,rB,rW,rV,rq,rH,rF,rj,r$,rK,rY,rG,rZ,rQ,rz,rX,rJ,r0,r1,r2,r5,r3,r4,r7,r8,r6,r9,ne,nt,ni,na,nr,nn,no,ns,nl,nd,nu,nc,nh,nm,np,nv,nb,nf,nE,ng,n_,ny,nA,nk,nT,nw,nI,nS,nR,nL,nD,nM,nC,nO,nx,nN,nP,nU,nB,nW,nV,nq,nH,nF,nj,n$,nK,nY,nG,nZ,nQ,nz,nX,nJ,n0,n1,n2,n5,n3,n4,n7,n8,n6,n9,oe,ot,oi=async e=>fetch(e).then(e=>e.text()).then(e=>{let t=e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(e=>e.text()).then(e=>e.split(`
`))}),oa=e=>{var t,i;let a=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),r=a4(a),n=a7(a),o;if(r===aQ.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));o=t?2*+t.split(":")[1].split("=")[1]:3*+e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")).split(":")[1]}return{streamType:r,targetLiveWindow:n,liveEdgeStartOffset:o}},or=async(e,t)=>t===a0.MP4?{streamType:aQ.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===a0.M3U8?oa(await oi(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),on=async(e,t,i=a3({src:e}))=>{var a,r,n;let{streamType:o,targetLiveWindow:s,liveEdgeStartOffset:l}=await or(e,i);(null!=(a=od.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=od.get(t))?r:{}).targetLiveWindow=s,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=od.get(t))?n:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},oo=e=>{var t;let i=e.type,a=a4(i),r=a7(i),n,o=!!(null!=(t=e.partList)&&t.length);return a===aQ.LIVE&&(n=o?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:o}},os=(e,t,i)=>{var a,r,n,o,s,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=oo(e);if(c===aQ.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(o=i.userConfig.backBufferLength)?o:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(s=od.get(t))?s:{}).seekable=e}(null!=(l=od.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=od.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=od.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ol=-1!==(null!=(oe=null==(n9=null==globalThis?void 0:globalThis.navigator)?void 0:n9.userAgent)?oe:"").toLowerCase().indexOf("android"),od=new WeakMap,ou="mux.com",oc=null==(ot=a$.isSupported)?void 0:ot.call(a$),oh=()=>aj.utils.now(),om=aj.utils.generateUUID,op=(e,{domain:t=ou,maxResolution:i=""}={})=>{if(!e)return;let[a,r=""]=a5(e),n=new URL(`https://stream.${t}/${a}.m3u8${r}`);return i&&n.searchParams.set("max_resolution",i),n.toString()},ov=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},ob=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},of=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:oC(e)&&null!=(a=null!=(i=ov(e.playbackId))?i:ob(e.src))?a:e.src},oE=e=>{var t;return null==(t=od.get(e))?void 0:t.error},og=e=>{var t,i;return null!=(i=null==(t=od.get(e))?void 0:t.streamType)?i:aQ.UNKNOWN},o_=e=>{var t,i;return null!=(i=null==(t=od.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},oy=e=>{var t,i;return null!=(i=null==(t=od.get(e))?void 0:t.seekable)?i:e.seekable},oA=e=>{var t;let i=null==(t=od.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=oy(e);return a.length?a.end(a.length-1)-i:Number.NaN},ok=(e,t,i=.001)=>Math.abs(e-t)<=i,oT=(e,t,i=.001)=>e>t||ok(e,t,i),ow=e=>e.paused&&oT(e.currentTime,e.duration),oI=(e,t)=>e.loop||t?e.ended:e.ended||ow(e),oS=(e,t,i)=>{oR(t,i);let{metadata:a={}}=e,{view_session_id:r=om()}=a,n=of(e);a.view_session_id=r,a.video_id=n,e.metadata=a,od.set(t,{});let o=oD(e,t);oO(e,t,o),ox(e,t,o),ru(t);let s=re(e,t,o),l=ri(e,t,o);return{engine:o,setAutoplay:s,setPreload:l}},oR=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),(null==e?void 0:e.mux)&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",oP),e.removeEventListener("error",oU),e.removeEventListener("durationchange",oN),od.delete(e),e.dispatchEvent(new Event("teardown")))};function oL(e,t){var i;let a=a3(e);if(a!==a0.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,o=n===az.MSE,s=n===az.NATIVE;return r&&(s||!(oc&&(o||ol)))}var oD=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:o}=e,s=a3(e)===a0.M3U8,l=oL(e,t);if(s&&!l&&oc){let e=oM(a),t=o!==aX.NONE?{useHeaders:o===aX.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0;return new a$({debug:i,startPosition:r,cmcd:t,backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...e})}},oM=e=>e===aQ.LIVE?{backBufferLength:8}:{},oC=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=null==window?void 0:window.location.href,r=new URL(t,a).hostname.toLocaleLowerCase();return r.includes(ou)||!!i&&r.includes(i.toLocaleLowerCase())},oO=(e,t,i)=>{var a;let{envKey:r}=e,n=oC(e);if(r||n){let{playerInitTime:n,playerSoftwareName:o,playerSoftwareVersion:s,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};aj.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?a$:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:o,player_software:o,player_software_version:s,player_init_time:n,...c}})}},ox=(e,t,i)=>{var a;let r=oL(e,t),{src:n}=e;if(t&&r){let i=a3(e);"string"==typeof n?("none"===t.preload?a2(t,"loadstart",()=>on(n,t,i)):on(n,t,i),t.setAttribute("src",n),e.startTime&&((null!=(a=od.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",oN,{once:!0}))):t.removeAttribute("src"),t.addEventListener("error",oP),t.addEventListener("error",oU),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0});let r=()=>{t.ended||!oI(t)||t.dispatchEvent(new Event("ended"))};a2(t,"pause",r),a2(t,"seeked",r),a2(t,"play",()=>{t.ended||!oT(t.currentTime,t.duration)||(t.currentTime=t.seekable.start(0))})}else i&&n?(i.once(a$.Events.LEVEL_LOADED,(e,a)=>{os(a.details,t,i)}),i.on(a$.Events.ERROR,(e,i)=>{let a={[a$.ErrorTypes.NETWORK_ERROR]:aK.MEDIA_ERR_NETWORK,[a$.ErrorTypes.MEDIA_ERROR]:aK.MEDIA_ERR_DECODE},r=new aK("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",oU),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(a$.Events.MANIFEST_PARSED,function(t,i){s();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(a$.Events.AUDIO_TRACKS_UPDATED,function(t,i){if(o(),!(i.audioTracks.length<=1))for(let t of i.audioTracks){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{t.audioTrack=[...e.audioTracks].find(e=>e.enabled).id}),t.on(a$.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let o=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!o.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(a$.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(a$.Events.BUFFER_FLUSHING,n),r||t.trigger(a$.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},o=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{n(),o()};t.once(a$.Events.DESTROYING,s)}(e,i),function(e,t){t.on(a$.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);ra(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(a$.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(a$.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(a$.Events.MANIFEST_LOADED,a),t.once(a$.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function oN(e){var t;let i=e.target,a=null==(t=od.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function oP(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new aK(i,a);if(t.src&&(a!==aK.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function oU(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof aK))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=od.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var oB=Object.defineProperty,oW=(e,t,i)=>t in e?oB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,oV=(e,t,i)=>(oW(e,"symbol"!=typeof t?t+"":t,i),i),oq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oH=(e,t,i)=>(oq(e,t,"read from private field"),i?i.call(e):t.get(e)),oF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oj=(e,t,i,a)=>(oq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o$=(e,t,i)=>(oq(e,t,"access private method"),i),oK=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends oK{});var oY,oG=class extends oK{},oZ=class{constructor(e,t={}){oF(this,oY,void 0),oj(this,oY,null==t?void 0:t.detail)}get detail(){return oH(this,oY)}initCustomEvent(){}};oY=new WeakMap;var oQ={document:{createElement:function(e,t){return new oG}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(oG)},CustomEvent:oZ,EventTarget:oK,HTMLElement:oG,HTMLVideoElement:class extends oK{}},oz="undefined"==typeof window||void 0===globalThis.customElements,oX=oz?oQ:globalThis;oz&&oQ.document;var oJ=(()=>{try{return"0.16.4"}catch{}return"UNKNOWN"})(),o0=e=>{var t,i,a,r,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,_,y,A,k,T,w,I,S,R,L,D,M,C,O,x,N,P,U,B,W,V;return t=class extends e{constructor(){super(),oF(this,S),oF(this,L),oF(this,M),oF(this,O),oF(this,N),oF(this,U),oF(this,W),oV(this,"castEnabled",!1),oF(this,y,{paused:!1}),oF(this,A,void 0),oF(this,k,{}),oF(this,T,void 0),oF(this,w,void 0),oF(this,I,void 0),t.instances.add(this),o$(this,N,P).call(this)}static get castElement(){return oH(t,i)}static get castEnabled(){return oH(t,a)}static get castState(){var e;return null==(e=oH(t,d,u))?void 0:e.getCastState()}static async exitCast(){try{await oH(t,d,u).endCurrentSession(!0)}catch(e){console.error(e);return}}get castPlayer(){if(t.castElement===this)return oH(this,A)}attributeChangedCallback(e){if(this.castPlayer)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async requestCast(e={}){o$(t,g,_).call(t,e),oj(t,i,this),Object.entries(oH(this,k)).forEach(([e,t])=>{oH(this,A).controller.addEventListener(e,t)});try{await oH(t,d,u).requestSession()}catch{oj(t,i,void 0);return}oH(this,y).paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){var e,i;if(!this.castPlayer)return super.load();let a=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],o=0;r.length&&(a.tracks=r.map(e=>{let t=++o;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?a.streamType=chrome.cast.media.StreamType.LIVE:a.streamType=chrome.cast.media.StreamType.BUFFERED,a.metadata=new chrome.cast.media.GenericMediaMetadata,a.metadata.title=this.title,a.metadata.images=[{url:this.poster}];let s=new chrome.cast.media.LoadRequest(a);s.currentTime=null!=(e=super.currentTime)?e:0,s.autoplay=!oH(this,y).paused,s.activeTrackIds=n,await (null==(i=oH(t,c,h))?void 0:i.loadMedia(s)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(this.castPlayer){this.castPlayer.isPaused&&(null==(e=this.castPlayer.controller)||e.playOrPause());return}return super.play()}pause(){var e;if(this.castPlayer){this.castPlayer.isPaused||null==(e=this.castPlayer.controller)||e.playOrPause();return}super.pause()}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(this.castPlayer)switch(this.castPlayer.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.castPlayer?this.castPlayer.isPaused:super.paused}get muted(){var e;return this.castPlayer?null==(e=this.castPlayer)?void 0:e.isMuted:super.muted}set muted(e){var t;if(this.castPlayer){(e&&!this.castPlayer.isMuted||!e&&this.castPlayer.isMuted)&&(null==(t=this.castPlayer.controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return this.castPlayer?null!=(t=null==(e=this.castPlayer)?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(this.castPlayer){this.castPlayer.volumeLevel=e,null==(t=this.castPlayer.controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t;return this.castPlayer&&oH(this,S,R)?null!=(t=null==(e=this.castPlayer)?void 0:e.duration)?t:NaN:super.duration}get currentTime(){var e,t;return this.castPlayer&&oH(this,S,R)?null!=(t=null==(e=this.castPlayer)?void 0:e.currentTime)?t:0:super.currentTime}set currentTime(e){var t;if(this.castPlayer){this.castPlayer.currentTime=e,null==(t=this.castPlayer.controller)||t.seek();return}super.currentTime=e}get onentercast(){return oH(this,T)}set onentercast(e){oH(this,T)&&(this.removeEventListener("entercast",oH(this,T)),oj(this,T,null)),"function"==typeof e&&(oj(this,T,e),this.addEventListener("entercast",e))}get onleavecast(){return oH(this,w)}set onleavecast(e){oH(this,w)&&(this.removeEventListener("leavecast",oH(this,w)),oj(this,w,null)),"function"==typeof e&&(oj(this,w,e),this.addEventListener("leavecast",e))}get oncastchange(){return oH(this,I)}set oncastchange(e){oH(this,I)&&(this.removeEventListener("castchange",oH(this,I)),oj(this,I,null)),"function"==typeof e&&(oj(this,I,e),this.addEventListener("castchange",e))}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakSet,o=function(){return"undefined"!=typeof chrome&&chrome.cast&&chrome.cast.isAvailable},s=new WeakSet,l=function(){return"undefined"!=typeof cast&&cast.framework},d=new WeakSet,u=function(){if(oH(t,s,l))return cast.framework.CastContext.getInstance()},c=new WeakSet,h=function(){var e;return null==(e=oH(t,d,u))?void 0:e.getCurrentSession()},m=new WeakSet,p=function(){var e;return null==(e=oH(t,c,h))?void 0:e.getSessionObj().media[0]},v=new WeakSet,b=function(e){return new Promise((i,a)=>{oH(t,m,p).editTracksInfo(e,i,a)})},f=new WeakSet,E=function(e){return new Promise((i,a)=>{oH(t,m,p).getStatus(e,i,a)})},g=new WeakSet,_=function(e){return oH(t,d,u).setOptions({receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0,...e})},y=new WeakMap,A=new WeakMap,k=new WeakMap,T=new WeakMap,w=new WeakMap,I=new WeakMap,S=new WeakSet,R=function(){var e;return null==(e=this.castPlayer)?void 0:e.isMediaLoaded},L=new WeakSet,D=function(){oH(t,i)===this&&(Object.entries(oH(this,k)).forEach(([e,t])=>{oH(this,A).controller.removeEventListener(e,t)}),oj(t,i,void 0),this.muted=oH(this,A).isMuted,this.currentTime=oH(this,A).savedPlayerState.currentTime,!1===oH(this,A).savedPlayerState.isPaused&&this.play())},M=new WeakSet,C=function(){this.dispatchEvent(new CustomEvent("castchange",{detail:oH(t,d,u).getCastState()}))},O=new WeakSet,x=async function(){var e;let{SESSION_RESUMED:a}=cast.framework.SessionState;if(oH(t,d,u).getSessionState()===a&&this.castSrc===(null==(e=oH(t,m,p))?void 0:e.media.contentId)){oj(t,i,this),Object.entries(oH(this,k)).forEach(([e,t])=>{oH(this,A).controller.addEventListener(e,t)});try{await o$(t,f,E).call(t,new chrome.cast.media.GetStatusRequest)}catch(e){console.error(e)}oH(this,k)[cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED](),oH(this,k)[cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},N=new WeakSet,P=function(){!oH(t,s,l)||this.castEnabled||(this.castEnabled=!0,o$(t,g,_).call(t),this.textTracks.addEventListener("change",o$(this,W,V).bind(this)),o$(this,M,C).call(this),oj(this,A,new cast.framework.RemotePlayer),new cast.framework.RemotePlayerController(oH(this,A)),oj(this,k,{[cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!1===e&&o$(this,L,D).call(this),this.dispatchEvent(new Event(e?"entercast":"leavecast"))},[cast.framework.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.dispatchEvent(new Event("durationchange"))},[cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.dispatchEvent(new Event("volumechange"))},[cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.dispatchEvent(new Event("volumechange"))},[cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{oH(this,S,R)&&this.dispatchEvent(new Event("timeupdate"))},[cast.framework.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.dispatchEvent(new Event("resize"))},[cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.dispatchEvent(new Event(this.paused?"pause":"play"))},[cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=this.castPlayer)?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&this.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=this.castPlayer)?void 0:t.playerState]))},[cast.framework.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{oH(this,S,R)&&(await Promise.resolve(),o$(this,U,B).call(this))}}))},U=new WeakSet,B=function(){o$(this,W,V).call(this)},W=new WeakSet,V=async function(){var e,i,a,r,n,o;if(!this.castPlayer)return;let s=(null!=(i=null==(e=oH(this,A).mediaInfo)?void 0:e.tracks)?i:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),l=[...this.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),d=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=l.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),u=d.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),m=d.find(({mode:e})=>"showing"===e),p=null!=(n=null==(r=null==(a=oH(t,c,h))?void 0:a.getSessionObj().media[0])?void 0:r.activeTrackIds)?n:[],f=p;if(p.length&&(f=f.filter(e=>!u.includes(e))),null!=m&&m.trackId&&(f=[...f,m.trackId]),o=f=[...new Set(f)],!(p.length===o.length&&p.every(e=>o.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(f);await o$(t,v,b).call(t,e)}catch(e){console.error(e)}},oF(t,n),oF(t,s),oF(t,d),oF(t,c),oF(t,m),oF(t,v),oF(t,f),oF(t,g),oV(t,"observedAttributes",["cast-src","cast-content-type","cast-stream-type"]),oV(t,"instances",new Set),oF(t,i,void 0),oF(t,a,!1),oV(t,"initCast",()=>{oH(t,n,o)?oH(t,s,l)?oH(t,r).call(t,chrome.cast.isAvailable):customElements.whenDefined("google-cast-button").then(()=>oH(t,r).call(t,chrome.cast.isAvailable)):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(()=>oH(t,r).call(t,chrome.cast.isAvailable))}}),oF(t,r,e=>{if(e){oj(t,a,!0);let{CAST_STATE_CHANGED:e}=cast.framework.CastContextEventType;oH(t,d,u).addEventListener(e,e=>{t.instances.forEach(t=>o$(t,M,C).call(t,e))});let{SESSION_STATE_CHANGED:i}=cast.framework.CastContextEventType;oH(t,d,u).addEventListener(i,e=>{t.instances.forEach(t=>o$(t,O,x).call(t,e))}),t.instances.forEach(e=>o$(e,N,P).call(e))}}),t},o1=globalThis.HTMLVideoElement?o0(HTMLVideoElement):o0(Object);globalThis.customElements&&!globalThis.customElements.get("castable-video")&&(customElements.define("castable-video",o1,{extends:"video"}),globalThis.CastableVideoElement=o1),o1.initCast();var o2,o5=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],o3=null==(o2=globalThis.document)?void 0:o2.createElement("template");o3&&(o3.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      audio {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
      }
    </style>
    <slot></slot>
  `);var o4,o7=null==(o4=globalThis.document)?void 0:o4.createElement("template");o7&&(o7.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot></slot>
  `);var o8=(e,{tag:t,is:i})=>{var a,r,n,o,s,l,d,u,c,h,m,p,v;let b=null==(a=globalThis.document)?void 0:a.createElement(t,{is:i}),f=b?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(b):[];return r=class extends e{constructor(){super(),oF(this,u),oF(this,h),oF(this,p),oF(this,l,void 0),oF(this,d,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0)))}static get observedAttributes(){var e,t;return o$(r,o,s).call(r),[...null!=(t=null==(e=null==b?void 0:b.constructor)?void 0:e.observedAttributes)?t:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i;return null!=(i=null!=(e=oH(this,d))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(t)}set nativeEl(e){oj(this,d,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}attributeChangedCallback(e,t,i){o$(this,u,c).call(this),o$(this,p,v).call(this,e,t,i)}connectedCallback(){o$(this,u,c).call(this)}},n=new WeakMap,o=new WeakSet,s=function(){if(oH(this,n))return;oj(this,n,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),f))if(!(t in this.prototype)){if("function"==typeof b[t])this.prototype[t]=function(...e){return o$(this,u,c).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;o$(this,u,c).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){o$(this,u,c).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},l=new WeakMap,d=new WeakMap,u=new WeakSet,c=function(){var e,a;if(oH(this,l))return;if(oj(this,l,!0),!this.nativeEl){let e=document.createElement(t,{is:i});e.part=t,this.shadowRoot.append(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),f))o$(this,h,m).call(this,e);let r=new Map,n=this.shadowRoot.querySelector("slot:not([name])");for(let t of(null==n||n.addEventListener("slotchange",()=>{let e=new Map(r);n.assignedElements().filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let n=r.get(t);n||(n=t.cloneNode(),r.set(t,n)),null==(a=(i=this.nativeEl).append)||a.call(i,n)}),e.forEach(e=>e.remove())}),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,e=>{e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))},!0)},h=new WeakSet,m=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},p=new WeakSet,v=function(e,t,i){var a,r,n,o;["id","class"].includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):null==(o=(n=this.nativeEl).setAttribute)||o.call(n,e,i))},oF(r,o),oV(r,"Events",o5),oV(r,"template",t.endsWith("audio")?o3:o7),oF(r,n,void 0),r};globalThis.document&&o8(HTMLElement,{tag:"video"}),globalThis.document&&o8(HTMLElement,{tag:"audio"});var o6=class extends Event{constructor(e,t){super(e),oV(this,"track"),this.track=t.track}},o9=new WeakMap;function se(e){var t;let i;return null!=(t=o9.get(e))?t:((i=o9.get(e))||o9.set(e,i={}),Object.assign(i,{}))}function st(e,t){let i=e.videoTracks;se(t).media=e,se(t).renditionSet||(se(t).renditionSet=new Set);let a=se(i).trackSet;a.add(t);let r=a.size-1;r in sl.prototype||Object.defineProperty(sl.prototype,r,{get(){return[...se(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new o6("addtrack",{track:t}))})}function si(e){var t;let i=null==(t=se(e).media)?void 0:t.videoTracks;i&&(se(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new o6("removetrack",{track:e}))}))}var sa,sr,sn,so,ss,sl=class extends EventTarget{constructor(){super(),oF(this,so),oF(this,sa,void 0),oF(this,sr,void 0),oF(this,sn,void 0),se(this).trackSet=new Set}[Symbol.iterator](){return oH(this,so,ss).values()}get length(){return oH(this,so,ss).size}getTrackById(e){var t;return null!=(t=[...oH(this,so,ss)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...oH(this,so,ss)].findIndex(e=>e.selected)}get onaddtrack(){return oH(this,sa)}set onaddtrack(e){oH(this,sa)&&(this.removeEventListener("addtrack",oH(this,sa)),oj(this,sa,void 0)),"function"==typeof e&&(oj(this,sa,e),this.addEventListener("addtrack",e))}get onremovetrack(){return oH(this,sr)}set onremovetrack(e){oH(this,sr)&&(this.removeEventListener("removetrack",oH(this,sr)),oj(this,sr,void 0)),"function"==typeof e&&(oj(this,sr,e),this.addEventListener("removetrack",e))}get onchange(){return oH(this,sn)}set onchange(e){oH(this,sn)&&(this.removeEventListener("change",oH(this,sn)),oj(this,sn,void 0)),"function"==typeof e&&(oj(this,sn,e),this.addEventListener("change",e))}};sa=new WeakMap,sr=new WeakMap,sn=new WeakMap,so=new WeakSet,ss=function(){return se(this).trackSet};var sd=class extends Event{constructor(e,t){super(e),oV(this,"rendition"),this.rendition=t.rendition}};function su(e){return[...se(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...se(e).renditionSet])}var sc,sh,sm,sp=class extends EventTarget{constructor(){super(...arguments),oF(this,sc,void 0),oF(this,sh,void 0),oF(this,sm,void 0)}[Symbol.iterator](){return su(this).values()}get length(){return su(this).length}getRenditionById(e){var t;return null!=(t=su(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return su(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of su(this).entries())i.selected=t===e}get onaddrendition(){return oH(this,sc)}set onaddrendition(e){oH(this,sc)&&(this.removeEventListener("addrendition",oH(this,sc)),oj(this,sc,void 0)),"function"==typeof e&&(oj(this,sc,e),this.addEventListener("addrendition",e))}get onremoverendition(){return oH(this,sh)}set onremoverendition(e){oH(this,sh)&&(this.removeEventListener("removerendition",oH(this,sh)),oj(this,sh,void 0)),"function"==typeof e&&(oj(this,sh,e),this.addEventListener("removerendition",e))}get onchange(){return oH(this,sm)}set onchange(e){oH(this,sm)&&(this.removeEventListener("change",oH(this,sm)),oj(this,sm,void 0)),"function"==typeof e&&(oj(this,sm,e),this.addEventListener("change",e))}};sc=new WeakMap,sh=new WeakMap,sm=new WeakMap;var sv,sb=class{constructor(){oV(this,"src"),oV(this,"id"),oV(this,"width"),oV(this,"height"),oV(this,"bitrate"),oV(this,"frameRate"),oV(this,"codec"),oF(this,sv,!1)}get selected(){return oH(this,sv)}set selected(e){var t;let i;oH(this,sv)===e||(oj(this,sv,e),t=this,(i=se(t).media.videoRenditions)&&!se(i).changeRequested&&(se(i).changeRequested=!0,queueMicrotask(()=>{delete se(i).changeRequested,se(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};sv=new WeakMap;var sf,sE=class{constructor(){oV(this,"id"),oV(this,"kind"),oV(this,"label",""),oV(this,"language",""),oV(this,"sourceBuffer"),oF(this,sf,!1)}addRendition(e,t,i,a,r,n){var o;let s,l,d,u=new sb;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,o=this,s=se(o).media.videoRenditions,se(u).media=se(o).media,se(u).track=o,(l=se(o).renditionSet).add(u),(d=l.size-1)in sp.prototype||Object.defineProperty(sp.prototype,d,{get(){return su(this)[d]}}),queueMicrotask(()=>{o.selected&&s.dispatchEvent(new sd("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=se(e).media.videoRenditions,i=se(e).track,se(i).renditionSet.delete(e),queueMicrotask(()=>{se(e).track.selected&&t.dispatchEvent(new sd("removerendition",{rendition:e}))})}get selected(){return oH(this,sf)}set selected(e){oH(this,sf)!==e&&(oj(this,sf,e),!0===e&&function(e){var t;let i=null!=(t=se(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(se(i).changeRequested)return;se(i).changeRequested=!0,queueMicrotask(()=>{delete se(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function sg(e){return[...se(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...se(e).renditionSet])}sf=new WeakMap;var s_,sy,sA,sk=class extends EventTarget{constructor(){super(...arguments),oF(this,s_,void 0),oF(this,sy,void 0),oF(this,sA,void 0)}[Symbol.iterator](){return sg(this).values()}get length(){return sg(this).length}getRenditionById(e){var t;return null!=(t=sg(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return sg(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of sg(this).entries())i.selected=t===e}get onaddrendition(){return oH(this,s_)}set onaddrendition(e){oH(this,s_)&&(this.removeEventListener("addrendition",oH(this,s_)),oj(this,s_,void 0)),"function"==typeof e&&(oj(this,s_,e),this.addEventListener("addrendition",e))}get onremoverendition(){return oH(this,sy)}set onremoverendition(e){oH(this,sy)&&(this.removeEventListener("removerendition",oH(this,sy)),oj(this,sy,void 0)),"function"==typeof e&&(oj(this,sy,e),this.addEventListener("removerendition",e))}get onchange(){return oH(this,sA)}set onchange(e){oH(this,sA)&&(this.removeEventListener("change",oH(this,sA)),oj(this,sA,void 0)),"function"==typeof e&&(oj(this,sA,e),this.addEventListener("change",e))}};s_=new WeakMap,sy=new WeakMap,sA=new WeakMap;var sT,sw=class{constructor(){oV(this,"src"),oV(this,"id"),oV(this,"bitrate"),oV(this,"codec"),oF(this,sT,!1)}get selected(){return oH(this,sT)}set selected(e){var t;let i;oH(this,sT)===e||(oj(this,sT,e),t=this,(i=se(t).media.audioRenditions)&&!se(i).changeRequested&&(se(i).changeRequested=!0,queueMicrotask(()=>{delete se(i).changeRequested,se(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function sI(e,t){let i=e.audioTracks;se(t).media=e,se(t).renditionSet||(se(t).renditionSet=new Set);let a=se(i).trackSet;a.add(t);let r=a.size-1;r in sO.prototype||Object.defineProperty(sO.prototype,r,{get(){return[...se(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new o6("addtrack",{track:t}))})}function sS(e){var t;let i=null==(t=se(e).media)?void 0:t.audioTracks;i&&(se(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new o6("removetrack",{track:e}))}))}sT=new WeakMap;var sR,sL,sD,sM,sC,sO=class extends EventTarget{constructor(){super(),oF(this,sM),oF(this,sR,void 0),oF(this,sL,void 0),oF(this,sD,void 0),se(this).trackSet=new Set}[Symbol.iterator](){return oH(this,sM,sC).values()}get length(){return oH(this,sM,sC).size}getTrackById(e){var t;return null!=(t=[...oH(this,sM,sC)].find(t=>t.id===e))?t:null}get onaddtrack(){return oH(this,sR)}set onaddtrack(e){oH(this,sR)&&(this.removeEventListener("addtrack",oH(this,sR)),oj(this,sR,void 0)),"function"==typeof e&&(oj(this,sR,e),this.addEventListener("addtrack",e))}get onremovetrack(){return oH(this,sL)}set onremovetrack(e){oH(this,sL)&&(this.removeEventListener("removetrack",oH(this,sL)),oj(this,sL,void 0)),"function"==typeof e&&(oj(this,sL,e),this.addEventListener("removetrack",e))}get onchange(){return oH(this,sD)}set onchange(e){oH(this,sD)&&(this.removeEventListener("change",oH(this,sD)),oj(this,sD,void 0)),"function"==typeof e&&(oj(this,sD,e),this.addEventListener("change",e))}};sR=new WeakMap,sL=new WeakMap,sD=new WeakMap,sM=new WeakSet,sC=function(){return se(this).trackSet};var sx,sN=class{constructor(){oV(this,"id"),oV(this,"kind"),oV(this,"label",""),oV(this,"language",""),oV(this,"sourceBuffer"),oF(this,sx,!1)}addRendition(e,t,i){var a;let r,n,o,s=new sw;return s.src=e,s.codec=t,s.bitrate=i,a=this,r=se(a).media.audioRenditions,se(s).media=se(a).media,se(s).track=a,(n=se(a).renditionSet).add(s),(o=n.size-1)in sk.prototype||Object.defineProperty(sk.prototype,o,{get(){return sg(this)[o]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new sd("addrendition",{rendition:s}))}),s}removeRendition(e){let t,i;t=se(e).media.audioRenditions,i=se(e).track,se(i).renditionSet.delete(e),queueMicrotask(()=>{se(e).track.enabled&&t.dispatchEvent(new sd("removerendition",{rendition:e}))})}get enabled(){return oH(this,sx)}set enabled(e){let t;oH(this,sx)===e||(oj(this,sx,e),(t=se(this).media.audioTracks)&&!se(t).changeRequested&&(se(t).changeRequested=!0,queueMicrotask(()=>{delete se(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};sx=new WeakMap;var sP=sB(globalThis.HTMLMediaElement,"video"),sU=sB(globalThis.HTMLMediaElement,"audio");function sB(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}o5.push("castchange","entercast","leavecast");var sW,sV,sq,sH,sF,sj,s$,sK,sY,sG=function(e){if(!(null!=e&&e.prototype))return e;let t=sB(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=se(e).videoTracks;if(!i&&(i=new sl,se(e).videoTracks=i,sP)){let a=sP.call(null!=(t=e.nativeEl)?t:e);for(let t of a)st(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof sE)){for(let e of a)si(e);return}st(e,t.track)}),a.addEventListener("removetrack",e=>{si(e.track)})}return i}(this)}});let i=sB(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=se(e).audioTracks;if(!i&&(i=new sO,se(e).audioTracks=i,sU)){let a=sU.call(null!=(t=e.nativeEl)?t:e);for(let t of a)sI(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof sN)){for(let e of a)sS(e);return}sI(e,t.track)}),a.addEventListener("removetrack",e=>{sS(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new sE;return a.kind=e,a.label=t,a.language=i,st(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=si),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new sN;return a.kind=e,a.label=t,a.language=i,sI(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=sS),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=se(e).videoRenditions;return t||(se(t=new sp).media=e,se(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=se(e).audioRenditions;return t||(se(t=new sk).media=e,se(e).audioRenditions=t),t};return e}(o8(oX.HTMLElement,{tag:"video",is:"castable-video"})),sZ={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_COOKIES:"disable-cookies",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},sQ=Object.values(sZ),sz=class extends sG{constructor(){super(),oF(this,sK),oF(this,sW,void 0),oF(this,sV,void 0),oF(this,sq,void 0),oF(this,sH,{}),oF(this,sF,void 0),oF(this,sj,void 0),oF(this,s$,void 0),oj(this,sq,oh())}static get observedAttributes(){var e;return[...sQ,...null!=(e=sG.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(sZ.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?aJ.includes(e)?this.setAttribute(sZ.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${aJ.join()}`):this.removeAttribute(sZ.PREFER_CMCD))}get playerInitTime(){return oH(this,sq)}get playerSoftwareName(){var e;return null!=(e=oH(this,sj))?e:"mux-video"}set playerSoftwareName(e){oj(this,sj,e)}get playerSoftwareVersion(){var e;return null!=(e=oH(this,sF))?e:oJ}set playerSoftwareVersion(e){oj(this,sF,e)}get _hls(){var e;return null==(e=oH(this,sW))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=oE(this.nativeEl))?e:null}get errorTranslator(){return oH(this,s$)}set errorTranslator(e){oj(this,s$,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(sZ.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(sZ.TYPE,e):this.removeAttribute(sZ.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(sZ.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(sZ.DEBUG,""):this.removeAttribute(sZ.DEBUG))}get disableCookies(){return this.hasAttribute(sZ.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(sZ.DISABLE_COOKIES,""):this.removeAttribute(sZ.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(sZ.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(sZ.START_TIME):this.setAttribute(sZ.START_TIME,`${e}`))}get playbackId(){var e;return null!=(e=this.getAttribute(sZ.PLAYBACK_ID))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(sZ.PLAYBACK_ID,e):this.removeAttribute(sZ.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(sZ.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(sZ.MAX_RESOLUTION,e):this.removeAttribute(sZ.MAX_RESOLUTION))}get customDomain(){var e;return null!=(e=this.getAttribute(sZ.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(sZ.CUSTOM_DOMAIN,e):this.removeAttribute(sZ.CUSTOM_DOMAIN))}get ended(){return oI(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(sZ.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(sZ.ENV_KEY,e):this.removeAttribute(sZ.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(sZ.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(sZ.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(sZ.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(sZ.STREAM_TYPE))?e:og(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(sZ.STREAM_TYPE,e):this.removeAttribute(sZ.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(sZ.TARGET_LIVE_WINDOW)?+this.getAttribute(sZ.TARGET_LIVE_WINDOW):o_(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(sZ.TARGET_LIVE_WINDOW):this.setAttribute(sZ.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(sZ.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return oA(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(sZ.LIVE_EDGE_OFFSET))return+this.getAttribute(sZ.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(sZ.LIVE_EDGE_OFFSET):this.setAttribute(sZ.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return oy(this.nativeEl)}async addCuePoints(e){return rs(this.nativeEl,e)}get activeCuePoint(){return rd(this.nativeEl)}get cuePoints(){return function(e,t={label:rr}){let i=ro(e,t);return null!=i&&i.cues?Array.from(i.cues,e=>rl(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){return function(e,t){if(t&&t.playingDate)return t.playingDate;if("function"==typeof e.getStartDate){let t=e.getStartDate();return new Date(t.getTime()+1e3*e.currentTime)}return new Date(NaN)}(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(sZ.PREFER_PLAYBACK);if(e===az.MSE||e===az.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===az.MSE||e===az.NATIVE?this.setAttribute(sZ.PREFER_PLAYBACK,e):this.removeAttribute(sZ.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![sZ.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...oH(this,sH)}}set metadata(e){oj(this,sH,null!=e?e:{}),this.mux&&this.mux.emit("hb",oH(this,sH))}load(){oj(this,sW,oS(this,this.nativeEl,oH(this,sW)))}unload(){oR(this.nativeEl,oH(this,sW)),oj(this,sW,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(sG.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case sZ.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case sZ.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?o$(this,sK,sY).call(this):e&&!a?this.unload():e&&a&&(this.unload(),o$(this,sK,sY).call(this));break}case"autoplay":if(i===t)break;null==(a=oH(this,sW))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=oH(this,sW))||r.setPreload(i);break;case sZ.PLAYBACK_ID:this.src=op(null!=i?i:void 0,{maxResolution:this.maxResolution,domain:this.customDomain});break;case sZ.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case sZ.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case sZ.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case sZ.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!oH(this,sW)&&o$(this,sK,sY).call(this)}disconnectedCallback(){this.unload()}};sW=new WeakMap,sV=new WeakMap,sq=new WeakMap,sH=new WeakMap,sF=new WeakMap,sj=new WeakMap,s$=new WeakMap,sK=new WeakSet,sY=async function(){oH(this,sV)||(await oj(this,sV,Promise.resolve()),oj(this,sV,null),this.load())},oX.customElements.get("mux-video")||(oX.customElements.define("mux-video",sz),oX.MuxVideoElement=sz);var sX=Object.defineProperty,sJ=(e,t,i)=>t in e?sX(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,s0=(e,t,i)=>(sJ(e,"symbol"!=typeof t?t+"":t,i),i),s1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s2=(e,t,i)=>(s1(e,t,"read from private field"),i?i.call(e):t.get(e)),s5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s3=(e,t,i,a)=>(s1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s4={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof la&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof la?a.element[a.attributeName]=t:a.value=t}}}};class s7 extends G.DocumentFragment{constructor(e,t,i=s4){var a;super(),s5(this,lP,void 0),s5(this,lU,void 0),this.append(e.content.cloneNode(!0)),s3(this,lP,s8(this)),s3(this,lU,i),null==(a=i.createCallback)||a.call(i,this,s2(this,lP),t),i.processCallback(this,s2(this,lP),t)}update(e){s2(this,lU).processCallback(this,s2(this,lP),e)}}lP=new WeakMap,lU=new WeakMap;let s8=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new li;for([i,a]of s9(r.value))if(i){let i=new la(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of s9(r.data))if(i){let i=new lr(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new ln(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else s8(r,t);return t},s6={},s9=e=>{let t="",i=0,a=s6[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),s6[e]=a};class le{get value(){return""}set value(e){}toString(){return this.value}}let lt=new WeakMap;class li{constructor(){s5(this,lB,[])}[Symbol.iterator](){return s2(this,lB).values()}get length(){return s2(this,lB).length}item(e){return s2(this,lB)[e]}append(...e){for(let t of e)t instanceof la&&lt.set(t,this),s2(this,lB).push(t)}toString(){return s2(this,lB).join("")}}lB=new WeakMap;class la extends le{constructor(e,t,i){super(),s5(this,lF),s5(this,lW,""),s5(this,lV,void 0),s5(this,lq,void 0),s5(this,lH,void 0),s3(this,lV,e),s3(this,lq,t),s3(this,lH,i)}get attributeName(){return s2(this,lq)}get attributeNamespace(){return s2(this,lH)}get element(){return s2(this,lV)}get value(){return s2(this,lW)}set value(e){s2(this,lW)!==e&&(s3(this,lW,e),s2(this,lF,lj)&&1!==s2(this,lF,lj).length?s2(this,lV).setAttributeNS(s2(this,lH),s2(this,lq),s2(this,lF,lj)):null==e?s2(this,lV).removeAttributeNS(s2(this,lH),s2(this,lq)):s2(this,lV).setAttributeNS(s2(this,lH),s2(this,lq),e))}get booleanValue(){return s2(this,lV).hasAttributeNS(s2(this,lH),s2(this,lq))}set booleanValue(e){if(s2(this,lF,lj)&&1!==s2(this,lF,lj).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}lW=new WeakMap,lV=new WeakMap,lq=new WeakMap,lH=new WeakMap,lF=new WeakSet,lj=function(){return lt.get(this)};class lr extends le{constructor(e,t){super(),s5(this,l$,void 0),s5(this,lK,void 0),s3(this,l$,e),s3(this,lK,t?[...t]:[new Text])}get replacementNodes(){return s2(this,lK)}get parentNode(){return s2(this,l$)}get nextSibling(){return s2(this,lK)[s2(this,lK).length-1].nextSibling}get previousSibling(){return s2(this,lK)[0].previousSibling}get value(){return s2(this,lK).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),s3(this,lK,function(e,t,i,a=null){let r=0,n,o,s,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)s=i[r++],o=n?n.nextSibling:a,n==s?n=o:r<l&&i[r]==o?(e.replaceChild(s,n),n=o):e.insertBefore(s,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}(s2(this,lK)[0].parentNode,s2(this,lK),t,this.nextSibling))}}l$=new WeakMap,lK=new WeakMap;class ln extends lr{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),s0(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let lo={string:e=>String(e)};class ls{constructor(e){this.template=e,this.state=void 0}}let ll=new WeakMap,ld=new WeakMap,lu={partial:(e,t)=>{t[e.expression]=new ls(e.template)},if:(e,t)=>{var i;if(lp(e.expression,t)){if(ll.get(e)!==e.template){ll.set(e,e.template);let i=new s7(e.template,t,lh);e.replace(i),ld.set(e,i)}else null==(i=ld.get(e))||i.update(t)}else e.replace(""),ll.delete(e),ld.delete(e)}},lc=Object.keys(lu),lh={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof ln){if(!n.directive){let e=lc.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=lu[n.directive])||a.call(lu,n,i);continue}let t=lp(e,i);if(t instanceof ls){ll.get(n)!==t.template?(ll.set(n,t.template),t=new s7(t.template,t.state,lh),n.value=t,ld.set(n,t)):null==(r=ld.get(n))||r.update(t.state);continue}t?(n instanceof la&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof la?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,ll.delete(n),ld.delete(n))):n instanceof la?n.value=void 0:(n.value=void 0,ll.delete(n),ld.delete(n))}}},lm={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=lo[t])?void 0:i.call(lo,e)}};function lp(e,t={}){var i,a,r,n,o,s,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lv(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lv(e);let s={...t};i.state=s;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(o=l[e+2])?void 0:o.token;i&&"="===a&&(s[i]=lf(d,t))}return i}if(1===d.length)return lb(d[0])?lf(d[0].token,t):lv(e);if(2===d.length){let i=null==(s=d[0])?void 0:s.token,a=lm[i];if(!a||!lb(d[1]))return lv(e);let r=lf(d[1].token,t);return a(r)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=lm[i];if(!a||!lb(d[0])||!lb(d[2]))return lv(e);let r=lf(d[0].token,t);if("|"===i)return a(r,d[2].token);let n=lf(d[2].token,t);return a(r,n)}}function lv(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lb({type:e}){return["number","boolean","string","param"].includes(e)}function lf(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):w(e)?parseFloat(e):t[e]}var lE=Object.defineProperty,lg=(e,t,i)=>t in e?lE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l_=(e,t,i)=>(lg(e,"symbol"!=typeof t?t+"":t,i),i),ly=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lA=(e,t,i)=>(ly(e,t,"read from private field"),i?i.call(e):t.get(e)),lk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lT=(e,t,i,a)=>(ly(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lw=(e,t,i)=>(ly(e,t,"access private method"),i);let lI={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lS=Z.createElement("template");lS.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lR extends G.HTMLElement{constructor(){super(),lk(this,lQ),lk(this,lX),l_(this,"renderRoot"),l_(this,"renderer"),lk(this,lY,void 0),lk(this,lG,void 0),lk(this,lZ,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lI[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(c.BREAKPOINTS_COMPUTED,this.render),lw(this,lQ,lz).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lA(this,lY))?e:this.constructor.template}set template(e){lT(this,lZ,null),lT(this,lY,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lI[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lI[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(w(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&lw(this,lX,lJ).call(this)}connectedCallback(){lw(this,lX,lJ).call(this)}createRenderer(){this.template&&this.template!==lA(this,lG)&&(lT(this,lG,this.template),this.renderer=new s7(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lS.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lL(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}lY=new WeakMap,lG=new WeakMap,lZ=new WeakMap,lQ=new WeakSet,lz=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},lX=new WeakSet,lJ=function(){var e;let t=this.getAttribute("template");if(!t||t===lA(this,lZ))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lT(this,lZ,t),lT(this,lY,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lT(this,lZ,t),lL(t).then(e=>{let t=Z.createElement("template");t.innerHTML=e,lT(this,lY,t),this.createRenderer()}).catch(console.error))},l_(lR,"template"),l_(lR,"observedAttributes",["template"]),l_(lR,"processor",lh),G.customElements.get("media-theme")||G.customElements.define("media-theme",lR);var lD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lM=(e,t,i)=>(lD(e,t,"read from private field"),i?i.call(e):t.get(e)),lC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lO=(e,t,i,a)=>(lD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lx=(e,t,i)=>(lD(e,t,"access private method"),i),lN=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends lN{});var lP,lU,lB,lW,lV,lq,lH,lF,lj,l$,lK,lY,lG,lZ,lQ,lz,lX,lJ,l0,l1=class extends lN{},l2=class{constructor(e,t={}){lC(this,l0,void 0),lO(this,l0,null==t?void 0:t.detail)}get detail(){return lM(this,l0)}initCustomEvent(){}};l0=new WeakMap;var l5={document:{createElement:function(e,t){return new l1}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(l1)},CustomEvent:l2,EventTarget:lN,HTMLElement:l1,HTMLVideoElement:class extends lN{}},l3="undefined"==typeof window||void 0===globalThis.customElements,l4=l3?l5:globalThis,l7=l3?l5.document:globalThis.document,l8={code:"en"};function l6(e,t=!0){var i;let a=t&&null!=(i=null==l8?void 0:l8[e])?i:e,r=t?l8.code:"en";return new l9(a,r)}var l9=class{constructor(e,t=null!=(dn=l8.code)?dn:"en"){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function de(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function dt(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function di(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function da(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function dr(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var dn,ds,dl,dd,du=(e,t)=>!!e&&!!t&&(!!e.contains(t)||du(e,t.getRootNode().host)),dc="mux.com",dh=(()=>{try{return"1.14.2"}catch{}return"UNKNOWN"})(),dm=(e,{maxResolution:t,token:i,domain:a=dc}={})=>`https://stream.${a}/${e}.m3u8${da(i?{token:i}:{redundant_streams:!0,...t?{max_resolution:t}:{}})}`,dp=(e,{token:t,thumbnailTime:i,domain:a=dc}={})=>{let r=null==t?i:void 0,{aud:n}=dr(t);if(!(t&&"t"!==n))return`https://image.${a}/${e}/thumbnail.webp${da({token:t,time:r})}`},dv=(e,{token:t,domain:i=dc}={})=>{let{aud:a}=dr(t);if(!(t&&"s"!==a))return`https://image.${i}/${e}/storyboard.vtt${da({token:t,format:"webp"})}`},db=e=>{if(e){if([aQ.LIVE,aQ.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return aQ.LIVE}},df={crossorigin:"crossOrigin",playsinline:"playsInline"},dE=class{constructor(e,t){lC(this,ds,void 0),lC(this,dl,void 0),lC(this,dd,[]),lO(this,ds,e),lO(this,dl,t)}[Symbol.iterator](){return lM(this,dd).values()}get length(){return lM(this,dd).length}get value(){var e;return null!=(e=lM(this,dd).join(" "))?e:""}set value(e){var t;e!==this.value&&(lO(this,dd,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return lM(this,dd)[e]}values(){return lM(this,dd).values()}keys(){return lM(this,dd).keys()}forEach(e){lM(this,dd).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||lM(this,dd).push(e)}),(""!==this.value||null!=(t=lM(this,ds))&&t.hasAttribute(`${lM(this,dl)}`))&&null!=(i=lM(this,ds))&&i.setAttribute(`${lM(this,dl)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{lM(this,dd).splice(lM(this,dd).indexOf(e),1)}),null==(t=lM(this,ds))||t.setAttribute(`${lM(this,dl)}`,`${this.value}`)}contains(e){return lM(this,dd).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};ds=new WeakMap,dl=new WeakMap,dd=new WeakMap;var dg=`[mux-player ${dh}]`;function d_(...e){console.warn(dg,...e)}function dy(...e){console.error(dg,...e)}function dA(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${l6("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),d_(i)}var dk={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},dT={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},dw=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),dI=o5.filter(e=>"error"!==e),dS=Object.values(dk).filter(e=>![dk.PLAYSINLINE].includes(e)),dR=Object.values(dT);function dL(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var dD=class extends l4.HTMLElement{static get observedAttributes(){return[...dS,...dR]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t,i;let a=null==(t=this.media)?void 0:t.querySelector(`track[src="${e.src}"]`);a&&(null==(i=this.media)||i.removeChild(a))}),t.addedNodes.forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}))}).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(e,t,i){var a,r;switch(e){case dT.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case dT.VOLUME:{let e=null!=(a=di(i))?a:1;this.media&&(this.media.volume=e);return}case dT.PLAYBACKRATE:{let e=null!=(r=di(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:dw}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:dw}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=di(this.getAttribute(dT.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(dT.PLAYBACKRATE,`${e}`):this.removeAttribute(dT.PLAYBACKRATE)}get crossOrigin(){return dL(this,dk.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(dk.CROSSORIGIN,`${e}`)}get autoplay(){return null!=dL(this,dk.AUTOPLAY)}set autoplay(e){e?this.setAttribute(dk.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(dk.AUTOPLAY)}get loop(){return null!=dL(this,dk.LOOP)}set loop(e){e?this.setAttribute(dk.LOOP,""):this.removeAttribute(dk.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=dL(this,dk.MUTED)}set defaultMuted(e){e?this.setAttribute(dk.MUTED,""):this.removeAttribute(dk.MUTED)}get playsInline(){return null!=dL(this,dk.PLAYSINLINE)}set playsInline(e){dy("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(dk.PRELOAD,e):this.removeAttribute(dk.PRELOAD)}},dM=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button);
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,dC=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,dO=l7.createElement("template");dO.innerHTML=`
  <style>
    ${dC}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var dx=class extends l4.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),dN(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&dN(this)}};function dN(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=l7.activeElement,l7.activeElement instanceof HTMLElement&&l7.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}dx.styles=dC,dx.template=dO,dx.observedAttributes=["open"],l4.customElements.get("media-dialog")||(l4.customElements.define("media-dialog",dx),l4.MediaDialog=dx);var dP=dx,dU=l7.createElement("template");dU.innerHTML=`
  <style>
    ${dP.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var dB=class extends dP{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};dB.template=dU,l4.customElements.get("mxp-dialog")||(l4.customElements.define("mxp-dialog",dB),l4.MxpDialog=dB);var dW=new WeakMap,dV=class{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=dW.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=dW.get(this.element);e&&e.delete(this.type)}}static for(e){dW.has(e.element)||dW.set(e.element,new Map);let t=e.attributeName.slice(2),i=dW.get(e.element);return i&&i.has(t)?i.get(t):new dV(e.element,t)}},dq=new Map,dH=new WeakMap,dF=new WeakMap,dj=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(dq.has(this.stringsKey))return dq.get(this.stringsKey);{let e=l7.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),dq.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(dH.get(e)!==i){dH.set(e,i);let t=new s7(i,this.values,this.processor);dF.set(e,t),e instanceof lr?e.replace(...t.children):e.appendChild(t);return}let a=dF.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},d$={processCallback(e,t,i){var a,r,n;if(i)for(let[e,o]of t){e in i&&(function(e,t){if(e instanceof la&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=o,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof la){let i=e.attributeNamespace,a=e.element.hasAttributeNS(i,e.attributeName);return t!==a&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof la&&r.attributeName.startsWith("on")&&(dV.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof lr&&(r.replace(""),1)||n instanceof dj&&r instanceof lr&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof lr&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof la){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function dK(e,...t){return new dj(e,t,d$)}var dY=e=>dK`
  <style>
    ${dM}
  </style>
  ${dZ(e)}
`,dG=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===db(e.streamType)&&(t+=" noarrowleft noarrowright"),t},dZ=e=>{var t,i,a,r,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,_,y,A,k,T,w,I,S,R,L,D,M,C,O,x,N;let P;return dK`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${dG(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(aQ.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(N={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor},P="",Object.entries(N).forEach(([e,t])=>{null!=t&&(P+=`${de(e)}: ${t}; `)}),r=P?P.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(o=e.backwardSeekOffset)&&o}"
    playbackrates="${null!=(s=e.playbackRates)&&s}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    hideduration="${null!=(d=e.hideDuration)&&d}"
    title="${null!=(u=e.title)&&u}"
    exportparts="top, center, bottom, layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer, controller, poster, live, play, button, seek-backward, seek-forward, mute, captions, airplay, pip, fullscreen, cast, playback-rate, volume, range, time, display"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(c=e.targetLiveWindow)&&c}"
      stream-type="${null!=(h=db(e.streamType))&&h}"
      crossorigin="${null!=(m=e.crossOrigin)?m:""}"
      playsinline
      autoplay="${null!=(p=e.autoplay)&&p}"
      muted="${null!=(v=e.muted)&&v}"
      loop="${null!=(b=e.loop)&&b}"
      preload="${null!=(f=e.preload)&&f}"
      debug="${null!=(E=e.debug)&&E}"
      prefer-cmcd="${null!=(g=e.preferCmcd)&&g}"
      disable-cookies="${null!=(_=e.disableCookies)&&_}"
      prefer-playback="${null!=(y=e.preferPlayback)&&y}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(A=e.beaconCollectionDomain)&&A}"
      player-software-name="${null!=(k=e.playerSoftwareName)&&k}"
      player-software-version="${null!=(T=e.playerSoftwareVersion)&&T}"
      env-key="${null!=(w=e.envKey)&&w}"
      custom-domain="${null!=(I=e.customDomain)&&I}"
      src="${e.src?e.src:!!e.playbackId&&dm(e.playbackId,{maxResolution:e.maxResolution,domain:e.customDomain,token:e.tokens.playback})}"
      cast-src="${e.src?e.src:!!e.playbackId&&dm(e.playbackId,{maxResolution:e.maxResolution,domain:e.customDomain,token:e.tokens.playback})}"
      exportparts="video"
    >
      ${e.storyboard?dK`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:dK``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==e.poster&&null!=(S=e.poster)&&S}"
        placeholder-src="${null!=(R=e.placeholder)&&R}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(L=e.isDialogOpen)&&L}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(D=e.dialog)&&D.title?dK`<h3>${e.dialog.title}</h3>`:dK``}
      <p>
        ${null==(M=e.dialog)?void 0:M.message}
        ${null!=(C=e.dialog)&&C.linkUrl?dK`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(O=e.dialog.linkText)?O:""} ${l6("(opens in a new window)")}"
              >${null!=(x=e.dialog.linkText)?x:e.dialog.linkUrl}</a
            >`:dK``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function dQ(e,t,i,a,r){var n,o,s;let l={},d={};switch(e.code){case aK.MEDIA_ERR_NETWORK:switch(l.title=l6("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=l6("Video is not currently available",r),l.message=l6("The live stream or video file are not yet ready.",r),d.message=l6("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=l6("Video does not exist",r),l.message="",d.message=l6("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=l6("Invalid playback URL",r),l.message=l6("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=l6("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=dr(a),o=Date.now()>1e3*e,s=n!==i,u="v"!==t,c={};if(o){l.title=l6("Video URL has expired",r),l.message=l6("The video’s secured playback-token has expired.",r),d.message=l6("The video’s secured playback-token has expired.",r),d.context=l6("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(l8.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(l8.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(s){l.title=l6("Video URL is formatted incorrectly",r),l.message=l6("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=l6("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=l6("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=l6("Video URL is formatted incorrectly",r),l.message=l6("The playback-token is formatted with incorrect information.",r),d.message=l6("The playback-token is formatted with incorrect information.",r),d.context=l6("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=l6("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case aK.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:l6("Media Error",r),message:t},d.file="media-decode-error.md";break}case aK.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(s=null==(o=e.data)?void 0:o.response)?void 0:s.code;if(n>=400&&n<500){e.code=aK.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=dQ(e,t,i,a);break}l={title:l6("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:l6("Error",r),message:e.message}}return t&&(l={title:l6("Your device appears to be offline",r),message:l6("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var dz=`<!-- prettier-ignore -->
<template id="media-theme-classic">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-margin: 0 0 8px;
      --media-preview-time-text-shadow: none;
      --media-listbox-border-radius: 2px;
      --media-listbox-transform-in: translateY(-8px) scale(1);
      --media-listbox-transform-out: translateY(-6px) scale(.99);
      --media-option-hover-background: rgba(255, 255, 255, 0.28);

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-margin: 0 0 5px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled]:not(media-live-button),
    [aria-disabled='true']:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused],:not([userinactive])) ::slotted([slot='media']) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      --media-range-padding: 0;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpointsm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpointmd] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">
        {{title}}
      </media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardseekoffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 24">
          <path d="M2.25 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" part="bottom rendition listbox">
        <div slot="header">Quality</div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu part="bottom audio-track selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 24 24">
          <path d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
          <path d="M7.25 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75Zm3 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z"/>
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" part="bottom audio-track listbox">
        <div slot="header">Audio</div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="CaptionsSelect">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button slot="button" part="bottom captions button">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"/>
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"/>
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" part="bottom captions listbox"></media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackrates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="audio">

      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar>{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar>
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AudioTrackSelect}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">

        <template if="targetlivewindow > 0">
          <template if="title">
            <media-control-bar>{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar>
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetlivewindow">
          <template if="title">
            <media-control-bar>{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar>
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">

      <template if="streamtype == 'on-demand'">

        <template if="!breakpointsm">
          {{>TimeRange}}
          <media-control-bar>
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsSelect}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <template if="!breakpointmd">
            <media-control-bar slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>PlaybackRateButton}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointmd">
          <media-control-bar slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar>
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>RenditionSelect}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>CaptionsSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <template if="!breakpointsm">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar>
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetlivewindow > 0">

          <template if="!breakpointsm">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar>
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`,dX=l7.createElement("template");"innerHTML"in dX&&(dX.innerHTML=dz);var dJ,d0,d1=class extends lR{};d1.template=null==(d0=null==(dJ=dX.content)?void 0:dJ.children)?void 0:d0[0],l4.customElements.get("media-theme-classic")||l4.customElements.define("media-theme-classic",d1);var d2={SRC:"src",POSTER:"poster"},d5={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",NO_VOLUME_PREF:"no-volume-pref"},d3=["audio","backwardseekoffset","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function d4(e){let t=e.hasAttribute(d5.TITLE)?{video_title:e.getAttribute(d5.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var d7,d8,d6,d9,ue,ut,ui,ua,ur,un,uo,us,ul,ud,uu,uc,uh,um,up,uv,ub,uf=Object.values(sZ),uE=Object.values(d2),ug=Object.values(d5),u_={dialog:void 0,isDialogOpen:!1},uy=class extends dD{constructor(){super(),lC(this,ut),lC(this,ua),lC(this,un),lC(this,us),lC(this,ud),lC(this,uc),lC(this,um),lC(this,uv),lC(this,d7,!1),lC(this,d8,{}),lC(this,d6,!0),lC(this,d9,new dE(this,"hotkeys")),lC(this,ue,{...u_,onCloseErrorDialog:()=>lx(this,un,uo).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{du(this,l7.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),lx(this,ua,ur).call(this),this.isConnected&&lx(this,ut,ui).call(this)}static get observedAttributes(){var e;return[...null!=(e=dD.observedAttributes)?e:[],...uE,...uf,...ug]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=d4(this))}attributeChangedCallback(e,t,i){var a;switch(lx(this,ut,ui).call(this),super.attributeChangedCallback(e,t,i),e){case d5.HOTKEYS:lM(this,d9).value=i;break;case d5.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&d_(l6("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case d5.THUMBNAIL_TOKEN:{let{aud:e}=dr(i);i&&"t"!==e&&d_(l6("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case d5.STORYBOARD_TOKEN:{let{aud:e}=dr(i);i&&"s"!==e&&d_(l6("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case sZ.PLAYBACK_ID:null!=i&&i.includes("?token")&&dy(l6("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case sZ.STREAM_TYPE:i&&![aQ.LIVE,aQ.ON_DEMAND,aQ.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:dA({file:"invalid-stream-type.md",message:l6("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):this.targetLiveWindow=i===aQ.LIVE?0:Number.NaN}[sZ.PLAYBACK_ID,d2.SRC,d5.PLAYBACK_TOKEN].includes(e)&&t!==i&&lO(this,ue,{...lM(this,ue),...u_}),lx(this,us,ul).call(this,{[null!=(a=df[e])?a:dt(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(sZ.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?aJ.includes(e)?this.setAttribute(sZ.PREFER_CMCD,e):d_(`Invalid value for preferCmcd. Must be one of ${aJ.join()}`):this.removeAttribute(sZ.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute("media-has-played"))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute("media-time-is-live")}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(d5.THEME))?e:"classic"}set theme(e){this.setAttribute(d5.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(d3.includes(i))continue;let a=e.getAttribute(i);t[dt(i)]=""===a||a}return t}set themeProps(e){var t,i;lx(this,ut,ui).call(this);let a={...this.themeProps,...e};for(let r in a){if(d3.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(de(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(de(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(sZ.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(sZ.PLAYBACK_ID,e):this.removeAttribute(sZ.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=uA(this,d2.SRC))?e:void 0:null!=(t=this.getAttribute(d2.SRC))?t:void 0}set src(e){e?this.setAttribute(d2.SRC,e):this.removeAttribute(d2.SRC)}get poster(){var e;let t=this.getAttribute(d2.POSTER);return null!=t?t:this.playbackId&&!this.audio?dp(this.playbackId,{domain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(d2.POSTER,e):this.removeAttribute(d2.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(d5.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(d5.STORYBOARD_SRC,e):this.removeAttribute(d5.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[aQ.LIVE,aQ.UNKNOWN].includes(this.streamType)?void 0:dv(this.playbackId,{domain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(d5.AUDIO)}set audio(e){if(!e){this.removeAttribute(d5.AUDIO);return}this.setAttribute(d5.AUDIO,"")}get hotkeys(){return lM(this,d9)}get nohotkeys(){return this.hasAttribute(d5.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(d5.NOHOTKEYS);return}this.setAttribute(d5.NOHOTKEYS,"")}get thumbnailTime(){return di(this.getAttribute(d5.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(d5.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(d5.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(d5.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=uA(this,d5.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(d5.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(d5.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=l4.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(d5.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(d5.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=l4.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(d5.SECONDARY_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(d5.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(d5.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(d5.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(d5.PLAYBACK_RATES))return this.getAttribute(d5.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(d5.PLAYBACK_RATES);return}this.setAttribute(d5.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=di(this.getAttribute(d5.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(d5.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=di(this.getAttribute(d5.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(d5.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(d5.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(d5.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(d5.DEFAULT_HIDDEN_CAPTIONS)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(sZ.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(sZ.PLAYER_SOFTWARE_VERSION))?e:dh}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(sZ.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(sZ.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(sZ.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(sZ.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(sZ.MAX_RESOLUTION,e):this.removeAttribute(sZ.MAX_RESOLUTION))}get customDomain(){var e;return null!=(e=this.getAttribute(sZ.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(sZ.CUSTOM_DOMAIN,e):this.removeAttribute(sZ.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=uA(this,sZ.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(sZ.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(d5.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(d5.NO_VOLUME_PREF,""):this.removeAttribute(d5.NO_VOLUME_PREF)}get debug(){return null!=uA(this,sZ.DEBUG)}set debug(e){e?this.setAttribute(sZ.DEBUG,""):this.removeAttribute(sZ.DEBUG)}get disableCookies(){return null!=uA(this,sZ.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(sZ.DISABLE_COOKIES,""):this.removeAttribute(sZ.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(sZ.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:aQ.UNKNOWN}set streamType(e){this.setAttribute(sZ.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(d5.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(d5.DEFAULT_STREAM_TYPE))?i:aQ.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(d5.DEFAULT_STREAM_TYPE,e):this.removeAttribute(d5.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(d5.TARGET_LIVE_WINDOW)?+this.getAttribute(d5.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(d5.TARGET_LIVE_WINDOW):this.setAttribute(d5.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return di(uA(this,sZ.START_TIME))}set startTime(e){this.setAttribute(sZ.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(sZ.PREFER_PLAYBACK);if(e===az.MSE||e===az.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===az.MSE||e===az.NATIVE?this.setAttribute(sZ.PREFER_PLAYBACK,e):this.removeAttribute(sZ.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(lx(this,ut,ui).call(this),!this.media){dy("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...d4(this),...e}}async addCuePoints(e){var t;if(lx(this,ut,ui).call(this),!this.media){dy("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(d5.PLAYBACK_TOKEN),t=this.getAttribute(d5.THUMBNAIL_TOKEN),i=this.getAttribute(d5.STORYBOARD_TOKEN);return{...lM(this,d8),...null!=e?{playback:e}:{},...null!=t?{thumbnail:t}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){lO(this,d8,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(d5.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(d5.PLAYBACK_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(d5.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(d5.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(d5.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(d5.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return ra(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function uA(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}d7=new WeakMap,d8=new WeakMap,d6=new WeakMap,d9=new WeakMap,ue=new WeakMap,ut=new WeakSet,ui=function(){var e,t,i,a;if(!lM(this,d7)){lO(this,d7,!0),lx(this,us,ul).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof l4.HTMLElement))throw""}catch{dy("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof sz))throw""}catch{dy("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof e4))throw""}catch{dy("<media-controller> failed to upgrade!")}a=this,a.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=a.media)||t.append(e.cloneNode())}),dI.forEach(e=>{var t;null==(t=a.media)||t.addEventListener(e,e=>{a.dispatchEvent(new Event(e.type))})}),lx(this,ud,uu).call(this),lx(this,uc,uh).call(this),lx(this,um,up).call(this),lO(this,d6,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))||t),lx(this,uv,ub).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>{lx(this,us,ul).call(this)})}},ua=new WeakSet,ur=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},un=new WeakSet,uo=function(e){Object.assign(lM(this,ue),e),lx(this,us,ul).call(this)},us=new WeakSet,ul=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(dY((t={...lM(this,ue),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(d5.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=l4.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(d5.NOHOTKEYS),hotKeys:this.getAttribute(d5.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(sZ.TARGET_LIVE_WINDOW),streamType:db(this.getAttribute(sZ.STREAM_TYPE)),primaryColor:this.primaryColor,secondaryColor:this.secondaryColor,forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(d5.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(sZ.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(d5.TITLE),novolumepref:this.hasAttribute(d5.NO_VOLUME_PREF),...t})),this.shadowRoot)},ud=new WeakSet,uu=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(d3.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},uc=new WeakSet,uh=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof aK||(t=new aK(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){d_(t),t.data&&d_(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=dQ(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&dA(a),dy(t),t.data&&dy(`${t.name} data:`,t.data),lx(this,un,uo).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof aK))return e;let{devlog:r}=dQ(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new aK(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},um=new WeakSet,up=function(){var e,t,i,a;let r=()=>lx(this,us,ul).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},uv=new WeakSet,ub=function(){var e,t;let i=/.*Version\/.*Safari\/.*/.test(navigator.userAgent);if(!/Firefox/i.test(navigator.userAgent))return;let a,r=new WeakMap,n=()=>this.streamType===aQ.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,o=(e,t,a=!1)=>{n()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,n=i?-2:-3;this.streamType===aQ.LIVE&&(n=i?-1:-2);let o=n-t;(e.line!==o||a)&&(r.has(e)||r.set(e,e.line),e.line=o-1,e.line=o)}else setTimeout(()=>{e.line=r.get(e)||"auto"},500)}})},s=()=>{var e,t;o(a,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))&&t)},l=()=>{var e,t;let i=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];i!==a&&(null==a||a.removeEventListener("cuechange",s)),null==(a=i)||a.addEventListener("cuechange",s),o(a,lM(this,d6))};if(l(),null==(e=this.textTracks)||e.addEventListener("change",l),null==(t=this.textTracks)||t.addEventListener("addtrack",l),navigator.userAgent.includes("Chrome/")){let e=()=>{o(a,lM(this,d6),!0),this.paused||window.requestAnimationFrame(e)};this.addEventListener("playing",()=>{e()})}this.addEventListener("userinactivechange",()=>{var e,t;let i=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))||t;lM(this,d6)!==i&&(lO(this,d6,i),o(a,lM(this,d6)))})},l4.customElements.get("mux-player")||(l4.customElements.define("mux-player",uy),l4.MuxPlayerElement=uy);var uk={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},uT=e=>null==e,uw=(e,t)=>!uT(t)&&e in t,uI=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),uS=(e,t)=>{if(!("boolean"==typeof t&&!t))return uw(e,uk)?uk[e]:/[A-Z]/.test(e)?uI(e):e},uR=(e,t)=>"boolean"==typeof e?"":e,uL=(e={})=>Object.entries(e).reduce((e,[t,i])=>{let a=uS(t,i);if(!a)return e;let r=uR(i,t);return e[a]=r,e},{}),uD=(...e)=>{let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})},[e]),t},uM=Object.prototype.hasOwnProperty,uC=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!uM.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},uO=(e,t,i)=>!uC(t,e[i]),ux=(e,t,i)=>{e[i]=t},uN=(e,t,i,a=ux,r=uO)=>(0,n.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),uP=(()=>{try{return"1.14.2"}catch{}return"UNKNOWN"})(),uU=n.forwardRef(({children:e,...t},i)=>n.createElement("mux-player",uL({...t,ref:i}),e)),uB=(e,t,i)=>(0,n.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),uW=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:o,onLoadedData:s,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:f,onPause:E,onSeeking:g,onSeeked:_,onStalled:y,onSuspend:A,onEnded:k,onError:T,onCuePointChange:w,onCuePointsChange:I,metadata:S,tokens:R,paused:L,playbackId:D,playbackRates:M,currentTime:C,themeProps:O,...x}=t;return uN("playbackRates",M,e),uN("metadata",S,e),uN("themeProps",O,e),uN("tokens",R,e),uN("playbackId",D,e),uN("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&uO(e,t,i)),uN("currentTime",C,e,(e,t)=>{null!=t&&(e.currentTime=t)}),uB("abort",e,i),uB("canplay",e,a),uB("canplaythrough",e,r),uB("emptied",e,n),uB("loadstart",e,o),uB("loadeddata",e,s),uB("loadedmetadata",e,l),uB("progress",e,d),uB("durationchange",e,u),uB("volumechange",e,c),uB("ratechange",e,h),uB("resize",e,m),uB("waiting",e,p),uB("play",e,v),uB("playing",e,b),uB("timeupdate",e,f),uB("pause",e,E),uB("seeking",e,g),uB("seeked",e,_),uB("stalled",e,y),uB("suspend",e,A),uB("ended",e,k),uB("error",e,T),uB("cuepointchange",e,w),uB("cuepointschange",e,I),[x]},uV=n.forwardRef((e,t)=>{let i=(0,n.useRef)(null),a=uD(i,t),[r]=uW(i,e);return n.createElement(uU,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:uP,...r})})}}]);