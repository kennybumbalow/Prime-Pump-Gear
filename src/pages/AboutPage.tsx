import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Boxes, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Disc, 
  Sparkles, 
  Gauge,
  Factory,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, WHY_CHOOSE_PILLARS, ASSET_IMAGES } from '../data/companyData';
import { NavPage } from '../types';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const capabilitiesList = [
    { title: 'Industrial Repair', desc: 'Overhaul and restoration of pumps, gearboxes, blowers, and high-wear machinery components.' },
    { title: 'Equipment Rebuilding', desc: 'Turnkey teardown, non-destructive testing, precision assembly, and load spin testing.' },
    { title: 'CNC Machining', desc: 'Multi-axis CNC turning and horizontal milling for tight-tolerance industrial parts.' },
    { title: 'Precision Grinding', desc: 'OD/ID cylindrical and surface grinding to micro-finish bearing seat specifications.' },
    { title: 'Welding & Cladding', desc: 'ASME-qualified structural welding, shaft build-up, and corrosion-resistant hardfacing.' },
    { title: 'Custom Fabrication', desc: 'Heavy structural baseplates, motor adapters, seal gland plates, and skid packages.' },
    { title: 'Metal Spraying (Thermal Spray)', desc: 'Twin-wire arc dimensional restoration without substrate heat distortion or warping.' },
    { title: 'Dynamic Balancing', desc: 'Multi-plane dynamic balancing up to 15,000 lbs certified to ISO 1940 G1.0/G2.5.' },
    { title: 'Manufacturing', desc: 'Precision reproduction of shafts, impellers, sleeves, bushings, and wear rings.' },
    { title: 'Reverse Engineering', desc: 'Complete digital CMM modeling to manufacture discontinued or long-lead OEM spares.' },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-4">
              <span>MISSOURI CITY, TEXAS PRECISION REPAIR FACILITY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase">
              ABOUT PRIME PUMP &amp; GEAR SERVICES
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Industrial rotating equipment repair, rebuilding, precision CNC machining, dynamic balancing, and component manufacturing in Missouri City, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
                <span>OUR CORE MISSION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-950 tracking-tight uppercase">
                REDUCING CUSTOMER DOWNTIME THROUGH PRECISION &amp; RELIABILITY
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                At <strong className="text-slate-950">Prime Pump &amp; Gear Services</strong>, we know that when critical rotating equipment fails, every minute of lost production impacts your plant's bottom line. Located in <strong>Missouri City, Texas</strong>, our heavy-duty industrial facility is fully equipped to handle end-to-end repairs, overhauls, and complete manufacturing without relying on third-party subcontractors.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you need an emergency pump rebuild, an obsolete extruder drive gear reverse-engineered, or a large rotor dynamically balanced, our master machinists and millwrights ensure your machinery is restored to <strong>OEM or superior operating tolerances</strong>.
              </p>

              {/* Quality Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 font-bold text-sm block">Quality Workmanship</strong>
                  <span className="text-xs text-slate-600">Rigorous NDT and ISO quality standards.</span>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 font-bold text-sm block">Extreme Precision</strong>
                  <span className="text-xs text-slate-600">Machining tolerances within ±0.0002".</span>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 font-bold text-sm block">Turnkey Reliability</strong>
                  <span className="text-xs text-slate-600">Every rebuild tested before delivery.</span>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-slate-900 font-bold text-sm block">Custom Solutions</strong>
                  <span className="text-xs text-slate-600">Metallurgical upgrades for severe wear.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900">
                <img 
                  src={ASSET_IMAGES.gearboxRebuild} 
                  alt="Industrial gear machining and precision rebuild"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <span className="text-2xl font-black text-red-600 font-heading block">±0.0002"</span>
                  <span className="text-[11px] font-bold text-slate-600 uppercase">Machining Tolerance</span>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <span className="text-2xl font-black text-slate-900 font-heading block">15,000 LB</span>
                  <span className="text-[11px] font-bold text-slate-600 uppercase">Dynamic Balancing</span>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <span className="text-2xl font-black text-red-600 font-heading block">24/7</span>
                  <span className="text-[11px] font-bold text-slate-600 uppercase">Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive 10 In-House Capabilities Breakdown */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
              <span>COMPLETE SHOP CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight uppercase">
              WHAT PRIME PUMP &amp; GEAR PROVIDES
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Explore our full spectrum of heavy equipment repair, machining, metallurgical restoration, and manufacturing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilitiesList.map((cap, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-red-600 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-red-500">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold font-heading text-white uppercase group-hover:text-red-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-[11px] font-bold text-red-400 hover:text-red-300 uppercase flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase text-white">
            READY TO DISCUSS YOUR ROTATING EQUIPMENT REPAIR?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Contact our Missouri City engineering and machine shop for an immediate inspection evaluation or repair quote.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md shadow-xl shadow-red-700/30"
            >
              REQUEST A REPAIR QUOTE
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
