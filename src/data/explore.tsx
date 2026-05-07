import React from "react";
import { TrendingUp, BarChart, Server, Zap, Search, Target, BookOpen } from 'lucide-react';

export const exploreData = {
  'explore-trends': {
    title: 'Digital Marketing Trends',
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    intro: 'Stay ahead of the curve. The luxury digital landscape moves fast, and resting on past success is a guaranteed path to obsolescence.',
    sections: [
      {
        heading: 'AI-Driven Personalization',
        text: 'Mass marketing is dead. Affluent buyers expect hyper-personalized experiences driven by complex machine learning algorithms that adapt to their preferences in real-time.'
      },
      {
        heading: 'The Death of the Cookie',
        text: 'With third-party data vanishing, zero-party and first-party data strategies are now paramount. Building proprietary audiences is the only way to safeguard your marketing ROI.'
      }
    ]
  },
  'explore-geo': {
    title: 'Generative Engine Optimization',
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    intro: 'Traditional SEO optimized for crawling bots. GEO optimizes for Generative AI engines like ChatGPT, Gemini, and Google SGE.',
    sections: [
      {
        heading: 'Understanding LLM Citations',
        text: 'Generative engines synthesize answers from trusted entities. To rank, your brand must be recognized as a factual authority, not just a keyword-dense domain.'
      },
      {
        heading: 'Restructuring Knowledge Graphs',
        text: 'We help brands build robust schema architectures and digital PR footprints that feed directly into the training data of major LLMs, ensuring your brand is the definitive answer.'
      }
    ]
  },
  'explore-status': {
    title: 'HTTP Status Codes',
    icon: <Server className="w-8 h-8 text-yellow-500" />,
    intro: 'Technical SEO begins at the server level. Ignoring standard HTTP status codes can bleed your crawl budget and devastate your organic visibility.',
    sections: [
      {
        heading: '200 OK vs 301 Redirects',
        text: 'Permanent redirects preserve link equity, while temporary (302) redirects do not. We rigorously audit server responses to prevent authority leakage.'
      },
      {
        heading: 'Eradicating 404s and Soft 404s',
        text: 'Dead pages frustrate high-net-worth users and signal poor maintenance to search engines. We implement intelligent 404 monitoring and custom fallback routing.'
      }
    ]
  },
  'explore-seo-digital': {
    title: 'SEO in Digital Marketing',
    icon: <Search className="w-8 h-8 text-yellow-500" />,
    intro: 'SEO is not an isolated tactic; it is the foundational infrastructure of a comprehensive digital marketing ecosystem.',
    sections: [
      {
        heading: 'Synergy with Paid Acqusition',
        text: 'Organic traffic informs paid keyword strategies, while PPC data accelerates organic content targeting. Together, they create a dominant search monopoly.'
      },
      {
        heading: 'Content as a Capital Asset',
        text: 'Unlike ad spend which vanishes, high-quality SEO content compounds over time, continuously generating high-intent leads without ongoing acquisition costs.'
      }
    ]
  },
  'explore-seo-sem': {
    title: 'SEO vs. SEM',
    icon: <Target className="w-8 h-8 text-yellow-500" />,
    intro: 'The battle for the SERP. Understanding when to buy visibility and when to build it.',
    sections: [
      {
        heading: 'The Sprint vs The Marathon',
        text: 'SEM (Search Engine Marketing / paid ads) delivers immediate, surgical strikes of traffic. SEO builds long-term, compounding authority. Elite brands require both.'
      },
      {
        heading: 'Cost-Per-Acquisition Balancing',
        text: 'By blending SEM for high-conversion bottom-funnel terms with SEO for top-funnel research queries, we drastically reduce your blended Cost-Per-Acquisition (CPA).'
      }
    ]
  },
  'explore-roas': {
    title: 'Return on Ad Spend',
    icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    intro: 'ROAS is the ultimate arbiter of truth in digital advertising. If it does not drive profitable revenue, it is cut.',
    sections: [
      {
        heading: 'Moving Beyond Vanity Metrics',
        text: 'Clicks, impressions, and engagement rates are secondary. We judge campaign success strictly on the ratio of closed-won revenue to media spend.'
      },
      {
        heading: 'Predictive LTV Modeling',
        text: 'We optimize ad spend not just for the first purchase, but against the predictive Lifetime Value (LTV) of the customer, allowing us to outbid competitors for the most valuable prospects.'
      }
    ]
  },
  'explore-playbook': {
    title: 'Revenue Marketing Playbook',
    icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
    intro: 'The definitive framework for aligning sales and marketing toward a singular goal: explosive top-line growth.',
    sections: [
      {
        heading: 'Breaking Down Silos',
        text: 'Marketing generates demand; sales closes it. But without a closed-loop data architecture, neither team operates efficiently. We bridge the gap.'
      },
      {
        heading: 'The Revenue Playbook',
        text: 'This proprietary playbook outlines exact methodologies for lead scoring, automated nurturing, and full-funnel attribution that elite firms use to scale.'
      }
    ]
  }
};
