import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';


const areas = [
  { name: "ÁREA MUSCULAÇÃO", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" },
  { name: "ESPAÇO CARDIO", img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600" },
  { name: "AULAS COLETIVAS", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600" },
  { name: "ÁREA FUNCIONAL", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800" },
  { name: "ESTACIONAMENTO", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600" },
  { name: "AVALIAÇÃO FÍSICA", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600" }
];

const LogoCloud = ({onStart}) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scroll contínuo
  useAnimationFrame((t, delta) => {
    // Só move automaticamente se não estiver sendo arrastado
    if (!isDragging) {
      let moveBy = -1.2 * (delta / 16); // Velocidade do scroll
      let nextX = x.get() + moveBy;

      // Loop infinito: Reset quando metade do conteúdo duplicado passa
      // Ajuste o valor -2500 dependendo da largura total dos seus cards
      if (nextX <= -2500) {
        nextX = 0;
      }
      x.set(nextX);
    }
  });

  return (
    <div className="py-24 bg-[#0C0C0C] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-[#B1F82A] text-sm font-black uppercase tracking-[0.5em] mb-4">
          Tour Virtual
        </h2>
        <p className="text-white text-3xl md:text-5xl font-black tracking-tighter italic">
          POR DENTRO É MUITO <span className="text-[#B1F82A]">MELHOR</span>.
        </p>
      </div>

      <div className="relative flex overflow-visible cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-6" 
          style={{ x }}
          drag="x"
          // O dragConstraints impede que o usuário arraste para o "vazio"
          dragConstraints={{ left: -2500, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {[...areas, ...areas].map((area, index) => (
            <div 
              key={index} 
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 overflow-hidden rounded-[2.5rem] group select-none"
            >
              <img 
                src={area.img} 
                alt={area.name}
                draggable="false" // Importante para não bugar o drag do framer
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                <span className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-[#B1F82A] transition-colors">
                  {area.name}
                </span>
                <div className="w-0 group-hover:w-full h-1 bg-[#B1F82A] transition-all duration-500 mt-2"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
                      <div className="mt-10 mb-10 flex flex-row justify-center sm:flex-row gap-4">
                          <Button
                              onClick={() => onStart()}
                              className="py-6 px-10 text-xl font-black rounded-full bg-[#B1F82A] text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(177,248,42,0.3)] uppercase"
                          >
                              Agendar Aula Grátis
                          </Button>
                      </div>
    </div>
  );
};

export default LogoCloud;