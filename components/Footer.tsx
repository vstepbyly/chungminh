
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-64 pt-48 px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="font-serif italic text-5xl sm:text-7xl text-white mb-20 leading-[1.15] text-dreamy">
          Hẹn gặp anh tại <br/> 
          <span className="font-dreamy italic text-purple-300/80 font-medium">tổ kén của chúng mình.</span>
        </p>
        
        <div className="space-y-12">
          <p className="font-dreamy italic text-3xl sm:text-4xl text-purple-200/50 tracking-[0.02em] font-medium">
            01 . 01 . 2026 — Hà Nội
          </p>
          
          <div className="flex justify-center items-center gap-12 text-5xl opacity-40">
            <span className="filter blur-[0.5px] grayscale">🐛</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <span className="filter blur-[0.5px]">🦋</span>
          </div>
        </div>
        
        <div className="mt-48 font-inter text-[14px] sm:text-[16px] text-gray-500 tracking-[0.1em]  font-medium opacity-60">
          created with love by "công chúa của anh"
        </div>
      </motion.div>
      
      {/* Bottom fade out glow */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </footer>
  );
};
