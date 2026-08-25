import React from 'react';
import { COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2,
  Send,
  Upload,
  ArrowRight
} from 'lucide-react';
import { QuoteSection } from '../components/QuoteSection';

export const ContactPage: React.FC = () => {
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
              <span>MISSOURI CITY, TEXAS FACILITY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase">
              LET’S GET YOUR EQUIPMENT BACK IN SERVICE.
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Reach out to our Missouri City rotating equipment repair shop for emergency response, machining evaluations, and rapid repair quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Contact Details & Location Map Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold font-heading uppercase text-white border-b border-slate-800 pb-3">
                DIRECT CONTACT CHANNELS
              </h2>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-3 bg-red-600 rounded-lg text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase block">
                      Main Phone &amp; 24/7 Hotline
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-lg font-black text-white hover:text-red-400 transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-red-400 font-semibold block">
                      24/7 Emergency Dispatch Available
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-3 bg-red-600 rounded-lg text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase block">
                      Quotes &amp; Service Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      Send part drawings, RFQs, &amp; photos
                    </span>
                  </div>
                </div>

                {/* Location & Facility */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-3 bg-red-600 rounded-lg text-white shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase block">
                      Facility Location
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      Missouri City, Texas
                    </p>
                    <p className="text-xs text-red-400 font-bold mt-1">
                      Full-Service Industrial Machining &amp; Balancing Shop
                    </p>
                  </div>
                </div>
              </div>

              {/* Shop Hours & Emergency */}
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white uppercase block font-bold">Standard Shop Hours:</strong>
                  <span className="text-slate-300">Monday – Friday: 7:00 AM – 6:00 PM CST</span>
                  <span className="text-red-400 block font-bold mt-1">
                    24/7 Emergency Hotline &amp; Rapid Breakdown Response
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Representation Card */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xl font-bold font-heading uppercase text-white">
                  MISSOURI CITY REPAIR &amp; MACHINING HUB
                </h3>
                <span className="text-xs font-extrabold bg-slate-950 text-amber-400 px-3 py-1 rounded border border-slate-800">
                  30-TON OVERHEAD CRANE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our heavy industrial facility in Missouri City, Texas is equipped to overhaul large rotating assemblies, pump skids, multi-stage drives, and heavy gearboxes with full in-house machining, thermal spray, and balancing capabilities.
              </p>
            </div>

            {/* Visual Industrial Map / Facility Representation */}
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-6 text-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-slate-950/80" />

              <div className="relative z-10 space-y-3 max-w-md">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-red-700/50 animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-heading uppercase text-white">
                  MISSOURI CITY, TEXAS FACILITY
                </h4>
                <p className="text-xs text-slate-300">
                  Heavy-duty rotating equipment machining, rebuilding, dynamic balancing, and manufacturing.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 pt-2 text-[11px] text-slate-300">
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 font-bold text-amber-400">Overhead Crane Up to 30 Tons</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 font-semibold">In-House CNC Machining</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 font-semibold">Twin-Wire Thermal Spray</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 font-semibold">ISO Dynamic Balancing</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" /> Insured &amp; Rigged Transport Support
              </span>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="font-bold text-red-400 hover:text-white uppercase flex items-center gap-1"
              >
                <span>Call {COMPANY_INFO.phone}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Quote & Photo Upload Form */}
        <QuoteSection />
      </div>
    </div>
  );
};
