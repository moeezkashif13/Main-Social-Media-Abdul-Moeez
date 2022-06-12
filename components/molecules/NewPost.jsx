import { CommonButton } from '../atoms/CommonButton';
import {PersonProfileImage} from '../atoms/PersonProfileImage';

import { FaBeer } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {capitalizeText} from '../../utils/helperFunctions'
import {getUserProfileData} from '../../utils/firestoreReleated'
import { useRouter } from 'next/router';
import { getCookies } from 'cookies-next';



export const NewPost = () => {


const Router =   useRouter()


const [userData,setUserData] = useState({});
const {userPublicData} = getCookies();

  
useEffect(()=>{
  
const parsing = JSON.parse(decodeURIComponent(userPublicData));

setUserData({...parsing})

},[userPublicData])

const {photoURL,name} = userData;







  return (
    <div onClick={()=>{
      Router.push('/createpost')
    }} className='flex items-center bg-white mainSectionMoleculesCommonProps rounded-xl'>

<PersonProfileImage image={photoURL} />

<input type="text" className='font-semibold w-[65%] text-grayAlikeColorText text-lg ml-3 px-3 mr-auto' placeholder={`What's new, ${capitalizeText(name)}`}/>

<CommonButton Icon={<FaBeer/>} background='#000' text='Post It!' />



    </div>
  )
}