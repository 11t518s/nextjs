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
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Test() {\n    const onPostTestHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://apibora.shop/api/board');\n        console.log(response);\n    };\n    const onImgTestHandler = async (url)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('15.164.189.187:8080/', {\n            title: 'string',\n            category: 'free',\n            content: 'string',\n            user: 0\n        });\n        console.log(response);\n    };\n    const onFileChagned = (data)=>{\n        console.log(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onPostTestHandler,\n                children: \"postTestButton\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onImgTestHandler,\n                children: \"ImgTestButton\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: (data)=>onFileChagned(data)\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNBO1NBRWhCRSxJQUFJLEdBQUcsQ0FBQztJQUNmLEtBQUssQ0FBQ0MsaUJBQWlCLGFBQWUsQ0FBQztRQUNyQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNILGdEQUFTLENBQUMsQ0FBZ0M7UUFDakVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRO0lBQ3RCLENBQUM7SUFDRCxLQUFLLENBQUNJLGdCQUFnQixVQUFVQyxHQUFHLEdBQUssQ0FBQztRQUN2QyxLQUFLLENBQUNMLFFBQVEsR0FBRyxLQUFLLENBQUNILGlEQUFVLENBQUMsQ0FBc0IsdUJBQUUsQ0FBQztZQUN6RFUsS0FBSyxFQUFFLENBQVE7WUFDZkMsUUFBUSxFQUFFLENBQU07WUFDaEJDLE9BQU8sRUFBRSxDQUFRO1lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUM7UUFFRFIsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVE7SUFDdEIsQ0FBQztJQUNELEtBQUssQ0FBQ1csYUFBYSxJQUFJQyxJQUFJLEdBQUssQ0FBQztRQUMvQlYsT0FBTyxDQUFDQyxHQUFHLENBQUNTLElBQUk7SUFDbEIsQ0FBQztJQUNELE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVoQixpQkFBaUI7MEJBQUUsQ0FBYzs7Ozs7O3dGQUNqRGUsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFWCxnQkFBZ0I7MEJBQUUsQ0FBYTs7Ozs7O3dGQUMvQ1ksQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsR0FBR04sSUFBSSxHQUFLRCxhQUFhLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OztBQUcvRCxDQUFDO0FBRUQsaUVBQWVkLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaXRlc3QvLi9wYWdlcy90ZXN0LnRzeD83YTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBUZXN0KCkge1xuICBjb25zdCBvblBvc3RUZXN0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGlib3JhLnNob3AvYXBpL2JvYXJkJyk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9O1xuICBjb25zdCBvbkltZ1Rlc3RIYW5kbGVyID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnMTUuMTY0LjE4OS4xODc6ODA4MC8nLCB7XG4gICAgICB0aXRsZTogJ3N0cmluZycsXG4gICAgICBjYXRlZ29yeTogJ2ZyZWUnLFxuICAgICAgY29udGVudDogJ3N0cmluZycsXG4gICAgICB1c2VyOiAwLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9O1xuICBjb25zdCBvbkZpbGVDaGFnbmVkID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblBvc3RUZXN0SGFuZGxlcn0+cG9zdFRlc3RCdXR0b248L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25JbWdUZXN0SGFuZGxlcn0+SW1nVGVzdEJ1dHRvbjwvYnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhkYXRhKSA9PiBvbkZpbGVDaGFnbmVkKGRhdGEpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJUZXN0Iiwib25Qb3N0VGVzdEhhbmRsZXIiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJvbkltZ1Rlc3RIYW5kbGVyIiwidXJsIiwicG9zdCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJjb250ZW50IiwidXNlciIsIm9uRmlsZUNoYWduZWQiLCJkYXRhIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.tsx"));
module.exports = __webpack_exports__;

})();