import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Settings, CheckCircle, ChevronDown, Anchor } from 'lucide-react';
import { serviceDataMap } from '../data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [activeCapability, setActiveCapability] = useState(null);

  // Fallback content if URL is wrong
  const content = serviceDataMap[serviceId] || {
    title: 'Service Not Found',
    description: 'Please select a valid service from our menu.',
    capabilities: [],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  };

  const toggleCapability = (name) => {
    if (activeCapability === name) {
      setActiveCapability(null);
    } else {
      setActiveCapability(name);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <section className="relative h-[25vh] bg-[var(--color-navy)] flex items-center justify-center overflow-hidden pt-6">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${content.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4"
           >
            {content.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[var(--color-orange)] mx-auto"
           ></motion.div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 relative z-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-poppins font-bold text-[var(--color-navy)] mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                {content.description}
              </p>

              <div className="mb-12">
                 <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6 flex items-center">
                   <Settings className="text-[var(--color-orange)] mr-3" /> Core Capabilities & Projects
                 </h3>
                 <p className="text-gray-500 mb-6 italic text-sm">Click on any capability below to view our portfolio of completed projects for that specific domain.</p>

                 <div className="flex flex-col gap-4">
                   {content.capabilities?.map((capability, idx) => {
                     const isOpen = activeCapability === capability.name;
                     return (
                       <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all">
                         <button 
                           onClick={() => toggleCapability(capability.name)}
                           className={`w-full flex items-center justify-between p-5 text-left font-poppins font-medium transition-colors ${isOpen ? 'bg-[var(--color-navy)] text-white' : 'bg-[var(--color-light-gray)] text-gray-800 hover:bg-gray-100'}`}
                         >
                           <div className="flex items-center">
                             <CheckCircle className={`${isOpen ? 'text-[var(--color-orange)]' : 'text-[var(--color-tech-blue)]'} mr-3 shrink-0`} size={20} />
                             <span className="text-lg">{capability.name}</span>
                           </div>
                           <ChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                         </button>

                         <AnimatePresence>
                           {isOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                             >
                               <div className="p-6 bg-white border-t border-gray-100">
                                  <h4 className="font-bold text-[var(--color-navy)] mb-4 text-sm uppercase tracking-wider">Completed Projects</h4>
                                  {capability.projects && capability.projects.length > 0 ? (
                                    <ul className="space-y-4">
                                      {capability.projects.map((proj, pIdx) => (
                                        <li key={pIdx} className="flex items-start text-gray-600">
                                           <Anchor size={16} className="text-[var(--color-tech-blue)] mr-3 mt-1 shrink-0" />
                                           <span className="leading-relaxed">{proj}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-gray-400 italic">Project details are restricted or currently being updated.</p>
                                  )}
                               </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                       </div>
                     );
                   })}
                 </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-[var(--color-navy)] rounded-2xl p-8 text-white shadow-xl sticky top-28">
                <h3 className="text-xl font-poppins font-bold mb-4">Request Service</h3>
                <p className="text-gray-300 text-sm mb-8">
                  Looking for reliable delivery scaled for defense protocols? Get in touch with our engineering team for a consultation on {content.title}.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-[var(--color-orange)] hover:bg-[#d97000] text-white py-4 rounded-lg font-bold flex justify-center items-center transition-colors shadow-lg"
                >
                  Contact Us Now <ArrowRight size={18} className="ml-2" />
                </Link>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center text-sm mb-3">
                    <ShieldCheck size={18} className="text-[var(--color-tech-blue)] mr-3" />
                    <span>ENC Registered Vendor</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ShieldCheck size={18} className="text-[var(--color-tech-blue)] mr-3" />
                    <span>ISO Certified Standards</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
