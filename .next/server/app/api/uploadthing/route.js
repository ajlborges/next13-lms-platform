"use strict";
(() => {
var exports = {};
exports.id = 4811;
exports.ids = [4811];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 81775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/uploadthing/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/uploadthing/dist/next.mjs + 8 modules
var next = __webpack_require__(35549);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 22 modules
var esm = __webpack_require__(24425);
// EXTERNAL MODULE: ./lib/teacher.ts
var teacher = __webpack_require__(8542);
;// CONCATENATED MODULE: ./app/api/uploadthing/core.ts



const f = (0,next/* createUploadthing */.H)();
const handleAuth = ()=>{
    const { userId } = (0,esm/* auth */.I8)();
    const isAuthorized = (0,teacher/* isTeacher */.I)(userId);
    if (!userId || !isAuthorized) throw new Error("Unauthorized");
    return {
        userId
    };
};
const ourFileRouter = {
    courseImage: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    }).middleware(()=>handleAuth()).onUploadComplete(()=>{}),
    courseAttachment: f([
        "text",
        "image",
        "video",
        "audio",
        "pdf"
    ]).middleware(()=>handleAuth()).onUploadComplete(()=>{}),
    chapterVideo: f({
        video: {
            maxFileCount: 1,
            maxFileSize: "512GB"
        }
    }).middleware(()=>handleAuth()).onUploadComplete(()=>{})
};

;// CONCATENATED MODULE: ./app/api/uploadthing/route.ts


// Export routes for Next App Router
const { GET, POST } = (0,next/* createNextRouteHandler */.s)({
    router: ourFileRouter
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuploadthing%2Froute&name=app%2Fapi%2Fuploadthing%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2Fhome%2Fmrchike%2Fcode%2Ffeatures%2Fnext13-lms-platform%2Fapp&appPaths=%2Fapi%2Fuploadthing%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/uploadthing/route","pathname":"/api/uploadthing","filename":"route","bundlePath":"app/api/uploadthing/route"},"resolvedPagePath":"/home/mrchike/code/features/next13-lms-platform/app/api/uploadthing/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/uploadthing/route"

    

/***/ }),

/***/ 8542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ isTeacher)
/* harmony export */ });
const isTeacher = (userId)=>{
    return userId === "user_2no8EeRrF7sTuLtyPuYlo5s59x1";
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [652,4813,4425,9565,5501,5549], () => (__webpack_exec__(81775)));
module.exports = __webpack_exports__;

})();