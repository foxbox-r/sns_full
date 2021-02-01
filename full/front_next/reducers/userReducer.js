import produce from "immer"
const initialState = {
    logInLoading:false,
    logInDone:false,
    logInErorr:null,

    logOutLoading:false,
    logOutDone:false,
    logOutErorr:null,

    signUpLoading:false,
    signUpDone:false,
    signUpError:null,

    followLoading:false,
    followDone:false,
    followErorr:null,

    unFollowUpLoading:false,
    unFollowUpDone:false,
    unFollowUpError:null,

    loadUserLoading:false,
    loadUserDone:false,
    loadUserError:null,
    
    loadMyInfoLoading:false,
    loadMyInfoDone:false,
    loadMyInfoError:null,

    userInfo:null,

    changeUserLoading:false,
    changeUserDone:false,
    changeUserError:null,

    loadFollowersLoading:false,
    loadFollowersDone:false,
    loadFollowersError:null,

    loadFollowingsLoading:false,
    loadFollowingsDone:false,
    loadFollowingsError:null,

    removeFollowerLoading:false,
    removeFollowerDone:false,
    removeFollowerError:null,

    me:null,
    signUpData:{},
    loginData:{},
};


export const LOG_IN_REQUEST = "userReducer/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "userReducer/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "userReducer/LOG_IN_ERROR";

export const LOG_OUT_REQUEST = "userReducer/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "userReducer/LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "userReducer/LOG_OUT_ERROR";

export const SIGN_UP_REQUEST = "userReducer/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "userReducer/SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "userReducer/SIGN_UP_ERROR";

export const FOLLOW_REQUEST = "userReducer/FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "userReducer/FOLLOW_SUCCESS";
export const FOLLOW_ERROR = "userReducer/FOLLOW_ERROR";

export const UNFOLLOW_REQUEST = "userReducer/UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "userReducer/UNFOLLOW_SUCCESS";
export const UNFOLLOW_ERROR = "userReducer/UNFOLLOW_ERROR";

export const ADD_POST_TO_ME = "userReducer/ADD_POST_TO_ME";
export const REMOVE_POST_TO_ME = "userReducer/REMOVE_POST_TO_ME";

export const LOAD_USER_REQUEST = "postReducer/LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "postReducer/LOAD_USER_SUCCESS";
export const LOAD_USER_ERROR = "postReducer/LOAD_USER_ERROR";

export const LOAD_MY_INFO_REQUEST = "postReducer/LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "postReducer/LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_ERROR = "postReducer/LOAD_MY_INFO_ERROR";

export const CHANGE_USER_REQUEST = "postReducer/CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS = "postReducer/CHANGE_USER_SUCCESS";
export const CHANGE_USER_ERROR = "postReducer/CHANGE_USER_ERROR";

export const LOAD_FOLLOWERS_REQUEST = "postReducer/LOAD_FOLLOWERS_REQUEST";
export const LOAD_FOLLOWERS_SUCCESS = "postReducer/LOAD_FOLLOWERS_SUCCESS";
export const LOAD_FOLLOWERS_ERROR = "postReducer/LOAD_FOLLOWERS_ERROR";

export const LOAD_FOLLOWINGS_REQUEST = "postReducer/LOAD_FOLLOWINGS_REQUEST";
export const LOAD_FOLLOWINGS_SUCCESS = "postReducer/LOAD_FOLLOWINGS_SUCCESS";
export const LOAD_FOLLOWINGS_ERROR = "postReducer/LOAD_FOLLOWINGS_ERROR";

export const REMOVE_FOLLOWER_REQUEST = "postReducer/REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "postReducer/REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_ERROR = "postReducer/REMOVE_FOLLOWER_ERROR";



export const logoutRequestAction = ()=>({
    type:LOG_OUT_REQUEST
})

export const loginRequestAction = data=>({
    type:LOG_IN_REQUEST,
    data
});

export const signupRequestAction = data => ({//{data:{email,password}}
    type:SIGN_UP_REQUEST,
    data
})

const dummyUser = data=>({//{email,nickname,password}
    id:1,
    nickname:"foxboxr",
    ...data,
    Posts:[{id:1}],
    Followings:[{nickname:"r"},{nickname:"asr"},{nickname:"rd"},],
    Followers:[{nickname:"r"},{nickname:"asr"},{nickname:"rd"},],
})

