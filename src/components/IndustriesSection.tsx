import React, { useState } from 'react';
import { 
  Factory, 
  FlaskConical, 
  Building2, 
  Layers, 
  Recycle, 
  FileText, 
  Utensils, 
  Zap, 
  Cpu, 
  Wrench,
  ChevronRight,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { IndustryItem, NavPage } from '../types';

interface IndustriesSectionProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  const getIndustryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Factory': return <Factory className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Recycle': return <Recycle className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      default: return <Factory className={className} />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800" id="industries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
            <span>TAILORED INDUSTRIAL EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight uppercase">
            INDUSTRIES WE SERVE
          </h2>

          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Every industry has distinct wear patterns, operating environments, and downtime pressures. We tailor our machining, metallizing, and rebuild processes to your plant's exact specifications.
          </p>
        </div>

        {/* Desktop Interactive Layout: Left Selector + Right Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Industry Selection Buttons (10 Industries) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-red-600/15 border-red-500 text-white shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  id={`industry-btn-${ind.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${
                      isSelected ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}>
                      {getIndustryIcon(ind.iconName, "w-4 h-4")}
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wide">
                      {ind.name}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${
                    isSelected ? 'text-red-500 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  } transition-transform`} />
                </button>
              );
            })}
          </div>

          {/* Selected Industry Deep Dive Feature Card */}
          <div className="lg:col-span-7 bg-slate-900 rounded-xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-600 rounded-lg text-white shadow-md">
                    {getIndustryIcon(selectedIndustry.iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block">
                      SECTOR PROFILE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block bg-slate-950 px-3 py-1 rounded text-xs text-amber-400 font-bold border border-slate-800">
                  In-House Turnaround
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Primary Equipment in this sector */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  CRITICAL ROTATING EQUIPMENT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.primaryEquipment.map((eq, idx) => (
                    <span key={idx} className="bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1 rounded text-xs font-medium">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Common Failure Modes & Prime Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block uppercase mb-1">
                    Typical Operational Challenges:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {selectedIndustry.commonFailures.map((cf, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-red-500">•</span>
                        <span>{cf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800">
                  <span className="text-xs font-bold text-white block uppercase mb-1">
                    Prime PGS Solution:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedIndustry.primeSolution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>24/7 Outage &amp; Turnaround Support Available</span>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`${selectedIndustry.name} Equipment`)}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg shadow-red-700/20 transition-all flex items-center justify-center gap-2"
              >
                <span>REQUEST {selectedIndustry.name.toUpperCase()} QUOTE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View All Industries Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('industries')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>EXPLORE DETAILED INDUSTRY CAPABILITY BREAKDOWNS</span>
            <ArrowRight className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
