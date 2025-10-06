import React from "react";

const Partners = () => {
  const partnerImages = [
    "https://eyecix.com/html/moverspackers/extra-images/partner-logo-1.png",
    "https://eyecix.com/html/moverspackers/extra-images/partner-logo-2.png",
    "https://eyecix.com/html/moverspackers/extra-images/partner-logo-3.png",
    "https://eyecix.com/html/moverspackers/extra-images/partner-logo-4.png",
  ];

  // Duplicate logos for smooth infinite scroll
  const repeatedImages = [...partnerImages, ...partnerImages, ...partnerImages];

  return (
    <section className="w-full bg-white py-12 px-16 md:px-28 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center animate-partner-marquee">
          {repeatedImages.map((image, index) => (
            <React.Fragment key={index}>
              <div className="flex-shrink-0 mx-8 flex items-center">
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="h-6 md:h-8 lg:h-10 object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Separator */}
              {index !== repeatedImages.length - 1 && (
                <span className="text-gray-300 text-xl mx-2 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
