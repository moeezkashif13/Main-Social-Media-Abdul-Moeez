import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchUserPosts } from "../../utils/firestoreReleated"
import { CommonButton } from "../atoms/CommonButton"
import { EachUserStory } from "../molecules/EachUserStory"
import { NewPost } from "../molecules/NewPost"
import { UserPost } from "../molecules/UserPost"

import {ModalAndCSSLoader} from '../atoms/ModalAndCSSLoader'
import { STARTED_FETCHING_POSTS, USER_NOT_POSTED_ANYTHING,FETCHED_USER_POSTS_FAILED } from "../../redux/constants/fetchUserPostsConstants"
import { capitalizeText } from "../../utils/helperFunctions"


// const userStoriesTempArray = [213213,31231203,2312321,312323,31238123,1923,31238128];


export const MainSection = () => {

  
  const userCreatedPosts = useSelector(state=>state.fetchUserPostsReducer.userPosts);

  
//   const userDetailsOnly = userCreatedPosts.filter(elem=>{

//   return elem.hasOwnProperty('details')

// }); 

const [receivedVideos,setReceivedVideosTEMP] = useState([]);



useEffect(()=>{

  const shortVideosTEMP = JSON.parse(localStorage.getItem('shortVideosTEMP'));

  setReceivedVideosTEMP(shortVideosTEMP)

  

},[])


let finalUserPost;



if(userCreatedPosts==STARTED_FETCHING_POSTS){
  finalUserPost = <ModalAndCSSLoader/>
}else if(userCreatedPosts==FETCHED_USER_POSTS_FAILED){
  finalUserPost = <h1 className="text-center font-semibold mt-10 text-2xl">{capitalizeText('error in fetching posts')}</h1>
}
else if(userCreatedPosts.length==0){
  finalUserPost = <h1 className="text-center font-semibold mt-10 text-2xl">{capitalizeText('you and your friends has not posted anything yet')}</h1>
} else {
  finalUserPost= userCreatedPosts?.map((eachPost,index)=>{


    return <UserPost userCreatedPosts={eachPost}  key={eachPost.id}/>
    
    }) 
}



  

  return (
    <div className="px-7 flex flex-col gap-y-6 " 

    style={{width:'730px'}}
    
    >
        
{/* <Splide options={{arrows:false,perPage:3,gap:'1rem',perMove:3}}>

{receivedVideos.map((eachShortVideo,index)=>{

return <SplideSlide key={index}><EachUserStory  index={index}  /></SplideSlide>

})}


</Splide> */}




<div>


<NewPost/>

</div>


<div>


{/* {userCreatedPosts?.map((eachPost,index)=>{


return <UserPost userCreatedPosts={eachPost}  key={eachPost.id}/>

})} */}

{/* {typeof userCreatedPosts=='string'?<ModalAndCSSLoader/>:userCreatedPosts?.map((eachPost,index)=>{


return <UserPost userCreatedPosts={eachPost}  key={eachPost.id}/>

})} */}

{finalUserPost}



</div>



    </div>
  )
}