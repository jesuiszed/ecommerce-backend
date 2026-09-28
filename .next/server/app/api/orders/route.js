"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/orders/route";
exports.ids = ["app/api/orders/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_orders_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/route.ts */ \"(rsc)/./app/api/orders/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/route\",\n        pathname: \"/api/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/route\"\n    },\n    resolvedPagePath: \"/Users/ingrid/Desktop/project/ecom/gabon/gabon-ecommerce-backend/app/api/orders/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_orders_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/orders/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9yZGVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmluZ3JpZCUyRkRlc2t0b3AlMkZwcm9qZWN0JTJGZWNvbSUyRmdhYm9uJTJGZ2Fib24tZWNvbW1lcmNlLWJhY2tlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGaW5ncmlkJTJGRGVza3RvcCUyRnByb2plY3QlMkZlY29tJTJGZ2Fib24lMkZnYWJvbi1lY29tbWVyY2UtYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0M7QUFDckg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8/ZTgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaW5ncmlkL0Rlc2t0b3AvcHJvamVjdC9lY29tL2dhYm9uL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kL2FwcC9hcGkvb3JkZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vcmRlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vcmRlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL29yZGVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9pbmdyaWQvRGVza3RvcC9wcm9qZWN0L2Vjb20vZ2Fib24vZ2Fib24tZWNvbW1lcmNlLWJhY2tlbmQvYXBwL2FwaS9vcmRlcnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL29yZGVycy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/orders/route.ts":
/*!*********************************!*\
  !*** ./app/api/orders/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(rsc)/./lib/utils.ts\");\n/* harmony import */ var _lib_validators_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/validators/order */ \"(rsc)/./lib/validators/order.ts\");\n\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"UNAUTHORIZED\", \"Vous devez \\xeatre connect\\xe9.\", 401);\n    const orders = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.order.findMany({\n        where: {\n            userId: session.user.id\n        },\n        include: {\n            items: {\n                include: {\n                    variant: {\n                        include: {\n                            product: true\n                        }\n                    }\n                }\n            },\n            payment: true,\n            user: true\n        },\n        orderBy: {\n            createdAt: \"desc\"\n        }\n    });\n    return Response.json(orders);\n}\nasync function POST(request) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"UNAUTHORIZED\", \"Vous devez \\xeatre connect\\xe9.\", 401);\n    const body = await request.json().catch(()=>null);\n    const parsed = _lib_validators_order__WEBPACK_IMPORTED_MODULE_4__.orderCreateSchema.safeParse(body);\n    if (!parsed.success) {\n        return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"VALIDATION_ERROR\", parsed.error.errors[0].message, 422);\n    }\n    const address = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.address.findFirst({\n        where: {\n            id: parsed.data.shippingAddressId,\n            userId: session.user.id\n        }\n    });\n    if (!address) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"NOT_FOUND\", \"Adresse introuvable.\", 404);\n    const items = [];\n    let total = 0;\n    for (const entry of parsed.data.items){\n        const variant = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.variant.findUnique({\n            where: {\n                id: entry.variantId\n            },\n            include: {\n                product: true\n            }\n        });\n        if (!variant) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"NOT_FOUND\", \"Une variante de produit est introuvable.\", 404);\n        if (variant.stock < entry.quantity) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"VALIDATION_ERROR\", \"Stock insuffisant pour un article.\", 422);\n        const unitPrice = Number(variant.price ?? variant.product.basePrice);\n        total += unitPrice * entry.quantity;\n        items.push({\n            variantId: entry.variantId,\n            quantity: entry.quantity,\n            unitPrice\n        });\n    }\n    const order = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.order.create({\n        data: {\n            number: `CMD-${Date.now()}`,\n            userId: session.user.id,\n            shippingAddressId: address.id,\n            totalAmount: total,\n            status: \"PENDING\",\n            items: {\n                create: items.map((item)=>({\n                        variantId: item.variantId,\n                        quantity: item.quantity,\n                        unitPrice: item.unitPrice\n                    }))\n            }\n        },\n        include: {\n            items: true\n        }\n    });\n    for (const item of items){\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.variant.update({\n            where: {\n                id: item.variantId\n            },\n            data: {\n                stock: {\n                    decrement: item.quantity\n                }\n            }\n        });\n    }\n    return Response.json(order, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUMsYUFBYWY7WUFDYmdCLFFBQVE7WUFDUnRDLE9BQU87Z0JBQ0xpQyxRQUFRakMsTUFBTXVDLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO3dCQUMzQmYsV0FBV2UsS0FBS2YsU0FBUzt3QkFDekJFLFVBQVVhLEtBQUtiLFFBQVE7d0JBQ3ZCQyxXQUFXWSxLQUFLWixTQUFTO29CQUMzQjtZQUNGO1FBQ0Y7UUFDQTdCLFNBQVM7WUFBRUMsT0FBTztRQUFLO0lBQ3pCO0lBRUEsS0FBSyxNQUFNd0MsUUFBUXhDLE1BQU87UUFDeEIsTUFBTWYsK0NBQU1BLENBQUNnQixPQUFPLENBQUN3QyxNQUFNLENBQUM7WUFDMUI3QyxPQUFPO2dCQUFFRSxJQUFJMEMsS0FBS2YsU0FBUztZQUFDO1lBQzVCTCxNQUFNO2dCQUFFTSxPQUFPO29CQUFFZ0IsV0FBV0YsS0FBS2IsUUFBUTtnQkFBQztZQUFFO1FBQzlDO0lBQ0Y7SUFFQSxPQUFPckIsU0FBU0MsSUFBSSxDQUFDYixPQUFPO1FBQUU0QyxRQUFRO0lBQUk7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8uL2FwcC9hcGkvb3JkZXJzL3JvdXRlLnRzPzlmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGpzb25FcnJvciB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgb3JkZXJDcmVhdGVTY2hlbWEgfSBmcm9tIFwiQC9saWIvdmFsaWRhdG9ycy9vcmRlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGpzb25FcnJvcihcIlVOQVVUSE9SSVpFRFwiLCBcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpLlwiLCA0MDEpO1xuXG4gIGNvbnN0IG9yZGVycyA9IGF3YWl0IHByaXNtYS5vcmRlci5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgdXNlcklkOiAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBpdGVtczogeyBpbmNsdWRlOiB7IHZhcmlhbnQ6IHsgaW5jbHVkZTogeyBwcm9kdWN0OiB0cnVlIH0gfSB9IH0sXG4gICAgICBwYXltZW50OiB0cnVlLFxuICAgICAgdXNlcjogdHJ1ZVxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24ob3JkZXJzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGpzb25FcnJvcihcIlVOQVVUSE9SSVpFRFwiLCBcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpLlwiLCA0MDEpO1xuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgY29uc3QgcGFyc2VkID0gb3JkZXJDcmVhdGVTY2hlbWEuc2FmZVBhcnNlKGJvZHkpO1xuXG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ganNvbkVycm9yKFwiVkFMSURBVElPTl9FUlJPUlwiLCBwYXJzZWQuZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2UsIDQyMik7XG4gIH1cblxuICBjb25zdCBhZGRyZXNzID0gYXdhaXQgcHJpc21hLmFkZHJlc3MuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogcGFyc2VkLmRhdGEuc2hpcHBpbmdBZGRyZXNzSWQsIHVzZXJJZDogKHNlc3Npb24udXNlciBhcyBhbnkpLmlkIH1cbiAgfSk7XG4gIGlmICghYWRkcmVzcykgcmV0dXJuIGpzb25FcnJvcihcIk5PVF9GT1VORFwiLCBcIkFkcmVzc2UgaW50cm91dmFibGUuXCIsIDQwNCk7XG5cbiAgY29uc3QgaXRlbXMgPSBbXSBhcyB7IHZhcmlhbnRJZDogc3RyaW5nOyBxdWFudGl0eTogbnVtYmVyOyB1bml0UHJpY2U6IG51bWJlciB9W107XG4gIGxldCB0b3RhbCA9IDA7XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBwYXJzZWQuZGF0YS5pdGVtcykge1xuICAgIGNvbnN0IHZhcmlhbnQgPSBhd2FpdCBwcmlzbWEudmFyaWFudC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGVudHJ5LnZhcmlhbnRJZCB9LCBpbmNsdWRlOiB7IHByb2R1Y3Q6IHRydWUgfSB9KTtcbiAgICBpZiAoIXZhcmlhbnQpIHJldHVybiBqc29uRXJyb3IoXCJOT1RfRk9VTkRcIiwgXCJVbmUgdmFyaWFudGUgZGUgcHJvZHVpdCBlc3QgaW50cm91dmFibGUuXCIsIDQwNCk7XG4gICAgaWYgKHZhcmlhbnQuc3RvY2sgPCBlbnRyeS5xdWFudGl0eSkgcmV0dXJuIGpzb25FcnJvcihcIlZBTElEQVRJT05fRVJST1JcIiwgXCJTdG9jayBpbnN1ZmZpc2FudCBwb3VyIHVuIGFydGljbGUuXCIsIDQyMik7XG5cbiAgICBjb25zdCB1bml0UHJpY2UgPSBOdW1iZXIodmFyaWFudC5wcmljZSA/PyB2YXJpYW50LnByb2R1Y3QuYmFzZVByaWNlKTtcbiAgICB0b3RhbCArPSB1bml0UHJpY2UgKiBlbnRyeS5xdWFudGl0eTtcbiAgICBpdGVtcy5wdXNoKHsgdmFyaWFudElkOiBlbnRyeS52YXJpYW50SWQsIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSwgdW5pdFByaWNlIH0pO1xuICB9XG5cbiAgY29uc3Qgb3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBudW1iZXI6IGBDTUQtJHtEYXRlLm5vdygpfWAsXG4gICAgICB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCxcbiAgICAgIHNoaXBwaW5nQWRkcmVzc0lkOiBhZGRyZXNzLmlkLFxuICAgICAgdG90YWxBbW91bnQ6IHRvdGFsLFxuICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIGNyZWF0ZTogaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgIHZhcmlhbnRJZDogaXRlbS52YXJpYW50SWQsXG4gICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgdW5pdFByaWNlOiBpdGVtLnVuaXRQcmljZVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGluY2x1ZGU6IHsgaXRlbXM6IHRydWUgfVxuICB9KTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBhd2FpdCBwcmlzbWEudmFyaWFudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGl0ZW0udmFyaWFudElkIH0sXG4gICAgICBkYXRhOiB7IHN0b2NrOiB7IGRlY3JlbWVudDogaXRlbS5xdWFudGl0eSB9IH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBSZXNwb25zZS5qc29uKG9yZGVyLCB7IHN0YXR1czogMjAxIH0pO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImpzb25FcnJvciIsIm9yZGVyQ3JlYXRlU2NoZW1hIiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJvcmRlcnMiLCJvcmRlciIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VySWQiLCJpZCIsImluY2x1ZGUiLCJpdGVtcyIsInZhcmlhbnQiLCJwcm9kdWN0IiwicGF5bWVudCIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJSZXNwb25zZSIsImpzb24iLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJjYXRjaCIsInBhcnNlZCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJlcnJvciIsImVycm9ycyIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwiZmluZEZpcnN0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0lkIiwidG90YWwiLCJlbnRyeSIsImZpbmRVbmlxdWUiLCJ2YXJpYW50SWQiLCJzdG9jayIsInF1YW50aXR5IiwidW5pdFByaWNlIiwiTnVtYmVyIiwicHJpY2UiLCJiYXNlUHJpY2UiLCJwdXNoIiwiY3JlYXRlIiwibnVtYmVyIiwiRGF0ZSIsIm5vdyIsInRvdGFsQW1vdW50Iiwic3RhdHVzIiwibWFwIiwiaXRlbSIsInVwZGF0ZSIsImRlY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   requireAdminSession: () => (/* binding */ requireAdminSession)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nconst authSecret = process.env.NEXTAUTH_SECRET ?? \"dev-nextauth-secret-change-me\";\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/connexion\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Identifiants\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Mot de passe\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.isActive) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.passwordHash);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    secret: authSecret\n};\n/**\n * À importer dans TOUTE route /api/admin/** en tout premier :\n *\n *   const session = await requireAdminSession();\n *   if (!session) return forbiddenResponse();\n *\n * Ne jamais dupliquer cette vérification autrement (pas de check côté client seul).\n */ \nasync function requireAdminSession() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(authOptions);\n    if (!session?.user || session.user.role !== \"ADMIN\") return null;\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRTtBQUNwQztBQUNRO0FBRXRDLE1BQU1HLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxJQUFJO0FBRTNDLE1BQU1DLGNBQStCO0lBQzFDQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUMzQkMsT0FBTztRQUFFQyxRQUFRO0lBQWE7SUFDOUJDLFdBQVc7UUFDVFosMkVBQW1CQSxDQUFDO1lBQ2xCYSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFnQkMsTUFBTTtnQkFBVztZQUN0RDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVLE9BQU87Z0JBQzFELE1BQU1FLE9BQU8sTUFBTWxCLCtDQUFNQSxDQUFDa0IsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQUVDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQUU7Z0JBQ2hGLElBQUksQ0FBQ0ssUUFBUSxDQUFDQSxLQUFLRyxRQUFRLEVBQUUsT0FBTztnQkFDcEMsTUFBTUMsUUFBUSxNQUFNdkIsdURBQWMsQ0FBQ2EsWUFBWUksUUFBUSxFQUFFRSxLQUFLTSxZQUFZO2dCQUMxRSxJQUFJLENBQUNGLE9BQU8sT0FBTztnQkFDbkIsT0FBTztvQkFBRUcsSUFBSVAsS0FBS08sRUFBRTtvQkFBRWQsTUFBTU8sS0FBS1AsSUFBSTtvQkFBRUUsT0FBT0ssS0FBS0wsS0FBSztvQkFBRWEsTUFBTVIsS0FBS1EsSUFBSTtnQkFBQztZQUM1RTtRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlcsTUFBTUosRUFBRSxHQUFHLEtBQWNBLEVBQUU7Z0JBQzNCSSxNQUFNSCxJQUFJLEdBQUcsS0FBY0EsSUFBSTtZQUNqQztZQUNBLE9BQU9HO1FBQ1Q7UUFDQSxNQUFNdkIsU0FBUSxFQUFFQSxPQUFPLEVBQUV1QixLQUFLLEVBQUU7WUFDOUIsSUFBSXZCLFFBQVFZLElBQUksRUFBRTtnQkFDZlosUUFBUVksSUFBSSxDQUFTTyxFQUFFLEdBQUdJLE1BQU1KLEVBQUU7Z0JBQ2xDbkIsUUFBUVksSUFBSSxDQUFTUSxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFDekM7WUFDQSxPQUFPcEI7UUFDVDtJQUNGO0lBQ0F3QixRQUFRN0I7QUFDVixFQUFFO0FBRUY7Ozs7Ozs7Q0FPQyxHQUM0QztBQUN0QyxlQUFlK0I7SUFDcEIsTUFBTTFCLFVBQVUsTUFBTXlCLDJEQUFnQkEsQ0FBQzFCO0lBQ3ZDLElBQUksQ0FBQ0MsU0FBU1ksUUFBUSxRQUFTQSxJQUFJLENBQVNRLElBQUksS0FBSyxTQUFTLE9BQU87SUFDckUsT0FBT3BCO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5cbmNvbnN0IGF1dGhTZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgPz8gXCJkZXYtbmV4dGF1dGgtc2VjcmV0LWNoYW5nZS1tZVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiB9LFxuICBwYWdlczogeyBzaWduSW46IFwiL2Nvbm5leGlvblwiIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJJZGVudGlmaWFudHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJNb3QgZGUgcGFzc2VcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0gfSk7XG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5pc0FjdGl2ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICAgICAgaWYgKCF2YWxpZCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB7IGlkOiB1c2VyLmlkLCBuYW1lOiB1c2VyLm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsLCByb2xlOiB1c2VyLnJvbGUgfTtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9ICh1c2VyIGFzIGFueSkuaWQ7XG4gICAgICAgIHRva2VuLnJvbGUgPSAodXNlciBhcyBhbnkpLnJvbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9LFxuICBzZWNyZXQ6IGF1dGhTZWNyZXRcbn07XG5cbi8qKlxuICogw4AgaW1wb3J0ZXIgZGFucyBUT1VURSByb3V0ZSAvYXBpL2FkbWluLyoqIGVuIHRvdXQgcHJlbWllciA6XG4gKlxuICogICBjb25zdCBzZXNzaW9uID0gYXdhaXQgcmVxdWlyZUFkbWluU2Vzc2lvbigpO1xuICogICBpZiAoIXNlc3Npb24pIHJldHVybiBmb3JiaWRkZW5SZXNwb25zZSgpO1xuICpcbiAqIE5lIGphbWFpcyBkdXBsaXF1ZXIgY2V0dGUgdsOpcmlmaWNhdGlvbiBhdXRyZW1lbnQgKHBhcyBkZSBjaGVjayBjw7R0w6kgY2xpZW50IHNldWwpLlxuICovXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVBZG1pblNlc3Npb24oKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gc2Vzc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aFNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJhdXRoT3B0aW9ucyIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc0FjdGl2ZSIsInZhbGlkIiwiY29tcGFyZSIsInBhc3N3b3JkSGFzaCIsImlkIiwicm9sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2VjcmV0IiwiZ2V0U2VydmVyU2Vzc2lvbiIsInJlcXVpcmVBZG1pblNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQ3RGLEdBQUc7QUFFTCxJQUFJQSxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdXG4gIH0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatXAF: () => (/* binding */ formatXAF),\n/* harmony export */   jsonError: () => (/* binding */ jsonError)\n/* harmony export */ });\nfunction formatXAF(amount) {\n    return new Intl.NumberFormat(\"fr-FR\", {\n        maximumFractionDigits: 0\n    }).format(amount) + \" FCFA\";\n}\nfunction jsonError(code, message, status) {\n    return Response.json({\n        error: {\n            code,\n            message\n        }\n    }, {\n        status\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTQSxVQUFVQyxNQUFjO0lBQ3RDLE9BQU8sSUFBSUMsS0FBS0MsWUFBWSxDQUFDLFNBQVM7UUFBRUMsdUJBQXVCO0lBQUUsR0FBR0MsTUFBTSxDQUFDSixVQUFVO0FBQ3ZGO0FBRU8sU0FBU0ssVUFBVUMsSUFBWSxFQUFFQyxPQUFlLEVBQUVDLE1BQWM7SUFDckUsT0FBT0MsU0FBU0MsSUFBSSxDQUFDO1FBQUVDLE9BQU87WUFBRUw7WUFBTUM7UUFBUTtJQUFFLEdBQUc7UUFBRUM7SUFBTztBQUM5RCIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kLy4vbGliL3V0aWxzLnRzP2Y3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFhBRihhbW91bnQ6IG51bWJlcikge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZnItRlJcIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KGFtb3VudCkgKyBcIiBGQ0ZBXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqc29uRXJyb3IoY29kZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XG4gIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IHsgY29kZSwgbWVzc2FnZSB9IH0sIHsgc3RhdHVzIH0pO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdFhBRiIsImFtb3VudCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJqc29uRXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsInN0YXR1cyIsIlJlc3BvbnNlIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/utils.ts\n");

