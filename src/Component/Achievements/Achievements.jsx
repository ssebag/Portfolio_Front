import React , {useContext} from 'react'
import './Achievements.css'
import Title from './../Title/Title'
import {LangContext} from './../../i18n';
import Vica_certificate from './../../assets/images/vica_certificate.jpg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Achievements() {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

  return (
    <div className="containerSection achievements secBackground"   id="achievements">
      <div className="background_black"></div>
      <Title nameClass="titlePosition" title={t("navbar.Achievements")} />
      <div className='achievement_swiper'>
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay:1500,
                disabledInteraction: false
              }}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
          >
          <SwiperSlide>
            <div className="card">
              <img className='card-img-top' src={Vica_certificate} />
              <div className='card-body'>
                <p className={`card-text ${lang ==='ar' ? 'arabic' : ''}`}>
                  {t("achievements.achievement_vica")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
