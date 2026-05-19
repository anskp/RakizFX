import React from 'react';
import { motion } from 'motion/react';

export function MarketGrowth() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
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
            <h3 className="text-3xl md:text-5xl text-white mb-6 leading-tight uppercase font-black tracking-tight">
              Get <span className="text-[#00cfa7]">RakizFx MT5</span> <br/>on Your Preferred Platforms
            </h3>
            
            <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
              Access your RakizFx MT5 account across devices with a unified, secure experience. Stay connected to your market activity, insights, and portfolio context—anytime, anywhere.
            </p>

            <div className="text-[#00cfa7] text-sm font-semibold mb-10 tracking-wide">
              Available on iOS, Android, Windows, and macOS
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* App Store */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-950 border border-white/10 rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-lg hover:scale-[1.02]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5 brightness-0 invert" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Get it on</span>
                  <span className="text-sm font-bold text-white tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-950 border border-white/10 rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-lg hover:scale-[1.02]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-5 h-5 object-contain" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Get it on</span>
                  <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
                </div>
              </a>

              {/* macOS */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-950 border border-white/10 rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-lg hover:scale-[1.02]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5 brightness-0 invert" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Download for</span>
                  <span className="text-sm font-bold text-white tracking-tight">macOS</span>
                </div>
              </a>

              {/* Windows */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-950 border border-white/10 rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-lg hover:scale-[1.02]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows" className="w-5 h-5" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Download for</span>
                  <span className="text-sm font-bold text-white tracking-tight">Windows</span>
                </div>
              </a>
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
