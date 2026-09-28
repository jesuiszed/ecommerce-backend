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
exports.id = "app/api/cart/items/route";
exports.ids = ["app/api/cart/items/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcart%2Fitems%2Froute&page=%2Fapi%2Fcart%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fitems%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcart%2Fitems%2Froute&page=%2Fapi%2Fcart%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fitems%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_cart_items_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cart/items/route.ts */ \"(rsc)/./app/api/cart/items/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cart/items/route\",\n        pathname: \"/api/cart/items\",\n        filename: \"route\",\n        bundlePath: \"app/api/cart/items/route\"\n    },\n    resolvedPagePath: \"/Users/ingrid/Desktop/project/ecom/gabon/gabon-ecommerce-backend/app/api/cart/items/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_cart_items_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/cart/items/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXJ0JTJGaXRlbXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNhcnQlMkZpdGVtcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNhcnQlMkZpdGVtcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmluZ3JpZCUyRkRlc2t0b3AlMkZwcm9qZWN0JTJGZWNvbSUyRmdhYm9uJTJGZ2Fib24tZWNvbW1lcmNlLWJhY2tlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGaW5ncmlkJTJGRGVza3RvcCUyRnByb2plY3QlMkZlY29tJTJGZ2Fib24lMkZnYWJvbi1lY29tbWVyY2UtYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEM7QUFDekg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8/YjNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaW5ncmlkL0Rlc2t0b3AvcHJvamVjdC9lY29tL2dhYm9uL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kL2FwcC9hcGkvY2FydC9pdGVtcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2FydC9pdGVtcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NhcnQvaXRlbXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NhcnQvaXRlbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaW5ncmlkL0Rlc2t0b3AvcHJvamVjdC9lY29tL2dhYm9uL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kL2FwcC9hcGkvY2FydC9pdGVtcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2FydC9pdGVtcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcart%2Fitems%2Froute&page=%2Fapi%2Fcart%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fitems%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/cart/items/route.ts":
/*!*************************************!*\
  !*** ./app/api/cart/items/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(rsc)/./lib/utils.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n\n\n\n\nconst cartItemSchema = zod__WEBPACK_IMPORTED_MODULE_4__.object({\n    variantId: zod__WEBPACK_IMPORTED_MODULE_4__.string().min(1, \"La variante est requise.\"),\n    quantity: zod__WEBPACK_IMPORTED_MODULE_4__.number().int().min(1, \"La quantit\\xe9 doit \\xeatre sup\\xe9rieure \\xe0 0.\")\n});\nasync function POST(request) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"UNAUTHORIZED\", \"Vous devez \\xeatre connect\\xe9.\", 401);\n    const body = await request.json().catch(()=>null);\n    const parsed = cartItemSchema.safeParse(body);\n    if (!parsed.success) {\n        return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"VALIDATION_ERROR\", parsed.error.errors[0].message, 422);\n    }\n    const cart = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.cart.upsert({\n        where: {\n            userId: session.user.id\n        },\n        update: {},\n        create: {\n            userId: session.user.id\n        }\n    });\n    const variant = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.variant.findUnique({\n        where: {\n            id: parsed.data.variantId\n        }\n    });\n    if (!variant) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"NOT_FOUND\", \"Variante introuvable.\", 404);\n    const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.cartItem.findFirst({\n        where: {\n            cartId: cart.id,\n            variantId: parsed.data.variantId\n        }\n    });\n    const item = existing ? await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.cartItem.update({\n        where: {\n            id: existing.id\n        },\n        data: {\n            quantity: existing.quantity + parsed.data.quantity\n        }\n    }) : await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.cartItem.create({\n        data: {\n            cartId: cart.id,\n            variantId: parsed.data.variantId,\n            quantity: parsed.data.quantity\n        }\n    });\n    return Response.json(item, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhcnQvaXRlbXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUNPO0FBQ0o7QUFDRDtBQUNoQjtBQUV4QixNQUFNSyxpQkFBaUJELHVDQUFRLENBQUM7SUFDOUJHLFdBQVdILHVDQUFRLEdBQUdLLEdBQUcsQ0FBQyxHQUFHO0lBQzdCQyxVQUFVTix1Q0FBUSxHQUFHUSxHQUFHLEdBQUdILEdBQUcsQ0FBQyxHQUFHO0FBQ3BDO0FBRU8sZUFBZUksS0FBS0MsT0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNZCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNhLFNBQVNDLE1BQU0sT0FBT2IscURBQVNBLENBQUMsZ0JBQWdCLG1DQUE2QjtJQUVsRixNQUFNYyxPQUFPLE1BQU1ILFFBQVFJLElBQUksR0FBR0MsS0FBSyxDQUFDLElBQU07SUFDOUMsTUFBTUMsU0FBU2YsZUFBZWdCLFNBQVMsQ0FBQ0o7SUFFeEMsSUFBSSxDQUFDRyxPQUFPRSxPQUFPLEVBQUU7UUFDbkIsT0FBT25CLHFEQUFTQSxDQUFDLG9CQUFvQmlCLE9BQU9HLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZFO0lBRUEsTUFBTUMsT0FBTyxNQUFNMUIsK0NBQU1BLENBQUMwQixJQUFJLENBQUNDLE1BQU0sQ0FBQztRQUNwQ0MsT0FBTztZQUFFQyxRQUFRLFFBQVNiLElBQUksQ0FBU2MsRUFBRTtRQUFDO1FBQzFDQyxRQUFRLENBQUM7UUFDVEMsUUFBUTtZQUFFSCxRQUFRLFFBQVNiLElBQUksQ0FBU2MsRUFBRTtRQUFDO0lBQzdDO0lBRUEsTUFBTUcsVUFBVSxNQUFNakMsK0NBQU1BLENBQUNpQyxPQUFPLENBQUNDLFVBQVUsQ0FBQztRQUFFTixPQUFPO1lBQUVFLElBQUlWLE9BQU9lLElBQUksQ0FBQzVCLFNBQVM7UUFBQztJQUFFO0lBQ3ZGLElBQUksQ0FBQzBCLFNBQVMsT0FBTzlCLHFEQUFTQSxDQUFDLGFBQWEseUJBQXlCO0lBRXJFLE1BQU1pQyxXQUFXLE1BQU1wQywrQ0FBTUEsQ0FBQ3FDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDO1FBQy9DVixPQUFPO1lBQUVXLFFBQVFiLEtBQUtJLEVBQUU7WUFBRXZCLFdBQVdhLE9BQU9lLElBQUksQ0FBQzVCLFNBQVM7UUFBQztJQUM3RDtJQUVBLE1BQU1pQyxPQUFPSixXQUNULE1BQU1wQywrQ0FBTUEsQ0FBQ3FDLFFBQVEsQ0FBQ04sTUFBTSxDQUFDO1FBQzNCSCxPQUFPO1lBQUVFLElBQUlNLFNBQVNOLEVBQUU7UUFBQztRQUN6QkssTUFBTTtZQUFFekIsVUFBVTBCLFNBQVMxQixRQUFRLEdBQUdVLE9BQU9lLElBQUksQ0FBQ3pCLFFBQVE7UUFBQztJQUM3RCxLQUNBLE1BQU1WLCtDQUFNQSxDQUFDcUMsUUFBUSxDQUFDTCxNQUFNLENBQUM7UUFDM0JHLE1BQU07WUFDSkksUUFBUWIsS0FBS0ksRUFBRTtZQUNmdkIsV0FBV2EsT0FBT2UsSUFBSSxDQUFDNUIsU0FBUztZQUNoQ0csVUFBVVUsT0FBT2UsSUFBSSxDQUFDekIsUUFBUTtRQUNoQztJQUNGO0lBRUosT0FBTytCLFNBQVN2QixJQUFJLENBQUNzQixNQUFNO1FBQUVFLFFBQVE7SUFBSTtBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kLy4vYXBwL2FwaS9jYXJ0L2l0ZW1zL3JvdXRlLnRzPzUzMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGpzb25FcnJvciB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgY2FydEl0ZW1TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHZhcmlhbnRJZDogei5zdHJpbmcoKS5taW4oMSwgXCJMYSB2YXJpYW50ZSBlc3QgcmVxdWlzZS5cIiksXG4gIHF1YW50aXR5OiB6Lm51bWJlcigpLmludCgpLm1pbigxLCBcIkxhIHF1YW50aXTDqSBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIDAuXCIpXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGpzb25FcnJvcihcIlVOQVVUSE9SSVpFRFwiLCBcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpLlwiLCA0MDEpO1xuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgY29uc3QgcGFyc2VkID0gY2FydEl0ZW1TY2hlbWEuc2FmZVBhcnNlKGJvZHkpO1xuXG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ganNvbkVycm9yKFwiVkFMSURBVElPTl9FUlJPUlwiLCBwYXJzZWQuZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2UsIDQyMik7XG4gIH1cblxuICBjb25zdCBjYXJ0ID0gYXdhaXQgcHJpc21hLmNhcnQudXBzZXJ0KHtcbiAgICB3aGVyZTogeyB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCB9LFxuICAgIHVwZGF0ZToge30sXG4gICAgY3JlYXRlOiB7IHVzZXJJZDogKHNlc3Npb24udXNlciBhcyBhbnkpLmlkIH1cbiAgfSk7XG5cbiAgY29uc3QgdmFyaWFudCA9IGF3YWl0IHByaXNtYS52YXJpYW50LmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcGFyc2VkLmRhdGEudmFyaWFudElkIH0gfSk7XG4gIGlmICghdmFyaWFudCkgcmV0dXJuIGpzb25FcnJvcihcIk5PVF9GT1VORFwiLCBcIlZhcmlhbnRlIGludHJvdXZhYmxlLlwiLCA0MDQpO1xuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmNhcnRJdGVtLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgY2FydElkOiBjYXJ0LmlkLCB2YXJpYW50SWQ6IHBhcnNlZC5kYXRhLnZhcmlhbnRJZCB9XG4gIH0pO1xuXG4gIGNvbnN0IGl0ZW0gPSBleGlzdGluZ1xuICAgID8gYXdhaXQgcHJpc21hLmNhcnRJdGVtLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9LFxuICAgICAgICBkYXRhOiB7IHF1YW50aXR5OiBleGlzdGluZy5xdWFudGl0eSArIHBhcnNlZC5kYXRhLnF1YW50aXR5IH1cbiAgICAgIH0pXG4gICAgOiBhd2FpdCBwcmlzbWEuY2FydEl0ZW0uY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhcnRJZDogY2FydC5pZCxcbiAgICAgICAgICB2YXJpYW50SWQ6IHBhcnNlZC5kYXRhLnZhcmlhbnRJZCxcbiAgICAgICAgICBxdWFudGl0eTogcGFyc2VkLmRhdGEucXVhbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oaXRlbSwgeyBzdGF0dXM6IDIwMSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJqc29uRXJyb3IiLCJ6IiwiY2FydEl0ZW1TY2hlbWEiLCJvYmplY3QiLCJ2YXJpYW50SWQiLCJzdHJpbmciLCJtaW4iLCJxdWFudGl0eSIsIm51bWJlciIsImludCIsIlBPU1QiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJib2R5IiwianNvbiIsImNhdGNoIiwicGFyc2VkIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImVycm9yIiwiZXJyb3JzIiwibWVzc2FnZSIsImNhcnQiLCJ1cHNlcnQiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwidXBkYXRlIiwiY3JlYXRlIiwidmFyaWFudCIsImZpbmRVbmlxdWUiLCJkYXRhIiwiZXhpc3RpbmciLCJjYXJ0SXRlbSIsImZpbmRGaXJzdCIsImNhcnRJZCIsIml0ZW0iLCJSZXNwb25zZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cart/items/route.ts\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/uuid","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcart%2Fitems%2Froute&page=%2Fapi%2Fcart%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fitems%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();