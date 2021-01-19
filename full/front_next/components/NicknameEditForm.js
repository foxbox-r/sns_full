import React,{useMemo,useCallback} from 'react';
import {Form,Input} from "antd"
import {useDispatch} from "react-redux"
import useInput from "../hooks/useInput"
import {CHANGE_USER_REQUEST} from "../reducers/userReducer"

function NicknameEditForm(){
    const style = useMemo(()=>({marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"}),[]);
    const [nickname,onChangeNickname,setNickname] = useInput("")
    const dispatch = useDispatch();

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            type:CHANGE_USER_REQUEST,
            data:nickname
        });
    },[nickname]);

    return (
        <Form style={style}  onFinish={onSubmit}>
            <Input.Search value={nickname} onChange={onChangeNickname} addonBefore="닉네임" enterButton="수정" />
        </Form>
    )
}

export default NicknameEditForm;