import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Code, HardHat } from 'lucide-react';

const ServicesHub = () => {

  const serviceCards = [
    {
      title: 'Security Systems, Sales & Services',
      description: 'Defense-grade physical security infrastructure, biometric devices, and surveillance systems built for high-stakes enterprise control.',
      path: '/services/security-systems',
      icon: <Camera size={40} />
    },
    {
      title: 'Software Solutions',
      description: 'Custom cloud applications, scalable enterprise management systems, and RFID-based digital software solutions services.',
      path: '/services/software-development',
      icon: <Code size={40} />
    },
    {
      title: 'Engineering & Infrastructure',
      description: 'Physical space modernization covering complete structural civil works, fabrication, maintaining, and high-end naval interior designing.',
      path: '/services/engineering-infrastructure',
      icon: <HardHat size={40} />
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[var(--color-light-gray)] min-h-screen">
      {/* Header */}
      <section className="relative h-[25vh] bg-[var(--color-navy)] flex items-center justify-center pt-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[var(--color-orange)] mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Main Hub Content */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="gradient-border-hover group flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tech-blue)]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

                  <div className="w-16 h-16 bg-[var(--color-light-gray)] rounded-xl flex items-center justify-center text-[var(--color-navy)] mb-6 group-hover:bg-[var(--color-navy)] group-hover:text-white transition-colors duration-300 relative z-10">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-poppins font-bold text-[var(--color-navy)] mb-4 relative z-10 pr-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8 flex items-center gap-2 text-[var(--color-orange)] font-bold text-sm tracking-widest uppercase group-hover:text-[var(--color-tech-blue)] transition-colors relative z-10">
                    <span>Explore Projects</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
