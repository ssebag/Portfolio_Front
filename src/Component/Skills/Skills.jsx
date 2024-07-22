import React, {useContext} from 'react'
import './Skills.css'
import Title from './../Title/Title'
import {SkillsDetails} from './SkillDetails'
import SkillCard from './../SkillCard/SkillCard';
import {LangContext} from './../../i18n';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Skills() {
  const { t } = useContext(LangContext);
  return (
    <div className="containerSection skills" id="skills">
       <Title title={t("navbar.Skills")} />
       <div className="cards flex-center">
       <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={6}
          loop={true}
          navigation
          autoplay={{
            delay:2500,
            disabledInteraction: false
          }}
          breakpoints={{
           0: {
            slidesPerView: 1,
           },
           400: {
            slidesPerView: 2,
           },
           550: {
            slidesPerView: 3,
           },
           900: {
            slidesPerView: 4,
           },
           1000: {
            slidesPerView: 5,
           },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
      {
          SkillsDetails.map((el, idx) =>{
            return (
              <SwiperSlide><SkillCard skill={el.skill} progress={el.progress}/> </SwiperSlide>
            );
          })
         }
       </Swiper>
       </div>
    </div>
  )
}
