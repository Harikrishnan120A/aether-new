import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for side projects and hobbyists.",
    features: ["5 Projects", "Basic Analytics", "Community Support", "1GB Storage"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "For professional developers and small teams.",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "20GB Storage", "Custom Domains", "API Access"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Scale your business with dedicated support.",
    features: ["Unlimited Everything", "Custom Solutions", "24/7 Phone Support", "Unlimited Storage", "SSO & Security", "Audit Logs"],
    highlight: false,
  }
];

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6">Simple, Transparent Pricing</h2>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors"
            >
              <div className={`w-6 h-6 rounded-full bg-cyan-400 shadow-lg transform transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-slate-400'}`}>
              Yearly <span className="text-cyan-400 text-xs ml-1 font-bold">-20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <GlassCard 
              className={`p-8 relative ${plan.highlight ? 'border-cyan-500/30 lg:-mt-8 lg:mb-8 z-10' : 'border-white/10'}`}
              intensity={plan.highlight ? 'high' : 'medium'}
              hoverEffect={true}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-bold text-white">${annual ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}</span>
                <span className="text-slate-400 mb-1">/mo</span>
              </div>

              <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-all ${
                plan.highlight 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Choose {plan.name}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;