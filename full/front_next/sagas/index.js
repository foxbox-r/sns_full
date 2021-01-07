import {all,fork,take,takeEvery,takeLatest,put,delay} from "redux-saga/effects"
import axios from "axios"
import {backAddress} from "../back"
import userSaga from "./userSaga"
import postSaga from "./postSaga"

axios.defaults.baseURL = backAddress;
axios.defaults.withCredentials = true; 

export default function* rootSaga(){
    yield all([
        fork(userSaga),
        fork(postSaga),
    ]);
} 