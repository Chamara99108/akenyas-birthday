"use client";

import { motion } from "framer-motion";

const sparkles = Array.from({ length: 25 }, (_, i) => ({
  left: ((i * 37) % 100),
  top: ((i * 61) % 100),
  duration: 2 + ((i * 17) % 30) / 10,
}));

export default function Sparkles() {
  return (
    <>
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
          }}
          className="
            absolute
            text-yellow-300
            text-2xl
          "
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}