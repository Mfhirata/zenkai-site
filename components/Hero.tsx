
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenCalculator: () => void;
  onContactClick: () => void;
  onQuickEstimate: (carModel: string, engine: string, targetGain?: string) => void;
}

const ChartIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onOpenCalculator, onContactClick, onQuickEstimate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [quickModel, setQuickModel] = useState('');
  const [quickEngine, setQuickEngine] = useState('');
  const [quickGain, setQuickGain] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickEstimateClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickModel && quickEngine) {
      onQuickEstimate(quickModel, quickEngine, quickGain);
    } else {
      onOpenCalculator();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070" 
          alt="Especialista em Reprogramação de Centralina e Edição de Ficheiros WinOLS em Portugal" 
          className="w-full h-[130%] object-cover opacity-40 -mt-[15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center py-10 md:py-20">
        <h1 className="text-3xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-[1.1] text-white uppercase italic">
          REPROGRAMAÇÃO DE CENTRALINA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-red-700">
            & CHIPTUNING MASTER PORTUGAL
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light text-balance px-2 leading-relaxed">
          Especialista em <span className="text-white font-bold">Remap Stage 1 & Stage 2, IMMO OFF e Soluções ECU</span>. 
          Otimização <span className="text-orange-500 font-bold">WinOLS Master</span> para clientes presenciais em Portugal e suporte técnico para preparadores em toda a Europa.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 sm:px-0 mb-12">
          <button 
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 md:px-12 py-5 bg-orange-600 rounded-2xl text-base md:text-lg font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.4)] shadow-orange-600/20 text-white uppercase tracking-widest"
          >
            Orçamento de Remap
          </button>
          
          <button 
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-8 md:px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-base md:text-lg font-bold hover:bg-orange-600/10 transition-all duration-500 transform hover:scale-105 text-white flex items-center justify-center gap-3"
          >
            <ChartIcon />
            Simular Ganhos Reais
          </button>
        </div>

        <div className="max-w-5xl mx-auto mb-16 px-4">
          <form onSubmit={handleQuickEstimateClick} className="bg-black/40 backdrop-blur-2xl border border-white/10 p-2 md:p-3 rounded-2xl flex flex-col md:flex-row items-center gap-2 md:gap-3 shadow-2xl">
            <input 
              type="text" 
              placeholder="Marca/Modelo (ex: BMW 120d F20)"
              className="w-full md:flex-[2] bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-orange-600/50"
              value={quickModel}
              onChange={(e) => setQuickModel(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Motorização (ex: 2.0d 190cv)"
              className="w-full md:flex-[1.5] bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-orange-600/50"
              value={quickEngine}
              onChange={(e) => setQuickEngine(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Ganho Pretendido %"
              className="w-full md:flex-[1] bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-orange-600/50"
              value={quickGain}
              onChange={(e) => setQuickGain(e.target.value)}
            />
            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap"
            >
              Estimar Remap
            </button>
          </form>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold italic">
            Serviço Móvel em todo o Portugal Continental | Europe Master File Service (ECU/TCU)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
