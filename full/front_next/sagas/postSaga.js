import { CalculatorFilled, PushpinTwoTone } from "@ant-design/icons";
import {all,fork,takeEvery,put,delay,call} from "redux-saga/effects"
import shortId from "shortid"
import {
    ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_ERROR,
    REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_ERROR,
     ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_ERROR,
     LOAD_POST_REQUEST,LOAD_POST_SUCCESS,LOAD_POST_ERROR,
     LIKE_POST_REQUEST,LIKE_POST_SUCCESS,LIKE_POST_ERROR,
     UNLIKE_POST_REQUEST,UNLIKE_POST_SUCCESS,UNLIKE_POST_ERROR,
     generateDummyPost,
     UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_SUCCESS,UPLOAD_IMAGES_ERROR,
     RETWEET_REQUEST,RETWEET_SUCCESS,RETWEET_ERROR,
} from "../reducers/postReducer"
import {
    ADD_POST_TO_ME,REMOVE_POST_TO_ME,
} from "../reducers/userReducer"

import axios from "axios";
 
function addPostApi(data){ //data:formData : formData는 {}안 감싸고 그냥 넣는다
    console.log("api");
    return axios.post("/post",data);
}

function* addPost(action){//(data:formData)
    try{
        const result = yield call(addPostApi,action.data);
        yield put({ 
            type:ADD_POST_SUCCESS,
            data:result.data,
        });
        yield put({
            type:ADD_POST_TO_ME,
            data:result.data.id
        })
    } catch(err){
        put({
            type:ADD_POST_ERROR,
            error:err,
        })
    }
}


function addCommentApi(data){ 
    return axios.post(`/post/${data.postId}/comment`,data);
}

function* addComment(action){//(data:{postId,content,userId})
    try{
        const result = yield call(addCommentApi,action.data);
        yield delay(1000);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:result.data,
        })
    } catch(err){
        yield put({
            type:ADD_COMMENT_ERROR,
            data:err
        })
    }
}

function loadPostApi(data){
    // get 방식은 두번째 인자에 data가 못들어감 그래서 쿼리 스트링으로해야함
    return axios.get(`/posts?lastId=${data || 0}&limit=10`);
}

function* loadPost(action){//{data:lastId}
    try{
        const result = yield call(loadPostApi,action.data);
        yield put({
            type:LOAD_POST_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:LOAD_POST_ERROR,
            data:err
        })
    }
}

function likePostApi(data){
    return axios.patch(`/post/${data}/like`);
}

function* likePost(action){//{data:postId}
    try{
        const result = yield call(likePostApi,action.data);
        yield put({
            type:LIKE_POST_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:LIKE_POST_ERROR,
            data:err
        })
    }
}

function unLikePostApi(data){
    return axios.delete(`/post/${data}/like`);
}

function* unLikePost(action){//{data:postId}
    try{
        const result = yield call(unLikePostApi,action.data);
        yield put({
            type:UNLIKE_POST_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:UNLIKE_POST_ERROR,
            data:err
        })
    }
}

function removePostApi(data){
    return axios.delete(`/post/${data.id}`);
}

function* removePost(action){//(data:{id})
    try{
        const result = yield call(removePostApi,action.data);
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:result.data
        })
        yield put({
            type:REMOVE_POST_TO_ME,
            data:result.data.id
        })
    } catch(err){
        put({
            type:REMOVE_POST_ERROR,
            error:err,
        })
    }
}

function uploadImagesApi(data){
    return axios.post(`/post/images`,data);
}

function* uploadImages(action){//{data:imageFormData}
    try{
        const result = yield call(uploadImagesApi,action.data);
        yield put({
            type:UPLOAD_IMAGES_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:UPLOAD_IMAGES_ERROR,
            data:err
        })
    }
}

function retweetApi(data){
    return axios.post(`/post/${data}/retweet`,data);
}

function* retweet(action){//{data:postId}
    try{
        const result = yield call(retweetApi,action.data);
        yield put({
            type:RETWEET_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:RETWEET_ERROR,
            data:err
        })
    }
}
function* watchAddPost(){
    yield takeEvery(ADD_POST_REQUEST,addPost);
}

function* watchAddComment(){
    yield takeEvery(ADD_COMMENT_REQUEST,addComment)
}

function* watchLoadPost(){
    yield takeEvery(LOAD_POST_REQUEST,loadPost);
}

function* watchLikePost(){
    yield takeEvery(LIKE_POST_REQUEST,likePost);
}

function* watchUnLikePost(){
    yield takeEvery(UNLIKE_POST_REQUEST,unLikePost);
}

function* watchRemovePost(){
    yield takeEvery(REMOVE_POST_REQUEST,removePost);
}
function* watchUploadImages(){
    yield takeEvery(UPLOAD_IMAGES_REQUEST,uploadImages);
}
function* watchRetweet(){
    yield takeEvery(RETWEET_REQUEST,retweet);
}
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchLoadPost),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchRemovePost),
        fork(watchUploadImages),
        fork(watchRetweet),
    ])
}