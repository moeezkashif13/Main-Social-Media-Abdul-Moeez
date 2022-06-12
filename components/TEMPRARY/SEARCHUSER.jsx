import { collection, getDocs } from 'firebase/firestore';
import React, { Component } from 'react';
import { useRouter } from 'next/router'

import AsyncSelect from 'react-select/async';
import { DBFirestore } from '../../firebaseConfig';
// import { ColourOption, colourOptions } from '../data';

const colourOptions = [
    {
        label:'yellow',
        value:'yellow'
    },
    {
        label:'green',
        value:'green'
    },
    {
        label:'orange',
        value:'orange'
    },
    {
        label:'purple',
        value:'purple'
    },
    {
        label:'blue',
        value:'blue'
    },
    
]

const filterColors = async (inputValue) => {

//     const colRef = collection(DBFirestore,'users');

//     const usersList = [];

//     await getDocs(colRef).then(resp=>{
//    return resp.forEach(eachDoc=>{

//     const {name} = eachDoc.data();

// usersList.push({
//   label:name,
//   value:name
// })

//   })
//  })


 const usersList = [
  {
      "label": "moeezkashif13",
      "value": "moeezkashif13"
  },
  {
      "label": "thirduser",
      "value": "thirduser"
  },
  {
      "label": "second user",
      "value": "second user"
  }
]

 
  return usersList.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {

    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });


const WithPromises = ()=> {

  const router = useRouter()

  const visitUserProfile = (data)=>{
    
    
    router.push(`userprofile/${data.value}`)

      }

      return (
      <AsyncSelect onChange={visitUserProfile} cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }


  export default WithPromises;
