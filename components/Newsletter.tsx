import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 relative overflow-hidden" intensity="high">
            {/* Background Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                  Stay in the Loop
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Get the latest updates, design tips, and exclusive early access to new components. Join 10,000+ subscribers.
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      aria-label="Email address"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                    className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 focus-ring ${
                      status === 'success'
                        ? 'bg-green-500/20 border-2 border-green-400 text-green-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {status === 'loading' && (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Subscribing...
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Subscribed Successfully!
                      </>
                    )}
                    {status === 'idle' && (
                      <>
                        Subscribe Now
                        <Send className="w-5 h-5" />
                      </>
                    )}
                    {status === 'error' && 'Try Again'}
                  </motion.button>
                </form>

                <p className="text-xs text-slate-400 mt-4 text-center lg:text-left">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
