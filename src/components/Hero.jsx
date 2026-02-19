import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, MapPin } from 'lucide-react';
import logoUplay from '@/assets/logo_com_cc.png';

const Hero = ({ onStart }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:h-screen md:py-0">
      <div className="absolute top-8 left-4 sm:left-6 lg:left-8 z-20 flex items-center space-x-2 text-white">
      </div>

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069"
          alt="Ambiente Uplay Campo Comprido"
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-24 md:pt-0">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Logo Centralizada no Mobile */}
          <img
            src={logoUplay}
            alt="Logo Uplay Campo Comprido"
            className="w-32 h-auto mb-8"
          />


          {/* Título com ajuste de tamanho e alinhamento */}
          <h1 className="text-7xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            VOCÊ <br />NÃO <span className="text-brand-gold">TREINA </span>
            SOZINHO.
          </h1>

          {/* Parágrafo com max-w centralizado no mobile (mx-auto) */}
          <p className="mt-6 text-xl text-gray-300 max-w-md font-medium mx-auto md:mx-0">
            Orientação profissional +<br />
            acompanhamento real no <strong>método Uplay CC.<br /></strong>
            Por isso 80% dos alunos não desistem.
          </p>

          {/* Botão centralizado no Mobile e em linha no Desktop */}
          <div className="mt-10 mb-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto">
            <Button
              onClick={() => onStart()}
              className="w-full sm:w-auto py-6 px-10 text-xl font-black rounded-full bg-brand-gold text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase"
            >
              Agendar Aula Experiência
            </Button>
          </div>

          {/* Prova Social Reintegrada e Centralizada */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black object-cover"
                  src={`https://i.pravatar.cc/150?u=${i + 10}`}
                  alt="Aluno Uplay"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand-gold flex items-center justify-center text-[10px] font-bold text-black">
                +1000
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-bold leading-none">+1000 Alunos</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-bold">
                Treinando com acompanhamento
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {['Aula experiência', 'Avaliação física completa', 'Acompanhamento profissional'].map((item) => (
            <div key={item} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4 group hover:border-[#B1F82A]/50 transition-all">
              <div className="bg-brand-gold p-2 rounded-full text-black">
                <Check size={20} />
              </div>
              <span className="text-white font-black text-lg uppercase italic">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;