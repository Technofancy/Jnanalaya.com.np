import React from "react";

const Research = ({ t }) => {
  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-primaryBlue mb-6">{t.title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{t.text}</p>
    </section>
  );
};

export default Research;