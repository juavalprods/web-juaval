
import React, { useState } from 'react';
import { FormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    instagram: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          instagram: '',
          message: ''
        });
      } else {
        console.error('Error submitting form:', data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center flex flex-col items-center gap-4 border border-onyx/5">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
          🚀
        </div>
        <h3 className="text-2xl font-bold text-onyx">¡Mensaje enviado!</h3>
        <p className="text-greyOlive">
          ¡Gracias por escribirnos! Muy pronto nos pondremos en contacto contigo para empezar a mejorar tus redes sociales.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-onyx underline font-bold hover:text-coolSky transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-onyx/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">Nombre</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">Empresa</label>
          <input
            required
            name="company"
            value={formData.company}
            onChange={handleChange}
            type="text"
            className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
            placeholder="Nombre de tu negocio"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">Teléfono</label>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
            placeholder="+34 600 000 000"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">Email</label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
            placeholder="hola@ejemplo.com"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">Instagram / Web</label>
        <input
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          type="text"
          className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
          placeholder="@tuperfil o www.tuweb.com"
        />
      </div>
      <div className="mb-8">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-greyOlive">¿Cómo podemos ayudarte?</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-parchment border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-coolSky transition-all outline-none"
          placeholder="Cuéntanos un poco sobre tus objetivos..."
        />
      </div>
      <button
        disabled={status === 'loading'}
        type="submit"
        className={`w-full py-4 rounded-full font-bold text-lg transition-all ${status === 'loading' ? 'bg-greyOlive cursor-not-allowed' : 'bg-onyx text-white hover:bg-coolSky hover:text-onyx shadow-xl active:scale-95'}`}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
};
