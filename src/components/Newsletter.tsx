import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface NewsletterProps {
  language: string;
}

const translations = {
  en: {
    title: 'Stay Updated',
    subtitle: 'Subscribe to our newsletter to get notified when our full website launches',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing!',
    privacy: 'We respect your privacy. Your information will not be shared.'
  },
  es: {
    title: 'Mantente Actualizado',
    subtitle: 'Suscríbete a nuestro boletín para ser notificado cuando lancemos nuestro sitio web completo',
    placeholder: 'Tu dirección de correo',
    button: 'Suscribirse',
    success: '¡Gracias por suscribirte!',
    privacy: 'Respetamos tu privacidad. Tu información no será compartida.'
  }
};

const Newsletter: React.FC<NewsletterProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[language as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{t.title}</h2>
              <p className="text-gray-600">{t.subtitle}</p>
            </div>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-lg font-medium text-gray-800">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t.button}
                </button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-4 text-center">{t.privacy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;