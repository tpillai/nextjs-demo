"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ImageChangeOnScroll = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSpeakerId = ref[0], setCurrentSpeakerId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), mouseEventCnt = ref1[0], setMouseEventCnt = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.document.title = \"SpeakerId: \".concat(currentSpeakerId);\n        console.log(\"useEffect: setting title to \".concat(currentSpeakerId));\n    }, [\n        currentSpeakerId\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"mouseEventCnt: \",\n                    mouseEventCnt\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\AssaiTrain\\\\nextjs-demo\\\\pages\\\\ImageChangeOnScroll.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            [\n                1124,\n                823,\n                187,\n                1269,\n                1530\n            ].map(function(speakerId) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseOver: function() {\n                        setCurrentSpeakerId(speakerId);\n                        setMouseEventCnt(mouseEventCnt + 1);\n                        console.log(\"onMouseOver:\".concat(speakerId));\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                        secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\AssaiTrain\\\\nextjs-demo\\\\pages\\\\ImageChangeOnScroll.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this1)\n                }, speakerId, false, {\n                    fileName: \"C:\\\\AssaiTrain\\\\nextjs-demo\\\\pages\\\\ImageChangeOnScroll.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this1));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\AssaiTrain\\\\nextjs-demo\\\\pages\\\\ImageChangeOnScroll.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(ImageChangeOnScroll, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ1U7OztBQUU1RCxHQUFLLENBQUNJLG1CQUFtQixHQUFHLFFBQzVCLEdBRGtDLENBQUM7OztJQUNqQyxHQUFLLENBQTJDRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFuREcsZ0JBQWdCLEdBQXlCSCxHQUFXLEtBQWxDSSxtQkFBbUIsR0FBSUosR0FBVztJQUMzRCxHQUFLLENBQXFDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Q0ssYUFBYSxHQUFzQkwsSUFBVyxLQUEvQk0sZ0JBQWdCLEdBQUlOLElBQVc7SUFFckRELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZRLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUksQ0FBVyxhQUFtQixPQUFqQk4sZ0JBQWdCO1FBQ3RETyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUE0Qiw4QkFBbUIsT0FBakJSLGdCQUFnQjtJQUM3RCxDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsZ0JBQWdCO0lBQUEsQ0FBQztJQUVyQixNQUFNLDZFQUNIUyxDQUFHOzt3RkFDREMsQ0FBSTs7b0JBQUMsQ0FBZTtvQkFBQ1IsYUFBYTs7Ozs7OztZQUNsQyxDQUFDO0FBQUEsb0JBQUk7QUFBRSxtQkFBRztBQUFFLG1CQUFHO0FBQUUsb0JBQUk7QUFBRSxvQkFBSTtZQUFBLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFLLENBQUM7Z0JBQ2hELE1BQU0sNkVBQ0hILENBQUc7b0JBRUZJLFdBQVcsRUFBRSxRQUN6QixHQUQrQixDQUFDO3dCQUNsQlosbUJBQW1CLENBQUNXLFNBQVM7d0JBQzdCVCxnQkFBZ0IsQ0FBQ0QsYUFBYSxHQUFHLENBQUM7d0JBQ2xDSyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFZLGNBQVksT0FBVkksU0FBUztvQkFDdEMsQ0FBQzswR0FFQWQsZ0VBQW1CO3dCQUNsQmdCLFVBQVUsRUFBRyxDQUE0Qiw4QkFBWSxNQUFJLENBQWRGLFNBQVMsRUFBQyxDQUFJO3dCQUN6REcsWUFBWSxFQUFHLENBQXlCLDJCQUFZLE1BQUksQ0FBZEgsU0FBUyxFQUFDLENBQUk7d0JBQ3hESSxHQUFHLEVBQUMsQ0FBRTs7Ozs7O21CQVZISixTQUFTOzs7OztZQWNwQixDQUFDOzs7Ozs7O0FBR1AsQ0FBQztHQWhDS2IsbUJBQW1CO0tBQW5CQSxtQkFBbUI7QUFrQ3pCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzPzYwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U3BlYWtlcklkLCBzZXRDdXJyZW50U3BlYWtlcklkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW91c2VFdmVudENudCwgc2V0TW91c2VFdmVudENudF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBTcGVha2VySWQ6ICR7Y3VycmVudFNwZWFrZXJJZH1gO1xuICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50U3BlYWtlcklkfWApO1xuICB9LCBbY3VycmVudFNwZWFrZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPm1vdXNlRXZlbnRDbnQ6IHttb3VzZUV2ZW50Q250fTwvc3Bhbj5cbiAgICAgIHtbMTEyNCwgODIzLCAxODcsIDEyNjksIDE1MzBdLm1hcCgoc3BlYWtlcklkKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtzcGVha2VySWR9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XG4gICAgICAgICAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb25Nb3VzZU92ZXI6JHtzcGVha2VySWR9YCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwiY3VycmVudFNwZWFrZXJJZCIsInNldEN1cnJlbnRTcGVha2VySWQiLCJtb3VzZUV2ZW50Q250Iiwic2V0TW91c2VFdmVudENudCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3BhbiIsIm1hcCIsInNwZWFrZXJJZCIsIm9uTW91c2VPdmVyIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

});