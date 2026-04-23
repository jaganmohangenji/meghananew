import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import TechExpertise from '../components/TechExpertise';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <TechExpertise />
      <Projects />
      <WhyChooseUs />
    </>
  );
};

export default Home;
