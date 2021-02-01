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


var _jsxFileName = "C:\\WEB\\full\\front_next\\pages\\_app.js";


 // import withReduxSaga from "next-redux-saga";

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

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(_app));

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



 // const index = (state={},action)=>{
//     switch(action.type){
//         case HYDRATE:
//             return {...state,...action.payload};
//         default :
//             return state;
//     }
// } 
// const rootReducer = combineReducers({
//     index,
//     userReducer,
//     postReducer,
// })

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      // HYDRATE는 서버 사이드에서 사용하는 리듀서다
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
          postReducer: _postReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

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
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_ERROR, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_ERROR, ADD_POST_TO_ME, REMOVE_POST_TO_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_ERROR, CHANGE_USER_REQUEST, CHANGE_USER_SUCCESS, CHANGE_USER_ERROR, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_ERROR, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_ERROR, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_ERROR, logoutRequestAction, loginRequestAction, signupRequestAction, default */
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
const LOAD_MY_INFO_REQUEST = "postReducer/LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "postReducer/LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_ERROR = "postReducer/LOAD_MY_INFO_ERROR";
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






function loadUserApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserApi, action.data);
    console.log(result);
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

function loadMyInfoApi() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user`);
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoApi);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log("===============");
    console.log(axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers);
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_ERROR"],
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

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo)]);
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
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // sagaTask 등록

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3RTYWdhLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXJTYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiYmFja0FkZHJlc3MiLCJfYXBwIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJwb3N0UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdEVycm9yIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImhhc01vcmVQb3N0cyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudEVycm9yIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3RFcnJvciIsInVuTGlrZVBvc3REb25lIiwidW5MaWtlUG9zdExvYWRpbmciLCJ1bkxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXRFcnJvciIsImdldFJhbmRvbUltZyIsImFyciIsInJhbmRvbVZhbHVlIiwiTWF0aCIsInJhbmRvbSIsImkiLCJwdXNoIiwic3JjIiwiZmFrZXIiLCJpbWFnZSIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwidiIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRVJST1IiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0VSUk9SIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9FUlJPUiIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRVJST1IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0VSUk9SIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9FUlJPUiIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRVJST1IiLCJSRU1PVkVfSU1BR0UiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0VSUk9SIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwicmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdCIsInBvc3RDb250ZW50IiwiZ2V0UmFuZG9tVmFsdWUiLCJpbWdzIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImZpbHRlciIsInBvc3QiLCJwb3N0SWQiLCJhZGRDb21lbnREb25lIiwiZmluZCIsIlBvc3RJZCIsImxlbmd0aCIsIkxpa2VycyIsIlVzZXJJZCIsInVzZXIiLCJ1cExvYWRMb2FkaW5nIiwidXBMb2FkRG9uZSIsInVwTG9hZEVycm9yIiwicmVzcG9uc2UiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyb3JyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcm9yciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vyb3JyIiwidW5Gb2xsb3dVcExvYWRpbmciLCJ1bkZvbGxvd1VwRG9uZSIsInVuRm9sbG93VXBFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwidXNlckluZm8iLCJjaGFuZ2VVc2VyTG9hZGluZyIsImNoYW5nZVVzZXJEb25lIiwiY2hhbmdlVXNlckVycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9FUlJPUiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRVJST1IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0VSUk9SIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19FUlJPUiIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRVJST1IiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9FUlJPUiIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRVJST1IiLCJDSEFOR0VfVVNFUl9SRVFVRVNUIiwiQ0hBTkdFX1VTRVJfU1VDQ0VTUyIsIkNIQU5HRV9VU0VSX0VSUk9SIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19FUlJPUiIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRVJST1IiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0VSUk9SIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJmb2xsb3dFcnJvciIsInVzZXJJZCIsInVuRm9sbG93TG9hZGluZyIsInVuRm9sbG93RXJyb3IiLCJ1bkZvbGxvd0RvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0RXJyb3IiLCJzaWduVXBFcm9yciIsImxvYWRVc2VyRXJvcnIiLCJsb2FkTXlJbmZvRXJvcnIiLCJjaGFuZ2VVc2VyRXJvcnIiLCJsb2FkRm9sbG93ZXJzRXJvcnIiLCJsb2FkRm9sbG93aW5nc0Vyb3JyIiwicmVtb3ZlRm9sbG93ZXJFcm9yciIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJwb3N0U2FnYSIsImFkZFBvc3RBcGkiLCJhZGRQb3N0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsImVycm9yIiwiYWRkQ29tbWVudEFwaSIsImFkZENvbW1lbnQiLCJkZWxheSIsImxvYWRQb3N0QXBpIiwiZ2V0IiwibG9hZFBvc3QiLCJsaWtlUG9zdEFwaSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bkxpa2VQb3N0QXBpIiwiZGVsZXRlIiwidW5MaWtlUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJyZW1vdmVQb3N0IiwidXBsb2FkSW1hZ2VzQXBpIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFwaSIsInJldHdlZXQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlRXZlcnkiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0IiwibG9hZFVzZXJBcGkiLCJsb2FkVXNlciIsImxvYWRNeUluZm9BcGkiLCJsb2FkTXlJbmZvIiwiaGVhZGVycyIsImxvZ0luQXBpIiwibG9nSW4iLCJsb2dPdXRBcGkiLCJsb2dPdXQiLCJzaWduVXBBcGkiLCJzaWduVXAiLCJmb2xsb3dBcGkiLCJmb2xsb3ciLCJ1bkZvbGxvd0FwaSIsInVuRm9sbG93IiwiY2hhbmdlVXNlckFwaSIsImNoYW5nZVVzZXIiLCJsb2FkRm9sbG93ZXJzQXBpIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQXBpIiwibG9hZEZvbGxvd2luZ3MiLCJyZW1vdmVGb2xsb3dlckFwaSIsInJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hDaGFuZ2VVc2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRNeUluZm8iLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBTyxNQUFNQSxXQUFXLEdBQUcsdUJBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0NBRUE7O0FBRUEsU0FBU0MsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUEwQjtBQUV0QixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0g7O0FBRWNDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JILElBQWxCLENBQWYsRTs7Ozs7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QUFuQixDQUFqQixDQVB1QixDQU93Qjs7QUFDL0MsU0FBT3FGLEtBQVA7QUFDSCxDQVREOztBQVdBLE1BQU1oVCxPQUFPLEdBQUdxVCx3RUFBYSxDQUFDYixjQUFELEVBQWdCO0FBQ3pDYyxPQUFLO0FBRG9DLENBQWhCLENBQTdCO0FBSWV0VCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IGJhY2tBZGRyZXNzID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNjVcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIlxyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIlxyXG4vLyBpbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcblxyXG5mdW5jdGlvbiBfYXBwKHtDb21wb25lbnR9KXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoX2FwcCk7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyUmVkdWNlclwiO1xyXG5pbXBvcnQgcG9zdFJlZHVjZXIgZnJvbSBcIi4vcG9zdFJlZHVjZXJcIjtcclxuXHJcbi8vIGNvbnN0IGluZGV4ID0gKHN0YXRlPXt9LGFjdGlvbik9PntcclxuLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbi8vICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuLy8gICAgICAgICBkZWZhdWx0IDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgfVxyXG4vLyB9IFxyXG5cclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgaW5kZXgsXHJcbi8vICAgICB1c2VyUmVkdWNlcixcclxuLy8gICAgIHBvc3RSZWR1Y2VyLFxyXG4vLyB9KVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOiAvLyBIWURSQVRF64qUIOyEnOuyhCDsgqzsnbTrk5zsl5DshJwg7IKs7Jqp7ZWY64qUIOumrOuTgOyEnOuLpFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsYWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlclJlZHVjZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0UmVkdWNlcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCJcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCJcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W10sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG5cclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOm51bGwsXHJcbiAgICBoYXNNb3JlUG9zdHM6dHJ1ZSxcclxuXHJcbiAgICByZW1vdmVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG5cclxuICAgIGxpa2VQb3N0RG9uZTpmYWxzZSxcclxuICAgIGxpa2VQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3I6bnVsbCxcclxuXHJcbiAgICB1bkxpa2VQb3N0RG9uZTpmYWxzZSxcclxuICAgIHVuTGlrZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgdW5MaWtlUG9zdEVycm9yOm51bGwsXHJcblxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTpmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjpudWxsLFxyXG5cclxuICAgIHJldHdlZXREb25lOmZhbHNlLFxyXG4gICAgcmV0d2VldExvYWRpbmc6ZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3I6bnVsbCxcclxufVxyXG5jb25zdCBnZXRSYW5kb21JbWcgPSAoKT0+e1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGgucmFuZG9tKCkqMTArMTtcclxuICAgIGZvcihsZXQgaT0wO2k8cmFuZG9tVmFsdWU7aSsrKVxyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgc3JjOmZha2VyLmltYWdlLmltYWdlKClcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBhcnI7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IG51bWJlciA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKHYsaSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6ZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6Z2V0UmFuZG9tSW1nKCksXHJcbiAgICBDb21tZW50czpbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDpmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgwKSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9BRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9BRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvQUREX1BPU1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvUkVNT1ZFX1BPU1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9BRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9BRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvQUREX0NPTU1FTlRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvTE9BRF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9MT0FEX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MT0FEX1BPU1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwicG9zdFJlZHVjZXIvTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MSUtFX1BPU1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9VTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9VTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9FUlJPUiA9IFwicG9zdFJlZHVjZXIvVU5MSUtFX1BPU1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL1VQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJwb3N0UmVkdWNlci9VUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1VQTE9BRF9JTUFHRVNfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9JTUFHRVwiXHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9SRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwicG9zdFJlZHVjZXIvUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0VSUk9SID0gXCJwb3N0UmVkdWNlci9SRVRXRUVUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+KHsvLyh7cG9zdENvbnRlbnR9KVxyXG4gICAgdHlwZTpBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+KHsvLyh7aWR9KVxyXG4gICAgdHlwZTpSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSk9Pih7Ly8oe3Bvc3RJZCxjb250ZW50LHVzZXJJZH0pXHJcbiAgICB0eXBlOkFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSk9PiAoey8ve2lkLHBvc3RDb250ZW50fVxyXG4gICAgaWQ6ZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6ZGF0YS5wb3N0Q29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6XCJ6ZXJvXCJcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6Z2V0UmFuZG9tVmFsdWUoaW1ncyksXHJcbiAgICBDb21tZW50czpbXSxcclxufSlcclxuXHJcbmNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzovL2RhdGE6YWRkUG9zdEFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOi8vZGF0YTp7cG9zdElkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihwb3N0PT5wb3N0LmlkICE9PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7Ly9kYXRhOmFkZENvbW1lbnRBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQocG9zdD0+cG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9FUlJPUjovL3tkYXRhOmVycn1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6Ly9kYXRhOmxvYWRQb3N0QXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwOyAvLyAxMOqwnOyUqSDqsozsi5zquIDsnYQg6rCA7KC47Jik66+A66GcIDEwIOuvuOunjOydvOuVjCBmYWxzZSBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzp7Ly97ZGF0YTp7cG9zdElkLFVzZXJJZH19XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PVwiLGRyYWZ0Lm1haW5Qb3N0cylcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChwb3N0PT5wb3N0LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDphY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOnsvL3tkYXRhOntwb3N0SWQsVXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQocG9zdCA9PiBwb3N0LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiAvLyB7ZGF0YTp1cGxvYWRJbWFnZXNBcGkoKS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTogIC8vIHtkYXRhOmluZGV4fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LGkpPT4gaSAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6IC8vIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmRhdGEucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0UmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dJbkVyb3JyOm51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ091dERvbmU6ZmFsc2UsXHJcbiAgICBsb2dPdXRFcm9ycjpudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIGZvbGxvd0Vyb3JyOm51bGwsXHJcblxyXG4gICAgdW5Gb2xsb3dVcExvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bkZvbGxvd1VwRG9uZTpmYWxzZSxcclxuICAgIHVuRm9sbG93VXBFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRVc2VyTG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRVc2VyRG9uZTpmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6bnVsbCxcclxuICAgIFxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZTpmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjpudWxsLFxyXG5cclxuICAgIHVzZXJJbmZvOm51bGwsXHJcblxyXG4gICAgY2hhbmdlVXNlckxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VVc2VyRG9uZTpmYWxzZSxcclxuICAgIGNoYW5nZVVzZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6bnVsbCxcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOm51bGwsXHJcblxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjpudWxsLFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9MT0dfSU5fRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9MT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRVJST1IgPSBcInVzZXJSZWR1Y2VyL0xPR19PVVRfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9TSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRVJST1IgPSBcInVzZXJSZWR1Y2VyL1NJR05fVVBfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwidXNlclJlZHVjZXIvRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0VSUk9SID0gXCJ1c2VyUmVkdWNlci9GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJ1c2VyUmVkdWNlci9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19FUlJPUiA9IFwidXNlclJlZHVjZXIvVU5GT0xMT1dfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwidXNlclJlZHVjZXIvQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gXCJ1c2VyUmVkdWNlci9SRU1PVkVfUE9TVF9UT19NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfTVlfSU5GT19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfTVlfSU5GT19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0NIQU5HRV9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9VU0VSX0VSUk9SID0gXCJwb3N0UmVkdWNlci9DSEFOR0VfVVNFUl9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0VSUk9SID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0VSU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9MT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRVJST1IgPSBcInBvc3RSZWR1Y2VyL0xPQURfRk9MTE9XSU5HU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJwb3N0UmVkdWNlci9SRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRVJST1IgPSBcInBvc3RSZWR1Y2VyL1JFTU9WRV9GT0xMT1dFUl9FUlJPUlwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpPT4oe1xyXG4gICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHsvL3tkYXRhOntlbWFpbCxwYXNzd29yZH19XHJcbiAgICB0eXBlOlNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IGRhdGE9Pih7Ly97ZW1haWwsbmlja25hbWUscGFzc3dvcmR9XHJcbiAgICBpZDoxLFxyXG4gICAgbmlja25hbWU6XCJmb3hib3hyXCIsXHJcbiAgICAuLi5kYXRhLFxyXG4gICAgUG9zdHM6W3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6XCJyXCJ9LHtuaWNrbmFtZTpcImFzclwifSx7bmlja25hbWU6XCJyZFwifSxdLFxyXG59KVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6Ly97ZGF0YTp7dXNlcklkfX1cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YS51c2VySWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzovL3tkYXRhOnt1c2VySWR9fVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKHY9PnYuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOi8ve2VtYWlsLG5pY2tuYW1lLHBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTovL2RhdGE6e2lkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1RPX01FOi8vZGF0YTp7cG9zdElkfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIocG9zdD0+cG9zdC5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmxvYWRNeUluZm9BcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRVJST1I6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDovL2RhdGE6bG9hZE15SW5mb0FwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Fcm9yciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9VU0VSX1JFUVVFU1Q6Ly9kYXRhOmNoYW5nZVVzZXJBcGkoKS5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJvcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX1VTRVJfU1VDQ0VTUzovL3tkYXRhOm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfVVNFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZVVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VVc2VyRXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93ZXJzQXBpKCkuZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOi8vZGF0YTpsb2FkRm9sbG93aW5nc0FwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOi8vZGF0YTpyZW1vdmVGb2xsb3dlckFwaSgpLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVyb3JyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9FUlJPUjpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyIsImltcG9ydCB7YWxsLGZvcmssdGFrZSx0YWtlRXZlcnksdGFrZUxhdGVzdCxwdXQsZGVsYXl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHtiYWNrQWRkcmVzc30gZnJvbSBcIi4uL2JhY2tcIlxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclNhZ2FcIlxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFNhZ2FcIlxyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tBZGRyZXNzO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59ICIsImltcG9ydCB7IENhbGN1bGF0b3JGaWxsZWQsIFB1c2hwaW5Ud29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUV2ZXJ5LHB1dCxkZWxheSxjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCJcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIlxyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfUkVRVUVTVCxBRERfUE9TVF9TVUNDRVNTLEFERF9QT1NUX0VSUk9SLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxSRU1PVkVfUE9TVF9TVUNDRVNTLFJFTU9WRV9QT1NUX0VSUk9SLFxyXG4gICAgIEFERF9DT01NRU5UX1JFUVVFU1QsQUREX0NPTU1FTlRfU1VDQ0VTUyxBRERfQ09NTUVOVF9FUlJPUixcclxuICAgICBMT0FEX1BPU1RfUkVRVUVTVCxMT0FEX1BPU1RfU1VDQ0VTUyxMT0FEX1BPU1RfRVJST1IsXHJcbiAgICAgTElLRV9QT1NUX1JFUVVFU1QsTElLRV9QT1NUX1NVQ0NFU1MsTElLRV9QT1NUX0VSUk9SLFxyXG4gICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsVU5MSUtFX1BPU1RfU1VDQ0VTUyxVTkxJS0VfUE9TVF9FUlJPUixcclxuICAgICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsVVBMT0FEX0lNQUdFU19TVUNDRVNTLFVQTE9BRF9JTUFHRVNfRVJST1IsXHJcbiAgICAgUkVUV0VFVF9SRVFVRVNULFJFVFdFRVRfU1VDQ0VTUyxSRVRXRUVUX0VSUk9SLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlclwiXHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9UT19NRSxSRU1PVkVfUE9TVF9UT19NRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclJlZHVjZXJcIlxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4gXHJcbmZ1bmN0aW9uIGFkZFBvc3RBcGkoZGF0YSl7IC8vZGF0YTpmb3JtRGF0YSA6IGZvcm1EYXRh64qUIHt97JWIIOqwkOyLuOqzoCDqt7jrg6Ug64Sj64qU64ukXHJcbiAgICBjb25zb2xlLmxvZyhcImFwaVwiKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIixkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXsvLyhkYXRhOmZvcm1EYXRhKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgXHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBlcnJvcjplcnIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBcGkoZGF0YSl7IFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pey8vKGRhdGE6e3Bvc3RJZCxjb250ZW50LHVzZXJJZH0pXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QXBpKGRhdGEpe1xyXG4gICAgLy8gZ2V0IOuwqeyLneydgCDrkZDrsojsp7gg7J247J6Q7JeQIGRhdGHqsIAg66q765Ok7Ja06rCQIOq3uOuemOyEnCDsv7zrpqwg7Iqk7Yq466eB7Jy866Gc7ZW07JW87ZWoXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7ZGF0YSB8fCAwfSZsaW1pdD0xMGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXsvL3tkYXRhOmxhc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pey8ve2RhdGE6cG9zdElkfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TElLRV9QT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuTGlrZVBvc3RBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuTGlrZVBvc3QoYWN0aW9uKXsvL3tkYXRhOnBvc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuTGlrZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkxJS0VfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhLmlkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pey8vKGRhdGE6e2lkfSlcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9pbWFnZXNgLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbil7Ly97ZGF0YTppbWFnZUZvcm1EYXRhfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVUExPQURfSU1BR0VTX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKXsvL3tkYXRhOnBvc3RJZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFVFdFRVRfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX1BPU1RfUkVRVUVTVCxhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KEFERF9DT01NRU5UX1JFUVVFU1QsYWRkQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1BPU1RfUkVRVUVTVCxsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTElLRV9QT1NUX1JFUVVFU1QsbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVU5MSUtFX1BPU1RfUkVRVUVTVCx1bkxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9QT1NUX1JFUVVFU1QscmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoVVBMT0FEX0lNQUdFU19SRVFVRVNULHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFVFdFRVRfUkVRVUVTVCxyZXR3ZWV0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IFB1c2hwaW5Ud29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUV2ZXJ5LGRlbGF5LGNhbGwscHV0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxMT0dfSU5fU1VDQ0VTUyxMT0dfSU5fRVJST1IsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsTE9HX09VVF9TVUNDRVNTLExPR19PVVRfRVJST1IsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsU0lHTl9VUF9TVUNDRVNTLFNJR05fVVBfRVJST1IsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxGT0xMT1dfU1VDQ0VTUyxGT0xMT1dfRVJST1IsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFVORk9MTE9XX1NVQ0NFU1MsVU5GT0xMT1dfRVJST1IsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxMT0FEX1VTRVJfU1VDQ0VTUyxMT0FEX1VTRVJfRVJST1IsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxMT0FEX01ZX0lORk9fU1VDQ0VTUyxMT0FEX01ZX0lORk9fRVJST1IsXHJcbiAgICBDSEFOR0VfVVNFUl9SRVFVRVNULENIQU5HRV9VU0VSX1NVQ0NFU1MsQ0hBTkdFX1VTRVJfRVJST1IsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsTE9BRF9GT0xMT1dFUlNfRVJST1IsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxMT0FEX0ZPTExPV0lOR1NfRVJST1IsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxSRU1PVkVfRk9MTE9XRVJfRVJST1IsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7YmFja0FkZHJlc3N9IGZyb20gXCIuLi9iYWNrXCJcclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FwaSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXJgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BcGkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhheGlvcy5kZWZhdWx0cy5oZWFkZXJzKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX01ZX0lORk9fRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQXBpKGRhdGEpey8ve2RhdGE6e2VtYWlsLHBhc3N3b3JkfX1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvdXNlci9sb2dpbmAsZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pey8ve2RhdGE6e2VtYWlsLHBhc3N3b3JkfX1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX0lOX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFwaSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyL2xvZ291dGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBcGkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX09VVF9TVUNDRVNTXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfT1VUX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVycixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3VzZXJgLGRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyYCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pey8ve2RhdGE6e2VtYWlsLHBhc3N3b3JkLG5pY2tuYW1lfX1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKXsvLyB7ZGF0YTppZH1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FwaSxhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKXsvL3tkYXRhOmlkfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRVJST1IsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVXNlckFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXJgLHtuaWNrbmFtZTpkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VVc2VyKGFjdGlvbil7Ly97ZGF0YTpuaWNrbmFtZX1cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZVVzZXJBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Q0hBTkdFX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpDSEFOR0VfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93ZXJzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbil7Ly9cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX0ZPTExPV0VSU19FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2luZ3NgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbil7Ly9cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQXBpLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XSU5HU19FUlJPUixcclxuICAgICAgICAgICAgZGF0YTplcnJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pey8ve2RhdGE6dXNlcklkfVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBcGksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX0ZPTExPV0VSX0VSUk9SLFxyXG4gICAgICAgICAgICBkYXRhOmVyclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfSU5fUkVRVUVTVCxsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX09VVF9SRVFVRVNULGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoU0lHTl9VUF9SRVFVRVNULHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoRk9MTE9XX1JFUVVFU1QsZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFVORk9MTE9XX1JFUVVFU1QsdW5Gb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1QsbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZVVzZXIoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShDSEFOR0VfVVNFUl9SRVFVRVNULGNoYW5nZVVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX0ZPTExPV0VSU19SRVFVRVNULGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QscmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX01ZX0lORk9fUkVRVUVTVCxsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVTdG9yZSxhcHBseU1pZGRsZXdhcmUsY29tcG9zZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIlxyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCJcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoLGdldFN0YXRlfSkgPT4gKG5leHQpPT4oYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpPT57XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSxsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcixlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7IC8vIHNhZ2FUYXNrIOuTseuhnVxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=