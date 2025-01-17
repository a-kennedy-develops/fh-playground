"use client";

import { motion } from "framer-motion";

export function WaveText() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-8">Wave Text</h2>
      <div className="flex justify-center space-x-1">
        {"First Horizon".split("").map((letter, i) => (
          <motion.span
            key={i}
            className="text-3xl font-bold text-red-600"
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
} 