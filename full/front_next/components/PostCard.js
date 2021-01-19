import React,{useState,useCallback, useEffect} from 'react';
import {Button, Card,Popover,Avatar,List,Comment} from "antd"
import {RetweetOutlined,HeartTwoTone,HeartOutlined,MessageOutlined,EllipsisOutlined} from "@ant-design/icons";
import {useSelector,useDispatch} from "react-redux";
import PostImages from "../components/PostImages"
import CommentForm from "../components/CommentForm"
import PostCardContent from "../components/PostCardContent"
import {removePostRequestAction,LIKE_POST_REQUEST,UNLIKE_POST_REQUEST,RETWEET_REQUEST} from "../reducers/postReducer"
import FollowButton from "./FollowButton"

function PostCard({post}){

    const [commentFormOpened,setCommentFormOpenend] = useState(false);
    const {me} = useSelector(state=>state.userReducer);
    const {removePostLoading,retweetError}  = useSelector(state=>state.postReducer);
    const dispatch = useDispatch();
    const id = me?.id;//  me && me.id 

    // useEffect(()=>{
    //     if(retweetError){
    //         alert(retweetError);
    //     }
    // },[retweetError])

    const onLike = useCallback(()=>{
        dispatch({
            type:LIKE_POST_REQUEST,
            data:post.id
        })
    },[])

    const onUnLike = useCallback(()=>{
        dispatch({
            type:UNLIKE_POST_REQUEST,
            data:post.id
        })
    },[])

    const liked = post.Likers.find(user => user.id === id);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpenend(prev=>!prev);
    },[])
    const onRemovePost = useCallback((id)=>{
        dispatch(removePostRequestAction({id}));
    },[]);

    const onRetweet = useCallback(()=>{
        if(!id){
            return alert("로그인하세요.");
        }
        return dispatch({
            type:RETWEET_REQUEST,
            data:post.id,
        })
    },[id])

    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined onClick={onRetweet} key="retweet" />,
                    (liked ? <HeartTwoTone twoToneColor="#eb2f96"  onClick={onUnLike} key="heart"/>:<HeartOutlined onClick={onLike} key="heart"/>),
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
                title={post.Retweet ? `${post.User.nickname}님이 리트윗했습니다.`:null}
                extra={id && <FollowButton post={post} />}
            >
             {post.RetweetId && post.Retweet?
             (<Card
                cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images}/>}
             >
                <Card.Meta 
                avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
                title={post.Retweet.User.nickname}
                description={<PostCardContent postData={post.Retweet.content} />}
            />
             </Card>)
             :(<Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={<PostCardContent postData={post.content} />}
            />)}
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