import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import Head from "next/head";
import {END} from "redux-saga";

import {Avatar,Card} from "antd";
import Applayout from "../components/AppLayout";
import wrapper from "../store/configureStore";
import {LOAD_USER_REQUEST} from "../reducers/userReducer";

function About(){
    const {userInfo} = useSelector(state=>state.userReducer);
    return (
        <>
            <Applayout>
                <Head>
                    <title>About</title>
                </Head>  
                {userInfo
                ?(
                    <Card
                    actions={[
                        <div key="twit">
                            ss
                            <br />
                            {userInfo.Posts}
                        </div>,
                        <div key="following">
                            팔로잉
                            <br />
                            {userInfo.Followings}
                        </div>,
                        <div key="follower">
                            팔로워
                            <br />
                            {userInfo.Followings}
                        </div>
                    ]}>
                        <Card.Meta
                        avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                        title={userInfo.nickname}
                        description="node bird"
                        />
                    </Card>
                )
                :null}   
            </Applayout>
        </>
    )
}

// !!!쓰지마세요 별로 사용할 일 이 없음 getStaticProps 한번 빌드할때 정적(static)인 html 코드로 바꾸어서 요청할때마다 html코드를 보냄 (내용이 잘 안바뀔때 사용) ex) 블로그의 글 (블로그의 글은 변할수 있지만 빈번하지는 않음)
// getServerSideProps 요청할때마다 server side rendering해서 보냄 (내용이 빈번히 바뀔때 사용) ex) sns 게시글(댓글,좋아요가 빈번히 바뀜)
export const getStaticProps = wrapper.getStaticProps(async (context)=>{
    context.store.dispatch({
        type:LOAD_USER_REQUEST,
        data:15,
    });
    context.store.dispatch(END); // request success 기다리기
    await context.store.sagaTask.toPromise(); // configureStore.js 에서 등록한 sgagTask 를 사용
})

export default About;