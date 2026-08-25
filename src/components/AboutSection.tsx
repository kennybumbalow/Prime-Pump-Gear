import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  TrendingDown,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { NavPage } from '../types';

interface AboutSectionProps {
  onNavigate: (page: NavPage) => void;
  onOpenQuoteModal: () => void;
  onOpenCalculator?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenCalculator
}) => {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Direct Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              <span>ABOUT PRIME PUMP &amp; GEAR SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight leading-tight uppercase">
              CRITICAL ROTATING EQUIPMENT REPAIRED &amp; REBUILT TO OEM TOLERANCES.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="text-slate-950 font-bold">Prime Pump &amp; Gear Services</strong> specializes in repairing, rebuilding, machining, manufacturing, and dynamic balancing for industrial rotating equipment and critical plant machinery across chemical plants, refineries, manufacturing facilities, power generation, and heavy industrial operations.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Based in <strong>Missouri City, Texas</strong>, our heavy-duty facility is equipped with heavy precision machining equipment, large-swing manual and CNC lathes, cylindrical grinders, twin-wire arc thermal spray systems, and dynamic balancing bays. We eliminate third-party delays by executing every phase of inspection, teardown, machining, assembly, and testing in-house.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Complete In-House Machining</h4>
                  <p className="text-xs text-slate-600 mt-0.5">CNC turning, milling, bore alignment &amp; journal micro-grinding.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Reverse-Engineering Obsolete Parts</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Exact reproductions when OEM parts have 20+ week lead times.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dynamic Balancing to ISO G1.0/G2.5</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Eliminates damaging harmonic vibrations to extend bearing life.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">24/7 Emergency Response</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Dedicated machinists and millwrights for rapid turnaround.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-md flex items-center gap-2 transition-all shadow-md"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-red-500" />
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-md flex items-center gap-2 transition-all shadow-lg shadow-red-700/20"
              >
                <span>REQUEST REPAIR QUOTE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Industrial Imagery & Facility Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Main Facility Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 relative group">
                <img 
                  src={ASSET_IMAGES.heroFacility} 
                  alt="Prime Pump & Gear industrial repair facility" 
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block">
                    MISSOURI CITY REPAIR &amp; MACHINING SHOP
                  </span>
                  <p className="text-sm font-bold text-slate-100">
                    Precision rotating machinery overhaul and dynamic balancing bays.
                  </p>
                </div>
              </div>

              {/* Floating Downtime Reduction Highlight Badge */}
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-2xl mt-4 sm:-mt-8 sm:ml-8 relative z-10">
                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-wider">
                    <TrendingDown className="w-4 h-4" />
                    <span>DOWNTIME IMPACT</span>
                  </div>
                  <span className="text-[11px] bg-red-600/20 text-red-400 font-bold px-2 py-0.5 rounded border border-red-500/30">
                    Fast-Track Rebuild
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-950/80 p-3 rounded border border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-white block font-heading">
                      24–72 HR
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">
                      Emergency Hot-Job Turnaround
                    </span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded border border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-red-500 block font-heading">
                      100%
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">
                      Single-Source In-House Shop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
