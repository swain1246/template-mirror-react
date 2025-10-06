// src/components/Services.tsx
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  Shield, 
  Users,
  LucideIcon 
} from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="relative mt-12 group">
      {/* Icon container - positioned outside the card */}
      <div className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-dashed border-gray-400 z-10 transition-all duration-1000 group-hover:bg-yellow-500">
        <Icon className="text-gray-500 size={28} group-hover:text-gray-900" />
      </div>
      
      {/* Card container */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 pt-8 h-48 transition-all duration-1000 hover:bg-gray-800 hover:text-white hover:shadow-lg flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Always Available",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: Package,
      title: "Best Offers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: MapPin,
      title: "Worldwide Transport",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: Shield,
      title: "Secure Shipping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-16 lg:px-24 xl:px-32">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;