const userReducer = (state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            
            case FOLLOW_REQUEST:
                draft.followLoading = true;
                draft.followError = null;
                draft.followDone = false;
                break;
            case FOLLOW_SUCCESS://{data:{userId}}
                draft.followDone = true;
                draft.followLoading = false;
                draft.me.Followings.push({id:action.data.userId});
                break;
            case FOLLOW_ERROR:
                draft.followLoading = false;
                draft.followError = action.data;
                break;
            
            case UNFOLLOW_REQUEST:
                draft.unFollowLoading = true;
                draft.unFollowError = null;
                draft.unFollowDone = false;
                break;
            case UNFOLLOW_SUCCESS://{data:{userId}}
                draft.unFollowDone = true;
                draft.unFollowLoading = false;
                draft.me.Followings = draft.me.Followings.filter(v=>v.id !== action.data.userId)
                break;
            case UNFOLLOW_ERROR:
                draft.unFollowLoading = false;
                draft.unFollowError = action.data;
                break;

            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInError = null;
                draft.logInDone = false;
                break;
            case LOG_IN_SUCCESS://{email,nickname,password}
                draft.logInDone = true;
                draft.logInLoading = false;
                draft.me = action.data.data;
                break;
            case LOG_IN_ERROR:
                draft.logInLoading = false;
                draft.logInError = action.data;
                break;

            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutErorr = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutDone = true;
                draft.logOutLoading = false;
                draft.me = null;
                break;
            case LOG_OUT_ERROR:
                draft.logOutLoading = false;
                draft.logOutError = action.data;
                break;

            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpErorr = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpDone = true;
                draft.signUpLoading = false;
                break;
            case SIGN_UP_ERROR:
                draft.signUpLoading = false;
                draft.signUpError = action.data;
                break;

            case ADD_POST_TO_ME://data:{id}
                draft.me.Posts.unshift({id:action.data.id});
                break;
            case REMOVE_POST_TO_ME://data:{postId}
                draft.me.Posts = draft.me.Posts.filter(post=>post.id !== action.data.postId); 
                break;
            
            case LOAD_USER_REQUEST://data:loadMyInfoApi().data
                draft.loadUserLoading = true;
                draft.loadUserErorr = null;
                break;
            case LOAD_USER_SUCCESS:
                draft.loadUserDone = true;
                draft.loadUserLoading = false;
                draft.userInfo = action.data;
                break;
            case LOAD_USER_ERROR:
                draft.loadUserLoading = false;
                draft.loadUserError = action.data;
                break;

            case LOAD_MY_INFO_REQUEST://data:loadMyInfoApi().data
                draft.loadMyInfoLoading = true;
                draft.loadMyInfoErorr = null;
                break;
            case LOAD_MY_INFO_SUCCESS:
                draft.loadMyInfoDone = true;
                draft.loadMyInfoLoading = false;
                draft.me = action.data;
                break;
            case LOAD_MY_INFO_ERROR:
                draft.loadMyInfoLoading = false;
                draft.loadMyInfoError = action.data;
                break;

            case CHANGE_USER_REQUEST://data:changeUserApi().data
                draft.changeUserLoading = true;
                draft.changeUserErorr = null;
                break;
            case CHANGE_USER_SUCCESS://{data:nickname}
                draft.changeUserDone = true;
                draft.changeUserLoading = false;
                draft.me.nickname = action.data;
                break;
            case CHANGE_USER_ERROR:
                draft.changeUserLoading = false;
                draft.changeUserError = action.data;
                break;

            case LOAD_FOLLOWERS_REQUEST://data:loadFollowersApi().data
                draft.loadFollowersLoading = true;
                draft.loadFollowersErorr = null;
                break;
            case LOAD_FOLLOWERS_SUCCESS:
                draft.loadFollowersDone = true;
                draft.loadFollowersLoading = false;
                draft.me.Followers = action.data
                break;
            case LOAD_FOLLOWERS_ERROR:
                draft.loadFollowersLoading = false;
                draft.loadFollowersError = action.data;
                break;   

            case LOAD_FOLLOWINGS_REQUEST://data:loadFollowingsApi().data
                draft.loadFollowingsLoading = true;
                draft.loadFollowingsErorr = null;
                break;
            case LOAD_FOLLOWINGS_SUCCESS:
                draft.loadFollowingsDone = true;
                draft.loadFollowingsLoading = false;
                draft.me.Followings = action.data;
                break;
            case LOAD_FOLLOWINGS_ERROR:
                draft.loadFollowingsLoading = false;
                draft.loadFollowingsError = action.data;
                break;    
            
            case REMOVE_FOLLOWER_REQUEST://data:removeFollowerApi().data
                draft.removeFollowerLoading = true;
                draft.removeFollowerErorr = null;
                break;
            case REMOVE_FOLLOWER_SUCCESS:
                draft.removeFollowerDone = true;
                draft.removeFollowerLoading = false;
                draft.me.Followers = draft.me.Followers.filter(user => user.id !== action.data.userId)
                break;
            case REMOVE_FOLLOWER_ERROR:
                draft.removeFollowerLoading = false;
                draft.removeFollowerError = action.data;
                break;   

            default :
                // return state;
                break;
        }
    })
}

export default userReducer;