import React from 'react';
import { 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Wrench, 
  ArrowUpRight,
  Activity,
  Layers,
  Flame
} from 'lucide-react';
import { COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { NavPage } from '../types';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onNavigate: (page: NavPage, sectionId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  return (
    <section className="relative bg-slate-950 text-white min-h-[680px] lg:min-h-[740px] flex flex-col justify-between overflow-hidden border-b border-slate-800">
      {/* Industrial Heavy Equipment Background with Dark Navy / Charcoal Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${ASSET_IMAGES.heroFacility}')`
        }}
      >
        {/* Layered high-contrast navy & charcoal gradients */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/60" />
        {/* Subtle industrial grid */}
        <div className="absolute inset-0 industrial-grid opacity-30" />
      </div>

      {/* Decorative Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-red-700 via-red-600 to-red-800 z-10" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-12 w-full my-auto">
        <div className="max-w-4xl">
          {/* Tag & Missouri City Badge */}
          <div className="inline-flex items-center gap-2.5 bg-red-950/80 border border-red-600/70 px-4 py-2 rounded-md mb-6 backdrop-blur-md shadow-lg shadow-red-950/50">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-red-300">
              MISSOURI CITY, TEXAS FACILITY • HEAVY INDUSTRIAL REBUILD &amp; REPAIR
            </span>
          </div>

          {/* Slogan pill */}
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 bg-slate-900/90 border border-slate-700 px-3.5 py-1.5 rounded-md inline-block">
              {COMPANY_INFO.slogan}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] text-white uppercase text-balance drop-shadow-md">
            ROTATING EQUIPMENT REPAIR.{' '}
            <span className="text-red-500 underline decoration-red-600/60 decoration-4 underline-offset-8">
              REBUILT TO PERFORM.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow">
            Industrial pump, gearbox, blower, and rotating equipment repair, rebuilding, machining, and manufacturing services.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              id="hero-quote-btn"
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-md shadow-2xl shadow-red-700/40 hover:shadow-red-700/60 transition-all flex items-center justify-center gap-3 border border-red-500 group"
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              id="hero-call-btn"
              className="bg-slate-900/90 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-md border border-slate-700 hover:border-slate-500 shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-red-500" />
              <span>CALL US: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-bold tracking-wider text-slate-300 hover:text-white uppercase px-4 py-3 flex items-center justify-center gap-1.5 hover:underline underline-offset-4"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowUpRight className="w-4 h-4 text-red-400" />
            </button>
          </div>

          {/* Fast Capabilities Badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-red-500">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">24/7 Rapid Response</span>
                <span className="text-[11px] text-slate-400">Emergency breakdown pickup</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-red-500">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">CNC In-House Shop</span>
                <span className="text-[11px] text-slate-400">Shaft turning &amp; grinding</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-red-500">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">ISO Dynamic Balance</span>
                <span className="text-[11px] text-slate-400">G1.0 / G2.5 certified</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-red-500">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Complete Rebuilds</span>
                <span className="text-[11px] text-slate-400">Pumps, gears, blowers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Ticker / Core Pillars Banner */}
      <div className="relative z-10 bg-slate-900 border-t border-b border-slate-800 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div className="w-full sm:w-auto text-center">
            <span className="text-sm sm:text-lg font-black uppercase tracking-widest text-white font-heading">
              REPAIR <span className="text-red-500">•</span> REBUILD <span className="text-red-500">•</span> MACHINE <span className="text-red-500">•</span> MANUFACTURE <span className="text-red-500">•</span> BALANCE
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-1.5 text-red-400 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Heavy Industrial Equipment Specialists
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              24/7 Rapid Rebuild Response
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              In-House CNC Machining &amp; Balancing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
