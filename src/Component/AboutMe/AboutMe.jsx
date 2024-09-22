import React , {useContext} from 'react'
import  './AboutMe.css'
import Title from './../Title/Title'
import {LangContext} from './../../i18n';
import PersonalImg from './../PersonalImg/PersonalImg'

export default function AboutMe() {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

  return (
    <div className={`containerSection aboutMe secBackground ${lang ==='ar' ? 'arabic' : ''}`} id="about">
        <div className="background_black"></div>
   
        <div className="aboutLeft">
          <PersonalImg />
          <div className='AboutPersonalInfo'>
            <h1>Seba Ghneem</h1>
            <p className='displayNone'>Fontend Developer</p>
            <p className='displayNone'>Using React Js</p>
          </div>
        </div>
        <div className="aboutRight AboutPersonalInfo flex-col">
          <p className=''>
            I am Seba Ghneem, a software engineer. I studied at the Faculty of 
            Information Technology Engineering at Damascus University, specializing in software.
            I work as a front-end developer using React.
          </p>
          <hr />
          <p className=''>
            I am a creative Frontend Developer working as a freelance.
            I have a real passion in this field, I am passionate about
            turning ideas into stunning websites, with a strong focus
            on details and quality. I continuously strive to learn and 
            implement new technologies to achieve the 
            best possible results. I'm a self-learned, organized,
            hardworking person.
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