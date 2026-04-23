import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Building2, Calendar, ShieldCheck, Users } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', icon: <Building2 size={24} /> },
    { year: '2015', title: 'Major Naval Projects', icon: <ShieldCheck size={24} /> },
    { year: '2020', title: 'RFID Technology Solutions', icon: <Users size={24} /> },
    { year: 'Present', title: 'Multi-role Technology Firm', icon: <Calendar size={24} /> },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Meghana Technologies Office"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-4xl font-bold font-poppins mb-1">15+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-2 right-2 lg:-bottom-6 lg:-right-6 
bg-white p-2 lg:p-4 
rounded-xl shadow-xl 
w-28 lg:w-auto lg:max-w-xs 
border-l-4 border-[var(--color-tech-blue)] text-center">

              {/* ENC Logo */}
              <img
                src="/assets/logos/ENC_Logo1.png"
                alt="ENC Logo"
                className=""
              />

              {/* Text */}
              <p className="text-gray-800 font-semibold text-sm">
                Trusted by Eastern Naval Command
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Indian Navy, Visakhapatnam
              </p>

            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0"
          >
            <SectionHeader title="About Meghana Technologies" subtitle="Who We Are" />

            <div className="text-gray-600 space-y-4 mb-10 text-justify leading-relaxed">
              <p>
                We are a multi-role firm with the mission of providing innovative services and a vision of serving clients across the Indian Navy. We specialize in software development & solutions, security systems sales and service, interior designing and renovation, fabrication, and civil works.
              </p>
              <p>
                In software, we specialize in RFID technology and cloud computing, and our offerings are highly customizable and scalable. We believe in providing 360° support to our clients. Every client is different, and so are our state-of-the-art solutions.
              </p>
              <p>
                We are a team of highly enthusiastic, energetic, and tech-savvy engineers. The strength of our company lies in the rich experience of our people, who come from diverse backgrounds.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[var(--color-navy)] font-poppins mb-6">Our Journey</h3>
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 p-4 rounded-lg bg-[var(--color-light-gray)]/50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-tech-blue)] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[var(--color-orange)] font-bold text-sm block mb-1">{item.year}</span>
                      <span className="text-gray-800 font-medium text-sm block">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
