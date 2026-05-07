import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { navigationData } from '../data/navigation';
import { servicesData } from '../data/services';
import { exploreData } from '../data/explore';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { FloatingText, TiltHeading } from '../components/FloatingText';
import { ArrowRight, ChevronRight, CheckCircle2, Plus, Minus, Coins, Zap } from 'lucide-react';

export function GenericPage() {
  const { pageId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Flatten navigation data to find the item
  const allItems = Object.values(navigationData).flatMap(cat => cat.items);
  const item = allItems.find(i => i.id === pageId);

  // Try to find matching service for pricing
  const matchingService = servicesData.find(s => s.id === pageId || s.id === pageId?.replace('knowledge-', ''));
  const price = matchingService?.priceRange || "$2,000+ per month";
  
  // Check if it's an Explore page
  const specificExploreData = pageId ? (exploreData as any)[pageId] : null;

  if (!item) {
    return (
      <PageTransition>
        <div className="pt-40 pb-32 text-center min-h-[70vh] flex flex-col justify-center items-center">
            <h1 className="text-5xl font-black text-white mb-6">404 - Page Not Found</h1>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">The trajectory you are looking for does not exist in our current protocols.</p>
            <Link to="/" className="px-8 py-3 bg-blue-500 text-white font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-colors">Return to Base</Link>
        </div>
      </PageTransition>
    );
  }

  // Generate some category-specific phrasing for procedural content
  let categoryName = "Services";
  Object.entries(navigationData).forEach(([catKey, catValue]) => {
    if (catValue.items.some(i => i.id === item.id)) {
      categoryName = catValue.title;
    }
  });

  const faqs = [
    { 
      question: `What makes your approach to ${item.name} unique?`, 
      answer: `We apply luxury market methodologies to ${item.name}, focusing on high-intent acquisitions and structural dominance rather than pure volume.` 
    },
    { 
      question: `How do you measure success in ${item.name}?`, 
      answer: `We track precise revenue metrics and ROI, moving beyond superficial KPIs to ensure our ${item.name.toLowerCase()} strategies directly impact your bottom line.` 
    },
    { 
      question: `Can ${item.name} be integrated with other services?`, 
      answer: `Absolutely. We highly recommend integrating ${item.name.toLowerCase()} with our broader digital dominance framework for compounded growth and systemic market advantage.` 
    },
    { 
      question: `What is the onboarding process for ${item.name}?`, 
      answer: `Upon engagement, our senior strategy team conducts a comprehensive audit of your current positioning before deploying specialized ${item.name.toLowerCase()} protocols.` 
    }
  ];

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20">
        
        {/* Dynamic Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-blue-500 mb-6 uppercase tracking-[0.3em] font-bold text-[10px]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {categoryName} / {item.name}
            </div>
            
            {specificExploreData && (
              <div className="mb-8 inline-flex p-5 rounded-2xl bg-white/5 border border-white/10 text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)] w-fit">
                {specificExploreData.icon}
              </div>
            )}
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black text-white mb-8 tracking-tighter leading-[1.1] break-words">
              <TiltHeading>
                <FloatingText depth={20} className="block">Elevating</FloatingText>
              </TiltHeading>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200 block">
                {item.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-serif max-w-2xl">
              {specificExploreData 
                ? specificExploreData.intro 
                : `We engineer luxury digital experiences and precision-driven acquisition strategies tailored specifically for ${item.name.toLowerCase()}. Dominate your niche with our elite methodologies.`}
            </p>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-12 gap-16">
            
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none">
              
              {specificExploreData ? (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold text-white mb-6">Strategic Intelligence</h2>
                    <div className="flex flex-col gap-8">
                      {specificExploreData.sections.map((section: any, idx: number) => (
                        <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                          <h3 className="text-2xl font-bold text-blue-500 mb-4">{section.heading}</h3>
                          <p className="text-gray-300 leading-relaxed">{section.text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold text-white mb-6">Strategic Overview</h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      The landscape of <strong>{item.name}</strong> is evolving rapidly. For ultra-premium brands, standard out-of-the-box solutions are no longer sufficient. Our approach to {item.name.toLowerCase()} relies on deep structural analysis, data-driven insights, and an uncompromising commitment to aesthetic and functional perfection.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      By integrating advanced methodologies with your core brand identity, we ensure that every facet of your {item.name.toLowerCase()} strategy is engineered for maximum ROI and market dominance. We don't just participate in the market; we redefine its boundaries.
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                    <h3 className="text-2xl font-bold text-white mb-6">Core Methodologies</h3>
                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                      {[
                        "Data-Driven Analysis & Synthesis",
                        "Luxury Aesthetic Integration",
                        "High-Intent Audience Targeting",
                        "Continuous Performance Optimization"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                          <p className="text-sm font-bold text-gray-200">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4 font-sans">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                        aria-expanded={openFaqIndex === i}
                        aria-controls={`faq-generic-${i}`}
                        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500/50 gap-4"
                      >
                        <span className="font-semibold text-white text-base sm:text-lg break-words flex-1 leading-tight">{faq.question}</span>
                        {openFaqIndex === i ? (
                          <Minus className="w-5 h-5 text-blue-500 shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-blue-500 shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === i && (
                          <motion.div
                            id={`faq-generic-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-[#18191A]/20 px-6 prose prose-invert overflow-hidden rounded-b-2xl"
                          >
                             <div className="pb-4 pt-2">
                               <p className="text-gray-400 leading-relaxed m-0 text-base">{faq.answer}</p>
                             </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="sticky top-32 p-8 rounded-3xl bg-[#242526] border border-white/10 shadow-2xl mb-8"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                  {specificExploreData ? specificExploreData.icon : <Coins className="w-6 h-6 text-blue-500" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Investment Spec</h3>
                <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest font-black">Starting at {price}</p>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Precision-engineered rate cards designed for ROI alignment. Scalable protocol based on market density.
                </p>
                <Link to="/strategy" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-500 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-blue-400 transition-colors">
                  Get Precise Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="sticky top-[32rem] p-8 rounded-3xl bg-[#242526]/50 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Command Your Market</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Ready to deploy elite {item.name.toLowerCase()} strategies? Connect with our senior growth engineers for a confidential consultation.
                </p>
                <Link to="/strategy" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-500 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-blue-400 transition-colors">
                  Contact Strategy Team <ArrowRight className="w-4 h-4" />
                </Link>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">Related {categoryName}</p>
                  <div className="flex flex-col gap-3">
                    {(Object.values(navigationData).find(c => c.title === categoryName)?.items?.filter(i => i.id !== item.id)?.slice(0, 4) || []).map(related => {
                      const isDetailedService = categoryName === "Services";
                      const route = isDetailedService ? `/services/${related.id}` : `/${related.id}`;
                      return (
                        <Link key={related.id} to={route} className="text-sm text-gray-400 hover:text-blue-500 flex items-center justify-between group">
                          {related.name}
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
        
      </div>
    </PageTransition>
  );
}
