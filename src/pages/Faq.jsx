import { Typewriter } from "react-simple-typewriter";
import { faqs } from "../constant";

const FAQ = () => {
  return (
    <section className="py-5 px-3 my-10 rounded-xl shadow bg-primary/10">
      <div className="mx-auto">
        <h1 className="text-xl md:text-3xl font-semibold text-center text-primary mb-3 font-kaushan">
          <Typewriter
            words={["Frequently Asked Questions"]}
            loop={0}
            cursor
            cursorStyle="...✍️"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </h1>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="shadow-md hover:shadow-xl transition duration-300 rounded-xl p-6 border-l-4 border-orange-400  group cursor-pointer hover-effect bg-gradient-to-br from-blue-500/20 via-sky-200/30 to-cyan-300/20"
            >
              <h3 className="text-xl font-semibold text-slate-500 mb-2 group-hover:text-orange-900 transition-all duration-300">
                ❓ {faq.question}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 leading-relaxed text-[16px]">
                💡 {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
