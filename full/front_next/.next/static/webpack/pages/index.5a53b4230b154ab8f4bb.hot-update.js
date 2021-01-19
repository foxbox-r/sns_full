webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");



var _jsxFileName = "C:\\WEB\\full\\front_next\\pages\\index.js",
    _s = $RefreshSig$();










function index() {
  _s();

  var _this = this;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userReducer;
  }),
      logInDone = _useSelector.logInDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.postReducer;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostLoading = _useSelector2.loadPostLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
    });
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll(e) {
      var result = Math.floor(window.scrollY + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 300;

      if (result && hasMorePosts && !loadPostLoading) {
        var lastId = mainPosts[mainPosts.length - 1].id;
        dispatch({
          type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"],
          lastId: lastId
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [logInDone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 31
      }, this), mainPosts.map(function (post, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          post: post
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 46
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(index, "Y66hNiHZMrN0XFnMSF//xnsqJnQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJsb2dJbkRvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicG9zdFJlZHVjZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiZSIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLHFCQUNRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLFdBQVI7QUFBQSxHQUFOLENBRG5CO0FBQUEsTUFDTEMsU0FESyxnQkFDTEEsU0FESzs7QUFFWixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZZLHNCQUdxQ0wsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDSyxXQUFSO0FBQUEsR0FBTixDQUhoRDtBQUFBLE1BR0xDLFNBSEssaUJBR0xBLFNBSEs7QUFBQSxNQUdLQyxZQUhMLGlCQUdLQSxZQUhMO0FBQUEsTUFHa0JDLGVBSGxCLGlCQUdrQkEsZUFIbEI7O0FBS1pDLHlEQUFTLENBQUMsWUFBSTtBQUNWTixZQUFRLENBQUM7QUFDTE8sVUFBSSxFQUFDQyx1RUFBaUJBO0FBRGpCLEtBQUQsQ0FBUjtBQUdBUixZQUFRLENBQUM7QUFDTE8sVUFBSSxFQUFDRSx1RUFBaUJBO0FBRGpCLEtBQUQsQ0FBUjtBQUdILEdBUFEsRUFPUCxFQVBPLENBQVQ7QUFTQUgseURBQVMsQ0FBQyxZQUFJO0FBQ1YsYUFBU0ksUUFBVCxDQUFrQkMsQ0FBbEIsRUFBb0I7QUFDaEIsVUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDQyxPQUFQLEdBQWVDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBbkQsS0FBa0VGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBc0MsR0FBdkg7O0FBQ0EsVUFBR1IsTUFBTSxJQUFJUixZQUFWLElBQTBCLENBQUNDLGVBQTlCLEVBQThDO0FBQzFDLFlBQU1nQixNQUFNLEdBQUdsQixTQUFTLENBQUNBLFNBQVMsQ0FBQ21CLE1BQVYsR0FBaUIsQ0FBbEIsQ0FBVCxDQUE4QkMsRUFBN0M7QUFDQXZCLGdCQUFRLENBQUM7QUFDTE8sY0FBSSxFQUFDRSx1RUFEQTtBQUVMWSxnQkFBTSxFQUFOQTtBQUZLLFNBQUQsQ0FBUjtBQUlIO0FBQ0o7O0FBQ0ROLFVBQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUNkLFFBQWpDO0FBQ0EsV0FBTyxZQUFJO0FBQ1BLLFlBQU0sQ0FBQ1UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBb0NmLFFBQXBDO0FBQ0gsS0FGRDtBQUdILEdBZlEsRUFlUCxDQUFDTixZQUFELEVBQWNDLGVBQWQsQ0FmTyxDQUFUO0FBaUJBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDZEQUFEO0FBQUEsaUJBQ0tOLFNBQVMsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURsQixFQUVLSSxTQUFTLENBQUN1QixHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNaEMsS0FBTjtBQUFBLDRCQUFjLHFFQUFDLDREQUFEO0FBQXNCLGNBQUksRUFBRWdDO0FBQTVCLFdBQWVoQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7QUFBQSxPQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQSxrQkFESjtBQVdIOztHQTFDUUEsSztVQUNlQyx1RCxFQUNISyx1RCxFQUNnQ0wsdUQ7OztBQXlDdENELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhNTNiNDIzMGIxNTRhYjhmNGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCJcclxuaW1wb3J0IHtMT0FEX1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCJcclxuaW1wb3J0IHtMT0FEX1VTRVJfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCJcclxuZnVuY3Rpb24gaW5kZXgoKXtcclxuICAgIGNvbnN0IHtsb2dJbkRvbmV9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHMsaGFzTW9yZVBvc3RzLGxvYWRQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUucG9zdFJlZHVjZXIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKGUpe1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHdpbmRvdy5zY3JvbGxZK2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpPj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LTMwMDtcclxuICAgICAgICAgICAgaWYocmVzdWx0ICYmIGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RMb2FkaW5nKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoLTFdLmlkO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFzTW9yZVBvc3RzLGxvYWRQb3N0TG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5ob21lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge2xvZ0luRG9uZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCxpbmRleCk9PjxQb3N0Q2FyZCBrZXk9e2luZGV4fSBwb3N0PXtwb3N0fSAvPikgfVxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==