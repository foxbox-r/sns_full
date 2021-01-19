import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout"
import NicknameEditForm from "../components/NicknameEditForm"
import FollowList from "../components/FollowList"
import {useSelector,useDispatch} from "react-redux"
import {LOAD_FOLLOWERS_REQUEST,LOAD_FOLLOWINGS_REQUEST} from "../reducers/userReducer"

import Head from "next/head"
import {useRouter} from "next/router"

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

export default Profile;