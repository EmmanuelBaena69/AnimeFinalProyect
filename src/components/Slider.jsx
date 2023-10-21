import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../styles/slider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../assets/img/anime1.png";
import img2 from "../assets/img/dsdsd.png";
import img3 from "../assets/img/anime2.jpg";
import img4 from "../assets/img/chainsaw.png";

const Slider = () => {
  return (
    <div className='slider-container'>
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination= {{clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={img1} alt="img1" className='slider-image' style={{width: "100%", height: "40vh"}}/></SwiperSlide>
      <SwiperSlide><img src={img2} alt="img2" className='slider-image' style={{width: "100%", height: "40vh"}}/></SwiperSlide>
      <SwiperSlide><img src={img3} alt="img3" className='slider-image' style={{width: "100%", height: "40vh"}}/></SwiperSlide>
      <SwiperSlide><img src={img4} alt="img4" className='slider-image' style={{width: "100%", height: "40vh"}}/></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;