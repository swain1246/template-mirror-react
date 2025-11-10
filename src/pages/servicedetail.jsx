// src/pages/Index.tsx
import Layout from "@/components/Layout";
import { Link } from "react-router-dom"; // ← Add this import
import { Search } from "lucide-react";
import React, { useState } from "react";




const Servicedetail = () => {

    const services = [
        {
            id: 1,
            title: "Loading",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img1.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Moving Locally",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img2.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Storage",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img3.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Commercial Relocation",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img4.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Corporate Relocation",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img5.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 6,
            title: "Parking",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img6.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        {
            id: 7,
            title: "Packaging",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img7.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },

        {
            id: 8,
            title: "Ware Housing",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img8.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 9,
            title: "Ware Housing",
            image: "https://eyecix.com/html/moverspackers/extra-images/services-grid-img8.jpg",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ];

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

                                Services Grid
                            </h5>

                            {/* Link to Home */}
                            <h1>
                                <Link to="/" className="text-white-500">
                                    Homepage
                                </Link>{" "}
                                /Services Grid
                            </h1>
                        </div>


                    </div>
                </section>




            </div>
            <div className="min-h-screen  text-white font-sans">
                {/* Header */}


                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-5 py-10">
                    {/* Search Section */}
                    <div className="mb-10">

                        <div className="mb-10">
                            <div className="relative  w-64">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pr-12 pl-4 py-1 bg-gray-200 border border-gray-300 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                                />
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1  hover:bg-yellow-500 transition-all duration-300"
                                >
                                    <Search className="w-5 h-5 text-gray-700 hover:text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        {/* Popular Posts Sidebar */}
                        <div className="lg:col-span-1">
                            <div className=" p-5 rounded-lg">
                                <h3 className="text-black text-lg font-semibold mb-5 pb-2 border-b-2 border-amber-500">
                                    Popular Post
                                </h3>

                                {/* Post 1 */}
                                <div className="flex items-start gap-3 mb-5 p-2 rounded hover:bg-gray-50 transition">
    <img
      src="https://eyecix.com/html/moverspackers/extra-images/widget-popular-post-img1.jpg"
      alt="Post 1"
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <p className="text-sm font-semibold text-gray-800 leading-snug">
        Top 10 Tips for a Stress-Free Move
      </p>
      <span className="text-xs text-gray-400">Oct 15, 2025</span>
    </div>
  </div>

  {/* Post 2 */}
  <div className="flex items-start gap-3 mb-5 p-2 rounded hover:bg-gray-50 transition">
    <img
      src="https://eyecix.com/html/moverspackers/extra-images/widget-popular-post-img2.jpg"
      alt="Post 2"
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <p className="text-sm font-semibold text-gray-800 leading-snug">
        How to Choose the Right Packers & Movers
      </p>
      <span className="text-xs text-gray-400">Oct 10, 2025</span>
    </div>
  </div>

  {/* Post 3 */}
  <div className="flex items-start gap-3 mb-5 p-2 rounded hover:bg-gray-50 transition">
    <img
      src="https://eyecix.com/html/moverspackers/extra-images/widget-popular-post-img3.jpg"
      alt="Post 3"
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <p className="text-sm font-semibold text-gray-800 leading-snug">
        Office Relocation Checklist You Must Follow
      </p>
      <span className="text-xs text-gray-400">Oct 5, 2025</span>
    </div>
  </div>

  {/* Post 4 */}
  <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 transition">
    <img
      src="https://eyecix.com/html/moverspackers/extra-images/widget-popular-post-img4.jpg"
      alt="Post 4"
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <p className="text-sm font-semibold text-gray-800 leading-snug">
        Safe Packing Tips for Long-Distance Moves
      </p>
      <span className="text-xs text-gray-400">Sep 30, 2025</span>
    </div>
  </div>
                            </div>


                            <div className="widget widget_categories  p-6 rounded-lg">
                                <h2 className="moverspackers-widget-heading moverspackers-color text-black text-xl font-bold mb-4 border-b-2 border-amber-500 pb-2">
                                    Cetagories
                                </h2>

                                <div className="space-y-2">
                                    <div className="bg-slate-100 p-3  hover:bg-orange-400 transition-colors duration-200">
                                        <a href="#" className="text-black text-sm block w-full">
                                            Commercial Cleaning
                                        </a>
                                    </div>

                                    <div className="bg-slate-100 p-3 hover:bg-orange-400 transition-colors duration-200">
                                        <a href="#" className="text-black text-sm block w-full">
                                            Ground Maintance
                                        </a>
                                    </div>

                                    <div className="bg-slate-100 p-3  hover:bg-orange-400 transition-colors duration-200">
                                        <a href="#" className="text-black text-sm block w-full">
                                            Moving
                                        </a>
                                    </div>

                                    <div className="bg-slate-100 p-3  hover:bg-orange-400 transition-colors duration-200">
                                        <a href="#" className="text-black text-sm block w-full">
                                            Uncetagorized
                                        </a>
                                    </div>

                                    <div className="bg-white p-3  hover:bg-orange-600 transition-colors duration-200">
                                        <a href="#" className="text-balack text-sm block w-full">
                                            Window Cleaning
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Services Grid - 3 Items Per Row */}
                        <div className="lg:col-span-3">
                            <div className="px-[5%] py-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.map((service) => (
                                        <div key={service.id} className="relative aspect-square overflow-hidden group">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 text-center transition-all duration-300 group-hover:bg-opacity-40">
                                                <div className="text-yellow-400 mb-2 transition-all duration-300 group-hover:text-white group-hover:transform group-hover:-translate-y-4">
                                                    {service.icon}
                                                </div>
                                                <div className="h-0.5 bg-white w-10 mb-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                                                <h3 className="text-xl font-bold text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Servicedetail;