// src/components/Header.tsx
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsTeamOpen(true), 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsTeamOpen(false), 300);
  };

  return (
    <>
      {/* Top Bar — hidden on small screens */}
      <div className="hidden md:block bg-gray-800 text-white py-3 text-sm">
        <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Contact"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={14} className="text-accent" />
              <span>Contact Us</span>
            </a>
            <a
              href="/Terms"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <FileText size={14} className="text-accent" />
              <span>Terms & Conditions</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-center md:text-left">
            <a
              href="https://maps.app.goo.gl/YLZyhnRDipzkNuRE8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer hover:text-accent transition"
            >
              <MapPin size={14} className="text-accent" />
              <span>Bhubaneswar, Odisha, IND</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-gray-500">|</span>
              <Phone size={14} className="text-accent" />
              <span><a href="tel:+91 8249778018">+91 8249778018</a></span>
              <span className="text-gray-500">|</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <span><a href="mailto:drmpackersandmovers@gmail.com">drmpackersandmovers@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b-4 border-yellow-500 py-3 relative z-50">
        <div className="container mx-auto px-4 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images.png"
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Hamburger Icon - Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm font-semibold hover:text-accent transition-colors ${
                isActiveLink("/") ? "border-b-2 border-accent pb-1" : ""
              }`}
            >
              HOME
            </Link>

            {/* About Dropdown */}
            <li
              className="relative list-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1 ${
                  isActiveLink("/About") ||
                  isActiveLink("/OurTeam") ||
                  isActiveLink("/Faq") ||
                  isActiveLink("/Ourtestimonoal") ||
                  isActiveLink("/Our-presence")
                    ? "border-b-2 border-accent pb-1"
                    : ""
                }`}
              >
                ABOUT US
                <ChevronDown size={14} />
              </button>

              {isTeamOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2 rounded-lg z-50">
                  {[
                    { path: "/About", label: "About Us" },
                    { path: "/OurTeam", label: "Our Team" },
                    { path: "/Faq", label: "FAQ" },
                    { path: "/Ourtestimonoal", label: "Testimonials" },
                    { path: "/Our-presence", label: "Our Presence" },
                    { path: "/Enquiry", label: "Enquiry" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`block px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors ${
                          isActiveLink(path)
                            ? "bg-accent text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <Link
              to="/Servicedetail"
              className={`text-sm font-semibold hover:text-accent transition-colors ${
                isActiveLink("/Servicedetail")
                  ? "border-b-2 border-accent pb-1"
                  : ""
              }`}
            >
              SERVICES
            </Link>

            <Link
              to="/Successstory"
              className={`text-sm font-semibold hover:text-accent transition-colors ${
                isActiveLink("/Successstory")
                  ? "border-b-2 border-accent pb-1"
                  : ""
              }`}
            >
              SUCCESS STORY
            </Link>

            <Link
              to="/Contact"
              className={`text-sm font-semibold hover:text-accent transition-colors ${
                isActiveLink("/Contact") ? "border-b-2 border-accent pb-1" : ""
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/Quote">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 text-sm">
                Get A Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
            <nav className="flex flex-col gap-3 px-6 py-4 text-sm font-semibold">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition ${
                  isActiveLink("/") ? "text-accent" : "text-foreground"
                }`}
              >
                HOME
              </Link>

              {/* About Accordion in Mobile */}
              <div>
                <button
                  onClick={() => setIsTeamOpen(!isTeamOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-accent"
                >
                  ABOUT US{" "}
                  <ChevronDown
                    size={14}
                    className={`${isTeamOpen ? "rotate-180" : ""} transition`}
                  />
                </button>
                {isTeamOpen && (
                  <ul className="pl-4 mt-2 flex flex-col gap-1">
                    {[
                      { path: "/About", label: "About Us" },
                      { path: "/OurTeam", label: "Our Team" },
                      { path: "/Faq", label: "FAQ" },
                      { path: "/Ourtestimonoal", label: "Testimonials" },
                      { path: "/Our-presence", label: "Our Presence" },
                      { path: "/Enquiry", label: "Enquiry" },
                    ].map(({ path, label }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-gray-700 hover:text-accent"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                to="/Servicedetail"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition ${
                  isActiveLink("/Servicedetail")
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                SERVICES
              </Link>
              <Link
                to="/Successstory"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition ${
                  isActiveLink("/Successstory")
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                SUCCESS STORY
              </Link>
              <Link
                to="/Contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition ${
                  isActiveLink("/Contact") ? "text-accent" : "text-foreground"
                }`}
              >
                CONTACT US
              </Link>

              <Link to="/Quote" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold mt-3">
                  Get A Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
