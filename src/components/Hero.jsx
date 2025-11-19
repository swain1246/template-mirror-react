// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-[85vh] mt-0 flex items-stretch overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://eyecix.com/html/moverspackers/extra-images/banner-img1.jpg')`,
        }}
      ></div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[85vh]">
          {/* Left Column - Text Section */}
          <div className="relative h-full">
            {/* Background Pattern Image */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60"
              style={{
                backgroundImage: `url('https://eyecix.com/html/moverspackers/images/banner-icon.png')`,
              }}
            ></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-700/80"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12">
              {/* Heading - Animation from top */}
              <div className="animate-fadeInDown">
                <h1 className="text-white leading-tight mb-6">
                  <span className="text-base sm:text-lg md:text-xl font-medium block mb-2">We’re Top</span>
                  <span className="text-1xl sm:text-2xl md:text-3xl lg:text-2xl font-medium tracking-wider block mb-2">
                    <span className="text-white">Packers and Movers in <span className="text-yellow-300">Bhubaneswar</span></span>{" "}
                    {/* <span className="text-yellow-300">LOGISTIC</span> */}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Moving Homes and Businesses Across India</span>
                </h1>
              </div>

              {/* Paragraph - Animation from back */}
              <div className="animate-fadeIn">
                <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl">
                    We make your moving experience smooth, safe, and stress-free.
                  Whether you’re relocating your home, office, or vehicle, our
                  professional team ensures timely delivery with complete care and
                  transparency. Move smart, move with DRM Packers & Movers!
                </p>
              </div>

              {/* Buttons - Animation from bottom */}
              <div className="animate-fadeInUp flex flex-wrap gap-3 sm:gap-4">
                <Button 
                onClick={handleContactClick}
                  className="bg-transparent border-2 border-white text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 font-bold px-4 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 rounded-none transition-all duration-1000 text-sm sm:text-base"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Button>
                {/* <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-none transition-all duration-1000 text-sm sm:text-base"
                >
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full w-full overflow-hidden hidden lg:block">
            <img
              src="https://eyecix.com/html/moverspackers/extra-images/banner-thumb-1.png"
              alt="Professional delivery man"
              className="absolute top-10 left-0 w-full h-full object-contain object-center"
              style={{
                clipPath: "inset(0% 0% 10% 8%)",
                transform: "scale(1.19)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;