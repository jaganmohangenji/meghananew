import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Fingerprint, Lock, Code2, Database } from 'lucide-react';

const TechExpertise = () => {
  const technologies = [
    { name: 'RFID Technology', description: 'Advanced tracking and access control through reliable radio-frequency identification.', icon: <Fingerprint size={40} /> },
    { name: 'Cloud Computing', description: 'Scalable and secure cloud infrastructure for deploying robust applications.', icon: <Cloud size={40} /> },
    { name: 'Biometric Systems', description: 'High-precision biometric solutions for stringent security requirements.', icon: <Cpu size={40} /> },
    { name: 'Security Automation', description: 'Integrated automated workflows for enhanced operational security.', icon: <Lock size={40} /> },
    { name: 'Custom Platforms', description: 'Tailor-made software architectures designed for specific naval unit needs.', icon: <Code2 size={40} /> },
    { name: 'Hardware Integration', description: 'Seamless bridging between physical security hardware and digital dashboards.', icon: <Database size={40} /> },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/3">
             <SectionHeader title="Technology Expertise" subtitle="Powered By Innovation" />
             <p className="text-gray-600 font-medium">
               Leveraging modern tech stacks to deliver highly reliable, available, and secure systems tailored for defense and enterprise organizations.
             </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-light-gray)] p-6 rounded-xl border-l-4 border-transparent hover:border-[var(--color-orange)] hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="text-[var(--color-tech-blue)] mb-4">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-bold font-poppins text-[var(--color-navy)] mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
