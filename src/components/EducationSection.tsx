import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education-section" className="w-full mt-12 sm:mt-16">
      {/* Header */}
      <div className="pb-3 border-b border-[#E3DDD3] flex items-center justify-between">
        <h2 className="text-xs font-bold tracking-[0.22em] text-[#1A1917] uppercase">
          MY EDUCATION
        </h2>
        <span className="text-[11px] font-semibold tracking-wider text-[#6E685E] uppercase">
          Academic Journey
        </span>
      </div>

      {/* 3 Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={item.id}
            id={`education-card-${item.id}`}
            className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#F4EFE7]/80 border border-[#E4DDD2] transition-all duration-300 hover:shadow-md hover:border-[#D0C7B8] hover:bg-[#F2ECE2]"
          >
            <div>
              {/* Top Row: Year badge & Period */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#EAE2D5] text-[#1A1917] border border-[#DDD4C5]">
                  <Calendar className="w-3 h-3 text-[#4D5844]" />
                  {item.period}
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#736C61] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#4D5844]" />
                  {item.location}
                </span>
              </div>

              {/* Degree / Level */}
              <h3 className="text-[16px] sm:text-[17px] font-medium tracking-[0.06em] text-[#1A1917] font-display uppercase leading-snug group-hover:text-[#4D5844] transition-colors mt-2 mb-1">
                {item.degree}
              </h3>

              {/* Field / Specialization */}
              {item.field && (
                <p className="text-[12px] font-normal tracking-wide text-[#555047] mb-1">
                  {item.field}
                </p>
              )}

              {/* Institution */}
              <p className="text-[13px] font-editorial italic font-normal text-[#6B6459]">
                {item.institution}
              </p>

              {/* Short Description */}
              <p className="mt-4 text-[13px] text-[#555047] leading-[1.65] font-light">
                {item.description}
              </p>
            </div>

            {/* Bottom Accent / Meta */}
            <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-[#E8E1D6] text-[11px] text-[#736C61]">
              <span className="font-semibold tracking-wider uppercase text-[#1A1917] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#4D5844]" />
                {item.badge}
              </span>
              <span className="font-mono text-[10px] text-[#8C8478]">
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
