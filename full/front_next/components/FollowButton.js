import React ,{useCallback} from 'react';
import {Button} from "antd"

import {useSelector,useDispatch} from "react-redux";

import {
    UNFOLLOW_REQUEST,
    FOLLOW_REQUEST,
} from "../reducers/userReducer"

function FollowButton({post}){
    const dispatch = useDispatch();
    const {me,followLoading,unFollowLoading} = useSelector(state=>state.userReducer);
    const isFollowing = me?.Followings.find(v=>v.id === post.User.id);

    console.log("foloow",isFollowing,post.User.id);
    
    const onClickButton = useCallback(()=>{
        if(isFollowing){
            dispatch({
                type:UNFOLLOW_REQUEST,
                data:{postUserId:post.User.id}
            })
        } else{
            dispatch({
                type:FOLLOW_REQUEST,
                data:{postUserId:post.User.id}
            })
        }
    },[isFollowing]);

    return (
        <>
            <Button onClick={onClickButton}>
                {(followLoading || unFollowLoading )?"로딩중..":(isFollowing ? "언팔로우":"팔로우")}
            </Button>
        </>
    )
}

export default FollowButton;