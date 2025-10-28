// src/components/GetAQuote.tsx
import React from "react";

const GetAQuote = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
          {/* Left side - form content without background */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-white">Get a Quote</h2>
            <p className="text-gray-300 mb-2 leading-tight text-sm sm:text-base">
              Fill out the form below to get a free quote for your moving needs.
            </p>
            <p className="text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-tight text-sm sm:text-base">
              Our team will get back to you as soon as possible with a
              competitive price.
            </p>

            <form className="space-y-4 sm:space-y-5">
              {/* Three columns layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-11">
                {/* Column 1 */}
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Number"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="From Zip"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Type Of Move"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="To Zip"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base rounded"
                    />
                  </div>
                </div>

                {/* Column 3 - Square textarea */}
                <div className="h-full md:h-auto">
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full h-full min-h-[180px] md:min-h-[200px] px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-300 placeholder-gray-400 text-sm sm:text-base resize-none rounded"
                  ></textarea>
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-8 sm:mt-10 md:mt-12">
                <button
                  type="submit"
                  className="border border-gray-600 text-gray-300 text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 transition duration-300 hover:bg-yellow-500 hover:text-gray-900 rounded"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          {/* Right side - image with slightly increased size */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative lg:-bottom-4 xl:-bottom-8">
              <img
                src="https://eyecix.com/html/moverspackers/extra-images/get-quote-thumb.png"
                alt="Moving service"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;