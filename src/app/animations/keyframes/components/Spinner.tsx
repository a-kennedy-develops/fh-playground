"use client";

import { motion } from "framer-motion";

export function Spinner() {
  return (
    <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-white mb-8">Spinner</h2>
      <motion.div
        className="w-20 h-20 border-4 border-indigo-800 border-t-red-600 rounded-full"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
} 