import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Servicedetail from "./pages/servicedetail"
import Contact from "./pages/contact"
import Successstory from "./pages/successstory";
import Quote from './pages/Get-A-Quote'
import OurTeam from './pages/ourteam'
import Ourtestimonoal from './pages/ourTestimonials'
import Ourpresence from '@/pages/our-presence'
import Terms from '@/pages/term'
import Enquiry from "@/pages/Enquiry"
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Enquiry" element={<Enquiry />} />
          <Route path="/Servicedetail" element={<Servicedetail />} />
          <Route path="/Successstory" element={<Successstory />} />
          <Route path="/Ourtestimonoal" element={<Ourtestimonoal />} />
          <Route path="/Our-presence" element={<Ourpresence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
