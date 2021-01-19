import React,{useCallback,useState,useRef,useEffect} from 'react';
import {Form, Input,Button} from "antd"
import {useSelector,useDispatch} from "react-redux";
import {ADD_POST_REQUEST,UPLOAD_IMAGES_REQUEST,REMOVE_IMAGE} from "../reducers/postReducer"
import useInput from "../hooks/useInput"
import {backAddress} from "../back"

function PostForm(){
    const dispatch = useDispatch();
    const imgInput = useRef();
    const {imagePaths,addPostDone,addPostLoading} = useSelector(state=>state.postReducer);
    const [text,onChangePostText,setText] = useInput("");

    const onSubmit = useCallback(()=>{
        if(!text || !text.trim()){
            return alert("게시글 작성하세요")
        }

        const formData = new FormData();
        imagePaths.forEach((p)=>{
                formData.append("image",p); // req.body.image
        })
        formData.append("content",text); // req.body.content
        dispatch({
            type:ADD_POST_REQUEST,
            data:formData,
        })
    },[text,imagePaths])

    const onClickImgUpload = useCallback(()=>{
        imgInput.current.click();
    },[imgInput.current])

    useEffect(()=>{
        if(addPostDone){
            setText("");
        }
    },[addPostDone]);

    const onChangeImages = useCallback((e)=>{
        console.log("images",e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files,(f)=>{
            imageFormData.append("image",f) // req.body.image
        })
        dispatch({
            type:UPLOAD_IMAGES_REQUEST,
            data:imageFormData
        })
    },[])

    const onRemoveImage = useCallback((index)=>()=>{
        dispatch({
            type:REMOVE_IMAGE,
            data:index
        })
    },[])

    return (
        <Form style={{margin:"10px 0 20px"}} onFinish={onSubmit}>
            <Input.TextArea 
                value={text}
                onChange={onChangePostText}
                maxLength={140}
                placeholder="isnert your post"
            />
            <div>
                <input type="file" onChange={onChangeImages} name="image" multiple hidden ref={imgInput}/>
                <Button onClick={onClickImgUpload}>img upload</Button>
                <Button type="primary" style={{float:"right"}} htmlType="submit">{addPostLoading?"로딩...":"짹짹"}</Button> 
            </div>
            <div>
                {imagePaths.map((v,i)=>(
                    <div key={v} style={{display:"inline-block"}}>
                        <img src={`${backAddress}/${v}`} style={{width:"200px"}} alt={v} />
                        <div>
                            <Button onClick={onRemoveImage(i)}>remove</Button>
                        </div>
                    </div>   
                ))}
            </div>
        </Form>
    )
}

export default PostForm;