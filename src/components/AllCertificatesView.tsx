import React, { useState } from 'react';
import { CertificateItem } from '../types';
import { CREDENTIALS_DATA } from '../data/portfolioData';
import { ArrowLeft, Award, Eye, Search } from 'lucide-react';

interface AllCertificatesViewProps {
  onBackToHome: () => void;
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const AllCertificatesView: React.FC<AllCertificatesViewProps> = ({
  onBackToHome,
  onSelectCertificate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full Stack', 'Front-End', 'Backend', 'Database', 'Programming', 'UI/UX', 'Tools', 'AI & Productivity', 'Security', 'Cloud', 'Management'];

  const filteredCertificates = CREDENTIALS_DATA.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesQuery = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div id="all-certificates-view" className="w-full pt-4 sm:pt-8 pb-16 animate-fade-in">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E3DDD3]">
        <button
          id="back-to-home-from-certs-button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAE3D6] hover:bg-[#DDD5C7] text-[#1A1917] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#4D5844] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>

        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#6E685E] uppercase">
          Credentials & Accreditations
        </span>
      </div>

      {/* Page Header */}
      <div className="mt-8 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-[#4D5844]" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#6E685E] uppercase">
            All Credentials
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1A1917]">
          CERTIFICATIONS & CREDENTIALS
        </h1>
        <p className="mt-3 text-[14px] sm:text-[15px] text-[#555047] font-light max-w-2xl leading-relaxed">
          Comprehensive collection of verified academic and technical certifications covering full-stack web engineering, algorithms, database architectures, and UI/UX design.
        </p>
      </div>

      {/* Category Pills & Search */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#787166]" />
          <input
            type="text"
            placeholder="Search credentials by topic, skill, or issuer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F4EFE7] border border-[#DDD5C7] text-sm text-[#1A1917] placeholder:text-[#938B7F] focus:outline-none focus:border-[#4D5844] transition-colors"
          />
        </div>

        {/* Categories Carousel / Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1A1917] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EDE7DC] border border-[#DDD6C8] text-[#4F4A42] hover:border-[#BBB0A0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            id={`all-certs-card-${cert.id}`}
            onClick={() => onSelectCertificate(cert)}
            className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F4EFE7]/80 border border-[#E4DDD2] transition-all duration-300 hover:shadow-md hover:border-[#D0C7B8] hover:bg-[#F2ECE2] cursor-pointer"
          >
            <div>
              {/* Certificate Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#EBE4D8] border border-[#DDD5C7] mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="font-editorial text-xs font-medium text-white tracking-wide truncate drop-shadow-md">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-white/90 font-mono">
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[14.5px] sm:text-[15px] font-bold tracking-tight text-[#1A1917] uppercase leading-snug group-hover:text-[#4D5844] transition-colors">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[12px] text-[#555047] leading-relaxed font-light line-clamp-2">
                {cert.description}
              </p>
            </div>

            {/* Bottom Interaction Bar */}
            <div className="mt-4 pt-3 border-t border-[#E8E1D6] flex items-center justify-between">
              <span className="text-[10.5px] font-medium text-[#736C61] uppercase tracking-wider">
                {cert.category}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCertificate(cert);
                }}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4D5844] uppercase tracking-wider group-hover:underline cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="py-16 text-center text-[#6E685E]">
          <p className="text-sm">No certifications found matching "{searchQuery}".</p>
        </div>
      )}

      {/* Bottom Back to Home CTA */}
      <div className="mt-14 pt-8 border-t border-[#E3DDD3] flex items-center justify-center">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1917] hover:bg-[#4D5844] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Home</span>
        </button>
      </div>
    </div>
  );
};
