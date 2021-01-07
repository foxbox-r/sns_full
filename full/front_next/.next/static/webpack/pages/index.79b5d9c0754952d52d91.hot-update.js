webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_ERROR, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_ERROR, ADD_POST_TO_ME, REMOVE_POST_TO_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR, logoutRequestAction, loginRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_ERROR", function() { return LOG_IN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_ERROR", function() { return LOG_OUT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_ERROR", function() { return SIGN_UP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_ERROR", function() { return FOLLOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_ERROR", function() { return UNFOLLOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_TO_ME", function() { return REMOVE_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_ERROR", function() { return LOAD_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  logInLoading: false,
  logInDone: false,
  logInErorr: null,
  logOutLoading: false,
  logOutDone: false,
  logOutErorr: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  followLoading: false,
  followDone: false,
  followErorr: null,
  unFollowUpLoading: false,
  unFollowUpDone: false,
  unFollowUpError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = "userReducer/LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "userReducer/LOG_IN_SUCCESS";
var LOG_IN_ERROR = "userReducer/LOG_IN_ERROR";
var LOG_OUT_REQUEST = "userReducer/LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "userReducer/LOG_OUT_SUCCESS";
var LOG_OUT_ERROR = "userReducer/LOG_OUT_ERROR";
var SIGN_UP_REQUEST = "userReducer/SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "userReducer/SIGN_UP_SUCCESS";
var SIGN_UP_ERROR = "userReducer/SIGN_UP_ERROR";
var FOLLOW_REQUEST = "userReducer/FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "userReducer/FOLLOW_SUCCESS";
var FOLLOW_ERROR = "userReducer/FOLLOW_ERROR";
var UNFOLLOW_REQUEST = "userReducer/UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "userReducer/UNFOLLOW_SUCCESS";
var UNFOLLOW_ERROR = "userReducer/UNFOLLOW_ERROR";
var ADD_POST_TO_ME = "userReducer/ADD_POST_TO_ME";
var REMOVE_POST_TO_ME = "userReducer/REMOVE_POST_TO_ME";
var LOAD_USER_REQUEST = "postReducer/LOAD_USER_REQUEST";
var LOAD_USER_SUCCESS = "postReducer/LOAD_USER_SUCCESS";
var LOAD_USER_ERROR = "postReducer/LOAD_USER_ERROR";
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var signupRequestAction = function signupRequestAction(data) {
  return {
    //{data:{email,password}}
    type: SIGN_UP_REQUEST,
    data: data
  };
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({
    //{email,nickname,password}
    id: 1,
    nickname: "foxboxr"
  }, data), {}, {
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "r"
    }, {
      nickname: "asr"
    }, {
      nickname: "rd"
    }],
    Followers: [{
      nickname: "r"
    }, {
      nickname: "asr"
    }, {
      nickname: "rd"
    }]
  });
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        //{data:{postUserId}}
        draft.followDone = true;
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data.postUserId
        });
        break;

      case FOLLOW_ERROR:
        draft.followLoading = false;
        draft.followError = action.data;
        break;

      case UNFOLLOW_REQUEST:
        draft.unFollowLoading = true;
        draft.unFollowError = null;
        draft.unFollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        //{data:{postUserId}}
        draft.unFollowDone = true;
        draft.unFollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.postUserId;
        });
        break;

      case UNFOLLOW_ERROR:
        draft.unFollowLoading = false;
        draft.unFollowError = action.data;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        //{email,nickname,password}
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.me = action.data.data;
        break;

      case LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.data;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutErorr = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutDone = true;
        draft.logOutLoading = false;
        draft.me = null;
        break;

      case LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.data;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpErorr = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        break;

      case SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpError = action.data;
        break;

      case ADD_POST_TO_ME:
        //data:{id}
        draft.me.Posts.unshift({
          id: action.data.id
        });
        break;

      case REMOVE_POST_TO_ME:
        //data:{id}
        draft.me.Posts = draft.me.Posts.filter(function (post) {
          return post.id !== action.data.id;
        });
        break;

      default:
        // return state;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5Fcm9yciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJvcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcm9yciIsInVuRm9sbG93VXBMb2FkaW5nIiwidW5Gb2xsb3dVcERvbmUiLCJ1bkZvbGxvd1VwRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9FUlJPUiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRVJST1IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0VSUk9SIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRVJST1IiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZvbGxvd0Vycm9yIiwicHVzaCIsInBvc3RVc2VySWQiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0Vycm9yIiwidW5Gb2xsb3dEb25lIiwiZmlsdGVyIiwidiIsImxvZ0luRXJyb3IiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIiwidW5zaGlmdCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxjQUFZLEVBQUMsS0FESTtBQUVqQkMsV0FBUyxFQUFDLEtBRk87QUFHakJDLFlBQVUsRUFBQyxJQUhNO0FBS2pCQyxlQUFhLEVBQUMsS0FMRztBQU1qQkMsWUFBVSxFQUFDLEtBTk07QUFPakJDLGFBQVcsRUFBQyxJQVBLO0FBU2pCQyxlQUFhLEVBQUMsS0FURztBQVVqQkMsWUFBVSxFQUFDLEtBVk07QUFXakJDLGFBQVcsRUFBQyxJQVhLO0FBYWpCQyxlQUFhLEVBQUMsS0FiRztBQWNqQkMsWUFBVSxFQUFDLEtBZE07QUFlakJDLGFBQVcsRUFBQyxJQWZLO0FBaUJqQkMsbUJBQWlCLEVBQUMsS0FqQkQ7QUFrQmpCQyxnQkFBYyxFQUFDLEtBbEJFO0FBbUJqQkMsaUJBQWUsRUFBQyxJQW5CQztBQXFCakJDLGlCQUFlLEVBQUMsS0FyQkM7QUFzQmpCQyxjQUFZLEVBQUMsS0F0Qkk7QUF1QmpCQyxlQUFhLEVBQUMsSUF2Qkc7QUF5QmpCQyxJQUFFLEVBQUMsSUF6QmM7QUEwQmpCQyxZQUFVLEVBQUMsRUExQk07QUEyQmpCQyxXQUFTLEVBQUM7QUEzQk8sQ0FBckI7QUErQk8sSUFBTUMsY0FBYyxHQUFHLDRCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsMEJBQXJCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLDZCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyw2QkFB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QUksQ0FBQ3RCLEVBQUwsS0FBWU8sTUFBTSxDQUFDVixJQUFQLENBQVlHLEVBQTFCO0FBQUEsU0FBMUIsQ0FBakI7QUFDQTs7QUFDSjtBQUNJO0FBQ0E7QUFsRlI7QUFvRkgsR0FyRmEsQ0FBZDtBQXNGSCxDQXZGRDs7QUF5RmVLLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5YjVkOWMwNzU0OTUyZDUyZDkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dJbkVyb3JyOm51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ091dERvbmU6ZmFsc2UsXHJcbiAgICBsb2dPdXRFcm9ycjpudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIGZvbGxvd0Vyb3JyOm51bGwsXHJcblxyXG4gICAgdW5Gb2xsb3dVcExvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bkZvbGxvd1VwRG9uZTpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRVc2VyTG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRVc2VyRG9uZTpmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6bnVsbCxcclxuXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9FUlJPUiA9IFwidXNlclJlZHVjZXIvTE9HX0lOX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwidXNlclJlZHVjZXIvTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwidXNlclJlZHVjZXIvU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0ZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvRk9MTE9XX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1VORk9MTE9XX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcInVzZXJSZWR1Y2VyL0FERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvUkVNT1ZFX1BPU1RfVE9fTUVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvTE9BRF9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCk9Pih7XHJcbiAgICB0eXBlOkxPR19PVVRfUkVRVUVTVFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGRhdGE9Pih7XHJcbiAgICB0eXBlOkxPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gZGF0YSA9PiAoey8ve2RhdGE6e2VtYWlsLHBhc3N3b3JkfX1cclxuICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gZGF0YT0+KHsvL3tlbWFpbCxuaWNrbmFtZSxwYXNzd29yZH1cclxuICAgIGlkOjEsXHJcbiAgICBuaWNrbmFtZTpcImZveGJveHJcIixcclxuICAgIC4uLmRhdGEsXHJcbiAgICBQb3N0czpbe2lkOjF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTpcInJcIn0se25pY2tuYW1lOlwiYXNyXCJ9LHtuaWNrbmFtZTpcInJkXCJ9LF0sXHJcbiAgICBGb2xsb3dlcnM6W3tuaWNrbmFtZTpcInJcIn0se25pY2tuYW1lOlwiYXNyXCJ9LHtuaWNrbmFtZTpcInJkXCJ9LF0sXHJcbn0pXHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzovL3tkYXRhOntwb3N0VXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YS5wb3N0VXNlcklkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7cG9zdFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIodj0+di5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdFVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOi8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTovL2RhdGE6e2lkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1RPX01FOi8vZGF0YTp7aWR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcihwb3N0PT5wb3N0LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==