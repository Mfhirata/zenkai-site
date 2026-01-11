
import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zenkai-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zenkai-cookie-consent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleEssentials = () => {
    localStorage.setItem('zenkai-cookie-consent', 'essentials');
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible && !showPolicy) return null;

  return (
    <>
      {/* Banner de Consentimento Principal */}
      {isVisible && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] z-[200] animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="bg-zinc-950/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-600/20 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest italic">Privacidade e Dados</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Conformidade RGPD Europeia</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Utilizamos cookies e processamos dados técnicos para garantir a melhor performance do site e segurança nas suas solicitações de orçamento. Ao continuar, você concorda com o tratamento de dados para fins de consultoria técnica.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleEssentials}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all uppercase tracking-widest"
              >
                Essenciais
              </button>
              <button 
                onClick={handleAccept}
                className="px-4 py-3 bg-orange-600 rounded-xl text-[10px] font-bold text-white hover:bg-orange-700 transition-all uppercase tracking-widest shadow-lg shadow-orange-600/20"
              >
                Aceitar Todos
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <button 
                onClick={() => setShowPolicy(true)}
                className="text-[9px] text-gray-600 hover:text-orange-600 transition-colors uppercase font-bold tracking-[0.2em]"
              >
                Ler Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Detalhes da Política */}
      {showPolicy && (
        <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPolicy(false)}
          ></div>
          <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[80vh]">
            <button 
              onClick={() => setShowPolicy(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-white font-display font-bold text-xl uppercase italic mb-6">Política de <span className="text-orange-600">Privacidade</span></h3>
            
            <div className="space-y-6 text-gray-400 text-xs md:text-sm leading-relaxed">
              <section>
                <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 border-l-2 border-orange-600 pl-2">Quais dados coletamos?</h4>
                <p>Coletamos informações técnicas do veículo (modelo, motorização, VIN se fornecido) e dados de contacto básicos necessários para a elaboração de orçamentos e consultoria técnica de performance.</p>
              </section>

              <section>
                <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 border-l-2 border-orange-600 pl-2">Finalidade</h4>
                <p>Os seus dados são utilizados exclusivamente para o cálculo de ganhos de performance via IA (Gemini API) e para o contacto direto via WhatsApp/E-mail referente ao agendamento de serviços.</p>
              </section>

              <section>
                <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 border-l-2 border-orange-600 pl-2">Direitos RGPD</h4>
                <p>Em conformidade com as normas europeias, você tem o direito de solicitar o acesso, retificação ou eliminação dos seus dados a qualquer momento através do e-mail <strong>contact@zenkai-performance.eu</strong>.</p>
              </section>

              <section className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="italic text-[10px]">
                  Ao utilizar o nosso simulador, você concorda que o processamento técnico é necessário para a prestação do serviço de estimativa de tuning de alta precisão.
                </p>
              </section>
            </div>

            <button 
              onClick={() => setShowPolicy(false)}
              className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-bold text-white uppercase tracking-widest transition-all"
            >
              Fechar Informações
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
