
import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useinview';

interface Testimonial {
  id: number;
  name: string;
  car: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Schmidt",
    car: "BMW M4 Competition (G82)",
    location: "Munique, Alemanha",
    text: "A entrega de potência do Stage 1 da Zenkai é surreal. O carro manteve a facilidade de condução OEM, mas com uma patada de binário que eu nunca vi. O suporte técnico é o melhor da Europa.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    car: "Audi RS3 8Y",
    location: "Lisboa, Portugal",
    text: "Fizemos o remap da ECU e da TCU (DSG). As passagens de caixa ficaram instantâneas e o 'popcorn' está perfeito. É nítido que ele sabe exatamente o que está a fazer com o motor EA888.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "James Wilson",
    car: "Range Rover Sport SDV6",
    location: "Londres, Reino Unido",
    text: "A minha preocupação era o binário para rebocar. A Zenkai entregou exatamente o que eu precisava. O carro está mais disponível e o consumo em autoestrada melhorou cerca de 12%. Excelente trabalho.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "Elena Gatti",
    car: "VW Golf GTI MK8",
    location: "Milão, Itália",
    text: "Atendimento VIP. Ele veio até minha casa, fez os logs, ajustou o mapa e testámos juntos. O carro está com uma resposta de acelerador muito mais agressiva. Vale cada cêntimo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 5,
    name: "Lars Van Der Berg",
    car: "Porsche 911 Carrera S",
    location: "Amesterdão, Holanda",
    text: "Performance de nível de pista com segurança de rua. O mapa da Zenkai é extremamente refinado. Sente-se a precisão em cada rotação do motor. Profissionalismo puro.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden border-b border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 md:mb-24 relative z-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-orange-600 font-display font-bold tracking-widest text-sm uppercase mb-4 italic">Resultados Comprovados</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic tracking-tighter">O QUE DIZEM <span className="text-orange-600">OS MEUS CLIENTES</span></h3>
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-30 hidden md:block">
            <button onClick={prev} className="p-4 bg-white/5 hover:bg-orange-600 border border-white/10 rounded-full text-white transition-all active:scale-95 group">
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-30 hidden md:block">
            <button onClick={next} className="p-4 bg-white/5 hover:bg-orange-600 border border-white/10 rounded-full text-white transition-all active:scale-95 group">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="relative min-h-[520px] sm:min-h-[450px] md:min-h-[400px]">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center
                  ${idx === currentIndex ? 'opacity-100 translate-x-0' : idx < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}
                `}
              >
                <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start relative group">
                  <div className="shrink-0 text-center md:text-left z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-orange-600/30 mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(234,88,12,0.2)]">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-orange-500 font-display text-[10px] font-bold uppercase tracking-widest mb-4">{testimonial.car}</p>
                  </div>

                  <div className="flex-1 text-center md:text-left z-10">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8 font-light">
                      "{testimonial.text}"
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Software Verificado</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-8 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.5)]' : 'w-2 bg-white/20'}`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
