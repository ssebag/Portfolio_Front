import React, {useContext} from 'react'
import './Skills.css'
import Title from './../Title/Title'
import {SkillsImg} from './SkillsImg'
import SkillCard from './../SkillCard/SkillCard';
import {LangContext} from './../../i18n';

export default function Skills() {
  const { t } = useContext(LangContext);
 
  return (
    <div className="containerSection skills" id="skills">
       <Title title={t("navbar.Skills")} />
       <div className="cards flex-center">
         {
          SkillsImg.map((el, idx) =>{
            return (
              <SkillCard image={el.img} />
            );
          })
         }
       </div>
    </div>
  )
}
