
import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Mail } from "lucide-react";
const teamMembers = [
  {
    name: "Rakesh Sharma",
    role: "Founder & Managing Director",
    about:
      "With over 15 years of experience in logistics and relocation, Rakesh founded DRM Packers & Movers with a vision to provide stress-free and professional moving solutions across India.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img1.jpg",
  },
  {
    name: "Priya Verma",
    role: "Operations Manager",
    about:
      "Priya oversees daily operations and ensures every move is executed with precision, safety, and customer satisfaction as the top priority.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img2.jpg",
  },
  {
    name: "Amit Patel",
    role: "Logistics Head",
    about:
      "Amit manages transportation routes, vehicle scheduling, and ensures timely delivery of goods for both local and interstate relocations.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img3.jpg",
  },
  {
    name: "Neha Singh",
    role: "Customer Relations Manager",
    about:
      "Neha leads our client support team, ensuring clear communication, real-time updates, and quick resolutions throughout the relocation process.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img4.jpg",
  },
  {
    name: "Rajesh Mehta",
    role: "Packing Supervisor",
    about:
      "Rajesh specializes in safe packaging techniques using high-quality materials, ensuring that each item reaches its destination without damage.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img5.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "Marketing & Brand Manager",
    about:
      "Sneha drives the company’s marketing strategies, expanding DRM Packers & Movers’ presence through innovative campaigns and customer engagement.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img6.jpg",
  },
  {
    name: "Vikram Yadav",
    role: "Fleet & Driver Lead",
    about:
      "Vikram manages our fleet operations, ensuring vehicles are maintained, drivers are trained, and every delivery meets our safety standards.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img7.jpg",
  },
  {
    name: "Kavita Das",
    role: "Human Resource Manager",
    about:
      "Kavita focuses on employee welfare, recruitment, and training programs to maintain a motivated and efficient workforce at DRM Packers & Movers.",
    image: "https://eyecix.com/html/moverspackers/extra-images/team-list-img8.jpg",
  },
];


const OurTeam = () => {
  return (
    <Layout>
      {/* Adding a slight margin at the top of the page */}
      <div className="mt-0">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[150px] sm:h-[200px] flex items-center"
          style={{ backgroundImage: `url("https://eyecix.com/html/moverspackers/extra-images/subheader-image.jpg")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
            {/* Left Side: Text */}
            <div className="text-center lg:text-left lg:w-1/2 text-white">
              <h5 className="text-lg sm:text-xl font-semibold tracking-wide uppercase text-white">
                Our Team
              </h5>
              {/* Link to Home */}
              <h1 className="text-base sm:text-lg">
                <Link to="/" className="text-white hover:text-yellow-500">
                  Homepage
                </Link>{" "}
                / Our Team
              </h1>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 sm:py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Our Expert Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Meet the people who make it all possible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white px-3 sm:px-4">
                  <h3 className="text-base sm:text-lg font-semibold">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-amber-400">{member.role}</p>
                  <p className="text-xs sm:text-sm text-white mt-2">{member.about}</p>
                  <div className="flex space-x-4 mt-3 sm:mt-3">
                    <a
                      href="#"
                      className="hover:text-amber-400 transition-colors"
                      aria-label={`Follow ${member.name} on Facebook`}
                    >
                      <Facebook size={16} className="sm:size-8" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-amber-400 transition-colors"
                      aria-label={`Follow ${member.name} on Twitter`}
                    >
                      <Twitter size={16} className="sm:size-8" />
                    </a>
                    <a
                      href="mailto:info@example.com"
                      className="hover:text-amber-400 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} className="sm:size-8" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurTeam;
