import React from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, FolderGit2, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onSelectProject,
  onViewAllProjects 
}) => {
  // Show only 3 projects initially
  const initialProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div id="projects-section" className="w-full">
      {/* Header */}
      <div className="pb-3 border-b border-[#E3DDD3] flex items-center justify-between">
        <h2 className="text-xs font-bold tracking-[0.22em] text-[#1A1917] uppercase">
          PROJECTS
        </h2>
        <span className="text-[11px] font-semibold tracking-wider text-[#6E685E] uppercase flex items-center gap-1">
          <FolderGit2 className="w-3.5 h-3.5 text-[#4D5844]" />
          Featured Work
        </span>
      </div>

      {/* List of 3 Projects (No Numbering, No Initial Tech Stack) */}
      <div className="flex flex-col divide-y divide-[#E6E0D6]/60 mt-2">
        {initialProjects.map((project) => (
          <div
            key={project.id}
            id={`project-item-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="group py-4 flex items-start gap-3.5 cursor-pointer transition-colors duration-200 hover:bg-[#F3EFE7]/60 rounded-xl px-2.5 -mx-2.5"
          >
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[13.5px] font-bold tracking-wider text-[#1A1917] uppercase group-hover:text-[#4D5844] transition-colors truncate">
                  {project.name}
                </h3>
                
                {/* Hover Interaction: View Project / View Details */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-[11px] uppercase font-semibold text-[#4D5844] hover:underline transition-opacity flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Short Description */}
              <p className="text-[12px] text-[#555047] font-normal leading-relaxed mt-1.5 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="mt-5 pt-3.5 border-t border-[#E6E0D6]/60 flex items-center justify-center">
        <button
          id="more-projects-button"
          onClick={onViewAllProjects}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1917] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#4D5844] hover:shadow-md cursor-pointer"
        >
          <span>More Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
