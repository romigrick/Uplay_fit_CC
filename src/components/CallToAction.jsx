import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Check } from 'lucide-react';

const CallToAction = ({ onStart }) => {
  const benefits = [
    "Matrícula Grátis",
    "Avaliação Física Completa",
    "Professor em todas as aulas",
    "Estacionamento Grátis",
    "Treino montado personalizado",
    "Aulas coletivas ilimitadas",
    "Sem taxa de manutenção",
  ];

  return (
    <section id="planos" className="bg-[#0C0C0C] py-20 px-4">
      {/* max-w-7xl mantido, shadow ajustada para o dourado */}
      <div className="max-w-7xl mx-auto bg-brand-gold rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-20 text-black relative overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.15)]">

        {/* Container: No mobile items-center e text-center. No desktop volta para esquerda. */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 mb-16 text-center md:text-left">

          {/* Lado Esquerdo: Valores */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase mb-8">
              <Clock size={12} /> Vagas limitadas para este mês
            </div>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8 italic uppercase">
              PLANO <br className="hidden md:block" /> ANUAL.
            </h2>
            <div className="text-5xl md:text-7xl font-black italic mb-2 tracking-tighter">12x R$ 229</div>
            <p className="pl-6 pt-10 text-2xl font-bold opacity-60 italic">ou R$ 249/mês sem contrato</p>
          </div>

          {/* Lado Direito: Benefícios */}
          <div className="flex-1 w-full">
            {/* Itens alinhados ao centro no mobile (justify-center) */}
            <ul className="grid grid-cols-1 gap-3 mb-10 font-black text-lg italic uppercase">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start gap-3 border-b border-black/5 pb-2 text-sm md:text-lg">
                  <Check size={18} strokeWidth={4} className="flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <h1 className="text-4xl md:text-4xl font-black leading-[0.85] tracking-tighter italic">
              = R$ 7,50 por dia
            </h1>
            <p className="pt-4 font-bold text-md opacity-80 uppercase tracking-tighter">Seu melhor resultado por menos de um café.</p>

          </div>
        </div>

        {/* Botão Centralizado Abaixo */}
        <div className="flex flex-col items-center max-w-2xl mx-auto relative z-10">
          <Button
            onClick={() => onStart()}
            className="w-full py-8 md:py-10 text-xl md:text-2xl font-black bg-black text-brand-gold rounded-[2rem] md:rounded-3xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-tighter shadow-2xl"
          >
            Garantir minha vaga agora
          </Button>

          <div className="flex justify-center mt-6">
            <p className="animate-pulse text-[10px] font-black uppercase tracking-[0.2em] bg-black/10 px-6 py-2 rounded-full">
               <span className="text-black-600">Restam </span>Poucas vagas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;