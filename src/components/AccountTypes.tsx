import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Landmark, Bitcoin, CreditCard, MapPin } from 'lucide-react';

export function AccountTypes() {
  const [activeId, setActiveId] = React.useState('stp');

  const accountsData = [
    { 
      id: 'stp', 
      title: 'Stp', 
      label: 'Zero Commission',
      specs: [
        'spread from 0.3 pips', 
        'commission: 0', 
        'leverage: 1:1000 (adjustable)', 
        'min depo: 50$'
      ],
      bg: 'STP' 
    },
    { 
      id: 'raw', 
      title: 'Raw ECN', 
      label: 'Lowest Spreads',
      specs: [
        'spread from 0.0 pips', 
        'commission: from 3$', 
        'leverage: 1:1000 (adjustable)', 
        'min depo: 50$'
      ],
      bg: 'RAW' 
    },
    { 
      id: 'islamic', 
      title: 'Swap Free', 
      label: 'Islamic Compliant',
      specs: [
        'spread from 0.2* pips', 
        'administration fee applied', 
        'leverage: 1:400 (adjustable)', 
        'min depo: 100$'
      ],
      bg: 'ISLAMIC' 
    },
    { 
      id: 'vip', 
      title: 'Premium / VIP', 
      label: 'Exclusive Benefits',
      specs: [
        'spread from 0.0', 
        'leverage: 1:500 (adjustable)', 
        'min depo: 5000$', 
        'commission: from 1.5$'
      ],
      bg: 'VIP' 
    },
  ];



  return (
    <section id="accounts" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="text-center mb-32">
          <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Account Types</div>
          <h2 className="text-5xl md:text-7xl text-black leading-[0.85] uppercase mb-6">
            Choose Your <br />
            Trading Edge
          </h2>
          <p className="text-zinc-500 text-xl font-medium max-w-2xl mx-auto">From beginners to professionals — the account that matches your strategy.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[750px] w-full items-stretch mb-24">
          {accountsData.map((acc) => {
            const isActive = activeId === acc.id;
            return (
              <motion.div
                key={acc.id}
                onMouseEnter={() => setActiveId(acc.id)}
                layout
                className={`relative rounded-xl overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-700 w-full lg:h-full ${
                  isActive 
                    ? 'flex-[4] bg-[#FBF9F6] p-8 lg:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-black/5' 
                    : 'flex-1 bg-[#F7F7F7] hover:bg-[#EFEFEF] min-h-[300px] lg:min-h-0'
                }`}
              >
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
                  <span className={`font-black tracking-tighter leading-none whitespace-nowrap ${isActive ? 'text-[20rem]' : 'text-[12rem]'}`}>
                    {acc.bg}
                  </span>
                </div>
 
                {isActive ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 w-full"
                  >
                    <h4 className="text-5xl md:text-7xl text-black mb-4 leading-none uppercase">{acc.title}</h4>
                    <p className="text-[12px] font-black uppercase tracking-[0.4em] text-nn mb-8 leading-none">{acc.label}</p>
                    
                    <div className="flex flex-col gap-5 mb-12 max-w-md mx-auto items-start text-left">
                      {acc.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-4 w-full">
                          <div className="w-5 h-5 rounded-full bg-nn/10 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-nn" strokeWidth={3} />
                          </div>
                          <span className="text-[14px] font-bold text-zinc-900 uppercase tracking-widest">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <button className="px-16 py-6 bg-primary text-white rounded-xl font-black text-lg shadow-[0_20px_50px_rgba(133,190,93,0.3)] hover:scale-105 transition-all flex items-center gap-4 mx-auto">
                      Open Account <ArrowRight />
                    </button>
                  </motion.div>
                ) : (
                  <div className="lg:absolute lg:inset-0 flex items-center justify-center">
                    <div className="lg:rotate-[-90deg] flex items-center gap-4 whitespace-nowrap relative z-10 origin-center">
                      <span className="text-2xl lg:text-3xl font-bold tracking-tighter text-black uppercase">{acc.title}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Account</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
