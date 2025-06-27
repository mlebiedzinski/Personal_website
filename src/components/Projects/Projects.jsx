/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Projects.module.css";
import data from "../../data/data.json"

export const Projects = () => {
    const icons = {
        github: (
            <img className={styles.projectIcon} src="../../../assets/projects/githubIcon.png"></img>
        ),
        page: (
            <img className={styles.projectIcon} src="../../../assets/projects/arrowIcon.png"></img>
        ),
        demo: (
            <img className={styles.projectIcon} src="../../../assets/projects/videoIcon.png"></img>
        )
    };


    return (
        <section id="projects">

            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitle}>
                    <p>Check out my Projects !</p>
                    <img className={styles.dividerLine} src="../../../assets/contact/line.png" alt="line" />
                </div>
                {data.largeProjects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectContent}>
                            <div className={styles.projectTitle}>{project.title}</div>
                            <div className={styles.projectSkills}>{project.skills}</div>

                            <div className={styles.projectSoftwarePillContainer}>
                                {project.software.map((software, idx) => (
                                    <span key={idx} className={styles.projectSoftwarePill}>
                                        <span className={styles.projectSoftware}>{software}</span>
                                    </span>
                                ))}
                            </div>

                            <div className={styles.projectTagline}>{project.tagline}</div>
                            <div className={styles.projectDescription}>{project.description}</div>
                            <div className={styles.projectLinks}>
                                {project.links.map((link, idx) => (
                                    <div key={idx} className={styles.projectLinkButton}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            {icons[link.type]}
                                            {/* <div>
                                                {link.hover}
                                            </div> */}
                                        </a>

                                    </div>
                                ))}

                            </div>

                        </div>
                        <div className={styles.projectImgContainer}>
                            <img src={project.image} className={styles.projectImg} alt="sdimg" />
                        </div>

                    </div>
                ))}
                <div className={styles.projectsContainerSmall}>
                    {data.smallProjects.map((project, index) => (
                        <div key={index} className={styles.smallProjectCard}>
                            <div className={styles.projectContent}>
                                <div className={styles.projectTitleSmall}>{project.title}</div>
                                <div className={styles.projectSkills}>{project.skills}</div>

                                <div className={styles.projectSoftwarePillContainer}>
                                    {project.software.map((software, idx) => (
                                        <span key={idx} className={styles.projectSoftwarePill}>
                                            <span className={styles.projectSoftware}>{software}</span>
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.projectDescriptionSmall}>{project.description}</div>
                                <div className={styles.projectLinksSmall}>
                                    {project.links.map((link, idx) => (
                                        <div key={idx} className={styles.projectLinkButton}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {icons[link.type]}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
