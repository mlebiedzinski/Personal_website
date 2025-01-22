import React, { useState, useRef } from "react";
import styles from "./Pauls.module.css";
import playImg from "/assets/projects/pauls/closed.png"; // Replace with your image path
import pauseImg from "/assets/projects/pauls/open.png"; // Replace with your image path

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Default to false
  const audioRef = useRef(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((err) => console.error("Playback error on toggle:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.buttonArea}>
      <button onClick={handleAudioToggle} className={styles.audioButton}>
        <img
          src={isPlaying ? pauseImg : playImg}
          alt={isPlaying ? "Pause Music" : "Play Music"}
          className={styles.audioButtonImg}
        />
      </button>
      <div className={styles.clickMeLabel}>Click Me</div>
      <audio
        ref={audioRef}
        src="/assets/projects/pauls/cafeAudio.mp3"
        onCanPlay={() => console.log("Audio is ready to play")}
        onError={(e) => console.error("Audio error:", e)}
      />
    </div>
  );
};
