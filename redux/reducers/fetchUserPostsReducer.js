import { FETCHED_USER_POSTS_FAILED,FETCHED_USER_POSTS_SUCCESS,STARTED_FETCHING_POSTS } from "../constants/fetchUserPostsConstants"

export const fetchUserPostsReducer = (state={userPosts:[]},action)=>{

switch(action.type){

    case STARTED_FETCHING_POSTS:

    return{
        userPosts:action.payload
    }

    case FETCHED_USER_POSTS_FAILED:
        
    return{
        userPosts:action.payload
    }

    case FETCHED_USER_POSTS_SUCCESS:


    return{
            userPosts : action.payload,

        }

        case FETCHED_USER_POSTS_FAILED:
 
        return{
                error:action.payload,
                errorSecond:'error seconnddd'
            }

    default:
        return state;

}

}