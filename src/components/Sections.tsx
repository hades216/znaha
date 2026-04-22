import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Target, Zap, Globe, MessageSquare, TrendingUp, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 justify-center z-10 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Premium Digital Agency</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[0.9] text-white mb-6 tracking-tight"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
        >
          We Engineer <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
            Digital Dominance.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed font-sans"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
        >
          ZNAHA is a full-service luxury marketing agency driving measurable ROI through data-driven SEO, immersive design, and high-converting campaigns.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}
        >
          <a href="/strategy" className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
            Get a Custom Proposal
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white">A</div>
              <div className="w-10 h-10 rounded-full bg-yellow-600 border-2 border-black flex items-center justify-center text-[10px] text-white">B</div>
              <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center text-[10px] text-white">C</div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white leading-tight">500+ Luxury Brands</div>
              <div className="text-gray-500 text-xs">Trust our expertise monthly</div>
            </div>
          </div>
        </motion.div>

        {/* WebFX style stats bar */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-white/10 py-8"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.5 }}
        >
          {[
            { value: "$2.4B+", label: "Client Revenue Generated" },
            { value: "7.8M+", label: "Leads Driven" },
            { value: "500+", label: "Luxury Brands Scaled" },
            { value: "93%", label: "Client Retention Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { icon: <Target className="w-6 h-6 text-yellow-500"/>, title: "SEO Optimization", desc: "Dominate search results with our technical and content-led SEO strategies designed for high-intent luxury buyers." },
    { icon: <Zap className="w-6 h-6 text-yellow-500"/>, title: "Performance PPC", desc: "Maximize ROI with hyper-targeted paid campaigns across Google Ads, Bing, and premium ad networks." },
    { icon: <Globe className="w-6 h-6 text-yellow-500"/>, title: "Web Design & Dev", desc: "Immersive, high-performance websites that serve as the luxurious digital storefront for your brand." },
    { icon: <MessageSquare className="w-6 h-6 text-yellow-500"/>, title: "Social Media Styling", desc: "Curated social presences that build brand equity and engage affluent demographics." },
    { icon: <TrendingUp className="w-6 h-6 text-yellow-500"/>, title: "Conversion Rate Opt", desc: "Data-backed testing to turn more of your hard-earned traffic into high-value leads and sales." },
    { icon: <BarChart3 className="w-6 h-6 text-yellow-500"/>, title: "Advanced Analytics", desc: "Closed-loop reporting and marketing automation to track every dollar of ROI down to the cent." },
  ];

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Pinnacle Marketing Capabilities.</h2>
          <p className="text-gray-400 text-lg">We don't just sell services; we implement revenue-generating growth engines customized for elite brands.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} variants={fadeIn}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <div className="mb-6 inline-flex p-4 rounded-xl bg-black/50 border border-white/5 self-start">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <a href="/services" className="inline-flex items-center text-[10px] uppercase font-bold text-yellow-500 hover:text-yellow-400 transition-colors mt-auto group-hover:translate-x-1 duration-300">
                Explore Service <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const projects = [
    { name: "Aura Chronology", niche: "Luxury Watches", metric: "+342% ROI", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80" },
    { name: "Vanguard Estates", niche: "Premium Real Estate", metric: "+180% Leads", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
    { name: "Lumina Auto", niche: "Bespoke Supercars", metric: "3.2M Impressions", image: "https://images.unsplash.com/photo-1503376760356-041849d0124c?auto=format&fit=crop&q=80" },
    { name: "Maison Noir", niche: "High-End Fashion", metric: "+210% Sales", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Legacy of Success.</h2>
            <p className="text-gray-400 text-lg">Case studies detailing how we transform digital presence into measurable equity and revenue growth.</p>
          </motion.div>
          <motion.a 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            href="#" className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shrink-0 font-medium"
          >
            View Full Portfolio
          </motion.a>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn} 
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden bg-[#111] cursor-pointer rounded-2xl border border-white/10 shadow-xl transition-shadow hover:shadow-yellow-500/10 hover:border-yellow-500/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold mb-4">
                    {project.metric}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 flex items-center justify-between">
                    <span>{project.niche}</span>
                    <ArrowRight className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100" />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    { quote: "ZNAHA redesigned our entire digital acquisition approach. The results are nothing short of breathtaking.", author: "E. Sinclair", role: "CMO, Vanguard Estates" },
    { quote: "The only agency we've worked with that truly understands the nuanced buyer journey of high-net-worth individuals.", author: "J. Mercer", role: "CEO, Lumina Auto" },
    { quote: "Our organic traffic increased by 400% in 8 months, directly impacting our bottom line by millions.", author: "C. Thorne", role: "Director, Aura Chronology" },
  ];

  return (
    <section id="testimonials" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center">Voices of Authority.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left relative flex flex-col justify-between"
            >
              <div className="text-yellow-500/20 absolute top-4 right-4 font-serif text-5xl leading-none">"</div>
              <p className="text-sm italic text-gray-300 leading-relaxed relative z-10 mb-6 flex-1 pr-4">"{review.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold text-white">{review.author}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const articles = [
    { slug: "seo-paradigm", title: "The 2026 SEO Paradigm for Luxury Brands", category: "SEO Insights", date: "April 18, 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
    { slug: "conversion-funnel", title: "Decoding the High-Net-Worth Conversion Funnel", category: "Strategy", date: "April 12, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
    { slug: "aesthetic-efficiency", title: "Why Aesthetic Quality Directly Correlates to Ad Spend Efficiency", category: "Design", date: "April 05, 2026", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="blog" className="py-32 relative z-10 bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Industry Intelligence.</h2>
          <p className="text-gray-400 text-lg">Curated insights and strategic blueprints from our marketing engineers.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {articles.map((article, i) => (
            <a key={i} href={`/insights/${article.slug}`} className="col-span-1 p-5 rounded-2xl bg-white/5 border border-white/10 group block hover:border-yellow-500/30 transition-all flex flex-col h-full">
              <p className="text-[10px] text-yellow-500 font-bold mb-2 uppercase tracking-tighter">{article.category}</p>
              <h3 className="text-sm font-semibold leading-tight text-white mb-4 flex-1">{article.title}</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-white/5 relative mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="mt-auto flex items-center justify-between text-[10px] text-yellow-500 font-bold">
                <span>READ ARTICLE</span>
                <span className="text-xl">→</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black relative z-10 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-serif font-bold tracking-widest text-white flex items-center gap-2 mb-6">
              ZNAHA<span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Engineering digital dominance for the world's most ambitious luxury brands.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {['SEO Optimization', 'Performance PPC', 'Web Design', 'Content Strategy'].map((s) => (
                <li key={s}><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Firm</h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Careers', 'Contact'].map((s) => (
                <li key={s}><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Headquarters</h4>
            <address className="text-gray-400 text-sm not-italic flex flex-col gap-2">
              <p>1 World Trade Center</p>
              <p>Suite 4500, New York, NY</p>
              <a href="tel:+12125550199" className="hover:text-yellow-500 text-white mt-4 transition-colors">+1 (212) 555-0199</a>
              <a href="mailto:hello@znaha.agency" className="hover:text-yellow-500 text-white transition-colors">hello@znaha.agency</a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 ZNAHA Digital Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
