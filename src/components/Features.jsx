import React from 'react';
import { Minus, Plus, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-[#0C0C0C] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-center text-4xl md:text-5xl md:text-left font-black text-white leading-tight tracking-tighter uppercase italic">
              POR QUE A UPLAY CC
              <span className="text-brand-gold"><br />É DIFERENTE?</span>
            </h2>
            <p className="text-center md:text-left pt-2 text-gray-500 text-sm uppercase tracking-[0.3em] max-w-s">
              Você já treinou mas cansou de sempre desistir?<br />
              O problema não é você. <strong>É o método.</strong>
            </p>
          </div>
          <p className="text-center md:text-left bg-white/5 p-10 rounded-xl text-gray-500 font-black text-sm uppercase tracking-[0.3em]">
            Na maioria das academias você <br />fica perdido(a), sem orientação,<br />
            sem acompanhamento. <br /><br />Na Uplay, nossa equipe qualificada <br />te
            acompanha do básico ao avançado. <br />Por isso você não desiste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academia Comum */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] group hover:bg-white/10 transition-all opacity-60 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-8">
              <Minus size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 italic uppercase tracking-tighter">Academia Comum</h3>
            <ul className="space-y-6 text-gray-500 font-bold italic uppercase">
              {/* Item 1 */}
              <li className="flex flex-col items-center md:items-start gap-1 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✕</span>
                  <span>Treino genérico sem propósito</span>
                </div>
                <span className="text-[10px] md:text-xs normal-case font-medium ml-0 md:ml-7 opacity-60">
                  Ficha padrão, sem considerar suas limitações
                </span>
              </li>

              {/* Item 2 */}
              <li className="flex flex-col items-center md:items-start gap-1 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✕</span>
                  <span>Você é só mais um número</span>
                </div>
                <span className="text-[10px] md:text-xs normal-case font-medium ml-0 md:ml-7 opacity-60">
                  Ninguém sabe seu nome ou seu objetivo
                </span>
              </li>

              {/* Item 3 */}
              <li className="flex flex-col items-center md:items-start gap-1 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✕</span>
                  <span>Ninguém corrige sua postura</span>
                </div>
                <span className="text-[10px] md:text-xs normal-case font-medium ml-0 md:ml-7 opacity-60">
                  Risco de lesão e resultados lentos
                </span>
              </li>

              {/* Item 4 */}
              <li className="flex flex-col items-center md:items-start gap-1 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✕</span>
                  <span>Estrutura OK, mas falta gente</span>
                </div>
                <span className="text-[10px] md:text-xs normal-case font-medium ml-0 md:ml-7 opacity-60">
                  Aparelhos bons, mas você treina sozinho
                </span>
              </li>

              {/* Item 5 */}
              <li className="flex flex-col items-center md:items-start gap-1 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✕</span>
                  <span>Dinheiro jogado fora</span>
                </div>
                <span className="text-[10px] md:text-xs normal-case font-medium ml-0 md:ml-7 opacity-60">
                  Paga barato, mas não frequenta e não muda
                </span>
              </li>


              {/* Destaque Final Negativo */}
              <li className="flex items-center justify-center md:justify-start gap-3 text-xl md:text-2xl text-white/40 uppercase font-black tracking-widest pt-4">
                chance de desistência: 80%
              </li>
            </ul>
          </div>

          {/* Uplay Campo Comprido */}
          <div className="bg-brand-gold p-10 md:p-14 rounded-[3rem] transform shadow-[0_20px_80px_rgba(177,248,42,0.15)] relative flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-black text-[#B1F82A] w-12 h-12 rounded-full flex items-center justify-center mb-8">
              <Plus size={24} />
            </div>
            <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter italic">Uplay Campo Comprido</h3>
            <ul className="space-y-6 text-black font-black uppercase italic">
              {/* Item 1 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>EQUIPE ALTAMENTE TREINADA</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  Professores certificados, do básico ao avançado
                </span>
              </li>

              {/* Item 2 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>TREINO MONTADO Para o O SEU objetivo</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  Personalizado, evolução constante
                </span>
              </li>

              {/* Item 3 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>CORREÇÃO DE TÉCNICA</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  Você não treina errado aqui
                </span>
              </li>

              {/* Item 4 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>ESTRUTURA + MÉTODO UPLAY</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  3 andares, 10+ setores, aulas coletivas Les Mills
                </span>
              </li>

              {/* Item 5 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>AMBIENTE QUE INSPIRA</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  Competições, desafios, você não treina sozinho
                </span>
              </li>

              {/* Item 6 */}
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-3">
                  <Zap size={18} fill="black" />
                  <span>80% PASSAM DOS 6 MESES</span>
                </div>
                <span className="text-[10px] md:text-xs opacity-60 normal-case font-bold ml-0 md:ml-8">
                  Porque aqui você não desiste
                </span>
              </li>

              {/* Destaque Final */}
              <li className="flex items-center justify-center md:justify-start gap-3 text-2xl underline decoration-2 underline-offset-4 pt-4">
                Acompanhamento Real
              </li>
            </ul>
          </div>
        </div>

        {/* O GRANDE DESTAQUE FINAL */}
        <div className="mt-24 text-center">
          <h1 className="text-5xl md:text-9xl font-black text-white leading-none tracking-[0.9] uppercase italic">
            R$ 7,50 <span className="text-brand-gold">POR DIA.</span>
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-gray-400 font-bold tracking-tight">
            Menos que um café. Mais que dobrar suas <span className="text-white underline decoration-brand-gold">chances de não desistir.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;