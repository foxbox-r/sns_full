import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout"
import NicknameEditForm from "../components/NicknameEditForm"
import FollowList from "../components/FollowList"
import {useSelector,useDispatch} from "react-redux"
import {LOAD_FOLLOWERS_REQUEST,LOAD_FOLLOWINGS_REQUEST} from "../reducers/userReducer"

import Head from "next/head"
import {useRouter} from "next/router"

import {END} from "redux-saga"
import axios from "axios";
import wrapper from "../store/configureStore"
import {LOAD_MY_INFO_REQUEST} from "../reducers/userReducer"

function Profile(){
    const dispatch = useDispatch();
    const router = useRouter();
    const {me} = useSelector(state=>state.userReducer);

    useEffect(()=>{
        if(!me) {
            router.push('/');
        }
    },[me])
    
    useEffect(()=>{
        dispatch({
            type:LOAD_FOLLOWERS_REQUEST
        })
        dispatch({
            type:LOAD_FOLLOWINGS_REQUEST
        })
    },[])

    if(!me) return null;
    return (
        <>
            <Head>
                <title>profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={me.Followings} />
                <FollowList header="팔로워 목록" data={me.Followers} />
            </AppLayout>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if(context.req && cookie){
        axios.defaults.headers.Cookie = cookie; // 쿠키 넣기
    }
    context.store.dispatch({
        type:LOAD_MY_INFO_REQUEST,
    })

    context.store.dispatch(END); // 사용법 request success 기다리기
    await context.store.sagaTask.toPromise(); // 사용법 configureStore.js 에서 등록한 sgagTask 를 사용
});


export default Profile;