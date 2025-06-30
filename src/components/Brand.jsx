import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import LottieAnimation from "../animation/Walking";
import { cookingAnimation } from "../animation";
import logo from "../assets/flavorBooks/logoRounded.jpg";

const Brand = ({ className }) => {
  return (
    <>
      <div
        className={`sm:min-w-[270px]  flex max-lg:flex-row-reverse items-center gap-2 ${className || ""}`}
      >
        <img src={logo} width={35} className="rounded-full" />
        {/* <div className="w-10 max-sm:w-8">
          <LottieAnimation animation={cookingAnimation} />
        </div> */}
        <h1 className="max-sm:text-xl text-3xl font-semibold">
          <Link to="/">
            <motion.span
              className="font-courgette text-purple-700"
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: {
                  duration: 15,
                  repeat: Infinity,
                },
              }}
            >
              Flavor
            </motion.span>
            <span className="font-kaushan text-sky-700">
              <Typewriter
                words={["Book"]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />{" "}
            </span>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Brand;
