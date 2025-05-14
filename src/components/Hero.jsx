"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Download, MailIcon } from "lucide-react";

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
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
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
    <div className="relative w-full h-screen flex items-center justify-center bg-neutral-950 overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm Abhi!
          </h1>
          <p className="text-base md:text-lg text-neutral-300 mb-6">
            Frontend developer crafting interactive, responsive, and visually
            engaging web experiences — driven by clean code, scalable design,
            and a passion for seamless user interfaces.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row gap-4 mb-6 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a
              href="/Abhishek-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
            >
              <Download size={18} /> Download CV
            </a>
            <HoverBorderGradient className="inline-flex items-center gap-2 px-6 py-3 text-white">
              <MailIcon size={18} /> Hire Me
            </HoverBorderGradient>
          </motion.div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
            {techs.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-1 bg-white/10 text-white text-sm rounded-full backdrop-blur-md"
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
          className="w-2/3 md:w-1/2 lg:w-1/3"
          variants={itemVariants}
        >
          <img
            src="../assets/hero-image.png"
            alt="Hero"
            className="w-full h-auto rounded-xl shadow-2xl object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
