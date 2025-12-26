import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = ({ t }) => {
  return (
    <section id="contact" className="bg-primaryBlue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">{t.title}</h3>

        <p className="mb-2 flex items-center gap-2">
          <MdEmail /> {t.email}
        </p>
        <p className="mb-2 flex items-center gap-2">
          <MdPhone /> {t.phone}
        </p>
      </div>
    </section>
  );
};

export default Contact;