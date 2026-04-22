import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Insights', href: '/#blog' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 relative z-50">
          <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-sm rotate-45 flex items-center justify-center shrink-0">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
          </div>
          ZNAHA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-gray-400">
          <Link to="/" className={`hover:text-white transition-colors ${location.pathname === '/' && location.hash === '' ? 'text-yellow-500' : ''}`}>
            Home
          </Link>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`hover:text-white transition-colors ${location.pathname === link.href ? 'text-yellow-500' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/strategy"
            className="px-6 py-2.5 bg-yellow-500 text-black font-bold flex items-center justify-center rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] ml-2 uppercase"
          >
            GET STARTED
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white relative z-50"
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
            <div className="flex flex-col items-center gap-8 w-full px-6">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-200 hover:text-yellow-400"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-200 hover:text-yellow-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/strategy"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-yellow-500 text-black font-bold text-center rounded-full w-full max-w-xs shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                GET PROPOSAL
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
