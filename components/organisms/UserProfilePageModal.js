import { useEffect, useState } from 'react';



import styles from './UserStoriesModal.module.css';


import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import Image from 'next/image'

export const UserProfilePageModal = ({showRemainingImagesModal,parsedPosts})=>{
  
const {requiredID} = showRemainingImagesModal.showRemainingImagesModal;
    

    useEffect(()=>{

        // Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal

  modal.style.display = "block";

  
  const myModal = document.querySelector('#myModal');

  myModal.addEventListener('click',function(event){

    const {setShowRemainingImagesModal} = showRemainingImagesModal;


if(event.target ==this){
    setShowRemainingImagesModal(false)  
}




  })
    },[])

    
const selectedPost = parsedPosts.filter(eachPost=>{
  return eachPost.id == requiredID;
});



    

    return(

        <>
        


<div id="myModal"   className={`${styles.modal}`} >

  <div className={`${styles.modalContent}`} style={{width:'50%'}}>



  <Splide tag='section' className="splide  " aria-label="My Awesome Gallery" options={{type:'loop',
  
  
  
  fixedHeight:'620px',

  pagination:false

}} hasTrack={ false } >
  <div className="custom-wrapper">
 

<SplideTrack className="splide__track">


{selectedPost[0].userUploadedImagesTemprary.map((eachPost,index)=>{



return  <SplideSlide key={index} className="splide__slide">
<Image  layout='fill' priority objectFit='contain'   src={eachPost} />
</SplideSlide>

})}

  </SplideTrack>




  </div>
</Splide>



  </div>

</div>

        
        </>
        


    )


}