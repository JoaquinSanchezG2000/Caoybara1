// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

export default () => {
  return (
    <Swiper
      className="mt-[8rem] w-[90%]  border-[2px] border-red-200"
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
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
