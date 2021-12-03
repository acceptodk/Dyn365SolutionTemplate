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

/***/ "./src/Forms/AccountForm.ts":
/*!**********************************!*\
  !*** ./src/Forms/AccountForm.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountForm\": () => (/* binding */ AccountForm)\n/* harmony export */ });\nvar AccountForm;\n(function (AccountForm) {\n    // Functional way\n    AccountForm.OnLoad = (context) => {\n        alert(\"test\");\n        alert(context.getFormContext().getAttribute(\"name\").getValue());\n        // Create OnChange event on field:\n        context\n            .getFormContext()\n            .getAttribute(\"name\")\n            .addOnChange(() => {\n            console.log(`name changed`);\n        });\n    };\n})(AccountForm || (AccountForm = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvRm9ybXMvQWNjb3VudEZvcm0udHM/ODRhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyxrQ0FBa0MiLCJmaWxlIjoiLi9zcmMvRm9ybXMvQWNjb3VudEZvcm0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEFjY291bnRGb3JtO1xuKGZ1bmN0aW9uIChBY2NvdW50Rm9ybSkge1xuICAgIC8vIEZ1bmN0aW9uYWwgd2F5XG4gICAgQWNjb3VudEZvcm0uT25Mb2FkID0gKGNvbnRleHQpID0+IHtcbiAgICAgICAgYWxlcnQoXCJ0ZXN0XCIpO1xuICAgICAgICBhbGVydChjb250ZXh0LmdldEZvcm1Db250ZXh0KCkuZ2V0QXR0cmlidXRlKFwibmFtZVwiKS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgLy8gQ3JlYXRlIE9uQ2hhbmdlIGV2ZW50IG9uIGZpZWxkOlxuICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAuZ2V0Rm9ybUNvbnRleHQoKVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcIm5hbWVcIilcbiAgICAgICAgICAgIC5hZGRPbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgbmFtZSBjaGFuZ2VkYCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59KShBY2NvdW50Rm9ybSB8fCAoQWNjb3VudEZvcm0gPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Forms/AccountForm.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountForm\": () => (/* reexport safe */ _Forms_AccountForm__WEBPACK_IMPORTED_MODULE_0__.AccountForm)\n/* harmony export */ });\n/* harmony import */ var _Forms_AccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/AccountForm */ \"./src/Forms/AccountForm.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZHMuQ2xpZW50SG9va3MvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFvQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL0Zvcm1zL0FjY291bnRGb3JtXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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