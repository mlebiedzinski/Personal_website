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
const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path d="M1 16L14 8.5L1 0.999999" stroke="black" strokeWidth="1.5" />
    </svg>
)

export const Contact = () => {

    return (
        <section id="contact">
            <div className={styles.contactBackground}>
                <div className={styles.contactContainer}>
                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />
                    <a href="https://www.linkedin.com/in/maddie-lebiedzinski-826436229/" target="_blank" rel="noopener noreferrer">
                        <div className={styles.contactLinks} >
                            <div className={styles.contactText}> LinkedIn </div>
                            <div className={styles.contactArrow}>{arrow}</div>
                        </div>
                    </a>

                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />

                    <a href="https://github.com/mlebiedzinski" target="_blank" rel="noopener noreferrer">
                        <div className={styles.contactLinks}>
                            <div className={styles.contactText}> Github </div>
                            <div className={styles.contactArrow}>{arrow}</div>
                        </div>
                    </a>

                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />

                    <a href={`mailto:madison.lebiedzinski@gmail.com`} target="_blank" rel="noopener noreferrer">
                        <div className={styles.contactLinks}>
                            <div className={styles.contactText}> Email </div>
                            <div className={styles.contactArrow}>{arrow}</div>
                        </div>
                    </a>

                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />

                    <a href="https://drive.google.com/drive/folders/1ONzW-XY7uPfLSPmy3_p2Wv79dhFJjoBZ?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className={styles.contactLinks}>
                            <div className={styles.contactText}> Resume </div>
                            <div className={styles.contactArrow}>{arrow}</div>
                        </div>
                    </a>

                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />
                    <div className={styles.contactThanks}> Thanks For Visiting ! </div>
                    <img className={styles.contactLine} src="../../../assets/contact/line.png" alt="line" />

                    <div className={styles.boxContainer}>

                        <div className={styles.box}>
                            <div className={styles.boxText}>
                                <span>I make pet portraits!</span>
                            </div>
                            <a href="#">
                            <img className={styles.linkIcon} src="../../../assets/projects/arrowIcon.png"></img>
                            </a>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.boxText}>
                                <span>I’m running a marathon. <br />
                                    Help me raise money for cancer.</span></div>
                                    <a href="#">
                            <img className={styles.linkIcon} src="../../../assets/projects/arrowIcon.png"></img>
                        </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
