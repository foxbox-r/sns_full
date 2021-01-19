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
      type: RETWEET_REQUEST,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWUiLCJwb3N0UmVkdWNlciIsInJlbW92ZVBvc3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidXNlciIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiIsIm9uUmV0d2VldCIsImFsZXJ0IiwiUkVUV0VFVF9SRVFVRVNUIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTs7QUFBQSxrQkFFNkJDLHNEQUFRLENBQUMsS0FBRCxDQUZyQztBQUFBLE1BRWRDLGlCQUZjO0FBQUEsTUFFSUMscUJBRko7O0FBQUEscUJBR1JDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0MsV0FBUjtBQUFBLEdBQU4sQ0FISDtBQUFBLE1BR2RDLEVBSGMsZ0JBR2RBLEVBSGM7O0FBQUEsc0JBSVFILCtEQUFXLENBQUMsVUFBQUMsS0FB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QUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMseUNBQUQ7QUFDSSxjQUFNLFlBQUtBLElBQUksQ0FBQ21DLFFBQUwsQ0FBY0MsTUFBbkIsOEJBRFY7QUFFSSxrQkFBVSxFQUFDLFlBRmY7QUFHSSxrQkFBVSxFQUFFcEMsSUFBSSxDQUFDbUMsUUFIckI7QUFJSSxrQkFBVSxFQUFFLG9CQUFDRSxJQUFEO0FBQUEsOEJBQ1I7QUFBQSxtQ0FDSSxxRUFBQyw0Q0FBRDtBQUNJLG9CQUFNLEVBQUVBLElBQUksQ0FBQ0osUUFEakI7QUFFSSxvQkFBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsMEJBQVNJLElBQUksQ0FBQ0wsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGWjtBQUdJLHFCQUFPLEVBQUVJLElBQUksQ0FBQ0g7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQTtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0RIOztHQS9GUW5DLFE7VUFHUUssdUQsRUFDZ0JBLHVELEVBQ1pPLHVEOzs7S0FMWlosUTtBQWlHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTc2MTk2OTU0YTU0NDdjZTA1ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsUG9wb3ZlcixBdmF0YXIsTGlzdCxDb21tZW50fSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7UmV0d2VldE91dGxpbmVkLEhlYXJ0VHdvVG9uZSxIZWFydE91dGxpbmVkLE1lc3NhZ2VPdXRsaW5lZCxFbGxpcHNpc091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIlxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWVudEZvcm1cIlxyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudFwiXHJcbmltcG9ydCB7cmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24sTElLRV9QT1NUX1JFUVVFU1QsVU5MSUtFX1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCJcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIlxyXG5cclxuZnVuY3Rpb24gUG9zdENhcmQoe3Bvc3R9KXtcclxuXHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsc2V0Q29tbWVudEZvcm1PcGVuZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3Qge3JlbW92ZVBvc3RMb2FkaW5nfSAgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUucG9zdFJlZHVjZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7Ly8gIG1lICYmIG1lLmlkIFxyXG5cclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOnBvc3QuaWRcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVuZChwcmV2PT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKGlkKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uKHtpZH0pKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247ZWY7IS47JqULlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSxbaWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQgb25DbGljaz17b25SZXR3ZWV0fSBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgKGxpa2VkID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIgIG9uQ2xpY2s9e29uVW5MaWtlfSBrZXk9XCJoZWFydFwiLz46PEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSBrZXk9XCJoZWFydFwiLz4pLFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZhbHNlfSB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCk9Pm9uUmVtb3ZlUG9zdChwb3N0LmlkKX0+e3JlbW92ZVBvc3RMb2FkaW5nP1wi66Gc65SpLi4uXCI6XCLsgq3soJxcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPjo8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIDxDb21tZW50Rm9ybSAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudHMgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=