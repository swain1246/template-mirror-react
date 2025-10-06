// src/components/Footer.tsx
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const tweets = [
    {
      id: 1,
      name: "@movers",
      content: "We're there for you anytime you need us. Contact us for a consultation, estimate or any question you might have about your project or our work.",
      time: "~2 days ago"
    },
    {
      id: 2,
      name: "@movers",
      content: "Just completed another successful move! Our team takes pride in making relocation stress-free for our clients. Thank you for choosing us!",
      time: "~4 days ago"
    },
    {
      id: 3,
      name: "@movers",
      content: "Moving tip of the day: Label boxes by room and priority. This makes unpacking much easier and helps you settle into your new home faster!",
      time: "~1 week ago"
    }
  ];

  const [currentTweet, setCurrentTweet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTweet((prev) => (prev === tweets.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [tweets.length]);

  return (
    <footer className="bg-footerDark text-white">
      {/* Twitter Section */}
      <div 
        className="relative bg-cover bg-center py-12" 
        style={{ backgroundImage: "url('https://eyecix.com/html/moverspackers/extra-images/twitter-feed-img.jpg')" }}
      >
        {/* Yellow transparent overlay with reduced opacity */}
        <div className="absolute inset-0 bg-yellow-500 bg-opacity-90"></div>
        
        {/* Content with 10% spacing on left and right */}
        <div className="relative container mx-auto px-[10%]">
          <div className="flex items-start">
            {/* Twitter icon and separator */}
            <div className="flex items-center pr-6">
              <Twitter className="text-white fill-current" size={90} strokeWidth={0} />
              <div className="h-24 border-l border-white ml-4"></div>
            </div>
            
            {/* Twitter content with sliding effect */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTweet * 100}%)` }}
              >
                {tweets.map((tweet) => (
                  <div 
                    key={tweet.id} 
                    className="w-full flex-shrink-0 text-left"
                  >
                    <p className="font-bold text-lg">{tweet.name}</p>
                    <p className="mb-2">{tweet.content}</p>
                    <p className="text-sm text-gray-200">{tweet.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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