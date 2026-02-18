import React from 'react';
import { Minus, Plus, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-[#0C0C0C] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
              POR QUE A UPLAY É <br />
              <span className="text-[#B1F82A]">DIFERENTE?</span>
            </h2>
          </div>
          <p className="text-gray-500 font-black text-sm uppercase tracking-[0.3em] max-w-xs">
            A maioria das academias você paga, vai lá, fica perdido(a) e desiste.
Aqui é diferente.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academia Comum */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] group hover:bg-white/10 transition-all opacity-60">
            <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-8">
              <Minus size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 italic uppercase tracking-tighter">Academia Comum</h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex items-center gap-3">• Treino genérico e sem alma</li>
              <li className="flex items-center gap-3">• Você é apenas mais um número</li>
              <li className="flex items-center gap-3">• Ninguém corrige sua postura</li>
              <li className="flex items-center gap-3">• Dinheiro jogado fora</li>
              <li className="flex items-center gap-3 italic text-white uppercase font-black text-xs tracking-widest">Chance de desistência: 80%</li>
            </ul>
          </div>

          {/* Uplay Campo Comprido */}
          <div className="bg-[#B1F82A] p-10 md:p-14 rounded-[3rem] transform md:-rotate-1 shadow-[0_20px_80px_rgba(177,248,42,0.15)] relative">
            <div className="bg-black text-[#B1F82A] w-12 h-12 rounded-full flex items-center justify-center mb-8">
              <Plus size={24} />
            </div>
            <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter italic">Uplay Campo Comprido</h3>
            <ul className="space-y-4 text-black font-black uppercase text-sm italic">
              <li className="flex items-center gap-3"><Zap size={18} fill="black" /> Treino montado para seu corpo</li>
              <li className="flex items-center gap-3"><Zap size={18} fill="black" /> Professor ao seu lado todo dia</li>
              <li className="flex items-center gap-3"><Zap size={18} fill="black" /> Correção constante de técnica</li>
              <li className="flex items-center gap-3"><Zap size={18} fill="black" /> 80% passam dos 6 meses</li>
              <li className="flex items-center gap-3 underline decoration-2 underline-offset-4">Acompanhamento Real</li>
            </ul>
          </div>
        </div>

        {/* O GRANDE DESTAQUE FINAL */}
        <div className="mt-24 text-center">
            <h1 className="text-5xl md:text-9xl font-black text-white leading-none tracking-[0.9] uppercase italic">
                R$ 2,50 <span className="text-[#B1F82A]">POR DIA.</span>
            </h1>
            <p className="mt-6 text-xl md:text-3xl text-gray-400 font-bold tracking-tight">
                Menos que um café. Mais que dobrar suas <span className="text-white underline decoration-[#B1F82A]">chances de não desistir.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Features;