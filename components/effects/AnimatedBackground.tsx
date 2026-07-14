"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    size: "w-96 h-96",
    color: "bg-pink-300/40",
    top: "top-0",
    left: "-left-20",
    duration: 12,
  },
  {
    size: "w-[450px] h-[450px]",
    color: "bg-sky-300/40",
    top: "bottom-0",
    left: "right-0",
    duration: 16,
  },
  {
    size: "w-80 h-80",
    color: "bg-yellow-300/40",
    top: "top-1/3",
    left: "left-1/2",
    duration: 20,
  },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${blob.size} ${blob.color} ${blob.top} ${blob.left} rounded-full blur-3xl`}
        />
      ))}
    </div>
  );
}