import { Activity, Facebook, Twitter, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "254700000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-800 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2 font-black text-3xl text-white tracking-tighter">
              <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-900/20">
                <Activity className="w-6 h-6" />
              </div>
              <span>DalaPro</span>
            </div>
            <p className="text-lg leading-relaxed text-slate-400 font-normal">
              Kenya's technical partner for architectural finishing and smart security. Engineering precision since 2021.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer border border-slate-800 shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Technical Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              {["Gypsum Systems", "IP Surveillance", "Structural Finishes", "Cornice Detailing", "Asset Protection"].map(item => (
                <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Operational Hub</h4>
            <ul className="space-y-4 text-sm font-medium">
              {["BOQ Engine", "Hardware Logistics", "Partner Network", "Safety Protocols", "Service Levels"].map(item => (
                <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Global Support</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500 border border-slate-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">hello@dalapro.co.ke</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500 border border-slate-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">+254 700 000 000</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-600/20">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <a href={whatsappUrl} className="hover:text-blue-400 font-bold transition-colors">WhatsApp 24/7</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p className="text-slate-600">© 2025 DalaPro Services Ltd • Precision Protocol</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Compliance</span>
            <span className="hover:text-white cursor-pointer transition-colors">Safety Data</span>
            <span className="hover:text-white cursor-pointer transition-colors">Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;