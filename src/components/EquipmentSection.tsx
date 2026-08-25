import React, { useState } from 'react';
import { 
  ChevronRight, 
  Wrench, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  RotateCw
} from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/companyData';
import { NavPage } from '../types';

interface EquipmentSectionProps {
  onOpenQuoteModal: (prefillEquipment?: string) => void;
  onNavigate: (page: NavPage) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
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
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200" id="equipment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded text-xs font-black uppercase tracking-widest mb-3">
            <RotateCw className="w-3.5 h-3.5 animate-spin" />
            <span>FULL ROTATING MACHINERY REPAIR SCOPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-950 tracking-tight uppercase">
            IF IT ROTATES, WE CAN HELP GET IT RUNNING AGAIN.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From precision high-RPM multi-stage pumps to massive shredder shafts and heavy planetary drives, our shop is fully equipped to restore, remachine, and rebuild your plant's critical machinery.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 p-3 rounded-lg border border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white text-slate-900 border border-slate-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Visual Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-white rounded-lg border border-slate-200 hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              id={`equipment-card-${eq.id}`}
            >
              <div>
                {/* Equipment Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={eq.image} 
                    alt={eq.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    {eq.category}
                  </span>
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold font-heading text-lg drop-shadow-sm uppercase">
                    {eq.name}
                  </h3>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                    {eq.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {eq.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] text-slate-700">
                      <strong className="text-slate-900 font-bold block mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-500" /> Common Wear &amp; Failures:
                      </strong>
                      <div className="flex flex-wrap gap-1">
                        {eq.commonIssues.map((issue, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-700 pt-1">
                      <strong className="text-slate-900 font-bold block mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-red-600" /> Our Rebuild Solutions:
                      </strong>
                      <div className="flex flex-wrap gap-1">
                        {eq.repairSolutions.map((sol, idx) => (
                          <span key={idx} className="bg-red-50 text-red-800 border border-red-100 px-1.5 py-0.5 rounded text-[10px]">
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Action */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal(eq.name)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2 rounded transition-colors flex items-center justify-center gap-1.5"
                  id={`quote-eq-btn-${eq.id}`}
                >
                  <span>REQUEST QUOTE FOR {eq.name.toUpperCase()}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Directory View Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('equipment')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 uppercase tracking-wider border-b-2 border-slate-900 hover:border-red-600 pb-1 transition-colors"
          >
            <span>VIEW COMPLETE EQUIPMENT DIRECTORY &amp; SPECS</span>
            <ArrowRight className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
