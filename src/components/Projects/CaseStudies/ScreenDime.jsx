/* eslint-disable no-unused-vars */
// StravaCaseStudy.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';

export const ScreenDimeCaseStudy = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      ScreenDime Case Study
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="100%"
          height="100%"
          src="https://embed.figma.com/proto/gDPVsDlmDul3YU0gwqxZSS/Personal?page-id=1188%3A4&node-id=1188-367&viewport=508%2C185%2C0.06&scaling=min-zoom&content-scaling=fixed&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
};
