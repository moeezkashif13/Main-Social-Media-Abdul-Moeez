import { ALL_ROOMS_FAIL, ALL_ROOMS_SUCCESS } from "../constants/roomConstants"

export const allRoomsReducer = (state={rooms:[]},action)=>{

switch(action.type){

    case ALL_ROOMS_SUCCESS:

    
        return{
            rooms : action.payload,

        }

        case ALL_ROOMS_FAIL:
            return{
                error:action.payload,
            }

    default:
        return state;

}

}