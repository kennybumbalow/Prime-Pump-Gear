import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  Cog, 
  Wind, 
  Cpu, 
  Disc, 
  Flame, 
  Sparkles, 
  Gauge,
  CheckCircle2,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem, NavPage } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-red-500" />;
      case 'Cog': return <Cog className="w-5 h-5 text-red-500" />;
      case 'Wind': return <Wind className="w-5 h-5 text-red-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-red-500" />;
      case 'Disc': return <Disc className="w-5 h-5 text-red-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-red-500" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-red-500" />;
      default: return <Cog className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800" id="services-section">
      {/* Background industrial grid */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
              <span>TURNKEY ROTATING EQUIPMENT CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight uppercase">
              INDUSTRIAL REPAIR &amp; MACHINING SERVICES
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Full-service inspection, precision machining, dynamic balancing, thermal spray recovery, and complete overhauls under one roof.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('services')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-3 rounded-md flex items-center gap-2 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <span>VIEW DETAILED SPECS</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* 8 Professional Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 rounded-lg border border-slate-800 hover:border-red-600/70 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-red-950/30"
              id={`service-card-${service.id}`}
            >
              {/* Card Image with subtle hover zoom */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img 
                  src={service.image} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Service Icon Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700 p-2 rounded-md shadow-md backdrop-blur-xs flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Quick Turnaround Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-slate-300">
                  <span className="bg-slate-900/90 px-2 py-1 rounded border border-slate-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-500" />
                    {service.typicalTurnaround.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Service Bullets */}
                  <div className="mt-4 pt-3 border-t border-slate-900 space-y-1.5">
                    {service.bullets.slice(0, 4).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA for this specific service */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="w-full bg-slate-900 hover:bg-red-600 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-700 hover:border-red-500"
                    id={`service-quote-btn-${service.id}`}
                  >
                    <span>QUOTE THIS SERVICE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Rapid Quote Request */}
        <div className="mt-12 p-6 rounded-lg bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-500">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-heading uppercase">
                Custom Obsolete Component Machining &amp; Reverse Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                OEM parts unavailable or on long backorder? We reverse-engineer shafts, gears, sleeves, and housings to exact or improved metallurgical specifications.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Custom Machining & Reverse Engineering')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded shadow-lg shadow-red-700/30 whitespace-nowrap shrink-0 transition-transform active:scale-95"
          >
            REQUEST PART QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};
