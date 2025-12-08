/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section id="about">
            <div className={styles.aboutContainer}>
        
                <div className={styles.aboutTitle}>
                    <p>About Me !</p>
                    <img className={styles.dividerLine} src="../../../assets/contact/line.png" alt="line" />
                </div>

                <div className={styles.aboutContent}>
                    <img className={styles.me} src="../../../../assets/about/me.png" alt="me" />
                    <div className={styles.textContainer}>
                        <div className={styles.aboutText}>
                            <p>With hands-on experience designing and building full-stack applications, working with design systems, and collaborating across teams, I thrive at the intersection of design and development. Whether I'm creating wireframes, prototypes, writing production code, or refining user flows, my goal is always to craft solutions that are both visually compelling and technically sound. I'm excited to continue exploring the intersection of design and development, finding new ways to use both my creativity and technical skills to make software experiences that are engaging, functional, and meaningful for users.</p>
                        </div>
                        <div className={styles.aboutText}>
                            <p>When I'm not designing or coding, you'll find me painting, playing volleyball, or training for my first marathon. I'm a devoted cat lover who loves to travel and explore new cities. I am always on the hunt for the best local cafes and a great matcha latte. I organize my entire life (and unfinished design ideas) in Notion and I am obsessed with ice cream.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};
