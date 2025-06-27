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
            <div className={styles.contactTitle}>
                    <p>Contact Me !</p>
                    <img className={styles.dividerLine} src="../../../assets/contact/line.png" alt="line" />
                </div>
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
                            <a href="https://fundraise.cancerresearch.org/fundraiser/6202373" target="_blank" rel="noopener noreferrer">
                                <img className={styles.linkIcon} src="../../../assets/projects/arrowIcon.png"></img>
                            </a>
                        </div>
<div className={styles.arrowBox}>
<a href="#home">
                            <div className={styles.arrow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" viewBox="0 0 30 52" fill="none">
                                    <path d="M16.4142 0.585785C15.6332 -0.195263 14.3668 -0.195263 13.5858 0.585785L0.857869 13.3137C0.0768206 14.0948 0.0768204 15.3611 0.857869 16.1421C1.63892 16.9232 2.90525 16.9232 3.6863 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585785ZM17 52L17 2L13 2L13 52L17 52Z" fill="black" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 69 69" fill="none">
                                    <circle cx="34.5" cy="34.5" r="34.5" fill="#D9D9D9" />
                                </svg>

                            </div>
                        </a>
</div>
                      
                    </div>
                </div>

            </div>
        </section>
    );
};
