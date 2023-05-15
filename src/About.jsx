import { useGlobalContext } from "./Context";
import HeroSection from "./components/HeroSection";
import { useEffect } from "react";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return <HeroSection />;
};

export default About;
