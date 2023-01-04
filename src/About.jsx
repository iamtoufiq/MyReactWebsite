import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { globalContextHook } from "./Context";
const About = () => {
  const { updateAboutPage } = globalContextHook();
  useEffect(() => updateAboutPage(), []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
