import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <div id="cta-banner" className="w-full mt-12 sm:mt-16">
      <div className="relative overflow-hidden rounded-2xl bg-[#4D5844] text-[#FAF7F2] px-6 sm:px-8 py-7 sm:py-9 shadow-md transition-all duration-300">
        
        {/* Subtle decorative background glow */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left Title with Mail Icon */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#FAF7F2]" strokeWidth={1.8} />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#FAF7F2] leading-snug">
              Let's create something{' '}
              <span className="font-editorial italic font-medium">meaningful</span>{' '}
              together.
            </h3>
          </div>

          {/* Center Availability Note */}
          <div className="text-[13px] sm:text-[14px] text-[#D8DFD1] font-light max-w-xs lg:text-center">
            I'm available for freelance projects and collaborations.
          </div>

          {/* Right Action Button */}
          <div className="flex items-center">
            <button
              id="cta-get-in-touch-button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#8B987E] bg-transparent text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#FAF7F2] hover:text-[#4D5844] hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
