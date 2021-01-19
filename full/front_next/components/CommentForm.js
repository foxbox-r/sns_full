import { Input,Button,Form } from 'antd';
// import Form from 'antd/lib/form/Form';
import React,{useCallback,useEffect} from 'react';
import useInput from "../hooks/useInput"
import {useSelector,useDispatch} from "react-redux"
import {addCommentRequestAction} from "../reducers/postReducer"


function CommentForm({post}){

    const dispatch = useDispatch();
    const id = useSelector(state=>state.userReducer.me?.id);
    const {addCommentDone,addCommentLoading} = useSelector(state=>state.postReducer);
    const [commentText,onChangeCommentText,setText] = useInput("");
    
    const onSubmitComment = useCallback(()=>{
        console.log(post.id,commentText,id);
        dispatch(addCommentRequestAction({
            postId:post.id,
            content:commentText,
            userId:id
        }))
    },[commentText]);

    useEffect(()=>{
        if(addCommentDone){
            setText("");
        }
    },[addCommentDone])

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type="primary" htmlType="submit">{addCommentLoading?"로딩...":"삐약"}</Button>
            </Form.Item>
        </Form>
    )
}

export default CommentForm;