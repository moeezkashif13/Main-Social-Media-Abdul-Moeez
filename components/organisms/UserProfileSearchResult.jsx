import { PersonName } from "../atoms/PersonName";

import tempimage from '../../tempimages/tempImage.jpg';


import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { helperActions } from "../../redux/actions";
import { setCookies } from "cookies-next";
import { useAnimation,motion } from "framer-motion";
import { addFriendHandler } from "../../utils/firestoreReleated";

import defaultImage from '../../tempimages/149071.png'


export default function UserProfileSearchResult({email,name,uid,isAFriendRequest,requestSent,photoURL}){


const dispatch = useDispatch();

const {isAFriendRequest:isAFriendRequestAction} = bindActionCreators(helperActions,dispatch);

useEffect(()=>{


if(isAFriendRequest){

    isAFriendRequestAction(isAFriendRequest);
}


},[isAFriendRequest]);


const controls = useAnimation();

const [requestStatus,setRequestStatus] = useState({status:requestSent?'requestSent':'initial'});
// const [requestStatus,setRequestStatus] = useState({status:'requestSent'})

const sendingRequestControls = useAnimation();

const sendRequestFromPreview = async()=>{
    controls.start({
        scale:0
    }).then(()=>{
        setRequestStatus({status:'sendingRequest'});
    
        setTimeout(() => {
            sendingRequestControls.start({
                scale:1
            })
        }, 500);
    })
    
    
    await addFriendHandler(uid);


    setTimeout(() => {
        
        sendingRequestControls.start({
            scale:0
        }).then(()=>{
            setRequestStatus({status:'requestSent'});

            setTimeout(() => {
                controls.start({scale:1})
            }, 500);
        })
    }, 2000);    
}


const handleRequestSent = ()=>{
    
}

let buttonBasedOnStatus;

if(requestStatus.status=='initial'){
    buttonBasedOnStatus = <motion.button transition={{duration:0.7}}  animate={controls}  onClick={sendRequestFromPreview} className="w-full cursor-pointer text-center rounded-xl font-semibold py-2 bg-pink-500">Add Friend</motion.button>


}else if(requestStatus.status == 'sendingRequest'){
    buttonBasedOnStatus = <motion.button 
    animate={sendingRequestControls}
    transition={{duration:0.7}}
     className="w-full cursor-pointer text-center rounded-xl font-semibold py-2 bg-blue-500"
     >Sending</motion.button>       



}else if(requestStatus.status=='requestSent'){
    buttonBasedOnStatus = <motion.button
    
    onClick={handleRequestSent}
    
    initial={{scale:0}}
animate={{scale:1}}
    transition={{duration:0.7}}
     className="w-full cursor-pointer text-center rounded-xl font-semibold py-2 bg-purple-500"
     >Request Sent</motion.button>
}


    return(

        <div  style={{flexBasis:'25%'}}>
            

<div className={`h-56 rounded-t-2xl   ${photoURL?'bg-cover':'bg-contain'} bg-center bg-no-repeat`} 

style={{backgroundImage:`url(${photoURL?photoURL:defaultImage.src})`}}



></div>

<div className="px-5 py-5 bg-purple-400 rounded-b-2xl">

<PersonName name={name} />


{/* <p>{email}</p>

<p>{uid}</p> */}

<div className="py-3 flex  gap-x-4 gap-y-2 flex-wrap">

<div className=" cursor-default rounded-lg bg-green-500 text-white font-semibold text-sm px-3 py-2">Programming</div>
<div className=" cursor-default rounded-lg bg-blue-500 text-white font-semibold text-sm px-3 py-2">Gaming</div>
<div className=" cursor-default rounded-lg bg-orange-500 text-white font-semibold text-sm px-3 py-2">Gardening</div>
<div className=" cursor-default rounded-lg bg-green-500 text-white font-semibold text-sm px-3 py-2">Programming</div>

</div>


<div className="flex text-white gap-x-6 text-md">


{isAFriendRequest?<button className="w-full cursor-pointer text-center rounded-xl font-semibold py-2 bg-yellow-500">Accept</button>:

buttonBasedOnStatus


}




<Link  href={`/userprofile/${uid}`}><p className="w-full cursor-pointer text-center rounded-xl font-semibold py-2 bg-red-500">Visit Profile</p></Link>


</div>




</div>


        </div>

    )


}


