import { useRouter } from "next/router"
import { acceptFriendRequest } from "../../utils/firestoreReleated"



export const AcceptRequest = ()=>{

    const {userprofile:newFriendUID} = useRouter().query;
    
    return(

<button 

onClick={()=>acceptFriendRequest(newFriendUID)}


className="bg-blue-500 text-white font-semibold text-xl px-6 py-2 rounded-xl">Accept Request</button>

    )

}