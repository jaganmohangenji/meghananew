import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Building2, Calendar, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "B Meghna",
      role: "Proprietor & AI Designer",
      bio: "MS in Horticulture from Royal Agricultural University, London. Founder of Meghana Technologies with expertise in innovation-driven solutions and sustainable technologies.",
      image: "/assets/PEOPLE/MEGHANA.jpeg"
    },
    {
      name: "B. Srinivas",
      role: "Founder & Project Director",
      bio: "MBA graduate with 12+ years of IT experience, specializing in solution architecture, enterprise systems, and large-scale project delivery.",
      image: "/assets/PEOPLE/B.Srinivas.jpeg"
    },
    {
      name: "Sample Person",
      role: "Senior Software Engineer",
      bio: "Experienced in full-stack development, cloud technologies, and scalable system design. Passionate about building high-performance applications.",
      image: "/assets/PEOPLE/SAM.jpeg"
    },
    {
      name: "Gorle Charan Venkatesh",
      role: "System and Data Engineer",
      bio: "Specializes in designing and managing scalable data pipelines, distributed systems, and cloud-based architectures. Strong expertise in data engineering, system optimization, and building reliable, high-performance backend solutions.",
      image: "/assets/PEOPLE/charan.jpeg"
    },
    {
      name: "Narendra Sirisipalli",
      role: "Machine Learning Engineer",
      bio: "Focused on developing and deploying machine learning models for real-world applications. Skilled in data preprocessing, model optimization, and working with frameworks like TensorFlow and PyTorch to build intelligent, data-driven systems.",
      image: "/assets/PEOPLE/Narendra.jpeg"
    },
    {
      "name": "Shaik Asif Umeed",
      "role": "Software Developer",
      "bio": "Software developer skilled in building scalable web applications using Java and modern technologies, with a focus on clean and efficient code.",
      "image": "/assets/PEOPLE/Shaik.jpeg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[20vh] bg-[var(--color-navy)] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4"
          >
            About Meghana Technologies
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[var(--color-orange)] mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-full">

          <div className="grid grid-cols-1 gap-12 items-start mb-20">
            <div>
              <SectionHeader title="Our Story" subtitle="Who We Are" />
              <div className="flex md:flex-row flex-col gap-8">
                <div className="prose text-gray-600 leading-relaxed text-justify space-y-4">
                  <p>
                    We are a multi-role firm with the mission of providing innovative services and a vision of serving clients across the Indian Navy. Since our inception in 2010, we have continually expanded our footprint across various technological sectors.
                  </p>
                  <p>
                    Our expertise spans software development & solutions, security systems sales and service, interior designing and renovation, fabrication, and civil works.
                  </p>
                  <p>
                    In software, we specialize in <strong>RFID technology</strong> and <strong>cloud computing</strong>. Our state-of-the-art solutions are highly customizable and scalable because we understand that every client is fundamentally different.
                  </p>
                  <p>
                    We believe in providing full 360° support to our clients, ensuring that technology not only solves immediate problems but provides long-term, reliable infrastructure.
                  </p>
                </div>
                <div className="bg-[var(--color-light-gray)] p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tech-blue)]/10 rounded-bl-full"></div>
                  <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6">Naval Credibility</h3>

                  <div className="flex items-start mb-6">
                    <ShieldCheck className="text-[var(--color-orange)] mt-1 mr-4 shrink-0" size={28} />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      We proudly state that Meghana Technologies is one of the <strong className="text-[var(--color-navy)]">registered and trusted vendors</strong> for the Eastern Naval Command (ENC), Indian Navy - Visakhapatnam.
                    </p>
                  </div>

                  <div className="space-y-3 mt-8">
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 15+ Years Experience
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> 24x7 Active Support Team
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <CheckCircle2 size={16} className="text-[var(--color-tech-blue)] mr-2" /> Located in Visakhapatnam
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Team Section */}
          <div className="mb-20">
            <SectionHeader title="Our People" subtitle="The Strength Behind The Tech" centered={true} />
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              We are a team of highly enthusiastic, energetic, and tech-savvy engineers. The true strength of our company lies in the rich experience of our people, who come from diverse technical and operational backgrounds.
            </p>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[var(--color-tech-blue)]/30 transition-all duration-300 p-8 flex flex-col items-center text-center transform hover:-translate-y-2 h-full"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[var(--color-light-gray)] shadow-lg bg-gray-100 shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback placeholder generated by ui-avatars perfectly matches standard UI design
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0A2540&color=fff&size=128&font-size=0.4`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-[var(--color-navy)] mb-1">{member.name}</h3>
                  <p className="text-[var(--color-orange)] font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
