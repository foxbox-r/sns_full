module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\WEB\\front_next\\components\\AppLayout.js";







const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search)`
    vertical-align:middle;
`;

function AppLayout({
  children
}) {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.userReducer);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uB178\uB4DC\uBC84\uB4DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/Profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD504\uB85C\uD544"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchInput, {
          enterButton: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/Signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 42
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 4,
        children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 16,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "",
          target: "_blank",
          children: "foxboxr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");

var _jsxFileName = "C:\\WEB\\front_next\\components\\CommentForm.js";
 // import Form from 'antd/lib/form/Form';






function CommentForm({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$userReducer$me;

    return (_state$userReducer$me = state.userReducer.me) === null || _state$userReducer$me === void 0 ? void 0 : _state$userReducer$me.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.postReducer);
  const [commentText, onChangeCommentText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    console.log(post.id, commentText, id);
    dispatch(Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_5__["addCommentRequestAction"])({
      postId: post.id,
      content: commentText,
      userId: id
    }));
  }, [commentText]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (addCommentDone) {
      setText("");
    }
  }, [addCommentDone]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        children: addCommentLoading ? "로딩..." : "삐약"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");


var _jsxFileName = "C:\\WEB\\front_next\\components\\FollowButton.js";





function FollowButton({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unFollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.userReducer);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  console.log("foloow", isFollowing, post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: {
          postUserId: post.User.id
        }
      });
    } else {
      dispatch({
        type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: {
          postUserId: post.User.id
        }
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickButton,
      children: followLoading || unFollowLoading ? "로딩중.." : isFollowing ? "언팔로우" : "팔로우"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");

var _jsxFileName = "C:\\WEB\\front_next\\components\\LoginForm.js";







const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    margin-top:10px;
`;
const StyleForm = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])`
    padding:10px;
`;

function LoginForm({
  setIsLoggedIn
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => {
    console.log(state);
    return state.userReducer;
  });
  const buttonStyle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    marginTop: 10
  }), []);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])("");
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])("");
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])({
      password,
      email
    }));
  }, [email, password]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (logInError) alert(logInError);
  }, [logInError]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyleForm, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "use-email",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "email",
        name: "user-email",
        value: email,
        onChange: onChangeEmail,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC88"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        name: "user-password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonWrapper, {
      style: buttonStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: logInLoading ? "로딩중..." : "로그인"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/Signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostImages */ "./components/PostImages.js");
/* harmony import */ var _components_CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");


var _jsxFileName = "C:\\WEB\\front_next\\components\\PostCard.js";










function PostCard({
  post
}) {
  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpenend
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.userReducer);
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.postReducer);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const id = me === null || me === void 0 ? void 0 : me.id; //  me && me.id 

  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setCommentFormOpenend(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(id => {
    dispatch(Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_8__["removePostRequestAction"])({
      id
    }));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 42
      }, this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 30
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 105
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              loading: false,
              type: "danger",
              onClick: () => onRemovePost(post.id),
              children: removePostLoading ? "로딩..." : "삭제"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 30
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 33
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
            author: item.nickname,
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
              children: item.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 45
            }, this),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\WEB\\front_next\\components\\PostCardContent.js";



function PostCardContent({
  postData
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 74
          }, this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 28
        }, this);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _jsxFileName = "C:\\WEB\\front_next\\components\\PostForm.js";






function PostForm() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const imgInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    imagePaths,
    addPostDone,
    addPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.postReducer);
  const [text, onChangePostText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])("");
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch(Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_4__["addPostRequestAction"])({
      postContent: text
    }));
  }, [text]);
  const onClickImgUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    imgInput.current.click();
  }, [imgInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      value: text,
      onChange: onChangePostText,
      maxLength: 140,
      placeholder: "isnert your post"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        multiple: true,
        hidden: true,
        ref: imgInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onClickImgUpload,
        children: "img upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        style: {
          float: "right"
        },
        htmlType: "submit",
        children: addPostLoading ? "로딩..." : "짹짹"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: imagePaths.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "inline-block"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: v,
          style: {
            width: "200px"
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "remove"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_utils_ZoomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my_utils/ZoomImg */ "./my_utils/ZoomImg.js");


var _jsxFileName = "C:\\WEB\\front_next\\components\\PostImages.js";




function PostImages({
  images
}) {
  const {
    0: isZoom,
    1: setIsZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onZoomToggle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log("togge");
    setIsZoom(prev => !prev);
  }, []);
  let html_imgs;
  if (images.length === 1) html_imgs = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    role: "presentation",
    src: images[0].src,
    alt: images[0].src,
    onClick: onZoomToggle
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 41
  }, this);
  if (images.length === 2) html_imgs = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        display: "inline-block",
        width: "50%"
      },
      onClick: onZoomToggle,
      src: images[0].src,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        display: "inline-block",
        width: "50%"
      },
      onClick: onZoomToggle,
      src: images[1].src,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true);
  if (images.length > 2) html_imgs = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        display: "inline-block",
        width: "50%"
      },
      onClick: onZoomToggle,
      src: images[0].src,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      role: "presetation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      onClick: onZoomToggle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), images.length - 1, "\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_my_utils_ZoomImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onZoomToggle: onZoomToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 20
    }, this), html_imgs]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");

var _jsxFileName = "C:\\WEB\\front_next\\components\\UserProfile.js";





function UserProfile() {
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.userReducer);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch(Object(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["logoutRequestAction"])());
  }, []);
  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 35
      }, this), me.Posts.length]
    }, "twit", true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 42
      }, this), me.Followings.length]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 42
      }, this), me.Followers.length]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        children: "fbr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }, this),
      title: "foxboxr"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onLogOut,
      children: logOutLoading ? "로딩중..." : "로그아웃"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./my_utils/ZoomImg.js":
/*!*****************************!*\
  !*** ./my_utils/ZoomImg.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\WEB\\front_next\\my_utils\\ZoomImg.js";


const BackgroundZoomImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display:flex;
    item-align:center;
    justify-content:center;
    position:fixed;
    top:0;
    left:0;
    widht:100%;
    height:100%;
    background-color:rgba(0,0,0,0.9);
`;

function ZoomImg({
  images,
  onZoomToggle
}) {
  const {
    0: curIdx,
    1: setCurIdx
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  console.log("idx", curIdx, images);
  const getNextIdx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.stopPropagation();
    console.log("click");
    setCurIdx((curIdx + 1) % images.length);
  }, [curIdx]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackgroundZoomImg, {
    onClick: onZoomToggle,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: images[curIdx].src,
      onClick: getNextIdx,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomImg);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");


var _jsxFileName = "C:\\WEB\\front_next\\pages\\index.js";









function index() {
  const {
    logInDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.userReducer);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    mainPosts,
    hasMorePosts,
    loadPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.postReducer);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
    });
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    function onScroll(e) {
      // console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
      const result = Math.floor(window.scrollY + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 300; // console.log(Math.floor(window.scrollY+document.documentElement.clientHeight),document.documentElement.scrollHeight-300)
      // console.log(result);

      if (result && hasMorePosts && !loadPostLoading) {
        dispatch({
          type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"]
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
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
      }, this), mainPosts.map((post, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 46
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_ERROR, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR, addPostRequestAction, removePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const imgs = [{
  src: "data:image/jpeg;base64,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"
}, {
  src: "data:image/jpeg;base64,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"
}, {
  src: "data:image/jpeg;base64,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"
}];

const getCmt = (userId, content) => ({
  User: {
    nickname: "foxbox"
  },
  content
});

const getRandomValue = arr => {
  const n = Math.floor(Math.random() * arr.length);
  return arr.slice(0, n + 1);
};

const initialState = {
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

const getRandomImg = () => {
  const arr = [];
  const randomValue = Math.random() * 10 + 1;

  for (let i = 0; i < randomValue; i++) arr.push({
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  });

  return arr;
};

const generateDummyPost = number => Array(number).fill().map((v, i) => ({
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
}));
initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(0));
const ADD_POST_REQUEST = "postReducer/ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "postReducer/ADD_POST_SUCCESS";
const ADD_POST_ERROR = "postReducer/ADD_POST_ERROR";
const REMOVE_POST_REQUEST = "postReducer/REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "postReducer/REMOVE_POST_SUCCESS";
const REMOVE_POST_ERROR = "postReducer/REMOVE_POST_ERROR";
const ADD_COMMENT_REQUEST = "postReducer/ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "postReducer/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_ERROR = "postReducer/ADD_COMMENT_ERROR";
const LOAD_POST_REQUEST = "postReducer/LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "postReducer/LOAD_POST_SUCCESS";
const LOAD_POST_ERROR = "postReducer/LOAD_POST_ERROR";
const addPostRequestAction = data => ({
  //({postContent})
  type: ADD_POST_REQUEST,
  data
});
const removePostRequestAction = data => ({
  //({id})
  type: REMOVE_POST_REQUEST,
  data
});
const addCommentRequestAction = data => ({
  //({postId,content,userId})
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  //{id,postContent}
  id: data.id,
  content: data.postContent,
  User: {
    id: 1,
    nickname: "zero"
  },
  Images: getRandomValue(imgs),
  Comments: []
});

const postReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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
        draft.mainPosts = draft.mainPosts.filter(post => post.id !== action.data.id);
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
        const post = draft.mainPosts.find(post => post.id === action.data.PostId);
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

/***/ }),

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_ERROR, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_ERROR, ADD_POST_TO_ME, REMOVE_POST_TO_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR, logoutRequestAction, loginRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
const LOG_IN_REQUEST = "userReducer/LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "userReducer/LOG_IN_SUCCESS";
const LOG_IN_ERROR = "userReducer/LOG_IN_ERROR";
const LOG_OUT_REQUEST = "userReducer/LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "userReducer/LOG_OUT_SUCCESS";
const LOG_OUT_ERROR = "userReducer/LOG_OUT_ERROR";
const SIGN_UP_REQUEST = "userReducer/SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "userReducer/SIGN_UP_SUCCESS";
const SIGN_UP_ERROR = "userReducer/SIGN_UP_ERROR";
const FOLLOW_REQUEST = "userReducer/FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "userReducer/FOLLOW_SUCCESS";
const FOLLOW_ERROR = "userReducer/FOLLOW_ERROR";
const UNFOLLOW_REQUEST = "userReducer/UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "userReducer/UNFOLLOW_SUCCESS";
const UNFOLLOW_ERROR = "userReducer/UNFOLLOW_ERROR";
const ADD_POST_TO_ME = "userReducer/ADD_POST_TO_ME";
const REMOVE_POST_TO_ME = "userReducer/REMOVE_POST_TO_ME";
const LOAD_USER_REQUEST = "postReducer/LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "postReducer/LOAD_USER_SUCCESS";
const LOAD_USER_ERROR = "postReducer/LOAD_USER_ERROR";
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const signupRequestAction = data => ({
  //{data:{email,password}}
  type: SIGN_UP_REQUEST,
  data
});

const dummyUser = data => _objectSpread(_objectSpread({
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

const userReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.postUserId);
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
        draft.me.Posts = draft.me.Posts.filter(post => post.id !== action.data.id);
        break;

      case LOAD_USER_REQUEST:
        //data:loadUserApi().data
        draft.loadUserLoading = true;
        draft.loadUserErorr = null;
        break;

      case LOAD_USER_SUCCESS:
        console.log(action.me);
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

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL215X3V0aWxzL1pvb21JbWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwiQ29tbWVudEZvcm0iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsInBvc3RSZWR1Y2VyIiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0VGV4dCIsInVzZUlucHV0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJwb3N0SWQiLCJjb250ZW50IiwidXNlcklkIiwidXNlRWZmZWN0IiwiRm9sbG93QnV0dG9uIiwiZm9sbG93TG9hZGluZyIsInVuRm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJwb3N0VXNlcklkIiwiRk9MTE9XX1JFUVVFU1QiLCJCdXR0b25XcmFwcGVyIiwiZGl2IiwiU3R5bGVGb3JtIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwiYnV0dG9uU3R5bGUiLCJ1c2VNZW1vIiwibWFyZ2luVG9wIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiYWxlcnQiLCJQb3N0Q2FyZCIsImxpa2VkIiwic2V0TGlrZWQiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZW5kIiwicmVtb3ZlUG9zdExvYWRpbmciLCJvblRvZ2dsZUxpa2UiLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwicmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24iLCJJbWFnZXMiLCJuaWNrbmFtZSIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwic3BsaXQiLCJtYXAiLCJpIiwibWF0Y2giLCJzbGljZSIsIlBvc3RGb3JtIiwiaW1nSW5wdXQiLCJ1c2VSZWYiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0TG9hZGluZyIsInRleHQiLCJvbkNoYW5nZVBvc3RUZXh0Iiwib25TdWJtaXQiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInBvc3RDb250ZW50Iiwib25DbGlja0ltZ1VwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm1hcmdpbiIsImZsb2F0IiwiZGlzcGxheSIsIndpZHRoIiwiUG9zdEltYWdlcyIsImltYWdlcyIsImlzWm9vbSIsInNldElzWm9vbSIsIm9uWm9vbVRvZ2dsZSIsImh0bWxfaW1ncyIsInNyYyIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJVc2VyUHJvZmlsZSIsImxvZ091dExvYWRpbmciLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJQb3N0cyIsIkZvbGxvd2VycyIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwiZSIsInRhcmdldCIsIkJhY2tncm91bmRab29tSW1nIiwiWm9vbUltZyIsImN1cklkeCIsInNldEN1cklkeCIsImdldE5leHRJZHgiLCJzdG9wUHJvcGFnYXRpb24iLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5kZXgiLCJsb2dJbkRvbmUiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwib25TY3JvbGwiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWdzIiwiZ2V0Q210IiwiZ2V0UmFuZG9tVmFsdWUiLCJhcnIiLCJuIiwicmFuZG9tIiwiaW5pdGlhbFN0YXRlIiwiYWRkUG9zdEVycm9yIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudEVycm9yIiwiZ2V0UmFuZG9tSW1nIiwicmFuZG9tVmFsdWUiLCJmYWtlciIsImltYWdlIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJmaWxsIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsInNlbnRlbmNlIiwiY29uY2F0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9FUlJPUiIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRVJST1IiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0VSUk9SIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRVJST1IiLCJkdW1teVBvc3QiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwiYWRkQ29tZW50RG9uZSIsIlBvc3RJZCIsIm5ld0xvYWRlZFBvc3RzIiwibG9nSW5Fcm9yciIsImxvZ091dERvbmUiLCJsb2dPdXRFcm9yciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJmb2xsb3dEb25lIiwiZm9sbG93RXJvcnIiLCJ1bkZvbGxvd1VwTG9hZGluZyIsInVuRm9sbG93VXBEb25lIiwidW5Gb2xsb3dVcEVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0VSUk9SIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9FUlJPUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRVJST1IiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19FUlJPUiIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJmb2xsb3dFcnJvciIsInVuRm9sbG93RXJyb3IiLCJ1bkZvbGxvd0RvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIiwibG9hZFVzZXJFcm9yciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7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QUFOLENBQVNnSCxLQUFULEdBQWlCMlcsS0FBSyxDQUFDM2QsRUFBTixDQUFTZ0gsS0FBVCxDQUFlNlcsTUFBZixDQUFzQnhkLElBQUksSUFBRUEsSUFBSSxDQUFDRyxFQUFMLEtBQVlpZCxNQUFNLENBQUNyYixJQUFQLENBQVk1QixFQUFwRCxDQUFqQjtBQUNBOztBQUVKLFdBQUsrWixpQkFBTDtBQUF1QjtBQUNuQm9ELGFBQUssQ0FBQ2lCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQWpCLGFBQUssQ0FBQzhDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDSixXQUFLVCxpQkFBTDtBQUNJOWUsZUFBTyxDQUFDQyxHQUFSLENBQVlzYyxNQUFNLENBQUN6ZCxFQUFuQjtBQUNBMmQsYUFBSyxDQUFDa0IsWUFBTixHQUFxQixJQUFyQjtBQUNBbEIsYUFBSyxDQUFDaUIsZUFBTixHQUF3QixLQUF4QjtBQUNBakIsYUFBSyxDQUFDM2QsRUFBTixHQUFXeWQsTUFBTSxDQUFDcmIsSUFBbEI7QUFDQTs7QUFDSixXQUFLNmQsZUFBTDtBQUNJdEMsYUFBSyxDQUFDaUIsZUFBTixHQUF3QixLQUF4QjtBQUNBakIsYUFBSyxDQUFDbUIsYUFBTixHQUFzQnJCLE1BQU0sQ0FBQ3JiLElBQTdCO0FBQ0E7O0FBRUo7QUFDSTtBQUNBO0FBbEdSO0FBb0dILEdBckdhLENBQWQ7QUFzR0gsQ0F2R0Q7O0FBeUdlakMsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUMzTEEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge01lbnUsSW5wdXQsUm93LENvbH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGVcIlxyXG5pbXBvcnQgTG9nZ2luRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFwcExheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyUmVkdWNlcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPuuFuOuTnOuyhOuTnDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Qcm9maWxlXCI+PGE+7ZSE66Gc7ZWEPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQgZW50ZXJCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWU/PFVzZXJQcm9maWxlIC8+IDogPExvZ2dpbkZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTZ9PiBcclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiPmZveGJveHI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiLCJpbXBvcnQgeyBJbnB1dCxCdXR0b24sRm9ybSB9IGZyb20gJ2FudGQnO1xyXG4vLyBpbXBvcnQgRm9ybSBmcm9tICdhbnRkL2xpYi9mb3JtL0Zvcm0nO1xyXG5pbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCJcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHthZGRDb21tZW50UmVxdWVzdEFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCJcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tZW50Rm9ybSh7cG9zdH0pe1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJSZWR1Y2VyLm1lPy5pZCk7XHJcbiAgICBjb25zdCB7YWRkQ29tbWVudERvbmUsYWRkQ29tbWVudExvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCxvbkNoYW5nZUNvbW1lbnRUZXh0LHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsY29tbWVudFRleHQsaWQpO1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uKHtcclxuICAgICAgICAgICAgcG9zdElkOnBvc3QuaWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6Y29tbWVudFRleHQsXHJcbiAgICAgICAgICAgIHVzZXJJZDppZFxyXG4gICAgICAgIH0pKVxyXG4gICAgfSxbY29tbWVudFRleHRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihhZGRDb21tZW50RG9uZSl7XHJcbiAgICAgICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbYWRkQ29tbWVudERvbmVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH0gcm93cz17NH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+e2FkZENvbW1lbnRMb2FkaW5nP1wi66Gc65SpLi4uXCI6XCLsgpDslb1cIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiLCJpbXBvcnQgUmVhY3QgLHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImFudGRcIlxyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyUmVkdWNlclwiXHJcblxyXG5mdW5jdGlvbiBGb2xsb3dCdXR0b24oe3Bvc3R9KXtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHttZSxmb2xsb3dMb2FkaW5nLHVuRm9sbG93TG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKHY9PnYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJmb2xvb3dcIixpc0ZvbGxvd2luZyxwb3N0LlVzZXIuaWQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6e3Bvc3RVc2VySWQ6cG9zdC5Vc2VyLmlkfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6e3Bvc3RVc2VySWQ6cG9zdC5Vc2VyLmlkfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgeyhmb2xsb3dMb2FkaW5nIHx8IHVuRm9sbG93TG9hZGluZyApP1wi66Gc65Sp7KSRLi5cIjooaXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiOlwi7YyU66Gc7JqwXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlTWVtbyx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLElucHV0LEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ2luUmVxdWVzdEFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCJcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBTdHlsZUZvcm0gPSBzdHlsZWQoRm9ybSlgXHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbmBcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oe3NldElzTG9nZ2VkSW59KXtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7bG9nSW5Mb2FkaW5nLGxvZ0luRXJyb3J9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9Pntjb25zb2xlLmxvZyhzdGF0ZSk7IHJldHVybiBzdGF0ZS51c2VyUmVkdWNlcjt9KTtcclxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6MTB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLHBhc3N3b3JkKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oe3Bhc3N3b3JkLGVtYWlsfSkpO1xyXG4gICAgfSxbZW1haWwscGFzc3dvcmRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihsb2dJbkVycm9yKVxyXG4gICAgICAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH0sW2xvZ0luRXJyb3JdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlRm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlLWVtYWlsXCI+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXItZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuyiDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uV3JhcHBlciBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9Pntsb2dJbkxvYWRpbmc/XCLroZzrlKnspJEuLi5cIjpcIuuhnOq3uOyduFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9TaWdudXBcIj48YT48YnV0dG9uPu2ajOybkOqwgOyehTwvYnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8L1N0eWxlRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsUG9wb3ZlcixBdmF0YXIsTGlzdCxDb21tZW50fSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7UmV0d2VldE91dGxpbmVkLEhlYXJ0VHdvVG9uZSxIZWFydE91dGxpbmVkLE1lc3NhZ2VPdXRsaW5lZCxFbGxpcHNpc091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIlxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWVudEZvcm1cIlxyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudFwiXHJcbmltcG9ydCB7cmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCJcclxuXHJcbmZ1bmN0aW9uIFBvc3RDYXJkKHtwb3N0fSl7XHJcblxyXG4gICAgY29uc3QgW2xpa2VkLHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCxzZXRDb21tZW50Rm9ybU9wZW5lbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS51c2VyUmVkdWNlcik7XHJcbiAgICBjb25zdCB7cmVtb3ZlUG9zdExvYWRpbmd9ICA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5wb3N0UmVkdWNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpZCA9IG1lPy5pZDsvLyAgbWUgJiYgbWUuaWQgXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldExpa2VkKHByZXY9PiFwcmV2KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVuZChwcmV2PT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKGlkKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uKHtpZH0pKTtcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgKGxpa2VkID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0ga2V5PVwiaGVhcnRcIi8+OjxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0ga2V5PVwiaGVhcnRcIi8+KSxcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmYWxzZX0gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpPT5vblJlbW92ZVBvc3QocG9zdC5pZCl9PntyZW1vdmVQb3N0TG9hZGluZz9cIuuhnOuUqS4uLlwiOlwi7IKt7KCcXCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz46PEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2UgLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuZnVuY3Rpb24gUG9zdENhcmRDb250ZW50KHtwb3N0RGF0YX0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodi5tYXRjaCgvKCNbXlxccyNdKykvKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGtleT17aX0gaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfT48YT57dn08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFjayx1c2VTdGF0ZSx1c2VSZWYsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsQnV0dG9ufSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFBvc3RSZXF1ZXN0QWN0aW9ufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXJcIlxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCJcclxuXHJcbmZ1bmN0aW9uIFBvc3RGb3JtKCl7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpbWdJbnB1dCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHMsYWRkUG9zdERvbmUsYWRkUG9zdExvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IFt0ZXh0LG9uQ2hhbmdlUG9zdFRleHQsc2V0VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkUG9zdFJlcXVlc3RBY3Rpb24oe3Bvc3RDb250ZW50OnRleHR9KSk7XHJcbiAgICB9LFt0ZXh0XSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1nVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpbWdJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LFtpbWdJbnB1dC5jdXJyZW50XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihhZGRQb3N0RG9uZSl7XHJcbiAgICAgICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7bWFyZ2luOlwiMTBweCAwIDIwcHhcIn19IG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUG9zdFRleHR9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaXNuZXJ0IHlvdXIgcG9zdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWdJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1nVXBsb2FkfT5pbWcgdXBsb2FkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDpcInJpZ2h0XCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPnthZGRQb3N0TG9hZGluZz9cIuuhnOuUqS4uLlwiOlwi7Ke57Ke5XCJ9PC9CdXR0b24+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7d2lkdGg6XCIyMDBweFwifX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5yZW1vdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiLCJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7UGx1c091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxyXG5pbXBvcnQgWm9vbUltZyBmcm9tIFwiLi4vbXlfdXRpbHMvWm9vbUltZ1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdEltYWdlcyh7aW1hZ2VzfSl7XHJcbiAgICBjb25zdCBbaXNab29tLHNldElzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25ab29tVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvZ2dlXCIpO1xyXG4gICAgICAgIHNldElzWm9vbShwcmV2PT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGxldCBodG1sX2ltZ3M7XHJcblxyXG4gICAgaWYoaW1hZ2VzLmxlbmd0aCA9PT0gMSkgaHRtbF9pbWdzID0gPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9e2ltYWdlc1swXS5zcmN9IG9uQ2xpY2s9e29uWm9vbVRvZ2dsZX0gLz47XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID09PSAyKVxyXG4gICAgIGh0bWxfaW1ncyA9IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHdpZHRoOlwiNTAlXCJ9fSBvbkNsaWNrPXtvblpvb21Ub2dnbGV9IHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHdpZHRoOlwiNTAlXCJ9fSBvbkNsaWNrPXtvblpvb21Ub2dnbGV9IHNyYz17aW1hZ2VzWzFdLnNyY30gYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvPik7XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID4gMilcclxuICAgICBodG1sX2ltZ3MgPSAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8aW1nIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHdpZHRoOlwiNTAlXCJ9fSBvbkNsaWNrPXtvblpvb21Ub2dnbGV9IHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiXCIvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInByZXNldGF0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsd2lkdGg6XCI1MCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIix2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCJ9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblpvb21Ub2dnbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoLTF97J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgICk7XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAge2lzWm9vbSAmJiA8Wm9vbUltZyBpbWFnZXM9e2ltYWdlc30gb25ab29tVG9nZ2xlPXtvblpvb21Ub2dnbGV9IC8+fVxyXG4gICAgICAgIHtodG1sX2ltZ3N9XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiLCJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCxBdmF0YXIsQnV0dG9ufSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ291dFJlcXVlc3RBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyUmVkdWNlclwiXHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpe1xyXG4gICAgY29uc3Qge21lLGxvZ091dExvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgfSxbXSk7XHJcbjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynueynuTxici8+e21lLlBvc3RzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsnok8YnIvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsm4w8YnIvPnttZS5Gb2xsb3dlcnMubGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj5mYnI8L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cImZveGJveHJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fT57bG9nT3V0TG9hZGluZz9cIuuhnOuUqeykkS4uLlwiOlwi66Gc6re47JWE7JuDXCJ9PC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTsiLCJpbXBvcnQge3VzZVN0YXRlLHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxWYWx1ZT1udWxsKT0+e1xyXG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gW3ZhbHVlLGhhbmRsZXIsc2V0VmFsdWVdO1xyXG59IiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kWm9vbUltZyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBpdGVtLWFsaWduOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkaHQ6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuOSk7XHJcbmBcclxuXHJcbmZ1bmN0aW9uIFpvb21JbWcoe2ltYWdlcyxvblpvb21Ub2dnbGV9KXtcclxuICAgIGNvbnN0IFtjdXJJZHgsc2V0Q3VySWR4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc29sZS5sb2coXCJpZHhcIixjdXJJZHgsaW1hZ2VzKTtcclxuXHJcbiAgICBjb25zdCBnZXROZXh0SWR4ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgIHNldEN1cklkeCgoY3VySWR4KzEpJWltYWdlcy5sZW5ndGgpO1xyXG4gICAgfSxbY3VySWR4XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFja2dyb3VuZFpvb21JbWcgb25DbGljaz17b25ab29tVG9nZ2xlfT4gICBcclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tjdXJJZHhdLnNyY30gb25DbGljaz17Z2V0TmV4dElkeH0gYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZFpvb21JbWc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFpvb21JbWc7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCJcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIlxyXG5pbXBvcnQge0xPQURfUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXJcIlxyXG5pbXBvcnQge0xPQURfVVNFUl9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclJlZHVjZXJcIlxyXG5mdW5jdGlvbiBpbmRleCgpe1xyXG4gICAgY29uc3Qge2xvZ0luRG9uZX0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21haW5Qb3N0cyxoYXNNb3JlUG9zdHMsbG9hZFBvc3RMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5wb3N0UmVkdWNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoZSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KT49ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1hdGguZmxvb3Iod2luZG93LnNjcm9sbFkrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDApXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCAmJiBoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0TG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfUkVRVUVTVFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFzTW9yZVBvc3RzLGxvYWRQb3N0TG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5ob21lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge2xvZ0luRG9uZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCxpbmRleCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KSB9XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5jb25zdCBpbWdzID0gW3tcclxuICAgIHNyYzpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNVEVoVVRFeE1XRmhVWEZ4OGFHQmdYRngwWEdob1hIUmdZR2hvWEZoY1lIU2dnR2hvbEd4Y2FJVEVpSlNrckxpNHVHQjh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HeEFRR3kwbUh5VXRMUzB0T0M4dExTc3JMUzByTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEx5MHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBTEFCSGdNQklnQUNFUUVERVFIL3hBQWJBQUFDQXdFQkFRQUFBQUFBQUFBQUFBQUVCUUlEQmdFSEFQL0VBRUFRQUFJQkFnUUVBd1VHQkFVREJRRUFBQUVDRVFBREJCSWhNUVZCVVdFaWNZRUdFNUdoc1RKQ1VzSFI4QlJ5NGZFak0yS1Nvb0t5d2hVV1EzUFNCLy9FQUJvQkFBTUJBUUVCQUFBQUFBQUFBQUFBQUFFQ0F3UUFCUWIveEFBdEVRQUNBZ0lDQWdFREFnVUZBQUFBQUFBQUFRSVJBeUVTTVFSQlVSTWljUVZoTW9HaHdmQVVRbEt4MGYvYUFBd0RBUUFDRVFNUkFEOEE4OTRVckM0QUFaUEw5L0d0eXZBcmFnTUxqbGhxUXRzRUNkODVMNkR0WG5tQ3V0YVlYRjBLMW9NUHhXN2FIdkxUdGxPckFOcUQzNmp1ZGU5ZWpnekpMb2xreFNiN28xdHZnTmkrckVnaGxIM21DejNFNlJKQTFQUFdzdnhYaGR1MDBaZE9VdDAzNURucEZiRGdmRWY0aXpMRllIMjlGQkkwQjM2TmxiYy9hOHEwR0s5bjdOMjNsQjFLWmg0cGxRSUJEYzRNYTlDQVpFUnB5U2k0Mzgvc1JndU12dWV2eWVSbHJDeEMrZWhZZW5pTkRYTVZyQ3F2bmxBL0tuQnNCTGhJdHMwU0NzYWtRWjhYSWpyRktMTmhXYks0SU1uWFUraFVSR2xZTWtzaTdSdGppaFpTK0t1ZFBVYi9BQy9TbzI3bDFqQUpQcitzVjFWdGdFeEpuN0owMDdHS29URUVtTkFEb2RkdldvT1V4bENId0VIUHpJL2ZtWXFJZkxxVDZhZnBGZFczYVVtV3pnalRsQjVIMDZWVjdrUk01dTIyZzhxTFQrUTJsMGdyMzlzcVQ5a2prTno1VmJ3M2lSUjVuVG9kVHZ5bmF1Y05BSjJBeTlGQkpQcnkrTmJxM3hqR1dMVnRnOW9LOHhvVTJpWkZrckc0NVZYR3BMYTlFc3ZHYXBpKzF4VnpCVnJtMzRqcDZWUmllSzNIMExnanBBUDFyU1dQYXpGU0F6V3hJM0l1SDVNNUZSNGpmdDNsbStNOGJaRUNldVlhL1d0TWZJbEo3UmhYaVFUMHpGNDNFQmhsRnRTVHpDaWZsU1hGNGNydkhvWnJROGRzb2p0YnNrc29PamMyNlRISUE4dDkrd1dXTUdYOERTc2tlS0pqY0dSTzJ4OUtPU0pweHhVVm9URktqVEhCNFFOZFczY1psV1RxRnpIUUU2QWtUTWRlZE5zTGVzQzZxWWF6bGVEbGEvbHVzNUd1aWxmZG9RTm9CTyt1MVpKdFJMUlZpdmgvQ0x0MFpsV0UvR3hDSi92Y2dFOWhyVEhpL3N0aU1LdWU3YklVN051cG1JOFEySm5Zd2UxV1dzTmV1WXhMVjczak0xMUJEeklERVFET3cxaUJYcHZ0RHhYRSsrV3dnRzJxa2pLdzVoczNoWVJHbnlwSG1wOURPT2p4WjFLaU9mNTF6TEFqNDE2UHhmZ1dDdWtBWW5EV3NXZERhUnl5RnVoMC93QUpwLzZlVUNzUHhiaDF5eGNhM2RRb3k3Zy9JZzdFZHhWb3RTVm9uZEFBYUs0elFJNW5lb2pyMHFvbWkyY2RMVjI5ZGtBZEtySnFNVXRoSlpxNzc5b2lhcnFSRkJXY2NGY3ExWGdFUlVRSzZnbkdXdUxVeEZHY0t3RFg3b1JCdWZRRG1UMkExTkZSdGdiR2ZCclMyOFBldnZwSTkzYkhWanF4OGd2L0FIVWxzV3l6UUJKUFNtbnRCaVZabHRXai9oV3hsVHYrSnozWXlmS0thOEF3UXRxTGhYTXgwVWJhNzc5Qno5S3NvVytKQnpwT1JERFdoWVdTSmM3ZzdBZW01aXErSTR5SUxDV080MkE4djMxbzdpS0piUHZMaExFN0tCQTU2U1QrVlpYSFlqTVpxMlNTZ3FKUVhOMkRJNHphN0hRMVphbTI4RFVkT1JGRE5hSTNIcVJwNlUwNGJoN0pRM2IxeUkyUlp6Tjh2b2E4dFBpN1BTcmxvYWV5M0UyczNZUlM2bldBSmdFSFdQeENTTmQvSTE2WlpzSWJZdTIyZGJ2NEYxQkhNSm9jdmtkdFIzcnlWT09NVGx0QVdrNktOZlU5ZlN0SjdKNGgyVm1OMWxVa2dMbVBpYVB2R2R0ZVZlbmduS1ZSUjUva3VNRnlIL0ZNUFp1N280Yk1QZXJuQ2E2YXYvaG1CUFNOZCtVNVgyZ3dkdklseTJoVlJLem1adGpzZEJ5STlQbHY3VHdCQmhsR3BKQjBJMmptSTYrVkRZamlUWlh0KzZ0WEVqeE8wV3hiT3dkbmdnRVRJMHpkSzBab0xnNy9BT3pKNC82akdlUlFyWjVmWjQwVUdVRlFPVUlORDVFVU5keFl1RW00QXhPN0lJYnppUnk2eUsxSHRKL0M0cDh5dXR0dnhDMjBNUUlNVEFNc05DU0luV0tRdndNRFdmWE1uNU1mclhsY1BhUFZiK1VEV1ZJL3lyeGo4TXdmZ2REVTdWK0NjNkszL1NBUjhCVnVMNE15NVNqQzRyYkVSSVA0VEJQeUpvZjNUZ3d5bWU0L09takVSc2FjS1JmZjJ5dXg1ZDRPbGVpNExCcGN0b0xpVGwwRStaTzNyWG5mQ2NNNlhiVE9qS3BiUWtSUFdKM3JlY040N1pCT2R3dlNlbGJzTWtvTldlRCtwck55VHgzL0FDRzc4RXNDQ0VBMHFLQlU5NE1vL3dBdCtYK2sxYmU0MVlLRjFmTW8zSVZqcjAyck8zL2FWRVl2R1lRUkhZaU9kRG11TzJlZjQyUHlaWmxxVlg3dis1akV1RW5LREJQUG9PZGRzSW9lV2xndklrZ0V5TnlPV3RNdUpjUlVud3JhMUFpRUkwSUJBMmFqOFpaeEQ0R3hock5zQVhjMXk2MFFxK0tFTE1SSU1LREExUFNzOHNpazdaOU5LTTAwMEt1TWpEWkxON0R0Y2szQ1h0TTJZS0FwQktORWtHWUVuOWFUakN6TGxocHlHcDZrOUFkQkd2V3VZeTR1SHoyN1RDNFF1VTNJMHpNUXpaQnJvQWlpZjV1MUo3VmwzQmt0b0pBaWQrZXUxWThtMmJzV28wYURnZU5XM2NMRHduSVlPWU5HMERrRit2cldpNDFqR3h0cE5QOEFIdGdaU05tRTZ3ZVJnblR5NlZoYm5EbUFlRHFwSWZhQkRCZHdkVE1iVmNMMS9EYzVVN2pYYllUUGtZOHFsSlgwVnRlMGN3YXV0MGtrS3hja2x0SU1uUWpmMEFOYnovOEFvMkdaMHdsNGVNTmFLRmhKMVU2QXlKQjFiVGtRUldQdDRoTVF3Wm1WWFVTTTMzNDFDRTh6eUJQa2E5STlpOGJZdkovQzRsQTR6WjB6VDlxQUNOTlpranprMWJGUGpLMlF5UmI2UEs3MWd4dFFaVWl2VGVNKzJmRDdVakRZQzBXR21lOWJFVDJUYytwVTlxeGw2TVY3MjhQZFdpcTVzb0dSWDNNVzBHelFwTWRwNm10RGR2b21uUW45MllubFZaTldtNFlpcVFEUWY3REhLNkJYU3RIREJLaXExMGtaaEtxdjJpSmlaT2lpUWRkVHB0UlVHenJBYXNHRnVFZ1pHazdDRDlLdlhIRlA4c0JEMTNiL0FISDhvcjY1eGU4Ukh2R2pzWStNVjFJVzJHNGJnWE8vZHQyRi93QlJ6UDZXa2x2akZQN2wvQzJNSGNHRkx0Y2NoSHVPb1U1Q0NTRVVFd0RsZ3lackV3ZDZmZXorSGE2cjIrVUErb01BL3dESWoxcW1ON3BJV2ZXMkI4THdSdTNBb0hja2tBQWN6SjJBcmJvMXBTTEt0bVpSQTBPWE5wdVRyeTZjKzFMY1ZnVndkdUliM2phaVYwUFFUdHB1UnJ5SE0xVHdwQ2MxeHA4RW5NZVkrOXFkenJwNTFvaERqK1ROT2FtcjlBZnRUZTFDRXlSKzUrdnBGWnQyb3ppbUlMdVc2L3VLQXJMbWxjalRpanhqUk5iYlpEUExVYS9HUGxWQmZ3aXBadkQ4cDdWQmJmZ245OHF5UHMwcm91d1V6b0owNmo1VFRMQTNycUVLRmNSeXluVDBpbHVGWGwxMm8yNWltUzJMYUVxWGdzUWVYNytuZW1XYVVYb1Y0b3lYM0doUHRGY1ZZYVNRSU9oVFRXTXgzNThvMkd1OUIzdmFHN2N0bERyYUIxR1h3QW1ZR25NeDVuV3MvaHMxNWdyWElBRXk3YkRvSjUwVmZ4SUtxcXdMYW5SZWN4OW9qcWV2a0thV1NXUi9lN0p4eFF4MjRLckxMK0laeURtSll3T3c1QlFOdlFRTzFWUFpjbnhTUE1SUm94SzIxUUlvektaekhVNXV2a0Q5QjBxdTlqR2RpWjhSM1k2ZkQrbGNwdGpTaWtGWUZrdGFzZGVoMVB3RzNyRlBjQnhPMmdCUzNudUhiTUpHdlJmdkdkTmROTnF6dUZ5Q1NGTjJCSnl0bE1ibUZkQ1k3aXRQaEwrRmJEazJiY1hkY3dMSE1FZ2Y1Zmk4NU1BeDJtbmpGVDluS1BzRzRxb1l1NWYvQUJYTUVscENEbWllV2crUTZsZmgrRTNHR2w1Ui9OSUh4V2FZM01BRFlXOHZ2TXFuSzhQR1dTWWtaRHYxb1N5eGNoVnVrbllBMjFQL0FDSkgwb1pKdGRpS0Y5RWNOd2kvbXkrL3RMMTFZaU9wQldpY1h3RVdTUmR1NTJFVEI4SW5VY3E1YlVvekxidW85em1CNFJweURNQ0NaTWFhY3AxRXBlTGNUdVBvM2hLNkhYWDQ4b3FQMWJLS0ZEbXpqckt1dHRFZ3NRQ1lMTkhPRkd2cHBWUHRqeHhycFcwZ2EybHJUSVlHdktRcGc2ZXNrelNuaDJOV3dodkNHdXZLMmh5VURSN3A5ZkNQK3JwUTYzQVd6dVNmRm1ibVR6MDlmcFRwNkEzYkJzUXcwdG5rZFQ2Q2FmOEFDY2ZidFhjTy91NTF1aTRIMURGZkd2aDBpQUkzT3ZiU2tXSEtuRVN3bFM0MDZndU4rMFVQeG5GemR1aGRGOTg3TEhJRWtRTzBBVkdkTXBHMGdxM2pvd0xnNjNMbUkxZWRZOTJwYlRiN1gxTk9iMWs0akVKWlZZQ1dFems2aExhMmxkbTIxMUpQbTBWaXdlVlB1RTQ5a2JFM0FmOEE0U05lOTZ5QUQyNWVWQi9zTkYvSU5pV0F1bkxvSk1EVFFUcE1hVEVVNWZHTmFZT2hnOWlUQjh6dDVVcHUyMjkycnRveEJjRWpjRWlENmpYKzljYkVGcmF6ditmOW9wMTJLelg4VU9DTnQ4VGN3enQvRUt4RjFIbExXSSs4aHQvZGx2RU5kbkdtaHJMWUNCYnpIOERnZWJBcC93Q1ZQUFl5OFpLWjJVTnlCNStYTGw4L0t0ZGhNZmhXdTI3YkREM215dURDcm1JekJTR0FBbVJjbmI3cmM2dnp1djJNL0JSYmE5bmx0Y0Z3amJldGR4ajJiR0h4RCs5VUJHZGpaUU5Dc21iU1g1QUFnWlJCN2pTUi93RDIyTGpNRThERFpHTWcvd0FySFVlUm56cDNPS1l5VFptVUd0TitQZzViSC8wajZ0VmY4Q1V1WkhCVWd3Uno5SjdiZGFkY2U0SGludUVMaDdoVzJBaTVVSlhLdTNpalU4ejNKcTZoOXRpdjBabkNZRjdoaEZaanp5Z21QT05xWld2Wm5FdHRaZjFoZis0aXJ1SGNIeFRaa0tOYlVha3UzdWwvNWJueUJvN0MyYm1FbTk0WE95RE5tRTh5WkhMNmtWRlJrM29QS0tCcnZzcGkvQ251OXRBTTl2NkJxMTNCdlppL2g3WUl0RmpJUEkrUGxPdjJWR3Zja2NoU2V4eGczSFEzYmJaaXdFZ3lwQlBPTmV1ay9TdC9oK0wyU0JhTENBZ2J6ZHZGQThsMDlhdGo1eGZLckpaZnVWSVc4WDluRGNIdmJ5M0hZQURMYkFPd01sZDl6L3AzTlpEalBGRXllNVN6a0NuV1NTZE9SMEhQV0s5V3RZa0xiekNOZFdCNmtBd2ZUNjFqdmF6aTFwRkZ4azk2akhLMXRnUEMwU0FHT3FnaWR0cWQ1cHhqYlJod3lqTEo5UDJqeTIrMG5TQlFqMDc0eWJKbHJkazJ0ZHZlRnh6NnFEODZUMlk1aXNia3BiUjZpVmRrbHNLUkJrZDl3ZktLK3crR09vUCtXZnZiRUhxUHhlVldwZXRwc001Ny9aL3JWVi9GcytwK0EwQTdBVjNHS1JQbEp2UlVsaU15alVnNlJ6SGFyclNCN2pCakFWVHIrL1dxeGRqWHA5T2xSVjlYSTVpczg0NzBhWVMrU2pEaldpTU5ha0hVYWNpWTFvcXpoZ1k1TnBIUTlqME5ETDRIaGhvRHR0Vk9OUFpOenRhTG10TUFHSUlCMEhwdisrOVRWZEpHbzVqN3c3cjFIYWl1TmNROTRGQUFBQTBqWURvS1cycmhCa2FHbG44SWZFN1ZzSXNBaDBLbjd3S3NOdDk2WWNFeERXM1c2c1NwK3p5SUljRlNPa1ZYdzJ5am5Wb0xHTXE3RW5UUTdadHR2V3RCZ3VCdG1RUVNqR1dPMEFjajBubDVHbHgzS2REWm5HT055bDBhTGluQTAvaFN1SFhJckgzcjJ3ZkVJV0I3dmFWSGlPV1o4V25JVjU5bWEwOGhqMGtFNmc2YUhsdjZFVjZuanlDcGJhQnBHa2FhVjVNWHpYbzVacEhsbW42VjZHZWtrZUorbStUTE1wSitnWEVreHY4QXMxR3lXdjNMZG9uY3d6Y3dnMUpKNXdvUHdpak9OQmMvaCt6eTlQNzBqRjBoeVFZL1N2TnhiUGJ5YUduRTdTTmVjV2g0QkFBM2dSRUQ0VDhhWHZjSVVBR3JNTmVieEVldm9QNy9BQnFOMjNxbzdmMXF0YkpKa3VIUERHWmtxUXY4eDBIbHVhWFhubGlUekpQeE0weXRrZ3VCK0VINFhKL1NsdDNlcFNSUmRIMXZjZVkrdEVJeHlHUHZ0NUR3alQ1djhoVk5vYmRRZjYvUVY5Y2JZZHZtZGZ6b1JWRERyaUYvM2tHZkFBTGR2WGUzYlQzWVk4OWNuL0Uwc3NYWTBxOXJtWkZNZlo4S2pzb2t6OGFHZTNwTk9sb0RZNTRVelNWUXhtNWpjRFdkZXNhZVpCNVZ0TUR4TEJoQmg4eTVnVlpBb2pLNEVlRnRnVEM2RXlkUkZlWkM0MFJKZzc5RDU5YUl3YWpONGlRc2FrQ1kwTWFVeWRDU1ZudG50VHdNNDNEKzl0dEYyMEdaRis2NElXVVlIWW5JSVBJK3RlZThKNG15eEc2bUlPNEkzUWcvdWE5TDltcnBaQ3NncUVDVFAyaEExTS82Zm9UWG5YdHp3MytHdkM4cGtFaExuY3hLT2Y4QVVWQkJQUEwzcWpqYVpLRXFkRy80UHhlMEd0M3JpcGwreVdLZ20yVzFWMVlpVlU4OVFOK1pvN2p6M0ZjKzl1SDNjd0FrZ0dkZ3pBeko5T2dKT2xlZllYRmdRQzNnY1I4WW1PNGFISG9LMHVFNGo3M0ROWnVlSzVaVWpMUCtaWkdqSlBOa2tFSHVCclM0c25HV3g4c09hQk1WeEN3V0NpM0JKaWZlRWZFenRRQ2NSUno3cFY4VStIeEdNM1FnR0RNYzlQbldhNHMyUWt5WEJNS1ozWGVXam5zUE1HblhzbHdpNWZZTnRieU1ITVpZWmxaUUVPc25VR2VRSnIwbFQ2TWNvcUtiZWtYNEs2QVdjbFNpZlpLZ0tKS3lBSUdnRzVIYWovWlo4T0xaWnptdlpwQytMckFFN0dUclYvSGVCL3c2TGNMSzFwQkFHNVp6ekk2U0FUMkFGWXpHKzBkN3hMbkJEQXJPVko3K0lMUFVWYWNveHgzWjJQNy9BT0I2TmxpUGFFMnJ4SWJQYkFJWUVTRzdrZHpPdlFDc2p4bmpmdnBHVEtya0VrbWRwMUh6K05MYm1NSlJXNmlENWloQ3hJdEwxLzhBMmE4U1dXYnZadVdISHlVcTJNK0pYckpaRllzQVoxV045QU54cU5ldEo3NlpHSUJrZGFoamxtNUhUKzVxVjF5YWZHbW9peWV3Y2lwR3VzSzQxT0tTdDBRYnFFZlpnOXRqUXEwUWxvSFhsOUQwb1hRV3JPakZkaFY5OEs0QjV4b2Z5cGRGVzJia1U2bGZaTngrQ1liN3Ayb25pT0hGcHdvOGZnUjVHbjI3YXZIUGJOSHBWZUh0Qm5VY2lSUGx6cnIzTXhaMjJKMitnSFFBZmxTOFZSUlNhRzJGc2Y0YXZuQUpHYUFKeXBteVptTzBsb0VDZThhQ3RMd2ZFMnJhd0RxZHlkejVtdlBYeFJZYzVnQUFiWlJ5amZjQStjbmVvZngxd0NOZmhWY2VYSEQwWlBMOGFlZFU1VWowVGpudEpieSs2Vm9uN1RmaEhPTy9UNDFncmR6L0FCR2NiQ1FQZ1JTOW5KT3RHMng0WTdmbU5mbDg2bmt5T2UyUDQzaXg4ZVBHSDh5R0p2RW5YOTdVdlhlaWI1a2swTXRRaWpaSUp3YmJyek8zZnRSVjlUN3hlbTNiYXErRjJNOSszdDl0ZHlQeERZYy9JVVp4RzJvUGhCTEt4a2s2YWJBRDg1NWpUU3FWcXlGcm5YN0N5KzVWei9MSDFvU1NEUFA4K3RIMzdXWmlRUUJrSkVuZUprQ0J2UWR3RFNPbXZuei9BRTlLa3pRdWo0dVNkVE9uNVZYVjF0SkRIb1BtU0IrWitGVmdrYWo5OHFER0plOUlVanRIbHJKb2k3YjJIUVZSaGtsaDIxUHAvV2lITytsTkVWbFNySmlqYk50UTZaMkFXUVdneVFzOHdPMzFvVWFhOWZwWHowZllEMGoySzR5VEpCMGtvb1A0bWt3ZTBLS0s5dmJXZTNjMWtNdWg3MjNPdm5ERDRHc243RFhBR2FkZ1Zqek15ZlArdFB2YXJpc1doWWtOa3NnczBha3NOSTZBRDQxZURNOGxzelhzOWlNMXZJMzNUcDEwSDZFK3FpbitCeGhWcmQwa3lDUTBiK0VRWWpuN3N0citMS2F6bnNUZUMzWGtTTW8xbUkxZ2tlaGltK000dlpBSHV3VERaNVBZVDhTU3Z3ckpKcTZOTWJGWHREaG1URUcyWklrd0FOUFR0ejhpSzBpKzJ5aXhidEtoWElJSUIrMGVabmxKa3gzNTFuL2FtOW1XeTQzVmNoN2xDVkI4OGdUNFVsVysrOCt2UDBPOWJjR2Q4VEw1WGpSeTZsMFB1TDhjeEYxUUNJUlpZTHQwMWpjOHF6alhKTTYxSlZMSFNTVHAxTlc0WEFzVHFJQTNvWmNrcGh4WTRZbFMwZ3pDM0F0c1p1cFB4SGZ0OVJWZHppQmE0THBBaGRBSWdIZmw2NzFNcGJKbG16UnNna2ZFbWhUYkxOTENCUExrS2g5T2lxeXRrQzBrc2R5WnExUlJIRW5Rc1BkaUFBQjhBQitWY3MyU1JvSnFxUWpZS3kxQmhSQjJxdGxwcUFtZlcwQjUxTlFWMitZcXBkS0pGcFNOelFvRGRBOGZ1SzVGWGFMM05SWXpYVWRaWmhyeFZndzNCb3JHTGFZZ3F4VFQ3SlVrQTg0WVRJbnRQblFLRGtLdnUyeU5DUWZJelIzUXlkYVlMZndUQVpsS3NCdmxPbzdsVEJBMTMyb1hYdjhBR2lDNVZ0TjUvZnBVcjFrU0NCb1JJZy9FZWhrZWxSNDJVNVVVSzdkVytKcnF1ZTlYTGh2U3JVd3hVRXFkWTZSOE5kNjdpeFZraW1BdUtvRkVGU2RLaXF3MzBwVjJPdzNDSEkxdTRURU9wNXpITStYNjAxNHJoOHBjVHI2QWYzbjZVa3ZDVThxZTQ0NTBRc1lsQVNlNUEzK0lOWFhUUmxscWNYK1VLTVpiQXVaUnNxTVBNaEdrL3dDNmFBQzlxYVkrTXhJR2dHVmZLSW4xbWdNczFCbzN3V2llUWU3YU9iQWZBTWZ6RlVpd2REQmc3SGxFa2ZVSDRVMU9ESXRLVEFCYm4zekQvd0FmbldsNGJoZ01HalpBN0xuM2piT2pLZlFnNzk2N2pZMDlMWmozdEJDd0dwTGZMa0txQ1J2Vzh4MkdSYjRlUVNWWjNLQ0JxMmhXZHhFRHpyR2NTeEdlNHpjcElIbEpxbkdrWjdzQmR0NitOVFJaUFlWMWtwVWdOaFhEY2I3djBranUwWlJQWUNmalJQR01ibTcrRlUvMmdOOVRGS1cwcXU3Y0pwcm9GV3duaHI1UXg2aVAzOGZsUkROcCsvMy9BR29YRGlBQjExcTI2ZFlxTDdMUkxjVGZMS0ZPMi83K0ZEcGE2MWZoN09kajVSKy9uVFc5aGxzcUdZYS9kWHIzUGFyWTQvYVo4dVduUUFMU3JBYVFUK0dOQjYxZGk4Ykl5SUNGNm5jMEY3d3NTVHFUWFFOYXArQk9OOWtyZTljdTcxY2dBMzFxN0dYYlJVWlZJYm5SU09iMkJJbE5lSHVBS1cyMlBJMTFMeEc5Y3RiQTk2UGxTcHFBZTFUYTNGVjJuZzdVZWdMWlV5K2MxeFdJcGxpYnlzTkZBOGhRQldqS05CVHNxSm1wS3RXVzBPOGFVZGdMR2RvMkhNNmZuU3BXd1NuUXVaQ0s2Z05GWHJKWmpsQklIYWZwVitNVzBsa0NDYnhPdlJWNkRxeDU5UE9ZYmpWaFQ1Qys2UmNkUUFGNUdBVDY5NjIvQ3VFWWIzU3FkU3hrRnlWOFEzeXJIU0FmU2RxdzJIdUZHa1NDT1lwcmF4RFhJRE1lMG5ZblgwTTBtUFBHRHVTczdONHNza09NWk5HcnYreXFHWWhmTFg1R3N6eEhoNHRUcnJPM2JxRFdpNFZ4RjhxMjdqRWtqd01kejFWdThhZzh4ODF2dENSa1BhTi9QOVBwVnBjSng1eFI1ZUY1OFdUNldWMlp2aUZnQ0hCMzNIUS8zcFkrODB3eGplRlQyajRHbHJtc1RWU1BhZzdpWEU2VnB1SFF5MmpreitFU3NUb3VWWE1jeU1wK1ZaVkdyUit6OXdtMjRBSkthNkFtRnpxMDZiZ0ZTVDJxc1hkazVyY1grNDg5cnVDakxocmdBVTNMaFY0NTVwWlNmUVJWR0I5bVZOMUY3U2VmT0JwNkdtZnRWaTJLWVlIUUhFTGxHL2c5MFNzOTRZR3RCd1VXMWE1ZHUvNWFEeGZ5cXNrQ05ldnhvS0hKbnBlTzBzYmJGZkYxWTNFd3dzSTFqQzVXZnhUT2FRTXl3TlJKY3JycHZwWEV0MmJIK0phSk5sdmVCVmJmTnFvMS9DVm5mWTZVUGhPSEcwejNGY2k0V2RIdHVTVkFaUVJMRFhSVzMxK1JxbmlPS0tJdGxpR0Z0OHhZbWZBQm0rWkRDTzZpcVJTdlppeXpjbVozaWVJOTJ1VVNDVkt4MEJhWStVZWhyTXU4bUI4YUw0cGZ6dVFQWHVmM3BVYkZpQm9OZXY2Vk9UdGlYU08yYk1EOHVwcUYzU2lIYkwrZldoVlF1MENnQmZMQjJOUVJaTkU0bXpsYVBoWDFnRGVLRXRGSTcyVzJFa3lCb3RjdDdrbmxWOXU4QWhHVUFuNStkUXNXcGdkZFQvS1AxcVk5cElONGZkVzBtWTZ1ZGw1QWRXN2RxR3hGOW1Zc3hrbm1haThra211QlpyU3RLakxTdXp0c0NyTEkxcTVMSUFxbk5GR2pyT08wR3FtMXFSQk5UQ1Z4MW5MYlFLdDBibHJWUVhXaWJkb25haWhYUWJkdERZbUNOeHRIeG9LOVpLN2dqekZPcnlvd2k0WmpRT1BFVjZTUm82OXQ5ZWRDNHJBWExPbjJaR1pTREtPcDFrY2pvUnB5bWc1czZNVWhXcTFhdHNHbk9DeDlrakppTFFKMnpBUWUweDlSNmcwVC93Q2tXbTF3N2g4MHdoMGNFY29JZzlkUGhUd3BzV2JhRk5pMDl3aEJyMjJxdzRJaGdGQkptSUdzbm9POUdZV3prZktkRHpCMElQY2NxMVBCOEJKTEJzdWhKYVBzcU5EQjVFbWUvaE5iSTRWeGJrWmN1YmpUUm5jWndNTEh2WDkzL29Bek5NYWtLRHpNNmtnVW00cHdzcjluVWJnOVZNRUh6NmpsclhwSERiMXBISnRXajd0ZnQzSDFjNkdZUDJSMWlsalhGdUY3ZHEyQ3BKeTVoSlZUcVFPUUUvQ1QxTlAvQUtlTTdpMGRoelNqSzMwZWFQYUs2N2Z2bFRMaHVJRXpjTUZWa1FOVHJ1eG8zam5DWFJtS0tXVWFsZ0NRdXNiOGgzclBpMmQrZXdITWs2YUN2SXo0R3BPSjYrUEt1NGpERlk2V0RycHIxMWtjNXFmRk1mbThBMUoxYjlLV3ZhWUFrNlJyclFRZWpHNFI0a2NrSXpueStCbXdHUWdtQnBCUFdmMG1sbDRDZERJNjdWMTdzOHFneG1sbHRqeFZLamltblBBSGZPOXRHQU54Q3N6QW5UU2ZsU2VLWmNFVUc5RThqcjZSUHpvdzdGbjBhZjJoeFZ5NmxsbVRLVnZEd2pYd3JieUV5Q2Z3N2RqVnZFc1k3Mmd0dDI4Wk9aUUpWbEVOSG1JL2MxWmhCblJGR1lNTXpvQ3YyVURFcU84cXpIVHJWK0V0djd5MjdlTkd0cUJyQXRzemlTVjNNcWhIcU91cnBwS2pSSEp4alFaZjRxTGg5OTd1QmxGdFMyalpoYkdZK1FiTUozOFhuV0M0dGoyWWxRZFNjekhxWi90L3RwLzdRY1dCU0JzQzJVVHY0bkFZK1ErdmxXU1Z4ek1takxTcEdidDJkc1d1ZFdzOFZTMStkcWpCTlRvNnZrNHpFMFRnaEVrRVRzQkJKTStWRThPdzQ1cVQ1alFVenVzcWFuZXJReCt5T1ROL3RTRmZFc0lTZ2M3amZ5L3BTL0NXc3hJclFIWXMrZ0kyUFNsR0J0UXhPeW5RRStlOURMRDRHdzVQdGFaRy9aaGZJL1dpTU1QQWVwMEg4bzMrSitsT1A0V3hrS0Z5N05IMkYwQkJuZG8rUW9LOWJnaGVRMi9yUVdKcmJGZWRTVkE2V3AxcUNXNG93MnNvcXRyYzFYaUlwQXptdVdocnJVM3QxOHFVdE1wYW9pRTFvZ1ljbXBXRW81QUFLS2lTbE1UWFVJTlRzMFZpb05CeVJRcW1QRjJoemN4QjJqZnZ2MjdEOUtNNHhqRnVXTEtBZUszQytZeWdTUFZScFJUOEFkYmhGMlVVQ1MwVEt6QUNqU1NUQWo5S1pZSEFPZGJDZTVRZi9NOEYvUTdKL3dCSW52VFk4TW52MFN5NTRSUWt3M0R5cUE0aHZkaWRGWVptWmUxdmNlWmltU2NGUzZWS0NGMGhyYkZRWTVtUVNyejA1MHo0ZGdjS3R5R202NSsvY0doSjZBOCs1cXppN1pYQ0xrYTJCQnRqd1I1TU9mbDYxZVBqcStOR2RlVzVTKzEvK0I1NFpidlFMaWtrZmVBakwwR2JuNWQ2TS9nd3FaQWRDWTJqUWZkNXdkenJ2SnJMMnVKWXFRbG53S05nb0JIbVFaazl6cjNwOXdyTmJRdGVkZHpKbUo2NmMrWHlwNXdsSG83SkdQSGIyRTM3cXV2OE9DQUR2bEdpcU5UOUtTWWkvYXR6YlFFekRIV045dk9CMTVuWVViaWNTZ1V2Wis4REt4NHl2K2hlYW5tZW5sV1h0WWtzeGxEOEIxMTNxbU5KZjU3TXpsSkttWFkvRVNWRU5Fa3htM1BVNmFtbDJQdHFJaElub2YwRk1NVGNPa0w5S0J4RjhnRmlZQTdqOWFyZitVTENUZGIvQUtpakVvb1VrcHBHc3RXYU5yU1JSL0VjVTd5QzdFSFdDZnkycGNyRUhTdkp6WlZONi90L1k5dkJqY1ZzNFZxeTNZbmN4Uk9Idkt4OFdsVnNJazlQbjVWRm91cGZKUmR0NVRFMWRnTVQ3dTRyeElHNDZnaUQrKzFEYjFJckZjdEhTVnFqWmNLNHNxbFFZZFZqTDZLSVB4QUVIcFZtTzQ0aUFtMm9VbHBPK3JFZ2t3ZHZzalRyV0tGZEpxbkwzUXRGK0l2RnlKMkFnRDk4L3dDbFZWelVnbnArZFJacVd6aTFab2kzZEEzb0FtdmhSNWdjYkdaNG13MFhUdlhNUGlWQnp1U3g1Q2dWV21uRGNCbTFrQ09aK2duU2FhTGxKMFRtb1JRWGcyOTQyZTZQQU5WVGZNZkxuNjZWeFpKOFNtamJWb3I5a0F6M0RFK2U5U1MrSk1xTlBUNlZzaGk0N2s5L2d4eXlmQ0ZpM1liU1FacTVTU3dtcmpjUm0yTzlNTHVDbDBPZ2tUUEk5K3hvT0RmVHM2V1JSN1F1eFdwaXBuRDZUUkw0RHhhR2lHdzdBVlJZL2xFWlpVcW96OTFETlcyZTlYWFZZSFVhVllBcDVhMUJ4VjltajZtdWdjRFdvdGVpanJlR01UUWwvRG5VamxTOFdjcHE2Qmg0cXF1cUJ0Vm9mVGFwSy9YNTBLUlMydG5xeWdtM2JWNVlLQTVIcENyNi93RGxWR1B3cjRtNEVuS3FBVDBCOHV2TDBvMXVMVy9DVGxrblVEU2VTeVRWM3ZMYTJ5d0JBSjExSjE2RW5XSzAyNDlMZm84ek82Zkppdkg0R3phdDU5U3lFRU1lWmthZDZxeGR5Qm11V1VZa1pqRW93SFZvTzVKcU4yeGR1bk14VmJTNmdjaWVYbWFXY1V4VEJ0R005WjF5aVFQaWN4STdpclIxMnlDVjlNTi85V3MybDhOc2hqeW1maWVuYWhUeEhNSnV3VDkwc051MERTT3hvWCtBWjRiUVNLNDNDM0hPYU8wOUhKeC81Yks3MXRzM3ZCZDhVeUNUclBuVkY5N2pueFNTZWZYdlYxN0JQMG1xcmR1NldFS3hQU1ByL1dwU1ZQNE5FSmNsVnBnK094Q1cwOFgydVEzUG5ISVZtc1JpTXhrbWZuUkh0QThYQ00rZHZ2RWFnSHBQTWp0cDhLVXpXSE5rY25SNmZqNFZDTit5YnZWSk5mRVZ5S2dhemhGZkUxSUN2aXRjY2NSYXVYdlZBcWVhdU9KTmJIS29rVjhEWHhhdUNmS3hGUTFxYzF5YTRCR0ttaTF3Q3JsV2lrYzJYWWV3TjJiS1BuVEt6aWxLaEZXQUNkZXZRbnZTcFFPdjVmT25lQjRRV1RPTGlnalVhNWg2a1VWS25vamt4OGtSeWtWSUtTSXl5U2Q2UHdtRkw2TUlZY3VvNnFlWXF5NGppY3E2VnZ4eFRWK2p6cFplTXVQc3BYQUMzQlpnWjFnYmpzYU1UTXhVUm9OUjVVRGJlNHAyUGJmU25HQXhweTZxREd1Mm8walR0QUhLbmlvdDFFVEpKMWIyRE5oSERBbFNBVG9TREI4anpxN0VabEJqOWEwUENvdUt5bGo0byswZEN3SU81MG1LWGNkNGV5QThxMHdVVmNmWm1uTzJyRXVHeEU2RUNwM2Jhem9JcW0zYmlESU0vSTlEVnJXWU1nMUNkMXMwS2t6N0ZXSkdoZzBudUxjVTlSOGY2MDZ4RndFUm9UU3kxaU5ZUHpwSlFYNEs0MjYrUVYxWGNiY3dkd2Z6RlRTd0RzYUk5NnBNTUpxOXNLaDFVeFJXUDQyZEtkZkp2TGZzcVNaWjRTZWF3WW56aW1yaTNiWEtGMElnRGN0MkFxakg4Y1ZXM3p0R2dHdy9XaytNNHdTQ1NNbytaSG55SGFwZmRMK0loa1R5OWYxTE1YZTExMUkyWDdxL0RRL3ZVMGp2MkFYbHlUSjVmU2FJL2psSWtRQjFjeVQvQUNxRHQ1MVEzRTFCMGlQeEViL3lxUHFmblZ2cXF1aE1maVRoZXhvamprSytEYXhTUEVjWmtFVzh4UE5pTkI1RHIyaWs5N2lGellHQnZHODkyTkI1dmhCaitucjJ6Vll6R1cwNTZqZnNPcC9UbldiNDM3VE1VS3BvRHBwK3RLTVZpaXhpU1J2cnNUMUlwVGlyMlk5aG9LaGt5dXRtN0I0a0lQU0twbXBnVkJCVjRXc3EyYm15bGhVSXE5bHF1S0RRVXo2SzZWcWFyVThsZFFMQlNLK0FxLzNkUnkxMURXZkxZWThqOVByVVh0d1NEdU5QV3JNNTU2eDNxdGpyUE9nMGNySVJYWXJvcVFGQTZ5VnBhdHkxMjBsVGNWUklSc0VlcjhKZWNId1RQUVZVUlRuZ2pBVDE2L2xTZERvblo0bzRoV0dWaHFHMk92eVAxODYwL0RydnZVRFJyc3c3L29kNkRiQ3JlV0dIaUEwbzMyZktvdnUvdnpNSG1PbzdqcFdyeDV1TWp6UDFERmNPU1cwTUxPQ21pRGdjb2tDZEowMTA1K2xYSmRpbzRmaUpGeFpNS0dFMXY1bmo0MDVPbVVjTXhZUmorRW5WVHRSZkg4TG10d2trSFVEZlRtQjZtYWphNFlXdXNkQVB0YmlEMGc5RFZkN0UzVU9ScEFCMjVlV25JMFdrNUp4ZXlqVmJGZGpoRjNJSnR0M2tmczFSaXJmM1RvUnQzN2VkYW0xY0NpVllqL1NUSVBrZGo2eFFXSWYzaFB2RXlqcTJuMTErdERjdXhZWm0zWmpNWFlhZzdKTTY2MXZMdkRFeUVyNHgyKzE2Zm9hVDIrQ3E1SnRzRDJQaGIxR3g5S0tnbnRNMnh6cXFZaXNXUVQwL2ZXcFhyUkZhREQ4RmlRd0lQWDlhWDRyQ01wMDFwdUNhQjlaY3V6Ly8yUT09XCJcclxufSxcclxue1xyXG4gICAgc3JjOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVdGUlVYR0JnYUdCWVhHQllYRnhjYUZ4Y1hGeGdZR0JjWUhTZ2dHaG9sR3hVWElURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeTBsSUNVdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFMNEJDZ01CSWdBQ0VRRURFUUgveEFBY0FBQUNBd0VCQVFFQUFBQUFBQUFBQUFBRUJRSURCZ2NCQUFqL3hBQS9FQUFCQWdRREJBZ0VCQVVEQlFFQUFBQUJBaEVBQXdRaEVqRkJCVkZoY1FZVElqS0JrYUd4VXNIUjhCUWpRbUlIY3BMaDhUTkRnaFZUb3JMQ05QL0VBQmtCQUFNQkFRRUFBQUFBQUFBQUFBQUFBQUVDQXdRQUJmL0VBQ2tSQUFJQ0FnSUJCQUlDQWdNQUFBQUFBQUFCQWhFRElSSXhRUVFpTWxFVFlYR0JzY0VVTTBMLzJnQU1Bd0VBQWhFREVRQS9BTkJUMWlTbkN3dDZ2WmlPT1R3T25hZUIyeUZsQTVLWVdPOFd1K2ZsR1FwcE02YW9MV1RMUW8yT1RzUmw5WTAxSHNtWlZLRXFXYmZxbUhKSUp0ekxESVI2TXBwcjlFdU5CdE50eWxtRHRMVkxWOEswcG1JUEpWaU9SOHpEcEd6a0tTRkdYTHdISXFsSmRUL0NBU1R6eWlpUlFVTkVRbENWVlZUd0FVUVJ1R1NmVWlBTnFiVXExNG1NdVFDK1pLbHR6RGdlYVl6ejlRcXFKV1BwMjl5S3RwUzVTRmxxYVd3T2FRVUs1akFRRDk1d2JzaWtsbnQzVExWclphUWVPbzR1OFk1ZFJNbHpQektsYW1QYVRjQThIS3pudmFJME8zS2lRdDBURUVuTkpEUHpTSEhvSVhIbmFXenA0TCtKMFdyNlBKVGNIRHh6UWVlcWVlWEtFVmZLbFNDMVFWNG1zRUpzT0pXcXg1QjRzMlowOVNFaEUxSFZrZUtTRHcwSEJ6eWh5SzZSTmxrQXBVSFpnWFlFYWNPQjNpTDgzSmRrb3hjWDdqRFYxV01PT1VqR2pWbDlvYit6aDArd0lOMlBWSW1BTFFlWTFCM0dGKzJLSDhOT3hJSjZ0V2ZEVStqa2NpTWpCR3o5cHB4OVVzQWZDb014OHZlTXpsN3FaZHh1Tm8wY2huajJZdnNLNG4yZ2VtbEVtRW0wdHJMcDE0Sm5jVTVTb3V4M3BKR1JIanlqWGtxTVVac2VPNU1kS3BGNFFzWEJCeXpEWmdpSTBra3FtSVRxU255SmhXbnBkSjZzNGJGU25TTXNHcnBLcyt6MlhESGdMdUxNMnFoTTFOUkpsSlhNSVlURWhPTkJZM0FVd2RzUWZQempKMnJSZXEwellkSUpmNWhWdkorL3ZkQ2RaaUMra0NKa3M5ckVvZDdOTmdYZkNjbGFSS3B3cEFVdGFVQWh3NWNrY0VpNWg1SVJFNVVNcFdVSS93RHFNdENjUmNEVEYzbGZ5b0YyNGtpQnFqYjAxZHBhZXJTeHYrbytPbjNlSHhZSlRlaE1ra2tPNmtiNEZUaGZ2RHpqSTFnbUt1b3FWekpNQTlXZHg4akR5OVBUcXd4bG82UEtwbnlJUEl3VlRTTU1jeEJVTWxFZUpFSDdQMi9PbEZsS0trN2xFbnlKaFhoZmhoNUhTT3N0YUI1czNmQ3FuMm9KaVFwSnNZOFZNSnppRFE0U3VZQ1lyWExET0lFVk5pUW0yampqNVNPTUN6RVJldFVVS1hvWUtBVXFURVNJbVk5RXQ0SndEVUp2RVV5ekREOE5lSm1YWm1nQkY2WlVUNm94ZVpjUndtT0FiT1NsR0lBb3hidHdHc0RiUTJzU1RLa2tJU0xMV05QMkkvZHZQMlJOcTFuVk9sS21VUmRXcVFkMzdqcDU3b3dtMmRzRlE2dVhaQXNUdjRlT3AxOTRaSmNuUnF4UTRya3pTVi9URkZPZ3lxTkNTbzkrYWUwU2VmNmp4UFozQWk4WlNaMHpuNDNtcVRPMFlwU2tnYnNTQUxjTHdsbkxMV3l5dG1UOStjVzFGS2lTeVZqcko1YjhzWFRMZkpKQTd5K0dRaDRRdlFzcFVXYlQyNTFxbEdVZ29Lalp5NmdEby9vOEJ6S01wWXJtSUNqZGlYUGkwYXlUMENtSWw5ZlZUazB4VmNTc09PWi95R0pJUjUrVVZTK2pOUDFoVitQa0x5WkRHK1ZueGNJcmpoQkoySTVTWW8yZlRrRUdZc21VeEx5aW1ZY3JEQVNHdkE4bmFwUXF5aW5rV2J3ME1iRHBsUTFWWGh3eUpHRkdSbE1DWEFBQ2lwckFESVFpWDBWVWxEVEZveGJycUtiWk9BdzhIaXVTT042aG9TTXBkeVBsN2FtTEFFeGVOT2pzUE51Y1VvbkhzT2QyZVduMGhMVjB5NUpPRllXUDJrL01CNDlwNjdFTUpMSFNNYzR0UFphTFZIWHVpTlROVlRLbkVKQ1VoUXhLZTdObHFRQWJuU0YvU0xhc29VczFVMU1xWWNMU3NscENsZnFDa25NRGlEQ0xvajBpV21VcWxKQkJMb0J6Q3JGa3EwTnJjNFRiZGtHY2UvaGU0MGxsODdaSVZhNUZpMm1aYWVTVGhSMFlSVXVSQ28yZkttSVRObHJ3eTFLVUU0c3cyRWtQdlpXVzhjWU5rOUdTRUZjdW9XeERwS2ZpR1FVeWdXT1Q2UUZ0SUtUMVVrMmxvRElBeWRUT3M3MUVnT2VXNkh1d0o0UWtCMUtzT3lBOTkwSkdYRVp4NWFabmFhZk5SaUMxRUt5VmljMkZ5WEp1UHJHNmtVZ0NFckRLV29BdVE0RGgzYlV4bFowLzg1SFdzcVVKb2NLU1VxWlg2UzEyODhvNkIrRFNvZmwyQUZrMkREZGJKdklpOFZoTjFTSTVJMHhkUjdOU1hVb0ZhaVJkVjk4YWlocFVnV1FrVzBBRUxhTkJDQy94Z2VRTU81QnQ0UnB3dHQ3SXRKZ3RWSnRBYVpkNFByWjdDRkpuRW1KNVZVaGtUcTFKTmlBZVllRkZWczZTc01VQWZ5Mmcrb1VYeWFCMUtpZHRNTkdmNnBkSXQzS3BTam51NTdsZThQUk1jT0M0T1VYS2xoU0NsUUJCekJoWFNTakpYMWFpOHRYY1Z1UHduNVE3Zk5mc0hRWEhqR0NDV2p4bmhBbEdHTEVKM3hjSmUrSnBrd3lBUVNoT2JDTGNNUkVreGVoRFJ4d1AxWWowU291ZUxVU2lZQndQK0g0UkQ4Q0lZb2xiNG5oRytPc0p6UGErMkN0eGl6elZxWDNDRjlKU0tuS0NKWUorSW5KSTRuU04wbm9CSVQzcGt4WDlLZmxET20yTktsSXdTeGhIaVNUdkoxTUJZMVpTV2Erak8wSFJ1WEtTWmlsWXBpUVNGTjJVRUpMRUoxYmpHYUtVMHBsVDBUY1UyYWhLOFpZbVdwUTdlRTM3V0lrWXN4Zkl4MFd0MmNycVptRXVTa2dEZTltam1IU0EvbXJUWnBmNVlDY2hnRndOOThVV2FTVkM5N0E2amFTbHFLcGkxTHZtb2trK0ppQnFRdnVXM3dtV1hNU2xUQ2t1SVZUb0ZEQkczSnlUaDYxYlA4Ujlzb01PMFp5aDN5c2JqbkNUcThhaTNOb0lvbGtXM1FMWVE5TlVEbUMrOEg1UUV1V2txYklIdXExQitrSHpUS0FCVStMVkF2NHZweWhiVXpzUmRzN0FDSXluZWtQeHJzSmtUbEpWaFhZNkVXZUQ1ZTFDZ2RvQmFYN1NUa1FjK1JkaURwZUZNK294RUJWaUJZZ2czM3RFS2ljNlMrYmVkdzN6aGVMUWJIOVFwSlQrV1ZLbG45Q3JsQk9xU1B2bkU5bmJXVExXVVRRV3RmMzlZU2JLcXlteDRlSWgxT29FemhpQ2drdHVKRDhrdVEvbEN2V21NbjVSNXRTZUNxV3VXNnBTVmd1YmdLekNUd3pqVEk2VXJLY2VJSlVHdGs2alptR1l5RGFQR1E2bVlsSUNSaXd0M2UwN1h5emF6NVJBVmpvVVNBQ29FV3l6RGtmQzRjZUppK0xIelFzNVV6cW16TnZTNTFOMWlXQzB6QVpxTlFraGd0RzhBNWpqd2gvSXVDUWJOSEJkaGJXbVNsNGszQUxFYUtHNCtFZFg2UGJjVGcxS0ZKR0hVK201cmpSakduMDhrUm5HbG9ZN1FYQytUTU9JUlBhYzk3ZzJNQlVFdzR4Q1pONUFMNGhkWE5KVVhpbDR0bW9KVVk4VkxBaU11d3JvOTZ5SzV4Q2d4dVB2MWlKRWZKRUE0a2t3UHRNek1LUkx6S21MY29NUkxncE10b0lMS2RuMHlrb0dOV0k1bmh3Z2d6UU9VVkttUlN0Y0VJUXFwaXY4VEFwVkZhakJBR2RmRXhXcWhmaWoxSzRBUmdpY282eFppTUJvWEZtS0FjYVNvelBMMy94QzZwbU5CTlROWjMxUHloY291WTBSamJKbzgyaFVxUlRLbWl6TFFQTUtKOW80cE1xTzBWRzdraytKanRYU3NZTmxMVnZtQnZJSitaUGhIRkp3ZFJzd0pOaG81eUR3bVQ1Rlk5QWRRMklrWkc4RTA5SXBRdDY2OG9qS2tZVkFuUTMrUmh3bFRpMEtsWVJWU3lXTG0zemdtZE4xMU9YMU1lWWJFbklaL1RuQWsyZG1yWElDSlRsNFE4VjVMWmNrcWU0QUhlV2RIeUFHcWpvSTlWSkNiTmhmZWUyZkRSNEo2UHlsekppWmFHeGwyVXE2VVAzcGhHcDBBNVIwS3M2T3lhT1FwVFkxS0IvTVV4VXNrWEpPZzRRRXFRcmRzNWpLazRpQUFrY1ZQbndiNW1QcDFLd2M1ZzNBdTNNaXdQQ0Nac29zOXdtMmpBakozM1A1dzEyZnNTYTJJa3lrdHZaUkhMOUE0bS9DTzVMeUhqOUNOY2tsaGhJVWNyUDZDOEdVNjVxZGNPWUxFWkhQdXcxblNFSVNvQm1BdWNnVCs0NWs4M0xic29oc3ZZMDZxVTB0S3NJendwSkxiejhJNXh5dWVrZy9FanMwL21TM1VHeEhHWFl0K2tnMkw4b24wZ3AwZ3FDeXlneFNHSUpTb2Q0bkloN1BuSFF1akhSdE5LSFVaU1ZuV1l5bCtEWEhwQjNTUFk5TFZTY0JuREVIWlNVS2RKT2JXMTEzeHV4WXVNV3ZMTVUvVlBuWEhYM2Yramh0TlBBUXJJRXJUaDRNK1hwR3QyUHRVbEFUa2I1V0lKRE8ydWNDYlgvaC9VSVlTaUp5ZUNWb1UvRUxEZVJNSmhKblU1ZGFTbHMzMDV4bVNjUDVOYWttYmpZQUFwa2dLZFRuRzV1NUo5TE40UTkyVkxkWWpuK3o2aVpqS3BTVkxHSjJRQ3A4bmR1QmpkMHRhbVQrWXZJTjJReFViNkR3T2U2RzhvbEs5MEhWc3hsSG5BZ1ZBVzFOdlNreXhPUVV6U3NrSVJjbnVsMXR2QjA0SGM4STlrZElRRmRYT0pRM2RXb0t1TnhzN3RFbTFZNldqVnBsdnJGcUpjTDZEYVNTUzZGaElQZVZoU0FOQ1hOaWQyY0cwTmVpYVNFL3BQbU40M2lPc0F3cDBSWk5sR0xwV1VWMUsyQk80UVJMMkJ6WmNEcUlpMlhNSlFrbk1nSDBnZGFZYWg3UFFSRUZ0RmFnMFZxSmptZ0VoRWt0ckZJbXg4dFcrQUVLU29SUHJvVnFuUlgxL0dBY01Pbk8yTVJNbVYyVUZURS9xVVhjOGt2cERHaUxJUTVmc2krK3cxM3hoYW1hcFUwUGNnRStKdS90RGpveHROYVZkV3BpbGozcnMyOEg3RWE4TlhRalp1OXRiSUUvWnlRNVNvWWxwM0V1YkViaWw0NGR0V253S0FiRGN1RG5pY1A3UitoSzJhRElTRWpDbnFBcHMyeFpEMGpuVzFlaW9xSnlKaFZobHQyd084VHdlMm1jUW5GeWJsK3dSektLcG5OUzUxRVNNMHBEZjQ4WUwyeFE5WE1VRTkxN0EzTFFybkxibkU1cVNMUW1uc25PcUZFTVNBTndFQnpGT29EZDdtSzFHUHBkakUwaG5LeDNzQ3M2b2xXcDFoc2phNXFwNlVURkhxZ3hVUDJpNFJ3Qk9aNXhsRXF0RmtvOWszWjRaZ1JzOXU3ZWtsYnkwWkFBV2Z1dXphQVg0d2hxTnRyVlptSEVsL01OQ0ZZdkVrVGxEWHdOeENPTjdHNWVCNUtyM1lMRERpU1JjRkpkK0NvM1VycFJOVElseVpTZW9DRXN2QVdDN0JsSnRZbTVOeVMrY2N5Uk14RDVROG1iUlgrSGt5Z29oS1VxS21zU1ZLVmhEN21HdkdPaE53ZWpwUmpMczNsSnR5aGtKSlYxazZhUmZFQWxEOGxGenpJUEtCNnpwNnBmKzhaYWRFb0NrSUE0Qk9maVk1dVp0ci8yNTN0dnlpazFLZFQ1ZjJqUS9VemV5ZjRvbzZBdnBhQmxPV1R2Sm1lMW9ybDlLa2tmNmhQRHQvTUVSZ2pWQTVlSDI3UVhSVlFscEpFdEpQeEtjbm1Ca0RDU3pTWVZqaU5kcnJWMVArb3M0MUVwbGh3Z0lBdXBTV0F1U3c1RW5TRUZQVllGZk1DQ0JXRXFDeXR5WGNxTi9OM2doTWxFd2hUcHhiblRmdzN4MEcyd3RhQ09qMjBVSW5kdFFDRkpVQXI0Y1hldHVPNW9yNlJUa3FCS1RheEhOMnQ0UVZ0RG80eUJNU095ZFJweGFNN1Z5RkE0VHBBa3FZRU90bjAwK3JBSVVmeTdBN3lvazNHOHdkcy9hNjVTNWFDVXBXa3JDbllBcFVFRmlva1dkTGpkQlBReWVtVklWZGxIUE1XY2tIekNmWGpBVXlpVFVWbUZ5RWtYS2VBTE42UUtPOEhSOW03U2x6SEV0UVZoWjI0dTNzWUpxVDJUNWVjWURZRzBEU1ZQVlRBNFBZeERYdGRsVGE1dEhRS3FXNmVOajVFR0t3Vm1iSStNaFRzMm94U2tid01KNXB0N05CZFJTclNrS0tleWNqcEdaazFCbExJMEJMamhyRDFGU1ZKREd4alRQR2s3K3pvTjFSNERIaWtBbG5BdHJsYlNMNVZPK2tSbVVwZy9qMEI1VmRXSjYyWmhBUDdoRVoweUx0cjB4NmtuY1FmTCt6d3NwcXAwc2N4QzVNUHM1TCt5a1oyV3FKaUVSWE5pSFd4a0tDL1kxVmpuSnNTNldWNU1UNTNobFdGSVJNV252ZDB0ekI4N0NFdXpuU2x3U0NUcHcvekRpU29rSkRweEtWMmhZRWdzTGpLTFFiSlA3T3NyUTBvcCtHVWhQOUtQN3hucUdiaVMwYU9hcTZod0htZjdBUm10aXlTWmpFV0JMK0VWaXRNeWZLSm51azNScFMrdW5BWVFqQmhIeEJ1MzZ0NUdNSFY3TEltWUNHVWN1TWRyMnd2RVFnNUYzSEFRZ3Fka0ltcVFzV1VoU1NQQWd0NU9JU3VTMk9zdkYwY2VuMHhjN3hZODRHWTdvNkowdTZQbVRPS3dncWxMY2xoM2J0Nk9QTXhrcW1rQVU2ZTZRZU1SbGpyYU5VTWlraFFGUllGeDhwRVZHSmxTYnhNTVJFQW1JbTBkWnhkSk9GWENES3FjRWdCeVN3WWFlUDBoY0ZSSUZ6ZThCeHQyRlBSNnQxWEplUFRMdEVrcitoajNyUHZmQkFRd014Z25yUXpIN2JMNXhSajBpTHdHZ3BueDdTcjVRNTJlWlFJZk1hOW9ONHMwSWc0Tm92azFDeGtmUWZTSGc2WUdkQXEra1JVbE1zS1NFTVNXd2tHNlJtTXd4T1VaaXRxSlpKWkpJdXpzTDI5TTRUTG1FcVNWRnJpNEFIdEI4K2tVUnd6ZjcrN1F1VGNneHBJY2ZoWlJwa3FEbFRGeTVETmtBUFh4Z1BvOU9taVpqbGpFejRzZzQxejFoVE5sVE9yY0t0dTlJTjJUdExxNWFrTmRUZWoyOHpCUW94cTlwRXprVDhJSmxsSnduWENjanVqcWs0RXB5Tnh1Zk9PUXk2WXJMRTl0V2daaG9CeE9VZHZwQk02cENWdUZCS1FWQWs5b0pBTmk0TjlXalZpaTZNWHFwcUxUTUx0cW5WYVkzanYwUHI3d1BzcXU2dFF4T1VFM0dvNVJyZG95WllTeWxNb0xzNEp4WWdjU1RoRmd6K1pqSGJScHVyTHB1a3UzRVA3eHR4dExVdWdRbHpXamZVZTBLWXA3TXNxNDRpUGFDNVJRdXlneE9yaDQ1dFExNmtGMEtJUDNwR2lvK2xxV3d6VWVJTGYrSkRSV1dCSmV6L0preStuazNhWTJyNkpJVVE2U3oyVlp3YkY5NGJkempuZTJObnFrVGxJeE0yUjNqUjlIL3dBeHZGYlRwNWdiclNuK1laY2pHWDI5Y1lWc3RJN2sxSmR1RDd1QjhJbEtMaXJMK201clVoSW1vVitvQThRU1BrWXZFNUcvMUgwaGZKb1pzMWZWUzBsYXN3QnV6ZmxFbGJDcUFXNmliYjlpdnBHYlQ4R3A2MXlvTG9sU2dsTHU0UG1DQmR0NGgvc3VsVGpScTZnZCtvakV6Q1NsM3VMaU5EMFVxRDE4a2ZFb1JQRXJCazBtZFVtemhqNXE5ZzBLcFU0b21LQXQvZUlUNS9hRGZ1UHFZOXE3VFgzZ0gzaWlXMmlVSTFFOG5UWFVyZWxKOWY4QU1lYlA3ekM5OVI3UjVUU3l0U21Ea2o1aVBObVdXKzRFL1NEdzlwR1NwTVoxQUMxQkJZaktNanRub3JKVXQwQW9kd1FsbUlQQ05NSnpLQit4RkZZdnRFN2dEN0NFaXZzZUZvNDF0N1pmVXJVblJLaWtIZTBJMWNMeDAvcFZSUzVzM0NySWhLbkJ1TFlWSHhLVEdIMi9RaVRQWExETWtzR0wyYTNpMS9HTTg0VTJib1Q2UW1RcHVVU1dZdHdlUmlvSXUwU0tFV2lRUVl2VExpekJCbzRHd21KcGxFMjFpNUtZTzJUSmRSNU41d3lqYkEzUXBUYk1aYUdOL3dCRnVqOHVlUXN5MG1YaEJOaG1kSXltMktYQ3QyWng3TmYxRWRLNkE3UFhKcGlabGlXSVRxRThlTjh0SWFDYWtSenpxRm1INlk5SHhTemhnWVMxM1NPMGNMTTRKVmZqbkNTWVhiMmp1ZFpReXA0QW15MHJBMFVIOFl4ZlRyb3JKa3lldmtwS2UwQVVoeWtQWTU1WGJ6aCtJdVBNcFVqbkU2R3RKVmdTc0pPOWc5Ny9BSDZ3dG5DQ2hUS1Vqc0lVb0JzU2dra0FsMkJJKzhvak5lN1JwWFI3S3FVaEpTZUxlTUQwVWdsVGpJSE01UnFkaTlCS2llbHlVeVVzU01iNGxIZ2dYOFMzakdsMkgwS1JTcHgxUkV4V1lsb2ZDKzRrZ0Z2QVJXR0p1Vk1qUE5GTFF1NkNiSEptR2ZNN3FRY0wyQ2xGcnBHb0FlKzh4MFFUSmFBNmdPR0l0L21FVXlyS3Nnd3lDVTJEYUNCYTBLYlIrTWVqREExRTg3Sms1eTJHZElxaEUwQW9Va0xUdU5qdUh2R1hxS3h4aEkxdVBEVGo5SUxXcVdVQzZzWlVIdmtrSldwaHhLa2dQemlmNGFVc0VLSkttR0VqUTZ1OFRqNzA2THFLeFVtWnFjZ2c5a3hVdXBWa1E4R1Y4b3kxTWJqTEVNb1dWVlUxaG5DdWNvYXMxUnFRUkxxRkFXdDR4TVZKTmlmV0E2V1NGM1dvdHVFTnBPdzBxSFlKNDd4ekJEdEZJVHlOYUJKeFhZTExtcVNyRWhSU1daMGxpM01SZC8xS3AvNzA3K3RYMWk2ZHNSY3RpOWprZE9VZWluWENmamZsQzhvUzNwaVJPWGhHZzZISUNxaVUzNlhQa0NZVDdPVkx4L212Z0NUWkk3UkxXQTBCZlUyalEvdzVrL25MVWRFSDF0RThTclpQSzlNMGsyZDJ1UUkvOG9OcjV6cFF0bTdKRERUZENTYk5mK28rN3d3cTVqb2JjU1BSSkh6Zy93RG9acWhoczJ2UWlXdG42eFFWZlJJZ1NobTI1bjIvekN5VE1ZK25uRjFMTllnYmg3bDR1bzZZazRES2ZNdkFsYk5XVWhtYkpXL2VHajZiTWhMMGluVEV5c1V0UlNVbHlBektHNGd4bmVsWVl4NkYvUzRIREttaXhCVWdrZjFKSC92R2Y2U1NGcVdnc1ZFeTB1d3lhelc1ZmJ3eHA5dmRZZ29tSUNpNFVBTE9wT1dkblluenloVFdiWksxSEVsVEN6YnVFWjU1WU50cnlhVmpsb1M0YnNmdmhIeGxsbjNad3dtVFVMRGE2UG41eFhMN0tWQm5mMGlGMldvOEVoeGlHUnZFNUlCU1FkUG45bUowazRBRkp6MDNYMDg0OXA1QUNuVVdCMDFQMGg3U1ZpMHdZaG9aYkhYZ0x0djhkM3JBMCtkTFFxekVqbVI1d1RTVlNWcExXVWt1ei9wTFBmZ1I2d2NjL2NDY2RHdzZMVVNaaVpzMllrS0tsQkljT0dSaE5odXhOL1NJMU9OaUZhR3loemhYMFVwbW9wUjFVQ284MUtKK2NNRWhqd09ZalQzczhtYnVUUWJTV0xHL3pFS2Y0aWYvQUlTRy93QnhIaG5lRzlJZ2l4LzRuZUlVL3dBUlV0UWwvalI3bUEwREMzK1JJNHNydlJ2dWlGWGdwa2o5eWo2L1NNQVZIRkd0Nk16Q0pYSlJiME1KZy83RDFNaTlwdnBXMXNJQUFaUnpPWnY3UUh0ZXVkZUhRTjV3b2tUMk9JM01Veko5eW82eDZVYVRzeFBIc2RTSzlLTG5PQ1pxMGtPSnFML0U0K1JIckdmcGdrbkVzdnVFVG5wNngyQkE0WkRuRmsyK2lNc0tUdXdtdGtvSUpVcVdmNUhLdUZ3SVNWSzEvd0MyRjh5UTNsRTUxSE5UY0VOL01CNkV4Q2o3ZUxGTXc0UlozT0kvQ0dlL05oRXBTOFVYaXRYZGdNeVhPVm16YzJnS3BvMXB1UmJlQzhOaUFMaytjZWl0U01rZytEeGtsQlM3Wm9VcExwRnV5SlFLQXByRU52eXREZVhMQXc0WFNvZDFUNUhkL0tkMEpxTmN5VytBS0NWRjhJUTRISjhvWTArMENYeEpVZDVabTUzaThXb3FtUW1wWFkxcHRvcG1neTVxVkJXOURaalVBMmVMdnhNc1c3RnJYbExmeGJXRVNLdHBqakwzRVAwYmRzTCtnaXNaUHd5TThLK2pubEhueE5vMjNReExKbnIwQ1FCNE9mcEdLa2RrREsvai9pTjEwWVJob2xuNGwrd0gwTVk0NmlhSjdhWDdCd2JIZ3IzL0FNUVVacmhmQXBQdVBwQ2FrQ3pPbWtrNE1ralFzUmR2UDFoalJUSFdwSi9VQ1BITWUwSkYzUlNlaVJpd0s3Wk1RYS9qRVpKZDk0TGpsckd0ZE1EM3NNVXVBOW9MUmhJbUVoSmNPQTl5TFc1dEZtT0ZtM3BXT1htUmhMdU45d0I2eG1uMHcwa1lVcXdxTGh3LzM0UVJPbjlZTGxsQ3lWNi95cU9vNXhCY3pDU2xWOXl2a2ZPQXlXTWVhNDdOaWVpQzVoZGxXSTErc2V5NXJhQTgzOUluVWpFSDFGdWNBcFV4anV3WFExbFZxRG1sanZEZk9LNnFwR1NTVHhJWXdITkdvaXlrRHFENlp4MUJzK2xTSHppMHFFdFFVblRQaU1pUEtQSnFTbStoTnVNUVVNUTVRNllyTngwYTZVSXBVaW5XRktCbVdWb2xLMllsOUx1MGIyYW55T1JqaGM3YUsxQktTM1pabUYvUE9PeWRIcTNyS2VVbzNkSWZtTFo3N1Jvd3l2UjUvcXNTVFVsL1k5cFNHQU9YdENqK0pGNkUvd0E2RDd3NWxTck9MajFFSi80aHpVaWlVa202aU1JdmNqUDNpalJIRjgwY1NTejVheHR1aU5MamtLMFVKaEhQc3BzWXlrMm53Z0hkM3ZyR3k2QzFLUUZ5RDNsS0t3ZENNS2JEd0JQaEVjVFNtajA1M3hMVlNWQWxKczJaTUw1a3gxVzdvOVkyZFJSb1dNS3dlQkdZK3NaMnQ2T3pVT3BINWlSOE9ZNXB6OG5qZHorek9Db21hczdSVk4ybHZJdGtOQnlFUXJKd3doQ0hIeEtOaVR3RUxKdE1BSHVURFRjbjEwTEdLZTVCSnJnbzNWNEFRVE1XRWhrZ0NFNlpMS2M2SExsREFBclBaRnZpMEVaMUpsZUtSOUttZ0Z1OFRjazVBZldDcGM4WmtXM2FtQmw3T1VuTldkbmk1TW1XbnNsUlpqZDdrOFllTXBMc0VxWVROMjFNN3NvQkhFQVA1NlJic29sYW1Xb3JCNzdsODlJWFM1QlhaTDRkNWEwRzlZbVdrSkdYcVR2ZzgzSjIraEhHS1ZJdG03S1VId3FCQXl6ZnlpbnFKbTZQazF4ZXhqdzFLdDhIUVZma1JTSlpjajErZktPajBJdzBVb2IzUG1USFA1YVNzaENSYmcybXA0eHY2OVFUS2xKR1NRM2xhRjF3QWxja0xGSHREUytmM3pnVHJzTXg5eGk2ZXVBYXM2K2ZoRWIwVmEyT1ppKzBlZnVIaXFXcGk4VVU4eDBwUEJqL0FNUzN0RnFJMXQ2c1NQVkJDbGFpRkhTZXVEQktja2dlS3Q1OFRCbFJOd3BKakoxc3dyVTMzOXMvbkdiTEtrQkxsUDhBU0I1Vk82UytzTFpxV2NIU0haTm9XYlJsc1FkNGpKSkdwTUdscmFLS2xOK2Nla3g4c09JUUpHV3F6UjhsZUZRTVFCajJaazhjY0Z6WnVJdm9MQ0lURk00R28rWWdlV3VQY1RrblFSMUhXZUJOMmpyblF3dFRoQnpCdHlQOTQ1WHM5THJCT2wvcEc4MkJXbVhKbVZTM3duc1MwUGF4TG5tUzkvMm1MNEdrN1pITEhrcU4zS3FjTjNZRE01RHpqQ2ROZWtING1ZeWY5TkRoSitJL3FWOHZDRU8wZHR6WjZ5Nmpyd0NSd0gyWWhLU3pibkErWjlHODRhV1pTZWtKSENvZTVsZFRMd2dQWTVFY2dma1lvcDZoU0ZKS1NSaFBaSTB1N2ZTSE8xcERxSkc3RU9hY3g0cElFSjF5Z0ZNYkpPdkEzQ2h2M3htbHBsc1UrY0V6ZGJONldwTnB5Vy9lbkk4MDZlRHc0cGRyU1Zuc1RBK2dMcEo1T3p4eTRGU1ErZkVYQjhJdmsxOHpDb0ZJVURyWnh1WWlIWHFKcnZZMzQ0czZYWDAwdWIzMEJSK0lXVjVqUHhlRVI2TnBLbUUxazY0aGZsYlAwZ1hZUFNNZ0NYT3UyUzc0aC9OdkhIT05JcWJpRGdnamVJM1k1ckpIMnNoS0xpekc3VTJTdEN5a0pKUS9lRnczaEZNeXFLZTZHRE16TUkwODlLdENZb21MVmhDU0FRQzl4bWNybjcxaDFGQ05zektlc1Z3RUdVMUFNemZuRHFYU0pXYmhnTlI5SHRFYXFtQ1E2UzQ5UnpFTkhFdXlVc3J1Z1ZFbTFzdmxBbGF6RW5NbjdBZ3hFNG5nSURxZ0FRbzMzSitaZ1NTb01KTzZCcE1ndGljQWNZZ2FsUHhlaGgzczZoUk54NHljYVE2VVpKdG56TVdGdHhIaEhReHVTK2gza1YwS2RqcEJtSkF5ZHoveDdYdUJHa3JacmhJNStzSTlpTUFrL3RoaFBtZDNsRWsvYVVTMkR6VndKTlgyaWs2KzhUcVZRSFZLdUR2QU1SdXJLVU1kbnJzVTdpL3lnMEtoWlFUcmcrQ3VXK0NLMmRneGNQbmw3eHFYd1JIcVRCOXQxTmdrYXdpVG1UOTd2WVJaVVQ4UzMzQW55RHg4aE5nT0FqSGtkeUh4eHBIdElncVUya1ViZlNCaGJmRFNoU0VwSjUrbHZsQ3F1VUZFazNpYktMc1NLRWZQWXhiVUliS0tEQ0RFSThqMHg1Qk9JeE5BajBJM3hLVWh6QU9DS1llc01hcXZVWmFKV0xzSXlBM25NL2UrQVVLYUlZb0ZoRGFhVzRMWE9vMWhuSUtVelVoYWdFb0Z5ZDVEbjFJOG9UcFVVRUtTYmIvdldMeXJFa3ZxUWZNais4TkRzaDZpK0E5VlZvYVdyRUNVa1lnRGR1NmJjWDlJb21iT0p4YUpRb2dLT1JTV0tBa2FrQjdEZENwQ1E0SjN2NVgra1h5NTZwaW1VZXprYnNHM0hjTEI5N1FKN085TXVNS1BsTFN6SkJJMy9NYi9BTHpnVmNsVXU2VGJ3ZSs4R0RLeWNsQnd5KzJScnA0ZlgyaGNWM2RXY0lhQzRWUzJ1WDhMamtSR3k2R1RGTFNzcUp3MkFISFgzRVlyckhzUE9OOTBicGpMa0pHcGRSOGN2Um92NldGenNubWZ0b2VUS1pPcitoaXBlejBuSlgzNHdUU3o5RGx1T2tSMmpMSVpyY1k5YUt0bm01SnVJSk1vVkFNbUJGMDVTYjV3d3Bpb0huRGFtS2YxQlBoRHlWZG1iL2tHVG5VK0xOZ2ZJR0UrMHdVcXVHeTlJM08wcU9Xc0VwTEhkR2Eyekl4UzJVTzdrZDM5b2hrWEpHckJrVW5vQlZVNGNFMUpaUVZlTGw3WnVlY1Y3UTJlbEZMTFhpVVZyTmdHd3U3SzQyK1loWW5ZMDlRQ2drc2Jqa2J4SEQ2cWVLMGJzbVBHNmt3dlpRWkhBQm9KcUpsa0hoODRsUzB6NFpZTFBoRDgvd0RNQzFKN0tmRWVzUzhITHNqV0tzREFrMHVrSGRhQ1ZYUWVFQ1NidW5mQTgveU4wZTA4MWp3Z2pwRE0vTFNyZlkrR1hvZlNGdUtDNTU2eW5Xay9wRGc4djdHR3h5OWppTE5iVEZ0SGRSQjFTci8xTFFXbFFJUzN3ajBFTFphc2pCRWhWeVBHTXpZNFZPcUdCSEUrOEs1cTNpNnBNQnFNQm5JaE15TUNxZ2hSZ2VZWURHS3hFZ1dqN0RIcVk0NCtJM3hiTGlFV3l4SEhCbEJJeGtnN2pBMHhER0dPejdRWHNlU0RVSkpHUmNEam9ZZmh5cWhlVkNRRnVSMGkrUWROL3dCL1dDT2tkS0pjOVlHU3UyQnV4TzQ4M2dPbG1NZVY0bjA2T211VVdncWFHdDkzejlCQTB5Zm9MRDd2emlkVk9OenZlQlZDQlowRlVVaTlVMEFNbUR1am16aFBtc3NFb1NIVXhaOUFINSswS1FZMVBRNlpoSzA3MGhYbGIvNmhzYVhKV05LNkxLTG8yUlVFRzhvZG9LM2pSSjR2bndIR05XcVlBSEpZRFhkRlZPdDBoUXM0Qjg0cjJwSU0yVVVKT0Vsbkp5Ync4STJSU2d0RVc3ZXdXbzZTUzA5enRIeUVGYk02VW9XZXJtRENEa2R4akd6Tm5yQlp4Ni9TR1ZCc0VrWWxMRGNNL1dFamx5dDZCTEZCclpyYTFSbGplQzF4dWVKU3FxS3FWYkpDRGNNQmZQbkZWVEp3RU5rWXZtYmE1R2ZIaWpGMEZURm5NWis4S0twYWdWdmV6dERPa21oeGlCSTNDUE5vMDR4aFFKUFdERVhhemtoZzNLRDZhWEpVenBwUm1uOWd1d3BzbWFoVXVaL01nT0VsS2dSaVlseGNOb1kwRXV1d2dKQ1pEQUFCMTNZV0Q5c1g4QkhQYXVqWExMQlFaN1o4blpyRzJrZURhRXdXN051QStrSzhhazk2TlBhUC85az1cIlxyXG59LFxyXG57XHJcbiAgICBzcmM6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVRFaFVURXhNVkZoVVZHQmdZR0JVWEZ4VVZGUmdYRnhjWEZ4VVhGeGNZSHlnZ0dCb2xHeFlWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUd5MGxJQ1V0TFM4dExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQUt3QkpBTUJJZ0FDRVFFREVRSC94QUFiQUFBQ0F3RUJBUUFBQUFBQUFBQUFBQUFEQkFJRkJnRUFCLy9FQUQwUUFBRURBZ1FEQmdRRkFnVUVBd0FBQUFFQUFoRURJUVFGTVVFU1VXRUdJbkdCa2FFVHNjSFJGREpDVXZCeTRSVWpZb0x4QnpPU29oZFQwdi9FQUJvQkFBTUJBUUVCQUFBQUFBQUFBQUFBQUFFQ0F3QUVCUWIveEFBcEVRQUNBZ0lDQVFNREJBTUFBQUFBQUFBQUFRSVJBeUVTTVFRaVFWRVRZWUVVTWtLeEk1SHcvOW9BREFNQkFBSVJBeEVBUHdENS9pOFpVcjFIVmFyM1BlOGtsemlUcVpnY2h5R2dRUzNxdVVqWmUwVEFQQnZVcVhCMUs2MUZhRmdneFQ2bGUrRjFLTzFlY0ZnMEFET3E4V2VLbkM3Q0Zob0Z3cjN3K3BSSVUyQllEUUQ0ZmlpTXA5U2ovRFV3MUN6VVFwVVVZVWwxb1JtTlN0akpFcUZBSFdVOHpCQkFwd0U1U3FsS3hrampzSzJJanpTNzhNMlZhTmRJaUVDb3lQRkxZeVZsRG1kTU5FYyt2bjlsVzhIVXAvTjNYU1EyVG9TWDdxTENuU0hDT2dRWFU5MVkwcVV0MUhodmRHbzVmeGFlU2k4aVhaM3g4WnRJcTZOUGU5bDJvMENZSlA4QU5WYk55emdsN3lPN2Zobm9UZnpoVUdJcWNSdVZveVVub1hJdnByYUZha3VNeVZ3czJCS0pVTVdDNVMxSHI2WFZrY0w3R0twQXNDbU11dy94SHRhSnVmOEFuMlZlNHJTZGthYm1rMWVFbVFRMHdZQTNNOHo5RlBKTGpHeXVLUEthUnI4bnk1dkUwT0dtMjYxV0l5T2szaHRyYjJsVStXTkRIZ0c1R3BuZUpWeG1lWmh6Z0cvcGgzbzRmUWU2NFlUYjJlaDVNRmFva3pKYWZKRkdUMCtTdGVHeTZ5a2ZKZGg1YlBuT2VaT0tWVXRhSkRvY0JHa3pZZTZkd1dIcHZwd1JjV2NMU0l0TWNsZDlwc0NTQlZFeXpXKzJ4OFFWVVpaVkxxcmpBSEUweUJvVFpKYjZLT21pc3hXVVU0TVc2bFVXSXdRRXJXNDJtNEEydE85dlRtczdpV21USVRSc215V1RkcXNWaG1HbFRxZDBPSkFjT0tMQ3duUVcwNmxjVk51ZkZlVjBJWkdpVVZMMHlqTmNxaWhHaEVDRzBvb0NBNlJPbTZKc29nS1FDNjIzdjcyUHNsWTZSeHpJWGdBdXJ3YWhZelh3ZHFNZ0Rxb05LUHd5M3FQa2hocXlacHhKdGNTaUJxSFRFSnByU1VHSlJ4Z1ROSmdNeWc4QlI2TFVHR2pnYmRXR0VvU280YWh6Vm5RcEpISU5IS2RLSlNtSnd6dFFEZXl2c05oSlFlME5MZ29QY0RCRWU1RGZXL3NrNURSN01CblZNdGZCL1VBNGVFUjlDZ1VZTFFWTEhWWFA0U2RCSUhRYkQzU2xOMFc1S3kvYUxMVWk5T0lid01BL05xNCtINVI3VDZMVWRtTU54MGdSY2drRHgyOUFRc1Bod1NKOEZaMGMyZlRwdXBnd0g2N0dJdVBQZis2NU0yTnVOUitUMDhIa1U3ZndQZG9jYzE1K0hUSTRXeUhQbXp6SmtnL3QwOFZsc1JZeFA4L20zcnlSOFJXbEtOb3VjWUEreXRoeDhWUng1OG5LUkJwUkErUEUreU1hTVNCdHE3NklWVmdCZ0sxK3hEZzZzbFJZVDNpTGJjdkZibnNqbXptRUV2Z2RTQUxYT3RsbGFMbUdHa2FXbm9QK0Y1MkdjU0NScitVV2lPWFJSbWxKVXhvUmEyajZmbWVNWlRlK1FHeERnQmJpRG8wOC9tRUhKY1VIRnpuZnFIRDZrUjhsaE1OaVhjTFdFL2tNTjZOY0RJSElBaWY5eFZwUngvQVdpZElKODFENlNpcU9qNnJrcVo5a1pWbHJaL2FQa21tdUJHa2VJU2VXTW1sU2NkU3hwUG0wRlBHWTFDNlZwSEMreW96My90dWs2aUI0ck41YTMvTW5rSTZiRDZLNHp1OVFTSkRSZSt2UkkwYUpIRTZJNHRCdEhSUlpWZEFjNHFIWlpYRnVKTVF0WFdBY0lPaXBNVzlyUVhsa05icnpQSVR6TnZWUEZpTkZCVHk1eHVTMXNtM0VZa2FTT2tnanlYa3RtZVlDcFVKc0EwQm9ISUFDZmNrK2E4cXF4ZEdKWVZNSWJGTUs0Z1ZueVRESDJTalV5R2drQnNtd21ZMTNqb2xaV0N2b014eVpZeERvWVk3aUZhWWVpWS9LT1lQODJYUGt5VjBlamc4ZmwrNHJxakZMRFVTNndGOUVmSFlhSENOQ0o4NU1qNUt6eWlreW00T0pzR2x3RzVkQmovMitTbExNMGpwL1N4ZHV0SXFhVElLZytuRG9UektVdVVLN0pkN2Vpc3BiT0tXTDBma1dheFdPRHBnalJMc3BxeHc2TFpCeE91d29PaUpUd2lhYllLSEdrc0ZFNk5GV3VId3J1RWxvQk1XQnNDZVU3SU9YMHBWbGwyWjBYTm40aldIZHJ5R3VCNVFkZkpLMjJLeExCOW82SXM4UFlScUMyWUkxRnIreUgybHpYRDFjSlZheDRMNGFXaUhBMmUwblVjZ1Y3dERoOExVQmUydFRGVGVIQWgvOVFHOGIrdlRIWW1qckZ3aW9walJYdVZySERpNFRkcmdSNmhLRmw0T3JUQzVXY1FSMEtQaTNjVGc3bUJQai9JVlZvMG5jYTkxL1Jwc2x5Z3ZvUElqdXVIL0twTVhTYnhjSWNDU2RyZ2Vla3BxaGozL0FOUGlJWVk0Z055TGVrSkNvSUZ0VC9Qc29ZMCtUc3ZsYWFWZkFLdFVhREFna2I3ZVhOTjVYZ3F0WjBEckoyYTBSSlNWS2xkYmZzdm1GUERVbnVJRG51SUFCRm10QWtFK0pKNTZDMjZwbW5LTVBRclpQRmpVcGI2S0hINEVVMmxVTHpMZ2VxdHM3ekI5ZW9UdEpnQVFCUElKT25oOStTMExqSDFkbE12OEFrblVWb25nRDN4T212dE4wMVZxd1R5QUYrczdkRXZUY0JkY2M4dnNCQS9uTkxWdXdLVW94NG9sU3J3NmVXM3lUV0JhNnJWWlRCSmRVZTBlYmpIMVNRcDNqVTlMK2kwSFpEQTFXMWpXYXdnMGhJRG1rWElJME90cFRhSmJSOXdvdERXZ2JBQUR3R2lCbUZlUjNUSE1yT1lMdEc4Lzl5bEpIS1BMdW43cTN3bVpVbkQ4cjU1Rm1uaEJLejJSNkk0YWpMaWRRTko2cnRhanNtbTQ2a05TUUIvb3FmL2xKMXUwZEFPREdFdmU2ME5hWkhNbVlnRHFsNEJzVHI0SndCUGQxMGtTc0oydlBEc1JKdVpqaUlFZ0FUZUFkZW9YMEJ6WkplWURSSkpOaEF1Vjh2N1dZMDFxenFnQkxkQnlEUlp2Z2hEc3pGS05Oa2FBOWVkZ3ZKSENVS2pteUdHSnRiYnAwMVhsMEV6T01VZ1VKcFUybFZGQ0JXdUN3cEZ6dU5QNXVrY0RoK014dHVyU25WaWY1dW9aWmV5Ty94c2Y4bitCazFneldDN2tCODB6VHAxSEdUdnNURWVTQmhlRUF2SUFJMzZib3RYSEF0N3JyeU5EZmVaOWx5U1Rla2VwREpTNVNmNEpWR2lTMjBneE0ya2JnL1ZXT1ZVeTVycGFIQUV0SUlnWEVTQ05IUWR1aXFHTWlPdjhBUE5YV1YxaXdreDNYR0hlR3g4dnVwWjQ4Vm92Z204amFrZ3o4aU1jVEhSL3BkNDdPRmo2QlZ1TXdwYVlJdnYwTzQrU3ZTOTAzZVNOUmN4RXhvaDRsZ2MweUJNajdLT0x5SmNseUd6ZUt2cHVqUHRaQlRkRlNmVEY1RjFCakN2UXV6d3BScGpsTzZOUm9YUThPbjZUdWlWc1NoM0JORFZVZHBNbUxTYXJSTFRkdzNhVHVPaDlsWi9pUTFwY2JCb0pQa3F5dG5kV3VQaDBHSHZEdkV3VGZVY2dPcFJqZllLTTNXQUc2WHJ0NGhFK1d5dHN3eThNSkJjQzYyaGtUdTN4U05DamRPNUZZd29yZndzMkkzLzVVZndwQklPeGo3TFJZM0RSd1ZJZ08xNmtXUDg2SjltVnRyUUcyTVdQVWtHL1M1OUZHV2ZqdG5URHhsTy9zWnFoUXRIVlNxWWU2dktlV3VhU0NJSXNSMUNrL0FwRm5WbGYwMnFNNGFjYWE4L3NwQnp4dFB6V3F3blp1bzhjWEJEZjNHdzh1YXMyNUN5a0FYTkpPdDk5dE9TRS9OakVXUGpSdXJNcGxlVkdvUkxUM3JnYVc1K0NsbU5OckJ3V0ExTWN2N2xiV3VHMHFMcXJoRm9FNm1kdWkrZFpqVkpQRWYxWDh0QjlWUEZsbG1sYjZSU1RoaWc0eFg1RW5rVEpWM2xXVG1vM2llZUJzYWFlQmNkWTZLdHlyRGZFcWdHNGIzajREYjFoV1dOcjNqK0h4VjhrbmZGRThHT0xUeVMzOWlPSmN4ZzRXV2EyNVBNODE3QjV2aVJkamlHblJ6cngxYlAyS1NjWmdIVFUrQTJVYXVLL3NyUlhzUXpTNWJaYzRmTVh6SnhOV1R2eFBIakVGTXZ4enYvdWVmOTd2dXM1aDhXQ2RKUElXbno1Szh3dWN1cGdmNUxKRVFXbmhJTXpNM0pOa3pXemsvQm9NcDdMVjYzZnFFMHFaM2ZQRzcrbG12bVk4MXBxR0RwVUc4Tk52aTQzYzd4UDAwV1UvK1Fha1J3UDg2alhlN3FaUHVuOHB6Q3ZXQnExQUdNSTdqWXVmOVJNQzNMbko2SVRUSm9zczV6RU5vVkM1d0FqaDRaRWt1a0MycEd2b3ZtVldyWnpSb1FMZUJuK2VLdjhBUHFoYzhNTWZtYnBOd1ppWjM4Rldadmw3S1JIQTR1NGkrUklQREVkMjI5enFqRFFHUnBzNFJ3OG9Ic0Y1U0R0WnNlWEt5OG5Fb3diV3JvUktaVTZiYnlGYXpKV3kzd2IyMDJpZGVseWxxZFVtNXNDYkFlUE5SL0VEbC9PaWpXZitvZjJYT29ucFRta2xUNkRZbkVnZ0FURXFlRDRJSk04VmkzOXBHODd6djVGVnhxSXpYSitPcU9iNjF5NU0wdUV4emVFQ0d1QS9jQVk2QTZoWEdESWlSL1A1OVZpcU5Vek1yUVpUaklkQk5uZWk0Zkp3YXRIc2VINVNscGwzVnB4Y2FJN0djWTh2ZEZaVEw0YUJyYTN0Q2xncVVGellnaGVWeW85ZHROTk1wYTdWR2x5VG1aVTRlZXQvVkFhdzZyMWNjN2paOC81TUtrTjRRRGNlYVBXck1waVhIbkEzZEd3U21HTjdxc3FVdU56ak5nU1pONEd3VkYyY3JXZ1dMeEZTcUM0aUdpR2tDelJKa1RmcHFvNFhGMUdBdGErQWRZZ1NtY0xsOVJ3SWFZQnNia0ErSUd1cTBXUVpRS1E0bkFGNXROaUFKL1RiZXlaeVNRcFg5bnNwWlZKZFVCaHNRTGdHWjMrM05LbktuZmlEUWJjOGR2QTk0RStSbGJxblRKVEdBeXhyS2o2eHU5KytnYTBBQUFlZ2txWEpzYm5XeW56ekp3S0RRQklwd0kwa0dBVDR6Q3I4SGgvaHREbW1lRWtFYU9BUE1HNHZJSzNIR0NWbHUwWkZMRk5JRnFySmR5a0V0TWRZNFZ6NVlPVWRIVjRlYXBjV1diOHJiVnBCNEhmRVgzY04vdXA1RmtJSitJOFNCWURZbmVmQlhHUUFjQXVMUkVYc2RGYlUyQUNBQkFPM3F1Zng4RXBxNzBTemVWS053WC9JVk9GRWRGUVorQUNDU0dqUWs4aHNCejhMMlZubm1kdG9BamZiUWsrQStwWHpMUE16ZlVNdUo2WHZIMDhvUStuR2JxSWZGaEpldDlBTzArYk1lWWx4YVB5c0ZoSjNjZHlzemlxNHFhQ0NOdkFmMktuaXlnWVp0LzU1cjA4V0pRam9YTE55WmRkak1IOFNvOGRCN21mb2g1emh5eDdtbllrSzE3QnZBcnVZYkZ6UkhVdE13UElrK1MwZmJMSWhVcE9xc0hmWUpNZnFhTlo2Z1g4b1N1UHJzcGp6SlI0cytaY1hkUHA4MENtempJYnpOejAzUnl5eDhWREN0dVR5WFRIbzU1dll6VXA4SWh1bkxmOEF1aFByT0F1VVJ0UzNWQ2ZKYmZtaWw4azV1OW02N0s5bXFicVRNUlZQeEM0Y1RXUkRHLzFmdU1nOVBGWHRkeEpnQ1Rvc2xrWGFkdExDaWdXT0phSGdPa1IzaTRpMGMzS3FiaktrUnh1ZHc2WEpqeFN1TGJKV1dPZmQ2cEFCSENJSk5waTgvWlZHSFpMaWRoRnVmTDVLTmJFbUR1U21BemdiRytwUFZQMGhXREZTU2ZGZVFLYjlmSDZCZVJTRk1xd296WElMR3FRVmhScGtKcmo2cEpoQ1ljQkFJdWQrbmdadjZLYkxKdWdod2pTQ2ZyOUV0VW9PYnQ1cHZEVk5pbmFZa2MwT1RSdU5sVFNKVnBnYW5DUUhhYjlKM1hTQUZPbERrc21taDhkeFpzZXlXWjArTnJYbmhiWUIwMmE3NkEreTJHYVpVSkwyVDNiT0Ixam1PWUJoZkxLTkl0WDBQc1puWXFjTkNxVHhOQkZOeC9VMzloNmlKSE9JWGllVjQ5UzV4L0o2ajhpV3ByMjdSVWRwY01Xc0R3TkxId09udjgxbjJZZ3o2ZkpmU3M2eXNQYTZucHhEdW5seTlEQytZNDloWWJpSSthdDRjK1VlTDdGelRXUmNoZkY0eDVjV2kxeUxTSjJ1b1laemk3aDBKSUhuc2xtUFA1cDgrcFZybEdDTG5COGtRWjB1NCtleTczcEhLMVJvY0hRRFJFbno1cTN3ejVHcXI2TFoyVHpLSUEwdjhsRnNXaXpvdkEwWFRtQkd5U1l5Qm91RjAvcCtjb0E0bHBSeDRPd0NTN1JGdGFrV0NDOGQ1aC9hN3g1SFNQc0ZVNWhpd0lhTlFRVDZHUFBSTjVmSkFKUHBxZzVGSXdwOGcvWVRNUzZtOEhWbmUvMjdpT2hIL3N0Wmhnd2NUbS9yTW5sTUFXOUFzVmduaWhpM0FmbHFBa2NyM0kvOG1uMVZuaUhsa2hwdDVyaW01WTV0eFgzTFN3L1VkMzJKOXMzajRyWjNiOVN2bitZUGtrZ3E1N1Naa2ZpRVRQQzBDL1VmM1dXUEU0d0FTVG9CY2xkWGpZMm8yeDVQaEZSK0FOUUhrbk1yeVdyWC9JMFFOWEVnQWZmeVQrUzVXMXp3S3Q5K0hhMng1LzJLMmJLaldDME5BMkZndWg1YTBqbmNQZGxUbG5aTjdITmQ4Wm9jMHlJYVRCNkdRdHN4cDRlL0JNWGdRRHp0c3EvQVA0aEl1bks1UENoYmZaenplekxON0owQlNxMHdRNm80SGhlNzlFR1d3UFNUcWIrQ3hHVjVjWFZqVGQzWVBmT3ZEd21IVzNNMlgwR280Z3pLckRobWlxNnB1OEFIeTMrWG9xeGxRcmRtYXpESktueEhmQ2IvQUpjOTJYTm1MYStjcW94Rk4xTnhZN1VhaWZxdCtRVkMxN0MrdGhmeDVwdWJGb3hEOFFDeHJRSTRaSk81SmprTklBdDRwdkI0M2hZNXNBOFhNVzVhYnE3cjRLaFBGOE1UMGtEMEJoQ05PbTI3R2hwOS9WTnpRS0tlaTBjWEVRYkdRSWlTTDM2SXVLeFU3SW1JY3ErdSswN0xkaXNEU2RyNC9RTHlVbzRzWDhmb0Z4VlNFS2dLUWN1Tlh1Rk9BS0VYRFluaE45T1NBd2RVYjRUU0ptL0pLL3VXaXIydXh5aFZZWFdNRGtVNEE5Z0xnQVdpSmc4OUpHdXlwbTA0Vm5sVDJBTzRubGxyRURpRThuRGtUdmZ3S2xQUldIcTA5RW40dWRRcDBhb1FmeGhJZ3RwdThtdE8rNGdwY3ZPbkRyb0FWdnNCeGFOQ3pGRWQwalFxeXdlTEF2TVJlZElJNUxNREd1MExCUE15U2l0eEo4QjdxRThhWjBZNTA5bjJyc3puck1XMHNjUjhaZ2tqVGpGaHhnZXgvdXNEL3dCUWNNYWVKZFA1WEFPYVBIOHcvd0RJSDFWRmxtYm1sVWJVcEdIQWdoM3pCRzhna2VhK2k1dUtlT29Vc1JCYVdIdnQzRTZpK3hJYVFlUzRWaitqa1V2WmxlS1QxMC83TWJsT1ZRZU9vQk96ZG05VDFWKzJuQW5aSjF4d20yZ1VxV0xMYjMvblBwcXV2czUzWmE0YzdEVk9nRFFtRDVxbi93QVJraTF4dUlUWCtLTUloMS9PQ2dZZkR2UHdYSGdjNFZOVXh6Qm8vd0FpQ2ZjSUJ6Y1JCSm5hREN3eVRMSEU1YVNlTnJnWGJnNkVhYTdKUEJrdExtdXFDbkVnZ3liL0FHNm9GUE1qKzczSzdpSGlvSk1Uekd2aDRKWFJWWDB5T2RaaVM1aGtFdE1jUTNCdlBzbWY4VGM5c0VraUpQS041NUttekNtME1zTkNDaFkvRmx0SGhCMUFiNmkvMVN2R3BVVmprNG9yc1hVTldvU0FTWHVNRGVOaDZmSlgrVFpiOEx2Ty9Qb09RSFJVMlZ1K0dPSS9tUHNGWWpOUEpXYTlrU2J2WmNGcEptQlBPTHJwb1BjYm55a0JWMUxIRTdxMG80bUFManpLeWlRbElld1dHZTB6eTZxd2RWZndxdVppU05wNVgreTcrT0lIUHpSb2wyUnJNVUdVdVRDVlJacDJ4bzBuRUIzRTRmcGJCQTgxVTRqdDg1MmpZSHVuVUpBYlJxOFZPOXVpcWNSaW8wV2VkMnhKMVJLZWZNZnJDYmkwQWZkWDVvVldzdkI5Titqb1MrSUhEdktBS0IxU3M5bmVLSTdvVnRVcXJNWmpXNG5sVmdyRmFKNVorVS8xSDVCZFVzdC9LZjZ2b0Y1VnNTZ0xWTlFDSTFxWVU0Rk1CZERGNXhTc1phUEF5cE5wOVNoVWltV2tJQnRzOThOd0JBdnYxVUcxQ05adDBSaFZYdU9iSlI3STFLaGRzVDEvdW1jUFNBMXVldWlneHdoZStJZzBGTXRjUFhBMkhqQVY1bGVlT3B5Tld1QkRtOHg5eHFDc2pUSjFYc1JpNEEwMTNueEJVcFkxTFJhTTZOTFh6UGlNQSsrOHhDV2ZqSGN6Q3FxV2FPZkRIY0ppOGdBYTJ2YTVsRmRWU0tOYUhrMDlsaitMUE5RT1BLcWF0WTZJUHhTbTRXTHpTTGs1Z2VhRzdHa3FzWStSSjlrZGpHRXg4UUNlaGp6SzNCSVpTc2RwNGpxbTJZc3BWbVdDMFZXbWRJanovVXZWYUliYVNUMUhENkRVcEhUSzc5eDc4ZHp1bGNWaUFidU1CVnVOekJyT3J1UStxVXkzaXJWT0oyamR0a1ZEM0EzN0dpK0FTSm1GMWxFYmxjZzd1c2gxS3V3UVZpeVk4eW0wYnE3d0w2Y0R1KzUrNnkxT3BLdE1KVmdSS2ZpUWt6U3Z4dE9tMHVNTkFFa25RQWE2cjV0Mm03V1ZNUVRUcGtzcGNoWnp2NmpzUDlQcnlCZTJlWnVjQlJhYmF1Njhnc3RTcDc4azhZcXJZcTI2STFLZ2JZYW9CcUU3cGpDNEo5Vi9DMFNUdm9BT1pQSmFTaDJZYTF2ZVBFZktQSUJXY2toR216S0J4VEZFbFgxZktXRFFLcnhOSU1TdVY5RHdpcjJNVUt6bTNsT016UmdIZmRBNlhQa0ZTUHhPeVZlWlNxTjlqVFVmNGxwbVdlR3AzYWJmaHM5WHU2dWQ5QlpWVG5xWHc5eVk2RFgreWdTRlNLUzZJdGxsbGg3cC9xK2dYbERMSGQwLzFmUUx5TkM4bVFZbWFhWFlFWnBUQ0hYRkNLUHFvbW1zYXhkVEZRaEhZMkVUaEhKQmhRb1h5ak5jbzFxVWFLTk5DZ2hTOWU0aW93dWhhaGdsTnFqakdudThqSitpNjF3R3QwTjdpZGROZkR3UXJadVdqdVgxQ0hrOUQ0cDE1QU56QTlyM0NSWTJDajR0MGh2Szl2NXQ5eWxjZlVQR1hwQzFXR2JIaUg3bXlSUGpDSENqUXhibzRSWURsSVByS2JaQW1SQjZoTHRhWXlTZTBldytHZTZ3YnJ1YkR4VExzTFNZZjh4eGNmMnMrcEtuU3FFalcvOEFORlg0eXVBVGVYYmpYM1NOdGxsRXNhbWFOREEwVW1RSmd1N3h1Wmk2VXhuYWJFT2J3TnFjRElpR0FORWNwQW4zVlJVcWs2b0JJV1dPUHdWNU5Mc2laSzBtVUVNYnc3Nm5tczVUZkJsSHA0MGdtTjAwbGVpYWFScktsZUFodHZvcUZtYUhtbU1ObTBIb2tVV2pNdXFOTXpaV05KdHRGUk16SUhkTURNUTBTWFdScGtpaXpoNWRWZDRwZXFiUUI1b3puOGRRdUV3bzFXV1JiUldFWFRMWEpXQnJMYWxPdXE5VmxINWc4ZDF0Z3UwOHpjTlUzQnNnNUl2NjFlQVNWbE1YWEwzbHhQOEF3cml2aWVOaEExM1ZHOFFuZ2ljbWVCUjJoTHRxUXUvR1ROTUthQ1ZFSnk2SGMwUnRJbm9zdEN5VmplVmZsUDhBVjlBdkpqTGFBRFQ0L1FMeU5pQWFhSUV2VEtLMXlJb3kxZWMxQ2E5VEQxZ25BRklMc3FSYUZqRURkRDNDSndjbEIxTW9CUEVMMEwwUXZjU3hqMHJ2Q3VnS1RXckJvZ0ZKelpVeUJzcHNwazdlYVNVa3RsY2VPVW5TQXRaQ2FvZ1JMaWZ1b1ZDR2lQZEFyMU5WQjVMNlBReCtKeDNQL1FiRVl6OXRob3E1NzFCN2xBdVRSUnNra3VpWmFoZ0xqaks4RlJITTNaN0VWaTR5ZHJLQWN2UGFoa3BrbFJGdDNiSmx5NDE2NUtISzFBNVVNQ3VRcG1yT3FWSnN2Y1MzRUtteHNZMXpiQlFkakhuZEJKdGRCTDBGQmZCcFpKZklYaVhIVkFna3FkRmttK2lwZEVLc3M4SEliNHJyNllLVmZpOWdodnFrOUFsb1o2MER4SUFNTnV2TWF1Y0trbUVzWndqQnFVMlVDa0lBQ0lYSU1Oam1BSGRQajlBdXJtWG51bngrZ1hrQUZlMHFZSzFYL1VYczNSd2VPZlNvbC9BUUtnRGlEdzhaY2VGc0FkMFJBbVQxS3pQNGNjeWlZaHhLVFhyeHc0NW4yWGhRSE1vbUROY2lOY2dOb2ptVVJ0SHFVRERWT0VWN1FVcTJuMUttR2RTZ05ZS28xUWhNR2wxS2lhSTZyV0dnYkdvN0dFK0M2eWlMbTZrV2RTcFRtK2tkV0hERjdrOUJhVk5yUkp1VU90aUlRbnQ2bERORWN5b09EYnRucFF6d2d1TUZSQ3JVUVhPUlhVQnpLQzZnSjFQc25qQWxrem9DNEtKYW0vd29pWlB0OWtQOE9PWjlsUkk1NXpRQW9ibkpzWVljeXZmaEc5ZlpPaURkOUNTNDUwcHdZTnZNKzMyWEhZUWN6N0lpZXdrNURLZE9GSE0reWorRWJ6UHNpaEpNU1hwVGh3YmVaOXZzdWZnMjh6N2ZaRVd3V0d3L0dUZUJ1VVIyRENkdytHQWJxZlpFR0hITSt5V3dsUlVweHNocTVyWVJwNSt5VWZnMjh6N2ZaTW1Cc1JDa214aEc4ejdmWlRaZ204ejdmWkVRU0NabzBkeW1tNFJvNSt5NytISE0reTFnQkwwb3Y0Y2N6N0xuNGNjeXNZWXkvd0RLZkg2QmRYM1QvcDcyRndRd05KNzZRcXVxZ1ZIT3FRNGd1QUhDMkFJYUlzT3BYa0FuLzlrPVwiXHJcbn1dO1xyXG5cclxuY29uc3QgZ2V0Q210ID0gKHVzZXJJZCxjb250ZW50KT0+KHtcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIG5pY2tuYW1lOlwiZm94Ym94XCJcclxuICAgIH0sXHJcbiAgICBjb250ZW50XHJcbn0pXHJcblxyXG5jb25zdCBnZXRSYW5kb21WYWx1ZSA9IGFycj0+e1xyXG4gICAgY29uc3QgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphcnIubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcnIuc2xpY2UoMCxuKzEpO1xyXG59O1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpcInJzdWFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6XCJteSAjZmlyc3QgI3Bvc3RcIixcclxuICAgICAgICBJbWFnZXM6aW1ncyxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOlwiZm94Ym94XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDpcIndvdyBnb29kXCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTpcInJyclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XCJob2x5IHNoaXRcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG5cclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOm51bGwsXHJcbiAgICBoYXNNb3JlUG9zdHM6dHJ1ZSxcclxuXHJcbiAgICByZW1vdmVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG59XHJcbmNvbnN0IGdldFJhbmRvbUltZyA9ICgpPT57XHJcbiAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKSoxMCsxO1xyXG4gICAgZm9yKGxldCBpPTA7aTxyYW5kb21WYWx1ZTtpKyspXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICBzcmM6ZmFrZXIuaW1hZ2UuaW1hZ2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gbnVtYmVyID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgodixpKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDpmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczpnZXRSYW5kb21JbWcoKSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6ZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OmZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDApKVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9BRERfUE9TVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfUE9TVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0VSUk9SID0gXCJwb3N0UmVkdWNlci9BRERfQ09NTUVOVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9FUlJPUlwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4oey8vKHtwb3N0Q29udGVudH0pXHJcbiAgICB0eXBlOkFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4oey8vKHtpZH0pXHJcbiAgICB0eXBlOlJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKT0+KHsvLyh7cG9zdElkLGNvbnRlbnQsdXNlcklkfSlcclxuICAgIHR5cGU6QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKT0+ICh7Ly97aWQscG9zdENvbnRlbnR9XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLnBvc3RDb250ZW50LFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTpcInplcm9cIlxyXG4gICAgfSxcclxuICAgIEltYWdlczpnZXRSYW5kb21WYWx1ZShpbWdzKSxcclxuICAgIENvbW1lbnRzOltdLFxyXG59KVxyXG5cclxuY29uc3QgcG9zdFJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmFkZFBvc3RBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOi8vZGF0YTp7aWR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKHBvc3Q9PnBvc3QuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzovL2RhdGE6YWRkQ29tbWVudEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChwb3N0PT5wb3N0LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGdldENtdChhY3Rpb24uZGF0YS51c2VySWQsYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0VSUk9SOi8ve2RhdGE6ZXJyfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOi8ve2RhdGE6e25ld0xvYWRlZFBvc3RzfX1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLm5ld0xvYWRlZFBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGg8MTA7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ0luRG9uZTpmYWxzZSxcclxuICAgIGxvZ0luRXJvcnI6bnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTpmYWxzZSxcclxuICAgIGxvZ091dEVyb3JyOm51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOmZhbHNlLFxyXG4gICAgZm9sbG93RXJvcnI6bnVsbCxcclxuXHJcbiAgICB1bkZvbGxvd1VwTG9hZGluZzpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBEb25lOmZhbHNlLFxyXG4gICAgdW5Gb2xsb3dVcEVycm9yOm51bGwsXHJcblxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOmZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9SRU1PVkVfUE9TVF9UT19NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKT0+KHtcclxuICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gZGF0YT0+KHtcclxuICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgdHlwZTpTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhPT4oey8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgaWQ6MSxcclxuICAgIG5pY2tuYW1lOlwiZm94Ym94clwiLFxyXG4gICAgLi4uZGF0YSxcclxuICAgIFBvc3RzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxufSlcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOi8ve2RhdGE6e3Bvc3RVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOmFjdGlvbi5kYXRhLnBvc3RVc2VySWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzovL3tkYXRhOntwb3N0VXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcih2PT52LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0VXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOi8vZGF0YTp7aWR9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDphY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6Ly9kYXRhOntpZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKHBvc3Q9PnBvc3QuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmxvYWRVc2VyQXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ubWUpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=