import React from 'react';
import { Shield, ChevronRight, FileCode, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-navy)]">
      {/* Background with tech pattern / overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Centered Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full mb-1 md:mb-6"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full shadow-lg">
            <Shield size={20} className="text-[var(--color-orange)] mr-2" />
            <span className="text-sm md:text-base font-medium tracking-wide text-white">Authorized by the technology partner of the Indian Navy.</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >


            <h1 className="text-4xl md:text-5xl lg:text-5xl font-poppins font-bold leading-tight mb-8 flex flex-col w-max">
              <span>Innovative Technology</span>
              <span className="text-center w-full">&amp;</span>
              <span>Security Solutions</span>
            </h1>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              Innovative Technology & <br />
              <span className="">Security Solutions</span>
            </h1> */}

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Providing services such as application development, hardware solutions, security infrastructure, and maintenance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 z-20 relative">
              <Link to="/services" className="bg-[var(--color-orange)] hover:bg-[#d97000] text-white px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(247,127,0,0.4)]">
                Explore Services
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact#contact-form" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center">
                Contact Us
              </Link>
            </div>

            {/* <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> ISO Certified</div>
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 24/7 Support</div>
              <div className="flex items-center"><CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> ENC Vendor</div>
            </div> */}
          </motion.div>

          {/* Right Text Content (Engineering & Infrastructure) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-2xl mt-12 md:mt-0 md:ml-auto md:pl-8 lg:pl-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-poppins font-bold leading-tight mb-8 flex flex-col w-max">
              <span>Engineering</span>
              <span className="text-center w-full">&amp;</span>
              <span>Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              From conceptualization to execution, we design functional and aesthetically premium interiors, undertake structural civil works, and maintain critical naval infrastructure.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
