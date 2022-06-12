

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUserStoriesModal } from '../../redux/actions/helperActions';
import styles from './UserStoriesModal.module.css';

import {App} from '../VIDEOJSPRAC';

export const UserStoriesModal = ()=>{

  const dispatch = useDispatch();

    useEffect(()=>{

        // Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal

  modal.style.display = "block";

  
  const myModal = document.querySelector('#myModal');

  myModal.addEventListener('click',function(event){


    if(event.target==this){

dispatch(showUserStoriesModal(false));

    }
    

  })



    },[])







    return(

        <>
        


<div id="myModal"   className={styles.modal}>

  <div className={styles.modalContent}>
      
    {/* <p>INDEX IS : {index}</p> */}


<App />



  </div>

</div>

        
        </>
        


    )


}