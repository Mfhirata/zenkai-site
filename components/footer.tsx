
import React from 'react';
import Logo from './Logo.tsx';
import { Page } from '../app.tsx';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-black pt-16 md:pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Elevando o padrão de performance automóvel em Portugal através de <span className="text-white font-semibold">Engenharia de Calibração Avançada</span>. Especialista em desenvolvimento de software proprietário via WinOLS.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-gray-500 uppercase tracking-widest">WinOLS Master</div>
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-gray-500 uppercase tracking-widest">ECU/TCU Expert</div>
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-gray-500 uppercase tracking-widest">Remap</div>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-display font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600"></span> 
              Navegação Técnica
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Soluções de Performance', id: 'services' as Page },
                { name: 'Metodologia e História', id: 'history' as Page },
                { name: 'Normas de Qualidade TUV', id: 'tuv' as Page },
                { name: 'Consultoria Direta', id: 'contact' as Page },
                { name: 'Termos de Engenharia', id: 'terms' as Page }
              ].map((link) => (
                <button 
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-gray-500 hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-tighter"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              Logística & Suporte
            </h4>
            <div className="space-y-6">
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-white block mb-1">Presencial (Portugal Continental):</strong>
                Serviço técnico móvel com diagnóstico avançado.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-white block mb-1">Digital (Global File Service):</strong>
                Fornecimento de ficheiros de calibração para profissionais.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[10px] text-gray-600 font-medium tracking-wide text-center uppercase">
            © 2024 ZENKAI PERFORMANCE • MASTER CALIBRATION ENGINEER • PORTUGAL & EUROPA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
