import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react"; // Optional: npm install lucide-react

const Locations = () => {
  const navigate = useNavigate();

  const otherDistricts = [
    "Kendrapara",
    "Soro",
    "Boudh",
    "Nayagarh",
    "Phulbani",
    "Angul",
    "Deogarh",
    "Dhenkanal",
    "Talcher",
    "Kalahandi",
    "Jatni",
    "Nabarangpur",
    "Barbil",
    "Rourkela",
    "Jeypore",
    "Paradeep",
    "Khordha",
    "Keonjhar",
    "Bhadrak",
    "Sundargarh",
    "Jajpur",
    "Puri",
    "Malkangiri",
    "Sonepur",
    "Sambalpur",
    "Jagatsinghpur",
    "Baripada",
    "Balasore",
    "Gajapati",
    "Balangir",
  ];

  const bhubaneswarAreas = [
    "Patia",
    "Khandagiri",
    "Jaydev Vihar",
    "Shastri Nagar",
    "Unit-6",
    "Unit-4",
    "Unit-8",
    "Unit-2",
    "Unit-1",
    "Shree Vihar",
    "VSS Nagar",
    "Baramunda",
    "GGP Colony",
    "Kharavela Nagar",
    "Infocity",
    "Jharapada",
    "Nayapalli",
    "Samantarapur",
    "Soubhagya Nagar",
    "BJB Nagar",
    "Kanan Vihar",
    "Acharaya Vihar",
    "Bargarh",
    "Balakati",
    "KIIT",
    "Bapuji Nagar",
    "Mancheswar",
    "Pokhariput",
    "IRC Village",
  ];

  const handleClick = () => navigate("/contact");

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            We Serve Across Odisha
          </h2>
          <p className="mt-2 text-gray-600">
            Click any location to get a free quote
          </p>
        </div>

        {/* Other Districts */}
        <div className="mb-12">
          <div className="mb-10 text-center lg:text-left">
            <h3 className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-bold text-gray-800">
              <MapPin className="w-7 h-7 text-yellow-600" />
              Packers and Movers Services in Other Districts
            </h3>
            <div className="mt-2 w-20 h-1 bg-yellow-500 rounded-full mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherDistricts.map((city) => (
              <button
                key={city}
                onClick={handleClick}
                className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md border border-gray-200 hover:border-yellow-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 truncate">
                  Packers and Movers in <strong>{city}</strong>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bhubaneswar Areas */}
        <div>
          <div className="mb-10 text-center lg:text-left">
            <h3 className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-bold text-gray-800">
              <MapPin className="w-7 h-7 text-blue-600" />
              Packers and Movers Services in Bhubaneswar
            </h3>
            <div className="mt-2 w-20 h-1 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bhubaneswarAreas.map((area) => (
              <button
                key={area}
                onClick={handleClick}
                className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 truncate">
                  Packers and Movers in <strong>{area}</strong>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
