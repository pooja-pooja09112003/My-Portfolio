import React from 'react';
import { CertificateItem } from '../types';
import { X, Award, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl border border-[#DDD5C7] shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E1D5] bg-[#F4EFE7]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#4D5844]" />
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#1A1917] uppercase">
              {certificate.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EAE3D6] hover:bg-[#DDD5C7] text-[#1A1917] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* 1. Large Certificate Image */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#EAE2D5] border border-[#D8CEBF] shadow-sm">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 2. Short 2-Line Description */}
          <div className="mt-5 px-1">
            <p className="text-sm text-[#454038] leading-[1.65] font-light whitespace-pre-line">
              {certificate.description}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#F4EFE7] border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#6E685E]">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-[#1A1917]">
            {certificate.issuer} • {certificate.year}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#1A1917] text-[#FAF7F2] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#4D5844] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
