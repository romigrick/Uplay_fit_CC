import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mariana Silveira",
    time: "Aluna há 2 anos",
    initial: "M",
    text: "Desisti de outras academias por falta de suporte. Na Uplay continuei devido ao método e acompanhamento real."
  },
  {
    name: "Ricardo Mendes",
    time: "Aluno há 6 meses",
    initial: "R",
    text: "Pela primeira vez na vida eu sei o que fazer no treino. O professor está sempre ali corrigindo e motivando. Mudou meu corpo."
  },
  {
    name: "Ana Cláudia",
    time: "Aluna há 1 ano",
    initial: "A",
    text: "O diferencial é não se sentir invisível. Você chega e o professor já sabe seu treino e seu objetivo. Vale cada centavo."
  },
  {
    name: "Lucas Ferreira",
    time: "Aluno há 3 anos",
    initial: "L",
    text: "A estrutura é top, mas o que segura é o atendimento. O professor não te deixa parado um segundo. Recomendo demais!"
  }
];

const Trainers = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-[#0C0C0C] py-20 overflow-hidden">
      <div className="max-w-[100%]">
        <div className="text-center mb-20">
          <h2 className="text-brand-gold text-sm font-black uppercase tracking-[0.5em] mb-4">
            Comunidade Uplay
          </h2>
          <p className="text-white text-3xl md:text-5xl font-black tracking-tighter italic uppercase">
            A opinião de quem <span className="text-brand-gold">não desiste</span>
          </p>
        </div>

        {/* cursor-grab e select-none adicionados para melhorar a UX do arrasto */}
        <div className="relative w-full overflow-visible cursor-grab active:cursor-grabbing select-none">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-4 overflow-visible py-12">
              {testimonials.map((item, index) => {
                const isActive = current === index;
                
                return (
                  <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-[60%] lg:basis-[45%] overflow-visible">
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      // pointer-events-none garante que o texto dentro não seja alvo de seleção ao arrastar
                      className="relative p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border border-white/5 min-h-[400px] flex flex-col justify-center items-center text-center shadow-2xl pointer-events-none"
                    >
                      <Quote 
                        className={`text-brand-gold absolute -top-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-0'}`} 
                        size={64} 
                      />
                      
                      <p className={`text-lg md:text-2xl text-white font-bold italic leading-tight mb-8 tracking-tighter transition-all duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                        "{item.text}"
                      </p>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center font-black text-xl text-black mb-4 shadow-[0_0_30px_rgba(177,248,42,0.3)]">
                          {item.initial}
                        </div>
                        <h3 className="text-white font-black text-lg uppercase tracking-tighter italic">
                          {item.name}
                        </h3>
                        <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mt-1">
                          {item.time}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8 pointer-events-auto">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-[#B1F82A] hover:text-black w-12 h-12" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-[#B1F82A] hover:text-black w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Trainers;