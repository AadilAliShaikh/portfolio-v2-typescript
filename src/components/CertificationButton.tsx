import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationButtonProps {
  name: string;
  issuer: string;
  verificationUrl: string;
}

export function CertificationButton({ name, issuer, verificationUrl }: CertificationButtonProps) {
  return (
    <a
      href={verificationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 
        hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-300" />
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-sm text-blue-300">{issuer}</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </a>
  );
}