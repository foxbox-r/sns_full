import { PushpinTwoTone } from "@ant-design/icons";
import {all,fork,takeEvery,delay,call,put} from "redux-saga/effects";
import {
    LOG_IN_REQUEST,LOG_IN_SUCCESS,LOG_IN_ERROR,
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_ERROR,
    SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_ERROR,
    FOLLOW_REQUEST,FOLLOW_SUCCESS,FOLLOW_ERROR,
    UNFOLLOW_REQUEST,UNFOLLOW_SUCCESS,UNFOLLOW_ERROR,
    LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_ERROR,
    CHANGE_USER_REQUEST,CHANGE_USER_SUCCESS,CHANGE_USER_ERROR,
    LOAD_FOLLOWERS_REQUEST,LOAD_FOLLOWERS_SUCCESS,LOAD_FOLLOWERS_ERROR,
    LOAD_FOLLOWINGS_REQUEST,LOAD_FOLLOWINGS_SUCCESS,LOAD_FOLLOWINGS_ERROR,
    REMOVE_FOLLOWER_REQUEST,REMOVE_FOLLOWER_SUCCESS,REMOVE_FOLLOWER_ERROR,
} from "../reducers/userReducer"
import axios from "axios"
import {backAddress} from "../back"

function loadUserApi(){
    return axios.get(`/user`);
}

function* loadUser(action){
    try{
        const result = yield call(loadUserApi);
        console.log(result);
        yield delay(1000);
        yield put({
            type:LOAD_USER_SUCCESS,
            data:result.data,
        });
    } catch(err){
        yield put({
            type:LOAD_USER_ERROR,
            data:err.response.data
        });
    }
}

function logInApi(data){//{data:{email,password}}
    return axios.post(`/user/login`,data);
}

function* logIn(action){//{data:{email,password}}
    try{
        const result = yield call(logInApi,action.data);
        yield delay(1000);
        yield put({
            type:LOG_IN_SUCCESS,
            data:result
        });
    } catch(err){
        yield put({
            type:LOG_IN_ERROR,
            data:err.response.data
        });
    }
}

function logOutApi(){
    return axios.post(`/user/logout`);
}

function* logOut(action){
    try{
        yield call(logOutApi);
        yield delay(1000);
        yield put({
            type:LOG_OUT_SUCCESS
        });
    } catch(err){
        put({
            type:LOG_OUT_ERROR,
            data:err,
        })
    }
}

function signUpApi(data){
    return axios.post(`/user`,data);
    // return axios.post(`http://localhost:3065/user`,data);
}

function* signUp(action){//{data:{email,password,nickname}}
    try{
        const result = yield call(signUpApi,action.data);
        console.log(result);
        yield delay(1000);
        yield put({
            type:SIGN_UP_SUCCESS,
        })
    } catch(err){
        yield put({
            type:SIGN_UP_ERROR,
            data:err
        })
    }
}

function followApi(data){
    return axios.patch(`/user/${data}/follow`);
}

function* follow(action){// {data:id}
    try{
        const result = yield call(followApi,action.data)
        yield put({
            type:FOLLOW_SUCCESS,
            data:result.data,
        })
    } catch(err){
        yield put({
            type:FOLLOW_ERROR,
            data:err
        })
    }
}

function unFollowApi(data){
    return axios.delete(`/user/${data}/follow`);
}

function* unFollow(action){//{data:id}
    try{
        const result = yield call(unFollowApi,action.data);
        yield put({
            type:UNFOLLOW_SUCCESS,
            data:result.data,
        })
    } catch(err){
        yield put({
            type:UNFOLLOW_ERROR,
            data:err
        })
    }
}

function changeUserApi(data){
    return axios.patch(`/user`,{nickname:data});
}

function* changeUser(action){//{data:nickname}
    try{
        const result = yield call(changeUserApi,action.data);
        yield delay(1000);
        yield put({
            type:CHANGE_USER_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:CHANGE_USER_ERROR,
            data:err
        })
    }
}

function loadFollowersApi(data){
    return axios.get(`/user/followers`);
}

function* loadFollowers(action){//
    try{
        const result = yield call(loadFollowersApi,action.data);
        yield put({
            type:LOAD_FOLLOWERS_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:LOAD_FOLLOWERS_ERROR,
            data:err
        })
    }
}

function loadFollowingsApi(data){
    return axios.get(`/user/followings`);
}

function* loadFollowings(action){//
    try{
        const result = yield call(loadFollowingsApi,action.data);
        yield put({
            type:LOAD_FOLLOWINGS_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:LOAD_FOLLOWINGS_ERROR,
            data:err
        })
    }
}


function removeFollowerApi(data){
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action){//{data:userId}
    try{
        const result = yield call(removeFollowerApi,action.data);
        yield put({
            type:REMOVE_FOLLOWER_SUCCESS,
            data:result.data
        })
    } catch(err){
        yield put({
            type:REMOVE_FOLLOWER_ERROR,
            data:err
        })
    }
}



function* watchLogIn(){
    yield takeEvery(LOG_IN_REQUEST,logIn);
}
function* watchLogOut(){
    yield takeEvery(LOG_OUT_REQUEST,logOut);
}
function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST,signUp);
}
function* watchFollow(){
    yield takeEvery(FOLLOW_REQUEST,follow);
}
function* watchUnFollow(){
    yield takeEvery(UNFOLLOW_REQUEST,unFollow);
}
function* watchLoadUser(){
    yield takeEvery(LOAD_USER_REQUEST,loadUser);
}
function* watchChangeUser(){
    yield takeEvery(CHANGE_USER_REQUEST,changeUser);
}
function* watchLoadFollowers(){
    yield takeEvery(LOAD_FOLLOWERS_REQUEST,loadFollowers);
}
function* watchLoadFollowings(){
    yield takeEvery(LOAD_FOLLOWINGS_REQUEST,loadFollowings);
}
function* watchRemoveFollower(){
    yield takeEvery(REMOVE_FOLLOWER_REQUEST,removeFollower);
}

export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLoadUser),
        fork(watchChangeUser),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
    ])
}