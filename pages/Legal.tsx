
import React from 'react';

const LegalContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-12">{title}</h1>
    <div className="prose prose-lg prose-onyx max-w-none text-greyOlive space-y-6">
      {children}
    </div>
  </div>
);

export const Privacy: React.FC = () => (
  <LegalContainer title="Política de Privacidad">
    <p>De conformidad con lo dispuesto en el Reglamento General (UE) Sobre Protección de Datos, mediante la aceptación de la presente Política de Privacidad prestas tu consentimiento informado, expreso, libre e inequívoco para que los datos personales que proporciones a través de la página web sean incluidos en un fichero de datos.</p>
    <h2 className="text-2xl font-bold text-onyx mt-8">Responsable del Tratamiento</h2>
    <p>Nombre: Juaval Agencia Creativa<br/>Email: hola@juaval.com<br/>Finalidad: Gestión de consultas y solicitudes comerciales.</p>
  </LegalContainer>
);

export const Cookies: React.FC = () => (
  <LegalContainer title="Política de Cookies">
    <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico del sitio web. Al navegar por nuestra web aceptas el uso de las mismas.</p>
    <h2 className="text-2xl font-bold text-onyx mt-8">Tipos de cookies utilizadas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Cookies técnicas: Necesarias para el funcionamiento de la web.</li>
      <li>Cookies analíticas: Recopilan información estadística (Google Analytics).</li>
    </ul>
  </LegalContainer>
);

export const LegalNotice: React.FC = () => (
  <LegalContainer title="Aviso Legal">
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los siguientes datos identificativos del titular del sitio web.</p>
    <p>Titular: Juaval Agencia Creativa<br/>Domicilio: Castellón de la Plana, España.<br/>Contacto: hola@juaval.com</p>
  </LegalContainer>
);
