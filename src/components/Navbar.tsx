import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoldenDNA } from './GoldenDNA';
import { navigationData } from '../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tighter text-white flex items-center gap-1.5 relative z-50 group shrink-0">
          <div className="w-8 h-8 -ml-1 group-hover:scale-110 transition-transform duration-500">
            <GoldenDNA />
          </div>
          <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            zanhadigital
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-gray-400 h-10">
          {Object.entries(navigationData).map(([key, category]) => (
            <div key={key} className="relative group/nav h-full flex items-center cursor-pointer">
              <span className="flex items-center gap-1 hover:text-white transition-colors h-full">
                {category.title}
                <ChevronDown className="w-3 h-3 group-hover/nav:rotate-180 transition-transform" />
              </span>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 min-w-[200px]">
                  {category.items.map(item => (
                    <Link key={item.id} to={`/${item.id}`} className="block text-white hover:text-yellow-500 py-2 transition-colors whitespace-nowrap">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex items-center gap-1 text-white/50 text-[10px] font-bold mr-4 ml-6 border-l border-white/10 pl-6">
            {['en', 'fr', 'es', 'de', 'it'].map((lng) => (
              <button 
                key={lng}
                onClick={() => changeLanguage(lng)} 
                className={`hover:text-yellow-500 uppercase ${i18n.language === lng ? 'text-yellow-500' : ''}`}
              >
                {lng}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-6 w-full px-6">
              {Object.entries(navigationData).map(([key, category]) => (
                <div key={key} className="w-full text-center">
                  <h4 className="text-yellow-500 font-bold mb-2 uppercase text-xs">{category.title}</h4>
                   {category.items.map(item => (
                    <Link 
                      key={item.id}
                      to={`/${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-bold text-gray-200 hover:text-yellow-400 py-1"
                    >
                      {item.name}
                    </Link>
                   ))}
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
