import React from "react";

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>{t.copy}</p>
    </footer>
  );
};

export default Footer;