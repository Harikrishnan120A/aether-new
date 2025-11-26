import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;