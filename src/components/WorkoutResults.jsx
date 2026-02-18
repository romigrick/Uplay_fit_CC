import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Zap, MessageCircle, MapPin } from 'lucide-react';

const WorkoutResults = ({ formData, onReset }) => {
  // Variantes de animação
  const resultsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // Puxa o nome do formData. Certifique-se que no QuestionnaireForm o campo se chama 'nome'
  const nomeUsuario = formData?.nome ? formData.nome.split(' ')[0].toUpperCase() : 'CAMPEÃO';

  const handleWhatsAppFinal = () => {
    const msg = `Oi! Sou o ${formData?.nome || 'aluno'} e acabei de finalizar meu agendamento pelo site. Meu objetivo é ${formData?.objetivo || 'treinar na Uplay'}. Aguardo o retorno para minha aula grátis!`;
    window.open(`https://wa.me/5541984082147?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <motion.div
      variants={resultsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0C0C0C]"
    >
      <div className="w-full max-w-4xl bg-gray-900/50 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
        
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B1F82A]/10 rounded-full blur-[100px]"></div>

        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B1F82A] rounded-full mb-6 shadow-[0_0_40px_rgba(177,248,42,0.3)]">
                <CheckCircle size={40} className="text-black" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-none">
                TUDO PRONTO, <br />
                <span className="text-[#B1F82A]">{nomeUsuario}!</span>
            </h2>
            <p className="mt-6 text-gray-400 font-medium text-lg italic max-w-lg mx-auto">
                Sua aula experimental gratuita na Uplay Campo Comprido foi pré-agendada.
            </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-center">
            <h3 className="text-xl font-black text-[#B1F82A] mb-6 flex items-center gap-2 uppercase italic tracking-tighter">
              <Users size={20} /> Seu Perfil
            </h3>
            <ul className="space-y-4 font-bold text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50 uppercase text-[10px] tracking-widest">Objetivo:</span>
                <span className="text-sm uppercase">{formData?.objetivo || 'Não informado'}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50 uppercase text-[10px] tracking-widest">Frequência:</span>
                <span className="text-sm uppercase">{formData?.frequencia || '3'}x na semana</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#B1F82A] p-8 rounded-[2.5rem] text-black">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic tracking-tighter text-black">
              <Zap size={20} /> Próximos Passos
            </h3>
            <ul className="space-y-4 font-black uppercase text-[11px] italic leading-tight">
              <li className="flex items-start gap-3">
                <div className="bg-black text-[#B1F82A] w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 text-[10px]">1</div>
                Confirmaremos seu horário via WhatsApp.
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-black text-[#B1F82A] w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 text-[10px]">2</div>
                Te esperamos na Rua Renato Polatti, 2541.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <Button
            onClick={handleWhatsAppFinal}
            className="w-full md:w-auto px-12 py-10 text-2xl font-black rounded-3xl bg-[#B1F82A] text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(177,248,42,0.2)] uppercase italic tracking-tighter"
          >
            <MessageCircle className="mr-3 fill-black" /> Chamar no WhatsApp Agora
          </Button>
          
          <button
            onClick={onReset}
            className="text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em] underline underline-offset-8"
          >
            Voltar para o início
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkoutResults;