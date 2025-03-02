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

/***/ "(app-pages-browser)/./components/Flow.jsx":
/*!*****************************!*\
  !*** ./components/Flow.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _xyflow_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xyflow/react */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/esm/index.js\");\n/* harmony import */ var _xyflow_react_dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xyflow/react/dist/style.css */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomNode */ \"(app-pages-browser)/./components/CustomNode.jsx\");\n/* harmony import */ var _CustomEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomEdge */ \"(app-pages-browser)/./components/CustomEdge.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst STORAGE_KEY = 'react-flow-data';\nconst initNodes = [\n    {\n        id: '1',\n        position: {\n            x: 100,\n            y: 100\n        },\n        data: {\n            label: 'Node 1'\n        },\n        type: 'custom'\n    },\n    {\n        id: '2',\n        position: {\n            x: 300,\n            y: 200\n        },\n        data: {\n            label: 'Node 2'\n        },\n        type: 'custom'\n    }\n];\nconst initEdges = [\n    {\n        id: '1-2',\n        source: '1',\n        target: '2',\n        type: 'custom',\n        animated: true,\n        data: {}\n    }\n];\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState)(initNodes);\n    const [edges, setEdges, onEdgesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)(initEdges);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const savedData = localStorage.getItem(STORAGE_KEY);\n            if (savedData) {\n                const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedData);\n                setNodes(savedNodes);\n                setEdges(savedEdges);\n            } else {\n                setNodes(initNodes);\n                setEdges(initEdges);\n            }\n        }\n    }[\"Flow.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const flowData = JSON.stringify({\n                nodes,\n                edges\n            });\n            localStorage.setItem(STORAGE_KEY, flowData);\n        }\n    }[\"Flow.useEffect\"], [\n        nodes,\n        edges\n    ]);\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)({\n        \"Flow.useCallback[onConnect]\": (connection)=>{\n            setEdges({\n                \"Flow.useCallback[onConnect]\": (eds)=>[\n                        ...eds,\n                        {\n                            id: \"\".concat(connection.source, \"-\").concat(connection.target),\n                            source: connection.source,\n                            target: connection.target,\n                            type: 'custom',\n                            animated: true,\n                            data: {\n                                onRemove: handleRemoveEdge\n                            }\n                        }\n                    ]\n            }[\"Flow.useCallback[onConnect]\"]);\n        }\n    }[\"Flow.useCallback[onConnect]\"], []);\n    const handleRemoveNode = (nodeId)=>{\n        setNodes((nds)=>nds.filter((node)=>node.id !== nodeId));\n        setEdges((eds)=>eds.filter((edge)=>edge.source !== nodeId && edge.target !== nodeId));\n    };\n    const handleRemoveEdge = (edgeId)=>{\n        setEdges((eds)=>eds.filter((edge)=>edge.id !== edgeId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen\",\n        children: [\n            nodes.length == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-full h-full flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute z-10 p-4 w-96  rounded-xl text-black bg-white border border-2-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block font-bold\",\n                                    children: \"Node Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter your Node\",\n                                    className: \"border w-full block border-2-black p-3 text-center rounded-xl mb-2\",\n                                    type: \"text\",\n                                    onChange: (e)=>{\n                                        console.log(e.target.value);\n                                        setNewNode({\n                                            ...newnode,\n                                            data: {\n                                                label: e.target.value\n                                            }\n                                        });\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border w-full block border-2-black p-3 text-center rounded-xl mb-2 bg-black text-white\",\n                            children: \"Add Node\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border w-full block border-2-black p-3 text-black  text-center rounded-xl\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                lineNumber: 74,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.ReactFlow, {\n                nodes: nodes.map((node)=>({\n                        ...node,\n                        data: {\n                            ...node.data,\n                            onRemove: handleRemoveNode\n                        }\n                    })),\n                edges: edges.map((edge)=>({\n                        ...edge,\n                        data: {\n                            ...edge.data,\n                            onRemove: handleRemoveEdge\n                        }\n                    })),\n                onNodesChange: onNodesChange,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                fitView: true,\n                nodeTypes: {\n                    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                },\n                edgeTypes: {\n                    custom: _CustomEdge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Background, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Controls, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"Ag4vU3RMfZ5UvDtrXGYMDRMIEas=\", false, function() {\n    return [\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState,\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN3QyxLQUFLO3dDQUMxQkMsV0FBVzs0Q0FBRSxHQUFHQyxPQUFPOzRDQUFFL0MsTUFBTTtnREFBRUMsT0FBT3lDLEVBQUVyQyxNQUFNLENBQUN3QyxLQUFLOzRDQUFDO3dDQUFFO29DQUMzRDs7Ozs7Ozs7Ozs7O3NDQUdKLDhEQUFDRzs0QkFDQ1gsV0FBVTtzQ0FFWDs7Ozs7O3NDQUdELDhEQUFDVzs0QkFDQ1gsV0FBVTtzQ0FFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTUgsOERBQUNyRCxvREFBU0E7Z0JBQ1J3QixPQUFPQSxNQUFNeUMsR0FBRyxDQUFDLENBQUNoQixPQUFVO3dCQUMxQixHQUFHQSxJQUFJO3dCQUNQakMsTUFBTTs0QkFBRSxHQUFHaUMsS0FBS2pDLElBQUk7NEJBQUUyQixVQUFVRTt3QkFBaUI7b0JBQ25EO2dCQUNBbEIsT0FBT0EsTUFBTXNDLEdBQUcsQ0FBQyxDQUFDZixPQUFVO3dCQUMxQixHQUFHQSxJQUFJO3dCQUNQbEMsTUFBTTs0QkFBRSxHQUFHa0MsS0FBS2xDLElBQUk7NEJBQUUyQixVQUFVQzt3QkFBaUI7b0JBQ25EO2dCQUNBbEIsZUFBZUE7Z0JBQ2ZHLGVBQWVBO2dCQUNmVyxXQUFXQTtnQkFDWDBCLE9BQU87Z0JBQ1BDLFdBQVc7b0JBQUVDLFFBQVE1RCxtREFBVUE7Z0JBQUM7Z0JBQ2hDNkQsV0FBVztvQkFBRUQsUUFBUTNELG1EQUFVQTtnQkFBQzs7a0NBRWhDLDhEQUFDUCxxREFBVUE7Ozs7O2tDQUNYLDhEQUFDRCxtREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBeEdTc0I7O1FBRWtDcEIsd0RBQWFBO1FBQ2JDLHdEQUFhQTs7O0tBSC9DbUI7QUEwR1QsaUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VyeWFcXERvd25sb2Fkc1xcRmlsZXNcXFZTY29kZVxcc3VwZXJ2YWlzb3JfdGFza1xcY29tcG9uZW50c1xcRmxvdy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgUmVhY3RGbG93LCBDb250cm9scywgQmFja2dyb3VuZCwgdXNlTm9kZXNTdGF0ZSwgdXNlRWRnZXNTdGF0ZSB9IGZyb20gJ0B4eWZsb3cvcmVhY3QnO1xyXG5pbXBvcnQgJ0B4eWZsb3cvcmVhY3QvZGlzdC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbU5vZGUgZnJvbSAnLi9DdXN0b21Ob2RlJztcclxuaW1wb3J0IEN1c3RvbUVkZ2UgZnJvbSAnLi9DdXN0b21FZGdlJztcclxuXHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdyZWFjdC1mbG93LWRhdGEnO1xyXG5cclxuXHJcbmNvbnN0IGluaXROb2RlcyA9IFtcclxuICB7IGlkOiAnMScsIHBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sIGRhdGE6IHsgbGFiZWw6ICdOb2RlIDEnIH0sIHR5cGU6ICdjdXN0b20nIH0sXHJcbiAgeyBpZDogJzInLCBwb3NpdGlvbjogeyB4OiAzMDAsIHk6IDIwMCB9LCBkYXRhOiB7IGxhYmVsOiAnTm9kZSAyJyB9LCB0eXBlOiAnY3VzdG9tJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgaW5pdEVkZ2VzID0gW1xyXG4gIHsgaWQ6ICcxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicsIHR5cGU6ICdjdXN0b20nLCBhbmltYXRlZDogdHJ1ZSwgZGF0YToge30gfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEZsb3coKSB7XHJcblxyXG4gIGNvbnN0IFtub2Rlcywgc2V0Tm9kZXMsIG9uTm9kZXNDaGFuZ2VdID0gdXNlTm9kZXNTdGF0ZShpbml0Tm9kZXMpO1xyXG4gIGNvbnN0IFtlZGdlcywgc2V0RWRnZXMsIG9uRWRnZXNDaGFuZ2VdID0gdXNlRWRnZXNTdGF0ZShpbml0RWRnZXMpO1xyXG5cclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICBpZiAoc2F2ZWREYXRhKSB7XHJcbiAgICBjb25zdCB7IG5vZGVzOiBzYXZlZE5vZGVzLCBlZGdlczogc2F2ZWRFZGdlcyB9ID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xyXG4gICAgc2V0Tm9kZXMoc2F2ZWROb2Rlcyk7XHJcbiAgICBzZXRFZGdlcyhzYXZlZEVkZ2VzKTtcclxuICB9IGVsc2Uge1xyXG4gICBcclxuICAgIHNldE5vZGVzKGluaXROb2Rlcyk7XHJcbiAgICBzZXRFZGdlcyhpbml0RWRnZXMpO1xyXG4gIH1cclxufSwgW10pO1xyXG5cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc3QgZmxvd0RhdGEgPSBKU09OLnN0cmluZ2lmeSh7IG5vZGVzLCBlZGdlcyB9KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZmxvd0RhdGEpO1xyXG59LCBbbm9kZXMsIGVkZ2VzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKChjb25uZWN0aW9uKSA9PiB7XHJcbiAgICBzZXRFZGdlcygoZWRzKSA9PiBbXHJcbiAgICAgIC4uLmVkcyxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBgJHtjb25uZWN0aW9uLnNvdXJjZX0tJHtjb25uZWN0aW9uLnRhcmdldH1gLFxyXG4gICAgICAgIHNvdXJjZTogY29ubmVjdGlvbi5zb3VyY2UsXHJcbiAgICAgICAgdGFyZ2V0OiBjb25uZWN0aW9uLnRhcmdldCxcclxuICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7IG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVFZGdlIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVOb2RlID0gKG5vZGVJZCkgPT4ge1xyXG4gICAgc2V0Tm9kZXMoKG5kcykgPT4gbmRzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5pZCAhPT0gbm9kZUlkKSk7XHJcbiAgICBzZXRFZGdlcygoZWRzKSA9PiBlZHMuZmlsdGVyKChlZGdlKSA9PiBlZGdlLnNvdXJjZSAhPT0gbm9kZUlkICYmIGVkZ2UudGFyZ2V0ICE9PSBub2RlSWQpKTtcclxuICB9O1xyXG5cclxuICBcclxuICBjb25zdCBoYW5kbGVSZW1vdmVFZGdlID0gKGVkZ2VJZCkgPT4ge1xyXG4gICAgc2V0RWRnZXMoKGVkcykgPT4gZWRzLmZpbHRlcigoZWRnZSkgPT4gZWRnZS5pZCAhPT0gZWRnZUlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cclxuICAgICAge25vZGVzLmxlbmd0aD09MCYmKDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHAtNCB3LTk2ICByb3VuZGVkLXhsIHRleHQtYmxhY2sgYmctd2hpdGUgYm9yZGVyIGJvcmRlci0yLWJsYWNrXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LWJvbGRcIj5Ob2RlIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBOb2RlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCBibG9jayBib3JkZXItMi1ibGFjayBwLTMgdGV4dC1jZW50ZXIgcm91bmRlZC14bCBtYi0yXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgc2V0TmV3Tm9kZSh7IC4uLm5ld25vZGUsIGRhdGE6IHsgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgYmxvY2sgYm9yZGVyLTItYmxhY2sgcC0zIHRleHQtY2VudGVyIHJvdW5kZWQteGwgbWItMiBiZy1ibGFjayB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgTm9kZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgYmxvY2sgYm9yZGVyLTItYmxhY2sgcC0zIHRleHQtYmxhY2sgIHRleHQtY2VudGVyIHJvdW5kZWQteGxcIlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4pfVxyXG4gICAgICBcclxuICAgICAgPFJlYWN0Rmxvd1xyXG4gICAgICAgIG5vZGVzPXtub2Rlcy5tYXAoKG5vZGUpID0+ICh7XHJcbiAgICAgICAgICAuLi5ub2RlLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5ub2RlLmRhdGEsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVOb2RlIH0sXHJcbiAgICAgICAgfSkpfVxyXG4gICAgICAgIGVkZ2VzPXtlZGdlcy5tYXAoKGVkZ2UpID0+ICh7XHJcbiAgICAgICAgICAuLi5lZGdlLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5lZGdlLmRhdGEsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVFZGdlIH0sXHJcbiAgICAgICAgfSkpfVxyXG4gICAgICAgIG9uTm9kZXNDaGFuZ2U9e29uTm9kZXNDaGFuZ2V9XHJcbiAgICAgICAgb25FZGdlc0NoYW5nZT17b25FZGdlc0NoYW5nZX1cclxuICAgICAgICBvbkNvbm5lY3Q9e29uQ29ubmVjdH1cclxuICAgICAgICBmaXRWaWV3XHJcbiAgICAgICAgbm9kZVR5cGVzPXt7IGN1c3RvbTogQ3VzdG9tTm9kZSB9fVxyXG4gICAgICAgIGVkZ2VUeXBlcz17eyBjdXN0b206IEN1c3RvbUVkZ2UgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIC8+XHJcbiAgICAgICAgPENvbnRyb2xzIC8+XHJcbiAgICAgIDwvUmVhY3RGbG93PlxyXG5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3RGbG93IiwiQ29udHJvbHMiLCJCYWNrZ3JvdW5kIiwidXNlTm9kZXNTdGF0ZSIsInVzZUVkZ2VzU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VzdG9tTm9kZSIsIkN1c3RvbUVkZ2UiLCJTVE9SQUdFX0tFWSIsImluaXROb2RlcyIsImlkIiwicG9zaXRpb24iLCJ4IiwieSIsImRhdGEiLCJsYWJlbCIsInR5cGUiLCJpbml0RWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsIkZsb3ciLCJub2RlcyIsInNldE5vZGVzIiwib25Ob2Rlc0NoYW5nZSIsImVkZ2VzIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwic2F2ZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkTm9kZXMiLCJzYXZlZEVkZ2VzIiwiSlNPTiIsInBhcnNlIiwiZmxvd0RhdGEiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwib25Db25uZWN0IiwiY29ubmVjdGlvbiIsImVkcyIsIm9uUmVtb3ZlIiwiaGFuZGxlUmVtb3ZlRWRnZSIsImhhbmRsZVJlbW92ZU5vZGUiLCJub2RlSWQiLCJuZHMiLCJmaWx0ZXIiLCJub2RlIiwiZWRnZSIsImVkZ2VJZCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXROZXdOb2RlIiwibmV3bm9kZSIsImJ1dHRvbiIsIm1hcCIsImZpdFZpZXciLCJub2RlVHlwZXMiLCJjdXN0b20iLCJlZGdlVHlwZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Flow.jsx\n"));

/***/ })

});