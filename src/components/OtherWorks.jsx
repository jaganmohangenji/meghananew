import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const OtherWorks = () => {
  const categories = [
    { title: 'Interior Designs', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Civil & Renovation', image: 'https://images.unsplash.com/photo-1541888081121-789a77914bf6?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Landscaping', image: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop' },
    { title: 'Fabrication Elements', image: 'https://images.unsplash.com/photo-1504917595217-d4ce5eb922fc?q=80&w=2052&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Engineering & Infrastructure Works" subtitle="Portfolio Gallery" centered={true} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {categories.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[var(--color-orange)] font-bold text-sm uppercase tracking-wider mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  View Category
                </p>
                <h3 className="text-2xl font-poppins font-bold text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
