import React,{useCallback, useEffect,useState} from 'react';
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
import useSWR from "swr";
import {backAddress} from "../back"

const fetcher = (url)=>axios.get(url,{withCredentials:true}).then(result=>result.data);

function Profile(){
    const dispatch = useDispatch();
    const router = useRouter();
    const {me} = useSelector(state=>state.userReducer);
    const [followersLimit,setFollowersLimit] = useState(1);
    const [followingsLimit,setFollowingsLimit] = useState(1);

    const {data:followersData,error:followerError} = useSWR(`${backAddress}/user/followers?limit=${followersLimit}`,fetcher);
    const {data:followingsData,error:followingError} = useSWR(`${backAddress}/user/followings?limit=${followingsLimit}`,fetcher);


    useEffect(()=>{
        if(!me) {
            router.push('/');
        }
    },[me])
    
    const loadMoreFollowings = useCallback(()=>{
        setFollowingsLimit(prev=>prev+3);
    },[])

    const loadMoreFollowers = useCallback(()=>{
        setFollowersLimit(prev=>prev+3);
    },[])

    // return 이 hooks(use...())보다 위에 있을수 없음 
    
    if(!me) return null;

    if(followerError || followingError){
        console.error(followerError || followingError);
        return <div>팔로잉/팔로워 로딩 중 에러가 발생함</div>;
    }

    
    return (
        <>
            <Head>
                <title>profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError} />
                <FollowList header="팔로워 목록" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError}/>
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