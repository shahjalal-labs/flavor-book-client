const AboutCard = ({ feature }) => {
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

export default AboutCard;
