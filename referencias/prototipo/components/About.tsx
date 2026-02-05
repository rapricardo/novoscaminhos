import React from 'react';
import { BeeIcon } from './BeeIcon';
import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-brand-sand relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="flex justify-center mb-8">
            <div className="p-4 bg-white rounded-full shadow-sm">
                <BeeIcon className="w-12 h-12 text-brand-green" />
            </div>
        </div>

        <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-8">
          A ponte entre a <span className="text-brand-green">Ciência</span> e a <span className="text-brand-green">Natureza</span>
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-20 font-light">
          A Associação Novos Caminhos nasceu do desejo de oferecer alternativas seguras e humanizadas para tratamentos de saúde. 
          Acreditamos que o equilíbrio vital pode ser restaurado através de terapias integrativas, sempre com respaldo médico e suporte jurídico contínuo. 
          Não somos apenas uma associação; somos uma rede de apoio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700">
                    <Leaf size={24} />
                </div>
                <h3 className="font-medium text-gray-900 text-lg">Terapia Natural</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Fitoativos selecionados para maximizar o potencial de recuperação do seu corpo.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-700">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="font-medium text-gray-900 text-lg">Segurança Jurídica</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Amparo total baseado na legislação vigente (RDC 660) e Habeas Corpus.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-700">
                    <HeartHandshake size={24} />
                </div>
                <h3 className="font-medium text-gray-900 text-lg">Acolhimento Humano</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Escuta ativa e acompanhamento individualizado em cada etapa.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;