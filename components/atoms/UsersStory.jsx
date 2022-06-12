
import { UserStoriesModal } from "../organisms/UserStoriesModal";


import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { showUserStoriesModal } from "../../redux/actions/helperActions";

export const UsersStory = (props) => {

  
const {index:eachUserStoryIndex} = props;

const dispatch = useDispatch();

  const showVideoInModal = ()=>{

dispatch(showUserStoriesModal({status:true,index:eachUserStoryIndex}));


  }


  


  return (
    <>
    <div onClick={showVideoInModal}  className="cursor-pointer w-eachStoryWidth h-eachStoryHeight  px-3 py-3 rounded-xl bg-pink-500 relative">

{props.children}

<div className=" absolute bottom-4 w-full left-0">  
<p className=" text-center text-white font-bold text-lg ">{eachUserStoryIndex}</p>
</div>
    </div>


    </>


  )
}
