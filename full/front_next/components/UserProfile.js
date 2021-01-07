import React,{useCallback} from 'react';
import {Card,Avatar,Button} from "antd"
import {useDispatch,useSelector} from "react-redux";
import {logoutRequestAction} from "../reducers/userReducer"

function UserProfile(){
    const {me,logOutLoading} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch()

    const onLogOut = useCallback(()=>{
        dispatch(logoutRequestAction());
    },[]);
;

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br/>{me.Posts.length}</div>,
                <div key="followings">팔로잉<br/>{me.Followings.length}</div>,
                <div key="followings">팔로워<br/>{me.Followers.length}</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>fbr</Avatar>}
                title="foxboxr"
            />
            <Button onClick={onLogOut}>{logOutLoading?"로딩중...":"로그아웃"}</Button>
        </Card>
    )
}

export default UserProfile;