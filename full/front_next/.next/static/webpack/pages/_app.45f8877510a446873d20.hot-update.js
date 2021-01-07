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

      case LOAD_USER_REQUEST:
        //data:loadUserApi().data
        draft.loadUserLoading = true;
        draft.loadUserErorr = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserDone = true;
        draft.loadUserLoading = false;
        draft.me = action.data;
        break;

      case LOAD_USER_ERROR:
        draft.loadUserLoading = false;
        draft.loadUserError = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5Fcm9yciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJvcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcm9yciIsInVuRm9sbG93VXBMb2FkaW5nIiwidW5Gb2xsb3dVcERvbmUiLCJ1bkZvbGxvd1VwRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9FUlJPUiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRVJST1IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0VSUk9SIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRVJST1IiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZvbGxvd0Vycm9yIiwicHVzaCIsInBvc3RVc2VySWQiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0Vycm9yIiwidW5Gb2xsb3dEb25lIiwiZmlsdGVyIiwidiIsImxvZ0luRXJyb3IiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIiwidW5zaGlmdCIsInBvc3QiLCJsb2FkVXNlckVyb3JyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsY0FBWSxFQUFDLEtBREk7QUFFakJDLFdBQVMsRUFBQyxLQUZPO0FBR2pCQyxZQUFVLEVBQUMsSUFITTtBQUtqQkMsZUFBYSxFQUFDLEtBTEc7QUFNakJDLFlBQVUsRUFBQyxLQU5NO0FBT2pCQyxhQUFXLEVBQUMsSUFQSztBQVNqQkMsZUFBYSxFQUFDLEtBVEc7QUFVakJDLFlBQVUsRUFBQyxLQVZNO0FBV2pCQyxhQUFXLEVBQUMsSUFYSztBQWFqQkMsZUFBYSxFQUFDLEtBYkc7QUFjakJDLFlBQVUsRUFBQyxLQWRNO0FBZWpCQyxhQUFXLEVBQUMsSUFmSztBQWlCakJDLG1CQUFpQixFQUFDLEtBakJEO0FBa0JqQkMsZ0JBQWMsRUFBQyxLQWxCRTtBQW1CakJDLGlCQUFlLEVBQUMsSUFuQkM7QUFxQmpCQyxpQkFBZSxFQUFDLEtBckJDO0FBc0JqQkMsY0FBWSxFQUFDLEtBdEJJO0FBdUJqQkMsZUFBYSxFQUFDLElBdkJHO0FBeUJqQkMsSUFBRSxFQUFDLElBekJjO0FBMEJqQkMsWUFBVSxFQUFDLEVBMUJNO0FBMkJqQkMsV0FBUyxFQUFDO0FBM0JPLENBQXJCO0FBK0JPLElBQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsNEJBQXZCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLDBCQUFyQjtBQUVBLElBQU1DLGVBQWUsR0FBRyw2QkFBeEI7QUFDQSxJQUFN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STtBQUFBLGlCQUFFQSxJQUFJLENBQUN0QixFQUFMLEtBQVlPLE1BQU0sQ0FBQ1YsSUFBUCxDQUFZRyxFQUExQjtBQUFBLFNBQTFCLENBQWpCO0FBQ0E7O0FBRUosV0FBS1QsaUJBQUw7QUFBdUI7QUFDbkJrQixhQUFLLENBQUN6QyxlQUFOLEdBQXdCLElBQXhCO0FBQ0F5QyxhQUFLLENBQUNjLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDSixXQUFLL0IsaUJBQUw7QUFDSWlCLGFBQUssQ0FBQ3hDLFlBQU4sR0FBcUIsSUFBckI7QUFDQXdDLGFBQUssQ0FBQ3pDLGVBQU4sR0FBd0IsS0FBeEI7QUFDQXlDLGFBQUssQ0FBQ3RDLEVBQU4sR0FBV29DLE1BQU0sQ0FBQ1YsSUFBbEI7QUFDQTs7QUFDSixXQUFLSixlQUFMO0FBQ0lnQixhQUFLLENBQUN6QyxlQUFOLEdBQXdCLEtBQXhCO0FBQ0F5QyxhQUFLLENBQUN2QyxhQUFOLEdBQXNCcUMsTUFBTSxDQUFDVixJQUE3QjtBQUNBOztBQUVKO0FBQ0k7QUFDQTtBQWpHUjtBQW1HSCxHQXBHYSxDQUFkO0FBcUdILENBdEdEOztBQXdHZVEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NWY4ODc3NTEwYTQ0Njg3M2QyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOmZhbHNlLFxyXG4gICAgbG9nSW5Fcm9ycjpudWxsLFxyXG5cclxuICAgIGxvZ091dExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOmZhbHNlLFxyXG4gICAgbG9nT3V0RXJvcnI6bnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzpmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dFcm9ycjpudWxsLFxyXG5cclxuICAgIHVuRm9sbG93VXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgdW5Gb2xsb3dVcERvbmU6ZmFsc2UsXHJcbiAgICB1bkZvbGxvd1VwRXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkVXNlckRvbmU6ZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOm51bGwsXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e30sXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0xPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19JTl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9FUlJPUiA9IFwidXNlclJlZHVjZXIvTE9HX09VVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9FUlJPUiA9IFwidXNlclJlZHVjZXIvU0lHTl9VUF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0ZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0ZPTExPV19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1VORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL1VORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9BRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfVE9fTUUgPSBcInVzZXJSZWR1Y2VyL1JFTU9WRV9QT1NUX1RPX01FXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTE9BRF9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTE9BRF9VU0VSX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpPT4oe1xyXG4gICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHsvL3tkYXRhOntlbWFpbCxwYXNzd29yZH19XHJcbiAgICB0eXBlOlNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IGRhdGE9Pih7Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICBpZDoxLFxyXG4gICAgbmlja25hbWU6XCJmb3hib3hyXCIsXHJcbiAgICAuLi5kYXRhLFxyXG4gICAgUG9zdHM6W3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG59KVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7cG9zdFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6YWN0aW9uLmRhdGEucG9zdFVzZXJJZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOi8ve2RhdGE6e3Bvc3RVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKHY9PnYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RVc2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzovL3tlbWFpbCxuaWNrbmFtZSxwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6Ly9kYXRhOntpZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9UT19NRTovL2RhdGE6e2lkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDovL2RhdGE6bG9hZFVzZXJBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9