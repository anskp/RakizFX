import React from 'react';
import { AccountTypes } from '../components/AccountTypes';
import { TrustSection } from '../components/TrustSection';

export default function AccountPage() {
  return (
    <div className="bg-[#0B120E] min-h-screen pt-32">
      <div className="text-center px-6 mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">Institutional Grade Accounts</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Tailored conditions for every trader. Raw spreads, deep liquidity, and VIP perks.
        </p>
      </div>
      
      <AccountTypes />
      <TrustSection />
    </div>
  );
}
