import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = ({ onStart }) => {
  const benefits = [
    "Matrícula Grátis",
    "Avaliação Física Completa",
    "Professor ao seu lado em todas as aulas",
    "Estacionamento Grátis no local",
    "Acesso total a todas as modalidades"
  ];

  return (
    <section className="bg-[#0C0C0C] py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título e Subtítulo Adaptados */}
        <h2 className="text-[#B1F82A] text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
          Investimento
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-medium italic mb-16">
          Transparência total. Sem taxa oculta. Sem surpresa.
        </p>

        {/* CARD DE PREÇO ADAPTADO */}
        <div className="max-w-[650px] mx-auto bg-white/5 border-2 border-[#B1F82A] rounded-[3rem] p-10 md:p-16 shadow-[0_0_60px_rgba(177,248,42,0.1)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          
          {/* Badge de Urgência */}
          <div className="absolute top-6 right-[-35px] bg-[#B1F82A] text-black font-black py-1 px-12 rotate-45 text-[10px] uppercase tracking-widest">
            Vagas Limitadas
          </div>

          <div className="mb-8">
            <span className="text-gray-400 text-sm uppercase font-black tracking-[0.3em]">Plano Anual</span>
            <h3 className="text-[#B1F82A] text-6xl md:text-8xl font-black mt-4 leading-none tracking-tighter">
              12x R$ 229
            </h3>
            <p className="text-gray-400 text-xl font-bold italic mt-4">
              ou R$ 249/mês sem contrato
            </p>
          </div>

          <div className="h-px w-full bg-white/10 my-10" />

          {/* Lista de Benefícios com Ícones */}
          <ul className="space-y-5 mb-12 text-left md:max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4 text-white font-bold text-lg italic">
                <div className="bg-[#B1F82A] p-1 rounded-full">
                  <Check size={16} className="text-black" strokeWidth={4} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>

          <Button 
            onClick={onStart}
            className="w-full py-10 text-2xl font-black bg-[#B1F82A] text-black rounded-3xl hover:bg-white transition-all uppercase italic tracking-tighter"
          >
            Garantir minha vaga agora
          </Button>

          <div className="mt-6 flex items-center justify-center gap-2 text-red-500 animate-pulse">
            <Clock size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Restam apenas 07 vagas para Fevereiro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;