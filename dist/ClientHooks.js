/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cds;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Forms/Account.ts":
/*!******************************!*\
  !*** ./src/Forms/Account.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": () => (/* binding */ Account)\n/* harmony export */ });\n/* harmony import */ var _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/WebAPI */ \"./src/Utils/WebAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nvar Account;\n(function (Account) {\n    var Form;\n    (function (Form) {\n        Form.OnLoad = (context) => __awaiter(this, void 0, void 0, function* () {\n            const user = yield _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__.WebAPI.getUserCRMInfo(Xrm.Utility.getGlobalContext().userSettings.userId);\n            // Print user info\n            console.log(user === null || user === void 0 ? void 0 : user.username);\n            console.log(user === null || user === void 0 ? void 0 : user.userBusinessUnitname);\n            console.log(user === null || user === void 0 ? void 0 : user.userid);\n            // Print attribute \"name\"\n            console.log(context.getFormContext().getAttribute(\"name\").getValue());\n            // Create OnChange event on field:\n            context\n                .getFormContext()\n                .getAttribute(\"name\")\n                .addOnChange(() => {\n                console.log(`name changed`);\n            });\n        });\n    })(Form = Account.Form || (Account.Form = {}));\n})(Account || (Account = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvRm9ybXMvQWNjb3VudC50cz80MWVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDeUM7QUFDbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnRUFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLLDJDQUEyQztBQUNoRCxDQUFDLDBCQUEwQiIsImZpbGUiOiIuL3NyYy9Gb3Jtcy9BY2NvdW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBXZWJBUEkgfSBmcm9tIFwiLi4vVXRpbHMvV2ViQVBJXCI7XG5leHBvcnQgdmFyIEFjY291bnQ7XG4oZnVuY3Rpb24gKEFjY291bnQpIHtcbiAgICB2YXIgRm9ybTtcbiAgICAoZnVuY3Rpb24gKEZvcm0pIHtcbiAgICAgICAgRm9ybS5PbkxvYWQgPSAoY29udGV4dCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHlpZWxkIFdlYkFQSS5nZXRVc2VyQ1JNSW5mbyhYcm0uVXRpbGl0eS5nZXRHbG9iYWxDb250ZXh0KCkudXNlclNldHRpbmdzLnVzZXJJZCk7XG4gICAgICAgICAgICAvLyBQcmludCB1c2VyIGluZm9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci51c2VybmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIudXNlckJ1c2luZXNzVW5pdG5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJpZCk7XG4gICAgICAgICAgICAvLyBQcmludCBhdHRyaWJ1dGUgXCJuYW1lXCJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIE9uQ2hhbmdlIGV2ZW50IG9uIGZpZWxkOlxuICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgICAgIC5nZXRGb3JtQ29udGV4dCgpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAuYWRkT25DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBuYW1lIGNoYW5nZWRgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KShGb3JtID0gQWNjb3VudC5Gb3JtIHx8IChBY2NvdW50LkZvcm0gPSB7fSkpO1xufSkoQWNjb3VudCB8fCAoQWNjb3VudCA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Forms/Account.ts\n");

/***/ }),

/***/ "./src/Utils/WebAPI.ts":
/*!*****************************!*\
  !*** ./src/Utils/WebAPI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebAPI\": () => (/* binding */ WebAPI)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar WebAPI;\n(function (WebAPI) {\n    /**\n     * Get the users detail from CRM\n     * @param userId\n     * @returns userid, username, userBusinessUnitname\n     */\n    WebAPI.getUserCRMInfo = (userId) => __awaiter(this, void 0, void 0, function* () {\n        try {\n            const result = yield Xrm.WebApi.retrieveRecord(\"systemuser\", userId, \"?$select=domainname,_businessunitid_value\");\n            return {\n                userid: result.systemuserid,\n                username: result.domainname.split(\"@\")[0],\n                userBusinessUnitname: result[\"_businessunitid_value@OData.Community.Display.V1.FormattedValue\"],\n            };\n        }\n        catch (e) {\n            console.log(\"error\");\n        }\n    });\n})(WebAPI || (WebAPI = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvVXRpbHMvV2ViQVBJLnRzP2FhMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyx3QkFBd0IiLCJmaWxlIjoiLi9zcmMvVXRpbHMvV2ViQVBJLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgdmFyIFdlYkFQSTtcbihmdW5jdGlvbiAoV2ViQVBJKSB7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VycyBkZXRhaWwgZnJvbSBDUk1cbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHJldHVybnMgdXNlcmlkLCB1c2VybmFtZSwgdXNlckJ1c2luZXNzVW5pdG5hbWVcbiAgICAgKi9cbiAgICBXZWJBUEkuZ2V0VXNlckNSTUluZm8gPSAodXNlcklkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBYcm0uV2ViQXBpLnJldHJpZXZlUmVjb3JkKFwic3lzdGVtdXNlclwiLCB1c2VySWQsIFwiPyRzZWxlY3Q9ZG9tYWlubmFtZSxfYnVzaW5lc3N1bml0aWRfdmFsdWVcIik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXJpZDogcmVzdWx0LnN5c3RlbXVzZXJpZCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LmRvbWFpbm5hbWUuc3BsaXQoXCJAXCIpWzBdLFxuICAgICAgICAgICAgICAgIHVzZXJCdXNpbmVzc1VuaXRuYW1lOiByZXN1bHRbXCJfYnVzaW5lc3N1bml0aWRfdmFsdWVAT0RhdGEuQ29tbXVuaXR5LkRpc3BsYXkuVjEuRm9ybWF0dGVkVmFsdWVcIl0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KShXZWJBUEkgfHwgKFdlYkFQSSA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utils/WebAPI.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebAPI\": () => (/* reexport safe */ _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__.WebAPI),\n/* harmony export */   \"Account\": () => (/* reexport safe */ _Forms_Account__WEBPACK_IMPORTED_MODULE_1__.Account)\n/* harmony export */ });\n/* harmony import */ var _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/WebAPI */ \"./src/Utils/WebAPI.ts\");\n/* harmony import */ var _Forms_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms/Account */ \"./src/Forms/Account.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBQ0MiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9VdGlscy9XZWJBUElcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm1zL0FjY291bnRcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	(cds = typeof cds === "undefined" ? {} : cds).ClientHooks = __webpack_exports__;
/******/ 	
/******/ })()
;