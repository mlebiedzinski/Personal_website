/* eslint-disable no-unused-vars */
// StravaCaseStudy.jsx
import React from "react";

import { useNavigate } from 'react-router-dom';

export const SINCaseStudy = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Sustainable Innovation Network</h1>
      <h2>Case Study Coming soon! In the meantime, check out the <a href="https://sin-neu.netlify.app/">live site!</a></h2>
      {/* <button onClick={goHome}>Back to Home</button> */}
    </div>
  );
};
