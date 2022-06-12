import { IS_A_FRIEND_REQUEST, SHOW_USER_STORIES_MODAL,GET_USER_BASIC_INFO} from "../constants/helperConstants";

const clone = require('rfdc')();



export const helperReducer = (state={isAFriendRequest:false,showUserStoriesModal:false,basicInfo:null},action)=>{

switch(action.type){
    case IS_A_FRIEND_REQUEST:

    return {
        ...state,
        isAFriendRequest:action.payload,
    }

    case SHOW_USER_STORIES_MODAL:

    return{
        ...state,
        showUserStoriesModal:action.payload,

    }

    case GET_USER_BASIC_INFO:

    return{
        ...state,
        basicInfo:action.payload,

    }
    

    default:
        return state;

}

}