import React from "react";

const Hero = ({ t }) => {
  const { hero } = t;
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-primaryBlue to-primaryRed text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {hero.title}
          </h2>
          <p className="text-lg mb-6 opacity-90">{hero.subtitle}</p>
          <div className="flex gap-4">
            <a
              href="#programs"
              className="bg-white text-primaryBlue px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              {hero.button1}
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-primaryRed"
            >
              {hero.button2}
            </a>
          </div>
        </div>

        <div className="hidden md:block text-right">
          <p className="text-2xl font-semibold">{hero.nepali}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;