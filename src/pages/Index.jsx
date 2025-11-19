import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import News from "@/components/News";
import GetAQuote from "@/components/GetAQuote";
import ProcessSteps from "@/components/ProcessSteps";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Provide from "@/components/Provide";
import Partners from "@/components/Partners";
import Locations from "../components/Locations";

const Index = () => {
  return (
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>

        {/* Services Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with watermark */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  01
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Services</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                At DRM Packers and Movers, we provide safe, fast, and
                hassle-free relocation and logistics solutions tailored to your
                needs. Our expert team ensures smooth handling, timely delivery,
                and complete peace of mind throughout your moving journey.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <Locations />

        {/* Why Choose Us Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading with watermark */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  02
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Why</span>{" "}
                <span className="text-yellow-500">Choose Us</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Your move isn’t just about shifting items — it’s about moving
                your life. At DRM Packers and Movers, we take that
                responsibility seriously. Our team delivers care, precision, and
                efficiency, ensuring every step of your relocation feels smooth
                and stress-free. With us, you move with confidence and comfort.
              </p>
            </div>
            <WhyChooseUs />
          </div>
        </section>

        {/* News Section */}
        {/* <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  02
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Success</span>{" "}
                <span className="text-yellow-500">Story</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Over the years, we’ve successfully completed thousands of moves
                for homes, offices, and industries across India. Our commitment
                to reliability, safety, and customer satisfaction has helped us
                build lasting trust and long-term partnerships.
              </p>
            </div>
            <News />
          </div>
        </section> */}

        {/* Get a Quote Section */}
        <GetAQuote />

        {/* Process Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  03
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Process</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We follow a simple yet effective process designed to make your
                moving experience smooth, safe, and stress-free. From the moment
                you contact us to the final delivery, our expert team ensures
                every step is handled with care and precision.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  03
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Team</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Meet the people who make every move possible. Our team of
                experienced professionals works with dedication, precision, and
                care to ensure your belongings reach their destination safely
                and on time.
              </p>
            </div>
            <Team />
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* What We Provide Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  05
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">What We</span>{" "}
                <span className="text-yellow-500">Provide</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                From careful packing to secure transport, we provide complete
                moving and logistics services designed to make your relocation
                smooth, safe, and stress-free.
              </p>
            </div>
            <Provide />
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-100">
                  06
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Partners</span>
              </h1>
            </div>
            <div className="text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We’re proud to collaborate with trusted partners who help us
                deliver reliable, efficient, and world-class moving and
                logistics solutions across the country.
              </p>
            </div>
            <Partners />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
