import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Welcome to the ZNAHA Digital Concierge. We specialize in the architectural alignment of elite digital ecosystems. How may we consult on your bespoke growth strategy or ROI amplification today?", isBot: true },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // User message
    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput('');
    
    // Simulated luxurious/consultative bot response
    setTimeout(() => {
      const userMessage = input.toLowerCase();
      let response = "Certainly. I have analyzed the initial parameters of your inquiry. It is a strategic imperative for our lead consultants to review your current market positioning. We shall conduct a comprehensive audit of your digital architecture and contact you to discuss an uncompromising roadmap.";
      
      if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('budget')) {
        response = "Understood. Our investment models are engineered for substantial ROI amplification and are reserved for brands committed to absolute market dominance. A senior partner will reach out to discuss the structural investment required for your bespoke transformation.";
      } else if (userMessage.includes('seo') || userMessage.includes('search')) {
        response = "Regarding your search presence, architectural alignment with high-intent digital real estate is crucial. Our OmniSEO® protocols ensure your brand remains the primary authority. I am alerting our search engineers to prioritize your topical integrity.";
      } else if (userMessage.includes('design') || userMessage.includes('website')) {
        response = "Certainly. Your digital interface is the atmospheric cornerstone of your brand identity. We focus on engineering immersive environments that resonate with high-net-worth expectations. I will initiate a review of your frontend's aesthetic and functional alignment.";
      }

      setMessages((prev) => [
        ...prev,
        { text: response, isBot: true },
      ]);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 glass-panel rounded-2xl flex flex-col overflow-hidden z-50 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
          >
            {/* Header */}
            <div className="bg-[#18191A]/80 px-4 py-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div role="heading" aria-level={2} className="font-serif font-semibold text-white">ZNAHA Concierge</div>
                  <p className="text-xs text-white/50">Luxury Brand Consultation</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close chat"
                className="text-white/50 hover:text-white transition-colors"
                >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-[#18191A]/40">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? 'bg-white/5 text-gray-200 rounded-tl-sm border border-white/5' 
                        : 'bg-blue-500/90 text-white font-medium rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <form onSubmit={handleSend} className="p-4 bg-[#18191A]/60 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button 
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-400 transition-colors shrink-0"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-xl uppercase"
        >
          Consult with Concierge
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle chat window"
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
}
