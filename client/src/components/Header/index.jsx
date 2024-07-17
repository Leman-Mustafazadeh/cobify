// Header.jsx

import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import image from "./cobify-logo.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const langCode = e.target.value;
    setSelectedLanguage(langCode);
    i18n.changeLanguage(langCode);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    setIsDarkMode(darkMode ? JSON.parse(darkMode) : false);

    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn ? JSON.parse(loggedIn) : false);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
  }, [isDarkMode]);

  const languages = [
    { code: "en", lang: "English" },
    { code: "rus", lang: "Russian" },
    { code: "az", lang: "Azerbaijan" },
  ];

  return (
    <header
      className={`${styles.header} ${
        isDarkMode ? styles["dark-mode"] : styles["light-mode"]
      }`}
    >
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.head_left}>
            <div className={styles.head_img}>
              <img src={image} alt="Logo" />
            </div>
          </div>

          <div className={styles.head_right}>
            <div className={styles.menu_tab}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <ul className={styles.menu}>
              <li>
                <a href="/">{t("home")}</a>
              </li>
              <li>
                <a href="/">{t("reviews")}</a>
              </li>
              <li>
                <a href="/">{t("contact")}</a>
              </li>
              <li>
                <a href="/">{t("author")}</a>
              </li>

              <div>
                <input
                  type="checkbox"
                  id="dark-mode"
                  className={styles.input}
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label htmlFor="dark-mode" className={styles.label}>
                  <div className={styles.circle}></div>
                </label>
              </div>
            </ul>

            {isLoggedIn ? (
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                  onClick={handleLogout}
                >
                  {t("logout")}
                </Link>
              </p>
            ) : (
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/login"}
                >
                  {t("login")}
                </Link>
              </p>
            )}

            <select
              name="language"
              id="language"
              onChange={handleChange}
              value={selectedLanguage}
              className={styles.languageSelect}
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
