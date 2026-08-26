import React from 'react';
import { CertificateItem } from '../types';
import { CREDENTIALS_DATA } from '../data/portfolioData';
import { Eye, Award, ArrowRight } from 'lucide-react';

interface CredentialsSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  onViewAllCertificates?: () => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({
  onSelectCertificate,
  onViewAllCertificates
}) => {
  // Show only 3 certificates in front view
  const initialCertificates = CREDENTIALS_DATA.slice(0, 3);

  return (
    <div id="credentials-section" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E3DDD3]">
        <h2 className="text-xs font-bold tracking-[0.22em] text-[#1A1917] uppercase">
          MY CREDENTIALS
        </h2>
        <span className="text-[11px] font-semibold tracking-wider text-[#6E685E] uppercase flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-[#4D5844]" />
          Certifications
        </span>
      </div>

      {/* 3 Certificate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mt-5">
        {initialCertificates.map((cert) => (
          <div
            key={cert.id}
            id={`credential-card-${cert.id}`}
            onClick={() => onSelectCertificate(cert)}
            className="group flex flex-col cursor-pointer transition-all duration-300"
          >
            {/* Certificate Poster / Card */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#EBE4D8] border border-[#DDD5C7] shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-[#BBB09E]">
              {/* Certificate Image Placeholder */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Bottom Title on Image */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-editorial text-xs font-semibold tracking-wider text-white uppercase block drop-shadow-md">
                  {cert.issuer}
                </span>
                <span className="text-[10px] text-white/80 font-mono">
                  {cert.year}
                </span>
              </div>

              {/* View Button Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1A1917]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-[#FAF7F2] text-[#1A1917] px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-3.5 h-3.5 text-[#4D5844]" />
                  <span>View</span>
                </div>
              </div>
            </div>

            {/* Typography metadata below image */}
            <div className="mt-3 flex flex-col">
              <h3 className="text-[13px] font-bold tracking-wider text-[#1A1917] uppercase leading-tight group-hover:text-[#4D5844] transition-colors">
                {cert.title}
              </h3>
              <p className="text-[11.5px] text-[#555047] font-normal line-clamp-2 mt-1 leading-snug">
                {cert.description}
              </p>
              
              {/* Visible Quick View Trigger */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCertificate(cert);
                }}
                className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#4D5844] uppercase tracking-wider hover:text-[#1A1917] transition-colors cursor-pointer w-fit"
              >
                <Eye className="w-3 h-3" />
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Certificates Button */}
      <div className="mt-6 pt-4 border-t border-[#E6E0D6]/60 flex items-center justify-center">
        <button
          id="more-certificates-button"
          onClick={onViewAllCertificates}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1917] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#4D5844] hover:shadow-md cursor-pointer"
        >
          <span>More Certificates</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

