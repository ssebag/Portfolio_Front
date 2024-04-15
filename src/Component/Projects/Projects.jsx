import React , {useContext} from 'react'
import { Fragment } from "react";
import { ProjectsData } from './ProjectsData.js'
import './Projects.css'
import Title from './../Title/Title'
import ProjectCard from './../ProjectCard/ProjectCard'
import {LangContext} from './../../i18n';

export default function Projects() {
  const { t } = useContext(LangContext);
 
  return (
    <div className="containerSection projects" id="projects">
     <Title title={t("navbar.Projects")} description={t("project.proDescription")} />
      <div className="projectCards flex-center">
        {ProjectsData.map((el, idx) => {
            return (
              <Fragment key={idx}>
                <ProjectCard data={el}/>
              </Fragment>
            );
          })}
      </div>
    </div>
  )
}
