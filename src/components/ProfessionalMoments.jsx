import React from 'react';
import SectionHeader from './SectionHeader';

const ProfessionalMoments = () => {
  const images = [
    '/assets/moments/Moments-1.jpeg',
    '/assets/moments/Moments-2.jpeg',
    '/assets/moments/Moments-3.jpeg',
    '/assets/moments/Moments-4.jpeg',
    '/assets/moments/Moments-5.jpeg',
    '/assets/moments/Moments-6.jpeg'
  ];

  return (
    <section className="pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Professional Moments" subtitle="A GLIMPSE OF OUR WORK" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={src}
                  alt={`Professional Interaction ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              {/* <div className="p-5 text-center border-t border-gray-50">
                <p className="font-poppins font-medium text-[var(--color-navy)] tracking-wide">
                  Professional Interaction
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalMoments;
