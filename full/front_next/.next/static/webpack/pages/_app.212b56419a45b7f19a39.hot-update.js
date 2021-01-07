webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/postSaga.js":
/*!***************************!*\
  !*** ./sagas/postSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(removePost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(addComment),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(loadPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchAddPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchRemovePost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchAddComment),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchLoadPost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(postSaga);







function addPostApi(data) {
  return axios.post("/post", {
    content: data.postContent
  });
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(addPostApi);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_ERROR"],
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function removePost(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function removePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_SUCCESS"],
            data: {
              id: action.data.id
            }
          });

        case 5:
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_6__["REMOVE_POST_TO_ME"],
            data: {
              id: action.data.id
            }
          });

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_ERROR"],
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function addCommentApi(data) {
  return axios.post("/post/".concat(data.postId, "/comment"), {
    content: data.postContent
  });
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(addCommentApi, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000);

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_objectSpread({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_SUCCESS"]
          }, action.data));

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_ERROR"],
            data: _context3.t0
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function loadPost(action) {
  var newPosts;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function loadPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          newPosts = Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["generateDummyPost"])(2);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_SUCCESS"],
            data: {
              newLoadedPosts: newPosts
            }
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_ERROR"],
            data: _context4.t0
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchAddPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchRemovePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchAddComment$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchLoadPost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLoadPost)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdFNhZ2EuanMiXSwibmFtZXMiOlsiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50IiwibG9hZFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0IiwicG9zdFNhZ2EiLCJhZGRQb3N0QXBpIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImNvbnRlbnQiLCJwb3N0Q29udGVudCIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9FUlJPUiIsImVycm9yIiwiZGVsYXkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9FUlJPUiIsImFkZENvbW1lbnRBcGkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRVJST1IiLCJuZXdQb3N0cyIsImdlbmVyYXRlRHVtbXlQb3N0IiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJuZXdMb2FkZWRQb3N0cyIsIkxPQURfUE9TVF9FUlJPUiIsInRha2VFdmVyeSIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FrQlVBLE87bUdBbUJBQyxVO21HQTJCQUMsVTttR0FnQkFDLFE7bUdBa0JBQyxZO21HQUlBQyxlO21HQUlBQyxlO21HQUdBQyxhO21HQUllQyxROztBQWpIekI7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFJQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUF5QjtBQUNyQixTQUFPQyxLQUFLLENB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ckMsYUFBRCxDQUpFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIxMmI1NjQxOWE0NWI3ZjE5YTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxjdWxhdG9yRmlsbGVkLCBQdXNocGluVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VFdmVyeSxwdXQsZGVsYXksY2FsbH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiXHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCJcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsQUREX1BPU1RfU1VDQ0VTUyxBRERfUE9TVF9FUlJPUixcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsUkVNT1ZFX1BPU1RfU1VDQ0VTUyxSRU1PVkVfUE9TVF9FUlJPUixcclxuICAgICBBRERfQ09NTUVOVF9SRVFVRVNULEFERF9DT01NRU5UX1NVQ0NFU1MsQUREX0NPTU1FTlRfRVJST1IsXHJcbiAgICAgTE9BRF9QT1NUX1JFUVVFU1QsTE9BRF9QT1NUX1NVQ0NFU1MsTE9BRF9QT1NUX0VSUk9SLFxyXG4gICAgIGdlbmVyYXRlRHVtbXlQb3N0XHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCJcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1RPX01FLFJFTU9WRV9QT1NUX1RPX01FLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyUmVkdWNlclwiXHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QXBpKGRhdGEpeyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIix7Y29udGVudDpkYXRhLnBvc3RDb250ZW50fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7Ly8oZGF0YTp7cG9zdENvbnRlbnR9KVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBlcnJvcjplcnIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXsvLyhkYXRhOntpZH0pXHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpZDphY3Rpb24uZGF0YS5pZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWQ6YWN0aW9uLmRhdGEuaWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfRVJST1IsXHJcbiAgICAgICAgICAgIGVycm9yOmVycixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKGRhdGEpeyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCx7Y29udGVudDpkYXRhLnBvc3RDb250ZW50fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7Ly8oZGF0YTp7cG9zdElkLGNvbnRlbnQsdXNlcklkfSlcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLi4uYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbil7Ly9cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBuZXdQb3N0cyA9IGdlbmVyYXRlRHVtbXlQb3N0KDIpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgbmV3TG9hZGVkUG9zdHM6bmV3UG9zdHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KEFERF9QT1NUX1JFUVVFU1QsYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShSRU1PVkVfUE9TVF9SRVFVRVNULHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX0NPTU1FTlRfUkVRVUVTVCxhZGRDb21tZW50KVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9QT1NUX1JFUVVFU1QsbG9hZFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9