webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");



var _jsxFileName = "C:\\WEB\\front_next\\pages\\index.js",
    _s = $RefreshSig$();










function index() {
  _s();

  var _this = this;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userReducer;
  }),
      logInDone = _useSelector.logInDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.postReducer;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostLoading = _useSelector2.loadPostLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
    });
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll(e) {
      // console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
      var result = Math.floor(window.scrollY + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 300; // console.log(Math.floor(window.scrollY+document.documentElement.clientHeight),document.documentElement.scrollHeight-300)
      // console.log(result);

      if (result && hasMorePosts && !loadPostLoading) {
        dispatch({
          type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"]
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [logInDone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 31
      }, this), mainPosts.map(function (post, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 46
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(index, "Y66hNiHZMrN0XFnMSF//xnsqJnQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

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
/*! exports provided: generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_ERROR, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR, addPostRequestAction, removePostRequestAction, addCommentRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostRequestAction", function() { return removePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var imgs = [{
  src: "data:image/jpeg;base64,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"
}, {
  src: "data:image/jpeg;base64,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"
}, {
  src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUVGBgYGBUXFxUVFRgXFxcXFxUXFxcYHyggGBolGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKwBJAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAD0QAAEDAgQDBgQFAgUEAwAAAAEAAhEDIQQFMUESUWEGInGBkaETscHRFDJCUvBy4RUjYoLxBzOSohdT0v/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAApEQACAgICAQMDBAMAAAAAAAAAAQIRAyESMQQiQVETYYEUMkKxI5Hw/9oADAMBAAIRAxEAPwD5/i8ZUr1HVar3Pe8klziTqZgchyGgQS3quUjZe0TAPBvUqXB1K61FaFggxT6le+F1KO1ecFg0ADOq8WeKnC7CFhoFwr3w+pRIU2BYDQD4fiiMp9Sj/DUw1CzUQpUUYUl1oRmNStjJEqFAHWU8zBBApwE5SqlKxkjjsK2IjzS78M2VaNdIiECoyPFLYyVlDmdMNEc+vn9lW8HUp/N3XSQ2ToSX7qLCnSHCOgQXU91Y0qUt1HhvdGo5fxaeSi8iXZ3x8ZtIq6NPe9l2o0CYJP8ANVbNyzgl7yO7fhnoTfzhUGIqcRuVoyUnoXIvpraFakuMyVws2BKJUMWC5S1Hr6XVkcL7GKpAsCmMuw/xHtaJuf8An2Ve4rSdkabmk1eEmQQ0wYA3M8z9FPJLjGyuKPKaRr8ny5vE0OGm261WIyOk3htrb2lU+WNDHgG5GpneJVxmeZhzgG/ph3o4fQe64YTb2eh5MFaokzJafJFGT0+SteGy6ykfJdh5bPnOeZOKVUtaJDocBGkzYe6dwWHpvpwRcWcLSItMcld9psCSBVEyzW+2x8QVUZZVLqrjAHE0yBoTZJb6KOmisxWUU4MW6lUWIwQErW42m4A2tO9vTms7iWmTITRsmyWTdqsVhmGlTqd0OJAcOKLCwnQW06lcVNufFeV0IZGiUVL0yjNcqihGhECG0ooCA6ROm6JsogKQC623v72PslY6RxzIXgAurwahYzXwdqMgDqoNKPwy3qPkhhqyZpxJtcSiBqHTEJprSUGJRxgTNJgMyg8BR6LUGGjgbdWGEoSo4ahzVnQpJHINHKdKJSmJwztQDeyvsNhJQe0NLgoPcDBEe5DfW/sk5DR7MBnVMtfB/UA4eER9CgUYLQVLHVXP4SdBIHQbD3SlN0W5Ky/aLLUi9OIbwMA/Nq4+H5R7T6LUdmMNx0gRcgkDx29AQsPhwSJ8FZ0c2fTpupgwH67GIuPPf+65M2NuNR+T08HkU7fwPdocc15+HTI4WyHPmzzJkg/t08VlsRYxP8/m3ryR8RWlKNoucYA+ythx8VRx58nKRBpRA+PE+yMaMSBtq76IVVgBgK1+xDg6slRYT3iLbcvFbnsjmzmEEvgdSALXOtllaLmGGkaWnoP+F52GcSCRr+UWiOXRRmlJUxoRa2j6fmeMZTe+QGxDgBbiDo08/mEHJcUHFznfqHD6kR8lhMNiXcLWE/kMN6NcDIHIAif9xVpRx/AWidIJ81D6SiqOj6rkqZ9kZVlrZ/aPkmmuBGkeISeWMmlScdSxpPm0FPGY1C6VpHC+yoz3/tuk6iB4rN5a3/MnkI6bD6K4zu9QSJDRe+vRI0aJHE6I4tBtHRRZVdAc4qHZZXFuJMQtXWAcIOipMW9rQXlkNbrzPITzNvVPFiNFBTy5xuS1sm3EYkaSOkgjyXktmeYCpUJsA0BoHIACfck+a8qqxdGJYVMIbFMK4gVnyTDH2SjUyGgkBsmwmY13jolZWCvoMxyZYxDoYY7iFaYeiY/KOYP82XPkyV0ejg8fl+4rqjFLDUS6wF9EfHYaHCNCJ85Mj5Kzyikym4OJsGlwG5dBj/2+SlLM0jp/SxdutIqaTIKg+nDoTzKUuUK7Jd7eispbOKWL0fkWaxWODpgjRLspqxw6LZBxOuwoOiJTwiabYKHGksFE6NFWuHwruEloBMWBsCeU7IOX0pVll2Z0XNn4jWHdryGuB5QdfJK22KxLB9o6Is8PYRqC2YI1Fr+yH2lzXD1cJVax4L4aWiHA2e0nUcgV7tDh8LUBe2tTFTeHAh/9QG8b+vTHYmjrFwiopjRXuVrHDi4TdrgR6hKFl4OrTC5WcQR0KPi3cTg7mBPj/IVVo0nca91/RpslygvoPIjuuH/KpMXSbxcIcCSdrgeekpqhj3/ANPiIYY4gNyLekJCoIFtT/PsoY0+TsvlaaVfAKtUaDAgkb7eXNN5XgqtZ0DrJ2a0RJSVKldbfsvmFPDUnuIDnuIABFmtAkE+JJ56C26pmnKMPQrZPFjUpb6KHH4EU2lULzLgeqts7zB9eoTtJgAQBPIJOnh9+S0LjH1dlMv8AknUVongD3xOmvtN01VqwTyAF+s7dEvTcBdcc8vsBA/nNLVuwKUox4olSrw6eW3yTWBa6rVZTBJdUe0ebjH1SQp3jU9L+i0HZDA1W1jWawg0hIDmkXII0OtpTaJbR9wotDWgbAADwGiBmFeR3THMrOYLtG8/9ylJHKPLun7q3wmZUnD8r55FmnhBKz2R6I4ajLidQNJ6rtajsmm46kNSQB/oqf/lJ1u0dAODGEve60NaZHMmYgDql4BsTr4JwBPd10kSsJ2vPDsRJuZjiIEgATeAdeoX0BzZJeYDRJJNhAuV8v7WY01qzqgBLdByDRZvghDszFKNNkaA9edgvJHCUKjmyGGJtbbp01Xl0EzOMUgUJpU2lVFCBWuCwpFzuNP5ukcDh+MxturSnVif5uoZZeyO/xsf8n+Bk1gzWC7kB80zTp1HGTvsTEeSBheEAvIAI36botXHAt7rryNDfeZ9lySTekepDJS5Sf4JVGiS20gxM2kbg/VWOVUy5rpaHAEtIIgXESCNHQduiqGMiOv8APNXWV1iwkx3XGHeGx8vupZ48Vovgm8jakgz8iMcTHR/pd47OFj6BVuMwpaYIvv0O4+SvS903eSNRcxExoh4lgc0yBMj7KOLyJclyGzeKvpujPtZBTdFSfTF5F1BjCvQuzwpRpjlO6NRoXQ8On6TuiVsSh3BNDVUdpMmLSarRLTdw3aTuOh9lZ/iQ1pcbBoJPkqytndWuPh0GHvDvEwTfUcgOpRjfYKM3WAG6Xrt4hE+Wytswy8MJBcC62hkTu3xSNCjdO5FYworfws2I3/5UfwpBIOxj7LRY3DRwVIgO16kWP86J9mVtrQG2MWPUkG/S59FGWfjtnTDxlO/sZqhQtHVSqYe6vKeWuaSCIIsR1Ck/ApFnVlf02qM4acaa8/spBzxtPzWqwnZuo8cXBDf3Gw8uas25CykAXNJOt99tOSE/NjEWPjRurMpleVGoRLT3rgaW5+ClmNNrBwWA1Mcv7lbWuG0qLqrhFoE6mdui+dZjVJPEf1X8tB9VPFllmlb6RSThig4xX5EnkTJV3lWTmo3ieeBsaaeBcdY6KtyrDfEqgG4b3j4Db1hWWNr3j+HxV8knfFE8GOLTyS39iOJcxg4WWa25PM817B5viRdjiGnRzrx1bP2KScZgHTU+A2UauK/srRXsQzS5bZc4fMXzJxNWTvxPHjEFMvxzv/uef97vus5h8WCdJPIWnz5K8wucupgf5LJEQWnhIMzM3JNkzWzk/BoMp7LV63fqE0qZ3fPG7+lmvmY81pqGDpUG8NNvi43c7xP00WU/+QakRwP86jXe7qZPun8pzCvWBq1AGMI7jYuf9RMC3LnJ6ITTJoss5zENoVC5wAjh4ZEkukC2pGvovmVWrZzRoQLeBn+eKv8APqhc8MMfmbpNwZiZ38FWZvl7KRHA4u4i+RIPDEd229zqjDQGRps4Rw8oHsF5SDtZseXKy8nEowbWroRKZU6bbyFazJWy3wb202idelylqdUm5sCbAePNR/EDl/OijWf+of2XOonpTmklT6DYnEggATEqeD4IJM8Vi39pG87zv5FVxqIzXJ+OqOb61y5M0uExzeECGuA/cAY6A6hXGDIiR/P59ViqNUzMrQZTjIdBNnei4fJwatHseH5Slpl3VpxcaI7GcY8vdFZTL4aBra3tClgqUFzYgheVyo9dtNNMpa7VGlyTmZU4eet/VAaw6r1cc7jZ8/5MKkN4QDceaPWrMpiXHnA3dGwSmGN7qsqUuNzjNgSZN4GwVF2crWgWLxFSqC4iGiGkCzRJkTfpqo4XF1GAta+AdYgSmcLl9RwIaYBsbkA+IGuq0WQZQKQ4nAF5tNiAJ/TbeyZySQpX9nspZVJdUBhsQLgGZ3+3NKnKnfiDQbc8dvA94E+RlbqnTJTGAyxrKj6xu9++ga0AAAegkqXJsbnWynzzJwKDQBIpwI0kGAT4zCr8Hh/htDmmeEkEaOAPMG4vIK3HGCVlu0ZFLFNIFqrJdykEtMdY4Vz5YOUdHV4eapcWWb8rbVpB4HfEX3cN/up5FkIJ+I8SBYDYnefBXGQAcAuLREXsdFbU2ACABAO3qufx8Epq70SzeVKNwX/IVOFEdFQZ+ACCSGjQk8hsBz8L2VnnmdtoAjfbQk+A+pXzLPMzfUMuJ6XvH08oQ+nGbqIfFhJet9AO0+bMeYlxaPysFhJ3cdysziq4qaCCNvAf2KniygYZt/55r08WJQjoXLNyZddjMH8So8dB7mfoh5zhyx7mnYkK17BvAruYbFzRHUtMwPIk+S0fbLIhUpOqsHfYJMfqaNZ6gX8oSuPrspjzJR4s+ZcXdPp80CmzjIbzNz03Ryyx8VDCtuTyXTHo55vYzUp8IhunLf8AuhPrOAuURtS3VCfJbfmil8k5u9m67K9mqbqTMRVPxC4cTWRDG/1fuMg9PFXtdxJgCToslkXadtLCigWOJaHgOkR3i4i0c3KqbjKkRxudw6XJjxSuLbJWWOfd6pABHCIJNpi8/ZVGHZLidhFufL5KNbEmDuSmAzgbG+pPVP0hWDFSSfFeQKb9fH6BeRSFMqwozXILGqQVhRpkJrj6pJhCYcBAIud+ngZv6KbLJughwjSCfr9EtUoObt5pvDVNinaYkc0OTRuNlTSJVpganCQHab9J3XSAFOlDksmmh8dxZseyWZ0+NrXnhbYB02a76A+y2GaZUJL2T3bOB1jmOYBhfLKNItX0PsZnYqcNCqTxNBFNx/U39h6iJHOIXieV49S5x/J6j8iWpr27RUdpcMWsDwNLHwOnv81n2Ygz6fJfSs6ysPa6npxDunly9DC+Y49hYbiI+at4c+UeL7FzTWRchfF4x5cWi1yLSJ2uoYZzi7h0JIHnslmPP5p8+pVrlGCLnB8kQZ0u4+ey73pHK1RocHQDREnz5q3wz5Gqr6LZ2TzKIA0v8lFsWizovA0XTmBGySYyBouF0/p+coA4lpRx4OwCS7RFtakWCC8d5h/a7x5HSPsFU5hiwIaNQQT6GPPRN5fJAJPpqg5FIwp8g/YTMS6m8HVne/27iOhH/stZhgwcTm/rMnlMAW9AsVgnihi3AflqAkcr3I/8mn1VniHlkhpt5rim5Y5txX3LSw/Ud32J9s3j4rZ3b9Svn+YPkkgq57SZkfiETPC0C/Uf3WWPE4wASToBcldXjY2o2x5PhFR+ANQHknMryWrX/I0QNXEgAffyT+S5W1zwKt9+Ha2x5/2K2bKjWC0NA2Fguh5a0jncPdlTlnZN7HNd8Zoc0yIaTB6GQtsxp4e/BMXgQDztsq/AP4hIunK5PChbfZzzezLN7J0BSq0wQ6o4Hhe79EGWwPSTqb+CxGV5cXVjTd3YPfOvDwmHW3M2X0Go4gzKrDhmiq6pu8AHy3+XoqxlQrdmazDJKnxHfCb/AJc92XNmLa+cqoxFN1NxY7Uaifqt+QVC17C+thfx5pubFoxD8QCxrQI4ZJO5JjkNIAt4pvB43hY5sA8XMW5abq7r4KhPF8MT0kD0BhCNOm27Ghp9/VNzQKKei0cXEQbGQIiSL36IuKxU7ImIcq+u+07LdisDSdr4/QLyUo4sX8foFxVSEKgKQcuNXuFOAKEXDYnhN9OSAwdUb4TSJm/JK/uWir2uxyhVYXWMDkU4A9gLgAWiJg89JGuypm04VnlT2AO4nllrEDiE8nDkTvfwKlPRWHq09En4udQp0aoQfxhIgtpu8mtO+4gpcvOnDroAVvsBxaNCzFEd0jQqyweLAvMRedII5LMDGu0LBPMySitxJ8B7qE8aZ0Y509n2rsznrMW0scR8ZgkjTjFhxgex/usD/wBQcMaeJdP5XAOaPH8w/wDIH1VFlmbmlUbUpGHAgh3zBG8gkea+i5uKeOoUsRBaWHvt3E6i+xIaQeS4Vj+jkUvZleKT10/7MblOVQeOoBOzdm9T1V+2nAnZJ1xwm2gUqWLLb3/nPpquvs53Za4c7DVOgDQmD5qn/wARki1xuITX+KMIh1/OCgYfDvPwXHgc4VNUxzBo/wAiCfcIBzcRBJnaDCwyTLHE5aSeNrgXbg6Eaa7JPBktLmuqCnEggyb/AG6oFPMj+73K7iHioJMTzGvh4JXRVX0yOdZiS5hkEtMcQ3BvPsmf8Tc9sEkiJPKN55KmzCm0MsNCChY/FltHhB1Ab6i/1SvGpUVjk4orsXUNWoSASXuMDeNh6fJX+TZb8LvO/PoOQHRU2Vu+GOI/mPsFYjNPJWa9kSbvZcFpJmBPOLrpoPcbnykBV1LHE7q0o4mALjzKyiQlIewWGe0zy6qwdVfwquZiSNp5X+y7+OIHPzRol2RrMUGUuTCVRZp2xo0nEB3E4fpbBA81U4jt852jYHunUJAbRq8VO9uiqcRio0Wed2xJ1RKefMfrCbi0AfdX5oVWsvB9N+joS+IHDvKAKB1Ss9neKI7oVtUqrMZjW4nlVgrFaJ5Z+U/1H5BdUst/Kf6voF5VsSgLVNQCI1qYU4FMBdDF5xSsZaPAypNp9ShUimWkIBts98NwBAvv1UG1CNZt0RhVXuObJR7I1KhdsT1/umcPSA1ueuigxwhe+Ig0FMtcPXA2HjAV5leeOpyNWuBDm8x9xqCsjTJ1XsRi4A013nxBUpY1LRaM6NLXzPiMA++8xCWfjHczCqqWaOfDHcJi8gAa2va5lFdVSKNaHk09lj+LPNQOPKqatY6IPxSm4WLzSLk5geaG7GkqsY+RJ9kdjGEx8QCehjzK3BIZSsdp4jqm2YspVmWC0VWmdIjz/UvVaIbaST1HD6DUpHTK79x78dzulcViAbuMBVuNzBrOruQ+qUy3irVOJ2jdtkVD3A37Gi+ASJmF1lEblcg7ush1KuwQViyY8ym0bq7wL6cDu+5+6y1OpKtMJVgRKfiQkzSvxtOm0uMNAEknQAa6r5t2m7WVMQTTpkspchZzv6jsP9PryBe2eZucBRabau68gstSp78k8YqrYq26I1KgbYaoBqE7pjC4J9V/C0STvoAOZPJaSh2Ya1vePEfKPIBWckhGmzKBxTFElX1fKWDQKrxNIMSuV9Dwir2MUKzm3lOMzRgHfdA6XPkFSPxOyVeZSqN9jTUf4lpmWeGp3abfhs9Xu6ud9BZVTnqXw9yY6DX+ygSFSKS6Itlllh7p/q+gXlDLHd0/1fQLyNC8mQYmaaXYEZpTCHXFCKPqommsaxdTFQhHY2EThHJBhQoXyjNco1qUaKNNCghS9e4iowuhahglNqjjGnu8jJ+i61wGt0N7iddNfDwQrZuWjuX1CHk9D4p15ANzA9r3CRY2Cj4t0hvK9v5t9ylcfUPGXpC1WGbHiH7myRPjCHCjQxbo4RYDlIPrKbZAmRB6hLtaYySe0ew+Ge6wbrubDxTLsLSYf8xxcf2s+pKnSqEjW/8ANFX4yuATeXbjX3SNtllEsamaNDA0UmQJgu7xuZi6UxnabEObwNqcDIiGANEcpAn3VRUqk6oBIWWOPwV5NLsiZK0mUEMbw76nms5TfBlHp40gmN00leiaaRrKleAhtvoqFmaHmmMNm0HokUWjMuqNMzZWNJttFRMzIHdMDMQ0SXWRpkiizh5dVd4peqbQB5ozn8dQuEwo1WWRbRWEXTLXJWBrLalOuq9VlH5g8d1tgu08zcNU3Bsg5Iv61eASVlMXXL3lxP8AwrivieNhA13VG8QngicmeBR2hLtqQu/GTNMKaCVEJy6Hc0RtInostCyVjeVflP8AV9AvJjLaADT4/QLyNiAaaIEvTKK1yIoy1ec1Ca9TD1gnAFILsqRaFjEDdD3CJwclB1MoBPEL0L0QvcSxj0rvCugKTWrBogFJzZUyBspspk7eaSUktlceOUnSAtZCaogRLifuoVCGiPdAr1NVB5L6PQx+Jx3P/QbEYz9thoq571B7lAuTRRskkuiZahgLjjK8FRHM3Z7EVi4ydrKAcvPahkpklRFt3bJly4165KHK1A5UMCuQpmrOqVJsvcS3EKmxsY1zbBQdjHndBJtdBL0FBfBpZJfIXiXHVAgkqdFkm+ipdEKss8HIb4rr6YKVfi9ghvqk9AloZ60DxIAMNuvMaucKkmEsZwjBqU2UCkIACIXIMNjmAHdPj9AurmXnunx+gXkAFe0qYK1X/UXs3RweOfSol/AQKgDiDw8ZceFsAd0RAmT1KzP4ccyiYhxKTXrxw45n2XhQHMomDNciNcgNojmURtHqUDDVOEV7QUq2n1KmGdSgNYKo1QhMGl1KiaI6rWGgbGo7GE+C6yiLm6kWdSpTm+kdWHDF7k9BaVNrRJuUOtiIQnt6lDNEcyoODbtnpQzwguMFRCrUQXORXUBzKC6gJ1PsnjAlkzoC4KJam/woiZPt9kP8OOZ9lRI55zQAobnJsYYcyvfhG9fZOiDd9CS450pwYNvM+32XHYQcz7Iiewk5DKdOFHM+yj+EbzPsihJMSXpThwbeZ9vsufg28z7fZEWwWGw/GTeBuUR2DCdw+GAbqfZEGHHM+yWwlRUpxshq5rYRp5+yUfg28z7fZMmBsRCkmxhG8z7fZTZgm8z7fZEQSCZo0dymm4Ro5+y7+HHM+y1gBL0ov4ccz7Ln4ccysYYy/wDKfH6BdX3T/p72FwQwNJ76QquqgVHOqQ4guAHC2AIaIsOpXkAn/9k="
}];

var getCmt = function getCmt(userId, content) {
  return {
    User: {
      nickname: "foxbox"
    },
    content: content
  };
};

var getRandomValue = function getRandomValue(arr) {
  var n = Math.floor(Math.random() * arr.length);
  return arr.slice(0, n + 1);
};

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "rsua"
    },
    content: "my #first #post",
    Images: imgs,
    Comments: [{
      User: {
        nickname: "foxbox"
      },
      content: "wow good"
    }, {
      User: {
        nickname: "rrr"
      },
      content: "holy shit"
    }]
  }],
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
  addCommentError: null
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
        //data:{id}
        draft.mainPosts = draft.mainPosts.filter(function (post) {
          return post.id !== action.data.id;
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
        //data:addCommentApi().data
        var post = draft.mainPosts.find(function (post) {
          return post.id === action.data.PostId;
        });
        post.Comments.unshift(getCmt(action.data.userId, action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

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
        //{data:{newLoadedPosts}}
        console.log(draft.mainPosts);
        draft.mainPosts = draft.mainPosts.concat(action.data.newLoadedPosts);
        draft.hasMorePosts = draft.mainPosts.length < 10;
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_POST_ERROR:
        draft.loadPostLoading = false;
        draft.loadPostError = action.data;
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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsImxvZ0luRG9uZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJwb3N0UmVkdWNlciIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwib25TY3JvbGwiLCJlIiwicmVzdWx0IiwiTWF0aCIsImZsb29yIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJwb3N0IiwiaWQiLCJpbWdzIiwic3JjIiwiZ2V0Q210IiwidXNlcklkIiwiY29udGVudCIsIlVzZXIiLCJuaWNrbmFtZSIsImdldFJhbmRvbVZhbHVlIiwiYXJyIiwibiIsInJhbmRvbSIsImxlbmd0aCIsInNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiSW1hZ2VzIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnRFcnJvciIsImdldFJhbmRvbUltZyIsInJhbmRvbVZhbHVlIiwiaSIsInB1c2giLCJmYWtlciIsImltYWdlIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJ2Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRVJST1IiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0VSUk9SIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9FUlJPUiIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0VSUk9SIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwicmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdCIsInBvc3RDb250ZW50IiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImZpbHRlciIsImFkZENvbWVudERvbmUiLCJmaW5kIiwiUG9zdElkIiwiY29uc29sZSIsImxvZyIsIm5ld0xvYWRlZFBvc3RzIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Fcm9yciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJvcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcm9yciIsInVuRm9sbG93VXBMb2FkaW5nIiwidW5Gb2xsb3dVcERvbmUiLCJ1bkZvbGxvd1VwRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0VSUk9SIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9FUlJPUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRVJST1IiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0VSUk9SIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19FUlJPUiIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiZm9sbG93RXJyb3IiLCJwb3N0VXNlcklkIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dFcnJvciIsInVuRm9sbG93RG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLHFCQUNRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLFdBQVI7QUFBQSxHQUFOLENBRG5CO0FBQUEsTUFDTEMsU0FESyxnQkFDTEEsU0FESzs7QUFFWixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZZLHNCQUdxQ0wsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDSyxXQUFSO0FBQUEsR0FBTixDQUhoRDtBQUFBLE1BR0xDLFNBSEssaUJBR0xBLFNBSEs7QUFBQSxNQUdLQyxZQUhMLGlCQUdLQSxZQUhMO0FBQUEsTUFH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LFdBQUsxQixlQUFMO0FBQ0lqQyxhQUFLLENBQUNlLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWYsYUFBSyxDQUFDYyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0E7O0FBQ0osV0FBS29CLGFBQUw7QUFDSWxDLGFBQUssQ0FBQ2MsYUFBTixHQUFzQixLQUF0QjtBQUNBZCxhQUFLLENBQUNnQixXQUFOLEdBQW9CbEIsTUFBTSxDQUFDTCxJQUEzQjtBQUNBOztBQUVKLFdBQUtnRCxjQUFMO0FBQW9CO0FBQ2hCekMsYUFBSyxDQUFDdUIsRUFBTixDQUFTMEIsS0FBVCxDQUFlaEQsT0FBZixDQUF1QjtBQUFDcEUsWUFBRSxFQUFDaUUsTUFBTSxDQUFDTCxJQUFQLENBQVk1RDtBQUFoQixTQUF2QjtBQUNBOztBQUNKLFdBQUs2RyxpQkFBTDtBQUF1QjtBQUNuQjFDLGFBQUssQ0FBQ3VCLEVBQU4sQ0FBUzBCLEtBQVQsR0FBaUJqRCxLQUFLLENBQUN1QixFQUFOLENBQVMwQixLQUFULENBQWUvQyxNQUFmLENBQXNCLFVBQUF0RSxJQUFJO0FBQUEsaUJBQUVBLElBQUksQ0FBQ0MsRUFBTCxLQUFZaUUsTUFBTSxDQUFDTCxJQUFQLENBQVk1RCxFQUExQjtBQUFBLFNBQTFCLENBQWpCO0FBQ0E7O0FBQ0o7QUFDSTtBQUNBO0FBbEZSO0FBb0ZILEdBckZhLENBQWQ7QUFzRkgsQ0F2RkQ7O0FBeUZlM0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDJjZWY0NGRkZWYxMGRiOWQzZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCJcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIlxyXG5pbXBvcnQge0xPQURfUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXJcIlxyXG5pbXBvcnQge0xPQURfVVNFUl9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclJlZHVjZXJcIlxyXG5mdW5jdGlvbiBpbmRleCgpe1xyXG4gICAgY29uc3Qge2xvZ0luRG9uZX0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21haW5Qb3N0cyxoYXNNb3JlUG9zdHMsbG9hZFBvc3RMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5wb3N0UmVkdWNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoZSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KT49ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1hdGguZmxvb3Iod2luZG93LnNjcm9sbFkrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDApXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCAmJiBoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0TG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfUkVRVUVTVFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFzTW9yZVBvc3RzLGxvYWRQb3N0TG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5ob21lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge2xvZ0luRG9uZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCxpbmRleCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KSB9XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5jb25zdCBpbWdzID0gW3tcclxuICAgIHNyYzpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNVEVoVVRFeE1XRmhVWEZ4OGFHQmdYRngwWEdob1hIUmdZR2hvWEZoY1lIU2dnR2hvbEd4Y2FJVEVpSlNrckxpNHVHQjh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HeEFRR3kwbUh5VXRMUzB0T0M4dExTc3JMUzByTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEx5MHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBTEFCSGdNQklnQUNFUUVERVFIL3hBQWJBQUFDQXdFQkFRQUFBQUFBQUFBQUFBQUVCUUlEQmdFSEFQL0VBRUFRQUFJQkFnUUVBd1VHQkFVREJRRUFBQUVDRVFBREJCSWhNUVZCVVdFaWNZRUdFNUdoc1RKQ1VzSFI4QlJ5NGZFak0yS1Nvb0t5d2hVV1EzUFNCLy9FQUJvQkFBTUJBUUVCQUFBQUFBQUFBQUFBQUFFQ0F3UUFCUWIveEFBdEVRQUNBZ0lDQWdFREFnVUZBQUFBQUFBQUFRSVJBeUVTTVFSQlVSTWljUVZoTW9HaHdmQVVRbEt4MGYvYUFBd0RBUUFDRVFNUkFEOEE4OTRVckM0QUFaUEw5L0d0eXZBcmFnTUxqbGhxUXRzRUNkODVMNkR0WG5tQ3V0YVlYRjBLMW9NUHhXN2FIdkxUdGxPckFOcUQzNmp1ZGU5ZWpnekpMb2xreFNiN28xdHZnTmkrckVnaGxIM21DejNFNlJKQTFQUFdzdnhYaGR1MDBaZE9VdDAzNURucEZiRGdmRWY0aXpMRllIMjlGQkkwQjM2TmxiYy9hOHEwR0s5bjdOMjNsQjFLWmg0cGxRSUJEYzRNYTlDQVpFUnB5U2k0Mzgvc1JndU12dWV2eWVSbHJDeEMrZWhZZW5pTkRYTVZyQ3F2bmxBL0tuQnNCTGhJdHMwU0NzYWtRWjhYSWpyRktMTmhXYks0SU1uWFUraFVSR2xZTWtzaTdSdGppaFpTK0t1ZFBVYi9BQy9TbzI3bDFqQUpQcitzVjFWdGdFeEpuN0owMDdHS29URUVtTkFEb2RkdldvT1V4bENId0VIUHpJL2ZtWXFJZkxxVDZhZnBGZFczYVVtV3pnalRsQjVIMDZWVjdrUk01dTIyZzhxTFQrUTJsMGdyMzlzcVQ5a2prTno1VmJ3M2lSUjVuVG9kVHZ5bmF1Y05BSjJBeTlGQkpQcnkrTmJxM3hqR1dMVnRnOW9LOHhvVTJpWkZrckc0NVZYR3BMYTlFc3ZHYXBpKzF4VnpCVnJtMzRqcDZWUmllSzNIMExnanBBUDFyU1dQYXpGU0F6V3hJM0l1SDVNNUZSNGpmdDNsbStNOGJaRUNldVlhL1d0TWZJbEo3UmhYaVFUMHpGNDNFQmhsRnRTVHpDaWZsU1hGNGNydkhvWnJROGRzb2p0YnNrc29PamMyNlRISUE4dDkrd1dXTUdYOERTc2tlS0pqY0dSTzJ4OUtPU0pweHhVVm9URktqVEhCNFFOZFczY1psV1RxRnpIUUU2QWtUTWRlZE5zTGVzQzZxWWF6bGVEbGEvbHVzNUd1aWxmZG9RTm9CTyt1MVpKdFJMUlZpdmgvQ0x0MFpsV0UvR3hDSi92Y2dFOWhyVEhpL3N0aU1LdWU3YklVN051cG1JOFEySm5Zd2UxV1dzTmV1WXhMVjczak0xMUJEeklERVFET3cxaUJYcHZ0RHhYRSsrV3dnRzJxa2pLdzVoczNoWVJHbnlwSG1wOURPT2p4WjFLaU9mNTF6TEFqNDE2UHhmZ1dDdWtBWW5EV3NXZERhUnl5RnVoMC93QUpwLzZlVUNzUHhiaDF5eGNhM2RRb3k3Zy9JZzdFZHhWb3RTVm9uZEFBYUs0elFJNW5lb2pyMHFvbWkyY2RMVjI5ZGtBZEtySnFNVXRoSlpxNzc5b2lhcnFSRkJXY2NGY3ExWGdFUlVRSzZnbkdXdUxVeEZHY0t3RFg3b1JCdWZRRG1UMkExTkZSdGdiR2ZCclMyOFBldnZwSTkzYkhWanF4OGd2L0FIVWxzV3l6UUJKUFNtbnRCaVZabHRXai9oV3hsVHYrSnozWXlmS0thOEF3UXRxTGhYTXgwVWJhNzc5Qno5S3NvVytKQnpwT1JERFdoWVdTSmM3ZzdBZW01aXErSTR5SUxDV080MkE4djMxbzdpS0piUHZMaExFN0tCQTU2U1QrVlpYSFlqTVpxMlNTZ3FKUVhOMkRJNHphN0hRMVphbTI4RFVkT1JGRE5hSTNIcVJwNlUwNGJoN0pRM2IxeUkyUlp6Tjh2b2E4dFBpN1BTcmxvYWV5M0UyczNZUlM2bldBSmdFSFdQeENTTmQvSTE2WlpzSWJZdTIyZGJ2NEYxQkhNSm9jdmtkdFIzcnlWT09NVGx0QVdrNktOZlU5ZlN0SjdKNGgyVm1OMWxVa2dMbVBpYVB2R2R0ZVZlbmduS1ZSUjUva3VNRnlIL0ZNUFp1N280Yk1QZXJuQ2E2YXYvaG1CUFNOZCtVNVgyZ3dkdklseTJoVlJLem1adGpzZEJ5STlQbHY3VHdCQmhsR3BKQjBJMmptSTYrVkRZamlUWlh0KzZ0WEVqeE8wV3hiT3dkbmdnRVRJMHpkSzBab0xnNy9BT3pKNC82akdlUlFyWjVmWjQwVUdVRlFPVUlORDVFVU5keFl1RW00QXhPN0lJYnppUnk2eUsxSHRKL0M0cDh5dXR0dnhDMjBNUUlNVEFNc05DU0luV0tRdndNRFdmWE1uNU1mclhsY1BhUFZiK1VEV1ZJL3lyeGo4TXdmZ2REVTdWK0NjNkszL1NBUjhCVnVMNE15NVNqQzRyYkVSSVA0VEJQeUpvZjNUZ3d5bWU0L09takVSc2FjS1JmZjJ5dXg1ZDRPbGVpNExCcGN0b0xpVGwwRStaTzNyWG5mQ2NNNlhiVE9qS3BiUWtSUFdKM3JlY040N1pCT2R3dlNlbGJzTWtvTldlRCtwck55VHgzL0FDRzc4RXNDQ0VBMHFLQlU5NE1vL3dBdCtYK2sxYmU0MVlLRjFmTW8zSVZqcjAyck8zL2FWRVl2R1lRUkhZaU9kRG11TzJlZjQyUHlaWmxxVlg3dis1akV1RW5LREJQUG9PZGRzSW9lV2xndklrZ0V5TnlPV3RNdUpjUlVud3JhMUFpRUkwSUJBMmFqOFpaeEQ0R3hock5zQVhjMXk2MFFxK0tFTE1SSU1LREExUFNzOHNpazdaOU5LTTAwMEt1TWpEWkxON0R0Y2szQ1h0TTJZS0FwQktORWtHWUVuOWFUakN6TGxocHlHcDZrOUFkQkd2V3VZeTR1SHoyN1RDNFF1VTNJMHpNUXpaQnJvQWlpZjV1MUo3VmwzQmt0b0pBaWQrZXUxWThtMmJzV28wYURnZU5XM2NMRHduSVlPWU5HMERrRit2cldpNDFqR3h0cE5QOEFIdGdaU05tRTZ3ZVJnblR5NlZoYm5EbUFlRHFwSWZhQkRCZHdkVE1iVmNMMS9EYzVVN2pYYllUUGtZOHFsSlgwVnRlMGN3YXV0MGtrS3hja2x0SU1uUWpmMEFOYnovOEFvMkdaMHdsNGVNTmFLRmhKMVU2QXlKQjFiVGtRUldQdDRoTVF3Wm1WWFVTTTMzNDFDRTh6eUJQa2E5STlpOGJZdkovQzRsQTR6WjB6VDlxQUNOTlpranprMWJGUGpLMlF5UmI2UEs3MWd4dFFaVWl2VGVNKzJmRDdVakRZQzBXR21lOWJFVDJUYytwVTlxeGw2TVY3MjhQZFdpcTVzb0dSWDNNVzBHelFwTWRwNm10RGR2b21uUW45MllubFZaTldtNFlpcVFEUWY3REhLNkJYU3RIREJLaXExMGtaaEtxdjJpSmlaT2lpUWRkVHB0UlVHenJBYXNHRnVFZ1pHazdDRDlLdlhIRlA4c0JEMTNiL0FISDhvcjY1eGU4Ukh2R2pzWStNVjFJVzJHNGJnWE8vZHQyRi93QlJ6UDZXa2x2akZQN2wvQzJNSGNHRkx0Y2NoSHVPb1U1Q0NTRVVFd0RsZ3lackV3ZDZmZXorSGE2cjIrVUErb01BL3dESWoxcW1ON3BJV2ZXMkI4THdSdTNBb0hja2tBQWN6SjJBcmJvMXBTTEt0bVpSQTBPWE5wdVRyeTZjKzFMY1ZnVndkdUliM2phaVYwUFFUdHB1UnJ5SE0xVHdwQ2MxeHA4RW5NZVkrOXFkenJwNTFvaERqK1ROT2FtcjlBZnRUZTFDRXlSKzUrdnBGWnQyb3ppbUlMdVc2L3VLQXJMbWxjalRpanhqUk5iYlpEUExVYS9HUGxWQmZ3aXBadkQ4cDdWQmJmZ245OHF5UHMwcm91d1V6b0owNmo1VFRMQTNycUVLRmNSeXluVDBpbHVGWGwxMm8yNWltUzJMYUVxWGdzUWVYNytuZW1XYVVYb1Y0b3lYM0doUHRGY1ZZYVNRSU9oVFRXTXgzNThvMkd1OUIzdmFHN2N0bERyYUIxR1h3QW1ZR25NeDVuV3MvaHMxNWdyWElBRXk3YkRvSjUwVmZ4SUtxcXdMYW5SZWN4OW9qcWV2a0thV1NXUi9lN0p4eFF4MjRLckxMK0laeURtSll3T3c1QlFOdlFRTzFWUFpjbnhTUE1SUm94SzIxUUlvektaekhVNXV2a0Q5QjBxdTlqR2RpWjhSM1k2ZkQrbGNwdGpTaWtGWUZrdGFzZGVoMVB3RzNyRlBjQnhPMmdCUzNudUhiTUpHdlJmdkdkTmROTnF6dUZ5Q1NGTjJCSnl0bE1ibUZkQ1k3aXRQaEwrRmJEazJiY1hkY3dMSE1FZ2Y1Zmk4NU1BeDJtbmpGVDluS1BzRzRxb1l1NWYvQUJYTUVscENEbWllV2crUTZsZmgrRTNHR2w1Ui9OSUh4V2FZM01BRFlXOHZ2TXFuSzhQR1dTWWtaRHYxb1N5eGNoVnVrbllBMjFQL0FDSkgwb1pKdGRpS0Y5RWNOd2kvbXkrL3RMMTFZaU9wQldpY1h3RVdTUmR1NTJFVEI4SW5VY3E1YlVvekxidW85em1CNFJweURNQ0NaTWFhY3AxRXBlTGNUdVBvM2hLNkhYWDQ4b3FQMWJLS0ZEbXpqckt1dHRFZ3NRQ1lMTkhPRkd2cHBWUHRqeHhycFcwZ2EybHJUSVlHdktRcGc2ZXNrelNuaDJOV3dodkNHdXZLMmh5VURSN3A5ZkNQK3JwUTYzQVd6dVNmRm1ibVR6MDlmcFRwNkEzYkJzUXcwdG5rZFQ2Q2FmOEFDY2ZidFhjTy91NTF1aTRIMURGZkd2aDBpQUkzT3ZiU2tXSEtuRVN3bFM0MDZndU4rMFVQeG5GemR1aGRGOTg3TEhJRWtRTzBBVkdkTXBHMGdxM2pvd0xnNjNMbUkxZWRZOTJwYlRiN1gxTk9iMWs0akVKWlZZQ1dFems2aExhMmxkbTIxMUpQbTBWaXdlVlB1RTQ5a2JFM0FmOEE0U05lOTZ5QUQyNWVWQi9zTkYvSU5pV0F1bkxvSk1EVFFUcE1hVEVVNWZHTmFZT2hnOWlUQjh6dDVVcHUyMjkycnRveEJjRWpjRWlENmpYKzljYkVGcmF6ditmOW9wMTJLelg4VU9DTnQ4VGN3enQvRUt4RjFIbExXSSs4aHQvZGx2RU5kbkdtaHJMWUNCYnpIOERnZWJBcC93Q1ZQUFl5OFpLWjJVTnlCNStYTGw4L0t0ZGhNZmhXdTI3YkREM215dURDcm1JekJTR0FBbVJjbmI3cmM2dnp1djJNL0JSYmE5bmx0Y0Z3amJldGR4ajJiR0h4RCs5VUJHZGpaUU5Dc21iU1g1QUFnWlJCN2pTUi93RDIyTGpNRThERFpHTWcvd0FySFVlUm56cDNPS1l5VFptVUd0TitQZzViSC8wajZ0VmY4Q1V1WkhCVWd3Uno5SjdiZGFkY2U0SGludUVMaDdoVzJBaTVVSlhLdTNpalU4ejNKcTZoOXRpdjBabkNZRjdoaEZaanp5Z21QT05xWld2Wm5FdHRaZjFoZis0aXJ1SGNIeFRaa0tOYlVha3UzdWwvNWJueUJvN0MyYm1FbTk0WE95RE5tRTh5WkhMNmtWRlJrM29QS0tCcnZzcGkvQ251OXRBTTl2NkJxMTNCdlppL2g3WUl0RmpJUEkrUGxPdjJWR3Zja2NoU2V4eGczSFEzYmJaaXdFZ3lwQlBPTmV1ay9TdC9oK0wyU0JhTENBZ2J6ZHZGQThsMDlhdGo1eGZLckpaZnVWSVc4WDluRGNIdmJ5M0hZQURMYkFPd01sZDl6L3AzTlpEalBGRXllNVN6a0NuV1NTZE9SMEhQV0s5V3RZa0xiekNOZFdCNmtBd2ZUNjFqdmF6aTFwRkZ4azk2akhLMXRnUEMwU0FHT3FnaWR0cWQ1cHhqYlJod3lqTEo5UDJqeTIrMG5TQlFqMDc0eWJKbHJkazJ0ZHZlRnh6NnFEODZUMlk1aXNia3BiUjZpVmRrbHNLUkJrZDl3ZktLK3crR09vUCtXZnZiRUhxUHhlVldwZXRwc001Ny9aL3JWVi9GcytwK0EwQTdBVjNHS1JQbEp2UlVsaU15alVnNlJ6SGFyclNCN2pCakFWVHIrL1dxeGRqWHA5T2xSVjlYSTVpczg0NzBhWVMrU2pEaldpTU5ha0hVYWNpWTFvcXpoZ1k1TnBIUTlqME5ETDRIaGhvRHR0Vk9OUFpOenRhTG10TUFHSUlCMEhwdisrOVRWZEpHbzVqN3c3cjFIYWl1TmNROTRGQUFBQTBqWURvS1cycmhCa2FHbG44SWZFN1ZzSXNBaDBLbjd3S3NOdDk2WWNFeERXM1c2c1NwK3p5SUljRlNPa1ZYdzJ5am5Wb0xHTXE3RW5UUTdadHR2V3RCZ3VCdG1RUVNqR1dPMEFjajBubDVHbHgzS2REWm5HT055bDBhTGluQTAvaFN1SFhJckgzcjJ3ZkVJV0I3dmFWSGlPV1o4V25JVjU5bWEwOGhqMGtFNmc2YUhsdjZFVjZuanlDcGJhQnBHa2FhVjVNWHpYbzVacEhsbW42VjZHZWtrZUorbStUTE1wSitnWEVreHY4QXMxR3lXdjNMZG9uY3d6Y3dnMUpKNXdvUHdpak9OQmMvaCt6eTlQNzBqRjBoeVFZL1N2TnhiUGJ5YUduRTdTTmVjV2g0QkFBM2dSRUQ0VDhhWHZjSVVBR3JNTmVieEVldm9QNy9BQnFOMjNxbzdmMXF0YkpKa3VIUERHWmtxUXY4eDBIbHVhWFhubGlUekpQeE0weXRrZ3VCK0VINFhKL1NsdDNlcFNSUmRIMXZjZVkrdEVJeHlHUHZ0NUR3alQ1djhoVk5vYmRRZjYvUVY5Y2JZZHZtZGZ6b1JWRERyaUYvM2tHZkFBTGR2WGUzYlQzWVk4OWNuL0Uwc3NYWTBxOXJtWkZNZlo4S2pzb2t6OGFHZTNwTk9sb0RZNTRVelNWUXhtNWpjRFdkZXNhZVpCNVZ0TUR4TEJoQmg4eTVnVlpBb2pLNEVlRnRnVEM2RXlkUkZlWkM0MFJKZzc5RDU5YUl3YWpONGlRc2FrQ1kwTWFVeWRDU1ZudG50VHdNNDNEKzl0dEYyMEdaRis2NElXVVlIWW5JSVBJK3RlZThKNG15eEc2bUlPNEkzUWcvdWE5TDltcnBaQ3NncUVDVFAyaEExTS82Zm9UWG5YdHp3MytHdkM4cGtFaExuY3hLT2Y4QVVWQkJQUEwzcWpqYVpLRXFkRy80UHhlMEd0M3JpcGwreVdLZ20yVzFWMVlpVlU4OVFOK1pvN2p6M0ZjKzl1SDNjd0FrZ0dkZ3pBeko5T2dKT2xlZllYRmdRQzNnY1I4WW1PNGFISG9LMHVFNGo3M0ROWnVlSzVaVWpMUCtaWkdqSlBOa2tFSHVCclM0c25HV3g4c09hQk1WeEN3V0NpM0JKaWZlRWZFenRRQ2NSUno3cFY4VStIeEdNM1FnR0RNYzlQbldhNHMyUWt5WEJNS1ozWGVXam5zUE1HblhzbHdpNWZZTnRieU1ITVpZWmxaUUVPc25VR2VRSnIwbFQ2TWNvcUtiZWtYNEs2QVdjbFNpZlpLZ0tKS3lBSUdnRzVIYWovWlo4T0xaWnptdlpwQytMckFFN0dUclYvSGVCL3c2TGNMSzFwQkFHNVp6ekk2U0FUMkFGWXpHKzBkN3hMbkJEQXJPVko3K0lMUFVWYWNveHgzWjJQNy9BT0I2TmxpUGFFMnJ4SWJQYkFJWUVTRzdrZHpPdlFDc2p4bmpmdnBHVEtya0VrbWRwMUh6K05MYm1NSlJXNmlENWloQ3hJdEwxLzhBMmE4U1dXYnZadVdISHlVcTJNK0pYckpaRllzQVoxV045QU54cU5ldEo3NlpHSUJrZGFoamxtNUhUKzVxVjF5YWZHbW9peWV3Y2lwR3VzSzQxT0tTdDBRYnFFZlpnOXRqUXEwUWxvSFhsOUQwb1hRV3JPakZkaFY5OEs0QjV4b2Z5cGRGVzJia1U2bGZaTngrQ1liN3Ayb25pT0hGcHdvOGZnUjVHbjI3YXZIUGJOSHBWZUh0Qm5VY2lSUGx6cnIzTXhaMjJKMitnSFFBZmxTOFZSUlNhRzJGc2Y0YXZuQUpHYUFKeXBteVptTzBsb0VDZThhQ3RMd2ZFMnJhd0RxZHlkejVtdlBYeFJZYzVnQUFiWlJ5amZjQStjbmVvZngxd0NOZmhWY2VYSEQwWlBMOGFlZFU1VWowVGpudEpieSs2Vm9uN1RmaEhPTy9UNDFncmR6L0FCR2NiQ1FQZ1JTOW5KT3RHMng0WTdmbU5mbDg2bmt5T2UyUDQzaXg4ZVBHSDh5R0p2RW5YOTdVdlhlaWI1a2swTXRRaWpaSUp3YmJyek8zZnRSVjlUN3hlbTNiYXErRjJNOSszdDl0ZHlQeERZYy9JVVp4RzJvUGhCTEt4a2s2YWJBRDg1NWpUU3FWcXlGcm5YN0N5KzVWei9MSDFvU1NEUFA4K3RIMzdXWmlRUUJrSkVuZUprQ0J2UWR3RFNPbXZuei9BRTlLa3pRdWo0dVNkVE9uNVZYVjF0SkRIb1BtU0IrWitGVmdrYWo5OHFER0plOUlVanRIbHJKb2k3YjJIUVZSaGtsaDIxUHAvV2lITytsTkVWbFNySmlqYk50UTZaMkFXUVdneVFzOHdPMzFvVWFhOWZwWHowZllEMGoySzR5VEpCMGtvb1A0bWt3ZTBLS0s5dmJXZTNjMWtNdWg3MjNPdm5ERDRHc243RFhBR2FkZ1Zqek15ZlArdFB2YXJpc1doWWtOa3NnczBha3NOSTZBRDQxZURNOGxzelhzOWlNMXZJMzNUcDEwSDZFK3FpbitCeGhWcmQwa3lDUTBiK0VRWWpuN3N0citMS2F6bnNUZUMzWGtTTW8xbUkxZ2tlaGltK000dlpBSHV3VERaNVBZVDhTU3Z3ckpKcTZOTWJGWHREaG1URUcyWklrd0FOUFR0ejhpSzBpKzJ5aXhidEtoWElJSUIrMGVabmxKa3gzNTFuL2FtOW1XeTQzVmNoN2xDVkI4OGdUNFVsVysrOCt2UDBPOWJjR2Q4VEw1WGpSeTZsMFB1TDhjeEYxUUNJUlpZTHQwMWpjOHF6alhKTTYxSlZMSFNTVHAxTlc0WEFzVHFJQTNvWmNrcGh4WTRZbFMwZ3pDM0F0c1p1cFB4SGZ0OVJWZHppQmE0THBBaGRBSWdIZmw2NzFNcGJKbG16UnNna2ZFbWhUYkxOTENCUExrS2g5T2lxeXRrQzBrc2R5WnExUlJIRW5Rc1BkaUFBQjhBQitWY3MyU1JvSnFxUWpZS3kxQmhSQjJxdGxwcUFtZlcwQjUxTlFWMitZcXBkS0pGcFNOelFvRGRBOGZ1SzVGWGFMM05SWXpYVWRaWmhyeFZndzNCb3JHTGFZZ3F4VFQ3SlVrQTg0WVRJbnRQblFLRGtLdnUyeU5DUWZJelIzUXlkYVlMZndUQVpsS3NCdmxPbzdsVEJBMTMyb1hYdjhBR2lDNVZ0TjUvZnBVcjFrU0NCb1JJZy9FZWhrZWxSNDJVNVVVSzdkVytKcnF1ZTlYTGh2U3JVd3hVRXFkWTZSOE5kNjdpeFZraW1BdUtvRkVGU2RLaXF3MzBwVjJPdzNDSEkxdTRURU9wNXpITStYNjAxNHJoOHBjVHI2QWYzbjZVa3ZDVThxZTQ0NTBRc1lsQVNlNUEzK0lOWFhUUmxscWNYK1VLTVpiQXVaUnNxTVBNaEdrL3dDNmFBQzlxYVkrTXhJR2dHVmZLSW4xbWdNczFCbzN3V2llUWU3YU9iQWZBTWZ6RlVpd2REQmc3SGxFa2ZVSDRVMU9ESXRLVEFCYm4zekQvd0FmbldsNGJoZ01HalpBN0xuM2piT2pLZlFnNzk2N2pZMDlMWmozdEJDd0dwTGZMa0txQ1J2Vzh4MkdSYjRlUVNWWjNLQ0JxMmhXZHhFRHpyR2NTeEdlNHpjcElIbEpxbkdrWjdzQmR0NitOVFJaUFlWMWtwVWdOaFhEY2I3djBranUwWlJQWUNmalJQR01ibTcrRlUvMmdOOVRGS1cwcXU3Y0pwcm9GV3duaHI1UXg2aVAzOGZsUkROcCsvMy9BR29YRGlBQjExcTI2ZFlxTDdMUkxjVGZMS0ZPMi83K0ZEcGE2MWZoN09kajVSKy9uVFc5aGxzcUdZYS9kWHIzUGFyWTQvYVo4dVduUUFMU3JBYVFUK0dOQjYxZGk4Ykl5SUNGNm5jMEY3d3NTVHFUWFFOYXArQk9OOWtyZTljdTcxY2dBMzFxN0dYYlJVWlZJYm5SU09iMkJJbE5lSHVBS1cyMlBJMTFMeEc5Y3RiQTk2UGxTcHFBZTFUYTNGVjJuZzdVZWdMWlV5K2MxeFdJcGxpYnlzTkZBOGhRQldqS05CVHNxSm1wS3RXVzBPOGFVZGdMR2RvMkhNNmZuU3BXd1NuUXVaQ0s2Z05GWHJKWmpsQklIYWZwVitNVzBsa0NDYnhPdlJWNkRxeDU5UE9ZYmpWaFQ1Qys2UmNkUUFGNUdBVDY5NjIvQ3VFWWIzU3FkU3hrRnlWOFEzeXJIU0FmU2RxdzJIdUZHa1NDT1lwcmF4RFhJRE1lMG5ZblgwTTBtUFBHRHVTczdONHNza09NWk5HcnYreXFHWWhmTFg1R3N6eEhoNHRUcnJPM2JxRFdpNFZ4RjhxMjdqRWtqd01kejFWdThhZzh4ODF2dENSa1BhTi9QOVBwVnBjSng1eFI1ZUY1OFdUNldWMlp2aUZnQ0hCMzNIUS8zcFkrODB3eGplRlQyajRHbHJtc1RWU1BhZzdpWEU2VnB1SFF5MmpreitFU3NUb3VWWE1jeU1wK1ZaVkdyUit6OXdtMjRBSkthNkFtRnpxMDZiZ0ZTVDJxc1hkazVyY1grNDg5cnVDakxocmdBVTNMaFY0NTVwWlNmUVJWR0I5bVZOMUY3U2VmT0JwNkdtZnRWaTJLWVlIUUhFTGxHL2c5MFNzOTRZR3RCd1VXMWE1ZHUvNWFEeGZ5cXNrQ05ldnhvS0hKbnBlTzBzYmJGZkYxWTNFd3dzSTFqQzVXZnhUT2FRTXl3TlJKY3JycHZwWEV0MmJIK0phSk5sdmVCVmJmTnFvMS9DVm5mWTZVUGhPSEcwejNGY2k0V2RIdHVTVkFaUVJMRFhSVzMxK1JxbmlPS0tJdGxpR0Z0OHhZbWZBQm0rWkRDTzZpcVJTdlppeXpjbVozaWVJOTJ1VVNDVkt4MEJhWStVZWhyTXU4bUI4YUw0cGZ6dVFQWHVmM3BVYkZpQm9OZXY2Vk9UdGlYU08yYk1EOHVwcUYzU2lIYkwrZldoVlF1MENnQmZMQjJOUVJaTkU0bXpsYVBoWDFnRGVLRXRGSTcyVzJFa3lCb3RjdDdrbmxWOXU4QWhHVUFuNStkUXNXcGdkZFQvS1AxcVk5cElONGZkVzBtWTZ1ZGw1QWRXN2RxR3hGOW1Zc3hrbm1haThra211QlpyU3RLakxTdXp0c0NyTEkxcTVMSUFxbk5GR2pyT08wR3FtMXFSQk5UQ1Z4MW5MYlFLdDBibHJWUVhXaWJkb25haWhYUWJkdERZbUNOeHRIeG9LOVpLN2dqekZPcnlvd2k0WmpRT1BFVjZTUm82OXQ5ZWRDNHJBWExPbjJaR1pTREtPcDFrY2pvUnB5bWc1czZNVWhXcTFhdHNHbk9DeDlrakppTFFKMnpBUWUweDlSNmcwVC93Q2tXbTF3N2g4MHdoMGNFY29JZzlkUGhUd3BzV2JhRk5pMDl3aEJyMjJxdzRJaGdGQkptSUdzbm9POUdZV3prZktkRHpCMElQY2NxMVBCOEJKTEJzdWhKYVBzcU5EQjVFbWUvaE5iSTRWeGJrWmN1YmpUUm5jWndNTEh2WDkzL29Bek5NYWtLRHpNNmtnVW00cHdzcjluVWJnOVZNRUh6NmpsclhwSERiMXBISnRXajd0ZnQzSDFjNkdZUDJSMWlsalhGdUY3ZHEyQ3BKeTVoSlZUcVFPUUUvQ1QxTlAvQUtlTTdpMGRoelNqSzMwZWFQYUs2N2Z2bFRMaHVJRXpjTUZWa1FOVHJ1eG8zam5DWFJtS0tXVWFsZ0NRdXNiOGgzclBpMmQrZXdITWs2YUN2SXo0R3BPSjYrUEt1NGpERlk2V0RycHIxMWtjNXFmRk1mbThBMUoxYjlLV3ZhWUFrNlJyclFRZWpHNFI0a2NrSXpueStCbXdHUWdtQnBCUFdmMG1sbDRDZERJNjdWMTdzOHFneG1sbHRqeFZLamltblBBSGZPOXRHQU54Q3N6QW5UU2ZsU2VLWmNFVUc5RThqcjZSUHpvdzdGbjBhZjJoeFZ5NmxsbVRLVnZEd2pYd3JieUV5Q2Z3N2RqVnZFc1k3Mmd0dDI4Wk9aUUpWbEVOSG1JL2MxWmhCblJGR1lNTXpvQ3YyVURFcU84cXpIVHJWK0V0djd5MjdlTkd0cUJyQXRzemlTVjNNcWhIcU91cnBwS2pSSEp4alFaZjRxTGg5OTd1QmxGdFMyalpoYkdZK1FiTUozOFhuV0M0dGoyWWxRZFNjekhxWi90L3RwLzdRY1dCU0JzQzJVVHY0bkFZK1ErdmxXU1Z4ek1takxTcEdidDJkc1d1ZFdzOFZTMStkcWpCTlRvNnZrNHpFMFRnaEVrRVRzQkJKTStWRThPdzQ1cVQ1alFVenVzcWFuZXJReCt5T1ROL3RTRmZFc0lTZ2M3amZ5L3BTL0NXc3hJclFIWXMrZ0kyUFNsR0J0UXhPeW5RRStlOURMRDRHdzVQdGFaRy9aaGZJL1dpTU1QQWVwMEg4bzMrSitsT1A0V3hrS0Z5N05IMkYwQkJuZG8rUW9LOWJnaGVRMi9yUVdKcmJGZWRTVkE2V3AxcUNXNG93MnNvcXRyYzFYaUlwQXptdVdocnJVM3QxOHFVdE1wYW9pRTFvZ1ljbXBXRW81QUFLS2lTbE1UWFVJTlRzMFZpb05CeVJRcW1QRjJoemN4QjJqZnZ2MjdEOUtNNHhqRnVXTEtBZUszQytZeWdTUFZScFJUOEFkYmhGMlVVQ1MwVEt6QUNqU1NUQWo5S1pZSEFPZGJDZTVRZi9NOEYvUTdKL3dCSW52VFk4TW52MFN5NTRSUWt3M0R5cUE0aHZkaWRGWVptWmUxdmNlWmltU2NGUzZWS0NGMGhyYkZRWTVtUVNyejA1MHo0ZGdjS3R5R202NSsvY0doSjZBOCs1cXppN1pYQ0xrYTJCQnRqd1I1TU9mbDYxZVBqcStOR2RlVzVTKzEvK0I1NFpidlFMaWtrZmVBakwwR2JuNWQ2TS9nd3FaQWRDWTJqUWZkNXdkenJ2SnJMMnVKWXFRbG53S05nb0JIbVFaazl6cjNwOXdyTmJRdGVkZHpKbUo2NmMrWHlwNXdsSG83SkdQSGIyRTM3cXV2OE9DQUR2bEdpcU5UOUtTWWkvYXR6YlFFekRIV045dk9CMTVuWVViaWNTZ1V2Wis4REt4NHl2K2hlYW5tZW5sV1h0WWtzeGxEOEIxMTNxbU5KZjU3TXpsSkttWFkvRVNWRU5Fa3htM1BVNmFtbDJQdHFJaElub2YwRk1NVGNPa0w5S0J4RjhnRmlZQTdqOWFyZitVTENUZGIvQUtpakVvb1VrcHBHc3RXYU5yU1JSL0VjVTd5QzdFSFdDZnkycGNyRUhTdkp6WlZONi90L1k5dkJqY1ZzNFZxeTNZbmN4Uk9Idkt4OFdsVnNJazlQbjVWRm91cGZKUmR0NVRFMWRnTVQ3dTRyeElHNDZnaUQrKzFEYjFJckZjdEhTVnFqWmNLNHNxbFFZZFZqTDZLSVB4QUVIcFZtTzQ0aUFtMm9VbHBPK3JFZ2t3ZHZzalRyV0tGZEpxbkwzUXRGK0l2RnlKMkFnRDk4L3dDbFZWelVnbnArZFJacVd6aTFab2kzZEEzb0FtdmhSNWdjYkdaNG13MFhUdlhNUGlWQnp1U3g1Q2dWV21uRGNCbTFrQ09aK2duU2FhTGxKMFRtb1JRWGcyOTQyZTZQQU5WVGZNZkxuNjZWeFpKOFNtamJWb3I5a0F6M0RFK2U5U1MrSk1xTlBUNlZzaGk0N2s5L2d4eXlmQ0ZpM1liU1FacTVTU3dtcmpjUm0yTzlNTHVDbDBPZ2tUUEk5K3hvT0RmVHM2V1JSN1F1eFdwaXBuRDZUUkw0RHhhR2lHdzdBVlJZL2xFWlpVcW96OTFETlcyZTlYWFZZSFVhVllBcDVhMUJ4VjltajZtdWdjRFdvdGVpanJlR01UUWwvRG5VamxTOFdjcHE2Qmg0cXF1cUJ0Vm9mVGFwSy9YNTBLUlMydG5xeWdtM2JWNVlLQTVIcENyNi93RGxWR1B3cjRtNEVuS3FBVDBCOHV2TDBvMXVMVy9DVGxrblVEU2VTeVRWM3ZMYTJ5d0JBSjExSjE2RW5XSzAyNDlMZm84ek82Zkppdkg0R3phdDU5U3lFRU1lWmthZDZxeGR5Qm11V1VZa1pqRW93SFZvTzVKcU4yeGR1bk14VmJTNmdjaWVYbWFXY1V4VEJ0R005WjF5aVFQaWN4STdpclIxMnlDVjlNTi85V3MybDhOc2hqeW1maWVuYWhUeEhNSnV3VDkwc051MERTT3hvWCtBWjRiUVNLNDNDM0hPYU8wOUhKeC81Yks3MXRzM3ZCZDhVeUNUclBuVkY5N2pueFNTZWZYdlYxN0JQMG1xcmR1NldFS3hQU1ByL1dwU1ZQNE5FSmNsVnBnK094Q1cwOFgydVEzUG5ISVZtc1JpTXhrbWZuUkh0QThYQ00rZHZ2RWFnSHBQTWp0cDhLVXpXSE5rY25SNmZqNFZDTit5YnZWSk5mRVZ5S2dhemhGZkUxSUN2aXRjY2NSYXVYdlZBcWVhdU9KTmJIS29rVjhEWHhhdUNmS3hGUTFxYzF5YTRCR0ttaTF3Q3JsV2lrYzJYWWV3TjJiS1BuVEt6aWxLaEZXQUNkZXZRbnZTcFFPdjVmT25lQjRRV1RPTGlnalVhNWg2a1VWS25vamt4OGtSeWtWSUtTSXl5U2Q2UHdtRkw2TUlZY3VvNnFlWXF5NGppY3E2VnZ4eFRWK2p6cFplTXVQc3BYQUMzQlpnWjFnYmpzYU1UTXhVUm9OUjVVRGJlNHAyUGJmU25HQXhweTZxREd1Mm8walR0QUhLbmlvdDFFVEpKMWIyRE5oSERBbFNBVG9TREI4anpxN0VabEJqOWEwUENvdUt5bGo0byswZEN3SU81MG1LWGNkNGV5QThxMHdVVmNmWm1uTzJyRXVHeEU2RUNwM2Jhem9JcW0zYmlESU0vSTlEVnJXWU1nMUNkMXMwS2t6N0ZXSkdoZzBudUxjVTlSOGY2MDZ4RndFUm9UU3kxaU5ZUHpwSlFYNEs0MjYrUVYxWGNiY3dkd2Z6RlRTd0RzYUk5NnBNTUpxOXNLaDFVeFJXUDQyZEtkZkp2TGZzcVNaWjRTZWF3WW56aW1yaTNiWEtGMElnRGN0MkFxakg4Y1ZXM3p0R2dHdy9XaytNNHdTQ1NNbytaSG55SGFwZmRMK0loa1R5OWYxTE1YZTExMUkyWDdxL0RRL3ZVMGp2MkFYbHlUSjVmU2FJL2psSWtRQjFjeVQvQUNxRHQ1MVEzRTFCMGlQeEViL3lxUHFmblZ2cXF1aE1maVRoZXhvamprSytEYXhTUEVjWmtFVzh4UE5pTkI1RHIyaWs5N2lGellHQnZHODkyTkI1dmhCaitucjJ6Vll6R1cwNTZqZnNPcC9UbldiNDM3VE1VS3BvRHBwK3RLTVZpaXhpU1J2cnNUMUlwVGlyMlk5aG9LaGt5dXRtN0I0a0lQU0twbXBnVkJCVjRXc3EyYm15bGhVSXE5bHF1S0RRVXo2SzZWcWFyVThsZFFMQlNLK0FxLzNkUnkxMURXZkxZWThqOVByVVh0d1NEdU5QV3JNNTU2eDNxdGpyUE9nMGNySVJYWXJvcVFGQTZ5VnBhdHkxMjBsVGNWUklSc0VlcjhKZWNId1RQUVZVUlRuZ2pBVDE2L2xTZERvblo0bzRoV0dWaHFHMk92eVAxODYwL0RydnZVRFJyc3c3L29kNkRiQ3JlV0dIaUEwbzMyZktvdnUvdnpNSG1PbzdqcFdyeDV1TWp6UDFERmNPU1cwTUxPQ21pRGdjb2tDZEowMTA1K2xYSmRpbzRmaUpGeFpNS0dFMXY1bmo0MDVPbVVjTXhZUmorRW5WVHRSZkg4TG10d2trSFVEZlRtQjZtYWphNFlXdXNkQVB0YmlEMGc5RFZkN0UzVU9ScEFCMjVlV25JMFdrNUp4ZXlqVmJGZGpoRjNJSnR0M2tmczFSaXJmM1RvUnQzN2VkYW0xY0NpVllqL1NUSVBrZGo2eFFXSWYzaFB2RXlqcTJuMTErdERjdXhZWm0zWmpNWFlhZzdKTTY2MXZMdkRFeUVyNHgyKzE2Zm9hVDIrQ3E1SnRzRDJQaGIxR3g5S0tnbnRNMnh6cXFZaXNXUVQwL2ZXcFhyUkZhREQ4RmlRd0lQWDlhWDRyQ01wMDFwdUNhQjlaY3V6Ly8yUT09XCJcclxufSxcclxue1xyXG4gICAgc3JjOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVdGUlVYR0JnYUdCWVhHQllYRnhjYUZ4Y1hGeGdZR0JjWUhTZ2dHaG9sR3hVWElURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeTBsSUNVdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFMNEJDZ01CSWdBQ0VRRURFUUgveEFBY0FBQUNBd0VCQVFFQUFBQUFBQUFBQUFBRUJRSURCZ2NCQUFqL3hBQS9FQUFCQWdRREJBZ0VCQVVEQlFFQUFBQUJBaEVBQXdRaEVqRkJCVkZoY1FZVElqS0JrYUd4VXNIUjhCUWpRbUlIY3BMaDhUTkRnaFZUb3JMQ05QL0VBQmtCQUFNQkFRRUFBQUFBQUFBQUFBQUFBQUVDQXdRQUJmL0VBQ2tSQUFJQ0FnSUJCQUlDQWdNQUFBQUFBQUFCQWhFRElSSXhRUVFpTWxFVFlYR0JzY0VVTTBMLzJnQU1Bd0VBQWhFREVRQS9BTkJUMWlTbkN3dDZ2WmlPT1R3T25hZUIyeUZsQTVLWVdPOFd1K2ZsR1FwcE02YW9MV1RMUW8yT1RzUmw5WTAxSHNtWlZLRXFXYmZxbUhKSUp0ekxESVI2TXBwcjlFdU5CdE50eWxtRHRMVkxWOEswcG1JUEpWaU9SOHpEcEd6a0tTRkdYTHdISXFsSmRUL0NBU1R6eWlpUlFVTkVRbENWVlZUd0FVUVJ1R1NmVWlBTnFiVXExNG1NdVFDK1pLbHR6RGdlYVl6ejlRcXFKV1BwMjl5S3RwUzVTRmxxYVd3T2FRVUs1akFRRDk1d2JzaWtsbnQzVExWclphUWVPbzR1OFk1ZFJNbHpQektsYW1QYVRjQThIS3pudmFJME8zS2lRdDBURUVuTkpEUHpTSEhvSVhIbmFXenA0TCtKMFdyNlBKVGNIRHh6UWVlcWVlWEtFVmZLbFNDMVFWNG1zRUpzT0pXcXg1QjRzMlowOVNFaEUxSFZrZUtTRHcwSEJ6eWh5SzZSTmxrQXBVSFpnWFlFYWNPQjNpTDgzSmRrb3hjWDdqRFYxV01PT1VqR2pWbDlvYit6aDArd0lOMlBWSW1BTFFlWTFCM0dGKzJLSDhOT3hJSjZ0V2ZEVStqa2NpTWpCR3o5cHB4OVVzQWZDb014OHZlTXpsN3FaZHh1Tm8wY2huajJZdnNLNG4yZ2VtbEVtRW0wdHJMcDE0Sm5jVTVTb3V4M3BKR1JIanlqWGtxTVVac2VPNU1kS3BGNFFzWEJCeXpEWmdpSTBra3FtSVRxU255SmhXbnBkSjZzNGJGU25TTXNHcnBLcyt6MlhESGdMdUxNMnFoTTFOUkpsSlhNSVlURWhPTkJZM0FVd2RzUWZQempKMnJSZXEwellkSUpmNWhWdkorL3ZkQ2RaaUMra0NKa3M5ckVvZDdOTmdYZkNjbGFSS3B3cEFVdGFVQWh3NWNrY0VpNWg1SVJFNVVNcFdVSS93RHFNdENjUmNEVEYzbGZ5b0YyNGtpQnFqYjAxZHBhZXJTeHYrbytPbjNlSHhZSlRlaE1ra2tPNmtiNEZUaGZ2RHpqSTFnbUt1b3FWekpNQTlXZHg4akR5OVBUcXd4bG82UEtwbnlJUEl3VlRTTU1jeEJVTWxFZUpFSDdQMi9PbEZsS0trN2xFbnlKaFhoZmhoNUhTT3N0YUI1czNmQ3FuMm9KaVFwSnNZOFZNSnppRFE0U3VZQ1lyWExET0lFVk5pUW0yampqNVNPTUN6RVJldFVVS1hvWUtBVXFURVNJbVk5RXQ0SndEVUp2RVV5ekREOE5lSm1YWm1nQkY2WlVUNm94ZVpjUndtT0FiT1NsR0lBb3hidHdHc0RiUTJzU1RLa2tJU0xMV05QMkkvZHZQMlJOcTFuVk9sS21VUmRXcVFkMzdqcDU3b3dtMmRzRlE2dVhaQXNUdjRlT3AxOTRaSmNuUnF4UTRya3pTVi9URkZPZ3lxTkNTbzkrYWUwU2VmNmp4UFozQWk4WlNaMHpuNDNtcVRPMFlwU2tnYnNTQUxjTHdsbkxMV3l5dG1UOStjVzFGS2lTeVZqcko1YjhzWFRMZkpKQTd5K0dRaDRRdlFzcFVXYlQyNTFxbEdVZ29Lalp5NmdEby9vOEJ6S01wWXJtSUNqZGlYUGkwYXlUMENtSWw5ZlZUazB4VmNTc09PWi95R0pJUjUrVVZTK2pOUDFoVitQa0x5WkRHK1ZueGNJcmpoQkoySTVTWW8yZlRrRUdZc21VeEx5aW1ZY3JEQVNHdkE4bmFwUXF5aW5rV2J3ME1iRHBsUTFWWGh3eUpHRkdSbE1DWEFBQ2lwckFESVFpWDBWVWxEVEZveGJycUtiWk9BdzhIaXVTT042aG9TTXBkeVBsN2FtTEFFeGVOT2pzUE51Y1VvbkhzT2QyZVduMGhMVjB5NUpPRllXUDJrL01CNDlwNjdFTUpMSFNNYzR0UFphTFZIWHVpTlROVlRLbkVKQ1VoUXhLZTdObHFRQWJuU0YvU0xhc29VczFVMU1xWWNMU3NscENsZnFDa25NRGlEQ0xvajBpV21VcWxKQkJMb0J6Q3JGa3EwTnJjNFRiZGtHY2UvaGU0MGxsODdaSVZhNUZpMm1aYWVTVGhSMFlSVXVSQ28yZkttSVRObHJ3eTFLVUU0c3cyRWtQdlpXVzhjWU5rOUdTRUZjdW9XeERwS2ZpR1FVeWdXT1Q2UUZ0SUtUMVVrMmxvRElBeWRUT3M3MUVnT2VXNkh1d0o0UWtCMUtzT3lBOTkwSkdYRVp4NWFabmFhZk5SaUMxRUt5VmljMkZ5WEp1UHJHNmtVZ0NFckRLV29BdVE0RGgzYlV4bFowLzg1SFdzcVVKb2NLU1VxWlg2UzEyODhvNkIrRFNvZmwyQUZrMkREZGJKdklpOFZoTjFTSTVJMHhkUjdOU1hVb0ZhaVJkVjk4YWlocFVnV1FrVzBBRUxhTkJDQy94Z2VRTU81QnQ0UnB3dHQ3SXRKZ3RWSnRBYVpkNFByWjdDRkpuRW1KNVZVaGtUcTFKTmlBZVllRkZWczZTc01VQWZ5Mmcrb1VYeWFCMUtpZHRNTkdmNnBkSXQzS3BTam51NTdsZThQUk1jT0M0T1VYS2xoU0NsUUJCekJoWFNTakpYMWFpOHRYY1Z1UHduNVE3Zk5mc0hRWEhqR0NDV2p4bmhBbEdHTEVKM3hjSmUrSnBrd3lBUVNoT2JDTGNNUkVreGVoRFJ4d1AxWWowU291ZUxVU2lZQndQK0g0UkQ4Q0lZb2xiNG5oRytPc0p6UGErMkN0eGl6elZxWDNDRjlKU0tuS0NKWUorSW5KSTRuU04wbm9CSVQzcGt4WDlLZmxET20yTktsSXdTeGhIaVNUdkoxTUJZMVpTV2Erak8wSFJ1WEtTWmlsWXBpUVNGTjJVRUpMRUoxYmpHYUtVMHBsVDBUY1UyYWhLOFpZbVdwUTdlRTM3V0lrWXN4Zkl4MFd0MmNycVptRXVTa2dEZTltam1IU0EvbXJUWnBmNVlDY2hnRndOOThVV2FTVkM5N0E2amFTbHFLcGkxTHZtb2trK0ppQnFRdnVXM3dtV1hNU2xUQ2t1SVZUb0ZEQkczSnlUaDYxYlA4Ujlzb01PMFp5aDN5c2JqbkNUcThhaTNOb0lvbGtXM1FMWVE5TlVEbUMrOEg1UUV1V2txYklIdXExQitrSHpUS0FCVStMVkF2NHZweWhiVXpzUmRzN0FDSXluZWtQeHJzSmtUbEpWaFhZNkVXZUQ1ZTFDZ2RvQmFYN1NUa1FjK1JkaURwZUZNK294RUJWaUJZZ2czM3RFS2ljNlMrYmVkdzN6aGVMUWJIOVFwSlQrV1ZLbG45Q3JsQk9xU1B2bkU5bmJXVExXVVRRV3RmMzlZU2JLcXlteDRlSWgxT29FemhpQ2drdHVKRDhrdVEvbEN2V21NbjVSNXRTZUNxV3VXNnBTVmd1YmdLekNUd3pqVEk2VXJLY2VJSlVHdGs2alptR1l5RGFQR1E2bVlsSUNSaXd0M2UwN1h5emF6NVJBVmpvVVNBQ29FV3l6RGtmQzRjZUppK0xIelFzNVV6cW16TnZTNTFOMWlXQzB6QVpxTlFraGd0RzhBNWpqd2gvSXVDUWJOSEJkaGJXbVNsNGszQUxFYUtHNCtFZFg2UGJjVGcxS0ZKR0hVK201cmpSakduMDhrUm5HbG9ZN1FYQytUTU9JUlBhYzk3ZzJNQlVFdzR4Q1pONUFMNGhkWE5KVVhpbDR0bW9KVVk4VkxBaU11d3JvOTZ5SzV4Q2d4dVB2MWlKRWZKRUE0a2t3UHRNek1LUkx6S21MY29NUkxncE10b0lMS2RuMHlrb0dOV0k1bmh3Z2d6UU9VVkttUlN0Y0VJUXFwaXY4VEFwVkZhakJBR2RmRXhXcWhmaWoxSzRBUmdpY282eFppTUJvWEZtS0FjYVNvelBMMy94QzZwbU5CTlROWjMxUHloY291WTBSamJKbzgyaFVxUlRLbWl6TFFQTUtKOW80cE1xTzBWRzdraytKanRYU3NZTmxMVnZtQnZJSitaUGhIRkp3ZFJzd0pOaG81eUR3bVQ1Rlk5QWRRMklrWkc4RTA5SXBRdDY2OG9qS2tZVkFuUTMrUmh3bFRpMEtsWVJWU3lXTG0zemdtZE4xMU9YMU1lWWJFbklaL1RuQWsyZG1yWElDSlRsNFE4VjVMWmNrcWU0QUhlV2RIeUFHcWpvSTlWSkNiTmhmZWUyZkRSNEo2UHlsekppWmFHeGwyVXE2VVAzcGhHcDBBNVIwS3M2T3lhT1FwVFkxS0IvTVV4VXNrWEpPZzRRRXFRcmRzNWpLazRpQUFrY1ZQbndiNW1QcDFLd2M1ZzNBdTNNaXdQQ0Nac29zOXdtMmpBakozM1A1dzEyZnNTYTJJa3lrdHZaUkhMOUE0bS9DTzVMeUhqOUNOY2tsaGhJVWNyUDZDOEdVNjVxZGNPWUxFWkhQdXcxblNFSVNvQm1BdWNnVCs0NWs4M0xic29oc3ZZMDZxVTB0S3NJendwSkxiejhJNXh5dWVrZy9FanMwL21TM1VHeEhHWFl0K2tnMkw4b24wZ3AwZ3FDeXlneFNHSUpTb2Q0bkloN1BuSFF1akhSdE5LSFVaU1ZuV1l5bCtEWEhwQjNTUFk5TFZTY0JuREVIWlNVS2RKT2JXMTEzeHV4WXVNV3ZMTVUvVlBuWEhYM2Yramh0TlBBUXJJRXJUaDRNK1hwR3QyUHRVbEFUa2I1V0lKRE8ydWNDYlgvaC9VSVlTaUp5ZUNWb1UvRUxEZVJNSmhKblU1ZGFTbHMzMDV4bVNjUDVOYWttYmpZQUFwa2dLZFRuRzV1NUo5TE40UTkyVkxkWWpuK3o2aVpqS3BTVkxHSjJRQ3A4bmR1QmpkMHRhbVQrWXZJTjJReFViNkR3T2U2RzhvbEs5MEhWc3hsSG5BZ1ZBVzFOdlNreXhPUVV6U3NrSVJjbnVsMXR2QjA0SGM4STlrZElRRmRYT0pRM2RXb0t1TnhzN3RFbTFZNldqVnBsdnJGcUpjTDZEYVNTUzZGaElQZVZoU0FOQ1hOaWQyY0cwTmVpYVNFL3BQbU40M2lPc0F3cDBSWk5sR0xwV1VWMUsyQk80UVJMMkJ6WmNEcUlpMlhNSlFrbk1nSDBnZGFZYWg3UFFSRUZ0RmFnMFZxSmptZ0VoRWt0ckZJbXg4dFcrQUVLU29SUHJvVnFuUlgxL0dBY01Pbk8yTVJNbVYyVUZURS9xVVhjOGt2cERHaUxJUTVmc2krK3cxM3hoYW1hcFUwUGNnRStKdS90RGpveHROYVZkV3BpbGozcnMyOEg3RWE4TlhRalp1OXRiSUUvWnlRNVNvWWxwM0V1YkViaWw0NGR0V253S0FiRGN1RG5pY1A3UitoSzJhRElTRWpDbnFBcHMyeFpEMGpuVzFlaW9xSnlKaFZobHQyd084VHdlMm1jUW5GeWJsK3dSektLcG5OUzUxRVNNMHBEZjQ4WUwyeFE5WE1VRTkxN0EzTFFybkxibkU1cVNMUW1uc25PcUZFTVNBTndFQnpGT29EZDdtSzFHUHBkakUwaG5LeDNzQ3M2b2xXcDFoc2phNXFwNlVURkhxZ3hVUDJpNFJ3Qk9aNXhsRXF0RmtvOWszWjRaZ1JzOXU3ZWtsYnkwWkFBV2Z1dXphQVg0d2hxTnRyVlptSEVsL01OQ0ZZdkVrVGxEWHdOeENPTjdHNWVCNUtyM1lMRERpU1JjRkpkK0NvM1VycFJOVElseVpTZW9DRXN2QVdDN0JsSnRZbTVOeVMrY2N5Uk14RDVROG1iUlgrSGt5Z29oS1VxS21zU1ZLVmhEN21HdkdPaE53ZWpwUmpMczNsSnR5aGtKSlYxazZhUmZFQWxEOGxGenpJUEtCNnpwNnBmKzhaYWRFb0NrSUE0Qk9maVk1dVp0ci8yNTN0dnlpazFLZFQ1ZjJqUS9VemV5ZjRvbzZBdnBhQmxPV1R2Sm1lMW9ybDlLa2tmNmhQRHQvTUVSZ2pWQTVlSDI3UVhSVlFscEpFdEpQeEtjbm1Ca0RDU3pTWVZqaU5kcnJWMVArb3M0MUVwbGh3Z0lBdXBTV0F1U3c1RW5TRUZQVllGZk1DQ0JXRXFDeXR5WGNxTi9OM2doTWxFd2hUcHhiblRmdzN4MEcyd3RhQ09qMjBVSW5kdFFDRkpVQXI0Y1hldHVPNW9yNlJUa3FCS1RheEhOMnQ0UVZ0RG80eUJNU095ZFJweGFNN1Z5RkE0VHBBa3FZRU90bjAwK3JBSVVmeTdBN3lvazNHOHdkcy9hNjVTNWFDVXBXa3JDbllBcFVFRmlva1dkTGpkQlBReWVtVklWZGxIUE1XY2tIekNmWGpBVXlpVFVWbUZ5RWtYS2VBTE42UUtPOEhSOW03U2x6SEV0UVZoWjI0dTNzWUpxVDJUNWVjWURZRzBEU1ZQVlRBNFBZeERYdGRsVGE1dEhRS3FXNmVOajVFR0t3Vm1iSStNaFRzMm94U2tid01KNXB0N05CZFJTclNrS0tleWNqcEdaazFCbExJMEJMamhyRDFGU1ZKREd4alRQR2s3K3pvTjFSNERIaWtBbG5BdHJsYlNMNVZPK2tSbVVwZy9qMEI1VmRXSjYyWmhBUDdoRVoweUx0cjB4NmtuY1FmTCt6d3NwcXAwc2N4QzVNUHM1TCt5a1oyV3FKaUVSWE5pSFd4a0tDL1kxVmpuSnNTNldWNU1UNTNobFdGSVJNV252ZDB0ekI4N0NFdXpuU2x3U0NUcHcvekRpU29rSkRweEtWMmhZRWdzTGpLTFFiSlA3T3NyUTBvcCtHVWhQOUtQN3hucUdiaVMwYU9hcTZod0htZjdBUm10aXlTWmpFV0JMK0VWaXRNeWZLSm51azNScFMrdW5BWVFqQmhIeEJ1MzZ0NUdNSFY3TEltWUNHVWN1TWRyMnd2RVFnNUYzSEFRZ3Fka0ltcVFzV1VoU1NQQWd0NU9JU3VTMk9zdkYwY2VuMHhjN3hZODRHWTdvNkowdTZQbVRPS3dncWxMY2xoM2J0Nk9QTXhrcW1rQVU2ZTZRZU1SbGpyYU5VTWlraFFGUllGeDhwRVZHSmxTYnhNTVJFQW1JbTBkWnhkSk9GWENES3FjRWdCeVN3WWFlUDBoY0ZSSUZ6ZThCeHQyRlBSNnQxWEplUFRMdEVrcitoajNyUHZmQkFRd014Z25yUXpIN2JMNXhSajBpTHdHZ3BueDdTcjVRNTJlWlFJZk1hOW9ONHMwSWc0Tm92azFDeGtmUWZTSGc2WUdkQXEra1JVbE1zS1NFTVNXd2tHNlJtTXd4T1VaaXRxSlpKWkpJdXpzTDI5TTRUTG1FcVNWRnJpNEFIdEI4K2tVUnd6ZjcrN1F1VGNneHBJY2ZoWlJwa3FEbFRGeTVETmtBUFh4Z1BvOU9taVpqbGpFejRzZzQxejFoVE5sVE9yY0t0dTlJTjJUdExxNWFrTmRUZWoyOHpCUW94cTlwRXprVDhJSmxsSnduWENjanVqcWs0RXB5Tnh1Zk9PUXk2WXJMRTl0V2daaG9CeE9VZHZwQk02cENWdUZCS1FWQWs5b0pBTmk0TjlXalZpaTZNWHFwcUxUTUx0cW5WYVkzanYwUHI3d1BzcXU2dFF4T1VFM0dvNVJyZG95WllTeWxNb0xzNEp4WWdjU1RoRmd6K1pqSGJScHVyTHB1a3UzRVA3eHR4dExVdWdRbHpXamZVZTBLWXA3TXNxNDRpUGFDNVJRdXlneE9yaDQ1dFExNmtGMEtJUDNwR2lvK2xxV3d6VWVJTGYrSkRSV1dCSmV6L0preStuazNhWTJyNkpJVVE2U3oyVlp3YkY5NGJkempuZTJObnFrVGxJeE0yUjNqUjlIL3dBeHZGYlRwNWdiclNuK1laY2pHWDI5Y1lWc3RJN2sxSmR1RDd1QjhJbEtMaXJMK201clVoSW1vVitvQThRU1BrWXZFNUcvMUgwaGZKb1pzMWZWUzBsYXN3QnV6ZmxFbGJDcUFXNmliYjlpdnBHYlQ4R3A2MXlvTG9sU2dsTHU0UG1DQmR0NGgvc3VsVGpScTZnZCtvakV6Q1NsM3VMaU5EMFVxRDE4a2ZFb1JQRXJCazBtZFVtemhqNXE5ZzBLcFU0b21LQXQvZUlUNS9hRGZ1UHFZOXE3VFgzZ0gzaWlXMmlVSTFFOG5UWFVyZWxKOWY4QU1lYlA3ekM5OVI3UjVUU3l0U21Ea2o1aVBObVdXKzRFL1NEdzlwR1NwTVoxQUMxQkJZaktNanRub3JKVXQwQW9kd1FsbUlQQ05NSnpLQit4RkZZdnRFN2dEN0NFaXZzZUZvNDF0N1pmVXJVblJLaWtIZTBJMWNMeDAvcFZSUzVzM0NySWhLbkJ1TFlWSHhLVEdIMi9RaVRQWExETWtzR0wyYTNpMS9HTTg0VTJib1Q2UW1RcHVVU1dZdHdlUmlvSXUwU0tFV2lRUVl2VExpekJCbzRHd21KcGxFMjFpNUtZTzJUSmRSNU41d3lqYkEzUXBUYk1aYUdOL3dCRnVqOHVlUXN5MG1YaEJOaG1kSXltMktYQ3QyWng3TmYxRWRLNkE3UFhKcGlabGlXSVRxRThlTjh0SWFDYWtSenpxRm1INlk5SHhTemhnWVMxM1NPMGNMTTRKVmZqbkNTWVhiMmp1ZFpReXA0QW15MHJBMFVIOFl4ZlRyb3JKa3lldmtwS2UwQVVoeWtQWTU1WGJ6aCtJdVBNcFVqbkU2R3RKVmdTc0pPOWc5Ny9BSDZ3dG5DQ2hUS1Vqc0lVb0JzU2dra0FsMkJJKzhvak5lN1JwWFI3S3FVaEpTZUxlTUQwVWdsVGpJSE01UnFkaTlCS2llbHlVeVVzU01iNGxIZ2dYOFMzakdsMkgwS1JTcHgxUkV4V1lsb2ZDKzRrZ0Z2QVJXR0p1Vk1qUE5GTFF1NkNiSEptR2ZNN3FRY0wyQ2xGcnBHb0FlKzh4MFFUSmFBNmdPR0l0L21FVXlyS3Nnd3lDVTJEYUNCYTBLYlIrTWVqREExRTg3Sms1eTJHZElxaEUwQW9Va0xUdU5qdUh2R1hxS3h4aEkxdVBEVGo5SUxXcVdVQzZzWlVIdmtrSldwaHhLa2dQemlmNGFVc0VLSkttR0VqUTZ1OFRqNzA2THFLeFVtWnFjZ2c5a3hVdXBWa1E4R1Y4b3kxTWJqTEVNb1dWVlUxaG5DdWNvYXMxUnFRUkxxRkFXdDR4TVZKTmlmV0E2V1NGM1dvdHVFTnBPdzBxSFlKNDd4ekJEdEZJVHlOYUJKeFhZTExtcVNyRWhSU1daMGxpM01SZC8xS3AvNzA3K3RYMWk2ZHNSY3RpOWprZE9VZWluWENmamZsQzhvUzNwaVJPWGhHZzZISUNxaVUzNlhQa0NZVDdPVkx4L212Z0NUWkk3UkxXQTBCZlUyalEvdzVrL25MVWRFSDF0RThTclpQSzlNMGsyZDJ1UUkvOG9OcjV6cFF0bTdKRERUZENTYk5mK28rN3d3cTVqb2JjU1BSSkh6Zy93RG9acWhoczJ2UWlXdG42eFFWZlJJZ1NobTI1bjIvekN5VE1ZK25uRjFMTllnYmg3bDR1bzZZazRES2ZNdkFsYk5XVWhtYkpXL2VHajZiTWhMMGluVEV5c1V0UlNVbHlBektHNGd4bmVsWVl4NkYvUzRIREttaXhCVWdrZjFKSC92R2Y2U1NGcVdnc1ZFeTB1d3lhelc1ZmJ3eHA5dmRZZ29tSUNpNFVBTE9wT1dkblluenloVFdiWksxSEVsVEN6YnVFWjU1WU50cnlhVmpsb1M0YnNmdmhIeGxsbjNad3dtVFVMRGE2UG41eFhMN0tWQm5mMGlGMldvOEVoeGlHUnZFNUlCU1FkUG45bUowazRBRkp6MDNYMDg0OXA1QUNuVVdCMDFQMGg3U1ZpMHdZaG9aYkhYZ0x0djhkM3JBMCtkTFFxekVqbVI1d1RTVlNWcExXVWt1ei9wTFBmZ1I2d2NjL2NDY2RHdzZMVVNaaVpzMllrS0tsQkljT0dSaE5odXhOL1NJMU9OaUZhR3loemhYMFVwbW9wUjFVQ284MUtKK2NNRWhqd09ZalQzczhtYnVUUWJTV0xHL3pFS2Y0aWYvQUlTRy93QnhIaG5lRzlJZ2l4LzRuZUlVL3dBUlV0UWwvalI3bUEwREMzK1JJNHNydlJ2dWlGWGdwa2o5eWo2L1NNQVZIRkd0Nk16Q0pYSlJiME1KZy83RDFNaTlwdnBXMXNJQUFaUnpPWnY3UUh0ZXVkZUhRTjV3b2tUMk9JM01Veko5eW82eDZVYVRzeFBIc2RTSzlLTG5PQ1pxMGtPSnFML0U0K1JIckdmcGdrbkVzdnVFVG5wNngyQkE0WkRuRmsyK2lNc0tUdXdtdGtvSUpVcVdmNUhLdUZ3SVNWSzEvd0MyRjh5UTNsRTUxSE5UY0VOL01CNkV4Q2o3ZUxGTXc0UlozT0kvQ0dlL05oRXBTOFVYaXRYZGdNeVhPVm16YzJnS3BvMXB1UmJlQzhOaUFMaytjZWl0U01rZytEeGtsQlM3Wm9VcExwRnV5SlFLQXByRU52eXREZVhMQXc0WFNvZDFUNUhkL0tkMEpxTmN5VytBS0NWRjhJUTRISjhvWTArMENYeEpVZDVabTUzaThXb3FtUW1wWFkxcHRvcG1neTVxVkJXOURaalVBMmVMdnhNc1c3RnJYbExmeGJXRVNLdHBqakwzRVAwYmRzTCtnaXNaUHd5TThLK2pubEhueE5vMjNReExKbnIwQ1FCNE9mcEdLa2RrREsvai9pTjEwWVJob2xuNGwrd0gwTVk0NmlhSjdhWDdCd2JIZ3IzL0FNUVVacmhmQXBQdVBwQ2FrQ3pPbWtrNE1ralFzUmR2UDFoalJUSFdwSi9VQ1BITWUwSkYzUlNlaVJpd0s3Wk1RYS9qRVpKZDk0TGpsckd0ZE1EM3NNVXVBOW9MUmhJbUVoSmNPQTl5TFc1dEZtT0ZtM3BXT1htUmhMdU45d0I2eG1uMHcwa1lVcXdxTGh3LzM0UVJPbjlZTGxsQ3lWNi95cU9vNXhCY3pDU2xWOXl2a2ZPQXlXTWVhNDdOaWVpQzVoZGxXSTErc2V5NXJhQTgzOUluVWpFSDFGdWNBcFV4anV3WFExbFZxRG1sanZEZk9LNnFwR1NTVHhJWXdITkdvaXlrRHFENlp4MUJzK2xTSHppMHFFdFFVblRQaU1pUEtQSnFTbStoTnVNUVVNUTVRNllyTngwYTZVSXBVaW5XRktCbVdWb2xLMllsOUx1MGIyYW55T1JqaGM3YUsxQktTM1pabUYvUE9PeWRIcTNyS2VVbzNkSWZtTFo3N1Jvd3l2UjUvcXNTVFVsL1k5cFNHQU9YdENqK0pGNkUvd0E2RDd3NWxTck9MajFFSi80aHpVaWlVa202aU1JdmNqUDNpalJIRjgwY1NTejVheHR1aU5MamtLMFVKaEhQc3BzWXlrMm53Z0hkM3ZyR3k2QzFLUUZ5RDNsS0t3ZENNS2JEd0JQaEVjVFNtajA1M3hMVlNWQWxKczJaTUw1a3gxVzdvOVkyZFJSb1dNS3dlQkdZK3NaMnQ2T3pVT3BINWlSOE9ZNXB6OG5qZHorek9Db21hczdSVk4ybHZJdGtOQnlFUXJKd3doQ0hIeEtOaVR3RUxKdE1BSHVURFRjbjEwTEdLZTVCSnJnbzNWNEFRVE1XRWhrZ0NFNlpMS2M2SExsREFBclBaRnZpMEVaMUpsZUtSOUttZ0Z1OFRjazVBZldDcGM4WmtXM2FtQmw3T1VuTldkbmk1TW1XbnNsUlpqZDdrOFllTXBMc0VxWVROMjFNN3NvQkhFQVA1NlJic29sYW1Xb3JCNzdsODlJWFM1QlhaTDRkNWEwRzlZbVdrSkdYcVR2ZzgzSjIraEhHS1ZJdG03S1VId3FCQXl6ZnlpbnFKbTZQazF4ZXhqdzFLdDhIUVZma1JTSlpjajErZktPajBJdzBVb2IzUG1USFA1YVNzaENSYmcybXA0eHY2OVFUS2xKR1NRM2xhRjF3QWxja0xGSHREUytmM3pnVHJzTXg5eGk2ZXVBYXM2K2ZoRWIwVmEyT1ppKzBlZnVIaXFXcGk4VVU4eDBwUEJqL0FNUzN0RnFJMXQ2c1NQVkJDbGFpRkhTZXVEQktja2dlS3Q1OFRCbFJOd3BKakoxc3dyVTMzOXMvbkdiTEtrQkxsUDhBU0I1Vk82UytzTFpxV2NIU0haTm9XYlJsc1FkNGpKSkdwTUdscmFLS2xOK2Nla3g4c09JUUpHV3F6UjhsZUZRTVFCajJaazhjY0Z6WnVJdm9MQ0lURk00R28rWWdlV3VQY1RrblFSMUhXZUJOMmpyblF3dFRoQnpCdHlQOTQ1WHM5THJCT2wvcEc4MkJXbVhKbVZTM3duc1MwUGF4TG5tUzkvMm1MNEdrN1pITEhrcU4zS3FjTjNZRE01RHpqQ2ROZWtING1ZeWY5TkRoSitJL3FWOHZDRU8wZHR6WjZ5Nmpyd0NSd0gyWWhLU3pibkErWjlHODRhV1pTZWtKSENvZTVsZFRMd2dQWTVFY2dma1lvcDZoU0ZKS1NSaFBaSTB1N2ZTSE8xcERxSkc3RU9hY3g0cElFSjF5Z0ZNYkpPdkEzQ2h2M3htbHBsc1UrY0V6ZGJONldwTnB5Vy9lbkk4MDZlRHc0cGRyU1Zuc1RBK2dMcEo1T3p4eTRGU1ErZkVYQjhJdmsxOHpDb0ZJVURyWnh1WWlIWHFKcnZZMzQ0czZYWDAwdWIzMEJSK0lXVjVqUHhlRVI2TnBLbUUxazY0aGZsYlAwZ1hZUFNNZ0NYT3UyUzc0aC9OdkhIT05JcWJpRGdnamVJM1k1ckpIMnNoS0xpekc3VTJTdEN5a0pKUS9lRnczaEZNeXFLZTZHRE16TUkwODlLdENZb21MVmhDU0FRQzl4bWNybjcxaDFGQ05zektlc1Z3RUdVMUFNemZuRHFYU0pXYmhnTlI5SHRFYXFtQ1E2UzQ5UnpFTkhFdXlVc3J1Z1ZFbTFzdmxBbGF6RW5NbjdBZ3hFNG5nSURxZ0FRbzMzSitaZ1NTb01KTzZCcE1ndGljQWNZZ2FsUHhlaGgzczZoUk54NHljYVE2VVpKdG56TVdGdHhIaEhReHVTK2gza1YwS2RqcEJtSkF5ZHoveDdYdUJHa3JacmhJNStzSTlpTUFrL3RoaFBtZDNsRWsvYVVTMkR6VndKTlgyaWs2KzhUcVZRSFZLdUR2QU1SdXJLVU1kbnJzVTdpL3lnMEtoWlFUcmcrQ3VXK0NLMmRneGNQbmw3eHFYd1JIcVRCOXQxTmdrYXdpVG1UOTd2WVJaVVQ4UzMzQW55RHg4aE5nT0FqSGtkeUh4eHBIdElncVUya1ViZlNCaGJmRFNoU0VwSjUrbHZsQ3F1VUZFazNpYktMc1NLRWZQWXhiVUliS0tEQ0RFSThqMHg1Qk9JeE5BajBJM3hLVWh6QU9DS1llc01hcXZVWmFKV0xzSXlBM25NL2UrQVVLYUlZb0ZoRGFhVzRMWE9vMWhuSUtVelVoYWdFb0Z5ZDVEbjFJOG9UcFVVRUtTYmIvdldMeXJFa3ZxUWZNais4TkRzaDZpK0E5VlZvYVdyRUNVa1lnRGR1NmJjWDlJb21iT0p4YUpRb2dLT1JTV0tBa2FrQjdEZENwQ1E0SjN2NVgra1h5NTZwaW1VZXprYnNHM0hjTEI5N1FKN085TXVNS1BsTFN6SkJJMy9NYi9BTHpnVmNsVXU2VGJ3ZSs4R0RLeWNsQnd5KzJScnA0ZlgyaGNWM2RXY0lhQzRWUzJ1WDhMamtSR3k2R1RGTFNzcUp3MkFISFgzRVlyckhzUE9OOTBicGpMa0pHcGRSOGN2Um92NldGenNubWZ0b2VUS1pPcitoaXBlejBuSlgzNHdUU3o5RGx1T2tSMmpMSVpyY1k5YUt0bm01SnVJSk1vVkFNbUJGMDVTYjV3d3Bpb0huRGFtS2YxQlBoRHlWZG1iL2tHVG5VK0xOZ2ZJR0UrMHdVcXVHeTlJM08wcU9Xc0VwTEhkR2Eyekl4UzJVTzdrZDM5b2hrWEpHckJrVW5vQlZVNGNFMUpaUVZlTGw3WnVlY1Y3UTJlbEZMTFhpVVZyTmdHd3U3SzQyK1loWW5ZMDlRQ2drc2Jqa2J4SEQ2cWVLMGJzbVBHNmt3dlpRWkhBQm9KcUpsa0hoODRsUzB6NFpZTFBoRDgvd0RNQzFKN0tmRWVzUzhITHNqV0tzREFrMHVrSGRhQ1ZYUWVFQ1NidW5mQTgveU4wZTA4MWp3Z2pwRE0vTFNyZlkrR1hvZlNGdUtDNTU2eW5Xay9wRGc4djdHR3h5OWppTE5iVEZ0SGRSQjFTci8xTFFXbFFJUzN3ajBFTFphc2pCRWhWeVBHTXpZNFZPcUdCSEUrOEs1cTNpNnBNQnFNQm5JaE15TUNxZ2hSZ2VZWURHS3hFZ1dqN0RIcVk0NCtJM3hiTGlFV3l4SEhCbEJJeGtnN2pBMHhER0dPejdRWHNlU0RVSkpHUmNEam9ZZmh5cWhlVkNRRnVSMGkrUWROL3dCL1dDT2tkS0pjOVlHU3UyQnV4TzQ4M2dPbG1NZVY0bjA2T211VVdncWFHdDkzejlCQTB5Zm9MRDd2emlkVk9OenZlQlZDQlowRlVVaTlVMEFNbUR1am16aFBtc3NFb1NIVXhaOUFINSswS1FZMVBRNlpoSzA3MGhYbGIvNmhzYVhKV05LNkxLTG8yUlVFRzhvZG9LM2pSSjR2bndIR05XcVlBSEpZRFhkRlZPdDBoUXM0Qjg0cjJwSU0yVVVKT0Vsbkp5Ync4STJSU2d0RVc3ZXdXbzZTUzA5enRIeUVGYk02VW9XZXJtRENEa2R4akd6Tm5yQlp4Ni9TR1ZCc0VrWWxMRGNNL1dFamx5dDZCTEZCclpyYTFSbGplQzF4dWVKU3FxS3FWYkpDRGNNQmZQbkZWVEp3RU5rWXZtYmE1R2ZIaWpGMEZURm5NWis4S0twYWdWdmV6dERPa21oeGlCSTNDUE5vMDR4aFFKUFdERVhhemtoZzNLRDZhWEpVenBwUm1uOWd1d3BzbWFoVXVaL01nT0VsS2dSaVlseGNOb1kwRXV1d2dKQ1pEQUFCMTNZV0Q5c1g4QkhQYXVqWExMQlFaN1o4blpyRzJrZURhRXdXN051QStrSzhhazk2TlBhUC85az1cIlxyXG59LFxyXG57XHJcbiAgICBzcmM6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVRFaFVURXhNVkZoVVZHQmdZR0JVWEZ4VVZGUmdYRnhjWEZ4VVhGeGNZSHlnZ0dCb2xHeFlWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUd5MGxJQ1V0TFM4dExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQUt3QkpBTUJJZ0FDRVFFREVRSC94QUFiQUFBQ0F3RUJBUUFBQUFBQUFBQUFBQUFEQkFJRkJnRUFCLy9FQUQwUUFBRURBZ1FEQmdRRkFnVUVBd0FBQUFFQUFoRURJUVFGTVVFU1VXRUdJbkdCa2FFVHNjSFJGREpDVXZCeTRSVWpZb0x4QnpPU29oZFQwdi9FQUJvQkFBTUJBUUVCQUFBQUFBQUFBQUFBQUFFQ0F3QUVCUWIveEFBcEVRQUNBZ0lDQVFNREJBTUFBQUFBQUFBQUFRSVJBeUVTTVFRaVFWRVRZWUVVTWtLeEk1SHcvOW9BREFNQkFBSVJBeEVBUHdENS9pOFpVcjFIVmFyM1BlOGtsemlUcVpnY2h5R2dRUzNxdVVqWmUwVEFQQnZVcVhCMUs2MUZhRmdneFQ2bGUrRjFLTzFlY0ZnMEFET3E4V2VLbkM3Q0Zob0Z3cjN3K3BSSVUyQllEUUQ0ZmlpTXA5U2ovRFV3MUN6VVFwVVVZVWwxb1JtTlN0akpFcUZBSFdVOHpCQkFwd0U1U3FsS3hrampzSzJJanpTNzhNMlZhTmRJaUVDb3lQRkxZeVZsRG1kTU5FYyt2bjlsVzhIVXAvTjNYU1EyVG9TWDdxTENuU0hDT2dRWFU5MVkwcVV0MUhodmRHbzVmeGFlU2k4aVhaM3g4WnRJcTZOUGU5bDJvMENZSlA4QU5WYk55emdsN3lPN2Zobm9UZnpoVUdJcWNSdVZveVVub1hJdnByYUZha3VNeVZ3czJCS0pVTVdDNVMxSHI2WFZrY0w3R0twQXNDbU11dy94SHRhSnVmOEFuMlZlNHJTZGthYm1rMWVFbVFRMHdZQTNNOHo5RlBKTGpHeXVLUEthUnI4bnk1dkUwT0dtMjYxV0l5T2szaHRyYjJsVStXTkRIZ0c1R3BuZUpWeG1lWmh6Z0cvcGgzbzRmUWU2NFlUYjJlaDVNRmFva3pKYWZKRkdUMCtTdGVHeTZ5a2ZKZGg1YlBuT2VaT0tWVXRhSkRvY0JHa3pZZTZkd1dIcHZwd1JjV2NMU0l0TWNsZDlwc0NTQlZFeXpXKzJ4OFFWVVpaVkxxcmpBSEUweUJvVFpKYjZLT21pc3hXVVU0TVc2bFVXSXdRRXJXNDJtNEEydE85dlRtczdpV21USVRSc215V1RkcXNWaG1HbFRxZDBPSkFjT0tMQ3duUVcwNmxjVk51ZkZlVjBJWkdpVVZMMHlqTmNxaWhHaEVDRzBvb0NBNlJPbTZKc29nS1FDNjIzdjcyUHNsWTZSeHpJWGdBdXJ3YWhZelh3ZHFNZ0Rxb05LUHd5M3FQa2hocXlacHhKdGNTaUJxSFRFSnByU1VHSlJ4Z1ROSmdNeWc4QlI2TFVHR2pnYmRXR0VvU280YWh6Vm5RcEpISU5IS2RLSlNtSnd6dFFEZXl2c05oSlFlME5MZ29QY0RCRWU1RGZXL3NrNURSN01CblZNdGZCL1VBNGVFUjlDZ1VZTFFWTEhWWFA0U2RCSUhRYkQzU2xOMFc1S3kvYUxMVWk5T0lid01BL05xNCtINVI3VDZMVWRtTU54MGdSY2drRHgyOUFRc1Bod1NKOEZaMGMyZlRwdXBnd0g2N0dJdVBQZis2NU0yTnVOUitUMDhIa1U3ZndQZG9jYzE1K0hUSTRXeUhQbXp6SmtnL3QwOFZsc1JZeFA4L20zcnlSOFJXbEtOb3VjWUEreXRoeDhWUng1OG5LUkJwUkErUEUreU1hTVNCdHE3NklWVmdCZ0sxK3hEZzZzbFJZVDNpTGJjdkZibnNqbXptRUV2Z2RTQUxYT3RsbGFMbUdHa2FXbm9QK0Y1MkdjU0NScitVV2lPWFJSbWxKVXhvUmEyajZmbWVNWlRlK1FHeERnQmJpRG8wOC9tRUhKY1VIRnpuZnFIRDZrUjhsaE1OaVhjTFdFL2tNTjZOY0RJSElBaWY5eFZwUngvQVdpZElKODFENlNpcU9qNnJrcVo5a1pWbHJaL2FQa21tdUJHa2VJU2VXTW1sU2NkU3hwUG0wRlBHWTFDNlZwSEMreW96My90dWs2aUI0ck41YTMvTW5rSTZiRDZLNHp1OVFTSkRSZSt2UkkwYUpIRTZJNHRCdEhSUlpWZEFjNHFIWlpYRnVKTVF0WFdBY0lPaXBNVzlyUVhsa05icnpQSVR6TnZWUEZpTkZCVHk1eHVTMXNtM0VZa2FTT2tnanlYa3RtZVlDcFVKc0EwQm9ISUFDZmNrK2E4cXF4ZEdKWVZNSWJGTUs0Z1ZueVRESDJTalV5R2drQnNtd21ZMTNqb2xaV0N2b014eVpZeERvWVk3aUZhWWVpWS9LT1lQODJYUGt5VjBlamc4ZmwrNHJxakZMRFVTNndGOUVmSFlhSENOQ0o4NU1qNUt6eWlreW00T0pzR2x3RzVkQmovMitTbExNMGpwL1N4ZHV0SXFhVElLZytuRG9UektVdVVLN0pkN2Vpc3BiT0tXTDBma1dheFdPRHBnalJMc3BxeHc2TFpCeE91d29PaUpUd2lhYllLSEdrc0ZFNk5GV3VId3J1RWxvQk1XQnNDZVU3SU9YMHBWbGwyWjBYTm40aldIZHJ5R3VCNVFkZkpLMjJLeExCOW82SXM4UFlScUMyWUkxRnIreUgybHpYRDFjSlZheDRMNGFXaUhBMmUwblVjZ1Y3dERoOExVQmUydFRGVGVIQWgvOVFHOGIrdlRIWW1qckZ3aW9walJYdVZySERpNFRkcmdSNmhLRmw0T3JUQzVXY1FSMEtQaTNjVGc3bUJQai9JVlZvMG5jYTkxL1Jwc2x5Z3ZvUElqdXVIL0twTVhTYnhjSWNDU2RyZ2Vla3BxaGozL0FOUGlJWVk0Z055TGVrSkNvSUZ0VC9Qc29ZMCtUc3ZsYWFWZkFLdFVhREFna2I3ZVhOTjVYZ3F0WjBEckoyYTBSSlNWS2xkYmZzdm1GUERVbnVJRG51SUFCRm10QWtFK0pKNTZDMjZwbW5LTVBRclpQRmpVcGI2S0hINEVVMmxVTHpMZ2VxdHM3ekI5ZW9UdEpnQVFCUElKT25oOStTMExqSDFkbE12OEFrblVWb25nRDN4T212dE4wMVZxd1R5QUYrczdkRXZUY0JkY2M4dnNCQS9uTkxWdXdLVW94NG9sU3J3NmVXM3lUV0JhNnJWWlRCSmRVZTBlYmpIMVNRcDNqVTlMK2kwSFpEQTFXMWpXYXdnMGhJRG1rWElJME90cFRhSmJSOXdvdERXZ2JBQUR3R2lCbUZlUjNUSE1yT1lMdEc4Lzl5bEpIS1BMdW43cTN3bVpVbkQ4cjU1Rm1uaEJLejJSNkk0YWpMaWRRTko2cnRhanNtbTQ2a05TUUIvb3FmL2xKMXUwZEFPREdFdmU2ME5hWkhNbVlnRHFsNEJzVHI0SndCUGQxMGtTc0oydlBEc1JKdVpqaUlFZ0FUZUFkZW9YMEJ6WkplWURSSkpOaEF1Vjh2N1dZMDFxenFnQkxkQnlEUlp2Z2hEc3pGS05Oa2FBOWVkZ3ZKSENVS2pteUdHSnRiYnAwMVhsMEV6T01VZ1VKcFUybFZGQ0JXdUN3cEZ6dU5QNXVrY0RoK014dHVyU25WaWY1dW9aWmV5Ty94c2Y4bitCazFneldDN2tCODB6VHAxSEdUdnNURWVTQmhlRUF2SUFJMzZib3RYSEF0N3JyeU5EZmVaOWx5U1Rla2VwREpTNVNmNEpWR2lTMjBneE0ya2JnL1ZXT1ZVeTVycGFIQUV0SUlnWEVTQ05IUWR1aXFHTWlPdjhBUE5YV1YxaXdreDNYR0hlR3g4dnVwWjQ4Vm92Z204amFrZ3o4aU1jVEhSL3BkNDdPRmo2QlZ1TXdwYVlJdnYwTzQrU3ZTOTAzZVNOUmN4RXhvaDRsZ2MweUJNajdLT0x5SmNseUd6ZUt2cHVqUHRaQlRkRlNmVEY1RjFCakN2UXV6d3BScGpsTzZOUm9YUThPbjZUdWlWc1NoM0JORFZVZHBNbUxTYXJSTFRkdzNhVHVPaDlsWi9pUTFwY2JCb0pQa3F5dG5kV3VQaDBHSHZEdkV3VGZVY2dPcFJqZllLTTNXQUc2WHJ0NGhFK1d5dHN3eThNSkJjQzYyaGtUdTN4U05DamRPNUZZd29yZndzMkkzLzVVZndwQklPeGo3TFJZM0RSd1ZJZ08xNmtXUDg2SjltVnRyUUcyTVdQVWtHL1M1OUZHV2ZqdG5URHhsTy9zWnFoUXRIVlNxWWU2dktlV3VhU0NJSXNSMUNrL0FwRm5WbGYwMnFNNGFjYWE4L3NwQnp4dFB6V3F3blp1bzhjWEJEZjNHdzh1YXMyNUN5a0FYTkpPdDk5dE9TRS9OakVXUGpSdXJNcGxlVkdvUkxUM3JnYVc1K0NsbU5OckJ3V0ExTWN2N2xiV3VHMHFMcXJoRm9FNm1kdWkrZFpqVkpQRWYxWDh0QjlWUEZsbG1sYjZSU1RoaWc0eFg1RW5rVEpWM2xXVG1vM2llZUJzYWFlQmNkWTZLdHlyRGZFcWdHNGIzajREYjFoV1dOcjNqK0h4VjhrbmZGRThHT0xUeVMzOWlPSmN4ZzRXV2EyNVBNODE3QjV2aVJkamlHblJ6cngxYlAyS1NjWmdIVFUrQTJVYXVLL3NyUlhzUXpTNWJaYzRmTVh6SnhOV1R2eFBIakVGTXZ4enYvdWVmOTd2dXM1aDhXQ2RKUElXbno1Szh3dWN1cGdmNUxKRVFXbmhJTXpNM0pOa3pXemsvQm9NcDdMVjYzZnFFMHFaM2ZQRzcrbG12bVk4MXBxR0RwVUc4Tk52aTQzYzd4UDAwV1UvK1Fha1J3UDg2alhlN3FaUHVuOHB6Q3ZXQnExQUdNSTdqWXVmOVJNQzNMbko2SVRUSm9zczV6RU5vVkM1d0FqaDRaRWt1a0MycEd2b3ZtVldyWnpSb1FMZUJuK2VLdjhBUHFoYzhNTWZtYnBOd1ppWjM4Rldadmw3S1JIQTR1NGkrUklQREVkMjI5enFqRFFHUnBzNFJ3OG9Ic0Y1U0R0WnNlWEt5OG5Fb3diV3JvUktaVTZiYnlGYXpKV3kzd2IyMDJpZGVseWxxZFVtNXNDYkFlUE5SL0VEbC9PaWpXZitvZjJYT29ucFRta2xUNkRZbkVnZ0FURXFlRDRJSk04VmkzOXBHODd6djVGVnhxSXpYSitPcU9iNjF5NU0wdUV4emVFQ0d1QS9jQVk2QTZoWEdESWlSL1A1OVZpcU5Vek1yUVpUaklkQk5uZWk0Zkp3YXRIc2VINVNscGwzVnB4Y2FJN0djWTh2ZEZaVEw0YUJyYTN0Q2xncVVGellnaGVWeW85ZHROTk1wYTdWR2x5VG1aVTRlZXQvVkFhdzZyMWNjN2paOC81TUtrTjRRRGNlYVBXck1waVhIbkEzZEd3U21HTjdxc3FVdU56ak5nU1pONEd3VkYyY3JXZ1dMeEZTcUM0aUdpR2tDelJKa1RmcHFvNFhGMUdBdGErQWRZZ1NtY0xsOVJ3SWFZQnNia0ErSUd1cTBXUVpRS1E0bkFGNXROaUFKL1RiZXlaeVNRcFg5bnNwWlZKZFVCaHNRTGdHWjMrM05LbktuZmlEUWJjOGR2QTk0RStSbGJxblRKVEdBeXhyS2o2eHU5KytnYTBBQUFlZ2txWEpzYm5XeW56ekp3S0RRQklwd0kwa0dBVDR6Q3I4SGgvaHREbW1lRWtFYU9BUE1HNHZJSzNIR0NWbHUwWkZMRk5JRnFySmR5a0V0TWRZNFZ6NVlPVWRIVjRlYXBjV1diOHJiVnBCNEhmRVgzY04vdXA1RmtJSitJOFNCWURZbmVmQlhHUUFjQXVMUkVYc2RGYlUyQUNBQkFPM3F1Zng4RXBxNzBTemVWS053WC9JVk9GRWRGUVorQUNDU0dqUWs4aHNCejhMMlZubm1kdG9BamZiUWsrQStwWHpMUE16ZlVNdUo2WHZIMDhvUStuR2JxSWZGaEpldDlBTzArYk1lWWx4YVB5c0ZoSjNjZHlzemlxNHFhQ0NOdkFmMktuaXlnWVp0LzU1cjA4V0pRam9YTE55WmRkak1IOFNvOGRCN21mb2g1emh5eDdtbllrSzE3QnZBcnVZYkZ6UkhVdE13UElrK1MwZmJMSWhVcE9xc0hmWUpNZnFhTlo2Z1g4b1N1UHJzcGp6SlI0cytaY1hkUHA4MENtempJYnpOejAzUnl5eDhWREN0dVR5WFRIbzU1dll6VXA4SWh1bkxmOEF1aFByT0F1VVJ0UzNWQ2ZKYmZtaWw4azV1OW02N0s5bXFicVRNUlZQeEM0Y1RXUkRHLzFmdU1nOVBGWHRkeEpnQ1Rvc2xrWGFkdExDaWdXT0phSGdPa1IzaTRpMGMzS3FiaktrUnh1ZHc2WEpqeFN1TGJKV1dPZmQ2cEFCSENJSk5waTgvWlZHSFpMaWRoRnVmTDVLTmJFbUR1U21BemdiRytwUFZQMGhXREZTU2ZGZVFLYjlmSDZCZVJTRk1xd296WElMR3FRVmhScGtKcmo2cEpoQ1ljQkFJdWQrbmdadjZLYkxKdWdod2pTQ2ZyOUV0VW9PYnQ1cHZEVk5pbmFZa2MwT1RSdU5sVFNKVnBnYW5DUUhhYjlKM1hTQUZPbERrc21taDhkeFpzZXlXWjArTnJYbmhiWUIwMmE3NkEreTJHYVpVSkwyVDNiT0Ixam1PWUJoZkxLTkl0WDBQc1puWXFjTkNxVHhOQkZOeC9VMzloNmlKSE9JWGllVjQ5UzV4L0o2ajhpV3ByMjdSVWRwY01Xc0R3TkxId09udjgxbjJZZ3o2ZkpmU3M2eXNQYTZucHhEdW5seTlEQytZNDloWWJpSSthdDRjK1VlTDdGelRXUmNoZkY0eDVjV2kxeUxTSjJ1b1laemk3aDBKSUhuc2xtUFA1cDgrcFZybEdDTG5COGtRWjB1NCtleTczcEhLMVJvY0hRRFJFbno1cTN3ejVHcXI2TFoyVHpLSUEwdjhsRnNXaXpvdkEwWFRtQkd5U1l5Qm91RjAvcCtjb0E0bHBSeDRPd0NTN1JGdGFrV0NDOGQ1aC9hN3g1SFNQc0ZVNWhpd0lhTlFRVDZHUFBSTjVmSkFKUHBxZzVGSXdwOGcvWVRNUzZtOEhWbmUvMjdpT2hIL3N0Wmhnd2NUbS9yTW5sTUFXOUFzVmduaWhpM0FmbHFBa2NyM0kvOG1uMVZuaUhsa2hwdDVyaW01WTV0eFgzTFN3L1VkMzJKOXMzajRyWjNiOVN2bitZUGtrZ3E1N1Naa2ZpRVRQQzBDL1VmM1dXUEU0d0FTVG9CY2xkWGpZMm8yeDVQaEZSK0FOUUhrbk1yeVdyWC9JMFFOWEVnQWZmeVQrUzVXMXp3S3Q5K0hhMng1LzJLMmJLaldDME5BMkZndWg1YTBqbmNQZGxUbG5aTjdITmQ4Wm9jMHlJYVRCNkdRdHN4cDRlL0JNWGdRRHp0c3EvQVA0aEl1bks1UENoYmZaenplekxON0owQlNxMHdRNm80SGhlNzlFR1d3UFNUcWIrQ3hHVjVjWFZqVGQzWVBmT3ZEd21IVzNNMlgwR280Z3pLckRobWlxNnB1OEFIeTMrWG9xeGxRcmRtYXpESktueEhmQ2IvQUpjOTJYTm1MYStjcW94Rk4xTnhZN1VhaWZxdCtRVkMxN0MrdGhmeDVwdWJGb3hEOFFDeHJRSTRaSk81SmprTklBdDRwdkI0M2hZNXNBOFhNVzVhYnE3cjRLaFBGOE1UMGtEMEJoQ05PbTI3R2hwOS9WTnpRS0tlaTBjWEVRYkdRSWlTTDM2SXVLeFU3SW1JY3ErdSswN0xkaXNEU2RyNC9RTHlVbzRzWDhmb0Z4VlNFS2dLUWN1Tlh1Rk9BS0VYRFluaE45T1NBd2RVYjRUU0ptL0pLL3VXaXIydXh5aFZZWFdNRGtVNEE5Z0xnQVdpSmc4OUpHdXlwbTA0Vm5sVDJBTzRubGxyRURpRThuRGtUdmZ3S2xQUldIcTA5RW40dWRRcDBhb1FmeGhJZ3RwdThtdE8rNGdwY3ZPbkRyb0FWdnNCeGFOQ3pGRWQwalFxeXdlTEF2TVJlZElJNUxNREd1MExCUE15U2l0eEo4QjdxRThhWjBZNTA5bjJyc3puck1XMHNjUjhaZ2tqVGpGaHhnZXgvdXNEL3dCUWNNYWVKZFA1WEFPYVBIOHcvd0RJSDFWRmxtYm1sVWJVcEdIQWdoM3pCRzhna2VhK2k1dUtlT29Vc1JCYVdIdnQzRTZpK3hJYVFlUzRWaitqa1V2WmxlS1QxMC83TWJsT1ZRZU9vQk96ZG05VDFWKzJuQW5aSjF4d20yZ1VxV0xMYjMvblBwcXV2czUzWmE0YzdEVk9nRFFtRDVxbi93QVJraTF4dUlUWCtLTUloMS9PQ2dZZkR2UHdYSGdjNFZOVXh6Qm8vd0FpQ2ZjSUJ6Y1JCSm5hREN3eVRMSEU1YVNlTnJnWGJnNkVhYTdKUEJrdExtdXFDbkVnZ3liL0FHNm9GUE1qKzczSzdpSGlvSk1Uekd2aDRKWFJWWDB5T2RaaVM1aGtFdE1jUTNCdlBzbWY4VGM5c0VraUpQS041NUttekNtME1zTkNDaFkvRmx0SGhCMUFiNmkvMVN2R3BVVmprNG9yc1hVTldvU0FTWHVNRGVOaDZmSlgrVFpiOEx2Ty9Qb09RSFJVMlZ1K0dPSS9tUHNGWWpOUEpXYTlrU2J2WmNGcEptQlBPTHJwb1BjYm55a0JWMUxIRTdxMG80bUFManpLeWlRbElld1dHZTB6eTZxd2RWZndxdVppU05wNVgreTcrT0lIUHpSb2wyUnJNVUdVdVRDVlJacDJ4bzBuRUIzRTRmcGJCQTgxVTRqdDg1MmpZSHVuVUpBYlJxOFZPOXVpcWNSaW8wV2VkMnhKMVJLZWZNZnJDYmkwQWZkWDVvVldzdkI5Titqb1MrSUhEdktBS0IxU3M5bmVLSTdvVnRVcXJNWmpXNG5sVmdyRmFKNVorVS8xSDVCZFVzdC9LZjZ2b0Y1VnNTZ0xWTlFDSTFxWVU0Rk1CZERGNXhTc1phUEF5cE5wOVNoVWltV2tJQnRzOThOd0JBdnYxVUcxQ05adDBSaFZYdU9iSlI3STFLaGRzVDEvdW1jUFNBMXVldWlneHdoZStJZzBGTXRjUFhBMkhqQVY1bGVlT3B5Tld1QkRtOHg5eHFDc2pUSjFYc1JpNEEwMTNueEJVcFkxTFJhTTZOTFh6UGlNQSsrOHhDV2ZqSGN6Q3FxV2FPZkRIY0ppOGdBYTJ2YTVsRmRWU0tOYUhrMDlsaitMUE5RT1BLcWF0WTZJUHhTbTRXTHpTTGs1Z2VhRzdHa3FzWStSSjlrZGpHRXg4UUNlaGp6SzNCSVpTc2RwNGpxbTJZc3BWbVdDMFZXbWRJanovVXZWYUliYVNUMUhENkRVcEhUSzc5eDc4ZHp1bGNWaUFidU1CVnVOekJyT3J1UStxVXkzaXJWT0oyamR0a1ZEM0EzN0dpK0FTSm1GMWxFYmxjZzd1c2gxS3V3UVZpeVk4eW0wYnE3d0w2Y0R1KzUrNnkxT3BLdE1KVmdSS2ZpUWt6U3Z4dE9tMHVNTkFFa25RQWE2cjV0Mm03V1ZNUVRUcGtzcGNoWnp2NmpzUDlQcnlCZTJlWnVjQlJhYmF1Njhnc3RTcDc4azhZcXJZcTI2STFLZ2JZYW9CcUU3cGpDNEo5Vi9DMFNUdm9BT1pQSmFTaDJZYTF2ZVBFZktQSUJXY2toR216S0J4VEZFbFgxZktXRFFLcnhOSU1TdVY5RHdpcjJNVUt6bTNsT016UmdIZmRBNlhQa0ZTUHhPeVZlWlNxTjlqVFVmNGxwbVdlR3AzYWJmaHM5WHU2dWQ5QlpWVG5xWHc5eVk2RFgreWdTRlNLUzZJdGxsbGg3cC9xK2dYbERMSGQwLzFmUUx5TkM4bVFZbWFhWFlFWnBUQ0hYRkNLUHFvbW1zYXhkVEZRaEhZMkVUaEhKQmhRb1h5ak5jbzFxVWFLTk5DZ2hTOWU0aW93dWhhaGdsTnFqakdudThqSitpNjF3R3QwTjdpZGROZkR3UXJadVdqdVgxQ0hrOUQ0cDE1QU56QTlyM0NSWTJDajR0MGh2Szl2NXQ5eWxjZlVQR1hwQzFXR2JIaUg3bXlSUGpDSENqUXhibzRSWURsSVByS2JaQW1SQjZoTHRhWXlTZTBldytHZTZ3YnJ1YkR4VExzTFNZZjh4eGNmMnMrcEtuU3FFalcvOEFORlg0eXVBVGVYYmpYM1NOdGxsRXNhbWFOREEwVW1RSmd1N3h1Wmk2VXhuYWJFT2J3TnFjRElpR0FORWNwQW4zVlJVcWs2b0JJV1dPUHdWNU5Mc2laSzBtVUVNYnc3Nm5tczVUZkJsSHA0MGdtTjAwbGVpYWFScktsZUFodHZvcUZtYUhtbU1ObTBIb2tVV2pNdXFOTXpaV05KdHRGUk16SUhkTURNUTBTWFdScGtpaXpoNWRWZDRwZXFiUUI1b3puOGRRdUV3bzFXV1JiUldFWFRMWEpXQnJMYWxPdXE5VmxINWc4ZDF0Z3UwOHpjTlUzQnNnNUl2NjFlQVNWbE1YWEwzbHhQOEF3cml2aWVOaEExM1ZHOFFuZ2ljbWVCUjJoTHRxUXUvR1ROTUthQ1ZFSnk2SGMwUnRJbm9zdEN5VmplVmZsUDhBVjlBdkpqTGFBRFQ0L1FMeU5pQWFhSUV2VEtLMXlJb3kxZWMxQ2E5VEQxZ25BRklMc3FSYUZqRURkRDNDSndjbEIxTW9CUEVMMEwwUXZjU3hqMHJ2Q3VnS1RXckJvZ0ZKelpVeUJzcHNwazdlYVNVa3RsY2VPVW5TQXRaQ2FvZ1JMaWZ1b1ZDR2lQZEFyMU5WQjVMNlBReCtKeDNQL1FiRVl6OXRob3E1NzFCN2xBdVRSUnNra3VpWmFoZ0xqaks4RlJITTNaN0VWaTR5ZHJLQWN2UGFoa3BrbFJGdDNiSmx5NDE2NUtISzFBNVVNQ3VRcG1yT3FWSnN2Y1MzRUtteHNZMXpiQlFkakhuZEJKdGRCTDBGQmZCcFpKZklYaVhIVkFna3FkRmttK2lwZEVLc3M4SEliNHJyNllLVmZpOWdodnFrOUFsb1o2MER4SUFNTnV2TWF1Y0trbUVzWndqQnFVMlVDa0lBQ0lYSU1Oam1BSGRQajlBdXJtWG51bngrZ1hrQUZlMHFZSzFYL1VYczNSd2VPZlNvbC9BUUtnRGlEdzhaY2VGc0FkMFJBbVQxS3pQNGNjeWlZaHhLVFhyeHc0NW4yWGhRSE1vbUROY2lOY2dOb2ptVVJ0SHFVRERWT0VWN1FVcTJuMUttR2RTZ05ZS28xUWhNR2wxS2lhSTZyV0dnYkdvN0dFK0M2eWlMbTZrV2RTcFRtK2tkV0hERjdrOUJhVk5yUkp1VU90aUlRbnQ2bERORWN5b09EYnRucFF6d2d1TUZSQ3JVUVhPUlhVQnpLQzZnSjFQc25qQWxrem9DNEtKYW0vd29pWlB0OWtQOE9PWjlsUkk1NXpRQW9ibkpzWVljeXZmaEc5ZlpPaURkOUNTNDUwcHdZTnZNKzMyWEhZUWN6N0lpZXdrNURLZE9GSE0reWorRWJ6UHNpaEpNU1hwVGh3YmVaOXZzdWZnMjh6N2ZaRVd3V0d3L0dUZUJ1VVIyRENkdytHQWJxZlpFR0hITSt5V3dsUlVweHNocTVyWVJwNSt5VWZnMjh6N2ZaTW1Cc1JDa214aEc4ejdmWlRaZ204ejdmWkVRU0NabzBkeW1tNFJvNSt5NytISE0reTFnQkwwb3Y0Y2N6N0xuNGNjeXNZWXkvd0RLZkg2QmRYM1QvcDcyRndRd05KNzZRcXVxZ1ZIT3FRNGd1QUhDMkFJYUlzT3BYa0FuLzlrPVwiXHJcbn1dO1xyXG5cclxuY29uc3QgZ2V0Q210ID0gKHVzZXJJZCxjb250ZW50KT0+KHtcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIG5pY2tuYW1lOlwiZm94Ym94XCJcclxuICAgIH0sXHJcbiAgICBjb250ZW50XHJcbn0pXHJcblxyXG5jb25zdCBnZXRSYW5kb21WYWx1ZSA9IGFycj0+e1xyXG4gICAgY29uc3QgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphcnIubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcnIuc2xpY2UoMCxuKzEpO1xyXG59O1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpcInJzdWFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6XCJteSAjZmlyc3QgI3Bvc3RcIixcclxuICAgICAgICBJbWFnZXM6aW1ncyxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOlwiZm94Ym94XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDpcIndvdyBnb29kXCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTpcInJyclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XCJob2x5IHNoaXRcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG5cclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOm51bGwsXHJcbiAgICBoYXNNb3JlUG9zdHM6dHJ1ZSxcclxuXHJcbiAgICByZW1vdmVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG59XHJcbmNvbnN0IGdldFJhbmRvbUltZyA9ICgpPT57XHJcbiAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKSoxMCsxO1xyXG4gICAgZm9yKGxldCBpPTA7aTxyYW5kb21WYWx1ZTtpKyspXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICBzcmM6ZmFrZXIuaW1hZ2UuaW1hZ2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gbnVtYmVyID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgodixpKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDpmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczpnZXRSYW5kb21JbWcoKSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6ZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OmZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDApKVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9BRERfUE9TVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfUE9TVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0VSUk9SID0gXCJwb3N0UmVkdWNlci9BRERfQ09NTUVOVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9FUlJPUlwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4oey8vKHtwb3N0Q29udGVudH0pXHJcbiAgICB0eXBlOkFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4oey8vKHtpZH0pXHJcbiAgICB0eXBlOlJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKT0+KHsvLyh7cG9zdElkLGNvbnRlbnQsdXNlcklkfSlcclxuICAgIHR5cGU6QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKT0+ICh7Ly97aWQscG9zdENvbnRlbnR9XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLnBvc3RDb250ZW50LFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTpcInplcm9cIlxyXG4gICAgfSxcclxuICAgIEltYWdlczpnZXRSYW5kb21WYWx1ZShpbWdzKSxcclxuICAgIENvbW1lbnRzOltdLFxyXG59KVxyXG5cclxuY29uc3QgcG9zdFJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmFkZFBvc3RBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOi8vZGF0YTp7aWR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKHBvc3Q9PnBvc3QuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzovL2RhdGE6YWRkQ29tbWVudEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChwb3N0PT5wb3N0LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGdldENtdChhY3Rpb24uZGF0YS51c2VySWQsYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0VSUk9SOi8ve2RhdGE6ZXJyfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOi8ve2RhdGE6e25ld0xvYWRlZFBvc3RzfX1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLm5ld0xvYWRlZFBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGg8MTA7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ0luRG9uZTpmYWxzZSxcclxuICAgIGxvZ0luRXJvcnI6bnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTpmYWxzZSxcclxuICAgIGxvZ091dEVyb3JyOm51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOmZhbHNlLFxyXG4gICAgZm9sbG93RXJvcnI6bnVsbCxcclxuXHJcbiAgICB1bkZvbGxvd1VwTG9hZGluZzpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBEb25lOmZhbHNlLFxyXG4gICAgdW5Gb2xsb3dVcEVycm9yOm51bGwsXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e30sXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0xPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19JTl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9FUlJPUiA9IFwidXNlclJlZHVjZXIvTE9HX09VVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9FUlJPUiA9IFwidXNlclJlZHVjZXIvU0lHTl9VUF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL0ZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0ZPTExPV19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1VORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcInVzZXJSZWR1Y2VyL1VORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9BRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfVE9fTUUgPSBcInVzZXJSZWR1Y2VyL1JFTU9WRV9QT1NUX1RPX01FXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTE9BRF9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTE9BRF9VU0VSX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpPT4oe1xyXG4gICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHsvL3tkYXRhOntlbWFpbCxwYXNzd29yZH19XHJcbiAgICB0eXBlOlNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IGRhdGE9Pih7Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICBpZDoxLFxyXG4gICAgbmlja25hbWU6XCJmb3hib3hyXCIsXHJcbiAgICAuLi5kYXRhLFxyXG4gICAgUG9zdHM6W3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG59KVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7cG9zdFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6YWN0aW9uLmRhdGEucG9zdFVzZXJJZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOi8ve2RhdGE6e3Bvc3RVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKHY9PnYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RVc2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzovL3tlbWFpbCxuaWNrbmFtZSxwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6Ly9kYXRhOntpZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9UT19NRTovL2RhdGE6e2lkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=