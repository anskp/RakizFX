import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar, Markets } from './components/Markets';
import { PowerfulPlatforms } from './components/PowerfulPlatforms';
import { TradingViewMarkets } from './components/TradingViewMarkets';
import { MarketGrowth } from './components/MarketGrowth';
import { AccountTypes } from './components/AccountTypes';
import { CopyTrading } from './components/CopyTrading';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import TradingEcologyPage from './pages/TradingEcologyPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <TrustBar />
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
      <div className="min-h-screen bg-dk text-tx selection:bg-nn/20 selection:text-nn">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trading-ecology" element={<TradingEcologyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
