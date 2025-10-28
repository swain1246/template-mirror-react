// src/pages/About.jsx
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import { Package, Truck, ClipboardCheck } from "lucide-react";
import AboutImage from "../Assets/about-image/aboutus-thumb (1).png";

const About = () => {
  return (
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[150px] sm:h-[200px] md:h-[250px] flex items-center"
          style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Left Side: Text */}
            <div className="text-center lg:text-left lg:w-1/2 text-white">
              <h5 className="text-lg sm:text-xl font-semibold tracking-wide uppercase text-white-400">
                About us
              </h5>

              {/* Link to Home */}
              <h1 className="text-sm sm:text-base">
                <Link to="/" className="text-white-500 hover:text-yellow-400 transition-colors">
                  Homepage
                </Link>{" "}
                / About Us
              </h1>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT SIDE: Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <h5 className="text-sm font-semibold text-accent tracking-wide uppercase">
                Who We Are
              </h5>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                Welcome To <span className="text-yellow-500">Movers</span> &{" "}
                <span className="text-yellow-500">Packers</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                DRM Packers & Movers is a trusted name in professional relocation and logistics services. 
                With years of experience in the moving industry, we specialize in providing seamless, safe, 
                and affordable solutions for residential, corporate, and industrial relocations.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
               Our team of trained experts ensures your belongings are handled with the utmost care — from packing to delivery.
                We believe in reliability, transparency, and customer satisfaction as the pillars of our service.
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                Why Choose DRM Packers & Movers?
              </h4>

              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <ClipboardCheck size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Reliable & Experienced Team – We handle every move with professionalism and precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Safe Packaging Solutions – Premium materials to protect your valuables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Door-to-Door Relocation – Complete support from pickup to destination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardCheck size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Transparent Pricing – No hidden charges or surprise costs.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE: Icons + Image - Made smaller */}
            <div className="relative flex justify-center lg:justify-end mt-8 pr-24 lg:mt-0">
              {/* Icon Line - Hidden on small screens, repositioned on medium */}
              <div className="hidden sm:flex absolute left-0 lg:left-8 flex-col pt-12 items-center gap-4 sm:gap-6 z-20">
                <div className="p-3 sm:p-4 bg-navy-900 border-2 border-yellow-500 rounded-xl shadow-lg">
                  <Package size={24} className="text-yellow-400" />
                </div>
                <div className="w-1 h-8 sm:h-10 bg-yellow-500"></div>
                <div className="p-3 sm:p-4 bg-navy-900 border-2 border-yellow-500 rounded-xl shadow-lg">
                  <Truck size={24} className="text-yellow-400" />
                </div>
                <div className="w-1 h-8 sm:h-10 bg-yellow-500"></div>
                <div className="p-3 sm:p-4 bg-navy-900 border-2 border-yellow-500 rounded-xl shadow-lg">
                  <ClipboardCheck size={24} className="text-yellow-400" />
                </div>
              </div>

              {/* Background Pattern */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-10"
                style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/images/project-grid-transparent.png")` }}
              ></div>
              
              {/* Main Image - Made smaller */}
              <img
                src={AboutImage} 
                alt="About Us"
                className="relative z-10 w-64 sm:w-72 md:w-80 h-auto object-cover "
              />
            </div>
          </div>
        </div>
   
        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with watermark */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-gray-100">01</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Services</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                At DRM Packers and Movers, we provide safe, fast, and hassle-free relocation and logistics 
                solutions tailored to your needs. Our expert team ensures smooth handling, 
                timely delivery, and complete peace of mind throughout your moving journey.
              </p>
            </div>
            
            {/* Service Cards */}
            <Services />
          </div>
        </section>
        
        {/* Counter Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20"
          style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Counter Content */}
          <div className="relative z-10 w-full">
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-center px-4">
              <li className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
                <div className="moverspackers-counter-wrap">
                  <i className="flaticon moverspackers-boxes text-3xl sm:text-4xl mb-2 text-yellow-400"></i>
                  <div className="moverspackers-counter-text">
                    <div className="numscroller text-2xl sm:text-3xl text-white font-bold">
                      110
                    </div>
                    <span className="block mt-1 text-white text-xs sm:text-sm">People in Team</span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
                <div className="moverspackers-counter-wrap">
                  <i className="flaticon moverspackers-transport text-3xl sm:text-4xl mb-2 text-yellow-400"></i>
                  <div className="moverspackers-counter-text">
                    <div className="numscroller text-2xl sm:text-3xl text-white font-bold">
                      390 +
                    </div>
                    <span className="block mt-1 text-white text-xs sm:text-sm">Projects Done</span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
                <div className="moverspackers-counter-wrap">
                  <i className="flaticon moverspackers-transport-1 text-3xl sm:text-4xl mb-2 text-yellow-400"></i>
                  <div className="moverspackers-counter-text">
                    <div className="numscroller text-2xl sm:text-3xl text-white font-bold">
                      250 +
                    </div>
                    <span className="block mt-1 text-white text-xs sm:text-sm">Moved Houses</span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
                <div className="moverspackers-counter-wrap">
                  <i className="flaticon moverspackers-people-1 text-3xl sm:text-4xl mb-2 text-yellow-400"></i>
                  <div className="moverspackers-counter-text">
                    <div className="numscroller text-2xl sm:text-3xl text-white font-bold">
                      9500
                    </div>
                    <span className="block mt-1 text-white text-xs sm:text-sm">Satisfied Client</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with watermark */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-gray-100">02</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Team</span>{" "}
                <span className="text-yellow-500">Members</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Our dedicated team is the backbone of DRM Packers & Movers. Each member is professionally trained and committed to delivering quality service with a personal touch.
              </p>
            </div>
            
            {/* Team Members */}
            <Team />
          </div>
        </section>
        
        {/* Partners Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with watermark */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-gray-100">03</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Partners</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
               We’re proud to collaborate with some of the most trusted logistics
                and infrastructure partners across India. Our partnerships enable us to offer fast, safe,
                 and efficient relocation services at scale.
              </p>
            </div>
            
            {/* Partners Slider */}
            <Partners />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;