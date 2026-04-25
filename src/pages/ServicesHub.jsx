import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import {
  Camera, BoomBox, Fingerprint, ScanEye, Code, CreditCard, Clock,
  Home, Hammer, Mountain, QrCode, ShieldAlert, Zap, Truck, Package,
  UserCheck, Wrench, HardHat
} from 'lucide-react';

const ServicesHub = () => {

  // Combined data for the hub
  const securityServices = [
    { name: 'CCTV Surveillance', path: 'security-systems', icon: <Camera size={28} /> },
    { name: 'Boom Barriers', path: 'security-systems', icon: <BoomBox size={28} /> },
    { name: 'Biometric Devices', path: 'security-systems', icon: <Fingerprint size={28} /> },
    { name: 'RFID Readers & Tags', path: 'security-systems', icon: <ScanEye size={28} /> },
  ];

  const softwareServices = [
    { name: 'Custom Software Application Development', path: 'software-development', icon: <Code size={28} /> },
    { name: 'Cashless Transaction Applications Using RFID Technology', path: 'software-development', icon: <CreditCard size={28} /> },
    { name: 'Biometric Attendance System', path: 'software-development', icon: <Clock size={28} /> },
    { name: 'Vehicle Tracking', icon: <Truck size={32} /> },

  ];

  const engineeringServices = [
    { name: 'Interior Designing', path: 'interior-designing', icon: <Home size={28} /> },
    { name: 'Renovation', path: 'renovation', icon: <Hammer size={28} /> },
    { name: 'Fabrication', path: 'fabrication', icon: <Wrench size={28} /> },
    { name: 'Civil Works', path: 'civil-works', icon: <HardHat size={28} /> },
  ];

  const ServiceBlock = ({ title, description, items, color, linkCategory }) => (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-12 ">
      <div className={`p-8 ${color} text-white`}>
        <h2 className="text-3xl font-poppins font-bold mb-4">{title}</h2>
        <p className="text-white/80 max-w-2xl">{description}</p>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={`/services/${item.path}`}
              className="flex flex-col items-center p-6 bg-[var(--color-light-gray)] rounded-xl hover:bg-[var(--color-tech-blue)] hover:text-white transition-all group"
            >
              <div className="text-[var(--color-navy)] group-hover:text-white mb-4 transition-colors">
                {item.icon}
              </div>
              <span className="font-poppins font-medium text-center text-sm">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center pt-8 border-t border-gray-100">
          <Link
            to={`/services/${linkCategory}`}
            className="inline-flex font-bold text-[var(--color-orange)] hover:text-[#d97000] uppercase tracking-wider text-sm items-center transition-colors"
          >
            View All {title} Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[var(--color-light-gray)] min-h-screen">
      {/* Header */}
      <section className="relative h-[20vh] bg-[var(--color-navy)] flex items-center justify-center pt-6">
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
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">

          <ServiceBlock
            title="Security Systems, Sales & Services"
            description="State-of-the-art physical security infrastructure for perimeter, access, and surveillance control."
            items={securityServices}
            color="bg-[var(--color-navy)]"
            linkCategory="security-systems"
          />

          <ServiceBlock
            title="Software Solutions"
            description="Custom cloud applications, RFID implementations, and cashless management systems built for scale."
            items={softwareServices}
            color="bg-[var(--color-tech-blue)]"
            linkCategory="software-development"
          />

          <ServiceBlock
            title="Engineering & Infrastructure"
            description="Physical space transformation from civil works to premium interior designing and fabrication."
            items={engineeringServices}
            color="bg-gray-800"
            linkCategory="renovation"
          />

        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
