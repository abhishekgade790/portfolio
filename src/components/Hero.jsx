"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Download, MailIcon } from "lucide-react";
import heroImage from "/image/heroImage.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const skillBadgeVariants = {
    hidden: { x: -5, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    }),
  };

  const techs = ["React", "Node.js", "JavaScript", "Tailwind CSS"];

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-neutral-950 overflow-hidden overflow-x-hidden ">
      <BackgroundBeamsWithCollision />

      <motion.div
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          variants={itemVariants}
        >
          <h1 className="text-[3em] md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-100 to-indigo-500 mb-4">
            Hi, I'm Abhi!
          </h1>

          <p className="text-base md:text-lg text-neutral-300 mb-6">
            Frontend developer crafting interactive, responsive, and visually
            engaging web experiences — driven by clean code, scalable design,
            and a passion for seamless user interfaces.
          </p>

          <motion.div
            className="flex flex-row gap-4 mb-6 justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* Download CV Button */}
            <motion.a
              href="https://abhishek-drab.vercel.app/abhishek-gade.pdf"
              download
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 ease-in-out"
            >
              <Download size={18} /> Download CV
            </motion.a>


            {/* Hire Me Button with soft glow */}
            <motion.div
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.04 }}
            >
              <a
                href="mailto:abhishekgade790@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverBorderGradient className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white rounded-full transition-all duration-100 ease-in-out hover:shadow-md hover:shadow-pink-500/30">
                  <MailIcon size={18} />
                  Contact Me
                </HoverBorderGradient>
              </a>
            </motion.div>
          </motion.div>


          {/* Tech badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
            {techs.map((tech, index) => (
              <motion.div
                key={tech}
                className="py-1 px-2 text-xs font-normal rounded-full text-indigo-200 bg-gradient-to-r from-purple-400/10 to-pink-300/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/30"
                variants={skillBadgeVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {tech}
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative md:w-2/5 flex items-center justify-center shrink-0"
          animate={{
            y: [0, -10, 0, 10, 0],
            rotate: [0, 1.5, 0, -1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600 to-transparent blur-2xl opacity-50 rounded-full z-0"></div>
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-l from-blue-500 to-transparent blur-2xl opacity-50 rounded-full z-0"></div>

          <div className="absolute inset-0 rounded-full animate-[pulseGlow_5s_ease-in-out_infinite] z-0"></div>

          <motion.div
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative z-10 w-64 h-64 min-w-64 min-h-64"
          >
            <img
              src={heroImage}
              alt="Abhi's profile"
              className="rounded-full object-cover w-full h-full border-2 border-blue-400 shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            filter: blur(25px) hue-rotate(0deg);
            opacity: 0.6;
          }
          50% {
            filter: blur(35px) hue-rotate(60deg);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
