// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// const decorations = [
//     {
//         src: "/images/princess1.jpg",
//         alt: "Princess",
//         style: {
//             position: "absolute" as const,
//             right: "-2%",
//             bottom: "5%",
//             width: "280px",
//             height: "280px",
//             opacity: 0.18,
//         },
//         animate: { y: [0, -18, 0], rotate: [0, 3, -3, 0] },
//         duration: 7,
//     },
//     {
//         src: "/images/princess2.png",
//         alt: "Fairy Princess",
//         style: {
//             position: "absolute" as const,
//             left: "-2%",
//             top: "15%",
//             width: "240px",
//             height: "240px",
//             opacity: 0.15,
//         },
//         animate: { y: [0, -22, 0], rotate: [0, -4, 4, 0] },
//         duration: 8,
//     },
//     {
//         src: "/images/castle.png",
//         alt: "Castle",
//         style: {
//             position: "absolute" as const,
//             right: "5%",
//             top: "35%",
//             width: "320px",
//             height: "320px",
//             opacity: 0.1,
//         },
//         animate: { y: [0, -10, 0], scale: [1, 1.02, 1] },
//         duration: 10,
//     },
//     {
//         src: "/images/princess1.png",
//         alt: "Princess",
//         style: {
//             position: "absolute" as const,
//             left: "3%",
//             bottom: "30%",
//             width: "200px",
//             height: "200px",
//             opacity: 0.12,
//             transform: "scaleX(-1)",
//         },
//         animate: { y: [0, -15, 0] },
//         duration: 9,
//     },
//     {
//         src: "/images/castle.png",
//         alt: "Castle",
//         style: {
//             position: "absolute" as const,
//             left: "8%",
//             top: "60%",
//             width: "260px",
//             height: "260px",
//             opacity: 0.08,
//             transform: "scaleX(-1)",
//         },
//         animate: { y: [0, -8, 0], scale: [1, 1.03, 1] },
//         duration: 12,
//     },
//     {
//         src: "/images/princess2.png",
//         alt: "Fairy",
//         style: {
//             position: "absolute" as const,
//             right: "2%",
//             top: "70%",
//             width: "220px",
//             height: "220px",
//             opacity: 0.13,
//         },
//         animate: { y: [0, -20, 0], rotate: [0, 5, -5, 0] },
//         duration: 6,
//     },
// ];
// export default function MagicalBackground() {
//     return (
//         <div
//             className="pointer-events-none"
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 overflow: "hidden",
//                 zIndex: 1,
//             }}
//         >
//             {/* Soft radial glow spots */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "10%",
//                     width: "400px",
//                     height: "400px",
//                     background:
//                         "radial-gradient(circle, rgba(232,87,154,0.08) 0%, transparent 70%)",
//                     borderRadius: "50%",
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     bottom: "20%",
//                     right: "10%",
//                     width: "500px",
//                     height: "500px",
//                     background:
//                         "radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)",
//                     borderRadius: "50%",
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: "600px",
//                     height: "600px",
//                     background:
//                         "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
//                     borderRadius: "50%",
//                 }}
//             />
//             {/* Princess & castle decorations */}
//             {decorations.map((deco, i) => (
//                 <motion.div
//                     key={i}
//                     animate={deco.animate}
//                     transition={{
//                         duration: deco.duration,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                     style={deco.style}
//                 >
//                     <Image
//                         src={deco.src}
//                         alt={deco.alt}
//                         fill
//                         style={{ objectFit: "contain" }}
//                         sizes="320px"
//                     />
//                 </motion.div>
//             ))}
//             {/* Floating magic sparkle dots */}
//             {Array.from({ length: 20 }).map((_, i) => (
//                 <motion.div
//                     key={`sparkle-${i}`}
//                     animate={{
//                         opacity: [0, 0.7, 0],
//                         scale: [0.5, 1.2, 0.5],
//                         y: [0, -30, 0],
//                     }}
//                     transition={{
//                         duration: 3 + (i % 4),
//                         repeat: Infinity,
//                         delay: i * 0.4,
//                     }}
//                     style={{
//                         position: "absolute",
//                         left: `${5 + ((i * 47) % 90)}%`,
//                         top: `${5 + ((i * 31) % 85)}%`,
//                         width: 4 + (i % 4) * 2,
//                         height: 4 + (i % 4) * 2,
//                         borderRadius: "50%",
//                         background:
//                             i % 3 === 0
//                                 ? "rgba(212,168,67,0.6)"
//                                 : i % 3 === 1
//                                     ? "rgba(232,87,154,0.5)"
//                                     : "rgba(155,93,229,0.5)",
//                         filter: "blur(1px)",
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const decorations = [
  {
    src: "/images/princess1.png",
    alt: "Princess",
    left: "2%",
    top: "8%",
    width: 180,
    height: 180,
    duration: 6,
  },
  {
    src: "/images/princess2.png",
    alt: "Fairy Princess",
    right: "2%",
    top: "10%",
    width: 170,
    height: 170,
    duration: 7,
  },
  {
    src: "/images/castle.png",
    alt: "Castle",
    left: "3%",
    bottom: "3%",
    width: 220,
    height: 220,
    duration: 9,
  },
  {
    src: "/images/princess1.png",
    alt: "Princess",
    right: "2%",
    bottom: "3%",
    width: 190,
    height: 190,
    duration: 8,
    flip: true,
  },
];

export default function MagicalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-purple-100/10 to-yellow-100/20" />

      {/* Decorations */}
      {decorations.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: item.left,
            right: item.right,
            top: item.top,
            bottom: item.bottom,
            width: item.width,
            height: item.height,
            opacity: 0.18,
            transform: item.flip ? "scaleX(-1)" : undefined,
          }}
          className="hidden lg:block"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="220px"
          />
        </motion.div>
      ))}

      {/* Sparkles */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.3, 0.5],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            delay: index * 0.4,
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
            width: 6,
            height: 6,
            borderRadius: "9999px",
            background:
              index % 3 === 0
                ? "#FFD84D"
                : index % 3 === 1
                ? "#FF5CA8"
                : "#9B5DE5",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}