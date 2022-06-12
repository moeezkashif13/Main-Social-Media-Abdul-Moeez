import Navbar from '../components/organisms/Navbar'
import {Container} from '../components/Container'



import UserProfileSearchResult from '../components/organisms/UserProfileSearchResult'
import { useEffect, useState } from 'react'
import { fetchReceivedRequests, fetchSentRequests, queryForGettingUserByName } from '../utils/firestoreReleated'




import {getLoggedInUserUID} from '../utils/authenticationReleated'


import withAuth from '../components/hoc';


const clone = require('rfdc')();


const arr = [{capital:'Multan'},{capital:'Quetta'},{capital:'Peshawar'},{capital:'DI Khan'},];


// const fetchedRequests = [
//     {
//         "isAFriendRequest": true,
//         "futureFriendName": {
//             "firstname": "moeez",
//             "lastname": "kashif"
//         },
//         "requestReceived": true,
//         "UID": "F3Imi4304IQUOJ8VmWIJnBZmcpI3"
//     },
//     {

//         "isAFriendRequest": true,
//         "futureFriendName": {
//             "firstname": "fourth",
//             "lastname": "user",
//         },
//         "requestReceived": true,
//         "UID": "j3mFGtMBZJXXZptlmylb5qjjSul2"


//     },
// ]


// const searchedUsers = [
//     {
//         "firstname": "today",
//         "lastname": "user",
//         "email": "todayuser92@gmail.com",
//         "id": "6DGBse93KLc457CwVA5easn8J5J3"
//     },
//     {
//         "firstname": "third",
//         "email": "thirduserrrrr@gmail.com",
//         "lastname": "userr",
//         "id": "6lQ84PXFr5NyeDvF0ruAadopQtm2"
//     },
//     {
//         "email": "secondwindow@gmail.com",
//         "firstname": "second",
//         "lastname": "window",
//         "id": "EZFn4GkQbHfNYWUpUshtaFy5vSe2"
//     },
//     {
//         "email": "moeezkashif13@gmail.com",
//         "lastname": "kashif",
//         "firstname": "moeez",
//         "id": "F3Imi4304IQUOJ8VmWIJnBZmcpI3"
//     },
//     {
//         "lastname": "second user",
//         "email": "otheruserseconddddd@gmail.com",
//         "firstname": "other",
//         "id": "GfJhk8fr4wR2eAFeEHHkE2hdiUW2"
//     },
//     {
//         "email": "abdulmoeez1231293@gmail.com",
//         "firstname": "abdul",
//         "lastname": "moeez",
//         "id": "j0eAUXNdooU4mRTTIJc2qPYGsga2"
//     },
//     {
//         "firstname": "fourth",
//         "lastname": "user",
//         "email": "fourthuser@gmail.com",
//         "id": "j3mFGtMBZJXXZptlmylb5qjjSul2"
//     },
//     {
//         "email": "normalwindow@gmail.com",
//         "lastname": "window",
//         "firstname": "normal",
//         "id": "kboXIRXW7fWZTLZBrI6Tb6ZTZRk2"
//     },
//     {
//         "email": "fifthuser@gmail.com",
//         "firstname": "pataa nahii",
//         "lastname": "konsa use",
//         "id": "pVqQEtJ2KSXwhiunmBbSR9qiG2Y2"
//     }
// ]


export default function SearchUsers(){


//     const getUIDFromRequests = fetchedRequests.map(elem=>{
//         return elem.UID;
//     });


// const clonedSearchedUsers = clone(searchedUsers);


//      getUIDFromRequests.forEach(elem=>{
        
//         clonedSearchedUsers.forEach((eachElem,index)=>{


//             if(eachElem.id==elem){

//                 eachElem['isAFriendRequest'] = true;

//             }
//         })

//     });

//     


    


    const [userInput,setUserInput] = useState('');
const [items,setItems] = useState([]);

const [searchParam] = useState(["email"]);



const getUserInput = (e)=>{
     setUserInput(e.target.value);
}




useEffect(()=>{


const temp = async()=>{


    const check = await fetchReceivedRequests();

    
    const sentRequests = await fetchSentRequests()


let receivedRequestsAndSentRequests = clone([...check.map(eachUID=>{return {UID:eachUID.UID}}),...sentRequests]);




    const searchedUsers = await queryForGettingUserByName();


const clonedSearchedUsers = clone(searchedUsers);


const helloG = receivedRequestsAndSentRequests.map((eachElem,index)=>{


        const determineIndex = clonedSearchedUsers.findIndex(findingIndex=>findingIndex.id==eachElem.UID)

if(eachElem.UID==clonedSearchedUsers[determineIndex].id&&eachElem.requestSent){
    // 

   return clonedSearchedUsers[determineIndex] = {...clonedSearchedUsers[determineIndex],requestSent:true};
}else if(eachElem.UID==clonedSearchedUsers[determineIndex].id){
    // 
    return clonedSearchedUsers[determineIndex] = {...clonedSearchedUsers[determineIndex],isAFriendRequest:true};

};
});





    const elemsWithoutLoggedInUser = clonedSearchedUsers.filter(eachElem=>{

        return eachElem.id!==getLoggedInUserUID()

    }); 

    
    setItems(elemsWithoutLoggedInUser);

}


temp();







},[])
  

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {

                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(userInput.toLowerCase()) > -1
                );
            });
        });
    }

    

    return(

        
        <>
        
        <Navbar/>

        <Container>

{/* <Sidebar/> */}


<div className=' flex-grow '>


<div >

<p className='font-semibold text-2xl'>Search Results</p>



{/* <div className='flex items-center'>

<div className='flex ml-auto gap-x-4 text-lg'>

<div  className='cursor-pointer border-gray-300 border-2 py-2 px-2'>
    <FaList/>
</div>

<div  className='cursor-pointer border-gray-300 border-2 py-2 px-2'>
    <FaList className='text-gray-300' />
</div>

</div>


</div> */}

</div>


{/* <div>
    <input type="text" className='w-full py-4 px-5 bg-green-500 mb-12 font-semibold text-2xl' 
    
    value={userInput}
    
    onChange={getUserInput}


    />
</div> */}




<div className='py-8 flex flex-wrap justify-center gap-y-5 gap-x-5 '>


{items?search(items).map((eachItem,index)=>{


    
    const {firstname,lastname,isAFriendRequest,email,requestSent,photoURL} = eachItem;

return <UserProfileSearchResult key={index} email={email} photoURL={photoURL} requestSent={requestSent} isAFriendRequest={isAFriendRequest} uid={eachItem.id} name={{firstname,lastname}}/>

}):<h1 className='text-4xl text-center mx-auto'>Search User by name</h1>}



</div>




</div>



        </Container>
        
        </>


    )

}

export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });