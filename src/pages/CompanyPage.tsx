import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Shield, Activity, Users, Award, 
  MapPin, CheckCircle, ArrowRight, Briefcase, Cpu, FileText 
} from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#060F09] to-black">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-nn/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400">Institutional Legacy</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-8 leading-[0.85]">
              About <br/>
              <span className="text-primary font-normal italic">RakizFX</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Engineering high-performance multi-asset trading infrastructures. Built on institutional-grade foundations, our mission is to deliver absolute trading transparency, raw execution speeds, and tier-1 custody safety.
            </p>

            <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-12">
              Serving active algorithmic strategies, swing traders, introducing brokers, and professional funds across global financial centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Operational Performance Stats */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "$12B+", lbl: "Monthly Trading Volume", desc: "Generating massive institutional liquidity flows." },
              { num: "150K+", lbl: "Registered Active Traders", desc: "Serving retail and corporate strategy developers." },
              { num: "< 40ms", lbl: "Average Execution Speed", desc: "Low-latency fibers linking LD4 & NY4 server racks." },
              { num: "150+", lbl: "Countries Supported", desc: "Providing global access with local payment options." }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 text-center">
                <div className="font-mono text-3xl md:text-4xl font-black text-primary mb-2">{stat.num}</div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">{stat.lbl}</div>
                <div className="text-zinc-500 text-[10px] leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Corporate Values */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Values</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9]">
              Built On <span className="text-primary font-normal italic">Solid Principles</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Our trading solutions are centered around security, latency optimization, and absolute clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="text-primary" size={24} />,
                title: "Absolute Transparency",
                desc: "Every transaction, custody pool, and overnight calculation is handled with strict accounting standards. Client assets are kept completely segregated at tier-1 custodial global banking groups, fully separated from corporate accounts."
              },
              {
                icon: <Cpu className="text-primary" size={24} />,
                title: "Engineered Performance",
                desc: "We focus heavily on technical infrastructure. Our servers maintain high-speed fiber interlinkages to aggregate liquidity feeds directly from global LPs, allowing execution metrics to comfortably sit below the 40ms threshold."
              },
              {
                icon: <Users className="text-primary" size={24} />,
                title: "Institutional Custody",
                desc: "Client funds are secured with deep multi-layer encryption architectures. We utilize leading regulatory protocols, negative balance safety nets, and strict withdrawal audits to protect active capital pools."
              },
              {
                icon: <Award className="text-primary" size={24} />,
                title: "Regulatory Standards",
                desc: "Adhering to clean global financial guidelines and anti-money laundering policies. Our operations undergo routine third-party audits to secure and maintain institutional licensing compliance."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-12 hover:border-primary/20 transition-all flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">{card.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Global Locations */}
      <section className="py-24 bg-gradient-to-t from-[#050B06] to-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 leading-tight">
                Our Global <br/><span className="text-primary font-normal italic">Presence</span>
              </h3>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-medium">
                With corporate offices, support centers, and server nodes located across major global trading regions, we maintain low-latency connections and localized 24/7 service hubs.
              </p>

              <div className="space-y-4">
                {[
                  "Server centers in London (LD4) and New York (NY4)",
                  "Customer experience and strategy desks in Singapore",
                  "Algorithmic support networks in Tokyo",
                  "Compliance audits based in Sydney"
                ].map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual World Map Mock */}
            <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,120,0.05),transparent)] pointer-events-none" />
              <div className="text-center relative z-10">
                <div className="text-primary font-mono text-[10px] uppercase tracking-widest mb-2">Network Nodes</div>
                <div className="text-2xl font-black uppercase text-white mb-4">Interlinked Latency Grid</div>
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300">LD4 Node Online</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Careers Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Careers</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9]">
              Join Our <span className="text-primary font-normal italic">Innovators</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              We are constantly seeking outstanding compliance minds, network engineers, and client strategists to accelerate global infrastructure growth.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { role: "Infrastructure Systems Engineer", dept: "Engineering / Server Ops", location: "London / Singapore" },
              { role: "Institutional Account Executive", dept: "Desk Support / Strategy", location: "Tokyo / Sydney" },
              { role: "Corporate Compliance Lead", dept: "Legal & Audits / Compliance", location: "Singapore" }
            ].map((job, idx) => (
              <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-wrap justify-between items-center hover:border-primary/20 transition-all cursor-pointer group">
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">{job.role}</h4>
                  <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mt-1">
                    {job.dept} <span className="text-zinc-600 px-1.5">•</span> {job.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                  <span>Apply Role</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
