import React from 'react';
import GlassCard from './GlassCard';
import { Layers, Zap, Shield, Globe, Cpu, Palette } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-6 h-6 text-purple-200" />,
    color: "from-purple-500 to-indigo-500",
    title: "Multi-Layer Depth",
    description: "Create immersive experiences with unlimited Z-axis stacking and realistic blur interactions."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-200" />,
    color: "from-amber-500 to-orange-500",
    title: "Lightning Fast",
    description: "Optimized blur rendering ensuring silky smooth 60fps performance on all modern devices."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-200" />,
    color: "from-emerald-500 to-teal-500",
    title: "Enterprise Secure",
    description: "Bank-grade encryption protocols visualized through our transparent security layers."
  },
  {
    icon: <Palette className="w-6 h-6 text-pink-200" />,
    color: "from-pink-500 to-rose-500",
    title: "Adaptive Theming",
    description: "Colors that breathe. Our glass mesh system adapts dynamically to your brand palette."
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-200" />,
    color: "from-cyan-500 to-blue-500",
    title: "Global CDN",
    description: "Assets distributed worldwide for instant loading, no matter where your users are."
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-200" />,
    color: "from-blue-500 to-violet-500",
    title: "AI Powered",
    description: "Generative layout suggestions that automatically optimize your glass hierarchy."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Perfection</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every component is meticulously designed to balance aesthetic appeal with functional clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} hoverEffect={true} className="p-8 group cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;