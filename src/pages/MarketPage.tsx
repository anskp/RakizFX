import React from 'react';
import { Ticker } from '../components/Ticker';
import { TrustBar, Markets } from '../components/Markets';

export default function MarketPage() {
  return (
    <div className="bg-black min-h-screen pt-32">
      <div className="text-center px-6 mb-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">Global Markets</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Access thousands of CFDs across indices, ETFs, and forex with raw liquidity.
        </p>
      </div>
      
      <Ticker />
      <TrustBar />
      <Markets />
    </div>
  );
}
