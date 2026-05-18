import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Monitor } from 'lucide-react';



export function MarketGrowth() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase leading-[0.85]">
            Grow your portfolio <span className="text-primary font-normal italic">with a platform that fits your strategy</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Invest in Gold, NVIDIA, Microsoft, Apple, Vanguard, S&P 500 ETF, and more
          </p>
        </div>



        {/* Promo Card */}
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0A1A0A] border border-white/5 p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 group shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[150px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-8 justify-center md:justify-start">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden p-1">
                  <img src="/assets/mt5_icon.jpg" alt="MT5" className="w-full h-full object-contain rounded-lg" />
               </div>
               <div className="text-[10px] uppercase font-black tracking-[0.6em] text-primary">Execution Infrastructure</div>
            </div>
            
            <h3 className="text-3xl md:text-5xl text-white mb-8 leading-[0.85] uppercase">
              Powerful Platforms. <br/><span className="text-nn mt-3 block">Built for Performance.</span>
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed mx-auto md:mx-0">
              MetaTrader 5 — the industry standard, powered by RakizFx. Capture every opportunity with institutional-grade tools.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows" className="w-4 h-4 brightness-0 invert" />
                Windows
              </button>
              <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-[14px] h-[14px]" />
                Mac / iOS
              </button>
              <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-[16px] h-[16px] brightness-0 invert" />
                Android
              </button>
            </div>
          </div>

          <div className="flex-1 relative mt-12 md:mt-0 flex justify-center lg:justify-end">
             <div className="relative w-full lg:w-[130%] lg:translate-x-32">
                <div className="absolute inset-0 bg-nn/20 blur-[150px] scale-95 opacity-40" />
                <img 
                  src="/assets/phone_trade.png" 
                  alt="TradingView App" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_80px_160px_rgba(0,0,0,0.7)] transition-transform duration-1000 group-hover:scale-[1.03]" 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
