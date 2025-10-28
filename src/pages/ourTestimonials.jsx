// src/pages/Index.tsx
import Layout from "@/components/Layout";
import { Link } from "react-router-dom"; // ← Add this import

import Testimonials from "@/components/Testimonials";

const Ourtestimonoal = () => {

    

    return (
        <Layout>
            {/* Adding a slight margin at the top of the page */}
            <div className="mt-0">
                {/* Hero Section */}
                {/* <Hero /> */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat h-[200px] flex items-center"
                    style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-10">
                        {/* Left Side: Text */}
                        <div className="text-center lg:text-left lg:w-1/2 text-white">
                            <h5 className="text-xl font-semibold tracking-wide uppercase text-white-400">

                                TESTIMONIAL
                            </h5>

                            {/* Link to Home */}
                            <h1>
                                <Link to="/" className="text-white-500">
                                    Homepage
                                </Link>{" "}
                                /Testimonial
                            </h1>
                        </div>


                    </div>
                </section>

                
                        
<div className="py-12">

<Testimonials />
</div>

            </div>
         
        </Layout>
         
    );
};

export default Ourtestimonoal;