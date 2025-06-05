import React, { useEffect, useState } from 'react';
import { HardHat, AlertTriangle } from 'lucide-react';

interface ConstructionOverlayProps {
  language: string;
}

const translations = {
  en: {
    title: 'Website Under Construction',
    description: 'Our full website is coming soon with complete product listings and online support.',
    launch: 'Estimated Launch:',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  es: {
    title: 'Sitio Web En Construcción',
    description: 'Nuestro sitio web completo estará disponible pronto con listados de productos y soporte en línea.',
    launch: 'Lanzamiento Estimado:',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos'
  }
};

const ConstructionOverlay: React.FC<ConstructionOverlayProps> = ({ language }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const t = translations[language as keyof typeof translations];
  
  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
      
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-50 border-t-4 border-yellow-400 p-4 shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-yellow-400 p-2 rounded-full mr-4">
              <HardHat className="w-6 h-6 text-yellow-800" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-800">{t.title}</h3>
              <p className="text-sm text-yellow-700">{t.description}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-yellow-700 mb-2">{t.launch}</p>
            <div className="flex space-x-3">
              <div className="bg-white p-2 rounded-lg text-center w-16 shadow-sm">
                <div className="text-xl font-bold text-yellow-800">{countdown.days}</div>
                <div className="text-xs text-yellow-600">{t.days}</div>
              </div>
              <div className="bg-white p-2 rounded-lg text-center w-16 shadow-sm">
                <div className="text-xl font-bold text-yellow-800">{countdown.hours}</div>
                <div className="text-xs text-yellow-600">{t.hours}</div>
              </div>
              <div className="bg-white p-2 rounded-lg text-center w-16 shadow-sm">
                <div className="text-xl font-bold text-yellow-800">{countdown.minutes}</div>
                <div className="text-xs text-yellow-600">{t.minutes}</div>
              </div>
              <div className="bg-white p-2 rounded-lg text-center w-16 shadow-sm">
                <div className="text-xl font-bold text-yellow-800">{countdown.seconds}</div>
                <div className="text-xs text-yellow-600">{t.seconds}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionOverlay;