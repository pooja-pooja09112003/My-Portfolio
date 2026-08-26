import React from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { SkillIcon } from './SkillIcons';
import { Sparkles, Code2 } from 'lucide-react';

export const TechnicalSkillsSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeSkills = [...TECHNICAL_SKILLS, ...TECHNICAL_SKILLS];

  return (
    <section id="technical-skills-section" className="w-full mt-12 sm:mt-16 overflow-hidden">
      {/* Header */}
      <div className="pb-3 border-b border-[#E3DDD3] flex items-center justify-between">
        <h2 className="text-xs font-bold tracking-[0.22em] text-[#1A1917] uppercase">
          TECHNICAL SKILLS
        </h2>
        <span className="text-[11px] font-semibold tracking-wider text-[#6E685E] uppercase flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-[#4D5844]" />
          Stack & AI Tools
        </span>
      </div>

      {/* Live-moving / Marquee Track Area */}
      <div className="relative mt-6 py-6 border-y border-[#EAE4DA] bg-[#F5F0E8]/50 overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 select-none">
          {marqueeSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              id={`skill-item-${skill.id}-${index}`}
              className="inline-flex items-center gap-2.5 shrink-0 py-1 transition-opacity duration-200 hover:opacity-80"
            >
              {/* Direct Official Icon - No Box, Card, or Container */}
              <SkillIcon type={skill.iconType} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              
              {/* Clean Typography Label - Lighter and highly readable */}
              <span className="font-display text-[14.5px] sm:text-[15.5px] font-medium tracking-[0.08em] text-[#24211D] uppercase whitespace-nowrap">
                {skill.name}
              </span>

              {/* Subtle Elegant Dot Divider with spacious margin */}
              <span className="text-[#CCC4B7] text-[9px] ml-6 select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
