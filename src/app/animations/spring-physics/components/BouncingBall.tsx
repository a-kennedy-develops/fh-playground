"use client";

import { motion } from "framer-motion";

export function BouncingBall() {
  return (
    <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center h-[300px]">
      <h2 className="text-xl font-semibold text-white mb-8">Bouncing Ball</h2>
      <motion.div
        className="w-16 h-16 bg-blue-500 rounded-full"
        animate={{ y: [0, 120] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 