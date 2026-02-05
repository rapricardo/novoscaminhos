import React from 'react';
import { UserPlus, Stethoscope, FileCheck, Heart } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Cadastro Simples",
      desc: "Entre em contato conosco pelo WhatsApp para iniciar seu acolhimento."
    },
    {
      icon: Stethoscope,
      title: "2. Consulta Médica",
      desc: "Agendamos uma consulta com médicos prescritores especialistas em terapia integrativa."
    },
    {
      icon: FileCheck,
      title: "3. Autorização Legal",
      desc: "Nossa equipe jurídica cuida de toda a documentação necessária (Anvisa/Salvo Conduto)."
    },
    {
      icon: Heart,
      title: "4. Início do Tratamento",
      desc: "Você recebe o acolhimento contínuo e monitoramento da sua evolução."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">Como Funciona a Jornada</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Simplificamos a burocracia para que você foque apenas na sua recuperação.</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-green/30 transition-colors duration-300">
                            <step.icon className="text-brand-green w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed px-4">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;