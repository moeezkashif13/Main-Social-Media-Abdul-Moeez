import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, limit, query, serverTimestamp, setDoc, Timestamp, updateDoc, where, } from "firebase/firestore"
import { AuthFirebase, DBFirestore, initializeGetStorage } from "../firebaseConfig"
import {getLoggedInUserUID}  from "./authenticationReleated"

const clone = require('rfdc')();

import { v4 as uuidv4 } from 'uuid';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { resizeGivenImage } from "./resizeImage";


export const createUserDataAfterRegistration = async (registeredUserUID,data)=>{

    const docRef = doc(DBFirestore,'users',registeredUserUID)

    await setDoc(docRef,{...data})


}


export const createUserPost = async (registeredUserUID,data)=>{

    // HEREEE

const gettingLoggedInUserDetails = await getLoggedInUserDetails();

const {email:loggedInUserEmail} = gettingLoggedInUserDetails;

const colRef = collection(DBFirestore,'posts',registeredUserUID,'userPosts');

const q = query(colRef,where('details.email','==',loggedInUserEmail),limit(1));


const querySnapshot = await getDocs(q);


const avien = querySnapshot.docs.map(checkingIfDetailsExist=>{

    if(checkingIfDetailsExist.exists){
        return checkingIfDetailsExist.data();
    }
})


const {text,images} = data;


return new Promise(async resolve=>{
    

try {
    
    const respFromAddDoc =  await addDoc(colRef,{
        text,

    ...(avien.length<1 && {details: gettingLoggedInUserDetails}),

        
        
        userUploadedImagesTemprary : [],


        createdAt : Timestamp.now(),

    })

    if(images.length>=1){
      
  

      const foorLopTest = async ()=>{

      for (let index = 0; index < images.length; index++) {


        const eachImage = images[index];

        
        const resizingImage = await resizeGivenImage(eachImage);
        
        const storageRef  = ref(initializeGetStorage,`${getLoggedInUserUID()}/postsImages/${respFromAddDoc.id}/${eachImage.name}`);
        
        await uploadBytes(storageRef, resizingImage);

         const imageURL = await getDownloadURL(storageRef);

            const docRefrence = doc(DBFirestore,'posts',getLoggedInUserUID(),'userPosts',respFromAddDoc.id);
    
             await updateDoc(docRefrence,{
                userUploadedImagesTemprary:arrayUnion(imageURL)
            })


      };

      resolve('executing according to expectationss')



    }

    foorLopTest()



    }else{
        
        resolve('no images received but no problem')
    }

    // HEREEE

    
} catch (error) {
    

    
}


})

  
}



export  const getLoggedInUserDetails = async ()=>{


    const avien = doc(DBFirestore,'users',getLoggedInUserUID());
    
    const getDetails = await getDoc(avien);

    
    return getDetails.data();

}

export const fetchUserPosts = async (userUID)=>{


    
    const userPostsCollectionREF = collection(DBFirestore,'posts',userUID,'userPosts');

    const gettingUserPosts =  await getDocs(userPostsCollectionREF);

    
    const userPostsArray = [];

    gettingUserPosts.forEach(eachPost=>{


        userPostsArray.push({id:eachPost.id,...eachPost.data(),userUID})


    })

    
return userPostsArray



};





export const addFriendHandler = async (futureFriendUID)=>{

    

    const friendsCollectionRef = doc(DBFirestore,'friends',getLoggedInUserUID(),'sentRequest',futureFriendUID);

    const receivedRequestCollectionRef = doc(DBFirestore,'friends',futureFriendUID,'receivedRequest',getLoggedInUserUID());

    const {firstname:futurefriendfirstname,lastname:futurefriendlastname} = await getLoggedInUserDetails();



    return new Promise(async(resolve)=>{
        

await setDoc(friendsCollectionRef,{
    requestSent:true,
}).then(()=>{


    setDoc(receivedRequestCollectionRef,{
        requestReceived:true,
        futureFriendName:{firstname:futurefriendfirstname,lastname:futurefriendlastname},
        isAFriendRequest:true,

        
    }).then(resp=>{
        
        resolve();
    })

});


})
}


