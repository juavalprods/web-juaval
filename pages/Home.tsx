
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES_DATA, FAQS_DATA } from '../constants';
import { FAQItem } from '../components/FAQItem';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Redes sociales que <span className="text-coolSky">generan resultados</span> para tu negocio.
            </h1>
            <p className="text-xl md:text-2xl text-greyOlive mb-12 leading-relaxed max-w-2xl">
              Juaval es la agencia creativa de Castellón que no vende likes, sino estrategia real para PYMEs que quieren resultados en redes sociales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-schoolBusYellow text-onyx px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all text-center"
              >
                Hablar por WhatsApp
              </a>
              <Link 
                to="/servicios"
                className="bg-onyx text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-onyx border-2 border-transparent hover:border-onyx transition-all text-center"
              >
                Ver Método Juaval
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract shapes for design */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-coolSky/10 blur-[120px] rounded-full hidden lg:block"></div>
      </section>

      {/* Diferenciación / Proposito */}
      <section className="py-24 bg-onyx text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-schoolBusYellow font-bold tracking-[0.2em] text-sm uppercase mb-4 block">El Enfoque Juaval</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                No hacemos fotos bonitas. Hacemos contenido estratégico.
              </h2>
              <p className="text-xl text-greyOlive mb-8 leading-relaxed">
                En un mundo saturado de contenido, la estética sin estrategia es ruido. En Juaval nos enfocamos en que cada vídeo, cada diseño y cada palabra estén alineados con tus objetivos de facturación.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/5 p-4 rounded-xl flex-1 border border-white/10">
                  <div className="text-coolSky font-bold text-3xl mb-2">+100%</div>
                  <div className="text-sm text-greyOlive">Mejora de engagement estratégico</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex-1 border border-white/10">
                  <div className="text-schoolBusYellow font-bold text-3xl mb-2">Focus</div>
                  <div className="text-sm text-greyOlive">Especializados en PYMEs locales</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/juaval-1/800/800" 
                alt="Agencia creativa Castellón" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-coolSky rounded-2xl -z-10 rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Hacemos */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Cómo impulsamos tu marca?</h2>
          <p className="text-xl text-greyOlive max-w-2xl mx-auto">
            Un proceso de 360º diseñado para que tú te desentiendas mientras nosotros hacemos crecer tu presencia digital.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl border border-ony/5 shadow-sm hover:shadow-xl transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-greyOlive leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Placeholder */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-2">Casos de Éxito</h2>
            <p className="text-greyOlive">Empresas de Castellón que ya están ganando en redes.</p>
          </div>
          <Link to="/servicios" className="text-onyx font-bold border-b-2 border-onyx hover:text-coolSky hover:border-coolSky transition-all">Ver todos los trabajos</Link>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 no-scrollbar">
          {[1,2,3,4].map((item) => (
            <div key={item} className="min-w-[300px] md:min-w-[450px] aspect-video relative group overflow-hidden rounded-3xl">
              <img 
                src={`https://picsum.photos/seed/case-${item}/900/500`} 
                alt="Proyecto Juaval" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold">Cliente Ejemplo {item}</h4>
                <p className="text-greyOlive">+45% leads generados</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">Resolvemos tus dudas</h2>
          <div className="space-y-2">
            {FAQS_DATA.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-schoolBusYellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">¿Empezamos a escalar <br/> tus redes sociales?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-onyx text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              Hablemos por WhatsApp
            </a>
            <Link 
              to="/contacto"
              className="bg-white text-onyx px-12 py-6 rounded-full font-bold text-xl border-2 border-onyx hover:bg-onyx hover:text-white transition-all shadow-xl"
            >
              Enviar Formulario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
