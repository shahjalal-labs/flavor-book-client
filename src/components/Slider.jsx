import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          className="w-full -[80vh]  max-sm:h-[50vh] rounded-xl shadow-xl"
          src=""
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=""
          className="w-full -[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=""
          className="w-full -[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=""
          className="w-full -[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=""
          className="w-full -[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=""
          className="w-full -[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 6"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
