
import { onAuthStateChanged } from "firebase/auth";
import { collection } from "firebase/firestore";

import { AuthFirebase } from "../firebaseConfig";
import {useEffect, useState} from 'react'
import { getCookies } from "cookies-next";

export const getLoggedInUserUID =   ()=>{

    

    
    const {UID} = getCookies();


    // const uid = '6DGBse93KLc457CwVA5easn8J5'

    
return UID;

    
}



