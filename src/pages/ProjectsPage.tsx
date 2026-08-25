import React, { useState } from 'react';
import { PROJECTS_GALLERY, COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Search, 
  Wrench, 
  Layers, 
  ShieldCheck,
  TrendingDown,
  Sparkles
} from 'lucide-react';
import { ProjectItem, NavPage } from '../types';
import { InteractiveSlider } from '../components/InteractiveSlider';

interface ProjectsPageProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Gearbox',
    'Pump',
    'Machining',
    'Welding',
    'Metal Spray',
    'Balancing',
    'Finished'
  ];

  const filteredProjects = PROJECTS_GALLERY.filter((p) => {
    return selectedCategory === 'All' || p.category === selectedCategory;
  });

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
              <span>PROVEN REPAIR RECORD</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight uppercase">
              PROJECTS &amp; REPAIR GALLERY
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Explore completed overhauls, reverse-engineered shafts, thermal spray journal recoveries, and ISO dynamic balancing projects from our Missouri City machine and rebuild facility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        {/* Interactive Before & After Spotlight */}
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-500 block">
                FEATURED REBUILD SPOTLIGHT
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                Sterling Extruder Gearbox Complete Overhaul &amp; Rebuild
              </h2>
            </div>
            <span className="text-xs font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded border border-red-500/30">
              Turnaround: Fast-Track Expedited Rebuild
            </span>
          </div>

          <InteractiveSlider
            beforeImage={ASSET_IMAGES.sterlingBefore}
            afterImage={ASSET_IMAGES.sterlingAfter}
            beforeLabel="BEFORE: Teardown & Housing Bore Refurbishment"
            afterLabel="AFTER: Precision Rebuilt Sterling Extruder Gearbox"
            title="Sterling Extruder Gearbox Complete Overhaul"
            subtitle="Full teardown, thrust bearing replacement, barrel flange machining, precision gearing & 100% factory tolerances restored."
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat} {cat === 'All' ? `(${PROJECTS_GALLERY.length})` : ''}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400">
            Showing {filteredProjects.length} Verified Rebuilds
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900 rounded-xl border border-slate-800 hover:border-red-600 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-slate-700">
                    {proj.category}
                  </span>

                  <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {proj.turnaroundTime}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide block">
                      {proj.industry}
                    </span>
                    <h3 className="text-white font-bold font-heading text-base line-clamp-2 uppercase">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div className="space-y-2 text-xs">
                    <div>
                      <strong className="text-slate-400 uppercase font-semibold block text-[10px]">
                        Operational Challenge:
                      </strong>
                      <p className="text-slate-300 leading-snug">
                        {proj.challenge}
                      </p>
                    </div>

                    <div>
                      <strong className="text-red-400 uppercase font-semibold block text-[10px]">
                        Prime PGS Rebuild Solution:
                      </strong>
                      <p className="text-slate-200 leading-snug">
                        {proj.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verification Metrics */}
                  <div className="pt-3 border-t border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Verified QA Metrics:
                    </span>
                    <div className="space-y-1">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex justify-between text-xs bg-slate-950 px-2.5 py-1 rounded border border-slate-800/80">
                          <span className="text-slate-400">{m.label}:</span>
                          <span className="font-bold text-red-400">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-4 bg-slate-950 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuoteModal(proj.equipmentType)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-700 hover:border-red-500"
                >
                  <span>REQUEST QUOTE FOR SIMILAR REPAIR</span>
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
