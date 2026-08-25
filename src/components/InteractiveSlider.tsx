import React, { useState, useRef } from 'react';
import { Sparkles, Wrench, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface InteractiveSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle: string;
}

export const InteractiveSlider: React.FC<InteractiveSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE: Scored & Worn OEM Journal",
  afterLabel = "AFTER: Metallized & Precision Ground",
  title,
  subtitle
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 overflow-hidden shadow-2xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-red-500 block">
            INTERACTIVE BEFORE &amp; AFTER REBUILD
          </span>
          <h4 className="text-lg font-bold text-white font-heading uppercase">
            {title}
          </h4>
        </div>
        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>

      {/* Comparison Canvas */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative h-72 sm:h-96 rounded-lg overflow-hidden select-none cursor-ew-resize border border-slate-800 bg-slate-950"
      >
        {/* After Image (Full background) */}
        <img 
          src={afterImage} 
          alt="After rebuild" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* After Badge */}
        <div className="absolute top-4 right-4 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md pointer-events-none z-10 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{afterLabel}</span>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before repair" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          {/* Before Badge */}
          <div className="absolute top-4 left-4 bg-slate-950/90 text-slate-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md pointer-events-none border border-slate-700 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-black">
            ⇄
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-400">
        Drag slider left or right to inspect before-and-after surface recovery &amp; machining finishes.
      </div>
    </div>
  );
};
