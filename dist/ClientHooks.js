/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var acpto;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Forms/Account.ts":
/*!******************************!*\
  !*** ./src/Forms/Account.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": () => (/* binding */ Account)\n/* harmony export */ });\n/* harmony import */ var _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/WebAPI */ \"./src/Utils/WebAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nvar Account;\n(function (Account) {\n    var Form;\n    (function (Form) {\n        Form.OnLoad = (context) => __awaiter(this, void 0, void 0, function* () {\n            const user = yield _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__.WebAPI.getUserCRMInfo(Xrm.Utility.getGlobalContext().userSettings.userId);\n            // Print user info\n            console.log(user === null || user === void 0 ? void 0 : user.username);\n            console.log(user === null || user === void 0 ? void 0 : user.userBusinessUnitname);\n            console.log(user === null || user === void 0 ? void 0 : user.userid);\n            // Print attribute \"name\"\n            console.log(context.getFormContext().getAttribute(\"name\").getValue());\n            // Create OnChange event on field:\n            context\n                .getFormContext()\n                .getAttribute(\"name\")\n                .addOnChange(() => {\n                console.log(`name changed`);\n            });\n        });\n    })(Form = Account.Form || (Account.Form = {}));\n})(Account || (Account = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3B0by5DbGllbnRIb29rcy8uL3NyYy9Gb3Jtcy9BY2NvdW50LnRzPzQxZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUN5QztBQUNsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdFQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUssMkNBQTJDO0FBQ2hELENBQUMsMEJBQTBCIiwiZmlsZSI6Ii4vc3JjL0Zvcm1zL0FjY291bnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFdlYkFQSSB9IGZyb20gXCIuLi9VdGlscy9XZWJBUElcIjtcbmV4cG9ydCB2YXIgQWNjb3VudDtcbihmdW5jdGlvbiAoQWNjb3VudCkge1xuICAgIHZhciBGb3JtO1xuICAgIChmdW5jdGlvbiAoRm9ybSkge1xuICAgICAgICBGb3JtLk9uTG9hZCA9IChjb250ZXh0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0geWllbGQgV2ViQVBJLmdldFVzZXJDUk1JbmZvKFhybS5VdGlsaXR5LmdldEdsb2JhbENvbnRleHQoKS51c2VyU2V0dGluZ3MudXNlcklkKTtcbiAgICAgICAgICAgIC8vIFByaW50IHVzZXIgaW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci51c2VyQnVzaW5lc3NVbml0bmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIudXNlcmlkKTtcbiAgICAgICAgICAgIC8vIFByaW50IGF0dHJpYnV0ZSBcIm5hbWVcIlxuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGV4dC5nZXRGb3JtQ29udGV4dCgpLmdldEF0dHJpYnV0ZShcIm5hbWVcIikuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgT25DaGFuZ2UgZXZlbnQgb24gZmllbGQ6XG4gICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICAgLmdldEZvcm1Db250ZXh0KClcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgIC5hZGRPbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG5hbWUgY2hhbmdlZGApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pKEZvcm0gPSBBY2NvdW50LkZvcm0gfHwgKEFjY291bnQuRm9ybSA9IHt9KSk7XG59KShBY2NvdW50IHx8IChBY2NvdW50ID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Forms/Account.ts\n");

/***/ }),

/***/ "./src/Forms/Contact.ts":
/*!******************************!*\
  !*** ./src/Forms/Contact.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\nvar Contact;\n(function (Contact) {\n    var Form;\n    (function (Form) {\n        Form.OnLoad = (context) => {\n            debugger;\n            // Print attribute \"firstname\"\n            console.log(context.getFormContext().getAttribute(\"firstname\").getValue());\n        };\n    })(Form = Contact.Form || (Contact.Form = {}));\n})(Contact || (Contact = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3B0by5DbGllbnRIb29rcy8uL3NyYy9Gb3Jtcy9Db250YWN0LnRzP2RhZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkNBQTJDO0FBQ2hELENBQUMsMEJBQTBCIiwiZmlsZSI6Ii4vc3JjL0Zvcm1zL0NvbnRhY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIENvbnRhY3Q7XG4oZnVuY3Rpb24gKENvbnRhY3QpIHtcbiAgICB2YXIgRm9ybTtcbiAgICAoZnVuY3Rpb24gKEZvcm0pIHtcbiAgICAgICAgRm9ybS5PbkxvYWQgPSAoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBQcmludCBhdHRyaWJ1dGUgXCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGV4dC5nZXRGb3JtQ29udGV4dCgpLmdldEF0dHJpYnV0ZShcImZpcnN0bmFtZVwiKS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgfTtcbiAgICB9KShGb3JtID0gQ29udGFjdC5Gb3JtIHx8IChDb250YWN0LkZvcm0gPSB7fSkpO1xufSkoQ29udGFjdCB8fCAoQ29udGFjdCA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Forms/Contact.ts\n");

/***/ }),

