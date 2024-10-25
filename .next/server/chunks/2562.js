exports.id = 2562;
exports.ids = [2562];
exports.modules = {

/***/ 34278:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67969));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89827));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99904))

/***/ }),

/***/ 89827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SidebarRoutes: () => (/* binding */ SidebarRoutes)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-item.tsx
/* __next_internal_client_entry_do_not_use__ SidebarItem auto */ 


const SidebarItem = ({ icon: Icon, label, href })=>{
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const isActive = pathname === "/" && href === "/" || pathname === href || pathname?.startsWith(`${href}/`);
    const onClick = ()=>{
        router.push(href);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        type: "button",
        className: (0,utils.cn)("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-x-2 py-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        size: 22,
                        className: (0,utils.cn)("text-slate-500", isActive && "text-sky-700")
                    }),
                    label
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (0,utils.cn)("ml-auto opacity-0 border-2 border-sky-700 h-full transition-all", isActive && "opacity-100")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-routes.tsx
/* __next_internal_client_entry_do_not_use__ SidebarRoutes auto */ 



const guestRoutes = [
    {
        icon: lucide_react/* Layout */.Ar2,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Browse",
        href: "/search"
    }
];
const teacherRoutes = [
    {
        icon: lucide_react/* List */.aVo,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: lucide_react/* BarChart */.vz2,
        label: "Analytics",
        href: "/teacher/analytics"
    }
];
const SidebarRoutes = ()=>{
    const pathname = (0,navigation.usePathname)();
    const isTeacherPage = pathname?.includes("/teacher");
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col w-full",
        children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarItem, {
                icon: route.icon,
                label: route.label,
                href: route.href
            }, route.href))
    });
};


/***/ }),

/***/ 53419:
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
// EXTERNAL MODULE: ./components/navbar-routes.tsx
var navbar_routes = __webpack_require__(40940);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./components/ui/sheet.tsx
var sheet = __webpack_require__(92657);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/logo.tsx


const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        height: 130,
        width: 130,
        alt: "logo",
        src: "/ETH_logo_converted_fixed.svg"
    });
};

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-routes.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/mrchike/code/features/next13-lms-platform/app/(dashboard)/_components/sidebar-routes.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SidebarRoutes"];

;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar.tsx



const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/_components/mobile-sidebar.tsx




const MobileSidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(sheet/* Sheet */.yo, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(sheet/* SheetTrigger */.aM, {
                className: "md:hidden pr-4 hover:opacity-75 transition",
                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sheet/* SheetContent */.ue, {
                side: "left",
                className: "p-0 bg-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/_components/navbar.tsx



const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-4 border-b h-full flex items-center bg-white shadow-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileSidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_routes/* NavbarRoutes */.f, {})
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/layout.tsx



const DashboardLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[80px] md:pl-56 fixed inset-y-0 w-full z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "md:pl-56 pt-[80px] h-full",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout = (DashboardLayout);


/***/ })

};
;