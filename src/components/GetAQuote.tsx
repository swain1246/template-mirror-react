// src/components/GetAQuote.tsx
import React from "react";

const GetAQuote = () => {
  return (
    <section className="relative py-0 bg-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          {/* Left side - form content without background */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl font-bold mb-10 text-white">Get a Quote</h2>
            <p className="text-gray-300 mb-2 leading-tight">
              Fill out the form below to get a free quote for your moving needs.
            </p>
            <p className="text-gray-300 mb-10 leading-tight">
              Our team will get back to you as soon as possible with a
              competitive price.
            </p>

            <form className="space-y-5">
              {/* Three columns layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-11">
                {/* Column 1 */}
                <div className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Number"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="From Zip"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-5">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Type Of Move"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="To Zip"
                      className="w-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                {/* Column 3 - Square textarea */}
                <div className="h-full">
                  <textarea
                    placeholder="Your Message"
                    className="w-full h-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-12">
                <button
                  type="submit"
                  className="border border-gray-600 text-gray-300 text-sm py-2 px-6 transition duration-300 hover:bg-yellow-500 hover:text-gray-900"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          {/* Right side - image with slightly increased size */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative lg:-bottom-8">
              <img
                src="https://eyecix.com/html/moverspackers/extra-images/get-quote-thumb.png"
                alt="Moving service"
                className="w-11/12 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
