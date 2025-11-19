import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/14187/14187179.png', // Home icon
      title: 'House Shifting',
      description: 'Plan a hassle-free and safe household move anywhere in India with our DRM packers and movers.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/3222/3222642.png', // Office building icon
      title: 'Office Shifting',
      description: 'DRM office relocation experts carefully pack and move all your valuable office items on time and with complete safety.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/5669/5669944.png', // Motorcycle icon
      title: 'Car & Bike Shifting',
      description: 'Relocate your car or bike safely with our specialized vehicle-carrying services designed for secure and damage-free transportation.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/12035/12035988.png', // Warehouse storage icon
      title: 'Storage Shifting',
      description: 'Our reliable movers and packers provide secure storage solutions with protect your goods for short or long durations.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto lg:px-8 xl:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Icon with nice background */}
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:scale-110 transition-transform duration-300">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>

            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;