import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .use(HttpApi)
  .init({

    fallbackLng: "ar",
    detection: {
      order: ['cookie' ,'htmlTag' , 'querystring', 'localStorage', 'navigator' ],
      caches: ['cookie'],
    },
    backend :{
      loadPath : '/translate/{{lng}}.json'
    }
   
  });

  export default i18n