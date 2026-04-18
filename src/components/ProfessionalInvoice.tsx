import React from "react";
import { Activity, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: number;
  total: number;
}

interface ProfessionalInvoiceProps {
  invoiceNumber: string;
  date: string;
  expiryDate: string;
  clientName?: string;
  serviceTitle: string;
  items: InvoiceItem[];
  subtotal: number;
  vat: number;
  total: number;
  deposit: number;
}

const ProfessionalInvoice = React.forwardRef<HTMLDivElement, ProfessionalInvoiceProps>((props, ref) => {
  const {
    invoiceNumber,
    date,
    expiryDate,
    clientName = "Technical Recipient",
    serviceTitle,
    items,
    subtotal,
    vat,
    total,
    deposit
  } = props;

  return (
    <div ref={ref} className="bg-white p-16 text-slate-900 w-[210mm] min-h-[297mm] mx-auto shadow-2xl print:shadow-none font-sans">
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-slate-900 pb-10 mb-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-black text-3xl tracking-tighter text-slate-950">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Activity className="w-8 h-8" />
            </div>
            <span>DalaPro</span>
          </div>
          <div className="text-[10px] text-slate-500 font-bold space-y-1.5 uppercase tracking-widest">
            <p className="flex items-center gap-2"><MapPin className="w-3 h-3 text-blue-600" /> Westlands Infrastructure Hub, Nairobi</p>
            <p className="flex items-center gap-2"><Phone className="w-3 h-3 text-blue-600" /> +254 700 000 000</p>
            <p className="flex items-center gap-2"><Mail className="w-3 h-3 text-blue-600" /> ops@dalapro.co.ke</p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-4xl font-black text-slate-950 mb-3 uppercase tracking-tight">Technical BOQ</h1>
          <div className="text-[10px] font-bold text-slate-400 space-y-1 uppercase tracking-widest">
            <p>Ref ID: <span className="text-slate-950">{invoiceNumber}</span></p>
            <p>Sync Date: <span className="text-slate-950">{date}</span></p>
            <p>Validity: <span className="text-slate-950">{expiryDate}</span></p>
          </div>
        </div>
      </div>

      {/* Project Matrix */}
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3">Recipient Node:</h4>
          <div className="text-base font-black text-slate-950">
            <p>{clientName}</p>
            <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase">Nairobi Metropolitan, Kenya</p>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3">Infrastructure Protocol:</h4>
          <div className="text-base font-black text-slate-950">
            <p>{serviceTitle}</p>
            <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase">Professional Deployment Log</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mb-12 border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-slate-500">Technical Description</th>
              <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Volume</th>
              <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-slate-500 text-right">Unit Index</th>
              <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-slate-500 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item, idx) => (
              <tr key={idx}>
                <td className="py-5 px-6">
                  <p className="font-bold text-sm text-slate-950">{item.description}</p>
                </td>
                <td className="py-5 px-6 text-center text-xs font-bold text-slate-600">{item.quantity}</td>
                <td className="py-5 px-6 text-right text-xs font-bold text-slate-600">KES {item.unitPrice.toLocaleString()}</td>
                <td className="py-5 px-6 text-right font-black text-sm text-slate-950">KES {item.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Matrix */}
      <div className="flex justify-end mb-12">
        <div className="w-72 space-y-4">
          <div className="flex justify-between text-slate-500 text-xs font-bold uppercase">
            <span>Net Expenditure</span>
            <span>KES {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-500 text-xs font-bold uppercase">
            <span>Statutory VAT (16%)</span>
            <span>KES {vat.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xl font-black text-slate-950 pt-4 border-t-2 border-slate-950">
            <span>Grand Total</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-2 mt-6">
            <div className="flex justify-between text-blue-700 font-black uppercase text-[9px] tracking-widest">
              <span>Mobilization Fee (30%)</span>
              <span>KES {deposit.toLocaleString()}</span>
            </div>
            <p className="text-[8px] text-blue-600/60 font-bold leading-tight uppercase">
              Required for material allocation and field technician mobilization.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance & Payment */}
      <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
        <div>
          <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-5">M-Pesa Operations</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center rounded-lg font-black text-xs">M</div>
              <div className="text-[11px] font-bold">
                <p>Merchant Till: <span className="text-emerald-700">9876543</span></p>
                <p className="text-slate-400 uppercase">DalaPro Services Ltd</p>
              </div>
            </div>
            <p className="text-[9px] text-slate-400 font-bold uppercase">
              *Submit transaction hash to ops@dalapro.co.ke
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg relative">
          <div className="absolute top-4 right-4 text-blue-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Protocol Terms</h4>
          <ul className="text-[8px] font-bold text-slate-500 space-y-1.5 list-disc pl-3 uppercase">
            <li>Sync valid for 14 operational days.</li>
            <li>30% cap-ex required prior to site deployment.</li>
            <li>12-month structural integrity guarantee.</li>
            <li>Nairobi metropolitan mobilization standard applies.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center space-y-2 border-t border-slate-100 pt-10">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600">Precision \u2022 Performance \u2022 Protection</p>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Official DalaPro Technical Document</p>
      </div>
    </div>
  );
});

ProfessionalInvoice.displayName = "ProfessionalInvoice";

export default ProfessionalInvoice;