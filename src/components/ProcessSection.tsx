import React, { useState } from 'react';
import { 
  Search, 
  FileCheck, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { REPAIR_PROCESS_STEPS } from '../data/companyData';
import { ProcessStep, NavPage } from '../types';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
  onNavigate: (page: NavPage) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-white" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-white" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-white" />;
      case 'Settings': return <Settings className="w-5 h-5 text-white" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-white" />;
      default: return <Settings className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800" id="repair-process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
            <span>QUALITY REPAIR METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight uppercase">
            OUR 5-STEP REPAIR PROCESS
          </h2>

          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Every piece of rotating equipment that enters our Missouri City facility follows a rigorous, documented quality control workflow from initial teardown to final spin test.
          </p>
        </div>

        {/* 5-Step Timeline - Desktop Step Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
          {REPAIR_PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative group ${
                  isCurrent
                    ? 'bg-slate-950 border-red-500 shadow-xl'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-950 hover:border-slate-700 text-slate-400'
                }`}
                id={`timeline-step-tab-${step.step}`}
              >
                {/* Active Indicator Pin */}
                {isCurrent && (
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rotate-45" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-black font-heading ${
                    isCurrent ? 'text-red-500' : 'text-slate-600 group-hover:text-slate-400'
                  }`}>
                    {step.step}
                  </span>
                  <div className={`p-1.5 rounded ${
                    isCurrent ? 'bg-red-600' : 'bg-slate-800'
                  }`}>
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {step.action}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Card (Desktop Showcase) */}
        <div className="hidden lg:block bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-red-500 font-heading">
                  {REPAIR_PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-2xl font-black text-white font-heading uppercase">
                  — {REPAIR_PROCESS_STEPS[activeStep].title}
                </span>
              </div>

              <p className="text-base text-red-400 font-bold">
                {REPAIR_PROCESS_STEPS[activeStep].action}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {REPAIR_PROCESS_STEPS[activeStep].description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  KEY QUALITY VERIFICATIONS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {REPAIR_PROCESS_STEPS[activeStep].keyChecks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded text-xs text-slate-200 border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-5 space-y-3">
              {REPAIR_PROCESS_STEPS[activeStep].image && (
                <div className="rounded-xl overflow-hidden border border-slate-800 relative h-44 shadow-lg group">
                  <img
                    src={REPAIR_PROCESS_STEPS[activeStep].image}
                    alt={REPAIR_PROCESS_STEPS[activeStep].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                      Step {REPAIR_PROCESS_STEPS[activeStep].step} In-Shop Procedure
                    </span>
                    <span className="text-xs font-bold bg-red-600/90 px-2 py-0.5 rounded">
                      {REPAIR_PROCESS_STEPS[activeStep].standardTime}
                    </span>
                  </div>
                </div>
              )}

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3 text-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-md">
                    {getStepIcon(REPAIR_PROCESS_STEPS[activeStep].iconName)}
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Phase Turnaround Window
                    </span>
                    <div className="text-xl font-black text-white font-heading">
                      {REPAIR_PROCESS_STEPS[activeStep].standardTime}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-left">
                  All inspection measurements and QA signatures logged into your equipment's final release packet.
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors"
                  >
                    START INSPECTION NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Step Cards List */}
        <div className="lg:hidden space-y-4">
          {REPAIR_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-lg"
            >
              {step.image && (
                <div className="relative h-36 w-full">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute bottom-2 right-3 text-[11px] font-bold bg-red-600/90 text-white px-2 py-0.5 rounded">
                    {step.standardTime}
                  </span>
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-red-500 font-heading">
                      {step.step}
                    </span>
                    <span className="text-lg font-bold text-white font-heading uppercase">
                      {step.title}
                    </span>
                  </div>
                  <div className="p-2 bg-red-600 rounded text-white">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <p className="text-xs font-bold text-red-400">
                  {step.action}
                </p>
                <p className="text-xs text-slate-300">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {step.keyChecks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
