import React from 'react';
import { MapPin, Sparkles, Layout, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const getHighlightIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-[#4D5844] shrink-0" strokeWidth={1.8} />;
      case 1:
        return <Layout className="w-5 h-5 text-[#4D5844] shrink-0" strokeWidth={1.8} />;
      case 2:
        return <Code2 className="w-5 h-5 text-[#4D5844] shrink-0" strokeWidth={1.8} />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4D5844] shrink-0" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="hero-section" className="relative w-full pt-6 sm:pt-10 pb-10">
      {/* Top Header Row with Eyebrow and Line */}
      <div className="flex items-center justify-between gap-4 pb-2 border-b border-[#E3DDD3]">
        <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#33302B] uppercase whitespace-nowrap">
          {PERSONAL_INFO.title}
        </span>
        <div className="hidden sm:block flex-1 h-[1px] bg-[#E3DDD3] mx-4" />
        <div className="text-[11px] sm:text-[12px] font-semibold text-[#1A1917] tracking-[0.22em] uppercase">
          PORTFOLIO
        </div>
      </div>

      {/* Hero Content Area with Interlocking Title and Portrait */}
      <div className="relative pt-4 sm:pt-6">
        {/* Giant Main Name Title */}
        <div className="relative z-0 overflow-visible">
          <h1 
            id="hero-main-title"
            className="font-display text-[44px] xs:text-[56px] sm:text-[80px] md:text-[105px] lg:text-[130px] xl:text-[144px] font-extrabold uppercase leading-[0.88] tracking-[-0.01em] text-[#171614] select-none"
          >
            POOJITHA LOTHUGEDDA
          </h1>
        </div>

        {/* Hero Middle Split: Left Copy & Right Portrait Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mt-4 sm:mt-6 items-start">
          
          {/* Left Column: Heading, Bio, and Quick CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 z-10">
            <div>
              {/* Distinctive Statement Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] text-[#1A1917] tracking-tight max-w-xl">
                Making the web more{' '}
                <span className="font-editorial italic font-medium">beautiful</span>,{' '}
                <span className="font-editorial italic font-medium">intuitive</span>, and{' '}
                <span className="font-editorial italic font-medium">meaningful</span>.
              </h2>

              {/* Bio Paragraph */}
              <p className="mt-6 sm:mt-8 text-[14.5px] sm:text-[15.5px] text-[#555047] leading-[1.65] max-w-xl font-light">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Subtle Interactive Trigger */}
            <div className="mt-8 flex items-center gap-4">
              <button
                id="hero-contact-button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1917] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#4D5844] hover:shadow-md cursor-pointer"
              >
                <span>Work With Me</span>
                <span className="text-sm">→</span>
              </button>
              <a
                href="#projects-section"
                id="hero-explore-work-link"
                className="text-xs font-semibold tracking-wider text-[#6E685E] hover:text-[#1A1917] uppercase transition-colors flex items-center gap-1.5"
              >
                <span>Explore Work</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Location Badge */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-4 lg:-mt-12 z-10">
            {/* Portrait Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#EBE5DA] shadow-[0_12px_36px_rgba(26,25,23,0.08)] border border-[#E3DDD3]/60 group">
                <img
                  src="/profile.jpeg"
                  alt="Poojitha Lothugedda — Full Stack Web Developer"
                  className="w-full h-full object-cover object-top filter grayscale-[18%] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft gradient highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Available for projects floating badge */}
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E3DDD3] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-[10px] font-semibold tracking-wider text-[#1A1917] uppercase">
                    Available For Opportunities
                  </span>
                </div>
              </div>

              {/* Location Tag */}
              <div className="mt-4 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#1A1917] uppercase">
                  {PERSONAL_INFO.location}
                </span>
                <div className="mt-1 flex items-center justify-center text-[#4D5844]">
                  <MapPin className="w-4 h-4 text-[#4D5844]" strokeWidth={2.2} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Hero Highlights Card / Pill */}
        <div className="mt-10 sm:mt-12 bg-[#F1EDE4] rounded-2xl sm:rounded-full border border-[#E4DDD3] py-4 px-4 sm:px-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E0D7CB]">
            
            {PERSONAL_INFO.highlights.map((highlight, idx) => (
              <div 
                key={idx} 
                id={`hero-highlight-${idx}`}
                className="flex items-center justify-center gap-3 sm:gap-3.5 py-3 sm:py-1 px-4 text-left sm:text-left"
              >
                {/* Clean, minimal icon outside boxes/circles */}
                {getHighlightIcon(idx)}
                
                <div className="flex flex-col">
                  <span className="text-sm sm:text-[14.5px] font-bold tracking-wider text-[#1A1917] leading-none uppercase">
                    {highlight.title}
                  </span>
                  <span className="text-[11px] font-normal text-[#555047] leading-tight mt-1">
                    {highlight.subtitle}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

