import React, { useCallback } from 'react';

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  backgroundUrl: string;
  colSpan?: boolean;
}

const hoverSound = new Audio('/hover.mp3');

export function BentoTile({ children, className = '', backgroundUrl, colSpan = false }: BentoTileProps) {
  const playSound = useCallback(() => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  }, []);

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
        ${colSpan ? 'col-span-full' : ''} min-h-[250px] h-auto ${className}`}
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onMouseEnter={playSound}
    >
      <div className="overlay transition-opacity duration-300 hover:bg-black/50" />
      <div className="content-wrapper h-full">
        {children}
      </div>
    </div>
  );
}