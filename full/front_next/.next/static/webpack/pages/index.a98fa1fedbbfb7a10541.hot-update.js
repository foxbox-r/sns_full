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
      removePostLoading = _useSelector2.removePostLoading,
      retweetError = _useSelector2.retweetError;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var id = me === null || me === void 0 ? void 0 : me.id; //  me && me.id 
  // useEffect(()=>{
  //     if(retweetError){
  //         alert(retweetError);
  //     }
  // },[retweetError])

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
        lineNumber: 61,
        columnNumber: 42
      }, this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 30
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 101
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
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
              lineNumber: 71,
              columnNumber: 33
            }, this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 30
      }, this),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 50
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
            children: post.Retweet.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 30
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
                lineNumber: 107,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

_s(PostCard, "3kv+w8D3dX7ShaIpyDrd9BKnU9o=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWUiLCJwb3N0UmVkdWNlciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidXNlciIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiIsIm9uUmV0d2VldCIsImFsZXJ0IiwiUkVUV0VFVF9SRVFVRVNUIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXRJZCIsIlJldHdlZXQiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBQUEsa0JBRTZCQyxzREFBUSxDQUFDLEtBQUQsQ0FGckM7QUFBQSxNQUVkQyxpQkFGYztBQUFBLE1BRUlDLHFCQUZKOztBQUFBLHFCQUdSQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLFdBQVI7QUFBQSxHQUFOLENBSEg7QUFBQSxNQUdkQyxFQUhjLGdCQUdkQSxF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SUFBSSxDQUFDSixRQURqQjtBQUVJLG9CQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBQSwwQkFBU0ksSUFBSSxDQUFDUCxJQUFMLENBQVVHLFFBQVYsQ0FBbUIsQ0FBbkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZaO0FBR0kscUJBQU8sRUFBRUksSUFBSSxDQUFDSDtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2REg7O0dBNUdRdEMsUTtVQUdRSyx1RCxFQUM2QkEsdUQsRUFDekJRLHVEOzs7S0FMWmIsUTtBQThHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk4ZmExZmVkYmJmYjdhMTA1NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCxQb3BvdmVyLEF2YXRhcixMaXN0LENvbW1lbnR9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHtSZXR3ZWV0T3V0bGluZWQsSGVhcnRUd29Ub25lLEhlYXJ0T3V0bGluZWQsTWVzc2FnZU91dGxpbmVkLEVsbGlwc2lzT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEltYWdlc1wiXHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tZW50Rm9ybVwiXHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50XCJcclxuaW1wb3J0IHtyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbixMSUtFX1BPU1RfUkVRVUVTVCxVTkxJS0VfUE9TVF9SRVFVRVNULFJFVFdFRVRfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCJcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIlxyXG5cclxuZnVuY3Rpb24gUG9zdENhcmQoe3Bvc3R9KXtcclxuXHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsc2V0Q29tbWVudEZvcm1PcGVuZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3Qge3JlbW92ZVBvc3RMb2FkaW5nLHJldHdlZXRFcnJvcn0gID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkOy8vICBtZSAmJiBtZS5pZCBcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBpZihyZXR3ZWV0RXJyb3Ipe1xyXG4gICAgLy8gICAgICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sW3JldHdlZXRFcnJvcl0pXHJcblxyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZW5kKHByZXY9PiFwcmV2KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoaWQpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24oe2lkfSkpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjtlZjshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtpZF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBvbkNsaWNrPXtvblJldHdlZXR9IGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAobGlrZWQgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiAgb25DbGljaz17b25Vbkxpa2V9IGtleT1cImhlYXJ0XCIvPjo8SGVhcnRPdXRsaW5lZCBvbkNsaWNrPXtvbkxpa2V9IGtleT1cImhlYXJ0XCIvPiksXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17ZmFsc2V9IHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKT0+b25SZW1vdmVQb3N0KHBvc3QuaWQpfT57cmVtb3ZlUG9zdExvYWRpbmc/XCLroZzrlKkuLi5cIjpcIuyCreygnFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+OjxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgIHtwb3N0LlJldHdlZXRJZCAmJiBwb3N0LlJldHdlZXQ/XHJcbiAgICAgICAgICAgICAoPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LlJldHdlZXQuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L0NhcmQ+KVxyXG4gICAgICAgICAgICAgOig8Q2FyZC5NZXRhIFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==