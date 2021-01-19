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
          data: lastId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJsb2dJbkRvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicG9zdFJlZHVjZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiZSIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxxQkFDUUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDQyxXQUFSO0FBQUEsR0FBTixDQURuQjtBQUFBLE1BQ0xDLFNBREssZ0JBQ0xBLFNBREs7O0FBRVosTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGWSxzQkFHcUNMLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0ssV0FBUjtBQUFBLEdBQU4sQ0FIaEQ7QUFBQSxNQUdMQyxTQUhLLGlCQUdMQSxTQUhLO0FBQUEsTUFHS0MsWUFITCxpQkFHS0EsWUFITDtBQUFBLE1BR2tCQyxlQUhsQixpQkFHa0JBLGVBSGxCOztBQUtaQyx5REFBUyxDQUFDLFlBQUk7QUFDVk4sWUFBUSxDQUFDO0FBQ0xPLFVBQUksRUFBQ0MsdUVBQWlCQTtBQURqQixLQUFELENBQVI7QUFHQVIsWUFBUSxDQUFDO0FBQ0xPLFVBQUksRUFBQ0UsdUVBQWlCQTtBQURqQixLQUFELENBQVI7QUFHSCxHQVBRLEVBT1AsRUFQTyxDQUFUO0FBU0FILHlEQUFTLENBQUMsWUFBSTtBQUNWLGFBQVNJLFFBQVQsQ0FBa0JDLENBQWxCLEVBQW9CO0FBQ2hCLFVBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQW5ELEtBQWtFRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXNDLEdBQXZIOztBQUNBLFVBQUdSLE1BQU0sSUFBSVIsWUFBVixJQUEwQixDQUFDQyxlQUE5QixFQUE4QztBQUMxQyxZQUFNZ0IsTUFBTSxHQUFHbEIsU0FBUyxDQUFDQSxTQUFTLENBQUNtQixNQUFWLEdBQWlCLENBQWxCLENBQVQsQ0FBOEJDLEVBQTdDO0FBQ0F2QixnQkFBUSxDQUFDO0FBQ0xPLGNBQUksRUFBQ0UsdUVBREE7QUFFTGUsY0FBSSxFQUFDSDtBQUZBLFNBQUQsQ0FBUjtBQUlIO0FBQ0o7O0FBQ0ROLFVBQU0sQ0FBQ1UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUNmLFFBQWpDO0FBQ0EsV0FBTyxZQUFJO0FBQ1BLLFlBQU0sQ0FBQ1csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBb0NoQixRQUFwQztBQUNILEtBRkQ7QUFHSCxHQWZRLEVBZVAsQ0FBQ04sWUFBRCxFQUFjQyxlQUFkLENBZk8sQ0FBVDtBQWlCQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyw2REFBRDtBQUFBLGlCQUNLTixTQUFTLGlCQUFJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEbEIsRUFFS0ksU0FBUyxDQUFDd0IsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTWpDLEtBQU47QUFBQSw0QkFBYyxxRUFBQyw0REFBRDtBQUFzQixjQUFJLEVBQUVpQztBQUE1QixXQUFlakMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUEsT0FBZCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUFXSDs7R0ExQ1FBLEs7VUFDZUMsdUQsRUFDSEssdUQsRUFDZ0NMLHVEOzs7QUF5Q3RDRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGRjN2I4YWJkZWRlNmM1MWM3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIlxyXG5pbXBvcnQge3VzZVNlbGVjdG9yLHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiXHJcbmltcG9ydCB7TE9BRF9QT1NUX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCB7TE9BRF9VU0VSX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyUmVkdWNlclwiXHJcbmZ1bmN0aW9uIGluZGV4KCl7XHJcbiAgICBjb25zdCB7bG9nSW5Eb25lfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS51c2VyUmVkdWNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7bWFpblBvc3RzLGhhc01vcmVQb3N0cyxsb2FkUG9zdExvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbChlKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KT49ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDA7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCAmJiBoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0TG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aC0xXS5pZDtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6bGFzdElkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFzTW9yZVBvc3RzLGxvYWRQb3N0TG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5ob21lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge2xvZ0luRG9uZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCxpbmRleCk9PjxQb3N0Q2FyZCBrZXk9e2luZGV4fSBwb3N0PXtwb3N0fSAvPikgfVxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==