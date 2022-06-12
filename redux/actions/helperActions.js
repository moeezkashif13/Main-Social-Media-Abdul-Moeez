import {IS_A_FRIEND_REQUEST,SHOW_USER_STORIES_MODAL} from '../constants/helperConstants';

export const isAFriendRequest = (check)=>async(dispatch)=>{


    

dispatch({
    type:IS_A_FRIEND_REQUEST,
    payload:check,
})


}

export const showUserStoriesModal = (param)=>async(dispatch)=>{

dispatch({
    type:SHOW_USER_STORIES_MODAL,
    payload:param,
})



}

export const getUserBasicInfo = (basicInfo)=>async(dispatch)=>{


    
    dispatch({
        type:GET_USER_BASIC_INFO,
        payload:basicInfo,
    })

}