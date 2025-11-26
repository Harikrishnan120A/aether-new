import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'Analytics', 'Testimonials', 'Pricing'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`
          flex items-center justify-between w-full max-w-6xl 
          backdrop-blur-xl border border-white/10 rounded-full px-8 
          transition-all duration-500
          ${scrolled ? 'bg-slate-900/60 shadow-lg py-3' : 'bg-white/5 py-4'}
        `}>
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Aether
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95">
              Sign In
            </button>
            <button className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </button>
            
            <button 
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 bg-slate-900/90 backdrop-blur-3xl transition-all duration-500 flex items-center justify-center
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center gap-8 p-6">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-white hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="mt-8 w-full max-w-xs px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;