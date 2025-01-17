"use client";

import { motion } from "framer-motion";

export function ColorShift() {
  return (
    <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-white mb-8">Color Shift</h2>
      <motion.div
        className="w-32 h-32 rounded-lg"
        animate={{
          backgroundColor: ["rgb(220,38,38)", "rgb(30,64,175)", "rgb(220,38,38)"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 