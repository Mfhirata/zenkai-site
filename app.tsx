
import React, { useState, useEffect } from 'react';
import Header             from './components/Header.tsx';               
import Hero               from './components/Hero.tsx';                 
import Services, { services } from './components/Services.tsx';        
import WhyChooseUs        from './components/WhyChooseUs.tsx';        
import Testimonials       from './components/Testimonials.tsx';      
import PerformanceCalculator from './components/PerformanceCalculator.tsx';
import TuningChat         from './components/TuningChat.tsx';           
import Footer             from './components/footer.tsx';               
import MobileRemapping    from './components/MobileRemapping.tsx';    
import BackToTop          from './components/BackToTop.tsx';            
import CookieConsent      from './components/CookieConsent.tsx';        
import TuvStandards       from './components/TuvStandards.tsx';    
import Terms              from './components/Terms.tsx';              
import { useInView }      from './hooks/useInView.ts';                

export type Page = 'home' | 'services' | 'performance' | 'history' | 'contact' | 'dsg-tuning' | 'tuv' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState({ model: '', engine: '', targetGain: '' });
  const [aboutTextRef, aboutTextInView] = useInView({ threshold: 0.1 });
  const [, setHasConsented] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleQuickEstimate = (carModel: string, engine: string, targetGain?: string) => {
    setCalculatorData({ model: carModel, engine: engine, targetGain: targetGain || '' });
    setIsCalculatorOpen(true);
  };

  const handleOpenCalculator = () => {
    setCalculatorData({ model: '', engine: '', targetGain: '' });
    setIsCalculatorOpen(true);
  };

  const tickerItems = [...services, ...services, ...services];

  const renderContent = () => {
    switch (currentPage) {
      case 'tuv': return <TuvStandards />;
      case 'terms': return <Terms />;
      case 'dsg-tuning':
        return (
          <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black min-h-screen text-white">
            <section className="py-20 px-4 max-w-7xl mx-auto">
               <h2 className="text-orange-600 font-display font-bold text-sm mb-4 uppercase tracking-[0.3em]">Transmission Control Unit</h2>
               <h3 className="text-4xl md:text-7xl font-display font-bold mb-8 uppercase italic leading-none">REPROGRAMAÇÃO <span className="text-orange-500">DSG & TCU</span></h3>
               <p className="text-gray-400 max-w-2xl mb-10">Otimização de caixas de velocidades automáticas para binários elevados e trocas instantâneas.</p>
               <button onClick={() => setCurrentPage('contact')} className="px-8 py-4 bg-orange-600 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange-700 transition-all">Solicitar Orçamento</button>
            </section>
          </div>
        );
      case 'services':
        return (
          <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Services />
          </div>
        );
      case 'history':
        return (
          <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-24 bg-black min-h-screen flex items-center px-4">
              <div ref={aboutTextRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${aboutTextInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-orange-600 font-display font-bold text-sm mb-4 uppercase tracking-[0.4em]">Engenharia de Calibração</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 text-white uppercase italic tracking-tighter">MOHANDAS F HIRATA</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Brasileiro de ascendência japonesa, radicado na Europa, especialista em WinOLS Master e desenvolvimento de software de alta performance.</p>
              </div>
            </section>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20 min-h-screen bg-[#0a0a0a] animate-in fade-in duration-700 flex items-center justify-center p-4 text-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 uppercase italic">CONSULTORIA <span className="text-orange-600">DIRETA</span></h2>
              <p className="text-gray-400 mb-10">Fale diretamente com o preparador para um orçamento de precisão.</p>
              <a href="https://wa.me/351930930736" target="_blank" className="inline-block px-10 py-5 bg-green-600 rounded-2xl text-white font-bold uppercase tracking-widest hover:bg-green-700 transition-all">WhatsApp Portugal</a>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero onOpenCalculator={handleOpenCalculator} onContactClick={() => setCurrentPage('contact')} onQuickEstimate={handleQuickEstimate} />
            <div className="bg-orange-600 py-4 overflow-hidden whitespace-nowrap relative z-10 border-y border-white/10 shadow-2xl">
              <div className="flex animate-[scroll_500s_linear_infinite] space-x-20 font-sans font-extrabold text-xs md:text-sm tracking-[0.2em] text-white w-max">
                {tickerItems.map((service, i) => (
                  <span key={i} className="uppercase flex items-center gap-4">
                    {service.title} <span className="opacity-30">•</span>
                  </span>
                ))}
              </div>
            </div>
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <MobileRemapping />
            <section className="py-20 bg-black border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { val: "MASTER", label: "Calibração WinOLS" },
                  { val: "FIÁVEL", label: "Segurança de Motor" },
                  { val: "BINÁRIO", label: "Performance Linear" },
                  { val: "DIRETO", label: "Apoio Especialista" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="text-xl md:text-3xl font-display font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest leading-none">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-orange-600 selection:text-white">
      <Header onNavigate={(page: Page) => setCurrentPage(page)} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <PerformanceCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} initialCarModel={calculatorData.model} initialEngine={calculatorData.engine} initialTargetGain={calculatorData.targetGain} />
      <Footer onNavigate={(page: Page) => setCurrentPage(page)} />
      <TuningChat onContactClick={() => setCurrentPage('contact')} />
      <BackToTop />
      <CookieConsent onAccept={() => setHasConsented(true)} />
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default App;
