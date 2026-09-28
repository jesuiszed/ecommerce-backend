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
exports.id = "app/api/addresses/route";
exports.ids = ["app/api/addresses/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddresses%2Froute&page=%2Fapi%2Faddresses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddresses%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddresses%2Froute&page=%2Fapi%2Faddresses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddresses%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_addresses_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/addresses/route.ts */ \"(rsc)/./app/api/addresses/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/addresses/route\",\n        pathname: \"/api/addresses\",\n        filename: \"route\",\n        bundlePath: \"app/api/addresses/route\"\n    },\n    resolvedPagePath: \"/Users/ingrid/Desktop/project/ecom/gabon/gabon-ecommerce-backend/app/api/addresses/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ingrid_Desktop_project_ecom_gabon_gabon_ecommerce_backend_app_api_addresses_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/addresses/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZGRyZXNzZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkZHJlc3NlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkZHJlc3NlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmluZ3JpZCUyRkRlc2t0b3AlMkZwcm9qZWN0JTJGZWNvbSUyRmdhYm9uJTJGZ2Fib24tZWNvbW1lcmNlLWJhY2tlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGaW5ncmlkJTJGRGVza3RvcCUyRnByb2plY3QlMkZlY29tJTJGZ2Fib24lMkZnYWJvbi1lY29tbWVyY2UtYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkM7QUFDeEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8/YjEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaW5ncmlkL0Rlc2t0b3AvcHJvamVjdC9lY29tL2dhYm9uL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kL2FwcC9hcGkvYWRkcmVzc2VzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZGRyZXNzZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZGRyZXNzZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkZHJlc3Nlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9pbmdyaWQvRGVza3RvcC9wcm9qZWN0L2Vjb20vZ2Fib24vZ2Fib24tZWNvbW1lcmNlLWJhY2tlbmQvYXBwL2FwaS9hZGRyZXNzZXMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkZHJlc3Nlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddresses%2Froute&page=%2Fapi%2Faddresses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddresses%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/addresses/route.ts":
/*!************************************!*\
  !*** ./app/api/addresses/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(rsc)/./lib/utils.ts\");\n/* harmony import */ var _lib_validators_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/validators/address */ \"(rsc)/./lib/validators/address.ts\");\n\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"UNAUTHORIZED\", \"Vous devez \\xeatre connect\\xe9.\", 401);\n    const addresses = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.address.findMany({\n        where: {\n            userId: session.user.id\n        },\n        orderBy: {\n            label: \"asc\"\n        }\n    });\n    return Response.json(addresses);\n}\nasync function POST(request) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"UNAUTHORIZED\", \"Vous devez \\xeatre connect\\xe9.\", 401);\n    const body = await request.json().catch(()=>null);\n    const parsed = _lib_validators_address__WEBPACK_IMPORTED_MODULE_4__.addressCreateSchema.safeParse(body);\n    if (!parsed.success) {\n        return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.jsonError)(\"VALIDATION_ERROR\", parsed.error.errors[0].message, 422);\n    }\n    const address = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.address.create({\n        data: {\n            userId: session.user.id,\n            label: parsed.data.label,\n            city: parsed.data.city,\n            district: parsed.data.district,\n            country: parsed.data.country,\n            phone: parsed.data.phone,\n            isDefault: parsed.data.isDefault ?? false\n        }\n    });\n    return Response.json(address, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkZHJlc3Nlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNPO0FBQ0o7QUFDRDtBQUN1QjtBQUV4RCxlQUFlSztJQUNwQixNQUFNQyxVQUFVLE1BQU1MLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ0ksU0FBU0MsTUFBTSxPQUFPSixxREFBU0EsQ0FBQyxnQkFBZ0IsbUNBQTZCO0lBRWxGLE1BQU1LLFlBQVksTUFBTVIsK0NBQU1BLENBQUNTLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1FBQzlDQyxPQUFPO1lBQUVDLFFBQVEsUUFBU0wsSUFBSSxDQUFTTSxFQUFFO1FBQUM7UUFDMUNDLFNBQVM7WUFBRUMsT0FBTztRQUFNO0lBQzFCO0lBRUEsT0FBT0MsU0FBU0MsSUFBSSxDQUFDVDtBQUN2QjtBQUVPLGVBQWVVLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1iLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNLE9BQU9KLHFEQUFTQSxDQUFDLGdCQUFnQixtQ0FBNkI7SUFFbEYsTUFBTWlCLE9BQU8sTUFBTUQsUUFBUUYsSUFBSSxHQUFHSSxLQUFLLENBQUMsSUFBTTtJQUM5QyxNQUFNQyxTQUFTbEIsd0VBQW1CQSxDQUFDbUIsU0FBUyxDQUFDSDtJQUU3QyxJQUFJLENBQUNFLE9BQU9FLE9BQU8sRUFBRTtRQUNuQixPQUFPckIscURBQVNBLENBQUMsb0JBQW9CbUIsT0FBT0csS0FBSyxDQUFDQyxNQUFNLENBQUMsRUFBRSxDQUFDQyxPQUFPLEVBQUU7SUFDdkU7SUFFQSxNQUFNbEIsVUFBVSxNQUFNVCwrQ0FBTUEsQ0FBQ1MsT0FBTyxDQUFDbUIsTUFBTSxDQUFDO1FBQzFDQyxNQUFNO1lBQ0pqQixRQUFRLFFBQVNMLElBQUksQ0FBU00sRUFBRTtZQUNoQ0UsT0FBT08sT0FBT08sSUFBSSxDQUFDZCxLQUFLO1lBQ3hCZSxNQUFNUixPQUFPTyxJQUFJLENBQUNDLElBQUk7WUFDdEJDLFVBQVVULE9BQU9PLElBQUksQ0FBQ0UsUUFBUTtZQUM5QkMsU0FBU1YsT0FBT08sSUFBSSxDQUFDRyxPQUFPO1lBQzVCQyxPQUFPWCxPQUFPTyxJQUFJLENBQUNJLEtBQUs7WUFDeEJDLFdBQVdaLE9BQU9PLElBQUksQ0FBQ0ssU0FBUyxJQUFJO1FBQ3RDO0lBQ0Y7SUFFQSxPQUFPbEIsU0FBU0MsSUFBSSxDQUFDUixTQUFTO1FBQUUwQixRQUFRO0lBQUk7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJvbi1lY29tbWVyY2UtYmFja2VuZC8uL2FwcC9hcGkvYWRkcmVzc2VzL3JvdXRlLnRzP2YyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGpzb25FcnJvciB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgYWRkcmVzc0NyZWF0ZVNjaGVtYSB9IGZyb20gXCJAL2xpYi92YWxpZGF0b3JzL2FkZHJlc3NcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBqc29uRXJyb3IoXCJVTkFVVEhPUklaRURcIiwgXCJWb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqS5cIiwgNDAxKTtcblxuICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgdXNlcklkOiAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgfSxcbiAgICBvcmRlckJ5OiB7IGxhYmVsOiBcImFzY1wiIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oYWRkcmVzc2VzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGpzb25FcnJvcihcIlVOQVVUSE9SSVpFRFwiLCBcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpLlwiLCA0MDEpO1xuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgY29uc3QgcGFyc2VkID0gYWRkcmVzc0NyZWF0ZVNjaGVtYS5zYWZlUGFyc2UoYm9keSk7XG5cbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiBqc29uRXJyb3IoXCJWQUxJREFUSU9OX0VSUk9SXCIsIHBhcnNlZC5lcnJvci5lcnJvcnNbMF0ubWVzc2FnZSwgNDIyKTtcbiAgfVxuXG4gIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJJZDogKHNlc3Npb24udXNlciBhcyBhbnkpLmlkLFxuICAgICAgbGFiZWw6IHBhcnNlZC5kYXRhLmxhYmVsLFxuICAgICAgY2l0eTogcGFyc2VkLmRhdGEuY2l0eSxcbiAgICAgIGRpc3RyaWN0OiBwYXJzZWQuZGF0YS5kaXN0cmljdCxcbiAgICAgIGNvdW50cnk6IHBhcnNlZC5kYXRhLmNvdW50cnksXG4gICAgICBwaG9uZTogcGFyc2VkLmRhdGEucGhvbmUsXG4gICAgICBpc0RlZmF1bHQ6IHBhcnNlZC5kYXRhLmlzRGVmYXVsdCA/PyBmYWxzZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oYWRkcmVzcywgeyBzdGF0dXM6IDIwMSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJqc29uRXJyb3IiLCJhZGRyZXNzQ3JlYXRlU2NoZW1hIiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJhZGRyZXNzZXMiLCJhZGRyZXNzIiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwib3JkZXJCeSIsImxhYmVsIiwiUmVzcG9uc2UiLCJqc29uIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwiY2F0Y2giLCJwYXJzZWQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwiY3JlYXRlIiwiZGF0YSIsImNpdHkiLCJkaXN0cmljdCIsImNvdW50cnkiLCJwaG9uZSIsImlzRGVmYXVsdCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/addresses/route.ts\n");

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

