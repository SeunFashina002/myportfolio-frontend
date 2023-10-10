import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import OtherProjects from "./components/OtherProjects";
import Articles from "./components/ArticleSection.jsx";
import Contact from "./components/ContactMe";
import Project from "./components/Project";
import Skills from "./components/Skills";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  const [theme, setTheme] = useState(false);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#f1f5f9" : "#111827";
  }, [theme]);

  return (
    <div>
      <Navbar mode={theme} toggle={toggleDarkMode} />
      <Hero mode={theme} />
      <About mode={theme} />
      <Project mode={theme} />
      <OtherProjects mode={theme} />
      <Skills mode={theme} />
      <Articles mode={theme} />
      <Contact mode={theme} />
      <BackToTopButton mode={theme} />
    </div>
  );
}
