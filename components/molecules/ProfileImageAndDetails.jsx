import { PersonProfileImage } from "../atoms/PersonProfileImage"

import {PersonName}from '../atoms/PersonName'

import {PersonUsername}from '../atoms/PersonUsername'
import { useSelector } from "react-redux";
import {getLoggedInUserUID} from "../../utils/authenticationReleated";

import {useEffect,useState} from 'react'
import { getLoggedInUserDetails, getUserProfileData } from "../../utils/firestoreReleated";
import { AuthFirebase } from "../../firebaseConfig";
import { getCookies,checkCookies } from "cookies-next";





export const ProfileImageAndDetails = () => {

  const [userData,setUserData] = useState({});
  const {userPublicData} = getCookies();
  
useEffect(()=>{

  
const parsing = JSON.parse(decodeURIComponent(userPublicData));

setUserData({...parsing})

},[userPublicData])

const {photoURL,name} = userData;


  return (
    <div className="p-commonPaddingDifferentElems flex bg-white items-center">

<PersonProfileImage image={photoURL} />

<div className="px-4">

<PersonName name={name}  />

{/* <PersonUsername /> */}


</div>


    </div>
  )
}