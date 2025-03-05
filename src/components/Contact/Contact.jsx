/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Contact.module.css";

const circle = (
    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="220" viewBox="0 0 237 219" fill="none">
        <path
            d="M235.893 109.11C236.128 168.619 183.863 217.305 118.977 217.681C54.0913 218.057 1.44539 169.98 1.21108 110.471C0.976765 50.9606 53.2417 2.2752 118.127 1.89892C183.013 1.52264 235.659 49.5997 235.893 109.11Z"
            stroke="#F4C451"
            strokeWidth="2"
        />
    </svg>
);

export const Contact = () => {
    
    return (
        <section id="contact">
            <div className={styles.contactTag}>
                <img src="../../../assets/contact/contactTag.png" alt="contactTag" />
            </div>
            <div className={styles.contactBox}>
                <div className={styles.circleLinkedin}>
                    {circle}
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/maddie-lebiedzinski-826436229/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.sticker} src="../../../assets/contact/linkedinSticker.png" alt="LinkedIn" />
                    </a>
                </div>
                <div className={styles.circleEmail}>
                    {circle}
                    <span>Email</span>
                    <a href={`mailto:madison.lebiedzinski@gmail.com`}>
                        <img className={styles.sticker} src="../../../assets/contact/emailSticker.png" alt="Email" />
                    </a>
                </div>
                <div className={styles.circleGithub}>
                    {circle}
                    <span>Code</span>
                    <a href="https://github.com/mlebiedzinski" target="_blank" rel="noopener noreferrer">
                        <img className={styles.sticker} src="../../../assets/contact/githubSticker.png" alt="GitHub" />
                    </a>
                </div>
                <div className={styles.circleResume}>
                    {circle}
                    <span>Resume</span>
                    <a href="https://drive.google.com/drive/folders/1ONzW-XY7uPfLSPmy3_p2Wv79dhFJjoBZ?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img className={styles.sticker} src="../../../assets/contact/resumeSticker.png" alt="Resume" />
                    </a>
                </div>
                <div className={styles.circleNothing}>
                    {circle}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <img className={styles.sticker} src="../../../assets/contact/catSticker.png" alt="Cat" />
                    </a>
                </div>

            </div>
            {/* <div className={styles.thanksSection}>
                <img className={styles.matchaImg} src="../../../assets/contact/matchaMe.png" alt="" />
                <div className={styles.thanksText}>Thanks so <span>MATCHA </span>for visiting!</div>
            </div> */}
        </section>
    );
};
