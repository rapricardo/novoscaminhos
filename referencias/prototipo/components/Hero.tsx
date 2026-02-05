import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-8 z-10 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
              Acolhimento e Ciência
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight">
              Novos Caminhos para Quem Busca <span className="italic text-brand-green">Qualidade de Vida</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Uma abordagem terapêutica natural, legalizada e focada em devolver o seu bem-estar. Unimos medicina integrativa e acolhimento humano.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511999999999" // Placeholder WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-opacity-90 hover:shadow-lg"
            >
              Quero Iniciar Minha Jornada
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center px-8 py-4 rounded-full text-brand-green border border-brand-green/30 hover:bg-brand-green/5 transition-colors font-medium"
            >
              Conhecer a Associação
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img 
                      src={`https://picsum.photos/seed/face${i}/100/100`} 
                      alt="Membro da comunidade" 
                      className="w-full h-full object-cover opacity-80"
                    />
                 </div>
               ))}
            </div>
            <p>Mais de 2.000 famílias acolhidas.</p>
          </div>
        </div>

        {/* Image - Golden Hour Vibe */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[700px] w-full">
            <div className="absolute inset-0 bg-brand-sage/20 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://picsum.photos/seed/goldenhour/800/1000" 
                  alt="Paciente sorrindo com luz natural suave, transmitindo paz" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur shadow-lg p-4 rounded-xl max-w-xs border-l-4 border-brand-gold">
                <p className="font-serif italic text-gray-800">"Redescobri a alegria nas pequenas coisas."</p>
                <p className="text-xs text-gray-500 mt-2 font-semibold">— Maria L., Paciente</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;