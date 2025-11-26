import React from 'react';
import { Twitter, Github, Linkedin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <span className="text-xl font-display font-bold text-white">Aether</span>
            </div>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed">
              Designing the future of digital interfaces. Join us in creating a world where software feels like magic.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Privacy'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2024 Aether UI. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;