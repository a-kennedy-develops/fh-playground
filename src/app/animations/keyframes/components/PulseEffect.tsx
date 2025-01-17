"use client";

import { motion } from "framer-motion";

export function PulseEffect() {
  return (
    <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-white mb-8">Pulse Effect</h2>
      <motion.div
        className="w-24 h-24 bg-red-600 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 