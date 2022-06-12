import { removeCookies, setCookies } from "cookies-next";
import { signOut } from "firebase/auth";
import { AuthFirebase } from "../firebaseConfig";
import moment from 'moment';



export const capitalizeText = (text, lower = false) => text ?
  (lower ? text.toLowerCase() : text).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()) : null
  ;


  export const signOutUser = (router)=>{


    signOut(AuthFirebase).then(resp=>{

removeCookies('userPublicData');
removeCookies('IDToken');
removeCookies('UID');
removeCookies('previousRoute');
      

router.push('signedout')

    }).catch(err=>{
      
    })


  }

  export const commonCookiesToSetup = (receivedIDToken,signedInUserUID)=>{


    setCookies('IDToken',receivedIDToken,{expires:moment().add(1, "days").toDate()})

    setCookies('UID',signedInUserUID,{expires:moment().add(1, "days").toDate()})




  }