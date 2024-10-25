"use strict";
exports.id = 6506;
exports.ids = [6506];
exports.modules = {

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ IconBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85839);



const backgroundVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("rounded-full flex items-center justify-center", {
    variants: {
        variant: {
            default: "bg-sky-100",
            success: "bg-emerald-100"
        },
        size: {
            default: "p-2",
            sm: "p-1"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const iconVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("", {
    variants: {
        variant: {
            default: "text-sky-700",
            success: "text-emerald-700"
        },
        size: {
            default: "h-8 w-8",
            sm: "h-4 w-4"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const IconBadge = ({ icon: Icon, variant, size })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(backgroundVariants({
            variant,
            size
        })),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(iconVariants({
                variant,
                size
            }))
        })
    });
};


/***/ })

};
;