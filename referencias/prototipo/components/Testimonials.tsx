import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Roberto Almeida",
    condition: "Dor Crônica",
    quote: "Eu achava que viver com dor era minha nova realidade. A associação não me deu apenas o tratamento, me deu esperança. Hoje consigo brincar com meus netos no parque.",
    image: "https://picsum.photos/seed/grandfather/200/200"
  },
  {
    id: 2,
    name: "Carla Mendes",
    condition: "Ansiedade",
    quote: "Voltei a dormir uma noite inteira depois de 5 anos. O acolhimento que recebi desde a primeira mensagem no WhatsApp fez toda a diferença. Me senti segura.",
    image: "https://picsum.photos/seed/womancalm/200/200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="historias" className="py-32 bg-brand-sand">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-serif text-gray-900 mb-16">Histórias de Transformação</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-8 right-8 text-brand-green/20 w-10 h-10" />
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-brand-green font-medium">{t.condition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;