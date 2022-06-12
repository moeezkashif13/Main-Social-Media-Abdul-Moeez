
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Navbar from "../components/organisms/Navbar";
import { Sidebar } from "../components/organisms/Sidebar";
import UserProfileSearchResult from "../components/organisms/UserProfileSearchResult";
import { fetchReceivedRequests } from "../utils/firestoreReleated";


import withAuth from "../components/hoc";
import { capitalizeText } from "../utils/helperFunctions";



export default function ReceivedRequest(){

    const [receivedRequests,setReceivedRequests] = useState([]);

    useEffect(()=>{

const handleReceivedRequests = async ()=>{
    const getReceivedRequestsArray = await fetchReceivedRequests();

    setReceivedRequests(getReceivedRequestsArray);

}

handleReceivedRequests();


    },[])

    

    
    
    return(


        <>
        
        
        

<Navbar/>

<Container>

<Sidebar/>



<div className="flex flex-wrap w-full gap-y-5 gap-x-5">


{receivedRequests.length>0?receivedRequests.map((eachRequest,index)=>{


const {futureFriendName,UID,isAFriendRequest} = eachRequest;


return <UserProfileSearchResult key={index} isAFriendRequest={isAFriendRequest} uid={UID} name={futureFriendName}   />


}):<h1 className="mx-auto mt-10 font-semibold text-2xl">{capitalizeText('no request received at this moment')}</h1>}



</div>


</Container>

        
        </>


    )


}


export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });