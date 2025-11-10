import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Phone,
  Info,
  MessageCircle,
  Menu,
  X,
  FileText, // ✅ Added missing import
} from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/About", icon: Info, label: "About" },
    // { path: "/Enquiry", icon: MessageCircle, label: "Enquiry" },
    // { path: "/Servicedetail", icon: FileText, label: "Services" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-amber-500"
                    : "text-gray-500 hover:text-amber-500"
                }`}
              >
                <Icon size={20} strokeWidth={2} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
              isMenuOpen
                ? "text-amber-500"
                : "text-gray-500 hover:text-amber-500"
            }`}
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>

      {/* Expandable Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="absolute bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-2xl">
            <div className="p-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

              {/* Menu Items */}
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Home size={20} className="text-gray-600" />
                  <span className="text-gray-700">Homepage</span>
                </Link>

                <Link
                  to="/About"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Info size={20} className="text-gray-600" />
                  <span className="text-gray-700">About Us</span>
                </Link>

                {/* <Link
                  to="/Services"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FileText size={20} className="text-gray-600" />
                  <span className="text-gray-700">Our Services</span>
                </Link> */}

                <Link
                  to="/Contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} className="text-gray-600" />
                  <span className="text-gray-700">Contact Us</span>
                </Link>

                {/* <Link
                  to="/Blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FileText size={20} className="text-gray-600" />
                  <span className="text-gray-700">Blog</span>
                </Link> */}

                {/* <Link
                  to="/FAQ"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Info size={20} className="text-gray-600" />
                  <span className="text-gray-700">FAQ</span>
                </Link> */}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                <Link to="/Quote"> <button className="bg-amber-500 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors">
                    Get Quote
                  </button></Link> 
                  {/* <button className="bg-gray-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    Call Now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prevent content from being hidden behind nav */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default BottomNav;
