import React,{useState,useCallback} from 'react';
import {Button, Card,Popover,Avatar,List,Comment} from "antd"
import {RetweetOutlined,HeartTwoTone,HeartOutlined,MessageOutlined,EllipsisOutlined} from "@ant-design/icons";
import {useSelector,useDispatch} from "react-redux";
import PostImages from "../components/PostImages"
import CommentForm from "../components/CommentForm"
import PostCardContent from "../components/PostCardContent"
import {removePostRequestAction} from "../reducers/postReducer"
import FollowButton from "./FollowButton"

function PostCard({post}){

    const [liked,setLiked] = useState(false);
    const [commentFormOpened,setCommentFormOpenend] = useState(false);
    const {me} = useSelector(state=>state.userReducer);
    const {removePostLoading}  = useSelector(state=>state.postReducer);
    const dispatch = useDispatch();
    const id = me?.id;//  me && me.id 
    const onToggleLike = useCallback(()=>{
        setLiked(prev=>!prev);
    },[])
    const onToggleComment = useCallback(()=>{
        setCommentFormOpenend(prev=>!prev);
    },[])
    const onRemovePost = useCallback((id)=>{
        dispatch(removePostRequestAction({id}));
    },[]);
    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    (liked ? <HeartTwoTone twoToneColor="#eb2f96"  onClick={onToggleLike} key="heart"/>:<HeartOutlined onClick={onToggleLike} key="heart"/>),
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ?
                            <>
                                <Button>수정</Button>
                                <Button loading={false} type="danger" onClick={()=>onRemovePost(post.id)}>{removePostLoading?"로딩...":"삭제"}</Button>
                            </>:<Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                extra={id && <FollowButton post={post} />}
            >
                    <Card.Meta 
                        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.content} />}
                    />
                {/* <Image />
                <Content />
                <Button></Button> */}
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item)=>(
                            <li>
                                <Comment 
                                    author={item.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    )
}

export default PostCard;