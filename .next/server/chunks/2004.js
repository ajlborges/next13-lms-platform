exports.id = 2004;
exports.ids = [2004];
exports.modules = {

/***/ 75977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84102));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64092));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95147));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96031));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67969));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99904))

/***/ }),

/***/ 96031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseSidebarItem: () => (/* binding */ CourseSidebarItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51158);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12857);
/* __next_internal_client_entry_do_not_use__ CourseSidebarItem auto */ 



const CourseSidebarItem = ({ label, id, isCompleted, courseId, isLocked })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const Icon = isLocked ? lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Lock */ .HEZ : isCompleted ? lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .CheckCircle */ .fU8 : lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .PlayCircle */ .k6n;
    const isActive = pathname?.includes(id);
    const onClick = ()=>{
        router.push(`/courses/${courseId}/chapters/${id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        type: "button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", isActive && "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700", isCompleted && "text-emerald-700 hover:text-emerald-700", isCompleted && isActive && "bg-emerald-200/20"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-x-2 py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 22,
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-slate-500", isActive && "text-slate-700", isCompleted && "text-emerald-700")
                    }),
                    label
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("ml-auto opacity-0 border-2 border-slate-700 h-full transition-all", isActive && "opacity-100", isCompleted && "border-emerald-700")
            })
        ]
    });
};


/***/ }),

/***/ 88693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 22 modules
var esm = __webpack_require__(24425);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(64980);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(93302);
// EXTERNAL MODULE: ./actions/get-progress.ts
var get_progress = __webpack_require__(71001);
// EXTERNAL MODULE: ./components/course-progress.tsx + 1 modules
var course_progress = __webpack_require__(74590);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/mrchike/code/features/next13-lms-platform/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["CourseSidebarItem"];

;// CONCATENATED MODULE: ./app/(course)/courses/[courseId]/_components/course-sidebar.tsx






const CourseSidebar = async ({ course, progressCount })=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) {
        return (0,navigation.redirect)("/");
    }
    const purchase = await db.db.purchase.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId: course.id
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full border-r flex flex-col overflow-y-auto shadow-sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-8 flex flex-col border-b",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-semibold",
                        children: course.title
                    }),
                    purchase && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(course_progress/* CourseProgress */.D, {
                            variant: "success",
                            value: progressCount
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col w-full",
                children: course.chapters.map((chapter)=>/*#__PURE__*/ jsx_runtime_.jsx(e0, {
                        id: chapter.id,
                        label: chapter.title,
                        isCompleted: !!chapter.userProgress?.[0]?.isCompleted,
                        courseId: course.id,
                        isLocked: !chapter.isFree && !purchase
                    }, chapter.id))
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/navbar-routes.tsx
var navbar_routes = __webpack_require__(40940);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./components/ui/sheet.tsx
var sheet = __webpack_require__(92657);
;// CONCATENATED MODULE: ./app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx




const CourseMobileSidebar = ({ course, progressCount })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(sheet/* Sheet */.yo, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(sheet/* SheetTrigger */.aM, {
                className: "md:hidden pr-4 hover:opacity-75 transition",
                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sheet/* SheetContent */.ue, {
                side: "left",
                className: "p-0 bg-white w-72",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CourseSidebar, {
                    course: course,
                    progressCount: progressCount
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(course)/courses/[courseId]/_components/course-navbar.tsx



const CourseNavbar = ({ course, progressCount })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-4 border-b h-full flex items-center bg-white shadow-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CourseMobileSidebar, {
                course: course,
                progressCount: progressCount
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_routes/* NavbarRoutes */.f, {})
        ]
    });
};

;// CONCATENATED MODULE: ./app/(course)/courses/[courseId]/layout.tsx







const CourseLayout = async ({ children, params })=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) {
        return (0,navigation.redirect)("/");
    }
    const course = await db.db.course.findUnique({
        where: {
            id: params.courseId
        },
        include: {
            chapters: {
                where: {
                    isPublished: true
                },
                include: {
                    userProgress: {
                        where: {
                            userId
                        }
                    }
                },
                orderBy: {
                    position: "asc"
                }
            }
        }
    });
    if (!course) {
        return (0,navigation.redirect)("/");
    }
    const progressCount = await (0,get_progress/* getProgress */.x)(userId, course.id);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[80px] md:pl-80 fixed inset-y-0 w-full z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CourseNavbar, {
                    course: course,
                    progressCount: progressCount
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CourseSidebar, {
                    course: course,
                    progressCount: progressCount
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "md:pl-80 pt-[80px] h-full",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout = (CourseLayout);


/***/ })

};
;