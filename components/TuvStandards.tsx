
import React from 'react';
import { useInView } from '../hooks/useInView';

const ShieldIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c-.035.505-.05 1.016-.05 1.53 0 5.671 3.52 10.518 8.452 12.51.13.053.264.104.4.153.136-.05.27-.1.4-.153 4.931-1.992 8.452-6.839 8.452-12.51 0-.514-.015-1.025-.05-1.53a11.959 11.959 0 01-8.452-3.868z" />
  </svg>
);

const EmissionIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-1.333-2.332 3.752 3.752 0 004.763 6.253z" />
  </svg>
);

const GearCheckIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const TuvStandards: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const standards = [
    {
      title: "Segurança Mecânica",
      desc: "Todas as calibrações são testadas para respeitar as tolerâncias de hardware definidas pelos fabricantes alemães (VAG, BMW, Mercedes).",
      icon: <ShieldIcon />,
      highlight: "Tolerância Zero"
    },
    {
      title: "Conformidade Euro 6",
      desc: "Garantimos que o aumento de performance não compromete as normas de emissões vigentes na Europa, mantendo a inspeção B em dia.",
      icon: <EmissionIcon />,
      highlight: "Eco-Performance"
    },
    {
      title: "Fiabilidade Long-Term",
      desc: "Evitamos o desgaste prematuro de embraiagens, turbos e injetores através de uma gestão de binário linear e progressiva.",
      icon: <GearCheckIcon />,
      highlight: "Engenharia WinOLS"
    }
  ];

  return (
    <section id="tuv-standards" className="py-24 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full mb-6">
            <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.3em]">Certificação Europeia</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase italic tracking-tighter">
            PADRÃO DE QUALIDADE <span className="text-orange-600">NORMAS TUV</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Mais do que cavalos, entregamos engenharia. O nosso processo de remapeamento segue os rigorosos critérios de segurança do <span className="text-white font-bold">Technischer Überwachungsverein</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {standards.map((item, idx) => (
            <div 
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`group p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[32px] hover:border-orange-600/50 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">{item.highlight}</span>
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.8)]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-zinc-900 to-black rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4 italic uppercase">Porquê exigir o Padrão TUV?</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              No mercado de remapeamento, a diferença entre um "ficheiro de garagem" e um serviço Zenkai reside na validação técnica. Ao seguir as normas TUV, garantimos que o seu carro não é apenas mais rápido, mas continua a ser um automóvel seguro e fiável para o dia-a-dia.
            </p>
          </div>
          <div className="shrink-0">
             <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-orange-600/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-t-4 border-orange-600 rounded-full animate-spin"></div>
                <span className="font-display font-black text-orange-600 text-xl md:text-2xl italic tracking-tighter">TUV-Q</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuvStandards;
