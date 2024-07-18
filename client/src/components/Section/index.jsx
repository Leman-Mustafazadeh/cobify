import React, { useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section className={styles.sec}>
      <div className={styles.container}>
        <div className={styles.sec_head}>
          <h1>{t("welcome")}!</h1>
          <p>{t("text")}</p>
         
          <button id="model" onClick={toggleVideo}>
            See Video
          </button>
          {showVideo && (
            <div className={styles.video_wrap}>
              <div className={styles.video}>
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/mwtbEGNABWU?si=7xNF6l3y6sVEZs4W"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
