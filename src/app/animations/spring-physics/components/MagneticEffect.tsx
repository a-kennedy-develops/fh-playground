"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function MagneticEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    const distance = 20;
    x.set((e.clientX - centerX) / distance);
    y.set((e.clientY - centerY) / distance);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="border rounded-lg p-6 bg-white/5">
      <h2 className="text-xl font-semibold mb-4 text-white">Magnetic Effect</h2>
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center cursor-pointer"
      >
        Hover me
      </motion.div>
    </div>
  );
} 