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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./back.js":
/*!*****************!*\
  !*** ./back.js ***!
  \*****************/
/*! exports provided: backAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backAddress", function() { return backAddress; });
const backAddress = "http://localhost:3065";

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\WEB\\full\\front_next\\pages\\_app.js";





function _app({
  Component
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(_app)));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ "./reducers/userReducer.js");
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postReducer */ "./reducers/postReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const index = (state = {}, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
};

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index,
  userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  postReducer: _postReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_ERROR, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_ERROR, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_ERROR, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_ERROR, REMOVE_IMAGE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_ERROR, addPostRequestAction, removePostRequestAction, addCommentRequestAction, default */
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
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
const LIKE_POST_REQUEST = "postReducer/LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "postReducer/LIKE_POST_SUCCESS";
const LIKE_POST_ERROR = "postReducer/LIKE_POST_ERROR";
const UNLIKE_POST_REQUEST = "postReducer/UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "postReducer/UNLIKE_POST_SUCCESS";
const UNLIKE_POST_ERROR = "postReducer/UNLIKE_POST_ERROR";
const UPLOAD_IMAGES_REQUEST = "postReducer/UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "postReducer/UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_ERROR = "postReducer/UPLOAD_IMAGES_ERROR";
const REMOVE_IMAGE = "postReducer/REMOVE_IMAGE";
const RETWEET_REQUEST = "postReducer/RETWEET_REQUEST";
const RETWEET_SUCCESS = "postReducer/RETWEET_SUCCESS";
const RETWEET_ERROR = "postReducer/RETWEET_ERROR";
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
        draft.mainPosts = draft.mainPosts.filter(post => post.id !== action.data.postId);
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
          const post = draft.mainPosts.find(post => post.id === action.data.PostId);
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
          const post = draft.mainPosts.find(post => post.id === action.data.postId);
          post.Likers.push({
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
          const post = draft.mainPosts.find(post => post.id === action.data.postId);
          post.Likers = post.Likers.filter(user => user.id !== action.data.UserId);
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
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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

/***/ }),

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_ERROR, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_ERROR, ADD_POST_TO_ME, REMOVE_POST_TO_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR, CHANGE_USER_REQUEST, CHANGE_USER_SUCCESS, CHANGE_USER_ERROR, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_ERROR, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_ERROR, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_ERROR, logoutRequestAction, loginRequestAction, signupRequestAction, default */
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
const CHANGE_USER_REQUEST = "postReducer/CHANGE_USER_REQUEST";
const CHANGE_USER_SUCCESS = "postReducer/CHANGE_USER_SUCCESS";
const CHANGE_USER_ERROR = "postReducer/CHANGE_USER_ERROR";
const LOAD_FOLLOWERS_REQUEST = "postReducer/LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "postReducer/LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_ERROR = "postReducer/LOAD_FOLLOWERS_ERROR";
const LOAD_FOLLOWINGS_REQUEST = "postReducer/LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "postReducer/LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_ERROR = "postReducer/LOAD_FOLLOWINGS_ERROR";
const REMOVE_FOLLOWER_REQUEST = "postReducer/REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "postReducer/REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_ERROR = "postReducer/REMOVE_FOLLOWER_ERROR";
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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.userId);
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
        draft.me.Posts = draft.me.Posts.filter(post => post.id !== action.data.postId);
        break;

      case LOAD_USER_REQUEST:
        //data:loadUserApi().data
        draft.loadUserLoading = true;
        draft.loadUserErorr = null;
        break;

      case LOAD_USER_SUCCESS:
        console.log("user", action.data);
        draft.loadUserDone = true;
        draft.loadUserLoading = false;
        draft.me = action.data;
        break;

      case LOAD_USER_ERROR:
        draft.loadUserLoading = false;
        draft.loadUserError = action.data;
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
        draft.me.Followers = draft.me.Followers.filter(user => user.id !== action.data.userId);
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../back */ "./back.js");
/* harmony import */ var _userSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userSaga */ "./sagas/userSaga.js");
/* harmony import */ var _postSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postSaga */ "./sagas/postSaga.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _back__WEBPACK_IMPORTED_MODULE_2__["backAddress"];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_userSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_postSaga__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./sagas/postSaga.js":
/*!***************************!*\
  !*** ./sagas/postSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







function addPostApi(data) {
  //data:formData : formData는 {}안 감싸고 그냥 넣는다
  console.log("api");
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/post", data);
}

function* addPost(action) {
  //(data:formData)
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_ERROR"],
      error: err
    });
  }
}

function addCommentApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  //(data:{postId,content,userId})
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_ERROR"],
      data: err
    });
  }
}

function loadPostApi(data) {
  // get 방식은 두번째 인자에 data가 못들어감 그래서 쿼리 스트링으로해야함
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`/posts?lastId=${data || 0}&limit=10`);
}

function* loadPost(action) {
  //{data:lastId}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_ERROR"],
      data: err
    });
  }
}

function likePostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  //{data:postId}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_ERROR"],
      data: err
    });
  }
}

function unLikePostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(`/post/${data}/like`);
}

function* unLikePost(action) {
  //{data:postId}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unLikePostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_ERROR"],
      data: err
    });
  }
}

function removePostApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(`/post/${data.id}`);
}

function* removePost(action) {
  //(data:{id})
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_ERROR"],
      error: err
    });
  }
}

function uploadImagesApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`/post/images`, data);
}

function* uploadImages(action) {
  //{data:imageFormData}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_ERROR"],
      data: err
    });
  }
}

function retweetApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  //{data:postId}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["RETWEET_ERROR"],
      data: err
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unLikePost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet)]);
}

/***/ }),

