import {  useState } from "react";

import { Container } from "../components/Container";
import { Sidebar } from "../components/organisms/Sidebar";

import {IoMdPhotos} from 'react-icons/io'


import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { createUserPost } from "../utils/firestoreReleated";
import {getLoggedInUserUID}  from "../utils/authenticationReleated";
import Navbar from "../components/organisms/Navbar";

import { motion,useAnimation} from 'framer-motion'


import withAuth from "../components/hoc";


const maxCharacters = '150';

const schema = yup.object({
  
    post    :   yup.string().min(15,'Post should have at least 15 characters').max(maxCharacters,`Post can have only ${maxCharacters} characters`).required('Required field'),
    
// picture:yup.array().min(1,'at least 1 image').max(3,'maximum 3 images')


// .min(1,'At least one image').max(3,'maximum 3 images').required('add image')




    
    
  }).required();


  

export default function CreatePost(){

    const [images,setImages] = useState([]);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    
const controls = useAnimation();
const publishingButtonControls = useAnimation();

const [showPublishingButton,setShowPublishingButton] = useState(true);

const [disableButton,setDisableButton] = useState(false);


let hsl = '223deg 100% 50%';

let changedColor = '214deg 61% 65%'

    const onSubmit = async (data) => {


        // const receivedImage = data.picture[0];

        // const check = resizeGivenImage(receivedImage);

        // 




        setDisableButton(true);

const {post} = data;





controls.start({
    backgroundColor: [`hsl(${hsl})`, `hsl(${changedColor})`],
    
    x:800,

})

setTimeout(() => {
    publishingButtonControls.start({
    backgroundColor: [`hsl(${hsl})`, `hsl(${changedColor})`],
        x:120
    })
}, 500);

await createUserPost(getLoggedInUserUID(),{text:post,images})
.then(resp=>{

    publishingButtonControls.start({
        backgroundColor: [`hsl(${changedColor})`,`hsl(${hsl})`] ,
        x:-1200
    }).then(()=>{
        controls.start({
            backgroundColor: [`hsl(${changedColor})`,`hsl(${hsl})`] ,
            x:0
        });

    })



setTimeout(() => {
    setDisableButton(false);
    
}, 2000);



})







    
};





    function onImageChange(e){

        
        
        
        setImages([...e.target.files]);

    };


    return(

        <>
        <Navbar/>
        <Container>

        <Sidebar />
        

<form onSubmit={handleSubmit(onSubmit)} className=" px-4 mx-auto py-4 w-[50%]"> 


<div className="bg-white px-4  py-4 text-lg rounded-xl">

    <textarea {...register('post')} name="post"  id="post" className="resize-none w-full h-64 font-semibold outline-none border-none" placeholder="Write Here"></textarea>

<p className="text-red-500 font-semibold text-md pb-5">{errors['post']&&errors['post'].message}</p>

<div className="flex">

<input type="file" id="file" className="hidden" name="picture" {...register('picture',


)}


onChange={onImageChange}




// className="hidden" 


accept="image/*" multiple />


<label htmlFor="file" className="cursor-pointer text-2xl flex items-center">
<IoMdPhotos  />
<span className="text-sm font-semibold ml-1">Add Photos </span>
</label>

</div>


</div>


<div className="flex flex-wrap gap-4 bg-[#e9e9e9] justify-center rounded-xl mt-4">

{images.length>=1?images.map((eachImage,index)=>{
    return (
        <div className="w-24 h-24 my-4 rounded-lg bg-cover bg-center bg-no-repeat " key={index} style={{backgroundImage:`url(${URL.createObjectURL(eachImage)})`}}>        </div>
    )
}):<div key={Math.floor(Math.random()*500)} className="py-4">Preview images here</div>}




</div>



<div className=" flex  gap-x-8 imagesContainer py-4">




{/* {images.map(eachImage=>(
    <div className="w-32 h-20 ">
    <img src={eachImage} className="w-full h-full object-cover rounded-xl" alt="" />
</div>
))} */}

</div>


<div className="flex justify-end ">

{/* <button type="submit" className="bg-[#1877f2] text-white font-semibold text-lg rounded-lg px-7 py-2">
    Publish
</button> */}

{showPublishingButton&&<motion.button 

disabled={disableButton}

animate={publishingButtonControls}

initial={{x:-1200}}

transition={{
    duration: 1,
    // repeat: Infinity,
    // repeatType: "reverse",
}}


style={{backgroundColor:`hsl(${hsl})`}}


type="submit" className="  text-white font-semibold text-lg rounded-lg px-7 py-2">
    Publishing
</motion.button>

}

<motion.button 

disabled={disableButton}

animate={controls}

transition={{
    duration: 1,
    // repeat: Infinity,
    // repeatType: "reverse",
}}


style={{backgroundColor:`hsl(${hsl})`}}


type="submit" className="  text-white font-semibold text-lg rounded-lg px-7 py-2">
    Publish
</motion.button>



</div>




</form>


        

        {/* <RequestsAndContacts/> */}
        
            </Container>


            </>




    )

}


export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });