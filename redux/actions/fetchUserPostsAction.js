import { getLoggedInUserUID } from '../../utils/authenticationReleated';
import {fetchNewFriendPosts, fetchUserPosts} from '../../utils/firestoreReleated';

import {FETCHED_USER_POSTS_FAILED,FETCHED_USER_POSTS_SUCCESS, USER_NOT_POSTED_ANYTHING} from '../constants/fetchUserPostsConstants';

const clone = require('rfdc')();



export const fetchUserPostsAction = ()=>async(dispatch)=>{


    
    try{

        dispatch({
            type:'STARTED_FETCHING_POSTS',
            payload:'STARTED_FETCHING_POSTS',
        })
        
        const result = await fetchUserPosts(getLoggedInUserUID());
        
    const chapp = await fetchNewFriendPosts();


    
const cloningResult = clone(result);

const cloningChapp = clone(chapp);


    let bothTypeOfUsersPosts = [];

    bothTypeOfUsersPosts.push(...cloningResult,...cloningChapp);


const checkingArr = clone(bothTypeOfUsersPosts);


const getObjectsWithDetailsPROP = checkingArr.filter(eachPost=>{

    return eachPost.details;

});




let mainArray = [];


const splicingArraysIncludingProfilePic = clone(checkingArr).filter(elem=>{
    return elem.profilePic;
});




getObjectsWithDetailsPROP.forEach(elem=>{
     checkingArr.forEach(eachElem=>{

const avien = splicingArraysIncludingProfilePic.find(checking=>{
    return checking.userUID == eachElem.userUID;
});

        mainArray.push(elem.userUID==eachElem.userUID &&{...eachElem,details:elem.details,profilePic:avien?avien.profilePic:null})


    
    })
});


const cloningMainArray = clone(mainArray);



const removingProfilePicObjects = cloningMainArray.filter(eachElem=>{
    return eachElem.text;
});




const removingFalsyValuesFromArray = removingProfilePicObjects.filter(eachElem=>{
    return !!eachElem
});

    
const changingCreatedAt = removingFalsyValuesFromArray.map(eachDocument=>{

    if(eachDocument.createdAt){



        const {createdAt} = eachDocument;
        
        const convertCreatedAt = new Date(createdAt.seconds*1000);

        
        
        // const convertCreatedAt = createdAt.toDate();

        const currentTime = new Date();


let convertingToMinutes = Math.floor(((currentTime.getTime() - convertCreatedAt.getTime()) / 1000)/60);

let convertingMinutesToHours;


let convertingHoursToDays;

    // NEWWW

     if(convertingToMinutes>=60){

        
                convertingMinutesToHours = Math.floor(convertingToMinutes/60);
            
            
                if(Math.floor(convertingMinutesToHours)>24){

                      convertingHoursToDays =   Math.floor(convertingMinutesToHours/24);

                      return {...eachDocument,createdAt:`${convertingHoursToDays} days ago`};
                  
                    }else{
            
                return {...eachDocument,createdAt:`${convertingMinutesToHours} hours ago`};
            }

            
             }else{
    
            return {...eachDocument,createdAt:`${convertingToMinutes} minutes ago`};
        }


    // NEWWW
        
    }


      return {...eachDocument}
    
    
      });


dispatch({
    type:FETCHED_USER_POSTS_SUCCESS,
    payload:changingCreatedAt,
})




    }catch(error){

dispatch({
    type:FETCHED_USER_POSTS_FAILED,
    payload:FETCHED_USER_POSTS_FAILED,
})


    }

}