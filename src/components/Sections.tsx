import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, BarChart3, Target, Zap, Globe, MessageSquare, TrendingUp, ChevronRight, Twitter, Instagram, Linkedin, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { navigationData } from '../data/navigation';
import { servicesData } from '../data/services';
import { FloatingText, TiltHeading } from './FloatingText';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-20 justify-center z-10 px-6 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Premium Digital Agency</span>
          </div>
        </motion.div>

        <TiltHeading>
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.2] md:leading-[0.9] text-white mb-6 tracking-tight cursor-default break-words"
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
          >
            <FloatingText depth={15} className="block">We Engineer</FloatingText>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white block">
              Digital Dominance.
            </span>
          </motion.h1>
        </TiltHeading>

        <motion.p 
          className="text-base md:text-lg text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed font-sans"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
        >
          zanhadigital is a full-service luxury marketing agency driving measurable ROI through data-driven SEO, immersive design, and high-converting campaigns.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}
        >
          <Link to="/strategy" className="inline-flex px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] items-center justify-center gap-2">
            Get a Custom Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white">A</div>
              <div className="w-10 h-10 rounded-full bg-yellow-600 border-2 border-black flex items-center justify-center text-[10px] text-white">B</div>
              <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center text-[10px] text-white">C</div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white leading-tight">200+ Luxury Brands</div>
              <div className="text-gray-500 text-xs">Trust our expertise monthly</div>
            </div>
          </div>
        </motion.div>

        {/* WebFX style stats bar */}
        <motion.div 
          className="mt-24"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8">
            {[
              { value: "80k+", label: "Client Revenue Generated" },
              { value: "10k+", label: "Leads Driven" },
              { value: "200+", label: "Luxury Brands Scaled" },
              { value: "93%", label: "Client Retention Rate" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Section - Marquee Layout */}
        <motion.div 
          className="mt-20 py-20 border-y border-white/5 bg-[#0a0a0a] overflow-hidden"
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}
        >
          <div className="container mx-auto px-6 mb-16 text-center">
             <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Trusted by Growing Teams</p>
          </div>
          
          <div className="flex overflow-hidden">
             <motion.div 
               className="flex gap-16 whitespace-nowrap px-8"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
             >
               {[...Array(2)].map((_, i) => (
                 ['DOORDASH', 'UBER EATS', 'BUMBLE', 'TINDER', 'VENMO', 'SPOTIFY', 'SUBWAY', 'H&M'].map((brand) => (
                    <span 
                      key={`${brand}-${i}`}
                      className="text-gray-400 text-sm font-black tracking-widest select-none cursor-default"
                    >
                      {brand}
                    </span>
                 ))
               ))}
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CertificationsBanner() {
  return (
    <div className="py-16 border-y border-white/5 bg-[#0a0a0a] overflow-hidden w-full relative z-10">
      <div className="container mx-auto px-6 mb-12 text-center">
         <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Official Certifications & Partnerships</p>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
           className="flex gap-16 whitespace-nowrap px-8"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            [
              {title: "Google Partner", subtitle: "Premier"},
              {title: "Meta", subtitle: "Business Partner"},
              {title: "Microsoft", subtitle: "Advertising Partner"},
              {title: "Amazon Ads", subtitle: "Verified Partner"},
              {title: "Inc. 5000", subtitle: "Honoree 2024"}
            ].map((partner) => (
               <div key={`${partner.title}-${i}`} className="flex flex-col items-center justify-center text-center shrink-0">
                  <div className="text-gray-400 font-bold mb-1 whitespace-nowrap">{partner.title}</div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold whitespace-nowrap">{partner.subtitle}</div>
               </div>
            ))
          ))}
        </motion.div>
      </div>
    </div>
  );
}


