import {Container} from '../components/Container'
import {Sidebar} from '../components/organisms/Sidebar'

import {AiOutlineCamera} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { updateLoggedInUserDetails } from '../utils/firestoreReleated';

import {RippleLoader} from '../components/atoms/RippleLoader'
import Navbar from '../components/organisms/Navbar';
import withAuth from '../components/hoc';


import defaultImage from '../tempimages/149071.png';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthFirebase } from '../firebaseConfig';
import { getCookies, setCookies } from 'cookies-next';


function Settings(props){


    
    
    const [showCameraIcon,setShowCameraIcon] = useState(false);
    const [loader,setLoader] = useState(false);

    const [userProfileImage,setUserProfileImage] = useState('');

useEffect(()=>{

    
    onAuthStateChanged(AuthFirebase,(user)=>{
        if(user){
            
            const {photoURL} = user;
    setUserProfileImage(photoURL)
        }else{
    setUserProfileImage('');
        }
    })



},[])


    
    const cameraIconOnHover = ()=>{

        setShowCameraIcon(true);

    }

    const hideCameraIconOnLeave = ()=>{
        setShowCameraIcon(false);
    }

    const getUserProfileImage = (event)=>{

        setLoader(true);


        const profileImage = event.target.files;

        updateLoggedInUserDetails(profileImage[0])
        .then(resp=>{

            const {userPublicData} = getCookies();
            const cookiesWithOldProfilePic =  JSON.parse(decodeURIComponent(userPublicData));
        
     
            setCookies('userPublicData',{
                ...cookiesWithOldProfilePic,
                photoURL:resp
            })
            setUserProfileImage(resp)
            setLoader(false);
        }).catch(err=>{
            
        });

    }


    return(
<>
        <Navbar/>

        <Container>
            

<Sidebar/>


<div className='w-full py-14'>

<p className="text-center text-3xl font-bold">Account Settings</p>


<div className='px-10 '>

{loader?
<RippleLoader/>
:
<>
<div className='w-28 h-28  rounded-full bg-cover bg-center cameraIconParentDiv' style={{backgroundImage:`url(${userProfileImage?userProfileImage:defaultImage.src})`}} onMouseEnter={cameraIconOnHover} onMouseLeave={hideCameraIconOnLeave}>





{showCameraIcon?

<div className='flex  items-center '>
    <label htmlFor="changeProfilePic">
<div className='               w-28 h-28 rounded-full bg-blue-200 flex justify-center items-center cursor-pointer' >
<AiOutlineCamera className='text-6xl'/>
</div>
</label>
<input type="file" name="changeProfilePic" id="changeProfilePic" accept='image/*' className='hidden' onChange={getUserProfileImage} />

</div>


 :null} 

</div>

<div className='font-semibold mt-2'>Change Profile Picture</div>

</>

}


</div>


</div>



        </Container>
        
        </>
    )


}




export default Settings

export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });