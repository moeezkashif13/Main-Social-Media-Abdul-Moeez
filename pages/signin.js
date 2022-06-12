import { useForm } from "react-hook-form";
import { AuthReleatedInput } from "../components/atoms/AuthReleatedInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ModalAndCSSLoader } from "../components/atoms/ModalAndCSSLoader";
import { AuthFirebase } from "../firebaseConfig";
import { useRouter } from "next/router";


import { getCookies } from 'cookies-next';
import { commonCookiesToSetup } from "../utils/helperFunctions";





const schema = yup.object({
    email:yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required to signin'),


    
  }).required();
  



export default function Login(){

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

        const {email,password} = data;

setShowLoader({
    loading:true,
    message:'Signing In'
})



    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.

    try {
          const resp = await signInWithEmailAndPassword(AuthFirebase, email, password);

          await resp.user.getIdToken(true).then(receivedIDToken=>{
           
            commonCookiesToSetup(receivedIDToken,resp.user.uid);

          })

          

          setShowLoader({
              loading: false,
              message: 'Signed In Successfully Taking You To Main Page'
          });

          const {previousRoute} = await getCookies();
          const formattedRoute = await previousRoute.replace(/[&\/\\#,+F()$~%.'":*?<>{}0-9]/g, '');
          // 

              router.push(formattedRoute?`/${formattedRoute}`:'/');

            //   router.push('/')
            //   await router.push(`/${formattedRoute}`);

              
            } catch (err) {

                

if(err.message.includes('auth/user-not-found')){
    setShowLoader({
        loading: false,
        message: 'User does not exist'
    });
}else if(err.message.includes('auth/wrong-password')){
    setShowLoader({
        loading: false,
        message: 'Incorrect Password'
    });
}
          
      }


    };



    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center h-[100vh]">


<div style={{width:'570px',boxShadow:'0 0 15px 0px rgba(0,0,0,0.06)'}} className=" bg-white  flex flex-col px-12 py-12 ">


<p className="text-2xl mb-1  font-semibold">Please login or register to access pages</p>

<div className="text-green-500 font-bold">
<p >You can also use demo account</p>
<p className="my-2">Email: guestuser@gmail.com</p>
<p>Password: guestuser</p>
</div>

<p className="text-sm font-semibold mt-3 mb-6 text-red-500">Don't have an account? <Link href="/register">Register</Link></p>


<div className="flex flex-col gap-y-5">

<AuthReleatedInput label="email" errors={errors} register={register}/>
<AuthReleatedInput label="password" errors={errors} register={register}/>
</div>


{loading?(
    <> 
    <ModalAndCSSLoader/>
    <p className=" mt-3 mb-4 text-blue-500 font-bold "> {message}</p>
    </>
 ):(
    <p className=" mt-3 mb-4 text-purple-500 font-bold">{message}</p>
)}

<button type="submit" style={{boxShadow:'0 10px 15px 0px rgba(85,81,255,0.3)'}} className="bg-[#5551ff] text-white font-bold text-lg py-4 mt-8  rounded-lg">Sign In</button>



</div>





        </form>
    )
    

}