import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  image: string;
}

export function TradersSay() {
  const testimonials: Testimonial[] = [
    {
      quote: "Spreads on USD/JPY are tight even during the Tokyo open. Execution is fast and I've never had a requote. The ECN Pro account is exactly what I needed for my EA strategies.",
      name: "Kenji Watanabe",
      role: "Algorithmic Trader",
      location: "Tokyo, Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Deposits via local bank transfer are fast and the support team responds quickly in Chinese. Withdrawals arrived within 24 hours — refreshing for this industry.",
      name: "Wei Ling Tan",
      role: "Swing Trader",
      location: "Singapore",
      flag: "🇸🇬",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clear pricing, no maintenance fees, and the MT5 setup was seamless. Prime account gives me everything I need — tight spreads and free VPS for running my bots 24/5.",
      name: "Liam Nguyen",
      role: "EA Developer",
      location: "Sydney, Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-4">Traders Say</div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Trusted Across <span className="text-primary font-normal italic">Asia Pacific</span>
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden hover:border-primary/20 hover:bg-white/[0.02] transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                <Quote size={56} strokeWidth={1.5} />
              </div>

              <div>
                {/* Quote Text */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-10 font-medium italic relative z-10 pt-4">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                {/* Sharp, elegant trader profile image */}
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-2xl object-cover border border-white/10 shadow-lg shrink-0"
                />
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm uppercase tracking-wide truncate">{t.name}</span>
                    <span className="text-base shrink-0">{t.flag}</span>
                  </div>
                  <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mt-1 truncate">
                    {t.role} <span className="text-zinc-600 px-1">•</span> {t.location}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
