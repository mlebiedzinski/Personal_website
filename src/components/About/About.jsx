/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section id="about">
            <div className={styles.aboutContainer}>
                {/* <div className={styles.aboutBackground}></div> */}
                <div className={styles.aboutTag}>
                    <img src="../../../../assets/about/aboutTag.png" alt="aboutTag" />
                </div>
                <div className={styles.aboutContent}>
                    <img className={styles.me} src="../../../../assets/about/me.png" alt="me" />
                    <div className={styles.aboutText}>
                    As a designer and developer, I’m passionate about building user-centered digital products that merge thoughtful design with strong technical execution. My work spans front-end development, UI/UX design, and creative problem-solving—translating complex ideas into intuitive, accessible experiences. With hands-on experience building full-stack applications, working with design systems, and collaborating across teams, I thrive at the intersection of design and development. Whether I’m creating prototypes, writing production code, or refining user flows, my goal is always to craft solutions that are both visually compelling and technically sound. I’m excited to continue exploring the intersection of design and development, finding new ways to use both my creativity and technical skills to make software experiences that are engaging, functional, and meaningful for users.
                    </div>
                </div>
            </div>
        </section>


    );
};
