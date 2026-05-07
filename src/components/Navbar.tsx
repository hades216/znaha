import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoldenDNA } from './GoldenDNA';
import { navigationData } from '../data/navigation';

function MobileAccordionItem({ categoryKey, category, setMobileMenuOpen, variants }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const isDetailedService = category.title === "Services";
  
  return (
    <motion.div variants={variants} className="w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xl font-bold text-gray-200 hover:text-yellow-400 py-3 transition-colors border-b border-white/5 group"
      >
        <span className="group-hover:translate-x-2 transition-transform duration-300">{category.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="bg-white/5 p-1.5 rounded-full group-hover:bg-yellow-500/10 group-hover:text-yellow-500 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-4 pl-4 border-l-2 border-yellow-500/20 ml-2 mt-2 bg-gradient-to-b from-white/[0.02] to-transparent rounded-r-2xl pr-4">
              {category.items.map((item: any) => {
                const route = isDetailedService ? `/services/${item.id}` : `/${item.id}`;
                return (
                  <Link 
                    key={item.id}
                    to={route}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[15px] font-medium text-gray-400 hover:text-yellow-400 py-2.5 transition-all group/item"
                  >
                    <span className="group-hover/item:translate-x-2 transition-transform duration-300">{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 transition-all -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-yellow-500" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const fadeIn: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const stagger: any = {
    visible: { transition: { staggerChildren: 0.05 } }
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
              
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_20px_rgba(234,179,8,0.05)] p-3 min-w-[240px] flex flex-col gap-1 ring-1 ring-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                  {category.items.map(item => {
                    const isDetailedService = category.title === "Services";
                    const route = isDetailedService ? `/services/${item.id}` : `/${item.id}`;
                    return (
                      <Link 
                        key={item.id} 
                        to={route} 
                        className="group/link flex items-center justify-between px-4 py-3 rounded-xl text-gray-300 hover:text-yellow-400 hover:bg-white/[0.03] transition-all relative z-10"
                      >
                        <span className="text-[13px] font-medium tracking-wide">{item.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-yellow-500" />
                      </Link>
                    );
                  })}
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
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
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
            <motion.div 
              className="flex flex-col items-center gap-6 w-full px-6 h-full overflow-y-auto py-24 pb-32"
              initial="hidden" animate="visible" variants={stagger}
            >
              <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                <motion.div variants={fadeIn} className="w-full">
                  <Link 
                    to="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-bold text-gray-200 hover:text-yellow-400 py-2 transition-colors border-b border-white/5"
                  >
                    Home
                  </Link>
                </motion.div>

                {Object.entries(navigationData).map(([key, category]) => (
                  <MobileAccordionItem 
                    key={key} 
                    categoryKey={key} 
                    category={category} 
                    setMobileMenuOpen={setMobileMenuOpen} 
                    variants={fadeIn} 
                  />
                ))}

                <motion.div variants={fadeIn} className="w-full">
                  <Link 
                    to="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-bold text-gray-200 hover:text-yellow-400 py-2 transition-colors border-b border-white/5"
                  >
                    About Us
                  </Link>
                </motion.div>

                <motion.div variants={fadeIn} className="w-full">
                  <Link 
                    to="/insights" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-bold text-gray-200 hover:text-yellow-400 py-2 transition-colors border-b border-white/5"
                  >
                    Blog
                  </Link>
                </motion.div>

                <motion.div variants={fadeIn} className="w-full">
                  <Link 
                    to="/strategy" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-bold text-gray-200 hover:text-yellow-400 py-2 transition-colors border-b border-white/5"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                
                <div className="flex items-center gap-4 text-white/50 text-xs font-bold pt-6 border-t border-white/10 justify-center">
                  {['en', 'fr', 'es', 'de', 'it'].map((lng) => (
                    <button 
                      key={lng}
                      onClick={() => {
                        changeLanguage(lng);
                        setMobileMenuOpen(false);
                      }} 
                      className={`hover:text-yellow-500 uppercase ${i18n.language === lng ? 'text-yellow-500' : ''}`}
                    >
                      {lng}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
