exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 64622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(e,t){ true?t(exports,__webpack_require__(18038),__webpack_require__(55601)):0}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),i=r(n);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function m(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var b=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function h(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=b.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var w=[".DS_Store","Thumbs.db"];function D(e){return"object"==typeof e&&null!==e}function x(e){return O(e.target.files).map((function(e){return h(e)}))}function F(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return h(e)}))]}}))}))}function j(e,t){return v(this,void 0,void 0,(function(){var n;return m(this,(function(r){switch(r.label){case 0:return e.items?(n=O(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(E))]):[3,2];case 1:return[2,A(k(r.sent()))];case 2:return[2,A(O(e.files).map((function(e){return h(e)})))]}}))}))}function A(e){return e.filter((function(e){return-1===w.indexOf(e.name)}))}function O(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function E(e){if("function"!=typeof e.webkitGetAsEntry)return P(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?C(t):P(e)}function k(e){return e.reduce((function(e,t){return y(y([],g(e),!1),g(Array.isArray(t)?k(t):[t]),!1)}),[])}function P(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=h(t);return Promise.resolve(n)}function S(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return[2,e.isDirectory?C(e):z(e)]}))}))}function C(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return v(i,void 0,void 0,(function(){var i,a,c;return m(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),n(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(S)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function z(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=h(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var R="file-invalid-type",T="file-too-large",I="file-too-small",M="too-many-files",L={FileInvalidType:R,FileTooLarge:T,FileTooSmall:I,TooManyFiles:M},_=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:R,message:"File type must be ".concat(t)}},B=function(e){return{code:T,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},K=function(e){return{code:I,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},q={code:M,message:"Too many files"};function U(e,t){var n="application/x-moz-file"===e.type||function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[n,n?null:_(t)]}function W(e,t,n){if($(e.size))if($(t)&&$(n)){if(e.size>n)return[!1,B(n)];if(e.size<t)return[!1,K(t)]}else{if($(t)&&e.size<t)return[!1,K(t)];if($(n)&&e.size>n)return[!1,B(n)]}return[!0,null]}function $(e){return null!=e}function G(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=s(U(e,n),1)[0],i=s(W(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}function H(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function N(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Y(e){e.preventDefault()}function J(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function Q(e){return-1!==e.indexOf("Edge/")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return J(e)||Q(e)}function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!H(e)&&t&&t.apply(void 0,[e].concat(r)),H(e)}))}}function Z(){return"showOpenFilePicker"in window}function ee(e){return $(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=s(e,2),n=t[0],r=t[1],o=!0;return oe(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(ie)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return c(c({},e),{},u({},r,o))}),{})}]:e}function te(e){if($(e))return Object.entries(e).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return[].concat(f(e),[r],f(o))}),[]).filter((function(e){return oe(e)||ie(e)})).join(",")}function ne(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function re(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function oe(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ie(e){return/^.*\.[\w]+$/.test(e)}var ae=["children"],ce=["open"],ue=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],le=["refKey","onChange","onClick"],se=t.forwardRef((function(e,n){var r=e.children,i=de(l(e,ae)),a=i.open,u=l(i,ce);return t.useImperativeHandle(n,(function(){return{open:a}}),[a]),o.default.createElement(t.Fragment,null,r(c(c({},u),{},{open:a})))}));se.displayName="Dropzone";var fe={disabled:!1,getFilesFromEvent:function(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return D(e)&&D(e.dataTransfer)?[2,j(e.dataTransfer,e.type)]:function(e){return D(e)&&D(e.target)}(e)?[2,x(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,F(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};se.defaultProps=fe,se.propTypes={children:i.default.func,accept:i.default.objectOf(i.default.arrayOf(i.default.string)),multiple:i.default.bool,preventDropOnDocument:i.default.bool,noClick:i.default.bool,noKeyboard:i.default.bool,noDrag:i.default.bool,noDragEventsBubbling:i.default.bool,minSize:i.default.number,maxSize:i.default.number,maxFiles:i.default.number,disabled:i.default.bool,getFilesFromEvent:i.default.func,onFileDialogCancel:i.default.func,onFileDialogOpen:i.default.func,useFsAccessApi:i.default.bool,autoFocus:i.default.bool,onDragEnter:i.default.func,onDragLeave:i.default.func,onDragOver:i.default.func,onDrop:i.default.func,onDropAccepted:i.default.func,onDropRejected:i.default.func,onError:i.default.func,validator:i.default.func};var pe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=c(c({},fe),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,p=n.minSize,d=n.multiple,v=n.maxFiles,m=n.onDragEnter,g=n.onDragLeave,y=n.onDragOver,b=n.onDrop,h=n.onDropAccepted,w=n.onDropRejected,D=n.onFileDialogCancel,x=n.onFileDialogOpen,F=n.useFsAccessApi,j=n.autoFocus,A=n.preventDropOnDocument,O=n.noClick,E=n.noKeyboard,k=n.noDrag,P=n.noDragEventsBubbling,S=n.onError,C=n.validator,z=t.useMemo((function(){return te(r)}),[r]),R=t.useMemo((function(){return ee(r)}),[r]),T=t.useMemo((function(){return"function"==typeof x?x:me}),[x]),I=t.useMemo((function(){return"function"==typeof D?D:me}),[D]),M=t.useRef(null),L=t.useRef(null),_=t.useReducer(ve,pe),B=s(_,2),K=B[0],$=B[1],J=K.isFocused,Q=K.isFileDialogActive,oe=t.useRef("undefined"!=typeof window&&window.isSecureContext&&F&&Z()),ie=function(){!oe.current&&Q&&setTimeout((function(){L.current&&(L.current.files.length||($({type:"closeDialog"}),I()))}),300)};t.useEffect((function(){return window.addEventListener("focus",ie,!1),function(){window.removeEventListener("focus",ie,!1)}}),[L,Q,I,oe]);var ae=t.useRef([]),ce=function(e){M.current&&M.current.contains(e.target)||(e.preventDefault(),ae.current=[])};t.useEffect((function(){return A&&(document.addEventListener("dragover",Y,!1),document.addEventListener("drop",ce,!1)),function(){A&&(document.removeEventListener("dragover",Y),document.removeEventListener("drop",ce))}}),[M,A]),t.useEffect((function(){return!o&&j&&M.current&&M.current.focus(),function(){}}),[M,j,o]);var se=t.useCallback((function(e){S?S(e):console.error(e)}),[S]),de=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e),ae.current=[].concat(f(ae.current),[e.target]),N(e)&&Promise.resolve(i(e)).then((function(t){if(!H(e)||P){var n=t.length,r=n>0&&G({files:t,accept:z,minSize:p,maxSize:a,multiple:d,maxFiles:v,validator:C});$({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),m&&m(e)}})).catch((function(e){return se(e)}))}),[i,m,se,P,z,p,a,d,v,C]),ge=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e);var t=N(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&y&&y(e),!1}),[y,P]),ye=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e);var t=ae.current.filter((function(e){return M.current&&M.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ae.current=t,t.length>0||($({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),N(e)&&g&&g(e))}),[M,g,P]),be=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=s(U(e,z),2),o=t[0],i=t[1],c=s(W(e,p,a),2),u=c[0],l=c[1],f=C?C(e):null;if(o&&u&&!f)n.push(e);else{var d=[i,l];f&&(d=d.concat(f)),r.push({file:e,errors:d.filter((function(e){return e}))})}})),(!d&&n.length>1||d&&v>=1&&n.length>v)&&(n.forEach((function(e){r.push({file:e,errors:[q]})})),n.splice(0)),$({acceptedFiles:n,fileRejections:r,type:"setFiles"}),b&&b(n,r,t),r.length>0&&w&&w(r,t),n.length>0&&h&&h(n,t)}),[$,d,z,p,a,v,b,h,w,C]),he=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e),ae.current=[],N(e)&&Promise.resolve(i(e)).then((function(t){H(e)&&!P||be(t,e)})).catch((function(e){return se(e)})),$({type:"reset"})}),[i,be,se,P]),we=t.useCallback((function(){if(oe.current){$({type:"openDialog"}),T();var e={multiple:d,types:R};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){be(e,null),$({type:"closeDialog"})})).catch((function(e){ne(e)?(I(e),$({type:"closeDialog"})):re(e)?(oe.current=!1,L.current?(L.current.value=null,L.current.click()):se(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):se(e)}))}else L.current&&($({type:"openDialog"}),T(),L.current.value=null,L.current.click())}),[$,T,I,F,be,se,R,d]),De=t.useCallback((function(e){M.current&&M.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[M,we]),xe=t.useCallback((function(){$({type:"focus"})}),[]),Fe=t.useCallback((function(){$({type:"blur"})}),[]),je=t.useCallback((function(){O||(V()?setTimeout(we,0):we())}),[O,we]),Ae=function(e){return o?null:e},Oe=function(e){return E?null:Ae(e)},Ee=function(e){return k?null:Ae(e)},ke=function(e){P&&e.stopPropagation()},Pe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,f=e.onClick,p=e.onDragEnter,d=e.onDragOver,v=e.onDragLeave,m=e.onDrop,g=l(e,ue);return c(c(u({onKeyDown:Oe(X(i,De)),onFocus:Oe(X(a,xe)),onBlur:Oe(X(s,Fe)),onClick:Ae(X(f,je)),onDragEnter:Ee(X(p,de)),onDragOver:Ee(X(d,ge)),onDragLeave:Ee(X(v,ye)),onDrop:Ee(X(m,he)),role:"string"==typeof r&&""!==r?r:"presentation"},n,M),o||E?{}:{tabIndex:0}),g)}}),[M,De,xe,Fe,je,de,ge,ye,he,E,k,o]),Se=t.useCallback((function(e){e.stopPropagation()}),[]),Ce=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=l(e,le),a=u({accept:z,multiple:d,type:"file",style:{display:"none"},onChange:Ae(X(r,he)),onClick:Ae(X(o,Se)),tabIndex:-1},n,L);return c(c({},a),i)}}),[L,r,d,he,o]);return c(c({},K),{},{isFocused:J&&!o,getRootProps:Pe,getInputProps:Ce,rootRef:M,inputRef:L,open:Ae(we)})}function ve(e,t){switch(t.type){case"focus":return c(c({},e),{},{isFocused:!0});case"blur":return c(c({},e),{},{isFocused:!1});case"openDialog":return c(c({},pe),{},{isFileDialogActive:!0});case"closeDialog":return c(c({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return c(c({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return c(c({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return c({},pe);default:return e}}function me(){}e.ErrorCode=L,e.default=se,e.useDropzone=de,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9maWxlLXNlbGVjdG9yL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvZmlsZS1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2VzL2luZGV4LmpzIiwiLi4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJleHBvcnQgdmFyIENPTU1PTl9NSU1FX1RZUEVTID0gbmV3IE1hcChbXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9NSU1FX3R5cGVzL0NvbW1vbl90eXBlc1xuICAgIFsnYWFjJywgJ2F1ZGlvL2FhYyddLFxuICAgIFsnYWJ3JywgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCddLFxuICAgIFsnYXJjJywgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYyddLFxuICAgIFsnYXZpZicsICdpbWFnZS9hdmlmJ10sXG4gICAgWydhdmknLCAndmlkZW8veC1tc3ZpZGVvJ10sXG4gICAgWydhencnLCAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vayddLFxuICAgIFsnYmluJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYm1wJywgJ2ltYWdlL2JtcCddLFxuICAgIFsnYnonLCAnYXBwbGljYXRpb24veC1iemlwJ10sXG4gICAgWydiejInLCAnYXBwbGljYXRpb24veC1iemlwMiddLFxuICAgIFsnY2RhJywgJ2FwcGxpY2F0aW9uL3gtY2RmJ10sXG4gICAgWydjc2gnLCAnYXBwbGljYXRpb24veC1jc2gnXSxcbiAgICBbJ2NzcycsICd0ZXh0L2NzcyddLFxuICAgIFsnY3N2JywgJ3RleHQvY3N2J10sXG4gICAgWydkb2MnLCAnYXBwbGljYXRpb24vbXN3b3JkJ10sXG4gICAgWydkb2N4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10sXG4gICAgWydlb3QnLCAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnXSxcbiAgICBbJ2VwdWInLCAnYXBwbGljYXRpb24vZXB1Yit6aXAnXSxcbiAgICBbJ2d6JywgJ2FwcGxpY2F0aW9uL2d6aXAnXSxcbiAgICBbJ2dpZicsICdpbWFnZS9naWYnXSxcbiAgICBbJ2hlaWMnLCAnaW1hZ2UvaGVpYyddLFxuICAgIFsnaGVpZicsICdpbWFnZS9oZWlmJ10sXG4gICAgWydodG0nLCAndGV4dC9odG1sJ10sXG4gICAgWydodG1sJywgJ3RleHQvaHRtbCddLFxuICAgIFsnaWNvJywgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbiddLFxuICAgIFsnaWNzJywgJ3RleHQvY2FsZW5kYXInXSxcbiAgICBbJ2phcicsICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnXSxcbiAgICBbJ2pwZWcnLCAnaW1hZ2UvanBlZyddLFxuICAgIFsnanBnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pzJywgJ3RleHQvamF2YXNjcmlwdCddLFxuICAgIFsnanNvbicsICdhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgWydqc29ubGQnLCAnYXBwbGljYXRpb24vbGQranNvbiddLFxuICAgIFsnbWlkJywgJ2F1ZGlvL21pZGknXSxcbiAgICBbJ21pZGknLCAnYXVkaW8vbWlkaSddLFxuICAgIFsnbWpzJywgJ3RleHQvamF2YXNjcmlwdCddLFxuICAgIFsnbXAzJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ21wNCcsICd2aWRlby9tcDQnXSxcbiAgICBbJ21wZWcnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbXBrZycsICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCddLFxuICAgIFsnb2RwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJ10sXG4gICAgWydvZHMnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCddLFxuICAgIFsnb2R0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCddLFxuICAgIFsnb2dhJywgJ2F1ZGlvL29nZyddLFxuICAgIFsnb2d2JywgJ3ZpZGVvL29nZyddLFxuICAgIFsnb2d4JywgJ2FwcGxpY2F0aW9uL29nZyddLFxuICAgIFsnb3B1cycsICdhdWRpby9vcHVzJ10sXG4gICAgWydvdGYnLCAnZm9udC9vdGYnXSxcbiAgICBbJ3BuZycsICdpbWFnZS9wbmcnXSxcbiAgICBbJ3BkZicsICdhcHBsaWNhdGlvbi9wZGYnXSxcbiAgICBbJ3BocCcsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncHB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50J10sXG4gICAgWydwcHR4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nXSxcbiAgICBbJ3JhcicsICdhcHBsaWNhdGlvbi92bmQucmFyJ10sXG4gICAgWydydGYnLCAnYXBwbGljYXRpb24vcnRmJ10sXG4gICAgWydzaCcsICdhcHBsaWNhdGlvbi94LXNoJ10sXG4gICAgWydzdmcnLCAnaW1hZ2Uvc3ZnK3htbCddLFxuICAgIFsnc3dmJywgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10sXG4gICAgWyd0YXInLCAnYXBwbGljYXRpb24veC10YXInXSxcbiAgICBbJ3RpZicsICdpbWFnZS90aWZmJ10sXG4gICAgWyd0aWZmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICBbJ3RzJywgJ3ZpZGVvL21wMnQnXSxcbiAgICBbJ3R0ZicsICdmb250L3R0ZiddLFxuICAgIFsndHh0JywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ3ZzZCcsICdhcHBsaWNhdGlvbi92bmQudmlzaW8nXSxcbiAgICBbJ3dhdicsICdhdWRpby93YXYnXSxcbiAgICBbJ3dlYmEnLCAnYXVkaW8vd2VibSddLFxuICAgIFsnd2VibScsICd2aWRlby93ZWJtJ10sXG4gICAgWyd3ZWJwJywgJ2ltYWdlL3dlYnAnXSxcbiAgICBbJ3dvZmYnLCAnZm9udC93b2ZmJ10sXG4gICAgWyd3b2ZmMicsICdmb250L3dvZmYyJ10sXG4gICAgWyd4aHRtbCcsICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnXSxcbiAgICBbJ3hscycsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hsc3gnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnXSxcbiAgICBbJ3htbCcsICdhcHBsaWNhdGlvbi94bWwnXSxcbiAgICBbJ3h1bCcsICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJ10sXG4gICAgWyd6aXAnLCAnYXBwbGljYXRpb24vemlwJ10sXG4gICAgWyc3eicsICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnXSxcbiAgICAvLyBPdGhlcnNcbiAgICBbJ21rdicsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydtb3YnLCAndmlkZW8vcXVpY2t0aW1lJ10sXG4gICAgWydtc2cnLCAnYXBwbGljYXRpb24vdm5kLm1zLW91dGxvb2snXVxuXSk7XG5leHBvcnQgZnVuY3Rpb24gdG9GaWxlV2l0aFBhdGgoZmlsZSwgcGF0aCkge1xuICAgIHZhciBmID0gd2l0aE1pbWVUeXBlKGZpbGUpO1xuICAgIGlmICh0eXBlb2YgZi5wYXRoICE9PSAnc3RyaW5nJykgeyAvLyBvbiBlbGVjdHJvbiwgcGF0aCBpcyBhbHJlYWR5IHNldCB0byB0aGUgYWJzb2x1dGUgcGF0aFxuICAgICAgICB2YXIgd2Via2l0UmVsYXRpdmVQYXRoID0gZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGg7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCAncGF0aCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHBhdGhcbiAgICAgICAgICAgICAgICAvLyBJZiA8aW5wdXQgd2Via2l0ZGlyZWN0b3J5PiBpcyBzZXQsXG4gICAgICAgICAgICAgICAgLy8gdGhlIEZpbGUgd2lsbCBoYXZlIGEge3dlYmtpdFJlbGF0aXZlUGF0aH0gcHJvcGVydHlcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTElucHV0RWxlbWVudC93ZWJraXRkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiB3ZWJraXRSZWxhdGl2ZVBhdGggPT09ICdzdHJpbmcnICYmIHdlYmtpdFJlbGF0aXZlUGF0aC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gd2Via2l0UmVsYXRpdmVQYXRoXG4gICAgICAgICAgICAgICAgICAgIDogZmlsZS5uYW1lLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmO1xufVxuZnVuY3Rpb24gd2l0aE1pbWVUeXBlKGZpbGUpIHtcbiAgICB2YXIgbmFtZSA9IGZpbGUubmFtZTtcbiAgICB2YXIgaGFzRXh0ZW5zaW9uID0gbmFtZSAmJiBuYW1lLmxhc3RJbmRleE9mKCcuJykgIT09IC0xO1xuICAgIGlmIChoYXNFeHRlbnNpb24gJiYgIWZpbGUudHlwZSkge1xuICAgICAgICB2YXIgZXh0ID0gbmFtZS5zcGxpdCgnLicpXG4gICAgICAgICAgICAucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHR5cGUgPSBDT01NT05fTUlNRV9UWVBFUy5nZXQoZXh0KTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWxlLCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUuanMubWFwIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB0b0ZpbGVXaXRoUGF0aCB9IGZyb20gJy4vZmlsZSc7XG52YXIgRklMRVNfVE9fSUdOT1JFID0gW1xuICAgIC8vIFRodW1ibmFpbCBjYWNoZSBmaWxlcyBmb3IgbWFjT1MgYW5kIFdpbmRvd3NcbiAgICAnLkRTX1N0b3JlJyxcbiAgICAnVGh1bWJzLmRiJyAvLyBXaW5kb3dzXG5dO1xuLyoqXG4gKiBDb252ZXJ0IGEgRHJhZ0V2ZW50J3MgRGF0YVRyYXNmZXIgb2JqZWN0IHRvIGEgbGlzdCBvZiBGaWxlIG9iamVjdHNcbiAqIE5PVEU6IElmIHNvbWUgb2YgdGhlIGl0ZW1zIGFyZSBmb2xkZXJzLFxuICogZXZlcnl0aGluZyB3aWxsIGJlIGZsYXR0ZW5lZCBhbmQgcGxhY2VkIGluIHRoZSBzYW1lIGxpc3QgYnV0IHRoZSBwYXRocyB3aWxsIGJlIGtlcHQgYXMgYSB7cGF0aH0gcHJvcGVydHkuXG4gKlxuICogRVhQRVJJTUVOVEFMOiBBIGxpc3Qgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1IYW5kbGUgb2JqZWN0cyBjYW4gYWxzbyBiZSBwYXNzZWQgYXMgYW4gYXJnXG4gKiBhbmQgYSBsaXN0IG9mIEZpbGUgb2JqZWN0cyB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSBldnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdmVudChldnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChldnQpICYmIGlzRGF0YVRyYW5zZmVyKGV2dC5kYXRhVHJhbnNmZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldERhdGFUcmFuc2ZlckZpbGVzKGV2dC5kYXRhVHJhbnNmZXIsIGV2dC50eXBlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0NoYW5nZUV2dChldnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldElucHV0RmlsZXMoZXZ0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2dCkgJiYgZXZ0LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAnZ2V0RmlsZScgaW4gaXRlbSAmJiB0eXBlb2YgaXRlbS5nZXRGaWxlID09PSAnZnVuY3Rpb24nOyB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRGc0hhbmRsZUZpbGVzKGV2dCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0RhdGFUcmFuc2Zlcih2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NoYW5nZUV2dCh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QodmFsdWUudGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYgIT09IG51bGw7XG59XG5mdW5jdGlvbiBnZXRJbnB1dEZpbGVzKGV2dCkge1xuICAgIHJldHVybiBmcm9tTGlzdChldnQudGFyZ2V0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHRvRmlsZVdpdGhQYXRoKGZpbGUpOyB9KTtcbn1cbi8vIEVlIGV4cGVjdCBlYWNoIGhhbmRsZSB0byBiZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVIYW5kbGVcbmZ1bmN0aW9uIGdldEZzSGFuZGxlRmlsZXMoaGFuZGxlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZpbGVzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChoYW5kbGVzLm1hcChmdW5jdGlvbiAoaCkgeyByZXR1cm4gaC5nZXRGaWxlKCk7IH0pKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdG9GaWxlV2l0aFBhdGgoZmlsZSk7IH0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREYXRhVHJhbnNmZXJGaWxlcyhkdCwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zLCBmaWxlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkdC5pdGVtcykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZnJvbUxpc3QoZHQuaXRlbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kbmQuaHRtbCNkbmRldmVudHMsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgJ2RyYWdzdGFydCcgYW5kICdkcm9wJyBoYXMgYWNjZXNzIHRvIHRoZSBkYXRhIChzb3VyY2Ugbm9kZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdkcm9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGl0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChpdGVtcy5tYXAodG9GaWxlUHJvbWlzZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5vSWdub3JlZEZpbGVzKGZsYXR0ZW4oZmlsZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgbm9JZ25vcmVkRmlsZXMoZnJvbUxpc3QoZHQuZmlsZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB0b0ZpbGVXaXRoUGF0aChmaWxlKTsgfSkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub0lnbm9yZWRGaWxlcyhmaWxlcykge1xuICAgIHJldHVybiBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIEZJTEVTX1RPX0lHTk9SRS5pbmRleE9mKGZpbGUubmFtZSkgPT09IC0xOyB9KTtcbn1cbi8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tKClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb20jQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZUxpc3Rcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXJJdGVtTGlzdFxuZnVuY3Rpb24gZnJvbUxpc3QoaXRlbXMpIHtcbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZpbGUgPSBpdGVtc1tpXTtcbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVzO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW1cbmZ1bmN0aW9uIHRvRmlsZVByb21pc2VzKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0ud2Via2l0R2V0QXNFbnRyeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSk7XG4gICAgfVxuICAgIHZhciBlbnRyeSA9IGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICAgIC8vIFNhZmFyaSBzdXBwb3J0cyBkcm9wcGluZyBhbiBpbWFnZSBub2RlIGZyb20gYSBkaWZmZXJlbnQgd2luZG93IGFuZCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nXG4gICAgLy8gdGhlIERhdGFUcmFuc2Zlckl0ZW0uZ2V0QXNGaWxlKCkgQVBJXG4gICAgLy8gTk9URTogRmlsZVN5c3RlbUVudHJ5LmZpbGUoKSB0aHJvd3MgaWYgdHJ5aW5nIHRvIGdldCB0aGUgZmlsZVxuICAgIGlmIChlbnRyeSAmJiBlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZnJvbURpckVudHJ5KGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pO1xufVxuZnVuY3Rpb24gZmxhdHRlbihpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmlsZXMpIHsgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGFjYyksIGZhbHNlKSwgX19yZWFkKChBcnJheS5pc0FycmF5KGZpbGVzKSA/IGZsYXR0ZW4oZmlsZXMpIDogW2ZpbGVzXSkpLCBmYWxzZSk7IH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pIHtcbiAgICB2YXIgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlwiLmNvbmNhdChpdGVtLCBcIiBpcyBub3QgYSBGaWxlXCIpKTtcbiAgICB9XG4gICAgdmFyIGZ3cCA9IHRvRmlsZVdpdGhQYXRoKGZpbGUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZndwKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRW50cnlcbmZ1bmN0aW9uIGZyb21FbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVudHJ5LmlzRGlyZWN0b3J5ID8gZnJvbURpckVudHJ5KGVudHJ5KSA6IGZyb21GaWxlRW50cnkoZW50cnkpXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5XG5mdW5jdGlvbiBmcm9tRGlyRW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gcmVhZEVudHJpZXMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeS9jcmVhdGVSZWFkZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5UmVhZGVyL3JlYWRFbnRyaWVzXG4gICAgICAgICAgICByZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24gKGJhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzLCBlcnJfMSwgaXRlbXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYmF0Y2gubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChlbnRyaWVzKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBQcm9taXNlLmFsbChiYXRjaC5tYXAoZnJvbUVudHJ5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSByZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVFbnRyeVxuZnVuY3Rpb24gZnJvbUZpbGVFbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ3cCA9IHRvRmlsZVdpdGhQYXRoKGZpbGUsIGVudHJ5LmZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZndwKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLXNlbGVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZmlsZSwgYWNjZXB0ZWRGaWxlcykge1xuICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgdmFyIGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xuICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCAnJztcbiAgICB2YXIgbWltZVR5cGUgPSAoZmlsZS50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgdmFsaWRUeXBlID0gdHlwZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKHZhbGlkVHlwZS5jaGFyQXQoMCkgPT09ICcuJykge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCh2YWxpZFR5cGUpO1xuICAgICAgfSBlbHNlIGlmICh2YWxpZFR5cGUuZW5kc1dpdGgoJy8qJykpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59OyIsImltcG9ydCBhY2NlcHRzIGZyb20gXCJhdHRyLWFjY2VwdFwiO1xuXG4vLyBFcnJvciBjb2Rlc1xuZXhwb3J0IGNvbnN0IEZJTEVfSU5WQUxJRF9UWVBFID0gXCJmaWxlLWludmFsaWQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEZJTEVfVE9PX0xBUkdFID0gXCJmaWxlLXRvby1sYXJnZVwiO1xuZXhwb3J0IGNvbnN0IEZJTEVfVE9PX1NNQUxMID0gXCJmaWxlLXRvby1zbWFsbFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX0ZJTEVTID0gXCJ0b28tbWFueS1maWxlc1wiO1xuXG5leHBvcnQgY29uc3QgRXJyb3JDb2RlID0ge1xuICBGaWxlSW52YWxpZFR5cGU6IEZJTEVfSU5WQUxJRF9UWVBFLFxuICBGaWxlVG9vTGFyZ2U6IEZJTEVfVE9PX0xBUkdFLFxuICBGaWxlVG9vU21hbGw6IEZJTEVfVE9PX1NNQUxMLFxuICBUb29NYW55RmlsZXM6IFRPT19NQU5ZX0ZJTEVTLFxufTtcblxuLy8gRmlsZSBFcnJvcnNcbmV4cG9ydCBjb25zdCBnZXRJbnZhbGlkVHlwZVJlamVjdGlvbkVyciA9IChhY2NlcHQpID0+IHtcbiAgYWNjZXB0ID0gQXJyYXkuaXNBcnJheShhY2NlcHQpICYmIGFjY2VwdC5sZW5ndGggPT09IDEgPyBhY2NlcHRbMF0gOiBhY2NlcHQ7XG4gIGNvbnN0IG1lc3NhZ2VTdWZmaXggPSBBcnJheS5pc0FycmF5KGFjY2VwdClcbiAgICA/IGBvbmUgb2YgJHthY2NlcHQuam9pbihcIiwgXCIpfWBcbiAgICA6IGFjY2VwdDtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX0lOVkFMSURfVFlQRSxcbiAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG11c3QgYmUgJHttZXNzYWdlU3VmZml4fWAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIgPSAobWF4U2l6ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IEZJTEVfVE9PX0xBUkdFLFxuICAgIG1lc3NhZ2U6IGBGaWxlIGlzIGxhcmdlciB0aGFuICR7bWF4U2l6ZX0gJHtcbiAgICAgIG1heFNpemUgPT09IDEgPyBcImJ5dGVcIiA6IFwiYnl0ZXNcIlxuICAgIH1gLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyID0gKG1pblNpemUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX1RPT19TTUFMTCxcbiAgICBtZXNzYWdlOiBgRmlsZSBpcyBzbWFsbGVyIHRoYW4gJHttaW5TaXplfSAke1xuICAgICAgbWluU2l6ZSA9PT0gMSA/IFwiYnl0ZVwiIDogXCJieXRlc1wiXG4gICAgfWAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgVE9PX01BTllfRklMRVNfUkVKRUNUSU9OID0ge1xuICBjb2RlOiBUT09fTUFOWV9GSUxFUyxcbiAgbWVzc2FnZTogXCJUb28gbWFueSBmaWxlc1wiLFxufTtcblxuLy8gRmlyZWZveCB2ZXJzaW9ucyBwcmlvciB0byA1MyByZXR1cm4gYSBib2d1cyBNSU1FIHR5cGUgZm9yIGV2ZXJ5IGZpbGUgZHJhZywgc28gZHJhZ292ZXJzIHdpdGhcbi8vIHRoYXQgTUlNRSB0eXBlIHdpbGwgYWx3YXlzIGJlIGFjY2VwdGVkXG5leHBvcnQgZnVuY3Rpb24gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdCkge1xuICBjb25zdCBpc0FjY2VwdGFibGUgPVxuICAgIGZpbGUudHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LW1vei1maWxlXCIgfHwgYWNjZXB0cyhmaWxlLCBhY2NlcHQpO1xuICByZXR1cm4gW1xuICAgIGlzQWNjZXB0YWJsZSxcbiAgICBpc0FjY2VwdGFibGUgPyBudWxsIDogZ2V0SW52YWxpZFR5cGVSZWplY3Rpb25FcnIoYWNjZXB0KSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSkge1xuICBpZiAoaXNEZWZpbmVkKGZpbGUuc2l6ZSkpIHtcbiAgICBpZiAoaXNEZWZpbmVkKG1pblNpemUpICYmIGlzRGVmaW5lZChtYXhTaXplKSkge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IG1heFNpemUpIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgICAgIGlmIChmaWxlLnNpemUgPCBtaW5TaXplKSByZXR1cm4gW2ZhbHNlLCBnZXRUb29TbWFsbFJlamVjdGlvbkVycihtaW5TaXplKV07XG4gICAgfSBlbHNlIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgZmlsZS5zaXplIDwgbWluU2l6ZSlcbiAgICAgIHJldHVybiBbZmFsc2UsIGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyKG1pblNpemUpXTtcbiAgICBlbHNlIGlmIChpc0RlZmluZWQobWF4U2l6ZSkgJiYgZmlsZS5zaXplID4gbWF4U2l6ZSlcbiAgICAgIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgfVxuICByZXR1cm4gW3RydWUsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0ZpbGVbXX0gb3B0aW9ucy5maWxlc1xuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtvcHRpb25zLmFjY2VwdF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5TaXplXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFNpemVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm11bHRpcGxlXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heEZpbGVzXVxuICogQHBhcmFtIHsoZjogRmlsZSkgPT4gRmlsZUVycm9yfEZpbGVFcnJvcltdfG51bGx9IFtvcHRpb25zLnZhbGlkYXRvcl1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxGaWxlc0FjY2VwdGVkKHtcbiAgZmlsZXMsXG4gIGFjY2VwdCxcbiAgbWluU2l6ZSxcbiAgbWF4U2l6ZSxcbiAgbXVsdGlwbGUsXG4gIG1heEZpbGVzLFxuICB2YWxpZGF0b3IsXG59KSB7XG4gIGlmIChcbiAgICAoIW11bHRpcGxlICYmIGZpbGVzLmxlbmd0aCA+IDEpIHx8XG4gICAgKG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgZmlsZXMubGVuZ3RoID4gbWF4RmlsZXMpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlcy5ldmVyeSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IFthY2NlcHRlZF0gPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KTtcbiAgICBjb25zdCBbc2l6ZU1hdGNoXSA9IGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSk7XG4gICAgY29uc3QgY3VzdG9tRXJyb3JzID0gdmFsaWRhdG9yID8gdmFsaWRhdG9yKGZpbGUpIDogbnVsbDtcbiAgICByZXR1cm4gYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoICYmICFjdXN0b21FcnJvcnM7XG4gIH0pO1xufVxuXG4vLyBSZWFjdCdzIHN5bnRoZXRpYyBldmVudHMgaGFzIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkLFxuLy8gYnV0IHRvIHJlbWFpbiBjb21wYXRpYmlsaXR5IHdpdGggb3RoZXIgbGlicyAoUHJlYWN0KSBmYWxsIGJhY2tcbi8vIHRvIGNoZWNrIGV2ZW50LmNhbmNlbEJ1YmJsZVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5jYW5jZWxCdWJibGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZXZlbnQuY2FuY2VsQnViYmxlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSB7XG4gIGlmICghZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgcmV0dXJuICEhZXZlbnQudGFyZ2V0ICYmICEhZXZlbnQudGFyZ2V0LmZpbGVzO1xuICB9XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXIvdHlwZXNcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxfRHJhZ19hbmRfRHJvcF9BUEkvUmVjb21tZW5kZWRfZHJhZ190eXBlcyNmaWxlXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKFxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyxcbiAgICAodHlwZSkgPT4gdHlwZSA9PT0gXCJGaWxlc1wiIHx8IHR5cGUgPT09IFwiYXBwbGljYXRpb24veC1tb3otZmlsZVwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0tpbmRGaWxlKGl0ZW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbS5raW5kID09PSBcImZpbGVcIjtcbn1cblxuLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGlzSWUodXNlckFnZW50KSB7XG4gIHJldHVybiAoXG4gICAgdXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnQvXCIpICE9PSAtMVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0VkZ2UodXNlckFnZW50KSB7XG4gIHJldHVybiB1c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2UvXCIpICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWVPckVkZ2UodXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgcmV0dXJuIGlzSWUodXNlckFnZW50KSB8fCBpc0VkZ2UodXNlckFnZW50KTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgdG8gY29tcG9zZSBldmVudCBoYW5kbGVyc1xuICogVGhleSBhcmUgZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgb25lIG9mIHRoZW0gY2FsbHMgYGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClgLlxuICogTm90ZSB0aGF0IHRoZSBjaGVjayBpcyBkb25lIG9uIHRoZSBmaXJzdCBpbnZva2UgdG9vLFxuICogbWVhbmluZyB0aGF0IGlmIHByb3BhZ2F0aW9uIHdhcyBzdG9wcGVkIGJlZm9yZSBpbnZva2luZyB0aGUgZm5zLFxuICogbm8gaGFuZGxlcnMgd2lsbCBiZSBleGVjdXRlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbnMgdGhlIGV2ZW50IGhhbmxkZXIgZnVuY3Rpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VFdmVudEhhbmRsZXJzKC4uLmZucykge1xuICByZXR1cm4gKGV2ZW50LCAuLi5hcmdzKSA9PlxuICAgIGZucy5zb21lKChmbikgPT4ge1xuICAgICAgaWYgKCFpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgZm4pIHtcbiAgICAgICAgZm4oZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJIGNoZWNrcyBpZiB0aGUgW0ZpbGUgU3lzdGVtIEFjY2VzcyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJKVxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJKCkge1xuICByZXR1cm4gXCJzaG93T3BlbkZpbGVQaWNrZXJcIiBpbiB3aW5kb3c7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgYHthY2NlcHR9YCBkcm9wem9uZSBwcm9wIHRvIHRoZVxuICogYHt0eXBlc31gIG9wdGlvbiBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9zaG93T3BlbkZpbGVQaWNrZXJcbiAqXG4gKiBAcGFyYW0ge0FjY2VwdFByb3B9IGFjY2VwdFxuICogQHJldHVybnMge3thY2NlcHQ6IHN0cmluZ1tdfVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQoYWNjZXB0KSB7XG4gIGlmIChpc0RlZmluZWQoYWNjZXB0KSkge1xuICAgIGNvbnN0IGFjY2VwdEZvclBpY2tlciA9IE9iamVjdC5lbnRyaWVzKGFjY2VwdClcbiAgICAgIC5maWx0ZXIoKFttaW1lVHlwZSwgZXh0XSkgPT4ge1xuICAgICAgICBsZXQgb2sgPSB0cnVlO1xuXG4gICAgICAgIGlmICghaXNNSU1FVHlwZShtaW1lVHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgU2tpcHBlZCBcIiR7bWltZVR5cGV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYSB2YWxpZCBNSU1FIHR5cGUuIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvTUlNRV90eXBlcy9Db21tb25fdHlwZXMgZm9yIGEgbGlzdCBvZiB2YWxpZCBNSU1FIHR5cGVzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0KSB8fCAhZXh0LmV2ZXJ5KGlzRXh0KSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBTa2lwcGVkIFwiJHttaW1lVHlwZX1cIiBiZWNhdXNlIGFuIGludmFsaWQgZmlsZSBleHRlbnNpb24gd2FzIHByb3ZpZGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2s7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGFnZywgW21pbWVUeXBlLCBleHRdKSA9PiAoe1xuICAgICAgICAgIC4uLmFnZyxcbiAgICAgICAgICBbbWltZVR5cGVdOiBleHQsXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICAvLyBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZCBkdWUgdG8gaHR0cHM6Ly9jcmJ1Zy5jb20vMTI2NDcwOFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGaWxlc1wiLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEZvclBpY2tlcixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuICByZXR1cm4gYWNjZXB0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGB7YWNjZXB0fWAgZHJvcHpvbmUgcHJvcCB0byBhbiBhcnJheSBvZiBNSU1FIHR5cGVzL2V4dGVuc2lvbnMuXG4gKiBAcGFyYW0ge0FjY2VwdFByb3B9IGFjY2VwdFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjY2VwdFByb3BBc0FjY2VwdEF0dHIoYWNjZXB0KSB7XG4gIGlmIChpc0RlZmluZWQoYWNjZXB0KSkge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QuZW50cmllcyhhY2NlcHQpXG4gICAgICAgIC5yZWR1Y2UoKGEsIFttaW1lVHlwZSwgZXh0XSkgPT4gWy4uLmEsIG1pbWVUeXBlLCAuLi5leHRdLCBbXSlcbiAgICAgICAgLy8gU2lsZW50bHkgZGlzY2FyZCBpbnZhbGlkIGVudHJpZXMgYXMgcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQgd2FybnMgYWJvdXQgdGhlc2VcbiAgICAgICAgLmZpbHRlcigodikgPT4gaXNNSU1FVHlwZSh2KSB8fCBpc0V4dCh2KSlcbiAgICAgICAgLmpvaW4oXCIsXCIpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdiBpcyBhbiBleGNlcHRpb24gY2F1c2VkIGJ5IGFib3J0aW5nIGEgcmVxdWVzdCAoZS5nIHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIoKSkuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24uXG4gKiBAcGFyYW0ge2FueX0gdlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdiBpcyBhbiBhYm9ydCBleGNlcHRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Fib3J0KHYpIHtcbiAgcmV0dXJuIChcbiAgICB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgKHYubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIgfHwgdi5jb2RlID09PSB2LkFCT1JUX0VSUilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgc2VjdXJpdHkgZXJyb3IuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24uXG4gKiBAcGFyYW0ge2FueX0gdlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdiBpcyBhIHNlY3VyaXR5IGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZWN1cml0eUVycm9yKHYpIHtcbiAgcmV0dXJuIChcbiAgICB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgKHYubmFtZSA9PT0gXCJTZWN1cml0eUVycm9yXCIgfHwgdi5jb2RlID09PSB2LlNFQ1VSSVRZX0VSUilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgTUlNRSB0eXBlIHN0cmluZy5cbiAqXG4gKiBTZWUgYWNjZXB0ZWQgZm9ybWF0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQvZmlsZSN1bmlxdWVfZmlsZV90eXBlX3NwZWNpZmllcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTUlNRVR5cGUodikge1xuICByZXR1cm4gKFxuICAgIHYgPT09IFwiYXVkaW8vKlwiIHx8XG4gICAgdiA9PT0gXCJ2aWRlby8qXCIgfHxcbiAgICB2ID09PSBcImltYWdlLypcIiB8fFxuICAgIHYgPT09IFwidGV4dC8qXCIgfHxcbiAgICAvXFx3K1xcL1stKy5cXHddKy9nLnRlc3QodilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgZmlsZSBleHRlbnNpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gdlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFeHQodikge1xuICByZXR1cm4gL14uKlxcLltcXHddKyQvLnRlc3Qodik7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdC48c3RyaW5nLCBzdHJpbmdbXT59IEFjY2VwdFByb3BcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEZpbGVFcnJvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7RXJyb3JDb2RlfHN0cmluZ30gY29kZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1wiZmlsZS1pbnZhbGlkLXR5cGVcInxcImZpbGUtdG9vLWxhcmdlXCJ8XCJmaWxlLXRvby1zbWFsbFwifFwidG9vLW1hbnktZmlsZXNcIn0gRXJyb3JDb2RlXG4gKi9cbiIsIi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICBGcmFnbWVudCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJmaWxlLXNlbGVjdG9yXCI7XG5pbXBvcnQge1xuICBhY2NlcHRQcm9wQXNBY2NlcHRBdHRyLFxuICBhbGxGaWxlc0FjY2VwdGVkLFxuICBjb21wb3NlRXZlbnRIYW5kbGVycyxcbiAgZmlsZUFjY2VwdGVkLFxuICBmaWxlTWF0Y2hTaXplLFxuICBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJLFxuICBpc0Fib3J0LFxuICBpc0V2dFdpdGhGaWxlcyxcbiAgaXNJZU9yRWRnZSxcbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQsXG4gIGlzU2VjdXJpdHlFcnJvcixcbiAgb25Eb2N1bWVudERyYWdPdmVyLFxuICBwaWNrZXJPcHRpb25zRnJvbUFjY2VwdCxcbiAgVE9PX01BTllfRklMRVNfUkVKRUNUSU9OLFxufSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgY29tcG9uZW50IGZvciB0aGUgYHVzZURyb3B6b25lYCBob29rXG4gKlxuICogYGBganN4XG4gKiA8RHJvcHpvbmU+XG4gKiAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcbiAqICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0+XG4gKiAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAqICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gKiAgICAgPC9kaXY+XG4gKiAgICl9XG4gKiA8L0Ryb3B6b25lPlxuICogYGBgXG4gKi9cbmNvbnN0IERyb3B6b25lID0gZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucGFyYW1zIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IG9wZW4sIC4uLnByb3BzIH0gPSB1c2VEcm9wem9uZShwYXJhbXMpO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoeyBvcGVuIH0pLCBbb3Blbl0pO1xuXG4gIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHJlYWN0LXN0eWxlZ3VpZGlzdCBjYW5ub3QgY3JlYXRlIGRvY3MgaWYgd2UgZG9uJ3QgcmV0dXJuIGEganN4IGVsZW1lbnRcbiAgcmV0dXJuIDxGcmFnbWVudD57Y2hpbGRyZW4oeyAuLi5wcm9wcywgb3BlbiB9KX08L0ZyYWdtZW50Pjtcbn0pO1xuXG5Ecm9wem9uZS5kaXNwbGF5TmFtZSA9IFwiRHJvcHpvbmVcIjtcblxuLy8gQWRkIGRlZmF1bHQgcHJvcHMgZm9yIHJlYWN0LWRvY2dlblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBmcm9tRXZlbnQsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4RmlsZXM6IDAsXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogdHJ1ZSxcbiAgbm9DbGljazogZmFsc2UsXG4gIG5vS2V5Ym9hcmQ6IGZhbHNlLFxuICBub0RyYWc6IGZhbHNlLFxuICBub0RyYWdFdmVudHNCdWJibGluZzogZmFsc2UsXG4gIHZhbGlkYXRvcjogbnVsbCxcbiAgdXNlRnNBY2Nlc3NBcGk6IHRydWUsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG59O1xuXG5Ecm9wem9uZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbkRyb3B6b25lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFJlbmRlciBmdW5jdGlvbiB0aGF0IGV4cG9zZXMgdGhlIGRyb3B6b25lIHN0YXRlIGFuZCBwcm9wIGdldHRlciBmbnNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMuZ2V0Um9vdFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gdGhlIHJvb3QgZHJvcCBjb250YWluZXIgeW91IHJlbmRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMuZ2V0SW5wdXRQcm9wcyBSZXR1cm5zIHRoZSBwcm9wcyB5b3Ugc2hvdWxkIGFwcGx5IHRvIGhpZGRlbiBmaWxlIGlucHV0IHlvdSByZW5kZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyYW1zLm9wZW4gT3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0ZvY3VzZWQgRHJvcHpvbmUgYXJlYSBpcyBpbiBmb2N1c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0ZpbGVEaWFsb2dBY3RpdmUgRmlsZSBkaWFsb2cgaXMgb3BlbmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRHJhZ0FjdGl2ZSBBY3RpdmUgZHJhZyBpcyBpbiBwcm9ncmVzc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0RyYWdBY2NlcHQgRHJhZ2dlZCBmaWxlcyBhcmUgYWNjZXB0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNEcmFnUmVqZWN0IFNvbWUgZHJhZ2dlZCBmaWxlcyBhcmUgcmVqZWN0ZWRcbiAgICogQHBhcmFtIHtGaWxlW119IHBhcmFtcy5hY2NlcHRlZEZpbGVzIEFjY2VwdGVkIGZpbGVzXG4gICAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBwYXJhbXMuZmlsZVJlamVjdGlvbnMgUmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU2V0IGFjY2VwdGVkIGZpbGUgdHlwZXMuXG4gICAqIENoZWNrb3V0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd09wZW5GaWxlUGlja2VyIHR5cGVzIG9wdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbCAoaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy8yNzYpLlxuICAgKi9cbiAgYWNjZXB0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykpLFxuXG4gIC8qKlxuICAgKiBBbGxvdyBkcmFnICduJyBkcm9wIChvciBzZWxlY3Rpb24gZnJvbSB0aGUgZmlsZSBkaWFsb2cpIG9mIG11bHRpcGxlIGZpbGVzXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICAgKi9cbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGlzYWJsZXMgY2xpY2sgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICAgKi9cbiAgbm9DbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRpc2FibGVzIFNQQUNFL0VOVEVSIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2cuXG4gICAqIE5vdGUgdGhhdCBpdCBhbHNvIHN0b3BzIHRyYWNraW5nIHRoZSBmb2N1cyBzdGF0ZS5cbiAgICovXG4gIG5vS2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBkaXNhYmxlcyBkcmFnICduJyBkcm9wXG4gICAqL1xuICBub0RyYWc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdG9wcyBkcmFnIGV2ZW50IHByb3BhZ2F0aW9uIHRvIHBhcmVudHNcbiAgICovXG4gIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWluaW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICAgKi9cbiAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTWF4aW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICAgKi9cbiAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gYWNjZXB0ZWQgbnVtYmVyIG9mIGZpbGVzXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAgd2hpY2ggbWVhbnMgdGhlcmUgaXMgbm8gbGltaXRhdGlvbiB0byBob3cgbWFueSBmaWxlcyBhcmUgYWNjZXB0ZWQuXG4gICAqL1xuICBtYXhGaWxlczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIHByb3ZpZGUgYSBjdXN0b20gZmlsZSBhZ2dyZWdhdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAgICovXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gY2xvc2luZyB0aGUgZmlsZSBkaWFsb2cgd2l0aCBubyBzZWxlY3Rpb25cbiAgICovXG4gIG9uRmlsZURpYWxvZ0NhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgZGlhbG9nXG4gICAqL1xuICBvbkZpbGVEaWFsb2dPcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gdXNlIHRoZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSVxuICAgKiB0byBvcGVuIHRoZSBmaWxlIHBpY2tlciBpbnN0ZWFkIG9mIHVzaW5nIGFuIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5gIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgdXNlRnNBY2Nlc3NBcGk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBmb2N1cyB0aGUgcm9vdCBlbGVtZW50IG9uIHJlbmRlclxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnZW50ZXJgIGV2ZW50IG9jY3Vycy5cbiAgICpcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkRyYWdFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJhZ2xlYXZlYCBldmVudCBvY2N1cnNcbiAgICpcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkRyYWdMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJhZ292ZXJgIGV2ZW50IG9jY3Vyc1xuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ092ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IHRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB0aGUgYGdldEZpbGVzRnJvbUV2ZW50YCBjYWxsYmFjayBpcyBkb25lLlxuICAgKlxuICAgKiBGaWxlcyBhcmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYmFzZWQgb24gdGhlIGBhY2NlcHRgLCBgbXVsdGlwbGVgLCBgbWluU2l6ZWAgYW5kIGBtYXhTaXplYCBwcm9wcy5cbiAgICogYGFjY2VwdGAgbXVzdCBiZSBhIHZhbGlkIFtNSU1FIHR5cGVdKGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWwpIGFjY29yZGluZyB0byBbaW5wdXQgZWxlbWVudCBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvd2lraS9IVE1ML0VsZW1lbnRzL2lucHV0L2ZpbGUpIG9yIGEgdmFsaWQgZmlsZSBleHRlbnNpb24uXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGZhbHNlIGFuZCBhZGRpdGlvbmFsIGZpbGVzIGFyZSBkcm9wcGVkLFxuICAgKiBhbGwgZmlsZXMgYmVzaWRlcyB0aGUgZmlyc3Qgd2lsbCBiZSByZWplY3RlZC5cbiAgICogQW55IGZpbGUgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHNpemUgaW4gdGhlIFtgbWluU2l6ZWAsIGBtYXhTaXplYF0gcmFuZ2UsIHdpbGwgYmUgcmVqZWN0ZWQgYXMgd2VsbC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBgb25Ecm9wYCBjYWxsYmFjayB3aWxsIGFsd2F5cyBiZSBpbnZva2VkIHJlZ2FyZGxlc3MgaWYgdGhlIGRyb3BwZWQgZmlsZXMgd2VyZSBhY2NlcHRlZCBvciByZWplY3RlZC5cbiAgICogSWYgeW91J2QgbGlrZSB0byByZWFjdCB0byBhIHNwZWNpZmljIHNjZW5hcmlvLCB1c2UgdGhlIGBvbkRyb3BBY2NlcHRlZGAvYG9uRHJvcFJlamVjdGVkYCBwcm9wcy5cbiAgICpcbiAgICogYG9uRHJvcGAgd2lsbCBwcm92aWRlIHlvdSB3aXRoIGFuIGFycmF5IG9mIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkgb2JqZWN0cyB3aGljaCB5b3UgY2FuIHRoZW4gcHJvY2VzcyBhbmQgc2VuZCB0byBhIHNlcnZlci5cbiAgICogRm9yIGV4YW1wbGUsIHdpdGggW1N1cGVyQWdlbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9zdXBlcmFnZW50KSBhcyBhIGh0dHAvYWpheCBsaWJyYXJ5OlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBmdW5jdGlvbiBvbkRyb3AoYWNjZXB0ZWRGaWxlcykge1xuICAgKiAgIGNvbnN0IHJlcSA9IHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gICAqICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgKiAgICAgcmVxLmF0dGFjaChmaWxlLm5hbWUsIGZpbGUpXG4gICAqICAgfSlcbiAgICogICByZXEuZW5kKGNhbGxiYWNrKVxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbGVbXX0gYWNjZXB0ZWRGaWxlc1xuICAgKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnNcbiAgICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICAgKi9cbiAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gICAqIE5vdGUgdGhhdCBpZiBubyBmaWxlcyBhcmUgYWNjZXB0ZWQsIHRoaXMgY2FsbGJhY2sgaXMgbm90IGludm9rZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZVtdfSBmaWxlc1xuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudFxuICAgKi9cbiAgb25Ecm9wQWNjZXB0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IGlmIG5vIGZpbGVzIGFyZSByZWplY3RlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgaW52b2tlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50XG4gICAqL1xuICBvbkRyb3BSZWplY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZXJlJ3Mgc29tZSBlcnJvciBmcm9tIGFueSBvZiB0aGUgcHJvbWlzZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqL1xuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24uIEl0IG11c3QgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBlcnJvcnMuXG4gICAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICAgKiBAcmV0dXJucyB7RmlsZUVycm9yfEZpbGVFcnJvcltdfG51bGx9XG4gICAqL1xuICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJhZ2VudGVyYCxcbiAqIGBkcmFnb3ZlcmAgYW5kIGBkcmFnbGVhdmVgIGV2ZW50cy5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgbm90IGZpbGVzIChzdWNoIGFzIGxpbmssIHRleHQsIGV0Yy4pLlxuICpcbiAqIEBjYWxsYmFjayBkcmFnQ2JcbiAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogSXQgaXMgbm90IGludm9rZWQgaWYgdGhlIGl0ZW1zIGFyZSBub3QgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BDYlxuICogQHBhcmFtIHtGaWxlW119IGFjY2VwdGVkRmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlc1xuICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyb3BgIG9yIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BBY2NlcHRlZENiXG4gKiBAcGFyYW0ge0ZpbGVbXX0gZmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlcyB0aGF0IG1lZXQgdGhlIGdpdmVuIGNyaXRlcmlhXG4gKiAoYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCwgYG1heFNpemVgKVxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICpcbiAqIEBjYWxsYmFjayBkcm9wUmVqZWN0ZWRDYlxuICogQHBhcmFtIHtGaWxlW119IGZpbGVzIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgdGhhdCBkbyBub3QgbWVldCB0aGUgZ2l2ZW4gY3JpdGVyaWFcbiAqIChgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgLCBgbWF4U2l6ZWApXG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCBhZ2dyZWdhdGUgZmlsZXMsXG4gKiBpbiBhIGFzeW5jaHJvbm91cyBmYXNoaW9uLCBmcm9tIGRyYWcgb3IgaW5wdXQgY2hhbmdlIGV2ZW50cy5cbiAqXG4gKiBAY2FsbGJhY2sgZ2V0RmlsZXNGcm9tRXZlbnRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqIEByZXR1cm5zIHsoRmlsZVtdfFByb21pc2U8RmlsZVtdPil9XG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBkcm9wem9uZSBzdGF0ZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEcm9wem9uZVN0YXRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICogQHByb3BlcnR5IHtGaWxlW119IGFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAqIEBwcm9wZXJ0eSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggdGhlIGRyb3B6b25lIG1ldGhvZHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRHJvcHpvbmVNZXRob2RzXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gKi9cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlLFxuICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICBpc0RyYWdBY2NlcHQ6IGZhbHNlLFxuICBpc0RyYWdSZWplY3Q6IGZhbHNlLFxuICBhY2NlcHRlZEZpbGVzOiBbXSxcbiAgZmlsZVJlamVjdGlvbnM6IFtdLFxufTtcblxuLyoqXG4gKiBBIFJlYWN0IGhvb2sgdGhhdCBjcmVhdGVzIGEgZHJhZyAnbicgZHJvcCBhcmVhLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gTXlEcm9wem9uZShwcm9wcykge1xuICogICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzfSA9IHVzZURyb3B6b25lKHtcbiAqICAgICBvbkRyb3A6IGFjY2VwdGVkRmlsZXMgPT4ge1xuICogICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIEZpbGUgb2JqZWN0cywgZS5nLiB1cGxvYWQgdG8gc29tZSBzZXJ2ZXJcbiAqICAgICB9XG4gKiAgIH0pO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cbiAqICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICogICAgICAgPHA+RHJhZyBhbmQgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQGZ1bmN0aW9uIHVzZURyb3B6b25lXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vdXRpbHNcIikuQWNjZXB0UHJvcH0gW3Byb3BzLmFjY2VwdF0gU2V0IGFjY2VwdGVkIGZpbGUgdHlwZXMuXG4gKiBDaGVja291dCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlciB0eXBlcyBvcHRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKiBLZWVwIGluIG1pbmQgdGhhdCBtaW1lIHR5cGUgZGV0ZXJtaW5hdGlvbiBpcyBub3QgcmVsaWFibGUgYWNyb3NzIHBsYXRmb3Jtcy4gQ1NWIGZpbGVzLFxuICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAqIFdpbmRvd3MuIEluIHNvbWUgY2FzZXMgdGhlcmUgbWlnaHQgbm90IGJlIGEgbWltZSB0eXBlIHNldCBhdCBhbGwgKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvMjc2KS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm11bHRpcGxlPXRydWVdIEFsbG93IGRyYWcgJ24nIGRyb3AgKG9yIHNlbGVjdGlvbiBmcm9tIHRoZSBmaWxlIGRpYWxvZykgb2YgbXVsdGlwbGUgZmlsZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudD10cnVlXSBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vQ2xpY2s9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIGNsaWNrIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2dcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vS2V5Ym9hcmQ9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIFNQQUNFL0VOVEVSIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2cuXG4gKiBOb3RlIHRoYXQgaXQgYWxzbyBzdG9wcyB0cmFja2luZyB0aGUgZm9jdXMgc3RhdGUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5ub0RyYWc9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIGRyYWcgJ24nIGRyb3BcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vRHJhZ0V2ZW50c0J1YmJsaW5nPWZhbHNlXSBJZiB0cnVlLCBzdG9wcyBkcmFnIGV2ZW50IHByb3BhZ2F0aW9uIHRvIHBhcmVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWluU2l6ZT0wXSBNaW5pbXVtIGZpbGUgc2l6ZSAoaW4gYnl0ZXMpXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLm1heFNpemU9SW5maW5pdHldIE1heGltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLmRpc2FibGVkPWZhbHNlXSBFbmFibGUvZGlzYWJsZSB0aGUgZHJvcHpvbmVcbiAqIEBwYXJhbSB7Z2V0RmlsZXNGcm9tRXZlbnR9IFtwcm9wcy5nZXRGaWxlc0Zyb21FdmVudF0gVXNlIHRoaXMgdG8gcHJvdmlkZSBhIGN1c3RvbSBmaWxlIGFnZ3JlZ2F0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWxdIENiIGZvciB3aGVuIGNsb3NpbmcgdGhlIGZpbGUgZGlhbG9nIHdpdGggbm8gc2VsZWN0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy51c2VGc0FjY2Vzc0FwaV0gU2V0IHRvIHRydWUgdG8gdXNlIHRoZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSVxuICogdG8gb3BlbiB0aGUgZmlsZSBwaWNrZXIgaW5zdGVhZCBvZiB1c2luZyBhbiBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YCBjbGljayBldmVudC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b0ZvY3VzIFNldCB0byB0cnVlIHRvIGF1dG8gZm9jdXMgdGhlIHJvb3QgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wcy5vbkZpbGVEaWFsb2dPcGVuXSBDYiBmb3Igd2hlbiBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZ1xuICogQHBhcmFtIHtkcmFnQ2J9IFtwcm9wcy5vbkRyYWdFbnRlcl0gQ2IgZm9yIHdoZW4gdGhlIGBkcmFnZW50ZXJgIGV2ZW50IG9jY3Vycy5cbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnTGVhdmVdIENiIGZvciB3aGVuIHRoZSBgZHJhZ2xlYXZlYCBldmVudCBvY2N1cnNcbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnT3Zlcl0gQ2IgZm9yIHdoZW4gdGhlIGBkcmFnb3ZlcmAgZXZlbnQgb2NjdXJzXG4gKiBAcGFyYW0ge2Ryb3BDYn0gW3Byb3BzLm9uRHJvcF0gQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBgZ2V0RmlsZXNGcm9tRXZlbnRgIGNhbGxiYWNrIGlzIGRvbmUuXG4gKlxuICogRmlsZXMgYXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJhc2VkIG9uIHRoZSBgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgIGFuZCBgbWF4U2l6ZWAgcHJvcHMuXG4gKiBgYWNjZXB0YCBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIGtleXMgYXMgYSB2YWxpZCBbTUlNRSB0eXBlXShodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sKSBhY2NvcmRpbmcgdG8gW2lucHV0IGVsZW1lbnQgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9FbGVtZW50cy9pbnB1dC9maWxlKSBhbmQgdGhlIHZhbHVlIGFuIGFycmF5IG9mIGZpbGUgZXh0ZW5zaW9ucyAob3B0aW9uYWwpLlxuICogSWYgYG11bHRpcGxlYCBpcyBzZXQgdG8gZmFsc2UgYW5kIGFkZGl0aW9uYWwgZmlsZXMgYXJlIGRyb3BwZWQsXG4gKiBhbGwgZmlsZXMgYmVzaWRlcyB0aGUgZmlyc3Qgd2lsbCBiZSByZWplY3RlZC5cbiAqIEFueSBmaWxlIHdoaWNoIGRvZXMgbm90IGhhdmUgYSBzaXplIGluIHRoZSBbYG1pblNpemVgLCBgbWF4U2l6ZWBdIHJhbmdlLCB3aWxsIGJlIHJlamVjdGVkIGFzIHdlbGwuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBgb25Ecm9wYCBjYWxsYmFjayB3aWxsIGFsd2F5cyBiZSBpbnZva2VkIHJlZ2FyZGxlc3MgaWYgdGhlIGRyb3BwZWQgZmlsZXMgd2VyZSBhY2NlcHRlZCBvciByZWplY3RlZC5cbiAqIElmIHlvdSdkIGxpa2UgdG8gcmVhY3QgdG8gYSBzcGVjaWZpYyBzY2VuYXJpbywgdXNlIHRoZSBgb25Ecm9wQWNjZXB0ZWRgL2BvbkRyb3BSZWplY3RlZGAgcHJvcHMuXG4gKlxuICogYG9uRHJvcGAgd2lsbCBwcm92aWRlIHlvdSB3aXRoIGFuIGFycmF5IG9mIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkgb2JqZWN0cyB3aGljaCB5b3UgY2FuIHRoZW4gcHJvY2VzcyBhbmQgc2VuZCB0byBhIHNlcnZlci5cbiAqIEZvciBleGFtcGxlLCB3aXRoIFtTdXBlckFnZW50XShodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvc3VwZXJhZ2VudCkgYXMgYSBodHRwL2FqYXggbGlicmFyeTpcbiAqXG4gKiBgYGBqc1xuICogZnVuY3Rpb24gb25Ecm9wKGFjY2VwdGVkRmlsZXMpIHtcbiAqICAgY29uc3QgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICogICAgIHJlcS5hdHRhY2goZmlsZS5uYW1lLCBmaWxlKVxuICogICB9KVxuICogICByZXEuZW5kKGNhbGxiYWNrKVxuICogfVxuICogYGBgXG4gKiBAcGFyYW0ge2Ryb3BBY2NlcHRlZENifSBbcHJvcHMub25Ecm9wQWNjZXB0ZWRdXG4gKiBAcGFyYW0ge2Ryb3BSZWplY3RlZENifSBbcHJvcHMub25Ecm9wUmVqZWN0ZWRdXG4gKiBAcGFyYW0geyhlcnJvcjogRXJyb3IpID0+IHZvaWR9IFtwcm9wcy5vbkVycm9yXVxuICpcbiAqIEByZXR1cm5zIHtEcm9wem9uZVN0YXRlICYgRHJvcHpvbmVNZXRob2RzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHpvbmUocHJvcHMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgYWNjZXB0LFxuICAgIGRpc2FibGVkLFxuICAgIGdldEZpbGVzRnJvbUV2ZW50LFxuICAgIG1heFNpemUsXG4gICAgbWluU2l6ZSxcbiAgICBtdWx0aXBsZSxcbiAgICBtYXhGaWxlcyxcbiAgICBvbkRyYWdFbnRlcixcbiAgICBvbkRyYWdMZWF2ZSxcbiAgICBvbkRyYWdPdmVyLFxuICAgIG9uRHJvcCxcbiAgICBvbkRyb3BBY2NlcHRlZCxcbiAgICBvbkRyb3BSZWplY3RlZCxcbiAgICBvbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgb25GaWxlRGlhbG9nT3BlbixcbiAgICB1c2VGc0FjY2Vzc0FwaSxcbiAgICBhdXRvRm9jdXMsXG4gICAgcHJldmVudERyb3BPbkRvY3VtZW50LFxuICAgIG5vQ2xpY2ssXG4gICAgbm9LZXlib2FyZCxcbiAgICBub0RyYWcsXG4gICAgbm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgb25FcnJvcixcbiAgICB2YWxpZGF0b3IsXG4gIH0gPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLFxuICAgIC4uLnByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGFjY2VwdEF0dHIgPSB1c2VNZW1vKCgpID0+IGFjY2VwdFByb3BBc0FjY2VwdEF0dHIoYWNjZXB0KSwgW2FjY2VwdF0pO1xuICBjb25zdCBwaWNrZXJUeXBlcyA9IHVzZU1lbW8oKCkgPT4gcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQoYWNjZXB0KSwgW2FjY2VwdF0pO1xuXG4gIGNvbnN0IG9uRmlsZURpYWxvZ09wZW5DYiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHR5cGVvZiBvbkZpbGVEaWFsb2dPcGVuID09PSBcImZ1bmN0aW9uXCIgPyBvbkZpbGVEaWFsb2dPcGVuIDogbm9vcCksXG4gICAgW29uRmlsZURpYWxvZ09wZW5dXG4gICk7XG4gIGNvbnN0IG9uRmlsZURpYWxvZ0NhbmNlbENiID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgdHlwZW9mIG9uRmlsZURpYWxvZ0NhbmNlbCA9PT0gXCJmdW5jdGlvblwiID8gb25GaWxlRGlhbG9nQ2FuY2VsIDogbm9vcCxcbiAgICBbb25GaWxlRGlhbG9nQ2FuY2VsXVxuICApO1xuXG4gIC8qKlxuICAgKiBAY29uc3RhbnRcbiAgICogQHR5cGUge1JlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgY29uc3Qgcm9vdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgeyBpc0ZvY3VzZWQsIGlzRmlsZURpYWxvZ0FjdGl2ZSB9ID0gc3RhdGU7XG5cbiAgY29uc3QgZnNBY2Nlc3NBcGlXb3Jrc1JlZiA9IHVzZVJlZihcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB3aW5kb3cuaXNTZWN1cmVDb250ZXh0ICYmXG4gICAgICB1c2VGc0FjY2Vzc0FwaSAmJlxuICAgICAgY2FuVXNlRmlsZVN5c3RlbUFjY2Vzc0FQSSgpXG4gICk7XG5cbiAgLy8gVXBkYXRlIGZpbGUgZGlhbG9nIGFjdGl2ZSBzdGF0ZSB3aGVuIHRoZSB3aW5kb3cgaXMgZm9jdXNlZCBvblxuICBjb25zdCBvbldpbmRvd0ZvY3VzID0gKCkgPT4ge1xuICAgIC8vIEV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZmlsZSBkaWFsb2cgaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG4gICAgaWYgKCFmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQgJiYgaXNGaWxlRGlhbG9nQWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSBpbnB1dFJlZi5jdXJyZW50O1xuXG4gICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJjbG9zZURpYWxvZ1wiIH0pO1xuICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsQ2IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG9uV2luZG93Rm9jdXMsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbaW5wdXRSZWYsIGlzRmlsZURpYWxvZ0FjdGl2ZSwgb25GaWxlRGlhbG9nQ2FuY2VsQ2IsIGZzQWNjZXNzQXBpV29ya3NSZWZdKTtcblxuICBjb25zdCBkcmFnVGFyZ2V0c1JlZiA9IHVzZVJlZihbXSk7XG4gIGNvbnN0IG9uRG9jdW1lbnREcm9wID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHJvb3RSZWYuY3VycmVudCAmJiByb290UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgLy8gSWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFtdO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uRG9jdW1lbnREcmFnT3ZlciwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25Eb2N1bWVudERyYWdPdmVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3ApO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtyb290UmVmLCBwcmV2ZW50RHJvcE9uRG9jdW1lbnRdKTtcblxuICAvLyBBdXRvIGZvY3VzIHRoZSByb290IHdoZW4gYXV0b0ZvY3VzIGlzIHRydWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyb290UmVmLCBhdXRvRm9jdXMsIGRpc2FibGVkXSk7XG5cbiAgY29uc3Qgb25FcnJDYiA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTGV0IHRoZSB1c2VyIGtub3cgc29tZXRoaW5nJ3MgZ29uZSB3cm9uZyBpZiB0aGV5IGhhdmVuJ3QgcHJvdmlkZWQgdGhlIG9uRXJyb3IgY2IuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25FcnJvcl1cbiAgKTtcblxuICBjb25zdCBvbkRyYWdFbnRlckNiID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gUGVyc2lzdCBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0aGUgZXZlbnQgbGF0ZXIgYWZ0ZXIgZ2V0RmlsZXNGcm9tRXZlbnQoKSBpcyBkb25lXG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuXG4gICAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gWy4uLmRyYWdUYXJnZXRzUmVmLmN1cnJlbnQsIGV2ZW50LnRhcmdldF07XG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEZpbGVzRnJvbUV2ZW50KGV2ZW50KSlcbiAgICAgICAgICAudGhlbigoZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgIW5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmlsZUNvdW50ID0gZmlsZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNEcmFnQWNjZXB0ID1cbiAgICAgICAgICAgICAgZmlsZUNvdW50ID4gMCAmJlxuICAgICAgICAgICAgICBhbGxGaWxlc0FjY2VwdGVkKHtcbiAgICAgICAgICAgICAgICBmaWxlcyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6IGFjY2VwdEF0dHIsXG4gICAgICAgICAgICAgICAgbWluU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXhTaXplLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlLFxuICAgICAgICAgICAgICAgIG1heEZpbGVzLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBpc0RyYWdSZWplY3QgPSBmaWxlQ291bnQgPiAwICYmICFpc0RyYWdBY2NlcHQ7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgaXNEcmFnQWNjZXB0LFxuICAgICAgICAgICAgICBpc0RyYWdSZWplY3QsXG4gICAgICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJzZXREcmFnZ2VkRmlsZXNcIixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAob25EcmFnRW50ZXIpIHtcbiAgICAgICAgICAgICAgb25EcmFnRW50ZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiBvbkVyckNiKGUpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIGdldEZpbGVzRnJvbUV2ZW50LFxuICAgICAgb25EcmFnRW50ZXIsXG4gICAgICBvbkVyckNiLFxuICAgICAgbm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgICBhY2NlcHRBdHRyLFxuICAgICAgbWluU2l6ZSxcbiAgICAgIG1heFNpemUsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG1heEZpbGVzLFxuICAgICAgdmFsaWRhdG9yLFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBvbkRyYWdPdmVyQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuXG4gICAgICBjb25zdCBoYXNGaWxlcyA9IGlzRXZ0V2l0aEZpbGVzKGV2ZW50KTtcbiAgICAgIGlmIChoYXNGaWxlcyAmJiBldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiO1xuICAgICAgICB9IGNhdGNoIHt9IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHkgKi9cbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0ZpbGVzICYmIG9uRHJhZ092ZXIpIHtcbiAgICAgICAgb25EcmFnT3ZlcihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIFtvbkRyYWdPdmVyLCBub0RyYWdFdmVudHNCdWJibGluZ11cbiAgKTtcblxuICBjb25zdCBvbkRyYWdMZWF2ZUNiID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcblxuICAgICAgLy8gT25seSBkZWFjdGl2YXRlIG9uY2UgdGhlIGRyb3B6b25lIGFuZCBhbGwgY2hpbGRyZW4gaGF2ZSBiZWVuIGxlZnRcbiAgICAgIGNvbnN0IHRhcmdldHMgPSBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50LmZpbHRlcihcbiAgICAgICAgKHRhcmdldCkgPT4gcm9vdFJlZi5jdXJyZW50ICYmIHJvb3RSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpXG4gICAgICApO1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIHJlbW92ZSBhIHRhcmdldCBwcmVzZW50IG11bHRpcGxlIHRpbWVzIG9ubHkgb25jZVxuICAgICAgLy8gKEZpcmVmb3ggbWF5IGZpcmUgZHJhZ2VudGVyL2RyYWdsZWF2ZSBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0SWR4ID0gdGFyZ2V0cy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG4gICAgICBpZiAodGFyZ2V0SWR4ICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRzLnNwbGljZSh0YXJnZXRJZHgsIDEpO1xuICAgICAgfVxuICAgICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IHRhcmdldHM7XG4gICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcInNldERyYWdnZWRGaWxlc1wiLFxuICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpc0RyYWdBY2NlcHQ6IGZhbHNlLFxuICAgICAgICBpc0RyYWdSZWplY3Q6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkgJiYgb25EcmFnTGVhdmUpIHtcbiAgICAgICAgb25EcmFnTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Jvb3RSZWYsIG9uRHJhZ0xlYXZlLCBub0RyYWdFdmVudHNCdWJibGluZ11cbiAgKTtcblxuICBjb25zdCBzZXRGaWxlcyA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWxlcywgZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXMgPSBbXTtcbiAgICAgIGNvbnN0IGZpbGVSZWplY3Rpb25zID0gW107XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgW2FjY2VwdGVkLCBhY2NlcHRFcnJvcl0gPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0QXR0cik7XG4gICAgICAgIGNvbnN0IFtzaXplTWF0Y2gsIHNpemVFcnJvcl0gPSBmaWxlTWF0Y2hTaXplKGZpbGUsIG1pblNpemUsIG1heFNpemUpO1xuICAgICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSB2YWxpZGF0b3IgPyB2YWxpZGF0b3IoZmlsZSkgOiBudWxsO1xuXG4gICAgICAgIGlmIChhY2NlcHRlZCAmJiBzaXplTWF0Y2ggJiYgIWN1c3RvbUVycm9ycykge1xuICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gW2FjY2VwdEVycm9yLCBzaXplRXJyb3JdO1xuXG4gICAgICAgICAgaWYgKGN1c3RvbUVycm9ycykge1xuICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChjdXN0b21FcnJvcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbGVSZWplY3Rpb25zLnB1c2goeyBmaWxlLCBlcnJvcnM6IGVycm9ycy5maWx0ZXIoKGUpID0+IGUpIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW11bHRpcGxlICYmIGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMSkgfHxcbiAgICAgICAgKG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiBtYXhGaWxlcylcbiAgICAgICkge1xuICAgICAgICAvLyBSZWplY3QgZXZlcnl0aGluZyBhbmQgZW1wdHkgYWNjZXB0ZWQgZmlsZXNcbiAgICAgICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgICAgZmlsZVJlamVjdGlvbnMucHVzaCh7IGZpbGUsIGVycm9yczogW1RPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTl0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY2NlcHRlZEZpbGVzLnNwbGljZSgwKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICBhY2NlcHRlZEZpbGVzLFxuICAgICAgICBmaWxlUmVqZWN0aW9ucyxcbiAgICAgICAgdHlwZTogXCJzZXRGaWxlc1wiLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvbkRyb3ApIHtcbiAgICAgICAgb25Ecm9wKGFjY2VwdGVkRmlsZXMsIGZpbGVSZWplY3Rpb25zLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlUmVqZWN0aW9ucy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG4gICAgICAgIG9uRHJvcFJlamVjdGVkKGZpbGVSZWplY3Rpb25zLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcbiAgICAgICAgb25Ecm9wQWNjZXB0ZWQoYWNjZXB0ZWRGaWxlcywgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgZGlzcGF0Y2gsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIGFjY2VwdEF0dHIsXG4gICAgICBtaW5TaXplLFxuICAgICAgbWF4U2l6ZSxcbiAgICAgIG1heEZpbGVzLFxuICAgICAgb25Ecm9wLFxuICAgICAgb25Ecm9wQWNjZXB0ZWQsXG4gICAgICBvbkRyb3BSZWplY3RlZCxcbiAgICAgIHZhbGlkYXRvcixcbiAgICBdXG4gICk7XG5cbiAgY29uc3Qgb25Ecm9wQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBQZXJzaXN0IGhlcmUgYmVjYXVzZSB3ZSBuZWVkIHRoZSBldmVudCBsYXRlciBhZnRlciBnZXRGaWxlc0Zyb21FdmVudCgpIGlzIGRvbmVcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCk7XG5cbiAgICAgIGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQgPSBbXTtcblxuICAgICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoZ2V0RmlsZXNGcm9tRXZlbnQoZXZlbnQpKVxuICAgICAgICAgIC50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSAmJiAhbm9EcmFnRXZlbnRzQnViYmxpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RmlsZXMoZmlsZXMsIGV2ZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4gb25FcnJDYihlKSk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwicmVzZXRcIiB9KTtcbiAgICB9LFxuICAgIFtnZXRGaWxlc0Zyb21FdmVudCwgc2V0RmlsZXMsIG9uRXJyQ2IsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXVxuICApO1xuXG4gIC8vIEZuIGZvciBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZyBwcm9ncmFtbWF0aWNhbGx5XG4gIGNvbnN0IG9wZW5GaWxlRGlhbG9nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIE5vIHBvaW50IHRvIHVzZSBGUyBhY2Nlc3MgQVBJcyBpZiBjb250ZXh0IGlzIG5vdCBzZWN1cmVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TZWN1cmVfQ29udGV4dHMjZmVhdHVyZV9kZXRlY3Rpb25cbiAgICBpZiAoZnNBY2Nlc3NBcGlXb3Jrc1JlZi5jdXJyZW50KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwib3BlbkRpYWxvZ1wiIH0pO1xuICAgICAgb25GaWxlRGlhbG9nT3BlbkNiKCk7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlclxuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHR5cGVzOiBwaWNrZXJUeXBlcyxcbiAgICAgIH07XG4gICAgICB3aW5kb3dcbiAgICAgICAgLnNob3dPcGVuRmlsZVBpY2tlcihvcHRzKVxuICAgICAgICAudGhlbigoaGFuZGxlcykgPT4gZ2V0RmlsZXNGcm9tRXZlbnQoaGFuZGxlcykpXG4gICAgICAgIC50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgIHNldEZpbGVzKGZpbGVzLCBudWxsKTtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiY2xvc2VEaWFsb2dcIiB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgLy8gQWJvcnRFcnJvciBtZWFucyB0aGUgdXNlciBjYW5jZWxlZFxuICAgICAgICAgIGlmIChpc0Fib3J0KGUpKSB7XG4gICAgICAgICAgICBvbkZpbGVEaWFsb2dDYW5jZWxDYihlKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJjbG9zZURpYWxvZ1wiIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNTZWN1cml0eUVycm9yKGUpKSB7XG4gICAgICAgICAgICBmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIENPUlMsIHNvIGNhbm5vdCB1c2UgdGhpcyBBUElcbiAgICAgICAgICAgIC8vIFRyeSB1c2luZyB0aGUgaW5wdXRcbiAgICAgICAgICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvbkVyckNiKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiQ2Fubm90IG9wZW4gdGhlIGZpbGUgcGlja2VyIGJlY2F1c2UgdGhlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIG5vIDxpbnB1dD4gd2FzIHByb3ZpZGVkLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVyckNiKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJvcGVuRGlhbG9nXCIgfSk7XG4gICAgICBvbkZpbGVEaWFsb2dPcGVuQ2IoKTtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgW1xuICAgIGRpc3BhdGNoLFxuICAgIG9uRmlsZURpYWxvZ09wZW5DYixcbiAgICBvbkZpbGVEaWFsb2dDYW5jZWxDYixcbiAgICB1c2VGc0FjY2Vzc0FwaSxcbiAgICBzZXRGaWxlcyxcbiAgICBvbkVyckNiLFxuICAgIHBpY2tlclR5cGVzLFxuICAgIG11bHRpcGxlLFxuICBdKTtcblxuICAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIFNQQUNFL0VOVEVSIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcbiAgY29uc3Qgb25LZXlEb3duQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIC8vIElnbm9yZSBrZXlib2FyZCBldmVudHMgYnViYmxpbmcgdXAgdGhlIERPTSB0cmVlXG4gICAgICBpZiAoIXJvb3RSZWYuY3VycmVudCB8fCAhcm9vdFJlZi5jdXJyZW50LmlzRXF1YWxOb2RlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCIgXCIgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgfHxcbiAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMzIgfHxcbiAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTNcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcGVuRmlsZURpYWxvZygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Jvb3RSZWYsIG9wZW5GaWxlRGlhbG9nXVxuICApO1xuXG4gIC8vIFVwZGF0ZSBmb2N1cyBzdGF0ZSBmb3IgdGhlIGRyb3B6b25lXG4gIGNvbnN0IG9uRm9jdXNDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiZm9jdXNcIiB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBvbkJsdXJDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiYmx1clwiIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gQ2IgdG8gb3BlbiB0aGUgZmlsZSBkaWFsb2cgd2hlbiBjbGljayBvY2N1cnMgb24gdGhlIGRyb3B6b25lXG4gIGNvbnN0IG9uQ2xpY2tDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobm9DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIElFMTEvRWRnZSB0aGUgZmlsZS1icm93c2VyIGRpYWxvZyBpcyBibG9ja2luZywgdGhlcmVmb3JlLCB1c2Ugc2V0VGltZW91dCgpXG4gICAgLy8gdG8gZW5zdXJlIFJlYWN0IGNhbiBoYW5kbGUgc3RhdGUgY2hhbmdlc1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy80NTBcbiAgICBpZiAoaXNJZU9yRWRnZSgpKSB7XG4gICAgICBzZXRUaW1lb3V0KG9wZW5GaWxlRGlhbG9nLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbkZpbGVEaWFsb2coKTtcbiAgICB9XG4gIH0sIFtub0NsaWNrLCBvcGVuRmlsZURpYWxvZ10pO1xuXG4gIGNvbnN0IGNvbXBvc2VIYW5kbGVyID0gKGZuKSA9PiB7XG4gICAgcmV0dXJuIGRpc2FibGVkID8gbnVsbCA6IGZuO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIgPSAoZm4pID0+IHtcbiAgICByZXR1cm4gbm9LZXlib2FyZCA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbik7XG4gIH07XG5cbiAgY29uc3QgY29tcG9zZURyYWdIYW5kbGVyID0gKGZuKSA9PiB7XG4gICAgcmV0dXJuIG5vRHJhZyA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbik7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKG5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Um9vdFByb3BzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgKHtcbiAgICAgICAgcmVmS2V5ID0gXCJyZWZcIixcbiAgICAgICAgcm9sZSxcbiAgICAgICAgb25LZXlEb3duLFxuICAgICAgICBvbkZvY3VzLFxuICAgICAgICBvbkJsdXIsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIG9uRHJhZ0VudGVyLFxuICAgICAgICBvbkRyYWdPdmVyLFxuICAgICAgICBvbkRyYWdMZWF2ZSxcbiAgICAgICAgb25Ecm9wLFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0ge30pID0+ICh7XG4gICAgICAgIG9uS2V5RG93bjogY29tcG9zZUtleWJvYXJkSGFuZGxlcihcbiAgICAgICAgICBjb21wb3NlRXZlbnRIYW5kbGVycyhvbktleURvd24sIG9uS2V5RG93bkNiKVxuICAgICAgICApLFxuICAgICAgICBvbkZvY3VzOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKFxuICAgICAgICAgIGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIG9uRm9jdXNDYilcbiAgICAgICAgKSxcbiAgICAgICAgb25CbHVyOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQmx1ciwgb25CbHVyQ2IpKSxcbiAgICAgICAgb25DbGljazogY29tcG9zZUhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25DbGljaywgb25DbGlja0NiKSksXG4gICAgICAgIG9uRHJhZ0VudGVyOiBjb21wb3NlRHJhZ0hhbmRsZXIoXG4gICAgICAgICAgY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnRW50ZXIsIG9uRHJhZ0VudGVyQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJhZ092ZXI6IGNvbXBvc2VEcmFnSGFuZGxlcihcbiAgICAgICAgICBjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdPdmVyLCBvbkRyYWdPdmVyQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBjb21wb3NlRHJhZ0hhbmRsZXIoXG4gICAgICAgICAgY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnTGVhdmUsIG9uRHJhZ0xlYXZlQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJvcDogY29tcG9zZURyYWdIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRHJvcCwgb25Ecm9wQ2IpKSxcbiAgICAgICAgcm9sZTogdHlwZW9mIHJvbGUgPT09IFwic3RyaW5nXCIgJiYgcm9sZSAhPT0gXCJcIiA/IHJvbGUgOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICBbcmVmS2V5XTogcm9vdFJlZixcbiAgICAgICAgLi4uKCFkaXNhYmxlZCAmJiAhbm9LZXlib2FyZCA/IHsgdGFiSW5kZXg6IDAgfSA6IHt9KSxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHJvb3RSZWYsXG4gICAgICBvbktleURvd25DYixcbiAgICAgIG9uRm9jdXNDYixcbiAgICAgIG9uQmx1ckNiLFxuICAgICAgb25DbGlja0NiLFxuICAgICAgb25EcmFnRW50ZXJDYixcbiAgICAgIG9uRHJhZ092ZXJDYixcbiAgICAgIG9uRHJhZ0xlYXZlQ2IsXG4gICAgICBvbkRyb3BDYixcbiAgICAgIG5vS2V5Ym9hcmQsXG4gICAgICBub0RyYWcsXG4gICAgICBkaXNhYmxlZCxcbiAgICBdXG4gICk7XG5cbiAgY29uc3Qgb25JbnB1dEVsZW1lbnRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SW5wdXRQcm9wcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICh7IHJlZktleSA9IFwicmVmXCIsIG9uQ2hhbmdlLCBvbkNsaWNrLCAuLi5yZXN0IH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgICAgIGFjY2VwdDogYWNjZXB0QXR0cixcbiAgICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiBjb21wb3NlSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkNoYW5nZSwgb25Ecm9wQ2IpKSxcbiAgICAgICAgICBvbkNsaWNrOiBjb21wb3NlSGFuZGxlcihcbiAgICAgICAgICAgIGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIG9uSW5wdXRFbGVtZW50Q2xpY2spXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgICAgW3JlZktleV06IGlucHV0UmVmLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5wdXRQcm9wcyxcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICBbaW5wdXRSZWYsIGFjY2VwdCwgbXVsdGlwbGUsIG9uRHJvcENiLCBkaXNhYmxlZF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkICYmICFkaXNhYmxlZCxcbiAgICBnZXRSb290UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICByb290UmVmLFxuICAgIGlucHV0UmVmLFxuICAgIG9wZW46IGNvbXBvc2VIYW5kbGVyKG9wZW5GaWxlRGlhbG9nKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Ryb3B6b25lU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge3t0eXBlOiBzdHJpbmd9ICYgRHJvcHpvbmVTdGF0ZX0gYWN0aW9uXG4gKiBAcmV0dXJucyB7RHJvcHpvbmVTdGF0ZX1cbiAqL1xuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiZm9jdXNcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgXCJibHVyXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBcIm9wZW5EaWFsb2dcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIFwiY2xvc2VEaWFsb2dcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIFwic2V0RHJhZ2dlZEZpbGVzXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBhY3Rpb24uaXNEcmFnQWN0aXZlLFxuICAgICAgICBpc0RyYWdBY2NlcHQ6IGFjdGlvbi5pc0RyYWdBY2NlcHQsXG4gICAgICAgIGlzRHJhZ1JlamVjdDogYWN0aW9uLmlzRHJhZ1JlamVjdCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNldEZpbGVzXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogYWN0aW9uLmFjY2VwdGVkRmlsZXMsXG4gICAgICAgIGZpbGVSZWplY3Rpb25zOiBhY3Rpb24uZmlsZVJlamVjdGlvbnMsXG4gICAgICB9O1xuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJfX3JlYWQiLCJvIiwibSIsInIiLCJpIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwiYXJndW1lbnRzIiwibCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25jYXQiLCJDT01NT05fTUlNRV9UWVBFUyIsIk1hcCIsInRvRmlsZVdpdGhQYXRoIiwiZmlsZSIsInBhdGgiLCJuYW1lIiwibGFzdEluZGV4T2YiLCJ0eXBlIiwiZXh0Iiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImdldCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid2l0aE1pbWVUeXBlIiwid2Via2l0UmVsYXRpdmVQYXRoIiwiRklMRVNfVE9fSUdOT1JFIiwiaXNPYmplY3QiLCJnZXRJbnB1dEZpbGVzIiwiZXZ0IiwiZnJvbUxpc3QiLCJ0YXJnZXQiLCJmaWxlcyIsIm1hcCIsImdldEZzSGFuZGxlRmlsZXMiLCJoYW5kbGVzIiwiX2EiLCJhbGwiLCJoIiwiZ2V0RmlsZSIsImdldERhdGFUcmFuc2ZlckZpbGVzIiwiZHQiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJraW5kIiwidG9GaWxlUHJvbWlzZXMiLCJub0lnbm9yZWRGaWxlcyIsImZsYXR0ZW4iLCJpbmRleE9mIiwid2Via2l0R2V0QXNFbnRyeSIsImZyb21EYXRhVHJhbnNmZXJJdGVtIiwiZW50cnkiLCJpc0RpcmVjdG9yeSIsImZyb21EaXJFbnRyeSIsInJlZHVjZSIsImFjYyIsImlzQXJyYXkiLCJnZXRBc0ZpbGUiLCJmd3AiLCJmcm9tRW50cnkiLCJmcm9tRmlsZUVudHJ5IiwicmVhZGVyIiwiY3JlYXRlUmVhZGVyIiwiZW50cmllcyIsInJlYWRFbnRyaWVzIiwiX3RoaXMiLCJiYXRjaCIsImVycl8xIiwiZXJyIiwiZnVsbFBhdGgiLCJGSUxFX0lOVkFMSURfVFlQRSIsIkZJTEVfVE9PX0xBUkdFIiwiRklMRV9UT09fU01BTEwiLCJUT09fTUFOWV9GSUxFUyIsIkVycm9yQ29kZSIsIkZpbGVJbnZhbGlkVHlwZSIsIkZpbGVUb29MYXJnZSIsIkZpbGVUb29TbWFsbCIsIlRvb01hbnlGaWxlcyIsImdldEludmFsaWRUeXBlUmVqZWN0aW9uRXJyIiwiYWNjZXB0IiwibWVzc2FnZVN1ZmZpeCIsImpvaW4iLCJjb2RlIiwibWVzc2FnZSIsImdldFRvb0xhcmdlUmVqZWN0aW9uRXJyIiwibWF4U2l6ZSIsImdldFRvb1NtYWxsUmVqZWN0aW9uRXJyIiwibWluU2l6ZSIsIlRPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTiIsImZpbGVBY2NlcHRlZCIsImlzQWNjZXB0YWJsZSIsImFjY2VwdGVkRmlsZXMiLCJhY2NlcHRlZEZpbGVzQXJyYXkiLCJmaWxlTmFtZSIsIm1pbWVUeXBlIiwiYmFzZU1pbWVUeXBlIiwicmVwbGFjZSIsInNvbWUiLCJ2YWxpZFR5cGUiLCJ0cmltIiwiY2hhckF0IiwiZW5kc1dpdGgiLCJhY2NlcHRzIiwiZmlsZU1hdGNoU2l6ZSIsImlzRGVmaW5lZCIsInNpemUiLCJhbGxGaWxlc0FjY2VwdGVkIiwibXVsdGlwbGUiLCJtYXhGaWxlcyIsInZhbGlkYXRvciIsImV2ZXJ5IiwiYWNjZXB0ZWQiLCJzaXplTWF0Y2giLCJjdXN0b21FcnJvcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImV2ZW50IiwiY2FuY2VsQnViYmxlIiwiaXNFdnRXaXRoRmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJ0eXBlcyIsIm9uRG9jdW1lbnREcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiaXNJZSIsInVzZXJBZ2VudCIsImlzRWRnZSIsImlzSWVPckVkZ2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJjb21wb3NlRXZlbnRIYW5kbGVycyIsImZucyIsImFyZ3MiLCJmbiIsImNhblVzZUZpbGVTeXN0ZW1BY2Nlc3NBUEkiLCJwaWNrZXJPcHRpb25zRnJvbUFjY2VwdCIsImRlc2NyaXB0aW9uIiwib2siLCJpc01JTUVUeXBlIiwiY29uc29sZSIsIndhcm4iLCJpc0V4dCIsImFnZyIsImFjY2VwdFByb3BBc0FjY2VwdEF0dHIiLCJhIiwiaXNBYm9ydCIsIkRPTUV4Y2VwdGlvbiIsIkFCT1JUX0VSUiIsImlzU2VjdXJpdHlFcnJvciIsIlNFQ1VSSVRZX0VSUiIsInRlc3QiLCJEcm9wem9uZSIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGlsZHJlbiIsInVzZURyb3B6b25lIiwib3BlbiIsInByb3BzIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwiZ2V0RmlsZXNGcm9tRXZlbnQiLCJpc0NoYW5nZUV2dCIsIkluZmluaXR5IiwicHJldmVudERyb3BPbkRvY3VtZW50Iiwibm9DbGljayIsIm5vS2V5Ym9hcmQiLCJub0RyYWciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVzZUZzQWNjZXNzQXBpIiwiYXV0b0ZvY3VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdE9mIiwiYXJyYXlPZiIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbkZpbGVEaWFsb2dDYW5jZWwiLCJvbkZpbGVEaWFsb2dPcGVuIiwib25EcmFnRW50ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJvbkRyb3BBY2NlcHRlZCIsIm9uRHJvcFJlamVjdGVkIiwib25FcnJvciIsImluaXRpYWxTdGF0ZSIsImlzRm9jdXNlZCIsImlzRmlsZURpYWxvZ0FjdGl2ZSIsImlzRHJhZ0FjdGl2ZSIsImlzRHJhZ0FjY2VwdCIsImlzRHJhZ1JlamVjdCIsImZpbGVSZWplY3Rpb25zIiwiYWNjZXB0QXR0ciIsInVzZU1lbW8iLCJwaWNrZXJUeXBlcyIsIm9uRmlsZURpYWxvZ09wZW5DYiIsIm5vb3AiLCJvbkZpbGVEaWFsb2dDYW5jZWxDYiIsInJvb3RSZWYiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImZzQWNjZXNzQXBpV29ya3NSZWYiLCJpc1NlY3VyZUNvbnRleHQiLCJvbldpbmRvd0ZvY3VzIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyYWdUYXJnZXRzUmVmIiwib25Eb2N1bWVudERyb3AiLCJjb250YWlucyIsImRvY3VtZW50IiwiZm9jdXMiLCJvbkVyckNiIiwidXNlQ2FsbGJhY2siLCJvbkRyYWdFbnRlckNiIiwicGVyc2lzdCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbGVDb3VudCIsImNhdGNoIiwib25EcmFnT3ZlckNiIiwiaGFzRmlsZXMiLCJkcm9wRWZmZWN0Iiwib25EcmFnTGVhdmVDYiIsInRhcmdldHMiLCJ0YXJnZXRJZHgiLCJzcGxpY2UiLCJzZXRGaWxlcyIsImZvckVhY2giLCJhY2NlcHRFcnJvciIsInNpemVFcnJvciIsImVycm9ycyIsIm9uRHJvcENiIiwib3BlbkZpbGVEaWFsb2ciLCJvcHRzIiwic2hvd09wZW5GaWxlUGlja2VyIiwiY2xpY2siLCJFcnJvciIsIm9uS2V5RG93bkNiIiwiaXNFcXVhbE5vZGUiLCJrZXkiLCJrZXlDb2RlIiwib25Gb2N1c0NiIiwib25CbHVyQ2IiLCJvbkNsaWNrQ2IiLCJjb21wb3NlSGFuZGxlciIsImNvbXBvc2VLZXlib2FyZEhhbmRsZXIiLCJjb21wb3NlRHJhZ0hhbmRsZXIiLCJnZXRSb290UHJvcHMiLCJyZWZLZXkiLCJyb2xlIiwib25LZXlEb3duIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2siLCJyZXN0IiwidGFiSW5kZXgiLCJvbklucHV0RWxlbWVudENsaWNrIiwiZ2V0SW5wdXRQcm9wcyIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsInN0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


/***/ }),

/***/ 36392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $j: () => (/* binding */ $905f4ae918aab1aa$export$848c9b7ead0df967),
/* harmony export */   Dx: () => (/* binding */ $905f4ae918aab1aa$export$f99233281efd08a0),
/* harmony export */   VY: () => (/* binding */ $905f4ae918aab1aa$export$7c6e2c02157bb7d2),
/* harmony export */   aU: () => (/* binding */ $905f4ae918aab1aa$export$e19cd5f9376f8cee),
/* harmony export */   aV: () => (/* binding */ $905f4ae918aab1aa$export$c6fdb837b070b4ff),
/* harmony export */   dk: () => (/* binding */ $905f4ae918aab1aa$export$393edc798c47379d),
/* harmony export */   fC: () => (/* binding */ $905f4ae918aab1aa$export$be92b6f5f03c0fe9),
/* harmony export */   h_: () => (/* binding */ $905f4ae918aab1aa$export$602eac185826482c),
/* harmony export */   xz: () => (/* binding */ $905f4ae918aab1aa$export$41fb9f06171c75f4)
/* harmony export */ });
/* unused harmony exports createAlertDialogScope, AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogTitle, AlertDialogDescription */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8718);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80880);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7589);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32840);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71085);
















