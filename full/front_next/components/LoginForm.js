import React,{useState,useCallback,useMemo,useEffect} from 'react';
import {Form,Input,Button} from "antd";
import Link from "next/link"
import styled from "styled-components"
import useInput from "../hooks/useInput"
import {useDispatch,useSelector} from "react-redux";
import {loginRequestAction} from "../reducers/userReducer"

const ButtonWrapper = styled.div`
    margin-top:10px;
`

const StyleForm = styled(Form)`
    padding:10px;
`


function LoginForm({setIsLoggedIn}){

    const dispatch = useDispatch();
    const {logInLoading,logInError} = useSelector(state=>{console.log(state); return state.userReducer;});
    const buttonStyle = useMemo(()=>({marginTop:10}),[]);

    const [email,onChangeEmail] = useInput("");
    const [password,onChangePassword] = useInput("");

    const onSubmitForm = useCallback(()=>{
        console.log(email,password);
        dispatch(loginRequestAction({password,email}));
    },[email,password]);

    useEffect(()=>{
        if(logInError)
            alert(logInError);
    },[logInError])

    return (
        <StyleForm onFinish={onSubmitForm}>
            <div>
                <label htmlFor="use-email">이메일</label>
                <br/>
                <Input type="email" name="user-email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비번</label>
                <br/>
                <Input 
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper style={buttonStyle}>
                <Button type="primary" htmlType="submit" loading={false}>{logInLoading?"로딩중...":"로그인"}</Button>
                <Link href="/Signup"><a><button>회원가입</button></a></Link>
            </ButtonWrapper>
        </StyleForm>
    )
}

export default LoginForm;