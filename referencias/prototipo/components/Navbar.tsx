import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className={`text-xl font-serif font-semibold tracking-wide ${isScrolled ? 'text-brand-green' : 'text-brand-green'}`}>
            Novos Caminhos
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('sobre')} className="text-gray-600 hover:text-brand-green transition-colors text-sm font-medium">O Que Somos</button>
          <button onClick={() => scrollToSection('quem-ajudamos')} className="text-gray-600 hover:text-brand-green transition-colors text-sm font-medium">Quem Ajudamos</button>
          <button onClick={() => scrollToSection('historias')} className="text-gray-600 hover:text-brand-green transition-colors text-sm font-medium">Histórias</button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 border-t">
          <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-600 font-medium">O Que Somos</button>
          <button onClick={() => scrollToSection('quem-ajudamos')} className="text-left text-gray-600 font-medium">Quem Ajudamos</button>
          <button onClick={() => scrollToSection('historias')} className="text-left text-gray-600 font-medium">Histórias</button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-brand-green text-white px-6 py-3 rounded-lg text-center font-medium"
          >
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;