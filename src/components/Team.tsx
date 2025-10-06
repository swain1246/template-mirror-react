// src/components/Team.tsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Micheal Wagou",
      designation: "CEO / Founder",
      image: "https://eyecix.com/html/moverspackers/extra-images/team-modern-img1.jpg",
      description: "Founder and CEO with over 15 years of experience in logistics and transportation industry."
    },
    {
      id: 2,
      name: "John Harris",
      designation: "Manager",
      image: "https://eyecix.com/html/moverspackers/extra-images/team-modern-img2.jpg",
      description: "Experienced manager specializing in supply chain optimization and team leadership."
    },
    {
      id: 3,
      name: "Chries Hemsworth",
      designation: "Manager",
      image: "https://eyecix.com/html/moverspackers/extra-images/team-modern-img3.jpg",
      description: "Operations manager with expertise in international shipping and customs clearance."
    },
    {
      id: 4,
      name: "George Hilson",
      designation: "Delivery Boy",
      image: "https://eyecix.com/html/moverspackers/extra-images/team-modern-img4.jpg",
      description: "Dedicated delivery professional ensuring timely and safe delivery of all packages."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
      {teamMembers.map((member) => (
        <div key={member.id} className="bg-white shadow-md overflow-hidden relative group">
          {/* Member Image */}
          <div className="overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-auto"
            />
          </div>
          
          {/* Member Info */}
          <div className="bg-gray-900 p-4 text-center">
            <h3 className="font-bold text-lg text-gray-100">{member.name}</h3>
            <p className="text-gray-400">{member.designation}</p>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <h3 className="font-bold text-xl text-white mb-2">{member.name}</h3>
            <p className="text-gray-300 mb-3">{member.designation}</p>
            <p className="text-gray-400 text-sm text-center mb-6">{member.description}</p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-white hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-white hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-white hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center text-white hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.204 0-3.584.011-4.849.06-2.27.104-3.505 1.107-3.607 3.377-.049 1.265-.06 1.645-.06 4.849 0 3.204.011 3.583.06 4.849.102 2.27 1.337 3.273 3.607 3.377 1.265.058 1.645.069 4.849.06 3.203 0 3.583-.011 4.849-.06 2.27-.105 3.505-1.107 3.607-3.377.058-1.265.069-1.645.069-4.849 0-3.204-.011-3.584-.06-4.849-.102-2.27-1.337-3.273-3.607-3.377-1.264-.058-1.644-.07-4.849-.07zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 016.666 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;