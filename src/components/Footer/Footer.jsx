import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Website Designed & Developed by Me :)</p>
      <p className={styles.footerDate}>Last Updated {formattedDate}</p>
    </footer>
  );
};

export default Footer;

