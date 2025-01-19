/* eslint-disable no-unused-vars */
import React from "react";


import { useNavigate } from 'react-router-dom';

export const Pauls = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Paul's</h1>
      <h2>I am building a website to represent a cafe called Paul's! 
        I am using this project as a chance to try out new web development trends and skills. Stay tuned!</h2>
        <br/>
        {/* <h6>Sneak Peek</h6>
        <img src="paulsFigma.png" alt="Description"></img> */}
   </div>
  );
};
