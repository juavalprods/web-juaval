
import React, { useState, useEffect } from 'react';

interface SavedLead {
  id: number;
  date: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  instagram: string;
  message: string;
}

export const AdminLeads: React.FC = () => {
  const [leads, setLeads] = useState<SavedLead[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('juaval_leads') || '[]');
    setLeads(saved);
  }, []);

  const clearLeads = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todos los leads locales?')) {
      localStorage.removeItem('juaval_leads');
      setLeads([]);
    }
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-black mb-2">Panel de Leads (Mock)</h1>
          <p className="text-greyOlive">Aquí puedes ver los formularios que se han rellenado en este navegador.</p>
        </div>
        {leads.length > 0 && (
          <button 
            onClick={clearLeads}
            className="text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
          >
            Borrar historial local
          </button>
        )}
      </div>

      {leads.length === 0 ? (
        <div className="bg-white p-20 rounded-3xl text-center border-2 border-dashed border-onyx/10">
          <div className="text-6xl mb-6">🏜️</div>
          <h2 className="text-2xl font-bold mb-2">No hay leads todavía</h2>
          <p className="text-greyOlive">Rellena el formulario de contacto para ver cómo aparecen aquí.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {leads.map((lead) => (
            <div key={lead.id} className="bg-white p-8 rounded-3xl shadow-sm border border-onyx/5 hover:border-coolSky transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 border-b border-onyx/5 pb-4">
                <div>
                  <span className="text-xs font-bold text-coolSky uppercase tracking-widest block mb-1">Candidato</span>
                  <h3 className="text-2xl font-bold">{lead.name}</h3>
                  <p className="text-greyOlive font-medium">{lead.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-greyOlive uppercase tracking-widest block mb-1">Fecha de recepción</span>
                  <p className="text-sm font-mono bg-parchment px-3 py-1 rounded-full">{lead.date}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-greyOlive uppercase mb-2">Contacto</h4>
                  <p className="font-semibold">{lead.email}</p>
                  <p className="font-semibold">{lead.phone}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-greyOlive uppercase mb-2">Canal Digital</h4>
                  <p className="font-semibold text-coolSky">{lead.instagram || 'No especificado'}</p>
                </div>
                <div className="md:col-span-1">
                  <h4 className="text-xs font-bold text-greyOlive uppercase mb-2">Estado Notion</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                    Simulado
                  </span>
                </div>
              </div>

              <div className="bg-parchment p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-greyOlive uppercase mb-3">Mensaje del cliente</h4>
                <p className="text-onyx leading-relaxed italic">"{lead.message}"</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 p-8 bg-onyx text-white rounded-3xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-schoolBusYellow">ℹ️</span> Nota Técnica
        </h3>
        <p className="text-greyOlive leading-relaxed">
          Esta página es una herramienta de pre-visualización para el desarrollo. En la versión final conectada a <strong>Notion</strong>, esta información se enviará directamente a tu workspace privado y no será necesario este panel local.
        </p>
      </div>
    </div>
  );
};