/* -------------------------------------------------------------------------------------------------
 * AlertDialog
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$ROOT_NAME = 'AlertDialog';
const [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($905f4ae918aab1aa$var$ROOT_NAME, [
    _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .createDialogScope */ .p8
]);
const $905f4ae918aab1aa$var$useDialogScope = (0,_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .createDialogScope */ .p8)();
const $905f4ae918aab1aa$export$de466dd8317b0b75 = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...alertDialogProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, alertDialogProps, {
        modal: true
    }));
};
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$de466dd8317b0b75, {
    displayName: $905f4ae918aab1aa$var$ROOT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$TRIGGER_NAME = 'AlertDialogTrigger';
const $905f4ae918aab1aa$export$6edd7a623ef0f40b = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...triggerProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, triggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$6edd7a623ef0f40b, {
    displayName: $905f4ae918aab1aa$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$PORTAL_NAME = 'AlertDialogPortal';
const $905f4ae918aab1aa$export$660f2bfdb986706c = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...portalProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, portalProps));
};
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$660f2bfdb986706c, {
    displayName: $905f4ae918aab1aa$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$OVERLAY_NAME = 'AlertDialogOverlay';
const $905f4ae918aab1aa$export$a707a4895ce23256 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...overlayProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, overlayProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$a707a4895ce23256, {
    displayName: $905f4ae918aab1aa$var$OVERLAY_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogContent
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$CONTENT_NAME = 'AlertDialogContent';
const [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
const $905f4ae918aab1aa$export$94e6af45f0af4efd = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , children: children , ...contentProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(forwardedRef, contentRef);
    const cancelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .WarningProvider */ .jm, {
        contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
        titleName: $905f4ae918aab1aa$var$TITLE_NAME,
        docsSlug: "alert-dialog"
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
        scope: __scopeAlertDialog,
        cancelRef: cancelRef
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        role: "alertdialog"
    }, dialogScope, contentProps, {
        ref: composedRefs,
        onOpenAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(contentProps.onOpenAutoFocus, (event)=>{
            var _cancelRef$current;
            event.preventDefault();
            (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
                preventScroll: true
            });
        }),
        onPointerDownOutside: (event)=>event.preventDefault()
        ,
        onInteractOutside: (event)=>event.preventDefault()
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_6__/* .Slottable */ .A4, null, children), false)));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$94e6af45f0af4efd, {
    displayName: $905f4ae918aab1aa$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$TITLE_NAME = 'AlertDialogTitle';
const $905f4ae918aab1aa$export$225e0da62d314b7 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...titleProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$225e0da62d314b7, {
    displayName: $905f4ae918aab1aa$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$DESCRIPTION_NAME = 'AlertDialogDescription';
const $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...descriptionProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$a23b55cde55ad9a5, {
    displayName: $905f4ae918aab1aa$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogAction
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$ACTION_NAME = 'AlertDialogAction';
const $905f4ae918aab1aa$export$b454f818c58ee85d = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...actionProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, actionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$b454f818c58ee85d, {
    displayName: $905f4ae918aab1aa$var$ACTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogCancel
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$CANCEL_NAME = 'AlertDialogCancel';
const $905f4ae918aab1aa$export$2f67a923571aaea0 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...cancelProps } = props;
    const { cancelRef: cancelRef  } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(forwardedRef, cancelRef);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, dialogScope, cancelProps, {
        ref: ref
    }));
});
/*#__PURE__*/ Object.assign($905f4ae918aab1aa$export$2f67a923571aaea0, {
    displayName: $905f4ae918aab1aa$var$CANCEL_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $905f4ae918aab1aa$var$DescriptionWarning = ({ contentRef: contentRef  })=>{
    const MESSAGE = `\`${$905f4ae918aab1aa$var$CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${$905f4ae918aab1aa$var$CONTENT_NAME}\` by passing a \`${$905f4ae918aab1aa$var$DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${$905f4ae918aab1aa$var$CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    $4k4D0$useEffect(()=>{
        var _contentRef$current;
        const hasDescription = document.getElementById((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'));
        if (!hasDescription) console.warn(MESSAGE);
    }, [
        MESSAGE,
        contentRef
    ]);
    return null;
};
const $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
const $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
const $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
const $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
const $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
const $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
const $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
const $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
const $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 7507:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jp: () => (/* binding */ generateComponents)
});

// UNUSED EXPORTS: UploadButton, UploadDropzone, Uploader

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/chunk-BFQJWQY7.mjs
// src/db.ts
var mimeTypesInternal = {
  "application/andrew-inset": {
    source: "iana",
    extensions: ["ez"],
    compressible: null
  },
  "application/applixware": {
    source: "apache",
    extensions: ["aw"],
    compressible: null
  },
  "application/atom+xml": {
    source: "iana",
    compressible: true,
    extensions: ["atom"]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: true,
    extensions: ["atomcat"]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: true,
    extensions: ["atomdeleted"]
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: true,
    extensions: ["atomsvc"]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: true,
    extensions: ["dwd"]
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: true,
    extensions: ["held"]
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rsat"]
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xcs"]
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["ccxml"]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: true,
    extensions: ["cdfx"]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: ["cdmia"],
    compressible: null
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: ["cdmic"],
    compressible: null
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: ["cdmid"],
    compressible: null
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: ["cdmio"],
    compressible: null
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: ["cdmiq"],
    compressible: null
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: true,
    extensions: ["cpl"]
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: ["cu"],
    compressible: null
  },
  "application/dash+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mpd"]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mpp"]
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: true,
    extensions: ["davmount"]
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: true,
    extensions: ["dbk"]
  },
  "application/dssc+der": {
    source: "iana",
    extensions: ["dssc"],
    compressible: null
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xdssc"]
  },
  "application/ecmascript": {
    source: "iana",
    compressible: true,
    extensions: ["es", "ecma"]
  },
  "application/emma+xml": {
    source: "iana",
    compressible: true,
    extensions: ["emma"]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["emotionml"]
  },
  "application/epub+zip": {
    source: "iana",
    compressible: false,
    extensions: ["epub"]
  },
  "application/exi": {
    source: "iana",
    extensions: ["exi"],
    compressible: null
  },
  "application/express": {
    source: "iana",
    extensions: ["exp"],
    compressible: null
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: true,
    extensions: ["fdt"]
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: ["pfr"],
    compressible: null
  },
  "application/geo+json": {
    source: "iana",
    compressible: true,
    extensions: ["geojson"]
  },
  "application/gml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["gml"]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: true,
    extensions: ["gpx"]
  },
  "application/gxf": {
    source: "apache",
    extensions: ["gxf"],
    compressible: null
  },
  "application/gzip": {
    source: "iana",
    compressible: false,
    extensions: ["gz"]
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: ["stk"],
    compressible: null
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["ink", "inkml"]
  },
  "application/ipfix": {
    source: "iana",
    extensions: ["ipfix"],
    compressible: null
  },
  "application/its+xml": {
    source: "iana",
    compressible: true,
    extensions: ["its"]
  },
  "application/java-archive": {
    source: "apache",
    compressible: false,
    extensions: ["jar", "war", "ear"]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: false,
    extensions: ["ser"]
  },
  "application/java-vm": {
    source: "apache",
    compressible: false,
    extensions: ["class"]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["js", "mjs"]
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["json", "map"]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: true,
    extensions: ["jsonml"]
  },
  "application/ld+json": {
    source: "iana",
    compressible: true,
    extensions: ["jsonld"]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: true,
    extensions: ["lgr"]
  },
  "application/lost+xml": {
    source: "iana",
    compressible: true,
    extensions: ["lostxml"]
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: ["hqx"],
    compressible: null
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: ["cpt"],
    compressible: null
  },
  "application/mads+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mads"]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["webmanifest"]
  },
  "application/marc": {
    source: "iana",
    extensions: ["mrc"],
    compressible: null
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mrcx"]
  },
  "application/mathematica": {
    source: "iana",
    extensions: ["ma", "nb", "mb"],
    compressible: null
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mathml"]
  },
  "application/mbox": {
    source: "iana",
    extensions: ["mbox"],
    compressible: null
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mpf"]
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mscml"]
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: true,
    extensions: ["metalink"]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: true,
    extensions: ["meta4"]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mets"]
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: true,
    extensions: ["maei"]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: true,
    extensions: ["musd"]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mods"]
  },
  "application/mp21": {
    source: "iana",
    extensions: ["m21", "mp21"],
    compressible: null
  },
  "application/mp4": {
    source: "iana",
    extensions: ["mp4s", "m4p"],
    compressible: null
  },
  "application/msword": {
    source: "iana",
    compressible: false,
    extensions: ["doc", "dot"]
  },
  "application/mxf": {
    source: "iana",
    extensions: ["mxf"],
    compressible: null
  },
  "application/n-quads": {
    source: "iana",
    extensions: ["nq"],
    compressible: null
  },
  "application/n-triples": {
    source: "iana",
    extensions: ["nt"],
    compressible: null
  },
  "application/node": {
    source: "iana",
    extensions: ["cjs"],
    compressible: null
  },
  "application/octet-stream": {
    source: "iana",
    compressible: false,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: ["oda"],
    compressible: null
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: true,
    extensions: ["opf"]
  },
  "application/ogg": {
    source: "iana",
    compressible: false,
    extensions: ["ogx"]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: true,
    extensions: ["omdoc"]
  },
  "application/onenote": {
    source: "apache",
    extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"],
    compressible: null
  },
  "application/oxps": {
    source: "iana",
    extensions: ["oxps"],
    compressible: null
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: true,
    extensions: ["relo"]
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xer"]
  },
  "application/pdf": {
    source: "iana",
    compressible: false,
    extensions: ["pdf"]
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: false,
    extensions: ["pgp"]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: ["asc"],
    compressible: null
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: ["asc", "sig"],
    compressible: null
  },
  "application/pics-rules": {
    source: "apache",
    extensions: ["prf"],
    compressible: null
  },
  "application/pkcs10": {
    source: "iana",
    extensions: ["p10"],
    compressible: null
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: ["p7m", "p7c"],
    compressible: null
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: ["p7s"],
    compressible: null
  },
  "application/pkcs8": {
    source: "iana",
    extensions: ["p8"],
    compressible: null
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: ["ac"],
    compressible: null
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: ["cer"],
    compressible: null
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: ["crl"],
    compressible: null
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: ["pkipath"],
    compressible: null
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: ["pki"],
    compressible: null
  },
  "application/pls+xml": {
    source: "iana",
    compressible: true,
    extensions: ["pls"]
  },
  "application/postscript": {
    source: "iana",
    compressible: true,
    extensions: ["ai", "eps", "ps"]
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: true,
    extensions: ["provx"]
  },
  "application/prs.cww": {
    source: "iana",
    extensions: ["cww"],
    compressible: null
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: true,
    extensions: ["pskcxml"]
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rdf", "owl"]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rif"]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: ["rnc"],
    compressible: null
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rl"]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rld"]
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rs"]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rapd"]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: true,
    extensions: ["sls"]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rusd"]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: ["gbr"],
    compressible: null
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: ["mft"],
    compressible: null
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: ["roa"],
    compressible: null
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: true,
    extensions: ["rsd"]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: true,
    extensions: ["rss"]
  },
  "application/rtf": {
    source: "iana",
    compressible: true,
    extensions: ["rtf"]
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["sbml"]
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: ["scq"],
    compressible: null
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: ["scs"],
    compressible: null
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: ["spq"],
    compressible: null
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: ["spp"],
    compressible: null
  },
  "application/sdp": {
    source: "iana",
    extensions: ["sdp"],
    compressible: null
  },
  "application/senml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["senmlx"]
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["sensmlx"]
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: ["setpay"],
    compressible: null
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: ["setreg"],
    compressible: null
  },
  "application/shf+xml": {
    source: "iana",
    compressible: true,
    extensions: ["shf"]
  },
  "application/sieve": {
    source: "iana",
    extensions: ["siv", "sieve"],
    compressible: null
  },
  "application/smil+xml": {
    source: "iana",
    compressible: true,
    extensions: ["smi", "smil"]
  },
  "application/sparql-query": {
    source: "iana",
    extensions: ["rq"],
    compressible: null
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: true,
    extensions: ["srx"]
  },
  "application/srgs": {
    source: "iana",
    extensions: ["gram"],
    compressible: null
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: true,
    extensions: ["grxml"]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: true,
    extensions: ["sru"]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: true,
    extensions: ["ssdl"]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["ssml"]
  },
  "application/swid+xml": {
    source: "iana",
    compressible: true,
    extensions: ["swidtag"]
  },
  "application/tei+xml": {
    source: "iana",
    compressible: true,
    extensions: ["tei", "teicorpus"]
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: true,
    extensions: ["tfi"]
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: ["tsd"],
    compressible: null
  },
  "application/trig": {
    source: "iana",
    extensions: ["trig"],
    compressible: null
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["ttml"]
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: true,
    extensions: ["rsheet"]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: true,
    extensions: ["td"]
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: true,
    extensions: ["1km"]
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: ["plb"],
    compressible: null
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: ["psb"],
    compressible: null
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: ["pvb"],
    compressible: null
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: ["tcap"],
    compressible: null
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: ["pwn"],
    compressible: null
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: ["aso"],
    compressible: null
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: ["imp"],
    compressible: null
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: ["acu"],
    compressible: null
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: ["atc", "acutc"],
    compressible: null
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: false,
    extensions: ["air"]
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: ["fcdt"],
    compressible: null
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: ["fxp", "fxpl"],
    compressible: null
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xdp"]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: ["xfdf"],
    compressible: null
  },
  "application/vnd.age": {
    source: "iana",
    extensions: ["age"],
    compressible: null
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: ["ahead"],
    compressible: null
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: ["azf"],
    compressible: null
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: ["azs"],
    compressible: null
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: ["azw"],
    compressible: null
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: ["acc"],
    compressible: null
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: ["ami"],
    compressible: null
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: false,
    extensions: ["apk"]
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: ["cii"],
    compressible: null
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: ["fti"],
    compressible: null
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: ["atx"],
    compressible: null
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mpkg"]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: ["key"],
    compressible: null
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: ["m3u8"],
    compressible: null
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: ["numbers"],
    compressible: null
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: ["pages"],
    compressible: null
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: ["swi"],
    compressible: null
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: ["iota"],
    compressible: null
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: ["aep"],
    compressible: null
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["bmml"]
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: ["mpm"],
    compressible: null
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: ["bmi"],
    compressible: null
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: ["rep"],
    compressible: null
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: true,
    extensions: ["cdxml"]
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: ["mmd"],
    compressible: null
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: ["cdy"],
    compressible: null
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: true,
    extensions: ["csl"]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: ["cla"],
    compressible: null
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: ["rp9"],
    compressible: null
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"],
    compressible: null
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: ["c11amc"],
    compressible: null
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: ["c11amz"],
    compressible: null
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: ["csp"],
    compressible: null
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: ["cdbcmsg"],
    compressible: null
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: ["cmc"],
    compressible: null
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: ["clkx"],
    compressible: null
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: ["clkk"],
    compressible: null
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: ["clkp"],
    compressible: null
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: ["clkt"],
    compressible: null
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: ["clkw"],
    compressible: null
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: true,
    extensions: ["wbs"]
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: ["pml"],
    compressible: null
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: ["ppd"],
    compressible: null
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: ["car"],
    compressible: null
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: ["pcurl"],
    compressible: null
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: true,
    extensions: ["dart"]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: ["rdz"],
    compressible: null
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: ["dbf"],
    compressible: null
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: ["uvf", "uvvf", "uvd", "uvvd"],
    compressible: null
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["uvt", "uvvt"]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: ["uvx", "uvvx"],
    compressible: null
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: ["uvz", "uvvz"],
    compressible: null
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: ["fe_launch"],
    compressible: null
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: ["dna"],
    compressible: null
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: ["mlp"],
    compressible: null
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: ["dpg"],
    compressible: null
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: ["dfac"],
    compressible: null
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: ["kpxx"],
    compressible: null
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: ["ait"],
    compressible: null
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: ["svc"],
    compressible: null
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: ["geo"],
    compressible: null
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: ["mag"],
    compressible: null
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: ["nml"],
    compressible: null
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: ["esf"],
    compressible: null
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: ["msf"],
    compressible: null
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: ["qam"],
    compressible: null
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: ["slt"],
    compressible: null
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: ["ssf"],
    compressible: null
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: true,
    extensions: ["es3", "et3"]
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: ["ez2"],
    compressible: null
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: ["ez3"],
    compressible: null
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: ["fdf"],
    compressible: null
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: ["mseed"],
    compressible: null
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: ["seed", "dataless"],
    compressible: null
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: ["gph"],
    compressible: null
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: ["ftc"],
    compressible: null
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: ["fm", "frame", "maker", "book"],
    compressible: null
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: ["fnc"],
    compressible: null
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: ["ltf"],
    compressible: null
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: ["fsc"],
    compressible: null
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: ["oas"],
    compressible: null
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: ["oa2"],
    compressible: null
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: ["oa3"],
    compressible: null
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: ["fg5"],
    compressible: null
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: ["bh2"],
    compressible: null
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: ["ddd"],
    compressible: null
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: ["xdw"],
    compressible: null
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: ["xbd"],
    compressible: null
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: ["fzs"],
    compressible: null
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: ["txd"],
    compressible: null
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: ["ggb"],
    compressible: null
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: ["ggt"],
    compressible: null
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: ["gex", "gre"],
    compressible: null
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: ["gxt"],
    compressible: null
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: ["g2w"],
    compressible: null
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: ["g3w"],
    compressible: null
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: ["gmx"],
    compressible: null
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["kml"]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: false,
    extensions: ["kmz"]
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: ["gqf", "gqs"],
    compressible: null
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: ["gac"],
    compressible: null
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: ["ghf"],
    compressible: null
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: ["gim"],
    compressible: null
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: ["grv"],
    compressible: null
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: ["gtm"],
    compressible: null
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: ["tpl"],
    compressible: null
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: ["vcg"],
    compressible: null
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: true,
    extensions: ["hal"]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: true,
    extensions: ["zmm"]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: ["hbci"],
    compressible: null
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: ["les"],
    compressible: null
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: ["hpgl"],
    compressible: null
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: ["hpid"],
    compressible: null
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: ["hps"],
    compressible: null
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: ["jlt"],
    compressible: null
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: ["pcl"],
    compressible: null
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: ["pclxl"],
    compressible: null
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: ["sfd-hdstx"],
    compressible: null
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: ["mpy"],
    compressible: null
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: ["afp", "listafp", "list3820"],
    compressible: null
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: ["irm"],
    compressible: null
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: ["sc"],
    compressible: null
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: ["icc", "icm"],
    compressible: null
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: ["igl"],
    compressible: null
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: ["ivp"],
    compressible: null
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: ["ivu"],
    compressible: null
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: ["igm"],
    compressible: null
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: ["xpw", "xpx"],
    compressible: null
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: ["i2g"],
    compressible: null
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: ["qbo"],
    compressible: null
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: ["qfx"],
    compressible: null
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: ["rcprofile"],
    compressible: null
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: true,
    extensions: ["irp"]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: ["xpr"],
    compressible: null
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: ["fcs"],
    compressible: null
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: ["jam"],
    compressible: null
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: ["rms"],
    compressible: null
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: ["jisp"],
    compressible: null
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: ["joda"],
    compressible: null
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: ["ktz", "ktr"],
    compressible: null
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: ["karbon"],
    compressible: null
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: ["chrt"],
    compressible: null
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: ["kfo"],
    compressible: null
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: ["flw"],
    compressible: null
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: ["kon"],
    compressible: null
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: ["kpr", "kpt"],
    compressible: null
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: ["ksp"],
    compressible: null
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: ["kwd", "kwt"],
    compressible: null
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: ["htke"],
    compressible: null
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: ["kia"],
    compressible: null
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: ["kne", "knp"],
    compressible: null
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: ["skp", "skd", "skt", "skm"],
    compressible: null
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: ["sse"],
    compressible: null
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: true,
    extensions: ["lasxml"]
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: ["lbd"],
    compressible: null
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: true,
    extensions: ["lbe"]
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: ["123"],
    compressible: null
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: ["apr"],
    compressible: null
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: ["pre"],
    compressible: null
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: ["nsf"],
    compressible: null
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: ["org"],
    compressible: null
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: ["scm"],
    compressible: null
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: ["lwp"],
    compressible: null
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: ["portpkg"],
    compressible: null
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: ["mvt"],
    compressible: null
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: ["mcd"],
    compressible: null
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: ["mc1"],
    compressible: null
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: ["cdkey"],
    compressible: null
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: ["mwf"],
    compressible: null
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: ["mfm"],
    compressible: null
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: ["flo"],
    compressible: null
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: ["igx"],
    compressible: null
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: ["mif"],
    compressible: null
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: ["daf"],
    compressible: null
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: ["dis"],
    compressible: null
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: ["mbk"],
    compressible: null
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: ["mqy"],
    compressible: null
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: ["msl"],
    compressible: null
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: ["plc"],
    compressible: null
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: ["txf"],
    compressible: null
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: ["mpn"],
    compressible: null
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: ["mpc"],
    compressible: null
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xul"]
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: ["cil"],
    compressible: null
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: ["cab"],
    compressible: null
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: false,
    extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: ["xlam"],
    compressible: null
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: ["xlsb"],
    compressible: null
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: ["xlsm"],
    compressible: null
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: ["xltm"],
    compressible: null
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: true,
    extensions: ["eot"]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: ["chm"],
    compressible: null
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: ["ims"],
    compressible: null
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: ["lrm"],
    compressible: null
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: ["thmx"],
    compressible: null
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: ["cat"],
    compressible: null
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: ["stl"],
    compressible: null
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: false,
    extensions: ["ppt", "pps", "pot"]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: ["ppam"],
    compressible: null
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: ["pptm"],
    compressible: null
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: ["sldm"],
    compressible: null
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: ["ppsm"],
    compressible: null
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: ["potm"],
    compressible: null
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: ["mpp", "mpt"],
    compressible: null
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: ["docm"],
    compressible: null
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: ["dotm"],
    compressible: null
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: ["wps", "wks", "wcm", "wdb"],
    compressible: null
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: ["wpl"],
    compressible: null
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: false,
    extensions: ["xps"]
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: ["mseq"],
    compressible: null
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: ["mus"],
    compressible: null
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: ["msty"],
    compressible: null
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: ["taglet"],
    compressible: null
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: ["nlu"],
    compressible: null
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: ["ntf", "nitf"],
    compressible: null
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: ["nnd"],
    compressible: null
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: ["nns"],
    compressible: null
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: ["nnw"],
    compressible: null
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: true,
    extensions: ["ac"]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: ["ngdat"],
    compressible: null
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: ["n-gage"],
    compressible: null
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: ["rpst"],
    compressible: null
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: ["rpss"],
    compressible: null
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: ["edm"],
    compressible: null
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: ["edx"],
    compressible: null
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: ["ext"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: ["odc"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: ["otc"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: ["odb"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: ["odf"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: ["odft"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: false,
    extensions: ["odg"]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: ["otg"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: ["odi"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: ["oti"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: false,
    extensions: ["odp"]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: ["otp"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: false,
    extensions: ["ods"]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: ["ots"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: false,
    extensions: ["odt"]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: ["odm"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: ["ott"],
    compressible: null
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: ["oth"],
    compressible: null
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: ["xo"],
    compressible: null
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: true,
    extensions: ["dd2"]
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: true,
    extensions: ["obgx"]
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: ["oxt"],
    compressible: null
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: true,
    extensions: ["osm"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: false,
    extensions: ["pptx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: ["sldx"],
    compressible: null
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: ["ppsx"],
    compressible: null
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: ["potx"],
    compressible: null
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: false,
    extensions: ["xlsx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: ["xltx"],
    compressible: null
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: false,
    extensions: ["docx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: ["dotx"],
    compressible: null
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: ["mgp"],
    compressible: null
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: ["dp"],
    compressible: null
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: ["esa"],
    compressible: null
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: ["pdb", "pqa", "oprc"],
    compressible: null
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: ["paw"],
    compressible: null
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: ["str"],
    compressible: null
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: ["ei6"],
    compressible: null
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: ["efif"],
    compressible: null
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: ["wg"],
    compressible: null
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: ["plf"],
    compressible: null
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: ["pbd"],
    compressible: null
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: ["box"],
    compressible: null
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: ["mgz"],
    compressible: null
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: ["qps"],
    compressible: null
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: ["ptid"],
    compressible: null
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
    compressible: null
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: ["rar"],
    compressible: null
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: ["bed"],
    compressible: null
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: ["mxl"],
    compressible: null
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["musicxml"]
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: ["cryptonote"],
    compressible: null
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: ["cod"],
    compressible: null
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: ["rm"],
    compressible: null
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: ["rmvb"],
    compressible: null
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: true,
    extensions: ["link66"]
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: ["st"],
    compressible: null
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: ["see"],
    compressible: null
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: ["sema"],
    compressible: null
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: ["semd"],
    compressible: null
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: ["semf"],
    compressible: null
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: ["ifm"],
    compressible: null
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: ["itp"],
    compressible: null
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: ["iif"],
    compressible: null
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: ["ipk"],
    compressible: null
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: ["twd", "twds"],
    compressible: null
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: ["mmf"],
    compressible: null
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: ["teacher"],
    compressible: null
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: true,
    extensions: ["fo"]
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: true,
    extensions: ["sdkm", "sdkd"]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: ["dxp"],
    compressible: null
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: ["sfs"],
    compressible: null
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: ["sdc"],
    compressible: null
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: ["sda"],
    compressible: null
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: ["sdd"],
    compressible: null
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: ["smf"],
    compressible: null
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: ["sdw", "vor"],
    compressible: null
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: ["sgl"],
    compressible: null
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: ["smzip"],
    compressible: null
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: ["sm"],
    compressible: null
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: true,
    extensions: ["wadl"]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: ["sxc"],
    compressible: null
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: ["stc"],
    compressible: null
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: ["sxd"],
    compressible: null
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: ["std"],
    compressible: null
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: ["sxi"],
    compressible: null
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: ["sti"],
    compressible: null
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: ["sxm"],
    compressible: null
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: ["sxw"],
    compressible: null
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: ["sxg"],
    compressible: null
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: ["stw"],
    compressible: null
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: ["sus", "susp"],
    compressible: null
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: ["svd"],
    compressible: null
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: ["sis", "sisx"],
    compressible: null
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["xsm"]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: ["bdm"],
    compressible: null
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["xdm"]
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["ddf"]
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: ["tao"],
    compressible: null
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: ["pcap", "cap", "dmp"],
    compressible: null
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: ["tmo"],
    compressible: null
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: ["tpt"],
    compressible: null
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: ["mxs"],
    compressible: null
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: ["tra"],
    compressible: null
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: ["ufd", "ufdl"],
    compressible: null
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: ["utz"],
    compressible: null
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: ["umj"],
    compressible: null
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: ["unityweb"],
    compressible: null
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["uoml"]
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: ["vcx"],
    compressible: null
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: ["vsd", "vst", "vss", "vsw"],
    compressible: null
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: ["vis"],
    compressible: null
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: ["vsf"],
    compressible: null
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: ["wbxml"],
    compressible: null
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: ["wmlc"],
    compressible: null
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: ["wmlsc"],
    compressible: null
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: ["wtb"],
    compressible: null
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: ["nbp"],
    compressible: null
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: ["wpd"],
    compressible: null
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: ["wqd"],
    compressible: null
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: ["stf"],
    compressible: null
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: ["xar"],
    compressible: null
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: ["xfdl"],
    compressible: null
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: ["hvd"],
    compressible: null
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: ["hvs"],
    compressible: null
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: ["hvp"],
    compressible: null
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: ["osf"],
    compressible: null
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: true,
    extensions: ["osfpvg"]
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: ["saf"],
    compressible: null
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: ["spf"],
    compressible: null
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: ["cmp"],
    compressible: null
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: ["zir", "zirz"],
    compressible: null
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: true,
    extensions: ["zaz"]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["vxml"]
  },
  "application/wasm": {
    source: "iana",
    compressible: true,
    extensions: ["wasm"]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: true,
    extensions: ["wif"]
  },
  "application/widget": {
    source: "iana",
    extensions: ["wgt"],
    compressible: null
  },
  "application/winhlp": {
    source: "apache",
    extensions: ["hlp"],
    compressible: null
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: true,
    extensions: ["wsdl"]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: true,
    extensions: ["wspolicy"]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: false,
    extensions: ["7z"]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: ["abw"],
    compressible: null
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: ["ace"],
    compressible: null
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: ["dmg"],
    compressible: null
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: ["aab", "x32", "u32", "vox"],
    compressible: null
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: ["aam"],
    compressible: null
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: ["aas"],
    compressible: null
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: ["bcpio"],
    compressible: null
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: ["torrent"],
    compressible: null
  },
  "application/x-blorb": {
    source: "apache",
    extensions: ["blb", "blorb"],
    compressible: null
  },
  "application/x-bzip": {
    source: "apache",
    compressible: false,
    extensions: ["bz"]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: false,
    extensions: ["bz2", "boz"]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: ["cbr", "cba", "cbt", "cbz", "cb7"],
    compressible: null
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: ["vcd"],
    compressible: null
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: ["cfs"],
    compressible: null
  },
  "application/x-chat": {
    source: "apache",
    extensions: ["chat"],
    compressible: null
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: ["pgn"],
    compressible: null
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: ["cco"],
    compressible: null
  },
  "application/x-conference": {
    source: "apache",
    extensions: ["nsc"],
    compressible: null
  },
  "application/x-cpio": {
    source: "apache",
    extensions: ["cpio"],
    compressible: null
  },
  "application/x-csh": {
    source: "apache",
    extensions: ["csh"],
    compressible: null
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: ["deb", "udeb"],
    compressible: null
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: ["dgc"],
    compressible: null
  },
  "application/x-director": {
    source: "apache",
    extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
    compressible: null
  },
  "application/x-doom": {
    source: "apache",
    extensions: ["wad"],
    compressible: null
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: true,
    extensions: ["ncx"]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: true,
    extensions: ["dtb"]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: true,
    extensions: ["res"]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: false,
    extensions: ["dvi"]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: ["evy"],
    compressible: null
  },
  "application/x-eva": {
    source: "apache",
    extensions: ["eva"],
    compressible: null
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: ["bdf"],
    compressible: null
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: ["gsf"],
    compressible: null
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: ["psf"],
    compressible: null
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: ["pcf"],
    compressible: null
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: ["snf"],
    compressible: null
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: ["pfa", "pfb", "pfm", "afm"],
    compressible: null
  },
  "application/x-freearc": {
    source: "apache",
    extensions: ["arc"],
    compressible: null
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: ["spl"],
    compressible: null
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: ["gca"],
    compressible: null
  },
  "application/x-glulx": {
    source: "apache",
    extensions: ["ulx"],
    compressible: null
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: ["gnumeric"],
    compressible: null
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: ["gramps"],
    compressible: null
  },
  "application/x-gtar": {
    source: "apache",
    extensions: ["gtar"],
    compressible: null
  },
  "application/x-hdf": {
    source: "apache",
    extensions: ["hdf"],
    compressible: null
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: ["install"],
    compressible: null
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: ["iso"],
    compressible: null
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: ["jardiff"],
    compressible: null
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: false,
    extensions: ["jnlp"]
  },
  "application/x-latex": {
    source: "apache",
    compressible: false,
    extensions: ["latex"]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: ["lzh", "lha"],
    compressible: null
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: ["run"],
    compressible: null
  },
  "application/x-mie": {
    source: "apache",
    extensions: ["mie"],
    compressible: null
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: ["prc", "mobi"],
    compressible: null
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: ["application"],
    compressible: null
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: ["lnk"],
    compressible: null
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: ["wmd"],
    compressible: null
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: ["wmz"],
    compressible: null
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: ["xbap"],
    compressible: null
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: ["mdb"],
    compressible: null
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: ["obd"],
    compressible: null
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: ["crd"],
    compressible: null
  },
  "application/x-msclip": {
    source: "apache",
    extensions: ["clp"],
    compressible: null
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: ["exe", "dll", "com", "bat", "msi"],
    compressible: null
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: ["mvb", "m13", "m14"],
    compressible: null
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: ["wmf", "wmz", "emf", "emz"],
    compressible: null
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: ["mny"],
    compressible: null
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: ["pub"],
    compressible: null
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: ["scd"],
    compressible: null
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: ["trm"],
    compressible: null
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: ["wri"],
    compressible: null
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: ["nc", "cdf"],
    compressible: null
  },
  "application/x-nzb": {
    source: "apache",
    extensions: ["nzb"],
    compressible: null
  },
  "application/x-perl": {
    source: "nginx",
    extensions: ["pl", "pm"],
    compressible: null
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: ["prc", "pdb"],
    compressible: null
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: false,
    extensions: ["p12", "pfx"]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: ["p7b", "spc"],
    compressible: null
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: ["p7r"],
    compressible: null
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: false,
    extensions: ["rar"]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: ["rpm"],
    compressible: null
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: ["ris"],
    compressible: null
  },
  "application/x-sea": {
    source: "nginx",
    extensions: ["sea"],
    compressible: null
  },
  "application/x-sh": {
    source: "apache",
    compressible: true,
    extensions: ["sh"]
  },
  "application/x-shar": {
    source: "apache",
    extensions: ["shar"],
    compressible: null
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: false,
    extensions: ["swf"]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: ["xap"],
    compressible: null
  },
  "application/x-sql": {
    source: "apache",
    extensions: ["sql"],
    compressible: null
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: false,
    extensions: ["sit"]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: ["sitx"],
    compressible: null
  },
  "application/x-subrip": {
    source: "apache",
    extensions: ["srt"],
    compressible: null
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: ["sv4cpio"],
    compressible: null
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: ["sv4crc"],
    compressible: null
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: ["t3"],
    compressible: null
  },
  "application/x-tads": {
    source: "apache",
    extensions: ["gam"],
    compressible: null
  },
  "application/x-tar": {
    source: "apache",
    compressible: true,
    extensions: ["tar"]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: ["tcl", "tk"],
    compressible: null
  },
  "application/x-tex": {
    source: "apache",
    extensions: ["tex"],
    compressible: null
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: ["tfm"],
    compressible: null
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: ["texinfo", "texi"],
    compressible: null
  },
  "application/x-tgif": {
    source: "apache",
    extensions: ["obj"],
    compressible: null
  },
  "application/x-ustar": {
    source: "apache",
    extensions: ["ustar"],
    compressible: null
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: ["src"],
    compressible: null
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: ["der", "crt", "pem"],
    compressible: null
  },
  "application/x-xfig": {
    source: "apache",
    extensions: ["fig"],
    compressible: null
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: true,
    extensions: ["xlf"]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: false,
    extensions: ["xpi"]
  },
  "application/x-xz": {
    source: "apache",
    extensions: ["xz"],
    compressible: null
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    compressible: null
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: true,
    extensions: ["xaml"]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xav"]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xca"]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xdf"]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xel"]
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xns"]
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xenc"]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xhtml", "xht"]
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xlf"]
  },
  "application/xml": {
    source: "iana",
    compressible: true,
    extensions: ["xml", "xsl", "xsd", "rng"]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: true,
    extensions: ["dtd"]
  },
  "application/xop+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xop"]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: true,
    extensions: ["xpl"]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: true,
    extensions: ["xsl", "xslt"]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: true,
    extensions: ["xspf"]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: true,
    extensions: ["mxml", "xhvml", "xvml", "xvm"]
  },
  "application/yang": {
    source: "iana",
    extensions: ["yang"],
    compressible: null
  },
  "application/yin+xml": {
    source: "iana",
    compressible: true,
    extensions: ["yin"]
  },
  "application/zip": {
    source: "iana",
    compressible: false,
    extensions: ["zip"]
  },
  "audio/3gpp": {
    source: "iana",
    compressible: false,
    extensions: ["3gpp"]
  },
  "audio/adpcm": {
    source: "apache",
    extensions: ["adp"],
    compressible: null
  },
  "audio/amr": {
    source: "iana",
    extensions: ["amr"],
    compressible: null
  },
  "audio/basic": {
    source: "iana",
    compressible: false,
    extensions: ["au", "snd"]
  },
  "audio/midi": {
    source: "apache",
    extensions: ["mid", "midi", "kar", "rmi"],
    compressible: null
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: ["mxmf"],
    compressible: null
  },
  "audio/mp4": {
    source: "iana",
    compressible: false,
    extensions: ["m4a", "mp4a"]
  },
  "audio/mpeg": {
    source: "iana",
    compressible: false,
    extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
  },
  "audio/ogg": {
    source: "iana",
    compressible: false,
    extensions: ["oga", "ogg", "spx", "opus"]
  },
  "audio/s3m": {
    source: "apache",
    extensions: ["s3m"],
    compressible: null
  },
  "audio/silk": {
    source: "apache",
    extensions: ["sil"],
    compressible: null
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: ["uva", "uvva"],
    compressible: null
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: ["eol"],
    compressible: null
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: ["dra"],
    compressible: null
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: ["dts"],
    compressible: null
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: ["dtshd"],
    compressible: null
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: ["lvp"],
    compressible: null
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: ["pya"],
    compressible: null
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: ["ecelp4800"],
    compressible: null
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: ["ecelp7470"],
    compressible: null
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: ["ecelp9600"],
    compressible: null
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: ["rip"],
    compressible: null
  },
  "audio/webm": {
    source: "apache",
    compressible: false,
    extensions: ["weba"]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: false,
    extensions: ["aac"]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: ["aif", "aiff", "aifc"],
    compressible: null
  },
  "audio/x-caf": {
    source: "apache",
    compressible: false,
    extensions: ["caf"]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: ["flac"],
    compressible: null
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: ["m4a"],
    compressible: null
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: ["mka"],
    compressible: null
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: ["m3u"],
    compressible: null
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: ["wax"],
    compressible: null
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: ["wma"],
    compressible: null
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: ["ram", "ra"],
    compressible: null
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: ["rmp"],
    compressible: null
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: ["ra"],
    compressible: null
  },
  "audio/x-wav": {
    source: "apache",
    extensions: ["wav"],
    compressible: null
  },
  "audio/xm": {
    source: "apache",
    extensions: ["xm"],
    compressible: null
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: ["cdx"],
    compressible: null
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: ["cif"],
    compressible: null
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: ["cmdf"],
    compressible: null
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: ["cml"],
    compressible: null
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: ["csml"],
    compressible: null
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: ["xyz"],
    compressible: null
  },
  "font/collection": {
    source: "iana",
    extensions: ["ttc"],
    compressible: null
  },
  "font/otf": {
    source: "iana",
    compressible: true,
    extensions: ["otf"]
  },
  "font/ttf": {
    source: "iana",
    compressible: true,
    extensions: ["ttf"]
  },
  "font/woff": {
    source: "iana",
    extensions: ["woff"],
    compressible: null
  },
  "font/woff2": {
    source: "iana",
    extensions: ["woff2"],
    compressible: null
  },
  "image/aces": {
    source: "iana",
    extensions: ["exr"],
    compressible: null
  },
  "image/avci": {
    source: "iana",
    extensions: ["avci"],
    compressible: null
  },
  "image/avcs": {
    source: "iana",
    extensions: ["avcs"],
    compressible: null
  },
  "image/avif": {
    source: "iana",
    compressible: false,
    extensions: ["avif"]
  },
  "image/bmp": {
    source: "iana",
    compressible: true,
    extensions: ["bmp"]
  },
  "image/cgm": {
    source: "iana",
    extensions: ["cgm"],
    compressible: null
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: ["drle"],
    compressible: null
  },
  "image/emf": {
    source: "iana",
    extensions: ["emf"],
    compressible: null
  },
  "image/fits": {
    source: "iana",
    extensions: ["fits"],
    compressible: null
  },
  "image/g3fax": {
    source: "iana",
    extensions: ["g3"],
    compressible: null
  },
  "image/gif": {
    source: "iana",
    compressible: false,
    extensions: ["gif"]
  },
  "image/heic": {
    source: "iana",
    extensions: ["heic"],
    compressible: null
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: ["heics"],
    compressible: null
  },
  "image/heif": {
    source: "iana",
    extensions: ["heif"],
    compressible: null
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: ["heifs"],
    compressible: null
  },
  "image/hej2k": {
    source: "iana",
    extensions: ["hej2"],
    compressible: null
  },
  "image/hsj2": {
    source: "iana",
    extensions: ["hsj2"],
    compressible: null
  },
  "image/ief": {
    source: "iana",
    extensions: ["ief"],
    compressible: null
  },
  "image/jls": {
    source: "iana",
    extensions: ["jls"],
    compressible: null
  },
  "image/jp2": {
    source: "iana",
    compressible: false,
    extensions: ["jp2", "jpg2"]
  },
  "image/jpeg": {
    source: "iana",
    compressible: false,
    extensions: ["jpeg", "jpg", "jpe"]
  },
  "image/jph": {
    source: "iana",
    extensions: ["jph"],
    compressible: null
  },
  "image/jphc": {
    source: "iana",
    extensions: ["jhc"],
    compressible: null
  },
  "image/jpm": {
    source: "iana",
    compressible: false,
    extensions: ["jpm"]
  },
  "image/jpx": {
    source: "iana",
    compressible: false,
    extensions: ["jpx", "jpf"]
  },
  "image/jxr": {
    source: "iana",
    extensions: ["jxr"],
    compressible: null
  },
  "image/jxra": {
    source: "iana",
    extensions: ["jxra"],
    compressible: null
  },
  "image/jxrs": {
    source: "iana",
    extensions: ["jxrs"],
    compressible: null
  },
  "image/jxs": {
    source: "iana",
    extensions: ["jxs"],
    compressible: null
  },
  "image/jxsc": {
    source: "iana",
    extensions: ["jxsc"],
    compressible: null
  },
  "image/jxsi": {
    source: "iana",
    extensions: ["jxsi"],
    compressible: null
  },
  "image/jxss": {
    source: "iana",
    extensions: ["jxss"],
    compressible: null
  },
  "image/ktx": {
    source: "iana",
    extensions: ["ktx"],
    compressible: null
  },
  "image/ktx2": {
    source: "iana",
    extensions: ["ktx2"],
    compressible: null
  },
  "image/png": {
    source: "iana",
    compressible: false,
    extensions: ["png"]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: ["btif"],
    compressible: null
  },
  "image/prs.pti": {
    source: "iana",
    extensions: ["pti"],
    compressible: null
  },
  "image/sgi": {
    source: "apache",
    extensions: ["sgi"],
    compressible: null
  },
  "image/svg+xml": {
    source: "iana",
    compressible: true,
    extensions: ["svg", "svgz"]
  },
  "image/t38": {
    source: "iana",
    extensions: ["t38"],
    compressible: null
  },
  "image/tiff": {
    source: "iana",
    compressible: false,
    extensions: ["tif", "tiff"]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: ["tfx"],
    compressible: null
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: true,
    extensions: ["psd"]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: ["azv"],
    compressible: null
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: ["uvi", "uvvi", "uvg", "uvvg"],
    compressible: null
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: ["djvu", "djv"],
    compressible: null
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: ["sub"],
    compressible: null
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: ["dwg"],
    compressible: null
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: ["dxf"],
    compressible: null
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: ["fbs"],
    compressible: null
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: ["fpx"],
    compressible: null
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: ["fst"],
    compressible: null
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: ["mmr"],
    compressible: null
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: ["rlc"],
    compressible: null
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: true,
    extensions: ["ico"]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: ["mdi"],
    compressible: null
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: ["wdp"],
    compressible: null
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: ["npx"],
    compressible: null
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: ["b16"],
    compressible: null
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: ["tap"],
    compressible: null
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: ["vtf"],
    compressible: null
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: ["wbmp"],
    compressible: null
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: ["xif"],
    compressible: null
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: ["pcx"],
    compressible: null
  },
  "image/webp": {
    source: "apache",
    extensions: ["webp"],
    compressible: null
  },
  "image/wmf": {
    source: "iana",
    extensions: ["wmf"],
    compressible: null
  },
  "image/x-3ds": {
    source: "apache",
    extensions: ["3ds"],
    compressible: null
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: ["ras"],
    compressible: null
  },
  "image/x-cmx": {
    source: "apache",
    extensions: ["cmx"],
    compressible: null
  },
  "image/x-freehand": {
    source: "apache",
    extensions: ["fh", "fhc", "fh4", "fh5", "fh7"],
    compressible: null
  },
  "image/x-icon": {
    source: "apache",
    compressible: true,
    extensions: ["ico"]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: ["jng"],
    compressible: null
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: ["sid"],
    compressible: null
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: true,
    extensions: ["bmp"]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: ["pcx"],
    compressible: null
  },
  "image/x-pict": {
    source: "apache",
    extensions: ["pic", "pct"],
    compressible: null
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: ["pnm"],
    compressible: null
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: ["pbm"],
    compressible: null
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: ["pgm"],
    compressible: null
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: ["ppm"],
    compressible: null
  },
  "image/x-rgb": {
    source: "apache",
    extensions: ["rgb"],
    compressible: null
  },
  "image/x-tga": {
    source: "apache",
    extensions: ["tga"],
    compressible: null
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: ["xbm"],
    compressible: null
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: ["xpm"],
    compressible: null
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: ["xwd"],
    compressible: null
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: ["disposition-notification"],
    compressible: null
  },
  "message/global": {
    source: "iana",
    extensions: ["u8msg"],
    compressible: null
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: ["u8dsn"],
    compressible: null
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: ["u8mdn"],
    compressible: null
  },
  "message/global-headers": {
    source: "iana",
    extensions: ["u8hdr"],
    compressible: null
  },
  "message/rfc822": {
    source: "iana",
    compressible: true,
    extensions: ["eml", "mime"]
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: ["wsc"],
    compressible: null
  },
  "model/3mf": {
    source: "iana",
    extensions: ["3mf"],
    compressible: null
  },
  "model/gltf+json": {
    source: "iana",
    compressible: true,
    extensions: ["gltf"]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: true,
    extensions: ["glb"]
  },
  "model/iges": {
    source: "iana",
    compressible: false,
    extensions: ["igs", "iges"]
  },
  "model/mesh": {
    source: "iana",
    compressible: false,
    extensions: ["msh", "mesh", "silo"]
  },
  "model/mtl": {
    source: "iana",
    extensions: ["mtl"],
    compressible: null
  },
  "model/obj": {
    source: "iana",
    extensions: ["obj"],
    compressible: null
  },
  "model/step+xml": {
    source: "iana",
    compressible: true,
    extensions: ["stpx"]
  },
  "model/step+zip": {
    source: "iana",
    compressible: false,
    extensions: ["stpz"]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: false,
    extensions: ["stpxz"]
  },
  "model/stl": {
    source: "iana",
    extensions: ["stl"],
    compressible: null
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: true,
    extensions: ["dae"]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: ["dwf"],
    compressible: null
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: ["gdl"],
    compressible: null
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: ["gtw"],
    compressible: null
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: ["mts"],
    compressible: null
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: ["ogex"],
    compressible: null
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: ["x_b"],
    compressible: null
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: ["x_t"],
    compressible: null
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: ["vds"],
    compressible: null
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: false,
    extensions: ["usdz"]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: ["bsp"],
    compressible: null
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: ["vtu"],
    compressible: null
  },
  "model/vrml": {
    source: "iana",
    compressible: false,
    extensions: ["wrl", "vrml"]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: false,
    extensions: ["x3db", "x3dbz"]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: ["x3db"],
    compressible: null
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: false,
    extensions: ["x3dv", "x3dvz"]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: true,
    extensions: ["x3d", "x3dz"]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: ["x3dv"],
    compressible: null
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: true,
    extensions: ["appcache", "manifest"]
  },
  "text/calendar": {
    source: "iana",
    extensions: ["ics", "ifb"],
    compressible: null
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["css"]
  },
  "text/csv": {
    source: "iana",
    compressible: true,
    extensions: ["csv"]
  },
  "text/html": {
    source: "iana",
    compressible: true,
    extensions: ["html", "htm", "shtml"]
  },
  "text/markdown": {
    source: "iana",
    compressible: true,
    extensions: ["markdown", "md"]
  },
  "text/mathml": {
    source: "nginx",
    extensions: ["mml"],
    compressible: null
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["n3"]
  },
  "text/plain": {
    source: "iana",
    compressible: true,
    extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: ["dsc"],
    compressible: null
  },
  "text/richtext": {
    source: "iana",
    compressible: true,
    extensions: ["rtx"]
  },
  "text/rtf": {
    source: "iana",
    compressible: true,
    extensions: ["rtf"]
  },
  "text/sgml": {
    source: "iana",
    extensions: ["sgml", "sgm"],
    compressible: null
  },
  "text/shex": {
    source: "iana",
    extensions: ["shex"],
    compressible: null
  },
  "text/spdx": {
    source: "iana",
    extensions: ["spdx"],
    compressible: null
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: true,
    extensions: ["tsv"]
  },
  "text/troff": {
    source: "iana",
    extensions: ["t", "tr", "roff", "man", "me", "ms"],
    compressible: null
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: ["ttl"],
    compressible: null
  },
  "text/uri-list": {
    source: "iana",
    compressible: true,
    extensions: ["uri", "uris", "urls"]
  },
  "text/vcard": {
    source: "iana",
    compressible: true,
    extensions: ["vcard"]
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: ["curl"],
    compressible: null
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: ["dcurl"],
    compressible: null
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: ["mcurl"],
    compressible: null
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: ["scurl"],
    compressible: null
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: ["sub"],
    compressible: null
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: ["ged"],
    compressible: null
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: ["fly"],
    compressible: null
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: ["flx"],
    compressible: null
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: ["gv"],
    compressible: null
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: ["3dml"],
    compressible: null
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: ["spot"],
    compressible: null
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: ["jad"],
    compressible: null
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: ["wml"],
    compressible: null
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: ["wmls"],
    compressible: null
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: true,
    extensions: ["vtt"]
  },
  "text/x-asm": {
    source: "apache",
    extensions: ["s", "asm"],
    compressible: null
  },
  "text/x-c": {
    source: "apache",
    extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    compressible: null
  },
  "text/x-component": {
    source: "nginx",
    extensions: ["htc"],
    compressible: null
  },
  "text/x-fortran": {
    source: "apache",
    extensions: ["f", "for", "f77", "f90"],
    compressible: null
  },
  "text/x-java-source": {
    source: "apache",
    extensions: ["java"],
    compressible: null
  },
  "text/x-nfo": {
    source: "apache",
    extensions: ["nfo"],
    compressible: null
  },
  "text/x-opml": {
    source: "apache",
    extensions: ["opml"],
    compressible: null
  },
  "text/x-pascal": {
    source: "apache",
    extensions: ["p", "pas"],
    compressible: null
  },
  "text/x-setext": {
    source: "apache",
    extensions: ["etx"],
    compressible: null
  },
  "text/x-sfv": {
    source: "apache",
    extensions: ["sfv"],
    compressible: null
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: ["uu"],
    compressible: null
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: ["vcs"],
    compressible: null
  },
  "text/x-vcard": {
    source: "apache",
    extensions: ["vcf"],
    compressible: null
  },
  "text/xml": {
    source: "iana",
    compressible: true,
    extensions: ["xml"]
  },
  "video/3gpp": {
    source: "iana",
    extensions: ["3gp", "3gpp"],
    compressible: null
  },
  "video/3gpp2": {
    source: "iana",
    extensions: ["3g2"],
    compressible: null
  },
  "video/h261": {
    source: "iana",
    extensions: ["h261"],
    compressible: null
  },
  "video/h263": {
    source: "iana",
    extensions: ["h263"],
    compressible: null
  },
  "video/h264": {
    source: "iana",
    extensions: ["h264"],
    compressible: null
  },
  "video/iso.segment": {
    source: "iana",
    extensions: ["m4s"],
    compressible: null
  },
  "video/jpeg": {
    source: "iana",
    extensions: ["jpgv"],
    compressible: null
  },
  "video/jpm": {
    source: "apache",
    extensions: ["jpm", "jpgm"],
    compressible: null
  },
  "video/mj2": {
    source: "iana",
    extensions: ["mj2", "mjp2"],
    compressible: null
  },
  "video/mp2t": {
    source: "iana",
    extensions: ["ts"],
    compressible: null
  },
  "video/mp4": {
    source: "iana",
    compressible: false,
    extensions: ["mp4", "mp4v", "mpg4"]
  },
  "video/mpeg": {
    source: "iana",
    compressible: false,
    extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
  },
  "video/ogg": {
    source: "iana",
    compressible: false,
    extensions: ["ogv"]
  },
  "video/quicktime": {
    source: "iana",
    compressible: false,
    extensions: ["qt", "mov"]
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: ["uvh", "uvvh"],
    compressible: null
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: ["uvm", "uvvm"],
    compressible: null
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: ["uvp", "uvvp"],
    compressible: null
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: ["uvs", "uvvs"],
    compressible: null
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: ["uvv", "uvvv"],
    compressible: null
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: ["dvb"],
    compressible: null
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: ["fvt"],
    compressible: null
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: ["mxu", "m4u"],
    compressible: null
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: ["pyv"],
    compressible: null
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: ["uvu", "uvvu"],
    compressible: null
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: ["viv"],
    compressible: null
  },
  "video/webm": {
    source: "apache",
    compressible: false,
    extensions: ["webm"]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: ["f4v"],
    compressible: null
  },
  "video/x-fli": {
    source: "apache",
    extensions: ["fli"],
    compressible: null
  },
  "video/x-flv": {
    source: "apache",
    compressible: false,
    extensions: ["flv"]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: ["m4v"],
    compressible: null
  },
  "video/x-matroska": {
    source: "apache",
    compressible: false,
    extensions: ["mkv", "mk3d", "mks"]
  },
  "video/x-mng": {
    source: "apache",
    extensions: ["mng"],
    compressible: null
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: ["asf", "asx"],
    compressible: null
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: ["vob"],
    compressible: null
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: ["wm"],
    compressible: null
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: false,
    extensions: ["wmv"]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: ["wmx"],
    compressible: null
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: ["wvx"],
    compressible: null
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: ["avi"],
    compressible: null
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: ["movie"],
    compressible: null
  },
  "video/x-smv": {
    source: "apache",
    extensions: ["smv"],
    compressible: null
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: ["ice"],
    compressible: null
  }
};
var chunk_BFQJWQY7_mimeTypes = mimeTypesInternal;


//# sourceMappingURL=chunk-BFQJWQY7.mjs.map
;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/index.mjs


// src/index.ts
function extname(path) {
  const index = path.lastIndexOf(".");
  return index < 0 ? "" : path.substring(index);
}
var extensions = {};
var types = {};
populateMaps(extensions, types);
function dist_lookup(path) {
  if (!path || typeof path !== "string") {
    return false;
  }
  const extension = extname("x." + path).toLowerCase().substring(1);
  if (!extension) {
    return false;
  }
  return types[extension] || false;
}
function populateMaps(extensions2, types2) {
  const preference = ["nginx", "apache", void 0, "iana"];
  Object.keys(chunk_BFQJWQY7_mimeTypes).forEach((type) => {
    const mime = chunk_BFQJWQY7_mimeTypes[type];
    const exts = mime.extensions;
    if (!(exts == null ? void 0 : exts.length)) {
      return;
    }
    extensions2[type] = exts;
    for (const extension of exts) {
      if (types2[extension]) {
        const from = preference.indexOf(chunk_BFQJWQY7_mimeTypes[types2[extension]].source);
        const to = preference.indexOf(mime.source);
        if (types2[extension] !== "application/octet-stream" && (from > to || from === to && types2[extension].startsWith("application/"))) {
          continue;
        }
      }
      types2[extension] = type;
    }
  });
}

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=index.mjs.map
// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(19098);
;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/db.mjs


//# sourceMappingURL=db.mjs.map
;// CONCATENATED MODULE: ./node_modules/@uploadthing/shared/dist/index.mjs
// src/utils.ts

function isRouteArray(routeConfig) {
  return Array.isArray(routeConfig);
}
function getDefaultSizeForType(fileType) {
  if (fileType === "image")
    return "4MB";
  if (fileType === "video")
    return "16MB";
  if (fileType === "audio")
    return "8MB";
  if (fileType === "blob")
    return "8MB";
  if (fileType === "pdf")
    return "4MB";
  if (fileType === "text")
    return "64KB";
  return "4MB";
}
function fillInputRouteConfig(routeConfig) {
  if (isRouteArray(routeConfig)) {
    return routeConfig.reduce((acc, fileType) => {
      acc[fileType] = {
        // Apply defaults
        maxFileSize: getDefaultSizeForType(fileType),
        maxFileCount: 1
      };
      return acc;
    }, {});
  }
  const newConfig = {};
  const inputKeys = Object.keys(routeConfig);
  inputKeys.forEach((key) => {
    const value = routeConfig[key];
    if (!value)
      throw new Error("Invalid config during fill");
    const defaultValues = {
      maxFileSize: getDefaultSizeForType(key),
      maxFileCount: 1
    };
    newConfig[key] = { ...defaultValues, ...value };
  }, {});
  return newConfig;
}
function getTypeFromFileName(fileName, allowedTypes) {
  const mimeType = lookup(fileName);
  if (!mimeType) {
    throw new Error(
      `Could not determine type for ${fileName}, presigned URL generation failed`
    );
  }
  if (allowedTypes.some((type2) => type2.includes("/"))) {
    if (allowedTypes.includes(mimeType)) {
      return mimeType;
    }
  }
  const type = mimeType.toLowerCase() === "application/pdf" ? "pdf" : mimeType.split("/")[0];
  if (!allowedTypes.includes(type)) {
    if (allowedTypes.includes("blob")) {
      return "blob";
    } else {
      throw new Error(`File type ${type} not allowed for ${fileName}`);
    }
  }
  return type;
}
function generateUploadThingURL(path) {
  const host = process.env.CUSTOM_INFRA_URL ?? "https://uploadthing.com";
  return `${host}${path}`;
}
var withExponentialBackoff = async (doTheThing, MAXIMUM_BACKOFF_MS = 64 * 1e3, MAX_RETRIES = 20) => {
  let tries = 0;
  let backoffMs = 500;
  let backoffFuzzMs = 0;
  let result = null;
  while (tries <= MAX_RETRIES) {
    result = await doTheThing();
    if (result !== null)
      return result;
    tries += 1;
    backoffMs = Math.min(MAXIMUM_BACKOFF_MS, backoffMs * 2);
    backoffFuzzMs = Math.floor(Math.random() * 500);
    if (tries > 3) {
      console.error(
        `[UT] Call unsuccessful after ${tries} tries. Retrying in ${Math.floor(
          backoffMs / 1e3
        )} seconds...`
      );
    }
    await new Promise((r) => setTimeout(r, backoffMs + backoffFuzzMs));
  }
  return null;
};
async function pollForFileData(fileKey, callback) {
  const queryUrl = generateUploadThingURL(`/api/pollUpload/${fileKey}`);
  return withExponentialBackoff(async () => {
    const res = await fetch(queryUrl);
    const json = await res.json();
    if (json.status !== "done")
      return null;
    await (callback == null ? void 0 : callback(json));
  });
}
function getUploadthingUrl() {
  const uturl = process.env.UPLOADTHING_URL;
  if (uturl)
    return `${uturl}/api/uploadthing`;
  const vcurl = process.env.VERCEL_URL;
  if (vcurl)
    return `https://${vcurl}/api/uploadthing`;
  return `http://localhost:${process.env.PORT ?? 3e3}/api/uploadthing`;
}
var FILESIZE_UNITS = (/* unused pure expression or super */ null && (["B", "KB", "MB", "GB"]));
var fileSizeToBytes = (input) => {
  const regex = new RegExp(
    `^(\\d+)(\\.\\d+)?\\s*(${FILESIZE_UNITS.join("|")})$`,
    "i"
  );
  const match = input.match(regex);
  if (!match) {
    return new Error("Invalid file size format");
  }
  const sizeValue = parseFloat(match[1]);
  const sizeUnit = match[3].toUpperCase();
  if (!FILESIZE_UNITS.includes(sizeUnit)) {
    throw new Error("Invalid file size unit");
  }
  const bytes = sizeValue * Math.pow(1024, FILESIZE_UNITS.indexOf(sizeUnit));
  return Math.floor(bytes);
};

// src/file-types.ts


var ALLOWED_FILE_TYPES = [
  "image",
  "video",
  "audio",
  "pdf",
  "text",
  "blob"
];
function zodEnumFromObjKeys(obj) {
  const [firstKey, ...otherKeys] = Object.keys(obj);
  return lib/* enum */.Km([firstKey, ...otherKeys]);
}
var MimeTypeZod = zodEnumFromObjKeys(chunk_BFQJWQY7_mimeTypes);
var InternalFileTypeValidator = lib/* enum */.Km(ALLOWED_FILE_TYPES);
var InternalMimeTypeValidator = MimeTypeZod;
var CombinedTypeValidator = lib/* union */.G0([
  InternalFileTypeValidator,
  InternalMimeTypeValidator
]);

// src/error.ts
var ERROR_CODES = {
  // Generic
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  INTERNAL_CLIENT_ERROR: 500,
  // S3 specific
  TOO_LARGE: 413,
  TOO_SMALL: 400,
  TOO_MANY_FILES: 400,
  KEY_TOO_LONG: 400,
  // UploadThing specific
  URL_GENERATION_FAILED: 500,
  UPLOAD_FAILED: 500,
  MISSING_ENV: 500,
  FILE_LIMIT_EXCEEDED: 500
};
function messageFromUnknown(cause, fallback) {
  if (typeof cause === "string") {
    return cause;
  }
  if (cause instanceof Error) {
    return cause.message;
  }
  if (cause && typeof cause === "object" && "message" in cause && typeof cause.message === "string") {
    return cause.message;
  }
  return fallback ?? "An unknown error occurred";
}
var UploadThingError = class extends Error {
  constructor(opts) {
    const message = opts.message ?? messageFromUnknown(opts.cause, opts.code);
    super(message);
    this.code = opts.code;
    this.data = opts.data;
    if (opts.cause instanceof Error) {
      this.cause = opts.cause;
    } else if (opts.cause instanceof Response) {
      this.cause = new Error(
        `Response ${opts.cause.status} ${opts.cause.statusText}`
      );
    } else if (typeof opts.cause === "string") {
      this.cause = new Error(opts.cause);
    } else {
      this.cause = void 0;
    }
  }
  static async fromResponse(response) {
    const json = await response.json();
    let message = void 0;
    if (json !== null && typeof json === "object" && !Array.isArray(json)) {
      if (typeof json.message === "string") {
        message = json.message;
      } else if (typeof json.error === "string") {
        message = json.error;
      }
    }
    return new UploadThingError({
      message,
      code: getErrorTypeFromStatusCode(response.status),
      cause: response,
      data: json
    });
  }
  static toObject(error) {
    return {
      code: error.code,
      message: error.message,
      data: error.data
    };
  }
  static serialize(error) {
    return JSON.stringify(UploadThingError.toObject(error));
  }
};
function getStatusCodeFromError(error) {
  return ERROR_CODES[error.code] ?? 500;
}
function getErrorTypeFromStatusCode(statusCode) {
  for (const [code, status] of Object.entries(ERROR_CODES)) {
    if (status === statusCode) {
      return code;
    }
  }
  return "INTERNAL_SERVER_ERROR";
}

//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/chunk-5KWT532U.mjs
// src/internal/s3-error-parser.ts
var maybeParseResponseXML = (maybeXml) => {
  const codeMatch = maybeXml.match(/<Code>(.*?)<\/Code>/s);
  const messageMatch = maybeXml.match(/<Message>(.*?)<\/Message>/s);
  const code = codeMatch == null ? void 0 : codeMatch[1];
  const message = messageMatch == null ? void 0 : messageMatch[1];
  if (!code || !message)
    return null;
  return { code: s3CodeToUploadThingCode[code] ?? DEFAULT_ERROR_CODE, message };
};
var DEFAULT_ERROR_CODE = "UPLOAD_FAILED";
var s3CodeToUploadThingCode = {
  AccessDenied: "FORBIDDEN",
  // 403 Forbidden
  EntityTooSmall: "TOO_SMALL",
  // 400 Bad Request
  EntityTooLarge: "TOO_LARGE",
  // 400 Bad Request
  ExpiredToken: "FORBIDDEN",
  // 400 Bad Request
  IncorrectNumberOfFilesInPostRequest: "TOO_MANY_FILES",
  // 400 Bad Request
  InternalError: "INTERNAL_SERVER_ERROR",
  // 500 Internal Server Error
  KeyTooLongError: "KEY_TOO_LONG",
  // 400 Bad Request
  MaxMessageLengthExceeded: "TOO_LARGE"
  // 400 Bad Request
};


//# sourceMappingURL=chunk-5KWT532U.mjs.map
;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/chunk-QTCNM7DJ.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));


