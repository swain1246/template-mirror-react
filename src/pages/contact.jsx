import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";

const Contact = () => {
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT SIDE — Form */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="Type here"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="Type here"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Moving Date:
                    </label>
                    <input
                      type="date"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Move From:
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 text-sm font-normal">
                      Move To:
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full h-10 px-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <label className="block text-gray-700 text-sm font-normal">
                    Message:
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 border border-gray-300 bg-slate-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 resize-y"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-slate-500 text-white text-sm font-medium hover:bg-amber-300 transition-colors"
                  >
                    Send Now
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE — Contact Info */}
              <div className="space-y-6 w-full lg:w-64">
                <div className="bg-gray-900 text-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-amber-500 text-sm font-semibold flex-1">
                      Contact Us At
                    </h3>
                    <Phone className="text-amber-500 ml-2" size={20} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
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
                    <p>info@drmmovers.com</p>
                    <p>support@drmmovers.com</p>
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
                    <p>123, MG Road, Andheri East</p>
                    <p>Mumbai, Maharashtra, 400093</p>
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

        {/* Section 2 — Find Us */}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6657844053415!2d72.85616447465032!3d19.097403252642077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82d8f3170df%3A0xd1b1ee38a3e50a37!2sAndheri%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1698041323874!5m2!1sen!2sin"
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
