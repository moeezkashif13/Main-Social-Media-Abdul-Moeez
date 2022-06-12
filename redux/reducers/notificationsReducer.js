
import { NEW_NOTIFICATION_RECEIVED,ERROR_IN_GETTING_NOTIFICATION } from "../constants/notificationsConstants"

export const notificationsReducer = (state={notifications:[]},action)=>{

switch(action.type){
    
    case NEW_NOTIFICATION_RECEIVED:

    return{
        notifications : action.payload,

        }

        case ERROR_IN_GETTING_NOTIFICATION:
 
        return{
                error:action.payload,
            }

    default:
        return state;

}

}