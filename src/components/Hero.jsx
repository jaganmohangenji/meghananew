import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center overflow-hidden bg-[var(--color-navy)]">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col items-center w-full pt-10 pb-12">

        {/* Badge — centered below header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full mb-8"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full shadow-lg">
            <Shield size={18} className="text-[var(--color-orange)] mr-2 shrink-0" />
            <span className="text-sm md:text-base font-medium tracking-wide text-white">
              Authorized by the technology partner of the Indian Navy.
            </span>
          </div>
        </motion.div>

        {/* Two-column content */}
        <div className="grid md:grid-cols-[1fr_1px_1fr] w-full gap-0 mb-10">

          {/* Left: Innovative Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col pr-8 lg:pr-14"
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-5">
              Innovative Technology
              <br />
              <span className="text-[var(--color-orange)]">&amp;</span>
              <br />
              Security Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Providing services such as application development, hardware solutions,
              security infrastructure, and maintenance.
            </p>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block bg-white/15 mx-2" />

          {/* Right: Engineering & Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white flex flex-col pl-8 lg:pl-14 mt-10 md:mt-0"
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-5">
              Engineering
              <br />
              <span className="text-[var(--color-orange)]">&amp;</span>
              <br />
              Infrastructure
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              From conceptualization to execution, we design functional and aesthetically
              premium interiors, undertake structural civil works, and maintain critical
              naval infrastructure.
            </p>
          </motion.div>

        </div>

        {/* Buttons — centered below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/services"
            className="bg-[var(--color-orange)] hover:bg-[#d97000] text-white px-8 py-3.5 rounded-md font-medium text-lg transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(247,127,0,0.4)]"
          >
            Explore Services
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact#contact-form"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-md font-medium text-lg transition-all flex items-center justify-center"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;