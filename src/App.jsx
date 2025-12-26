import { useState } from "react";
import { content } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("np");
  const t = content[lang];

  return (
    <>
      <Navbar lang={lang} setLang={setLang} siteName={t.siteName} />
      <main>
        <Hero t={t} />
        <About t={t.about} />
        <Programs t={t.programs} />
        <Research t={t.research} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}