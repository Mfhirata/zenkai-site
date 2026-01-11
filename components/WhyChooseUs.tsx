
import React from 'react';
import { useInView } from '../hooks/useInView';

const TechIcon = () => (
  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-4.75 4.75l-7.5-7.5l-1.5 1.5l7.5 7.5m7.5-7.5l-2.75 2.75m0 0L12 12.75m0 0l-4.75-4.75M12 12.75l2.75-2.75M12 12.75l-2.75 2.75" />
  </svg>
);

const ServiceIcon = () => (
  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.998 5.998 0 00-4.03-5.754m-4.405 5.054a9.083 9.083 0 01-4.23-.33m0 0a2.999 2.999 0 014.393-2.64M18 10.5a3 3 0 11-6 0 3 3 0 016 0zm-7 1a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const benefits = [
    {
      title: "Master WinOLS Engineering",
      description: "Esqueça os ficheiros genéricos. Desenvolvemos cada mapa individualmente no WinOLS, garantindo uma calibração que respeita a arquitetura única da sua ECU.",
      icon: <ExpertiseIcon />,
      label: "Expertise"
    },
    {
      title: "Hardware de Última Geração",
      description: "Utilizamos ferramentas oficiais (KESS3, Autotuner) para garantir leituras e escritas estáveis, protegendo a integridade eletrónica do seu veículo.",
      icon: <TechIcon />,
      label: "Tecnologia"
    },
    {
      title: "Consultoria Direta",
      description: "Sem intermediários. Você fala diretamente com o engenheiro responsável pelo seu projeto, garantindo total transparência e suporte personalizado.",
      icon: <ServiceIcon />,
      label: "Atendimento"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-orange-600 font-display font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 italic">O Nosso Diferencial</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase italic tracking-tighter">POR QUE ESCOLHER <span className="text-orange-600">A ZENKAI?</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              style={{ transitionDelay: `${idx * 200}ms` }}
              className={`group p-10 bg-zinc-900/30 border border-white/5 rounded-[40px] hover:border-orange-600/40 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="mb-8 flex justify-center md:justify-start transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <div className="p-4 bg-orange-600/10 rounded-3xl border border-orange-600/20 group-hover:bg-orange-600/20 group-hover:border-orange-600/40 transition-colors">
                  {benefit.icon}
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-white/5 text-orange-600 text-[9px] font-bold uppercase tracking-widest rounded-full mb-4 border border-white/10 group-hover:border-orange-600/30 transition-colors">
                  {benefit.label}
                </span>
                <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-4 uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-orange-600 text-[10px] font-bold uppercase tracking-widest italic">
                  <span>Padrão de Excelência</span>
                  <div className="h-[1px] flex-1 bg-orange-600/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
