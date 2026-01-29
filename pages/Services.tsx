
import React from 'react';
import { CONTACT_INFO, SERVICES_DATA } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="pt-24 pb-16 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none">Nuestro <span className="text-coolSky">Método</span></h1>
          <p className="text-2xl text-greyOlive max-w-3xl leading-relaxed">
            Hemos depurado un sistema que garantiza que tu inversión en redes sociales se convierta en visibilidad real y captación de clientes.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                <div className="flex-1">
                  <div className="text-7xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl text-greyOlive leading-relaxed mb-8">
                    {service.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                  <ul className="space-y-4 text-onyx font-semibold">
                    <li className="flex items-center gap-2"><span className="text-coolSky text-xl">✓</span> Enfoque basado en datos</li>
                    <li className="flex items-center gap-2"><span className="text-coolSky text-xl">✓</span> Producción local en Castellón</li>
                    <li className="flex items-center gap-2"><span className="text-coolSky text-xl">✓</span> Optimización constante</li>
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/service-${index}/800/1000`} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-onyx text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">¿Listo para aplicar este método a tu negocio?</h2>
          <a 
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-schoolBusYellow text-onyx px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Auditar mis Redes Sociales
          </a>
        </div>
      </section>
    </div>
  );
};
