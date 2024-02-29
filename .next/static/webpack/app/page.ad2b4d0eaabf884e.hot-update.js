"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/EmailSection.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/EmailSection.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/send\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        if (response.status === 200) {\n            console.log(\"Message sent.\");\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"socials flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"github.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"linkedin.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"Linkedin Icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: emailSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-green-500 text-sm mt-2\",\n                    children: \"Email sent successfully!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"tasmiya\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"subject\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Just saying hi\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\portfolio\\\\nextjs-portfolio\\\\src\\\\app\\\\components\\\\EmailSection.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmailSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = EmailSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FbWFpbFNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNpQjtBQUNJO0FBQ2hDO0FBQ0U7QUFFL0IsTUFBTU0sZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNUSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU87WUFDWEMsT0FBT0gsRUFBRUksTUFBTSxDQUFDRCxLQUFLLENBQUNFLEtBQUs7WUFDM0JDLFNBQVNOLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRCxLQUFLO1lBQy9CRSxTQUFTUCxFQUFFSSxNQUFNLENBQUNHLE9BQU8sQ0FBQ0YsS0FBSztRQUNqQztRQUNBLE1BQU1HLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ1I7UUFDaEMsTUFBTVMsV0FBVztRQUVqQixtREFBbUQ7UUFDbkQsTUFBTUMsVUFBVTtZQUNkLGtEQUFrRDtZQUNsREMsUUFBUTtZQUNSLHNDQUFzQztZQUN0Q0MsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQSx5REFBeUQ7WUFDekRDLE1BQU1QO1FBQ1I7UUFFQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU1OLFVBQVVDO1FBQ3ZDLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtRQUVuQyxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztZQUMzQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1p4QixrQkFBa0I7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFDQ0MsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FHbEQsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFDVjs0QkFBSTs7Ozs7OztrQ0FLUCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDL0Isa0RBQUlBO2dDQUFDbUMsTUFBSzswQ0FDVCw0RUFBQ2xDLG1EQUFLQTtvQ0FBQ21DLEtBQUt0QywrREFBVUE7b0NBQUV1QyxLQUFJOzs7Ozs7Ozs7OzswQ0FFOUIsOERBQUNyQyxrREFBSUE7Z0NBQUNtQyxNQUFLOzBDQUNULDRFQUFDbEMsbURBQUtBO29DQUFDbUMsS0FBS3JDLGlFQUFZQTtvQ0FBRXNDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQyw4REFBQ0w7MEJBQ0U3QiwrQkFDQyw4REFBQytCO29CQUFFSCxXQUFVOzhCQUE4Qjs7Ozs7OENBSTNDLDhEQUFDTztvQkFBS1AsV0FBVTtvQkFBZ0JRLFVBQVVsQzs7c0NBQ3hDLDhEQUFDMkI7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTGQsSUFBRztvQ0FDSGUsUUFBUTtvQ0FDUmQsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTGQsSUFBRztvQ0FDSGUsUUFBUTtvQ0FDUmQsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDZ0I7b0NBQ0NKLE1BQUs7b0NBQ0xiLElBQUc7b0NBQ0hDLFdBQVU7b0NBQ1ZlLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNFOzRCQUNDSixNQUFLOzRCQUNMYixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBM0hNN0I7S0FBQUE7QUE2SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0VtYWlsU2VjdGlvbi5qc3g/NDliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZ2l0aHViLWljb24uc3ZnXCI7XHJcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9saW5rZWRpbi1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgRW1haWxTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbFN1Ym1pdHRlZCwgc2V0RW1haWxTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgICBzdWJqZWN0OiBlLnRhcmdldC5zdWJqZWN0LnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiBlLnRhcmdldC5tZXNzYWdlLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IEpTT05kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiL2FwaS9zZW5kXCI7XHJcblxyXG4gICAgLy8gRm9ybSB0aGUgcmVxdWVzdCBmb3Igc2VuZGluZyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAvLyBUaGUgbWV0aG9kIGlzIFBPU1QgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBkYXRhLlxyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAvLyBUZWxsIHRoZSBzZXJ2ZXIgd2UncmUgc2VuZGluZyBKU09OLlxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIEJvZHkgb2YgdGhlIHJlcXVlc3QgaXMgdGhlIEpTT04gZGF0YSB3ZSBjcmVhdGVkIGFib3ZlLlxyXG4gICAgICBib2R5OiBKU09OZGF0YSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2Ugc2VudC5cIik7XHJcbiAgICAgIHNldEVtYWlsU3VibWl0dGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBpZD1cImNvbnRhY3RcIlxyXG4gICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIG15LTEyIG1kOm15LTEyIHB5LTI0IGdhcC00IHJlbGF0aXZlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfY2VudGVyLF92YXIoLS10dy1ncmFkaWVudC1zdG9wcykpXSBmcm9tLXByaW1hcnktOTAwIHRvLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBoLTgwIHctODAgei0wIGJsdXItbGcgYWJzb2x1dGUgdG9wLTMvNCAtbGVmdC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUtMS8yXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMFwiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG15LTJcIj5cclxuICAgICAgICAgIExldCZhcG9zO3MgQ29ubmVjdFxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV0gbWItNCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgSSZhcG9zO20gY3VycmVudGx5IGxvb2tpbmcgZm9yIG5ldyBvcHBvcnR1bml0aWVzLCBteSBpbmJveCBpcyBhbHdheXNcclxuICAgICAgICAgIG9wZW4uIFdoZXRoZXIgeW91IGhhdmUgYSBxdWVzdGlvbiBvciBqdXN0IHdhbnQgdG8gc2F5IGhpLCBJJmFwb3M7bGxcclxuICAgICAgICAgIHRyeSBteSBiZXN0IHRvIGdldCBiYWNrIHRvIHlvdSFcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxzIGZsZXggZmxleC1yb3cgZ2FwLTJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJnaXRodWIuY29tXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0dpdGh1Ykljb259IGFsdD1cIkdpdGh1YiBJY29uXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJsaW5rZWRpbi5jb21cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17TGlua2VkaW5JY29ufSBhbHQ9XCJMaW5rZWRpbiBJY29uXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2VtYWlsU3VibWl0dGVkID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgdGV4dC1zbSBtdC0yXCI+XHJcbiAgICAgICAgICAgIEVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxODE5MUVdIGJvcmRlciBib3JkZXItWyMzMzM1M0ZdIHBsYWNlaG9sZGVyLVsjOUNBMkE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXNtaXlhXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3ViamVjdFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVzdCBzYXlpbmcgaGlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgdGV4dC1zbSBtYi0yIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MTkxRV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gcGxhY2Vob2xkZXItWyM5Q0EyQTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxldCdzIHRhbGsgYWJvdXQuLi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS01MDAgaG92ZXI6YmctcHJpbWFyeS02MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBweS0yLjUgcHgtNSByb3VuZGVkLWxnIHctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHaXRodWJJY29uIiwiTGlua2VkaW5JY29uIiwiTGluayIsIkltYWdlIiwiRW1haWxTZWN0aW9uIiwiZW1haWxTdWJtaXR0ZWQiLCJzZXRFbWFpbFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJlbWFpbCIsInRhcmdldCIsInZhbHVlIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJKU09OZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNEYXRhIiwianNvbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJoNSIsInAiLCJocmVmIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EmailSection.jsx\n"));

/***/ })

});