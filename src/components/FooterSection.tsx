import React from 'react';
import { Mail, Globe, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const getSocialIcon = (short: string) => {
    if (short === 'in') return <Linkedin className="w-3.5 h-3.5" />;
    if (short === 'gh') return <Github className="w-3.5 h-3.5" />;
    return null;
  };
  return (
    <footer id="portfolio-footer" className="w-full mt-14 sm:mt-16 pb-12 border-t border-[#E3DDD3] pt-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left: Monogram and Brand Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#F0EAE0] border border-[#DDD5C7] flex items-center justify-center shadow-inner">
            <span className="font-editorial text-2xl font-bold italic tracking-tight text-[#1A1917]">
              PL
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.18em] text-[#1A1917] uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10.5px] font-medium tracking-[0.18em] text-[#736C61] uppercase mt-0.5">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </div>

        {/* Center: Contact Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs text-[#524D44]">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 hover:text-[#1A1917] transition-colors cursor-pointer group"
          >
            <Mail className="w-3.5 h-3.5 text-[#736C61] group-hover:text-[#1A1917]" />
            <span className="underline-offset-4 hover:underline">{PERSONAL_INFO.displayEmail}</span>
          </button>
          
          <a
            href={`https://${PERSONAL_INFO.website}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#1A1917] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#736C61]" />
            <span>{PERSONAL_INFO.website}</span>
          </a>

          <div className="flex items-center gap-2 text-[#736C61]">
            <MapPin className="w-3.5 h-3.5 text-[#736C61]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Right: Social Connect Buttons */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#736C61] uppercase">
            LET'S CONNECT
          </span>
          <div className="flex items-center gap-2">
            {PERSONAL_INFO.socials.map((social) => (
              <a
                key={social.short}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-[#D9D1C4] bg-[#F2EDE4] hover:bg-[#1A1917] hover:text-[#FAF7F2] hover:border-[#1A1917] text-[#423E37] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                {getSocialIcon(social.short)}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright & Disclaimer Line */}
      <div className="mt-10 pt-6 border-t border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#8C8478]">
        <p>© {new Date().getFullYear()} Poojitha Lothugedda. All rights reserved.</p>
        <p className="font-light">Crafted with precision & passion.</p>
      </div>
    </footer>
  );
};