export const fetchSentRequests = async ()=>{

    const friendsCollectionRef = collection(DBFirestore,'friends',getLoggedInUserUID(),'sentRequest');

    
    let sentRequestsArray = [];
    
    await (await getDocs(friendsCollectionRef)).forEach(eachDoc=>{
        sentRequestsArray.push({UID:eachDoc.id,...eachDoc.data()})
    })
    
    return sentRequestsArray;


}


export const requestSendStatus = async (futureFriendUID,loggedInUserUIDFromCookies)=>{


    const receivedRequestCollectionRef = doc(DBFirestore,'friends',futureFriendUID,'receivedRequest',loggedInUserUIDFromCookies?loggedInUserUIDFromCookies:getLoggedInUserUID());

    const result = await getDoc(receivedRequestCollectionRef);

    if(result.exists()){

    return result.data();        

    }else{
        return {error:'errorrr'};
    }




}


export const fetchingUserForProfilePage = async(UIDFromURL)=>{


    const getUserFromUID = doc(DBFirestore,'users',UIDFromURL);

    
    const fetchedUser =  await getDoc(getUserFromUID);

    


    if(fetchedUser.exists()){

        return fetchedUser.data();

    }else{

        return 'Error in getting user. There might be a problem with internet connection or the user does not exist'

    }


}





export const queryForGettingUserByName = async ()=>{


    const q = collection(DBFirestore,'users')

const tempAllUsersArray = [];

     await getDocs(q).then(resp=>{


 resp.forEach(eachDoc=>{


    tempAllUsersArray.push({...eachDoc.data(),id:eachDoc.id});
    
});

    })


    return tempAllUsersArray;

    
}

export const getAllUsers =  async ()=>{

    const allUsers = collection(DBFirestore,'users');

    const allUsersArray = [];

    await getDocs(allUsers).then(usersDocument=>{

        usersDocument.forEach(eachUser=>{

            allUsersArray.push({...eachUser.data(),id:eachUser.id})

        })

    })


    return allUsersArray;


}



export const fetchReceivedRequests = async ()=>{

    
    const receivedRequestsCollection = collection(DBFirestore,'friends',getLoggedInUserUID(),'receivedRequest');

const receivedRequestsArray = [];

     await getDocs(receivedRequestsCollection).then(eachRequest=>{

        eachRequest.docs.forEach(elem=>{
        receivedRequestsArray.push({...elem.data(),UID:elem.id})            
        })
    });

    return receivedRequestsArray



}


export const checkFriendRequestOnProfilePage = async (UID,loggedInUserUIDFromCookies)=>{


    const docRef = doc(DBFirestore,'friends',loggedInUserUIDFromCookies?loggedInUserUIDFromCookies:getLoggedInUserUID(),'receivedRequest',UID);

return await getDoc(docRef).then(resp=>{
    // 
    if(resp.exists()){
        return resp.data()
}else{
        return {isAFriendRequest:false}
    }


})

}


export const acceptFriendRequest = async (newFriendUID)=>{

// 

// fetchNewFriendPosts(newFriendUID);

const colRefFirst = doc(DBFirestore,'friends',getLoggedInUserUID(),'friendshipWith','friendsUIDArray',);

const colRefSecond = doc(DBFirestore,'friends',newFriendUID,'friendshipWith','friendsUIDArray',);


await setDoc(colRefFirst,{
    friends: arrayUnion(newFriendUID)
},{merge:true})

await setDoc(colRefSecond,{
    friends:arrayUnion(getLoggedInUserUID())
},{merge:true});




}


let newFriendPosts = [];

export const fetchNewFriendPosts =  async ()=>{

 const colRef = doc(DBFirestore,'friends',getLoggedInUserUID(),'friendshipWith','friendsUIDArray');

 let docSnap = await getDoc(colRef);


 if(docSnap.data()){
    
 const {friends} = docSnap.data();

 
 const checkingAgain = friends.map(async eachElem=>{
 
     const colRef = collection(DBFirestore,'posts',eachElem,'userPosts');
 
     const avien = await getDocs(colRef).then(resp=>{
         return resp.docs.map(challAp=>{
             
             return {...challAp.data(),userUID:eachElem};
         });
     });
 
 
     return avien;
 });
 
 
 const finalVersion = await Promise.all(checkingAgain);
 
 const cloningFinalVersion = clone(finalVersion);
 
 let checkingMain = [];
 
 
 cloningFinalVersion.forEach(each=>{
     
     checkingMain.push(...each);
 });
 
 
 
 return checkingMain;
 }else{
     return []
 }



}



