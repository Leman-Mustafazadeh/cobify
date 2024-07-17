import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "rus",
    resources: {
      en: {
        translation: {
          home: "Home",
          reviews: "Reviews",
          contact: "Contact",
          author: "Author",
          welcome: "Welcome",
          text: "Text messages are used for personal, family, business, and social purposes. Governmental and non-governmental organizations",
          read: "Read More",
          ofice: "Officee",
          konum1: "Kovkeb Seferliyeva 12",
          phone: "PHONE NUMBER",
          email: "EMAIL",
          about: "ABOUT US",
          restaurant: "THE RESTAURANT",
          chefs: "Chefs",
          events: "Events",
          link: "USEFUL LINKS",
          foods: "Foods",
          drink: "Drinks",
          breakfast: "Breakfast",
          brunch: "Brunch",
          dinner:"Dinner",
          copy:"© Copyright ©2024 All rights reserved | This template is made with  by Colorlib"
        },
      },
      rus: {
        translation: {
          home: "дом",
          reviews: "обзоры",
          contact: "Контакт",
          author: "Автор",
          welcome: "Добро пожаловать",
          text: "Текстовые сообщения используются в личных, семейных, деловых и социальных целях. Правительственные и неправительственные организации",
          read: "Читать далее",
          ofice: "ОФИС",
          konum1: "Ковкеба Сеферлиева 12",
          phone: "НОМЕР ТЕЛЕФОНА",
          email: "ЭЛЕКТРОННАЯ ПОЧТА",
          about: "О НАС",
          restaurant: "РЕСТОРАН",
          chefs: "Повара",
          events: "События",
          link: "ПОЛЕЗНЫЕ ССЫЛКИ",
          foods: "Продукты питания",
          drink: "Напитки",
          breakfast: "Завтрак",
          brunch: "Бранч",
           dinner:"Ужин",
           copy:"© Copyright ©2024 Все права защищены | Этот шаблон создан с помощью Colorlib."
        },
      },
      az: {
        translation: {
          home: "Ev",
          reviews: "Rəylər",
          contact: "Əlaqə",
          author: "Müəllif",
          welcome: "Xoş gəldiniz",
          text: "Mətn mesajları şəxsi, ailə, iş və sosial məqsədlər üçün istifadə olunur. Hökumət və qeyri-hökumət təşkilatları",
          read: "Daha çox oxu",
          ofice: "OFİS",
          konum1: "Kovkeb Seferliyeva 12",
          phone: "TELEFON NÖMRƏSİ",
          email: "EMAIL",
          about: "Bizim haqqimizda",
          restaurant: "Restoran",
          chefs: "Aşpazlar",
          events: "Hadisələr",
          link: "FAYDALI LİNKLƏR",
          foods: "Qidalar",
          drink: "Ickiler",
          breakfast: "Səhər yeməyi",
           brunch:"Brunch",
            dinner:"Nahar",
            copy:"© Copyright © 2024 Bütün hüquqlar qorunur | Bu şablon Colorlib tərəfindən hazırlanmışdır"
        },
      },
    },
  });

export default i18next;
