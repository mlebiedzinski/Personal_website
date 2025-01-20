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
      {/* <h1>Paul's</h1>
      <h2>I am building a website to represent a cafe called Paul's! 
        I am using this project as a chance to try out new web development trends and skills. Stay tuned!</h2>
        <br/> */}
        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
        width="800" 
        height="450" 
        src="https://embed.figma.com/proto/15NR6BxSl0ovtcXYZJ41bb/Untitled?page-id=0%3A1&node-id=5-36&viewport=-549%2C140%2C0.19&scaling=scale-down&content-scaling=fixed&embed-host=share" 
        allowfullscreen>
            
        </iframe>
        </div>
   </div>
  );
};
