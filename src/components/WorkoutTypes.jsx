import React from 'react';
import { Globe, Music, FlaskConical, CheckCircle2 } from 'lucide-react';

const WorkoutTypes = () => {
  const modalidades = [
    { nome: "BODYPUMP", desc: "Força Muscular" },
    { nome: "SPRINT", desc: "HIIT em Bike" },
    { nome: "BODYBALANCE", desc: "Flexibilidade" },
    { nome: "RPM", desc: "Ciclismo Indoor" }
  ];

  return (
    <section className="bg-[#0C0C0C] py-24">
      <div className="max-w-full mx-auto">
        {/* Título de Entrada */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Energia que contagia</p>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            MUITO MAIS QUE <br className="hidden md:block" /> UM TREINO.
          </h2>
        </div>

        {/* FAIXA LES MILLS: Removi o max-w e adicionei w-full */}
        <div className="w-full bg-[#F5F5F5] py-16 md:py-24 text-black shadow-[0_20px_80px_rgba(255,255,255,0.05)]">
          {/* Container interno para manter o CONTEÚDO centralizado dentro da faixa */}
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Lado Esquerdo: Conteúdo */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block bg-black text-brand-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  MÉTODO INTERNACIONAL
                </span>
                <h3 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase italic">
                  <span className="text-brand-gold">LES MILLS:</span> O MÉTODO QUE CONQUISTA O MUNDO INTEIRO.
                </h3>

              </div>

              {/* Lado Direito: Pilares e Modalidades */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                  <div className="flex flex-col items-center lg:items-start group cursor-default">
                    <Globe className="text-brand-gold mb-3 transition-transform group-hover:scale-110" size={32} />
                    <h4 className="font-black text-sm uppercase italic">Global</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight">100 países / 20.000 academias</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start group cursor-default">
                    <Music className="text-brand-gold mb-3 transition-transform group-hover:scale-110" size={32} />
                    <h4 className="font-black text-sm uppercase italic">Música Original</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight">Licenciada & Sincronizada</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start group cursor-default">
                    <FlaskConical className="text-brand-gold mb-3 transition-transform group-hover:scale-110" size={32} />
                    <h4 className="font-black text-sm uppercase italic">Ciência</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight">Especialistas do exercício</p>
                  </div>
                </div>

                <div className="bg-black/5 rounded-[2rem] p-8 border border-black/5">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Nossas Modalidades</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {modalidades.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-brand-gold shrink-0 transition-transform group-hover:scale-125" size={18} />
                        <div className="flex flex-col">
                          <span className="font-black tracking-tighter uppercase italic">{item.nome}</span>
                          <span className="text-[14px] font-bold text-gray-400 uppercase">({item.desc})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12 max-w-5xl mx-auto">
              <p className="text-black text-center text-1xl md:text-3xl font-black tracking-tighter italic uppercase">
                <span className="text-brand-gold">Presente em mais de 20.000 academias em 100 países.<br/><br/></span>
                Desenvolvido por cientistas do exercício. <br />Música licenciada + coreografias testadas. <br />E a Uplay Campo Comprido traz isso pra você. 
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutTypes;