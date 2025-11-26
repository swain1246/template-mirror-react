// src/components/Testimonials.tsx
import { useState, useEffect } from 'react';

// Reusable Default Profile Icon (Centered & Styled Exactly Like Real Photos)
const DefaultProfileIcon = () => (
  <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 border-4 border-yellow-400 flex items-center justify-center shadow-md">
    <svg
      className="w-12 h-12 text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aditya Pratap Nayak",
      route: "Bhubaneswar → Berhampur",
      content: "Very good and budget-friendly service. All household items reached Berhampur in perfect condition. Highly appreciate their effort.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQENPFV-z-ue1w/profile-displayphoto-shrink_200_200/B56ZaE7_eaHAAc-/0/1745987042487?e=1766016000&v=beta&t=hn3LPnzC8xOwld0dvS_nhh6DWSAtrycQq9JkkEdh_JA"
    },
    { id: 2, name: "Subhankar Mishra", route: "Baleswar → Puri", content: "A very reliable team! The packing, loading, and delivery were done on time. My belongings reached Puri without any issues. Great experience!", image: null },
    { id: 3, name: "Rangalat Mishra", route: "Puri → Maur Hanj", content: "Professional and punctual service. The team kept me updated throughout the transit. Everything was delivered safely. Very satisfied!", image: null },
    { id: 4, name: "Ramesh Kumar Choudhary", route: "Bhubaneswar → Bangalore", content: "Top-class service! The team packed everything neatly and ensured safe delivery in Bangalore. Hassle-free and trustworthy movers.", image: null },
    { id: 5, name: "Tanmaya Beaura", route: "Sambalpur → Bhubaneswar", content: "Fantastic experience! My goods were transported securely from Sambalpur to Bhubaneswar. The staff was courteous and efficient.", image: null },
    { id: 6, name: "Budheswar Mahato", route: "Bhadrak → Bangalore", content: "Very good and budget-friendly service. All household items reached Bangalore in perfect condition. Highly appreciate their effort.", image: null },
    { id: 7, name: "Parsuram Das", route: "Cuttack → Ranchi", content: "Smooth and stress-free relocation. The team ensured proper packing and timely delivery to Ranchi. Excellent job!", image: null },
    { id: 8, name: "Sailesree Kumar Pradhan", route: "Bhubaneswar → Ranchi", content: "Reliable and well-organized service. The entire shifting process was quick and safe. I’m happy with their professionalism.", image: null },
    { id: 9, name: "Suresh Chuhan", route: "Jatni → Visakhapatnam", content: "Great experience! The move from Jatni to Vizag was handled very carefully. All items were delivered intact and on time.", image: null },
    { id: 10, name: "Brajalal Pradhan", route: "Badmal → Sambalpur", content: "Very efficient team. My goods were transported from Badmal to Sambalpur without any hassle. Good service overall.", image: null },
    { id: 11, name: "Pradip Kumar Das", route: "Sundarpada → Hyderabad", content: "Professional packers and movers! The shifting was very smooth, and my items reached Hyderabad safely. Great value for money.", image: null },
    { id: 12, name: "Jitendra Sahu", route: "Bhubaneswar → Mumbai (Scooty)", content: "Quick and safe delivery of my scooty from Bhubaneswar to Mumbai. No scratches, no delays. Very dependable service!", image: null },
    { id: 13, name: "Bimal Kumar Sahu", route: "Kholikot → Chennai", content: "Excellent packaging quality! All household items reached Chennai perfectly. Truly impressed with their dedication.", image: null },
    { id: 14, name: "Pravin Paroche", route: "Bhubaneswar → Jhansi", content: "Highly satisfied with the service. My belongings were delivered to Jhansi on time and without any damage. Great coordination by the team.", image: null },
    { id: 15, name: "Amit Kumar Jha", route: "Bhubaneswar → Bangalore", content: "Excellent service! My shift from Bhubaneswar to Bangalore was handled smoothly and professionally. All items reached safely without any damage. Highly recommended!", image: null },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - visibleCards ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Responsive visible cards
  const getVisibleCards = () => (typeof window === 'undefined' ? 1 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCards();
      setVisibleCards(newVisible);
      setCurrentIndex(prev => Math.min(prev, testimonials.length - newVisible));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex(currentIndex < testimonials.length - visibleCards ? currentIndex + 1 : 0);
  const prevSlide = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : testimonials.length - visibleCards);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow">
                    {/* Quote */}
                    <div className="mb-6">
                      <span className="text-7xl text-yellow-500 font-serif opacity-30 leading-none">“</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-grow mb-8">
                      {testimonial.content}
                    </p>

                    {/* Profile Image OR Icon */}
                    <div className="mb-6">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-yellow-400 shadow-md"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      {/* Hidden fallback icon shown only if image fails or null */}
                      <div className={testimonial.image ? "hidden" : ""}>
                        <DefaultProfileIcon />
                      </div>
                    </div>

                    {/* Name & Route */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-yellow-600 font-semibold text-sm md:text-base mt-2">
                        {testimonial.route}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-yellow-50 transition z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-yellow-50 transition z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: Math.max(1, testimonials.length - visibleCards + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full ${
                  idx === currentIndex ? 'bg-yellow-500 w-10 h-3' : 'bg-gray-300 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg font-medium">
            Trusted by hundreds of families across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;