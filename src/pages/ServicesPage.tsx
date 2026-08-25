import React from 'react';
import { 
  SERVICES_DATA, 
  COMPANY_INFO,
  ASSET_IMAGES
} from '../data/companyData';
import { 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Phone,
  Cpu,
  Layers,
  Wrench
} from 'lucide-react';
import { NavPage } from '../types';

interface ServicesPageProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('${ASSET_IMAGES.heroFacility}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-4">
              <span>TURNKEY INDUSTRIAL CAPABILITIES</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase">
              REPAIR &amp; MACHINING SERVICES
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Full-service rotating equipment overhaul, heavy CNC machining, precision OD/ID grinding, twin-wire metal spraying, dynamic balancing, and component manufacturing in Missouri City, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Services List - In-Depth Sections with specs */}
      <div className="py-16 space-y-20">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xs shadow-2xl ${
                isEven ? '' : ''
              }`}>
                {/* Visual / Imagery Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                  <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-slate-950 relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-72 sm:h-84 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                    
                    {/* Turnaround Pill */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-200 border border-slate-700 px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{service.typicalTurnaround}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block">
                        Missouri City Machine Bay
                      </span>
                      <span className="text-sm font-bold block">
                        {service.title} In-House Setup
                      </span>
                    </div>
                  </div>

                  {/* Quick Specs Grid Box */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Shop Capacities &amp; Tolerances:
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex justify-between border-b border-slate-900 pb-1">
                          <span className="text-slate-400">{cap.label}:</span>
                          <span className="font-bold text-white text-right ml-2">{cap.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-red-500 bg-red-950/80 px-2.5 py-1 rounded border border-red-800/60">
                        SERVICE 0{index + 1}
                      </span>
                      <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                        In-House Precision Shop
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight uppercase">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-widest text-red-400">
                      SERVICE SCOPE &amp; PROCEDURES:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-950/60 p-2.5 rounded border border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Standards */}
                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                      ENGINEERING SPECIFICATIONS:
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {service.specifications.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Request Quote Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md shadow-xl shadow-red-700/20 flex items-center justify-center gap-2"
                      id={`page-service-quote-btn-${service.id}`}
                    >
                      <span>REQUEST A QUOTE FOR THIS SERVICE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      <span>Questions? Call {COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
            CUSTOM OR OBSOLETE ROTATING EQUIPMENT?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            We repair and remanufacture discontinued shafts, housings, gears, and impellers across all equipment brands. Send us your drawings or ship the damaged part for reverse-engineering.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal('Custom Machining & Reverse Engineering')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md shadow-2xl shadow-red-700/30"
            >
              REQUEST REVERSE-ENGINEERING QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
