"use client";

import Link from "next/link";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SpringPhysicsPage() {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const interval = setInterval(() => {
      x.set(Math.random() * 400 - 200);
    }, 2000);

    return () => clearInterval(interval);
  }, [x]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/animations"
          className="text-white/60 hover:text-white transition-colors"
        >
          ← Back to Animations
        </Link>
        <h1 className="text-2xl font-bold text-white">Spring Physics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bouncing Ball */}
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

        {/* Chain Reaction */}
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

        {/* Magnetic Effect */}
        <div className="bg-white/5 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-8">Magnetic Effect</h2>
          <motion.div
            className="w-16 h-16 bg-red-500 rounded-lg mx-auto cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            dragElastic={0.2}
          />
        </div>

        {/* Wobble Card */}
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
      </div>
    </div>
  );
} 