//# sourceMappingURL=chunk-QTCNM7DJ.mjs.map
;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/client.mjs



// src/client.ts

function fetchWithProgress(url, opts = {}, onProgress, onUploadBegin) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(opts.method ?? "get", url);
    opts.headers && Object.keys(opts.headers).forEach(
      (h) => opts.headers && xhr.setRequestHeader(h, opts.headers.get(h) ?? "")
    );
    xhr.onload = (e) => {
      res(e.target);
    };
    xhr.onerror = rej;
    if (xhr.upload && onProgress)
      xhr.upload.onprogress = onProgress;
    if (xhr.upload && onUploadBegin)
      xhr.upload.onloadstart = onUploadBegin;
    xhr.send(opts.body);
  });
}
var createAPIRequestUrl = (config) => {
  const url = new URL(
    config.url ?? `${window.location.origin}/api/uploadthing`
  );
  const queryParams = new URLSearchParams(url.search);
  queryParams.set("actionType", config.actionType);
  queryParams.set("slug", config.slug);
  url.search = queryParams.toString();
  return url.toString();
};
var client_DANGEROUS_uploadFiles = async (opts, config) => {
  const s3ConnectionRes = await fetch(
    createAPIRequestUrl({
      url: config == null ? void 0 : config.url,
      slug: String(opts.endpoint),
      actionType: "upload"
    }),
    {
      method: "POST",
      body: JSON.stringify({
        files: opts.files.map((f) => f.name),
        input: opts.input
      })
    }
  ).then(async (res) => {
    if (!res.ok) {
      const error = await UploadThingError.fromResponse(res);
      throw error;
    }
    try {
      return res.json();
    } catch (e) {
      console.error(e);
      throw new UploadThingError({
        code: "BAD_REQUEST",
        message: `Failed to parse response as JSON. Got: ${await res.text()}`,
        cause: e
      });
    }
  });
  if (!s3ConnectionRes || !Array.isArray(s3ConnectionRes)) {
    throw new UploadThingError({
      code: "BAD_REQUEST",
      message: "No URL. How did you even get here?",
      cause: s3ConnectionRes
    });
  }
  const fileUploadPromises = s3ConnectionRes.map(async (presigned) => {
    const file = opts.files.find((f) => f.name === presigned.name);
    if (!file) {
      console.error("No file found for presigned URL", presigned);
      throw new UploadThingError({
        code: "NOT_FOUND",
        message: "No file found for presigned URL",
        cause: `Expected file with name ${presigned.name} but got '${opts.files.join(",")}'`
      });
    }
    const { url, fields } = presigned.presignedUrl;
    const formData = new FormData();
    if (presigned.fileType === file.type.split("/")[0] || presigned.fileType === file.type) {
      formData.append("Content-Type", file.type);
    } else if (presigned.fileType === "blob") {
      formData.append("Content-Type", "application/octet-stream");
    } else if (presigned.fileType === "pdf") {
      formData.append("Content-Type", "application/pdf");
    }
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const upload = await fetchWithProgress(
      url,
      {
        method: "POST",
        body: formData,
        headers: new Headers({
          Accept: "application/xml"
        })
      },
      (progressEvent) => opts.onUploadProgress && opts.onUploadProgress({
        file: file.name,
        progress: progressEvent.loaded / progressEvent.total * 100
      }),
      () => {
        opts.onUploadBegin && opts.onUploadBegin({
          file: file.name
        });
      }
    );
    if (upload.status > 299 || upload.status < 200) {
      await fetch(
        createAPIRequestUrl({
          url: config == null ? void 0 : config.url,
          slug: String(opts.endpoint),
          actionType: "failure"
        }),
        {
          method: "POST",
          body: JSON.stringify({
            fileKey: fields.key
          })
        }
      );
      const parsed = maybeParseResponseXML(upload.responseText);
      if (parsed == null ? void 0 : parsed.message) {
        throw new UploadThingError({
          code: parsed.code,
          message: parsed.message
        });
      } else {
        throw new UploadThingError({
          code: "UPLOAD_FAILED",
          message: `Failed to upload file ${file.name} to S3`,
          cause: upload.responseText
        });
      }
    }
    const genUrl = "https://utfs.io/f/" + encodeURIComponent(fields.key);
    await pollForFileData(presigned.key);
    const ret = {
      fileName: file.name,
      name: file.name,
      fileSize: file.size,
      size: file.size,
      fileKey: presigned.key,
      key: presigned.key,
      fileUrl: genUrl,
      url: genUrl
    };
    return ret;
  });
  return Promise.all(fileUploadPromises);
};
var genUploader = () => {
  return client_DANGEROUS_uploadFiles;
};
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
var generateMimeTypes = (fileTypes) => {
  const accepted = fileTypes.map((type) => {
    if (type === "blob")
      return "blob";
    if (type === "pdf")
      return "application/pdf";
    if (type.includes("/"))
      return type;
    else
      return `${type}/*`;
  });
  if (accepted.includes("blob")) {
    return void 0;
  }
  return accepted;
};
var generateClientDropzoneAccept = (fileTypes) => {
  const mimeTypes = generateMimeTypes(fileTypes);
  if (!mimeTypes)
    return void 0;
  return Object.fromEntries(mimeTypes.map((type) => [type, []]));
};

