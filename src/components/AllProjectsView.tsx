import React from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, FolderGit2, Code2 } from 'lucide-react';

interface AllProjectsViewProps {
  onBackToHome: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const AllProjectsView: React.FC<AllProjectsViewProps> = ({
  onBackToHome,
  onSelectProject
}) => {
  return (
    <div id="all-projects-view" className="w-full pt-4 sm:pt-8 pb-16 animate-fade-in">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E3DDD3]">
        <button
          id="back-to-home-button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAE3D6] hover:bg-[#DDD5C7] text-[#1A1917] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#4D5844] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>

        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#6E685E] uppercase">
          Archive & Portfolio
        </span>
      </div>

      {/* Page Header */}
      <div className="mt-8 mb-10">
        <div className="flex items-center gap-2 mb-2">
          <FolderGit2 className="w-4 h-4 text-[#4D5844]" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#6E685E] uppercase">
            Curated Work
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1A1917]">
          ALL PROJECTS
        </h1>
        <p className="mt-3 text-[14px] sm:text-[15px] text-[#555047] font-light max-w-xl leading-relaxed">
          Explore the complete catalog of web applications, full-stack projects, and interactive digital experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            id={`all-projects-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col justify-between p-5 rounded-2xl bg-[#F4EFE7]/80 border border-[#E4DDD2] transition-all duration-300 hover:shadow-md hover:border-[#D0C7B8] hover:bg-[#F2ECE2] cursor-pointer"
          >
            <div>
              {/* Project Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EBE4D8] border border-[#DDD5C7] mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded-full text-[9.5px] font-semibold tracking-wider uppercase bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1A1917] border border-[#E3DDD3]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[15px] sm:text-[16px] font-bold tracking-tight text-[#1A1917] uppercase leading-snug group-hover:text-[#4D5844] transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[12.5px] text-[#555047] leading-relaxed font-light line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bottom Interaction Bar */}
            <div className="mt-5 pt-3.5 border-t border-[#E8E1D6] flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#736C61]">
                View Details & Code
              </span>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4D5844] uppercase group-hover:underline">
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

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
