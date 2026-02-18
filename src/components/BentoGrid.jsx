import React from 'react';
import { cn } from "@/lib/utils";
import { MapPin, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BentoGrid = ({onStart}) => {
    const Card = ({ className, children }) => (
        <div className={cn("relative group rounded-[2.5rem] p-8 flex flex-col overflow-hidden", className)}>
            {children}
        </div>
    );

    return (
        <section className="bg-[#0C0C0C] py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
                    {/* Card Comunidade */}
                    <Card className="md:col-span-2 md:row-span-2 bg-gray-900 border border-white/5 justify-between">
                        <div>
                            <p className="text-xs font-black text-[#B1F82A] uppercase tracking-[0.3em] mb-4">Nossa Comunidade</p>
                            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">MUITO MAIS QUE <br />UM TREINO.</h3>
                        </div>
                        <div className="flex-grow mt-4 relative">
                            <img
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Alunos Uplay"
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975"
                            />
                        </div>
                    </Card>

                    {/* Card Estacionamento */}
                    <Card className="bg-gradient-to-br from-[#1E04FB] to-black text-white justify-end group">
                        <div className="relative z-10">
                            <div className="mb-4 bg-white/10 w-fit p-3 rounded-2xl group-hover:bg-[#B1F82A] group-hover:text-black transition-all duration-500">
                                <Car size={24} />
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Diferencial</p>
                            <h3 className="text-3xl font-black mt-2 italic tracking-tighter leading-tight">ESTACIONAMENTO <br />GRÁTIS E SEGURO.</h3>
                        </div>
                    </Card>

                    {/* Card Localização */}
                    <Card className="bg-[#B1F82A] text-black justify-end group">
                        <div className="relative z-10">
                            <div className="mb-4 bg-black/10 w-fit p-3 rounded-2xl group-hover:bg-black group-hover:text-[#B1F82A] transition-all duration-500">
                                <MapPin size={24} />
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest opacity-70">Localização</p>
                            <h3 className="text-3xl font-black mt-2 italic tracking-tighter leading-tight uppercase">RUA RENATO <br />POLATTI, 2541.</h3>
                        </div>
                    </Card>
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


        </section>
    );
};

export default BentoGrid;