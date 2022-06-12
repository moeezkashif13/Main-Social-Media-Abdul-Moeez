
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NameAndPostedPostTime } from "../atoms/NameAndPostedPostTime"
import { PersonProfileImage } from "../atoms/PersonProfileImage"


import { SlidesContainer } from '../slideReleated/SlidesContainer';

import {AiTwotoneHeart,AiOutlineComment} from 'react-icons/ai';


export const UserPost = ({userCreatedPosts}) => {


// 
const {text,createdAt,userUploadedImagesTemprary,details,profilePic} = userCreatedPosts;

const {firstname,lastname} = details;




  return (
    <div className="mainSectionMoleculesCommonProps bg-[#e9e9e9] mb-8">

<div className="flex items-center">

<PersonProfileImage image={profilePic} />

<NameAndPostedPostTime createdAt={createdAt} 

firstname={firstname}
lastname={lastname}
 
 
 />


</div>

<p className="py-3 ">{text}</p>


<div >


<SlidesContainer userUploadedImagesTemprary={userUploadedImagesTemprary?userUploadedImagesTemprary:[]}/>


</div>



{/* <div className="flex text-4xl pt-5 gap-x-6 ">


<AiTwotoneHeart fill="red"  additive="sum"  className=" cursor-pointer "/>

<AiOutlineComment  className="cursor-pointer"/>


</div> */}




    </div>
  )
}