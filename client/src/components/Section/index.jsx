import React from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
const Section = () => {
  const { t} = useTranslation();
  return (
    <section className={styles.sec}>
      <div className={styles.container}>
        <div className={styles.sec_head}>
          <h1>{t("welcome")}!</h1>
          <p>{t("text")}</p>
          <button>{t("read")}</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
