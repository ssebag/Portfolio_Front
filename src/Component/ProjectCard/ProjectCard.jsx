import React,{ useContext} from 'react'
import './ProjectCard.css'
import { Link } from "react-router-dom";
import {LangContext} from './../../i18n';

export default function ProjectCard({data}) {
  const { t } = useContext(LangContext);
 
  const {img1, title, skills, id} = data;
  return (
    <div className="projectCard">
       <img  src={img1} />
       <div className="flex-col">
         <h2>{title}</h2>
         <p>{skills}</p>
         <button><Link to={`/project/${id}`}>{t("project.read_more")}</Link></button>
       </div>
    </div>
  )
}
