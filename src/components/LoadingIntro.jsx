import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Initializing Brain Cells (Searching...)",
  "Downloading Erripuk Energy...",
  "Calibrating Chaos Levels...",
  "Summoning the Meme Gods...",
  "Checking if you are worthy...",
  "Error: Too much logic found. Deleting logic...",
  "Almost ready for the madness!",
];

const LoadingIntro = ({ onComplete }) => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 400);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-base flex flex-col items-center justify-center p-6 text-center"
      exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24 border-4 border-t-neon-pink border-r-neon-blue border-b-neon-green border-l-neon-yellow rounded-full mb-8 shadow-[0_0_30px_rgba(255,0,255,0.5)]"
      />
      
      <AnimatePresence mode="wait">
        <motion.p
          key={currentMsg}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-xl font-bold text-white mb-8 h-8"
        >
          {messages[currentMsg]}
        </motion.p>
      </AnimatePresence>

      <div className="w-full max-w-xs h-3 bg-white/10 rounded-full overflow-hidden border border-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-12 text-sm uppercase tracking-[0.2em] text-white/40"
      >
        Chitti is Loading...
      </motion.div>
    </motion.div>
  );
};

export default LoadingIntro;
