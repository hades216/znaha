import { motion } from 'motion/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Target } from 'lucide-react';

const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
};

export function StrategyPage() {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    topic: service ? `Strategy Inquiry: ${service.toUpperCase()}` : `Strategy Session Inquiry`,
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email address';
    } else if ((name === 'firstName' || name === 'lastName') && value.trim().length < 2) {
      error = 'Must be at least 2 characters';
    } else if (name === 'message' && value.trim().length < 10) {
      error = 'Please provide more details (min 10 chars)';
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
    return `w-full bg-black/40 border rounded-xl px-4 py-3 placeholder-white/20 text-white focus:outline-none transition-all ${
      errors[name] 
        ? 'border-red-500 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
        : 'border-white/10 focus:border-yellow-500/50'
    }`;
  };

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Connect With Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white mb-6 tracking-tight">
            Initiate <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
              The Conversation.
            </span>
          </h1>
          <p className="text-lg text-gray-400 font-sans leading-relaxed">
            Ready to engineer digital dominance? Request a bespoke structural strategy session with our senior partners. We only onboard 3 new luxury clients per quarter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 item-start">
          
          {/* Form */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -mr-10 -mt-10 pointer-events-none" />
            
            {isSubmitted ? (
               <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-16">
                 <div className="w-20 h-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-6 border border-yellow-500/50">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4">Request Logged.</h3>
                 <p className="text-gray-400">Our partners will review your objectives and contact you within boundaries of 2 business hours to schedule your strategy session.</p>
               </div>
            ) : (
              <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={getInputClass('firstName')} 
                      placeholder="James" 
                    />
                    {errors.firstName && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.firstName}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={getInputClass('lastName')} 
                      placeholder="Stirling" 
                    />
                    {errors.lastName && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={getInputClass('email')} 
                    placeholder="james@luxurybrand.com" 
                  />
                  {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Company / Brand</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={getInputClass('company')} 
                    placeholder="E.g. Vanguard Estates" 
                  />
                  {errors.company && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.company}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Inquiry Topic</label>
                  <input 
                    type="text" 
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className={getInputClass('topic')} 
                    placeholder="What are you looking to achieve?" 
                  />
                  {errors.topic && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.topic}</span>}
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Message details</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={getInputClass('message')} 
                    placeholder="Share revenue goals, current bottlenecks, or specific services required..." 
                  />
                  {errors.message && <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest mt-1">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-4 bg-yellow-500 text-black font-bold text-sm tracking-wider uppercase py-4 rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex justify-center items-center gap-2"
                >
                  Request Private Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details side */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}
            className="flex flex-col gap-12 lg:pt-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Direct Channels.</h3>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                For immediate press inquiries or urgent campaigns, bypass the form and reach out directly to our routing desk.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors bg-white/5 text-yellow-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email</p>
                    <a href="mailto:hello@znaha.agency" className="text-lg font-medium hover:text-yellow-500 transition-colors tracking-wide">hello@znaha.agency</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors bg-white/5 text-yellow-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Phone</p>
                    <a href="tel:+12125550199" className="text-lg font-medium hover:text-yellow-500 transition-colors tracking-wide">+1 (212) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors bg-white/5 text-yellow-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Global HQ</p>
                    <p className="text-lg font-medium tracking-wide">1 World Trade Center, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Target className="w-24 h-24" />
               </div>
               <h4 className="font-bold text-white mb-2 relative z-10">Why limit to 3 clients?</h4>
               <p className="text-sm text-gray-400 relative z-10 leading-relaxed">
                 We build dedicated tactical pods for every account. Quality density requires resource focus. We don't stretch our senior talent across dozens of accounts.
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
