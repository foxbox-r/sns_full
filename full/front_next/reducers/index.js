import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import postReducer from "./postReducer";

// const index = (state={},action)=>{
//     switch(action.type){
//         case HYDRATE:
//             return {...state,...action.payload};
//         default :
//             return state;
//     }
// } 

// const rootReducer = combineReducers({
//     index,
//     userReducer,
//     postReducer,
// })

const rootReducer = (state,action) =>{
    switch(action.type){
        case HYDRATE: // HYDRATE는 서버 사이드에서 사용하는 리듀서다
            console.log('HYDRATE',action);
            return action.payload;
        default:{
            const combinedReducer = combineReducers({
                userReducer,
                postReducer,
            });
            return combinedReducer(state,action);
        }
    }
}

export default rootReducer;