/***/ }),

/***/ "(rsc)/./lib/validators/order.ts":
/*!*********************************!*\
  !*** ./lib/validators/order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orderCreateSchema: () => (/* binding */ orderCreateSchema),\n/* harmony export */   orderItemSchema: () => (/* binding */ orderItemSchema),\n/* harmony export */   orderUpdateSchema: () => (/* binding */ orderUpdateSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\nconst orderItemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    variantId: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, \"La variante est requise.\"),\n    quantity: zod__WEBPACK_IMPORTED_MODULE_0__.number().int().min(1, \"La quantit\\xe9 doit \\xeatre sup\\xe9rieure \\xe0 0.\")\n});\nconst orderCreateSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    shippingAddressId: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, \"L'adresse de livraison est requise.\"),\n    items: zod__WEBPACK_IMPORTED_MODULE_0__.array(orderItemSchema).min(1, \"Au moins un article est requis.\")\n});\nconst orderUpdateSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    status: zod__WEBPACK_IMPORTED_MODULE_0__[\"enum\"]([\n        \"PENDING\",\n        \"PAID\",\n        \"PROCESSING\",\n        \"SHIPPED\",\n        \"DELIVERED\",\n        \"CANCELLED\"\n    ]).optional()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdmFsaWRhdG9ycy9vcmRlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdCO0FBRWpCLE1BQU1DLGtCQUFrQkQsdUNBQVEsQ0FBQztJQUN0Q0csV0FBV0gsdUNBQVEsR0FBR0ssR0FBRyxDQUFDLEdBQUc7SUFDN0JDLFVBQVVOLHVDQUFRLEdBQUdRLEdBQUcsR0FBR0gsR0FBRyxDQUFDLEdBQUc7QUFDcEMsR0FBRztBQUVJLE1BQU1JLG9CQUFvQlQsdUNBQVEsQ0FBQztJQUN4Q1UsbUJBQW1CVix1Q0FBUSxHQUFHSyxHQUFHLENBQUMsR0FBRztJQUNyQ00sT0FBT1gsc0NBQU8sQ0FBQ0MsaUJBQWlCSSxHQUFHLENBQUMsR0FBRztBQUN6QyxHQUFHO0FBRUksTUFBTVEsb0JBQW9CYix1Q0FBUSxDQUFDO0lBQ3hDYyxRQUFRZCx3Q0FBTSxDQUFDO1FBQUM7UUFBVztRQUFRO1FBQWM7UUFBVztRQUFhO0tBQVksRUFBRWdCLFFBQVE7QUFDakcsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kLy4vbGliL3ZhbGlkYXRvcnMvb3JkZXIudHM/ZWFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3Qgb3JkZXJJdGVtU2NoZW1hID0gei5vYmplY3Qoe1xuICB2YXJpYW50SWQ6IHouc3RyaW5nKCkubWluKDEsIFwiTGEgdmFyaWFudGUgZXN0IHJlcXVpc2UuXCIpLFxuICBxdWFudGl0eTogei5udW1iZXIoKS5pbnQoKS5taW4oMSwgXCJMYSBxdWFudGl0w6kgZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCAwLlwiKVxufSk7XG5cbmV4cG9ydCBjb25zdCBvcmRlckNyZWF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc2hpcHBpbmdBZGRyZXNzSWQ6IHouc3RyaW5nKCkubWluKDEsIFwiTCdhZHJlc3NlIGRlIGxpdnJhaXNvbiBlc3QgcmVxdWlzZS5cIiksXG4gIGl0ZW1zOiB6LmFycmF5KG9yZGVySXRlbVNjaGVtYSkubWluKDEsIFwiQXUgbW9pbnMgdW4gYXJ0aWNsZSBlc3QgcmVxdWlzLlwiKVxufSk7XG5cbmV4cG9ydCBjb25zdCBvcmRlclVwZGF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3RhdHVzOiB6LmVudW0oW1wiUEVORElOR1wiLCBcIlBBSURcIiwgXCJQUk9DRVNTSU5HXCIsIFwiU0hJUFBFRFwiLCBcIkRFTElWRVJFRFwiLCBcIkNBTkNFTExFRFwiXSkub3B0aW9uYWwoKVxufSk7XG4iXSwibmFtZXMiOlsieiIsIm9yZGVySXRlbVNjaGVtYSIsIm9iamVjdCIsInZhcmlhbnRJZCIsInN0cmluZyIsIm1pbiIsInF1YW50aXR5IiwibnVtYmVyIiwiaW50Iiwib3JkZXJDcmVhdGVTY2hlbWEiLCJzaGlwcGluZ0FkZHJlc3NJZCIsIml0ZW1zIiwiYXJyYXkiLCJvcmRlclVwZGF0ZVNjaGVtYSIsInN0YXR1cyIsImVudW0iLCJvcHRpb25hbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/validators/order.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/uuid","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();