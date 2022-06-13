import { Container } from '../../components/Container'
import { Sidebar } from '../../components/organisms/Sidebar';
import { UserProfilePageFollowButton } from '../../components/molecules/UserProfilePageFollowButton';
// import { UserProfilePagePosts } from '../../components/organisms/UserProfilePagePosts';

import {  useState} from 'react';
import { checkFriendRequestOnProfilePage, fetchingUserForProfilePage, fetchUserPosts, requestSendStatus } from '../../utils/firestoreReleated';
import Navbar  from '../../components/organisms/Navbar';


import {InfoForUser} from '../../components/InfoForUser'


import {getCookies} from 'cookies-next'


  import safeJsonStringify from 'safe-json-stringify';
import { UserProfilePageModal } from '../../components/organisms/UserProfilePageModal';
import withAuth from '../../components/hoc';




  export default function UserProfile({singleUserData}){


    
    const {posts} = singleUserData;
const parsedPosts = JSON.parse(posts);

const [showRemainingImagesModal,setShowRemainingImagesModal] = useState({
    requiredID:null,
    showModal:null,
});

const handleShowRemainingImages = (id)=>{
    
    setShowRemainingImagesModal({
        showModal:true,
        requiredID:id,
    });
}


const handleShowOnHover = (event)=>{

event.target.style.opacity = 1;
}

const handleHideOnHover = (event)=>{
    event.target.style.opacity = 0;

}

  return(

        <>


        <InfoForUser>

<li>On this page you can see the posts of your future friend. <span className='text-yellow-500 font-bold'> TILL NOW </span>you can see other people posts on thier profile page without adding them. This behaviour is temporary and can be changed easily.</li>

<li>It is just for saving your time so you can see the user profile page without adding them however if you want to see other people posts on your timeline you must send them a request and <span className='text-yellow-500 font-bold'>IF THEY ACCEPTS YOUR REQUEST</span> you will see thier posts on your timeline and they will also see your posts on thier timeline</li>


        </InfoForUser>

<Navbar/>

        <Container>


<Sidebar/>


<div className=' w-full mx-4 px-4'>
<UserProfilePageFollowButton  singleUserData={singleUserData}  />




<div className="gridContainer flex flex-wrap gap-4 py-8  justify-center">

{parsedPosts.length>1?parsedPosts.map(eachPost=>{
  
  const {userUploadedImagesTemprary,id} = eachPost;

  return userUploadedImagesTemprary?.map((eachImage,index)=>{

    return index == 0 && <div  onClick={()=>handleShowRemainingImages(id)} className=' w-[300px] h-[390px] bg-center bg-no-repeat border-4 cursor-pointer relative' style={{backgroundSize:'cover',backgroundImage:`url(${eachImage})`}} >

<div onMouseEnter={handleShowOnHover} onMouseLeave={handleHideOnHover} className='showOnHover opacity-0 text-white font-bold text-2xl text-center w-full h-full absolute flex items-center justify-center' style={{backgroundColor:'rgba(0,0,0,0.5)',transition:'0.5s all ease'}}>
    Click to see remaining images
</div>

    </div>

  })

}):<h1 className='mt-8 font-bold text-3xl'>The user has not posted anything yet</h1>}


 { showRemainingImagesModal.showModal&& <UserProfilePageModal parsedPosts={parsedPosts} showRemainingImagesModal={{showRemainingImagesModal,setShowRemainingImagesModal}}  /> }




</div>







</div>


        </Container>
        </>        

    )
}



export const getServerSideProps =  withAuth (async context => {


  const {UID:loggedInUserUIDFromCookies} = getCookies(context);


const {userprofile} = context.query;


const getSingleUserData = await fetchingUserForProfilePage(userprofile);

const check = await  checkFriendRequestOnProfilePage(userprofile,loggedInUserUIDFromCookies);

const checkRequestSendStatus = await requestSendStatus(userprofile,loggedInUserUIDFromCookies);


const {isAFriendRequest} = check;

const posts = await fetchUserPosts(userprofile);

const safeJSON = safeJsonStringify(posts);




    return{
      props:{
        singleUserData:{...getSingleUserData,...checkRequestSendStatus,isAFriendRequest,UID:userprofile,posts:safeJSON}
      }
    }

    
});


