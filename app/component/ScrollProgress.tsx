"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[100] h-1.5 origin-left bg-gradient-to-r from-[#b53d54] via-[#f2cbd4] to-[#f9dcc4] shadow-[0_0_15px_rgba(181,61,84,0.5)]"
    />
  );
}
