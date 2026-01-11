
import React, { useState, useRef, useEffect } from 'react';
import { startExpertChat } from '../services/gemini';
import { ChatMessage } from '../types';

interface TuningChatProps {
  onContactClick: () => void;
}

const TuningChat: React.FC<TuningChatProps> = ({ onContactClick }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Olá! Eu sou o assistente digital da Zenkai. Meu mestre é especialista em eletrônica automotiva e pode transformar seu carro." },
    { role: 'model', content: "Qual o modelo e motorização do seu veículo para que eu possa te dar uma recomendação técnica precisa? 🏎️" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current = startExpertChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: input });
      setMessages(prev => [...prev, { role: 'model', content: response.text }]);
    } catch (error) {
      console.error("Erro no chat", error);
      setMessages(prev => [...prev, { role: 'model', content: "Desculpe, tive um erro de conexão. Tente novamente!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleClick = () => {
    setIsOpen(false);
    onContactClick();
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] flex flex-col items-end pointer-events-none">
      <div className={`
        mb-4 w-[calc(100vw-2rem)] md:w-96 bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right pointer-events-auto
        ${isOpen ? 'opacity-100 scale-100 max-h-[70vh] md:max-h-[550px]' : 'opacity-0 scale-90 max-h-0 pointer-events-none'}
      `}>
        <div className="bg-orange-600 p-4 font-bold flex items-center justify-between text-white shrink-0">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Assistente Zenkai
          </span>
          <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-gray-950 scrollbar-thin scrollbar-thumb-orange-600"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl ${
                m.role === 'user' 
                ? 'bg-orange-600 text-white rounded-br-none' 
                : 'bg-white/10 text-gray-200 rounded-bl-none'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          
          {/* Botão CTA após a última mensagem do modelo */}
          {!loading && messages.length > 0 && messages[messages.length - 1].role === 'model' && (
            <div className="flex justify-start animate-in fade-in slide-in-from-left-4 duration-500 pt-2">
              <button 
                onClick={handleScheduleClick}
                className="bg-orange-600/10 hover:bg-orange-600 border border-orange-600 text-orange-600 hover:text-white px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-orange-600/5 group"
              >
                Agendar Serviço 
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-xl rounded-bl-none animate-pulse text-gray-400">Analisando...</div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-black border-t border-white/10 flex gap-2 shrink-0">
          <input 
            type="text" 
            placeholder="Pergunte sobre Stage 1..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-orange-600 text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="bg-orange-600 p-2 rounded-lg hover:bg-orange-700 transition-colors text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </form>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all pointer-events-auto"
      >
        {isOpen ? (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        ) : (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
        )}
      </button>
    </div>
  );
};

export default TuningChat;
