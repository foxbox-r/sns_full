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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");




 // import withReduxSaga from "next-redux-saga";

function _app({
  Component
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(_app));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./reducers/userReducer.js
var userReducer = __webpack_require__("xjfw");

// EXTERNAL MODULE: ./reducers/postReducer.js
var postReducer = __webpack_require__("thP1");

// CONCATENATED MODULE: ./reducers/index.js



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
    case external_next_redux_wrapper_["HYDRATE"]:
      // HYDRATE는 서버 사이드에서 사용하는 리듀서다
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          userReducer: userReducer["J" /* default */],
          postReducer: postReducer["J" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./back.js
var back = __webpack_require__("Ih6y");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./sagas/userSaga.js






function loadUserApi(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["s" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["q" /* LOAD_USER_ERROR */],
      data: err.response.data
    });
  }
}

function loadMyInfoApi() {
  return external_axios_default.a.get(`/user`);
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoApi);
    yield Object(effects_["put"])({
      type: userReducer["p" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: userReducer["n" /* LOAD_MY_INFO_ERROR */],
      data: err.response.data
    });
  }
}

function logInApi(data) {
  //{data:{email,password}}
  return external_axios_default.a.post(`/user/login`, data);
}

function* logIn(action) {
  //{data:{email,password}}
  try {
    const result = yield Object(effects_["call"])(logInApi, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: userReducer["v" /* LOG_IN_SUCCESS */],
      data: result
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["t" /* LOG_IN_ERROR */],
      data: err.response.data
    });
  }
}

function logOutApi() {
  return external_axios_default.a.post(`/user/logout`);
}

function* logOut(action) {
  try {
    yield Object(effects_["call"])(logOutApi);
    yield Object(effects_["put"])({
      type: userReducer["y" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    Object(effects_["put"])({
      type: userReducer["w" /* LOG_OUT_ERROR */],
      data: err
    });
  }
}

function signUpApi(data) {
  return external_axios_default.a.post(`/user`, data); // return axios.post(`http://localhost:3065/user`,data);
}

function* signUp(action) {
  //{data:{email,password,nickname}}
  try {
    const result = yield Object(effects_["call"])(signUpApi, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: userReducer["F" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["D" /* SIGN_UP_ERROR */],
      data: err
    });
  }
}

function followApi(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  // {data:id}
  try {
    const result = yield Object(effects_["call"])(followApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["g" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["e" /* FOLLOW_ERROR */],
      data: err
    });
  }
}

function unFollowApi(data) {
  return external_axios_default.a.delete(`/user/${data}/follow`);
}

function* unFollow(action) {
  //{data:id}
  try {
    const result = yield Object(effects_["call"])(unFollowApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["I" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["G" /* UNFOLLOW_ERROR */],
      data: err
    });
  }
}

function changeUserApi(data) {
  return external_axios_default.a.patch(`/user`, {
    nickname: data
  });
}

function* changeUser(action) {
  //{data:nickname}
  try {
    const result = yield Object(effects_["call"])(changeUserApi, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: userReducer["d" /* CHANGE_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["b" /* CHANGE_USER_ERROR */],
      data: err
    });
  }
}

function loadFollowersApi(data) {
  return external_axios_default.a.get(`/user/followers`);
}

function* loadFollowers(action) {
  //
  try {
    const result = yield Object(effects_["call"])(loadFollowersApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["h" /* LOAD_FOLLOWERS_ERROR */],
      data: err
    });
  }
}

function loadFollowingsApi(data) {
  return external_axios_default.a.get(`/user/followings`);
}

function* loadFollowings(action) {
  //
  try {
    const result = yield Object(effects_["call"])(loadFollowingsApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["k" /* LOAD_FOLLOWINGS_ERROR */],
      data: err
    });
  }
}

