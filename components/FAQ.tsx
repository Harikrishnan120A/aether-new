import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What makes Aether different from other UI frameworks?",
    answer: "Aether is purpose-built for glassmorphism, with every component optimized for backdrop blur performance. Unlike generic frameworks, we focus exclusively on creating depth, translucency, and modern aesthetics while maintaining 60fps across all devices."
  },
  {
    question: "Is Aether compatible with React, Vue, and other frameworks?",
    answer: "Yes! Aether provides framework-agnostic components that work seamlessly with React, Vue, Angular, Svelte, and vanilla JavaScript. We also offer dedicated packages with framework-specific optimizations."
  },
  {
    question: "How does the pricing work?",
    answer: "Our Starter plan is completely free forever with basic features. Pro ($29/mo) unlocks advanced components and priority support. Enterprise ($99/mo) includes custom solutions, dedicated support, and unlimited everything. Annual plans save you 20%."
  },
  {
    question: "What kind of performance can I expect?",
    answer: "Aether is optimized for maximum performance. Our glassmorphism effects use GPU-accelerated transforms and carefully tuned blur values. We guarantee 60fps on modern browsers and graceful degradation on older devices. All components are tree-shakeable and lazy-loadable."
  },
  {
    question: "Do you provide design files?",
    answer: "Absolutely! Pro and Enterprise plans include Figma, Sketch, and Adobe XD design kits with all components, complete with auto-layout, variants, and detailed documentation. Perfect for design-to-code workflows."
  },
  {
    question: "What browsers are supported?",
    answer: "Aether supports all modern browsers including Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+. We provide fallbacks for older browsers where backdrop-filter isn't supported, ensuring your UI looks great everywhere."
  },
  {
    question: "Can I customize the glass effects?",
    answer: "Yes! Every component exposes customizable props for blur intensity, opacity, border colors, and gradients. We also provide CSS variables and SCSS mixins for advanced theming. You have complete control over the aesthetic."
  },
  {
    question: "Is there a trial period?",
    answer: "All plans come with a 14-day free trial, no credit card required. You can explore all features, test performance, and integrate with your projects risk-free. Cancel anytime during the trial with zero charges."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about Aether Glass UI. Still have questions? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus-ring"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-white text-lg pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
