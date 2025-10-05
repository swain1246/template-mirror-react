import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-topBar text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="#contact" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={14} className="text-accent" />
                <span>Contact Us</span>
              </a>
              <a href="#terms" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FileText size={14} className="text-accent" />
                <span>Terms And Conditions</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Salford road, east London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>+123 45 678 - 00 987 654 32</span>
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
      <div className="bg-background border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="bg-accent rounded-lg p-2">
                <Truck className="text-accent-foreground" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-accent">Movers</span>
                  <span className="text-foreground">&Packers</span>
                </h1>
                <p className="text-xs text-muted-foreground">Transport And Courier</p>
              </div>
            </a>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-foreground font-semibold hover:text-accent transition-colors border-b-2 border-accent pb-1">
                HOME
              </a>
              <a href="/services" className="text-foreground font-semibold hover:text-accent transition-colors">
                SERVICES
              </a>
              <a href="/blogs" className="text-foreground font-semibold hover:text-accent transition-colors">
                BLOGS
              </a>
              <a href="/project" className="text-foreground font-semibold hover:text-accent transition-colors">
                PROJECT
              </a>
              <a href="/team" className="text-foreground font-semibold hover:text-accent transition-colors">
                TEAM
              </a>
              <a href="/pages" className="text-foreground font-semibold hover:text-accent transition-colors">
                PAGES
              </a>
            </nav>

            {/* CTA Button */}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
