import React,{useState,useCallback,useEffect} from 'react';
import AppLayout from "../components/AppLayout"
import {Form,Input,Checkbox,Button} from "antd"
import Head from "next/head"
import useInput from "../hooks/useInput"
import styled from "styled-components"
import {useDispatch,useSelector} from "react-redux"
import {signupRequestAction} from "../reducers/userReducer"
import { useRouter } from 'next/router';

import {END} from "redux-saga"
import axios from "axios";
import wrapper from "../store/configureStore"
import {LOAD_MY_INFO_REQUEST} from "../reducers/userReducer"

const ErrMsg = styled.div`
    color:red;
`

function Signup(){
    const router = useRouter();
    const dispatch = useDispatch();
    const {signUpLoading,signUpDone,signUpError,me} = useSelector(state=>state.userReducer);
    const [email,onChangeEmail] = useInput("");
    const [nickname,onChangeNickname] = useInput("");
    const [password,onChangePassword] = useInput("");
    const [passwordCheck,setPasswordCheck] = useState("");
    const [passwordError,setPasswordError] = useState(false);
    const [term,setTerm] = useState("");
    const [termError,setTermError] = useState(false);
    

    useEffect(()=>{
        if(signUpDone){
            router.push("/");
        }
    },[signUpDone])

    useEffect(()=>{
        if(me){
            router.replace("/");    // push 기록 O, replace 기록 X => 뒤로가기 여부
        }
    },[me])

    useEffect(()=>{
        if(signUpError){
            alert(signUpError);
        }
    },[signUpError])

    const onChangeTerm = useCallback(e=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[]);

    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        dispatch(signupRequestAction({email,password,nickname}));
    },[password,email,passwordCheck,term])
    return (
        <>
            <AppLayout>
                <Head>
                    <title>
                        signup
                    </title>
                </Head>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-email">이메일</label>
                        <br/>
                        <Input type="email" name="user-email" value={email} required onChange={onChangeEmail} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br/>
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br/>
                        <Input name="user-password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호체크</label>
                        <br/>
                        <Input name="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <ErrMsg>비밀번호가 일치하지 않음</ErrMsg>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                        {termError&&<ErrMsg>약관에 동의해야 합니다.</ErrMsg>}
                    </div>
                    <div style={{marginTop:10}}>
                        <Button type="primary" htmlType="submit">{signUpLoading?"로딩중...":"가입하기"}</Button>
                    </div>
                </Form>
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

export default Signup;