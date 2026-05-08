import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingIntro from './components/LoadingIntro';
import Hero from './components/Hero';
import PowerLevel from './components/PowerLevel';
import AIScanner from './components/AIScanner';
import Mascot from './components/Mascot';
import { Sparkles, MessageCircle, Share2, Skull } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    // Disable scrolling during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  const quotes = [
    "I'm not short, I'm just concentrated Erripuk energy.",
    "Logic is for losers. Memes are for legends.",
    "If you can't handle me at my Erripukest, you don't deserve me at my Chittiest.",
    "Error 404: Brain not found, only vibes detected.",
  ];

  const [quoteIdx, setQuoteIdx] = useState(0);

  return (
    <div className="min-h-screen bg-dark-base text-white selection:bg-neon-pink selection:text-white">
      <AnimatePresence>
        {loading && <LoadingIntro onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          {/* Main Layout Container */}
          <div className="max-w-md mx-auto relative pb-20">
            
            {/* Nav / Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5 p-4 flex justify-between items-center">
              <div className="font-black text-xl italic tracking-tighter text-white">
                CHITTI<span className="text-neon-pink">.</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/5 border border-white/10"
                onClick={() => setShowEasterEgg(true)}
              >
                <Skull size={20} className="text-neon-pink" />
              </motion.button>
            </header>

            {/* Sections */}
            <Hero />
            
            <Mascot />

            <PowerLevel />

            <AIScanner />

            {/* Random Quotes Section */}
            <section className="py-10 px-6">
              <div className="glass-card p-8 border-neon-purple/30">
                <div className="flex justify-between items-start mb-6">
                  <MessageCircle className="text-neon-purple" />
                  <Sparkles className="text-neon-yellow animate-pulse" />
                </div>
                <motion.p 
                  key={quoteIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold italic mb-8"
                >
                  "{quotes[quoteIdx]}"
                </motion.p>
                <button 
                  onClick={() => setQuoteIdx((prev) => (prev + 1) % quotes.length)}
                  className="w-full py-4 bg-neon-purple/20 border border-neon-purple/50 rounded-2xl font-black text-neon-purple hover:bg-neon-purple/30 transition-colors uppercase tracking-widest text-sm"
                >
                  SUMMON NEW WISDOM
                </button>
              </div>
            </section>

            {/* Footer / Social */}
            <footer className="mt-10 p-8 text-center border-t border-white/5">
              <div className="flex justify-center gap-6 mb-8">
                <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-2xl border border-white/10"><Share2 /></motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-2xl border border-white/10"><MessageCircle /></motion.a>
              </div>
              <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em]">
                MADE BY SURYA WITH ANTIGRAVITY
              </p>
            </footer>
          </div>
        </motion.main>
      )}

      {/* Easter Egg Popup */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowEasterEgg(false)}
          >
            <div className="text-center">
              <div className="text-9xl mb-8">🤡</div>
              <h2 className="text-4xl font-black mb-4">YOU FOUND IT!</h2>
              <p className="text-white/60 mb-8">You are now a Level 100 Erripuk. Congratulations.</p>
              <button className="px-8 py-3 bg-neon-pink text-white font-black rounded-full shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                OKAY BYE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
