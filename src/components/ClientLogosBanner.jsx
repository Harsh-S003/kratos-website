import React from 'react';

const ClientLogosBanner = () => {
  // Mapping client1.webp through client4.webp from your public folder
  const clients = [
    { id: 1, img: '/client1.webp', alt: 'Client Partner 1' },
    { id: 2, img: '/client2.webp', alt: 'Client Partner 2' },
    { id: 3, img: '/client3.webp', alt: 'Client Partner 3' },
    { id: 4, img: '/client4.webp', alt: 'Client Partner 4' },
  ];

  return (
    <section className="w-full bg-white py-14 font-poppins border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-2xl font-extrabold uppercase tracking-wider">
            Some of Our Clients
          </h2>
          {/* Sharp High-Contrast Minimalist Underline Accent */}
          <div className="h-[2px] w-12 bg-[#FF5500] mt-3" />
        </div>

        {/* Rigid Grid Matrix Frame */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center pt-4">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="w-full flex items-center justify-center p-6 bg-white rect-container min-h-[140px] hover:border-slate-950 transition-colors duration-150"
            >
              <img
                src={client.img}
                alt={client.alt}
                className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientLogosBanner;