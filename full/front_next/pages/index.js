import React, { useEffect } from 'react';
import AppLayout from "../components/AppLayout"
import {useSelector,useDispatch} from "react-redux"
import Head from "next/head"
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm"
import {LOAD_POST_REQUEST} from "../reducers/postReducer"
import {LOAD_USER_REQUEST} from "../reducers/userReducer"
function index(){
    const {logInDone} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();
    const {mainPosts,hasMorePosts,loadPostLoading} = useSelector(state=>state.postReducer);

    useEffect(()=>{
        dispatch({
            type:LOAD_USER_REQUEST,
        })
        dispatch({
            type:LOAD_POST_REQUEST,
        });
    },[]);

    useEffect(()=>{
        function onScroll(e){
            const result = Math.floor(window.scrollY+document.documentElement.clientHeight)>=document.documentElement.scrollHeight-300;
            if(result && hasMorePosts && !loadPostLoading){
                const lastId = mainPosts[mainPosts.length-1]?.id;
                dispatch({
                    type:LOAD_POST_REQUEST,
                    data:lastId,
                })
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>{
            window.removeEventListener("scroll",onScroll);
        }
    },[hasMorePosts,loadPostLoading,mainPosts])

    return (
        <>
            <Head>
                <title>home</title>
            </Head>
            <AppLayout>
                {logInDone && <PostForm />}
                {mainPosts.map((post,index)=><PostCard key={index} post={post} />) }
            </AppLayout>
        </>
    )
}

export default index;