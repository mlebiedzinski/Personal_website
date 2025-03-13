/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";


import styles from "./Hero.module.css";

const star = (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M12.5979 1.8541C13.1966 0.0114822 15.8034 0.0114808 16.4021 1.8541L18.429 8.0922C18.6967 8.91625 19.4647 9.47417 20.3311 9.47417H26.8902C28.8277 9.47417 29.6332 11.9534 28.0658 13.0922L22.7594 16.9476C22.0584 17.4568 21.7651 18.3596 22.0328 19.1836L24.0597 25.4217C24.6584 27.2643 22.5494 28.7966 20.982 27.6578L15.6756 23.8024C14.9746 23.2932 14.0254 23.2932 13.3244 23.8024L8.01799 27.6578C6.45056 28.7966 4.3416 27.2644 4.9403 25.4217L6.96718 19.1836C7.23493 18.3596 6.94161 17.4568 6.24064 16.9476L0.934197 13.0922C-0.633231 11.9534 0.172319 9.47417 2.10977 9.47417H8.66889C9.53534 9.47417 10.3033 8.91625 10.571 8.0922L12.5979 1.8541Z" fill="#ECD082" />
    </svg>
)

export const Hero = () => {

    const [text, setText] = useState("");
    const fullText = "WELCOME";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 200); // Adjust speed here

        return () => clearInterval(interval);
    }, []);


    return (
        <section id="home">
            <div className={styles.bentoGrid}>
                <div className={styles.item}>
                    <div className={styles.dotContain}>
                        <svg className={styles.dot} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="7" fill="black" />
                        </svg>
                    </div>
                    <p>Maddie Lebiedzinski</p>
                    <p>
                        <a className={styles.indexLinks} href="#projects">
                            <span className={styles.navButton}>Projects</span>
                        </a>
                        <a className={styles.indexLinks} href="#about">
                            <span className={styles.navButton}>About</span>
                        </a>
                        <a className={styles.indexLinks} href="#contact">
                            <span className={styles.navButton}>Contact</span>
                        </a>
                    </p>
                </div>

                <div className={styles.item}>

                    <p>Hi! I’m Maddie. <br />
                        <br />
                        ( Designer & Developer passionate about creating impactful digital experiences )
                        <br /><br />
                        Thanks for visiting my website!</p>
                    <img src="../../../assets/hero/headshot.png" alt="line"></img>
                </div>

                <div className={styles.item}>
                    <div className={styles.dotContain}>
                        <svg className={styles.dot} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="7" fill="black" />
                        </svg>
                    </div>
                    <p>
                        <span className={styles.typing}>{text}</span>
                        <span className={styles.blink}>|</span>
                    </p>
                </div>

                <div className={styles.item}>
                    <div className={styles.dotContain}>
                        <svg className={styles.dot} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="7" fill="black" />
                        </svg>
                    </div>
                    <p>🎓 I am a recent Northeastern University Graduate with a B.S. in Computer Science and Interaction Design.
                    </p>
                </div>

                <div className={styles.item}>
                    <div className={styles.dotContain}>
                        <svg className={styles.dot} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="7" fill="black" />
                        </svg>
                    </div>

                    <p>
                        I’m open to work
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                            }}
                        >
                            <span className={styles.star}>{star}</span>
                        </a>

                    </p>
                </div>
            </div>
        </section>

    );
};