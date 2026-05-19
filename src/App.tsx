import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Markets } from './components/Markets';
import { PowerfulPlatforms } from './components/PowerfulPlatforms';
import { TradingViewMarkets } from './components/TradingViewMarkets';
import { MarketGrowth } from './components/MarketGrowth';
import { AccountTypes } from './components/AccountTypes';
import { CopyTrading } from './components/CopyTrading';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { TradersSay } from './components/TradersSay';
import TradingEcologyPage from './pages/TradingEcologyPage';
import TradingPage from './pages/TradingPage';
import MarketPage from './pages/MarketPage';
import CompanyPage from './pages/CompanyPage';
import PartnersPage from './pages/PartnersPage';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the element is rendered before we try to scroll
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; // Account for fixed navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Markets />
      <TradingViewMarkets />
      {/* <PowerfulPlatforms /> Hidden for now as requested */}
      <CopyTrading />
      <AccountTypes />
      <MarketGrowth />
      <TrustSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-dk text-tx selection:bg-nn/20 selection:text-nn">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trading-ecology" element={<TradingEcologyPage />} />
            <Route path="/trading" element={<TradingPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Routes>
        </main>

        <TradersSay />
        <Footer />
      </div>
    </Router>
  );
}
