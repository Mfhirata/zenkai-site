
import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-24 right-4 md:bottom-28 md:right-6 z-[80]
        w-12 h-12 md:w-14 md:h-14
        bg-black/40 backdrop-blur-xl border border-white/10
        rounded-2xl flex items-center justify-center
        text-orange-600 transition-all duration-500
        hover:bg-orange-600 hover:text-white hover:scale-110 hover:border-orange-500
        shadow-[0_0_30px_rgba(0,0,0,0.5)] active:scale-95 group
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <svg 
        className="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      
      {/* Efeito de brilho externo no hover */}
      <div className="absolute inset-0 rounded-2xl bg-orange-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </button>
  );
};

export default BackToTop;
