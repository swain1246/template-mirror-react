// src/components/News.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const News = () => {
  // Sample news data with updated images
  const newsItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1170&q=80",
      date: "OCT 05",
      author: "Rohit Sharma",
      comments: 18,
      title: "Seamless Office Relocation for a Leading Tech Company",
      description:
        "Our expert team successfully relocated a 200-member IT firm from Pune to Bengaluru within 48 hours — ensuring zero downtime and secure handling of sensitive equipment."
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1170&q=80",
      date: "SEP 19",
      author: "Anita Verma",
      comments: 24,
      title: "Pan-India Household Move with Real-Time Tracking",
      description:
        "We helped a family move from Delhi to Chennai using our advanced GPS tracking system and multi-city coordination — ensuring every item reached safely and on time."
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1170&q=80",
      date: "AUG 27",
      author: "Suresh Patel",
      comments: 16,
      title: "Supporting E-Commerce Growth with Fast Logistics",
      description:
        "Partnering with a fast-growing e-commerce brand, we streamlined their daily warehouse dispatch operations — improving delivery time by 35% across multiple states."
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80",
      date: "JUL 15",
      author: "Priya Nair",
      comments: 12,
      title: "International Moving Made Easy",
      description:
        "Successfully managed an international relocation from Mumbai to Dubai with complete customs clearance and door-to-door delivery service."
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1170&q=80",
      date: "JUN 30",
      author: "Amit Kumar",
      comments: 20,
      title: "Vehicle Transportation Excellence",
      description:
        "Transported over 100 luxury cars across India with specialized carriers and real-time tracking for a premium automobile dealership."
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1603726843699-914a2b055b63?auto=format&fit=crop&w=1170&q=80",
      date: "JUN 10",
      author: "Kavita Reddy",
      comments: 14,
      title: "Warehouse Storage Solutions",
      description:
        "Provided secure climate-controlled storage solutions for sensitive equipment during a corporate office renovation project."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Default to 1 for initial render

  // Determine itemsPerSlide based on screen size
  const updateItemsPerSlide = () => {
    if (window.innerWidth < 640) {
      setItemsPerSlide(1); // Mobile: slidesToShow: 1
    } else if (window.innerWidth < 1024) {
      setItemsPerSlide(2); // Tablet: 2 items
    } else {
      setItemsPerSlide(3); // Desktop: 3 items
    }
  };

  // Update itemsPerSlide on mount and resize
  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get the items to display for current slide
  const getItemsForCurrentSlide = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return newsItems.slice(startIndex, endIndex);
  };

  return (
    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8">
      {/* Slider Container */}
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {newsItems.slice(
                  slideIndex * itemsPerSlide, 
                  slideIndex * itemsPerSlide + itemsPerSlide
                ).map((item) => (
                  <div key={item.id} className="bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col group">
                    {/* Image with date overlay and hover effects */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-yellow-400 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 left-0 m-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="bg-gray-900 p-2 w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center border-b-4 border-yellow-500">
                          <span className="text-xs font-bold text-white">{item.date.substring(0, 3)}</span>
                          <span className="text-base sm:text-lg font-bold text-white">{item.date.substring(4, 6)}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="bg-gray-900 bg-opacity-80 p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-10 sm:h-12">
                      <div className="absolute inset-0 bg-gray-800 h-full w-4/5 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0,0 L80,0 Q100,50 80,100 L0,100 Z" fill="#1f2937" />
                        </svg>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></div>
                        <div className="absolute inset-0 flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm z-10">
                          <span className="text-white truncate">By: {item.author}</span>
                          <span className="text-white mx-1 sm:mx-2">|</span>
                          <span className="text-white">{item.comments}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 bg-gray-100 flex-grow flex flex-col font-sans">
                      <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-gray-700 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-500 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">{item.description}</p>
                      <div className="mt-auto">
                        <button className="text-gray-500 text-xs sm:text-sm border border-gray-300 px-3 py-1 sm:px-3 sm:py-1 rounded transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500">
                          Read More »
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 z-10 ml-2 sm:ml-4"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 z-10 mr-2 sm:mr-4"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-yellow-500 w-8" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default News;