/***/ "./src/Utils/WebAPI.ts":
/*!*****************************!*\
  !*** ./src/Utils/WebAPI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebAPI\": () => (/* binding */ WebAPI)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar WebAPI;\n(function (WebAPI) {\n    /**\n     * Get the users detail from CRM\n     * @param userId\n     * @returns userid, username, userBusinessUnitname\n     */\n    WebAPI.getUserCRMInfo = (userId) => __awaiter(this, void 0, void 0, function* () {\n        try {\n            const result = yield Xrm.WebApi.retrieveRecord(\"systemuser\", userId, \"?$select=domainname,_businessunitid_value\");\n            return {\n                userid: result.systemuserid,\n                username: result.domainname.split(\"@\")[0],\n                userBusinessUnitname: result[\"_businessunitid_value@OData.Community.Display.V1.FormattedValue\"],\n            };\n        }\n        catch (e) {\n            console.log(\"error\");\n        }\n    });\n})(WebAPI || (WebAPI = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3B0by5DbGllbnRIb29rcy8uL3NyYy9VdGlscy9XZWJBUEkudHM/YWEwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLHdCQUF3QiIsImZpbGUiOiIuL3NyYy9VdGlscy9XZWJBUEkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB2YXIgV2ViQVBJO1xuKGZ1bmN0aW9uIChXZWJBUEkpIHtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVzZXJzIGRldGFpbCBmcm9tIENSTVxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcmV0dXJucyB1c2VyaWQsIHVzZXJuYW1lLCB1c2VyQnVzaW5lc3NVbml0bmFtZVxuICAgICAqL1xuICAgIFdlYkFQSS5nZXRVc2VyQ1JNSW5mbyA9ICh1c2VySWQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIFhybS5XZWJBcGkucmV0cmlldmVSZWNvcmQoXCJzeXN0ZW11c2VyXCIsIHVzZXJJZCwgXCI/JHNlbGVjdD1kb21haW5uYW1lLF9idXNpbmVzc3VuaXRpZF92YWx1ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcmlkOiByZXN1bHQuc3lzdGVtdXNlcmlkLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXN1bHQuZG9tYWlubmFtZS5zcGxpdChcIkBcIilbMF0sXG4gICAgICAgICAgICAgICAgdXNlckJ1c2luZXNzVW5pdG5hbWU6IHJlc3VsdFtcIl9idXNpbmVzc3VuaXRpZF92YWx1ZUBPRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZVwiXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKFdlYkFQSSB8fCAoV2ViQVBJID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utils/WebAPI.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebAPI\": () => (/* reexport safe */ _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__.WebAPI),\n/* harmony export */   \"Account\": () => (/* reexport safe */ _Forms_Account__WEBPACK_IMPORTED_MODULE_1__.Account),\n/* harmony export */   \"Contact\": () => (/* reexport safe */ _Forms_Contact__WEBPACK_IMPORTED_MODULE_2__.Contact)\n/* harmony export */ });\n/* harmony import */ var _Utils_WebAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/WebAPI */ \"./src/Utils/WebAPI.ts\");\n/* harmony import */ var _Forms_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms/Account */ \"./src/Forms/Account.ts\");\n/* harmony import */ var _Forms_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms/Contact */ \"./src/Forms/Contact.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3B0by5DbGllbnRIb29rcy8uL3NyYy9pbmRleC50cz9lOTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNDO0FBQ0EiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9VdGlscy9XZWJBUElcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm1zL0FjY291bnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm1zL0NvbnRhY3RcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	(acpto = typeof acpto === "undefined" ? {} : acpto).ClientHooks = __webpack_exports__;
/******/ 	
/******/ })()
;