export function Services() {
  const displayServices = servicesData.slice(0, 6);

  return (
    <section id="services" className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 break-words">Pinnacle Marketing Capabilities.</h2>
          <p className="text-gray-400 text-base md:text-lg">We don't just sell services; we implement revenue-generating growth engines customized for elite brands.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, i) => (
            <Link 
              to={`/services/${service.id}`}
              key={service.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group relative overflow-hidden flex flex-col cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                <div className="mb-6 inline-flex p-4 rounded-xl bg-black/50 border border-white/5 self-start transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 break-words text-white group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{service.shortDesc || service.desc}</p>
                <div className="inline-flex items-center text-[10px] uppercase font-bold text-yellow-500 hover:text-yellow-400 transition-colors mt-auto group-hover:translate-x-1 duration-300">
                  Explore Service <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const projects = [
    { name: "Aura Chronology", niche: "Luxury Watches", metric: "+342% ROI", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80" },
    { name: "Vanguard Estates", niche: "Premium Real Estate", metric: "+180% Leads", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
    { name: "Lumina Automotive", niche: "Bespoke Supercars", metric: "3.2M Reach", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80" },
    { name: "Maison Noir", niche: "High-End Fashion", metric: "+210% Direct Sales", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left font-sans">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 text-yellow-500 mb-6 uppercase tracking-[0.3em] font-bold text-[10px]">
              <Target className="w-4 h-4" />
              Strategic Victories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tighter break-words overflow-hidden">Our Legacy of <span className="text-yellow-500">Success.</span></h2>
            <p className="text-gray-400 text-sm md:text-lg font-serif">Case studies detailing how we transform digital presence into measurable equity and revenue growth.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <Link 
              to="/portfolio" 
              className="px-10 py-4 bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all font-bold text-xs uppercase tracking-[0.2em] rounded-full inline-block"
            >
              Explore Full Gallery
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn} 
              className="group relative overflow-hidden bg-black cursor-pointer rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 hover:border-yellow-500/30 p-2"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2rem] relative">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest mb-6 rounded-sm">
                      <Zap className="w-3 h-3" />
                      {project.metric} Impact
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{project.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 font-serif italic">{project.niche}</p>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
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
  const displayArticles = articles.slice(0, 3);

  return (
    <section id="blog" className="py-32 relative z-10 bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Industry Intelligence.</h2>
          <p className="text-gray-400 text-lg">Curated insights and strategic blueprints from our marketing engineers.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {displayArticles.map((article, i) => (
            <Link key={i} to={`/insights/${article.slug}`} className="col-span-1 p-5 rounded-2xl bg-white/5 border border-white/10 group block hover:border-yellow-500/30 transition-all flex flex-col h-full">
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
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function HomeContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goal: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'Required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email';
    } else if (name === 'name' && value.trim().length < 2) {
      error = 'Too short';
    } else if (name === 'goal' && value.trim().length < 10) {
      error = 'Need more detail';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const getInputClass = (name: string) => {
    return `w-full bg-black/40 border rounded-full px-6 py-4 placeholder-white/20 text-white focus:outline-none transition-all ${
      errors[name] 
        ? 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]' 
        : 'border-white/10 focus:border-yellow-500/50'
    }`;
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Immediate Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
              Ready to architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">your market takeover?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md font-sans">
              Skip the queue. Drop your details below and a senior growth engineer will reach out within 2 hours to discuss your precise acquisition goals.
            </p>
            <div className="flex items-center gap-6">
               <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Consultant" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-yellow-600 border-2 border-black flex items-center justify-center text-[10px] text-white overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Consultant" className="w-full h-full object-cover" />
                 </div>
               </div>
               <p className="text-sm text-gray-400 font-medium">Direct routing to our<br/><span className="text-white">Senior Strategy Team</span></p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
             
             {isSubmitted ? (
               <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-12">
                 <div className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-6 border border-yellow-500/50">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                 <p className="text-gray-400">Our senior strategy team is reviewing your details and will contact you shortly.</p>
               </div>
             ) : (
               <form className="relative z-10 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                 <div className="grid md:grid-cols-2 gap-5">
                   <div className="flex flex-col gap-2">
                       <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Name</label>
                       <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={getInputClass('name')} 
                        placeholder="Full Name" 
                       />
                       {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest">{errors.name}</span>}
                   </div>
                   <div className="flex flex-col gap-2">
                       <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email</label>
                       <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={getInputClass('email')} 
                        placeholder="Work Email" 
                       />
                       {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest">{errors.email}</span>}
                   </div>
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Company / Website</label>
                    <input 
                      type="text" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={getInputClass('website')} 
                      placeholder="yourdomain.com" 
                    />
                    {errors.website && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest">{errors.website}</span>}
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Primary Goal</label>
                    <textarea 
                      rows={3} 
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      className={`${getInputClass('goal')} rounded-3xl`} 
                      placeholder="What is the main bottleneck you need solved?" 
                    />
                    {errors.goal && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest">{errors.goal}</span>}
                 </div>
                 <button type="submit" className="w-full mt-2 bg-yellow-500 text-black font-bold text-sm tracking-wider uppercase py-4 rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex justify-center items-center gap-2">
                   Send Inquiry
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </form>
             )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black relative z-10 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold tracking-widest text-white flex items-center gap-2 mb-6">
              ZNAHA<span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Engineering digital dominance for the world's most ambitious luxury brands.
            </p>
          </div>
          
          {Object.entries(navigationData).map(([key, category]) => (
            <div key={key}>
              <h2 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{category.title}</h2>
              <ul className="space-y-4">
                {category.items.map(item => {
                  const isDetailedService = category.title === "Services";
                  const route = isDetailedService ? `/services/${item.id}` : `/${item.id}`;
                  return (
                    <li key={item.id}>
                      <Link to={route} className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 ZNAHA Digital Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
