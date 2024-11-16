import React, { useEffect, useRef, useCallback } from 'react';

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  backgroundUrl: string;
  colSpan?: boolean;
  hoverSoundUrl?: string; // Add this prop to configure hover sound
}

export function BentoTile({
  children,
  className = '',
  backgroundUrl,
  colSpan = false,
  hoverSoundUrl = '/hover.mp3', // Default hover sound
}: BentoTileProps) {
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize the hover sound when the component mounts
  useEffect(() => {
    hoverSoundRef.current = new Audio(hoverSoundUrl);
  }, [hoverSoundUrl]);

  const playSound = useCallback(() => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(() => {});
    }
  }, []);

  const stopSound = useCallback(() => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.pause(); // Pause the sound
      hoverSoundRef.current.currentTime = 0; // Reset playback position
    }
  }, []);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
        ${colSpan ? 'col-span-full' : ''} min-h-[250px] h-auto ${className}`}
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={playSound}
      onMouseLeave={stopSound} // Stop the sound when the cursor leaves
    >
      <div className="overlay transition-opacity duration-300 hover:bg-black/50" />
      <div className="content-wrapper h-full">{children}</div>
    </div>
  );
}
