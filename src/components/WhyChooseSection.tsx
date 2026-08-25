import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Boxes, 
  Clock, 
  CheckCircle2,
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../data/companyData';
import { NavPage } from '../types';

interface WhyChooseSectionProps {
  onOpenQuoteModal: () => void;
  onNavigate: (page: NavPage) => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-red-500" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-red-500" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-red-500" />;
      case 'Boxes': return <Boxes className="w-8 h-8 text-red-500" />;
      case 'Clock': return <Clock className="w-8 h-8 text-red-500" />;
      default: return <Award className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200" id="why-choose-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
            <span>THE PRIME PUMP &amp; GEAR ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight uppercase">
            WHY CHOOSE PRIME PUMP &amp; GEAR
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Plant managers, maintenance superintendents, and reliability engineers trust us because we deliver high-precision workmanship without corporate delays or sub-tier outsourcing.
          </p>
        </div>

        {/* 5 Large Value Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`bg-slate-50 rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-red-600 hover:shadow-xl transition-all duration-200 group relative overflow-hidden ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-linear-to-br from-slate-900 to-slate-950 text-white border-slate-800' : ''
              }`}
              id={`why-pillar-${pillar.id}`}
            >
              {/* Top Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="space-y-4">
                {/* Large Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center border shadow-md transition-transform group-hover:scale-105 ${
                  idx === 0 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  {getPillarIcon(pillar.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl sm:text-2xl font-black font-heading tracking-tight uppercase ${
                    idx === 0 ? 'text-white' : 'text-slate-950'
                  }`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    idx === 0 ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metric / Highlight Callout */}
              <div className={`mt-8 pt-4 border-t flex items-baseline justify-between ${
                idx === 0 ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <div>
                  <span className={`text-2xl font-black font-heading ${
                    idx === 0 ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {pillar.metric}
                  </span>
                  <span className={`text-xs block font-semibold uppercase tracking-wider ${
                    idx === 0 ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {pillar.metricLabel}
                  </span>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  idx === 0 ? 'bg-red-500' : 'bg-slate-400 group-hover:bg-red-600'
                }`} />
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Facility Visit & Consultation Card */}
          <div className="bg-red-600 text-white rounded-xl p-8 flex flex-col justify-between shadow-xl border border-red-500 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-xl bg-red-700/80 border border-red-400/40 flex items-center justify-center text-white shadow-md">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight uppercase">
                24/7 HOT-JOB EXPEDITE
              </h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Need emergency line-stop turnaround? We assign dedicated machinists and millwrights around the clock until your rotating equipment is running.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>SUBMIT EXPEDITE REQUEST</span>
                <ArrowRight className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
