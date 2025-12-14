import React, { useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BuildingSpace from './components/BuildingSpace';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [showBuildingSpace, setShowBuildingSpace] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <Background />
      <CustomCursor />
      
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <main id="main-content">
        <Hero onStartBuilding={() => setShowBuildingSpace(true)} />
        {showBuildingSpace && <BuildingSpace />}
        <Features />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;