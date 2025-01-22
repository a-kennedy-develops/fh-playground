'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollAnimationWrapper({ children, delay = 0 }: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInitiallyVisible = rect.top < window.innerHeight;
      
      if (isInitiallyVisible && !hasAnimated) {
        void controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay }
        });
        setHasAnimated(true);
      }
    }
  }, [controls, delay, hasAnimated]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      void controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay }
      });
      setHasAnimated(true);
    }
  }, [isInView, controls, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={controls}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
} 