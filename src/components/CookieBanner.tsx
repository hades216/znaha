import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('znaha_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('znaha_cookie_consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100]"
        >
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="flex items-start gap-4 relative">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
                <Shield className="w-5 h-5 text-yellow-500" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-white font-bold mb-2">Privacy & Protocol</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  We use cookies to engineer the ultimate digital experience and analyze our growth performance. By continuing, you consent to our data collection architectures.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleConsent('all')}
                    className="px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => handleConsent('essential')}
                    className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
                  >
                    Essential Only
                  </button>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <Link to="/privacy" className="text-[10px] text-gray-500 hover:text-yellow-500 transition-colors uppercase font-bold tracking-tighter">
                    Review Privacy Policy
                  </Link>
                  <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
