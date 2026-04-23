import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Settings, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Dynamic content mapping based on URL
  const serviceDataMap = {
    'security-systems': {
      title: 'Security Systems, Sales & Services',
      description: 'We provide defense-grade security hardware installation and maintenance. Our systems are designed to monitor, track, and protect critical infrastructure such as naval bases and commercial enterprise units.',
      features: ['CCTV Surveillance', 'Boom Barriers', 'Biometric Devices', 'RFID Readers & Tags', 'QR Code Scanners', 'Metal Detectors (Hand-held & Door Frame)', 'Explosive Detectors', 'Face Recognition'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2060&auto=format&fit=crop'
    },
    'software-development': {
      title: 'Software Solutions',
      description: 'Specializing in RFID technology and cloud computing, our software offerings are highly customizable and scalable. We solve specific operational bottlenecks with tailor-made code.',
      features: ['Custom Software Application Development', 'Cashless Transaction Applications Using RFID Technology', 'Biometric Attendance Systems', 'Vehicle Tracking Applications', 'Inventory Management Systems', 'Digital Management System', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
    },
    'interior-designing': {
      title: 'Interior Designing',
      description: 'From conceptualization to execution, we design functional and aesthetically premium interiors for naval and enterprise facilities.',
      features: ['Space Planning', 'Ergonomic Furniture', 'Lighting Design', 'Material Sourcing', 'Turnkey Execution'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
    },
    'renovation': {
      title: 'Renovation Works',
      description: 'We transform old infrastructure into modern, highly functional workspaces with minimal downtime.',
      features: ['Structural Repairs', 'Complete Overhauls', 'Modernization', 'Upgrades to Naval Specs'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop'
    },
    'fabrication': {
      title: 'Fabrication Elements',
      description: 'Custom metal and material fabrication for structural and security needs.',
      features: ['Custom Metal Works', 'Structural Supports', 'Security Gates', 'Industrial Racking'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4ce5eb922fc?q=80&w=2052&auto=format&fit=crop'
    },
    'civil-works': {
      title: 'Civil Works',
      description: 'Reliable civil engineering services supporting both our security installations and independent infrastructure projects.',
      features: ['Site Prep', 'Foundation Works', 'Pathways & Landscaping integration', 'Core Construction'],
      image: 'https://images.unsplash.com/photo-1541888081121-789a77914bf6?q=80&w=2070&auto=format&fit=crop'
    }
  };

  // Fallback content if URL is wrong
  const content = serviceDataMap[serviceId] || {
    title: 'Service Not Found',
    description: 'Please select a valid service from our menu.',
    features: [],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Dynamic Header */}
      <section className="relative h-[20vh] bg-[var(--color-navy)] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${content.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            {content.title}
          </h1>
          <div className="h-1 w-24 bg-[var(--color-orange)] mx-auto"></div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-poppins font-bold text-[var(--color-navy)] mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                {content.description}
              </p>

              <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6 flex items-center">
                <Settings className="text-[var(--color-orange)] mr-3" /> Core Capabilities
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-[var(--color-light-gray)] p-4 rounded-lg border border-gray-100 shadow-sm">
                    <CheckCircle className="text-[var(--color-tech-blue)] mr-3 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
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
