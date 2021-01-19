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
      title: post.Retweet ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uD588\uC2B5\uB2C8\uB2E4.") : NULL,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 30
      }, this),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 50
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
            children: post.Retweet.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 30
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
        lineNumber: 99,
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
                lineNumber: 108,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWUiLCJwb3N0UmVkdWNlciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidXNlciIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiIsIm9uUmV0d2VldCIsImFsZXJ0IiwiUkVUV0VFVF9SRVFVRVNUIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXQiLCJuaWNrbmFtZSIsIk5VTEwiLCJSZXR3ZWV0SWQiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNOztBQUFBLGtCQUU2QkMsc0RBQVEsQ0FBQyxLQUFELENBRnJDO0FBQUEsTUFFZEMsaUJBRmM7QUFBQSxNQUVJQyxxQkFGSjs7QUFBQSxxQkFHUkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDQyxXQUFSO0FBQUEsR0FBTixDQUhIO0FBQUEsTUFHZEMsRUFIYyxn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SSxDQUFDdUMsUUFIckI7QUFJSSxrQkFBVSxFQUFFLG9CQUFDRSxJQUFEO0FBQUEsOEJBQ1I7QUFBQSxtQ0FDSSxxRUFBQyw0Q0FBRDtBQUNJLG9CQUFNLEVBQUVBLElBQUksQ0FBQ04sUUFEakI7QUFFSSxvQkFBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsMEJBQVNNLElBQUksQ0FBQ1IsSUFBTCxDQUFVRSxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGWjtBQUdJLHFCQUFPLEVBQUVNLElBQUksQ0FBQ0g7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQTtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOERIOztHQTdHUXZDLFE7VUFHUUssdUQsRUFDNkJBLHVELEVBQ3pCUSx1RDs7O0tBTFpiLFE7QUErR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlNDJmZmY5YTVmYjJhY2YwNzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsUG9wb3ZlcixBdmF0YXIsTGlzdCxDb21tZW50fSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7UmV0d2VldE91dGxpbmVkLEhlYXJ0VHdvVG9uZSxIZWFydE91dGxpbmVkLE1lc3NhZ2VPdXRsaW5lZCxFbGxpcHNpc091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIlxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWVudEZvcm1cIlxyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudFwiXHJcbmltcG9ydCB7cmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24sTElLRV9QT1NUX1JFUVVFU1QsVU5MSUtFX1BPU1RfUkVRVUVTVCxSRVRXRUVUX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCJcclxuXHJcbmZ1bmN0aW9uIFBvc3RDYXJkKHtwb3N0fSl7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLHNldENvbW1lbnRGb3JtT3BlbmVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJSZWR1Y2VyKTtcclxuICAgIGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZyxyZXR3ZWV0RXJyb3J9ICA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5wb3N0UmVkdWNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpZCA9IG1lPy5pZDsvLyAgbWUgJiYgbWUuaWQgXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgaWYocmV0d2VldEVycm9yKXtcclxuICAgIC8vICAgICAgICAgYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFtyZXR3ZWV0RXJyb3JdKVxyXG5cclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOnBvc3QuaWRcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVuZChwcmV2PT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKGlkKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uKHtpZH0pKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247ZWY7IS47JqULlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSxbaWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQgb25DbGljaz17b25SZXR3ZWV0fSBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgKGxpa2VkID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIgIG9uQ2xpY2s9e29uVW5MaWtlfSBrZXk9XCJoZWFydFwiLz46PEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSBrZXk9XCJoZWFydFwiLz4pLFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZhbHNlfSB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCk9Pm9uUmVtb3ZlUG9zdChwb3N0LmlkKX0+e3JlbW92ZVBvc3RMb2FkaW5nP1wi66Gc65SpLi4uXCI6XCLsgq3soJxcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPjo8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV964uY7J20IOumrO2KuOycl+2WiOyKteuLiOuLpC5gOk5VTEx9XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldD9cclxuICAgICAgICAgICAgICg8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuUmV0d2VldC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LlJldHdlZXQuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDwvQ2FyZD4pXHJcbiAgICAgICAgICAgICA6KDxDYXJkLk1ldGEgXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9