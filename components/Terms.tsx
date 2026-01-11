
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen text-gray-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase italic tracking-tighter mb-4">
            TERMOS E <span className="text-orange-600">CONDIÇÕES</span>
          </h1>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-[10px]">Última atualização: Junho 2024</p>
        </div>

        <div className="space-y-10 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-orange-600 pl-4">1. Âmbito do Serviço</h2>
            <p>
              A Zenkai Performance (doravante designada por "Nós") presta serviços especializados de reprogramação de software para Unidades de Controlo de Motor (ECU) e de Transmissão (TCU). O nosso serviço é exclusivamente focado na otimização eletrónica e calibração de mapas de performance através de engenharia reversa e ajuste de parâmetros hexadecimais (WinOLS).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-orange-600 pl-4">2. Garantia de Software e Padrões de Segurança</h2>
            <p className="mb-4">
              Oferecemos garantia sobre a integridade eletrónica da calibração efetuada. Isto assegura que o software fornecido respeita os padrões técnicos de programação e não apresenta erros lógicos inerentes à nossa intervenção.
            </p>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
              <p>
                <strong>Compromisso "Safe Tuning":</strong> As nossas intervenções são pautadas por margens de segurança conservadoras, inspiradas nas normas TUV europeias. Garantimos que os mapas de injeção, pressão de turbo e binário são mantidos dentro das tolerâncias de hardware definidas pelos fabricantes originais para evitar o stress prematuro dos materiais.
              </p>
              <p className="text-orange-500 font-semibold italic">
                Aviso de Responsabilidade: Ao contratar este serviço, o cliente declara estar ciente de que o aumento de performance, embora tecnicamente seguro e otimizado, resulta numa maior solicitação térmica e mecânica. O cliente reconhece que a fiabilidade do conjunto depende integralmente da manutenção preventiva rigorosa e do estado de saúde prévio do motor (incluindo turbo, embraiagem e sistema de arrefecimento), isentando a Zenkai de responsabilidade por falhas de hardware resultantes de fadiga de materiais ou de desgaste preexistente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-orange-600 pl-4">3. Manutenção e Utilização</h2>
            <p>
              É imperativo que o veículo seja mantido com lubrificantes e consumíveis de alta qualidade, respeitando intervalos de revisão adequados a um veículo de performance. O uso indevido (ex: solicitações extremas com motor frio) ou combustíveis de baixa qualidade anula qualquer suporte técnico relativo a sintomas de performance irregular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-orange-600 pl-4">4. Legalidade e Homologação</h2>
            <p>
              O cliente é o único responsável pela legalização das alterações de performance junto das autoridades competentes (IMT em Portugal). As soluções de anulação de sistemas de emissões (DPF/EGR/AdBlue) destinam-se exclusivamente a veículos de competição ou exportação, não sendo permitidas para circulação na via pública nacional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-orange-600 pl-4">5. Política de Privacidade</h2>
            <p>
              Os dados técnicos do veículo (VIN, Logs de Estrada) e dados pessoais são tratados com sigilo absoluto sob o RGPD, sendo utilizados apenas para o histórico de calibração e suporte pós-venda.
            </p>
          </section>

          <section className="bg-orange-600/10 p-8 rounded-3xl border border-orange-600/20">
            <h2 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Transparência Técnica</h2>
            <p className="text-sm text-gray-400 mb-6">Trabalhamos com o objetivo de entregar o melhor compromisso entre performance e vida útil. Se tiver dúvidas sobre a saúde mecânica do seu veículo antes do remap, solicite um diagnóstico prévio.</p>
            <a href="mailto:contact@zenkai-performance.eu" className="text-orange-600 font-bold hover:underline">contact@zenkai-performance.eu</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
