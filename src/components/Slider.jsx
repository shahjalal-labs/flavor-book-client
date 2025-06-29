import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderOverlay from "./SliderOverlay";

const SwiperSlider = ({
  slides = [],
  delay = 1500,
  heightClass = "max-h-[600px] ",
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      loop={true}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`w-full ${heightClass} object-cover rounded-xl shadow-xl`}
          />
          {(slide.heading || slide.description) && (
            <SliderOverlay slide={slide} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