/***/ "(rsc)/./lib/validators/address.ts":
/*!***********************************!*\
  !*** ./lib/validators/address.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addressCreateSchema: () => (/* binding */ addressCreateSchema),\n/* harmony export */   addressUpdateSchema: () => (/* binding */ addressUpdateSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\nconst addressCreateSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    label: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"Le libell\\xe9 est requis.\"),\n    city: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"La ville est requise.\"),\n    district: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"Le quartier est requis.\"),\n    country: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"Le pays est requis.\").default(\"Gabon\"),\n    phone: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(8, \"Le t\\xe9l\\xe9phone est requis.\"),\n    isDefault: zod__WEBPACK_IMPORTED_MODULE_0__.boolean().optional()\n});\nconst addressUpdateSchema = addressCreateSchema.partial();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdmFsaWRhdG9ycy9hZGRyZXNzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QjtBQUVqQixNQUFNQyxzQkFBc0JELHVDQUFRLENBQUM7SUFDMUNHLE9BQU9ILHVDQUFRLEdBQUdLLEdBQUcsQ0FBQyxHQUFHO0lBQ3pCQyxNQUFNTix1Q0FBUSxHQUFHSyxHQUFHLENBQUMsR0FBRztJQUN4QkUsVUFBVVAsdUNBQVEsR0FBR0ssR0FBRyxDQUFDLEdBQUc7SUFDNUJHLFNBQVNSLHVDQUFRLEdBQUdLLEdBQUcsQ0FBQyxHQUFHLHVCQUF1QkksT0FBTyxDQUFDO0lBQzFEQyxPQUFPVix1Q0FBUSxHQUFHSyxHQUFHLENBQUMsR0FBRztJQUN6Qk0sV0FBV1gsd0NBQVMsR0FBR2EsUUFBUTtBQUNqQyxHQUFHO0FBRUksTUFBTUMsc0JBQXNCYixvQkFBb0JjLE9BQU8sR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYm9uLWVjb21tZXJjZS1iYWNrZW5kLy4vbGliL3ZhbGlkYXRvcnMvYWRkcmVzcy50cz83Mzg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRyZXNzQ3JlYXRlU2NoZW1hID0gei5vYmplY3Qoe1xuICBsYWJlbDogei5zdHJpbmcoKS5taW4oMiwgXCJMZSBsaWJlbGzDqSBlc3QgcmVxdWlzLlwiKSxcbiAgY2l0eTogei5zdHJpbmcoKS5taW4oMiwgXCJMYSB2aWxsZSBlc3QgcmVxdWlzZS5cIiksXG4gIGRpc3RyaWN0OiB6LnN0cmluZygpLm1pbigyLCBcIkxlIHF1YXJ0aWVyIGVzdCByZXF1aXMuXCIpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm1pbigyLCBcIkxlIHBheXMgZXN0IHJlcXVpcy5cIikuZGVmYXVsdChcIkdhYm9uXCIpLFxuICBwaG9uZTogei5zdHJpbmcoKS5taW4oOCwgXCJMZSB0w6lsw6lwaG9uZSBlc3QgcmVxdWlzLlwiKSxcbiAgaXNEZWZhdWx0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZHJlc3NVcGRhdGVTY2hlbWEgPSBhZGRyZXNzQ3JlYXRlU2NoZW1hLnBhcnRpYWwoKTtcbiJdLCJuYW1lcyI6WyJ6IiwiYWRkcmVzc0NyZWF0ZVNjaGVtYSIsIm9iamVjdCIsImxhYmVsIiwic3RyaW5nIiwibWluIiwiY2l0eSIsImRpc3RyaWN0IiwiY291bnRyeSIsImRlZmF1bHQiLCJwaG9uZSIsImlzRGVmYXVsdCIsImJvb2xlYW4iLCJvcHRpb25hbCIsImFkZHJlc3NVcGRhdGVTY2hlbWEiLCJwYXJ0aWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/validators/address.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/uuid","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddresses%2Froute&page=%2Fapi%2Faddresses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddresses%2Froute.ts&appDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fingrid%2FDesktop%2Fproject%2Fecom%2Fgabon%2Fgabon-ecommerce-backend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();