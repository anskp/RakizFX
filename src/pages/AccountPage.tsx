import React from 'react';
import { motion } from 'motion/react';
import { AccountTypes } from '../components/AccountTypes';
import { TrustSection } from '../components/TrustSection';

export default function AccountPage() {
  return (
    <div className="bg-[#0B120E] min-h-screen pt-32">
      <div className="text-center px-6 mb-10">
        <h1 className="text-h1 text-white mb-6">
          {"PRECISION".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 150, damping: 25 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <br/>
          {"EXECUTION.".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 150, damping: 25 }}
              className={`inline-block ${letter !== '.' ? 'text-nn' : 'text-white'}`}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Tailored conditions for every trader. Raw spreads, deep liquidity, and VIP perks.
        </p>
      </div>
      
      <AccountTypes />
      <TrustSection />
    </div>
  );
}
