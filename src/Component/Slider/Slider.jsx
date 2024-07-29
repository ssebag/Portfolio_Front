import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'

function Slider({img1, img2, img3, img4}) {
  
  return (
    <div className="slider">
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
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Slider
