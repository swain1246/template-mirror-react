// src/pages/Contact.tsx (or wherever your Contact page lives)

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Navigation, Loader2 } from "lucide-react";
import { submitMoveRequest } from "@/components/Api/moveRequestApi"; // Adjust path if needed

const Contact = () => {
  // Form state - using same keys as GetAQuote for API consistency
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", // We'll split name if user enters full name
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
    message: "", // Extra field for contact page
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for "Name" field → split into firstName & lastName
    if (name === "fullName") {
      const parts = value.trim().split(" ");
      setFormData((prev) => ({
        ...prev,
        firstName: parts[0] || "",
        lastName: parts.slice(1).join(" ") || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit handler using same API as GetAQuote
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setIsLoading(true);

    // Basic required validation
    if (!formData.firstName || !formData.email) {
      setError("Please provide at least your name and email.");
      setIsLoading(false);
      return;
    }

    try {
      // Send exactly the same payload structure as GetAQuote
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country || "India",
        zip: formData.zip,
        address: formData.address,
        moveDate: formData.moveDate,
        residenceType: formData.residenceType,
        fromZip: formData.fromZip,
        fromLocation: formData.fromLocation || formData.fromZip,
        toZip: formData.toZip,
        toLocation: formData.toLocation || formData.toZip,
        message: formData.message,
        // Optional: include message in a custom field if your backend supports it
        // Or just ignore it – it won't break anything
      };

      // await submitMoveRequest(payload);
      setStatus(
        "Thank you! Your message has been sent successfully. We'll get back to you soon."
      );

      // Reset form
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
        message: "",
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const dismissMessage = () => {
    setStatus("");
    setError("");
  };

  return (
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[200px] flex items-center"
          style={{
            backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="text-center lg:text-left lg:w-1/2 text-white">
              <h5 className="text-xl font-semibold tracking-wide uppercase text-white-400">
                CONTACT
              </h5>
              <h1>
                <Link to="/" className="text-white-500">
                  Homepage
                </Link>{" "}
                / Contact
              </h1>
            </div>
          </div>
        </section>

        {/* Section 1 — Get In Touch */}
        <section className="pt-16 pb-0 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 relative">
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[120px] md:text-[80px] font-bold text-gray-100">
                01
              </span>
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Get</span>{" "}
                <span className="text-yellow-500">In Touch</span>
              </h1>
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600">
                Have questions or need a moving quote? Our friendly team at{" "}
                <strong>DRM Packers and Movers</strong> is here to help you plan
                your relocation smoothly. Reach out today — we’re always ready
                to move your world with care and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-normal text-gray-800">
                Let’s get connected — share your moving details and we’ll get
                back to you with a customized plan and quotation.
              </h2>
            </div>

            {/* Success / Error Messages */}
            {status && (
              <div className="mb-6 max-w-4xl mx-auto text-center bg-green-100 text-green-700 p-4 rounded-md flex justify-between items-center">
                <span>{status}</span>
                <button
                  onClick={dismissMessage}
                  className="text-green-700 hover:text-green-900 text-xl"
                >
                  &times;
                </button>
              </div>
            )}
            {error && (
              <div className="mb-6 max-w-4xl mx-auto text-center bg-red-100 text-red-700 p-4 rounded-md flex justify-between items-center">
                <span>{error}</span>
                <button
                  onClick={dismissMessage}
                  className="text-red-700 hover:text-red-900 text-xl"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT SIDE — Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name → splits into firstName & lastName */}
                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={`${formData.firstName} ${formData.lastName}`.trim()}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Moving Date
                      </label>
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]} // This blocks past dates
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Move From (City/ZIP)
                      </label>
                      <input
                        type="text"
                        name="fromLocation"
                        value={formData.fromLocation}
                        onChange={handleChange}
                        placeholder="e.g. Bhubaneswar, 751010"
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-gray-700 text-sm font-normal">
                        Move To (City/ZIP)
                      </label>
                      <input
                        type="text"
                        name="toLocation"
                        value={formData.toLocation}
                        onChange={handleChange}
                        placeholder="e.g. Delhi, 110001"
                        className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your move or any questions..."
                      className="w-full px-4 py-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded transition-colors flex items-center gap-2 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        "Send Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* RIGHT SIDE — Contact Info (unchanged) */}
              <div className="space-y-6 w-full lg:w-64">
                <div className="bg-gray-900 text-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-amber-500 text-sm font-semibold flex-1">
                      Contact Us At
                    </h3>
                    <Phone className="text-amber-500 ml-2" size={20} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p>+91 8249778018</p>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-amber-500 text-sm font-semibold flex-1">
                      Mail Us At
                    </h3>
                    <Mail className="text-amber-500 ml-2" size={20} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p>drmpackersandmovers@gmail.com</p>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-amber-500 text-sm font-semibold flex-1">
                      Find Us At
                    </h3>
                    <MapPin className="text-amber-500 ml-2" size={20} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p>
                      DRM PACKERS AND MOVERS,
                      <br />
                      PLOT NO 1530, SATYAVIHAR,
                    </p>
                    <p>
                      Rasulgarh, MANCHESWAR, BHUBANESWAR,
                      <br />
                      Khurdha, PIN - 751010
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-amber-500 text-sm font-semibold flex-1">
                      Moving Services
                    </h3>
                    <Navigation className="text-amber-500 ml-2" size={20} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Available 24/7</p>
                    <p>All India Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Find Us (Map) */}
        <section className="pt-16 pb-0 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 relative">
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[120px] md:text-[80px] font-bold text-gray-100">
                02
              </span>
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Find</span>{" "}
                <span className="text-yellow-500">Us At</span>
              </h1>
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600">
                Visit our nearest office or contact us online — our relocation
                experts are always ready to assist you. With multiple branches
                across India, we ensure prompt service and personalized moving
                solutions wherever you are.
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5186.714601081376!2d85.86803804496721!3d20.309686674725402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a3f3fffffff%3A0xab42b8e8b31fc49f!2sDRM%20packers%20and%20movers!5e1!3m2!1sen!2sin!4v1762497918288!5m2!1sen!2sin"
                width="100%"
                height="350"
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg border-0 w-full max-w-5xl"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
