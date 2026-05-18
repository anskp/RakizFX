import React from 'react';
import { MarketGrowth } from '../components/MarketGrowth';
import { TradingViewMarkets } from '../components/TradingViewMarkets';
import { CopyTrading } from '../components/CopyTrading';

export default function TradingPage() {
  return (
    <div className="bg-black min-h-screen pt-32">
      <div className="text-center px-6 mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">Execution Infrastructure</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Explore our powerful trading tools, platforms, and deep liquidity pools.
        </p>
      </div>
      
      <MarketGrowth />
      <TradingViewMarkets />
      <CopyTrading />
    </div>
  );
}
