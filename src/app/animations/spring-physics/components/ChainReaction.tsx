"use client";

import { motion } from "framer-motion";

export function ChainReaction() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-8">Chain Reaction</h2>
      <div className="flex justify-center gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-8 h-8 bg-indigo-500 rounded-full"
            animate={{ y: [-20, 20] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
} 