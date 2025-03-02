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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _xyflow_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xyflow/react */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/esm/index.js\");\n/* harmony import */ var _xyflow_react_dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xyflow/react/dist/style.css */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomNode */ \"(app-pages-browser)/./components/CustomNode.jsx\");\n/* harmony import */ var _CustomEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomEdge */ \"(app-pages-browser)/./components/CustomEdge.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst STORAGE_KEY = 'react-flow-data';\nconst initNodes = [\n    {\n        id: '1',\n        position: {\n            x: 100,\n            y: 100\n        },\n        data: {\n            label: 'Node 1'\n        },\n        type: 'custom'\n    },\n    {\n        id: '2',\n        position: {\n            x: 300,\n            y: 200\n        },\n        data: {\n            label: 'Node 2'\n        },\n        type: 'custom'\n    }\n];\nconst initEdges = [\n    {\n        id: '1-2',\n        source: '1',\n        target: '2',\n        type: 'custom',\n        animated: true,\n        data: {}\n    }\n];\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState)(initNodes);\n    const [edges, setEdges, onEdgesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)(initEdges);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const savedData = localStorage.getItem(STORAGE_KEY);\n            if (savedData) {\n                const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedData);\n                setNodes(savedNodes);\n                setEdges(savedEdges);\n            } else {\n                setNodes(initNodes);\n                setEdges(initEdges);\n            }\n        }\n    }[\"Flow.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const flowData = JSON.stringify({\n                nodes,\n                edges\n            });\n            localStorage.setItem(STORAGE_KEY, flowData);\n        }\n    }[\"Flow.useEffect\"], [\n        nodes,\n        edges\n    ]);\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)({\n        \"Flow.useCallback[onConnect]\": (connection)=>{\n            setEdges({\n                \"Flow.useCallback[onConnect]\": (eds)=>[\n                        ...eds,\n                        {\n                            id: \"\".concat(connection.source, \"-\").concat(connection.target),\n                            source: connection.source,\n                            target: connection.target,\n                            type: 'custom',\n                            animated: true,\n                            data: {\n                                onRemove: handleRemoveEdge\n                            }\n                        }\n                    ]\n            }[\"Flow.useCallback[onConnect]\"]);\n        }\n    }[\"Flow.useCallback[onConnect]\"], []);\n    const handleRemoveNode = (nodeId)=>{\n        setNodes((nds)=>nds.filter((node)=>node.id !== nodeId));\n        setEdges((eds)=>eds.filter((edge)=>edge.source !== nodeId && edge.target !== nodeId));\n    };\n    const handleRemoveEdge = (edgeId)=>{\n        setEdges((eds)=>eds.filter((edge)=>edge.id !== edgeId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.ReactFlow, {\n            nodes: nodes.map((node)=>({\n                    ...node,\n                    data: {\n                        ...node.data,\n                        onRemove: handleRemoveNode\n                    }\n                })),\n            edges: edges.map((edge)=>({\n                    ...edge,\n                    data: {\n                        ...edge.data,\n                        onRemove: handleRemoveEdge\n                    }\n                })),\n            onNodesChange: onNodesChange,\n            onEdgesChange: onEdgesChange,\n            onConnect: onConnect,\n            fitView: true,\n            nodeTypes: {\n                custom: _CustomNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            },\n            edgeTypes: {\n                custom: _CustomEdge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Background, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Controls, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"Ag4vU3RMfZ5UvDtrXGYMDRMIEas=\", false, function() {\n    return [\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState,\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmxvdy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4RjtBQUN4RDtBQUNTO0FBQ1Q7QUFDQTtBQUd0QyxNQUFNUyxjQUFjO0FBR3BCLE1BQU1DLFlBQVk7SUFDaEI7UUFBRUMsSUFBSTtRQUFLQyxVQUFVO1lBQUVDLEdBQUc7WUFBS0MsR0FBRztRQUFJO1FBQUdDLE1BQU07WUFBRUMsT0FBTztRQUFTO1FBQUdDLE1BQU07SUFBUztJQUNuRjtRQUFFTixJQUFJO1FBQUtDLFVBQVU7WUFBRUMsR0FBRztZQUFLQyxHQUFHO1FBQUk7UUFBR0MsTUFBTTtZQUFFQyxPQUFPO1FBQVM7UUFBR0MsTUFBTTtJQUFTO0NBQ3BGO0FBRUQsTUFBTUMsWUFBWTtJQUNoQjtRQUFFUCxJQUFJO1FBQU9RLFFBQVE7UUFBS0MsUUFBUTtRQUFLSCxNQUFNO1FBQVVJLFVBQVU7UUFBTU4sTUFBTSxDQUFDO0lBQUU7Q0FDakY7QUFFRCxTQUFTTzs7SUFFUCxNQUFNLENBQUNDLE9BQU9DLFVBQVVDLGNBQWMsR0FBR3RCLDREQUFhQSxDQUFDTztJQUN2RCxNQUFNLENBQUNnQixPQUFPQyxVQUFVQyxjQUFjLEdBQUd4Qiw0REFBYUEsQ0FBQ2M7SUFFeERaLGdEQUFTQTswQkFBQztZQUNULE1BQU11QixZQUFZQyxhQUFhQyxPQUFPLENBQUN0QjtZQUN2QyxJQUFJb0IsV0FBVztnQkFDYixNQUFNLEVBQUVOLE9BQU9TLFVBQVUsRUFBRU4sT0FBT08sVUFBVSxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FBQ047Z0JBQzVETCxTQUFTUTtnQkFDVEwsU0FBU007WUFDWCxPQUFPO2dCQUVMVCxTQUFTZDtnQkFDVGlCLFNBQVNUO1lBQ1g7UUFDRjt5QkFBRyxFQUFFO0lBR0xaLGdEQUFTQTswQkFBQztZQUNSLE1BQU04QixXQUFXRixLQUFLRyxTQUFTLENBQUM7Z0JBQUVkO2dCQUFPRztZQUFNO1lBQy9DSSxhQUFhUSxPQUFPLENBQUM3QixhQUFhMkI7UUFDcEM7eUJBQUc7UUFBQ2I7UUFBT0c7S0FBTTtJQUVmLE1BQU1hLFlBQVlsQyxrREFBV0E7dUNBQUMsQ0FBQ21DO1lBQzdCYjsrQ0FBUyxDQUFDYyxNQUFROzJCQUNiQTt3QkFDSDs0QkFDRTlCLElBQUksR0FBd0I2QixPQUFyQkEsV0FBV3JCLE1BQU0sRUFBQyxLQUFxQixPQUFsQnFCLFdBQVdwQixNQUFNOzRCQUM3Q0QsUUFBUXFCLFdBQVdyQixNQUFNOzRCQUN6QkMsUUFBUW9CLFdBQVdwQixNQUFNOzRCQUN6QkgsTUFBTTs0QkFDTkksVUFBVTs0QkFDVk4sTUFBTTtnQ0FBRTJCLFVBQVVDOzRCQUFpQjt3QkFDckM7cUJBQ0Q7O1FBQ0g7c0NBQUcsRUFBRTtJQUdMLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QnJCLFNBQVMsQ0FBQ3NCLE1BQVFBLElBQUlDLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLckMsRUFBRSxLQUFLa0M7UUFDbkRsQixTQUFTLENBQUNjLE1BQVFBLElBQUlNLE1BQU0sQ0FBQyxDQUFDRSxPQUFTQSxLQUFLOUIsTUFBTSxLQUFLMEIsVUFBVUksS0FBSzdCLE1BQU0sS0FBS3lCO0lBQ25GO0lBR0EsTUFBTUYsbUJBQW1CLENBQUNPO1FBQ3hCdkIsU0FBUyxDQUFDYyxNQUFRQSxJQUFJTSxNQUFNLENBQUMsQ0FBQ0UsT0FBU0EsS0FBS3RDLEVBQUUsS0FBS3VDO0lBQ3JEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBRWIsNEVBQUNwRCxvREFBU0E7WUFDUnVCLE9BQU9BLE1BQU04QixHQUFHLENBQUMsQ0FBQ0wsT0FBVTtvQkFDMUIsR0FBR0EsSUFBSTtvQkFDUGpDLE1BQU07d0JBQUUsR0FBR2lDLEtBQUtqQyxJQUFJO3dCQUFFMkIsVUFBVUU7b0JBQWlCO2dCQUNuRDtZQUNBbEIsT0FBT0EsTUFBTTJCLEdBQUcsQ0FBQyxDQUFDSixPQUFVO29CQUMxQixHQUFHQSxJQUFJO29CQUNQbEMsTUFBTTt3QkFBRSxHQUFHa0MsS0FBS2xDLElBQUk7d0JBQUUyQixVQUFVQztvQkFBaUI7Z0JBQ25EO1lBQ0FsQixlQUFlQTtZQUNmRyxlQUFlQTtZQUNmVyxXQUFXQTtZQUNYZSxPQUFPO1lBQ1BDLFdBQVc7Z0JBQUVDLFFBQVFqRCxtREFBVUE7WUFBQztZQUNoQ2tELFdBQVc7Z0JBQUVELFFBQVFoRCxtREFBVUE7WUFBQzs7OEJBRWhDLDhEQUFDTixxREFBVUE7Ozs7OzhCQUNYLDhEQUFDRCxtREFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7R0F6RVNxQjs7UUFFa0NuQix3REFBYUE7UUFDYkMsd0RBQWFBOzs7S0FIL0NrQjtBQTJFVCxpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzdXJ5YVxcRG93bmxvYWRzXFxGaWxlc1xcVlNjb2RlXFxzdXBlcnZhaXNvcl90YXNrXFxjb21wb25lbnRzXFxGbG93LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdEZsb3csIENvbnRyb2xzLCBCYWNrZ3JvdW5kLCB1c2VOb2Rlc1N0YXRlLCB1c2VFZGdlc1N0YXRlIH0gZnJvbSAnQHh5Zmxvdy9yZWFjdCc7XHJcbmltcG9ydCAnQHh5Zmxvdy9yZWFjdC9kaXN0L3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21Ob2RlIGZyb20gJy4vQ3VzdG9tTm9kZSc7XHJcbmltcG9ydCBDdXN0b21FZGdlIGZyb20gJy4vQ3VzdG9tRWRnZSc7XHJcblxyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAncmVhY3QtZmxvdy1kYXRhJztcclxuXHJcblxyXG5jb25zdCBpbml0Tm9kZXMgPSBbXHJcbiAgeyBpZDogJzEnLCBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LCBkYXRhOiB7IGxhYmVsOiAnTm9kZSAxJyB9LCB0eXBlOiAnY3VzdG9tJyB9LFxyXG4gIHsgaWQ6ICcyJywgcG9zaXRpb246IHsgeDogMzAwLCB5OiAyMDAgfSwgZGF0YTogeyBsYWJlbDogJ05vZGUgMicgfSwgdHlwZTogJ2N1c3RvbScgfSxcclxuXTtcclxuXHJcbmNvbnN0IGluaXRFZGdlcyA9IFtcclxuICB7IGlkOiAnMS0yJywgc291cmNlOiAnMScsIHRhcmdldDogJzInLCB0eXBlOiAnY3VzdG9tJywgYW5pbWF0ZWQ6IHRydWUsIGRhdGE6IHt9IH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBGbG93KCkge1xyXG5cclxuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdE5vZGVzKTtcclxuICBjb25zdCBbZWRnZXMsIHNldEVkZ2VzLCBvbkVkZ2VzQ2hhbmdlXSA9IHVzZUVkZ2VzU3RhdGUoaW5pdEVkZ2VzKTtcclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICBpZiAoc2F2ZWREYXRhKSB7XHJcbiAgICBjb25zdCB7IG5vZGVzOiBzYXZlZE5vZGVzLCBlZGdlczogc2F2ZWRFZGdlcyB9ID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xyXG4gICAgc2V0Tm9kZXMoc2F2ZWROb2Rlcyk7XHJcbiAgICBzZXRFZGdlcyhzYXZlZEVkZ2VzKTtcclxuICB9IGVsc2Uge1xyXG4gICBcclxuICAgIHNldE5vZGVzKGluaXROb2Rlcyk7XHJcbiAgICBzZXRFZGdlcyhpbml0RWRnZXMpO1xyXG4gIH1cclxufSwgW10pO1xyXG5cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc3QgZmxvd0RhdGEgPSBKU09OLnN0cmluZ2lmeSh7IG5vZGVzLCBlZGdlcyB9KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZmxvd0RhdGEpO1xyXG59LCBbbm9kZXMsIGVkZ2VzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKChjb25uZWN0aW9uKSA9PiB7XHJcbiAgICBzZXRFZGdlcygoZWRzKSA9PiBbXHJcbiAgICAgIC4uLmVkcyxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBgJHtjb25uZWN0aW9uLnNvdXJjZX0tJHtjb25uZWN0aW9uLnRhcmdldH1gLFxyXG4gICAgICAgIHNvdXJjZTogY29ubmVjdGlvbi5zb3VyY2UsXHJcbiAgICAgICAgdGFyZ2V0OiBjb25uZWN0aW9uLnRhcmdldCxcclxuICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7IG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVFZGdlIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVOb2RlID0gKG5vZGVJZCkgPT4ge1xyXG4gICAgc2V0Tm9kZXMoKG5kcykgPT4gbmRzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5pZCAhPT0gbm9kZUlkKSk7XHJcbiAgICBzZXRFZGdlcygoZWRzKSA9PiBlZHMuZmlsdGVyKChlZGdlKSA9PiBlZGdlLnNvdXJjZSAhPT0gbm9kZUlkICYmIGVkZ2UudGFyZ2V0ICE9PSBub2RlSWQpKTtcclxuICB9O1xyXG5cclxuICBcclxuICBjb25zdCBoYW5kbGVSZW1vdmVFZGdlID0gKGVkZ2VJZCkgPT4ge1xyXG4gICAgc2V0RWRnZXMoKGVkcykgPT4gZWRzLmZpbHRlcigoZWRnZSkgPT4gZWRnZS5pZCAhPT0gZWRnZUlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cclxuICAgICAgXHJcbiAgICAgIDxSZWFjdEZsb3dcclxuICAgICAgICBub2Rlcz17bm9kZXMubWFwKChub2RlKSA9PiAoe1xyXG4gICAgICAgICAgLi4ubm9kZSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4ubm9kZS5kYXRhLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlTm9kZSB9LFxyXG4gICAgICAgIH0pKX1cclxuICAgICAgICBlZGdlcz17ZWRnZXMubWFwKChlZGdlKSA9PiAoe1xyXG4gICAgICAgICAgLi4uZWRnZSxcclxuICAgICAgICAgIGRhdGE6IHsgLi4uZWRnZS5kYXRhLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlRWRnZSB9LFxyXG4gICAgICAgIH0pKX1cclxuICAgICAgICBvbk5vZGVzQ2hhbmdlPXtvbk5vZGVzQ2hhbmdlfVxyXG4gICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XHJcbiAgICAgICAgb25Db25uZWN0PXtvbkNvbm5lY3R9XHJcbiAgICAgICAgZml0Vmlld1xyXG4gICAgICAgIG5vZGVUeXBlcz17eyBjdXN0b206IEN1c3RvbU5vZGUgfX1cclxuICAgICAgICBlZGdlVHlwZXM9e3sgY3VzdG9tOiBDdXN0b21FZGdlIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QmFja2dyb3VuZCAvPlxyXG4gICAgICAgIDxDb250cm9scyAvPlxyXG4gICAgICA8L1JlYWN0Rmxvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdEZsb3ciLCJDb250cm9scyIsIkJhY2tncm91bmQiLCJ1c2VOb2Rlc1N0YXRlIiwidXNlRWRnZXNTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiQ3VzdG9tTm9kZSIsIkN1c3RvbUVkZ2UiLCJTVE9SQUdFX0tFWSIsImluaXROb2RlcyIsImlkIiwicG9zaXRpb24iLCJ4IiwieSIsImRhdGEiLCJsYWJlbCIsInR5cGUiLCJpbml0RWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsIkZsb3ciLCJub2RlcyIsInNldE5vZGVzIiwib25Ob2Rlc0NoYW5nZSIsImVkZ2VzIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwic2F2ZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkTm9kZXMiLCJzYXZlZEVkZ2VzIiwiSlNPTiIsInBhcnNlIiwiZmxvd0RhdGEiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwib25Db25uZWN0IiwiY29ubmVjdGlvbiIsImVkcyIsIm9uUmVtb3ZlIiwiaGFuZGxlUmVtb3ZlRWRnZSIsImhhbmRsZVJlbW92ZU5vZGUiLCJub2RlSWQiLCJuZHMiLCJmaWx0ZXIiLCJub2RlIiwiZWRnZSIsImVkZ2VJZCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImZpdFZpZXciLCJub2RlVHlwZXMiLCJjdXN0b20iLCJlZGdlVHlwZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Flow.jsx\n"));

/***/ })

});