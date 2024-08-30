import React, { useState, useEffect } from 'react';
import { getUserCred } from '../utils/utils';
import { Navigate, NavLink } from 'react-router-dom';
import AccessDenied from '../components/AccessDenied';

const Alluser = () => {
  const userCred = getUserCred();
  const [message, setMessage] = useState(null);
  const [countdown, setCountdown] = useState(3); // 3-second countdown

  // useEffect(() => {
  //   if (userCred && userCred.role !== "admin") {
  //     setMessage("You do not have permission to access this page. Redirecting...");
      
  //     // Start countdown
  //     const interval = setInterval(() => {
  //       setCountdown(prevCount => prevCount - 1);
  //     }, 1000);

  //     // Redirect after countdown
  //     setTimeout(() => {
  //       clearInterval(interval); // Clear interval after countdown
  //       setCountdown(0); // Ensure countdown stops at 0
  //       window.location.replace('/'); // Redirect to the home page
  //     }, 3000);

  //     return () => clearInterval(interval); // Cleanup the interval on component unmount
  //   }
  // }, [userCred]);

 if(userCred&&userCred.role!=="admin"){
  
  return <AccessDenied></AccessDenied>
 }

  return (
    
        <div>
          <h1>This is All user UI</h1>
        </div>
     
  );
};

export default Alluser;
