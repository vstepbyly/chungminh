
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="text-center max-w-5xl px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <span className="font-sans text-purple-400/70 uppercase tracking-[0.5em] text-sm sm:text-xl font-medium mb-12 block">
          Year End Party 2025
        </span>
        
        <h1 className="font-serif italic text-8xl sm:text-[12rem] font-medium text-white mt-12 mb-20 relative leading-none text-dreamy">
          Phá Kén
          <motion.span 
            className="absolute -top-16 -right-16 text-6xl opacity-30 filter blur-[0.5px]"
            animate={{ 
              rotate: [0, 8, -8, 0], 
              y: [0, -8, 8, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            🦋
          </motion.span>
        </h1>
        
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mx-auto mb-20" />

        <p className="font-dreamy italic text-gray-200 text-2xl sm:text-4xl font-normal leading-relaxed tracking-normal mb-32 max-w-3xl mx-auto px-6 text-dreamy opacity-90">
          "2025 là một năm thử thách, chúng mình đã rời bỏ văn phòng, nhiều tự do hơn, nhưng cũng nhiều áp lực hơn. <br/><br/>
          
          2026, hy vọng <span className="text-purple-300 font-medium italic">cả hai</span> sẽ lột xác mạnh mẽ, chuyển mình ngoạn mục tựa phép màu."
        </p>

        <div className="flex flex-col gap-10 items-center text-white font-medium">
          <p className="font-serif italic text-6xl sm:text-8xl tracking-tight">01 . 01 . 2026</p>
          
          <div className="flex items-center gap-8 w-full justify-center">
            <div className="h-px w-10 bg-purple-500/40" />
            <p className="font-sans text-sm sm:text-lg tracking-[0.2em] uppercase font-normal text-purple-200/80">
              18:45 — 22:00
            </p>
            <div className="h-px w-10 bg-purple-500/40" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
