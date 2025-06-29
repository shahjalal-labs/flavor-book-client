const SliderOverlay = ({ slide }) => {
  return (
    <div>
      <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center px-4 text-center rounded-xl">
        {slide.heading && (
          <h2 className="text-xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
            {slide.heading}
          </h2>
        )}
        {slide.description && (
          <p className="text-sm sm:text-base max-w-2xl drop-shadow-md">
            {slide.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SliderOverlay;
