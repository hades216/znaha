import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const articlesDb: Record<string, any> = {
  "seo-paradigm": { 
    title: "The 2026 SEO Paradigm for Luxury Brands", 
    category: "SEO Insights", 
    date: "April 18, 2026", 
    author: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    content: `
      <p>The landscape of search engine optimization has irrevocably shifted. For luxury brands, an arms race built on algorithmic manipulation is a losing strategy. Today, search algorithms prioritize structural excellence, high-end thematic relevance, and uncompromising user experience over simple keyword density.</p>
      <h2>The Demise of Traditional Metrics</h2>
      <p>Volume-driven strategies are yielding diminishing returns. High-net-worth individuals interact with search intent differently. Their queries are zero-click oriented, highly specific, and demand immediate authority. Brands must transition from "ranking for keywords" to "owning topical silos."</p>
      <h2>Zero-UI and Ambient Discoverability</h2>
      <p>As voice search and AI overviews dominate the SERPs, your brand's data must be immaculately structured. We are seeing luxury conversions originate without a single traditional search click. It requires engineering your site's schema to perfectly spoon-feed AI crawlers the exact provenance and exclusivity of your products.</p>
      <blockquote>"If your digital experience requires patience, you have already lost the affluent consumer."</blockquote>
      <p>Luxury is defined by the absence of friction. Your technical SEO—site speed, Core Web Vitals, seamless interactivity—is no longer just a ranking factor; it is the digital equivalent of a marble-floored lobby.</p>
    `
  },
  "conversion-funnel": { 
    title: "Decoding the High-Net-Worth Conversion Funnel", 
    category: "Strategy", 
    date: "April 12, 2026", 
    author: "Marcus Vance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    content: `
      <p>Unlike traditional e-commerce, the luxury sales cycle is prolonged, non-linear, and heavily reliant on repeated, varied touchpoints across multiple devices.</p>
      <p>We analyze the data points dictating this funnel...</p>
    `
  },
  "aesthetic-efficiency": { 
    title: "Why Aesthetic Quality Directly Correlates to Ad Spend Efficiency", 
    category: "Design", 
    date: "April 05, 2026", 
    author: "Sarah Jin",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    content: `
      <p>Visual presentation is not just a branding exercise; it is a mathematical imperative for reducing CAC (Customer Acquisition Cost).</p>
      <p>Our recent multivariate tests show a direct correlation between custom, high-resolution aesthetic design elements and a plummeting cost-per-click across premium ad networks.</p>
    `
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesDb[slug] : null;

  if (!article) {
    return (
      <main className="pt-40 pb-20 min-h-[70vh] flex items-center justify-center flex-col text-center z-10 relative">
        <h1 className="text-4xl font-bold mb-4">Article Not Found.</h1>
        <Link to="/#blog" className="text-yellow-500 hover:underline">Return to Insights</Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link to="/#blog" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-yellow-500 transition-colors mb-8 group">
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
