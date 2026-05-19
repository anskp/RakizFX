import React from 'react';
import { motion } from 'motion/react';

export function MarketGrowth() {
  return (
    <section className="pt-4 pb-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tighter uppercase leading-[0.85]">
            Grow your portfolio <span className="text-primary font-normal italic">with a platform that fits your strategy</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Invest in Gold, NVIDIA, Microsoft, Apple, Vanguard, S&P 500 ETF, and more
          </p>
        </div>

        {/* Promo Card */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#CDEEDB] to-white border border-[#CDEEDB]/60 p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 group shadow-[0_30px_60px_rgba(0,77,52,0.04)]">
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl text-[#004D34] mb-6 leading-tight uppercase font-black tracking-tight">
              Get <span className="text-primary font-black">RakizFx MT5</span> <br/>on Your Preferred Platforms
            </h3>
            
            <p className="text-zinc-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
              Access your RakizFx MT5 account across devices with a unified, secure experience. Stay connected to your market activity, insights, and portfolio context—anytime, anywhere.
            </p>

            <div className="text-[#004D34] text-sm font-black mb-10 tracking-wider uppercase">
              Available on iOS, Android, Windows, and macOS
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* App Store */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-900 border border-transparent rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-md hover:scale-[1.02]">
                <img src="/icons/app-store-svgrepo-com (1).svg" alt="Apple" className="w-6 h-6 object-contain" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Get it on</span>
                  <span className="text-sm font-bold text-white tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-900 border border-transparent rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-md hover:scale-[1.02]">
                <img src="/icons/google-play-store-svgrepo-com.svg" alt="Google Play" className="w-6 h-6 object-contain" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Get it on</span>
                  <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
                </div>
              </a>

              {/* Windows */}
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-zinc-900 border border-transparent rounded-xl px-5 py-2.5 w-[180px] transition-all duration-200 shadow-md hover:scale-[1.02]">
                <img src="/icons/windows-svgrepo-com.svg" alt="Windows" className="w-6 h-6 object-contain" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Download for</span>
                  <span className="text-sm font-bold text-white tracking-tight">Windows</span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 relative mt-12 md:mt-0 flex justify-center lg:justify-end">
             <div className="relative w-full lg:w-[130%] lg:translate-x-12">
                <img 
                  src="/assets/MT5-Features-Desktop-Mobile-V6-e1758285344952.png" 
                  alt="RakizFx MT5 App" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_80px_160px_rgba(0,77,52,0.06)] transition-transform duration-1000 group-hover:scale-[1.03]" 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
