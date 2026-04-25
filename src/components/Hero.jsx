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

          {/* Right Imagery / Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-[var(--color-tech-blue)]/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl w-[80%] max-w-sm text-center">
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2">
                    Services &
                    <span className="block text-[var(--color-orange)]">Implementation Solutions</span>
                  </h3>
                  <div className="w-16 h-1 bg-[var(--color-tech-blue)] mx-auto mb-6"></div>

                  <ul className="text-gray-200 mt-6 space-y-4 font-medium text-left inline-block">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-tech-blue)] shadow-[0_0_8px_var(--color-tech-blue)] shrink-0"></div>
                      <span>Renovation Solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)] shrink-0"></div>
                      <span>Landscaping</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-tech-blue)] shadow-[0_0_8px_var(--color-tech-blue)] shrink-0"></div>
                      <span>Engineering Services</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_var(--color-orange)] shrink-0"></div>
                      <span>Electricals</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Floating Tech Cards
              <div className="absolute top-[10%] -left-4 bg-[var(--color-navy)] border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="h-10 w-10 bg-[var(--color-tech-blue)]/20 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-[var(--color-tech-blue)]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-poppins">Secure Biometrics</p>
                  <p className="text-gray-400 text-[10px]">Active Tracking</p>
                </div>
              </div> */}

              {/* <div className="absolute bottom-[20%] -right-8 bg-[var(--color-navy)] border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="h-10 w-10 bg-[var(--color-orange)]/20 rounded-lg flex items-center justify-center">
                  <FileCode size={20} className="text-[var(--color-orange)]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-poppins">Custom Software</p>
                  <p className="text-gray-400 text-[10px]">Cloud Deployed</p>
                </div>
              </div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
