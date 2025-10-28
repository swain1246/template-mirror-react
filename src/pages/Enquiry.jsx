import { useState } from "react";
import Layout from "@/components/Layout"; // ✅ Assuming you have a Layout wrapper
import { Button } from "@/components/ui/button"; // ✅ Using your existing button component
import { Link } from "react-router-dom";
const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    service: "",
    pickupLocation: "",
    dropLocation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <Layout>
        <section
                  className="relative bg-cover bg-center bg-no-repeat h-[150px] sm:h-[200px] md:h-[250px] flex items-center"
                  style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
        
                  <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Side: Text */}
                    <div className="text-center lg:text-left lg:w-1/2 text-white">
                      <h5 className="text-lg sm:text-xl font-semibold tracking-wide uppercase text-white-400">
                        ENQUIRY
                      </h5>
        
                      {/* Link to Home */}
                      <h1 className="text-sm sm:text-base">
                        <Link to="/" className="text-white-500 hover:text-yellow-400 transition-colors">
                          Homepage
                        </Link>{" "}
                        /  Enquiry
                      </h1>
                    </div>
                  </div>
                </section>
        
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center mb-12 relative">
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[120px] md:text-[80px] font-bold text-gray-100">
                01
              </span>
              <h1 className="text-3xl md:text-4xl font-bold relative z-10">
                <span className="text-gray-900">Get a free</span>{" "}
                <span className="text-yellow-500"> Enquiry</span>
              </h1>
            </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email (optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Enter your city"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Enter your address"
              />
            </div>

            {/* List of Services */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Select Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
              >
                <option value="">-- Choose a service --</option>
                <option value="house-shifting">House Shifting</option>
                <option value="office-relocation">Office Relocation</option>
                <option value="car-transport">Car Transport</option>
                <option value="bike-transport">Bike Transport</option>
                <option value="storage">Storage Services</option>
                <option value="packing-unpacking">Packing & Unpacking</option>
              </select>
            </div>

            {/* Pick-up & Drop Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Pick-up Location *</label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="Enter pick-up location"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Drop Location *</label>
                <input
                  type="text"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="Enter drop location"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-2 rounded-lg">
                Submit Enquiry
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Enquiry;
