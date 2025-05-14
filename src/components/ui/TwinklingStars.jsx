"use client";
import React from "react";
import { motion } from "framer-motion";

export const TwinklingStars = () => {
  const stars = new Array(100).fill(0);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const opacity = Math.random() * 0.5 + 0.3;
        const duration = Math.random() * 6 + 4;

        return (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              opacity,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, Math.random() * 3, 0],
              x: [0, Math.random() * 3, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};
