import React , {useContext} from 'react'
import  './AboutMe.css'
import Title from './../Title/Title'
import {LangContext} from './../../i18n';
import PersonalImg from './../PersonalImg/PersonalImg'

export default function AboutMe() {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

  return (
    <div className="containerSection aboutMe secBackground" id="about">
        <div className="background_black"></div>
   
        <div className="aboutLeft">
          <PersonalImg />
          <div className='AboutPersonalInfo'>
            <h1>{t("personality.myName")}</h1>
            <p className='displayNone'>{t("about.position")}</p>
            <p className='displayNone'>{t("about.using")} </p>
          </div>
        </div>
        <div className={`aboutRight AboutPersonalInfo flex-col ${lang ==='ar' ? 'arabic' : ''}`}>
          <p className=''>
             {t("about.descriptionUp")}
          </p>
          <hr />
          <p className=''>
            {t("about.descriptionDown")}
          </p>
        </div>
    </div>

     
  )
}


/* 


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
 */