import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const fadeIn: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function BlogIndexPage() {
  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 py-20 text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Thought Leadership</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white mb-8 tracking-tight">
            Insights from the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
              Absolute Edge.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Methodologies, architectural teardowns, and market predictions straight from ZNAHA's lead partners and senior engineers.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {articles.map((article, i) => (
            <motion.div 
              key={i} variants={fadeIn}
              className="group cursor-pointer flex flex-col"
            >
              <Link to={`/insights/${article.slug}`} className="block relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#111] p-2 shadow-xl mb-8">
                 <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/10">{article.category}</span>
                    </div>
                 </div>
              </Link>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-6 mb-4 text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-500" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-500" />
                    {article.author}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-yellow-500 transition-colors line-clamp-2">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link to={`/insights/${article.slug}`} className="inline-flex items-center text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-wider mt-auto group-hover:translate-x-1 duration-300">
                  Read Protocol <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mt-32 border-t border-white/10 py-32 bg-gradient-to-b from-transparent to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate your market?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on generic marketing. Partner with ZNAHA to engineer a bespoke acquisition engine for your brand.
          </p>
          <Link to="/strategy" className="inline-flex items-center justify-center px-10 py-5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] gap-2 text-lg uppercase tracking-wider">
            GET MY FREE PROPOSAL
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
