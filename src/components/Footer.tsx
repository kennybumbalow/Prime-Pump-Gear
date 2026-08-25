import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Wrench, 
  Cog,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { NavPage } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuoteModal: (prefillEquipment?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Top Pre-Footer Callout Bar */}
      <div className="bg-red-600 text-white py-8 px-4 sm:px-8 border-y border-red-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-red-800/80 px-3 py-1 rounded inline-block mb-2">
              EMERGENCY INDUSTRIAL RESPONSE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              CRITICAL ROTATING EQUIPMENT DOWN?
            </h3>
            <p className="text-red-100 text-sm max-w-xl mt-1">
              Our Missouri City repair shop and machinists are ready 24/7. Call our hotline for immediate response, inspection, and fast-track rebuilds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-slate-950 hover:bg-slate-900 text-white font-black text-sm tracking-wider uppercase px-6 py-3.5 rounded shadow-lg flex items-center justify-center gap-2 border border-slate-800 text-center transition-transform active:scale-95"
              id="footer-call-hotline-btn"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-white hover:bg-slate-100 text-red-700 font-black text-sm tracking-wider uppercase px-6 py-3.5 rounded shadow-lg flex items-center justify-center gap-2 text-center transition-transform active:scale-95"
              id="footer-fast-quote-btn"
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white border border-red-500 shadow-md">
                <Cog className="w-6 h-6 animate-[spin_16s_linear_infinite]" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading tracking-tight">PRIME </span>
                <span className="text-xl font-black text-red-500 font-heading tracking-tight">PUMP &amp; GEAR</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SERVICES</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Prime Pump &amp; Gear Services is an industrial rotating equipment repair, rebuilding, precision CNC machining, dynamic balancing, and manufacturing facility in Missouri City, Texas.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Missouri City, Texas Facility • In-House Precision Shop</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone} (Main &amp; 24/7 Emergency)
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-xs text-red-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>HEAVY ROTATING EQUIPMENT REBUILD SHOP</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-red-600 pl-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> About Our Company
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Repair &amp; Machining Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('equipment')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Equipment We Work On
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Rebuild Projects &amp; Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Contact &amp; Facility Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-red-600 pl-2">
              CORE SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav('services')} 
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-red-500" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities & SEO Keywords */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-red-600 pl-2">
              EQUIPMENT REPAIRED
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
              {[
                'Pumps', 'Gearboxes', 'Blowers', 'Airlocks', 'Extruders',
                'Mixers', 'Shafts', 'Grinders', 'Shredders', 'Screws',
                'Barrels', 'Cylinders', 'Agitators', 'Centrifuges'
              ].map((eq) => (
                <button
                  key={eq}
                  onClick={() => {
                    handleNav('equipment');
                  }}
                  className="bg-slate-900 hover:bg-slate-800 hover:text-white px-2.5 py-1 rounded border border-slate-800 text-[11px] transition-colors"
                >
                  {eq}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded">
                <span className="text-[11px] font-bold text-red-400 block uppercase">
                  Reverse Engineering Spares
                </span>
                <span className="text-[11px] text-slate-400">
                  Direct CMM reproduction for discontinued or long-lead industrial parts.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Quality Statement */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Prime Pump &amp; Gear Services. All Rights Reserved. Missouri City, Texas.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-wider">
            <span>REPAIR • REBUILD • MACHINE • MANUFACTURE • BALANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