/***/ "./sagas/userSaga.js":
/*!***************************!*\
  !*** ./sagas/userSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../back */ "./back.js");






function loadUserApi() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserApi);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_ERROR"],
      data: err.response.data
    });
  }
}

function logInApi(data) {
  //{data:{email,password}}
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/user/login`, data);
}

function* logIn(action) {
  //{data:{email,password}}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_ERROR"],
      data: err.response.data
    });
  }
}

function logOutApi() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/user/logout`);
}

function* logOut(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutApi);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_ERROR"],
      data: err
    });
  }
}

function signUpApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/user`, data); // return axios.post(`http://localhost:3065/user`,data);
}

function* signUp(action) {
  //{data:{email,password,nickname}}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpApi, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_ERROR"],
      data: err
    });
  }
}

function followApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  // {data:id}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_ERROR"],
      data: err
    });
  }
}

function unFollowApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/user/${data}/follow`);
}

function* unFollow(action) {
  //{data:id}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unFollowApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_ERROR"],
      data: err
    });
  }
}

function changeUserApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/user`, {
    nickname: data
  });
}

function* changeUser(action) {
  //{data:nickname}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeUserApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_ERROR"],
      data: err
    });
  }
}

function loadFollowersApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user/followers`);
}

function* loadFollowers(action) {
  //
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_ERROR"],
      data: err
    });
  }
}

function loadFollowingsApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user/followings`);
}

function* loadFollowings(action) {
  //
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_ERROR"],
      data: err
    });
  }
}

function removeFollowerApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  //{data:userId}
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_ERROR"],
      data: err
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchChangeUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_REQUEST"], changeUser);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3RTYWdhLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXJTYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiYmFja0FkZHJlc3MiLCJfYXBwIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RXJyb3IiLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdEVycm9yIiwiaGFzTW9yZVBvc3RzIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RXJyb3IiLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdEVycm9yIiwidW5MaWtlUG9zdERvbmUiLCJ1bkxpa2VQb3N0TG9hZGluZyIsInVuTGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiZ2V0UmFuZG9tSW1nIiwiYXJyIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwicmFuZG9tIiwiaSIsInB1c2giLCJzcmMiLCJmYWtlciIsImltYWdlIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiY29uY2F0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9FUlJPUiIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRVJST1IiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0VSUk9SIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9FUlJPUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRVJST1IiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0VSUk9SIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19FUlJPUiIsIlJFTU9WRV9JTUFHRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRVJST1IiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJyZW1vdmVQb3N0UmVxdWVzdEFjdGlvbiIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlQb3N0IiwicG9zdENvbnRlbnQiLCJnZXRSYW5kb21WYWx1ZSIsImltZ3MiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwicG9zdCIsInBvc3RJZCIsImFkZENvbWVudERvbmUiLCJmaW5kIiwiUG9zdElkIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIkxpa2VycyIsIlVzZXJJZCIsInVzZXIiLCJ1cExvYWRMb2FkaW5nIiwidXBMb2FkRG9uZSIsInVwTG9hZEVycm9yIiwicmVzcG9uc2UiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyb3JyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcm9yciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vyb3JyIiwidW5Gb2xsb3dVcExvYWRpbmciLCJ1bkZvbGxvd1VwRG9uZSIsInVuRm9sbG93VXBFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJjaGFuZ2VVc2VyTG9hZGluZyIsImNoYW5nZVVzZXJEb25lIiwiY2hhbmdlVXNlckVycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9FUlJPUiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRVJST1IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0VSUk9SIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRVJST1IiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsIkNIQU5HRV9VU0VSX1JFUVVFU1QiLCJDSEFOR0VfVVNFUl9TVUNDRVNTIiwiQ0hBTkdFX1VTRVJfRVJST1IiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0VSUk9SIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19FUlJPUiIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRVJST1IiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImZvbGxvd0Vycm9yIiwidXNlcklkIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dFcnJvciIsInVuRm9sbG93RG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRFcnJvciIsInNpZ25VcEVyb3JyIiwibG9hZFVzZXJFcm9yciIsImNoYW5nZVVzZXJFcm9yciIsImxvYWRGb2xsb3dlcnNFcm9yciIsImxvYWRGb2xsb3dpbmdzRXJvcnIiLCJyZW1vdmVGb2xsb3dlckVyb3JyIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwiYWRkUG9zdEFwaSIsImFkZFBvc3QiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwiZXJyb3IiLCJhZGRDb21tZW50QXBpIiwiYWRkQ29tbWVudCIsImRlbGF5IiwibG9hZFBvc3RBcGkiLCJnZXQiLCJsb2FkUG9zdCIsImxpa2VQb3N0QXBpIiwicGF0Y2giLCJsaWtlUG9zdCIsInVuTGlrZVBvc3RBcGkiLCJkZWxldGUiLCJ1bkxpa2VQb3N0IiwicmVtb3ZlUG9zdEFwaSIsInJlbW92ZVBvc3QiLCJ1cGxvYWRJbWFnZXNBcGkiLCJ1cGxvYWRJbWFnZXMiLCJyZXR3ZWV0QXBpIiwicmV0d2VldCIsIndhdGNoQWRkUG9zdCIsInRha2VFdmVyeSIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJsb2FkVXNlckFwaSIsImxvYWRVc2VyIiwibG9nSW5BcGkiLCJsb2dJbiIsImxvZ091dEFwaSIsImxvZ091dCIsInNpZ25VcEFwaSIsInNpZ25VcCIsImZvbGxvd0FwaSIsImZvbGxvdyIsInVuRm9sbG93QXBpIiwidW5Gb2xsb3ciLCJjaGFuZ2VVc2VyQXBpIiwiY2hhbmdlVXNlciIsImxvYWRGb2xsb3dlcnNBcGkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBcGkiLCJsb2FkRm9sbG93aW5ncyIsInJlbW92ZUZvbGxvd2VyQXBpIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaENoYW5nZVVzZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFJLENBQUN2UixNQUFELENBQVg7QUFDSCxDQUhEOztBQUtBLE1BQU13UixjQUFjLEdBQUcsTUFBSTtBQUN2QixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELEVBQWdCTCxnQkFBaEIsQ0FBcEI7QUFDQSxRQUFNUSxRQUFRLEdBQUcsUUFDZkMsU0FEZSxHQUVmQyxvRkFBbUIsQ0FBQ0QscURBQU8sQ0FBQ0UsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBQVIsQ0FGckI7QUFHQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVNOLFFBQVQsQ0FBekI7QUFDQUksT0FBSyxDQUFDRyxRQUFOLEdBQWlCVixjQUFjLENBQUNXLEdBQWYsQ0FBbUJyRiw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPaUYsS0FBUDtBQUNILENBVEQ7O0FBV0EsTUFBTXJTLE9BQU8sR0FBRzBTLHdFQUFhLENBQUNiLGNBQUQsRUFBZ0I7QUFDekNjLE9BQUs7QUFEb0MsQ0FBaEIsQ0FBN0I7QUFJZTNTLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgYmFja0FkZHJlc3MgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NVwiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiXHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gXCJuZXh0LXJlZHV4LXNhZ2FcIjtcclxuXHJcbmZ1bmN0aW9uIF9hcHAoe0NvbXBvbmVudH0pe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKF9hcHApKTsiLCJpbXBvcnQge0hZRFJBVEV9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tIFwiLi9wb3N0UmVkdWNlclwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoc3RhdGU9e30sYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleCxcclxuICAgIHVzZXJSZWR1Y2VyLFxyXG4gICAgcG9zdFJlZHVjZXIsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOltdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgbG9hZFBvc3REb25lOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgaGFzTW9yZVBvc3RzOnRydWUsXHJcblxyXG4gICAgcmVtb3ZlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgdW5MaWtlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICB1bkxpa2VQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHVuTGlrZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0RvbmU6ZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6bnVsbCxcclxuXHJcbiAgICByZXR3ZWV0RG9uZTpmYWxzZSxcclxuICAgIHJldHdlZXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOm51bGwsXHJcbn1cclxuY29uc3QgZ2V0UmFuZG9tSW1nID0gKCk9PntcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpKjEwKzE7XHJcbiAgICBmb3IobGV0IGk9MDtpPHJhbmRvbVZhbHVlO2krKylcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSBudW1iZXIgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCh2LGkpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbUltZygpLFxyXG4gICAgQ29tbWVudHM6W3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMCkpXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0FERF9DT01NRU5UX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1VOTElLRV9QT1NUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfSU1BR0VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe3Bvc3RDb250ZW50fSlcclxuICAgIHR5cGU6QUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RSZXF1ZXN0QWN0aW9uID0gZGF0YSA9Pih7Ly8oe2lkfSlcclxuICAgIHR5cGU6UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpPT4oey8vKHtwb3N0SWQsY29udGVudCx1c2VySWR9KVxyXG4gICAgdHlwZTpBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpPT4gKHsvL3tpZCxwb3N0Q29udGVudH1cclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEucG9zdENvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwiemVyb1wiXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOmdldFJhbmRvbVZhbHVlKGltZ3MpLFxyXG4gICAgQ29tbWVudHM6W10sXHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmFkZFBvc3RBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzovL2RhdGE6e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6ey8vZGF0YTphZGRDb21tZW50QXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHBvc3Q9PnBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRVJST1I6Ly97ZGF0YTplcnJ9XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOi8vZGF0YTpsb2FkUG9zdEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDsgLy8gMTDqsJzslKkg6rKM7Iuc6riA7J2EIOqwgOyguOyYpOuvgOuhnCAxMCDrr7jrp4zsnbzrlYwgZmFsc2UgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6ey8ve2RhdGE6e3Bvc3RJZCxVc2VySWR9fVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT1cIixkcmFmdC5tYWluUG9zdHMpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQocG9zdD0+cG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6YWN0aW9uLmRhdGEuVXNlcklkfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzp7Ly97ZGF0YTp7cG9zdElkLFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHBvc3QgPT4gcG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzogLy8ge2RhdGE6dXBsb2FkSW1hZ2VzQXBpKCkuZGF0YX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6ICAvLyB7ZGF0YTppbmRleH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodixpKT0+IGkgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiAvLyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5kYXRhLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCJcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOmZhbHNlLFxyXG4gICAgbG9nSW5Fcm9ycjpudWxsLFxyXG5cclxuICAgIGxvZ091dExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOmZhbHNlLFxyXG4gICAgbG9nT3V0RXJvcnI6bnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzpmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dFcm9ycjpudWxsLFxyXG5cclxuICAgIHVuRm9sbG93VXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgdW5Gb2xsb3dVcERvbmU6ZmFsc2UsXHJcbiAgICB1bkZvbGxvd1VwRXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkVXNlckRvbmU6ZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOm51bGwsXHJcblxyXG4gICAgY2hhbmdlVXNlckxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VVc2VyRG9uZTpmYWxzZSxcclxuICAgIGNoYW5nZVVzZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOm51bGwsXHJcblxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9SRU1PVkVfUE9TVF9UT19NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX0VSUk9SID0gXCJwb3N0UmVkdWNlci9DSEFOR0VfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0VSU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKT0+KHtcclxuICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gZGF0YT0+KHtcclxuICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgdHlwZTpTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhPT4oey8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgaWQ6MSxcclxuICAgIG5pY2tuYW1lOlwiZm94Ym94clwiLFxyXG4gICAgLi4uZGF0YSxcclxuICAgIFBvc3RzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOlwiclwifSx7bmlja25hbWU6XCJhc3JcIn0se25pY2tuYW1lOlwicmRcIn0sXSxcclxufSlcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOi8ve2RhdGE6e3VzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6YWN0aW9uLmRhdGEudXNlcklkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7dXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcih2PT52LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzovL3tlbWFpbCxuaWNrbmFtZSxwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6Ly9kYXRhOntpZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9UT19NRTovL2RhdGE6e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKHBvc3Q9PnBvc3QuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOi8vZGF0YTpsb2FkVXNlckFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyXCIsYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmNoYW5nZVVzZXJBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX1VTRVJfU1VDQ0VTUzovL3tkYXRhOm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfVVNFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZVVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93ZXJzQXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93aW5nc0FwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOi8vZGF0YTpyZW1vdmVGb2xsb3dlckFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyIsImltcG9ydCB7YWxsLGZvcmssdGFrZSx0YWtlRXZlcnksdGFrZUxhdGVzdCxwdXQsZGVsYXl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHtiYWNrQWRkcmVzc30gZnJvbSBcIi4uL2JhY2tcIlxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclNhZ2FcIlxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFNhZ2FcIlxyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tBZGRyZXNzO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59ICIsImltcG9ydCB7IENhbGN1bGF0b3JGaWxsZWQsIFB1c2hwaW5Ud29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUV2ZXJ5LHB1dCxkZWxheSxjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCJcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIlxyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfUkVRVUVTVCxBRERfUE9TVF9TVUNDRVNTLEFERF9QT1NUX0VSUk9SLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxSRU1PVkVfUE9TVF9TVUNDRVNTLFJFTU9WRV9QT1NUX0VSUk9SLFxyXG4gICAgIEFERF9DT01NRU5UX1JFUVVFU1QsQUREX0NPTU1FTlRfU1VDQ0VTUyxBRERfQ09NTUVOVF9FUlJPUixcclxuICAgICBMT0FEX1BPU1RfUkVRVUVTVCxMT0FEX1BPU1RfU1VDQ0VTUyxMT0FEX1BPU1RfRVJST1IsXHJcbiAgICAgTElLRV9QT1NUX1JFUVVFU1QsTElLRV9QT1NUX1NVQ0NFU1MsTElLRV9QT1NUX0VSUk9SLFxyXG4gICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsVU5MSUtFX1BPU1RfU1VDQ0VTUyxVTkxJS0VfUE9TVF9FUlJPUixcclxuICAgICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsVVBMT0FEX0lNQUdFU19TVUNDRVNTLFVQTE9BRF9JTUFHRVNfRVJST1IsXHJcbiAgICAgUkVUV0VFVF9SRVFVRVNULFJFVFdFRVRfU1VDQ0VTUyxSRVRXRUVUX0VSUk9SLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9UT19NRSxSRU1PVkVfUE9TVF9UT19NRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclJlZHVjZXJcIlxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4gXHJcbmZ1bmN0aW9uIGFkZFBvc3RBcGkoZGF0YSl7IC8vZGF0YTpmb3JtRGF0YSA6IGZvcm1EYXRh64qUIHt97JWIIOqwkOyLuOqzoCDqt7jrg6Ug64Sj64qU64ukXHJcbiAgICBjb25zb2xlLmxvZyhcImFwaVwiKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIixkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXsvLyhkYXRhOmZvcm1EYXRhKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBlcnJvcjplcnIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBcGkoZGF0YSl7IFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pey8vKGRhdGE6e3Bvc3RJZCxjb250ZW50LHVzZXJJZH0pXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QXBpKGRhdGEpe1xyXG4gICAgLy8gZ2V0IOuwqeyLneydgCDrkZDrsojsp7gg7J247J6Q7JeQIGRhdGHqsIAg66q765Ok7Ja06rCQIOq3uOuemOyEnCDsv7zrpqwg7Iqk7Yq466eB7Jy866Gc7ZW07JW87ZWoXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7ZGF0YSB8fCAwfSZsaW1pdD0xMGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXsvL3tkYXRhOmxhc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pey8ve2RhdGE6cG9zdElkfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuTGlrZVBvc3RBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuTGlrZVBvc3QoYWN0aW9uKXsvL3tkYXRhOnBvc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuTGlrZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkxJS0VfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhLmlkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pey8vKGRhdGE6e2lkfSlcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9pbWFnZXNgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbil7Ly97ZGF0YTppbWFnZUZvcm1EYXRhfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVUExPQURfSU1BR0VTX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKXsvL3tkYXRhOnBvc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFVFdFRVRfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX1BPU1RfUkVRVUVTVCxhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KEFERF9DT01NRU5UX1JFUVVFU1QsYWRkQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1BPU1RfUkVRVUVTVCxsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTElLRV9QT1NUX1JFUVVFU1QsbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVU5MSUtFX1BPU1RfUkVRVUVTVCx1bkxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9QT1NUX1JFUVVFU1QscmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVVBMT0FEX0lNQUdFU19SRVFVRVNULHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFVFdFRVRfUkVRVUVTVCxyZXR3ZWV0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IFB1c2hwaW5Ud29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUV2ZXJ5LGRlbGF5LGNhbGwscHV0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxMT0dfSU5fU1VDQ0VTUyxMT0dfSU5fRVJST1IsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsTE9HX09VVF9TVUNDRVNTLExPR19PVVRfRVJST1IsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsU0lHTl9VUF9TVUNDRVNTLFNJR05fVVBfRVJST1IsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxGT0xMT1dfU1VDQ0VTUyxGT0xMT1dfRVJST1IsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFVORk9MTE9XX1NVQ0NFU1MsVU5GT0xMT1dfRVJST1IsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxMT0FEX1VTRVJfU1VDQ0VTUyxMT0FEX1VTRVJfRVJST1IsXHJcbiAgICBDSEFOR0VfVVNFUl9SRVFVRVNULENIQU5HRV9VU0VSX1NVQ0NFU1MsQ0hBTkdFX1VTRVJfRVJST1IsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsTE9BRF9GT0xMT1dFUlNfRVJST1IsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxMT0FEX0ZPTExPV0lOR1NfRVJST1IsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxSRU1PVkVfRk9MTE9XRVJfRVJST1IsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7YmFja0FkZHJlc3N9IGZyb20gXCIuLi9iYWNrXCJcclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQXBpKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlcmApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQXBpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BcGkoZGF0YSl7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyL2xvZ2luYCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmR9fVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfSU5fRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QXBpKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3VzZXIvbG9nb3V0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFwaSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvdXNlcmAsZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXJgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbil7Ly97ZGF0YTp7ZW1haWwscGFzc3dvcmQsbmlja25hbWV9fVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pey8vIHtkYXRhOmlkfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QXBpLGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bkZvbGxvdyhhY3Rpb24pey8ve2RhdGE6aWR9XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bkZvbGxvd0FwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VVc2VyQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlcmAse25pY2tuYW1lOmRhdGF9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZVVzZXIoYWN0aW9uKXsvL3tkYXRhOm5pY2tuYW1lfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlVXNlckFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpDSEFOR0VfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkNIQU5HRV9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9mb2xsb3dlcnNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKXsvL1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XRVJTX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93aW5nc2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKXsvL1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dJTkdTX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbil7Ly97ZGF0YTp1c2VySWR9XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfRk9MTE9XRVJfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfT1VUX1JFUVVFU1QsbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1Qsc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShGT0xMT1dfUkVRVUVTVCxmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVU5GT0xMT1dfUkVRVUVTVCx1bkZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCxsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlVXNlcigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KENIQU5HRV9VU0VSX1JFUVVFU1QsY2hhbmdlVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2Vycygpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxyZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVTdG9yZSxhcHBseU1pZGRsZXdhcmUsY29tcG9zZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIlxyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCJcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoLGdldFN0YXRlfSkgPT4gKG5leHQpPT4oYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpPT57XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSxsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcixlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=