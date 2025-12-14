import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  intensity = 'medium'
}) => {
  const baseStyles = "relative overflow-hidden transition-all duration-500 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]";
  
  const intensityMap = {
    low: "bg-white/[0.05] backdrop-blur-[5px]",
    medium: "bg-white/[0.1] backdrop-blur-[12px]",
    high: "bg-white/[0.2] backdrop-blur-[20px]",
  };

  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-2 hover:shadow-[0_15px_40px_0_rgba(31,38,135,0.3)] hover:border-white/30 hover:bg-white/[0.15] group" 
    : "";

  return (
    <motion.div 
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${intensityMap[intensity]} ${hoverStyles} rounded-2xl ${className}`}>
      {/* Glossy sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;