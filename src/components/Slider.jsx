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
          className="w-full max-h-[600px]  -[80vh]  ax-sm:h-[50vh] rounded-xl shadow-xl"
          src="https://images.deepai.org/art-image/1c7d399d10664216b60edf8c33452897/split-banner-image-showing-on-the-left-a-chef-holding.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/3dc9083a3d70438fa32e8de01576ca6c/horizontal-banner-style-image-of-elegant-plated-dishe.jpg"
          className="w-full max-h-[600px]  -[80vh] ax-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/5e69dbad9d434db286e33e5afe301e1e/flat-lay-photo-of-vibrant-cooking-ingredients-spread-.jpg"
          className="w-full max-h-[600px]  -[80vh] ax-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://api.deepai.org/job-view-file/8b6070f3-e56b-429d-88fc-18d6989021f2/outputs/output.jpg"
          className="w-full max-h-[600px]  -[80vh] ax-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=" https://images.deepai.org/art-image/2f5b5361d1404381b63d2fb30b3798ef/a-wide-angle-horizontal-image-of-a-rustic-wooden-tabl.jpg"
          className="w-full max-h-[600px]  -[80vh] ax-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://api.deepai.org/job-view-file/cdf111c4-b22e-476e-a8c1-8e751883e234/outputs/output.jpg"
          className="w-full max-h-[600px]  -[80vh] ax-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 6"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
