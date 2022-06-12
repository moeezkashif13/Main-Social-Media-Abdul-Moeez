import { useForm } from "react-hook-form";
import { AuthReleatedInput } from "../components/atoms/AuthReleatedInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from "next/link";

import {AuthFirebase} from '../firebaseConfig'

import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useState } from "react";


import {ModalAndCSSLoader} from '../components/atoms/ModalAndCSSLoader';
import { useRouter } from "next/router";
import { createUserDataAfterRegistration } from "../utils/firestoreReleated";
import { commonCookiesToSetup } from "../utils/helperFunctions";


const schema = yup.object({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email:yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    checkbox:   yup.bool().oneOf([true],'You must accept the terms')

    
  }).required();
  


export default function Register(){

    const router = useRouter();

    const [loader,setShowLoader] = useState({
        loading:false,
        message:'',
    });

    const {loading,message} = loader;

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    });



    const onSubmit = async (data) => {

        
        const {email,password,firstname,lastname} = data;

setShowLoader({
    loading:true,
    message:'Signing You Up'
})

         createUserWithEmailAndPassword(AuthFirebase,email,password).then(async (resp)=>{

            const {uid} = resp.user;

        await createUserDataAfterRegistration(uid,{email,firstname,lastname});

await updateProfile(resp.user,{
    displayName:`${firstname} ${lastname}`
});

 await resp.user.getIdToken(true).then(receivedIDToken=>{
           
    // setCookies('IDToken',receivedIDToken,{expires:moment().add(1, "days").toDate()})
    // setCookies('UID',resp.user.uid,{expires:moment().add(1, "days").toDate()})

    commonCookiesToSetup(receivedIDToken,resp.user.uid);

  })



setShowLoader({
    loading:false,
    message:'Signed Up Successfully Taking You To Main Page'
})


    router.push('/')

        }).catch(err=>{
            console.log(err);
            setShowLoader({
                loading:false,
                message:'Error in Signing You Up'
            })

        })

       


      


    };



    return(
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex justify-center items-center my-5">


<div style={{width:'570px',boxShadow:'0 0 15px 0px rgba(0,0,0,0.06)'}} className=" bg-white  flex flex-col px-12 py-12 ">


<p className="text-2xl  font-semibold">Sign up with your email</p>

<p className="text-sm font-semibold mt-3 mb-6">Already have an account? <Link href="signin">Sign in</Link></p>


<div className="flex flex-col gap-y-5">
<AuthReleatedInput label="first name" errors={errors} register={register}/>
<AuthReleatedInput label="last name" errors={errors} register={register}/>
<AuthReleatedInput label="email" errors={errors} register={register}/>
<AuthReleatedInput label="password" errors={errors} register={register}/>
</div>


<div className="checkbox pt-5 font-semibold">
      <label className="flex items-center "><input className="mr-2" type="checkbox" {...register('checkbox')} name="checkbox" value="" />I agree to the <a href="#!" > Terms of Services </a>
      
      <span className="mx-1">and</span> <a href="#!"> Privacy Policy</a>

      </label>

      <p className="text-red-500 font-semibold mt-3">{errors.checkbox&&errors.checkbox.message}</p>

    </div>


{loading?(
    <> 
    <ModalAndCSSLoader/>
    <p className=" mt-3 mb-4 text-blue-500 font-bold "> {message}</p>
    </>
 ):(
    <p className=" mt-3 mb-4 text-purple-500 font-bold">{message}</p>
)}

    <button id="myBtn" type="submit" style={{boxShadow:'0 10px 15px 0px rgba(85,81,255,0.3)'}} className="bg-[#5551ff] text-white font-bold text-lg py-4  rounded-lg">

Create Account

</button>




</div>





        </form>
    )


}