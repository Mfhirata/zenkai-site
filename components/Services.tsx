
import React from 'react';
import { useInView } from '../hooks/useinview.ts';

export const SpeedometerIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="M12 12L7 7" /><circle cx="12" cy="12" r="2" /><path d="M12 7v1" /><path d="M16 9l-1 1" /><path d="M8 9l1 1" />
  </svg>
);

export const TrashIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
  </svg>
);

export const ErrorIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const FastIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const FlameIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
  </svg>
);

export const ScissorIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

export const KeyIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3L15.5 7.5z" />
  </svg>
);

export const services = [
  {
    title: "Remap Stage 1 & 2",
    description: "Aumento real de BHP e Binário (Nm) através de calibração WinOLS. Otimização customizada respeitando as margens de segurança do hardware original VAG, BMW e Mercedes.",
    icon: <SpeedometerIcon />,
    tag: "Performance",
    popular: true
  },
  {
    title: "IMMO OFF & Clonagem ECU",
    description: "Desativação de imobilizadores e clonagem total de centralinas (ECU). Solução definitiva para problemas de arranque e swaps de motor complexos.",
    icon: <KeyIcon />,
    tag: "Expertise",
    popular: true
  },
  {
    title: "Anulação DPF / EGR / AdBlue",
    description: "Soluções eletrónicas avançadas para Filtros de Partículas e Válvulas EGR. Eliminação definitiva de erros no quadrante e modo de segurança.",
    icon: <TrashIcon />,
    tag: "Eletrónica"
  },
  {
    title: "DTC OFF (Apagar Erros)",
    description: "Desativação permanente de códigos de erro específicos (P-Codes) na centralina. Ideal para preparações onde componentes foram removidos ou alterados.",
    icon: <ErrorIcon />,
    tag: "Diagnóstico"
  },
  {
    title: "VMAX (Remover Limitador)",
    description: "Remoção do limitador eletrónico de velocidade máxima. Desbloqueie o potencial final do seu veículo para utilização em pista.",
    icon: <FastIcon />,
    tag: "Racing"
  },
  {
    title: "Pops and Bangs / Crackle",
    description: "Crackle Map customizado para produzir detonações controladas no escape durante o desaceleramento. Disponível para motores a gasolina e turbo diesel.",
    icon: <FlameIcon />,
    tag: "Estilo"
  },
  {
    title: "Hardcut Limiter Pipoca",
    description: "Corte de injeção 'tipo pipoca' para motores Diesel. Transforma o limitador suave original num corte seco e agressivo.",
    icon: <ScissorIcon />,
    tag: "Diesel"
  },
  {
    title: "Reprogramação TCU DSG/ZF",
    description: "Ajuste de caixas automáticas (DSG, ZF, S-Tronic). Aumento de pressão de discos, passagens rápidas e remoção de auto-upshift.",
    icon: <SpeedometerIcon />,
    tag: "Transmissão"
  }
];

const Services: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-orange-600 font-display font-bold tracking-widest text-sm uppercase mb-4">Serviços de Chiptuning de Precisão</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic">Engenharia de Software Automóvel</h3>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {services.map((service, index) => {
            const isPopular = service.popular;
            
            return (
              <div 
                key={index} 
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`group p-6 rounded-2xl transition-all duration-700 cursor-default relative flex flex-col
                  ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                  ${isPopular 
                    ? 'bg-orange-600/10 border-2 border-orange-600/50 shadow-[0_0_40px_rgba(234,88,12,0.1)]' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
                  }
                  hover:scale-[1.05] hover:shadow-2xl hover:border-orange-600
                `}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`block transition-all duration-500 text-orange-600 group-hover:scale-110`}>
                    {service.icon}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 text-gray-400 rounded group-hover:bg-orange-600 group-hover:text-white">
                    {service.tag}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h4>
                
                <p className="leading-relaxed text-xs text-gray-400 group-hover:text-gray-300 flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
