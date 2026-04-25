import { motion } from 'motion/react';
import { Shield, Clock, Eye, Lock } from 'lucide-react';

const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
};

export function PrivacyPage() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-yellow-500" />,
      title: "Data Collection",
      content: "We collect only what is necessary to optimize your brand's growth journey. This includes engagement metrics, interaction patterns, and voluntarily provided strategic details."
    },
    {
      icon: <Lock className="w-6 h-6 text-yellow-500" />,
      title: "Elite Security",
      content: "Your intellectual property and campaign data are protected by industry-standard encryption protocols. We maintain strict compartmentalization of client information."
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "GDPR Compliance",
      content: "We fully respect your rights under GDPR. You have the right to access, rectify, or erase your data from our systems at any moment."
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "Retention Policy",
      content: "Data is retained only as long as required to fulfill our consulting obligations or until you request its removal from the ZNAHA ecosystem."
    }
  ];

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <Shield className="w-4 h-4 text-yellow-500" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Protocol</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white mb-8 tracking-tight">
            Privacy Policy & <br />
            <span className="text-yellow-500">Data Architecture.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-serif mb-12 border-l-4 border-yellow-500 pl-8">
            At ZNAHA, privacy is not just a regulatory hurdle—it is a core pillar of our professional integrity. We engineer our tracking systems to be as transparent as they are powerful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="mb-6">{section.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="prose prose-invert prose-yellow max-w-none text-gray-400"
        >
          <h2 className="text-white">Detailed Information Handling</h2>
          <p>
            This website uses cookies and similar tracking technologies to monitor user-flow and identify optimization opportunities for our marketing frameworks. Non-essential cookies are only deployed with your explicit consent.
          </p>
          <p>
            When you request a strategy or engage with our concierge, your information is processed through our secure Revenue Platform. We do not sell user data to third-party brokers.
          </p>
          <p>
            For any inquiries regarding your data within the ZNAHA ecosystem, please contact our privacy partners at <span className="text-yellow-500">privacy@znaha.digital</span>.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
