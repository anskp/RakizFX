import React from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, ShieldCheck, Wallet, ArrowRight, UserPlus } from 'lucide-react';

const traders = [
  {
    name: 'Alexander K.',
    strategy: 'Forex · Swing · 14mo',
    profit: '+24.3%',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80'
  },
  {
    name: 'Sarah M.',
    strategy: 'Gold · Scalp · 9mo',
    profit: '+31.8%',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80'
  },
  {
    name: 'Wei L.',
    strategy: 'Indices · Intraday · 20mo',
    profit: '+16.5%',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'
  },
  {
    name: 'Priya R.',
    strategy: 'Crypto · Position · 6mo',
    profit: '+42.1%',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80'
  }
];

export function CopyTrading() {
  return (
    <section id="copy-trading" className="py-32 bg-dk relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        
        {/* First: Centered Heading */}
        <div className="text-center mb-20">
          <div className="text-nn font-black text-[10px] uppercase tracking-[0.4em] mb-6">Social Ecosystem</div>
          <h2 className="text-5xl md:text-7xl text-white leading-[0.95] uppercase mb-8 max-w-4xl mx-auto">
            Top Traders. <br/>
            <span className="text-nn">Copy Their Profits.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-medium max-w-2xl mx-auto">
            Choose from verified strategy managers, set your risk, and let their trades work for you. Perfect for both beginners and experienced managers looking for PAMM/MAM solutions.
          </p>
        </div>

        {/* Second: Big Centered Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto mb-16 -mt-24"
        >
          <div className="absolute inset-0 bg-nn/10 blur-[150px] rounded-full scale-90 opacity-40" />
          <div className="relative z-10">
            <img 
              src="/assets/copy-trading.png" 
              alt="Copy Trading Terminal" 
              className="w-full h-auto object-cover drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
            />
          </div>
        </motion.div>

        {/* Third: Trader Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {traders.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-nn/5 rounded-2xl p-4 group hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-xl object-cover mb-2" />
                <h4 className="text-white text-xs font-bold tracking-tight mb-0.5">{t.name}</h4>
                <p className="text-[9px] text-zinc-500 font-medium mb-3">{t.strategy}</p>
                
                <div className="w-full h-px bg-white/5 mb-3" />
                
                <div className="text-nn font-black text-lg mb-0.5">{t.profit}</div>
                <div className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-4">30d Return</div>
                
                <button className="w-full bg-nn text-dk font-bold px-3 py-2 rounded-lg text-[9px] uppercase tracking-widest transition-all hover:bg-nnl">
                  Copy Trader
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-20 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <ShieldCheck size={20} className="text-nn" />
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">MAM / PAMM Support</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <TrendingUp size={20} className="text-nn" />
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Real-time Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
