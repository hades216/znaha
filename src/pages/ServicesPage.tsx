import { motion } from 'motion/react';
import { Target, Zap, Globe, MessageSquare, TrendingUp, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function ServicesPage() {
  const detailedServices = [
    {
      id: "seo",
      icon: <Target className="w-8 h-8 text-yellow-500"/>,
      title: "SEO Optimization",
      desc: "Dominate search results with our technical and content-led SEO strategies designed for high-intent luxury buyers. We rebuild your site architecture to appease both algorithms and affluent prospects.",
      features: ["Technical SEO Audits", "High-Authority Link Building", "Competitor Gap Analysis", "Content Silo Architecture"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "ppc",
      icon: <Zap className="w-8 h-8 text-yellow-500"/>,
      title: "Performance PPC",
      desc: "Maximize ROI with hyper-targeted paid campaigns across Google Ads, Bing, and premium ad networks. Stop wasting ad spend and start acquiring aggressively.",
      features: ["Search & Display Campaigns", "Retargeting Infrastructure", "A/B Multivariate Testing", "Conversion Tracking Automation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "web-design",
      icon: <Globe className="w-8 h-8 text-yellow-500"/>,
      title: "Web Design & Development",
      desc: "Immersive, high-performance websites that serve as the luxurious digital storefront for your brand. Built on modern stacks for blistering speed.",
      features: ["Bespoke UI/UX Design", "React & Next.js Architecture", "3D WebGL Experiences", "E-commerce Optimization"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
    },
    {
      id: "social-media",
      icon: <MessageSquare className="w-8 h-8 text-yellow-500"/>,
      title: "Social Media Styling",
      desc: "Curated social presences that build brand equity and engage affluent demographics. Elevate your visual identity across Instagram, LinkedIn, and TikTok.",
      features: ["Platform Strategy", "High-End Content Production", "Community Management", "Influencer Partnerships"],
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80"
    },
    {
      id: "cro",
      icon: <TrendingUp className="w-8 h-8 text-yellow-500"/>,
      title: "Conversion Rate Optimization",
      desc: "Data-backed testing to turn more of your hard-earned traffic into high-value leads and sales. We close the leaks in your funnel.",
      features: ["Heatmap Analysis", "Checkout Flow Friction Removal", "Landing Page Personalization", "Form Optimization"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-8 h-8 text-yellow-500"/>,
      title: "Advanced Analytics",
      desc: "Closed-loop reporting and marketing automation to track every dollar of ROI down to the cent. Know exactly what drives your growth.",
      features: ["Custom Dashboard Engineering", "Server-Side Tracking", "Attribution Modeling", "CRM Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

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
            We operate at the intersection of elite creative and ruthless performance data. Explore our suite of digital engineering services.
          </p>
        </motion.div>
      </section>

      {/* Services Detailed List */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.desc}</p>
                
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/strategy?service=${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-wider group">
                  Discuss This Strategy
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-3xl blur-[80px] -z-10"></div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#111] p-2 shadow-2xl relative">
                   <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services CTA */}
      <section className="mt-32 border-t border-white/10 py-32 bg-gradient-to-b from-transparent to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate your market?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Stop relying on generic marketing. Partner with ZNAHA to engineer a bespoke acquisition engine for your brand.
          </p>
          <Link to="/strategy" className="inline-flex items-center justify-center px-10 py-5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] gap-2 text-lg">
            SCHEDULE A STRATEGY SESSION
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
