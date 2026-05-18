import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Vault, Scale, CreditCard, Wallet, Banknote, Bitcoin, QrCode, Zap, CheckCircle2, Rocket, PlayCircle } from 'lucide-react';
import NeonWaveBackground from './NeonWaveBackground';

export function TrustSection() {
  return (
    <>
      {/* Payments Section */}
      <section id="payments" className="py-16 bg-[#f4f7f6] text-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-nn/30" />
              <div className="text-nn font-bold text-[10px] uppercase tracking-widest">Payments</div>
              <div className="h-[1px] w-8 bg-nn/30" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-3">Fast, Secure & Flexible Payments</h2>
            <p className="text-zinc-500 text-sm font-medium max-w-2xl mx-auto">Multiple methods tailored for Asian traders. Most deposits processed instantly.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { logo: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png', name: 'Bank Transfer' },
              { logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg', name: 'USDT / BTC' },
              { logo: 'https://cdn-icons-png.flaticon.com/512/196/196578.png', name: 'Visa / MC' },
              { icon: <Wallet size={18} />, name: 'Skrill' },
              { icon: <Zap size={18} />, name: 'Neteller' },
              { logo: 'https://cdn-icons-png.flaticon.com/512/814/814513.png', name: 'Local Methods' },
              { logo: 'https://cdn-icons-png.flaticon.com/512/6021/6021946.png', name: 'Perfect Money' },
              { logo: 'https://cdn-icons-png.flaticon.com/512/1086/1086741.png', name: 'SticPay' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-white border border-zinc-100 rounded-lg py-3 px-6 flex items-center gap-3 shadow-sm hover:border-nn/30 transition-all cursor-default"
              >
                <div className="w-8 h-5 flex items-center justify-center text-emerald-500">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    p.icon
                  )}
                </div>
                <span className="font-bold text-[11px] whitespace-nowrap text-zinc-800">{p.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 text-zinc-400 font-bold text-[10px]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-nn" />
              <span>Most deposits: Instant</span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-200" />
            <span>Withdrawals: 1–24h</span>
            <div className="h-3 w-[1px] bg-zinc-200" />
            <span>Zero deposit fees</span>
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section id="regulation" className="py-20 bg-[#080c0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-nn/30" />
              <div className="text-nn font-bold text-[10px] uppercase tracking-widest">Trust & Regulation</div>
              <div className="h-[1px] w-8 bg-nn/30" />
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">Your Funds Are Safe With Us</h2>
            <p className="text-zinc-500 text-sm font-medium max-w-2xl mx-auto">Strict regulatory frameworks with segregated client funds.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <ShieldCheck size={20} strokeWidth={2.5} />, name: 'Regulated Entity' },
              { icon: <Vault size={20} strokeWidth={2.5} />, name: 'Segregated Funds' },
              { icon: <Scale size={20} strokeWidth={2.5} />, name: 'Negative Balance Protection' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-[#0b120e] border border-white/5 rounded-full py-4 px-8 flex items-center gap-4 shadow-sm hover:border-nn/30 transition-all cursor-default"
              >
                <div className="text-nn">{p.icon}</div>
                <span className="font-bold text-[13px] text-white whitespace-nowrap uppercase tracking-wide">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/5 rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,255,120,0.15)]"
          >
            {/* Custom Neon Wave Background */}
            <NeonWaveBackground />
            
            <div className="relative z-10">
              <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8 drop-shadow-md">Get Started Today</div>
              <h2 className="text-5xl md:text-7xl text-white uppercase mb-6 drop-shadow-2xl">Ready to get started?</h2>
              <p className="text-white/80 text-xl font-medium mb-12 drop-shadow-md">Transform your brokerage today</p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-12 py-6 text-sm uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,255,120,0.3)]">
                  Open Account
                </button>
                <button className="bg-transparent border-2 border-white/20 text-white font-black px-12 py-6 text-sm uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
