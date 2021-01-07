import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const index = (state={},action)=>{
    switch(action.type){
        case HYDRATE:
            return {...state,...action.payload};
        default :
            return state;
    }
} 

const rootReducer = combineReducers({
    index,
    userReducer,
    postReducer,
})

export default rootReducer;