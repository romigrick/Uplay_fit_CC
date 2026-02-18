import React from 'react';
import { Dumbbell, Flame, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';


const workoutCategories = [
  {
    title: 'Musculação Real',
    description: 'Nada de ficar perdido. Professor ao seu lado corrigindo cada movimento e ajustando sua carga.',
    icon: <Dumbbell className="h-10 w-10 text-[#B1F82A]" />,
    intensity: [{ label: 'Força', value: 95 }, { label: 'Técnica', value: 100 }, { label: 'Apoio', value: 100 }]
  },
  {
    title: 'Aulas Coletivas',
    description: 'Motivação extra e energia do grupo incluídas no seu plano. Dance, lute ou treine em equipe.',
    icon: <Users className="h-10 w-10 text-[#B1F82A]" />,
    intensity: [{ label: 'Cardio', value: 90 }, { label: 'Energia', value: 100 }, { label: 'Social', value: 85 }]
  },
  {
    title: 'Queima Máxima',
    description: 'Métodos focados em aceleração metabólica para resultados que você vê rápido no espelho.',
    icon: <Flame className="h-10 w-10 text-[#B1F82A]" />,
    intensity: [{ label: 'Suor', value: 100 }, { label: 'Queima', value: 95 }, { label: 'Foco', value: 80 }]
  },
];

const IntensityBar = ({ label, value }) => (
  <div className="w-full text-left">
    <div className="flex justify-between mb-1"><span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span></div>
    <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-[#B1F82A] h-1.5 rounded-full" style={{ width: `${value}%` }}></div></div>
  </div>
);

const WorkoutTypes = () => (
  <section className="bg-[#0C0C0C] py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">EXPLORE NOSSOS <span className="text-[#B1F82A]">MÉTODOS</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workoutCategories.map((category, index) => (
          <div key={index} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col hover:border-[#B1F82A]/30 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{category.icon}</div>
            <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{category.title}</h3>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">{category.description}</p>
            <div className="mt-auto space-y-4">{category.intensity.map((item) => <IntensityBar key={item.label} {...item} />)}</div>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default WorkoutTypes;