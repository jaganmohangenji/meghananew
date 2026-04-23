import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Anchor, MapPin, CheckCircle } from 'lucide-react';
import ImageSlider from './ImageSlider';

const ProjectSection = ({ title, subtitle, data, gridView = false }) => (
  <div className="mb-24 last:mb-0">
    <div className="text-center mb-16">
      {subtitle && (
        <span className="text-[var(--color-orange)] font-bold tracking-wider text-sm uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
        {title}
      </h2>
      <div className="h-1 w-20 bg-[var(--color-tech-blue)] mx-auto"></div>
    </div>

    {/* <div className="space-y-12">
      {data.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${showImages
            ? index % 2 !== 0
              ? 'md:flex-row-reverse'
              : 'md:flex-row'
            : ''
            } gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10 transition-colors`}
        >
          <div className="w-full md:w-2/5 h-64 md:h-80 shrink-0">
            <ImageSlider images={project.images || []} unitName={project.unit} />
          </div>
          <div className="w-full md:w-3/5">
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-[var(--color-orange)]" size={28} />
              <h3 className="text-2xl font-poppins font-bold">{project.unit}</h3>
            </div>

            <ul className={`${twoColumn ? 'grid md:grid-cols-2 gap-4' : 'space-y-3'}`}>
              {project.tasks.map((task, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <CheckCircle size={18} className="text-[var(--color-tech-blue)] mr-3 mt-1 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div> */}


    {gridView ? (
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-[var(--color-orange)]" size={24} />
              <h3 className="text-xl font-poppins font-bold">{project.unit}</h3>
            </div>

            <ul className="space-y-2">
              {project.tasks.map((task, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <CheckCircle size={16} className="text-[var(--color-tech-blue)] mr-2 mt-1 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    ) : (
      <div className="space-y-12">
        {data.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10`}
          >
            <div className="w-full md:w-2/5 h-64 md:h-80 shrink-0">
              <ImageSlider images={project.images || []} unitName={project.unit} />
            </div>

            <div className="w-full md:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="text-[var(--color-orange)]" size={28} />
                <h3 className="text-2xl font-poppins font-bold">{project.unit}</h3>
              </div>

              <ul className="space-y-3">
                {project.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <CheckCircle size={18} className="text-[var(--color-tech-blue)] mr-3 mt-1 shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const Projects = () => {
  const encProjects = [
    {
      unit: 'INS VIRBAHU',
      tasks: [
        'Website Development',
        'Manpower Utilization System (Prototype)',
        'File Tracking Application for 14SS',
        'Room Booking Application',
        'Vehicle Check-in/out through Boom Barriers using Finger Print Biometric Devices'
      ],
      images: [
        '/assets/INS-VIRBAHU-1.jpg',
        '/assets/INS-VIRBAHU-2.jpg'
      ]
    },
    {
      unit: 'INS VISHWAKARMA',
      tasks: [
        'Visitor Management System',
        'Interior and Exterior Designing of SAGAR'
      ],
      images: [
        '/assets/INS-SAGAR.png',
        '/assets/INS-SAGAR-2.png'
      ]
    },
    {
      unit: 'INS DEGA',
      tasks: [
        'CCTV Surveillance Systems at Logistics Office, MT Pool',
        'Renovation of TRS Block & Logistics Conference Room'
      ],
      images: [
        '/assets/DEGA-1.png',
        '/assets/DEGA-2.jpg',
        '/assets/DEGA-3.png'
      ]
    },
    // {
    //   unit: 'ENC Residential Areas & Others',
    //   tasks: [
    //     'Vehicle Management and Tracking System for all Quarters',
    //     'Renovation of Flag Command Post (INS MYSORE)',
    //     'Cashless Transaction System using RFID at TARANG'
    //   ],
    //   images: [
    //     '/assets/ins-mysore-1.jpg',
    //     '/assets/ins-mysore-2.jpg',
    //     '/assets/ins-mysore-3.jpg'
    //   ]
    // },
    {
      unit: 'INS CIRCARS',
      tasks: [
        'Implementation of a Visitor Management System for entry and exit at the main gate of INS Circars',
        'RFID-based cashless transaction system at TARANG (Sailors’ Institute)',
        'Development and maintenance of an employee chatbot system'
      ],
      images: [
        '/assets/INS-CIRCARS.png'
      ]
    }
  ];

  const shipProjects = [
    {
      unit: 'INS Mysore & INS Delhi',
      tasks: [
        'Renovation and interior designing of the Flag Command Post'
      ],
      images: [
        '/assets/INS-MYSORE-3.png',
        '/assets/INS-MYSORE-4.png',
        '/assets/INS-MYSORE-1.png',
        '/assets/INS-MYSORE-2.png'
      ]
    },
    {
      unit: 'INS Rana',
      tasks: [
        'Interior designing and renovation of officers’ cabins and wardroom'
      ],
      images: [
        '/assets/INS-RANA.png'

      ]
    },
    {
      unit: 'Fleet Maintenance Entity (FME) – ARC',
      tasks: [
        'Development and implementation of a cashless transaction system using RFID technology for food and beverages'
      ],
      images: [
        '/assets/ARC-ND(V)-1.jpg',
        '/assets/ARC-ND(V)-2.jpg'
      ]
    },
    {
      unit: 'INS Dega Vihar',
      tasks: [
        'Development and implementation of a cashless transaction system using RFID technology for food and beverages',
        'Deployment and maintenance of CCTV surveillance systems at the Command Swimming Pool, MI Room, and Regulating Office'
      ],
      images: [
        '/assets/DEGA-1.png',
        '/assets/DEGA-2.jpg',
        '/assets/DEGA-3.png'

      ]
    },
    {
      unit: 'INS Dega 324',
      tasks: [
        'Aircraft tool management system',
        'Crew fatigue management system'
      ],
      images: [
        '/assets/INS-DEGA-324.png'
      ]
    }
  ];

  return (
    <section id="projects" className="py-10 bg-[var(--color-navy)] text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        <ProjectSection
          subtitle="Proven Experience"
          title="Naval Projects at Eastern Naval Command (ENC)"
          data={encProjects}
          gridView={true}
        />

        <ProjectSection
          title="Ships"
          data={shipProjects}
        />

      </div>
    </section>
  );
};

export default Projects;
