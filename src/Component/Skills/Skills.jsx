 import React, {useContext} from 'react'
import './Skills.css'
import Title from './../Title/Title'
import {SkillsDetails} from './SkillDetails'
import SkillCard from './../SkillCard/SkillCard';
import {LangContext} from './../../i18n';

export default function Skills() {
  const { t } = useContext(LangContext);
  return (
    <div className="containerSection skills" id="skills">
       <Title title={t("navbar.Skills")} description={t("skillsDescription")}/>
       <div className="cards">
  
           {
          SkillsDetails.map((el, idx) =>{
            return (
             <SkillCard skill={el.skill} progress={el.progress}/> 
            );
          })
         }
    </div>
    </div>
  )
}
 