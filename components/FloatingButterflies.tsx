
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BUTTERFLY_COUNT = 12;
const PARTICLE_COUNT = 20;

export const FloatingButterflies: React.FC = () => {
  const butterflies = useMemo(() => {
    return Array.from({ length: BUTTERFLY_COUNT }).map((_, i) => ({
      id: `butterfly-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 25 + 25,
      delay: Math.random() * -20,
      blur: Math.random() * 4 + 2, // Varied blur for depth
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cocoon Dust / Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y: [`${p.y}vh`, `${(p.y - 20) % 100}vh`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute bg-purple-200/40 rounded-full filter blur-[2px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}

      {/* Blurred Dreamy Butterflies */}
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          initial={{ x: `${b.x}vw`, y: `${b.y}vh`, opacity: 0 }}
          animate={{
            x: [`${b.x}vw`, `${(b.x + 15) % 100}vw`, `${b.x}vw`],
            y: [`${b.y}vh`, `${(b.y - 20) % 100}vh`, `${b.y}vh`],
            opacity: [0, 0.25, 0.4, 0.2, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
          className="absolute flex items-center justify-center"
          style={{ 
            fontSize: b.size,
            filter: `blur(${b.blur}px)`,
            willChange: 'transform, opacity'
          }}
        >
          <motion.span
             animate={{ 
               skewX: [0, 15, -15, 0],
               scaleX: [1, 0.8, 1] 
             }}
             transition={{ 
               duration: 2, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="text-purple-300/40 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            🦋
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
