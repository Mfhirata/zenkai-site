
import React, { useState, useEffect } from 'react';
import { getPerformanceEstimate } from '../services/gemini';
import { PerformanceData } from '../types';
import { LogoIcon } from './Logo.tsx';

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.031 2C6.446 2 1.918 6.528 1.918 12.112c0 1.784.466 3.527 1.353 5.063L2 22l5.008-1.313c1.488.811 3.161 1.241 4.862 1.241h.005c5.585 0 10.113-4.527 10.113-10.111C22.188 9.176 21.31 6.541 19.715 4.686 17.76 2.946 15.111 2 12.031 2zm6.273 14.177c-.274.772-1.341 1.391-1.85 1.48-.46.082-.937.147-2.185-.373-1.603-.668-2.613-2.296-2.693-2.404-.08-.108-.66-1.127-.66-1.853 0-.726.376-1.082.51-1.226.134-.144.293-.18.391-.18h.256c.097 0 .227-.036.355.275.129.311.44 1.072.479 1.152.038.08.064.173.013.275-.051.103-.077.166-.154.256-.077.09-.161.202-.23.273-.083.083-.17.174-.073.342.097.168.431.71 1.05 1.264.795.71 1.464.93 1.67.1.205.08.324.038.408-.051.084-.09.362-.423.458-.569.096-.146.192-.12.324-.07.132.051.84.397.985.469.144.072.24.108.275.168.036.06.036.347-.238 1.119z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface PerformanceCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarModel?: string;
  initialEngine?: string;
  initialTargetGain?: string;
}

