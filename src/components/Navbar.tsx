import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  page?: 'home' | 'lp1' | 'lp2' | 'lp3';
}

interface NavLink {
  label: string;
  href: string;
}

interface NavConfig {
  links: NavLink[];
  ctaText: string;
  ctaHref: string;
  ctaStyle: string;
}

const navConfigs: Record<string, NavConfig> = {
  home: {
    links: [
      { label: 'Jornada Terapêutica', href: '/jornada-terapeutica' },
      { label: 'Medicina Integrativa', href: '/medicina-integrativa' },
      { label: 'Comunidade', href: '/comunidade' },
    ],
    ctaText: 'Fale Conosco',
    ctaHref: 'https://wa.me/554891203870',
    ctaStyle: 'bg-brand-green text-white',
  },
  lp1: {
    links: [
      { label: 'A Associação', href: '#sobre' },
      { label: 'Histórias Reais', href: '#historias' },
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Fale Conosco', href: '#contato' },
    ],
    ctaText: 'Área do Associado',
    ctaHref: '#',
    ctaStyle: 'border border-brand-green text-brand-green hover:bg-brand-green/5',
  },
  lp2: {
    links: [
      { label: 'A Ciência', href: '#ciencia' },
      { label: 'Corpo Clínico', href: '#especialistas' },
      { label: 'Regulamentação', href: '#seguranca' },
      { label: 'Perguntas', href: '#faq' },
    ],
    ctaText: 'Agendar Triagem',
    ctaHref: 'https://wa.me/554891203870',
    ctaStyle: 'bg-[#006581] text-white',
  },
  lp3: {
    links: [
      { label: 'O Movimento', href: '#manifesto' },
      { label: 'Nossas Histórias', href: '#historias' },
      { label: 'Benefícios', href: '#beneficios' },
      { label: 'Eventos', href: '#eventos' },
    ],
    ctaText: 'Quero me Associar',
    ctaHref: 'https://wa.me/554891203870',
    ctaStyle: 'bg-[#EC8323] text-white',
  },
};

const Navbar = ({ page = 'home' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const config = navConfigs[page];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const logoSrc = '/images/logo-novos-caminhos.webp';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img 
            src={logoSrc} 
            alt="Associação Novos Caminhos" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {config.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-gray-600 hover:text-brand-green transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={config.ctaHref}
            target={config.ctaHref.startsWith('http') ? '_blank' : undefined}
            rel={config.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg ${config.ctaStyle}`}
          >
            {config.ctaText}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 border-t">
          {config.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-left text-gray-600 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={config.ctaHref}
            target={config.ctaHref.startsWith('http') ? '_blank' : undefined}
            rel={config.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`px-6 py-3 rounded-lg text-center font-medium ${config.ctaStyle}`}
          >
            {config.ctaText}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
