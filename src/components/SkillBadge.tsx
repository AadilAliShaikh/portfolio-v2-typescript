import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 bg-blue-500/50 text-white rounded-full text-sm backdrop-blur-sm border border-white/10">
      {skill}
    </span>
  );
}