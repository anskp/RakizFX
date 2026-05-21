import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Handshake, Percent, TrendingUp, BarChart3, 
  Globe, CheckCircle, ArrowRight, Award 
} from 'lucide-react';

export default function PartnersPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      
      {/* 2. Partnership Programs Grid (LIGHT STYLE) */}
      <section id="programs" className="pt-40 pb-24 bg-white border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Programs</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] text-zinc-900">
              Our Partnership <br/><span className="text-primary font-normal italic">Channels</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Select the professional growth model that aligns with your network and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Percent className="text-primary" size={24} />,
                title: "Introducing Broker (IB)",
                desc: "Earn high rebate yields on every single trade referred. Access customized client spreads, multi-level payment setups, and premium backend dashboards.",
                perks: ["per standard lot rebate", "Multi-tiered affiliate structures", "Daily rebate payouts directly in app"]
              },
              {
                icon: <Handshake className="text-primary" size={24} />,
                title: "CPA Affiliate Program",
                desc: "Get industry-leading fixed payouts for introducing active depositors. Benefit from advanced landing pages, high-converting banners, and weekly audits.",
                perks: ["High CPA commission per active user", "Exclusive localized marketing packs", "Dedicated individual account manager"]
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "Institutional White Label",
                desc: "Deploy your custom branded brokerage powered by RakizFX infrastructure. Access aggregative institutional liquidity, administrative dashboards, and full setups.",
                perks: ["Bespoke customized branding configuration", "Deep low-latency raw execution feeds", "Regulatory & operational advisory support"]
              }
            ].map((program, idx) => (
              <div key={idx} className="bg-zinc-50/50 border border-zinc-200/80 rounded-[2.5rem] p-8 md:p-10 hover:border-primary/40 hover:bg-zinc-50 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 mb-4">{program.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">{program.desc}</p>
                </div>

                <div>
                  <ul className="space-y-3 mb-8 border-t border-zinc-200/80 pt-6">
                    {program.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-zinc-700 text-xs font-semibold">
                        <CheckCircle className="text-primary shrink-0" size={14} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                    <span>Apply to Channel</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Partner Tracking Dashboard (LIGHT STYLE) */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Partner Infrastructure</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] text-zinc-900">
                Advanced Partner <br/><span className="text-primary font-normal italic">Portal</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our leading affiliate portal gives you real-time data visualizers, transparent payout calculations, and customizable localized resources to supercharge your client conversions.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time referral link metrics",
                  "Transparent multi-tier payout matrices",
                  "Fast automated weekly reward audits",
                  "Multilingual marketing material templates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Dashboard Widget (LIGHT CONTAINER WITH SHADOW) */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 shadow-xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-6">
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-1">Partner Portal</div>
                  <h4 className="text-lg font-black uppercase text-zinc-900">Reward Dashboard</h4>
                </div>
                <div className="text-right">
                  <div className="text-zinc-500 text-[9px] uppercase font-bold mb-1">Commission Pool</div>
                  <div className="font-mono text-lg font-black text-primary">$4,842.50</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 border-b border-zinc-100 pb-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">Monthly Leads</div>
                    <div className="font-mono text-sm font-black text-zinc-900">+142</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">Conversion Rate</div>
                    <div className="font-mono text-sm font-black text-primary">34.8%</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">Total Active Clients</div>
                    <div className="font-mono text-sm font-black text-zinc-900">1,248</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-4">Recent Payout Transactions</div>
                  <div className="space-y-3">
                    {[
                      { type: 'IB Rebate', date: 'May 18, 2026', status: 'Success', amt: '+$842.10' },
                      { type: 'CPA Payout', date: 'May 15, 2026', status: 'Success', amt: '+$1,200.00' }
                    ].map((tx, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                        <div>
                          <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">{tx.type}</div>
                          <div className="text-[10px] text-zinc-500 mt-0.5">{tx.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono font-black text-primary">{tx.amt}</div>
                          <div className="text-[9px] text-zinc-500 mt-0.5">{tx.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Partner With Us (LIGHT STYLE) */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase text-zinc-900">
              Why Partner With <span className="text-primary font-normal italic">RakizFX</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Our institutional reputation, deep liquidity, and support mechanisms form a foundation for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="text-primary" size={24} />,
                title: "Leading Reputation",
                desc: "Partner with a highly trusted multi-asset broker. Premium security standards and operational transparency."
              },
              {
                icon: <TrendingUp className="text-primary" size={24} />,
                title: "Flexible Rebate Schemes",
                desc: "Bespoke commission systems custom-tailored to suit different client strategies and referrers' business plans."
              },
              {
                icon: <BarChart3 className="text-primary" size={24} />,
                title: "Premium Reporting",
                desc: "Fully detailed analytical panels to trace click conversions, active deposits, volume generated, and commissions."
              },
              {
                icon: <Users className="text-primary" size={24} />,
                title: "Dedicated Support Team",
                desc: "Experienced individual partner advisors available 24/7 to support campaigns and operational demands."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-zinc-50/50 border border-zinc-200/80 rounded-3xl p-6 hover:bg-zinc-50 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-900 mb-2">{card.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA Section (DARK CONTAINER FOR CONTRAST) */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-b from-[#060F09] to-black border border-white/5 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="relative z-10">
              <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8">Elevate Your Network</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight leading-[0.9]">
                Start Your Partnership <br/>Journey Today
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact our relationship team and custom design a premium compensation model that matches your volume and targets.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
                  Become a Partner
                </button>
                <button className="bg-transparent border border-white/20 text-white font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Contact Relationship Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
