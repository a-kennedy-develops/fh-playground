"use client";

import { motion } from "framer-motion";

export function WobbleCard() {
  return (
    <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-white mb-8">Wobble Card</h2>
      <motion.div
        className="w-32 h-48 bg-purple-500 rounded-lg cursor-pointer"
        whileHover={{
          rotate: [0, -5, 5, -5, 5, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          }
        }}
      >
        <div className="h-full flex items-center justify-center text-white">
          Hover me
        </div>
      </motion.div>
    </div>
  );
} 