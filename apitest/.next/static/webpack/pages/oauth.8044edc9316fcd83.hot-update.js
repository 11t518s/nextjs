"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/oauth",{

/***/ "./pages/oauth.tsx":
/*!*************************!*\
  !*** ./pages/oauth.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Oauth() {\n    _s();\n    var KAKAO_REST_API_KEY = \"93046265c8631e60335906279547b732\";\n    var KAKAO_CLIENT_SECRET = \"WbpDIk35L4CI99dJA9dNRu5Jqb3LTziz\";\n    var GOOGLE_CLIENT_ID = \"744266603628-ma633v6prfrlvobtun5mtcjtu5d8ntu4.apps.googleusercontent.com\";\n    var GOOGLE_CLIENT_SECRET = \"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\";\n    var REDIRECT_URI = \"http://localhost:3000/oauth\";\n    var kakaoAccessCodeUri = \"https://kauth.kakao.com/oauth/authorize?client_id=\".concat(KAKAO_REST_API_KEY, \"&redirect_uri=\").concat(REDIRECT_URI, \"&response_type=code\");\n    // 카카오 인가 코드를 받고 나서 회원가입 or 로그인 진행\n    var getKakaoToken = function() {\n        var _ref = _asyncToGenerator(_Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var kakaoAccessCode, kakaoAccessToken, access_token;\n            return _Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return new URL(window.location.href).searchParams.get('code');\n                    case 2:\n                        kakaoAccessCode = _ctx.sent;\n                        if (!kakaoAccessCode) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&code=\".concat(kakaoAccessCode, \"&client_id=\").concat(KAKAO_REST_API_KEY, \"&redirect_uri=\").concat(REDIRECT_URI, \"&client_secret=\").concat(KAKAO_CLIENT_SECRET));\n                    case 6:\n                        kakaoAccessToken = _ctx.sent;\n                        console.log(kakaoAccessToken);\n                        access_token = kakaoAccessToken.data.access_token;\n                        _ctx.next = 11;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://15.164.189.187:8080/api/login/kakao', {\n                            access_token: access_token\n                        }, {\n                            withCredentials: true\n                        }).then(function(res) {\n                            return console.log(res);\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getKakaoToken() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getGoogleToken = function() {\n        var _ref = _asyncToGenerator(_Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var googleAccessCode, googleAccessToken, access_token;\n            return _Users_bongsu_Desktop_nextjs_apitest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return new URL(window.location.href).searchParams.get('code');\n                    case 2:\n                        googleAccessCode = _ctx.sent;\n                        console.log(googleAccessCode);\n                        if (!googleAccessCode) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"https://oauth2.googleapis.com/token?code=\".concat(googleAccessCode, \"&client_id=\").concat(GOOGLE_CLIENT_ID, \"&client_secret=\").concat(GOOGLE_CLIENT_SECRET, \"&redirect_uri=\").concat(REDIRECT_URI, \"&grant_type=authorization_code\"));\n                    case 7:\n                        googleAccessToken = _ctx.sent;\n                        access_token = googleAccessToken.data.access_token;\n                        _ctx.next = 11;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://15.164.189.187:8080/api/login/google', {\n                            access_token: access_token\n                        }, {\n                            withCredentials: true\n                        }).then(function(res) {\n                            return console.log(res);\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getGoogleToken() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // getKakaoToken();\n        getGoogleToken();\n    }, []);\n    var GoogleAccessCodeUri = \"https://accounts.google.com/o/oauth2/v2/auth?client_id=\".concat(GOOGLE_CLIENT_ID, \"&redirect_uri=\").concat(REDIRECT_URI, \"&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: kakaoAccessCodeUri,\n                children: \"kakaoLogin here\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/oauth.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"login here\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/oauth.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: GoogleAccessCodeUri,\n                children: \"google login here\"\n            }, void 0, false, {\n                fileName: \"/Users/bongsu/Desktop/nextjs/apitest/pages/oauth.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Oauth, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Oauth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Oauth);\nvar _c;\n$RefreshReg$(_c, \"Oauth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNJLEdBQUc7Ozs7Ozs7UUFFcEMsQ0FBQzt3QkF2QktDLGNBQWM7Ozs7SUF5QnBCakMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFtQjtRQUNuQmlDLGNBQWM7SUFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0csbUJBQW1CLEdBQUksQ0FBdUQseURBQW1DdkIsTUFBWSxDQUE3Q0osZ0JBQWdCLEVBQUMsQ0FBYyxpQkFBZSxNQUF3RSxDQUFyRkksWUFBWSxFQUFDLENBQXdFO0lBRTVNLE1BQU07O3dGQUVEd0IsQ0FBQztnQkFBQ2QsSUFBSSxFQUFFUixrQkFBa0I7MEJBQUUsQ0FBZTs7Ozs7O3dGQUUzQ3VCLENBQUc7MEJBQUMsQ0FBVTs7Ozs7O3dGQUVkRCxDQUFDO2dCQUFDZCxJQUFJLEVBQUVhLG1CQUFtQjswQkFBRSxDQUFpQjs7Ozs7Ozs7QUFHckQsQ0FBQztHQTlFUWxDLEtBQUs7S0FBTEEsS0FBSztBQStFZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29hdXRoLnRzeD9hNGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBPYXV0aCgpIHtcbiAgY29uc3QgS0FLQU9fUkVTVF9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfS0FLQU9fUkVTVEFQSV9LRVk7XG4gIGNvbnN0IEtBS0FPX0NMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19LQUtBT19DTElFTlRfU0VDUkVUO1xuXG4gIGNvbnN0IEdPT0dMRV9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX0lEO1xuICBjb25zdCBHT09HTEVfQ0xJRU5UX1NFQ1JFVCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfU0VDUkVUO1xuXG4gIGNvbnN0IFJFRElSRUNUX1VSSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0tBS0FPX1JFRElSRUNUX1VSSTtcblxuICBjb25zdCBrYWthb0FjY2Vzc0NvZGVVcmkgPSBgaHR0cHM6Ly9rYXV0aC5rYWthby5jb20vb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD0ke0tBS0FPX1JFU1RfQVBJX0tFWX0mcmVkaXJlY3RfdXJpPSR7UkVESVJFQ1RfVVJJfSZyZXNwb25zZV90eXBlPWNvZGVgO1xuXG4gIC8vIOy5tOy5tOyYpCDsnbjqsIAg7L2U65Oc66W8IOuwm+qzoCDrgpjshJwg7ZqM7JuQ6rCA7J6FIG9yIOuhnOq3uOyduCDsp4TtlolcbiAgY29uc3QgZ2V0S2FrYW9Ub2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBrYWthb0FjY2Vzc0NvZGUgPSBhd2FpdCBuZXcgVVJMKFxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgKS5zZWFyY2hQYXJhbXMuZ2V0KCdjb2RlJyk7XG5cbiAgICBpZiAoa2FrYW9BY2Nlc3NDb2RlKSB7XG4gICAgICBjb25zdCBrYWthb0FjY2Vzc1Rva2VuID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYGh0dHBzOi8va2F1dGgua2FrYW8uY29tL29hdXRoL3Rva2VuP2dyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlJmNvZGU9JHtrYWthb0FjY2Vzc0NvZGV9JmNsaWVudF9pZD0ke0tBS0FPX1JFU1RfQVBJX0tFWX0mcmVkaXJlY3RfdXJpPSR7UkVESVJFQ1RfVVJJfSZjbGllbnRfc2VjcmV0PSR7S0FLQU9fQ0xJRU5UX1NFQ1JFVH1gLFxuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2coa2FrYW9BY2Nlc3NUb2tlbik7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHsgYWNjZXNzX3Rva2VuIH0sXG4gICAgICB9ID0ga2FrYW9BY2Nlc3NUb2tlbjtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgICdodHRwOi8vMTUuMTY0LjE4OS4xODc6ODA4MC9hcGkvbG9naW4va2FrYW8nLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRHb29nbGVUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnb29nbGVBY2Nlc3NDb2RlID0gYXdhaXQgbmV3IFVSTChcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICkuc2VhcmNoUGFyYW1zLmdldCgnY29kZScpO1xuICAgIGNvbnNvbGUubG9nKGdvb2dsZUFjY2Vzc0NvZGUpO1xuICAgIGlmIChnb29nbGVBY2Nlc3NDb2RlKSB7XG4gICAgICBjb25zdCBnb29nbGVBY2Nlc3NUb2tlbiA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGBodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbj9jb2RlPSR7Z29vZ2xlQWNjZXNzQ29kZX0mY2xpZW50X2lkPSR7R09PR0xFX0NMSUVOVF9JRH0mY2xpZW50X3NlY3JldD0ke0dPT0dMRV9DTElFTlRfU0VDUkVUfSZyZWRpcmVjdF91cmk9JHtSRURJUkVDVF9VUkl9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBhY2Nlc3NfdG9rZW4gfSxcbiAgICAgIH0gPSBnb29nbGVBY2Nlc3NUb2tlbjtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgICdodHRwOi8vMTUuMTY0LjE4OS4xODc6ODA4MC9hcGkvbG9naW4vZ29vZ2xlJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9LFxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGdldEtha2FvVG9rZW4oKTtcbiAgICBnZXRHb29nbGVUb2tlbigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgR29vZ2xlQWNjZXNzQ29kZVVyaSA9IGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9jbGllbnRfaWQ9JHtHT09HTEVfQ0xJRU5UX0lEfSZyZWRpcmVjdF91cmk9JHtSRURJUkVDVF9VUkl9JnJlc3BvbnNlX3R5cGU9Y29kZSZzY29wZT1odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLmVtYWlsYDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBocmVmPXtrYWthb0FjY2Vzc0NvZGVVcml9Pmtha2FvTG9naW4gaGVyZTwvYT5cblxuICAgICAgPGRpdj5sb2dpbiBoZXJlPC9kaXY+XG5cbiAgICAgIDxhIGhyZWY9e0dvb2dsZUFjY2Vzc0NvZGVVcml9Pmdvb2dsZSBsb2dpbiBoZXJlPC9hPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgT2F1dGg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIk9hdXRoIiwiS0FLQU9fUkVTVF9BUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0tBS0FPX1JFU1RBUElfS0VZIiwiS0FLQU9fQ0xJRU5UX1NFQ1JFVCIsIk5FWFRfUFVCTElDX0tBS0FPX0NMSUVOVF9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJSRURJUkVDVF9VUkkiLCJORVhUX1BVQkxJQ19LQUtBT19SRURJUkVDVF9VUkkiLCJrYWthb0FjY2Vzc0NvZGVVcmkiLCJnZXRLYWthb1Rva2VuIiwia2FrYW9BY2Nlc3NDb2RlIiwia2FrYW9BY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsImdldCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJnZXRHb29nbGVUb2tlbiIsImdvb2dsZUFjY2Vzc0NvZGUiLCJnb29nbGVBY2Nlc3NUb2tlbiIsIkdvb2dsZUFjY2Vzc0NvZGVVcmkiLCJhIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/oauth.tsx\n");

/***/ })

});