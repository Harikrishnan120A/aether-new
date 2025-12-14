import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HeroProps {
  onStartBuilding: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartBuilding }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cardRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]), springConfig);
  const cardRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-200">v2.0 is now live</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 drop-shadow-sm">
              Experience the <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Future of Glass
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Craft stunning interfaces with depth, blur, and translucency. Aether provides the ultimate design system for next-generation web applications.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <motion.button
                onClick={() => {
                  onStartBuilding();
                  setTimeout(() => {
                    const buildingSection = document.getElementById('building');
                    buildingSection?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-lg shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-10px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group focus-ring cursor-pointer"
              >
                Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> No credit card required</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> 14-day free trial</span>
            </div>
          </motion.div>

          {/* Floating Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:w-1/2 relative lg:h-[600px] w-full flex items-center justify-center perspective-1000">
            {/* Background Decor Elements */}
            <div className="absolute top-1/4 right-0 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

            {/* Main Dashboard Card */}
            <motion.div
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="transform-gpu"
            >
            <GlassCard className="w-full max-w-md aspect-[4/3] p-6 animate-float relative z-20">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="h-2 w-20 bg-white/20 rounded-full" />
              </div>

              {/* Fake Chart */}
              <div className="flex items-end justify-between h-32 gap-2 mb-8">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-cyan-500/50 to-purple-500/50 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>

              {/* Fake List */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-8 h-8 rounded-lg bg-white/10" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                      <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            </motion.div>

            {/* Floating Widget 1 */}
            <GlassCard className="absolute -left-4 top-20 p-4 w-48 animate-float-delayed z-30" intensity="high">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                  <span className="font-bold text-white">98</span>
                </div>
                <div>
                  <div className="text-xs text-white/60">Performance</div>
                  <div className="font-bold text-white">Excellent</div>
                </div>
              </div>
            </GlassCard>

            {/* Floating Widget 2 */}
            <GlassCard className="absolute -right-8 bottom-32 p-4 w-40 animate-float z-30" intensity="high">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-white/60">Revenue</span>
                 <span className="text-xs text-green-400">+24%</span>
               </div>
               <div className="text-xl font-bold text-white">$42,800</div>
               <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                 <div className="bg-green-400 h-1 rounded-full w-3/4 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
               </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;