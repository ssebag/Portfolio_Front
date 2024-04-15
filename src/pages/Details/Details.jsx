import React, {useContext}  from 'react';
import ProjectDetails from './../../Component/ProjectsDetails/ProjectsDetails';
import {useParams} from 'react-router-dom';
import {ProjectsData} from './../../Component/Projects/ProjectsData'
import {LangContext} from './../../i18n';

export default function Details() {
  const {id} = useParams();
  const item = ProjectsData.find(el => {return el?.id === parseInt(id)}  );
  const { t } = useContext(LangContext);
 
  return (
    <div className="containerSection details">
      <ProjectDetails details={item} description={t(`projectDetails.project_${id}`)} /> 
    </div>
  )
}
