// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


export default () => {
  return (
    <Swiper className="mt-[8rem] w-[80%]"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      autoplay={{ delay: 300 }}
      navigation
      
    >
      <SwiperSlide>
        <img src="/remera1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/remera1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/remera1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/remera1.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
