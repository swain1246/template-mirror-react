// src/components/News.tsx
import React from 'react';

const News = () => {
  // Sample news data with updated images
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      title: "My Boss Is Looking To Rent a Cargo Ship",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis augue nec pretium ornare, ante mauris congue dui."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      title: "Its Mission Explore Strange New Worlds To",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis augue nec pretium ornare, ante mauris congue dui."
    },
    {
      id: 3,
      image: "https://eyecix.com/html/moverspackers/extra-images/blog-classic-img3.jpg",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      title: "These Are The Voyages of The Starship Enterprise",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis augue nec pretium ornare, ante mauris congue dui."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16 md:px-20 lg:px-24">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col group">
          {/* Image with date overlay and hover effects */}
          <div className="relative h-64 overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            
            {/* Yellow overlay on hover */}
            <div className="absolute inset-0 bg-yellow-400 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Month and date box - hidden on hover */}
            <div className="absolute top-0 left-0 m-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-gray-900 p-2 w-16 h-16 flex flex-col items-center justify-center border-b-4 border-yellow-500">
                <span className="text-xs font-bold text-white">AUG</span>
                <span className="text-lg font-bold text-white">21</span>
              </div>
            </div>
            
            {/* Arrow icon - appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="bg-gray-900 bg-opacity-80  p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Author and comments with parabola shape */}
          <div className="relative h-12">
            <div className="absolute inset-0 bg-gray-800 h-full w-4/5 overflow-hidden">
              {/* Parabolic shape using SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L80,0 Q100,50 80,100 L0,100 Z" fill="#1f2937" />
              </svg>
              {/* Yellow bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></div>
              {/* Content */}
              <div className="absolute inset-0 flex justify-between items-center px-4 py-3 text-sm z-10">
                <span className="text-white">Posted By: {item.author}</span>
                <span className="text-white mx-2">|</span>
                <span className="text-white">Comments: {item.comments}</span>
              </div>
            </div>
          </div>
          
          {/* Content with darker background and increased padding */}
          <div className="p-6 bg-gray-100 flex-grow flex flex-col font-sans">
            <h3 className="font-bold text-lg mb-3 text-gray-700">{item.title}</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{item.description}</p>
            <div className="mt-auto">
              <button className="text-gray-500 text-sm border border-gray-300 px-3 py-1 rounded transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500">
                Read More »
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;