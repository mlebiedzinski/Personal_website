
import React from "react";
import styles from "./Pauls.module.css";
import { AudioPlayer } from "./AudioPlayer";
import { useNavigate } from 'react-router-dom';

export const PaulsSite = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.siteContainer}>
            <div className={styles.heroContainer}>
                <img className={styles.heroimg} src="/assets/projects/pauls/heroimg.png" alt="Hero Image" />
                <img className={styles.paulstxt} src="/assets/projects/pauls/paulsTxt.png" alt="Pauls Title" />
                <img className={styles.biglogo} src="/assets/projects/pauls/biglogo.png" alt="Big Logo" />
            </div>

            <div className={styles.marquee}>
                <div>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                    <span> START YOUR DAY PAUL'S WAY </span> <img className={styles.quoteimg} src="/assets/projects/pauls/quoteimg.png"></img>
                </div>
            </div>

            <div className={styles.doublepiccontainer}>
                <div className={styles.pictures}>
                    <img className={styles.picture1} src="/assets/projects/pauls/picture1.png"></img>
                    <img className={styles.picture2} src="/assets/projects/pauls/picture2.png"></img>
                </div>
            </div>

            <div className={styles.ourstorycontainer}>
                <div className={styles.ourstorycontainerwhite}>
                    <span> OUR STORY</span>
                    <span>
                        Paul’s isn’t just a café—it’s a tradition, a daily ritual inspired by someone extraordinary.
                        <img className={styles.pimg} src="/assets/projects/pauls/pimg1.png"></img> Grandpa Paul starts every morning the same way: a walk to his favorite café for coffee and breakfast.
                        <img className={styles.pimg} src="/assets/projects/pauls/pimg2.png"></img>It’s the simplest, yet most meaningful part of his day - a moment of reflection, connection, and comfort.
                        <img className={styles.pimg} src="/assets/projects/pauls/pimg3.png"></img>
                    </span>

                    <span>
                        At Paul’s, we hope to inspire your own daily rituals and create a place where every visit feels personal, just like Paul’s mornings.
                        <img className={styles.pimg} src="/assets/projects/pauls/pimg4.png"></img>Paul’s is built around that spirit.
                        <img className={styles.pimg} src="/assets/projects/pauls/pimg5.png"></img> Here, we serve more than just coffee and food; we serve moments that ground you, spaces that welcome you, and flavors that feel like home.
                    </span>

                    <div className={styles.letterconatiner}>
                        <img className={styles.letter} src="/assets/projects/pauls/letter.png"></img>
                        <span>
                            <img className={styles.smalllogo} src="/assets/projects/pauls/smalllogo.png"></img>
                            Our logo, a small line drawing of Grandpa Paul’s face, comes from the doodle he’s drawn on every card he’s ever given
                            <img className={styles.pimg} src="/assets/projects/pauls/pimg6.png"></img> a small but lasting reminder of how the simplest gestures leave the biggest impact.
                            <img className={styles.pimg} src="/assets/projects/pauls/pimg7.png"></img>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.collagecontainer}>
                <div className={styles.collage}>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg1.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg2.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg3.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg4.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg5.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg6.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg7.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg8.png"></img>
                    <img className={styles.collageimg} src="/assets/projects/pauls/collageimg9.png"></img>

                </div>
            </div>
            <div className={styles.thanksContainer}>
            <img className={styles.thanks} src="/assets/projects/pauls/thanks.png"></img>

                <div className={styles.buttonArea}>
                    <AudioPlayer />
                </div>
            </div>

        </div>

    );
};