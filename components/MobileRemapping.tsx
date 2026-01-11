
import React from 'react';
import { useInView } from '../hooks/useInView';

const PortugalFlag = () => (
  <svg className="w-10 h-10 rounded shadow-lg border border-white/10" viewBox="0 0 600 400">
    <rect width="240" height="400" fill="#006600"/>
    <rect x="240" width="360" height="400" fill="#FF0000"/>
    <circle cx="240" cy="200" r="80" fill="#FFD700"/>
    <path d="M225,185 h30 v30 h-30 z" fill="#FFFFFF"/>
    <path d="M236,185 v30 M225,200 h30" stroke="#FF0000" strokeWidth="2"/>
  </svg>
);

const EuropeFlag = () => (
  <svg className="w-10 h-10 rounded shadow-lg border border-white/10" viewBox="0 0 810 540">
    <rect width="810" height="540" fill="#003399"/>
    <circle cx="405" cy="270" r="140" fill="none" stroke="#FFCC00" strokeWidth="20" strokeDasharray="2 120" />
    <circle cx="405" cy="130" r="15" fill="#FFCC00" />
    <circle cx="405" cy="410" r="15" fill="#FFCC00" />
    <circle cx="265" cy="270" r="15" fill="#FFCC00" />
    <circle cx="545" cy="270" r="15" fill="#FFCC00" />
  </svg>
);

const MobileRemapping: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });

  return (
    <section id="mobile-service" className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`max-w-4xl mb-16 transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-orange-600 font-display font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-10">Serviço de Elite & Logística</h2>
          
          <div className="grid gap-12 border-l-4 border-orange-600 pl-6 md:pl-10 max-w-3xl">
            <div className="group/item flex flex-col md:flex-row gap-6 md:items-center">
              <div className="shrink-0 flex items-center justify-center">
                <PortugalFlag />
              </div>
              <div>
                <h4 className="text-white text-lg md:text-xl font-bold mb-2">
                  Exclusivo Portugal Continental: Atendimento Presencial
                </h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  Realizo o serviço de reprogramação presencial <span className="text-white font-semibold">exclusivamente em Portugal Continental</span>. Desloco-me com todo o equipamento técnico até à sua localização. Este serviço VIP implica uma <span className="text-orange-500 font-bold italic">taxa de deslocação técnica dedicada</span>.
                </p>
              </div>
            </div>
            
            <div className="group/item flex flex-col md:flex-row gap-6 md:items-center">
              <div className="shrink-0 flex items-center justify-center">
                <EuropeFlag />
              </div>
              <div>
                <h4 className="text-white/90 text-lg md:text-xl font-bold mb-2">
                  Mercado Europeu: Edição de Ficheiros (File Service)
                </h4>
                <p className="text-gray-500 text-base leading-relaxed">
                  Para preparadores e oficinas em toda a Europa, disponibilizo o serviço de engenharia de software focado na <span className="text-white font-bold">edição de ficheiros (WinOLS)</span>, calibrações personalizadas e soluções eletrónicas remotas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileRemapping;
