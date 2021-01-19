webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostImages */ "./components/PostImages.js");
/* harmony import */ var _components_CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");



var _jsxFileName = "C:\\WEB\\full\\front_next\\components\\PostCard.js",
    _s = $RefreshSig$();











function PostCard(_ref) {
  _s();

  var _this = this;

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpenend = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.userReducer;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.postReducer;
  }),
      removePostLoading = _useSelector2.removePostLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var id = me === null || me === void 0 ? void 0 : me.id; //  me && me.id 

  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var liked = post.Likers.find(function (user) {
    return user.id === id;
  });
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpenend(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (id) {
    dispatch(Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__["removePostRequestAction"])({
      id: id
    }));
  }, []);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert("로그인하세요.");
    }

    return dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 42
      }, this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 30
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 101
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              loading: false,
              type: "danger",
              onClick: function onClick() {
                return onRemovePost(post.id);
              },
              children: removePostLoading ? "로딩..." : "삭제"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 30
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 33
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
              author: item.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

_s(PostCard, "4tu9bpKIA+cRGSs2N4daV907B3E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ }),

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
        draft.hasMorePosts = draft.mainPosts.length < 10;
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
        break;

      case RETWEET_ERROR:
        draft.retweetLoading = false;
        draft.retweetError = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0IiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVuZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsIm1lIiwicG9zdFJlZHVjZXIiLCJyZW1vdmVQb3N0TG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5MaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInVzZXIiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwicmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24iLCJvblJldHdlZXQiLCJhbGVydCIsIlJFVFdFRVRfUkVRVUVTVCIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RXJyb3IiLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwidW5MaWtlUG9zdERvbmUiLCJ1bkxpa2VQb3N0TG9hZGluZyIsInVuTGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZ2V0UmFuZG9tSW1nIiwiYXJyIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwicmFuZG9tIiwiaSIsInB1c2giLCJzcmMiLCJmYWtlciIsImltYWdlIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRVJST1IiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0VSUk9SIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9FUlJPUiIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRVJST1IiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9FUlJPUiIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9FUlJPUiIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRVJST1IiLCJSRU1PVkVfSU1BR0UiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0VSUk9SIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdCIsInBvc3RDb250ZW50IiwiZ2V0UmFuZG9tVmFsdWUiLCJpbWdzIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImZpbHRlciIsInBvc3RJZCIsImFkZENvbWVudERvbmUiLCJQb3N0SWQiLCJjb25zb2xlIiwibG9nIiwiVXNlcklkIiwidXBMb2FkTG9hZGluZyIsInVwTG9hZERvbmUiLCJ1cExvYWRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTs7QUFBQSxrQkFFNkJDLHNEQUFRLENBQUMsS0FBRCxDQUZyQztBQUFBLE1BRWRDLGlCQUZjO0FBQUEsTUFFSUMscUJBRko7O0FBQUEscUJBR1JDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0MsV0FBUjtBQUFBLEdBQU4sQ0FISDtBQUFBLE1BR2RDLEVBSGMsZ0JBR2RBLEVBSGM7O0FBQUEsc0JBSVFILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0csV0FBUjtBQUFBLEdBQU4sQ0FKbkI7QUFBQSxNQUlkQyxpQkFKYyxpQkFJZEEsaUJBSmM7O0FBS3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxFQUFFLEdBQUdMLEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFSyxFQUFmLENBTnFCLENBTUg7O0FBRWxCLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQzNCSixZQUFRLENBQUM7QUFDTEssVUFBSSxFQUFDQyx1RUFEQTtBQUVMQyxVQUFJLEVBQUNqQixJQUFJLENBQUNZO0FBRkwsS0FBRCxDQUFSO0FBSUgsR0FMeUIsRUFLeEIsRUFMd0IsQ0FBMUI7QUFPQSxNQUFNTSxRQUFRLEdBQUdKLHlEQUFXLENBQUMsWUFBSTtBQUM3QkosWUFBUSxDQUFDO0FBQ0xLLFVBQUks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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzNiOWIzMmNmZjMyNWY1YjFmZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsUG9wb3ZlcixBdmF0YXIsTGlzdCxDb21tZW50fSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7UmV0d2VldE91dGxpbmVkLEhlYXJ0VHdvVG9uZSxIZWFydE91dGxpbmVkLE1lc3NhZ2VPdXRsaW5lZCxFbGxpcHNpc091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIlxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWVudEZvcm1cIlxyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudFwiXHJcbmltcG9ydCB7cmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24sTElLRV9QT1NUX1JFUVVFU1QsVU5MSUtFX1BPU1RfUkVRVUVTVCxSRVRXRUVUX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCJcclxuXHJcbmZ1bmN0aW9uIFBvc3RDYXJkKHtwb3N0fSl7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLHNldENvbW1lbnRGb3JtT3BlbmVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJSZWR1Y2VyKTtcclxuICAgIGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZ30gID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkOy8vICBtZSAmJiBtZS5pZCBcclxuXHJcbiAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOnBvc3QuaWRcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBpZCk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lbmQocHJldj0+IXByZXYpO1xyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKChpZCk9PntcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbih7aWR9KSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduO2VmOyEuOyalC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOnBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW2lkXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIG9uQ2xpY2s9e29uUmV0d2VldH0ga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIChsaWtlZCA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiICBvbkNsaWNrPXtvblVuTGlrZX0ga2V5PVwiaGVhcnRcIi8+OjxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uTGlrZX0ga2V5PVwiaGVhcnRcIi8+KSxcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmYWxzZX0gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpPT5vblJlbW92ZVBvc3QocG9zdC5pZCl9PntyZW1vdmVQb3N0TG9hZGluZz9cIuuhnOuUqS4uLlwiOlwi7IKt7KCcXCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz46PEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2UgLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOltdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgbG9hZFBvc3REb25lOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgaGFzTW9yZVBvc3RzOnRydWUsXHJcblxyXG4gICAgcmVtb3ZlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgdW5MaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICB1bkxpa2VQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHVuTGlrZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0RvbmU6ZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6bnVsbCxcclxuXHJcbiAgICByZXR3ZWV0RG9uZTpmYWxzZSxcclxuICAgIHJldHdlZXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOm51bGwsXHJcbn1cclxuY29uc3QgZ2V0UmFuZG9tSW1nID0gKCk9PntcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpKjEwKzE7XHJcbiAgICBmb3IobGV0IGk9MDtpPHJhbmRvbVZhbHVlO2krKylcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSBudW1iZXIgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCh2LGkpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbUltZygpLFxyXG4gICAgQ29tbWVudHM6W3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMCkpXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1VOTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfSU1BR0VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe3Bvc3RDb250ZW50fSlcclxuICAgIHR5cGU6QUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe2lkfSlcclxuICAgIHR5cGU6UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpPT4oey8vKHtwb3N0SWQsY29udGVudCx1c2VySWR9KVxyXG4gICAgdHlwZTpBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpPT4gKHsvL3tpZCxwb3N0Q29udGVudH1cclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEucG9zdENvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwiemVyb1wiXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbVZhbHVlKGltZ3MpLFxyXG4gICAgQ29tbWVudHM6W10sXHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmFkZFBvc3RBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzovL2RhdGE6e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6ey8vZGF0YTphZGRDb21tZW50QXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHBvc3Q9PnBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRVJST1I6Ly97ZGF0YTplcnJ9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOi8vZGF0YTpsb2FkUG9zdEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aDwxMDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzp7Ly97ZGF0YTp7cG9zdElkLFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PVwiLGRyYWZ0Lm1haW5Qb3N0cylcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChwb3N0PT5wb3N0LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDphY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOnsvL3tkYXRhOntwb3N0SWQsVXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQocG9zdCA9PiBwb3N0LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiAvLyB7ZGF0YTp1cGxvYWRJbWFnZXNBcGkoKS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTogIC8vIHtkYXRhOmluZGV4fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LGkpPT4gaSAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6IC8vIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==