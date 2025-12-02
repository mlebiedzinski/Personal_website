import React from 'react';
import styles from './LiveIndicator.module.css';

export const LiveIndicator = () => {
  return (
    <a 
      href="https://www.figma.com/design/TB4751pNpOcsYn6TeJQ4aH/Grocery-Planner?node-id=0-1&t=dvGp9fhRFNuMGkXq-1" 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.liveIndicator}
    >
      <div className={styles.yellowDot}></div>
      <span className={styles.liveText}>Live in Figma</span>
      <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 3L7.5 6L4.5 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

export default LiveIndicator;

