
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import React from "react";
import News from "@/components/News";

const Successstory = () => {
    return (
        <Layout>
            {/* Adding a slight margin at the top of the page */}
            <div className="mt-0">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat h-[150px] sm:h-[200px] flex items-center"
                    style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
                        {/* Left Side: Text */}
                        <div className="text-center lg:text-left lg:w-1/2 text-white">
                            <h5 className="text-lg sm:text-xl font-semibold tracking-wide uppercase text-white">
                                Success Story
                            </h5>

                            {/* Link to Home */}
                            <h1 className="text-base sm:text-lg">
                                <Link to="/" className="text-white hover:text-yellow-500">
                                    Homepage
                                </Link>{" "}
                                / Success Story
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="py-10 sm:py-16 bg-white relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Heading with watermark */}
                        <div className="text-center mb-8 sm:mb-12 relative">
                            {/* Watermark background - only behind the heading */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-gray-100">01</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                                <span className="text-gray-900">Success</span>{" "}
                                <span className="text-yellow-500">Story</span>
                            </h1>
                        </div>

                        {/* Description text */}
                        <div className="text-center max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-16">
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                               Over the years, we’ve successfully completed thousands of moves for homes, offices, and industries across India.
                                Our commitment to reliability, safety, and customer satisfaction has helped us build lasting trust and long-term partnerships.
                            </p>
                        </div>

                        {/* News Cards */}
                        <News />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Successstory;
