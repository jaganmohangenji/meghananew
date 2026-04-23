import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import {
  Camera, BoomBox, Fingerprint, ScanEye, QrCode, ShieldAlert, Zap,
  Code, CreditCard, Clock, Truck, Package, UserCheck, Database, Brain,
  Home, Hammer, Mountain, Wrench, HardHat, Sparkles, Settings
} from 'lucide-react';

const Services = () => {
  const securityServices = [
    { name: 'CCTV Surveillance', icon: <Camera size={32} /> },
    { name: 'Boom Barriers', icon: <BoomBox size={32} /> },
    { name: 'Biometric Devices', icon: <Fingerprint size={32} /> },
    { name: 'RFID Readers & Tags', icon: <ScanEye size={32} /> },
    { name: 'QR Code Systems', icon: <QrCode size={32} /> },
    { name: 'Metal Detectors', icon: <ShieldAlert size={32} /> },
    { name: 'Explosive Detectors', icon: <Zap size={32} /> },
    { name: 'Face Recognition', icon: <UserCheck size={32} /> },
  ];

  const softwareServices = [
    { name: 'Custom Software Application Development', icon: <Code size={32} /> },
    { name: 'Cashless Transaction Applications Using RFID Technology', icon: <CreditCard size={32} /> },
    { name: 'Biometric Attendance Systems', icon: <Clock size={32} /> },
    { name: 'Vehicle Tracking', icon: <Truck size={32} /> },
    { name: 'Inventory Management System', icon: <Package size={32} /> },
    { name: 'Digital Management System', icon: <Database size={32} /> },
    { name: 'AI/ML', icon: <Brain size={32} /> },
  ];

  const engineeringServices = [
    { name: 'Interior Designing', icon: <Home size={32} /> },
    { name: 'Renovation', icon: <Hammer size={32} /> },
    { name: 'Landscaping', icon: <Mountain size={32} /> },
    { name: 'Fabrication', icon: <Wrench size={32} /> },
    { name: 'Civil Works', icon: <HardHat size={32} /> },
    { name: 'Electrical Works', icon: <Zap size={32} /> },
    { name: 'Modernization', icon: <Sparkles size={32} /> },
    { name: 'Maintenance', icon: <Settings size={32} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const ServiceCategory = ({ title, items, colorClass }) => (
    <div className="mb-16 last:mb-0">
      <h3 className="text-2xl font-poppins font-bold mb-8 text-center flex items-center justify-center gap-3">
        <span className={`w-3 h-3 rounded-full ${colorClass}`}></span>
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[var(--color-tech-blue)]/30 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 cursor-default relative overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tech-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 rounded-full bg-[var(--color-light-gray)] group-hover:bg-[var(--color-navy)] flex items-center justify-center text-[var(--color-navy)] group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
              {item.icon}
            </div>
            <h4 className="font-poppins font-medium text-gray-800 group-hover:text-[var(--color-navy)] transition-colors relative z-10">
              {item.name}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Our Services" subtitle="What We Offer" centered={true} />

        <div className="mt-16">
          <ServiceCategory title="Security Systems, Sales & Services" items={securityServices} colorClass="bg-red-500" />
          <ServiceCategory title="Software Solutions" items={softwareServices} colorClass="bg-[var(--color-tech-blue)]" />
          <ServiceCategory title="Engineering & Infrastructure" items={engineeringServices} colorClass="bg-[var(--color-orange)]" />
        </div>
      </div>
    </section>
  );
};

export default Services;
