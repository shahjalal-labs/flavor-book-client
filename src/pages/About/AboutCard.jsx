/* const AboutCard = ({ feature }) => {
  return (
    <div
      className={`shadow-lg p-6 rounded-xl border-l-4 ${feature.borderColor} bg-gradient-to-tr from-accent/10 via-sky-100/10  to-primary/20 hover-effect`}
    >
      <h3 className={`text-xl font-semibold mb-2 ${feature.textColor}`}>
        {feature.icon} {feature.title}
      </h3>
      <p className="text-gray-700">{feature.description}</p>
    </div>
  );
};

export default AboutCard; */

const AboutCard = ({ feature }) => {
  return (
    <div
      className={`shadow-lg p-6 rounded-xl border-l-4 border-indigo-500 bg-gradient-to-tr from-gray-900/70 via-gray-950/60 to-gray-900/80 hover:shadow-indigo-500/40 transition-shadow duration-300`}
    >
      <h3 className="text-xl font-semibold mb-2 text-indigo-400">
        {feature.icon} {feature.title}
      </h3>
      <p className="text-slate-300">{feature.description}</p>
    </div>
  );
};

export default AboutCard;
