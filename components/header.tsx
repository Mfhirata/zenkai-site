
import React, { useState, useEffect } from 'react';
import Logo from './Logo.tsx';
import { Page } from '../app.tsx';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.body.style.touchAction = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'services' },
    { name: 'Minha História', id: 'history' },
  ];

  const handleLinkClick = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative">
        <div 
          className="cursor-pointer z-[110]" 
          onClick={() => handleLinkClick('home')}
        >
          <Logo size="md" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 text-[10px] font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === link.id 
                  ? 'bg-zinc-800 text-orange-600 shadow-inner' 
                  : 'text-white hover:bg-zinc-800/50 hover:text-orange-500'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className={`ml-4 px-5 py-2.5 rounded-lg font-bold transition-all ${
              currentPage === 'contact'
                ? 'bg-zinc-800 text-orange-600 border border-orange-600/30'
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            Falar Comigo
          </button>
        </nav>

        <button 
          className="md:hidden text-white z-[110] p-2 focus:outline-none bg-zinc-900 rounded-lg border border-white/10 shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <div className={`
          fixed inset-0 bg-zinc-950 z-[105] flex flex-col items-center justify-center transition-all duration-500 md:hidden w-full h-screen
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <nav className="flex flex-col items-center space-y-4 w-full px-8 -mt-10">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`text-xl font-display font-bold uppercase tracking-widest transition-all w-full text-center py-5 rounded-2xl border border-white/5 shadow-xl
                  ${currentPage === link.id ? 'bg-zinc-800 text-orange-600' : 'bg-zinc-900 text-white active:bg-zinc-800'}
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('contact')}
              className={`w-full text-center px-6 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl ${
                currentPage === 'contact'
                  ? 'bg-zinc-800 text-orange-600 border border-orange-600/30'
                  : 'bg-orange-600 text-white'
              } ${isMenuOpen ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-10 opacity-0'}`}
            >
              Agendar Agora
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