const PerformanceCalculator: React.FC<PerformanceCalculatorProps> = ({ 
  isOpen, 
  onClose, 
  initialCarModel = '', 
  initialEngine = '',
  initialTargetGain = ''
}) => {
  const [carModel, setCarModel] = useState('');
  const [engine, setEngine] = useState('');
  const [targetGain, setTargetGain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PerformanceData | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCarModel(initialCarModel);
      setEngine(initialEngine);
      setTargetGain(initialTargetGain);
      setShowContactOptions(false);
      
      if (initialCarModel && initialEngine) {
        performEstimate(initialCarModel, initialEngine, initialTargetGain);
      }
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setResult(null);
        setCarModel('');
        setEngine('');
        setTargetGain('');
        setShowContactOptions(false);
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialCarModel, initialEngine, initialTargetGain]);

  const performEstimate = async (model: string, eng: string, gain: string) => {
    setLoading(true);
    setShowContactOptions(false);
    try {
      const promptGain = gain ? ` com objetivo de ganho de ${gain}%` : "";
      const data = await getPerformanceEstimate(model, eng + promptGain);
      setResult(data);
    } catch (error) {
      console.error("Falha na estimativa", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!carModel || !engine) return;
    performEstimate(carModel, engine, targetGain);
  };

  const getContactLinks = () => {
    if (!result) return { whatsapp: '#', email: '#' };
    const message = `Olá! Realizei uma simulação no site da Zenkai Performance.%0A%0AVeículo: ${carModel}%0AMotorização: ${engine}%0AGanho Estimado: ${result.tunedBhp}cv / ${result.tunedTorque}Nm.%0A%0AGostaria de agendar este serviço!`;
    return {
      whatsapp: `https://wa.me/351930930736?text=${message}`,
      email: `mailto:contact@zenkai-performance.eu?subject=Agendamento de Remap: ${carModel}&body=${message.replace(/%0A/g, '%0D%0A')}`
    };
  };

  const contactLinks = getContactLinks();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 md:p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col mx-auto">
        <button onClick={onClose} className="absolute top-3 right-3 md:top-6 md:right-6 text-gray-500 hover:text-white transition-colors z-20 bg-black/50 p-2 rounded-full border border-white/5">
          <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="overflow-y-auto flex-1 scrollbar-hide">
          <div className="grid lg:grid-cols-2 min-h-full">
            <div className="p-5 md:p-12 pt-12 md:pt-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <LogoIcon size="w-8 h-8 md:w-10 md:h-10" />
                <h2 className="text-lg md:text-2xl font-display font-bold text-white tracking-tight uppercase italic ml-2">Simulador Zenkai</h2>
              </div>
              <p className="text-gray-400 mb-6 md:mb-8 text-xs md:text-sm leading-relaxed">
                Calibração <span className="text-white font-bold italic">Custom Edition</span> de performance. Análise baseada em dados reais de hardware e margens de segurança europeias.
              </p>
              
              <form onSubmit={handleEstimate} className="space-y-4 md:space-y-5 text-white">
                <div>
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase text-gray-500 mb-1.5 md:mb-2 tracking-widest">Modelo do Veículo</label>
                  <input type="text" placeholder="ex: BMW 330d G20" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 focus:border-orange-600 outline-none transition-all placeholder:text-gray-700 text-xs md:text-sm" value={carModel} onChange={(e) => setCarModel(e.target.value)} required />
                </div>
                <div>
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase text-gray-500 mb-1.5 md:mb-2 tracking-widest">Motorização Base</label>
                  <input type="text" placeholder="ex: 3.0 Turbo Diesel 265cv" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 focus:border-orange-600 outline-none transition-all placeholder:text-gray-700 text-xs md:text-sm" value={engine} onChange={(e) => setEngine(e.target.value)} required />
                </div>
                <div>
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase text-gray-500 mb-1.5 md:mb-2 tracking-widest">Ganho Alvo (%)</label>
                  <input type="text" placeholder="Opcional (ex: 20%)" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 focus:border-orange-600 outline-none transition-all placeholder:text-gray-700 text-xs md:text-sm" value={targetGain} onChange={(e) => setTargetGain(e.target.value)} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 md:py-5 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-800 rounded-xl font-bold text-sm md:text-lg transition-all shadow-lg shadow-orange-600/20 active:scale-95 flex items-center justify-center gap-3">
                  {loading ? (<><div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>A Calcular...</>) : 'Calcular Performance'}
                </button>
              </form>
            </div>

            <div className="bg-black/40 p-5 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden">
              {result ? (
                <div className="w-full space-y-5 md:space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-4 md:p-6 rounded-2xl border border-white/10 text-center relative group">
                      <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold mb-1 tracking-widest">Potência Estimada</div>
                      <div className="text-3xl md:text-5xl font-display font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                        {result.tunedBhp} <span className="text-lg md:text-xl font-normal">CV</span>
                      </div>
                      <div className="mt-2 inline-block px-2 md:px-3 py-1 bg-green-500/10 text-green-500 text-[9px] md:text-[10px] font-bold rounded-full">
                        +{result.tunedBhp - result.originalBhp} cv ganho
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-4 md:p-6 rounded-2xl border border-white/10 text-center relative group">
                      <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-bold mb-1 tracking-widest">Binário Estimado</div>
                      <div className="text-3xl md:text-5xl font-display font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                        {result.tunedTorque} <span className="text-lg md:text-xl font-normal">Nm</span>
                      </div>
                      <div className="mt-2 inline-block px-2 md:px-3 py-1 bg-green-500/10 text-green-500 text-[9px] md:text-[10px] font-bold rounded-full">
                        +{result.tunedTorque - result.originalTorque} Nm ganho
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-600/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-orange-600/20">
                    <h4 className="font-bold mb-2 md:mb-3 flex items-center gap-2 text-white text-[10px] md:text-xs uppercase tracking-widest">
                      <span className="text-orange-600">●</span> Análise Especialista VAG/Euro
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400 italic leading-relaxed">{result.stageInfo}</p>
                  </div>
                  <div className="pt-2">
                    {!showContactOptions ? (
                      <button onClick={() => setShowContactOptions(true)} className="w-full py-4 bg-transparent border border-white/20 hover:bg-white/5 hover:border-orange-500/50 rounded-xl text-xs md:text-sm font-bold transition-all text-white uppercase tracking-[0.2em] shadow-xl active:scale-[0.98]">Agendar este Remap</button>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 py-4 bg-green-600/10 border border-green-500/30 rounded-xl hover:bg-green-600 hover:text-white transition-all group"><WhatsAppIcon className="w-6 h-6" /><span className="text-[9px] font-bold uppercase tracking-widest">WhatsApp</span></a>
                        <a href={contactLinks.email} className="flex flex-col items-center justify-center gap-2 py-4 bg-orange-600/10 border border-orange-600/30 rounded-xl hover:bg-orange-600 hover:text-white transition-all group"><MailIcon /><span className="text-[9px] font-bold uppercase tracking-widest">E-mail</span></a>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-700 flex flex-col items-center py-10 md:py-20">
                  <h3 className="text-sm md:text-lg font-display font-bold text-gray-800 mb-2 uppercase tracking-tighter italic">Aguardando Dados</h3>
                  <p className="max-w-[180px] md:max-w-[220px] text-[10px] md:text-xs text-gray-600 leading-relaxed mx-auto">Insira os dados do seu veículo para gerar a projeção de ganhos realista.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCalculator;
