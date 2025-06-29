import { features } from "../constant";

const About = () => {
  return (
    <section className="min-h-[70vh] py-0 px-6 mt-10 border bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
          About FlavorBook
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          <span className="font-semibold text-orange-500">FlavorBook</span> — a
          recipe-sharing haven for passionate foodies. Whether you're a kitchen
          novice or a seasoned chef, FlavorBook connects you with flavors from
          around the world. Discover top-rated dishes, create your own, and
          share the love of cooking!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg p-6 rounded-xl border-l-4 ${feature.borderColor}`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${feature.textColor}`}>
                {feature.icon} {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
