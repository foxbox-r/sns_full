webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_ERROR, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_ERROR, ADD_POST_TO_ME, REMOVE_POST_TO_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_ERROR, CHANGE_USER_REQUEST, CHANGE_USER_SUCCESS, CHANGE_USER_ERROR, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_ERROR, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_ERROR, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_ERROR, logoutRequestAction, loginRequestAction, signupRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_ERROR", function() { return LOAD_MY_INFO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_REQUEST", function() { return CHANGE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_SUCCESS", function() { return CHANGE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_ERROR", function() { return CHANGE_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_ERROR", function() { return LOAD_FOLLOWERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_ERROR", function() { return LOAD_FOLLOWINGS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_ERROR", function() { return REMOVE_FOLLOWER_ERROR; });
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
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  userInfo: null,
  changeUserLoading: false,
  changeUserDone: false,
  changeUserError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
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
var LOAD_MY_INFO_REQUEST = "postReducer/LOAD_MY_INFO_REQUEST";
var LOAD_MY_INFO_SUCCESS = "postReducer/LOAD_MY_INFO_SUCCESS";
var LOAD_MY_INFO_ERROR = "postReducer/LOAD_MY_INFO_ERROR";
var CHANGE_USER_REQUEST = "postReducer/CHANGE_USER_REQUEST";
var CHANGE_USER_SUCCESS = "postReducer/CHANGE_USER_SUCCESS";
var CHANGE_USER_ERROR = "postReducer/CHANGE_USER_ERROR";
var LOAD_FOLLOWERS_REQUEST = "postReducer/LOAD_FOLLOWERS_REQUEST";
var LOAD_FOLLOWERS_SUCCESS = "postReducer/LOAD_FOLLOWERS_SUCCESS";
var LOAD_FOLLOWERS_ERROR = "postReducer/LOAD_FOLLOWERS_ERROR";
var LOAD_FOLLOWINGS_REQUEST = "postReducer/LOAD_FOLLOWINGS_REQUEST";
var LOAD_FOLLOWINGS_SUCCESS = "postReducer/LOAD_FOLLOWINGS_SUCCESS";
var LOAD_FOLLOWINGS_ERROR = "postReducer/LOAD_FOLLOWINGS_ERROR";
var REMOVE_FOLLOWER_REQUEST = "postReducer/REMOVE_FOLLOWER_REQUEST";
var REMOVE_FOLLOWER_SUCCESS = "postReducer/REMOVE_FOLLOWER_SUCCESS";
var REMOVE_FOLLOWER_ERROR = "postReducer/REMOVE_FOLLOWER_ERROR";
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
        //{data:{userId}}
        draft.followDone = true;
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data.userId
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
        //{data:{userId}}
        draft.unFollowDone = true;
        draft.unFollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.userId;
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
        //data:{postId}
        draft.me.Posts = draft.me.Posts.filter(function (post) {
          return post.id !== action.data.postId;
        });
        break;

      case LOAD_USER_REQUEST:
        //data:loadMyInfoApi().data
        draft.loadUserLoading = true;
        draft.loadUserErorr = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserDone = true;
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_ERROR:
        draft.loadUserLoading = false;
        draft.loadUserError = action.data;
        break;

      case LOAD_MY_INFO_REQUEST:
        //data:loadMyInfoApi().data
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoErorr = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoDone = true;
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.data;
        break;

      case CHANGE_USER_REQUEST:
        //data:changeUserApi().data
        draft.changeUserLoading = true;
        draft.changeUserErorr = null;
        break;

      case CHANGE_USER_SUCCESS:
        //{data:nickname}
        draft.changeUserDone = true;
        draft.changeUserLoading = false;
        draft.me.nickname = action.data;
        break;

      case CHANGE_USER_ERROR:
        draft.changeUserLoading = false;
        draft.changeUserError = action.data;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        //data:loadFollowersApi().data
        draft.loadFollowersLoading = true;
        draft.loadFollowersErorr = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersDone = true;
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_ERROR:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.data;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        //data:loadFollowingsApi().data
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsErorr = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsDone = true;
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_ERROR:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.data;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        //data:removeFollowerApi().data
        draft.removeFollowerLoading = true;
        draft.removeFollowerErorr = null;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerDone = true;
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(function (user) {
          return user.id !== action.data.userId;
        });
        break;

      case REMOVE_FOLLOWER_ERROR:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5Fcm9yciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJvcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcm9yciIsInVuRm9sbG93VXBMb2FkaW5nIiwidW5Gb2xsb3dVcERvbmUiLCJ1bkZvbGxvd1VwRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInVzZXJJbmZvIiwiY2hhbmdlVXNlckxvYWRpbmciLCJjaGFuZ2VVc2VyRG9uZSIsImNoYW5nZVVzZXJFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRVJST1IiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0VSUk9SIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9FUlJPUiIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRVJST1IiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0VSUk9SIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9UT19NRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRVJST1IiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0VSUk9SIiwiQ0hBTkdFX1VTRVJfUkVRVUVTVCIsIkNIQU5HRV9VU0VSX1NVQ0NFU1MiLCJDSEFOR0VfVVNFUl9FUlJPUiIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRVJST1IiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0VSUk9SIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9FUlJPUiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZvbGxvd0Vycm9yIiwicHVzaCIsInVzZXJJZCIsInVuRm9sbG93TG9hZGluZyIsInVuRm9sbG93RXJyb3IiLCJ1bkZvbGxvd0RvbmUiLCJmaWx0ZXIiLCJ2IiwibG9nSW5FcnJvciIsImxvZ091dEVycm9yIiwic2lnblVwRXJvcnIiLCJ1bnNoaWZ0IiwicG9zdCIsInBvc3RJZCIsImxvYWRVc2VyRXJvcnIiLCJsb2FkTXlJbmZvRXJvcnIiLCJjaGFuZ2VVc2VyRXJvcnIiLCJsb2FkRm9sbG93ZXJzRXJvcnIiLCJsb2FkRm9sbG93aW5nc0Vyb3JyIiwicmVtb3ZlRm9sbG93ZXJFcm9yciIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxjQUFZLEVBQUMsS0FESTtBQUVqQkMsV0FBUyxFQUFDLEtBRk87QUFHakJDLFlBQVUsRUFBQyxJQUhNO0FBS2pCQyxlQUFhLEVBQUMsS0FMRztBQU1qQkMsWUFBVSxFQUFDLEtBTk07QUFPakJDLGFBQVcsRUFBQyxJQVBLO0FBU2pCQyxlQUFhLEVBQUMsS0FURztBQVVqQkMsWUFBVSxFQUFDLEtBVk07QUFXakJDLGFBQVcsRUFBQyxJQVhLO0FBYWpCQyxlQUFhLEVBQUMsS0FiRztBQWNqQkMsWUFBVSxFQUFDLEtBZE07QUFlakJDLGFBQVcsRUFBQyxJQWZLO0FBaUJqQkMsbUJBQWlCLEVBQUMsS0FqQkQ7QUFrQmpCQyxnQkFBYyxFQUFDLEtBbEJFO0FBbUJqQkMsaUJBQWUsRUFBQyxJQW5CQztBQXFCakJDLGlCQUFlLEVBQUMsS0FyQkM7QUFzQmpCQyxjQUFZLEVBQUMsS0F0Qkk7QUF1QmpCQyxlQUFhLEVBQUMsSUF2Qkc7QUF5QmpCQyxtQkFBaUIsRUFBQyxLQXpCRDtBQTBCakJDLGdCQUFjLEVBQUMsS0ExQkU7QUEyQmpCQyxpQkFBZSxFQUFDLElBM0JDO0FBNkJqQkMsVUFBUSxFQUFDLElBN0JRO0FBK0JqQkMsbUJBQWlCLEVBQUMsS0EvQkQ7QUFnQ2pCQyxnQkFBYyxFQUFDLEtBaENFO0FBaUNqQkMsaUJBQWUsRUFBQyxJQWpDQztBQW1DakJDLHNCQUFvQixFQUFDLEtBbkNKO0FBb0NqQkMsbUJBQWlCLEVBQUMsS0FwQ0Q7QUFxQ2pCQyxvQkFBa0IsRUFBQyxJQXJDRjtBQXVDakJDLHVCQUFxQixFQUFDLEtBdkNMO0FBd0NqQkMsb0JBQWtCLEVB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Tix1QkFBTDtBQUE2QjtBQUN6QmtCLGFBQUssQ0FBQ3hELHFCQUFOLEdBQThCLElBQTlCO0FBQ0F3RCxhQUFLLENBQUNvQixtQkFBTixHQUE0QixJQUE1QjtBQUNBOztBQUNKLFdBQUtyQyx1QkFBTDtBQUNJaUIsYUFBSyxDQUFDdkQsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQXVELGFBQUssQ0FBQ3hELHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F3RCxhQUFLLENBQUNyRCxFQUFOLENBQVNnRCxTQUFULEdBQXFCSyxLQUFLLENBQUNyRCxFQUFOLENBQVNnRCxTQUFULENBQW1CWSxNQUFuQixDQUEwQixVQUFBYyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQzlCLEVBQUwsS0FBWU8sTUFBTSxDQUFDVixJQUFQLENBQVllLE1BQTVCO0FBQUEsU0FBOUIsQ0FBckI7QUFDQTs7QUFDSixXQUFLbkIscUJBQUw7QUFDSWdCLGFBQUssQ0FBQ3hELHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F3RCxhQUFLLENBQUN0RCxtQkFBTixHQUE0Qm9ELE1BQU0sQ0FBQ1YsSUFBbkM7QUFDQTs7QUFFSjtBQUNJO0FBQ0E7QUF2S1I7QUF5S0gsR0ExS2EsQ0FBZDtBQTJLSCxDQTVLRDs7QUE4S2VRLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyNDg5ZWY3MTY1MWE0NzJiZTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dJbkVyb3JyOm51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ091dERvbmU6ZmFsc2UsXHJcbiAgICBsb2dPdXRFcm9ycjpudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIGZvbGxvd0Vyb3JyOm51bGwsXHJcblxyXG4gICAgdW5Gb2xsb3dVcExvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bkZvbGxvd1VwRG9uZTpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRVc2VyTG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRVc2VyRG9uZTpmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6bnVsbCxcclxuICAgIFxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZTpmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjpudWxsLFxyXG5cclxuICAgIHVzZXJJbmZvOm51bGwsXHJcblxyXG4gICAgY2hhbmdlVXNlckxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VVc2VyRG9uZTpmYWxzZSxcclxuICAgIGNoYW5nZVVzZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOm51bGwsXHJcblxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9SRU1PVkVfUE9TVF9UT19NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfTVlfSU5GT19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfTVlfSU5GT19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX0VSUk9SID0gXCJwb3N0UmVkdWNlci9DSEFOR0VfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0VSU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9FUlJPUlwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpPT4oe1xyXG4gICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHsvL3tkYXRhOntlbWFpbCxwYXNzd29yZH19XHJcbiAgICB0eXBlOlNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IGRhdGE9Pih7Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICBpZDoxLFxyXG4gICAgbmlja25hbWU6XCJmb3hib3hyXCIsXHJcbiAgICAuLi5kYXRhLFxyXG4gICAgUG9zdHM6W3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG59KVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7dXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YS51c2VySWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzovL3tkYXRhOnt1c2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKHY9PnYuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOi8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTovL2RhdGE6e2lkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1RPX01FOi8vZGF0YTp7cG9zdElkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmxvYWRNeUluZm9BcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDovL2RhdGE6bG9hZE15SW5mb0FwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Fcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmNoYW5nZVVzZXJBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX1VTRVJfU1VDQ0VTUzovL3tkYXRhOm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfVVNFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZVVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93ZXJzQXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93aW5nc0FwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOi8vZGF0YTpyZW1vdmVGb2xsb3dlckFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=