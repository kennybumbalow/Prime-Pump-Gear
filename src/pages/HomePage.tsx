import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { EquipmentSection } from '../components/EquipmentSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { ProcessSection } from '../components/ProcessSection';
import { QuoteSection } from '../components/QuoteSection';
import { InteractiveSlider } from '../components/InteractiveSlider';
import { TESTIMONIALS, COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { NavPage } from '../types';
import { 
  ShieldCheck, 
  Clock, 
  Quote, 
  Wrench, 
  ChevronRight, 
  Phone, 
  ArrowRight,
  TrendingDown,
  Calculator
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage, sectionId?: string) => void;
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onOpenCalculator: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenCalculator
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* 2. About Prime Pump & Gear Section */}
      <AboutSection 
        onNavigate={onNavigate} 
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenCalculator={onOpenCalculator}
      />

      {/* 3. Core Services Grid */}
      <ServicesSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* Interactive Before & After Rebuild Feature Showcase */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
                <span>PRECISION REPAIR SHOWCASE</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
                STERLING EXTRUDER GEARBOX REBUILD &amp; OVERHAUL
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Complete teardown, line boring of bearing bores, thrust bearing replacement, precision gear tooth alignment, barrel flange re-machining, new high-spec seals, factory seafoam protective coating, and dynamic spin testing to restore extreme uptime.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenCalculator}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-4 py-3 rounded border border-slate-700 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-red-500" />
                  <span>CALCULATE DOWNTIME SAVINGS</span>
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-4 py-3 rounded flex items-center gap-2 shadow-md"
                >
                  <span>SEE ALL PROJECTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InteractiveSlider
                beforeImage={ASSET_IMAGES.sterlingBefore}
                afterImage={ASSET_IMAGES.sterlingAfter}
                beforeLabel="BEFORE: Teardown & Housing Bore Refurbishment"
                afterLabel="AFTER: Precision Rebuilt Sterling Extruder Gearbox"
                title="Sterling Extruder Gearbox Complete Rebuild"
                subtitle="Complete teardown, line-bored housing, thrust bearing replacement, precision machining & 100% factory tolerances restored."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Equipment We Work On */}
      <EquipmentSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* 5. Industries Section */}
      <IndustriesSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* 6. Why Choose Prime Pump & Gear */}
      <WhyChooseSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* 7. 5-Step Repair Process */}
      <ProcessSection 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigate={onNavigate} 
      />

      {/* Testimonials / Plant Experience */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700/60 text-red-400 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
              <span>PROVEN GULF COAST RELIABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase">
              TRUSTED BY INDUSTRIAL PLANT LEADERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-red-500">
                    <Quote className="w-8 h-8 opacity-60" />
                    <span className="text-[11px] font-bold bg-red-600/15 text-red-400 px-2 py-0.5 rounded border border-red-600/30">
                      {t.highlight}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs">
                  <strong className="text-white font-bold block">{t.role}</strong>
                  <span className="text-slate-400">{t.companyType} • {t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Request a Quote Section */}
      <QuoteSection />
    </div>
  );
};
