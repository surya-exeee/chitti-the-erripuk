import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge } from 'lucide-react';

const PowerLevel = () => {
  const [level, setLevel] = useState(69);

  const getStatus = (val) => {
    if (val < 30) return "Normal Human (Boring)";
    if (val < 60) return "Slightly Sus";
    if (val < 90) return "Certified Erripuk";
    return "MAXIMUM OVERDRIVE";
  };

  const getColor = (val) => {
    if (val < 30) return "bg-neon-green";
    if (val < 60) return "bg-neon-yellow";
    if (val < 90) return "bg-neon-pink";
    return "bg-neon-blue animate-pulse shadow-[0_0_20px_#00ffff]";
  };

  return (
    <section className="py-10 px-6">
      <div className="glass-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Gauge size={120} />
        </div>
        
        <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
          CHITTI POWER LEVEL <span className="text-neon-pink">⚡</span>
        </h2>
        <p className="text-white/40 text-sm mb-8 uppercase tracking-widest">
          Measuring chaotic resonance...
        </p>

        <div className="relative mb-8">
          <div className="flex justify-between mb-4">
            <span className="text-4xl font-black italic">{level}%</span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getColor(level)} text-black uppercase transition-colors duration-500`}>
              {getStatus(level)}
            </span>
          </div>

          <div className="h-4 bg-white/5 rounded-full p-1 border border-white/10">
            <motion.div
              className={`h-full rounded-full transition-colors duration-500 ${getColor(level)}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
            />
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={level} 
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
            <div className="text-xs text-white/40 uppercase mb-1">IQ Level</div>
            <div className="text-xl font-bold">Negative</div>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
            <div className="text-xs text-white/40 uppercase mb-1">Vibe</div>
            <div className="text-xl font-bold">Immortal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerLevel;
