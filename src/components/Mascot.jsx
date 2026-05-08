import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 pointer-events-none select-none">
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          rotate: [-5, 5, -5],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
      >
        {/* Glow behind mascot */}
        <div className="absolute inset-0 bg-neon-purple/30 blur-[60px] rounded-full scale-150" />
        
        <div className="text-9xl relative z-10 drop-shadow-[0_20px_50px_rgba(188,19,254,0.5)]">
          🤖
        </div>
        
        {/* Floating text bubbles */}
        <motion.div
          animate={{ x: [0, 20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -top-10 -right-20 bg-neon-pink text-black px-4 py-1 rounded-full text-xs font-black rotate-12"
        >
          ERRI-WHAT?
        </motion.div>
        
        <motion.div
          animate={{ x: [0, -20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
          className="absolute -bottom-5 -left-20 bg-neon-blue text-black px-4 py-1 rounded-full text-xs font-black -rotate-12"
        >
          PUK-PUK!
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-6 bg-black/40 rounded-[100%] mt-10 blur-md"
      />
    </div>
  );
};

export default Mascot;
