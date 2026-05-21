import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, Building2, Activity, BarChart2, Boxes, Briefcase, 
  CheckCircle
} from 'lucide-react';

export default function MarketPage() {
  // Sparkline generator helper
  const drawSparkline = (points: number[], colorClass: string) => {
    const width = 100;
    const height = 30;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const spread = max - min === 0 ? 1 : max - min;
    const path = points
      .map((p, idx) => {
        const x = (idx / (points.length - 1)) * width;
        const y = height - ((p - min) / spread) * height;
        return `${idx === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    return (
      <svg className="w-24 h-8 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
        <path d={path} fill="none" stroke="currentColor" strokeWidth="2.5" className={colorClass} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  const marketData = {
    forex: [
      { pair: 'EUR/USD', desc: 'Euro / US Dollar', price: '1.08542', change: '+0.12%', spark: [1.084, 1.0845, 1.085, 1.0848, 1.0854], isUp: true },
      { pair: 'GBP/USD', desc: 'Pound / US Dollar', price: '1.26425', change: '+0.24%', spark: [1.261, 1.2625, 1.263, 1.2638, 1.2642], isUp: true },
      { pair: 'USD/JPY', desc: 'US Dollar / Yen', price: '156.128', change: '-0.31%', spark: [156.6, 156.4, 156.3, 156.25, 156.12], isUp: false },
      { pair: 'AUD/USD', desc: 'Aussie / US Dollar', price: '0.66782', change: '+0.08%', spark: [0.667, 0.6672, 0.6675, 0.6673, 0.6678], isUp: true },
      { pair: 'USD/CAD', desc: 'US Dollar / Loonie', price: '1.36214', change: '-0.15%', spark: [1.364, 1.3635, 1.363, 1.3625, 1.3621], isUp: false },
    ],
    shares: [
      { pair: 'Apple (AAPL)', desc: 'Apple Inc.', price: '189.84', change: '+1.45%', spark: [187.2, 188.0, 188.5, 189.1, 189.84], isUp: true },
      { pair: 'Tesla (TSLA)', desc: 'Tesla Inc.', price: '174.95', change: '-2.18%', spark: [178.5, 177.0, 175.8, 176.2, 174.95], isUp: false },
      { pair: 'Amazon (AMZN)', desc: 'Amazon.com Inc.', price: '183.15', change: '+0.88%', spark: [181.5, 182.0, 182.2, 182.8, 183.15], isUp: true },
      { pair: 'Nvidia (NVDA)', desc: 'NVIDIA Corporation', price: '943.50', change: '+4.20%', spark: [905.0, 915.0, 930.0, 928.0, 943.50], isUp: true },
      { pair: 'Microsoft (MSFT)', desc: 'Microsoft Corporation', price: '421.90', change: '+0.54%', spark: [419.5, 420.2, 420.8, 421.2, 421.90], isUp: true },
    ],
    crypto: [
      { pair: 'Bitcoin (BTC)', desc: 'Bitcoin / USD', price: '66,842.50', change: '+2.85%', spark: [65000, 65200, 65800, 66100, 66842], isUp: true },
      { pair: 'Ethereum (ETH)', desc: 'Ethereum / USD', price: '3,492.15', change: '+1.98%', spark: [3420, 3435, 3460, 3472, 3492], isUp: true },
      { pair: 'Solana (SOL)', desc: 'Solana / USD', price: '174.82', change: '+5.60%', spark: [165.2, 168.0, 171.5, 172.3, 174.82], isUp: true },
      { pair: 'XRP (XRP)', desc: 'Ripple / USD', price: '0.5124', change: '-0.85%', spark: [0.518, 0.516, 0.514, 0.515, 0.512], isUp: false },
      { pair: 'Litecoin (LTC)', desc: 'Litecoin / USD', price: '82.45', change: '+1.10%', spark: [81.5, 81.8, 82.2, 82.0, 82.45], isUp: true },
    ],
    indices: [
      { pair: 'S&P 500', desc: 'US 500 Index', price: '5,308.12', change: '+0.35%', spark: [5290, 5295, 5302, 5304, 5308], isUp: true },
      { pair: 'NASDAQ 100', desc: 'US Tech 100 Index', price: '18,674.30', change: '+0.72%', spark: [18540, 18580, 18620, 18650, 18674], isUp: true },
      { pair: 'Dow Jones', desc: 'US 30 Index', price: '39,872.90', change: '-0.10%', spark: [39910, 39890, 39920, 39850, 39872], isUp: false },
      { pair: 'FTSE 100', desc: 'UK 100 Index', price: '8,424.20', change: '+0.15%', spark: [8411, 8415, 8420, 8418, 8424], isUp: true },
      { pair: 'DAX 40', desc: 'Germany 40 Index', price: '18,726.50', change: '+0.21%', spark: [18680, 18710, 18705, 18715, 18726], isUp: true },
    ],
    metals_energies: [
      { pair: 'Gold (XAU/USD)', desc: 'Gold Spot / USD', price: '2,421.80', change: '+1.12%', spark: [2395, 2405, 2410, 2415, 2421.8], isUp: true },
      { pair: 'Silver (XAG/USD)', desc: 'Silver Spot / USD', price: '31.42', change: '+2.40%', spark: [30.6, 30.8, 31.1, 31.0, 31.42], isUp: true },
      { pair: 'Brent Crude Oil', desc: 'Brent Crude Spot', price: '83.25', change: '-1.05%', spark: [84.15, 83.90, 83.60, 83.45, 83.25], isUp: false },
      { pair: 'WTI Crude Oil', desc: 'WTI Light Sweet Crude', price: '79.12', change: '-1.25%', spark: [80.12, 79.80, 79.50, 79.35, 79.12], isUp: false },
      { pair: 'Natural Gas', desc: 'Natural Gas Spot', price: '2.564', change: '+3.80%', spark: [2.47, 2.50, 2.52, 2.51, 2.564], isUp: true },
    ]
  };

  const marketSections = [
    {
      title: 'Forex',
      label: 'Currency Markets',
      desc: 'Trade major, minor, and exotic pairs with tight pricing, high liquidity, and fast 24/5 market access.',
      icon: <LineChart size={22} />,
      instruments: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'],
      tone: 'bg-[#eafaf1]',
      accent: 'text-[#004D34]'
    },
    {
      title: 'Shares CFDs',
      label: 'Global Equities',
      desc: 'Speculate on leading public companies across US, European, and Asian markets without owning the underlying stock.',
      icon: <Building2 size={22} />,
      instruments: ['AAPL', 'TSLA', 'AMZN', 'NVDA'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Crypto CFDs',
      label: '24/7 Digital Assets',
      desc: 'Trade crypto price movements around the clock with advanced charting tools and no exchange wallet requirement.',
      icon: <Activity size={22} />,
      instruments: ['BTC/USD', 'ETH/USD', 'SOL/USD', 'XRP/USD'],
      tone: 'bg-[#121212]',
      accent: 'text-white'
    },
    {
      title: 'Indices',
      label: 'Benchmark Markets',
      desc: 'Access global benchmark indices and speculate on broad stock market performance with flexible CFD conditions.',
      icon: <BarChart2 size={22} />,
      instruments: ['S&P 500', 'NASDAQ 100', 'DAX 40', 'FTSE 100'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Metals & Energies',
      label: 'Commodities',
      desc: 'Trade safe-haven metals and active energy markets including gold, silver, Brent, WTI, and natural gas.',
      icon: <Boxes size={22} />,
      instruments: ['Gold', 'Silver', 'Brent', 'Natural Gas'],
      tone: 'bg-[#f4f7f6]',
      accent: 'text-[#004D34]'
    },
    {
      title: 'ETFs',
      label: 'Sector Exposure',
      desc: 'Diversify across baskets of securities, sectors, and themes through flexible ETF CFD access.',
      icon: <Briefcase size={22} />,
      instruments: ['Tech', 'Energy', 'Healthcare', 'Global'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Futures',
      label: 'Forward Markets',
      desc: 'Trade futures-linked CFDs across major commodities, indices, and financial products with deep liquidity support.',
      icon: <BarChart2 size={22} />,
      instruments: ['US Index', 'Oil', 'Metals', 'Rates'],
      tone: 'bg-[#eafaf1]',
      accent: 'text-[#004D34]'
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 overflow-hidden text-black min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/assets/herooo.png" alt="Market Hero Background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-left w-full pt-12">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-h1 text-black mb-6 mt-6">
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
                    className={`inline-block ${letter !== '.' ? 'text-nn' : 'text-black'}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <p className="text-black text-base md:text-lg font-medium mb-10 leading-relaxed max-w-xl">
                Access over 1,000+ CFD instruments across Forex, Crypto, Stocks, and Commodities on premium ECN infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Market Chart */}
      <section id="chart" className="py-14 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-h2 mb-5">
                Live Market Movement
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-md">
                Track representative price action across currencies, equities, crypto, indices, and commodities before choosing your market.
              </p>
            </div>

            <div className="lg:col-span-8 bg-[#f4f7f6] rounded-[2rem] p-6 md:p-8 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-zinc-400">Composite CFD Index</div>
                  <div className="text-3xl font-black text-[#004D34] mt-1">1,284.72</div>
                </div>
                <div className="rounded-full bg-white px-5 py-3 text-xs font-black text-[#00ca73] shadow-sm">+2.48%</div>
              </div>

              <svg viewBox="0 0 900 260" className="w-full h-52 md:h-64">
                <defs>
                  <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00ca73" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#00ca73" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 220 L0 172 C70 166 100 112 160 126 C225 142 248 76 318 94 C390 112 410 158 476 136 C546 112 572 48 642 70 C706 90 724 132 790 104 C834 86 862 62 900 58 L900 220 Z" fill="url(#marketFill)" />
                <path d="M0 172 C70 166 100 112 160 126 C225 142 248 76 318 94 C390 112 410 158 476 136 C546 112 572 48 642 70 C706 90 724 132 790 104 C834 86 862 62 900 58" fill="none" stroke="#00ca73" strokeWidth="8" strokeLinecap="round" />
                {[120, 300, 480, 660, 840].map((x) => (
                  <circle key={x} cx={x} cy={x === 660 ? 70 : x === 840 ? 74 : x === 300 ? 94 : x === 480 ? 136 : 126} r="8" fill="#004D34" />
                ))}
              </svg>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-5">
                {[
                  { name: 'EUR/USD', val: '+0.12%' },
                  { name: 'BTC/USD', val: '+2.85%' },
                  { name: 'NASDAQ', val: '+0.72%' },
                  { name: 'Gold', val: '+1.12%' },
                  { name: 'Brent', val: '-1.05%' }
                ].map((item) => (
                  <div key={item.name} className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.name}</div>
                    <div className={`mt-1 text-sm font-black ${item.val.startsWith('+') ? 'text-[#00ca73]' : 'text-red-500'}`}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Market Sections */}
      <section id="instruments" className="py-10 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-7">
          {marketSections.map((market, idx) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${market.tone} rounded-[2rem] px-7 py-7 md:px-10 md:py-8`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-5">
                  <h3 className={`text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 ${market.accent}`}>{market.title}</h3>
                  <p className={`text-sm md:text-base leading-relaxed max-w-xl ${market.tone === 'bg-[#121212]' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {market.desc}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {market.instruments.map((instrument) => (
                      <span
                        key={instrument}
                        className={`rounded-full px-5 py-3 text-xs font-black uppercase tracking-widest ${market.tone === 'bg-[#121212]' ? 'bg-white/10 text-white' : 'bg-white text-zinc-800 shadow-sm'}`}
                      >
                        {instrument}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Transparent Pricing & Fees */}
      <section id="pricing" className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <h2 className="text-h2 mb-6">
                We Believe in <br/>
                <span className="text-primary font-normal italic">Transparent Costs</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our pricing system ensures that your trading costs are always transparent and competitive. No hidden markups or sudden fees.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Competitive spreads', 'Low commissions', 'No hidden fees', 
                  'Swap-free account options', 'Clear overnight financing information'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Spreads', desc: 'Ultra-low spreads starting from 0.0 pips across major trading instruments.' },
                { title: 'Commissions', desc: 'Extremely competitive commission structures on raw-spread accounts from just $1.5.' },
                { title: 'Overnight Swaps', desc: 'Clear, transparent swap costs computed directly inside the platform.' },
                { title: 'Currency Conversion', desc: 'Transparent conversion rates with minimal margins applied on trades.' }
              ].map((fee, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-8 relative overflow-hidden shadow-sm">
                  <div className="text-primary font-black text-3xl mb-4 font-mono">0{idx + 1}</div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-black mb-2">{fee.title}</h4>
                  <p className="text-zinc-600 text-xs leading-relaxed">{fee.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Deposit & Withdrawal Section */}
      <section id="funding" className="py-24 bg-[#f4f7f6] text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">
              Fast & Secure <span className="text-nn font-normal italic">Funding</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Fund your account instantly using trusted global and regional payment methods with zero deposit fees.
            </p>
          </div>

          {/* Payment Badges Grid */}
          {/* Payment Badges Grid */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mb-16 w-full">
            {[
              { logo: '/icons/bank-svgrepo-com.svg', name: 'Bank Transfer' },
              { logo: '/icons/visa-svgrepo-com (1).svg', name: 'Visa' },
              { logo: '/icons/mastercard-old-svgrepo-com.svg', name: 'Mastercard' },
              { logo: '/icons/bitcoin-svgrepo-com.svg', name: 'Bitcoin' },
              { logo: '/icons/apple-pay-svgrepo-com (1).svg', name: 'Apple Pay' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.08 }}
                className="h-10 flex items-start justify-start transition-all cursor-default min-w-[80px]"
              >
                <div className="w-full h-full flex items-start justify-start">
                  <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Funding Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Instant Deposits', desc: 'Fundings via cards or electronic payment systems hit your account instantly.' },
              { title: 'Fast Withdrawals', desc: 'Withdrawals are audited and processed rapidly within 1–24 hours.' },
              { title: 'Multi-Currencies', desc: 'Choose from multiple major base currencies (USD, EUR, GBP, BTC).' },
              { title: 'Zero Fees', desc: 'No transaction fees or surprise deductions applied on credit card deposits.' },
              { title: 'Global Accessibility', desc: 'Accessible worldwide with local bank integration setups.' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-800 mb-2">{benefit.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Market Intelligence Tools */}
      <section id="tools" className="py-24 bg-white text-black border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">
              Market Intelligence
            </h2>
            <p className="text-zinc-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
              Stay close to market sentiment, key economic events, and curated financial news from one clean trading toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Market Sentiments',
                desc: 'See how traders are positioned across major instruments, including long versus short percentages for Forex, Crypto, and Indices.',
                image: '/assets/Group 56.svg'
              },
              {
                title: 'Economic Calendar',
                desc: 'Track and set alerts for key global economic events, central bank decisions, inflation data, and market-moving releases.',
                image: '/assets/Frame 47.svg'
              },
              {
                title: 'Market News',
                desc: 'Stay updated with curated financial news and market stories that help you follow momentum across global assets.',
                image: '/assets/Group 57.svg'
              }
            ].map((tool, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition-all duration-300 rounded-[1.75rem] p-6 md:p-7 min-h-[430px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,77,52,0.08)]">
                <div className="h-56 md:h-60 flex items-center justify-center mb-8">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-zinc-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Economic Calendar & VPS Showcases */}
      <section id="calendar-vps" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24">
          
          {/* Economic Calendar Sub-section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Stay Ahead Of <br/><span className="text-primary font-normal italic">Market Events</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Track major economic announcements, central bank decisions, inflation reports, employment data, and global market-moving events in real time.
              </p>
            </div>

            {/* Mock Calendar Widget */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-6 relative overflow-hidden shadow-sm">
              <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-6">Today's Key Releases</div>
              <div className="space-y-4">
                {[
                  { time: '14:30', currency: 'USD', event: 'CPI MoM (Consumer Price Index)', impact: 'HIGH', forecast: '0.3%', previous: '0.4%' },
                  { time: '16:00', currency: 'GBP', event: 'BoE Governor Bailey Speaks', impact: 'MEDIUM', forecast: '-', previous: '-' },
                  { time: '20:15', currency: 'EUR', event: 'ECB President Lagarde Speech', impact: 'HIGH', forecast: '-', previous: '-' }
                ].map((e, idx) => (
                  <div key={idx} className="flex flex-wrap items-center justify-between border-b border-zinc-200 pb-4 last:border-0 last:pb-0 gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-zinc-500 text-xs">{e.time}</span>
                        <span className="bg-white border border-zinc-200 px-2 py-0.5 rounded text-[10px] font-black">{e.currency}</span>
                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${e.impact === 'HIGH' ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-yellow-50 text-yellow-600 border border-yellow-200'}`}>
                          {e.impact}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-black uppercase tracking-wider">{e.event}</div>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-mono">
                      <div>
                        <div className="text-zinc-500 uppercase">Forecast</div>
                        <div className="font-bold text-black">{e.forecast}</div>
                      </div>
                      <div>
                        <div className="text-zinc-500 uppercase">Previous</div>
                        <div className="font-bold text-black">{e.previous}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VPS Hosting Sub-section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[80px]" />
              <div className="flex items-center justify-between mb-8">
                <div className="text-xs font-black uppercase tracking-wider text-zinc-500">Dedicated VPS Metrics</div>
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Latency to RakizFX Servers', val: '< 0.8 ms', label2: 'Active EAs Running', val2: '99.99%' },
                  { label: 'Operating System Host', val: 'Windows Server 2022', label2: 'Virtual CPU Cores', val2: '4 Cores' }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 border-b border-zinc-200 pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{row.label}</div>
                      <div className="font-mono text-sm font-black text-black">{row.val}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{row.label2}</div>
                      <div className="font-mono text-sm font-black text-black">{row.val2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-h2 mb-6">
                Automated Trading <br/><span className="text-primary font-normal italic">With Low Latency</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Run Expert Advisors and automated strategies 24/7 using dedicated VPS infrastructure with reduced downtime and enhanced execution speed.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Security Section */}
      <section id="security" className="py-24 relative overflow-hidden bg-white text-black border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Your Security <br/><span className="text-[#00ca73] font-normal italic">Comes First</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our strict financial custody architectures safeguard your assets through regulatory segregations, encrypted networks, and real-time ledger reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Segregated client funds",
                "Multi-layer encryption",
                "Two-factor authentication",
                "Negative balance protection",
                "Secure payment gateways"
              ].map((feat, idx) => (
                <div key={idx} className="bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 rounded-2xl p-6 flex items-start gap-4 cursor-default">
                  <CheckCircle className="text-[#00ca73] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="text-sm font-black text-zinc-800 uppercase tracking-wider">{feat}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#121212] border border-white/5 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-h2 text-white mb-6">
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
                <button className="bg-white text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-zinc-100 transition-colors shadow-lg cursor-pointer">
                  Explore Markets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Risk Disclaimer */}
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
