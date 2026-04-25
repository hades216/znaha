import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { Chatbot } from './components/Chatbot';
import { Footer, CertificationsBanner } from './components/Sections';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { StrategyPage } from './pages/StrategyPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { GenericPage } from './pages/GenericPage';
import { CookieBanner } from './components/CookieBanner';
import { PageTransition } from './components/PageTransition';
import { AnimatePresence } from 'motion/react';

import { ServiceDetailPage } from './pages/ServiceDetailPage';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:serviceId" element={<PageTransition><ServiceDetailPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><BlogIndexPage /></PageTransition>} />
        <Route path="/insights/:slug" element={<PageTransition><ArticlePage /></PageTransition>} />
        <Route path="/strategy" element={<PageTransition><StrategyPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
        <Route path="/admin/analytics" element={<PageTransition><AdminDashboard /></PageTransition>} />
        <Route path="/:pageId" element={<PageTransition><GenericPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen selection:bg-yellow-500/30 selection:text-white relative bg-[#050505] overflow-x-hidden">
        <Background3D />
        <Navbar />
        
        <AnimatedRoutes />

        <CertificationsBanner />
        <Footer />
        <CookieBanner />
        <Chatbot />
      </div>
    </Router>
  );
}
