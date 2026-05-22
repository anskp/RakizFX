import React from 'react';
import { AccountTypes } from '../components/AccountTypes';
import { TrustSection } from '../components/TrustSection';

export default function AccountPage() {
  return (
    <div className="bg-[#0B120E] min-h-screen pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="text-center px-6 mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-[clamp(3.5rem,4vw,4.5rem)] font-bold text-white mb-6 uppercase tracking-tighter">Institutional Grade Accounts</h1>
        <p className="text-zinc-400 text-sm md:text-base lg:text-[clamp(1.125rem,1.5vw,1.25rem)] max-w-2xl mx-auto">
          Tailored conditions for every trader. Raw spreads, deep liquidity, and VIP perks.
        </p>
      </div>
      
      <AccountTypes />
      <TrustSection />
    </div>
  );
}
