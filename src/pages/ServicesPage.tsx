import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function ServicesPage() {
  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      {/* Services Header */}
      <section className="px-6 md:px-12 py-20 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Our Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white mb-8 tracking-tight">
            Precision Engines for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
              Unrivaled Growth.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
            We operate at the intersection of elite creative and ruthless performance data. Explore our full suite of 10 dedicated digital engineering services designed specifically for luxury brands.
          </p>
        </motion.div>
      </section>

      {/* Services Index List */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
         <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, i) => (
            <motion.div 
              key={i} variants={fadeIn}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group relative overflow-hidden flex flex-col min-h-[360px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              
              <div className="mb-8 inline-flex p-4 rounded-xl bg-black/50 border border-white/5 self-start transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{service.shortDesc}</p>
              
              <Link to={`/services/${service.id}`} className="inline-flex items-center text-[11px] uppercase font-bold text-yellow-500 hover:text-yellow-400 transition-colors mt-auto group-hover:translate-x-1 duration-300">
                Explore Full Protocol <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services CTA */}
      <section className="mt-32 border-t border-white/10 py-32 bg-gradient-to-b from-transparent to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate your market?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on generic marketing. Partner with ZNAHA to engineer a bespoke acquisition engine for your brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/strategy" className="inline-flex items-center justify-center px-10 py-5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] gap-2 text-lg uppercase tracking-wider">
              Get My Free Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
