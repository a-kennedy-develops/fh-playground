'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
}

export function ScrollAnimationWrapper({ 
  children, 
  delay = 0,
  amount = 100 
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: amount }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, 
        amount: 0.3,  // Trigger when 30% of the element is in view
        margin: "50px 0px" // Add margin to trigger slightly before element comes into view
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay 
      }}
    >
      {children}
    </motion.div>
  );
} 