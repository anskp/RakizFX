import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Headset, Zap, Activity } from 'lucide-react';
import CardSwap, { Card } from './ui/CardSwap';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const trustItems = [
  { icon: ShieldCheck, title: 'Regulated Broker', sub: 'Multi-license security' },
  { icon: Zap, title: 'Tier-1 Execution', sub: 'Deep market access' },
  { icon: Building2, title: 'Segregated Funds', sub: 'Top-tier bank protection' },
  { icon: Activity, title: 'Raw Pricing', sub: 'Institutional liquidity' },
  { icon: Headset, title: '24/7 Support', sub: 'Multi-lingual team' },
];

export function TrustBar() {
  return (
    <div className="bg-[#052410] border-y border-white/5 py-10">
      <div className="max-w-[1400px] mx-auto px-12 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between gap-16 min-w-max">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <div className="text-primary">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white text-[11px] font-black uppercase tracking-widest leading-none mb-1">{item.title}</div>
                <div className="text-zinc-600 text-[9px] uppercase tracking-[0.2em]">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const marketCards = [
  {
    title: 'Forex Assets',
    desc: '60+ major and exotic currency pairs with high-frequency liquidity.',
    stat: '0.0 pips',
    icon: 'FX',
  },
  {
    title: 'Precious Metals',
    desc: 'XAU & XAG indicators with architectural pricing precision.',
    stat: '0.15 pips',
    icon: 'AU',
  },
  {
    title: 'Global Indices',
    desc: 'Top 50 global equity indices with institutional foresight.',
    stat: '0.4 pts',
    icon: 'IDX',
  },
  {
    title: 'Digital Liquidity',
    desc: 'BTC & ETH derivative markets for the modern equity narrative.',
    stat: '$0.50',
    icon: 'BTC',
  },
];

export function Markets() {
  const stats = [
    { val: '$12.5B', lab: 'Average Daily Volume', sub: 'Institutional Liquidity' },
    { val: '40ms', lab: 'Average Execution', sub: 'Low-Latency Infrastructure' },
    { val: '800k+', lab: 'Active Terminals', sub: 'Global Client Base' },
    { val: '24/7', lab: 'Market Access', sub: 'Multi-Asset Support' },
  ];

  return (
    <section id="markets" className="py-40 bg-white flex flex-col items-center overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-12 w-full relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase font-black tracking-[0.6em] text-zinc-400 mb-6"
          >
            Asset Ecosystem
          </motion.div>
          <h2 className="text-5xl md:text-7xl text-black leading-[0.85] uppercase mb-6">
            Institutional Access to <br/>
            500+ Global Instruments
          </h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Diversify your equity with core access to major markets across Forex, Indices, and Commodities through a refined prime account.
          </p>
        </div>

        {/* Bento Grid Markets - Exact Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[200px]">
          {/* 1. Gold & Metals - Top Left Wide (Col 1-2, Row 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#FBF9F6] border border-black/5 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl text-black uppercase font-black tracking-tight drop-shadow-sm">Gold & Metals</h3>
            </div>
            
            {/* Transparent Gold Image */}
            <div className="absolute right-0 bottom-0 translate-x-0 -translate-y-1 w-48 h-48 opacity-100 z-0 pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]">
              <img src="/assets/golddddd.png" alt="Gold" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* 2. Energies - Top Middle Square (Col 3, Row 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-nn/5 border border-nn/10 rounded-3xl p-8 flex flex-col justify-between group"
          >
            <div className="w-10 h-10 rounded-xl bg-nn/20 flex items-center justify-center text-nn">
              <Zap size={20} />
            </div>
            <div>
              <h3 className="text-sm text-black uppercase mb-1">Energies</h3>
              <div className="text-nn font-bold text-sm">0.03</div>
            </div>
          </motion.div>

          {/* 3. Indices - Tall Card (Col 4, Row 1-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:row-span-2 rounded-3xl p-8 flex flex-col relative overflow-hidden"
          >
            <img src="/assets/indices (2).png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Indices" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-nn flex items-center justify-center text-dk mb-auto shadow-lg">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl text-white uppercase mb-2 drop-shadow-lg font-bold">Indices</h3>
                <div className="text-nn font-black text-3xl drop-shadow-lg">0.4</div>
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mt-4 drop-shadow-md">Global Access</p>
              </div>
            </div>
          </motion.div>

          {/* 4. Crypto - Tall Card (Col 5, Row 1-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-zinc-900 rounded-3xl p-8 flex flex-col group relative overflow-hidden"
          >
            <img src="/assets/Classic Bitcoin Symbol.jpg" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Crypto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-nn flex items-center justify-center text-dk mb-auto shadow-lg">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl text-white uppercase mb-2 drop-shadow-lg font-bold">Crypto</h3>
                <div className="text-nn font-black text-3xl drop-shadow-lg">$0.50</div>
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mt-4 drop-shadow-md">24/7 Trade</p>
              </div>
            </div>
          </motion.div>

          {/* 5. Forex - Big Card (Col 1-2, Row 2-3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-zinc-950 rounded-[40px] p-10 flex flex-col justify-center group relative overflow-hidden"
          >
            <img src="/assets/trader-bg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" alt="Forex" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-5xl text-white uppercase mb-6">Forex Core</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-nn" />
                <span className="text-nn font-black text-4xl">0.0 pips</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">Direct institutional liquidity with millisecond execution.</p>
            </div>
          </motion.div>

          {/* 6. Commodities - Square Card (Col 3, Row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <img src="/assets/oil and investments.jpg" className="absolute inset-0 w-full h-full object-cover z-0" alt="Commodities" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none" />
            
            <div className="relative z-10 text-nn font-black text-xl drop-shadow-lg">0.04</div>
            <div className="relative z-10">
              <h3 className="text-sm text-white uppercase font-bold drop-shadow-lg">Commodities</h3>
            </div>
          </motion.div>

          {/* 7. Shares - Square Card (Col 3, Row 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <img src="/assets/share.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Shares" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none" />
            <div className="relative z-10 text-nn font-black text-xl drop-shadow-lg">0.01</div>
            <div className="relative z-10">
              <h3 className="text-sm text-white uppercase font-bold drop-shadow-lg">Shares</h3>
            </div>
          </motion.div>

          {/* 8. ETFs - Wide Card (Col 4-5, Row 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-zinc-950 rounded-3xl p-10 flex items-center justify-between group relative overflow-hidden"
          >
            <img src="/assets/app-ref.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="ETFs" />
            <div className="relative z-10 w-full flex items-center justify-between">
              <div>
                <h3 className="text-2xl text-white uppercase">ETFs CFDs</h3>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Diversified Markets</p>
              </div>
              <div className="text-nn font-black text-3xl">0.10</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
