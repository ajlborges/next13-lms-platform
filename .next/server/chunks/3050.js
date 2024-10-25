"use strict";
exports.id = 3050;
exports.ids = [3050];
exports.modules = {

/***/ 23050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CoursesList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./components/icon-badge.tsx
var icon_badge = __webpack_require__(6506);
// EXTERNAL MODULE: ./lib/format.ts
var format = __webpack_require__(73895);
// EXTERNAL MODULE: ./components/course-progress.tsx + 1 modules
var course_progress = __webpack_require__(74590);
;// CONCATENATED MODULE: ./components/course-card.tsx







const CourseCard = ({ id, title, imageUrl, chaptersLength, price, progress, category })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/courses/${id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-full aspect-video rounded-md overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        fill: true,
                        className: "object-cover",
                        alt: title,
                        src: imageUrl
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col pt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-3 flex items-center gap-x-2 text-sm md:text-xs",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-x-1 text-slate-500",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon_badge/* IconBadge */.G, {
                                        size: "sm",
                                        icon: lucide_react/* BookOpen */.p1z
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            chaptersLength,
                                            " ",
                                            chaptersLength === 1 ? "Chapter" : "Chapters"
                                        ]
                                    })
                                ]
                            })
                        }),
                        progress !== null ? /*#__PURE__*/ jsx_runtime_.jsx(course_progress/* CourseProgress */.D, {
                            variant: progress === 100 ? "success" : "default",
                            size: "sm",
                            value: progress
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-md md:text-sm font-medium text-slate-700",
                            children: (0,format/* formatPrice */.T)(price)
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/courses-list.tsx


const CoursesList = ({ items })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4",
                children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(CourseCard, {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                        chaptersLength: item.chapters.length,
                        price: item.price,
                        progress: item.progress,
                        category: item?.category?.name
                    }, item.id))
            }),
            items.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center text-sm text-muted-foreground mt-10",
                children: "No courses found"
            })
        ]
    });
};


/***/ }),

/***/ 73895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ formatPrice)
/* harmony export */ });
const formatPrice = (price)=>{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);
};


/***/ })

};
;