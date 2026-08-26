import React from 'react';
import { ProjectItem } from '../types';
import { X, Github, ExternalLink, Code2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl border border-[#DDD5C7] shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E1D5] bg-[#F4EFE7] shrink-0">
          <div className="flex items-center gap-2.5">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#1A1917] uppercase">
              {project.name}
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

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto no-scrollbar space-y-5">
          {/* 1. Large Project Image */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#EAE2D5] border border-[#D8CEBF] shadow-sm">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 2. Short Project Description */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-[#736C61] uppercase mb-1.5">
              Project Description
            </h4>
            <p className="text-sm text-[#454038] leading-[1.65] font-light">
              {project.description}
            </p>
          </div>

          {/* 3. Tech Stack */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-[#736C61] uppercase mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#4D5844]" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium tracking-wide uppercase bg-[#F0EAE0] text-[#1A1917] rounded-lg border border-[#DDD5C7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Bottom Links: GitHub Repo on Left, Live Demo on Right */}
        <div className="px-6 py-4 bg-[#F4EFE7] border-t border-[#E8E1D5] flex items-center justify-between gap-4 shrink-0">
          {/* Left: GitHub Repo */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8E1D5] hover:bg-[#DDD5C7] text-[#1A1917] text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repo</span>
          </a>

          {/* Right: Live Demo */}
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1917] hover:bg-[#4D5844] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
