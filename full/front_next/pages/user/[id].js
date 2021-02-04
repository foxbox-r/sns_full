import React, { useEffect } from 'react';
import AppLayout from "../../components/AppLayout"
import {useSelector,useDispatch} from "react-redux"
import Head from "next/head"
import PostCard from "../../components/PostCard";
import PostForm from "../../components/PostForm"
import {LOAD_USER_POSTS_REQUEST} from "../../reducers/postReducer"
import {LOAD_MY_INFO_REQUEST} from "../../reducers/userReducer"
import wrapper from "../../store/configureStore"
import {END} from "redux-saga"
import axios from "axios";
import {useRouter} from "next/router"

function User(){
    const {logInDone} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();
    const {mainPosts,hasMorePosts,loadPostLoading} = useSelector(state=>state.postReducer);
    const router = useRouter();
    const UserId = router.query.id;
    useEffect(()=>{
       
    },[]);

    // getStaticPaths일때
    // if(router.isFallback){
    //     return <div>loading ...</div>;
    // }

    useEffect(()=>{
        function onScroll(e){
            const result = Math.floor(window.scrollY+document.documentElement.clientHeight)>=document.documentElement.scrollHeight-300;
            if(result && hasMorePosts && !loadPostLoading){
                const lastId = mainPosts[mainPosts.length-1]?.id;
                dispatch({
                    type:LOAD_USER_POSTS_REQUEST,
                    data:{
                        UserId,
                        lastId
                    },
                })
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>{
            window.removeEventListener("scroll",onScroll);
        }
    },[hasMorePosts,loadPostLoading,mainPosts,UserId])

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

// export async function getStaticPaths(){
//     return {
//         paths:[
//             {params:{id:'13'}},
//             {params:{id:'14'}},
//             {params:{id:'15'}},
//         ],
//         //fallback : false (사용자가 위에 paths에 있는 id를 요청 안하면 error를 띄움)
//         //fallback : true (사용자가 위에 paths에 있는 id를 요청 안해도 에러 안뜸 그대신 isFallback에 잠깐 true가 됨)
//         fallback:true,
//     }
// }

// index 콤포넌트보다 앞에 실행 됨 browser => client_server(현재) and (쿠기없음) => back_server
// 쿠키는 브라우저가 넣는데 client_server에서는 쿠키가 없음
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
        type:LOAD_USER_POSTS_REQUEST,
        data:{
            UserId:context.params.id,
        }
    });

    context.store.dispatch(END); // 사용법 request success 기다리기
    await context.store.sagaTask.toPromise(); // 사용법 configureStore.js 에서 등록한 sgagTask 를 사용
});

export default User;