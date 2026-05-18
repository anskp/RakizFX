import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function TradingViewMarkets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous widget
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": 660,
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(133, 190, 93, 1)",
      "plotLineColorFalling": "rgba(242, 54, 69, 1)",
      "gridLineColor": "rgba(255, 255, 255, 0.05)",
      "scaleFontColor": "#636366",
      "belowLineFillColorGrowing": "rgba(133, 190, 93, 0.12)",
      "belowLineFillColorFalling": "rgba(242, 54, 69, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(133, 190, 93, 0)",
      "belowLineFillColorFallingBottom": "rgba(242, 54, 69, 0)",
      "symbolActiveColor": "rgba(133, 190, 93, 0.12)",
      "tabs": [
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR to USD" },
            { "s": "FX:GBPUSD", "d": "GBP to USD" },
            { "s": "FX:USDJPY", "d": "USD to JPY" },
            { "s": "FX:AUDUSD", "d": "AUD to USD" },
            { "s": "FX:USDCAD", "d": "USD to CAD" }
          ]
        },
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
            { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq 100" },
            { "s": "FOREXCOM:DJI", "d": "Dow 30" },
            { "s": "INDEX:DEU40", "d": "DAX 40" }
          ]
        },
        {
          "title": "Commodities",
          "symbols": [
            { "s": "TVC:GOLD", "d": "Gold" },
            { "s": "TVC:SILVER", "d": "Silver" },
            { "s": "EASYMARKETS:OILUSD", "d": "Crude Oil" }
          ]
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BITSTAMP:BTCUSD", "d": "Bitcoin" },
            { "s": "BITSTAMP:ETHUSD", "d": "Ethereum" },
            { "s": "BINANCE:SOLUSDT", "d": "Solana" }
          ]
        }
      ]
    });
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 border border-primary/20 px-6 py-2 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
            >
              Real-Time Feed
            </motion.div>
            <h2 className="text-5xl md:text-7xl text-white uppercase mb-6 leading-tight">
              Every market is <br/>
              waiting for you
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed font-medium">
              Institutional-grade pricing and analysis powered by TradingView. Access over 500+ instruments with millisecond-perfect execution protocols.
            </p>
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-12 py-6 text-[12px] uppercase font-bold tracking-[0.3em] hover:bg-primary transition-all flex items-center gap-4 rounded-xl group">
             Explore All Asset Groups <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="bg-[#080808] border border-white/5 rounded-[2rem] p-4 lg:p-8 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8">
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest bg-white/[0.02] px-4 py-2 border border-white/5 rounded-full">Indicative Pricing Only</span>
          </div>
          <div className="tradingview-widget-container w-full" ref={containerRef}>
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