//# sourceMappingURL=client.mjs.map
;// CONCATENATED MODULE: ./node_modules/@uploadthing/react/dist/chunk-FSXQNOLN.mjs
"use client";

// src/useUploadThing.ts




// src/utils/useEvent.ts

var noop = () => void 0;
var useInsertionEffect = typeof window !== "undefined" ? (
  // useInsertionEffect is available in React 18+
  react_.useInsertionEffect || react_.useLayoutEffect
) : noop;
function useEvent(callback) {
  const latestRef = react_.useRef(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    useEvent_shouldNotBeInvokedBeforeMount
  );
  useInsertionEffect(() => {
    latestRef.current = callback;
  }, [callback]);
  const stableRef = react_.useRef();
  if (!stableRef.current) {
    stableRef.current = function() {
      return latestRef.current.apply(this, arguments);
    };
  }
  return stableRef.current;
}
function useEvent_shouldNotBeInvokedBeforeMount() {
  throw new Error(
    "INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted."
  );
}

// src/utils/useFetch.ts

function useFetch(url, options) {
  const cache = (0,react_.useRef)({});
  const cancelRequest = (0,react_.useRef)(false);
  const initialState = {
    error: void 0,
    data: void 0
  };
  const fetchReducer = (state2, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state2;
    }
  };
  const [state, dispatch] = (0,react_.useReducer)(fetchReducer, initialState);
  (0,react_.useEffect)(() => {
    if (!url)
      return;
    cancelRequest.current = false;
    const fetchData = async () => {
      dispatch({ type: "loading" });
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest.current)
          return;
        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current)
          return;
        dispatch({ type: "error", payload: error });
      }
    };
    void fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);
  return state;
}
var useFetch_default = useFetch;

