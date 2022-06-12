
import axios from 'axios';

import {ALL_ROOMS_FAIL,ALL_ROOMS_SUCCESS} from '../constants/roomConstants';

export const getRoomsAction = ()=> async(dispatch)=>{

    try{

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({

            type:ALL_ROOMS_SUCCESS,
            payload:data,
        })

    }catch(error){

        dispatch({
            type:ALL_ROOMS_FAIL,
            payload:error.response.data.message
        })

    }

}