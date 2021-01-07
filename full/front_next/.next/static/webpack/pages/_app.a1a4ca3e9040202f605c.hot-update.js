webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back */ "./back.js");
/* harmony import */ var _userSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userSaga */ "./sagas/userSaga.js");
/* harmony import */ var _postSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postSaga */ "./sagas/postSaga.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = _back__WEBPACK_IMPORTED_MODULE_3__["backAddress"];
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.withCredentials = true;
function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_userSaga__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_postSaga__WEBPACK_IMPORTED_MODULE_5__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImJhY2tBZGRyZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBU3lCQSxROztBQVR6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5QkMsaURBQXpCO0FBQ0FILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUcsZUFBZixHQUFpQyxJQUFqQztBQUVlLFNBQVVMLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1NLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ0MsaURBQUQsQ0FERSxFQUVORCwrREFBSSxDQUFDRSxpREFBRCxDQUZFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmExYTRjYTNlOTA0MDIwMmY2MDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCxmb3JrLHRha2UsdGFrZUV2ZXJ5LHRha2VMYXRlc3QscHV0LGRlbGF5fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7YmFja0FkZHJlc3N9IGZyb20gXCIuLi9iYWNrXCJcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJTYWdhXCJcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RTYWdhXCJcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrQWRkcmVzcztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBdKTtcclxufSAiXSwic291cmNlUm9vdCI6IiJ9