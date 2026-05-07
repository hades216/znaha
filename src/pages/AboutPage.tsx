import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, Globe, Building2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingText, TiltHeading } from '../components/FloatingText';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

export function AboutPage() {
  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Our Firm</span>
          </div>
          <TiltHeading>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] md:leading-[0.9] text-white mb-8 tracking-tight break-words">
              <FloatingText depth={15} className="block">Engineering the</FloatingText>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white block">
                Vanguard of Digital.
              </span>
            </h1>
          </TiltHeading>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
            ZNAHA is not an agency. We are a collective of data scientists, elite creatives, and growth engineers dedicated to establishing absolute market supremacy for the world's most ambitious luxury brands.
          </p>
        </motion.div>
      </section>

      {/* Stats/Proof Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
         <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#111] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center md:border-r border-white/10 px-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Years Experience</div>
          </div>
          <div className="text-center md:border-r border-white/10 px-4">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">80k+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Client Revenue</div>
          </div>
          <div className="text-center md:border-r border-white/10 px-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Global Talent</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">94%</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Retention Rate</div>
          </div>
        </motion.div>
      </section>

      {/* Our Story / Methodology */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
               <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-[120px] -z-10"></div>
               <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#111] p-2 shadow-2xl relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                     <img 
                       src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                       alt="ZNAHA Headquarters" 
                       className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words leading-tight">Refusal to Accept the Status Quo.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded in New York, ZNAHA emerged from a profound dissatisfaction with the traditional agency model. We saw luxury brands receiving generalized playbooks from agencies that didn't understand the nuance of high-ticket buyer psychology.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                So, we built an infrastructure that fuses bleeding-edge performance marketing with elite brand aesthetics. Our methodologies are peer-reviewed, our data architecture is proprietary, and our execution is ruthless.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                 <div className="flex items-center gap-4">
                   <Target className="w-8 h-8 text-blue-500 shrink-0" />
                   <span className="font-bold text-white">Precision Targeting</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <Building2 className="w-8 h-8 text-blue-500 shrink-0" />
                   <span className="font-bold text-white">Enterprise Scale</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <Globe className="w-8 h-8 text-blue-500 shrink-0" />
                   <span className="font-bold text-white">Global Reach</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <Users className="w-8 h-8 text-blue-500 shrink-0" />
                   <span className="font-bold text-white">Elite Collective</span>
                 </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 border-t border-white/10 py-32 bg-gradient-to-b from-transparent to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate your market?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on generic marketing. Partner with ZNAHA to engineer a bespoke acquisition engine for your brand.
          </p>
          <Link to="/strategy" className="inline-flex items-center justify-center px-10 py-5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] gap-2 text-lg uppercase tracking-wider">
            GET MY FREE PROPOSAL
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