// src/useUploadThing.ts
var useEndpointMetadata = (endpoint) => {
  const { data } = useFetch_default("/api/uploadthing");
  return data == null ? void 0 : data.find((x) => x.slug === endpoint);
};
var fatalClientError = (e) => new UploadThingError({
  code: "INTERNAL_CLIENT_ERROR",
  message: "Something went wrong. Please report this to UploadThing.",
  cause: e
});
var INTERNAL_uploadthingHookGen = () => {
  const useUploadThing = (endpoint, opts) => {
    const [isUploading, setUploading] = (0,react_.useState)(false);
    const uploadProgress = (0,react_.useRef)(0);
    const fileProgress = (0,react_.useRef)(/* @__PURE__ */ new Map());
    const permittedFileInfo = useEndpointMetadata(endpoint);
    const startUpload = useEvent(async (...args) => {
      var _a, _b;
      const [files, input] = args;
      setUploading(true);
      try {
        const res = await client_DANGEROUS_uploadFiles({
          files,
          endpoint,
          input,
          onUploadProgress: (progress) => {
            var _a2;
            if (!(opts == null ? void 0 : opts.onUploadProgress))
              return;
            fileProgress.current.set(progress.file, progress.progress);
            let sum = 0;
            fileProgress.current.forEach((p) => {
              sum += p;
            });
            const averageProgress = Math.floor(sum / fileProgress.current.size / 10) * 10;
            if (averageProgress !== uploadProgress.current) {
              (_a2 = opts == null ? void 0 : opts.onUploadProgress) == null ? void 0 : _a2.call(opts, averageProgress);
              uploadProgress.current = averageProgress;
            }
          },
          onUploadBegin({ file }) {
            if (!(opts == null ? void 0 : opts.onUploadBegin))
              return;
            opts.onUploadBegin(file);
          }
        });
        (_a = opts == null ? void 0 : opts.onClientUploadComplete) == null ? void 0 : _a.call(opts, res);
        return res;
      } catch (e) {
        const error = e instanceof UploadThingError ? e : fatalClientError(e);
        (_b = opts == null ? void 0 : opts.onUploadError) == null ? void 0 : _b.call(
          opts,
          error
        );
      } finally {
        setUploading(false);
        fileProgress.current = /* @__PURE__ */ new Map();
        uploadProgress.current = 0;
      }
    });
    return {
      startUpload,
      isUploading,
      permittedFileInfo
    };
  };
  return useUploadThing;
};
var generateReactHelpers = () => {
  return {
    useUploadThing: INTERNAL_uploadthingHookGen(),
    uploadFiles: DANGEROUS__uploadFiles
  };
};


