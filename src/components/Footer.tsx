import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-footerDark text-white">
      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Meet Us At */}
          <div className="bg-footerDarker border border-muted/20 rounded-lg p-8 flex items-start justify-between hover:border-accent/50 transition-colors">
            <div>
              <h3 className="text-xl font-bold mb-3">Meet Us At</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vestibulum maximus orci in ante<br />
                convallis egestas
              </p>
            </div>
            <MapPin className="text-accent flex-shrink-0" size={48} strokeWidth={1.5} />
          </div>

          {/* Contact Us At */}
          <div className="bg-footerDarker border border-muted/20 rounded-lg p-8 flex items-start justify-between hover:border-accent/50 transition-colors">
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us At</h3>
              <p className="text-muted-foreground">00 987 654 32</p>
              <p className="text-muted-foreground">+123 456 78</p>
            </div>
            <Phone className="text-accent flex-shrink-0" size={48} strokeWidth={1.5} />
          </div>

          {/* Mail Us At */}
          <div className="bg-footerDarker border border-muted/20 rounded-lg p-8 flex items-start justify-between hover:border-accent/50 transition-colors">
            <div>
              <h3 className="text-xl font-bold mb-3">Mail Us At</h3>
              <p className="text-muted-foreground">info@example.com</p>
              <p className="text-muted-foreground">movers@abc.com</p>
            </div>
            <Mail className="text-accent flex-shrink-0" size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-muted/20">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              About Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisci elit. Maecenas venenatis, augue nec pretiumo ante mauris congue dui, eu porttitor enim ip non purus ellentesque sit amet
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              Useful Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Property
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Property List
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Typography
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Our blog
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Socials
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Contact us
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Person Boxes
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                About us
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Agent
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative">
              Our Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vestibulum maximus orci in ante convallis egestas Nulla a ex exet ex suscipit pulvinar.
            </p>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Type Your Email"
                className="bg-muted/20 border-muted/30 text-white placeholder:text-muted-foreground focus:border-accent"
              />
              <Button 
                className="w-full bg-transparent border-2 border-white hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-footerDarker border-t border-muted/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2017. All Right Reserved - by EYECIX</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Terms and conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
