// src/components/Services.tsx
import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  Shield, 
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative mt-8 sm:mt-10 md:mt-12 group">
      {/* Icon container - positioned outside the card */}
      <div className="absolute -top-6 sm:-top-7 md:-top-8 -left-6 sm:-left-7 md:-left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center border border-dashed border-gray-400 z-10 transition-all duration-300 group-hover:bg-yellow-500 shadow-md">
        <Icon className="text-gray-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:text-gray-900" />
      </div>
      
      {/* Card container */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 pt-8 sm:pt-9 md:pt-10 min-h-[180px] sm:min-h-[200px] md:h-48 transition-all duration-300 hover:bg-gray-800 hover:text-white hover:shadow-lg flex flex-col items-center text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Always Available",
      description:
        "Our team is ready to assist you 24/7 for any relocation need. Whether it’s a last-minute move or a scheduled transfer, we’re always just a call away."
    },
    {
      icon: Package,
      title: "Best Offers",
      description:
        "We provide affordable and transparent pricing with no hidden charges. Get the best value for your move with customized packages that fit your needs and budget."
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description:
        "From local shifting to interstate moves, our services cover every major city across India — ensuring a smooth and hassle-free relocation experience wherever you go."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Punctuality is our promise. Our efficient logistics network ensures your belongings reach their destination safely and right on schedule."
    },
    {
      icon: Shield,
      title: "Secure Shipping",
      description:
        "Your possessions are handled with utmost care. We use high-quality packing materials and GPS-enabled transport to ensure complete safety and real-time tracking."
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced movers and trained professionals take care of every detail — from packing and loading to transport and unpacking — for a stress-free move."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Update isMobile on resize
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 640);
  };

  // Update isMobile on mount and resize
  useEffect(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // Auto-play for mobile slider
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, services.length]);

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
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12">
      {isMobile ? (
        // Mobile Slider
        <div className="relative">
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
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 z-10 ml-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all duration-300 z-10 mr-2"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-yellow-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Grid for non-mobile views
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;