//# sourceMappingURL=chunk-FSXQNOLN.mjs.map
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(59610);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/index.js
var dist = __webpack_require__(64622);
;// CONCATENATED MODULE: ./node_modules/@uploadthing/react/dist/index.mjs
"use client";


// src/components/button.tsx




// src/utils/styles.ts
var styleFieldToClassName = (styleField, args) => {
  if (typeof styleField === "string")
    return styleField;
  if (typeof styleField === "function") {
    const result = styleField(args);
    if (typeof result === "string")
      return result;
  }
  return "";
};
var styleFieldToCssObject = (styleField, args) => {
  if (typeof styleField === "object")
    return styleField;
  if (typeof styleField === "function") {
    const result = styleField(args);
    if (typeof result === "object")
      return result;
  }
  return {};
};
var contentFieldToContent = (contentField, arg) => {
  if (!contentField)
    return null;
  if (typeof contentField !== "function")
    return contentField;
  if (typeof contentField === "function") {
    const result = contentField(arg);
    return result;
  }
};

// src/components/shared.tsx

var generatePermittedFileTypes = (config) => {
  const fileTypes = config ? Object.keys(config) : [];
  const maxFileCount = config ? Object.values(config).map((v) => v.maxFileCount) : [];
  return {
    fileTypes,
    multiple: maxFileCount.some((v) => v && v > 1)
  };
};
var capitalizeStart = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var INTERNAL_doFormatting = (config) => {
  if (!config)
    return "";
  const allowedTypes = Object.keys(config);
  const formattedTypes = allowedTypes.map((f) => {
    if (f.includes("/"))
      return `${f.split("/")[1].toUpperCase()} file`;
    return f === "blob" ? "file" : f;
  });
  if (formattedTypes.length > 1) {
    const lastType = formattedTypes.pop();
    return `${formattedTypes.join("s, ")} and ${lastType}s`;
  }
  const key = allowedTypes[0];
  const formattedKey = formattedTypes[0];
  const { maxFileSize, maxFileCount } = config[key];
  if (maxFileCount && maxFileCount > 1) {
    return `${formattedKey}s up to ${maxFileSize}, max ${maxFileCount}`;
  } else {
    return `${formattedKey} (${maxFileSize})`;
  }
};
var allowedContentTextLabelGenerator = (config) => {
  return capitalizeStart(INTERNAL_doFormatting(config));
};
var progressWidths = {
  0: "after:w-0",
  10: "after:w-[10%]",
  20: "after:w-[20%]",
  30: "after:w-[30%]",
  40: "after:w-[40%]",
  50: "after:w-[50%]",
  60: "after:w-[60%]",
  70: "after:w-[70%]",
  80: "after:w-[80%]",
  90: "after:w-[90%]",
  100: "after:w-[100%]"
};
function Spinner() {
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
    "svg",
    {
      className: "block h-5 w-5 animate-spin align-middle text-white",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 576 512",
      children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"
        }
      )
    }
  );
}

