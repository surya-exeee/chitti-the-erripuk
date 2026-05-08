import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, AlertTriangle, Scan } from 'lucide-react';

const AIScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState(null);

  const startScan = () => {
    setScanning(true);
    setResults(null);
    setTimeout(() => {
      setScanning(false);
      setResults({
        species: "Rare Meme Species",
        threatLevel: "EXTREME (Hide your girlfriend)",
        pukness: "9000+",
        recommendation: "Run away or bow down"
      });
    }, 3000);
  };

  return (
    <section className="py-10 px-6">
      <div className="glass-card p-8 border-neon-blue/30 overflow-hidden relative">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
          AI SCANNER <span className="text-neon-blue"><Scan size={24} /></span>
        </h2>

        <div className="relative aspect-square max-w-[280px] mx-auto mb-8 bg-black rounded-3xl border-2 border-white/10 flex items-center justify-center overflow-hidden">
          {/* Scanning Line */}
          {scanning && (
            <motion.div
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-neon-blue shadow-[0_0_20px_#00ffff] z-20"
            />
          )}

          <div className="text-6xl filter grayscale hover:grayscale-0 transition-all duration-500 cursor-help">
            🗿
          </div>

          {!scanning && !results && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <button 
                onClick={startScan}
                className="bg-neon-blue text-black font-black px-6 py-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] active:scale-95 transition-transform"
              >
                INITIALIZE SCAN
              </button>
            </div>
          )}
        </div>

        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs text-white/40 uppercase">Species</span>
                <span className="font-bold text-neon-green">{results.species}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs text-white/40 uppercase">Threat Level</span>
                <span className="font-bold text-neon-pink">{results.threatLevel}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs text-white/40 uppercase">Chaos Score</span>
                <span className="font-bold text-neon-blue">{results.pukness}</span>
              </div>
              <p className="text-center text-sm italic text-white/60 pt-2">
                "{results.recommendation}"
              </p>
              <button 
                onClick={() => setResults(null)}
                className="w-full py-3 text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
              >
                RESCAN SYSTEM
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIScanner;
