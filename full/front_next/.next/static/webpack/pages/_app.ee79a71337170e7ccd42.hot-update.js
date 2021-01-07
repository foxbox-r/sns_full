webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/userSaga.js":
/*!***************************!*\
  !*** ./sagas/userSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../back */ "./back.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unFollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnFollow),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);







function loadUserApi() {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/user");
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadUserApi);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_ERROR"],
            data: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function logInApi(data) {
  //{data:{email,password}}
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/user/login", data);
}

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logInApi, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: result
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_ERROR"],
            data: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function logOutApi() {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/user/logout");
}

function logOut(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logOutApi);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 5:
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 7:
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_ERROR"],
            data: _context3.t0
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function signUpApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/user", data); // return axios.post(`http://localhost:3065/user`,data);
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(signUpApi, action.data);

        case 3:
          result = _context4.sent;
          console.log(result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 7:
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_ERROR"],
            data: _context4.t0
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 11]]);
}

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_ERROR"],
            data: _context5.t0
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function unFollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unFollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context6.next = 11;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_ERROR"],
            data: _context6.t0
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUnFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnFollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unFollow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlclNhZ2EuanMiXSwibmFtZXMiOlsibG9hZFVzZXIiLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImZvbGxvdyIsInVuRm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaExvYWRVc2VyIiwidXNlclNhZ2EiLCJsb2FkVXNlckFwaSIsImF4aW9zIiwiZ2V0IiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiZGF0YSIsIkxPQURfVVNFUl9FUlJPUiIsInJlc3BvbnNlIiwibG9nSW5BcGkiLCJwb3N0IiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRVJST1IiLCJsb2dPdXRBcGkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0VSUk9SIiwic2lnblVwQXBpIiwiY29uc29sZSIsImxvZyIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRVJST1IiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19FUlJPUiIsInRha2VFdmVyeSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWlCVUEsUTttR0FvQkFDLEs7bUdBb0JBQyxNO21HQW9CQUMsTTttR0FnQkFDLE07bUdBZUFDLFE7bUdBaUJBQyxVO21HQUdBQyxXO21HQUdBQyxXO29HQUdBQyxXO29HQUdBQyxhO29HQUdBQyxhO29HQUllQyxROztBQWhKekI7QUFDQTtBQUNBO0FBUUE7QUFD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QUhFLEVBSU4wQywrREFBSSxDQUFDekMsV0FBRCxDQUpFLEVBS055QywrREFBSSxDQUFDeEMsYUFBRCxDQUxFLEVBTU53QywrREFBSSxDQUFDdkMsYUFBRCxDQU5FLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlNzlhNzEzMzcxNzBlN2NjZDQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdXNocGluVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VFdmVyeSxkZWxheSxjYWxsLHB1dH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsTE9HX0lOX1NVQ0NFU1MsTE9HX0lOX0VSUk9SLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULExPR19PVVRfU1VDQ0VTUyxMT0dfT1VUX0VSUk9SLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFNJR05fVVBfU1VDQ0VTUyxTSUdOX1VQX0VSUk9SLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsRk9MTE9XX1NVQ0NFU1MsRk9MTE9XX0VSUk9SLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxVTkZPTExPV19TVUNDRVNTLFVORk9MTE9XX0VSUk9SLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsTE9BRF9VU0VSX1NVQ0NFU1MsTE9BRF9VU0VSX0VSUk9SLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyUmVkdWNlclwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge2JhY2tBZGRyZXNzfSBmcm9tIFwiLi4vYmFja1wiXHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFwaSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXJgLCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBcGkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BcGkoZGF0YSl7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyL2xvZ2luYCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfSU5fRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QXBpKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3VzZXIvbG9nb3V0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFwaSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvdXNlcmAsZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXJgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbil7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmQsbmlja25hbWV9fVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKXsvLyB7ZGF0YTp7cG9zdFVzZXJJZH19XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bkZvbGxvdyhhY3Rpb24pey8ve2RhdGE6e3Bvc3RVc2VySWR9fVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfT1VUX1JFUVVFU1QsbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1Qsc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShGT0xMT1dfUkVRVUVTVCxmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVU5GT0xMT1dfUkVRVUVTVCx1bkZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCxsb2FkVXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9