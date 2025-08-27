import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOverlay from "./SliderOverlay";

const SwiperSlider = ({
  slides = [],
  delay = 1500,
  heightClass = "max-h-[400px]",
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <Carousel
      showArrows={showNavigation}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={delay}
      transitionTime={600}
      stopOnHover={true}
      showIndicators={showPagination}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`w-full object-cover rounded-xl shadow-xl ${heightClass}`}
          />
          {(slide.heading || slide.description) && (
            <SliderOverlay slide={slide} />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default SwiperSlider;
