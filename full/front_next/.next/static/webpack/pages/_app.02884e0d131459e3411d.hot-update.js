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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);







function addPostApi(data) {
  return axios.post("/post", {
    content: data.postContent
  }, {
    withCredentials: true
  });
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addPostApi);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_ERROR"],
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
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_SUCCESS"],
            data: {
              id: action.data.id
            }
          });

        case 5:
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST_TO_ME"],
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
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_ERROR"],
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
  }, {
    withCredentials: true
  });
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addCommentApi, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_ERROR"],
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
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          newPosts = Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["generateDummyPost"])(2);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_SUCCESS"],
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_ERROR"],
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
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPost)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdFNhZ2EuanMiXSwibmFtZXMiOlsiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50IiwibG9hZFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0IiwicG9zdFNhZ2EiLCJhZGRQb3N0QXBpIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImNvbnRlbnQiLCJwb3N0Q29udGVudCIsIndpdGhDcmVkZW50aWFscyIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9FUlJPUiIsImVycm9yIiwiZGVsYXkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9FUlJPUiIsImFkZENvbW1lbnRBcGkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRVJST1IiLCJuZXdQb3N0cyIsImdlbmVyYXRlRHVtbXlQb3N0IiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJuZXdMb2FkZWRQb3N0cyIsIkxPQURfUE9TVF9FUlJPUiIsInRha2VFdmVyeSIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FrQlVBLE87bUdBbUJBQyxVO21HQTJCQUMsVTttR0FnQkFDLFE7bUdBa0JBQyxZO21HQUlBQyxlO21HQUlBQyxlO21HQUdBQyxhO21HQUllQyxROztBQWpIekI7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFJQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUF5QjtBQUNyQixT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QUksQ0FBQ3pDLFlBQUQsQ0FERSxFQUVOeUMsK0RBQUksQ0FBQ3ZDLGVBQUQsQ0FGRSxFQUdOdUMsK0RBQUksQ0FBQ3hDLGVBQUQsQ0FIRSxFQUlOd0MsK0RBQUksQ0FBQ3RDLGFBQUQsQ0FKRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMjg4NGUwZDEzMTQ1OWUzNDExZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsY3VsYXRvckZpbGxlZCwgUHVzaHBpblR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlRXZlcnkscHV0LGRlbGF5LGNhbGx9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9SRVFVRVNULEFERF9QT1NUX1NVQ0NFU1MsQUREX1BPU1RfRVJST1IsXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFJFTU9WRV9QT1NUX1NVQ0NFU1MsUkVNT1ZFX1BPU1RfRVJST1IsXHJcbiAgICAgQUREX0NPTU1FTlRfUkVRVUVTVCxBRERfQ09NTUVOVF9TVUNDRVNTLEFERF9DT01NRU5UX0VSUk9SLFxyXG4gICAgIExPQURfUE9TVF9SRVFVRVNULExPQURfUE9TVF9TVUNDRVNTLExPQURfUE9TVF9FUlJPUixcclxuICAgICBnZW5lcmF0ZUR1bW15UG9zdFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9UT19NRSxSRU1PVkVfUE9TVF9UT19NRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclJlZHVjZXJcIlxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFwaShkYXRhKXsgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIse2NvbnRlbnQ6ZGF0YS5wb3N0Q29udGVudH0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7Ly8oZGF0YTp7cG9zdENvbnRlbnR9KVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBlcnJvcjplcnIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXsvLyhkYXRhOntpZH0pXHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpZDphY3Rpb24uZGF0YS5pZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWQ6YWN0aW9uLmRhdGEuaWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfRVJST1IsXHJcbiAgICAgICAgICAgIGVycm9yOmVycixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKGRhdGEpeyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCx7Y29udGVudDpkYXRhLnBvc3RDb250ZW50fSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKXsvLyhkYXRhOntwb3N0SWQsY29udGVudCx1c2VySWR9KVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXsvL1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc3RzID0gZ2VuZXJhdGVEdW1teVBvc3QoMik7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBuZXdMb2FkZWRQb3N0czpuZXdQb3N0c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX1BPU1RfUkVRVUVTVCxhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9QT1NUX1JFUVVFU1QscmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShBRERfQ09NTUVOVF9SRVFVRVNULGFkZENvbW1lbnQpXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1BPU1RfUkVRVUVTVCxsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=