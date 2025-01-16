"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function KeyframesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/animations"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to Animations
        </Link>
        <h1 className="text-2xl font-bold text-white">Keyframe Animations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pulse Effect */}
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

        {/* Spinner */}
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

        {/* Wave Text */}
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

        {/* Color Shift */}
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
      </div>
    </div>
  );
} 