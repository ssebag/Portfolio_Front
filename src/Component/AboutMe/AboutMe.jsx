import React , {useContext} from 'react'
import  './AboutMe.css'
import Title from './../Title/Title'
import {LangContext} from './../../i18n';
 
export default function AboutMe() {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

  return (
    <div className={`containerSection aboutMe flex-col secBackground ${lang ==='ar' ? 'arabic' : ''}`} id="about">
      <div className="background_black"></div>
      <div className="myInfo">
        <Title nameClass="titlePosition" title={t("navbar.About")} />
          <p className="education_achievements_desc">
            {t("about.personalInfo")}
          </p>
      </div>
      <div className="education">
      <Title title={t("about.Education")} />
        <p className="education_achievements_desc flex-col">
        {t("about.EducationInfo")}
        <span> {t("about.EducationUniversity")}</span>
        </p>
      </div>
    </div>  
  )
}