function removeFollowerApi(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  //{data:userId}
  try {
    const result = yield Object(effects_["call"])(removeFollowerApi, action.data);
    yield Object(effects_["put"])({
      type: userReducer["B" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: userReducer["z" /* REMOVE_FOLLOWER_ERROR */],
      data: err
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeEvery"])(userReducer["u" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeEvery"])(userReducer["x" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeEvery"])(userReducer["E" /* SIGN_UP_REQUEST */], signUp);
}

function* watchFollow() {
  yield Object(effects_["takeEvery"])(userReducer["f" /* FOLLOW_REQUEST */], follow);
}

function* watchUnFollow() {
  yield Object(effects_["takeEvery"])(userReducer["H" /* UNFOLLOW_REQUEST */], unFollow);
}

function* watchLoadUser() {
  yield Object(effects_["takeEvery"])(userReducer["r" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchChangeUser() {
  yield Object(effects_["takeEvery"])(userReducer["c" /* CHANGE_USER_REQUEST */], changeUser);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeEvery"])(userReducer["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeEvery"])(userReducer["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeEvery"])(userReducer["A" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeEvery"])(userReducer["o" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnFollow), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchChangeUser), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadMyInfo)]);
}
// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");

// CONCATENATED MODULE: ./sagas/postSaga.js







function addPostApi(data) {
  //data:formData : formData는 {}안 감싸고 그냥 넣는다
  return external_axios_default.a.post("/post", data);
}

function* addPost(action) {
  //(data:formData)
  try {
    const result = yield Object(effects_["call"])(addPostApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: userReducer["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    Object(effects_["put"])({
      type: postReducer["d" /* ADD_POST_ERROR */],
      error: err
    });
  }
}

function addCommentApi(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  //(data:{postId,content,userId})
  try {
    const result = yield Object(effects_["call"])(addCommentApi, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: postReducer["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["a" /* ADD_COMMENT_ERROR */],
      data: err
    });
  }
}

function loadPostsApi(data) {
  // get 방식은 두번째 인자에 data가 못들어감 그래서 쿼리 스트링으로해야함
  return external_axios_default.a.get(`/posts?lastId=${data || 0}&limit=10`);
}

function* loadPosts(action) {
  //{data:lastId}
  try {
    const result = yield Object(effects_["call"])(loadPostsApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["o" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["m" /* LOAD_POSTS_ERROR */],
      data: err
    });
  }
}

function loadUserPostsApi(data) {
  // get 방식은 두번째 인자에 data가 못들어감 그래서 쿼리 스트링으로해야함
  return external_axios_default.a.get(`/user/${data.UserId}/posts?lastId=${data.lastId || 0}&limit=10`);
}

function* loadUserPosts(action) {
  //{data:{UserId,lastId or undeifined}}
  try {
    const result = yield Object(effects_["call"])(loadUserPostsApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["u" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["s" /* LOAD_USER_POSTS_ERROR */],
      data: err
    });
  }
}

function loadHashtagPostsApi(data) {
  // get 방식은 두번째 인자에 data가 못들어감 그래서 쿼리 스트링으로해야함
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data.tag)}/posts?lastId=${data.lastId || 0}&limit=10`);
}

function* loadHashtagPosts(action) {
  //{data:{tag,lastId}}
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["l" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["j" /* LOAD_HASHTAG_POSTS_ERROR */],
      data: err
    });
  }
}

function loadPostApi(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  //{data:PostId}
  try {
    const result = yield Object(effects_["call"])(loadPostApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["r" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["p" /* LOAD_POST_ERROR */],
      data: err
    });
  }
}

function likePostApi(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  //{data:postId}
  try {
    const result = yield Object(effects_["call"])(likePostApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["i" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["g" /* LIKE_POST_ERROR */],
      data: err
    });
  }
}

function unLikePostApi(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}

function* unLikePost(action) {
  //{data:postId}
  try {
    const result = yield Object(effects_["call"])(unLikePostApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["E" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["C" /* UNLIKE_POST_ERROR */],
      data: err
    });
  }
}

function removePostApi(data) {
  return external_axios_default.a.delete(`/post/${data.id}`);
}

function* removePost(action) {
  //(data:{id})
  try {
    const result = yield Object(effects_["call"])(removePostApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["y" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: userReducer["C" /* REMOVE_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    Object(effects_["put"])({
      type: postReducer["w" /* REMOVE_POST_ERROR */],
      error: err
    });
  }
}

function uploadImagesApi(data) {
  return external_axios_default.a.post(`/post/images`, data);
}

function* uploadImages(action) {
  //{data:imageFormData}
  try {
    const result = yield Object(effects_["call"])(uploadImagesApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["H" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["F" /* UPLOAD_IMAGES_ERROR */],
      data: err
    });
  }
}

function retweetApi(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  //{data:postId}
  try {
    const result = yield Object(effects_["call"])(retweetApi, action.data);
    yield Object(effects_["put"])({
      type: postReducer["B" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: postReducer["z" /* RETWEET_ERROR */],
      data: err
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeEvery"])(postReducer["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchAddComment() {
  yield Object(effects_["takeEvery"])(postReducer["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchLoadPosts() {
  yield Object(effects_["takeEvery"])(postReducer["n" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeEvery"])(postReducer["t" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeEvery"])(postReducer["k" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeEvery"])(postReducer["q" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLikePost() {
  yield Object(effects_["takeEvery"])(postReducer["h" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnLikePost() {
  yield Object(effects_["takeEvery"])(postReducer["D" /* UNLIKE_POST_REQUEST */], unLikePost);
}

function* watchRemovePost() {
  yield Object(effects_["takeEvery"])(postReducer["x" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchUploadImages() {
  yield Object(effects_["takeEvery"])(postReducer["G" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeEvery"])(postReducer["A" /* RETWEET_REQUEST */], retweet);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnLikePost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet)]);
}
// CONCATENATED MODULE: ./sagas/index.js





external_axios_default.a.defaults.baseURL = back["a" /* backAddress */];
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga); // sagaTask 등록

  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Ih6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backAddress; });
const backAddress = "http://localhost:3065";

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "MCK1":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "thP1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateDummyPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POSTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_POSTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNLIKE_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UPLOAD_IMAGES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RETWEET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_HASHTAG_POSTS_ERROR; });
/* unused harmony export addPostRequestAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return removePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return addCommentRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MCK1");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  addPostDone: false,
  addPostLoading: false,
  addPostError: null,
  loadPostsDone: false,
  loadPostsLoading: false,
  loadPostsError: null,
  hasMorePosts: true,
  loadUserPostsDone: false,
  loadUserPostsLoading: false,
  loadUserPostsError: null,
  loadPostDone: false,
  loadPostLoading: false,
  loadPostError: null,
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
const LOAD_POSTS_REQUEST = "postReducer/LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "postReducer/LOAD_POSTS_SUCCESS";
const LOAD_POSTS_ERROR = "postReducer/LOAD_POSTS_ERROR";
const LOAD_USER_POSTS_REQUEST = "postReducer/LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "postReducer/LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_ERROR = "postReducer/LOAD_USER_POSTS_ERROR";
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
const LOAD_HASHTAG_POSTS_REQUEST = "postReducer/LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "postReducer/LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_ERROR = "postReducer/LOAD_HASHTAG_POSTS_ERROR";
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

      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS: //data:loadPostsApi().data

      case LOAD_USER_POSTS_SUCCESS: //data:loadUserPostsApi().data

      case LOAD_HASHTAG_POSTS_SUCCESS:
        //data:loadHashtagPostsApi().data
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10; // 10개씩 게시글을 가져오므로 10 미만일때 false 

        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        break;

      case LOAD_USER_POSTS_ERROR:
      case LOAD_HASHTAG_POSTS_ERROR:
      case LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.data;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        //{data:loadPostApi().data}
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
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

/* harmony default export */ __webpack_exports__["J"] = (postReducer);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xjfw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return signupRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
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

/* harmony default export */ __webpack_exports__["J"] = (userReducer);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });