import React from 'react';
import { motion } from 'motion/react';

export default function AnalysisPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen px-6 bg-black">
      <div className="max-w-[1400px] mx-auto text-center">
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
          Deep dive into market analysis and insights.
        </p>
      </div>
    </div>
  );
}
