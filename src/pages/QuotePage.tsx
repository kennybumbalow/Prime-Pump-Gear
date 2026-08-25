import React from 'react';
import { QuoteSection } from '../components/QuoteSection';

interface QuotePageProps {
  prefillEquipment?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({ prefillEquipment }) => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <QuoteSection prefillEquipment={prefillEquipment} isStandalonePage={true} />
    </div>
  );
};
