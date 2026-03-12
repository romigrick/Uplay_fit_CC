import React, { useState, useEffect } from 'react';

const ImageSequencePlayer = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  // 1. Importa todos os frames automaticamente (Vite)
  // Certifique-se de que o caminho está correto em relação a este arquivo
  const frameModules = import.meta.glob('../assets/bkg/*.{png,jpg,webp,jpeg}', { 
    eager: true, 
    import: 'default' 
  });
  
  const frames = Object.values(frameModules);

  useEffect(() => {
    if (frames.length === 0) return;

    // 2. Loop de animação (30 FPS)
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, [frames.length]);

  if (frames.length === 0) return null;

  return (
    <img
      src={frames[currentFrame]}
      alt="Background Animation"
      className="w-full h-full object-cover grayscale-[30%]"
    />
  );
};
export default ImageSequencePlayer;