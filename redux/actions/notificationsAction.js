

import {NEW_NOTIFICATION_RECEIVED,ERROR_IN_GETTING_NOTIFICATION} from '../constants/notificationsConstants';

import { collection,onSnapshot } from "firebase/firestore"
import { DBFirestore } from "../../firebaseConfig"

export const notificationsAction = ()=> async(dispatch)=>{

try{

        const receivedRequestSubCollection = collection(DBFirestore,'friends','6DGBse93KLc457CwVA5easn8J5J3','receivedRequest');


        

        onSnapshot(receivedRequestSubCollection,(docCheckAvien)=>{
      
          const receivedRequestArray = [];

      docCheckAvien.forEach(eachCheck=>{
  
       receivedRequestArray.push(eachCheck.data());
  
  }); 

docCheckAvien.docChanges().forEach(checkDocStatus=>{

  if(checkDocStatus.type=='modified'){


    dispatch({

      type:NEW_NOTIFICATION_RECEIVED,
      payload:{receivedRequestArray,modificationIndicator:Math.floor(Math.random()*1000)},
  })

    return;

  }else{
    dispatch({

      type:NEW_NOTIFICATION_RECEIVED,
      payload:{receivedRequestArray,modificationIndicator:0},

    })
  }

})



  
      });

    }catch(error){

      dispatch({
        type:ERROR_IN_GETTING_NOTIFICATION,
        payload:error
      })

    }

        

    



}