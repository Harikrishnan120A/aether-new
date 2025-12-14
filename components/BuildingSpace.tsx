import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Eye, Copy, Play, Save, Download } from 'lucide-react';
import GlassCard from './GlassCard';

const components = [
  { id: 'button', name: 'Button', icon: '🔘' },
  { id: 'card', name: 'Card', icon: '🎴' },
  { id: 'modal', name: 'Modal', icon: '📋' },
  { id: 'input', name: 'Input', icon: '📝' },
  { id: 'navbar', name: 'Navbar', icon: '🧭' },
  { id: 'hero', name: 'Hero Section', icon: '🎯' },
];

const BuildingSpace = () => {
  const [activeTab, setActiveTab] = useState<'design' | 'code' | 'preview'>('design');
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  const [glassProps, setGlassProps] = useState({
    opacity: 0.1,
    blur: 12,
    border: 1,
    shadow: 0.5,
  });

  const tabs = [
    { id: 'design' as const, label: 'Design', icon: Palette },
    { id: 'code' as const, label: 'Code', icon: Code2 },
    { id: 'preview' as const, label: 'Preview', icon: Eye },
  ];

  const generateCode = () => {
    return `<GlassCard className="p-6">
  <h3 className="text-xl font-semibold mb-2">
    ${selectedComponent.name}
  </h3>
  <p className="text-white/70">
    Custom glassmorphic component
  </p>
</GlassCard>

// Glassmorphism styles:
// opacity: ${glassProps.opacity}
// blur: ${glassProps.blur}px
// border: ${glassProps.border}px
// shadow: ${glassProps.shadow}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
  };

  return (
    <section id="building" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Build Your Vision
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Design, code, and preview glassmorphic components in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Component Library Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🧩</span>
                Components
              </h3>
              <div className="space-y-2">
                {components.map((component) => (
                  <motion.button
                    key={component.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedComponent(component)}
                    className={`w-full p-3 rounded-xl text-left transition-all flex items-center gap-3 ${
                      selectedComponent.id === component.id
                        ? 'bg-white/20 border-2 border-purple-400/50'
                        : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">{component.icon}</span>
                    <span className="font-medium">{component.name}</span>
                  </motion.button>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Main Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-9"
          >
            <GlassCard className="p-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Design Tab */}
              {activeTab === 'design' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Background Opacity: {glassProps.opacity}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={glassProps.opacity}
                        onChange={(e) =>
                          setGlassProps({ ...glassProps, opacity: parseFloat(e.target.value) })
                        }
                        className="w-full accent-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Blur Intensity: {glassProps.blur}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="24"
                        step="1"
                        value={glassProps.blur}
                        onChange={(e) =>
                          setGlassProps({ ...glassProps, blur: parseInt(e.target.value) })
                        }
                        className="w-full accent-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Border Width: {glassProps.border}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="4"
                        step="0.5"
                        value={glassProps.border}
                        onChange={(e) =>
                          setGlassProps({ ...glassProps, border: parseFloat(e.target.value) })
                        }
                        className="w-full accent-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Shadow Intensity: {glassProps.shadow}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={glassProps.shadow}
                        onChange={(e) =>
                          setGlassProps({ ...glassProps, shadow: parseFloat(e.target.value) })
                        }
                        className="w-full accent-purple-500"
                      />
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Live Preview</h4>
                    <div 
                      className="min-h-[300px] rounded-xl p-8 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: `rgba(255, 255, 255, ${glassProps.opacity})`,
                          backdropFilter: `blur(${glassProps.blur}px)`,
                          border: `${glassProps.border}px solid rgba(255, 255, 255, 0.2)`,
                          boxShadow: `0 8px 32px rgba(0, 0, 0, ${glassProps.shadow})`,
                        }}
                        className="p-8 rounded-2xl max-w-md"
                      >
                        <h3 className="text-2xl font-bold mb-2">{selectedComponent.name}</h3>
                        <p className="text-white/70">
                          This is a live preview of your glassmorphic component with customizable properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Code Tab */}
              {activeTab === 'code' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Generated Code</h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyCode}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-all"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </motion.button>
                  </div>
                  <pre className="bg-black/40 p-6 rounded-xl overflow-x-auto border border-white/10">
                    <code className="text-sm text-purple-300">{generateCode()}</code>
                  </pre>
                </motion.div>
              )}

              {/* Preview Tab */}
              {activeTab === 'preview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-semibold">Full Screen Preview</h4>
                  <div className="min-h-[500px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-8 flex items-center justify-center">
                    <div
                      style={{
                        backgroundColor: `rgba(255, 255, 255, ${glassProps.opacity})`,
                        backdropFilter: `blur(${glassProps.blur}px)`,
                        border: `${glassProps.border}px solid rgba(255, 255, 255, 0.2)`,
                        boxShadow: `0 8px 32px rgba(0, 0, 0, ${glassProps.shadow})`,
                      }}
                      className="p-12 rounded-3xl max-w-2xl w-full"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{selectedComponent.icon}</span>
                        <h3 className="text-3xl font-bold">{selectedComponent.name}</h3>
                      </div>
                      <p className="text-lg text-white/70 mb-6">
                        Experience the glassmorphic design in a full-screen preview. Perfect for
                        presentations and final reviews.
                      </p>
                      <div className="flex gap-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                          Primary Action
                        </button>
                        <button className="px-6 py-3 bg-white/10 rounded-xl font-medium hover:bg-white/20 transition-all">
                          Secondary
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <Play className="w-4 h-4" />
                  Run
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium flex items-center gap-2 transition-all"
                >
                  <Save className="w-4 h-4" />
                  Save
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Export
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSpace;
