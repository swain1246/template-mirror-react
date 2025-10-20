// src/components/Header.tsx
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* New Sticky Top Section - Fixed to top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black py-3">
        <div className="flex items-center justify-between px-4">
          <div>
            <img
              src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
              alt="Envato Market"
              className="h-5 w-auto"
            />
          </div>
          <div>
            <Button className="bg-green-700 hover:bg-green-300 h-8 text-white px-4 py-1 text-xs">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header Content with padding to account for fixed section */}
      <header className="w-full mb-0 mt-2 pt-12">
        {" "}
        {/* Added padding-top to push content below fixed section */}
        {/* Top Bar */}
        <div className="bg-gray-800 text-white py-3">
          <div className="container mx-auto px-16">
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center gap-6">
                <a
                  href="#contact"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={14} className="text-accent" />
                  <span>Contact Us</span>
                </a>
                <a
                  href="#terms"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <FileText size={14} className="text-accent" />
                  <span>Terms And Conditions</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  <span>Satyavihar, Mancheswar, Bhubaneswar, Odisha, IND</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-accent" />
                  <span>+91 8249778018</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-accent" />
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <div className="bg-background border-b-4 border-yellow-500 py-4">
          <div className="container mx-auto px-16">
            <div className="flex items-center justify-between">
              {/* Logo with cropping */}
              <a href="/" className="flex items-center">
                <div className="h-12 overflow-hidden">
                  {" "}
                  {/* Fixed height container with overflow hidden */}
                  <img
                    src="../../public/images.png"
                    alt="Movers & Packers Logo"
                    className="h-16 w-auto -mt-3" /* Increased height + negative top margin */
                  />
                </div>
              </a>

              {/* Navigation Menu */}
              <nav className="hidden lg:flex items-center gap-12">
                <a
                  href="/"
                  className="text-foreground font-semibold hover:text-accent transition-colors border-b-2 border-accent pb-1 text-sm"
                >
                  HOME
                </a>
                <a
                  href="/services"
                  className="text-foreground font-semibold hover:text-accent transition-colors text-sm"
                >
                  SERVICES
                </a>
                <a
                  href="/blogs"
                  className="text-foreground font-semibold hover:text-accent transition-colors text-sm"
                >
                  BLOGS
                </a>
                <a
                  href="/project"
                  className="text-foreground font-semibold hover:text-accent transition-colors text-sm"
                >
                  PROJECT
                </a>
                <a
                  href="/team"
                  className="text-foreground font-semibold hover:text-accent transition-colors text-sm"
                >
                  TEAM
                </a>
                <a
                  href="/pages"
                  className="text-foreground font-semibold hover:text-accent transition-colors text-sm"
                >
                  PAGES
                </a>
              </nav>

              {/* CTA Button */}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 text-sm">
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
