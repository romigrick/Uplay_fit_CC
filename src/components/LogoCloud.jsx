import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';


import cc1 from '../assets/cc (1).jpeg';
import cc2 from '../assets/cc (2).jpeg';
import cc3 from '../assets/cc (3).jpeg';
import cc4 from '../assets/cc (4).jpeg';
import cc5 from '../assets/cc (5).jpeg';
import cc6 from '../assets/cc (6).jpeg';
import cc7 from '../assets/cc (7).jpeg';
import cc8 from '../assets/cc (8).jpeg';
import cc9 from '../assets/cc (9).jpeg';
import cc10 from '../assets/cc (10).jpg';
import cc11 from '../assets/cc (11).jpg';
import cc12 from '../assets/cc (12).jpg';
import cc13 from '../assets/cc (13).jpg';

import adip from '../assets/adip.jpg';
import adip2 from '../assets/adip2.jpeg';
import lesmills1 from '../assets/lesmills1.jpeg';

const areas = [
  { name: "ÁREA MUSCULAÇÃO", imgs: [cc8, cc1, cc13] },
  { name: "ESPAÇO CARDIO", imgs: [cc7, cc2, cc9] },
  { name: "AULAS COLETIVAS Lesmills", imgs: [lesmills1, cc3] },
  { name: "ÁREA FUNCIONAL", imgs: [cc1, cc4, cc5] },
  { name: "ESTACIONAMENTO", imgs: [cc6, cc10, cc11, cc12] },
  { name: "AVALIAÇÃO FÍSICA", imgs: [adip, adip2] }
];

// 2. Componente interno para o carrossel de imagens do card
const CardImages = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tempoAleatorio = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, tempoAleatorio); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
        />
      </AnimatePresence>
    </div>
  );
};

const LogoCloud = ({ onStart }) => {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      let moveBy = -1.2 * (delta / 16);
      let nextX = x.get() + moveBy;

      // Reset para o loop infinito
      if (nextX <= -2500) {
        nextX = 0;
      }
      x.set(nextX);
    }
  });

  return (
    <div className="py-24 bg-[#0C0C0C] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-brand-gold text-sm font-black uppercase tracking-[0.5em] mb-4">
          Tour Virtual
        </h2>
        <p className="text-white text-3xl md:text-5xl font-black tracking-tighter italic">
          POR DENTRO É MUITO <span className="text-brand-gold">MELHOR</span>.
        </p>
      </div>

      <div className="relative flex overflow-visible cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex whitespace-nowrap gap-6 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2500, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {[...areas, ...areas].map((area, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 overflow-hidden rounded-[2.5rem] group select-none"
            >
              {/* Carrossel Interno */}
              <CardImages images={area.imgs} alt={area.name} />

              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none"></div>

              {/* Texto com correção para não vazar */}
              <div className="absolute bottom-10 left-8 right-8 pointer-events-none">
                <span className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter whitespace-normal block leading-none group-hover:text-brand-gold transition-colors">
                  {area.name}
                </span>
                <div className="w-0 group-hover:w-full h-1 bg-brand-gold transition-all duration-500 mt-2"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 mb-10 flex flex-row justify-center sm:flex-row gap-4">
        <Button
          onClick={() => onStart()}
          className="py-6 px-10 text-xl font-black rounded-full bg-brand-gold text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(177,248,42,0.3)] uppercase"
        >
          Agendar Aula Experiência
        </Button>
      </div>
    </div>
  );
};

export default LogoCloud;