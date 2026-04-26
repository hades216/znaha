import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Target, Zap, TrendingUp, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const CATEGORIES = ["All", "Luxury", "Real Estate", "Automotive", "Fashion", "Lifestyle"];

const projects = [
  { 
    id: "aura",
    name: "Aura Chronology", 
    category: "Luxury",
    niche: "High-End Horology", 
    metric: "+342% ROI", 
    stats: [
      { label: "Revenue Lift", value: "$2.4M" },
      { label: "CAC Reduction", value: "48%" },
      { label: "Conversion Rate", value: "4.1%" }
    ],
    tags: ["PPC", "SEO", "CRO"], 
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80",
    challenge: "Buyers were researching online but purchasing in-store due to a lack of elite digital trust markers.",
    solution: "Re-engineered the digital consultation pipeline to mirror the white-glove in-store experience, backed by hyper-targeted intent data.",
    featured: true
  },
  { 
    id: "vanguard",
    name: "Vanguard Estates", 
    category: "Real Estate",
    niche: "Premium Development", 
    metric: "180% Lead Growth", 
    stats: [
      { label: "Qualified Leads", value: "450/mo" },
      { label: "Avg Sale Value", value: "$4.8M" },
      { label: "Search Share", value: "22%" }
    ],
    tags: ["Local SEO", "High-Speed Web"], 
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    challenge: "Losing major listings to digitized competitors in the $5M+ niche.",
    solution: "Interactive development rendering coupled with geofenced ad protocols to dominate ultra-wealthy zip codes.",
    featured: false
  },
  { 
    id: "lumina",
    name: "Lumina Automotive", 
    category: "Automotive",
    niche: "Custom Supercars", 
    metric: "3.2M Reach", 
    stats: [
      { label: "Engagement Rate", value: "12.4%" },
      { label: "Brand Mentions", value: "+400%" },
      { label: "Direct Inquiries", value: "82/mo" }
    ],
    tags: ["Social Ads", "Video Styling"], 
    image: "https://images.unsplash.com/photo-1503376760356-041849d0124c?auto=format&fit=crop&q=80",
    challenge: "High traffic, but lacked 'collector-grade' qualified buyers.",
    solution: "Exclusive preview sequences accessible only via private verified social channels.",
    featured: false
  },
  { 
    id: "maison",
    name: "Maison Noir", 
    category: "Fashion",
    niche: "Avant-Garde Couture", 
    metric: "+210% Direct Sales", 
    stats: [
      { label: "DTC Revenue", value: "$3.1M" },
      { label: "Repeat Rate", value: "34%" },
      { label: "AOV Growth", value: "+18%" }
    ],
    tags: ["Shopify Plus", "SEO"], 
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    challenge: "Stuck in wholesale dependencies with zero customer data ownership.",
    solution: "Transitioned to an exclusive DTC model with loyalty-driven 'Drop' protocols.",
    featured: true
  },
  { 
    id: "zenith",
    name: "Zenith Club", 
    category: "Lifestyle",
    niche: "Private Membership", 
    metric: "Fully Booked", 
    stats: [
      { label: "Waitlist Size", value: "2,400" },
      { label: "Member LTV", value: "$45k" },
      { label: "Churn Rate", value: "<1%" }
    ],
    tags: ["Strategy", "Email CRM"], 
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
    challenge: "Inability to maintain exclusivity while scaling membership inquiries.",
    solution: "Gated application engine with automated concierge qualification protocols.",
    featured: false
  },
  { 
    id: "oceana",
    name: "Oceana Yachts", 
    category: "Luxury",
    niche: "Yacht Brokerage", 
    metric: "$45M Pipeline", 
    stats: [
      { label: "Listing Views", value: "115k" },
      { label: "Broker Inquiries", value: "140" },
      { label: "Global Presence", value: "12 Countries" }
    ],
    tags: ["Global SEO", "Analytics"], 
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8dba?auto=format&fit=crop&q=80",
    challenge: "Highly disconnected international operations lead to tracking blind spots.",
    solution: "Unified Multi-region Revenue Platform linking web signals directly to CRM closed yachts.",
    featured: false
  },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      {/* Header Pillar */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/10 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-yellow-500 mb-6 uppercase tracking-[0.3em] font-bold text-[10px]">
                <Target className="w-4 h-4" />
                Case Study Archives
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] md:leading-[0.85] text-white tracking-tighter mb-8 break-words">
                Proven <span className="text-yellow-500">Revenue</span> <br />Architecture.
              </h1>
              <p className="text-xl text-gray-400 font-serif leading-relaxed max-w-2xl">
                We don't showcase pretty designs. We showcase absolute market dominance, backed by verified data and proprietary acquisition protocols.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 py-3 px-6 bg-white/5 border border-white/10 rounded-2xl">
                <TrendingUp className="w-5 h-5 text-yellow-500" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Aggregated Impact</span>
                  <span className="text-2xl font-bold text-white">$142M+ Generated</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3">
          <div className="p-2 bg-white/5 border border-white/10 rounded-xl mr-2">
            <Filter className="w-4 h-4 text-yellow-500" />
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-2 group outline-none"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-yellow-500 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                activeCategory === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'
              }`}>
                {cat}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Project Matrix */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.33, 1, 0.68, 1],
                  layout: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                }}
                className={`group relative flex flex-col ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                {/* Image & Hover Layer */}
                <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-2 transition-all duration-500 group-hover:border-yellow-500/30 group-hover:shadow-[0_0_50px_rgba(234,179,8,0.1)] ${project.featured ? 'aspect-[2/1]' : 'aspect-square'}`}>
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    {/* Corner Detail */}
                    <div className="absolute top-8 right-8">
                      <div className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom Label */}
                    <div className="absolute bottom-8 left-8 transform transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0">
                      <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{project.niche}</p>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{project.name}</h3>
                    </div>

                    {/* Expanded Detail Layer (Shown on Hover) */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 pointer-events-none">
                       <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-4 block">Execution Strategy</span>
                            <p className="text-lg text-white mb-6 leading-relaxed font-serif">{project.solution}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white font-bold uppercase tracking-widest">{tag}</span>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-6">
                            {project.stats.map((s, idx) => (
                              <div key={idx} className="border-l border-yellow-500/50 pl-4 py-1">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{s.label}</p>
                                <p className="text-2xl font-bold text-white">{s.value}</p>
                              </div>
                            ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Label (Visible when footer is not shown) */}
                <div className="mt-6 flex justify-between items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all px-2">
                   <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
                      <span className="text-xl font-bold text-white">{project.name}</span>
                   </div>
                   <div className="text-right">
                      <span className="text-xl font-bold text-yellow-500">{project.metric}</span>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Verified Case</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Conversion Sector */}
      <section className="mt-40 border-t border-white/10 py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 tracking-tighter break-words">Your brand <br /> is next.</h2>
            <p className="text-xl text-gray-400 font-serif mb-12 leading-relaxed max-w-2xl mx-auto">
              We only accept 2 brand partners per quarter to ensure uncompromising delivery of these results. Secure your strategy consultation now.
            </p>
            <Link to="/strategy" className="inline-flex items-center justify-center px-12 py-6 bg-yellow-500 text-black font-black text-xs tracking-[0.3em] uppercase rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] gap-4 group">
              REQUEST PRIORITY AUDIT
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
