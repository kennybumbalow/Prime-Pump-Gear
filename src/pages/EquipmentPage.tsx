import React, { useState } from 'react';
import { EQUIPMENT_DATA, COMPANY_INFO, ASSET_IMAGES } from '../data/companyData';
import { 
  RotateCw, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  Phone,
  Wrench,
  Cpu
} from 'lucide-react';
import { NavPage } from '../types';

interface EquipmentPageProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Pumps', 'Gears & Drives', 'Air & Gas', 'Processing & Extrusion', 'Heavy Components'];

  const filteredEquipment = EQUIPMENT_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              <RotateCw className="w-3.5 h-3.5 animate-spin" />
              <span>COMPLETE MACHINERY DIRECTORY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight uppercase">
              IF IT ROTATES, WE CAN HELP GET IT RUNNING AGAIN.
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300 leading-relaxed">
              Explore the full range of rotating equipment we repair, rebuild, remachine, and dynamically balance at our Missouri City, Texas facility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Category Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
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
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-slate-900 rounded-xl border border-slate-800 hover:border-red-600/70 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={eq.image} 
                    alt={eq.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 right-3 bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-slate-800">
                    {eq.category}
                  </span>
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold font-heading text-lg uppercase drop-shadow-sm">
                    {eq.name}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wide">
                    {eq.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {eq.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div>
                      <strong className="text-[11px] text-slate-300 uppercase tracking-wider block mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-red-500" /> Common Failure Modes:
                      </strong>
                      <div className="flex flex-wrap gap-1">
                        {eq.commonIssues.map((issue, idx) => (
                          <span key={idx} className="bg-slate-950 text-slate-400 px-2 py-0.5 rounded text-[10px] border border-slate-800">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <strong className="text-[11px] text-white uppercase tracking-wider block mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Repair &amp; Machining Scope:
                      </strong>
                      <div className="flex flex-wrap gap-1">
                        {eq.repairSolutions.map((sol, idx) => (
                          <span key={idx} className="bg-red-950/40 text-red-300 border border-red-900/60 px-2 py-0.5 rounded text-[10px]">
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuoteModal(eq.name)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-700 hover:border-red-500"
                >
                  <span>REQUEST QUOTE FOR {eq.name.toUpperCase()}</span>
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
