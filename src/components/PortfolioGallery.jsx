import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const galleryGroups = [
  {
    id: 1,
    title: "Interior designing and execution of officers' ward at INS Virbahu",
    images: ["/assets/ARC-ND(V)-1.jpg", "/assets/ARC-ND(V)-2.jpg"]
  },
  {
    id: 2,
    title: "Interior and exterior design of the Officers' Wardroom on INS Virbahu",
    images: ["/assets/INS-VIRBAHU-1.jpg", "/assets/INS-VIRBAHU-2.jpg"]
  },
  {
    id: 3,
    title: "Interior and exterior designing and execution of Samudra Cafe at INS Dega",
    images: ["/assets/DEGA-1.png", "/assets/DEGA-2.jpg", "/assets/DEGA-3.png"]
  },
  {
    id: 4,
    title: "Interior design and execution of Flag Command Post (FCP) at INS Mysore ship",
    images: ["/assets/INS-MYSORE-1.png", "/assets/INS-MYSORE-4.png"]
  },

  {
    id: 5,
    title: "Interior design and execution of the Officers' Wardroom at INS Rana ship",
    images: ["/assets/INS-RANA.png"]
  },
  {
    id: 6,
    title: "RFID-based cashless transaction system at INS Circars",
    images: ["/assets/INS-CIRCARS.png"]
  },
  {
    id: 7,
    title: "Interior and exterior design and landscaping at Sagar – INS Viswakarma",
    images: ["/assets/INS-SAGAR.png"]
  },
  {
    id: 8,
    title: "Interior and exterior design and execution of the conference room of the Logistics Department at INS Dega",
    images: ["/assets/INS-DEGA-1.png", "/assets/INS-DEGA-2.png"]
  },
  {
    id: 9,
    title: "Aircraft tool management system at INS Dega 324",
    images: ["/assets/INS-DEGA-324.png"]
  }
];

const StackCard = ({ group, onClick, index }) => {
  // Display up to 3 layers to mimic a stack of photos
  const displayImages = group.images.slice(0, 3);
  const rotations = [0, 0, 0]; // Removed rotations as requested

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col h-full"
      onClick={() => onClick(group)}
    >
      <div className="relative aspect-[4/3] mb-8 mt-4 mx-auto w-11/12 min-h-[220px]">
        {displayImages.map((img, i) => {
          const isTop = i === 0;
          const zIndex = 30 - i;
          return (
            <motion.div
              key={i}
              className={`absolute inset-0 bg-white p-2 rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 origin-bottom ${isTop ? 'group-hover:-translate-y-4 group-hover:shadow-2xl' :
                i === 1 ? 'group-hover:-translate-x-6 opacity-90 group-hover:opacity-100' :
                  'group-hover:translate-x-6 opacity-70 group-hover:opacity-100'
                }`}
              style={{
                zIndex: zIndex,
                transform: `rotate(${rotations[i]}deg) scale(${1 - i * 0.05}) translateY(${i * 10}px)`,
              }}
            >
              <img
                src={img}
                alt={`${group.title} thumbnail ${i + 1}`}
                className="w-full h-full object-cover rounded-lg bg-gray-100"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {isTop && (
                <div className="absolute inset-0 bg-[var(--color-navy)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg m-2">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-md flex items-center text-white">
                    <Images size={20} className="mr-2 shrink-0" />
                    <span className="font-poppins font-medium text-sm tracking-wide">{group.images.length} Photos</span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="text-center px-4 flex-grow flex flex-col justify-start">
        <h3 className="font-poppins font-semibold text-[var(--color-navy)] text-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-300 relative z-40">
          {group.title}
        </h3>
      </div>
    </motion.div>
  );
};

const PortfolioGallery = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openLightbox = (group) => {
    setActiveGroup(group);
    setCurrentSlideIndex(0);
  };

  const closeLightbox = () => {
    setActiveGroup(null);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    if (activeGroup) {
      setCurrentSlideIndex((prev) => (prev + 1) % activeGroup.images.length);
    }
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (activeGroup) {
      setCurrentSlideIndex((prev) => (prev === 0 ? activeGroup.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="gallery" className="py-1 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8  ">
        <SectionHeader title="Project Collections" subtitle="A Visual Tour of Our Works" centered={true} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 mt-4 ">
          {galleryGroups.map((group, index) => (
            <StackCard key={group.id} group={group} index={index} onClick={openLightbox} />
          ))}
        </div>
      </div>

      {/* Lightbox / Slider Modal */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f16]/95 backdrop-blur-md p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white bg-white/10 hover:bg-[var(--color-orange)] p-3 rounded-full transition-colors z-[110] shadow-lg"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Slider Controls */}
            {activeGroup.images.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[var(--color-tech-blue)] text-white p-3 md:p-4 rounded-full transition-colors z-[110] backdrop-blur-sm"
                  onClick={prevSlide}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[var(--color-tech-blue)] text-white p-3 md:p-4 rounded-full transition-colors z-[110] backdrop-blur-sm"
                  onClick={nextSlide}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center justify-center p-4 md:p-12 pb-24"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentSlideIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={activeGroup.images[currentSlideIndex]}
                alt={activeGroup.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
              />

              {/* Footer Overlay Caption */}
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white shadow-lg pointer-events-none px-6">
                <p className="font-poppins font-medium md:text-xl drop-shadow-md pb-2 max-w-4xl mx-auto line-clamp-2 md:line-clamp-none">
                  {activeGroup.title}
                </p>
                {activeGroup.images.length > 1 && (
                  <span className="inline-block bg-[var(--color-navy)]/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase border border-white/20">
                    {currentSlideIndex + 1} / {activeGroup.images.length}
                  </span>
                )}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
