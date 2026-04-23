import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, HeadphonesIcon, Cog } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { 
      title: 'Experienced Engineers', 
      description: 'A highly skilled and tech-savvy technical team from diverse backgrounds.',
      icon: <Award size={36} /> 
    },
    { 
      title: 'Trusted Naval Vendor', 
      description: 'Registered and trusted vendor for Eastern Naval Command, Indian Navy.',
      icon: <CheckCircle2 size={36} /> 
    },
    { 
      title: '24/7 Customer Support', 
      description: 'Fully active customer care team committed to assisting our customers anytime.',
      icon: <HeadphonesIcon size={36} /> 
    },
    { 
      title: 'Custom Solutions', 
      description: 'State-of-the-art offerings that are highly customizable and scalable to fit varying needs.',
      icon: <Cog size={36} /> 
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Why Choose Us" subtitle="Our Core Strengths" centered={true} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[var(--color-tech-blue)] transition-all duration-300 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
