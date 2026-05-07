import { Target, Zap, Globe, MessageSquare, TrendingUp, BarChart3, ShoppingCart, Mail, MapPin, Store, Rocket, Search, Coins, BrainCircuit, Database } from 'lucide-react';
import React from 'react';

export interface ServiceData {
  id: string;
  icon: React.ReactElement;
  title: string;
  shortDesc: string;
  desc: string;
  features: string[];
  image: string;
  faqs: { question: string; answer: string }[];
  priceRange?: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "seo",
    icon: <Target className="w-8 h-8 text-blue-500"/>,
    title: "SEO Optimization",
    shortDesc: "Dominate search results with technical and content-led SEO strategies designed for high-intent luxury buyers.",
    desc: "We rebuild your site architecture to appease both algorithms and affluent prospects. Our SEO engineering focuses on capturing zero-click intent, owning rich snippets, and establishing your domain as an unquestionable authority.",
    features: ["Technical SEO & Core Web Vitals Audits", "High-Authority Digital PR & Link Building", "Competitor Gap & Intent Analysis", "Content Silo & Schema Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $7,000+",
    faqs: [
      { question: "How long does it take for SEO campaigns to work?", answer: "While initial technical fixes can show improvements in rankings within 30 days, deep structural SEO and content momentum typically requires 4-6 months to materialize into significant revenue-driving organic traffic leaps." },
      { question: "How much do your SEO services cost?", answer: "Our standard SEO campaigns typically range between $2,000 and $7,000 per month, depending on the competitiveness of your industry, the scope of technical engineering required, and the volume of high-authority content and digital PR deliverables included in the strategy. Enterprise and national campaigns scale accordingly." }
    ]
  },
  {
    id: "local-seo",
    icon: <MapPin className="w-8 h-8 text-blue-500"/>,
    title: "Local SEO & Geofencing",
    shortDesc: "Capture foot traffic and local dominance when affluent customers search nearby.",
    desc: "Perfect for premium brick-and-mortar storefronts, luxury real estate, and regional clinics. We optimize your Google Business Profiles and employ geofenced targeting strategies to dominate regional visibility.",
    features: ["Google Business Profile Optimization", "Local Citation Building", "Hyper-local Content Strategy", "Location-based Schema Markup"],
    image: "https://images.unsplash.com/photo-1519500528741-2b62eb02029c?auto=format&fit=crop&q=80",
    priceRange: "$400 - $4,000+",
    faqs: [
      { question: "What is Geofencing?", answer: "Geofencing allows us to create virtual perimeters around specific locations (e.g. high-end country clubs, competing stores) to serve ads directly to mobile devices entering that perimeter." },
      { question: "What is the pricing for Local SEO management?", answer: "Local SEO initiatives usually range from $400 to $4,000+ per month depending on the number of physical locations managed and the density of the local competitive landscape. This covers ongoing citation building, review generation architectures, profile optimization, and localized content." }
    ]
  },
  {
    id: "ppc",
    icon: <Zap className="w-8 h-8 text-blue-500"/>,
    title: "Performance PPC",
    shortDesc: "Maximize ROI with hyper-targeted paid campaigns across premium ad networks.",
    desc: "Stop wasting ad spend and start acquiring aggressively. We engineer cross-network paid strategies spanning Google Ads, Bing, and elite publishers, ensuring your luxurious brand is always in front of the right eyes.",
    features: ["Search & Display Network Dominance", "Retargeting Infrastructure", "A/B Multivariate Testing", "Server-Side Conversion Tracking"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    priceRange: "$200 - $7,000+",
    faqs: [
      { question: "How quickly can I see results from PPC?", answer: "Unlike SEO which takes months to build momentum, PPC can generate highly targeted traffic and leads within the first 24 to 48 hours of campaign launch. However, true optimization and peak ROI usually materialize within the first 30 to 90 days as our engineers gather conversion data." },
      { question: "Do you primarily use Google Ads?", answer: "While Google Ads captures the highest volume of intent-based search traffic, we build true omnichannel acquisition systems. For luxury brands, we heavily utilize programmatic display, premium social (LinkedIn, elite Instagram), and specific high-end publisher networks alongside traditional search." },
      { question: "How do you prevent ad spend waste?", answer: "We implement exhaustive negative keyword lists before launch, utilize server-side conversion tracking to train the algorithms strictly on qualified leads (not just clicks), and apply vigorous audience exclusion lists to ensure your ads are only seen by your target demographic." },
      { question: "What is the minimum ad spend for working with your PPC agency?", answer: "The minimum ad spend for working with ZNAHA is between $200 – $7,000 per month. On average, PPC services cost $200 – $7,000 per month from an agency (36% of businesses). Costs include ad spend and the cost of management services. Agencies often charge for PPC campaign management services as a percentage of ad spend but may also charge a flat fee." },
      { question: "What is the minimum contract length for your PPC services?", answer: "The minimum contract length for ZNAHA's PPC services is six months." }
    ]
  },
  {
    id: "web-design",
    icon: <Globe className="w-8 h-8 text-blue-500"/>,
    title: "Web Design & Development",
    shortDesc: "Immersive, high-performance websites acting as the digital storefront for your brand.",
    desc: "Your website is your ultimate asset. We build bespoke UI/UX experiences, utilizing React and Next.js scale architectures to deliver blistering speed and immersive 3D/WebGL experiences that captivate high-net-worth users.",
    features: ["Bespoke UI/UX Design", "React & Next.js Architecture", "3D WebGL Experiences", "Performance & Speed Optimization"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $7,000+",
    faqs: [
      { question: "Do you build custom CMS solutions?", answer: "We leverage headless architectures perfectly synced with headless CMS systems (like Sanity or Contentful) allowing endless scale and security without the bloat of traditional monoliths." },
      { question: "How much does a custom website cost?", answer: "High-performance web design and development projects typically range from $2,000 to $7,000+. The exact investment is determined by the total number of unique page templates, custom database integrations, CMS complexity, and bespoke motion/3D functionality." }
    ]
  },
  {
    id: "social-media",
    icon: <MessageSquare className="w-8 h-8 text-blue-500"/>,
    title: "Social Media & Influencer Styling",
    shortDesc: "Curated presences building brand equity and engaging affluent demographics.",
    desc: "Standard social media doesn't work for luxury. It requires curation. We orchestrate premium content production, influencer brokering, and rigorous community management to defend and elevate your brand's standing on Instagram, TikTok, and LinkedIn.",
    features: ["Platform Strategy & Brand Voicing", "High-End Content Production", "Community Sentiment Management", "Exclusive Influencer Partnerships"],
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80",
    priceRange: "$1,500 - $5,000+",
    faqs: [
      { question: "How do you handle influencer marketing?", answer: "We bypass micro-influencer spam and exclusively broker relationships with high-alignment tastemakers who possess genuine trust with affluent demographics." },
      { question: "What are your social media management fees?", answer: "Comprehensive social media management generally spans $1,500 to $5,000+ per month. This fee structure scales based on the volume of original creative production required, the number of networks managed, community moderation intensity, and influencer brokering requirements." }
    ]
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="w-8 h-8 text-blue-500"/>,
    title: "E-Commerce Optimization",
    shortDesc: "Maximize revenue per user across global online luxury and retail storefronts.",
    desc: "Every fraction of a second costs dollars. We architect and optimize premium Shopify Plus and headless commerce platforms to remove friction, enhance the luxury cart experience, and maximize Lifetime Value.",
    features: ["Shopify Plus Customization", "Headless Commerce Architecture", "Cart Abandonment Engineering", "Dynamic Pricing Strategy"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $7,000+",
    faqs: [
      { question: "What platforms do you work with?", answer: "We exclusively specialize in Shopify Plus, BigCommerce Enterprise, and bespoke React/Next.js headless frontends backed by robust e-commerce APIs." },
      { question: "What is the typical investment for E-Commerce solutions?", answer: "Full-scale E-commerce website builds and migrations range broadly from $2,000 to over $7,000+. Ongoing E-commerce Optimization and Conversion retainers run between $1,500 and $7,000+ per month focused purely on increasing average-order-value (AOV) and conversion speed." }
    ]
  },
  {
    id: "content-email",
    icon: <Mail className="w-8 h-8 text-blue-500"/>,
    title: "Content & Email Marketing",
    shortDesc: "Engage your prospect list with high-value narrative emails and thought leadership.",
    desc: "Your email list is your most valuable owned asset. We craft multi-touch drip campaigns, high-end newsletters, and thought-leadership articles that consistently funnel affluent prospects back into the purchase cycle.",
    features: ["Automated Drip Architectures", "High-End Newsletter Curation", "Thought Leadership Content Hubs", "List Segmentation & Hygiene"],
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80",
    priceRange: "$300 - $7,000+",
    faqs: [
      { question: "Do you provide copywriting?", answer: "Yes, our team of dedicated luxury copywriters tailors the narrative voice to perfectly match your brand's sophisticated tone." },
      { question: "What are the costs associated with Content & Email Marketing?", answer: "High-end content marketing strategy and execution generally ranges from $2,000 to $7,000 per month. Dedicated email marketing architectures (including campaign blasts, automated drip sequences, and list hygiene) range closely between $300 and $5,000 per month based on send volume and design complexity." }
    ]
  },
  {
    id: "amazon",
    icon: <Store className="w-8 h-8 text-blue-500"/>,
    title: "Amazon Marketing Services",
    shortDesc: "Protect your brand and dominate category sales within the Amazon ecosystem.",
    desc: "Amazon is the ultimate bottom-of-funnel engine. We provide A+ content creation, rigorous brand defense, and advanced Sponsored Advertising campaigns to secure your margin against counterfeiters and competitors.",
    features: ["Amazon SEO & A+ Content", "Sponsored Ads Management", "Brand Registry & Defense", "Inventory & Fulfillment Strategy"],
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80",
    priceRange: "$1,200 - $3,000+",
    faqs: [
      { question: "Why do I need a separate Amazon strategy?", answer: "Amazon operates as a closed-ecosystem search engine entirely different from Google. It requires specific listing optimization rules and ad-bidding logarithms to secure the Buy Box." },
      { question: "What is your pricing for Amazon Store Management?", answer: "Amazon Optimization and Sponsored Ads management retainers typically run between $1,200 and $3,000+ per month, independent of your actual Amazon ad spend budget. This includes constant Buy Box monitoring, A+ listing copywriting, and daily ad adjustments." }
    ]
  },
  {
    id: "cro",
    icon: <TrendingUp className="w-8 h-8 text-blue-500"/>,
    title: "Conversion Rate Optimization (CRO)",
    shortDesc: "Data-backed testing to turn traffic into high-value leads and sales.",
    desc: "Traffic is useless if it leaks out of the funnel. We use heat mapping, session recording, and split-variant testing to systematically eliminate friction points from the buyer's journey.",
    features: ["Heatmap & Session Analysis", "Checkout Friction Removal", "Landing Page Personalization", "Multivariate Split Testing"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $5,000+",
    faqs: [
      { question: "How long does a CRO test take?", answer: "Test velocity depends strictly on your site's traffic volume. For statistically significant results, high-traffic pages may yield insights weekly, whereas lower-volume pages may require 3-4 weeks." },
      { question: "What is the typical CRO retainer fee?", answer: "Enterprise-grade Conversion Rate Optimization programs generally range from $2,000 to $5,000+ per month. This covers rigorous A/B and multivariate split testing, UI/UX developer implementation hours, and heatmapping software costs." }
    ]
  },
  {
    id: "analytics",
    icon: <BarChart3 className="w-8 h-8 text-blue-500"/>,
    title: "Advanced Analytics",
    shortDesc: "Closed-loop reporting and marketing automation to track every dollar of ROI.",
    desc: "Know exactly what drives your growth. We build executive dashboards, integrate complex CRM pipelines, and employ advanced attribution modeling so you have absolute lucidity over your marketing data.",
    features: ["Custom Dashboard Engineering", "Server-Side Tracking Configuration", "Multi-Touch Attribution Modeling", "Salesforce/HubSpot CRM Integration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    faqs: [
      { question: "Do you help with GA4 migration?", answer: "Yes, our data engineers execute fully customized Google Analytics 4 setups, ensuring historical data continuity and custom event tracking tailored to luxury KPIs." },
      { question: "How much does custom Analytics infrastructure cost?", answer: "Complex analytics engineering (such as GA4 overhaul, bespoke Looker Studio dashboard creation, and Salesforce/HubSpot closed-loop integration) is typically scoped as custom one-time implementation projects starting between $3,000 and $5,000, scaling to the complexity of your data warehouse." }
    ]
  },
  {
    id: "digital-marketing-revenue",
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Digital Marketing That Drives Revenue®",
    shortDesc: "The complete, done-for-you digital growth framework that aligns every channel toward scaling top-line revenue.",
    desc: "Our flagship structural framework. We don't just run ads or tweak title tags—we build a bespoke, multi-channel engine incorporating organic, paid, and technical infrastructure to guarantee market dominance.",
    features: ["Full-Funnel Campaign Strategy", "Cross-Channel Synchronization", "Proprietary ROI Tracking", "Dedicated Growth Pods"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $7,000+",
    faqs: [
      { question: "What makes this different from hiring a standard agency?", answer: "We act as your outsourced Chief Revenue Officer. Every decision, across every channel, is fundamentally tied to an agreed-upon revenue target, not just clicks or impressions." },
      { question: "What is the cost for full-suite Digital Marketing That Drives Revenue®?", answer: "Comprehensive, multi-channel enterprise marketing retainers range from $2,000 to $7,000+ per month depending on your total ad spend, the number of active channels, and required engineering resources." }
    ]
  },
  {
    id: "omni-seo",
    icon: <Search className="w-8 h-8 text-blue-500" />,
    title: "OmniSEO® & Lead Generation",
    shortDesc: "An omnipresent approach to search visibility and high-value lead acquisition across all platforms.",
    desc: "Traditional SEO is dead. OmniSEO® ensures your brand dominates every facet of the search landscape, from traditional Google SERPs to AI-overviews and voice search, engineering a predictable inbound lead pipeline.",
    features: ["Omnichannel Search Dominance", "Zero-Click Intent Harvesting", "Inbound Lead Engineering", "AI-Powered Content Strategies"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    priceRange: "$3,000 - $7,000+",
    faqs: [
      { question: "What makes OmniSEO® different from regular SEO?", answer: "OmniSEO® goes beyond blue links. We optimize for AI search generative experiences (SGE), voice search, YouTube, and multi-platform visibility to completely blanket your industry's search intent." },
      { question: "How much does OmniSEO® cost?", answer: "OmniSEO® and Lead Generation retainers typically range from $3,000 to $7,000+ per month, heavily dependent on the competitive density of your target markets and required content velocity." }
    ]
  },
  {
    id: "revenue-marketing-cro",
    icon: <Coins className="w-8 h-8 text-blue-500" />,
    title: "Revenue Marketing & CRO",
    shortDesc: "Shift focus from vanity metrics to absolute revenue generation and conversion optimization.",
    desc: "We align your entire digital footprint with a single goal: closed-won revenue. By combining full-funnel marketing strategies with rigorous Conversion Rate Optimization (CRO), we multiply the value of every visitor.",
    features: ["Revenue-First Alignment", "A/B & Multivariate Testing", "Heatmap & UX Tracking", "Sales Funnel Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    faqs: [
      { question: "How quickly does CRO impact revenue?", answer: "With sufficient traffic, CRO adjustments can begin lifting conversion rates immediately after statistical significance is reached, often within 14-30 days." },
      { question: "What is the pricing for Revenue Marketing?", answer: "Revenue Marketing and ongoing Conversion Rate Optimization services generally start at $2,000/month and scale up to $7,000+/month for enterprise continuous-testing environments." }
    ]
  },
  {
    id: "ux-ai-services",
    icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
    title: "UX & AI Services",
    shortDesc: "Bleeding-edge web development powered by artificial intelligence and elite user experience design.",
    desc: "Web development that actually converts. We integrate AI-driven personalization, predictive analytics, and friction-free user experiences (UX) to create websites that act as your best digital sales rep.",
    features: ["Predictive AI Personalization", "Frictionless UX/UI Design", "Headless Web Development", "Generative AI Integrations"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    priceRange: "$2,000 - $7,000+",
    faqs: [
      { question: "How is AI integrated into web development?", answer: "We deploy AI for dynamic content personalization, real-time advanced chatbots, predictive search, and structural code optimization to deliver an adaptive experience for every unique visitor." },
      { question: "What is the cost of UX & AI Web Development?", answer: "Custom UX design and AI-integrated web development projects range from $2,000 for mid-market sites up to $7,000+ for enterprise headless commerce builds with integrated machine learning models." }
    ]
  },
  {
    id: "revenue-platform",
    icon: <Database className="w-8 h-8 text-blue-500" />,
    title: "Revenue Platform",
    shortDesc: "Deploying our proprietary infrastructure to close the loop between marketing and closed-won sales.",
    desc: "Stop guessing which campaigns drive revenue. Our Revenue Platform and analytics infrastructure integrates directly with your CRM to track prospects from the first click to the final contract signature.",
    features: ["Closed-Loop ROI Tracking", "CRM Bi-Directional Sync", "First-Party Data Activation", "Automated Lead Scoring"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    priceRange: "$900 - $7,000+",
    faqs: [
      { question: "Does the Revenue Platform integrate with Salesforce?", answer: "Yes. Our platform offers native bidirectional sync with Salesforce, HubSpot, Marketo, and most enterprise CRM/ERP solutions." },
      { question: "How much does the Revenue Platform integration cost?", answer: "Platform onboarding, data-warehouse syncing, and deep closed-loop CRM integrations typically require a one-time setup investment ranging from $4,000 to $7,000+, with ongoing SaaS/management fees starting at $900/month." }
    ]
  }
];
