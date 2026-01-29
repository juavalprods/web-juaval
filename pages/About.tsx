
import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-coolSky font-bold uppercase tracking-widest mb-4 block">Sobre Nosotros</span>
          <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Somos Juaval.</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-onyx leading-snug font-medium mb-12">
              Nacimos en Castellón con una misión clara: profesionalizar la comunicación digital de las PYMEs locales mediante estrategia, creatividad y tecnología.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="aspect-square rounded-[4rem] overflow-hidden rotate-3 shadow-2xl">
              <img src="https://picsum.photos/seed/about-1/1000/1000" alt="Juaval Team" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Nuestra Filosofía</h2>
              <div className="space-y-8 text-xl text-greyOlive leading-relaxed">
                <p>
                  Creemos que las redes sociales son la puerta de entrada principal para cualquier negocio hoy en día. Sin embargo, la mayoría de empresas pierden dinero intentando hacerlo de forma intuitiva.
                </p>
                <p>
                  En Juaval combinamos la cercanía del trato local en Castellón con los estándares de producción de una agencia internacional. Nos importa tu ROI tanto como a ti.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-onyx font-black text-5xl mb-2">100%</div>
                    <div className="text-sm font-bold uppercase tracking-widest">Compromiso Local</div>
                  </div>
                  <div>
                    <div className="text-onyx font-black text-5xl mb-2">ROI</div>
                    <div className="text-sm font-bold uppercase tracking-widest">Enfoque a Negocio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-onyx text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">¿Por qué Castellón?</h2>
          <p className="text-xl text-greyOlive max-w-3xl mx-auto leading-relaxed mb-16">
            Conocemos el tejido empresarial de nuestra tierra. Sabemos qué busca el consumidor local y cómo conectar a las PYMEs de Castellón, Almazora, Vila-real y Burriana con sus audiencias.
          </p>
          <Link to="/contacto" className="bg-coolSky text-onyx px-12 py-5 rounded-full font-bold text-xl hover:bg-schoolBusYellow transition-all inline-block">
            Únete a la Revolución Digital
          </Link>
        </div>
      </section>
    </div>
  );
};
