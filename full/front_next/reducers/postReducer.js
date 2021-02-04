import shortId from "shortid"
import produce from "immer"
import faker from "faker"

const initialState = {
    mainPosts:[],
    imagePaths:[],
    singlePost:null,

    addPostDone:false,
    addPostLoading:false,
    addPostError:null,

    loadPostsDone:false,
    loadPostsLoading:false,
    loadPostsError:null,
    hasMorePosts:true,

    
    loadUserPostsDone:false,
    loadUserPostsLoading:false,
    loadUserPostsError:null,

    loadPostDone:false,
    loadPostLoading:false,
    loadPostError:null,

    removePostDone:false,
    removePostLoading:false,
    removePostError:null,

    addCommentDone:false,
    addCommentLoading:false,
    addCommentError:null,

    likePostDone:false,
    likePostLoading:false,
    likePostError:null,

    unLikePostDone:false,
    unLikePostLoading:false,
    unLikePostError:null,

    uploadImagesDone:false,
    uploadImagesLoading:false,
    uploadImagesError:null,

    retweetDone:false,
    retweetLoading:false,
    retweetError:null,
}
const getRandomImg = ()=>{
    const arr = [];
    const randomValue = Math.random()*10+1;
    for(let i=0;i<randomValue;i++)
        arr.push({
            src:faker.image.image()
        });
    return arr;
};
export const generateDummyPost = number => Array(number).fill().map((v,i)=>({
    id:shortId.generate(),
    User:{
        id:shortId.generate(),
        nickname:faker.name.findName(),
    },
    content:faker.lorem.paragraph(),
    Images:getRandomImg(),
    Comments:[{
        User:{
            id:shortId.generate(),
            nickname:faker.name.findName()
        },
        content:faker.lorem.sentence(),
    }],
}));

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(0))

export const ADD_POST_REQUEST = "postReducer/ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "postReducer/ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "postReducer/ADD_POST_ERROR";

export const REMOVE_POST_REQUEST = "postReducer/REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "postReducer/REMOVE_POST_SUCCESS";
export const REMOVE_POST_ERROR = "postReducer/REMOVE_POST_ERROR";

export const ADD_COMMENT_REQUEST = "postReducer/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "postReducer/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "postReducer/ADD_COMMENT_ERROR";

export const LOAD_POSTS_REQUEST = "postReducer/LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "postReducer/LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_ERROR = "postReducer/LOAD_POSTS_ERROR";

export const LOAD_USER_POSTS_REQUEST = "postReducer/LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "postReducer/LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_ERROR = "postReducer/LOAD_USER_POSTS_ERROR";

export const LOAD_POST_REQUEST = "postReducer/LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "postReducer/LOAD_POST_SUCCESS";
export const LOAD_POST_ERROR = "postReducer/LOAD_POST_ERROR";

export const LIKE_POST_REQUEST = "postReducer/LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "postReducer/LIKE_POST_SUCCESS";
export const LIKE_POST_ERROR = "postReducer/LIKE_POST_ERROR";

export const UNLIKE_POST_REQUEST = "postReducer/UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "postReducer/UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_ERROR = "postReducer/UNLIKE_POST_ERROR";

export const UPLOAD_IMAGES_REQUEST = "postReducer/UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "postReducer/UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_ERROR = "postReducer/UPLOAD_IMAGES_ERROR";

export const REMOVE_IMAGE = "postReducer/REMOVE_IMAGE"

export const RETWEET_REQUEST = "postReducer/RETWEET_REQUEST";
export const RETWEET_SUCCESS = "postReducer/RETWEET_SUCCESS";
export const RETWEET_ERROR = "postReducer/RETWEET_ERROR";

export const LOAD_HASHTAG_POSTS_REQUEST = "postReducer/LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "postReducer/LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_ERROR = "postReducer/LOAD_HASHTAG_POSTS_ERROR";

export const addPostRequestAction = data =>({//({postContent})
    type:ADD_POST_REQUEST,
    data,
});

export const removePostRequestAction = data =>({//({id})
    type:REMOVE_POST_REQUEST,
    data,
});

