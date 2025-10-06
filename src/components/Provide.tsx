// src/components/Provide.tsx
import React from 'react';

const Provide = () => {
  const services = [
    {
      id: 1,
      title: "Loading",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img1.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Moving Locally",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img2.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Storage",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img3.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Commercial Relocation",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img4.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Corporate Relocation",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img5.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Parking",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img6.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Packaging",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img7.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Ware Housing",
      image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img8.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="px-[5%] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="relative aspect-square overflow-hidden group">
            {/* Background Image - removed scale effect on hover */}
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gray Overlay with opacity change on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 text-center transition-all duration-300 group-hover:bg-opacity-40">
              {/* Icon with color change and position transition on hover */}
              <div className="text-yellow-400 mb-2 transition-all duration-300 group-hover:text-white group-hover:transform group-hover:-translate-y-4">
                {service.icon}
              </div>
              
              {/* White line below icon - hidden on hover */}
              <div className="h-0.5 bg-white w-10 mb-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
              
              {/* Title - hidden on hover */}
              <h3 className="text-xl font-bold text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;