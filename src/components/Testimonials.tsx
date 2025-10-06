// src/components/Testimonials.tsx
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mabel Parker",
      designation: "Designer",
      content: "The team provided exceptional service during my recent move. They were professional, efficient, and handled all my belongings with great care. I highly recommend their services to anyone looking for a stress-free moving experience.",
      image: "https://eyecix.com/html/moverspackers/extra-images/testimonial-img1.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      designation: "Business Owner",
      content: "I've used several moving companies in the past, but none compare to the level of service I received here. From start to finish, everything was handled perfectly. Will definitely use them again!",
      image: "https://eyecix.com/html/moverspackers/extra-images/testimonial-img1.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      designation: "Home Manager",
      content: "The attention to detail and customer service was outstanding. They made what could have been a stressful day completely worry-free. I can't thank them enough for their hard work and dedication.",
      image: "https://eyecix.com/html/moverspackers/extra-images/testimonial-img1.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://eyecix.com/html/moverspackers/extra-images/testimonial-back-img.jpg')" }}
    >
      {/* Transparent overlay with reduced opacity */}
      <img 
        src="https://eyecix.com/html/moverspackers/images/testimonial-transparnt.png"
        alt="Transparent overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-50" // Changed opacity to 50%
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Our Testimonials</h1>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Slides */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 text-center text-white px-10"
                  >
                    <div className="mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white"
                      />
                    </div>
                    <p className="text-xl mb-6 italic">"{testimonial.content}"</p>
                    <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                    <p className="text-lg">{testimonial.designation}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;