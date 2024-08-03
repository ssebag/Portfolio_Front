import React, { useContext }  from 'react';
import './ProjectsDetails.css';
import Slider from './../Slider/Slider';
import {LangContext} from './../../i18n';

export default function ProjectsDetails({details, description}) {
   
  const {img1, img2, img3, img4, title, skills, date, github, web} = details; 
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");
  return (
    <div className="containerSection projectsDetails">
       <div>
          <Slider img1={img1} img2={img2} img3={img3} img4={img4} />
         <div className={`projectDescription flex-col ${lang ==='ar' ? 'arabic' : ''}`}>
            <div className="projectTitle flex">
               <h3>{t("title")}</h3>
               <p>{title}</p>
            </div>
            <div className="projectDes flex">
               <h3>{t("description")}</h3>
               <p> {description}</p>
            </div>
            <div className="projectSkills flex">
               <h3>{t("skills")}</h3>
               <p> {skills}</p>
            </div>
            <div className="projectDate flex">
               <h3>{t("date")}</h3>
               <p> {date}</p>
            </div>
            <div className="projectLinks flex-center">
                <div className="github">
                  <a target="blank" href={github}>
                    
                  </a>
                </div>
                <div className="web">
                  <a target="blank" href={web}>
                   
                  </a>
                </div>
            </div>

         </div>
       </div>
    </div>
  )
}
