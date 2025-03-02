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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _xyflow_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xyflow/react */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/esm/index.js\");\n/* harmony import */ var _xyflow_react_dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xyflow/react/dist/style.css */ \"(app-pages-browser)/./node_modules/@xyflow/react/dist/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomNode */ \"(app-pages-browser)/./components/CustomNode.jsx\");\n/* harmony import */ var _CustomEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomEdge */ \"(app-pages-browser)/./components/CustomEdge.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst STORAGE_KEY = 'react-flow-data';\nconst initNodes = [\n    {\n        id: '1',\n        position: {\n            x: 100,\n            y: 100\n        },\n        data: {\n            label: 'Node 1'\n        },\n        type: 'custom'\n    },\n    {\n        id: '2',\n        position: {\n            x: 300,\n            y: 200\n        },\n        data: {\n            label: 'Node 2'\n        },\n        type: 'custom'\n    }\n];\nconst initEdges = [\n    {\n        id: '1-2',\n        source: '1',\n        target: '2',\n        type: 'custom',\n        animated: true,\n        data: {}\n    }\n];\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState)(initNodes);\n    const [edges, setEdges, onEdgesChange] = (0,_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)(initEdges);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const savedData = localStorage.getItem(STORAGE_KEY);\n            if (savedData) {\n                const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedData);\n                setNodes(savedNodes);\n                setEdges(savedEdges);\n            } else {\n                setNodes(initNodes);\n                setEdges(initEdges);\n            }\n        }\n    }[\"Flow.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Flow.useEffect\": ()=>{\n            const flowData = JSON.stringify({\n                nodes,\n                edges\n            });\n            localStorage.setItem(STORAGE_KEY, flowData);\n        }\n    }[\"Flow.useEffect\"], [\n        nodes,\n        edges\n    ]);\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)({\n        \"Flow.useCallback[onConnect]\": (connection)=>{\n            setEdges({\n                \"Flow.useCallback[onConnect]\": (eds)=>[\n                        ...eds,\n                        {\n                            id: \"\".concat(connection.source, \"-\").concat(connection.target),\n                            source: connection.source,\n                            target: connection.target,\n                            type: 'custom',\n                            animated: true,\n                            data: {\n                                onRemove: handleRemoveEdge\n                            }\n                        }\n                    ]\n            }[\"Flow.useCallback[onConnect]\"]);\n        }\n    }[\"Flow.useCallback[onConnect]\"], []);\n    const handleRemoveNode = (nodeId)=>{\n        setNodes((nds)=>nds.filter((node)=>node.id !== nodeId));\n        setEdges((eds)=>eds.filter((edge)=>edge.source !== nodeId && edge.target !== nodeId));\n    };\n    const handleRemoveEdge = (edgeId)=>{\n        setEdges((eds)=>eds.filter((edge)=>edge.id !== edgeId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen\",\n        children: [\n            nodes.length == 0,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.ReactFlow, {\n                nodes: nodes.map((node)=>({\n                        ...node,\n                        data: {\n                            ...node.data,\n                            onRemove: handleRemoveNode\n                        }\n                    })),\n                edges: edges.map((edge)=>({\n                        ...edge,\n                        data: {\n                            ...edge.data,\n                            onRemove: handleRemoveEdge\n                        }\n                    })),\n                onNodesChange: onNodesChange,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                fitView: true,\n                nodeTypes: {\n                    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                },\n                edgeTypes: {\n                    custom: _CustomEdge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Background, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_xyflow_react__WEBPACK_IMPORTED_MODULE_5__.Controls, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\surya\\\\Downloads\\\\Files\\\\VScode\\\\supervaisor_task\\\\components\\\\Flow.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"Ag4vU3RMfZ5UvDtrXGYMDRMIEas=\", false, function() {\n    return [\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useNodesState,\n        _xyflow_react__WEBPACK_IMPORTED_MODULE_5__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNOzRCQUFFLEdBQUdrQyxLQUFLbEMsSUFBSTs0QkFBRTJCLFVBQVVDO3dCQUFpQjtvQkFDbkQ7Z0JBQ0FsQixlQUFlQTtnQkFDZkcsZUFBZUE7Z0JBQ2ZXLFdBQVdBO2dCQUNYZ0IsT0FBTztnQkFDUEMsV0FBVztvQkFBRUMsUUFBUWxELG1EQUFVQTtnQkFBQztnQkFDaENtRCxXQUFXO29CQUFFRCxRQUFRakQsbURBQVVBO2dCQUFDOztrQ0FFaEMsOERBQUNQLHFEQUFVQTs7Ozs7a0NBQ1gsOERBQUNELG1EQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0E3RVNzQjs7UUFFa0NwQix3REFBYUE7UUFDYkMsd0RBQWFBOzs7S0FIL0NtQjtBQStFVCxpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzdXJ5YVxcRG93bmxvYWRzXFxGaWxlc1xcVlNjb2RlXFxzdXBlcnZhaXNvcl90YXNrXFxjb21wb25lbnRzXFxGbG93LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdEZsb3csIENvbnRyb2xzLCBCYWNrZ3JvdW5kLCB1c2VOb2Rlc1N0YXRlLCB1c2VFZGdlc1N0YXRlIH0gZnJvbSAnQHh5Zmxvdy9yZWFjdCc7XHJcbmltcG9ydCAnQHh5Zmxvdy9yZWFjdC9kaXN0L3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VzdG9tTm9kZSBmcm9tICcuL0N1c3RvbU5vZGUnO1xyXG5pbXBvcnQgQ3VzdG9tRWRnZSBmcm9tICcuL0N1c3RvbUVkZ2UnO1xyXG5cclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3JlYWN0LWZsb3ctZGF0YSc7XHJcblxyXG5cclxuY29uc3QgaW5pdE5vZGVzID0gW1xyXG4gIHsgaWQ6ICcxJywgcG9zaXRpb246IHsgeDogMTAwLCB5OiAxMDAgfSwgZGF0YTogeyBsYWJlbDogJ05vZGUgMScgfSwgdHlwZTogJ2N1c3RvbScgfSxcclxuICB7IGlkOiAnMicsIHBvc2l0aW9uOiB7IHg6IDMwMCwgeTogMjAwIH0sIGRhdGE6IHsgbGFiZWw6ICdOb2RlIDInIH0sIHR5cGU6ICdjdXN0b20nIH0sXHJcbl07XHJcblxyXG5jb25zdCBpbml0RWRnZXMgPSBbXHJcbiAgeyBpZDogJzEtMicsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICcyJywgdHlwZTogJ2N1c3RvbScsIGFuaW1hdGVkOiB0cnVlLCBkYXRhOiB7fSB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRmxvdygpIHtcclxuXHJcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlcywgb25Ob2Rlc0NoYW5nZV0gPSB1c2VOb2Rlc1N0YXRlKGluaXROb2Rlcyk7XHJcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRFZGdlcyk7XHJcblxyXG5cclxuIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc3Qgc2F2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gIGlmIChzYXZlZERhdGEpIHtcclxuICAgIGNvbnN0IHsgbm9kZXM6IHNhdmVkTm9kZXMsIGVkZ2VzOiBzYXZlZEVkZ2VzIH0gPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XHJcbiAgICBzZXROb2RlcyhzYXZlZE5vZGVzKTtcclxuICAgIHNldEVkZ2VzKHNhdmVkRWRnZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIFxyXG4gICAgc2V0Tm9kZXMoaW5pdE5vZGVzKTtcclxuICAgIHNldEVkZ2VzKGluaXRFZGdlcyk7XHJcbiAgfVxyXG59LCBbXSk7XHJcblxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zdCBmbG93RGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbm9kZXMsIGVkZ2VzIH0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBmbG93RGF0YSk7XHJcbn0sIFtub2RlcywgZWRnZXNdKTtcclxuXHJcbiAgY29uc3Qgb25Db25uZWN0ID0gdXNlQ2FsbGJhY2soKGNvbm5lY3Rpb24pID0+IHtcclxuICAgIHNldEVkZ2VzKChlZHMpID0+IFtcclxuICAgICAgLi4uZWRzLFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IGAke2Nvbm5lY3Rpb24uc291cmNlfS0ke2Nvbm5lY3Rpb24udGFyZ2V0fWAsXHJcbiAgICAgICAgc291cmNlOiBjb25uZWN0aW9uLnNvdXJjZSxcclxuICAgICAgICB0YXJnZXQ6IGNvbm5lY3Rpb24udGFyZ2V0LFxyXG4gICAgICAgIHR5cGU6ICdjdXN0b20nLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHsgb25SZW1vdmU6IGhhbmRsZVJlbW92ZUVkZ2UgfSxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZU5vZGUgPSAobm9kZUlkKSA9PiB7XHJcbiAgICBzZXROb2RlcygobmRzKSA9PiBuZHMuZmlsdGVyKChub2RlKSA9PiBub2RlLmlkICE9PSBub2RlSWQpKTtcclxuICAgIHNldEVkZ2VzKChlZHMpID0+IGVkcy5maWx0ZXIoKGVkZ2UpID0+IGVkZ2Uuc291cmNlICE9PSBub2RlSWQgJiYgZWRnZS50YXJnZXQgIT09IG5vZGVJZCkpO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUVkZ2UgPSAoZWRnZUlkKSA9PiB7XHJcbiAgICBzZXRFZGdlcygoZWRzKSA9PiBlZHMuZmlsdGVyKChlZGdlKSA9PiBlZGdlLmlkICE9PSBlZGdlSWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlblwiPlxyXG4gICAgICB7bm9kZXMubGVuZ3RoPT0wfVxyXG4gICAgICBcclxuICAgICAgPFJlYWN0Rmxvd1xyXG4gICAgICAgIG5vZGVzPXtub2Rlcy5tYXAoKG5vZGUpID0+ICh7XHJcbiAgICAgICAgICAuLi5ub2RlLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5ub2RlLmRhdGEsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVOb2RlIH0sXHJcbiAgICAgICAgfSkpfVxyXG4gICAgICAgIGVkZ2VzPXtlZGdlcy5tYXAoKGVkZ2UpID0+ICh7XHJcbiAgICAgICAgICAuLi5lZGdlLFxyXG4gICAgICAgICAgZGF0YTogeyAuLi5lZGdlLmRhdGEsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmVFZGdlIH0sXHJcbiAgICAgICAgfSkpfVxyXG4gICAgICAgIG9uTm9kZXNDaGFuZ2U9e29uTm9kZXNDaGFuZ2V9XHJcbiAgICAgICAgb25FZGdlc0NoYW5nZT17b25FZGdlc0NoYW5nZX1cclxuICAgICAgICBvbkNvbm5lY3Q9e29uQ29ubmVjdH1cclxuICAgICAgICBmaXRWaWV3XHJcbiAgICAgICAgbm9kZVR5cGVzPXt7IGN1c3RvbTogQ3VzdG9tTm9kZSB9fVxyXG4gICAgICAgIGVkZ2VUeXBlcz17eyBjdXN0b206IEN1c3RvbUVkZ2UgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIC8+XHJcbiAgICAgICAgPENvbnRyb2xzIC8+XHJcbiAgICAgIDwvUmVhY3RGbG93PlxyXG5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3RGbG93IiwiQ29udHJvbHMiLCJCYWNrZ3JvdW5kIiwidXNlTm9kZXNTdGF0ZSIsInVzZUVkZ2VzU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VzdG9tTm9kZSIsIkN1c3RvbUVkZ2UiLCJTVE9SQUdFX0tFWSIsImluaXROb2RlcyIsImlkIiwicG9zaXRpb24iLCJ4IiwieSIsImRhdGEiLCJsYWJlbCIsInR5cGUiLCJpbml0RWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsIkZsb3ciLCJub2RlcyIsInNldE5vZGVzIiwib25Ob2Rlc0NoYW5nZSIsImVkZ2VzIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwic2F2ZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkTm9kZXMiLCJzYXZlZEVkZ2VzIiwiSlNPTiIsInBhcnNlIiwiZmxvd0RhdGEiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwib25Db25uZWN0IiwiY29ubmVjdGlvbiIsImVkcyIsIm9uUmVtb3ZlIiwiaGFuZGxlUmVtb3ZlRWRnZSIsImhhbmRsZVJlbW92ZU5vZGUiLCJub2RlSWQiLCJuZHMiLCJmaWx0ZXIiLCJub2RlIiwiZWRnZSIsImVkZ2VJZCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsImZpdFZpZXciLCJub2RlVHlwZXMiLCJjdXN0b20iLCJlZGdlVHlwZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Flow.jsx\n"));

/***/ })

});