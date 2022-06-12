import '@splidejs/splide/dist/css/splide.min.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { Grid } from '@splidejs/splide-extension-grid';




import { SlidesPerPage } from './SlidesPerPage';

const clone = require('rfdc')();


export const SlidesContainer = ({userUploadedImagesTemprary}) => {

  const copyingTemp = clone(userUploadedImagesTemprary); 

  

  return (

    <Splide options={{


        arrows:true,
      
        fixedHeight	:'400px',
      
      
      grid: {
      rows:1,
      cols:2
        },



        
      
      }}  extensions={{
        Grid
      }}>
      
      
      
  {/* <SlidesPerPage   /> */}
  {userUploadedImagesTemprary.map((images,index)=>{


if(index%3==0){
return <SlidesPerPage key={index} index={index}   imagesArr={userUploadedImagesTemprary} />
  
}


  })}
      
      
      
      </Splide>


  )
}