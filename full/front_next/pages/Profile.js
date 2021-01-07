import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout"
import NicknameEditForm from "../components/NicknameEditForm"
import FollowList from "../components/FollowList"
import {useSelector} from "react-redux"

import Head from "next/head"
import {useRouter} from "next/router"

function Profile(){
    const router = useRouter();
    const {me} = useSelector(state=>state.userReducer);
    useEffect(()=>{
        console.log("me",me);
        if(!me) {
            router.push('/');
        }
    },[me])
    
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