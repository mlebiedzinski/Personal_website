/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section id="about">
            <div>
                <div className={styles.aboutTag}>
                    <img src="../../../assets/about/aboutTag.png" alt="aboutTag" />
                </div>
                <img className={styles.me} src="../../../../assets/about/me.png" alt="me" />
                <div className={styles.aboutText}>From an early age, I had a natural knack for <span>creativity</span> and an eye for design. I loved experimenting with <span>visual storytelling</span>, color, and layout, and developed a strong appreciation well-crafted design. As I got older, my curiosity expanded to <span>technology</span>, and I became interested in how <span>software</span> could be a <span>creative medium</span>. When I came to college, I decided to add <span>software engineering</span> to my toolkit, diving into the technical side to gain skills in development and broaden my capacity to create <span>interactive, impactful user experiences</span>.


<br/><br/>  At Northeastern, I’ve taken on both creative and technical work, from Scout, Northeastern’s student-led design studio to hands-on <span>software development</span> coursework and projects. These experiences solidified my goal to bridge the gap between design and technology, merging them to create <span>user-centered products</span>. Now, as I prepare for my career, I’m excited to continue exploring the intersection of design and development, finding new ways to use both my creativity and technical skills to make software experiences that are <span>engaging, functional, and meaningful for users</span>.
</div>
                <img className={styles.aboutBackground} src="../../../../assets/about/aboutBackground.png" alt="sketches"></img>
            </div>
        </section>

    );
};