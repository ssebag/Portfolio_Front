import React , {useContext} from 'react'
import { ProjectsData } from './ProjectsData.js'
import './Projects.css'
import Title from './../Title/Title'
import ProjectCard from './../ProjectCard/ProjectCard'
import {LangContext} from './../../i18n';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Projects() {
  const { t } = useContext(LangContext);
  
  return (
    <div className="containerSection projects" id="projects">
     <Title title={t("navbar.Projects")} description={t("project.proDescription")} />
      <div className="projectCards flex-center">
      <Swiper
         modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            300: {
                slidesPerView: 1,
            },
           800: {
                slidesPerView: 2,
            },
            1120: {
                slidesPerView: 3,
            },
            }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
         {ProjectsData.map((el, idx) => {
            return (
              <SwiperSlide>
                <ProjectCard data={el}/>
                </SwiperSlide>
            );
          })}
          </Swiper>
     </div>
    </div>
  )
}
