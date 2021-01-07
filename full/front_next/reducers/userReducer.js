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
            case FOLLOW_SUCCESS://{data:{postUserId}}
                draft.followDone = true;
                draft.followLoading = false;
                draft.me.Followings.push({id:action.data.postUserId});
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
            case UNFOLLOW_SUCCESS://{data:{postUserId}}
                draft.unFollowDone = true;
                draft.unFollowLoading = false;
                draft.me.Followings = draft.me.Followings.filter(v=>v.id !== action.data.postUserId)
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
            case REMOVE_POST_TO_ME://data:{id}
                draft.me.Posts = draft.me.Posts.filter(post=>post.id !== action.data.id); 
                break;
            
            case LOAD_USER_REQUEST://data:loadUserApi().data
                draft.loadUserLoading = true;
                draft.loadUserErorr = null;
                break;
            case LOAD_USER_SUCCESS:
                console.log(action.me);
                draft.loadUserDone = true;
                draft.loadUserLoading = false;
                draft.me = action.data;
                break;
            case LOAD_USER_ERROR:
                draft.loadUserLoading = false;
                draft.loadUserError = action.data;
                break;

            default :
                // return state;
                break;
        }
    })
}

export default userReducer;