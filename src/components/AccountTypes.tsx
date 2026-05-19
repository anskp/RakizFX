import React from 'react';
import { motion } from 'motion/react';

export function AccountTypes() {
  const accountsData = [
    {
      id: 'stp',
      title: 'STP',
      tagline: 'Zero commission trading for retail participants.',
      isHighlighted: false,
      details: [
        { label: 'Spreads', value: 'Starts from 0.3 pips' },
        { label: 'Commission', value: '0' },
        { label: 'Leverage', value: '1:1000 (adjustable)' },
        { label: 'Min Depo', value: '50$' }
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'raw',
      title: 'Raw ECN',
      tagline: 'True institutional ECN connectivity.',
      isHighlighted: true,
      badge: 'RECOMMENDED',
      details: [
        { label: 'Spreads', value: 'Starts from 0.0 pips', highlightValue: true },
        { label: 'Commission', value: 'From 3$' },
        { label: 'Leverage', value: '1:1000 (adjustable)' },
        { label: 'Min Depo', value: '50$' }
      ],
      buttonText: 'Open Raw Account'
    },
    {
      id: 'islamic',
      title: 'Swap Free (Islamic)',
      tagline: 'Islamic compliant swap-free execution.',
      isHighlighted: false,
      details: [
        { label: 'Spreads', value: 'Starts from 0.2* pips' },
        { label: 'Fee', value: 'Admin fee applied' },
        { label: 'Leverage', value: '1:400 (adjustable)' },
        { label: 'Min Depo', value: '100$' }
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'vip',
      title: 'Premium / VIP',
      tagline: 'High-volume desks & fund managers.',
      isHighlighted: false,
      details: [
        { label: 'Spreads', value: 'Starts from 0.0' },
        { label: 'Commission', value: 'From 1.5$' },
        { label: 'Leverage', value: '1:500 (adjustable)' },
        { label: 'Min Depo', value: '5000$' }
      ],
      buttonText: 'Inquire Now'
    },
  ];

  return (
    <section id="accounts" className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <div className="text-[10px] font-black text-[#004D34] uppercase tracking-[0.3em] mb-4">Account Types</div>
          <h2 className="text-4xl md:text-6xl text-black leading-[0.85] uppercase mb-4">
            Choose Your <br />
            Trading Edge
          </h2>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">From beginners to professionals — the account that matches your strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch max-w-7xl mx-auto">
          {accountsData.map((acc, index) => {
            return (
              <div key={acc.id} className="relative flex flex-col h-full group">
                {/* Backing Card Offset Effect for Highlighted Card */}
                {acc.isHighlighted && (
                  <div className="absolute inset-0 bg-[#E8E7E4] rounded-[32px] translate-y-4 translate-x-3 -z-10" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-[32px] p-8 flex flex-col justify-between h-[520px] transition-all duration-300 w-full ${
                    acc.isHighlighted 
                      ? 'bg-[#004D34] text-white shadow-[0_25px_50px_rgba(0,77,52,0.15)] md:scale-105 z-10' 
                      : 'bg-white border border-zinc-200/60 text-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {/* Top Section */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight ${acc.isHighlighted ? 'text-white' : 'text-[#004D34]'}`}>
                        {acc.title}
                      </h3>
                      {acc.badge && (
                        <span className="bg-[#00E676] text-[#004D34] font-extrabold text-[8px] tracking-wider uppercase py-1 px-2.5 rounded-full shrink-0 ml-2">
                          {acc.badge}
                        </span>
                      )}
                    </div>

                    <p className={`text-xs leading-relaxed mb-8 ${acc.isHighlighted ? 'text-zinc-300/90' : 'text-zinc-500'}`}>
                      {acc.tagline}
                    </p>

                    {/* Specifications List */}
                    <div className="flex flex-col gap-4 mb-8">
                      {acc.details.map((d, idx) => (
                        <div key={idx} className="flex justify-between items-center w-full py-1.5 border-b border-zinc-100/10 last:border-0">
                          <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">
                            {d.label}
                          </span>
                          <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-wider text-right ${
                            acc.isHighlighted 
                              ? d.highlightValue ? 'text-[#00E676]' : 'text-white'
                              : 'text-[#004D34]'
                          }`}>
                            {d.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div>
                    {acc.isHighlighted ? (
                      <button className="w-full bg-white hover:bg-zinc-100 text-[#004D34] font-extrabold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
                        {acc.buttonText}
                      </button>
                    ) : (
                      <button className="w-full bg-transparent border border-[#004D34] text-[#004D34] hover:bg-[#004D34]/5 font-extrabold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all">
                        {acc.buttonText}
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
