import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { globalContextHook } from "./Context";
import Services from "./Services";
import Contact from "./Contact";
const Home = () => {
  const { updateHomePage } = globalContextHook();
  useEffect(() => updateHomePage(), []);
  return (
    <div>
      <HeroSection />
      <Services />
      <Contact />
    </div>
  );
};
export default Home;
