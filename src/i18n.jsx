import React, {createContext, useEffect, useState} from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locales/en/global.json'
import arJSON from './locales/ar/global.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    ar: { ...arJSON },
  },
  lng: "en",
});

const LangContext = createContext();

function LangProvider(props){
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language"):"en")
    localStorage.setItem("language", currentLanguage);
    const handleChangeLanguage = () => {
      setCurrentLanguage(localStorage.getItem("language") === "en" ? "ar" : "en");
      changeLanguage(localStorage.getItem("language") === "en" ? "ar" : "en");
    }
    useEffect(() =>
    {
      setCurrentLanguage(localStorage.getItem("language"));
      changeLanguage(localStorage.getItem("language"));
    },[]);
    return(
        <div>
           <LangContext.Provider value={{t, handleChangeLanguage}}>
             <div>
              {props.children}
              </div>
           </LangContext.Provider>
        </div>
    )
};

export {LangContext, LangProvider}
