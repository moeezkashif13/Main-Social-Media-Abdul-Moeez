import React from 'react';
import Router from 'next/router';


import { onAuthStateChanged} from "firebase/auth";

import {AuthFirebase} from '../firebaseConfig'

const login = '/signin?redirected=true'; // Define your login route address.


const checkUserAuthentication = () => {

  onAuthStateChanged(AuthFirebase,(user)=>{

    

  })

  return { auth: 'null' }; // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => {

    
    return <WrappedComponent {...props} />
  };

  
  hocComponent.getInitialProps = async (context) => {

    const userAuth = await checkUserAuthentication();

    



    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        // context.res?.writeHead(302, {
        //   Location: login,
        // });
        
        
        
        context.res?.end();



      } else {
        
        // Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      
      
  
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
