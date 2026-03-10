import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import logoInside from '@/assets/inside_branca.png';
import logoUplay from '@/assets/logo_com_cc.png';
// Componentes
import Hero from '@/components/Hero';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import WorkoutResults from '@/components/WorkoutResults';
import LogoCloud from '@/components/LogoCloud';
import Trainers from '@/components/Trainers';
import Features from '@/components/Features';
import WorkoutTypes from '@/components/WorkoutTypes';
import BentoGrid from '@/components/BentoGrid';
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing';

// UI
import { Toaster } from '@/components/ui/toaster';

// Componente de Divisor Simples
const Divider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

function App() {
  const [view, setView] = useState('home');
  const [formData, setFormData] = useState(null);

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('questionnaire');
  };

  const handleComplete = (data) => {
    setFormData(data);
    setView('results');
  };

  const handleReset = () => {
    setFormData(null);
    setView('home');
  };

  return (
    <>
      <Helmet>
        <title>Uplay Campo Comprido - Você não treina sozinho</title>
      </Helmet>
      
      <div className="min-h-screen bg-[#0C0C0C] text-white relative flex flex-col">
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero onStart={handleStart} />
                <Divider />
                <Features />
                <Divider />
                <LogoCloud onStart={handleStart} />
                <Divider />
                <Trainers />
                <Divider />
                <BentoGrid onStart={handleStart} />
                <Divider />
                <WorkoutTypes  />
                <Divider />
                <CallToAction onStart={handleStart} />
                <Pricing />
              </motion.div>
            )}
            
            {view === 'questionnaire' && (
              <QuestionnaireForm key="form" onComplete={handleComplete} onBack={handleReset} />
            )}
            
            {view === 'results' && (
              <WorkoutResults key="results" formData={formData} onReset={handleReset} />
            )}
          </AnimatePresence>
        </main>

        {/* FOOTER PERSONALIZADO */}
        {view === 'home' && (
          <footer className="bg-[#0C0C0C] py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo à Esquerda */}
                <div className="flex items-center">
                  <img 
                    src={logoUplay}
                    alt="Uplay Logo" 
                    className="h-10 w-auto brightness-0 invert" 
                  />
                </div>

                {/* Direitos Reservados */}
                <div className="text-gray-500 text-sm font-medium">
                  © {new Date().getFullYear()} Uplay. | Todos os direitos reservados


                </div>
              </div>

              {/* Assinatura Inside Studio */}
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Desenvolvido por{' '}
                  <a 
                    href="https://insidestudio.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#B1F82A] transition-colors"
                  >
                    <img src={logoInside} alt="Inside Studio" className="inline-block h-6 ml-1" />
                  </a>
                </p>
              </div>
            </div>
          </footer>
        )}

        {/* Botão WhatsApp */}
        <button 
          onClick={() => window.open("https://wa.me/5541984082147?text=Oi!%20Vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20grátis.", "_blank")}
          className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8" alt="WhatsApp" />
        </button>

        <Toaster />
      </div>
    </>
  );
}

export default App;