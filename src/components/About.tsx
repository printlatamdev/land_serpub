import React from 'react';
import { Printer, Layout, Zap, BarChart } from 'lucide-react';

interface AboutProps {
  language: string;
}

const translations = {
  en: {
    title: 'About SERPUB',
    subtitle: 'Your Trusted Mimaki Distributor',
    description: 'SERPUB is the official distributor of Mimaki equipment in Nicaragua, providing cutting-edge printing technology to businesses nationwide. We offer sales, service, and support for the complete line of Mimaki products.',
    features: [
      {
        icon: Printer,
        title: 'Wide Format Printers',
        description: 'Professional large format printing solutions for signage, textiles, and industrial applications.'
      },
      {
        icon: Layout,
        title: 'Cutting Plotters',
        description: 'Precision cutting technology for creating custom shapes and designs with incredible accuracy.'
      },
      {
        icon: Zap,
        title: 'UV Printers',
        description: 'Direct printing on virtually any material with vibrant colors and exceptional durability.'
      },
      {
        icon: BarChart,
        title: 'Technical Support',
        description: 'Comprehensive maintenance, training, and technical assistance for all Mimaki products.'
      }
    ]
  },
  es: {
    title: 'Sobre SERPUB',
    subtitle: 'Su Distribuidor Confiable de Mimaki',
    description: 'SERPUB es el distribuidor oficial de equipos Mimaki en Nicaragua, proporcionando tecnología de impresión de vanguardia a empresas en todo el país. Ofrecemos venta, servicio y soporte para la línea completa de productos Mimaki.',
    features: [
      {
        icon: Printer,
        title: 'Impresoras de Gran Formato',
        description: 'Soluciones profesionales de impresión de gran formato para señalización, textiles y aplicaciones industriales.'
      },
      {
        icon: Layout,
        title: 'Plotters de Corte',
        description: 'Tecnología de corte de precisión para crear formas y diseños personalizados con increíble exactitud.'
      },
      {
        icon: Zap,
        title: 'Impresoras UV',
        description: 'Impresión directa en prácticamente cualquier material con colores vibrantes y durabilidad excepcional.'
      },
      {
        icon: BarChart,
        title: 'Soporte Técnico',
        description: 'Mantenimiento integral, capacitación y asistencia técnica para todos los productos Mimaki.'
      }
    ]
  }
};

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language as keyof typeof translations];
  
  return (
    <section id="about\" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
          <p className="max-w-3xl mx-auto text-gray-600">{t.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Mimaki {language === 'es' ? 'Tecnología de Vanguardia' : 'Cutting-Edge Technology'}</h3>
              <p className="mb-4">
                {language === 'es' 
                  ? 'Mimaki es reconocida mundialmente por su innovación y excelencia en equipos de impresión digital y corte.' 
                  : 'Mimaki is globally recognized for its innovation and excellence in digital printing and cutting equipment.'}
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                {language === 'es' ? 'Solicitar Información' : 'Request Information'}
              </a>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Mimaki Printing Equipment" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="text-white text-sm font-medium bg-red-600 px-2 py-1 rounded">
                      {language === 'es' ? 'Tecnología Premium' : 'Premium Technology'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;