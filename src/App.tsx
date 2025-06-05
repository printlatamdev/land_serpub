import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ConstructionOverlay from './components/ConstructionOverlay';

function App() {
  const [language, setLanguage] = useState('es');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Header language={language} toggleLanguage={toggleLanguage} />
          <main>
            <Hero language={language} />
            <About language={language} />
            <Newsletter language={language} />
            <Contact language={language} />
          </main>
          <Footer language={language} />
          <ConstructionOverlay language={language} />
        </>
      )}
    </div>
  );
}

export default App;