import { features } from "../constant";
import AboutCard from "./About/AboutCard";

const About = () => {
  return (
    <section className="min-h-[60vh] py-10 px-6 mt-10 order border-indigo-500 bg-gray-900/80 rounded-xl">
      <div className="max--4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">
          About FlavorBook
        </h1>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
          <span className="font-semibold text-indigo-300">FlavorBook</span> — a
          recipe-sharing haven for passionate foodies. Whether you're a kitchen
          novice or a seasoned chef, FlavorBook connects you with flavors from
          around the world. Discover top-rated dishes, create your own, and
          share the love of cooking!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {features.map((feature, index) => (
            <AboutCard feature={feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
