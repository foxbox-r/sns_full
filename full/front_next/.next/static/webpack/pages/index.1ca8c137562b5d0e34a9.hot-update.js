webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_ERROR, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_ERROR, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_ERROR, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_ERROR, REMOVE_IMAGE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_ERROR, addPostRequestAction, removePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_ERROR", function() { return ADD_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_ERROR", function() { return REMOVE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_ERROR", function() { return ADD_COMMENT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_ERROR", function() { return LOAD_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_ERROR", function() { return LIKE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_ERROR", function() { return UNLIKE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_ERROR", function() { return UPLOAD_IMAGES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_ERROR", function() { return RETWEET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostRequestAction", function() { return removePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [],
  imagePaths: [],
  addPostDone: false,
  addPostLoading: false,
  addPostError: null,
  loadPostDone: false,
  loadPostLoading: false,
  loadPostError: null,
  hasMorePosts: true,
  removePostDone: false,
  removePostLoading: false,
  removePostError: null,
  addCommentDone: false,
  addCommentLoading: false,
  addCommentError: null,
  likePostDone: false,
  likePostLoading: false,
  likePostError: null,
  unLikePostDone: false,
  unLikePostLoading: false,
  unLikePostError: null,
  uploadImagesDone: false,
  uploadImagesLoading: false,
  uploadImagesError: null,
  retweetDone: false,
  retweetLoading: false,
  retweetError: null
};

var getRandomImg = function getRandomImg() {
  var arr = [];
  var randomValue = Math.random() * 10 + 1;

  for (var i = 0; i < randomValue; i++) {
    arr.push({
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
    });
  }

  return arr;
};

var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function (v, i) {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: getRandomImg(),
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
      }]
    };
  });
};
initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(0));
var ADD_POST_REQUEST = "postReducer/ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "postReducer/ADD_POST_SUCCESS";
var ADD_POST_ERROR = "postReducer/ADD_POST_ERROR";
var REMOVE_POST_REQUEST = "postReducer/REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "postReducer/REMOVE_POST_SUCCESS";
var REMOVE_POST_ERROR = "postReducer/REMOVE_POST_ERROR";
var ADD_COMMENT_REQUEST = "postReducer/ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "postReducer/ADD_COMMENT_SUCCESS";
var ADD_COMMENT_ERROR = "postReducer/ADD_COMMENT_ERROR";
var LOAD_POST_REQUEST = "postReducer/LOAD_POST_REQUEST";
var LOAD_POST_SUCCESS = "postReducer/LOAD_POST_SUCCESS";
var LOAD_POST_ERROR = "postReducer/LOAD_POST_ERROR";
var LIKE_POST_REQUEST = "postReducer/LIKE_POST_REQUEST";
var LIKE_POST_SUCCESS = "postReducer/LIKE_POST_SUCCESS";
var LIKE_POST_ERROR = "postReducer/LIKE_POST_ERROR";
var UNLIKE_POST_REQUEST = "postReducer/UNLIKE_POST_REQUEST";
var UNLIKE_POST_SUCCESS = "postReducer/UNLIKE_POST_SUCCESS";
var UNLIKE_POST_ERROR = "postReducer/UNLIKE_POST_ERROR";
var UPLOAD_IMAGES_REQUEST = "postReducer/UPLOAD_IMAGES_REQUEST";
var UPLOAD_IMAGES_SUCCESS = "postReducer/UPLOAD_IMAGES_SUCCESS";
var UPLOAD_IMAGES_ERROR = "postReducer/UPLOAD_IMAGES_ERROR";
var REMOVE_IMAGE = "postReducer/REMOVE_IMAGE";
var RETWEET_REQUEST = "postReducer/RETWEET_REQUEST";
var RETWEET_SUCCESS = "postReducer/RETWEET_SUCCESS";
var RETWEET_ERROR = "postReducer/RETWEET_ERROR";
var addPostRequestAction = function addPostRequestAction(data) {
  return {
    //({postContent})
    type: ADD_POST_REQUEST,
    data: data
  };
};
var removePostRequestAction = function removePostRequestAction(data) {
  return {
    //({id})
    type: REMOVE_POST_REQUEST,
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    //({postId,content,userId})
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    //{id,postContent}
    id: data.id,
    content: data.postContent,
    User: {
      id: 1,
      nickname: "zero"
    },
    Images: getRandomValue(imgs),
    Comments: []
  };
};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        //data:addPostApi().data
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostError = action.data;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        //data:{postId}
        draft.mainPosts = draft.mainPosts.filter(function (post) {
          return post.id !== action.data.postId;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostError = action.data;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addComentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          //data:addCommentApi().data
          var post = draft.mainPosts.find(function (post) {
            return post.id === action.data.PostId;
          });
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_ERROR:
        //{data:err}
        draft.addCommentLoading = false;
        draft.addCommentError = action.data;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        //data:loadPostApi().data
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10; // 10개씩 게시글을 가져오므로 10 미만일때 false 

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_POST_ERROR:
        draft.loadPostLoading = false;
        draft.loadPostError = action.data;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          //{data:{postId,UserId}}
          console.log("=========", draft.mainPosts);
          draft.likePostLoading = false;
          draft.likePostDone = true;

          var _post = draft.mainPosts.find(function (post) {
            return post.id === action.data.postId;
          });

          _post.Likers.push({
            id: action.data.UserId
          });

          break;
        }

      case LIKE_POST_ERROR:
        draft.likePostLoading = false;
        draft.likePostError = action.data;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unLikePostLoading = true;
        draft.unLikePostDone = false;
        draft.unLikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          //{data:{postId,UserId}}
          draft.unLikePostLoading = false;
          draft.unLikePostDone = true;

          var _post2 = draft.mainPosts.find(function (post) {
            return post.id === action.data.postId;
          });

          _post2.Likers = _post2.Likers.filter(function (user) {
            return user.id !== action.data.UserId;
          });
          break;
        }

      case UNLIKE_POST_ERROR:
        draft.unLikePostLoading = false;
        draft.unLikePostError = action.data;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.upLoadLoading = true;
        draft.upLoadDone = false;
        draft.upLoadError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        // {data:uploadImagesApi().data}
        draft.imagePaths = action.data;
        draft.upLoadLoading = false;
        draft.upLoadDone = true;
        break;

      case UPLOAD_IMAGES_ERROR:
        draft.upLoadLoading = false;
        draft.upLoadError = action.data;
        break;

      case REMOVE_IMAGE:
        // {data:index}
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        // 
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case RETWEET_ERROR:
        draft.retweetLoading = false;
        draft.retweetError = action.data.response.data;
        break;

      default:
        // return state;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (postReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RXJyb3IiLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdEVycm9yIiwiaGFzTW9yZVBvc3RzIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RXJyb3IiLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwidW5MaWtlUG9zdERvbmUiLCJ1bkxpa2VQb3N0TG9hZGluZyIsInVuTGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZ2V0UmFuZG9tSW1nIiwiYXJyIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwicmFuZG9tIiwiaSIsInB1c2giLCJzcmMiLCJmYWtlciIsImltYWdlIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiY29uY2F0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9FUlJPUiIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRVJST1IiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0VSUk9SIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9FUlJPUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRVJST1IiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0VSUk9SIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19FUlJPUiIsIlJFTU9WRV9JTUFHRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRVJST1IiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdCIsInBvc3RDb250ZW50IiwiZ2V0UmFuZG9tVmFsdWUiLCJpbWdzIiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJmaWx0ZXIiLCJwb3N0IiwicG9zdElkIiwiYWRkQ29tZW50RG9uZSIsImZpbmQiLCJQb3N0SWQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiTGlrZXJzIiwiVXNlcklkIiwidXNlciIsInVwTG9hZExvYWRpbmciLCJ1cExvYWREb25lIiwidXBMb2FkRXJyb3IiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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RCxFQUFHVixDQUFIO0FBQUEsaUJBQVFBLENBQUMsS0FBSzZELE1BQU0sQ0FBQ1YsSUFBckI7QUFBQSxTQUF4QixDQUFuQjtBQUNBOztBQUVKLFdBQUtKLGVBQUw7QUFDSWdCLGFBQUssQ0FBQ3RFLGNBQU4sR0FBdUIsSUFBdkI7QUFDQXNFLGFBQUssQ0FBQ3ZFLFdBQU4sR0FBb0IsS0FBcEI7QUFDQXVFLGFBQUssQ0FBQ3JFLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDSixXQUFLc0QsZUFBTDtBQUFzQjtBQUNsQmUsYUFBSyxDQUFDdEUsY0FBTixHQUF1QixLQUF2QjtBQUNBc0UsYUFBSyxDQUFDdkUsV0FBTixHQUFvQixJQUFwQjtBQUNBdUUsYUFBSyxDQUFDL0YsU0FBTixDQUFnQmdHLE9BQWhCLENBQXdCSCxNQUFNLENBQUNWLElBQS9CO0FBQ0E7O0FBQ0osV0FBS0YsYUFBTDtBQUNJYyxhQUFLLENBQUN0RSxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FzRSxhQUFLLENBQUNyRSxZQUFOLEdBQXFCbUUsTUFBTSxDQUFDVixJQUFQLENBQVk2QixRQUFaLENBQXFCN0IsSUFBMUM7QUFDQTs7QUFFSjtBQUNJO0FBQ0E7QUF6SVI7QUEySUgsR0E1SWEsQ0FBZDtBQTZJSCxDQTlJRDs7QUFnSmVRLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFjYThjMTM3NTYyYjVkMGUzNGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOltdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgbG9hZFBvc3REb25lOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgaGFzTW9yZVBvc3RzOnRydWUsXHJcblxyXG4gICAgcmVtb3ZlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgdW5MaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICB1bkxpa2VQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHVuTGlrZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0RvbmU6ZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6bnVsbCxcclxuXHJcbiAgICByZXR3ZWV0RG9uZTpmYWxzZSxcclxuICAgIHJldHdlZXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOm51bGwsXHJcbn1cclxuY29uc3QgZ2V0UmFuZG9tSW1nID0gKCk9PntcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpKjEwKzE7XHJcbiAgICBmb3IobGV0IGk9MDtpPHJhbmRvbVZhbHVlO2krKylcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSBudW1iZXIgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCh2LGkpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbUltZygpLFxyXG4gICAgQ29tbWVudHM6W3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMCkpXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1VOTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfSU1BR0VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe3Bvc3RDb250ZW50fSlcclxuICAgIHR5cGU6QUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe2lkfSlcclxuICAgIHR5cGU6UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpPT4oey8vKHtwb3N0SWQsY29udGVudCx1c2VySWR9KVxyXG4gICAgdHlwZTpBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpPT4gKHsvL3tpZCxwb3N0Q29udGVudH1cclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEucG9zdENvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwiemVyb1wiXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbVZhbHVlKGltZ3MpLFxyXG4gICAgQ29tbWVudHM6W10sXHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmFkZFBvc3RBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzovL2RhdGE6e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6ey8vZGF0YTphZGRDb21tZW50QXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHBvc3Q9PnBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRVJST1I6Ly97ZGF0YTplcnJ9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOi8vZGF0YTpsb2FkUG9zdEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDsgLy8gMTDqsJzslKkg6rKM7Iuc6riA7J2EIOqwgOyguOyYpOuvgOuhnCAxMCDrr7jrp4zsnbzrlYwgZmFsc2UgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6ey8ve2RhdGE6e3Bvc3RJZCxVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT1cIixkcmFmdC5tYWluUG9zdHMpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQocG9zdD0+cG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6YWN0aW9uLmRhdGEuVXNlcklkfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzp7Ly97ZGF0YTp7cG9zdElkLFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHBvc3QgPT4gcG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzogLy8ge2RhdGE6dXBsb2FkSW1hZ2VzQXBpKCkuZGF0YX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6ICAvLyB7ZGF0YTppbmRleH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodixpKT0+IGkgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiAvLyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5kYXRhLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==