export const addCommentRequestAction = (data)=>({//({postId,content,userId})
    type:ADD_COMMENT_REQUEST,
    data
})

const dummyPost = (data)=> ({//{id,postContent}
    id:data.id,
    content:data.postContent,
    User:{
        id:1,
        nickname:"zero"
    },
    Images:getRandomValue(imgs),
    Comments:[],
})

const postReducer = (state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS://data:addPostApi().data
                draft.mainPosts.unshift(action.data);
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.imagePaths = [];
                break;
            case ADD_POST_ERROR:
                draft.addPostLoading = false;
                draft.addPostError = action.data;
                break;

            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS://data:{postId}
                draft.mainPosts = draft.mainPosts.filter(post=>post.id !== action.data.postId);
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
            case REMOVE_POST_ERROR:
                draft.removePostLoading = false;
                draft.removePostError = action.data;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addComentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{//data:addCommentApi().data
                const post = draft.mainPosts.find(post=>post.id === action.data.PostId);
                post.Comments.unshift(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
            }
            case ADD_COMMENT_ERROR://{data:err}
                draft.addCommentLoading = false;
                draft.addCommentError = action.data;
                break;

            case LOAD_POSTS_REQUEST:
            case LOAD_USER_POSTS_REQUEST:
            case LOAD_USER_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS://data:loadPostsApi().data
            case LOAD_USER_POSTS_SUCCESS://data:loadUserPostsApi().data
            case LOAD_HASHTAG_POSTS_SUCCESS://data:loadHashtagPostsApi().data
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.hasMorePosts = action.data.length === 10; // 10개씩 게시글을 가져오므로 10 미만일때 false 
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                break;
            case LOAD_USER_POSTS_ERROR:
            case LOAD_HASHTAG_POSTS_ERROR:
            case LOAD_POSTS_ERROR:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.data;
                break;

            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS://{data:loadPostApi().data}
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.singlePost = action.data;
                break;
            case LOAD_POST_ERROR:
                draft.loadPostLoading = false;
                draft.loadPostError = action.data;
                break;

            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS:{//{data:{postId,UserId}}
                draft.likePostLoading = false;
                draft.likePostDone = true;
                const post = draft.mainPosts.find(post=>post.id === action.data.postId)
                post.Likers.push({id:action.data.UserId})
                break;
            }
            case LIKE_POST_ERROR:
                draft.likePostLoading = false;
                draft.likePostError = action.data;
                break;

            case UNLIKE_POST_REQUEST:
                draft.unLikePostLoading = true;
                draft.unLikePostDone = false;
                draft.unLikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS:{//{data:{postId,UserId}}
                draft.unLikePostLoading = false;
                draft.unLikePostDone = true;
                const post = draft.mainPosts.find(post => post.id === action.data.postId);
                post.Likers = post.Likers.filter(user => user.id !== action.data.UserId)
                break;
            }
            case UNLIKE_POST_ERROR:
                draft.unLikePostLoading = false;
                draft.unLikePostError = action.data;
                break;
            
            case UPLOAD_IMAGES_REQUEST:
                draft.upLoadLoading = true;
                draft.upLoadDone = false;
                draft.upLoadError = null;
                break;
            case UPLOAD_IMAGES_SUCCESS: // {data:uploadImagesApi().data}
                draft.imagePaths = action.data
                draft.upLoadLoading = false;
                draft.upLoadDone = true;
                break;
            case UPLOAD_IMAGES_ERROR:
                draft.upLoadLoading = false;
                draft.upLoadError = action.data;
                break;

            case REMOVE_IMAGE:  // {data:index}
                draft.imagePaths = draft.imagePaths.filter((v,i)=> i !== action.data)
                break;

            case RETWEET_REQUEST:
                draft.retweetLoading = true;
                draft.retweetDone = false;
                draft.retweetError = null;
                break;
            case RETWEET_SUCCESS: // 
                draft.retweetLoading = false;
                draft.retweetDone = true;
                draft.mainPosts.unshift(action.data);
                break;
            case RETWEET_ERROR:
                draft.retweetLoading = false;
                draft.retweetError = action.data.response.data;
                break;

            default :
                // return state;
                break;
        }
    })
}

export default postReducer;