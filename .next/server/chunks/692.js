"use strict";
exports.id = 692;
exports.ids = [692,3302];
exports.modules = {

/***/ 95147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Progress: () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81915);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91971);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12857);
/* __next_internal_client_entry_do_not_use__ Progress auto */ 




const progressVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("h-full w-full flex-1 bg-primary transition-all", {
    variants: {
        variant: {
            default: "bg-sky-600",
            success: "bg-emerald-700"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Progress = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, value, variant, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__/* .Indicator */ .z$, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(progressVariants({
                variant
            })),
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        })
    }));
Progress.displayName = _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC.displayName;



/***/ }),

/***/ 71001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getProgress)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93302);

const getProgress = async (userId, courseId)=>{
    try {
        const publishedChapters = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.chapter.findMany({
            where: {
                courseId: courseId,
                isPublished: true
            },
            select: {
                id: true
            }
        });
        const publishedChapterIds = publishedChapters.map((chapter)=>chapter.id);
        const validCompletedChapters = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.userProgress.count({
            where: {
                userId: userId,
                chapterId: {
                    in: publishedChapterIds
                },
                isCompleted: true
            }
        });
        const progressPercentage = validCompletedChapters / publishedChapterIds.length * 100;
        return progressPercentage;
    } catch (error) {
        console.log("[GET_PROGRESS]", error);
        return 0;
    }
};


/***/ }),

/***/ 74590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ CourseProgress)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/ui/progress.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/mrchike/code/features/next13-lms-platform/components/ui/progress.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Progress"];

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(85839);
;// CONCATENATED MODULE: ./components/course-progress.tsx



const colorByVariant = {
    default: "text-sky-700",
    success: "text-emerald-700"
};
const sizeByVariant = {
    default: "text-sm",
    sm: "text-xs"
};
const CourseProgress = ({ value, variant, size })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                className: "h-2",
                value: value,
                variant: variant
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (0,utils.cn)("font-medium mt-2 text-sky-700", colorByVariant[variant || "default"], sizeByVariant[size || "default"]),
                children: [
                    Math.round(value),
                    "% Complete"
                ]
            })
        ]
    });
};


/***/ }),

/***/ 93302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ }),

/***/ 85839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95182);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12794);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ })

};
;