
import { initializeApp, } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth';
import { getStorage} from "firebase/storage";



const config = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASURMENTID
};



let  app =  initializeApp(config);

export const AuthFirebase = getAuth(app);
export const DBFirestore = getFirestore(app);

export const initializeGetStorage = getStorage(app);



