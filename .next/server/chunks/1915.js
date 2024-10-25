"use strict";
exports.id = 1915;
exports.ids = [1915];
exports.modules = {

/***/ 81915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fC: () => (/* binding */ $67824d98245208a0$export$be92b6f5f03c0fe9),
/* harmony export */   z$: () => (/* binding */ $67824d98245208a0$export$adb584737d712b70)
/* harmony export */ });
/* unused harmony exports createProgressScope, Progress, ProgressIndicator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8718);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43979);









/* -------------------------------------------------------------------------------------------------
 * Progress
 * -----------------------------------------------------------------------------------------------*/ const $67824d98245208a0$var$PROGRESS_NAME = 'Progress';
const $67824d98245208a0$var$DEFAULT_MAX = 100;
const [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($67824d98245208a0$var$PROGRESS_NAME);
const [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
const $67824d98245208a0$export$b25a304ec7d746bb = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeProgress: __scopeProgress , value: valueProp , max: maxProp , getValueLabel: getValueLabel = $67824d98245208a0$var$defaultGetValueLabel , ...progressProps } = props;
    const max = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
    const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max) : undefined;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($67824d98245208a0$var$ProgressProvider, {
        scope: __scopeProgress,
        value: value,
        max: max
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : undefined,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": $67824d98245208a0$var$getProgressState(value, max),
        "data-value": value !== null && value !== void 0 ? value : undefined,
        "data-max": max
    }, progressProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($67824d98245208a0$export$b25a304ec7d746bb, {
    displayName: $67824d98245208a0$var$PROGRESS_NAME
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
    max (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue)) return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
        return null;
    },
    value (props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
        if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max)) return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
        return null;
    }
};
/* -------------------------------------------------------------------------------------------------
 * ProgressIndicator
 * -----------------------------------------------------------------------------------------------*/ const $67824d98245208a0$var$INDICATOR_NAME = 'ProgressIndicator';
const $67824d98245208a0$export$2b776f7e7ee60dbd = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    var _context$value;
    const { __scopeProgress: __scopeProgress , ...indicatorProps } = props;
    const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
        "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : undefined,
        "data-max": context.max
    }, indicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($67824d98245208a0$export$2b776f7e7ee60dbd, {
    displayName: $67824d98245208a0$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ function $67824d98245208a0$var$defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
    return value == null ? 'indeterminate' : value === maxValue ? 'complete' : 'loading';
}
function $67824d98245208a0$var$isNumber(value) {
    return typeof value === 'number';
}
function $67824d98245208a0$var$isValidMaxNumber(max) {
    // prettier-ignore
    return $67824d98245208a0$var$isNumber(max) && !isNaN(max) && max > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max) {
    // prettier-ignore
    return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max && value >= 0;
} // Split this out for clearer readability of the error message.
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
const $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;