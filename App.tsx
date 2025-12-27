
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Agenda } from './components/Agenda';
import { Footer } from './components/Footer';
import { FloatingButterflies } from './components/FloatingButterflies';
import { motion, AnimatePresence } from 'framer-motion';

// Exported the App component as default to resolve the missing default export error in index.tsx
const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-purple-900/50 selection:text-purple-200">
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-15%] left-[-5%] w-[60%] h-[60%] glow-purple pointer-events-none" />
      <div className="fixed bottom-[-15%] right-[-5%] w-[60%] h-[60%] glow-purple pointer-events-none opacity-40" />
      <div className="fixed top-[30%] left-[20%] w-[30%] h-[30%] glow-soft pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            key="pre-entrance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 text-center px-4"
          >
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="font-dreamy italic text-2xl sm:text-3xl text-purple-300/60 mb-10 tracking-[0.05em] font-medium text-dreamy"
            >
              Mời Bạn đồng hành của em
            </motion.p>
            
            <motion.h1 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              className="font-serif italic text-8xl md:text-[11rem] font-medium text-white mb-24 tracking-tighter leading-none text-dreamy"
            >
              Phá kén
            </motion.h1>

            <motion.button
              onClick={() => setHasStarted(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-14 py-4 overflow-hidden rounded-full transition-all duration-700"
            >
              <div className="absolute inset-0 border border-purple-400/20 rounded-full group-hover:border-purple-400/50 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
              <span className="relative font-dreamy italic text-xl sm:text-2xl text-purple-200/70 group-hover:text-white tracking-[0.1em] transition-all duration-500 font-medium">
                Chạm để bắt đầu
              </span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full relative z-20 flex flex-col"
          >
            {/* Back Button - Visible but subtle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, x: -3 }}
              onClick={() => setHasStarted(false)}
              className="fixed top-10 left-10 z-50 flex items-center gap-3 text-purple-200 uppercase tracking-[0.1em] text-[11px] group"
            >
              <span className="text-xl transition-transform group-hover:-translate-x-1 font-dreamy">←</span>
              <span className="font-sans font-normal">Quay lại</span>
            </motion.button>

            <FloatingButterflies />
            
            <section className="min-h-[110vh] flex items-center justify-center pt-20">
              <Hero />
            </section>

            <section className="w-full max-w-5xl mx-auto px-6 py-40">
              <Agenda />
            </section>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
