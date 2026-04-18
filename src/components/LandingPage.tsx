import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Users,
  Award,
  Star,
  ShoppingBag,
  Sparkles,
  Camera,
  Smartphone,
  Eye,
  Shield,
  Activity,
  Cpu,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ServiceId } from "../App";

interface LandingPageProps {
  onServiceSelect: (id: ServiceId) => void;
  onViewProducts: () => void;
}

const LandingPage = ({ onServiceSelect, onViewProducts }: LandingPageProps) => {
  const steps = [
    {
      title: "Precision Scoping",
      desc: "Define your project parameters. Our system handles the complex architectural calculations instantly.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Engineered BOQ",
      desc: "Receive a technical Bill of Quantities indexed to real-time national material and labor costs.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Technical Survey",
      desc: "A senior project manager conducts a laser-precise site verification to confirm all specifications.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Expert Execution",
      desc: "Vetted specialists install to ISO-certified standards with a comprehensive 12-month quality guarantee.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      q: "How does the automated BOQ system maintain accuracy?",
      a: "Our DalaPro engine syncs daily with established national hardware wholesalers and labor rate indices. It provides a technical estimate with a 95% baseline accuracy before site verification."
    },
    {
      q: "What security hardware standards do you adhere to?",
      a: "We exclusively deploy 4K Ultra-HD IP systems with AI analytics (Human/Vehicle detection). We partner with Tier-1 manufacturers like Hikvision and Dahua for enterprise-grade reliability."
    },
    {
      q: "What does the 12-month structural guarantee cover?",
      a: "It covers all installation-related defects, including joint integrity, structural alignment, and hardware functionality. If an issue arises from our workmanship, we remediate at zero cost."
    },
    {
      q: "Can I upgrade my existing security to your smart system?",
      a: "Absolutely. We specialize in system modernizations, integrating legacy wiring where possible with modern AI-driven hubs for mobile-first monitoring."
    }
  ];

  return (
    <div className="flex flex-col bg-white relative">
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-tech-hero-1-ba71355f-1776526270563.webp" 
            alt="Technical Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-blue-600 text-white border-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-sm">
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  Engineering Excellence
                </Badge>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95]">
                  Precision <br />
                  <span className="text-blue-500">Engineering.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Professional gypsum installations and AI-integrated security systems. Data-driven Bill of Quantities generated in seconds.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-10 rounded-lg font-bold transition-all"
                  onClick={() => onServiceSelect("gypsum")}
                >
                  Launch Project
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-slate-700 bg-slate-900/50 hover:bg-slate-800 h-16 px-10 rounded-lg font-bold transition-all"
                  onClick={onViewProducts}
                >
                  Hardware Catalog
                  <ShoppingBag className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-6 border-t border-slate-800">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800 shadow-lg">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <div className="flex items-center gap-1 text-blue-400 mb-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                    <span className="text-white font-bold ml-1">4.9/5</span>
                  </div>
                  <p className="text-slate-500 uppercase tracking-widest text-[10px]">Trusted by Kenya's Top Developers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Trust Banner */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Vetted Specialists", val: "250+", icon: <Users className="w-5 h-5" /> },
              { label: "Completed Assets", val: "1.2k+", icon: <ShieldCheck className="w-5 h-5" /> },
              { label: "Operational Across All 47 Counties", val: "Nationwide", icon: <Award className="w-5 h-5" /> },
              { label: "Success Quotient", val: "99.2%", icon: <Activity className="w-5 h-5" /> },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-3xl font-black text-slate-950 mb-1">{stat.val}</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  <span className="text-blue-600">{stat.icon}</span>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <Badge variant="outline" className="border-blue-200 text-blue-600 uppercase tracking-widest rounded-sm">Technical Services</Badge>
              <h2 className="text-5xl font-black tracking-tight text-slate-950">High-Precision Installation.</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-normal">
                Specialized in architectural interior systems and advanced surveillance integration for residential and commercial environments nationwide.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Gypsum Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-details-tech-b693ab39-1776526266605.webp" 
                  alt="Gypsum" 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-950">Architectural Gypsum</h3>
                  <p className="text-slate-600 leading-relaxed">Precision-engineered bulkheads, light troughs, and premium partition systems designed for longevity and aesthetic impact.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Fire-Rated", "Acoustic-Grade", "LED-Ready"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-sm">{tag}</span>
                  ))}
                </div>
                <Button 
                  className="w-full bg-slate-950 hover:bg-blue-600 text-white rounded-lg h-14 font-bold border-none transition-colors"
                  onClick={() => onServiceSelect("gypsum")}
                >
                  Generate Technical BOQ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* CCTV Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/cctv-tech-hero-1-e61f17e9-1776526268225.webp" 
                  alt="CCTV" 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-950">AI-Integrated Security</h3>
                  <p className="text-slate-600 leading-relaxed">4K smart surveillance with automated threat detection and global remote access for unified property protection.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["4K Ultra HD", "AI Analytics", "Cloud Sync"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-sm">{tag}</span>
                  ))}
                </div>
                <Button 
                  className="w-full bg-slate-950 hover:bg-blue-600 text-white rounded-lg h-14 font-bold border-none transition-colors"
                  onClick={() => onServiceSelect("cctv")}
                >
                  Request System Design
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 rounded-sm">Advanced Infrastructure</Badge>
                <h2 className="text-5xl font-black tracking-tight leading-tight">Intelligent Guarding. <br /> Mobile Control.</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Our security systems utilize edge-AI to distinguish between environmental movement and potential threats, delivering zero-latency alerts directly to your mobile device, anywhere in the country.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Edge Analytics", desc: "Local processing for immediate response.", icon: <Cpu className="w-5 h-5" /> },
                  { title: "Vision X", desc: "Full-color low-light monitoring capabilities.", icon: <Eye className="w-5 h-5" /> },
                  { title: "Unified Hub", desc: "Centralized control for all secure points.", icon: <Smartphone className="w-5 h-5" /> },
                  { title: "Encrypted Log", desc: "Secure cloud backup with 256-bit encryption.", icon: <Shield className="w-5 h-5" /> },
                ].map((feat, i) => (
                  <div key={i} className="space-y-3 border-l-2 border-slate-800 pl-6 hover:border-blue-600 transition-colors">
                    <div className="text-blue-500">{feat.icon}</div>
                    <h4 className="font-bold text-white">{feat.title}</h4>
                    <p className="text-sm text-slate-500">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-14 px-8 font-bold border-none"
                onClick={() => onServiceSelect("cctv")}
              >
                Configure Security Suite
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/20 blur-[120px] rounded-full opacity-30" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-950/20">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/pro-technician-tech-963638c3-1776526267308.webp" 
                  alt="Technician" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-lg text-white">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Standard Certified</p>
                      <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">National Vetted Professional Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mb-24">
            <Badge variant="outline" className="border-blue-200 text-blue-600 uppercase tracking-widest rounded-sm mb-4">Operational Protocol</Badge>
            <h2 className="text-5xl font-black tracking-tight text-slate-950">Engineered Process.</h2>
            <p className="text-lg text-slate-500 font-normal">
              Eliminating contracting ambiguity through digital precision and technical verification, nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                className="relative space-y-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-slate-950 group-hover:border-blue-600 group-hover:text-blue-600 transition-all">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-6 w-12 h-[1px] bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Teaser */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 leading-none">Standard Supply.</h2>
              <p className="text-lg text-slate-500 font-normal">
                Direct access to high-grade architectural and security components, delivered nationwide.
              </p>
            </div>
            <Button 
              className="bg-slate-950 hover:bg-blue-600 text-white rounded-lg h-14 px-10 font-bold border-none transition-all"
              onClick={onViewProducts}
            >
              Shop Inventory
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Edge Hub V2", price: "12,500", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/hardware-tech-grid-b4cf8e6f-1776526268934.webp" },
              { title: "4K Sentinel", price: "8,500", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/cctv-tech-hero-1-e61f17e9-1776526268225.webp" },
              { title: "LED Matrix", price: "4,800", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-details-tech-b693ab39-1776526266605.webp" },
              { title: "Architectural Pack", price: "1,200", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/pro-technician-tech-963638c3-1776526267308.webp" }
            ].map((p, i) => (
              <div key={i} className="group border border-slate-200 rounded-xl overflow-hidden cursor-pointer hover:border-blue-600 transition-all">
                 <div className="aspect-square bg-slate-100 overflow-hidden">
                   <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 </div>
                 <div className="p-6 bg-white flex justify-between items-center">
                    <div>
                       <h4 className="font-bold text-slate-950 text-sm">{p.title}</h4>
                       <p className="text-blue-600 font-black text-xs">KES {p.price}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
             <div className="lg:col-span-4 space-y-6">
                <Badge variant="outline" className="border-blue-200 text-blue-600 uppercase tracking-widest rounded-sm">Documentation</Badge>
                <h2 className="text-5xl font-black tracking-tight text-slate-950">Technical FAQ.</h2>
                <p className="text-lg text-slate-500 font-normal">
                  Common queries regarding our engineering standards and automated BOQ protocols.
                </p>
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-950 rounded-lg h-14 px-8 font-bold hover:bg-slate-100"
                  onClick={() => window.open("https://wa.me/254700000000", "_blank")}
                >
                  Consult an Expert
                </Button>
             </div>
             <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="w-full space-y-4">
                   {faqs.map((faq, i) => (
                     <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 bg-white rounded-lg px-6 py-2 transition-all hover:border-blue-300">
                        <AccordionTrigger className="hover:no-underline text-xl font-bold text-slate-950 text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-500 font-normal leading-relaxed pb-6 pt-2">
                          {faq.a}
                        </AccordionContent>
                     </AccordionItem>
                   ))}
                </Accordion>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-12 md:p-24 text-white text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
                Ready to <br /> 
                <span className="opacity-80">Synchronize?</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Join Kenya's forward-thinking property owners. Generate your technical project baseline now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 text-xl h-18 px-12 rounded-lg font-bold shadow-xl border-none transition-all"
                  onClick={() => onServiceSelect("gypsum")}
                >
                  Start Configuration
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-xl h-18 px-12 rounded-lg font-bold transition-all"
                  onClick={onViewProducts}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;