import React from 'react';
import { cn } from "@/lib/utils";
import { MapPin, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

import cc3 from '../assets/cc (3).jpeg';
import cc4 from '../assets/cc (4).jpeg';
import cc5 from '../assets/cc (5).jpeg';
import cc6 from '../assets/cc (6).jpeg';
import cc7 from '../assets/cc (7).jpeg';
import cc8 from '../assets/cc (8).jpeg';
import cc9 from '../assets/cc (9).jpeg';

const BentoGrid = ({ onStart }) => {
    const scrollToPlans = () => {
        const element = document.getElementById('planos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const Card = ({ className, children }) => (
        <div className={cn("relative group rounded-[3.5rem] p-10 flex flex-col overflow-hidden", className)}>
            {children}
        </div>
    );

    return (
        <section className="bg-[#0C0C0C] py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[850px]">
                    
                    {/* Card Principal: CONHEÇA A UPLAY POR DENTRO */}
                    <Card className="md:col-span-2 md:row-span-2 bg-gray-900 border border-white/5">
                        <div className="mb-8">
                            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6 uppercase italic">
                                São 3 andares <br/> pensados para você
                            </h3>
                            <p className="text-gray-400 font-bold italic text-lg max-w-xl">
                               10+ setores específicos. Estrutura completa pensada pra você ter resultado. Vem conhecer pessoalmente.
                            </p>
                        </div>
                        
                        {/* Grid de Fotos com animação de aproximação ao passar o mouse */}
                        <div className="flex-grow grid grid-cols-3 grid-rows-2 gap-3 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer">
                            {[
                                cc3,
                                cc4,
                                cc5,
                                cc9,
                                cc7,
                                cc8
                            ].map((url, i) => (
                                <div key={i} className="overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 ease-out" 
                                        src={`${url}?q=80&w=500`} 
                                        alt={`Setor ${i + 1}`} 
                                    />
                                </div>
                            ))}
                        </div>

                        <Button 
                            onClick={() => onStart()}
                            className="mt-8 w-full py-10 bg-white text-black font-black text-2xl uppercase tracking-tighter rounded-3xl hover:bg-brand-gold transition-all duration-300"
                        >
                            AGENDAR MINHA VISITA
                        </Button>
                    </Card>

                    {/* Card de Investimento: R$ 7,90 POR DIA */}
                    <Card className="bg-white/5 border border-white/10 justify-center text-center">
                        <div className="space-y-6">
                            <h3 className="text-5xl md:text-6xl font-black text-white leading-[0.85] tracking-tighter italic">
                                R$ 7,90 <br/> <span className="text-brand-gold">POR DIA.</span>
                            </h3>
                            <div className="space-y-2">
                                <p className="text-white font-black italic text-2xl">Menos que um café.</p>
                                <p className="text-gray-400 font-bold text-sm uppercase tracking-tighter">Mais que dobrar suas chances de não desistir.</p>
                            </div>
                            <Button 
                                onClick={scrollToPlans}
                                className="w-full py-8 bg-brand-gold text-black font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 transition-all"
                            >
                                VER PLANOS COMPLETOS
                            </Button>
                        </div>
                    </Card>

                    {/* Card Diferencial: Estacionamento e Localização */}
                    <Card className="bg-brand-gold text-black justify-center text-center group">
                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-center gap-4">
                                <div className="bg-black text-brand-gold p-4 rounded-2xl shadow-xl"><Car size={32} /></div>
                                <div className="bg-black text-brand-gold p-4 rounded-2xl shadow-xl"><MapPin size={32} /></div>
                            </div>
                            <h3 className="text-3xl md:text-3xl font-black italic tracking-tighter leading-[0.9] uppercase">
                                ESTACIONAMENTO <br/> EXCLUSIVO E SEGURO.
                            </h3>
                            <div className="bg-black/5 py-2 px-4 rounded-full inline-block">
                                <p className="text-xs font-black uppercase tracking-[0.2em]">Rua Renato Polatti, 2541</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;