webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5Fcm9yciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJvcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcm9yciIsInVuRm9sbG93VXBMb2FkaW5nIiwidW5Gb2xsb3dVcERvbmUiLCJ1bkZvbGxvd1VwRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9FUlJPUiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRVJST1IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0VSUk9SIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRVJST1IiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZvbGxvd0Vycm9yIiwicHVzaCIsInBvc3RVc2VySWQiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0Vycm9yIiwidW5Gb2xsb3dEb25lIiwiZmlsdGVyIiwidiIsImxvZ0luRXJyb3IiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIiwidW5zaGlmdCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxjQUFZLEVBQUMsS0FESTtBQUVqQkMsV0FBUyxFQUFDLEtBRk87QUFHakJDLFlBQVUsRUFBQyxJQUhNO0FBS2pCQyxlQUFhLEVBQUMsS0FMRztBQU1qQkMsWUFBVSxFQUFDLEtBTk07QUFPakJDLGFBQVcsRUFBQyxJQVBLO0FBU2pCQyxlQUFhLEVBQUMsS0FURztBQVVqQkMsWUFBVSxFQUFDLEtBVk07QUFXakJDLGFBQVcsRUFBQyxJQVhLO0FBYWpCQyxlQUFhLEVBQUMsS0FiRztBQWNqQkMsWUFBVSxFQUFDLEtBZE07QUFlakJDLGFBQVcsRUFBQyxJQWZLO0FBaUJqQkMsbUJBQWlCLEVBQUMsS0FqQkQ7QUFrQmpCQyxnQkFBYyxFQUFDLEtBbEJFO0FBbUJqQkMsaUJBQWUsRUFBQyxJQW5CQztBQXFCakJDLGlCQUFlLEVBQUMsS0FyQkM7QUFzQmpCQyxjQUFZLEVBQUMsS0F0Qkk7QUF1QmpCQyxlQUFhLEVBQUMsSUF2Qkc7QUF5QmpCQyxJQUFFLEVBQUMsSUF6QmM7QUEwQmpCQyxZQUFVLEVBQUMsRUExQk07QUEyQmpCQyxXQUFTLEVBQUM7QUEzQk8sQ0FBckI7QUErQk8sSUFBTUMsY0FBYyxHQUFHLDRCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsMEJBQXJCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLDZCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyw2QkFB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QUksQ0FBQ3RCLEVBQUwsS0FBWU8sTUFBTSxDQUFDVixJQUFQLENBQVlHLEVBQTFCO0FBQUEsU0FBMUIsQ0FBakI7QUFDQTs7QUFDSjtBQUNJO0FBQ0E7QUFsRlI7QUFvRkgsR0FyRmEsQ0FBZDtBQXNGSCxDQXZGRDs7QUF5RmVLLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzliNWQ5YzA3NTQ5NTJkNTJkOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ0luRG9uZTpmYWxzZSxcclxuICAgIGxvZ0luRXJvcnI6bnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTpmYWxzZSxcclxuICAgIGxvZ091dEVyb3JyOm51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOmZhbHNlLFxyXG4gICAgZm9sbG93RXJvcnI6bnVsbCxcclxuXHJcbiAgICB1bkZvbGxvd1VwTG9hZGluZzpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBEb25lOmZhbHNlLFxyXG4gICAgdW5Gb2xsb3dVcEVycm9yOm51bGwsXHJcblxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOmZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9SRU1PVkVfUE9TVF9UT19NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKT0+KHtcclxuICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gZGF0YT0+KHtcclxuICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgdHlwZTpTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhPT4oey8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgaWQ6MSxcclxuICAgIG5pY2tuYW1lOlwiZm94Ym94clwiLFxyXG4gICAgLi4uZGF0YSxcclxuICAgIFBvc3RzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxufSlcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOi8ve2RhdGE6e3Bvc3RVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOmFjdGlvbi5kYXRhLnBvc3RVc2VySWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzovL3tkYXRhOntwb3N0VXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcih2PT52LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0VXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOi8vZGF0YTp7aWR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDphY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6Ly9kYXRhOntpZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKHBvc3Q9PnBvc3QuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9