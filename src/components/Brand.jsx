import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import LottieAnimation from "../animation/Walking";
import { cookingAnimation } from "../animation";

const Brand = ({ className }) => {
  return (
    <>
      <div className={`w-[220px] flex items-center gap-2 ${className || ""}`}>
        {/* <img src={logo} width={25} className="rounded-full" /> */}
        <div className="w-10 max-sm:w-8">
          <LottieAnimation animation={cookingAnimation} />
        </div>
        <h1 className="max-sm:text-xl text-3xl font-semibold">
          <Link to="/">
            <span className="font-courgette text-purple-700">
              <Typewriter
                words={["Flavor"]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff", "#abcd"],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
              className="font-kaushan text-sky-700"
            >
              Book
            </motion.span>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Brand;
