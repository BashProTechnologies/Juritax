
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatesBar } from './components/RatesBar';
import { ProductSection } from './components/ProductSection';
import { ToolSection } from './components/ToolSection';
import { TeamSection } from './components/TeamSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CertificateSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <RatesBar />
        <ProductSection />
        <ToolSection />
        <TeamSection />
        <PortfolioSection />
        <CertificateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
