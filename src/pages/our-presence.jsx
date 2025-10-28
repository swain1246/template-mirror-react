// src/pages/Index.tsx
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Ourpresence = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    "Agra",
    "Ahmedabad",
    "Bangalore",
    "Bhopal",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Delhi",
    "Gurgaon",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Nagpur",
    "Nashik",
    "Patna",
    "Pune",
    "Surat",
    "Thane",
    "Vadodara",
    "Varanasi",
    "Visakhapatnam",
  ];

  // Filter cities based on search term
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="mt-0">
        {/* Hero Section */}
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
                OUR PRESENCE
              </h5>

              {/* Link to Home */}
              <h1>
                <Link to="/" className="text-white-500">
                  Homepage
                </Link>{" "}
                /Our Presence
              </h1>
            </div>
          </div>
        </section>

        {/* Search By Location Section - Matching the screenshot design */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-900">Search By</span>{" "}
                <span className="text-yellow-500">Location</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find our packers and movers services in your city. We provide reliable
                and professional moving services across India.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Search your city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 h-12 text-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
            </div>

            {/* Cities Grid - Matching the screenshot design */}
            <div className="max-w-6xl mx-auto">
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredCities.map((city) => (
                    <Link
                      key={city}
                      to={`/location/${city.toLowerCase()}`}
                      className="bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-800 font-medium py-3 px-4 rounded-md text-center transition-all duration-200 transform hover:scale-105"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No cities found matching "{searchTerm}"
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="mt-4 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>

            
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ourpresence;