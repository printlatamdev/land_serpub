import React from 'react';
import { Clock } from 'lucide-react';

interface HeroProps {
  language: string;
}

const translations = {
  en: {
    title: 'Official Mimaki Distributor',
    subtitle: 'in Nicaragua',
    description: 'Bringing cutting-edge printing technology and equipment to businesses across Nicaragua',
    comingSoon: 'Full Website Coming Soon',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  es: {
    title: 'Distribuidor Oficial de Mimaki',
    subtitle: 'en Nicaragua',
    description: 'Llevando tecnología y equipos de impresión de vanguardia a empresas en toda Nicaragua',
    comingSoon: 'Sitio Web Completo Próximamente',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos'
  }
};

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations];
  
  return (
    <section id="home\" className="relative pt-20 md:pt-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Clock className="inline-block w-4 h-4 mr-1" /> {t.comingSoon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-blue-700">
              {t.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-red-600 mb-6">
              {t.subtitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              {t.description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                {language === 'es' ? 'Contáctanos' : 'Contact Us'}
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1 border border-blue-200"
              >
                {language === 'es' ? 'Más Información' : 'Learn More'}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-200 rounded-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mimaki Printer" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 right-4 bg-white py-2 px-4 rounded-full shadow-md z-20 text-sm font-semibold text-blue-600">
                Mimaki Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;