// src/components/button.tsx

function UploadButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const $props = props;
  const useUploadThing = INTERNAL_uploadthingHookGen();
  const fileInputRef = (0,react_.useRef)(null);
  const [uploadProgressState, setUploadProgress] = (0,react_.useState)(
    $props.__internal_upload_progress ?? 0
  );
  const uploadProgress = $props.__internal_upload_progress ?? uploadProgressState;
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    $props.endpoint,
    {
      onClientUploadComplete: (res) => {
        var _a2;
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        (_a2 = $props.onClientUploadComplete) == null ? void 0 : _a2.call($props, res);
        setUploadProgress(0);
      },
      onUploadProgress: (p) => {
        var _a2;
        setUploadProgress(p);
        (_a2 = $props.onUploadProgress) == null ? void 0 : _a2.call($props, p);
      },
      onUploadError: $props.onUploadError,
      onUploadBegin: $props.onUploadBegin
    }
  );
  const { fileTypes, multiple } = generatePermittedFileTypes(
    permittedFileInfo == null ? void 0 : permittedFileInfo.config
  );
  const ready = $props.__internal_ready ?? ($props.__internal_state === "ready" || fileTypes.length > 0);
  const getUploadButtonText = (fileTypes2) => {
    if (fileTypes2.length === 0)
      return "Loading...";
    return `Choose File${multiple ? `(s)` : ``}`;
  };
  const getInputProps = () => {
    var _a2;
    return {
      className: "hidden",
      type: "file",
      ref: fileInputRef,
      multiple,
      accept: (_a2 = generateMimeTypes(fileTypes ?? [])) == null ? void 0 : _a2.join(", "),
      onChange: (e) => {
        if (!e.target.files)
          return;
        const input = "input" in $props ? $props.input : void 0;
        const files = Array.from(e.target.files);
        void startUpload(files, input);
      },
      disabled: $props.__internal_button_disabled ?? !ready
    };
  };
  const styleFieldArg = {
    ready,
    isUploading: $props.__internal_state === "uploading" || isUploading,
    uploadProgress,
    fileTypes
  };
  const state = (() => {
    if ($props.__internal_state)
      return $props.__internal_state;
    if (!ready)
      return "readying";
    if (ready && !isUploading)
      return "ready";
    return "uploading";
  })();
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
    "div",
    {
      className: (0,tw_merge/* twMerge */.m)(
        "flex flex-col items-center justify-center gap-1",
        $props.className,
        styleFieldToClassName((_a = $props.appearance) == null ? void 0 : _a.container, styleFieldArg)
      ),
      style: styleFieldToCssObject((_b = $props.appearance) == null ? void 0 : _b.container, styleFieldArg),
      "data-state": state,
      children: [
        /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
          "label",
          {
            className: (0,tw_merge/* twMerge */.m)(
              "relative flex h-10 w-36 cursor-pointer items-center justify-center overflow-hidden rounded-md text-white after:transition-[width] after:duration-500",
              state === "readying" && "cursor-not-allowed bg-blue-400",
              state === "uploading" && `bg-blue-400 after:absolute after:left-0 after:h-full after:bg-blue-600 ${progressWidths[uploadProgress]}`,
              state === "ready" && "bg-blue-600",
              styleFieldToClassName((_c = $props.appearance) == null ? void 0 : _c.button, styleFieldArg)
            ),
            style: styleFieldToCssObject((_d = $props.appearance) == null ? void 0 : _d.button, styleFieldArg),
            "data-state": state,
            "data-ut-element": "button",
            children: [
              /* @__PURE__ */ (0,jsx_runtime_.jsx)("input", { ...getInputProps() }),
              contentFieldToContent((_e = $props.content) == null ? void 0 : _e.button, styleFieldArg) ?? (state === "uploading" ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(Spinner, {}) : getUploadButtonText(fileTypes))
            ]
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          "div",
          {
            className: (0,tw_merge/* twMerge */.m)(
              "h-[1.25rem]  text-xs leading-5 text-gray-600",
              styleFieldToClassName(
                (_f = $props.appearance) == null ? void 0 : _f.allowedContent,
                styleFieldArg
              )
            ),
            style: styleFieldToCssObject(
              (_g = $props.appearance) == null ? void 0 : _g.allowedContent,
              styleFieldArg
            ),
            "data-state": state,
            "data-ut-element": "allowed-content",
            children: contentFieldToContent((_h = $props.content) == null ? void 0 : _h.allowedContent, styleFieldArg) ?? allowedContentTextLabelGenerator(permittedFileInfo == null ? void 0 : permittedFileInfo.config)
          }
        )
      ]
    }
  );
}

