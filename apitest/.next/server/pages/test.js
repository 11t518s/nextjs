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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Test() {\n    const { 0: apiTest , 1: setApiTest  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const onPostTestHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://15.164.189.187:8080/api/board/14');\n        console.log(response);\n    };\n    const test = ()=>{\n        console.log('test');\n    };\n    const onFileChagned = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        const img = await e.target.files[0];\n        await formData.append('image', img);\n        formData.append('title', 'asdasdasd');\n        formData.append('category', 'free');\n        formData.append('user', '1');\n        formData.append('tag', 'ENFP');\n        formData.append('content', 'asdf');\n        console.log(formData);\n        await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://15.164.189.187:8080/api/board', formData, {\n            headers: {\n                'Content-Type': 'multipart/form-data'\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"asdfasdf\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: (data)=>onFileChagned(data)\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onPostTestHandler,\n                children: \"111111111\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/test.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNkO1NBRWhCRyxJQUFJLEdBQUcsQ0FBQztJQUNmLEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlKLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpDLEtBQUssQ0FBQ0ssaUJBQWlCLGFBQWUsQ0FBQztRQUNyQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNMLGdEQUFTLENBQUMsQ0FBeUM7UUFDMUVPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUNJLElBQUksT0FBUyxDQUFDO1FBQ2xCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUNFLGFBQWEsVUFBVUMsQ0FBTSxHQUFLLENBQUM7UUFDdkNBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQixLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNDLFFBQVE7UUFDN0IsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDSixRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFPLFFBQUVILEdBQUc7UUFDbENGLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDLENBQU8sUUFBRSxDQUFXO1FBQ3BDTCxRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFVLFdBQUUsQ0FBTTtRQUNsQ0wsUUFBUSxDQUFDSyxNQUFNLENBQUMsQ0FBTSxPQUFFLENBQUc7UUFDM0JMLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDLENBQUssTUFBRSxDQUFNO1FBQzdCTCxRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFTLFVBQUUsQ0FBTTtRQUNqQ1gsT0FBTyxDQUFDQyxHQUFHLENBQUNLLFFBQVE7UUFFcEIsS0FBSyxDQUFDYixpREFBVSxDQUFDLENBQXNDLHVDQUFFYSxRQUFRLEVBQUUsQ0FBQztZQUNsRU8sT0FBTyxFQUFFLENBQUM7Z0JBQ1IsQ0FBYyxlQUFFLENBQXFCO1lBQ3ZDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07O3dGQUdEQyxDQUFNOzBCQUFDLENBQVE7Ozs7Ozt3RkFDZkMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsR0FBR0MsSUFBSSxHQUFLZixhQUFhLENBQUNlLElBQUk7Ozs7Ozt3RkFDeERILENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFROzs7Ozs7d0ZBRW5CRixDQUFNO2dCQUFDSyxPQUFPLEVBQUV0QixpQkFBaUI7MEJBQUUsQ0FBUzs7Ozs7Ozs7QUFHbkQsQ0FBQztBQUVELGlFQUFlSCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGl0ZXN0Ly4vcGFnZXMvdGVzdC50c3g/N2ExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBUZXN0KCkge1xuICBjb25zdCBbYXBpVGVzdCwgc2V0QXBpVGVzdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3Qgb25Qb3N0VGVzdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xNS4xNjQuMTg5LjE4Nzo4MDgwL2FwaS9ib2FyZC8xNCcpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgfTtcblxuICBjb25zdCB0ZXN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gIH07XG5cbiAgY29uc3Qgb25GaWxlQ2hhZ25lZCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjb25zdCBpbWcgPSBhd2FpdCBlLnRhcmdldC5maWxlc1swXTtcbiAgICBhd2FpdCBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1nKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgJ2FzZGFzZGFzZCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCAnZnJlZScpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcicsICcxJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0YWcnLCAnRU5GUCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsICdhc2RmJyk7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuXG4gICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzE1LjE2NC4xODkuMTg3OjgwODAvYXBpL2JvYXJkJywgZm9ybURhdGEsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKjxmb3JtPiovfVxuICAgICAgPGJ1dHRvbj5hc2RmYXNkZjwvYnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhkYXRhKSA9PiBvbkZpbGVDaGFnbmVkKGRhdGEpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgey8qPC9mb3JtPiovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblBvc3RUZXN0SGFuZGxlcn0+MTExMTExMTExPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiVGVzdCIsImFwaVRlc3QiLCJzZXRBcGlUZXN0Iiwib25Qb3N0VGVzdEhhbmRsZXIiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0Iiwib25GaWxlQ2hhZ25lZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpbWciLCJ0YXJnZXQiLCJmaWxlcyIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwiYnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJkYXRhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

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