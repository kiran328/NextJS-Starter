"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Meetup = (param)=>{\n    let { meetupData } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        image: meetupData === null || meetupData === void 0 ? void 0 : meetupData.image,\n        title: meetupData === null || meetupData === void 0 ? void 0 : meetupData.title,\n        address: meetupData === null || meetupData === void 0 ? void 0 : meetupData.address,\n        description: meetupData === null || meetupData === void 0 ? void 0 : meetupData.description\n    }, void 0, false, {\n        fileName: \"/Users/buzzybrains/Documents/Kiran/NextJS/NextJS01/pages/[meetupId]/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Meetup, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Meetup;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetup);\nvar _c;\n$RefreshReg$(_c, \"Meetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBR3lCO0FBRWpFLE1BQU1FLFNBQVM7UUFBQyxFQUFFQyxVQUFVLEVBQUU7O0lBQzVCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0Msd0VBQVlBO1FBQ1hJLEtBQUssRUFBRUYsdUJBQUFBLGlDQUFBQSxXQUFZRSxLQUFLO1FBQ3hCQyxLQUFLLEVBQUVILHVCQUFBQSxpQ0FBQUEsV0FBWUcsS0FBSztRQUN4QkMsT0FBTyxFQUFFSix1QkFBQUEsaUNBQUFBLFdBQVlJLE9BQU87UUFDNUJDLFdBQVcsRUFBRUwsdUJBQUFBLGlDQUFBQSxXQUFZSyxXQUFXOzs7Ozs7QUFHMUM7R0FYTU47O1FBQ1dGLGtEQUFTQTs7O0tBRHBCRTs7QUFnRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XG5cbmNvbnN0IE1lZXR1cCA9ICh7IG1lZXR1cERhdGEgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgIGltYWdlPXttZWV0dXBEYXRhPy5pbWFnZX1cbiAgICAgIHRpdGxlPXttZWV0dXBEYXRhPy50aXRsZX1cbiAgICAgIGFkZHJlc3M9e21lZXR1cERhdGE/LmFkZHJlc3N9XG4gICAgICBkZXNjcmlwdGlvbj17bWVldHVwRGF0YT8uZGVzY3JpcHRpb259XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgdmFyIHBhc3N3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KFwiS2lyYW4xMjMjQCFcIik7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgYG1vbmdvZGIrc3J2Oi8va2lyYW46JHtwYXNzd29yZH1AY2x1c3RlcjAubGx3eHc0aC5tb25nb2RiLm5ldC9NZWV0dXBBcHA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCh7fSx7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwPT57XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcblxuICBjb25zb2xlLmxvZyhtZWV0dXBJZClcbiAgXG4gIHZhciBwYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChcIktpcmFuMTIzI0AhXCIpO1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIGBtb25nb2RiK3NydjovL2tpcmFuOiR7cGFzc3dvcmR9QGNsdXN0ZXIwLmxsd3h3NGgubW9uZ29kYi5uZXQvTWVldHVwQXBwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuXG4gIGNvbnN0IG1lZXR1cCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogbWVldHVwSWQgfSk7XG5cbiAgY29uc29sZS5sb2cobWVldHVwKVxuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cERhdGE6IG1lZXR1cFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXA7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTWVldHVwRGV0YWlsIiwiTWVldHVwIiwibWVldHVwRGF0YSIsInJvdXRlciIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});