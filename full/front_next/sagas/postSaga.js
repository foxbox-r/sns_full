import { CalculatorFilled, PushpinTwoTone } from "@ant-design/icons";
import {all,fork,takeEvery,put,delay,call} from "redux-saga/effects"
import shortId from "shortid"
import {
    ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_ERROR,
    REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_ERROR,
     ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_ERROR,
     LOAD_POST_REQUEST,LOAD_POST_SUCCESS,LOAD_POST_ERROR,
     generateDummyPost
} from "../reducers/postReducer"
import {
    ADD_POST_TO_ME,REMOVE_POST_TO_ME,
} from "../reducers/userReducer"

import axios from "axios";

function addPostApi(data){ 
    console.log("api");
    return axios.post("/post",{content:data.postContent});
}

function* addPost(action){//(data:{postContent})
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

function* removePost(action){//(data:{id})
    try{
        yield delay(1000);
        yield put({ 
            type:REMOVE_POST_SUCCESS,
            data:{
                id:action.data.id,
            }
        });
        yield put({
            type:REMOVE_POST_TO_ME,
            data:{
                id:action.data.id,
            }
        })
    } catch(err){
        put({
            type:REMOVE_POST_ERROR,
            error:err,
        })
    }
}

function addCommentApi(data){ 
    return axios.post(`/post/${data.postId}/comment`,{content:data.postContent});
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

function* loadPost(action){//
    try{
        const newPosts = generateDummyPost(2);
        yield delay(1000);
        yield put({
            type:LOAD_POST_SUCCESS,
            data:{
                newLoadedPosts:newPosts
            }
        })
    } catch(err){
        yield put({
            type:LOAD_POST_ERROR,
            data:err
        })
    }
}

function* watchAddPost(){
    yield takeEvery(ADD_POST_REQUEST,addPost);
}

function* watchRemovePost(){
    yield takeEvery(REMOVE_POST_REQUEST,removePost);
}

function* watchAddComment(){
    yield takeEvery(ADD_COMMENT_REQUEST,addComment)
}
function* watchLoadPost(){
    yield takeEvery(LOAD_POST_REQUEST,loadPost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchLoadPost),
    ])
}