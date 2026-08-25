import React from 'react';
import { X } from 'lucide-react';
import { QuoteSection } from './QuoteSection';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillEquipment?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillEquipment
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white rounded-full border border-slate-800 transition-colors"
          aria-label="Close quote modal"
          id="close-quote-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Quote Form */}
        <div className="p-2 sm:p-4">
          <QuoteSection prefillEquipment={prefillEquipment} isStandalonePage={false} />
        </div>
      </div>
    </div>
  );
};
