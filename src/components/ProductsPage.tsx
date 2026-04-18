import { motion } from "framer-motion";
import { ShoppingBag, Star, ShieldCheck, Truck, MessageCircle, ChevronRight, Activity, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const PRODUCTS = [
  {
    id: 1,
    name: "Sentience AI CCTV Set",
    description: "4-camera technical surveillance system with mobile edge-AI and 2TB cold storage.",
    price: 35000,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/cctv-tech-hero-1-e61f17e9-1776526268225.webp",
    category: "Security",
    rating: 4.9,
    reviews: 42
  },
  {
    id: 2,
    name: "Lumina Edge LED Kit",
    description: "High-density ambient lighting for architectural troughs with smart automation hub.",
    price: 4800,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-details-tech-b693ab39-1776526266605.webp",
    category: "Lighting",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 3,
    name: "Architectural Trough Pack",
    description: "Set of 10 structural-grade gypsum components for high-precision ceiling finishes.",
    price: 12000,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/pro-technician-tech-963638c3-1776526267308.webp",
    category: "Gypsum",
    rating: 5.0,
    reviews: 15
  },
  {
    id: 4,
    name: "DalaPro Core Hub V2",
    description: "Centralized infrastructure control unit for security, lighting, and power management.",
    price: 15500,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/hardware-tech-grid-b4cf8e6f-1776526268934.webp",
    category: "Automation",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 5,
    name: "4K Stealth IP Camera",
    description: "Single-point 4K IP camera with localized AI analytics and nocturnal vision.",
    price: 9500,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/cctv-tech-hero-1-e61f17e9-1776526268225.webp",
    category: "Security",
    rating: 4.9,
    reviews: 31
  },
  {
    id: 6,
    name: "Precision Matrix Spotlight",
    description: "Industrial-grade energy-efficient warm-white LED spots for architectural ceilings.",
    price: 3200,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-details-tech-b693ab39-1776526266605.webp",
    category: "Lighting",
    rating: 4.6,
    reviews: 56
  }
];

const ProductsPage = () => {
  const handleBuyNow = (product: typeof PRODUCTS[0]) => {
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(
      `DalaPro Inventory Inquiry: ${product.name} (Ref: ${product.id}). Price: KES ${product.price.toLocaleString()}. Requesting availability and national mobilization details.`
    )}`;
    window.open(whatsappUrl, "_blank");
    toast.success(`Initializing inventory request for ${product.name}`);
  };

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen relative">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <Badge variant="outline" className="border-blue-200 text-blue-600 uppercase tracking-widest rounded-sm mb-4">Hardware Inventory</Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-[0.95]">
            Standard <br /> <span className="text-blue-600">Infrastructure.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mt-6 font-normal leading-relaxed">
            Access technical architectural and surveillance assets vetted for the Kenyan environment, with nationwide delivery.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search technical assets..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg h-12 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
          <Button variant="outline" className="border-slate-200 rounded-lg h-12 px-6 gap-2 text-slate-600">
            <Filter className="w-4 h-4" /> Category Filter
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-400 transition-all duration-300 h-full flex flex-col shadow-sm">
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-950/80 backdrop-blur-sm text-white font-bold px-3 py-1 rounded-sm text-[8px] uppercase tracking-widest border-none">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-black text-slate-950 leading-none">{product.name}</h3>
                      <div className="flex items-center gap-1 font-bold text-blue-600 shrink-0 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 font-normal leading-relaxed text-sm">{product.description}</p>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-100 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Statutory Price</span>
                        <div className="text-2xl font-black text-slate-950">KES {product.price.toLocaleString()}</div>
                      </div>
                      <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest text-[8px]">In Inventory</Badge>
                    </div>
                    
                    <Button 
                      className="w-full bg-slate-950 hover:bg-blue-600 text-white rounded-lg h-14 font-bold border-none transition-colors"
                      onClick={() => handleBuyNow(product)}
                    >
                      Initialize Procurement
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Corporate Partnership Banner */}
        <div className="mt-40">
          <div className="bg-slate-950 rounded-2xl p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent)] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500 border border-blue-600/20">
                   <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Enterprise Supply.</h2>
                <p className="text-lg text-slate-400 font-normal leading-relaxed">
                  Strategic procurement for building owners and residential developers. Request centralized technical supply chains across Kenya.
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 h-16 px-10 rounded-lg font-bold shrink-0 border-none transition-all">
                Request B2B Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;