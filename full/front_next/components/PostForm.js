import React,{useCallback,useState,useRef,useEffect} from 'react';
import {Form, Input,Button} from "antd"
import {useSelector,useDispatch} from "react-redux";
import {addPostRequestAction} from "../reducers/postReducer"
import useInput from "../hooks/useInput"

function PostForm(){
    const dispatch = useDispatch();
    const imgInput = useRef();
    const {imagePaths,addPostDone,addPostLoading} = useSelector(state=>state.postReducer);
    const [text,onChangePostText,setText] = useInput("");

    const onSubmit = useCallback(()=>{
        dispatch(addPostRequestAction({postContent:text}));
    },[text])

    const onClickImgUpload = useCallback(()=>{
        imgInput.current.click();
    },[imgInput.current])

    useEffect(()=>{
        if(addPostDone){
            setText("");
        }
    },[addPostDone]);

    return (
        <Form style={{margin:"10px 0 20px"}} onFinish={onSubmit}>
            <Input.TextArea 
                value={text}
                onChange={onChangePostText}
                maxLength={140}
                placeholder="isnert your post"
            />
            <div>
                <input type="file" multiple hidden ref={imgInput}/>
                <Button onClick={onClickImgUpload}>img upload</Button>
                <Button type="primary" style={{float:"right"}} htmlType="submit">{addPostLoading?"로딩...":"짹짹"}</Button> 
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display:"inline-block"}}>
                        <img src={v} style={{width:"200px"}} alt={v} />
                        <div>
                            <Button>remove</Button>
                        </div>
                    </div>   
                ))}
            </div>
        </Form>
    )
}

export default PostForm;