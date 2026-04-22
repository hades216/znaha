import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Sections';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { StrategyPage } from './pages/StrategyPage';
import { ArticlePage } from './pages/ArticlePage';

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

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen selection:bg-yellow-500/30 selection:text-white relative bg-[#050505]">
        <Background3D />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/insights/:slug" element={<ArticlePage />} />
        </Routes>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
