import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Shield, Zap, Cpu, Layers, DollarSign, 
  Activity, CheckCircle, Smartphone, Monitor, Globe, Award, PlayCircle 
} from 'lucide-react';
import { AccountTypes } from '../components/AccountTypes';
import { CopyTrading } from '../components/CopyTrading';

export default function TradingPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 overflow-hidden bg-[#121212] text-white border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Institutional Execution</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-8 leading-[0.85]">
              Trade Global Markets <br/>
              <span className="text-primary font-normal italic">With Confidence</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Access 1,000+ CFD instruments across Forex, Crypto, Stocks, Indices, Commodities, Metals, ETFs, and Futures — all from one powerful multi-asset trading environment.
            </p>

            <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-12">
              Trade with ultra-fast execution, institutional-grade liquidity, advanced charting tools, and seamless account management designed for modern traders.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <button className="bg-primary hover:scale-105 text-black font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-transform shadow-[0_20px_40px_rgba(0,255,120,0.2)]">
                Start Trading Today
              </button>
              <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all">
                Try Free Demo
              </button>
            </div>
          </motion.div>

          {/* Risk Warning Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-20 p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-left"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Risk Warning</div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Trade With Us */}
      <section id="benefits" className="py-24 bg-white border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
              Built for <span className="text-primary font-normal italic">Every Trader</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Whether you are a beginner exploring the markets or a professional trader managing large-volume positions, our ecosystem is designed to support every trading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Zap className="text-primary" size={24} />, 
                title: "Ultra-Fast Execution", 
                desc: "Lightning-fast order execution with minimal latency and advanced infrastructure." 
              },
              { 
                icon: <Monitor className="text-primary" size={24} />, 
                title: "Advanced Platforms", 
                desc: "Trade on MetaTrader 5, MetaTrader 4, TradingView, WebTrader, and Mobile Apps." 
              },
              { 
                icon: <Cpu className="text-primary" size={24} />, 
                title: "Deep Liquidity", 
                desc: "Access institutional-grade liquidity with competitive spreads and reliable pricing." 
              },
              { 
                icon: <Shield className="text-primary" size={24} />, 
                title: "Secure & Regulated", 
                desc: "Your funds and data are protected through strict security standards and regulatory compliance." 
              },
              { 
                icon: <DollarSign className="text-primary" size={24} />, 
                title: "Flexible Funding Methods", 
                desc: "Instant deposits and fast withdrawals through multiple global and local payment methods." 
              },
              { 
                icon: <Layers className="text-primary" size={24} />, 
                title: "Multi-Asset Trading", 
                desc: "Trade Forex, Shares, Crypto, Metals, Energies, Futures, Indices, and ETFs from one account." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trading Overview Bento Grid */}
      <section id="markets" className="py-24 bg-[#121212] text-white border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Trading Overview</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9]">
              Access 1,000+ CFD Instruments <br/><span className="text-white/40">Across Global Markets</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Trade the world’s most popular financial instruments with competitive conditions and powerful execution technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Available Markets Column */}
            <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">Available Markets</h3>
                <p className="text-zinc-500 text-sm mb-10 max-w-md">
                  Diversify your trading portfolio across a complete suite of underlying financial asset categories with high-speed execution.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  'Forex', 'Shares', 'Indices', 'Commodities', 
                  'Metals', 'Energies', 'Cryptocurrencies', 'ETFs', 'Futures'
                ].map((market, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-zinc-300 hover:border-primary/30 transition-all cursor-default">
                    {market}
                  </span>
                ))}
              </div>
            </div>

            {/* What You Get Column */}
            <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">What You Get</h3>
              
              <ul className="space-y-4">
                {[
                  'Tight spreads', 'Fast execution', 'Advanced charting', 
                  'Real-time pricing', 'Negative balance protection', 
                  'Professional trading tools', 'Multi-device trading access'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-zinc-300 font-medium">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trading Accounts */}
      <section className="py-24 bg-[#FAF9F6] border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Trading Accounts</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] text-black">
              Account Types <br/><span className="text-primary font-normal italic">Tailored For Every Trader</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Choose the trading account that matches your strategy and experience level.
            </p>
          </div>

          <AccountTypes />
        </div>
      </section>

      {/* 5. Trading Platforms */}
      <section id="platforms" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase text-black">
              Trade <span className="text-primary font-normal italic">Anytime, Anywhere</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Access global markets across desktop, web, and mobile trading platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "MetaTrader 5", 
                desc: "Trade CFDs with advanced charting tools, automated trading support, market depth, and integrated economic calendars.",
                platform: "Desktop / Web / Mobile"
              },
              { 
                title: "MetaTrader 4", 
                desc: "The industry-standard trading platform trusted by millions worldwide with lightning fast execution.",
                platform: "Desktop / Web / Mobile"
              },
              { 
                title: "TradingView", 
                desc: "Professional charting, social trading ideas, and advanced market analysis tools linked directly to your account.",
                platform: "Web / App"
              },
              { 
                title: "WebTrader", 
                desc: "Trade directly from your web browser without installing software, with rapid execution and full indicators.",
                platform: "Browser Native"
              },
              { 
                title: "Mobile Trading App", 
                desc: "Manage your accounts and trade on the go with powerful, low-latency iOS and Android applications.",
                platform: "iOS & Android"
              }
            ].map((platform, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors group">
                <div>
                  <div className="text-primary text-[9px] uppercase font-black tracking-widest mb-4 bg-white border border-zinc-200 rounded-full px-3.5 py-1 w-max">
                    {platform.platform}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-4">{platform.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{platform.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                  <span>Launch Platform</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Trading Section */}
      <section id="copy-trading" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Social Trading</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase text-black">
              Follow. Copy. <span className="text-primary font-normal italic">Trade.</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Join a growing trading community and automatically copy strategies from experienced traders in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { 
                title: "Copy Top Traders", 
                desc: "Replicate trades from verified strategy providers instantly with complete transparency." 
              },
              { 
                title: "Performance Rankings", 
                desc: "Track trader statistics, growth, profitability, and risk scores transparently." 
              },
              { 
                title: "Flexible Copy Settings", 
                desc: "Control your allocation, risk level, and copy ratios with full, custom flexibility." 
              },
              { 
                title: "Community Driven", 
                desc: "Engage with traders worldwide, discuss current market trends, and share insights." 
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-6 hover:shadow-lg transition-all group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-2">{card.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Copy Trading Core Widget Component */}
          <CopyTrading />
        </div>
      </section>

      {/* 7. Security Section */}
      <section id="security" className="py-24 relative overflow-hidden bg-[#121212] text-white border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Institutional Security</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9]">
                Your Security <br/><span className="text-primary font-normal italic">Comes First</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-medium">
                We use advanced encryption systems, secure payment processing, and strict account protection measures to safeguard your trading environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Segregated client funds",
                "Multi-layer encryption",
                "Two-factor authentication",
                "Negative balance protection",
                "Secure payment gateways"
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex items-start gap-4">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#121212] border border-white/5 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8">Start Your Journey</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight leading-[0.9]">
                Start Your Trading <br/>Journey Today
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Open your live trading account and access global financial markets with professional trading tools, advanced platforms, and competitive conditions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
                  Open Live Account
                </button>
                <button className="bg-transparent border border-white/20 text-white font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Try Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer Risk Disclaimer */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200 text-zinc-500 text-xs">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center leading-relaxed">
          <p className="max-w-4xl mx-auto">
            Trading CFDs involves significant risk and may not be suitable for all investors. Leveraged products can result in losses exceeding deposits in certain jurisdictions. Please ensure you fully understand the risks involved before trading.
          </p>
        </div>
      </section>

    </div>
  );
}
