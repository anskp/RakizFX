import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Circle, Download } from 'lucide-react';

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(0, 202, 115, ${0.1 + i * 0.05})`,
        width: 0.75 + i * 0.04,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-nn/[0.25]"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.04}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-12">
      <div className="absolute inset-0 z-0">
        <img src="/assets/bg_new.png" alt="Hero Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dk/40 to-dk pointer-events-none z-0" />

      {/* Decorative Glows */}
      <div className="absolute top-[-100px] right-[10%] w-[400px] h-[400px] bg-nn/5 rounded-full blur-[120px] z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-[0%] w-[300px] h-[300px] bg-em/10 rounded-full blur-[120px] z-1 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Writings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-nn/5 border border-nn/15 rounded-full text-[10px] font-bold text-nn uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 bg-nn rounded-full animate-pulse shadow-[0_0_8px_rgba(0,202,115,0.8)]" />
              Markets Live Now
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-txp leading-[0.9] mb-8 uppercase tracking-tighter">
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
                  className={`inline-block ${letter !== '.' ? 'text-nn' : 'text-white'}`}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Access the world's most liquid markets with institutional-grade technology, raw spreads, and unparalleled transparency across <span className="text-nn font-semibold">500+ Global Instruments</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <button className="bg-nn hover:bg-nnl text-dk font-bold px-10 py-5 text-[12px] uppercase tracking-[0.3em] rounded-xl transition-all flex items-center gap-4 cursor-pointer shadow-[0_10px_20px_rgba(0,202,115,0.2)]">
                Download Platform <Download size={18} />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 text-[12px] uppercase font-bold tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4 cursor-pointer rounded-xl">
                View Markets
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Blank */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
