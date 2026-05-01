import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-2 overflow-hidden bg-[#0B1120]">

      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-tech-blue)]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[var(--color-orange)]/10 rounded-full blur-[150px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-9">
          <div className="glass-card px-6 py-3 rounded-full flex items-center">
            <Shield size={18} className="text-orange-400 mr-2" />
            <span className="text-sm text-gray-200">
              Authorized by the technology partner of the Indian Navy.
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1.35fr_1.3fr] gap-6 max-w-8xl mx-auto">

          {/* LEFT CARD */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="glass-card p-12 rounded-3xl h-full overflow-hidden">

              <h1 className="flex flex-col gap-3 font-bold text-white leading-tight">

                {/* ✅ AUTO-FIT TEXT */}
                <div className="whitespace-nowrap text-[clamp(28px,4vw,64px)]">
                  Innovative Technology
                </div>

                <div className="text-[clamp(28px,4vw,64px)]">&</div>

                <div className="text-[clamp(28px,4vw,64px)] bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Security Solutions
                </div>

              </h1>

              <div className="h-px w-24 bg-cyan-400 mt-6 mb-6" />

              <p className="text-gray-400 leading-relaxed">
                Providing services such as application development, hardware solutions, security infrastructure, and maintenance.
              </p>

            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="glass-card p-12 rounded-3xl h-full">

              <h1 className="flex flex-col gap-3 font-bold text-white leading-tight">

                <div className="text-[clamp(28px,4vw,64px)]">
                  Engineering
                </div>

                <div className="text-[clamp(28px,4vw,64px)]">&</div>

                <div className="text-[clamp(28px,4vw,64px)] bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  Infrastructure
                </div>

              </h1>

              <div className="h-px w-24 bg-orange-400 mt-6 mb-6" />

              <p className="text-gray-400 leading-relaxed">
                From conceptualization to execution, we design functional and aesthetically premium interiors, undertake structural civil works, and maintain critical naval infrastructure.
              </p>

            </div>
          </motion.div>

        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-12 max-w-xl mx-auto">
          <Link to="/services" className="flex-1 bg-cyan-600 text-white py-4 rounded-xl text-center font-bold">
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-4 rounded-xl text-center font-bold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;