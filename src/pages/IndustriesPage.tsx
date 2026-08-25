import React from 'react';
import { INDUSTRIES_DATA, COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
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
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { NavPage } from '../types';

interface IndustriesPageProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-red-500" />;
      case 'Factory': return <Factory className="w-6 h-6 text-red-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-red-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-red-500" />;
      case 'Recycle': return <Recycle className="w-6 h-6 text-red-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-red-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-red-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-red-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-red-500" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-red-500" />;
      default: return <Factory className="w-6 h-6 text-red-500" />;
    }
  };

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
              <span>SPECIALIZED SECTOR EXPERTISE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase">
              INDUSTRIES WE SERVE
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Tailored rotating equipment repair, thermal spray hardfacing, in-house machining, and rapid turnaround programs for industrial processing facilities.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Industries Detailed Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-900 rounded-xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-red-600 transition-all shadow-xl space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-red-600 transition-colors">
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white uppercase group-hover:text-red-400 transition-colors">
                        {ind.name}
                      </h3>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Rapid Turnaround Specialist
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ind.description}
                </p>

                {/* Primary Equipment */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
                    Critical Equipment We Overhaul:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.primaryEquipment.map((eq, idx) => (
                      <span key={idx} className="bg-slate-950 text-slate-300 px-2.5 py-1 rounded text-xs border border-slate-800">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prime PGS Solution */}
                <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wide block flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Tailored Repair Approach:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.primeSolution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal(`${ind.name} Equipment`)}
                  className="w-full bg-slate-950 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-800 hover:border-red-500"
                >
                  <span>REQUEST {ind.name.toUpperCase()} QUOTE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
