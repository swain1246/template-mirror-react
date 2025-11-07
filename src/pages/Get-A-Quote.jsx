
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import Partners from "../components/Partners";
import { submitMoveRequest } from "@/components/api/moveRequestApi"

const Quote = () => {
  // Form state
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
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[150px] sm:h-[200px] flex items-center"
          style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
            <div className="text-center lg:text-left lg:w-1/2 text-white">
              <h5 className="text-lg sm:text-xl font-semibold tracking-wide uppercase text-white">
                Get A Quote
              </h5>
              <h1 className="text-base sm:text-lg">
                <Link to="/" className="text-white hover:text-yellow-500">
                  Homepage
                </Link>{" "}
                / Get A Quote
              </h1>
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-16 pb-10 sm:pb-0 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 relative">
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] sm:text-[100px] md:text-[120px] font-bold text-gray-100">
                01
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Get</span>{" "}
                <span className="text-yellow-500">A Quote</span>
              </h1>
            </div>
            <div className="text-center max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-16">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
               Get a quick and reliable quote for your move today. Our team ensures safe, on-time,
                and hassle-free relocation with transparent pricing every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Submission Status Messages */}
            {status && (
              <div className="mb-6 text-center bg-green-100 text-green-600 text-sm sm:text-base p-4 rounded-md flex justify-between items-center">
                <span>{status}</span>
                <button onClick={dismissMessage} className="text-green-600 hover:text-green-800">
                  &times;
                </button>
              </div>
            )}
            {error && (
              <div className="mb-6 text-center bg-red-100 text-red-600 text-sm sm:text-base p-4 rounded-md flex justify-between items-center">
                <span>{error}</span>
                <button onClick={dismissMessage} className="text-red-600 hover:text-red-800">
                  &times;
                </button>
              </div>
            )}

            {/* Form Grid */}
            <form onSubmit={handleSubmit} id="quote-form" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Left: Contact Information */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-accent inline-block">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Right: Move Detail */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-accent inline-block">
                  Move Detail
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Requested Move Date
                    </label>
                    <input
                      type="date"
                      name="moveDate"
                      value={formData.moveDate}
                      onChange={handleChange}
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full border border-gray-300 bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* Submit Button */}
            <div className="mt-8 sm:mt-10 text-center">
              <Button
                type="submit"
                form="quote-form"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-md flex items-center justify-center mx-auto"
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
          </div>
        </section>

        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 lg:gap-8">
            {/* Phone */}
            <div className="flex-1 bg-gray-900 text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-amber-500 text-xs sm:text-sm font-semibold flex-1">Contact Us At</h3>
                <Phone className="text-amber-500 ml-2" size={20} />
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <p>+91 8249778018</p>
                {/* <p>+123 456 78</p> */}
              </div>
            </div>
            {/* Email */}
            <div className="flex-1 bg-gray-900 text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-amber-500 text-xs sm:text-sm font-semibold flex-1">Mail Us At</h3>
                <Mail className="text-amber-500 ml-2" size={20} />
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <p>drmpackersandmovers@gmail.com</p>
                {/* <p>Movers@abc.com</p> */}
              </div>
            </div>
            {/* Location */}
            <div className="flex-1 bg-gray-900 text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-amber-500 text-xs sm:text-sm font-semibold flex-1">Find Us At</h3>
                <MapPin className="text-amber-500 ml-2" size={20} />
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <p>DRM PACKERS AND MOVERS,
PLOT NO 1530, SATYAVIHAR, Rasulgarh, MANCHESWAR, BHUBANESWAR, Khurdha, PIN - 751010</p>
                {/* <p>convallis egestas</p> */}
              </div>
            </div>
            {/* Social Media */}
            <div className="flex-1 bg-gray-900 text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-amber-500 text-xs sm:text-sm font-semibold flex-1">Follow Us</h3>
                <Facebook className="text-amber-500 ml-2" size={20} />
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <a href="https://www.facebook.com/p/DRM-Packers-And-Movers-100090288291557/" target="blank">@DRM-Packers-And-Movers</a>
                {/* <p>facebook.com/Movers</p> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-gray-100">02</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Our</span>{" "}
                <span className="text-yellow-500">Partners</span>
              </h1>
            </div>
            <div className="text-center max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-16">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We’re proud to collaborate with trusted partners who help us deliver reliable, efficient,
                 and world-class moving and logistics solutions across the country.
              </p>
            </div>
            <Partners />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Quote;
