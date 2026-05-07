import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, ArrowRight, ChevronDown, ArrowLeft, Coins } from 'lucide-react';
import { servicesData } from '../data/services';
import { FloatingText, TiltHeading } from '../components/FloatingText';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!service) {
    return (
      <main className="pt-40 pb-20 min-h-[70vh] flex items-center justify-center flex-col text-center z-10 relative">
        <h1 className="text-4xl font-bold mb-4">Service Not Found.</h1>
        <Link to="/services" className="text-yellow-500 hover:underline">Return to Services</Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      <article className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation & Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-yellow-500 transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
             {/* Text Content - Left Pillar */}
             <div className="flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 inline-flex p-5 rounded-2xl bg-white/5 border border-white/10 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.1)] w-fit"
                >
                  {service.icon}
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] text-white mb-8 tracking-tight break-words">
                  <TiltHeading>
                    <FloatingText depth={20}>{service.title}</FloatingText>
                  </TiltHeading>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed font-serif mb-8 border-l-4 border-yellow-500 pl-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-full flex items-center gap-2 text-yellow-500 mb-6 bg-yellow-500/5 border border-yellow-500/10 p-4 rounded-xl">
                    <Coins className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest font-black">Investment Protocol: Starting at {service.priceRange}</span>
                  </div>
                  <Link to={`/strategy?service=${service.id}`} className="inline-flex items-center justify-center px-10 py-4 bg-yellow-500 text-black font-bold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(253,224,71,0.6)] gap-3 group">
                    Begin Strategy Protocol
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-100" />
                  </Link>
                </div>
             </div>
             
             {/* Visual Asset - Right Pillar */}
             <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 rounded-3xl blur-[100px] -z-10"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black p-2 shadow-2xl relative group"
                >
                   <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-8 left-8">
                         <p className="text-yellow-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Service Spec</p>
                         <h2 className="text-white font-bold text-xl uppercase tracking-tighter">ZNAHA Protocol {service.id.toUpperCase()}</h2>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Deliverables / Features */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="mb-32">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Pillars of Implementation</h2>
           <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:border-yellow-500/30 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
                    <p className="text-sm text-gray-400">Integrated as standard protocol within our tailored {service.title.toLowerCase()} roadmaps to ensure uncompromising market dominance.</p>
                  </div>
                </div>
              ))}
           </div>
        </motion.section>

        {/* FAQs specific to this service */}
        {service.faqs && service.faqs.length > 0 && (
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="max-w-4xl mx-auto mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Clarity on our {service.title} frameworks and timelines.</p>
            </div>

            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-yellow-500 transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </article>

      {/* Services CTA */}
      <section className="mt-32 border-t border-white/10 py-32 bg-gradient-to-b from-transparent to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate your market?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on generic marketing. Partner with ZNAHA to engineer a bespoke acquisition engine for your brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to={`/strategy?service=${service.id}`} className="inline-flex w-full sm:w-auto px-10 py-5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] items-center justify-center gap-2 text-lg uppercase tracking-wider">
              Get My Free Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
