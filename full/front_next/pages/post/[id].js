// post/[id].js

import React from 'react';
import {useRouter} from "next/router"
import {useSelector} from "react-redux"
import PostCard from "../../components/PostCard"
import Head from "next/head"
import {END} from "redux-saga";
import axios from "axios";
import wrapper from "../../store/configureStore"
import {LOAD_MY_INFO_REQUEST} from "../../reducers/userReducer"
import {LOAD_POST_REQUEST} from "../../reducers/postReducer";
import AppLayout from "../../components/AppLayout"

function Post(){
    const router = useRouter();
    const id = parseInt(router.query.id);
    const {singlePost} = useSelector(state=>state.postReducer);

    return (
        <AppLayout>
            <Head>
                <title>
                    {singlePost.User.nickname}님의 글
                </title>
                <meta name="description" content={singlePost.content} />
                <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
                <meta property="og:description" content={singlePost.content} />
                {/* <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src:"https/nodebird.com/favicon.ico"} /> */}
                <meta property="og:image" content="http://localhost:3000/favicon.ico" />
                <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
            
            </Head>
            <PostCard post={singlePost} />
        </AppLayout>

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

    context.store.dispatch({
        type:LOAD_POST_REQUEST,
        data:context.params.id,
    })

    context.store.dispatch(END); // 사용법 request success 기다리기
    await context.store.sagaTask.toPromise(); // 사용법 configureStore.js 에서 등록한 sgagTask 를 사용
});

export default Post;