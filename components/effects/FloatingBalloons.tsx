"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const BALLOON_COLORS = [
  "#ff5ca8", // pink
  "#9b5de5", // purple
  "#55c8ff", // blue
  "#ffd84d", // yellow
  "#ff6b6b", // coral
  "#51cf66", // green
  "#ffa94d", // orange
  "#e599f7", // lavender
];

interface Balloon {
  id: number;
  color: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayAmount: number;
  opacity: number;
}

function generateBalloons(count: number): Balloon[] {
  const balloons: Balloon[] = [];
  for (let i = 0; i < count; i++) {
    balloons.push({
      id: i,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      left: `${5 + (i * 90) / count + Math.sin(i * 1.7) * 4}%`,
      size: 28 + ((i * 17) % 32),           // 28–60px
      duration: 12 + ((i * 7) % 10),          // 12–22s
      delay: (i * 1.3) % 8,                   // staggered 0–8s
      swayAmount: 15 + ((i * 11) % 30),       // 15–45px sway
      opacity: 0.55 + ((i * 3) % 5) * 0.09,   // 0.55–0.91
    });
  }
  return balloons;
}

export default function FloatingBalloons() {
  const balloons = useMemo(() => generateBalloons(14), []);



  return (
    <div
      className="pointer-events-none"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 50,
      }}
    >
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", x: 0 }}
          animate={{
            y: "-15vh",
            x: [0, b.swayAmount, -b.swayAmount, 0],
          }}
          transition={{
            y: {
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: "linear",
            },
            x: {
              duration: b.duration / 2,
              repeat: Infinity,
              delay: b.delay,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            left: b.left,
            opacity: b.opacity,
          }}
        >
          {/* Balloon body */}
          <div
            style={{
              width: b.size,
              height: b.size * 1.25,
              background: `radial-gradient(circle at 35% 30%, ${b.color}ee, ${b.color}99)`,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
              boxShadow: `inset -${b.size / 6}px -${b.size / 6}px ${b.size / 3}px rgba(0,0,0,0.12), 
                          inset ${b.size / 8}px ${b.size / 8}px ${b.size / 4}px rgba(255,255,255,0.35)`,
              position: "relative",
            }}
          >
            {/* Shine highlight */}
            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "22%",
                width: "28%",
                height: "22%",
                background: "rgba(255,255,255,0.55)",
                borderRadius: "50%",
                filter: "blur(2px)",
              }}
            />
          </div>

          {/* Knot */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${b.size / 8}px solid transparent`,
              borderRight: `${b.size / 8}px solid transparent`,
              borderTop: `${b.size / 5}px solid ${b.color}`,
              margin: "0 auto",
            }}
          />


          {/* String */}
          <div
            style={{
              width: 1.5,
              height: b.size * 1.2,
              background: `linear-gradient(to bottom, ${b.color}88, ${b.color}22)`,
              margin: "0 auto",
              borderRadius: 1,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

