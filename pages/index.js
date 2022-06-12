
import { useEffect, useState } from 'react';
import { Container } from '../components/Container'
import { MainSection } from '../components/organisms/MainSection'
// import { RequestsAndContacts } from '../components/organisms/RequestsAndContacts'
import { Sidebar } from '../components/organisms/Sidebar';
// import { fetchNewFriendPosts, fetchUserPosts, queryForGettingUserByName, shortVideosOfLoggedInUser } from '../utils/firestoreReleated';





import {  useDispatch, useSelector } from 'react-redux';


import {fetchUserPostsAction} from '../redux/actions/fetchUserPostsAction'

import Navbar from '../components/organisms/Navbar';

import { bindActionCreators } from 'redux';
import { userPostsAction } from '../redux/actions';
// import { UserStoriesModal } from '../components/organisms/UserStoriesModal';

import withAuth from '../components/hoc';
import { InfoForUser } from '../components/InfoForUser';



const sixImagesArr = [
  "six elements arr first element",
  "six elements arr second element",
  "six elements arr thirdd element",
  "six elements arr fourth element",
  "six elements arr fifth element",
  "six elements arr sixth element"
];

function Home() {

  
  const dispatch = useDispatch();

const {fetchUserPostsAction} = bindActionCreators(userPostsAction,dispatch);

useEffect(()=>{


  fetchUserPostsAction();


},[])

const stateCheck = useSelector(state=>state.helperReducer);

const {showUserStoriesModal} = stateCheck;



  return (

    <>
    
{/* <InfoForUser/> */}


    <Navbar/>
     <Container>

<Sidebar/>


<MainSection/>

{/* <AnimatePresence   >

{showUserStoriesModal&&(
<motion.div key={Math.floor(Math.random()*200)} 


initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }} 

transition={{duration:0.3}}


> 

 <UserStoriesModal /> 

  </motion.div>



)}


</AnimatePresence> */}

{/* <RequestsAndContacts/> */}



    </Container>




</>

  )
}




export default Home;


export const getServerSideProps = withAuth(context => {
  // Your normal `getServerSideProps` code here
  return { props: {}}
});