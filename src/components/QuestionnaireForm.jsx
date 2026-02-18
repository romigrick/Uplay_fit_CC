import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronUp, ChevronDown, Users, Target, Clock, User } from 'lucide-react';

const objectives = [
    { id: 'emagrecer', label: 'Emagrecer', icon: <Target className="w-5 h-5" /> },
    { id: 'massa', label: 'Ganhar Massa', icon: <Users className="w-5 h-5" /> },
    { id: 'saude', label: 'Saúde e Bem-estar', icon: <Check className="w-5 h-5" /> },
];

const QuestionnaireForm = ({ onComplete }) => {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        objetivo: '',
        frequencia: '3',
        periodo: 'Manhã',
    });

   const handleNext = () => {
        if (step === 1 && !formData.nome) {
            toast({ variant: "destructive", title: "Por favor, digite seu nome." });
            return;
        }
        if (step === 2 && !formData.objetivo) {
            toast({ variant: "destructive", title: "Selecione um objetivo." });
            return;
        }
        if (step === 4) {
            const msg = `Oi! Meu nome é ${formData.nome} e quero agendar minha aula grátis. Meu objetivo é ${formData.objetivo}, pretendo treinar ${formData.frequencia}x na semana no período da ${formData.periodo}.`;
            window.open(`https://wa.me/5541984082147?text=${encodeURIComponent(msg)}`, "_blank");
            
            // CORREÇÃO AQUI: Passando o formData para o onComplete
            onComplete(formData);
            return;
        }
        setStep(prev => prev + 1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#0C0C0C]">
            <div className="w-full max-w-xl bg-gray-900/50 border border-gray-800 rounded-[3rem] p-10 text-center">
                <AnimatePresence mode="wait">
                    {/* NOVO PASSO 1: Captura do Nome */}
                    {step === 1 && (
                        <motion.div key="s0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Para começar, <br/><span className="text-[#B1F82A]">qual seu nome?</span></h2>
                            <div className="text-left mb-8">
                                <Label htmlFor="nome" className="text-gray-400 mb-2 block uppercase text-xs font-bold tracking-widest">Seu nome completo</Label>
                                <Input 
                                    id="nome"
                                    value={formData.nome}
                                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                                    placeholder="Ex: João Silva"
                                    className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-[#B1F82A] transition-all"
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Qual seu <span className="text-[#B1F82A]">Objetivo?</span></h2>
                            <div className="grid gap-4 mb-8">
                                {objectives.map((obj) => (
                                    <button
                                        key={obj.id}
                                        onClick={() => setFormData({...formData, objetivo: obj.label})}
                                        className={`p-6 rounded-2xl flex items-center justify-between border-2 transition-all ${formData.objetivo === obj.label ? 'border-[#B1F82A] bg-[#B1F82A]/10 text-white' : 'border-white/10 text-gray-400'}`}
                                    >
                                        <span className="font-bold uppercase tracking-widest">{obj.label}</span>
                                        {obj.icon}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Quantas vezes <span className="text-[#B1F82A]">na semana?</span></h2>
                            <div className="flex items-center justify-center gap-8 mb-10">
                                <input type="number" readOnly value={formData.frequencia} className="bg-transparent text-8xl font-black text-[#B1F82A] w-32 text-center" />
                                <div className="flex flex-col gap-2">
                                    <button onClick={() => setFormData({...formData, frequencia: String(Math.min(7, Number(formData.frequencia)+1))})} className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"><ChevronUp /></button>
                                    <button onClick={() => setFormData({...formData, frequencia: String(Math.max(1, Number(formData.frequencia)-1))})} className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"><ChevronDown /></button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="bg-[#B1F82A]/10 text-[#B1F82A] p-4 rounded-2xl mb-6 inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                                <Clock size={16} /> Quase pronto, {formData.nome.split(' ')[0]}!
                            </div>
                            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">VAGAS DISPONÍVEIS!</h2>
                            <p className="text-gray-400 mb-10 font-medium italic text-lg">Clique abaixo para confirmar seu agendamento e garantir o acompanhamento do professor.</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex gap-4">
                    {step > 1 && (
                        <Button 
                            onClick={() => setStep(step-1)} 
                            className="flex-1 py-7 rounded-2xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                            VOLTAR
                        </Button>
                    )}
                    <Button 
                        onClick={handleNext} 
                        className="flex-[2] py-7 rounded-2xl bg-[#B1F82A] text-black font-black text-xl hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(177,248,42,0.2)]"
                    >
                        {step === 4 ? 'CONFIRMAR AGENDAMENTO' : 'PRÓXIMO'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuestionnaireForm;