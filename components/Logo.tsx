
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoIcon: React.FC<{ size?: string; className?: string }> = ({ size = "w-10 h-10", className = "" }) => (
  <div className={`${size} ${className} relative flex items-center justify-center`}>
    {/* Background Shape: Tech/Racetrack Hexagon-ish slanted shape */}
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(234,88,12,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M25 10 L95 10 L75 90 L5 90 Z" 
        className="fill-orange-600" 
      />
      {/* The stylized Z: Sharp, fast, and digital */}
      <path 
        d="M32 32 H68 L36 68 H72" 
        stroke="white" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="drop-shadow-md"
      />
      {/* Racetrack curbs / Tech stripes detail */}
      <path d="M15 80 L25 80" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M75 20 L85 20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
  </div>
);

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: { main: 'text-sm', sub: 'text-[7px]' },
    md: { main: 'text-lg md:text-xl', sub: 'text-[8px] md:text-[10px]' },
    lg: { main: 'text-2xl md:text-3xl', sub: 'text-[10px] md:text-[12px]' }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={iconSizes[size]} />
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-display font-bold tracking-tighter text-white uppercase italic ${textSizes[size].main}`}>
            ZENKAI <span className="text-orange-600">PERFORMANCE</span>
          </span>
          <span className={`font-bold uppercase tracking-[0.3em] text-gray-500 mt-1 ${textSizes[size].sub}`}>
            Tuning de Precisão
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
