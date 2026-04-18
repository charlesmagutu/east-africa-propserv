import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import { 
  ShieldCheck, 
  ChevronRight, 
  Camera, 
  Layers, 
  CheckCircle2, 
  Truck, 
  CreditCard,
  ArrowLeft,
  FileText,
  Zap,
  PhoneCall,
  Sparkles,
  Download,
  Calendar,
  Activity,
  Cpu,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ServiceId } from "../App";
import ProfessionalInvoice from "./ProfessionalInvoice";

// --- Mock Data & Constants ---

const SERVICES = [
  {
    id: "gypsum",
    title: "Architectural Gypsum",
    description: "Technical ceiling and partition systems with integrated lighting protocols.",
    icon: <Layers className="w-7 h-7" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/gypsum-details-tech-b693ab39-1776526266605.webp",
    basePrice: 1500, // KES per sq meter
    unit: "sq meter",
    boqItems: (qty: number) => [
      { description: "Industrial 9mm Gypsum Boards (Moisture Resistant)", quantity: `${qty} m²`, unitPrice: 650, total: qty * 650 },
      { description: "Heavy-Gauge Galvanized Steel Framework (0.5mm)", quantity: "1 Unit", unitPrice: qty * 150, total: qty * 150 },
      { description: "Precision Gypsum Cornices (Structural Grade)", quantity: `${Math.ceil(qty * 0.8)}m`, unitPrice: 200, total: Math.ceil(qty * 0.8) * 200 },
      { description: "Composite Joint Filler & Reinforcement Fiber", quantity: "1 Lot", unitPrice: qty * 100, total: qty * 100 },
      { description: "Specialist Installation & Leveling Protocol", quantity: `${qty} m²`, unitPrice: 400, total: qty * 400 },
    ]
  },
  {
    id: "cctv",
    title: "IP Surveillance Suite",
    description: "4K AI-integrated security infrastructure with end-to-end encryption.",
    icon: <Camera className="w-7 h-7" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/af00f8d7-c6a3-482d-90dd-f6b5bde092b6/cctv-tech-hero-1-e61f17e9-1776526268225.webp",
    basePrice: 5000, // KES per camera
    unit: "camera",
    boqItems: (qty: number) => [
      { description: "4K Ultra-HD AI Smart IP Cameras (Edge Analytics)", quantity: `${qty} Units`, unitPrice: 4500, total: qty * 4500 },
      { description: "Enterprise 8-Channel NVR with 2TB Surveillance Drive", quantity: "1 Unit", unitPrice: 15000, total: 15000 },
      { description: "Shielded Cat6 Infrastructure & Matrix Connectors", quantity: "1 Lot", unitPrice: qty * 800, total: qty * 800 },
      { description: "PoE Managed Switch & Redundant Power Delivery", quantity: "1 Unit", unitPrice: 7500, total: 7500 },
      { description: "AI Logic Calibration & Mobile Gateway Setup", quantity: "1 Service", unitPrice: 5000, total: 5000 },
      { description: "Technical Mounting & Structural Alignment", quantity: `${qty} Units`, unitPrice: 1200, total: qty * 1200 },
    ]
  }
];

interface ServiceFlowProps {
  initialServiceId: ServiceId | null;
  onBack: () => void;
}

