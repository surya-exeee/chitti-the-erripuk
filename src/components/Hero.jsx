import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

const Hero = () => {
  const containerRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleExplode = (e) => {
    const rect = e.target.getBoundingClientRect();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { 
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight 
      },
      colors: ['#ff00ff', '#00ffff', '#00ff00', '#ffff00'],
      shapes: ['circle', 'square'],
      scalar: 1.2
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-height-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-neon-pink/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-neon-blue/20 blur-[120px] rounded-full" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-4"
        >
          <span className="px-4 py-1 rounded-full border border-neon-blue/50 text-neon-blue text-xs font-bold tracking-widest uppercase bg-neon-blue/10">
            THE CHOSEN ONE
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">CHITTI</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue animate-glow uppercase">
            THE ERRIPUK
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-xs mb-10 font-medium"
        >
          "Certified chaos machine from another dimension"
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExplode}
          className="group relative px-8 py-4 bg-white text-black font-black text-xl rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.4)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
            ENTER THE MADNESS <Zap className="fill-current" />
          </span>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-4xl"
      >
        🤡
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 text-4xl"
      >
        🔥
      </motion.div>
    </section>
  );
};

export default Hero;
