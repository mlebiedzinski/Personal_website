/* eslint-disable no-unused-vars */
// StravaCaseStudy.jsx
import React from "react";

import { useNavigate } from 'react-router-dom';

export const StravaCaseStudy = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Strava Case Study</h1>
      {/* <button onClick={goHome}>Back to Home</button> */}
    </div>
  );
};
