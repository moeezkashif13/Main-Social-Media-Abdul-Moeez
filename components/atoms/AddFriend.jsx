import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {addFriendHandler} from '../../utils/firestoreReleated'

export const AddFriend = ({UID,height})=>{


  
    const controls = useAnimation();

    const sendingRequestControls = useAnimation();

    const [requestStatus,setSendingRequest] = useState('initial');



    
const  sendRequest =async ()=>{


  if (requestStatus=='initial'){

    document.querySelector('.flip-box-inner').style.transform = 'rotateX(180deg)'
    document.querySelector('.flip-box-back').style.transfom = 'rotateX(180deg)'


    

  await addFriendHandler(UID).then(()=>{

    setSendingRequest('request sent');
    
    document.querySelector('.flip-box-inner').style.transform = 'rotateX(0deg)'
    document.querySelector('.flip-box-back').style.transfom = 'rotateX(0deg)'

  });

  

        

  }

  
}
    
    
    return(


        // <div>


        <>

{height&&
<div onClick={sendRequest} className={`flip-box relative ml-auto`} style={{height:`${height/4+5}px`}}>


  
  <div className="flip-box-inner">
    <div className="flip-box-front">

    <motion.button 

className="bg-pink-500 text-white font-semibold text-xl px-6 py-2 rounded-xl">{requestStatus=='initial'?'Add Friend':'Request Sent'}</motion.button>

    </div>

    
    <div className="flip-box-back">
    <motion.button 

className="bg-green-500 text-white font-semibold text-xl px-6 py-2 rounded-xl">Sending Request</motion.button>
    </div>
  </div>
</div>

}

</>




        // </div>
        
    )

}