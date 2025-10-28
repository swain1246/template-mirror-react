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
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center animate-partner-marquee">
          {repeatedImages.map((image, index) => (
            <React.Fragment key={index}>
              <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center">
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto object-contain opacity-90 grayscale-0"
                />
              </div>

              {/* Separator */}
              {index !== repeatedImages.length - 1 && (
                <span className="text-gray-300 text-lg sm:text-xl mx-1 sm:mx-2 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
