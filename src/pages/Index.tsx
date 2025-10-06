// src/pages/Index.tsx
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import News from "@/components/News";
import GetAQuote from "@/components/GetAQuote";
import ProcessSteps from "@/components/ProcessSteps";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Provide from "@/components/Provide";
import Partners from "@/components/Partners"; // Add this import

const Index = () => {
  return (
    <Layout>
      {/* Adding a slight margin at the top of the page */}
      <div className="mt-0">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">01</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Services</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, augue nec pretium ornare, ante mauris congue dui.
              </p>
            </div>
            
            {/* Service Cards */}
            <Services />
          </div>
        </section>
        
        {/* News Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">02</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Latest</span>{" "}
                <span className="text-yellow-500">News</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis augue nec pretium ornare, ante mauris congue dui.
              </p>
            </div>
            
            {/* News Cards */}
            <News />
          </div>
        </section>
        
        {/* Get a Quote Section */}
        <GetAQuote />
        
        {/* Process Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">03</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Process</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, augue nec pretium ornare, ante mauris congue dui.
              </p>
            </div>
            
            {/* Process Steps */}
            <ProcessSteps />
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">04</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Team</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, augue nec pretium ornare, ante mauris congue dui.
              </p>
            </div>
            
            {/* Team Members */}
            <Team />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* What We Provide Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">05</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">What We</span>{" "}
                <span className="text-yellow-500">Provide</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, augue nec pretium ornare, ante mauris congue dui.
              </p>
            </div>
            
            {/* Provide Cards */}
            <Provide />
          </div>
        </section>
        
        {/* Partners Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Heading with watermark */}
            <div className="text-center mb-12 relative">
              {/* Watermark background - only behind the heading */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[120px] md:text-[80px] font-bold text-gray-100">06</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Partners</span>
              </h1>
            </div>
            
            {/* Lorem ipsum text */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, augue nec pretium ornare, ante mauris congue dui.
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

export default Index;