const uploadProfilePic =async (profilePic)=>{

    const profilePicReference  = ref(initializeGetStorage,`${getLoggedInUserUID()}/profilePic/${profilePic.name}`);

const profilePicLinkInDatabase = doc(DBFirestore,'posts',getLoggedInUserUID(),'userPosts','profilePicLinkInDatabase');

const refrenceToUser = doc(DBFirestore,'users',getLoggedInUserUID())
    

    await uploadBytes(profilePicReference, profilePic).then((snapshot) => {
        
      });
 
      const imageURL = await getDownloadURL(profilePicReference);
     
      setDoc(refrenceToUser,{
          photoURL:imageURL
      },{merge:true})

 await updateProfile(AuthFirebase.currentUser,{
     photoURL: imageURL,
 });

 await setDoc(profilePicLinkInDatabase,{
     profilePic:imageURL
 });

return imageURL;



}


export const updateLoggedInUserDetails = async (profilePic)=>{


    const compressedProfilePic = await resizeGivenImage(profilePic);

    const profilePicFolderReference  = ref(initializeGetStorage,`${getLoggedInUserUID()}/profilePic`);

    return new Promise(async (resolve,reject)=>{

// Find all the prefixes and items.
listAll(profilePicFolderReference)
  .then(async (res) => {

    const {items} = res;


if(items.length>=1){
   const deleteOldProfilePics = async ()=>{

    for (let index = 0; index < items.length; index++) {

        const eachRefrence = items[index];
                
        const oldProfilePicRef = ref(initializeGetStorage, eachRefrence);

// Delete the file
await  deleteObject(oldProfilePicRef).then(async () => {
  // File deleted successfully
  
  const finalPic =  await uploadProfilePic(compressedProfilePic)
  
  
  
  resolve(finalPic);


}).catch((error) => {
  // Uh-oh, an error occurred!
  

});
        
    };
   };

   deleteOldProfilePics();


}else{
    const finalPic =  await uploadProfilePic(compressedProfilePic)


  resolve(finalPic);


}  

    
    
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

  
})


}


export const getUserProfileData = ()=>{


    const user = AuthFirebase.currentUser.providerData[0];
// 
    


    return user;


}




const uploadVideosToStorage = async (videoFiles)=>{

    // let videosDownloadableURL = [];

    for (let index = 0; index < videoFiles.length; index++) {
        const eachVideo = videoFiles[index];

        const videoRef = ref(initializeGetStorage,`${getLoggedInUserUID()}/shortVideos/${eachVideo.name}`)


        const uploadEachVideoToStorage = await uploadBytes(videoRef,eachVideo);

        // const eachVideoDownloadURL = await getDownloadURL(videoRef);

        // videosDownloadableURL.push(eachVideoDownloadURL);
    };


    // return videosDownloadableURL;


}


export const uploadShortVideosOnBackend   = async  (videoFiles)=>{


    // const uploadedVideoURLS = await uploadVideosToStorage(videoFiles);
    
    // return uploadedVideoURLS;


}


export const shortVideosOfLoggedInUser = async ()=>{

    let URLsOfShortVideos = [];

    const shortVideosFolderRef = ref(initializeGetStorage,`${getLoggedInUserUID()}/shortVideos`);

    await listAll(shortVideosFolderRef)
  .then(async (res) => {
    // res.items.forEach((itemRef) => {
    //   // All the items under listRef.
    // });

    for (let index = 0; index < res.items.length; index++) {
        const eachVideoRef = res.items[index];
        
        const downloadURL = await getDownloadURL(eachVideoRef);

        URLsOfShortVideos.push(downloadURL);

    }



  }).catch((error) => {
    // Uh-oh, an error occurred!
    
  });


  

return URLsOfShortVideos;

}