// src/components/GetAQuote.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { submitMoveRequest } from "./Api/moveRequestApi";
import { Loader2 } from "lucide-react"; // Import the Loader2 icon

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    zip: "",
    address: "",
    moveDate: "",
    residenceType: "",
    fromZip: "",
    fromLocation: "",
    toZip: "",
    toLocation: "",
  });

  // State for submission status, error messages, and loading
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setIsLoading(true);

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill out all required fields (First Name, Last Name, Email).");
      setIsLoading(false);
      return;
    }

    try {
      const result = await submitMoveRequest(formData);
      setStatus("Your enquiry has been submitted successfully!");
      console.log("Response:", result);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        zip: "",
        address: "",
        moveDate: "",
        residenceType: "",
        fromZip: "",
        fromLocation: "",
        toZip: "",
        toLocation: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred while submitting your enquiry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle dismissing the success/error message
  const dismissMessage = () => {
    setStatus("");
    setError("");
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-gray-900">
                <div className="text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
    Get a Quote
  </h2>
  <p className="text-gray-300 mb-4 sm:mb-6 leading-tight text-sm sm:text-base text-center">
  Fill out the form below to get a free quote for your moving needs.<br />
  Our team will get back to you as soon as possible with a competitive price.
</p>
</div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
          
          {/* Left side - form content */}
          <div className="w-full lg:w-7/12">
  
           

            {/* Form Container */}
            <div className="w-full bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              {/* Submission Status Messages */}
              {status && (
                <div className="mb-6 text-center bg-green-100 text-green-600 text-sm sm:text-base p-4 rounded-md flex justify-between items-center">
                  <span>{status}</span>
                  <button onClick={dismissMessage} className="text-green-600 hover:text-green-800 ml-2">
                    &times;
                  </button>
                </div>
              )}
              {error && (
                <div className="mb-6 text-center bg-red-100 text-red-600 text-sm sm:text-base p-4 rounded-md flex justify-between items-center">
                  <span>{error}</span>
                  <button onClick={dismissMessage} className="text-red-600 hover:text-red-800 ml-2">
                    &times;
                  </button>
                </div>
              )}

              {/* Form Grid */}
              <form onSubmit={handleSubmit} id="quote-form" className="space-y-6">
                {/* Contact Information Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-accent inline-block pb-1">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        ZIP
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Move Detail Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-accent inline-block pb-1">
                    Move Detail
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Requested Move Date
                      </label>
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Type Of Residence
                      </label>
                      <input
                        type="text"
                        name="residenceType"
                        value={formData.residenceType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Moving From ZIP
                      </label>
                      <input
                        type="text"
                        name="fromZip"
                        value={formData.fromZip}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Describe From Location
                      </label>
                      <input
                        type="text"
                        name="fromLocation"
                        value={formData.fromLocation}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Moving To ZIP
                      </label>
                      <input
                        type="text"
                        name="toZip"
                        value={formData.toZip}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Describe To Location
                      </label>
                      <input
                        type="text"
                        name="toLocation"
                        value={formData.toLocation}
                        onChange={handleChange}
                        className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    form="quote-form"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 rounded-md flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Submitting...
                      </>
                    ) : (
                      "Get A Quote"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <img
                src="https://eyecix.com/html/moverspackers/extra-images/get-quote-thumb.png"
                alt="Moving service"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;