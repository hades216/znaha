import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { articles } from '../data/articles';

const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
};

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="pt-40 pb-20 min-h-[70vh] flex items-center justify-center flex-col text-center z-10 relative">
        <h1 className="text-4xl font-bold mb-4">Article Not Found.</h1>
        <Link to="/insights" className="text-yellow-500 hover:underline">Return to Insights</Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link to="/insights" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-yellow-500 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          
          <div className="mb-8">
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white mb-8 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium uppercase tracking-wider mb-10 pb-10 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-500" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-yellow-500" />
              {article.author}
            </div>
            <button className="flex items-center gap-2 hover:text-yellow-500 transition-colors ml-auto border border-white/10 px-4 py-2 rounded-full bg-white/5">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
          className="aspect-video w-full rounded-3xl overflow-hidden mb-16 border border-white/10 bg-[#111]"
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}
          className="prose prose-invert prose-yellow max-w-3xl mx-auto prose-p:text-gray-400 prose-p:leading-loose prose-p:text-lg prose-headings:font-bold prose-headings:text-white prose-blockquote:border-yellow-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-white prose-blockquote:font-serif prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-white/10 flex justify-between items-center bg-gradient-to-r from-yellow-500/10 to-transparent p-8 rounded-2xl border-l-4 border-l-yellow-500">
           <div>
             <h4 className="text-white font-bold text-xl mb-2">Need to execute this strategy?</h4>
             <p className="text-gray-400 text-sm max-w-md">Our engineers can implement these precise architectures for your brand today.</p>
           </div>
           <Link to="/strategy" className="px-6 py-3 bg-white text-black font-bold text-sm tracking-wider uppercase rounded-full hover:bg-yellow-500 transition-all shrink-0">
             Consult Us
           </Link>
        </div>

      </article>
    </main>
  );
}
