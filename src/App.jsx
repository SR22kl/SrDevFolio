import React from "react";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  );
};

export default App;
