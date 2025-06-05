import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
  },
  es: {
    home: 'Inicio',
    about: 'Nosotros',
    products: 'Productos',
    contact: 'Contacto',
  }
};

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-700">
            SERPUB
            <span className="text-red-600 ml-1">®</span>
          </div>
          <div className="ml-2 text-xs text-gray-500">
            Distribuidor Oficial Mimaki
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t.home}
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t.about}
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t.products}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t.contact}
          </a>
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5 mr-1" />
            <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage} 
            className="mr-4 text-gray-700"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-md animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.products}
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;