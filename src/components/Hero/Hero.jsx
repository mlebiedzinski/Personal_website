/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    const [displayedTexts, setDisplayedTexts] = useState(["", "", "", ""]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const fullTexts = [
            "Welcome!",
            "I am a Designer & Developer passionate about creating impactful digital experiences.",
            "I recently graduated from Northeastern University with a B.S in Computer Science and Interaction Design.",
            "Thanks for visiting my website."
        ];

        if (currentIndex >= fullTexts.length) return;

        const currentText = fullTexts[currentIndex];
        
        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setDisplayedTexts(prev => {
                    const newTexts = [...prev];
                    newTexts[currentIndex] = currentText.slice(0, charIndex + 1);
                    return newTexts;
                });
                setCharIndex(charIndex + 1);
            }, 30); // Adjust speed here (lower = faster)

            return () => clearTimeout(timer);
        } else {
            // Move to next text after a short delay
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setCharIndex(0);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, charIndex]);

    return (
        <section id="home">
            <div className={styles.heroContainer}>
                <div className={styles.heroLayout}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        {/* Top text box */}
                        <div className={styles.textBox}>
                            <p className={styles.welcomeText}>{displayedTexts[0]}</p>
                            <p className={styles.introText}>{displayedTexts[1]}</p>
                            <p className={styles.graduationText}>{displayedTexts[2]}</p>
                            <p className={styles.thanksText}>{displayedTexts[3]}</p>
                        </div>
                        
                        {/* Bottom row: empty box and nav buttons */}
                        <div className={styles.bottomRow}>
                            {/* Bottom empty box */}
                            <div className={styles.emptyBox}></div>

                            {/* Navigation buttons */}
                            <div className={styles.navButtons}>
                                <a className={styles.navButton} href="#projects">
                                    <span>Projects</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a className={styles.navButton} href="#about">
                                    <span>About</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a className={styles.navButton} href="#contact">
                                    <span>Contact</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                    </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        {/* Top name box */}
                        <div className={styles.nameBox}>
                            <p>Hi, I&apos;m Maddie</p>
                    </div>

                        {/* Image box */}
                        <div className={styles.imageBox}>
                            <img src="/assets/hero/hero.png" alt="Maddie" />
                        </div>

                        {/* Empty pink box below image */}
                        <div className={styles.emptyBoxRight}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
