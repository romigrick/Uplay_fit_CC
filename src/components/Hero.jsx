import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, MapPin } from 'lucide-react';

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
        <div>
          <div className="flex items-center gap-2 mb-4 text-[#B1F82A]">
            <MapPin size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Campo Comprido</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            VOCÊ <br />NÃO <span className="text-[#B1F82A]">TREINA </span>
            
             SOZINHO.
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-md font-medium">
            Professor do seu lado em todas as aulas.<br />O acompanhamento real que você precisa<br />para não desistir.
          </p>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onStart()}
              className="py-6 px-10 text-xl font-black rounded-full bg-[#B1F82A] text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(177,248,42,0.3)] uppercase"
            >
              Agendar Aula Grátis
            </Button>
          </div>
          
            {/* Prova Social Reintegrada */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="Aluno Uplay"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#B1F82A] flex items-center justify-center text-[10px] font-bold text-black">
                  +500
                </div>
              </div>
              <div className="text-left">
                <p className="text-white font-bold leading-none">+500 Alunos</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1 font-bold">Treinando com acompanhamento</p>
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 gap-4">
           {['Sem compromisso', 'Matrícula grátis', 'Avaliação grátis'].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4 group hover:border-[#B1F82A]/50 transition-all">
                <div className="bg-[#B1F82A] p-2 rounded-full text-black">
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