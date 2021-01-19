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
      retweetWithPrevPost = _useSelector2.retweetWithPrevPost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var id = me === null || me === void 0 ? void 0 : me.id; //  me && me.id 

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  });
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
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
        lineNumber: 91,
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
                lineNumber: 100,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

_s(PostCard, "G2y6ykFGa+i/ENOILQR2zoEerqs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWUiLCJwb3N0UmVkdWNlciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldFdpdGhQcmV2UG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZUVmZmVjdCIsInJldHdlZXRFcnJvciIsImFsZXJ0Iiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidXNlciIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07O0FBQUEsa0JBRTZCQyxzREFBUSxDQUFDLEtBQUQsQ0FGckM7QUFBQSxNQUVkQyxpQkFGYztBQUFBLE1BRUlDLHFCQUZKOztBQUFBLHFCQUdSQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLFdBQVI7QUFBQSxHQUFOLENBSEg7QUFBQSxNQUdkQyxF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QUVwQyxJQUFJLENBQUNxQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBOEJLbkMsaUJBQWlCLGlCQUNkO0FBQUEsOEJBQ0kscUVBQUMsK0RBQUQ7QUFBYSxZQUFJLEVBQUVGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHlDQUFEO0FBQ0ksY0FBTSxZQUFLQSxJQUFJLENBQUNzQyxRQUFMLENBQWNDLE1BQW5CLDhCQURWO0FBRUksa0JBQVUsRUFBQyxZQUZmO0FBR0ksa0JBQVUsRUFBRXZDLElBQUksQ0FBQ3NDLFFBSHJCO0FBSUksa0JBQVUsRUFBRSxvQkFBQ0UsSUFBRDtBQUFBLDhCQUNSO0FBQUEsbUNBQ0kscUVBQUMsNENBQUQ7QUFDSSxvQkFBTSxFQUFFQSxJQUFJLENBQUNKLFFBRGpCO0FBRUksb0JBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFBLDBCQUFTSSxJQUFJLENBQUNMLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlo7QUFHSSxxQkFBTyxFQUFFSSxJQUFJLENBQUNIO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUE7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNESDs7R0FyR1F0QyxRO1VBR1FLLHVELEVBQ29DQSx1RCxFQUNoQ1EsdUQ7OztLQUxaYixRO0FBdUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNWE3MzY4M2U2M2IyMTgzYzk2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLFBvcG92ZXIsQXZhdGFyLExpc3QsQ29tbWVudH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCxIZWFydFR3b1RvbmUsSGVhcnRPdXRsaW5lZCxNZXNzYWdlT3V0bGluZWQsRWxsaXBzaXNPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzXCJcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtXCJcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnRcIlxyXG5pbXBvcnQge3JlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uLExJS0VfUE9TVF9SRVFVRVNULFVOTElLRV9QT1NUX1JFUVVFU1QsUkVUV0VFVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXJcIlxyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiXHJcblxyXG5mdW5jdGlvbiBQb3N0Q2FyZCh7cG9zdH0pe1xyXG5cclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCxzZXRDb21tZW50Rm9ybU9wZW5lbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS51c2VyUmVkdWNlcik7XHJcbiAgICBjb25zdCB7cmVtb3ZlUG9zdExvYWRpbmcscmV0d2VldFdpdGhQcmV2UG9zdH0gID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkOy8vICBtZSAmJiBtZS5pZCBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihyZXR3ZWV0RXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6cG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZW5kKHByZXY9PiFwcmV2KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoaWQpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24oe2lkfSkpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjtlZjshLjsmpQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtpZF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBvbkNsaWNrPXtvblJldHdlZXR9IGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAobGlrZWQgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiAgb25DbGljaz17b25Vbkxpa2V9IGtleT1cImhlYXJ0XCIvPjo8SGVhcnRPdXRsaW5lZCBvbkNsaWNrPXtvbkxpa2V9IGtleT1cImhlYXJ0XCIvPiksXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17ZmFsc2V9IHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKT0+b25SZW1vdmVQb3N0KHBvc3QuaWQpfT57cmVtb3ZlUG9zdExvYWRpbmc/XCLroZzrlKkuLi5cIjpcIuyCreygnFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+OjxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPEltYWdlIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj48L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==