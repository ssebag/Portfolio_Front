import React , {useContext} from 'react'
import './Achievements.css'
import Title from './../Title/Title'
import {LangContext} from './../../i18n';

export default function Achievements() {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

  return (
    <div className={`containerSection achievements secBackground ${lang ==='ar' ? 'arabic' : ''}`}  id="achievements">
      <div className="background_black"></div>
      <Title nameClass="titlePosition" title={t("navbar.Achievements and Certificates")} />
      <div>
      <ul className="flex-col">
        <li>
           <p className="education_achievements_desc flex-col">Zero Web School trainee
             <span>{t("achievements.achievement_1_date")}</span>
           </p>
        </li>
        <li>
            <p className="education_achievements_desc flex-col">Online Front-end trainee
              <span style={{direction: "ltr"}}>{t("achievements.achievement_2_date")}</span>
            </p>
        </li>
      </ul>
       
       
      </div>
    </div>
  )
}
