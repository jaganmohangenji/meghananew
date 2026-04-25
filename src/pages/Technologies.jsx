import React from 'react';
import TechExpertiseComponent from '../components/TechExpertise';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="bg-[var(--color-light-gray)] min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative h-[30vh] bg-[var(--color-navy)] flex items-center justify-center pt-10">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-[var(--color-navy)]/80"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Technology Stack 
          </h1>
          <div className="h-1 w-24 bg-[var(--color-tech-blue)] mx-auto"></div>
        </div>
      </section> */}
      <section className="relative h-[20vh] bg-[var(--color-navy)] flex items-center justify-center pt-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4"
          >
            Technology Stack
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[var(--color-orange)] mx-auto"
          ></motion.div>
        </div>
      </section>

      <div className="py-10">
        <TechExpertiseComponent />
      </div>

      <WhyChooseUs />
    </div>
  );
};

export default Technologies;
