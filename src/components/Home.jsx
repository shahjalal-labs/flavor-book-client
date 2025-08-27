import Slider from "./Slider";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import Recipes from "./Recipes";
import About from "../pages/About";
import FAQ from "../pages/Faq";
import FeedbackPage from "../pages/FeedbackPage";
import slides from "./slider.constant";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || FlavorBook</title>
      </Helmet>
      {/* <div className="mb-5  bg-gray-100 shadow-xl rounded-xl  border-1 border-b-0 border-purple-200">
        <Slider slides={slides} />
      </div> */}

      <div className="mb-5 bg-gray-900/80 shadow-xl shadow-indigo-900/40 rounded-xl border border-indigo-700/30 border-b-0 backdrop-blur-md">
        <Slider slides={slides} />
      </div>

      <div className="bg-gray-900/80 my-10 py-6 rounded-xl shadow-lg shadow-indigo-900/30 backdrop-blur-md">
        <h2 className="text-2xl font-bold my-9 w-4/5 mx-auto text-center text-indigo-400">
          <Typewriter
            words={["✨ These recipes are on fire!"]}
            loop={0}
            cursor
            cursorStyle="...🖋️"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
          <span className="hidden sm:block text-lg font-normal mt-1 text-slate-300">
            Check out the ones that everyone’s been liking lately – maybe you’ll
            find your next favorite dish.
          </span>
        </h2>

        <Recipes />
      </div>

      <About />
      <FAQ />
      <FeedbackPage />
    </div>
  );
};

export default Home;
