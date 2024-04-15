import React from 'react';
import './Home.css'
import Hero from "./../../Component/Hero/Hero";
import AboutMe from "./../../Component/AboutMe/AboutMe";
import Skills from "./../../Component/Skills/Skills";
import Projects from "./../../Component/Projects/Projects";
import Achievements from "./../../Component/Achievements/Achievements";
import Contact from "./../../Component/Contact/Contact";

export default function Home() {
 
  return (
    <div className="home">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
