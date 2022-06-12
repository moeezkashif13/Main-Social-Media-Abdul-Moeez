import { SplideSlide } from '@splidejs/react-splide';
import { GridItem } from '../atoms/GridItem';

const clone = require('rfdc')();


import React from 'react';


export const SlidesPerPage = ({imagesArr,index}) => {


      const cloningImagesArray = clone(imagesArr);

      const setOfThreeElements = cloningImagesArray.splice(index,index+3);



      
      
  return (


<>


      <SplideSlide >
      
      <div className='flex flex-col gap-y-4 min-h-full'>


      <GridItem backgroundImage={setOfThreeElements[0]} />


      </div>
      
      </SplideSlide> 



      <SplideSlide >
      
      <div className='flex flex-col gap-y-4 min-h-full'>



     {setOfThreeElements.map((eachImage,index)=>{

if(eachImage){

if(index>0){
      return       <GridItem key={index} backgroundImage={setOfThreeElements[index]}  />
}
}else{
      return null
}



     })}



      </div>
      
      </SplideSlide>  
      




</>

    )
}