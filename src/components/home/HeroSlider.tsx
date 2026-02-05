import { useState, useEffect } from 'react';

const slides = [
  {
    src: '/images/slide-01-oleo-foco.webp',
    alt: 'Close no frasco de óleo com gota dourada - foco no produto'
  },
  {
    src: '/images/slide-02-idoso-alivio.webp',
    alt: 'Idoso pingando óleo na boca - alívio e esperança'
  },
  {
    src: '/images/slide-03-adulto-equilibrio.webp',
    alt: 'Mulher adulta com frasco ao entardecer - equilíbrio'
  },
  {
    src: '/images/slide-04-mae-atipica.webp',
    alt: 'Mãe administrando óleo para filho - cuidado maternal'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] lg:h-[600px] w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-sage/20 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
      
      {/* Slider container */}
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
