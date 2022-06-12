import {CommonButton} from '../atoms/CommonButton'
import { AddFriend } from '../atoms/AddFriend'
import { PersonName } from '../atoms/PersonName'
import { ProfilePageImage } from '../atoms/ProfilePageImage'
import { PersonUsername } from '../atoms/PersonUsername'
import { useEffect, useState } from 'react'

import {useRouter} from 'next/router'
import { getLoggedInUserDetails } from '../../utils/firestoreReleated'

import {AcceptRequest} from '../atoms/AcceptRequest'
import { useSelector } from 'react-redux'

export const UserProfilePageFollowButton = ({singleUserData})=>{

    const {firstname,lastname,UID,isAFriendRequest,requestSent,requestReceived,photoURL} = singleUserData;


    
let whichButtonToRender = null;



const [height,setHeight] = useState(null);

if(isAFriendRequest){
    whichButtonToRender = <AcceptRequest />
}else if(isAFriendRequest==false && requestSent==true){
    // whichButtonToRender = <AddFriend height={height} UID={UID}/>
    whichButtonToRender = <button 
    className="bg-yellow-500 ml-auto text-white font-semibold text-xl px-6 py-2 rounded-xl">Request Sent</button>
}else if(isAFriendRequest==false){
    whichButtonToRender = <AddFriend height={height} UID={UID}/>
    
}

useEffect(()=>{

setHeight(    document.querySelector('.getHeight').clientHeight);

},[])



    return(


        <div className=" flex items-center">
            
            
<div className='flex items-center getHeight'>
    
<div>
        <ProfilePageImage image={photoURL} />
</div>

<div className='pl-3 '>

        <PersonName name={{firstname,lastname}}  />
    <PersonUsername name={{firstname,lastname}} />
</div>


</div>

{/* <div className="ml-auto"> */}


{/* {isAFriendRequest?<AcceptRequest/>:<AddFriend UID={UID}/>} */}
{whichButtonToRender}



{/* </div> */}


        </div>



    )


}