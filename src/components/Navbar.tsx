import { useState, useEffect } from "react";
import { Wrench, Menu, X, ShoppingBag, MessageSquareQuote, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onGetStarted: () => void;
  onLogoClick: () => void;
  onProductsClick: () => void;
  currentView: string;
}

const Navbar = ({ onGetStarted, onLogoClick, onProductsClick, currentView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== "landing") {
      onLogoClick();
      // Small delay to allow landing page to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Solutions", action: () => scrollToSection("services") },
    { name: "Inventory", action: onProductsClick },
    { name: "Protocol", action: () => scrollToSection("how-it-works") },
    { name: "Documentation", action: () => scrollToSection("faqs") },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 font-black text-2xl tracking-tighter cursor-pointer group"
          onClick={onLogoClick}
        >
          <div className="p-2 bg-blue-600 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
            <Activity className="w-6 h-6" />
          </div>
          <span className={`transition-colors duration-300 ${isScrolled || currentView !== 'landing' ? "text-slate-950" : "text-white"}`}>DalaPro</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-blue-600 ${
                isScrolled || currentView !== 'landing' ? "text-slate-500" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            className={`hidden lg:flex rounded-lg px-8 h-12 font-bold text-xs uppercase transition-all border-none ${
              isScrolled || currentView !== 'landing'
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white text-slate-950 hover:bg-slate-100 shadow-lg"
            }`}
            onClick={onGetStarted}
          >
            Deploy Project
          </Button>
          
          <button 
            className={`md:hidden p-2.5 rounded-lg transition-all border ${
              isScrolled || currentView !== 'landing'
                ? "bg-slate-100 text-slate-950 border-slate-200" 
                : "bg-white/10 text-white backdrop-blur-md border-white/20"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[110] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-blue-600">
                <Activity className="w-7 h-7" />
                <span>DalaPro</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-100 rounded-lg text-slate-950">
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  className="text-4xl font-black text-slate-950 text-left flex items-center justify-between group py-4 border-b border-slate-100"
                  onClick={link.action}
                >
                  {link.name}
                  <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </button>
              ))}
              
              <div className="grid grid-cols-1 gap-4 mt-12">
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white rounded-lg h-16 text-lg font-bold border-none"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGetStarted();
                  }}
                >
                  <MessageSquareQuote className="mr-2 w-5 h-5" />
                  Get a Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-200 rounded-lg h-16 text-lg font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onProductsClick();
                  }}
                >
                  <ShoppingBag className="mr-2 w-5 h-5" />
                  Hardware Shop
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;