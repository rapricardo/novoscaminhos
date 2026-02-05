import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-green text-white pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CTA Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 border-b border-white/10 pb-12 gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-serif mb-4">Pronto para dar o primeiro passo?</h2>
                <p className="text-white/80 max-w-md">
                    Nossa equipe de acolhimento está aguardando sua mensagem para tirar todas as dúvidas.
                </p>
            </div>
            <a 
              href="https://wa.me/5511999999999" 
              className="bg-brand-gold text-brand-green font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white transition-colors"
            >
                Falar no WhatsApp
                <ArrowUpRight size={20} />
            </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-sm">
            <div>
                <h4 className="font-serif text-lg mb-4 text-brand-gold">Associação Novos Caminhos</h4>
                <p className="text-white/70 leading-relaxed">
                    Uma entidade sem fins lucrativos dedicada à promoção da saúde e qualidade de vida através de terapias naturais e integrativas.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-4 text-brand-gold">Contato</h4>
                <p className="text-white/70">contato@novoscaminhos.org.br</p>
                <p className="text-white/70">(11) 99999-9999</p>
                <p className="text-white/70">São Paulo, SP</p>
            </div>
            <div>
                <h4 className="font-semibold mb-4 text-brand-gold">Transparência</h4>
                <ul className="space-y-2 text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">Estatuto Social</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Relatório de Atividades</a></li>
                </ul>
            </div>
        </div>

        {/* Disclaimer Legal */}
        <div className="border-t border-white/10 pt-8 text-xs text-white/40 text-justify leading-relaxed space-y-2">
            <p>
                <strong>Aviso Legal (Disclaimer):</strong> A Associação Novos Caminhos não comercializa produtos. Atuamos estritamente dentro das normas da Agência Nacional de Vigilância Sanitária (ANVISA), conforme a RDC 660/2022, que regulamenta a importação de produtos derivados de Cannabis para fins medicinais mediante prescrição de profissional habilitado.
            </p>
            <p>
                Todo o conteúdo deste site tem caráter informativo e educativo, não substituindo o aconselhamento médico profissional. O uso de fitoativos deve ser sempre acompanhado por um médico. Não incentivamos o uso recreativo ou automedicação.
            </p>
            <div className="text-center mt-8">
                &copy; {new Date().getFullYear()} Associação Novos Caminhos. Todos os direitos reservados.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;