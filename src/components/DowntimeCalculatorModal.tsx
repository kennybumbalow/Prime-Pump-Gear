import React, { useState } from 'react';
import { X, Calculator, TrendingDown, DollarSign, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface DowntimeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const DowntimeCalculatorModal: React.FC<DowntimeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal
}) => {
  const [hourlyDowntimeCost, setHourlyDowntimeCost] = useState<number>(5000);
  const [oemLeadWeeks, setOemLeadWeeks] = useState<number>(20);
  const [primeTurnaroundDays, setPrimeTurnaroundDays] = useState<number>(5);
  const [dailyOperatingHours, setDailyOperatingHours] = useState<number>(24);

  if (!isOpen) return null;

  // Calculations
  const oemDays = oemLeadWeeks * 7;
  const daysSaved = Math.max(0, oemDays - primeTurnaroundDays);
  const hoursSaved = daysSaved * dailyOperatingHours;
  const estimatedSavings = hoursSaved * hourlyDowntimeCost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 text-white my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white rounded-full transition-colors"
          aria-label="Close calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-3 bg-red-600 rounded-lg text-white shadow-md">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block">
              OPERATIONAL ROI ESTIMATOR
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
              DOWNTIME COST VS. REBUILD SAVINGS
            </h3>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Plant Hourly Downtime Cost ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
              <input
                type="number"
                min="100"
                step="500"
                value={hourlyDowntimeCost}
                onChange={(e) => setHourlyDowntimeCost(Number(e.target.value))}
                className="w-full pl-8 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Daily Plant Operating Hours
            </label>
            <select
              value={dailyOperatingHours}
              onChange={(e) => setDailyOperatingHours(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value={8}>8 Hours / Day (Single Shift)</option>
              <option value={16}>16 Hours / Day (Double Shift)</option>
              <option value={24}>24 Hours / Day (Continuous 24/7)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              New OEM Replacement Lead Time
            </label>
            <select
              value={oemLeadWeeks}
              onChange={(e) => setOemLeadWeeks(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value={8}>8 Weeks</option>
              <option value={14}>14 Weeks</option>
              <option value={20}>20 Weeks (Average OEM backlog)</option>
              <option value={26}>26 Weeks (6 Months)</option>
              <option value={40}>40+ Weeks (Discontinued/Obsolete)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Prime PGS Rebuild Turnaround
            </label>
            <select
              value={primeTurnaroundDays}
              onChange={(e) => setPrimeTurnaroundDays(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value={2}>2 Days (Emergency 24/7 Hot Job)</option>
              <option value={5}>5 Days (Standard Rebuild)</option>
              <option value={8}>8 Days (Extensive Remanufacture)</option>
            </select>
          </div>
        </div>

        {/* Calculated Result Display */}
        <div className="bg-slate-950 p-6 rounded-xl border border-red-500/50 shadow-xl space-y-4">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-red-400 block">
              ESTIMATED OPERATIONAL DOWNTIME SAVINGS
            </span>
            <div className="text-3xl sm:text-5xl font-black font-heading text-red-500 my-2">
              ${estimatedSavings.toLocaleString()}
            </div>
            <span className="text-xs text-slate-400">
              By cutting lead time by <strong className="text-white">{daysSaved} Days ({hoursSaved.toLocaleString()} Operating Hours)</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-center text-xs">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 block">OEM Lead Time:</span>
              <strong className="text-slate-200 text-sm">{oemLeadWeeks} Weeks ({oemDays} Days)</strong>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 block">Prime PGS Rebuild:</span>
              <strong className="text-red-400 text-sm">{primeTurnaroundDays} Days</strong>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-red-700/30"
          >
            <span>REQUEST FAST REPAIR QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