// src/components/dropzone.tsx





function UploadDropzone(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const $props = props;
  const useUploadThing = INTERNAL_uploadthingHookGen();
  const [files, setFiles] = (0,react_.useState)([]);
  const [uploadProgressState, setUploadProgress] = (0,react_.useState)(
    $props.__internal_upload_progress ?? 0
  );
  const uploadProgress = $props.__internal_upload_progress ?? uploadProgressState;
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    $props.endpoint,
    {
      onClientUploadComplete: (res) => {
        var _a2;
        setFiles([]);
        (_a2 = $props.onClientUploadComplete) == null ? void 0 : _a2.call($props, res);
        setUploadProgress(0);
      },
      onUploadProgress: (p) => {
        var _a2;
        setUploadProgress(p);
        (_a2 = $props.onUploadProgress) == null ? void 0 : _a2.call($props, p);
      },
      onUploadError: $props.onUploadError,
      onUploadBegin: $props.onUploadBegin
    }
  );
  const { fileTypes } = generatePermittedFileTypes(permittedFileInfo == null ? void 0 : permittedFileInfo.config);
  const onDrop = (0,react_.useCallback)(
    (acceptedFiles) => {
      var _a2;
      setFiles(acceptedFiles);
      if (((_a2 = $props.config) == null ? void 0 : _a2.mode) === "auto") {
        const input = "input" in $props ? $props.input : void 0;
        void startUpload(acceptedFiles, input);
        return;
      }
    },
    [$props, startUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = (0,dist.useDropzone)({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : void 0,
    disabled: $props.__internal_dropzone_disabled
  });
  const ready = $props.__internal_ready ?? ($props.__internal_state === "ready" || fileTypes.length > 0);
  const onUploadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!files)
      return;
    const input = "input" in $props ? $props.input : void 0;
    void startUpload(files, input);
  };
  const styleFieldArg = {
    fileTypes,
    isDragActive,
    isUploading,
    ready,
    uploadProgress
  };
  const state = (() => {
    if ($props.__internal_state)
      return $props.__internal_state;
    if (!ready)
      return "readying";
    if (ready && !isUploading)
      return "ready";
    return "uploading";
  })();
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
    "div",
    {
      className: (0,tw_merge/* twMerge */.m)(
        "mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 text-center",
        isDragActive && "bg-blue-600/10",
        $props.className,
        styleFieldToClassName((_a = $props.appearance) == null ? void 0 : _a.container, styleFieldArg)
      ),
      ...getRootProps(),
      style: styleFieldToCssObject((_b = $props.appearance) == null ? void 0 : _b.container, styleFieldArg),
      "data-state": state,
      children: [
        contentFieldToContent((_c = $props.content) == null ? void 0 : _c.uploadIcon, styleFieldArg) ?? /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            className: (0,tw_merge/* twMerge */.m)(
              "mx-auto block h-12 w-12 align-middle text-gray-400",
              styleFieldToClassName((_d = $props.appearance) == null ? void 0 : _d.uploadIcon, styleFieldArg)
            ),
            style: styleFieldToCssObject(
              (_e = $props.appearance) == null ? void 0 : _e.uploadIcon,
              styleFieldArg
            ),
            "data-ut-element": "upload-icon",
            "data-state": state,
            children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
              "path",
              {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.5 17a4.5 4.5 0 0 1-1.44-8.765a4.5 4.5 0 0 1 8.302-3.046a3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z",
                clipRule: "evenodd"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
          "label",
          {
            htmlFor: "file-upload",
            className: (0,tw_merge/* twMerge */.m)(
              classNames(
                "relative mt-4 flex w-64 cursor-pointer items-center justify-center text-sm font-semibold leading-6 text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500",
                ready ? "text-blue-600" : "text-gray-500"
              ),
              styleFieldToClassName((_f = $props.appearance) == null ? void 0 : _f.label, styleFieldArg)
            ),
            style: styleFieldToCssObject((_g = $props.appearance) == null ? void 0 : _g.label, styleFieldArg),
            "data-ut-element": "label",
            "data-state": state,
            children: [
              contentFieldToContent((_h = $props.content) == null ? void 0 : _h.label, styleFieldArg) ?? (ready ? `Choose files or drag and drop` : `Loading...`),
              /* @__PURE__ */ (0,jsx_runtime_.jsx)("input", { className: "sr-only", ...getInputProps() })
            ]
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          "div",
          {
            className: (0,tw_merge/* twMerge */.m)(
              "m-0 h-[1.25rem] text-xs leading-5 text-gray-600",
              styleFieldToClassName(
                (_i = $props.appearance) == null ? void 0 : _i.allowedContent,
                styleFieldArg
              )
            ),
            style: styleFieldToCssObject(
              (_j = $props.appearance) == null ? void 0 : _j.allowedContent,
              styleFieldArg
            ),
            "data-ut-element": "allowed-content",
            "data-state": state,
            children: contentFieldToContent((_k = $props.content) == null ? void 0 : _k.allowedContent, styleFieldArg) ?? allowedContentTextLabelGenerator(permittedFileInfo == null ? void 0 : permittedFileInfo.config)
          }
        ),
        ($props.__internal_show_button ?? files.length > 0) && /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          "button",
          {
            className: (0,tw_merge/* twMerge */.m)(
              classNames(
                "relative mt-4 flex h-10 w-36 items-center justify-center overflow-hidden rounded-md text-white after:transition-[width] after:duration-500",
                state === "uploading" ? `bg-blue-400 after:absolute after:left-0 after:h-full after:bg-blue-600 ${progressWidths[uploadProgress]}` : "bg-blue-600"
              ),
              styleFieldToClassName((_l = $props.appearance) == null ? void 0 : _l.button, styleFieldArg)
            ),
            style: styleFieldToCssObject(
              (_m = $props.appearance) == null ? void 0 : _m.button,
              styleFieldArg
            ),
            onClick: onUploadClick,
            "data-ut-element": "button",
            "data-state": state,
            disabled: $props.__internal_button_disabled ?? state === "uploading",
            children: contentFieldToContent((_n = $props.content) == null ? void 0 : _n.button, styleFieldArg) ?? (state === "uploading" ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(Spinner, {}) : `Upload ${files.length} file${files.length === 1 ? "" : "s"}`)
          }
        )
      ]
    }
  );
}

// src/component.tsx

function Uploader(props) {
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { className: "text-center text-4xl font-bold", children: `Upload a file using a button:` }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)(UploadButton, { ...props })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { className: "text-center text-4xl font-bold", children: `...or using a dropzone:` }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)(UploadDropzone, { ...props })
    ] })
  ] });
}
function generateComponents() {
  return {
    UploadButton,
    UploadDropzone,
    Uploader
  };
}

//# sourceMappingURL=index.mjs.map

/***/ })

};
;