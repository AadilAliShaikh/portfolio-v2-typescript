import React from 'react';
import { SkillBadge } from './SkillBadge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export function ProjectCard({ title, description, technologies, githubLink, demoLink }: ProjectCardProps) {
  return (
    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <p className="text-gray-200 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech) => (
          <SkillBadge key={tech} skill={tech} />
        ))}
      </div>
      <div className="flex gap-2">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-white rounded-lg hover:bg-gray-800/70 transition-colors text-sm"
          >
            <ExternalLink size={14} />
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-blue-500/50 text-white rounded-lg hover:bg-blue-500/70 transition-colors text-sm"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}