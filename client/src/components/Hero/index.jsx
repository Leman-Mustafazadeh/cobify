import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
const Hero = () => {
    const { t} = useTranslation();
  return (
   <section className={styles.hero}>
    <div className="container">
       <div className={styles.hero_wrap}>
       <div className={styles.hero_item}>
            <div><i class="fa-solid fa-location-dot"></i></div>
            <h4> {t("ofice")}</h4>
            <p>{t("konum1")}</p>
        </div>
        
        <div className={styles.hero_item}>
            <div><i class="fa-solid fa-phone"></i></div>
            <h4> {t("phone")}</h4>
            <p>+994507243678</p>
        </div>

        <div className={styles.hero_item}>
            <div><i class="fa-solid fa-envelope"></i></div>
            <h4>{t("email")}</h4>
            <a href="">lmanmustafzadeh@gmail.com</a>
        </div>
       </div>

    </div>
   </section>
  )
}

export default Hero
