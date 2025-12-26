import React from "react";

const Programs = ({ t }) => {
  return (
    <section id="programs" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-primaryRed mb-10">{t.title}</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-3 text-primaryBlue">
              {t.item1.title}
            </h4>
            <p className="text-gray-700">{t.item1.text}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-3 text-primaryBlue">
              {t.item2.title}
            </h4>
            <p className="text-gray-700">{t.item2.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;