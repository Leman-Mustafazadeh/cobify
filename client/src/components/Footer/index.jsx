import React from 'react'
import styles from "./index.module.scss"
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const {t} = useTranslation()
  return (
    <footer>
        <div className="container">
            <div className={styles.foot}>
                <div className={styles.foot_left}>
                    <h3>{t("about")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
                </div>

                <div className={styles.foot_head}>
                    <h3>{t("restaurant")}</h3>
                    <ul>
                        <li><a href="">{t("about")}</a></li>
                        <li><a href="">{t("chefs")}</a></li>
                        <li><a href="">{t("events")}</a></li>
                        <li><a href="">{t("contact")}</a></li>
                    </ul>
                </div>


                <div className={styles.foot_head}>
                    <h3>{t("link")}</h3>
                    <ul>
                        <li><a href="">{t("foods")}</a></li>
                        <li><a href="">{t("drink")}</a></li>
                        <li><a href="">{t("breakfast")}</a></li>
                        <li><a href="">{t("brunch")}</a></li>
                        <li><a href="">{t("dinner")}</a></li>
                    </ul>
                </div>


              
                <div className={styles.foot_head}>
                    <h3>{t("link")}</h3>
                    <ul>
                        <li><a href="">{t("foods")}</a></li>
                        <li><a href="">{t("drink")}</a></li>
                        <li><a href="">{t("breakfast")}</a></li>
                        <li><a href="">{t("brunch")}</a></li>
                        <li><a href="">{t("dinner")}</a></li>
                    </ul>
                </div>



               
            </div>

            <div className={styles.foot_link}>
                <ul>
                    <li><a href="https://x.com/?lang=en" target='blank'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com" target='blank'><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/" target='blank'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <p className={styles.copy}>{t("copy")}</p>
        </div>
    </footer>
  )
}

export default Footer
