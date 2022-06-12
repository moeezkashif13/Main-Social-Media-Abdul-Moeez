import {useEffect, useState} from 'react'
import {Container} from '../components/Container';

import {Sidebar} from '../components/organisms/Sidebar';

import {AiOutlineUpload} from 'react-icons/ai'
import { shortVideosOfLoggedInUser} from '../utils/firestoreReleated';

export default function UploadShort(){

    
const [videos,setVideos] = useState([]);

const onVideoChange = (event)=>{

const videoFiles = event.target.files;

setVideos([...videoFiles]);



}


useEffect(()=>{

    if(videos.length>=1){

        // uploadShortVideosOnBackend(videos);

        shortVideosOfLoggedInUser(videos)

        

    }



},[videos])

    return(

        <Container>

<Sidebar/>



<div className=' w-full flex flex-col items-center justify-center'>


<div className='bg-[#e8e6ea] text-[90px] rounded-2xl px-3 py-3 ' >

<AiOutlineUpload  />


</div>


<p className='text-black font-bold text-2xl my-3'>Upload a New Video</p>


<button className='bg-[#613afd] text-white font-bold px-10 py-2 rounded-xl '>Upload</button>



<input type="file" id="file" onChange={onVideoChange} className="" accept="video/*" multiple  />



</div>


        </Container>



    )


}