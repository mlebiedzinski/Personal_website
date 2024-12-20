/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section id="home">
            <div className={styles.heroBackground}>
                <div className={styles.heroCardStack}>
                    <img className={styles.heroCard1} src="../../../../assets/hero/heroCard1.png" alt="heroCard1"></img>

                    <ul className={styles.index}>
                        <li>
                            <a className={styles.indexLinks} href="#home">Home ..................1</a>
                        </li>
                        <li>
                            <a className={styles.indexLinks} href="#projects"><br />Projects ..............2</a>
                        </li>
                        <li>
                            <a className={styles.indexLinks} href="#about"><br />About .................3</a>
                        </li>
                        <li>
                            <a className={styles.indexLinks} href="#contact"><br />Contact ...............4</a>
                        </li>
                    </ul>
                    <img className={styles.heroCard2} src="../../../../assets/hero/heroCard2.png" alt="heroCard2"></img>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                        }}
                    >
                        <img className={styles.heroSticker} src="../../../../assets/hero/fav.png" alt="heroSticker" />
                    </a>
                    <img className={styles.heroMaddieCircle} src="../../../../assets/hero/maddieCircle.png" alt="heroMaddieCircle"></img>
                </div>
            </div>

        </section>

    );
};