export default function ServiceFlow({ initialServiceId, onBack }: ServiceFlowProps) {
  const [step, setStep] = useState<"services" | "quotation" | "generating" | "final-quote">(initialServiceId ? "quotation" : "services");
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(
    initialServiceId ? SERVICES.find(s => s.id === initialServiceId) || null : null
  );
  const [quantity, setQuantity] = useState(10);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const boqLines = selectedService ? selectedService.boqItems(quantity) : [];
  const subtotal = boqLines.reduce((acc, item) => acc + item.total, 0);
  const vat = subtotal * 0.16;
  const totalEstimate = subtotal + vat;
  const depositAmount = totalEstimate * 0.3;

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: `DalaPro-TECHNICAL-BOQ-${selectedService?.id.toUpperCase()}`,
  });

  const handleServiceSelect = (service: typeof SERVICES[0]) => {
    setSelectedService(service);
    setStep("quotation");
  };

  const handleGenerateQuote = () => {
    setStep("generating");
    setTimeout(() => {
      setStep("final-quote");
      toast.success("Technical Bill of Quantities synchronized successfully.");
    }, 2000);
  };

  const handleCallExpert = () => {
    toast.info("Routing call to senior project manager...");
    window.location.href = "tel:+254700000000";
  };

  const handleWhatsAppQuote = () => {
    const text = `DalaPro Technical Inquiry: BOQ for ${selectedService?.title} (${quantity} ${selectedService?.unit}s). Est: KES ${Math.round(totalEstimate).toLocaleString()}. Requesting nationwide verification.`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="container px-4 py-32 md:px-6 max-w-7xl mx-auto min-h-[90vh] relative bg-white">
      
      <AnimatePresence mode="wait">
        {step === "services" && (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center mb-20 space-y-6">
              <Button 
                variant="ghost" 
                onClick={onBack} 
                className="self-start md:absolute md:left-6 md:top-32 hover:bg-slate-100 rounded-lg font-bold transition-all text-slate-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> System Core
              </Button>
              <Badge variant="outline" className="border-blue-200 text-blue-600 uppercase tracking-widest rounded-sm">Protocol Selection</Badge>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950">
                Deploy <span className="text-blue-600">Solution.</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
                Initialize the technical scoping engine for your infrastructure requirement, anywhere in Kenya.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {SERVICES.map((service) => (
                <Card 
                  key={service.id} 
                  className="group overflow-hidden border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer shadow-sm bg-white rounded-xl"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-3 text-blue-600 mb-4">
                       <div className="p-2 bg-blue-50 rounded-lg">{service.icon}</div>
                       <Badge className="bg-slate-950 text-white border-none rounded-sm text-[8px] uppercase font-bold tracking-widest">
                          Market Index: KES {service.basePrice}/{service.unit}
                       </Badge>
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-950">{service.title}</CardTitle>
                    <CardDescription className="text-slate-500 font-normal mt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="px-8 pb-8">
                    <Button className="w-full bg-slate-950 hover:bg-blue-600 text-white rounded-lg py-6 h-auto font-bold border-none transition-colors">
                      Initialize Configurator <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {step === "quotation" && selectedService && (
          <motion.div
            key="quotation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full"
          >
            <div className="max-w-5xl mx-auto">
              <Button variant="ghost" onClick={() => initialServiceId ? onBack() : setStep("services")} className="mb-10 hover:bg-slate-100 rounded-lg font-bold transition-all text-slate-500">
                <ArrowLeft className="mr-2 h-4 w-4" /> {initialServiceId ? 'System Core' : 'Back to Protocols'}
              </Button>
              
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <Card className="lg:col-span-8 border-slate-200 shadow-sm rounded-xl overflow-hidden bg-white">
                  <CardHeader className="bg-slate-50 p-8 border-b border-slate-200">
                    <Badge variant="outline" className="w-fit mb-4 border-blue-200 text-blue-600 font-bold px-2 py-0.5 rounded-sm uppercase text-[8px] tracking-widest">Technical Scoping</Badge>
                    <CardTitle className="text-3xl font-black text-slate-950">Parameter Configuration</CardTitle>
                    <CardDescription className="font-normal text-slate-500">Adjust standard units to synchronize real-time infrastructure costs.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-12">
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Project Dimension</label>
                          <span className="text-5xl font-black text-slate-950">{quantity}</span>
                          <span className="text-slate-400 ml-3 font-bold text-lg uppercase tracking-wider">{selectedService.unit}s</span>
                        </div>
                      </div>
                      <div className="relative py-4">
                        <input 
                          type="range" 
                          min="1" 
                          max="200" 
                          value={quantity} 
                          onChange={(e) => setQuantity(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="flex justify-between mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>Minimum Load: 1</span>
                          <span>Maximum Load: 200 {selectedService.unit}s</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-lg space-y-6">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold text-xs uppercase tracking-widest text-slate-950">Technical Matrix Est.</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-base">
                          <span className="text-slate-500 font-medium">Material Procurement</span>
                          <span className="font-bold text-slate-950 tracking-tight">KES {(subtotal * 0.6).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-slate-500 font-medium">Field Engineering Labor</span>
                          <span className="font-bold text-slate-950 tracking-tight">KES {(subtotal * 0.4).toLocaleString()}</span>
                        </div>
                        <div className="pt-6 border-t border-slate-200 flex justify-between items-end">
                          <div>
                            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Capital Expenditure (Net)</span>
                            <span className="text-4xl font-black text-slate-950">KES {subtotal.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-950 p-8">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-16 text-xl font-bold rounded-lg border-none transition-all"
                      onClick={handleGenerateQuote}
                    >
                      <Zap className="mr-2 h-6 w-6 fill-current" /> Run Synchronized BOQ
                    </Button>
                  </CardFooter>
                </Card>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-sm">
                    <Activity className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="text-lg font-black text-slate-950 mb-2">DalaPro Protocol</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Standardized deployment using ISO materials and senior field technicians nationwide.
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {["National Price Index Sync", "Structural Integrity Log", "VAT Compliance"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
                    <Cpu className="w-8 h-8 text-blue-500 mb-6" />
                    <h4 className="text-base font-bold mb-3">Engineering Verification</h4>
                    <p className="text-slate-400 mb-6 text-sm font-normal">Schedule a laser-precision site audit with a senior project lead.</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-slate-700 text-white hover:bg-slate-800 rounded-lg h-12 font-bold transition-all"
                      onClick={handleCallExpert}
                    >
                      <PhoneCall className="mr-2 w-4 h-4" /> Project Lead Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === "generating" && (
          <motion.div
            key="generating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-12"
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border-[4px] border-slate-100 rounded-full" />
              <motion.div 
                className="absolute inset-0 border-[4px] border-blue-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <Activity className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400">Synchronizing</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-950 tracking-tight">Compiling Infrastructure Log</h2>
              <p className="text-slate-400 text-lg font-medium">Syncing with National Material Price Indices...</p>
            </div>
          </motion.div>
        )}

        {step === "final-quote" && selectedService && (
          <motion.div
            key="final-quote"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <Button 
                variant="ghost" 
                onClick={() => setStep("quotation")} 
                className="hover:bg-slate-100 rounded-lg font-bold transition-all text-slate-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Parameters
              </Button>
              <div className="flex items-center gap-4">
                 <Badge className="bg-emerald-600 text-white px-3 py-1 rounded-sm font-bold uppercase tracking-widest text-[8px] border-none">
                    Technical Verified
                 </Badge>
                 <span className="text-slate-400 font-bold text-[10px] flex items-center gap-2 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> Protocol Validity: 14 Days
                 </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-8">
                <Card className="border-slate-200 shadow-sm rounded-xl overflow-hidden bg-white">
                  <CardHeader className="bg-slate-950 text-white p-10">
                    <CardTitle className="text-3xl font-black">Bill of Quantities</CardTitle>
                    <CardDescription className="text-slate-400">
                      Infrastructure breakdown: {selectedService.title} Protocol
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                      {boqLines.map((item, idx) => (
                        <div key={idx} className="p-6 flex justify-between items-start group hover:bg-slate-50 transition-colors">
                          <div className="space-y-1">
                             <p className="font-bold text-slate-950 leading-tight group-hover:text-blue-600 transition-colors">{item.description}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Volume: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                             <p className="font-bold text-slate-950 tracking-tighter">KES {item.total.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-10 bg-slate-50 border-t border-slate-200">
                       <div className="flex justify-between items-center mb-3 text-slate-500 text-sm font-bold uppercase tracking-wider">
                          <span>Log Subtotal</span>
                          <span>KES {subtotal.toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between items-center mb-6 text-slate-500 text-sm font-bold uppercase tracking-wider">
                          <span>Statutory VAT (16%)</span>
                          <span>KES {Math.round(vat).toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-xl font-black text-slate-950">Grand Expenditure</span>
                          <span className="text-3xl font-black text-blue-600 tracking-tighter">KES {Math.round(totalEstimate).toLocaleString()}</span>
                       </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-16 h-16 bg-white border border-emerald-200 rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                     <CreditCard className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-slate-950">Mobilization Fee</h4>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed">
                      Statutory 30% (<span className="font-bold text-emerald-700">KES {Math.round(depositAmount).toLocaleString()}</span>) required for material procurement and site deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <Card className="border-slate-200 shadow-sm rounded-xl overflow-hidden bg-white p-8 space-y-8">
                  <div className="space-y-3">
                    <Badge variant="outline" className="border-blue-200 text-blue-600 font-bold px-2 py-0.5 rounded-sm uppercase text-[8px] tracking-widest">Action Required</Badge>
                    <h3 className="text-2xl font-black text-slate-950">Execute Deployment</h3>
                    <p className="text-sm text-slate-500 font-normal leading-relaxed">
                      Download the technical PDF and initialize communication with field operations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 font-bold rounded-lg border-none"
                      onClick={handleWhatsAppQuote}
                    >
                      <Zap className="mr-2 h-4 w-4 fill-current" /> WhatsApp Operations
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-slate-200 h-14 font-bold rounded-lg bg-white hover:bg-slate-50"
                      onClick={() => handlePrint()}
                    >
                      <Download className="mr-2 h-4 w-4" /> Download PDF Log
                    </Button>
                  </div>

                  <div className="pt-8 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-3 text-slate-600">
                       <Truck className="w-4 h-4 text-blue-600" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">Mobilization: 24-48 Hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                       <ShieldCheck className="w-4 h-4 text-blue-600" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">12-Month Structural Guarantee</span>
                    </div>
                  </div>
                </Card>

                <div className="bg-slate-950 rounded-xl p-8 text-white">
                   <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-6">Field Capability</h4>
                   <div className="flex -space-x-2 mb-6">
                      {[1, 2, 3, 4].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                            <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="Lead Technician" />
                         </div>
                      ))}
                   </div>
                   <p className="text-slate-400 font-medium text-xs">
                      Our technical network has deployed <span className="text-white font-bold">1,200+</span> assets across Kenya in 2024.
                   </p>
                </div>
              </div>
            </div>

            {/* Hidden component for PDF generation */}
            <div className="hidden">
              <ProfessionalInvoice 
                ref={invoiceRef}
                invoiceNumber={`DP-TECH-${Math.floor(1000 + Math.random() * 9000)}`}
                date={new Date().toLocaleDateString()}
                expiryDate={new Date(Date.now() + 14 * 86400000).toLocaleDateString()}
                serviceTitle={selectedService.title}
                items={boqLines}
                subtotal={subtotal}
                vat={vat}
                total={totalEstimate}
                deposit={depositAmount}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}